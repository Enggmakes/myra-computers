import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\c524ada4-78df-4a64-8f82-c7c41f17bcc9';

async function verifyLive() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });
  
  console.log('Navigating to live Vercel site...');
  await page.goto('https://myra-computers.vercel.app/', {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });

  // Top bar screenshot
  await page.screenshot({
    path: resolve(ARTIFACTS, 'live_topbar.png'),
    clip: { x: 500, y: 0, width: 940, height: 130 },
  });

  // Hero buttons screenshot
  const heroCtaHandle = await page.$('.grid.gap-10 .mt-6.sm\\:mt-8');
  if (heroCtaHandle) {
    const box = await heroCtaHandle.boundingBox();
    if (box) {
      await page.screenshot({
        path: resolve(ARTIFACTS, 'live_hero_cta.png'),
        clip: {
          x: Math.max(0, box.x - 20),
          y: Math.max(0, box.y - 20),
          width: box.width + 40,
          height: box.height + 40,
        },
      });
    }
  }

  console.log('Live Vercel screenshots captured successfully!');
  await browser.close();
}

verifyLive().catch(console.error);
