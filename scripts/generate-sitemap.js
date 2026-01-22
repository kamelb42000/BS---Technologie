// scripts/generate-sitemap.js  (ESM - compatible avec "type": "module")
import fs from 'fs';
import path from 'path';

const base = 'https://www.bs-technologie.fr';
const today = new Date().toISOString().slice(0,10);

const routes = [
  '/', '/about', '/services',
  '/sol-saas', '/sol-cloud', '/sol-security', '/sol-audit', '/sol-ia',
  '/legal-notice', '/privacy', '/terms'
];

const urls = routes.map(r => `
  <url>
    <loc>${new URL(r, base).toString()}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml.trim() + '\n', { encoding: 'utf8' });
console.log('sitemap written to', outPath);
