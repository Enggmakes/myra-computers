import puppeteer from "puppeteer-core";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"]
  });

  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });

  // Test 1: Load via localhost
  console.log("Testing http://localhost:4321 ...");
  await page.goto("http://localhost:4321", { waitUntil: "networkidle0" });

  // Verify Services nav item has href="#services"
  const servicesNavHref = await page.$eval('nav a[href="#services"]', (el) => el.getAttribute("href"));
  console.log("Services Nav Link href:", servicesNavHref);
  if (servicesNavHref !== "#services") throw new Error("Services nav link does not have href=#services");

  // Verify Certified Citizen badge is gone
  const badgeExists = await page.evaluate(() => {
    const text = document.body.innerText;
    return text.includes("Certified Citizen & Enterprise Service Desk");
  });
  console.log("Certified Citizen badge exists in hero:", badgeExists);
  if (badgeExists) throw new Error("Certified Citizen badge should be removed");

  // Test 2: Dynamic Search for 'adhar'
  console.log("Testing search for 'adhar'...");
  await page.type("#catalogue-search", "adhar");
  await new Promise((r) => setTimeout(r, 400));

  // Check live popover results
  const popoverVisible = await page.$eval("#search-live-results", (el) => !el.classList.contains("hidden"));
  const popoverContent = await page.$eval("#search-live-results", (el) => el.innerHTML);
  const resultText = await page.$eval("[data-result-count]", (el) => el.textContent);
  console.log("Popover visible:", popoverVisible);
  console.log("Result text:", resultText);
  console.log("Popover includes Aadhaar:", popoverContent.includes("Aadhaar"));

  if (!popoverVisible || !popoverContent.includes("Aadhaar")) {
    throw new Error("Live search popover did not show Aadhaar for 'adhar' query");
  }

  // Scroll search into view and capture
  await page.evaluate(() => {
    document.getElementById("catalogue-search").scrollIntoView({ block: "center" });
  });
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: resolve(ROOT, ".impeccable/review/test-dynamic-search.png") });

  // Test 3: Test via file:/// protocol
  console.log("Testing file:/// direct load (no server)...");
  const filePath = "file:///" + resolve(ROOT, "index.html").replace(/\\/g, "/");
  await page.goto(filePath, { waitUntil: "domcontentloaded" });
  await new Promise((r) => setTimeout(r, 600));

  // Type 'adhar' in file:/// mode to ensure it works without CORS module error
  await page.type("#catalogue-search", "adhar");
  await new Promise((r) => setTimeout(r, 400));
  const filePopoverVisible = await page.$eval("#search-live-results", (el) => !el.classList.contains("hidden"));
  const fileResultText = await page.$eval("[data-result-count]", (el) => el.textContent);
  console.log("file:/// popover visible:", filePopoverVisible);
  console.log("file:/// result text:", fileResultText);

  if (!filePopoverVisible) {
    throw new Error("Live search failed on file:/// protocol");
  }

  await page.screenshot({ path: resolve(ROOT, ".impeccable/review/test-file-protocol.png") });

  await browser.close();
  console.log("\nALL TESTS PASSED! Errors encountered:", errors.length);
  if (errors.length) console.log(errors);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
