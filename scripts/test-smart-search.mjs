import { services } from "../src/data/catalog.js";

// Specific intents without leaking generic English verbs like "update" or "card"
const INTENTS = {
  // Aadhaar
  "adhar": ["aadhaar", "uidai"],
  "aadhar": ["aadhaar", "uidai"],
  "adharcard": ["aadhaar", "uidai"],
  "aadharcard": ["aadhaar", "uidai"],
  "uidai": ["aadhaar"],
  "myaadhaar": ["aadhaar"],

  // PAN
  "pan": ["pan", "nsdl", "utiitsl"],
  "pancard": ["pan", "nsdl", "utiitsl"],
  "nsdl": ["pan"],
  "uti": ["pan"],
  "utiitsl": ["pan"],
  "incometax": ["pan", "itr"],
  "itr": ["itr"],

  // Passport
  "passport": ["passport"],
  "pasport": ["passport"],
  "tatkal": ["passport"],
  "tatkaal": ["passport"],

  // Land / 7/12 / Bhulekh / Satbara
  "satbara": ["maps-forms", "7/12", "bhulekh"],
  "saatbara": ["maps-forms", "7/12", "bhulekh"],
  "saatbaara": ["maps-forms", "7/12", "bhulekh"],
  "7/12": ["maps-forms", "7/12", "bhulekh"],
  "7 12": ["maps-forms", "7/12", "bhulekh"],
  "bhulekh": ["maps-forms"],
  "mahabhumi": ["maps-forms"],
  "ferfar": ["maps-forms"],
  "8a": ["maps-forms"],
  "khata": ["maps-forms"],

  // Ration Card
  "ration": ["ration-card"],
  "rashan": ["ration-card"],
  "rasan": ["ration-card"],
  "rationcard": ["ration-card"],
  "rcms": ["ration-card"],
  "epds": ["ration-card"],
  "mahafood": ["ration-card"],
  "dhanya": ["ration-card"],

  // Voter ID
  "voter": ["csc", "aaple-sarkar"],
  "voting": ["csc", "aaple-sarkar"],
  "voterid": ["csc", "aaple-sarkar"],
  "epic": ["csc", "aaple-sarkar"],
  "nvsp": ["csc", "aaple-sarkar"],
  "matdar": ["csc", "aaple-sarkar"],

  // Police Verification
  "police": ["police-verification"],
  "pcc": ["police-verification"],
  "charitra": ["police-verification"],

  // Driving & RTO
  "driving": ["rto-service"],
  "licence": ["rto-service"],
  "license": ["rto-service"],
  "dl": ["rto-service"],
  "sarathi": ["rto-service"],
  "rto": ["rto-service"],
  "parivahan": ["rto-service"],
  "vahan": ["rto-service"],
  "rc": ["rto-service"],

  // Ayushman Bharat
  "ayushman": ["ayushman-bharat"],
  "pmjay": ["ayushman-bharat"],
  "pm-jay": ["ayushman-bharat"],
  "golden": ["ayushman-bharat"],
  "arogya": ["ayushman-bharat"],

  // EPFO / PF
  "pf": ["epfo"],
  "epfo": ["epfo"],
  "epf": ["epfo"],
  "uan": ["epfo"],
  "provident": ["epfo"],
  "pension": ["epfo"],

  // PM Kisan
  "kisan": ["pm-kisan"],
  "pmkisan": ["pm-kisan"],
  "sheti": ["pm-kisan"],
  "farmer": ["pm-kisan"],

  // Electricity / Light bill
  "light": ["light-bill-name-change", "recharge"],
  "bijli": ["light-bill-name-change", "recharge"],
  "mseb": ["light-bill-name-change"],
  "msedcl": ["light-bill-name-change"],
  "mahavitaran": ["light-bill-name-change"],
  "electricity": ["light-bill-name-change"],

  // Scholarships
  "scholarship": ["scholarship-forms"],
  "scholarships": ["scholarship-forms"],
  "mahadbt": ["scholarship-forms"],
  "dbt": ["scholarship-forms"],
  "rte": ["rte-forms"],
  "admission": ["admissions"],

  // Certificates & Dakhla
  "caste": ["caste-validity"],
  "jat": ["caste-validity"],
  "jaat": ["caste-validity"],
  "dakhla": ["caste-validity", "aaple-sarkar"],
  "utpanna": ["aaple-sarkar"],
  "domicile": ["aaple-sarkar"],

  // Printing & Xerox
  "xerox": ["printing", "lamination-binding", "scanning"],
  "zerox": ["printing", "lamination-binding"],
  "print": ["printing", "application-printing"],
  "printing": ["printing"],
  "lamination": ["lamination-binding"],
  "scan": ["scanning"],
  "typing": ["typing-drafting"],

  // Loans
  "mudra": ["mudra-loan"],
  "loan": ["mudra-loan", "personal-loan", "business-loan"],
  "karj": ["mudra-loan", "personal-loan"],

  // Housing Lotteries
  "mhada": ["mhada-lottery"],
  "pmay": ["pmay-2"],
  "pmrda": ["pmrda"],

  // Hardware, IT & AMC
  "amc": ["amc-maintenance"],
  "computer": ["hardware-supply", "amc-maintenance", "it-support"],
  "laptop": ["hardware-supply", "amc-maintenance", "it-support"],
  "repair": ["amc-maintenance", "it-support"],
  "software": ["software-licensing"],
  "tally": ["software-licensing"],
  "antivirus": ["software-licensing"],

  // Gazette
  "gazette": ["gazette"],
  "rajpatra": ["gazette"],
  "namechange": ["gazette", "light-bill-name-change"],

  // Marriage
  "marriage": ["marriage-certificate-pcmc", "marriage-registration"],
  "vivah": ["marriage-certificate-pcmc", "marriage-registration"],
  "lagna": ["marriage-certificate-pcmc", "marriage-registration"],

  // Banking & AEPS
  "aeps": ["cash-services"],
  "atm": ["cash-services"],
  "withdrawal": ["cash-services"],
  "deposit": ["cash-services"],
  "money": ["money-transfer", "domestic-transfer"],
  "transfer": ["money-transfer", "domestic-transfer"],
  "remittance": ["international-remittance"],
  "upi": ["upi-assistance"]
};

function foldVowels(s) {
  return (s || "")
    .toLowerCase()
    .replace(/aa/g, "a")
    .replace(/ee/g, "i")
    .replace(/oo/g, "u")
    .replace(/ph/g, "f");
}

function tokenize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\/\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function calculateScore(s, query) {
  const rawQ = query.trim().toLowerCase();
  if (!rawQ) return 0;
  const foldQ = foldVowels(rawQ);

  const title = s.name.toLowerCase();
  const foldTitle = foldVowels(title);
  const titleTokens = tokenize(title);

  const id = s.id.toLowerCase();
  const foldId = foldVowels(id);

  const badge = (s.badgeText || "").toLowerCase();
  const foldBadge = foldVowels(badge);

  const desc = (s.desc || "").toLowerCase();
  const keywords = (s.keywords || []).map(k => k.toLowerCase());

  let score = 0;

  // 1. EXACT / FOLDED TITLE MATCH (Highest Priority)
  if (title === rawQ) score += 10000;
  else if (foldTitle === foldQ) score += 9500;
  else if (title.startsWith(rawQ)) score += 6000;
  else if (foldTitle.startsWith(foldQ)) score += 5500;

  // 2. TITLE TOKENS MATCH
  if (titleTokens.includes(rawQ)) score += 4000;
  else if (titleTokens.some(w => foldVowels(w) === foldQ)) score += 3800;
  else if (titleTokens.some(w => w.startsWith(rawQ))) score += 2500;
  else if (titleTokens.some(w => foldVowels(w).startsWith(foldQ))) score += 2200;

  // 3. SERVICE ID MATCH
  if (id === rawQ || foldId === foldQ) score += 5000;
  else if (id.startsWith(rawQ) || foldId.startsWith(foldQ)) score += 3000;
  else if (id.includes(rawQ) || foldId.includes(foldQ)) score += 1800;

  // 4. INTENTS LOOKUP (Curated target mapping)
  const intentTargets = INTENTS[rawQ] || INTENTS[foldQ] || [];
  for (const target of intentTargets) {
    if (id === target) score += 7000;
    else if (id.includes(target)) score += 4000;
    else if (titleTokens.includes(target) || titleTokens.some(w => foldVowels(w) === foldVowels(target))) score += 3500;
    else if (title.includes(target)) score += 2500;
    else if (badge.includes(target) || foldBadge.includes(foldVowels(target))) score += 1500;
    else if (keywords.includes(target)) score += 1000;
  }

  // 5. OFFICIAL BADGE MATCH (e.g. "UIDAI Official", "Income Tax Dept", "Passport Seva")
  const badgeTokens = tokenize(badge);
  if (badgeTokens.includes(rawQ) || badgeTokens.some(w => foldVowels(w) === foldQ)) score += 2000;
  else if (badge.startsWith(rawQ) || foldBadge.startsWith(foldQ)) score += 1500;
  else if (badge.includes(rawQ) || foldBadge.includes(foldQ)) score += 800;

  // 6. EXACT KEYWORD MATCH (Strict token boundary, no random substring)
  for (const kw of keywords) {
    const kwTokens = tokenize(kw);
    if (kw === rawQ || foldVowels(kw) === foldQ) {
      score += 1200;
    } else if (kwTokens.includes(rawQ) || kwTokens.some(w => foldVowels(w) === foldQ)) {
      score += 900;
    } else if (kwTokens.some(w => w.startsWith(rawQ) && rawQ.length >= 3)) {
      score += 400;
    }
  }

  // 7. WHOLE-WORD DESCRIPTION MATCH (Only when query >= 4 chars, low weight)
  if (rawQ.length >= 4) {
    const descTokens = tokenize(desc);
    if (descTokens.includes(rawQ) || descTokens.some(w => foldVowels(w) === foldQ)) {
      score += 200;
    }
  }

  return score;
}

function search(query) {
  return services
    .map(s => ({ service: s, score: calculateScore(s, query) }))
    .filter(res => res.score > 0)
    .sort((a, b) => b.score - a.score);
}

const testQueries = [
  "adh",
  "Adhar",
  "Aadhar",
  "pan",
  "pass",
  "Passport",
  "sat",
  "Satbara",
  "7/12",
  "rat",
  "Ration",
  "vot",
  "Voter",
  "pol",
  "Police",
  "driv",
  "Driving",
  "ayush",
  "Ayushman",
  "pf",
  "epfo",
  "kis",
  "Kisan",
  "light",
  "Bijli",
  "schol",
  "Scholarship",
  "xer",
  "Xerox",
  "tal",
  "Tally",
  "mud",
  "Mudra"
];

console.log("=== PREFIX AND FULL QUERY TESTS ===");
for (const q of testQueries) {
  const results = search(q);
  const top = results[0];
  console.log(`[${q.padEnd(12)}] -> ${top ? `(${String(top.score).padStart(5)}) ${top.service.name} [id: ${top.service.id}]` : "NO MATCH"}`);
}



