// Renders public/og.png (1200×630) for link previews. Run: npm run og
import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';

const ISO_X = [Math.cos(Math.PI / 6), Math.sin(Math.PI / 6)];
const ISO_Y = [-Math.cos(Math.PI / 6), Math.sin(Math.PI / 6)];
const iso = (x, y, z, ox, oy) => [ox + x * ISO_X[0] + y * ISO_Y[0], oy + x * ISO_X[1] + y * ISO_Y[1] - z];
const poly = (pts) => pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
function slab(w, d, h, z, ox, oy) {
  const x0 = -w / 2, y0 = -d / 2;
  const top = [iso(x0, y0, z + h, ox, oy), iso(x0 + w, y0, z + h, ox, oy), iso(x0 + w, y0 + d, z + h, ox, oy), iso(x0, y0 + d, z + h, ox, oy)];
  const left = [iso(x0, y0 + d, z + h, ox, oy), iso(x0 + w, y0 + d, z + h, ox, oy), iso(x0 + w, y0 + d, z, ox, oy), iso(x0, y0 + d, z, ox, oy)];
  const right = [iso(x0 + w, y0, z + h, ox, oy), iso(x0 + w, y0 + d, z + h, ox, oy), iso(x0 + w, y0 + d, z, ox, oy), iso(x0 + w, y0, z, ox, oy)];
  return `<polygon points="${poly(left)}" fill="#1a3350" stroke="#a6c7e8"/><polygon points="${poly(right)}" fill="#162c46" stroke="#a6c7e8"/><polygon points="${poly(top)}" fill="#11223a" stroke="#a6c7e8"/>`;
}
const OX = 260, OY = 400;
let drawing = slab(236, 236, 22, 0, OX, OY);
for (let i = 0; i < 4; i++) drawing += slab(176, 176, 26, 22 + 26 * i + (i + 1) * 30, OX, OY);

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500..800&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>
  body{margin:0;width:1200px;height:630px;background:#0c1a2a;color:#e9eef4;font-family:'IBM Plex Mono',monospace;overflow:hidden;position:relative;
    background-image:linear-gradient(rgba(166,199,232,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(166,199,232,.12) 1px,transparent 1px),linear-gradient(rgba(166,199,232,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(166,199,232,.06) 1px,transparent 1px);
    background-size:96px 96px,96px 96px,24px 24px,24px 24px}
  .copy{position:absolute;left:72px;top:96px;width:620px}
  .eyebrow{font-size:18px;letter-spacing:.08em;text-transform:uppercase;color:#93a6ba;margin:0 0 22px}
  h1{font-family:'Archivo',sans-serif;font-variation-settings:'wdth' 118;font-weight:780;font-size:132px;line-height:.9;letter-spacing:-.025em;margin:0}
  h1 span{display:block}h1 span+span{color:#e9924a}
  .tag{font-family:'Archivo',sans-serif;font-weight:600;font-size:30px;line-height:1.3;margin:28px 0 0;max-width:560px;color:#e9eef4}
  .url{position:absolute;left:72px;bottom:44px;font-size:20px;letter-spacing:.08em;color:#93a6ba}
  svg{position:absolute;right:40px;top:40px;width:560px;height:560px}
</style></head><body>
<div class="copy"><p class="eyebrow">Lead Staff Software Engineer · FMG Suite</p>
<h1><span>Brendon</span><span>Otto</span></h1>
<p class="tag">I take large systems apart, make them make sense, and help teams ship faster on top of them.</p></div>
<p class="url">brendonotto.com</p>
<svg viewBox="0 0 520 560" stroke-width="1" stroke-linejoin="round">${drawing}</svg>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const png = await page.screenshot({ type: 'png' });
await writeFile('public/og.png', png);
await browser.close();
console.log('wrote public/og.png');
