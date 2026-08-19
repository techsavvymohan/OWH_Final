const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');
const publicDir = path.join(rootDir, 'public');
const hostingerDir = path.join(rootDir, 'hostinger_public_html');

console.log('====================================================');
console.log('🚀 OnlyWayOnline — Production Static Build (Hostinger)');
console.log('====================================================\n');

// 1. Run standard production next build
console.log('✓ [1/4] Running Next.js production build & static export...');
execSync('npx next build', { cwd: rootDir, stdio: 'inherit' });

// 2. Helper to copy directories recursively
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

// 3. Ensure .htaccess and all public assets are in out/
console.log('✓ [2/4] Ensuring .htaccess and public assets in static export...');
const htaccessSrc = path.join(publicDir, '.htaccess');
const htaccessDst = path.join(outDir, '.htaccess');
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDst);
}

// Sync public directory into out/
if (fs.existsSync(publicDir)) {
  copyAll(publicDir, outDir);
}

// 4. Sync out/ to hostinger_public_html/ and repository root
console.log('✓ [3/4] Deploying static export to hostinger_public_html and repository root...');
if (fs.existsSync(hostingerDir)) {
  fs.rmSync(hostingerDir, { recursive: true, force: true });
}
copyAll(outDir, hostingerDir);

// Clean up old _next in root and copy new _next
const rootNextDir = path.join(rootDir, '_next');
if (fs.existsSync(rootNextDir)) {
  fs.rmSync(rootNextDir, { recursive: true, force: true });
}

// Copy out/ contents to root for Hostinger Git direct compatibility
const rootItems = fs.readdirSync(outDir, { withFileTypes: true });
for (const item of rootItems) {
  const src = path.join(outDir, item.name);
  const dst = path.join(rootDir, item.name);
  if (item.isDirectory()) {
    if (fs.existsSync(dst)) {
      fs.rmSync(dst, { recursive: true, force: true });
    }
    copyAll(src, dst);
  } else {
    fs.copyFileSync(src, dst);
  }
}

// 5. Create zip archive
console.log('✓ [4/4] Creating hostinger_deploy.zip archive...');
const zipFile = path.join(rootDir, 'hostinger_deploy.zip');
if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

const archiver = require('archiver');
const output = fs.createWriteStream(zipFile);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function() {
  const sizeMb = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`\n📦 Created Hostinger 1-Click Upload Archive: ${zipFile} (${sizeMb} MB)`);
  console.log('\n====================================================');
  console.log('🎉 100% PRODUCTION BUILD & STATIC EXPORT COMPLETE!');
  console.log('====================================================\n');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);
archive.directory(outDir, false);
archive.finalize();
