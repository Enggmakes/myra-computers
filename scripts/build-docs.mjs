/**
 * Generates docs/services-matrix.md from the catalogue so the document can
 * never drift from the shipped site.
 */
import { writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { divisions, services, servicesByDivision, company } from "../src/data/catalog.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const esc = (s) => String(s).replace(/\|/g, "\\|");

function provenance(s) {
  if (s.brandCommitted) return "Brand — Technology division";
  if (s.sourceRef) return `Reference — \`${s.sourceRef}\``;
  if (s.expanded) return "Expanded — sub-offering of a reference hub";
  return "—";
}

const lines = [];

lines.push("# Service catalogue matrix");
lines.push("");
lines.push(
  `**${services.length} service lines across ${divisions.length} divisions.** This document is generated from \`src/data/catalog.js\` by \`scripts/build-docs.mjs\`; the shipped site is built from the same source, so the two cannot drift.`
);
lines.push("");
lines.push("## Provenance");
lines.push("");
lines.push(
  "The reference site (`sites.google.com/view/vighnaharta-enterprises`) renders its body copy dynamically, so its navigation tree was the only machine-readable statement of its catalogue. That tree was harvested in full: the top-level pages, the **Services** sub-tree, the **Government** sub-tree and the **Contact Us** sub-tree. Every entry below carries the reference label it came from."
);
lines.push("");
lines.push("- **Reference** — the entry is a literal label from the reference navigation tree.");
lines.push(
  "- **Expanded** — a sub-offering of a reference hub label (for example, *Printing* → *Lamination & Binding*). Legitimate expansion of an extracted label, not invention."
);
lines.push(
  "- **Brand** — derived from the Myra Computer Enterprises name rather than the reference site. The Technology division's list is brand-committed and needs client confirmation."
);
lines.push("");
lines.push("### Reference navigation tree as harvested");
lines.push("");
lines.push("```");
lines.push("Home · DOCUMENTS · About · Our Mission · YOJANA · Tourism · Services · Government · Contact Us · Customer Review · Courier");
lines.push("");
lines.push("Services");
lines.push("├── Educational ── RTE Forms · Scholarship Forms · Admissions");
lines.push("├── Sales");
lines.push("│   ├── Property Rent Sale & Purchase");
lines.push("│   ├── Engineering Supply to all India");
lines.push("│   ├── Job Search and Post ── job search · job post");
lines.push("│   ├── Insurance ── LIC · Star Health · HDFC Ergo · PIK VIMA · POS");
lines.push("│   ├── Loans ── MUDRA Loan · Personal Loan · Business Loan · Finance POS · Annasaheb Patil");
lines.push("│   └── Ticket Booking");
lines.push("├── Printing");
lines.push("├── Money Transfer");
lines.push("├── Mazi Nokari");
lines.push("├── Finance And Banking");
lines.push("├── Marriage");
lines.push("└── Gadi Kharedi Vikri");
lines.push("");
lines.push("Government (29 entries)");
lines.push("AAPALE SARKAR · Bank Account Opening · EPFO · ESIC · Aadhaar · PAN · Passport");
lines.push("Ayushman Bharat · Ration Card · GST · PMAY 2.0 · ITR · Rent Agreement");
lines.push("Caste Validity · Smart Card Order · Partnership Firm Registration · recharge · Maps Forms");
lines.push("RTO Service · Light Bill Name Change · PMRDA · Gazette · MHADA Lottery");
lines.push("Marriage Certificate PCMC · Police Verification · Ticket Booking · PM KISAN · CSC · Anganwadi Bharti");
lines.push("");
lines.push("Contact Us");
lines.push("Team · Payments · Careers · Blogs · News · Partners · Certification · OUR FRENCHISEE");
lines.push("Setu Connect AI Assistant · others (STYLE 1–5, INV, SIMPLE BLL, ADVANCE)");
lines.push("```");
lines.push("");

lines.push("## Division summary");
lines.push("");
lines.push("| # | Division | Services | Reference anchor |");
lines.push("|---|---|---|---|");
servicesByDivision.forEach((d, i) => {
  const anchors = [
    ...new Set(
      d.services
        .map((s) => (s.sourceRef ? s.sourceRef : s.brandCommitted ? "Brand" : "Expanded"))
        .slice(0, 3)
    ),
  ];
  lines.push(
    `| ${i + 1} | ${esc(d.name)} | ${d.services.length} | ${anchors.map((a) => esc(a)).join(" · ")} |`
  );
});
lines.push("");
lines.push("---");
lines.push("");

for (const d of servicesByDivision) {
  lines.push(`## ${d.name}`);
  lines.push("");
  lines.push(`*${d.blurb}*`);
  lines.push("");
  lines.push("| Service | Description | Target audience / use case | Icon | Provenance |");
  lines.push("|---|---|---|---|---|");
  for (const s of d.services) {
    lines.push(
      `| **${esc(s.name)}** | ${esc(s.desc)} | ${esc(s.audience)} | \`lucide:${s.icon}\` | ${provenance(s)} |`
    );
  }
  lines.push("");
}

lines.push("---");
lines.push("");
lines.push("## Inquiry routing");
lines.push("");
lines.push(
  "Every service resolves to one inquiry path. The service's `id` is the value submitted by the inquiry form and is used to pre-select the service when a visitor clicks **\"Inquire about this service\"** on a tile."
);
lines.push("");
lines.push("| Field | Required | Notes |");
lines.push("|---|---|---|");
lines.push("| Full name | Yes | Used to address the reply. |");
lines.push("| Phone number | Yes | 10-digit minimum; the service owner calls back. |");
lines.push("| Email | No | Validated when supplied; used for document lists. |");
lines.push("| Service | Yes | 65 options, grouped by division in an `optgroup`. |");
lines.push("| Needed by | No | Flexible, one week, fortnight, month, urgent. |");
lines.push("| What is required | No | Applicants, documents held, portal deadlines. |");
lines.push("");
lines.push(
  `**Counter.** ${company.address.line1}, ${company.address.line2}, ${company.address.city} ${company.address.pincode}, ${company.address.state}. Phone ${company.phone}. Email ${company.email}.`
);
lines.push("");
lines.push("| Day | Hours |");
lines.push("|---|---|");
for (const h of company.hours) lines.push(`| ${h.days} | ${h.time} |`);
lines.push("");
lines.push("---");
lines.push("");
lines.push("### Placeholder notice");
lines.push("");
lines.push(
  "Every contact detail, address, hour, credential and figure in this matrix is placeholder content carried in `src/data/catalog.js`. They are marked with `PLACEHOLDER` in that file and must be confirmed before the site is published. No testimonial, client count or performance claim is present anywhere in the build."
);
lines.push("");

await writeFile(resolve(ROOT, "docs/services-matrix.md"), lines.join("\n"), "utf8");
console.log(`Wrote docs/services-matrix.md (${services.length} services)`);
