import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\c524ada4-78df-4a64-8f82-c7c41f17bcc9';

async function main() {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 1000 });
  await p.goto('http://localhost:4321/#process', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));
  await p.screenshot({ path: resolve(ARTIFACTS, 'preview_clean_flow.png') });
  await b.close();
  console.log('Clean flow screenshot saved!');
}

main().catch(console.error);
