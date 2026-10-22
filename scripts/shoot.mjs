/**
 * Capture and interaction harness.
 *
 *   node scripts/shoot.mjs                 # all viewports, full page + sections
 *   node scripts/shoot.mjs --interact      # drive menus, filters, form states
 *
 * Uses the system Chrome via puppeteer-core. No bundled browser download.
 */
import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, ".impeccable/review");
const BASE = process.env.BASE_URL ?? "http://localhost:4321/";
const CHROME =
  process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const interact = process.argv.includes("--interact");

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 1000, dsf: 1 },
  { name: "laptop", width: 1280, height: 900, dsf: 1 },
  { name: "tablet", width: 820, height: 1180, dsf: 1 },
  { name: "mobile", width: 390, height: 844, dsf: 2 },
];

const SECTIONS = ["services", "process", "technology", "capabilities", "faq", "contact"];

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--font-render-hinting=none"],
  });

  const messages = [];

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.dsf,
      isMobile: vp.width < 768,
      hasTouch: vp.width < 768,
    });

    page.on("console", (m) => {
      if (m.type() === "error" || m.type() === "warning") {
        messages.push(`[${vp.name}] console.${m.type()}: ${m.text()}`);
      }
    });
    page.on("pageerror", (e) => messages.push(`[${vp.name}] pageerror: ${e.message}`));
    page.on("requestfailed", (r) =>
      messages.push(`[${vp.name}] requestfailed: ${r.url()} ${r.failure()?.errorText}`)
    );

    await page.goto(BASE, { waitUntil: "networkidle0", timeout: 45000 });
    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 700));

    // Full page.
    await page.screenshot({ path: resolve(OUT, `${vp.name}-full.png`), fullPage: true });

    // First viewport.
    await page.screenshot({ path: resolve(OUT, `${vp.name}-viewport.png`) });

    if (vp.width >= 1024) {
      for (const id of SECTIONS) {
        const el = await page.$(`#${id}`);
        if (!el) continue;
        await el.scrollIntoView();
        await new Promise((r) => setTimeout(r, 550));
        await page.screenshot({ path: resolve(OUT, `${vp.name}-${id}.png`) });
      }
      await page.evaluate(() => window.scrollTo(0, 0));
    }

    if (interact && vp.name === "desktop") {
      // Mega menu open.
      await page.click("[data-mega-toggle]");
      await new Promise((r) => setTimeout(r, 450));
      await page.screenshot({ path: resolve(OUT, "state-mega-menu.png") });
      await page.keyboard.press("Escape");
      await new Promise((r) => setTimeout(r, 300));

      // Catalogue search.
      await page.type("#catalogue-search", "passport");
      await new Promise((r) => setTimeout(r, 500));
      await page.evaluate(() => document.querySelector("#services").scrollIntoView());
      await new Promise((r) => setTimeout(r, 500));
      await page.screenshot({ path: resolve(OUT, "state-search.png") });
      await page.click("[data-clear-search]");
      await new Promise((r) => setTimeout(r, 400));

      // Division filter.
      await page.click('[data-filter="technology"]');
      await new Promise((r) => setTimeout(r, 500));
      await page.evaluate(() => document.querySelector("#services").scrollIntoView());
      await new Promise((r) => setTimeout(r, 400));
      await page.screenshot({ path: resolve(OUT, "state-filter.png") });
      await page.click('[data-filter="all"]');
      await new Promise((r) => setTimeout(r, 300));

      // Form error state.
      await page.evaluate(() => document.querySelector("#contact").scrollIntoView());
      await new Promise((r) => setTimeout(r, 400));
      await page.click("[data-submit]");
      await new Promise((r) => setTimeout(r, 400));
      await page.screenshot({ path: resolve(OUT, "state-form-error.png") });

      // Form success state.
      await page.type("#inq-name", "Priya Deshmukh");
      await page.type("#inq-phone", "9876543210");
      await page.type("#inq-email", "priya@example.com");
      await page.select("#inq-service", "passport");
      await page.type("#inq-message", "One adult applicant, passport expired in March.");
      await page.click("[data-submit]");
      await new Promise((r) => setTimeout(r, 1400));
      await page.screenshot({ path: resolve(OUT, "state-form-success.png") });
    }

    if (interact && vp.name === "mobile") {
      await page.click("#nav-toggle");
      await new Promise((r) => setTimeout(r, 500));
      await page.screenshot({ path: resolve(OUT, "state-mobile-nav.png") });
      await page.click("[data-mobile-nav-close]");
      await new Promise((r) => setTimeout(r, 400));
    }

    // Geometry audit: overflow and horizontal scroll.
    const audit = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const offenders = [];
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if (r.right > docWidth + 1 || r.left < -1) {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || "").toString().slice(0, 90),
            left: Math.round(r.left),
            right: Math.round(r.right),
          });
        }
      });
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: docWidth,
        offenders: offenders.slice(0, 14),
      };
    });

    if (audit.scrollWidth > audit.clientWidth + 1) {
      messages.push(
        `[${vp.name}] HORIZONTAL OVERFLOW: scrollWidth ${audit.scrollWidth} > clientWidth ${audit.clientWidth}`
      );
      for (const o of audit.offenders) {
        messages.push(`[${vp.name}]   overflow: ${o.tag}.${o.cls} left=${o.left} right=${o.right}`);
      }
    }

    await page.close();
  }

  await browser.close();

  console.log("Captures written to .impeccable/review");
  if (messages.length) {
    console.log("\n--- findings ---");
    for (const m of messages) console.log(m);
  } else {
    console.log("\nNo console errors, failed requests, or horizontal overflow.");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
