import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\c524ada4-78df-4a64-8f82-c7c41f17bcc9';

async function snapHeroAndFooter() {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 1000 });
  await p.goto('http://localhost:4321', { waitUntil: 'networkidle0' });

  // Screenshot navbar + hero together
  await p.screenshot({ path: resolve(ARTIFACTS, 'current_hero.png'), clip: { x: 0, y: 0, width: 1440, height: 960 } });

  // Scroll to footer
  const footerHandle = await p.$('footer');
  if (footerHandle) {
    const box = await footerHandle.boundingBox();
    await p.evaluate((y) => window.scrollTo(0, y), box.y);
    await new Promise(r => setTimeout(r, 400));
    await p.screenshot({ path: resolve(ARTIFACTS, 'current_footer.png') });
  }

  console.log('Screenshots saved!');
  await b.close();
}

snapHeroAndFooter().catch(console.error);
