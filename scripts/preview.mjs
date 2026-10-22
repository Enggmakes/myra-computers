import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function snap() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
  await page.goto("file:///D:/SOURCE%20CODE/BUSINESS/computer%20service/index.html", {
    waitUntil: "networkidle2",
  });

  await page.screenshot({
    path: "C:/Users/ASUS/.gemini/antigravity-ide/brain/c524ada4-78df-4a64-8f82-c7c41f17bcc9/preview_hero.png",
    clip: { x: 0, y: 0, width: 1440, height: 1100 },
  });

  const servEl = await page.$("#services");
  if (servEl) {
    const box = await servEl.boundingBox();
    if (box) {
      await page.screenshot({
        path: "C:/Users/ASUS/.gemini/antigravity-ide/brain/c524ada4-78df-4a64-8f82-c7c41f17bcc9/preview_services.png",
        clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height, 1400) },
      });
    }
  }

  const docEl = await page.$("#documents");
  if (docEl) {
    const box = await docEl.boundingBox();
    if (box) {
      await page.screenshot({
        path: "C:/Users/ASUS/.gemini/antigravity-ide/brain/c524ada4-78df-4a64-8f82-c7c41f17bcc9/preview_documents.png",
        clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height, 1200) },
      });
    }
  }

  const eduEl = await page.$("#education");
  if (eduEl) {
    const box = await eduEl.boundingBox();
    if (box) {
      await page.screenshot({
        path: "C:/Users/ASUS/.gemini/antigravity-ide/brain/c524ada4-78df-4a64-8f82-c7c41f17bcc9/preview_education.png",
        clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height, 650) },
      });
    }
  }

  const insEl = await page.$("#insurance");
  if (insEl) {
    const box = await insEl.boundingBox();
    if (box) {
      await page.screenshot({
        path: "C:/Users/ASUS/.gemini/antigravity-ide/brain/c524ada4-78df-4a64-8f82-c7c41f17bcc9/preview_insurance.png",
        clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height, 650) },
      });
    }
  }

  console.log("Screenshots captured successfully!");
  await browser.close();
}

snap().catch(console.error);
