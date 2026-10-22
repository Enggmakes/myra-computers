import puppeteer from "puppeteer-core";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const ARTIFACTS = "C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\c524ada4-78df-4a64-8f82-c7c41f17bcc9";

async function snap() {
  const b = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"]
  });

  const page = await b.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto("http://localhost:4321", { waitUntil: "networkidle0" });

  const el = await page.$("#catalogue-search");
  const box = await el.boundingBox();
  await page.evaluate((y) => window.scrollTo(0, y - 80), box.y);
  await new Promise((r) => setTimeout(r, 200));

  // Type exact query user had in their screenshot: 'Adhar'
  await page.type("#catalogue-search", "Adhar");
  await new Promise((r) => setTimeout(r, 400));

  // Extract titles and badges from the dropdown
  const results = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("#search-live-results [data-jump-to]"));
    return rows.map((r) => ({
      title: r.querySelector("span.truncate")?.textContent?.trim() || "",
      badge: r.querySelector("span.rounded")?.textContent?.trim() || "",
      desc: r.querySelector("p")?.textContent?.trim() || ""
    }));
  });

  console.log("=== BROWSER DROPDOWN RESULTS FOR 'Adhar' ===");
  console.log(JSON.stringify(results, null, 2));

  const shotPath = resolve(ARTIFACTS, "smart_search_adhar_ranked.png");
  await page.screenshot({ path: shotPath });
  console.log("Saved screenshot to:", shotPath);

  await b.close();
}

snap().catch(console.error);
