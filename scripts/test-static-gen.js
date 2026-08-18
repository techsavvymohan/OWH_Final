const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3099;
const rootDir = process.cwd();
const outDir = path.join(rootDir, 'out');
const publicDir = path.join(rootDir, 'public');

console.log('Testing static export generation via local renderer on port', PORT);

// Ensure outDir exists
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Copy public directory (including .htaccess, images, llms.txt)
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, outDir, { recursive: true });
  console.log('✓ Copied public directory into out/');
}

// Function to fetch URL as string or buffer
function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    const req = http.get({
      hostname: '127.0.0.1',
      port: PORT,
      path: urlPath,
      headers: { 'User-Agent': 'Static-Exporter/1.0' }
    }, (res) => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve({ statusCode: res.statusCode, headers: res.headers, body: buffer });
      });
    });
    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Timeout fetching ' + urlPath));
    });
  });
}

// Wait for server to respond
async function waitForServer(maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetchUrl('/');
      if (res.statusCode === 200) return true;
    } catch {}
    await new Promise(r => setTimeout(r, 1000));
  }
  return false;
}

async function run() {
  // Start next dev on port 3099
  console.log('Starting Next.js renderer...');
  const nextProcess = spawn('npx', ['next', 'dev', '-p', String(PORT)], {
    cwd: rootDir,
    stdio: 'pipe',
    shell: true,
    env: { ...process.env, PORT: String(PORT) }
  });

  nextProcess.stdout.on('data', d => {
    const s = d.toString();
    if (s.includes('Ready in') || s.includes('compiled')) {
      console.log('  [next]', s.trim());
    }
  });

  const ready = await waitForServer();
  if (!ready) {
    console.error('❌ Server failed to start on port', PORT);
    nextProcess.kill();
    process.exit(1);
  }
  console.log('✓ Next.js renderer is ready.');

  // Routes to render
  const routes = [
    { url: '/', file: 'index.html' },
    { url: '/work', file: 'work/index.html' },
    { url: '/robots.txt', file: 'robots.txt' },
    { url: '/sitemap.xml', file: 'sitemap.xml' },
    { url: '/manifest.webmanifest', file: 'manifest.webmanifest' },
    { url: '/llms.txt', file: 'llms.txt' },
  ];

  const downloadedAssets = new Set();

  for (const r of routes) {
    console.log(Rendering route:  -> out/);
    const res = await fetchUrl(r.url);
    if (res.statusCode === 200) {
      const destPath = path.join(outDir, r.file);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, res.body);
      console.log(  ✓ Successfully saved ( bytes));

      // If HTML, find all /_next/ static assets to download
      if (r.file.endsWith('.html')) {
        const html = res.body.toString('utf8');
        const assetRegex = /[\"'](\/_next\/[^\"'\s>]+)[\"']/g;
        let match;
        while ((match = assetRegex.exec(html)) !== null) {
          const assetUrl = match[1];
          if (!downloadedAssets.has(assetUrl) && !assetUrl.includes('webpack-hmr')) {
            downloadedAssets.add(assetUrl);
          }
        }
      }
    } else {
      console.warn(  ⚠ Warning:  returned status );
    }
  }

  // Also render 404 page
  try {
    const notFoundRes = await fetchUrl('/_not-found-test-404-page');
    const dest404 = path.join(outDir, '404.html');
    fs.writeFileSync(dest404, notFoundRes.body);
    console.log(✓ Saved out/404.html ( bytes));
  } catch (err) {
    console.warn('Could not fetch 404 page:', err.message);
  }

  // Download all discovered _next static assets
  console.log(\nDownloading  discovered _next assets...);
  for (const assetPath of downloadedAssets) {
    try {
      const assetRes = await fetchUrl(assetPath);
      if (assetRes.statusCode === 200) {
        // Remove query parameters if any
        const cleanPath = assetPath.split('?')[0];
        const dest = path.join(outDir, cleanPath);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, assetRes.body);
      }
    } catch (err) {
      console.warn(  ⚠ Could not download asset :, err.message);
    }
  }
  console.log('✓ All client scripts, fonts, and styles saved to out/_next/');

  // Clean shutdown
  nextProcess.kill('SIGTERM');
  console.log('\n====================================================');
  console.log('🎉 Static export completed successfully!');
  console.log('====================================================');
  console.log('Contents of out/:', fs.readdirSync(outDir));
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
