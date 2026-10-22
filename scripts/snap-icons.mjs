import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\c524ada4-78df-4a64-8f82-c7c41f17bcc9';

async function snapIcons() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });
  await page.goto('file:///D:/SOURCE%20CODE/BUSINESS/computer%20service/index.html', {
    waitUntil: 'networkidle2',
  });

  // 1. Capture Top Bar + Nav Header (zoom in on the top section)
  await page.screenshot({
    path: resolve(ARTIFACTS, 'verified_topbar.png'),
    clip: { x: 500, y: 0, width: 940, height: 130 },
  });

  // 2. Capture Hero CTA buttons
  const heroCtaHandle = await page.$('.grid.gap-10 .mt-6.sm\\:mt-8');
  if (heroCtaHandle) {
    const box = await heroCtaHandle.boundingBox();
    if (box) {
      await page.screenshot({
        path: resolve(ARTIFACTS, 'verified_hero_cta.png'),
        clip: {
          x: Math.max(0, box.x - 20),
          y: Math.max(0, box.y - 20),
          width: box.width + 40,
          height: box.height + 40,
        },
      });
    }
  }

  // 3. Capture portal strip
  const portalHandle = await page.$('.grid.grid-cols-2.sm\\:grid-cols-4');
  if (portalHandle) {
    const box = await portalHandle.boundingBox();
    if (box) {
      await page.screenshot({
        path: resolve(ARTIFACTS, 'verified_portals.png'),
        clip: {
          x: Math.max(0, box.x - 20),
          y: Math.max(0, box.y - 40),
          width: box.width + 40,
          height: box.height + 60,
        },
      });
    }
  }

  // 4. Capture Mobile Viewport (390px)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.screenshot({
    path: resolve(ARTIFACTS, 'verified_mobile_hero.png'),
    clip: { x: 0, y: 0, width: 390, height: 750 },
  });

  // 5. Capture Contact Desk & Footer (desktop)
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });
  const contactEl = await page.$('#contact');
  if (contactEl) {
    const box = await contactEl.boundingBox();
    if (box) {
      await page.screenshot({
        path: resolve(ARTIFACTS, 'verified_contact.png'),
        clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height, 800) },
      });
    }
  }

  const footerEl = await page.$('footer');
  if (footerEl) {
    const box = await footerEl.boundingBox();
    if (box) {
      await page.screenshot({
        path: resolve(ARTIFACTS, 'verified_footer.png'),
        clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height, 600) },
      });
    }
  }

  console.log('Targeted icon screenshots saved successfully!');
  await browser.close();
}

snapIcons().catch(console.error);
