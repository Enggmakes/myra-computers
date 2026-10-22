/**
 * Builds the site from the catalogue.
 *
 *   src/template.html  +  src/data/catalog.js  +  src/icons.js
 *        ->  index.html
 *
 * The template carries <!--@SLOT:NAME--> markers; each one is replaced with
 * generated markup. Copy that should survive catalogue edits lives in the
 * template itself; copy that is derived from the catalogue lives here.
 */
import { readFile, writeFile, cp, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { divisions, services, servicesByDivision, documentsChecklist, company, legal } from "../src/data/catalog.js";
import {
  mrUI,
  mrDivisions,
  mrServices,
  mrDocumentsChecklist,
  mrProcessSteps,
  mrProcessNotes,
  mrFaq,
} from "../src/data/translations-mr.js";
import { icons } from "../assets/js/icons.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TEMPLATE = resolve(ROOT, "src/template.html");
const OUT = resolve(ROOT, "index.html");

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Inline SVG for a named icon. */
const ico = (name, cls = "icon") => {
  const body = icons[name];
  if (!body) throw new Error(`Unknown icon: ${name}`);
  const size = cls.includes("icon-lg") ? "24" : "20";
  return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${body}</svg>`;
};

const toBase64 = async (path, mime) => {
  const buf = await readFile(path);
  return `data:${mime};base64,${buf.toString("base64")}`;
};

const centralLogoB64 = await toBase64(resolve(ROOT, "assets/img/central.png"), "image/png");

/* ------------------------------------------------------------------ */
/* Static authored content                                             */
/* ------------------------------------------------------------------ */

const processSteps = [
  {
    n: "01",
    icon: "clipboard-list",
    title: "We check the live requirement",
    body: "Every scheme changes its documents, its deadline and its form. We read the current portal requirement before quoting anything, so the price covers the work as it stands today.",
  },
  {
    n: "02",
    icon: "list-checks",
    title: "We fix the document list",
    body: "You get a written list of what to bring, in what form, and how many copies. Most visits come back twice because one paper was missing or wrongly issued.",
  },
  {
    n: "03",
    icon: "send",
    title: "We file it and hand you the receipt",
    body: "The application goes in with an acknowledgement you can quote. For physical submission you get a tracking reference; for online work, the submission ID and the date it landed.",
  },
  {
    n: "04",
    icon: "circle-check",
    title: "We follow it to closure",
    body: "Filing is not the job. We track the application to approval, release or dispatch, and tell you when the outcome is on record.",
  },
];

const processNotes = [
  {
    icon: "clock",
    title: "One working day to reply",
    body: "An inquiry reaches the service owner, not a queue. You get a reply with the document list, the fee and the expected date.",
  },
  {
    icon: "receipt",
    title: "Fees quoted before the work",
    body: "Government fee, our service charge and any third-party cost are itemised separately. Nothing is added at the end of the job.",
  },
  {
    icon: "lock",
    title: "Documents handled in-house",
    body: "Identity papers stay at the counter. Nothing is photographed for marketing or shared with third parties beyond the filing itself.",
  },
];

const techSpec = [
  ["Response times", "Defined per agreement"],
  ["Support window", "Working hours, 6 days"],
  ["On-site visits", "Scheduled and included"],
  ["Spares", "Kept for contracted machines"],
  ["Documentation", "Handover and change notes"],
  ["Ownership", "Transferred on final payment"],
];

const faq = [
  {
    q: "What documents should I bring?",
    a: "Each service has its own list, and it changes when the portal changes. Send the service through the inquiry form and you will get a written list of what to bring, in what form and how many copies — before you travel to the counter.",
  },
  {
    q: "Do you charge a service fee on top of the government fee?",
    a: "Yes, and we show it separately. Every quote itemises the government fee, our service charge and any third-party cost, so you can see the whole figure before agreeing to the work.",
  },
  {
    q: "Can you file an application from home without me visiting?",
    a: "For most portal-based services, yes. We need scanned copies of your documents and a signed authorisation, and the application is filed in your name with the acknowledgement sent to you.",
  },
  {
    q: "How long does an application take?",
    a: "That is the authority's timeline, not ours. What we control is the filing date and the follow-up. We tell you the realistic window when we quote, and we tell you the moment the status changes.",
  },
  {
    q: "Do you handle AMC and ongoing support for the systems you build?",
    a: "Yes. Every engagement carries a defined response time, preventive visit schedule and a spares commitment for contracted machines. Those terms are written into the agreement rather than agreed case by case.",
  },
  {
    q: "Which areas do you serve?",
    a: "The counter in Jambut Bk, Sangamner serves walk-in clients from across the region. Engineering and support work is delivered on site, and remotely elsewhere in India.",
  },
];

/* ------------------------------------------------------------------ */
/* Slot builders                                                       */
/* ------------------------------------------------------------------ */

const divisionById = new Map(divisions.map((d) => [d.id, d]));

/** Mega menu: three columns of divisions, each listing its services. */
function megaDivisions() {
  const cols = [divisions.slice(0, 4), divisions.slice(4, 8), divisions.slice(8)];
  return cols
    .map((group) => {
      const items = group
        .map((d) => {
          const dServices = services.filter((s) => s.division === d.id);
          const links = dServices
            .slice(0, 4)
            .map(
              (s) =>
                `<li><a href="#service-${s.id}" class="group inline-flex items-baseline gap-2 text-[0.8125rem] leading-snug text-slate-600 transition-colors hover:text-ink-900">${esc(
                  s.name
                )}<span class="icon opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" data-icon="arrow-up-right"></span></a></li>`
            )
            .join("");
          const more =
            dServices.length > 4
              ? `<li><a href="#services" class="inline-flex items-center gap-1.5 font-display text-[0.75rem] font-semibold text-ink-700 transition-colors hover:text-signal-600">${
                  dServices.length - 4
                } more<span class="icon" aria-hidden="true" data-icon="arrow-right"></span></a></li>`
              : "";
          return `<div>
            <a href="#${d.id}" class="inline-flex items-center gap-2 font-display text-[0.9375rem] font-bold text-ink-900">
              <span class="text-ink-400">${ico(d.icon)}</span>${esc(d.name)}
            </a>
            <ul class="mt-2.5 space-y-1.5 border-l border-slate-200 pl-3.5">${links}${more}</ul>
          </div>`;
        })
        .join("");
      return `<div class="space-y-7">${items}</div>`;
    })
    .join("\n");
}

function megaHours() {
  return company.hours
    .map(
      (h) =>
        `<div class="flex items-baseline justify-between gap-4"><dt class="text-slate-500">${esc(
          h.days
        )}</dt><dd class="nums font-display font-semibold text-ink-900">${esc(h.time)}</dd></div>`
    )
    .join("\n");
}

function mobileDivisions() {
  const items = divisions
    .map((d) => {
      const isPayments = d.id === "payments";
      const iconHtml = isPayments
        ? `<img src="${centralLogoB64}" alt="" class="h-4 w-4 object-contain inline-block flex-none" />`
        : ico(d.icon);
      return `<li><a href="#${d.id}" class="flex items-center gap-2 rounded-lg bg-[#0c2b27] border border-[#8FB7AE]/20 px-3 py-2.5 font-display text-[0.8125rem] font-medium text-[#F5F0E3] transition-all hover:border-[#D6B36A] hover:text-[#D6B36A]" data-mobile-nav-close data-mobile-div="${d.id}"><span class="text-[#D6B36A] flex-none">${iconHtml}</span><span class="truncate mobile-div-name">${esc(d.shortName)}</span></a></li>`;
    });
  items.push(
    `<li><a href="#services" class="flex items-center justify-between rounded-lg bg-[#D6B36A]/15 border border-[#D6B36A]/40 px-3 py-2.5 font-display text-[0.8125rem] font-bold text-[#D6B36A] transition-all hover:bg-[#D6B36A] hover:text-[#071C19]" data-mobile-nav-close><span data-i18n="nav_services">All Services</span><span class="text-xs" data-i18n="nav_all_services_badge">86 →</span></a></li>`
  );
  return items.join("\n");
}

function heroIndex() {
  return services
    .map((s) => {
      const d = divisionById.get(s.division);
      const isHttp = s.portalUrl && s.portalUrl.startsWith("http");
      const badgeText = s.badgeText || (d ? d.shortName : "OFFICIAL");
      const shortBadge = d ? d.shortName : "GOVT";
      return `<li data-hero-svc="${s.id}">
        <a href="${s.portalUrl || `#service-${s.id}`}" 
           ${isHttp ? 'target="_blank" rel="noopener noreferrer"' : ''}
           class="group flex items-center justify-between gap-2.5 px-4 sm:px-5 py-2.5 transition-colors hover:bg-[#0c2b27]/80">
          <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span class="text-[#8FB7AE] transition-colors group-hover:text-[#D6B36A] flex-none">${ico(s.icon)}</span>
            <span class="truncate font-display text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#F5F0E3] transition-colors group-hover:text-white hero-svc-name">${esc(
              s.name
            )}</span>
          </div>
          <div class="inline-flex items-center gap-1.5 sm:gap-2 flex-none">
            <span class="hidden sm:inline-block rounded bg-[#F5F0E3] text-[#071C19] px-2 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider max-w-[130px] truncate hero-svc-badge">${esc(
              badgeText
            )}</span>
            <span class="sm:hidden rounded bg-[#F5F0E3]/15 text-[#D6B36A] border border-[#D6B36A]/30 px-1.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider">${esc(
              shortBadge
            )}</span>
            <span class="text-[#8FB7AE] group-hover:text-[#D6B36A] transition-colors" aria-hidden="true">${ico(isHttp ? 'arrow-up-right' : 'arrow-right')}</span>
          </div>
        </a>
      </li>`;
    })
    .join("\n");
}

function divisionStrip() {
  return divisions
    .map((d) => {
      const count = services.filter((s) => s.division === d.id).length;
      const theme = d.theme || {};
      const isPayments = d.id === "payments";
      const iconHtml = isPayments
        ? `<img src="${centralLogoB64}" alt="Central Bank of India" class="h-6 w-6 object-contain" />`
        : ico(d.icon, "icon icon-lg");
      const badgeCls = isPayments
        ? "bg-white border border-red-200 shadow-xs"
        : (theme.badgeClass || "bg-slate-100 text-slate-700");
      const titleHtml = isPayments
        ? `<span class="div-strip-name">Money Transfer &amp; Payments</span><span class="block text-[0.75rem] text-red-600 font-bold tracking-tight div-strip-sub">Central Mini Bank</span>`
        : `<span class="div-strip-name">${esc(d.name)}</span>`;
      return `<li>
        <a href="#${d.id}" class="group flex flex-col gap-2 p-3.5 rounded-lg border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all" data-div-strip="${d.id}">
          <span class="grid h-10 w-10 place-items-center rounded-lg ${badgeCls} transition-transform group-hover:scale-110">${iconHtml}</span>
          <span class="font-display text-[0.9375rem] font-bold leading-snug text-ink-900 group-hover:text-signal-600">${titleHtml}</span>
          <span class="nums text-[0.8125rem] font-medium text-slate-500"><span class="div-strip-count-num">${count}</span> <span class="div-strip-count-text">services</span></span>
        </a>
      </li>`;
    })
    .join("\n");
}

function filterPills() {
  return divisions
    .map(
      (d) =>
        `<button type="button" class="pill" aria-pressed="false" data-filter="${d.id}"><span>${esc(
          d.shortName
        )}</span></button>`
    )
    .join("\n");
}

/** One service tile. */
function serviceTile(s) {
  const d = divisionById.get(s.division);
  const badgeCls = d?.theme?.badgeClass || "badge-gov";
  const isHttp = s.portalUrl && s.portalUrl.startsWith("http");
  const mr = mrServices[s.id] || {};
  const mrDiv = mrDivisions[s.division] || {};

  return `<article class="svc min-w-0" id="service-${s.id}" data-service="${s.id}" data-division="${d.id}" data-division-name="${esc(d.shortName)}" data-name="${esc(
    s.name.toLowerCase()
  )}" data-display-name="${esc(s.name)}" data-portal-url="${esc(s.portalUrl || '')}" data-action-label="${esc(s.actionLabel || `Open ${s.portalName || s.name}`)}" data-badge="${esc(s.badgeText || d.shortName)}" data-badge-class="${badgeCls}" data-service-icon="${s.icon}" data-desc="${esc(s.desc)}" data-keywords="${esc([s.name, s.sourceRef || "", s.desc, s.audience, s.portalName || "", s.badgeText || "", ...(s.keywords || [])].join(" ").toLowerCase())}" data-mr-name="${esc(mr.name || '')}" data-mr-desc="${esc(mr.desc || '')}" data-mr-audience="${esc(mr.audience || '')}" data-mr-badge="${esc(mr.badgeText || mrDiv.shortName || '')}" data-mr-action="${esc(mr.actionLabel || '')}" data-mr-portal="${esc(mr.portalName || '')}" data-mr-keywords="${esc((mr.keywords || []).join(' ').toLowerCase())}">
  <div class="flex items-start justify-between gap-2.5 sm:gap-3 min-w-0">
    <span class="svc-icon flex-none" aria-hidden="true">${ico(s.icon)}</span>
    <div class="flex flex-col items-end gap-1 min-w-0 text-right">
      <span class="svc-badge rounded px-2 py-0.5 text-[0.65rem] sm:text-[0.6875rem] font-bold uppercase tracking-[0.05em] truncate max-w-[140px] sm:max-w-none ${badgeCls}">${esc(
        s.badgeText || d.shortName
      )}</span>
      <span class="svc-div-name text-[0.65rem] sm:text-[0.6875rem] font-semibold uppercase tracking-[0.09em] text-slate-400">${esc(
        d.shortName
      )}</span>
    </div>
  </div>
  <h3 class="svc-name text-[1rem] sm:text-[1.0625rem] font-bold leading-snug text-ink-950 mt-1">${esc(s.name)}</h3>
  <p class="svc-desc text-[0.875rem] sm:text-[0.9375rem] leading-relaxed text-slate-600">${esc(s.desc)}</p>
  <p class="svc-audience mt-0.5 text-[0.78125rem] sm:text-[0.8125rem] leading-relaxed text-slate-500"><span class="font-semibold text-slate-700" data-i18n="cat_for_label">For:</span> <span class="svc-audience-text">${esc(
    s.audience
  )}</span></p>
  
  <div class="mt-auto pt-4 flex flex-col gap-2">
    <a href="${esc(s.portalUrl || '#contact')}"
       ${isHttp ? 'target="_blank" rel="noopener noreferrer"' : ''}
       class="portal-action-btn portal-btn-${d.id}"
       data-service-link="${s.id}">
      <span class="svc-action-label truncate">${esc(s.actionLabel || `Open ${s.portalName || s.name}`)}</span>
      <span class="icon flex-none" aria-hidden="true">${ico(isHttp ? 'arrow-up-right' : 'arrow-right')}</span>
    </a>
    <div class="flex items-center justify-between text-[0.75rem] text-slate-500 pt-1 border-t border-slate-100 gap-2">
      <span class="inline-flex items-center gap-1.5 font-medium text-slate-600 truncate min-w-0">
        <span class="h-1.5 w-1.5 rounded-full flex-none ${s.isGov ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}"></span>
        <span class="svc-portal-name truncate">${esc(s.portalName || 'Sangamner Desk')}</span>
      </span>
      <a href="https://wa.me/919766174974?text=${encodeURIComponent(`Hello Amayra Computers, I need assistance at the counter with: ${s.name}`)}"
         target="_blank" rel="noopener noreferrer"
         class="inline-flex items-center gap-1 text-slate-500 hover:text-emerald-700 font-medium transition-colors flex-none"
         title="Need help? Ask counter desk on WhatsApp"
         data-service-preset="${s.id}">
        <span class="svc-counter-help" data-i18n="cat_counter_help">Counter help</span>
        <span class="icon text-[0.7rem]" aria-hidden="true">${ico('phone')}</span>
      </a>
    </div>
  </div>
</article>`;
}

function serviceIndex() {
  return servicesByDivision
    .map((d) => {
      const isPayments = d.id === "payments";

      const iconContainer = isPayments
        ? `<span class="grid h-12 w-12 place-items-center rounded-xl bg-white border border-red-200 p-1.5 shadow-sm flex-none">
            <img src="${centralLogoB64}" alt="Central Bank of India" class="h-full w-full object-contain" />
          </span>`
        : `<span class="grid h-10 w-10 place-items-center rounded-lg ${d.theme?.badgeClass || 'bg-slate-100 text-slate-800'} flex-none">${ico(
            d.icon,
            "icon"
          )}</span>`;

      const headerContent = isPayments
        ? `<div>
            <h3 class="text-[1.35rem] sm:text-[1.5rem] font-bold tracking-tight text-ink-950 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span class="div-head-title">Money Transfer &amp; Payments</span>
              <span class="text-slate-300 font-light hidden sm:inline">|</span>
              <span class="text-red-700 div-head-sub">Central Mini Bank</span>
            </h3>
            <span class="text-[0.75rem] font-semibold uppercase tracking-wider text-slate-500 div-head-branch">Payments Division</span>
          </div>`
        : `<div>
            <h3 class="text-[1.35rem] font-bold tracking-tight text-ink-950 div-head-title">${esc(d.name)}</h3>
            <span class="text-[0.75rem] font-semibold uppercase tracking-wider text-slate-500 div-head-branch">${esc(d.shortName)} Division</span>
          </div>`;

      return `<section id="${d.id}" class="scroll-mt-28" data-division-group="${d.id}">
  <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b-2 border-slate-200 pb-4">
    <div class="flex items-center gap-3.5">
      ${iconContainer}
      ${headerContent}
    </div>
    <div class="flex items-center gap-3">
      <span class="rounded-full bg-slate-100 px-3 py-1 font-display text-[0.8125rem] font-bold text-slate-700"><span class="div-count-num">${d.services.length}</span> <span class="div-count-text">services</span></span>
      <a href="#services" class="text-[0.8125rem] font-semibold text-slate-500 hover:text-ink-900 transition-colors" data-i18n="cat_top">↑ Top</a>
    </div>
  </div>
  <p class="division-blurb mt-3.5 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">${esc(d.blurb)}</p>
  <div class="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">${d.services
    .map(serviceTile)
    .join("\n")}</div>
</section>`;
    })
    .join("\n");
}

function documentsDeskHtml() {
  return documentsChecklist
    .map((cat, catIdx) => {
      const cards = cat.services
        .map((item, itemIdx) => `
          <div class="rounded-lg border border-slate-200 bg-white p-6 flex flex-col shadow-sm transition-all hover:shadow-md hover:border-slate-300" data-doc-card="${catIdx}-${itemIdx}">
            <div class="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h4 class="doc-card-title font-display text-[1rem] font-bold text-ink-900">${esc(item.name)}</h4>
                <p class="text-[0.8125rem] text-slate-500 mt-0.5">Portal: <strong class="doc-card-portal text-slate-700">${esc(item.portal)}</strong></p>
              </div>
              <span class="inline-flex h-2 w-2 rounded-full bg-emerald-500 flex-none mt-1 animate-pulse"></span>
            </div>
            <div class="mt-4 flex-1">
              <p class="text-[0.75rem] font-bold uppercase tracking-wider text-slate-500" data-i18n="docs_checklist_label">Checklist to bring:</p>
              <ul class="doc-card-reqs mt-2 space-y-2 text-[0.84rem] text-slate-700">
                ${item.requirements.map((r) => `<li class="flex items-start gap-2"><span class="text-emerald-600 font-bold flex-none">✓</span><span>${esc(r)}</span></li>`).join("")}
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-[0.8125rem]">
              <div class="flex items-center justify-between text-slate-500">
                <span class="font-medium text-slate-600" data-i18n="docs_copies_label">Copies:</span>
                <span class="doc-card-copies text-slate-800 font-semibold">${esc(item.copies)}</span>
              </div>
              <div class="flex items-center justify-between text-slate-500">
                <span class="font-medium text-slate-600" data-i18n="docs_turnaround_label">Turnaround:</span>
                <span class="doc-card-turnaround text-slate-800 font-semibold">${esc(item.counterTurnaround)}</span>
              </div>
            </div>
            <div class="mt-5 pt-2">
              <a href="${esc(item.portalUrl)}" target="_blank" rel="noopener noreferrer" 
                 class="portal-action-btn portal-btn-government w-full">
                <span class="doc-card-btn-text">Open ${esc(item.portal)}</span>
                <span class="icon flex-none" aria-hidden="true">${ico('arrow-up-right')}</span>
              </a>
            </div>
          </div>
        `)
        .join("");

      return `
        <div class="mb-10" data-doc-cat="${catIdx}">
          <div class="flex items-center gap-3 mb-5">
            <span class="inline-flex h-2.5 w-2.5 rounded-full bg-orange-500"></span>
            <h3 class="doc-cat-heading font-display text-[1.15rem] font-bold text-ink-900">${esc(cat.category)}</h3>
            <span class="doc-cat-tag rounded-full bg-orange-50 text-orange-800 border border-orange-200 px-2.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider">${esc(cat.tag)}</span>
          </div>
          <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            ${cards}
          </div>
        </div>
      `;
    })
    .join("\n");
}

function processStepsHtml() {
  return processSteps
    .map(
      (s, i) => `<li class="relative bg-white p-7" data-step-index="${i}">
  <div class="flex items-center justify-between gap-4">
    <span class="grid h-10 w-10 place-items-center rounded bg-slate-100 text-ink-800" aria-hidden="true">${ico(
      s.icon
    )}</span>
    <span class="nums font-display text-[0.8125rem] font-bold tracking-[0.08em] text-slate-300">${s.n}</span>
  </div>
  <h3 class="step-title mt-5 text-[1.0625rem] leading-snug">${esc(s.title)}</h3>
  <p class="step-body mt-2.5 text-[0.9375rem] leading-relaxed text-slate-600">${esc(s.body)}</p>
</li>`
    )
    .join("\n");
}

function processNotesHtml() {
  return processNotes
    .map(
      (n, i) => `<div class="rounded-lg border border-slate-200 bg-white p-6" data-note-index="${i}">
  <span class="grid h-9 w-9 place-items-center rounded bg-ink-900 text-signal-500" aria-hidden="true">${ico(
    n.icon
  )}</span>
  <h3 class="note-title mt-4 text-[1.0625rem]">${esc(n.title)}</h3>
  <p class="note-body mt-2 text-[0.9375rem] leading-relaxed text-slate-600">${esc(n.body)}</p>
</div>`
    )
    .join("\n");
}

function techItems() {
  const tech = services.filter((s) => s.division === "technology");
  return tech
    .map(
      (s) => `<li class="bg-ink-900 p-6 transition-colors hover:bg-ink-800">
  <span class="inline-flex h-10 w-10 items-center justify-center rounded bg-ink-800 text-signal-500" aria-hidden="true">${ico(
    s.icon
  )}</span>
  <h3 class="mt-4 text-[1.0625rem] font-semibold text-white">${esc(s.name)}</h3>
  <p class="mt-2 text-[0.9375rem] leading-relaxed text-slate-400">${esc(s.desc)}</p>
  <p class="mt-3 text-[0.8125rem] text-slate-500">${esc(s.audience)}</p>
</li>`
    )
    .join("\n");
}

function techSpecHtml() {
  return techSpec
    .map(
      ([k, v]) =>
        `<div class="flex items-baseline justify-between gap-6 px-6 py-3.5">
          <dt class="text-[0.875rem] text-slate-400">${esc(k)}</dt>
          <dd class="nums text-right font-display text-[0.875rem] font-semibold text-white">${esc(v)}</dd>
        </div>`
    )
    .join("\n");
}

function credentialsHtml() {
  return company.credentials
    .map(
      (c) => `<li class="bg-white p-7">
  <span class="grid h-11 w-11 place-items-center rounded bg-ink-900 text-signal-500" aria-hidden="true">${ico(
    c.icon
  )}</span>
  <h3 class="mt-5 text-[1.0625rem] leading-snug">${esc(c.title)}</h3>
  <p class="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">${esc(c.detail)}</p>
</li>`
    )
    .join("\n");
}

function portalsHtml() {
  return company.portals
    .map(
      (p) =>
        `<li class="inline-flex items-center rounded border border-slate-300 bg-white px-2.5 py-1 font-display text-[0.8125rem] font-semibold text-slate-700">${esc(
          p
        )}</li>`
    )
    .join("\n");
}

function sectorsHtml() {
  return company.sectors
    .map(
      (s) =>
        `<li class="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-slate-600"><span class="mt-1.5 text-signal-500">${ico(
          "check"
        )}</span>${esc(s)}</li>`
    )
    .join("\n");
}

function faqHtml() {
  return faq
    .map(
      (f, i) => `<details class="group py-5" data-faq="${i}">
  <summary class="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[1.0625rem] font-semibold text-ink-900 marker:hidden">
    <span class="faq-q">${esc(f.q)}</span>
    <span class="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full border border-slate-300 text-slate-500 transition-colors group-open:border-ink-900 group-open:bg-ink-900 group-open:text-white" aria-hidden="true">${ico(
      "chevron-down",
      "icon h-3.5 w-3.5"
    )}</span>
  </summary>
  <div class="faq-a measure mt-3 text-[0.9375rem] leading-relaxed text-slate-600">${esc(f.a)}</div>
</details>`
    )
    .join("\n");
}

function formServiceOptions() {
  const groups = servicesByDivision
    .map(
      (d) =>
        `<optgroup label="${esc(d.name)}" data-div-id="${d.id}">${d.services
          .map((s) => `<option value="${s.id}" data-svc-id="${s.id}">${esc(s.name)}</option>`)
          .join("")}</optgroup>`
    )
    .join("");
  return `<option value="" selected disabled data-i18n="form_choose_service">Choose a service…</option>${groups}`;
}

function contactHoursHtml() {
  return company.hours
    .map(
      (h) =>
        `<div class="flex items-baseline justify-between gap-4"><dt>${esc(h.days)}</dt><dd class="nums font-display font-semibold text-ink-900">${esc(
        h.time
      )}</dd></div>`
    )
    .join("");
}

function footerLinks(items) {
  return items
    .map(
      (t) =>
        `<li><a href="${t.href}" class="inline-flex items-start gap-1.5 py-1 text-[0.75rem] sm:text-[0.8125rem] leading-snug text-[#F5F0E3]/90 transition-all hover:text-[#D6B36A] hover:translate-x-0.5"><span class="text-[#D6B36A] text-[0.6875rem] mt-0.5 flex-none">›</span><span>${esc(
          t.label
        )}</span></a></li>`
    )
    .join("\n");
}

function footerServiceColumns() {
  const half = Math.ceil(divisions.length / 2);
  const build = (list) =>
    list
      .map(
        (d) =>
          `<li data-footer-div="${d.id}"><a href="#${d.id}" class="inline-flex items-start gap-1.5 py-1 text-[0.75rem] sm:text-[0.8125rem] leading-snug text-[#F5F0E3]/90 transition-all hover:text-[#D6B36A] hover:translate-x-0.5"><span class="text-[#D6B36A] text-[0.6875rem] mt-0.5 flex-none">›</span><span class="footer-div-name">${esc(
            d.name
          )}</span></a></li>`
      )
      .join("\n");

  const popular = [
    { id: "aadhaar", label: "Aadhaar Services (UIDAI)", href: "#service-aadhaar" },
    { id: "pan", label: "PAN Card Services (NSDL)", href: "#service-pan" },
    { id: "passport", label: "Passport Application Seva", href: "#service-passport" },
    { id: "maps-forms", label: "7/12 Bhulekh Land Records", href: "#service-maps-forms" },
    { id: "epfo", label: "EPFO PF & UAN Claims", href: "#service-epfo" },
    { id: "ayushman-bharat", label: "Ayushman Bharat (PM-JAY)", href: "#service-ayushman-bharat" },
    { id: "police-verification", label: "Police Verification (PCC)", href: "#service-police-verification" },
    { id: "ration-card", label: "Ration Card (RCMS Food)", href: "#service-ration-card" },
  ];

  const companyLinks = [
    { i18n: "footer_about_counter", label: "About the Counter Desk", href: "#capabilities" },
    { i18n: "footer_4step_process", label: "Our 4-Step Filing Process", href: "#process" },
    { i18n: "footer_full_catalogue", label: "Full Service Catalogue (86)", href: "#services" },
    { i18n: "footer_doc_list", label: "Document Verification List", href: "#documents" },
    { i18n: "footer_faqs", label: "Frequently Asked Questions", href: "#faq" },
    { i18n: "footer_contact_loc", label: "Counter Contact & Location", href: "#contact" },
  ];

  const popularHtml = popular
    .map(
      (p) =>
        `<li data-footer-pop="${p.id}"><a href="${p.href}" class="inline-flex items-start gap-1.5 py-1 text-[0.75rem] sm:text-[0.8125rem] leading-snug text-[#F5F0E3]/90 transition-all hover:text-[#D6B36A] hover:translate-x-0.5"><span class="text-[#D6B36A] text-[0.6875rem] mt-0.5 flex-none">›</span><span class="footer-pop-name">${esc(
          p.label
        )}</span></a></li>`
    )
    .join("\n");

  const companyHtml = companyLinks
    .map(
      (c) =>
        `<li><a href="${c.href}" class="inline-flex items-start gap-1.5 py-1 text-[0.75rem] sm:text-[0.8125rem] leading-snug text-[#F5F0E3]/90 transition-all hover:text-[#D6B36A] hover:translate-x-0.5"><span class="text-[#D6B36A] text-[0.6875rem] mt-0.5 flex-none">›</span><span data-i18n="${c.i18n}">${esc(
          c.label
        )}</span></a></li>`
    )
    .join("\n");

  return {
    FOOTER_SERVICES: popularHtml,
    FOOTER_COMPANY: companyHtml,
    FOOTER_DIVISIONS_1: build(divisions.slice(0, half)),
    FOOTER_DIVISIONS_2: build(divisions.slice(half)),
  };
}

function footerLegalHtml() {
  return legal
    .map(
      (l) =>
        `<li><a href="${l.href}" class="text-[0.8125rem] text-[#8FB7AE]/80 transition-colors hover:text-[#D6B36A]">${esc(
          l.label
        )}</a></li>`
    )
    .join("\n");
}

function footerHoursHtml() {
  return company.hours
    .map((h) => `${esc(h.days)} ${esc(h.time)}`)
    .join(" · ");
}

/* ------------------------------------------------------------------ */
/* Assemble                                                            */
/* ------------------------------------------------------------------ */

// Production Inlined Assets for 100% fail-proof rendering everywhere
const cssPath = resolve(ROOT, "assets/css/site.css");
const jsPath = resolve(ROOT, "assets/js/site.js");
const cssContent = await readFile(cssPath, "utf8");
const jsContent = await readFile(jsPath, "utf8");

const heroVerticalB64 = await toBase64(resolve(ROOT, "hero_vertical.webp"), "image/webp");
const heroB64 = await toBase64(resolve(ROOT, "hero.webp"), "image/webp");
const footerB64 = await toBase64(resolve(ROOT, "footer.webp"), "image/webp");

const inlinedCss = cssContent
  .replace(/\.\.\/fonts\//g, "/assets/fonts/")
  .replace(/url\(['"]?(?:\.\.\/\.\.\/)?hero_vertical\.png['"]?\)/g, `url('${heroVerticalB64}')`)
  .replace(/url\(['"]?(?:\.\.\/\.\.\/)?hero\.png['"]?\)/g, `url('${heroB64}')`);

const slots = {
  INLINE_CSS: `<style id="app-styles">\n${inlinedCss}\n</style>`,
  INLINE_JS: `<script id="app-script">\n${jsContent}\n</script>`,
  MEGA_DIVISIONS: megaDivisions(),
  MEGA_HOURS: megaHours(),
  MOBILE_DIVISIONS: mobileDivisions(),
  HERO_INDEX: heroIndex(),
  DIVISION_STRIP: divisionStrip(),
  FILTER_PILLS: filterPills(),
  SERVICE_INDEX: serviceIndex(),
  DOCUMENTS_DESK: documentsDeskHtml(),
  PROCESS_STEPS: processStepsHtml(),
  PROCESS_NOTES: processNotesHtml(),
  CREDENTIALS: credentialsHtml(),
  PORTALS: portalsHtml(),
  SECTORS: sectorsHtml(),
  FAQ: faqHtml(),
  FORM_SERVICE_OPTIONS: formServiceOptions(),
  CONTACT_HOURS: contactHoursHtml(),
  ...footerServiceColumns(),
  FOOTER_LEGAL: footerLegalHtml(),
  FOOTER_HOURS: footerHoursHtml(),
  I18N_DATA: `<script>window.AMAYRA_I18N = ${JSON.stringify({
    mrUI,
    mrDivisions,
    mrServices,
    mrDocumentsChecklist,
    mrProcessSteps,
    mrProcessNotes,
    mrFaq,
  })};</script>`,
};

let html = await readFile(TEMPLATE, "utf8");

const used = new Set();
html = html.replace(/<!--@SLOT:([A-Z_0-9]+)-->/g, (_, name) => {
  if (!(name in slots)) throw new Error(`Template references unknown slot: ${name}`);
  used.add(name);
  return slots[name];
});

const unused = Object.keys(slots).filter((k) => !used.has(k));
if (unused.length) console.warn(`Unused slots: ${unused.join(", ")}`);

// Stats and year.
html = html.replace(/data-stat="services">\d+/g, `data-stat="services">${services.length}`);
html = html.replace(/data-stat="divisions">\d+/g, `data-stat="divisions">${divisions.length}`);
html = html.replace(/data-stat="portals">\d+/g, `data-stat="portals">${company.portals.length}`);
html = html.replace(
  /Showing all \d+ services/,
  `Showing all ${services.length} services`
);
html = html.replace(/placeholder="Search \d+ services/g, `placeholder="Search ${services.length} services`);
html = html.replace(/<span data-year>\d{4}<\/span>/, `<span data-year>${new Date().getFullYear()}</span>`);

// Structured data offer catalogue.
html = html.replace(
  /"itemListElement": \[\]/,
  `"itemListElement": ${JSON.stringify(
    servicesByDivision.map((d) => ({
      "@type": "OfferCatalog",
      "name": d.name,
      "itemListElement": d.services.map((s) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": s.name, "description": s.desc },
      })),
    }))
  )}`
);

// Guarantee 100% immediate background artwork visibility with zero HTTP requests
html = html.replace(/url\(['"]?footer\.png['"]?\)/g, `url('${footerB64}')`);
html = html.replace(/url\(['"]?hero_vertical\.png['"]?\)/g, `url('${heroVerticalB64}')`);
html = html.replace(/url\(['"]?hero\.png['"]?\)/g, `url('${heroB64}')`);

await writeFile(OUT, html, "utf8");
console.log(`Built ${OUT}`);
console.log(`  ${services.length} services across ${divisions.length} divisions`);

const DIST = resolve(ROOT, "dist");
await mkdir(DIST, { recursive: true });
await writeFile(resolve(DIST, "index.html"), html, "utf8");
await cp(resolve(ROOT, "assets"), resolve(DIST, "assets"), { recursive: true });
await cp(resolve(ROOT, "hero.png"), resolve(DIST, "hero.png"));
await cp(resolve(ROOT, "hero_vertical.png"), resolve(DIST, "hero_vertical.png"));
await cp(resolve(ROOT, "footer.png"), resolve(DIST, "footer.png"));
console.log(`Prepared distribution in ${DIST}`);
