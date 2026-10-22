import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function test() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:4321", { waitUntil: "networkidle2" });

  // Test search
  await page.type("#catalogue-search", "aadhaar");
  await new Promise((r) => setTimeout(r, 300));
  const visibleCards = await page.$$eval("[data-service]:not([hidden])", (els) => els.length);
  console.log("Search for 'aadhaar' matched cards:", visibleCards);

  // Clear search
  const clearBtn = await page.$("[data-clear-search]");
  if (clearBtn) await clearBtn.click();
  await new Promise((r) => setTimeout(r, 200));
  const allCards = await page.$$eval("[data-service]:not([hidden])", (els) => els.length);
  console.log("After clear, total cards:", allCards);

  // Test filter pill click
  const eduPill = await page.$("[data-filter='education']");
  if (eduPill) await eduPill.click();
  await new Promise((r) => setTimeout(r, 200));
  const eduCards = await page.$$eval("[data-service]:not([hidden])", (els) => els.length);
  console.log("Education filter matched cards:", eduCards);

  await browser.close();
}

test().catch(console.error);
