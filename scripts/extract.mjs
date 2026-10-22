import puppeteer from "puppeteer-core";
import { writeFileSync } from "node:fs";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = "https://sites.google.com/view/vighnaharta-enterprises";

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });

  try {
    const page = await browser.newPage();
    console.log("Navigating to", URL);
    await page.goto(URL, { waitUntil: "networkidle2", timeout: 45000 });

    const data = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll("a")).map((a) => ({
        text: a.innerText.trim(),
        href: a.href,
        ariaLabel: a.getAttribute("aria-label"),
      }));

      const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6, [role='heading']")).map((h) => ({
        tag: h.tagName,
        text: h.innerText.trim(),
      }));

      const buttons = Array.from(document.querySelectorAll("button, [role='button']")).map((b) => ({
        text: b.innerText.trim(),
        ariaLabel: b.getAttribute("aria-label"),
      }));

      const bodyText = document.body.innerText;

      return {
        title: document.title,
        links,
        headings,
        buttons,
        bodyTextSnippet: bodyText.slice(0, 8000),
      };
    });

    writeFileSync("./scripts/extracted_site.json", JSON.stringify(data, null, 2));
    console.log("Extraction successful, found", data.links.length, "links and", data.headings.length, "headings");
  } catch (err) {
    console.error("Extraction error:", err);
  } finally {
    await browser.close();
  }
}

run();
