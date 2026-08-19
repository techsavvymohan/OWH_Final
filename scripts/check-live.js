const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data }));
    }).on('error', reject);
  });
}

async function check() {
  const home = await fetchUrl('https://onlywayonline.com/');
  console.log('Homepage Status:', home.status, 'HTML length:', home.data.length);
  
  const scriptRegex = /<script[^>]+src="([^"]+)"/g;
  const linkRegex = /<link[^>]+href="([^"]+)"/g;
  
  let match;
  const assets = new Set();
  
  while ((match = scriptRegex.exec(home.data)) !== null) {
    assets.add(match[1]);
  }
  while ((match = linkRegex.exec(home.data)) !== null) {
    assets.add(match[1]);
  }

  console.log('\n--- Checking Assets (CSS / JS / Images) ---');
  for (const asset of assets) {
    const fullUrl = asset.startsWith('http') ? asset : `https://onlywayonline.com${asset.startsWith('/') ? '' : '/'}${asset}`;
    try {
      const res = await fetchUrl(fullUrl);
      const pass = res.status === 200 ? '✅' : '❌';
      console.log(`${pass} [${res.status}] ${asset} (${res.data.length} bytes, type: ${res.headers['content-type']})`);
    } catch (e) {
      console.log(`❌ [ERR] ${asset}: ${e.message}`);
    }
  }
}

check();
