// prerender.mjs
import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import puppeteer from 'puppeteer';
import { setTimeout as delay } from 'timers/promises';

const dist = path.resolve('dist');
const port = 5174;

// --- tiny static server serving /dist with SPA fallback ---
const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  let reqPath = parsed.pathname || '/';
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  const filePath = path.join(dist, reqPath);

  const send = (p) => {
    fs.readFile(p, (err, data) => {
      if (err) {
        res.statusCode = 404;
        return res.end('Not found');
      }
      const ext = path.extname(p).toLowerCase();
      const types = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.json': 'application/json',
        '.ico': 'image/x-icon',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
        '.woff2': 'font/woff2',
      };
      res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
      res.end(data);
    });
  };

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return send(path.join(dist, 'index.html')); // SPA fallback
    send(filePath);
  });
});

await new Promise((r) => server.listen(port, r));

// --- ROUTES TO PRERENDER (OptiValueTek) ---
const routes = [
  '/',                    // Home (has sections)
  '/solutions',
  '/industries',
  '/insights',
  '/careers',
  '/investor-corner',
  '/contact',

  // Services
  '/services/application-integration',
  '/services/api-management',
  '/services/data-engineering',
  '/services/cloud-solutions',
  '/services/devops-sre',
  '/services/ai-mlops',
  '/services/enterprise-solutions',
  '/services/web-mobile-dev',
];

// --- Puppeteer prerender ---
const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();

// Helpful for consistent layout shifts during render
await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 1 });

for (const route of routes) {
  const target = `http://localhost:${port}${route}`;
  console.log('Prerendering', target);

  try {
    // Let SPA load; wait for network to settle
    await page.goto(target, { waitUntil: 'networkidle0', timeout: 60000 });
  } catch (e) {
    // Sometimes networkidle0 can be strict on CDNs; try a softer wait
    console.warn('goto timeout, soft-waiting...', e?.message || e);
    await delay(2000);
  }

  // Wait for Helmet to set the title (react-helmet-async)
  try {
    await page.waitForFunction(
      () => !!document.title && document.title.trim().length > 0,
      { timeout: 10000 }
    );
  } catch {
    // not fatal; continue
  }

  // Give any lazy head/meta updates a tick
  await delay(500);

  // Grab final HTML
  const html = await page.content();

  // Write to correct folder structure: /path/index.html
  const outDir = path.join(dist, route === '/' ? '' : route);
  await fs.promises.mkdir(outDir, { recursive: true });
  await fs.promises.writeFile(path.join(outDir, 'index.html'), html, 'utf8');

  console.log('✓ Saved', path.join(outDir, 'index.html'));
}

await browser.close();
server.close();
console.log('Prerender complete.');
