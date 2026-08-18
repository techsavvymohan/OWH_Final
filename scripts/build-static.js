const { spawn, execSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3099;
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');
const publicDir = path.join(rootDir, 'public');
const tempExportDir = path.join(os.tmpdir(), 'onlywayonline_static_export_buffer');
const nextBin = path.join(rootDir, 'node_modules', 'next', 'dist', 'bin', 'next');

console.log('====================================================');
console.log('🚀 OnlyWayOnline — Static Export Generator (Hostinger)');
console.log('====================================================\n');

// 1. Prepare temp export directory
if (fs.existsSync(tempExportDir)) {
  fs.rmSync(tempExportDir, { recursive: true, force: true });
}
fs.mkdirSync(tempExportDir, { recursive: true });

function copyAll(src, dst) {
  if (!fs.existsSync(dst)) {
    fs.mkdirSync(dst, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.gitignore' || entry.name === '.DS_Store') continue;
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      copyAll(srcPath, dstPath);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

// Copy public assets into temp export directory
if (fs.existsSync(publicDir)) {
  copyAll(publicDir, tempExportDir);
  console.log('✓ [1/5] Prepared public assets & .htaccess in isolated export buffer');
}

function fetchUrl(urlPath, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      return reject(new Error('Too many redirects fetching ' + urlPath));
    }
    const req = http.get({
      hostname: '127.0.0.1',
      port: PORT,
      path: urlPath,
      headers: { 'User-Agent': 'Static-Exporter/1.0' }
    }, (res) => {
      // Follow redirects automatically
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, redirectCount + 1).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve({ statusCode: res.statusCode, headers: res.headers, body: buffer });
      });
    });
    req.on('error', reject);
    req.setTimeout(25000, () => {
      req.destroy();
      reject(new Error('Timeout fetching ' + urlPath));
    });
  });
}

async function fetchWithRetry(urlPath, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetchUrl(urlPath);
      if (res.statusCode === 200) return res;
    } catch (e) {}
    await new Promise(r => setTimeout(r, 1500));
  }
  return await fetchUrl(urlPath);
}

async function waitForServer(maxAttempts = 60) {
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
  console.log('✓ [2/5] Starting Next.js renderer on port ' + PORT + '...');
  const nextProcess = spawn(process.execPath, [nextBin, 'dev', '-p', String(PORT)], {
    cwd: rootDir,
    stdio: 'pipe',
    env: { ...process.env, PORT: String(PORT), CUSTOM_EXPORT: 'true' }
  });

  nextProcess.stdout.on('data', d => {
    const s = d.toString();
    if (s.includes('Ready in') || s.includes('compiled') || s.includes('Local:')) {
      console.log('   ' + s.trim().split('\n')[0]);
    }
  });

  nextProcess.stderr.on('data', d => {
    // drain stderr buffer
  });

  const ready = await waitForServer();
  if (!ready) {
    console.error('❌ Server failed to start on port ' + PORT);
    try { nextProcess.kill(); } catch {}
    process.exit(1);
  }
  console.log('✓ Next.js renderer is live and responsive.\n');

  console.log('✓ [3/5] Prerendering static pages and downloading client bundles...');
  const routes = [
    { url: '/', fileParts: ['index.html'] },
    { url: '/work/', fileParts: ['work', 'index.html'] },
    { url: '/robots.txt', fileParts: ['robots.txt'] },
    { url: '/sitemap.xml', fileParts: ['sitemap.xml'] },
    { url: '/manifest.webmanifest', fileParts: ['manifest.webmanifest'] },
    { url: '/llms.txt', fileParts: ['llms.txt'] },
  ];

  const downloadedAssets = new Set();

  for (const r of routes) {
    const res = await fetchWithRetry(r.url);
    if (res.statusCode === 200) {
      const destPath = path.join(tempExportDir, ...r.fileParts);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, res.body);
      console.log('   ✅ Saved ' + r.fileParts.join('/') + ' (' + res.body.length + ' bytes)');

      if (r.fileParts[r.fileParts.length - 1].endsWith('.html')) {
        const html = res.body.toString('utf8');
        const assetRegex = /["'](\/_next\/[^"'\s>]+)["']/g;
        let match;
        while ((match = assetRegex.exec(html)) !== null) {
          const assetUrl = match[1];
          if (!downloadedAssets.has(assetUrl) && !assetUrl.includes('webpack-hmr') && !assetUrl.includes('turbopack-hmr')) {
            downloadedAssets.add(assetUrl);
          }
        }
      }
    } else {
      console.warn('   ⚠️ Warning: ' + r.url + ' returned ' + res.statusCode);
    }
  }

  // 404 page
  try {
    const notFoundRes = await fetchWithRetry('/_not-found-page-route');
    const dest404 = path.join(tempExportDir, '404.html');
    const dest404Index = path.join(tempExportDir, '404', 'index.html');
    fs.mkdirSync(path.dirname(dest404Index), { recursive: true });
    fs.writeFileSync(dest404, notFoundRes.body);
    fs.writeFileSync(dest404Index, notFoundRes.body);
    console.log('   ✅ Saved 404.html (' + notFoundRes.body.length + ' bytes)');
  } catch (err) {
    console.warn('   ⚠️ Warning 404 page:', err.message);
  }

  // Download all client chunks recursively into tempExportDir
  let assetCount = 0;
  const processedAssets = new Set();
  const assetQueue = Array.from(downloadedAssets);

  while (assetQueue.length > 0) {
    const assetPath = assetQueue.shift();
    if (processedAssets.has(assetPath)) continue;
    processedAssets.add(assetPath);

    try {
      const assetRes = await fetchWithRetry(assetPath);
      if (assetRes.statusCode === 200) {
        const cleanPath = assetPath.split('?')[0].replace(/^\//, '');
        const dest = path.join(tempExportDir, ...cleanPath.split('/'));
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, assetRes.body);
        assetCount++;

        // Inspect JS / CSS files for additional nested chunk references
        if (cleanPath.endsWith('.js') || cleanPath.endsWith('.css')) {
          const content = assetRes.body.toString('utf8');
          const nestedRegex = /["'](\/_next\/static\/[^"'\s>]+)["']/g;
          let nestedMatch;
          while ((nestedMatch = nestedRegex.exec(content)) !== null) {
            const nestedUrl = nestedMatch[1];
            if (!processedAssets.has(nestedUrl) && !nestedUrl.includes('hmr')) {
              assetQueue.push(nestedUrl);
            }
          }
        }
      }
    } catch (err) {
      // ignore optional chunks
    }
  }
  console.log('   ✅ Saved ' + assetCount + ' client bundles into _next/static/\n');

  // Terminate Next.js server & wait for process cleanup
  console.log('✓ [4/5] Terminating Next.js renderer...');
  await new Promise((resolve) => {
    nextProcess.on('exit', () => resolve());
    try {
      if (process.platform === 'win32') {
        execSync('taskkill /PID ' + nextProcess.pid + ' /T /F', { stdio: 'ignore' });
      } else {
        nextProcess.kill('SIGKILL');
      }
    } catch {}
    setTimeout(resolve, 2500);
  });
  console.log('✓ Renderer terminated.\n');

  // Deploy to out/ and hostinger_public_html directories
  const hostingerDir = path.join(rootDir, 'hostinger_public_html');
  const artifactDir = 'C:\\Users\\Zarvis\\.gemini\\antigravity-ide\\brain\\e4c99a23-cd22-48d9-b989-4d2942ae3d15';

  console.log('✓ [5/5] Deploying static export...');
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 500 });
  }
  if (fs.existsSync(hostingerDir)) {
    fs.rmSync(hostingerDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 500 });
  }

  copyAll(tempExportDir, outDir);
  copyAll(tempExportDir, hostingerDir);
  console.log('✓ All static files written to out/ and hostinger_public_html/\n');

  // Safety & Security Audit on out/
  console.log('🔒 Running Pre-Deployment Security & Integrity Audit...');
  function auditDir(dir) {
    let list = [];
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        list = list.concat(auditDir(full));
      } else {
        list.push({ path: full, rel: path.relative(dir, full).replace(/\\/g, '/'), size: stat.size });
      }
    }
    return list;
  }

  const allFiles = auditDir(hostingerDir);
  const totalSizeBytes = allFiles.reduce((acc, f) => acc + f.size, 0);
  const totalSizeMB = (totalSizeBytes / (1024 * 1024)).toFixed(2);

  // Check for forbidden secret / dev files
  const forbiddenPatterns = [
    /^\.env/i,
    /^\.git/i,
    /\.tsbuildinfo$/i,
    /\.secret/i,
    /\.pem$/i,
    /\.key$/i
  ];
  const leakedFiles = allFiles.filter(f => {
    const filename = path.basename(f.rel);
    return forbiddenPatterns.some(p => p.test(filename));
  });

  if (leakedFiles.length > 0) {
    console.error('❌ SECURITY ALERT: Forbidden files found in output:', leakedFiles.map(f => f.rel));
    process.exit(1);
  }
  console.log('   ✅ 0 sensitive files (.env / .git / secrets / credentials) in export');

  // Verification
  console.log('\n✓ Verifying production checklist in hostinger_public_html/...');
  const requiredFiles = [
    ['index.html'],
    ['work', 'index.html'],
    ['404.html'],
    ['.htaccess'],
    ['llms.txt'],
    ['robots.txt'],
    ['sitemap.xml'],
    ['manifest.webmanifest']
  ];

  let allPassed = true;
  requiredFiles.forEach(parts => {
    const filePath = path.join(hostingerDir, ...parts);
    const exists = fs.existsSync(filePath);
    const status = exists ? '✅ PASS' : '❌ MISSING';
    console.log('   ' + status + ' — ' + parts.join('/'));
    if (!exists) allPassed = false;
  });

  if (!allPassed) {
    console.error('\n❌ Static export verification failed. Missing files.');
    process.exit(1);
  }

  // Create ZIP bundle for easy 1-click Hostinger File Manager upload
  const zipPathRoot = path.join(rootDir, 'hostinger_deploy.zip');
  const zipPathArtifact = path.join(artifactDir, 'hostinger_deploy.zip');

  try {
    if (fs.existsSync(zipPathRoot)) fs.unlinkSync(zipPathRoot);
    if (fs.existsSync(zipPathArtifact)) fs.unlinkSync(zipPathArtifact);

    if (process.platform === 'win32') {
      execSync(`powershell -Command "Compress-Archive -Path '${tempExportDir}\\*' -DestinationPath '${zipPathRoot}' -Force"`, { stdio: 'ignore' });
      if (fs.existsSync(zipPathRoot)) {
        if (fs.existsSync(artifactDir)) {
          fs.copyFileSync(zipPathRoot, zipPathArtifact);
        }
        const zipSizeMB = (fs.statSync(zipPathRoot).size / (1024 * 1024)).toFixed(2);
        console.log('\n📦 Created Hostinger 1-Click Upload Archive: (' + zipSizeMB + ' MB)');
        console.log('   - Root Package:     ' + zipPathRoot);
        if (fs.existsSync(zipPathArtifact)) {
          console.log('   - Artifact Package: ' + zipPathArtifact);
        }
      }
    }
  } catch (err) {
    console.warn('Zip creation note:', err.message);
  }

  console.log('\n====================================================');
  console.log('🎉 100% STATIC HOSTINGER EXPORT READY & VERIFIED!');
  console.log('====================================================');
  console.log(`📁 Files Count:  ${allFiles.length} files`);
  console.log(`💾 Total Size:   ${totalSizeMB} MB`);
  console.log(`📍 Export Path:  ${outDir}\n`);
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
