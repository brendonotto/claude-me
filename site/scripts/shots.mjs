// Screenshots of the built site for review. Usage: node scripts/shots.mjs <outDir>
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const outDir = process.argv[2] ?? 'shots';
const dist = path.resolve('dist');
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try {
    const data = await readFile(path.join(dist, p));
    res.setHeader('Content-Type', p.endsWith('.svg') ? 'image/svg+xml' : p.endsWith('.html') ? 'text/html' : 'application/octet-stream');
    res.end(data);
  } catch {
    res.statusCode = 404;
    res.end('nope');
  }
});
await new Promise((r) => server.listen(0, r));
const url = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch();
const shots = [
  { name: 'desktop-light', width: 1280, scheme: 'light', scale: 1 },
  { name: 'desktop-dark', width: 1280, scheme: 'dark', scale: 1 },
  { name: 'phone-light', width: 390, scheme: 'light', scale: 1 },
  { name: 'phone-dark', width: 390, scheme: 'dark', scale: 1 },
];
for (const s of shots) {
  const ctx = await browser.newContext({ viewport: { width: s.width, height: 900 }, colorScheme: s.scheme, deviceScaleFactor: s.scale });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(2800); // let the exploded view finish
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  await page.screenshot({ path: path.join(outDir, `${s.name}.png`), fullPage: true });
  console.log(`${s.name}: overflow=${overflow}px errors=${errors.length ? errors.join(' | ') : 'none'}`);
  await ctx.close();
}
// hero-only crop at 2x for the user
const ctx = await browser.newContext({ viewport: { width: 1280, height: 820 }, colorScheme: 'light', deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(2800);
await page.screenshot({ path: path.join(outDir, 'hero-light@2x.png') });
await ctx.close();
await browser.close();
server.close();
