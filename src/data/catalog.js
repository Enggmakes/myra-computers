/**
 * Canonical service catalogue for Myra Computer Enterprises.
 * Enriched with direct Indian Government and official portal endpoints,
 * action labels, authentic badge types, and document verification checklists.
 */

export const divisions = [
  {
    "id": "government",
    "name": "Government & Civic Services",
    "shortName": "Government",
    "icon": "landmark",
    "blurb": "Applications, registrations and certificates handled end to end across state and central portals.",
    "theme": {
      "colorName": "orange",
      "colorHex": "#ea580c",
      "badgeClass": "badge-gov",
      "borderClass": "border-t-orange-500",
      "iconBgClass": "bg-orange-50 text-orange-600 border border-orange-200",
      "pillActiveBg": "bg-orange-600 text-white"
    }
  },
  {
    "id": "education",
    "name": "Education & Admissions",
    "shortName": "Education",
    "icon": "graduation-cap",
    "blurb": "Right-to-Education applications, scholarship forms and admission support for students and parents.",
    "theme": {
      "colorName": "emerald",
      "colorHex": "#059669",
      "badgeClass": "badge-edu",
      "borderClass": "border-t-emerald-600",
      "iconBgClass": "bg-emerald-50 text-emerald-700 border border-emerald-200",
      "pillActiveBg": "bg-emerald-600 text-white"
    }
  },
  {
    "id": "insurance",
    "name": "Insurance & Protection",
    "shortName": "Insurance",
    "icon": "shield-check",
    "blurb": "Life, health, accident and point-of-sale cover arranged with principal insurers.",
    "theme": {
      "colorName": "rose",
      "colorHex": "#e11d48",
      "badgeClass": "badge-ins",
      "borderClass": "border-t-rose-600",
      "iconBgClass": "bg-rose-50 text-rose-600 border border-rose-200",
      "pillActiveBg": "bg-rose-600 text-white"
    }
  },
  {
    "id": "credit",
    "name": "Loans & Credit",
    "shortName": "Loans",
    "icon": "badge-indian-rupee",
    "blurb": "MUDRA, personal, business and POS credit, assessed and progressed at the counter.",
    "theme": {
      "colorName": "amber",
      "colorHex": "#d97706",
      "badgeClass": "badge-credit",
      "borderClass": "border-t-amber-600",
      "iconBgClass": "bg-amber-50 text-amber-700 border border-amber-200",
      "pillActiveBg": "bg-amber-600 text-white"
    }
  },
  {
    "id": "print",
    "name": "Print & Documentation",
    "shortName": "Printing",
    "icon": "printer",
    "blurb": "The document room: printing, scanning, lamination, binding, typing and drafting.",
    "theme": {
      "colorName": "rust",
      "colorHex": "#c2410c",
      "badgeClass": "badge-print",
      "borderClass": "border-t-orange-700",
      "iconBgClass": "bg-orange-50 text-orange-800 border border-orange-200",
      "pillActiveBg": "bg-orange-700 text-white"
    }
  },
  {
    "id": "payments",
    "name": "Money Transfer & Payments",
    "shortName": "Payments",
    "icon": "wallet",
    "blurb": "Counter and digital transfers, deposits and withdrawals, and merchant settlement.",
    "theme": {
      "colorName": "green",
      "colorHex": "#15803d",
      "badgeClass": "badge-pay",
      "borderClass": "border-t-green-600",
      "iconBgClass": "bg-green-50 text-green-700 border border-green-200",
      "pillActiveBg": "bg-green-600 text-white"
    }
  },
  {
    "id": "employment",
    "name": "Employment & Recruitment",
    "shortName": "Employment",
    "icon": "users-round",
    "blurb": "A placement desk for job seekers, and staffing support for employers who need people.",
    "theme": {
      "colorName": "purple",
      "colorHex": "#7c3aed",
      "badgeClass": "badge-emp",
      "borderClass": "border-t-purple-600",
      "iconBgClass": "bg-purple-50 text-purple-700 border border-purple-200",
      "pillActiveBg": "bg-purple-600 text-white"
    }
  },
  {
    "id": "commerce",
    "name": "Sales & Commerce",
    "shortName": "Commerce",
    "icon": "store",
    "blurb": "Property transactions, industrial supply, and second-hand vehicle brokerage.",
    "theme": {
      "colorName": "blue",
      "colorHex": "#2563eb",
      "badgeClass": "badge-com",
      "borderClass": "border-t-blue-600",
      "iconBgClass": "bg-blue-50 text-blue-700 border border-blue-200",
      "pillActiveBg": "bg-blue-600 text-white"
    }
  },
  {
    "id": "travel",
    "name": "Travel & Tourism",
    "shortName": "Travel",
    "icon": "plane",
    "blurb": "Tickets, packages, stays and the paperwork that travels with you.",
    "theme": {
      "colorName": "sky",
      "colorHex": "#0284c7",
      "badgeClass": "badge-travel",
      "borderClass": "border-t-sky-600",
      "iconBgClass": "bg-sky-50 text-sky-700 border border-sky-200",
      "pillActiveBg": "bg-sky-600 text-white"
    }
  },
  {
    "id": "technology",
    "name": "Technology & IT",
    "shortName": "Technology",
    "icon": "cpu",
    "blurb": "The core engineering practice: hardware, networks, software, security and support.",
    "theme": {
      "colorName": "cyan",
      "colorHex": "#0891b2",
      "badgeClass": "badge-tech",
      "borderClass": "border-t-cyan-500",
      "iconBgClass": "bg-cyan-50 text-cyan-800 border border-cyan-200",
      "pillActiveBg": "bg-cyan-700 text-white"
    }
  },
  {
    "id": "personal",
    "name": "Marriage & Personal Records",
    "shortName": "Personal",
    "icon": "heart",
    "blurb": "Registration, certificates and event paperwork for the milestones that matter.",
    "theme": {
      "colorName": "pink",
      "colorHex": "#db2777",
      "badgeClass": "badge-personal",
      "borderClass": "border-t-pink-500",
      "iconBgClass": "bg-pink-50 text-pink-700 border border-pink-200",
      "pillActiveBg": "bg-pink-600 text-white"
    }
  }
];

export const services = [
  {
    "id": "aaple-sarkar",
    "division": "government",
    "name": "Aaple Sarkar Portal Access",
    "sourceRef": "AAPALE SARKAR",
    "icon": "globe",
    "desc": "Guided access to the State Government scheme and application portal, including scheme discovery and application filing.",
    "audience": "Citizens, small traders and applicants unaware of which scheme applies",
    "keywords": [
      "maharashtra",
      "state scheme",
      "portal",
      "yojana"
    ],
    "portalUrl": "https://aaplesarkar.mahaonline.gov.in/",
    "portalName": "Aaple Sarkar MahaOnline",
    "actionLabel": "Open Aaple Sarkar Portal",
    "badgeText": "MahaGovt Official",
    "isGov": true
  },
  {
    "id": "bank-account-opening",
    "division": "government",
    "name": "Bank Account Opening",
    "sourceRef": "Bank Account Opening",
    "icon": "building-2",
    "desc": "New savings accounts, zero-balance and Jan Dhan accounts, with KYC completed at the counter.",
    "audience": "First-time account holders, students, workers and micro-entrepreneurs",
    "keywords": [
      "jan dhan",
      "zero balance",
      "savings",
      "kyc",
      "bank"
    ],
    "portalUrl": "https://pmjdy.gov.in/",
    "portalName": "PM Jan Dhan Yojana (PMJDY)",
    "actionLabel": "Open Jan Dhan Portal",
    "badgeText": "Govt Banking",
    "isGov": true
  },
  {
    "id": "epfo",
    "division": "government",
    "name": "EPFO Services",
    "sourceRef": "Epfo",
    "icon": "briefcase-business",
    "desc": "EPFO enrolment, employer registration, contribution records, claims and provident fund account updates.",
    "audience": "Salaried employees, contract staff and small employers",
    "keywords": [
      "pf",
      "provident fund",
      "retirement",
      "employee"
    ],
    "portalUrl": "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
    "portalName": "EPFO Member UAN Portal",
    "actionLabel": "Open EPFO Member Portal",
    "badgeText": "EPFO Central",
    "isGov": true
  },
  {
    "id": "esic",
    "division": "government",
    "name": "ESIC Services",
    "sourceRef": "Esic",
    "icon": "briefcase-medical",
    "desc": "ESIC registration for employers and employees, contribution statements and benefit claims.",
    "audience": "Employers with insured staff and workers in covered employment",
    "keywords": [
      "medical",
      "insurance",
      "worker",
      "employer"
    ],
    "portalUrl": "https://www.esic.gov.in/",
    "portalName": "ESIC Citizen & Employer Portal",
    "actionLabel": "Open ESIC Portal",
    "badgeText": "Ministry of Labour",
    "isGov": true
  },
  {
    "id": "aadhaar",
    "division": "government",
    "name": "Aadhaar Services",
    "sourceRef": "Adhar",
    "icon": "id-card",
    "desc": "Aadhaar enrolment, address and demographic updates, and PVC card issuance.",
    "audience": "Every adult and minor needing a verified identity document",
    "keywords": [
      "uidai",
      "identity",
      "address change",
      "pvc card",
      "e-aadhaar"
    ],
    "portalUrl": "https://myaadhaar.uidai.gov.in/",
    "portalName": "UIDAI myAadhaar Portal",
    "actionLabel": "Open myAadhaar (UIDAI)",
    "badgeText": "UIDAI Official",
    "isGov": true
  },
  {
    "id": "pan",
    "division": "government",
    "name": "PAN Card Services",
    "sourceRef": "Pan",
    "icon": "id-card",
    "desc": "New PAN applications, corrections to name and date of birth, and reprint requests.",
    "audience": "Students, salaried applicants and businesses filing returns",
    "keywords": [
      "income tax",
      "nsdl",
      "utiitsl",
      "correction",
      "tax"
    ],
    "portalUrl": "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    "portalName": "Protean NSDL / UTIITSL",
    "actionLabel": "Apply on NSDL PAN Portal",
    "badgeText": "Income Tax Dept",
    "isGov": true
  },
  {
    "id": "passport",
    "division": "government",
    "name": "Passport Application Services",
    "sourceRef": "Passport",
    "icon": "plane",
    "desc": "Fresh passport applications, renewals, reissue on lost or damaged documents, and police clearance coordination.",
    "audience": "Applicants for domestic travel, study or employment abroad",
    "keywords": [
      "passport office",
      "psp",
      "renewal",
      "police clearance"
    ],
    "portalUrl": "https://www.passportindia.gov.in/",
    "portalName": "Passport Seva Kendra (PSP)",
    "actionLabel": "Open Passport Seva Portal",
    "badgeText": "MEA Central",
    "isGov": true
  },
  {
    "id": "ayushman-bharat",
    "division": "government",
    "name": "Ayushman Bharat (PM-JAY)",
    "sourceRef": "Aushman Bharat",
    "icon": "heart-pulse",
    "desc": "Ayushman Bharat card enrolment, beneficiary verification and hospital cashless entitlement assistance.",
    "audience": "Low-income families seeking ₹5 lakh of secondary and tertiary health cover",
    "keywords": [
      "pm jay",
      "health card",
      "beneficiary",
      "hospital"
    ],
    "portalUrl": "https://beneficiary.nha.gov.in/",
    "portalName": "PM-JAY Beneficiary Portal",
    "actionLabel": "Open PM-JAY Portal",
    "badgeText": "National Health Auth",
    "isGov": true
  },
  {
    "id": "ration-card",
    "division": "government",
    "name": "Ration Card Services",
    "sourceRef": "RATION CARD",
    "icon": "receipt",
    "desc": "New ration cards, family member additions and deletions, name corrections and card reprints.",
    "audience": "Households drawing subsidised food grains",
    "keywords": [
      "food grain",
      "tpd",
      "family",
      "reprint"
    ],
    "portalUrl": "https://rcms.mahafood.gov.in/",
    "portalName": "MahaFood RCMS (NFSA)",
    "actionLabel": "Open MahaFood RCMS Portal",
    "badgeText": "Food & Civil Supplies",
    "isGov": true
  },
  {
    "id": "gst",
    "division": "government",
    "name": "GST Registration & Returns",
    "sourceRef": "GST",
    "icon": "file-text",
    "desc": "GST registration, amendment of registration data, and monthly or quarterly return filing.",
    "audience": "Traders, manufacturers, service firms and online sellers",
    "keywords": [
      "goods and services tax",
      "gstin",
      "return",
      "turnover"
    ],
    "portalUrl": "https://www.gst.gov.in/",
    "portalName": "GST Common Portal (GSTN)",
    "actionLabel": "Open GST Common Portal",
    "badgeText": "CBIC / GSTN",
    "isGov": true
  },
  {
    "id": "pmay-2",
    "division": "government",
    "name": "PMAY 2.0 Housing Support",
    "sourceRef": "Pmay 2.0",
    "icon": "house",
    "desc": "Pradhan Mantri Awas Yojana 2.0 applications, urban credit-linked subsidy verification and document submission.",
    "audience": "First-time home buyers and applicants for affordable urban housing",
    "keywords": [
      "housing",
      "subsidy",
      "home loan",
      "urban",
      "affordable housing"
    ],
    "portalUrl": "https://pmay-urban.gov.in/",
    "portalName": "PMAY Urban 2.0 Portal",
    "actionLabel": "Open PMAY Urban 2.0",
    "badgeText": "MoHUA Housing",
    "isGov": true
  },
  {
    "id": "itr",
    "division": "government",
    "name": "Income Tax Return Filing",
    "sourceRef": "ITR",
    "icon": "file-text",
    "desc": "Return preparation and filing for individuals, proprietors, partnerships and companies, with e-verification.",
    "audience": "Salaried taxpayers, traders and small business owners",
    "keywords": [
      "income tax",
      "return filing",
      "tax refund",
      "26as",
      "tds"
    ],
    "portalUrl": "https://www.incometax.gov.in/iec/fposervices/",
    "portalName": "Income Tax e-Filing Portal",
    "actionLabel": "Open Income Tax e-Filing",
    "badgeText": "CBDT / IT Dept",
    "isGov": true
  },
  {
    "id": "rent-agreement",
    "division": "government",
    "name": "Rent Agreement Registration",
    "sourceRef": "RENT AGRIMENT",
    "icon": "file-text",
    "desc": "Drafting, printing and registration of rent agreements for tenant and landlord, with supporting copies.",
    "audience": "Landlords and tenants needing a registered tenancy record",
    "keywords": [
      "tenancy",
      "lease",
      "agreement",
      "landlord",
      "tenant"
    ],
    "portalUrl": "https://igrmaharashtra.gov.in/",
    "portalName": "IGR Maharashtra e-Registration",
    "actionLabel": "Open IGR Maharashtra Portal",
    "badgeText": "Govt of Maharashtra",
    "isGov": true
  },
  {
    "id": "caste-validity",
    "division": "government",
    "name": "Caste Validity Certificate",
    "sourceRef": "CASTE VALIDITY",
    "icon": "badge-check",
    "desc": "Application preparation and filing for caste validity certificates, including the supporting affidavit and evidence pack.",
    "audience": "Students and job applicants needing a valid caste certificate",
    "keywords": [
      "sc, st, obc",
      "certificate",
      "affidavit",
      "validity"
    ],
    "portalUrl": "https://castevalidity.mahaonline.gov.in/",
    "portalName": "CCVIS Caste Validity MahaOnline",
    "actionLabel": "Open CCVIS MahaOnline",
    "badgeText": "Social Justice Dept",
    "isGov": true
  },
  {
    "id": "smart-card-order",
    "division": "government",
    "name": "Smart Card Ordering",
    "sourceRef": "SMART CARD ORDER",
    "icon": "credit-card",
    "desc": "Ordering and reprinting of smart cards issued against ration, health and welfare schemes.",
    "audience": "Beneficiaries of state and central welfare schemes",
    "keywords": [
      "smart card",
      "ruma",
      "welfare",
      "reprint"
    ],
    "portalUrl": "https://aaplesarkar.mahaonline.gov.in/",
    "portalName": "MahaOnline Smart Cards",
    "actionLabel": "Order Smart PVC Card",
    "badgeText": "MahaOnline Service",
    "isGov": true
  },
  {
    "id": "partnership-firm-registration",
    "division": "government",
    "name": "Partnership Firm Registration",
    "sourceRef": "Partnership Firm Registrastion",
    "icon": "building",
    "desc": "Deed drafting, signature coordination and registration of a partnership firm with the Registrar.",
    "audience": "New businesses forming a partnership rather than a company",
    "keywords": [
      "firm",
      "deed",
      "registrar",
      "msme",
      "business registration"
    ],
    "portalUrl": "https://rof.mahaonline.gov.in/",
    "portalName": "Registrar of Firms (RoF)",
    "actionLabel": "Open RoF Maharashtra Portal",
    "badgeText": "Registrar of Firms",
    "isGov": true
  },
  {
    "id": "recharge",
    "division": "government",
    "name": "Recharge & Bill Payment",
    "sourceRef": "recharge",
    "icon": "smartphone",
    "desc": "Mobile, DTH and data recharge alongside electricity, water and municipal bill payment.",
    "audience": "Everyday counter traffic and households without digital payment access",
    "keywords": [
      "bill",
      "electricity",
      "water",
      "top up",
      "mobile"
    ],
    "portalUrl": "https://www.bharatbillpay.com/",
    "portalName": "Bharat BillPay (BBPS)",
    "actionLabel": "Open Bharat BillPay",
    "badgeText": "NPCI BBPS",
    "isGov": true
  },
  {
    "id": "maps-forms",
    "division": "government",
    "name": "Maps Forms & Land Records",
    "sourceRef": "Maps Forms",
    "icon": "map-pin",
    "desc": "7/12 extracts, land record applications, property maps and mutation paperwork.",
    "audience": "Property buyers, tenants and farmers verifying land holdings",
    "keywords": [
      "7/12",
      "satbar",
      "land",
      "mutation",
      "property map"
    ],
    "portalUrl": "https://bhulekh.mahabhumi.gov.in/",
    "portalName": "Mahabhumi Bhulekh (7/12 & 8A)",
    "actionLabel": "Open Bhulekh 7/12 Mahabhumi",
    "badgeText": "Land Records Dept",
    "isGov": true
  },
  {
    "id": "rto-service",
    "division": "government",
    "name": "RTO Vehicle Services",
    "sourceRef": "RTO SERVICE",
    "icon": "car",
    "desc": "Driving licence applications and renewals, registration certificate work, permits, fitness and challan payment.",
    "audience": "Vehicle owners and prospective licence holders",
    "keywords": [
      "rto",
      "driving licence",
      "rc",
      "permit",
      "fitness",
      "challan",
      "vehicle"
    ],
    "portalUrl": "https://parivahan.gov.in/parivahan/",
    "portalName": "Parivahan Sewa (MoRTH)",
    "actionLabel": "Open Parivahan Sewa (RTO)",
    "badgeText": "MoRTH Parivahan",
    "isGov": true
  },
  {
    "id": "light-bill-name-change",
    "division": "government",
    "name": "Light Bill Name Change",
    "sourceRef": "Light Bill Name change",
    "icon": "receipt",
    "desc": "Transferring a electricity connection to a new name, tenant or owner, with all supporting forms filed.",
    "audience": "Tenants, new owners and property transfers",
    "keywords": [
      "electricity",
      "connection",
      "transfer",
      "consumer"
    ],
    "portalUrl": "https://wss.mahadiscom.in/wss/wss",
    "portalName": "Mahavitaran (MSEDCL)",
    "actionLabel": "Open Mahavitaran Portal",
    "badgeText": "MSEDCL Electricity",
    "isGov": true
  },
  {
    "id": "pmrda",
    "division": "government",
    "name": "PMRDA Plot & Lottery Services",
    "sourceRef": "PMRDA",
    "icon": "map-pin",
    "desc": "PMRDA scheme applications, plot allotment and lottery participation for the metropolitan region.",
    "audience": "Prospective buyers of residential and commercial plots",
    "keywords": [
      "pmrda",
      "plot",
      "lottery",
      "allotment",
      "metropolitan"
    ],
    "portalUrl": "https://www.pmrda.gov.in/",
    "portalName": "PMRDA Official Portal",
    "actionLabel": "Open PMRDA Official Portal",
    "badgeText": "Pune Metro Authority",
    "isGov": true
  },
  {
    "id": "gazette",
    "division": "government",
    "name": "Gazette Publication",
    "sourceRef": "gazette",
    "icon": "scroll-text",
    "desc": "Publication of notices, tenders and legal advertisements in the official gazette.",
    "audience": "Businesses and individuals with a statutory publication requirement",
    "keywords": [
      "notice",
      "tender",
      "legal",
      "advertisement",
      "official"
    ],
    "portalUrl": "https://egazette.mahaonline.gov.in/",
    "portalName": "e-Gazette Maharashtra",
    "actionLabel": "Open e-Gazette MahaOnline",
    "badgeText": "State Printing Press",
    "isGov": true
  },
  {
    "id": "mhada-lottery",
    "division": "government",
    "name": "MHADA Housing Lottery",
    "sourceRef": "MHADA LOTTERY",
    "icon": "house",
    "desc": "Application assistance, lottery participation and allotment tracking for MHADA housing schemes.",
    "audience": "Families seeking subsidised housing through MHADA",
    "keywords": [
      "mhada",
      "housing",
      "lottery",
      " allotted",
      "rent house"
    ],
    "portalUrl": "https://housing.mhada.gov.in/",
    "portalName": "MHADA Housing Lottery",
    "actionLabel": "Open MHADA Lottery Portal",
    "badgeText": "MHADA Official",
    "isGov": true
  },
  {
    "id": "marriage-certificate-pcmc",
    "division": "government",
    "name": "Marriage Certificate (PCMC)",
    "sourceRef": "Marriage certificate PCMC",
    "icon": "heart",
    "desc": "Marriage registration and certified copies of the marriage register for municipal ward offices.",
    "audience": "Newlyweds needing proof of marriage for records and claims",
    "keywords": [
      "pcmc",
      "marriage",
      "certificate",
      "wedding",
      "registration"
    ],
    "portalUrl": "https://www.pcmcindia.gov.in/",
    "portalName": "PCMC Citizen Services Portal",
    "actionLabel": "Open PCMC Citizen Portal",
    "badgeText": "PCMC Civic Body",
    "isGov": true
  },
  {
    "id": "police-verification",
    "division": "government",
    "name": "Police Verification",
    "sourceRef": "POLICE VERIFICATION",
    "icon": "shield-check",
    "desc": "Passport, visa and employment police verification applications submitted and tracked.",
    "audience": "Applicants for passports, visas and government positions",
    "keywords": [
      "verification",
      "passport",
      "employment",
      "pvc"
    ],
    "portalUrl": "https://pcs.mahaonline.gov.in/",
    "portalName": "Maharashtra Police PCS Portal",
    "actionLabel": "Open Police Clearance (PCS)",
    "badgeText": "Maharashtra Police",
    "isGov": true
  },
  {
    "id": "ticket-booking-govt",
    "division": "government",
    "name": "Government Ticket Booking",
    "sourceRef": "TICKET BOOKING",
    "icon": "ticket",
    "desc": "Reserved and unreserved tickets on state transport services, with the passenger's documents verified at the counter.",
    "audience": "Commuters booking on MSRTC and city bus services",
    "keywords": [
      "msrtc",
      "bus",
      "travel",
      "reservation",
      "bus pass"
    ],
    "portalUrl": "https://msrtc.maharashtra.gov.in/",
    "portalName": "MSRTC Bus Booking (ST Maha)",
    "actionLabel": "Open MSRTC ST Portal",
    "badgeText": "State Transport",
    "isGov": true
  },
  {
    "id": "pm-kisan",
    "division": "government",
    "name": "PM KISAN Registration",
    "sourceRef": "PM KISAN",
    "icon": "wheat",
    "desc": "PM KISAN enrolment, e-KYC completion, beneficiary list correction and instalment status checks.",
    "audience": "Landholding farmer families",
    "keywords": [
      "kisan",
      "farmer",
      "ekyc",
      "instalment",
      "income support"
    ],
    "portalUrl": "https://pmkisan.gov.in/",
    "portalName": "PM-KISAN Samman Nidhi",
    "actionLabel": "Open PM-KISAN Portal",
    "badgeText": "Dept of Agriculture",
    "isGov": true
  },
  {
    "id": "csc",
    "division": "government",
    "name": "CSC Common Services",
    "sourceRef": "csc",
    "icon": "monitor",
    "desc": "Bill payment, certificate applications and online form submission delivered through the Common Service Centre.",
    "audience": "Anyone needing a certified government service without a queue",
    "keywords": [
      "common service centre",
      "csc",
      "online form",
      "certified"
    ],
    "portalUrl": "https://digitalseva.csc.gov.in/",
    "portalName": "Digital Seva (CSC Portal)",
    "actionLabel": "Open Digital Seva CSC",
    "badgeText": "MeitY CSC India",
    "isGov": true
  },
  {
    "id": "anganwadi-bharti",
    "division": "government",
    "name": "Anganwadi Bharti",
    "sourceRef": "ANGANWADI BHARTI",
    "icon": "users",
    "desc": "Application filing for Anganwadi recruitment, including application preparation and document upload.",
    "audience": "Candidates for supervisor and helper posts",
    "keywords": [
      "anganwadi",
      "recruitment",
      "job",
      "apply",
      "maharashtra"
    ],
    "portalUrl": "https://wcd.maharashtra.gov.in/",
    "portalName": "Maha Women & Child Dev (WCD)",
    "actionLabel": "Open Maha WCD Portal",
    "badgeText": "WCD Maharashtra",
    "isGov": true
  },
  {
    "id": "rte-forms",
    "division": "education",
    "name": "Right to Education Forms",
    "sourceRef": "Rte Forms",
    "icon": "graduation-cap",
    "desc": "RTE admission applications, lottery participation and school allotment processing.",
    "audience": "Parents seeking admission for children from reserved categories",
    "keywords": [
      "rte",
      "school admission",
      "lottery",
      "school"
    ],
    "portalUrl": "https://student.maharashtra.gov.in/adm_portal/",
    "portalName": "RTE Maharashtra 25% Portal",
    "actionLabel": "Open RTE Admissions Portal",
    "badgeText": "School Education Dept",
    "isGov": true
  },
  {
    "id": "scholarship-forms",
    "division": "education",
    "name": "Scholarship Forms",
    "sourceRef": "Escholership Forms",
    "icon": "badge-check",
    "desc": "Preparation and submission of central and state scholarship applications, with document bundling.",
    "audience": "Students across pre-matric, post-matric and merit categories",
    "keywords": [
      "scholarship",
      "nsp",
      "mahadbt",
      "fee reimbursement",
      "student"
    ],
    "portalUrl": "https://mahadbt.maharashtra.gov.in/",
    "portalName": "MahaDBT Scholarship Portal",
    "actionLabel": "Open MahaDBT Portal",
    "badgeText": "MahaDBT Direct",
    "isGov": true
  },
  {
    "id": "admissions",
    "division": "education",
    "name": "Admissions Assistance",
    "sourceRef": "Addmissions",
    "icon": "scroll-text",
    "desc": "Admission form filling, document collation and application submission for colleges and professional courses.",
    "audience": "Students applying to degree, diploma and vocational programmes",
    "keywords": [
      "admission",
      "college",
      "application",
      "merit",
      "cap round"
    ],
    "portalUrl": "https://cetcell.mahacet.org/",
    "portalName": "State Common Entrance Test Cell",
    "actionLabel": "Open State CET Cell",
    "badgeText": "CET Cell Maharashtra",
    "isGov": true
  },
  {
    "id": "lic",
    "division": "insurance",
    "name": "LIC Life Insurance",
    "sourceRef": "LIC",
    "icon": "shield-check",
    "desc": "New life policies, premium collection, revival and claims support for Life Insurance Corporation policies.",
    "audience": "Families and individuals planning long-term cover",
    "keywords": [
      "lic",
      "term plan",
      "endowment",
      "premium",
      "claim"
    ],
    "portalUrl": "https://licindia.in/",
    "portalName": "Life Insurance Corporation (LIC)",
    "actionLabel": "Open LIC Official Portal",
    "badgeText": "Govt Life Insurer",
    "isGov": true
  },
  {
    "id": "star-health",
    "division": "insurance",
    "name": "Star Health Cover",
    "sourceRef": "Star Health",
    "icon": "heart-pulse",
    "desc": "Retail and family health policies, hospital cash and top-up plans with renewal assistance.",
    "audience": "Individuals and families buying private health cover",
    "keywords": [
      "star health",
      "health insurance",
      "family floater",
      "top up"
    ],
    "portalUrl": "https://www.starhealth.in/",
    "portalName": "Star Health & Allied Insurance",
    "actionLabel": "Open Star Health Portal",
    "badgeText": "Health Protection",
    "isGov": false
  },
  {
    "id": "hdfc-ergo",
    "division": "insurance",
    "name": "HDFC Ergo Cover",
    "sourceRef": "HDFC Ergo",
    "icon": "shield",
    "desc": "Accident and hospital cash policies from HDFC Ergo, including motor-linked accident cover.",
    "audience": "Motorists, gig workers and families seeking accident cover",
    "keywords": [
      "hdfc ergo",
      "accident",
      "motor",
      "hospital cash"
    ],
    "portalUrl": "https://www.hdfcergo.com/",
    "portalName": "HDFC ERGO General Insurance",
    "actionLabel": "Open HDFC ERGO Portal",
    "badgeText": "General Insurance",
    "isGov": false
  },
  {
    "id": "pik-vima",
    "division": "insurance",
    "name": "PM Suraksha & Jeevan Jyoti",
    "sourceRef": "PIK VIMA",
    "icon": "users",
    "desc": "Voluntary enrolment and premium payment for the government life and accident insurance schemes.",
    "audience": "Low-income households eligible for subsidised cover",
    "keywords": [
      "pmsby",
      "pmjjby",
      "vima",
      "premium",
      "government scheme"
    ],
    "portalUrl": "https://pmfby.gov.in/",
    "portalName": "PM Fasal Bima Yojana (PMFBY)",
    "actionLabel": "Open PMFBY Crop Insurance",
    "badgeText": "Central Scheme",
    "isGov": true
  },
  {
    "id": "pos-insurance",
    "division": "insurance",
    "name": "Point of Sale Cover",
    "sourceRef": "POS",
    "icon": "credit-card",
    "desc": "Short-duration POS insurance for travellers, vehicles and goods in transit, issued at the counter.",
    "audience": "Customers needing immediate, low-term cover",
    "keywords": [
      "pos",
      "point of sale",
      "travel cover",
      "short term"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20a%20quote%20for%20POS%20Insurance",
    "portalName": "Counter POS Insurance Desk",
    "actionLabel": "Get Instant Policy Quote",
    "badgeText": "IRDAI Registered",
    "isGov": false
  },
  {
    "id": "mudra-loan",
    "division": "credit",
    "name": "MUDRA Loan",
    "sourceRef": "MUDRA lOAN",
    "icon": "badge-indian-rupee",
    "desc": "Shishu, Kishore and Tarun MUDRA applications prepared, filed and progressed with the lender.",
    "audience": "Micro-entrepreneurs and small traders seeking collateral-free credit",
    "keywords": [
      "mudra",
      "shishu",
      "kishore",
      "tarun",
      "collateral free"
    ],
    "portalUrl": "https://www.mudra.org.in/",
    "portalName": "PMMY MUDRA Portal",
    "actionLabel": "Open PMMY MUDRA Portal",
    "badgeText": "PMMY Central",
    "isGov": true
  },
  {
    "id": "personal-loan",
    "division": "credit",
    "name": "Personal Loan",
    "sourceRef": "PERSONAL Loan",
    "icon": "wallet",
    "desc": "Unsecured personal credit applications, with eligibility assessment and document coordination.",
    "audience": "Individuals funding medical, wedding or household needs",
    "keywords": [
      "personal loan",
      "unsecured",
      "salaried"
    ],
    "portalUrl": "https://www.psbloansin59minutes.com/",
    "portalName": "PSB Loans in 59 Minutes",
    "actionLabel": "Open PSB Loans Portal",
    "badgeText": "Public Sector Bank",
    "isGov": true
  },
  {
    "id": "business-loan",
    "division": "credit",
    "name": "Business Loan",
    "sourceRef": "buissness loan",
    "icon": "factory",
    "desc": "Working capital and term loans for MSMEs and proprietors, including business banking setup.",
    "audience": "Manufacturers, retailers and service businesses",
    "keywords": [
      "msme",
      "working capital",
      "term loan",
      "business",
      "enterprise"
    ],
    "portalUrl": "https://www.psbloansin59minutes.com/",
    "portalName": "MSME / PSB Business Loans",
    "actionLabel": "Open MSME Loan Portal",
    "badgeText": "MSME Ministry",
    "isGov": true
  },
  {
    "id": "finance-pos",
    "division": "credit",
    "name": "POS Finance",
    "sourceRef": "Finance POS",
    "icon": "scan-line",
    "desc": "Point-of-sale credit for retail and consumer transactions, with repayment tracked through the counter.",
    "audience": "Retail customers and small merchants extending credit at the till",
    "keywords": [
      "pos",
      "merchant",
      "retail credit",
      "repayment"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20details%20for%20Merchant%20POS%20Finance",
    "portalName": "Merchant POS Finance Desk",
    "actionLabel": "Inquire POS Machine",
    "badgeText": "Merchant POS",
    "isGov": false
  },
  {
    "id": "annasaheb-patil",
    "division": "credit",
    "name": "Annasaheb Patil Credit",
    "sourceRef": "annasaheb patil",
    "icon": "landmark",
    "desc": "Applications under the Annasaheb Patil credit schemes for rural and self-help group borrowers.",
    "audience": "SHG members and rural borrowers under state credit schemes",
    "keywords": [
      "annasaheb patil",
      "shg",
      "rural",
      "state scheme",
      "credit"
    ],
    "portalUrl": "https://urjapawap.maharashtra.gov.in/",
    "portalName": "Annasaheb Patil Mandal (APESTCL)",
    "actionLabel": "Open Annasaheb Patil Portal",
    "badgeText": "MahaGovt Subsidy",
    "isGov": true
  },
  {
    "id": "printing",
    "division": "print",
    "name": "Printing Services",
    "sourceRef": "Printing",
    "icon": "printer",
    "desc": "Colour and mono printing of applications, certificates, letters and office documents on the counter.",
    "audience": "Anyone with a form to file, a document to copy or a notice to publish",
    "keywords": [
      "print",
      "xerox",
      "photocopy",
      "application form",
      "counter"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20have%20a%20Print%20Job",
    "portalName": "Shivajinagar Document Room",
    "actionLabel": "Send Print Job on WhatsApp",
    "badgeText": "High-Speed Print",
    "isGov": false
  },
  {
    "id": "documents",
    "division": "print",
    "name": "Documents & Forms Library",
    "sourceRef": "DOCUMENTS",
    "icon": "folder-open",
    "desc": "A maintained library of blank government forms, affidavits and certificates, printed on demand.",
    "audience": "Applicants who need a correct, current form without a search",
    "keywords": [
      "blank form",
      "affidavit",
      "library",
      "download",
      "form"
    ],
    "portalUrl": "#documents",
    "portalName": "Document Verification Desk",
    "actionLabel": "View Document Checklist",
    "badgeText": "Paperwork Guide",
    "isGov": false
  },
  {
    "id": "scanning",
    "division": "print",
    "name": "Scanning & Digitisation",
    "expanded": true,
    "icon": "scan-line",
    "desc": "Document scanning at print resolution, with file naming and PDF packaging for upload.",
    "audience": "Applicants uploading documents to government portals",
    "keywords": [
      "scan",
      "pdf",
      "upload",
      "digitise",
      "copy"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Document%20Scanning%20and%20Digitisation",
    "portalName": "High-Res OCR Scanning Desk",
    "actionLabel": "Book Scanning & OCR",
    "badgeText": "PDF / OCR Archive",
    "isGov": false
  },
  {
    "id": "lamination-binding",
    "division": "print",
    "name": "Lamination & Binding",
    "expanded": true,
    "icon": "layers",
    "desc": "Lamination of certificates and cards, and spiral, staple and hard binding of dossiers.",
    "audience": "Students, applicants and office staff preparing records",
    "keywords": [
      "lamination",
      "spiral binding",
      "hard binding",
      "soft cover"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Lamination%20and%20Binding",
    "portalName": "Lamination & Spiral Desk",
    "actionLabel": "Order Lamination / Binding",
    "badgeText": "Instant Counter",
    "isGov": false
  },
  {
    "id": "typing-drafting",
    "division": "print",
    "name": "Typing & Drafting",
    "expanded": true,
    "icon": "notebook-pen",
    "desc": "Document typing, letter drafting, affidavit preparation and resume preparation.",
    "audience": "Job applicants, litigants and small business owners",
    "keywords": [
      "typing",
      "drafting",
      "affidavit",
      "resume",
      "cv",
      "application letter"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Typing%20or%20Affidavit%20Drafting",
    "portalName": "Legal Typing & Affidavit Desk",
    "actionLabel": "Draft Legal Document",
    "badgeText": "English & Marathi",
    "isGov": false
  },
  {
    "id": "application-printing",
    "division": "print",
    "name": "Application Print Runs",
    "expanded": true,
    "icon": "file-text",
    "desc": "Bulk printing of application forms for institutions, schools, societies and offices.",
    "audience": "Institutions filing a batch of forms on behalf of many people",
    "keywords": [
      "bulk print",
      "batch",
      "institution",
      "school"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Online%20Form%20Printout",
    "portalName": "Application Print Desk",
    "actionLabel": "Print Application Form",
    "badgeText": "Color / B&W",
    "isGov": false
  },
  {
    "id": "id-card-printing",
    "division": "print",
    "name": "ID Card Printing",
    "expanded": true,
    "icon": "id-card",
    "desc": "Photo ID cards, staff cards, badges and membership cards for organisations.",
    "audience": "Offices, associations, hostels and coaching centres",
    "keywords": [
      "id card",
      "badge",
      "membership card",
      "staff card"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20PVC%20Smart%20Card%20Printing",
    "portalName": "PVC Smart Card Unit",
    "actionLabel": "Order PVC Smart Card",
    "badgeText": "Durable PVC",
    "isGov": false
  },
  {
    "id": "signage",
    "division": "print",
    "name": "Banners & Signage",
    "expanded": true,
    "icon": "layout-panel-top",
    "desc": "Banners, flex boards, standees and office signage produced and installed.",
    "audience": "Shops, societies, offices and event organisers",
    "keywords": [
      "banner",
      "flex",
      "standee",
      "signage",
      "shop board"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Signage%20and%20Flex",
    "portalName": "Signage & Display Print",
    "actionLabel": "Request Signage Quote",
    "badgeText": "Commercial Display",
    "isGov": false
  },
  {
    "id": "money-transfer",
    "division": "payments",
    "name": "Money Transfer",
    "sourceRef": "Money Transfer",
    "icon": "send",
    "desc": "Counter-based transfer of funds with an acknowledgement slip issued on the spot.",
    "audience": "Anyone sending money to someone who may not use a banking app",
    "keywords": [
      "transfer",
      "remittance",
      "counter",
      "send money"
    ],
    "portalUrl": "https://www.npci.org.in/",
    "portalName": "NPCI Domestic Money Transfer",
    "actionLabel": "Domestic Transfer Desk",
    "badgeText": "IMPS / NEFT 24x7",
    "isGov": false
  },
  {
    "id": "domestic-transfer",
    "division": "payments",
    "name": "Domestic Transfers",
    "expanded": true,
    "icon": "banknote",
    "desc": "Same-day domestic transfers by IMPS, NEFT and RTGS with receipt generation.",
    "audience": "Individuals and small businesses paying across the country",
    "keywords": [
      "imps",
      "neft",
      "rtgs",
      "domestic",
      "upi"
    ],
    "portalUrl": "https://www.npci.org.in/",
    "portalName": "Instant IMPS Account Transfer",
    "actionLabel": "Counter IMPS Transfer",
    "badgeText": "Zero Delay",
    "isGov": false
  },
  {
    "id": "international-remittance",
    "division": "payments",
    "name": "International Remittance",
    "expanded": true,
    "icon": "globe",
    "desc": "Outbound remittance support with compliant paperwork and bank-side processing.",
    "audience": "Families supporting relatives overseas",
    "keywords": [
      "foreign",
      "remittance",
      "overseas",
      "money transfer"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20International%20Remittance%20Assistance",
    "portalName": "Authorized Remittance Desk",
    "actionLabel": "Inquire Forex Transfer",
    "badgeText": "RBI Compliant",
    "isGov": false
  },
  {
    "id": "upi-assistance",
    "division": "payments",
    "name": "UPI & Digital Payments",
    "expanded": true,
    "icon": "smartphone",
    "desc": "UPI ID creation, payment collection on behalf of a merchant, and digital payment onboarding.",
    "audience": "Small merchants and first-time digital payment users",
    "keywords": [
      "upi",
      "qr",
      "merchant",
      "collect payment",
      "digital"
    ],
    "portalUrl": "https://www.npci.org.in/what-we-do/upi/product-overview",
    "portalName": "NPCI UPI & QR Helpdesk",
    "actionLabel": "Resolve UPI Issue",
    "badgeText": "NPCI Partner",
    "isGov": false
  },
  {
    "id": "cash-services",
    "division": "payments",
    "name": "Cash Deposit & Withdrawal",
    "expanded": true,
    "icon": "landmark",
    "desc": "Bank deposits and withdrawals for customers without net banking access.",
    "audience": "Seniors, daily-wage workers and cash-dependent households",
    "keywords": [
      "deposit",
      "withdrawal",
      "cash",
      "counter"
    ],
    "portalUrl": "https://www.npci.org.in/what-we-do/aeps/product-overview",
    "portalName": "AePS Aadhaar Micro-ATM",
    "actionLabel": "AePS Cash Withdrawal Desk",
    "badgeText": "Aadhaar Biometric",
    "isGov": false
  },
  {
    "id": "merchant-settlement",
    "division": "payments",
    "name": "Merchant Settlement",
    "expanded": true,
    "icon": "credit-card",
    "desc": "POS terminal activation, daily settlement and reconciliation for retail merchants.",
    "audience": "Retailers and service businesses accepting card payments",
    "keywords": [
      "pos terminal",
      "settlement",
      "reconciliation",
      "card machine"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Merchant%20Settlement%20Support",
    "portalName": "Merchant POS Settlement",
    "actionLabel": "POS Settlement Desk",
    "badgeText": "Next-Day Credit",
    "isGov": false
  },
  {
    "id": "mazi-nokari",
    "division": "employment",
    "name": "Mazi Nokari Placement Desk",
    "sourceRef": "Mazi Nokari",
    "icon": "users-round",
    "desc": "A local placement desk matching registered job seekers to live openings, with follow-up on applications.",
    "audience": "Job seekers in the district, including first-time and career-changers",
    "keywords": [
      "placement",
      "job",
      "nokari",
      "recruitment",
      "employment"
    ],
    "portalUrl": "https://www.majhinaukri.in/",
    "portalName": "Majhi Naukri (Mazi Nokari)",
    "actionLabel": "Open Majhi Naukri Portal",
    "badgeText": "Govt Job Alerts",
    "isGov": true
  },
  {
    "id": "job-search",
    "division": "employment",
    "name": "Job Search Support",
    "sourceRef": "job search",
    "icon": "search",
    "desc": "Job profile preparation, vacancy matching and application filing for registered candidates.",
    "audience": "Candidates preparing for and applying to active openings",
    "keywords": [
      "vacancy",
      "profile",
      "apply",
      "candidate",
      "hiring"
    ],
    "portalUrl": "https://www.ncs.gov.in/",
    "portalName": "National Career Service (NCS)",
    "actionLabel": "Open National Career Service",
    "badgeText": "MoLE Central",
    "isGov": true
  },
  {
    "id": "job-post",
    "division": "employment",
    "name": "Job Posting for Employers",
    "sourceRef": "job post",
    "icon": "briefcase-business",
    "desc": "Employer job requirements published to the local candidate pool, with screening support.",
    "audience": "Employers recruiting locally without a large HR function",
    "keywords": [
      "post job",
      "hiring",
      "employer",
      "requirement",
      "recruiter"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20want%20to%20Post%20a%20Job%20Vacancy",
    "portalName": "Employer Posting Desk",
    "actionLabel": "Post Job Vacancy",
    "badgeText": "Pune & PCMC",
    "isGov": false
  },
  {
    "id": "staffing",
    "division": "employment",
    "name": "Staffing & Temporary Staffing",
    "expanded": true,
    "icon": "users",
    "desc": "Verified staffing for shops, offices, events and site work, with payroll support at the counter.",
    "audience": "Businesses needing short-term or hourly staff",
    "keywords": [
      "staffing",
      "temp staff",
      "payroll",
      "helper",
      "manpower"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Staffing%20Solutions",
    "portalName": "Pune Staffing Bureau",
    "actionLabel": "Hire Verified Staff",
    "badgeText": "Contract & Perm",
    "isGov": false
  },
  {
    "id": "skill-training",
    "division": "employment",
    "name": "Computer & Skills Training",
    "expanded": true,
    "icon": "graduation-cap",
    "desc": "Short certification courses in office applications, basic coding, accounts and digital literacy.",
    "audience": "Students, job seekers and staff needing a formal computer qualification",
    "keywords": [
      "training",
      "course",
      "certification",
      "tally",
      "ms office",
      "basic course"
    ],
    "portalUrl": "https://www.skillindia.gov.in/",
    "portalName": "Skill India Digital",
    "actionLabel": "Open Skill India Digital",
    "badgeText": "MSDE Govt",
    "isGov": true
  },
  {
    "id": "property-transactions",
    "division": "commerce",
    "name": "Property Rent, Sale & Purchase",
    "sourceRef": "Property Rent Sale & Purchase",
    "icon": "house",
    "desc": "Property listings, tenant matching, agreement drafting and registration coordination.",
    "audience": "Landlords, tenants and buyers in the local market",
    "keywords": [
      "property",
      "rent",
      "sale",
      "purchase",
      "agreement",
      "flat",
      "shop"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20have%20a%20Property%20Rent%20or%20Sale%20Inquiry",
    "portalName": "Pune Property Desk",
    "actionLabel": "List / Search Property",
    "badgeText": "Verified Listings",
    "isGov": false
  },
  {
    "id": "engineering-supply",
    "division": "commerce",
    "name": "Engineering & Industrial Supply",
    "sourceRef": "Engineering Supply to all india",
    "icon": "factory",
    "desc": "Industrial and engineering consumables, tools and equipment supplied across the country.",
    "audience": "MSME manufacturers, fabricators and engineering workshops",
    "keywords": [
      "industrial",
      "tools",
      "consumables",
      "hardware supply",
      "machinery"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Engineering%20Supplies",
    "portalName": "All-India Industrial Supply",
    "actionLabel": "Request Industrial Quote",
    "badgeText": "B2B Procurement",
    "isGov": false
  },
  {
    "id": "gadi-kharedi-vikri",
    "division": "commerce",
    "name": "Second-hand Vehicle Brokerage",
    "sourceRef": "Gadi Kharedi Vikri",
    "icon": "car",
    "desc": "Valuation, document verification and brokered resale of second-hand cars and two-wheelers.",
    "audience": "Private buyers and sellers of used vehicles",
    "keywords": [
      "used car",
      "second hand",
      "broker",
      "valuation",
      "vehicle resale"
    ],
    "portalUrl": "https://vahan.parivahan.gov.in/vahanservice/vahan/",
    "portalName": "Vahan Citizen Portal (MoRTH)",
    "actionLabel": "Open Vahan Vehicle Portal",
    "badgeText": "MoRTH Vahan",
    "isGov": true
  },
  {
    "id": "vendor-sourcing",
    "division": "commerce",
    "name": "Vendor & Supplier Sourcing",
    "expanded": true,
    "icon": "store",
    "desc": "Supplier identification, quotation collection and comparison for procurement needs.",
    "audience": "Procurement teams and small businesses buying at volume",
    "keywords": [
      "supplier",
      "vendor",
      "quotation",
      "procurement",
      "sourcing"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Vendor%20Sourcing",
    "portalName": "Vendor Verification Desk",
    "actionLabel": "Connect with Vendors",
    "badgeText": "Pune Industrial",
    "isGov": false
  },
  {
    "id": "business-setup",
    "division": "commerce",
    "name": "Business Setup Advisory",
    "expanded": true,
    "icon": "briefcase",
    "desc": "Guidance on entity type, registration sequence and compliance calendar for a new business.",
    "audience": "First-time founders setting up an enterprise",
    "keywords": [
      "company setup",
      "registration",
      "msme",
      "udyam",
      "compliance"
    ],
    "portalUrl": "https://www.mca.gov.in/",
    "portalName": "Ministry of Corporate Affairs",
    "actionLabel": "Open MCA Portal",
    "badgeText": "MCA Central",
    "isGov": true
  },
  {
    "id": "tourism",
    "division": "travel",
    "name": "Tour Packages",
    "sourceRef": "Tourism",
    "icon": "plane",
    "desc": "Domestic and international leisure packages arranged with transport, stay and itinerary support.",
    "audience": "Families and groups planning a holiday or pilgrimage",
    "keywords": [
      "tour",
      "package",
      "holiday",
      "pilgrimage",
      "itinerary",
      "yatra"
    ],
    "portalUrl": "https://www.maharashtratourism.gov.in/",
    "portalName": "Maharashtra Tourism (MTDC)",
    "actionLabel": "Open MTDC Tourism Portal",
    "badgeText": "MTDC Official",
    "isGov": true
  },
  {
    "id": "ticket-booking",
    "division": "travel",
    "name": "Flight & Train Ticket Booking",
    "sourceRef": "Ticket Booking",
    "icon": "ticket",
    "desc": "Domestic and international air tickets and rail bookings, including cancellation and reissue.",
    "audience": "Travellers booking directly rather than through an app",
    "keywords": [
      "flight",
      "train",
      "railway",
      "irctc",
      "ticket",
      "pnr"
    ],
    "portalUrl": "https://www.irctc.co.in/",
    "portalName": "IRCTC NextGen e-Ticketing",
    "actionLabel": "Open IRCTC Rail Connect",
    "badgeText": "Indian Railways",
    "isGov": true
  },
  {
    "id": "hotel-booking",
    "division": "travel",
    "name": "Hotel & Resort Booking",
    "expanded": true,
    "icon": "bed-double",
    "desc": "Accommodation reserved across budgets, with negotiated rates for longer stays.",
    "audience": "Business travellers and families booking directly",
    "keywords": [
      "hotel",
      "resort",
      "stay",
      "accommodation",
      "booking"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Hotel%20Booking%20Assistance",
    "portalName": "Hotel Desk Pune",
    "actionLabel": "Book Verified Stay",
    "badgeText": "Corporate & Leisure",
    "isGov": false
  },
  {
    "id": "visa-assistance",
    "division": "travel",
    "name": "Visa & Travel Documentation",
    "expanded": true,
    "icon": "file-check",
    "desc": "Visa form preparation, document collation and appointment scheduling for travel and study.",
    "audience": "Applicants for business, tourist, work and student visas",
    "keywords": [
      "visa",
      "passport",
      "appointment",
      "travel document"
    ],
    "portalUrl": "https://indianvisaonline.gov.in/",
    "portalName": "Indian Visa Online / Global",
    "actionLabel": "Open e-Visa Portal",
    "badgeText": "MEA / MHA Official",
    "isGov": true
  },
  {
    "id": "forex",
    "division": "travel",
    "name": "Forex & Travel Insurance",
    "expanded": true,
    "icon": "circle-dollar-sign",
    "desc": "Travel insurance arranged alongside foreign currency guidance for outbound journeys.",
    "audience": "International travellers",
    "keywords": [
      "forex",
      "currency",
      "travel insurance",
      "exchange"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Forex%20Exchange",
    "portalName": "Authorized Currency Bureau",
    "actionLabel": "Get Live Forex Rates",
    "badgeText": "RBI Authorized",
    "isGov": false
  },
  {
    "id": "tourism-bus",
    "division": "travel",
    "name": "Group & Tour Transport",
    "expanded": true,
    "icon": "bus",
    "desc": "Coordinated coach and tempo transport for group tours, pilgrimages and institutional outings.",
    "audience": "Tour operators, schools and social groups",
    "keywords": [
      "bus hire",
      "coach",
      "group tour",
      "transport",
      "tempo"
    ],
    "portalUrl": "https://msrtc.maharashtra.gov.in/",
    "portalName": "MSRTC Tourist Buses",
    "actionLabel": "Open MSRTC Bus Portal",
    "badgeText": "MSRTC Official",
    "isGov": true
  },
  {
    "id": "hardware-supply",
    "division": "technology",
    "name": "Hardware Procurement & Supply",
    "brandCommitted": true,
    "icon": "monitor",
    "desc": "Desktops, laptops, servers and peripherals specified for the workload and supplied with warranty cover.",
    "audience": "Offices, schools, clinics and retail businesses equipping a floor",
    "keywords": [
      "desktop",
      "laptop",
      "server",
      "peripheral",
      "procurement",
      "supply"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Enterprise%20Hardware%20Quotation",
    "portalName": "OEM Enterprise Hardware",
    "actionLabel": "Request Hardware Quote",
    "badgeText": "HP / Dell / Lenovo",
    "isGov": false
  },
  {
    "id": "network-infrastructure",
    "division": "technology",
    "name": "Network & Infrastructure",
    "brandCommitted": true,
    "icon": "wifi",
    "desc": "Structured cabling, switching, wireless coverage and firewall installation for offices and campuses.",
    "audience": "Organisations moving beyond a single unmanaged router",
    "keywords": [
      "lan",
      "wan",
      "cabling",
      "switching",
      "wi-fi",
      "firewall",
      "network"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Network%20Infrastructure%20Setup",
    "portalName": "Cisco & Ubiquiti Practice",
    "actionLabel": "Schedule Network Audit",
    "badgeText": "Structured Cabling",
    "isGov": false
  },
  {
    "id": "amc-maintenance",
    "division": "technology",
    "name": "AMC & Maintenance Contracts",
    "brandCommitted": true,
    "icon": "wrench",
    "desc": "Annual maintenance contracts with defined response times, preventive visits and a spares commitment.",
    "audience": "Offices that need downtime covered rather than paid for per incident",
    "keywords": [
      "amc",
      "annual maintenance",
      "sla",
      "preventive",
      "support contract"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20an%20AMC%20Maintenance%20Contract",
    "portalName": "Comprehensive AMC Desk",
    "actionLabel": "Inquire AMC Contract",
    "badgeText": "SLA Guaranteed",
    "isGov": false
  },
  {
    "id": "it-support",
    "division": "technology",
    "name": "On-Site & Remote IT Support",
    "brandCommitted": true,
    "icon": "headset",
    "desc": "Remote helpdesk and scheduled on-site visits for hardware faults, software issues and user onboarding.",
    "audience": "Small and mid-sized teams without a dedicated IT hire",
    "keywords": [
      "helpdesk",
      "onsite",
      "remote support",
      "ticket",
      "troubleshooting"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20IT%20Support",
    "portalName": "Pune On-Site & Remote Desk",
    "actionLabel": "Book IT Support Visit",
    "badgeText": "Immediate Dispatch",
    "isGov": false
  },
  {
    "id": "software-licensing",
    "division": "technology",
    "name": "Software Installation & Licensing",
    "brandCommitted": true,
    "icon": "package",
    "desc": "Installation, activation and renewal of operating systems, office suites and business applications.",
    "audience": "Offices standardising software across machines",
    "keywords": [
      "software",
      "licence",
      "activation",
      "office",
      "antivirus"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Software%20Licensing",
    "portalName": "Authorized License Reseller",
    "actionLabel": "Order Genuine Licenses",
    "badgeText": "Microsoft / Tally",
    "isGov": false
  },
  {
    "id": "web-development",
    "division": "technology",
    "name": "Websites & Web Applications",
    "brandCommitted": true,
    "icon": "globe",
    "desc": "Corporate websites, catalogue sites and internal web applications, built and maintained end to end.",
    "audience": "Businesses that need to be found, or to transact online",
    "keywords": [
      "website",
      "web app",
      "ecommerce",
      "seo",
      "hosting",
      "frontend"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Web%20Development",
    "portalName": "Custom Engineering Practice",
    "actionLabel": "Scope Web Project",
    "badgeText": "Full-Stack Web",
    "isGov": false
  },
  {
    "id": "data-backup",
    "division": "technology",
    "name": "Backup, Recovery & Data Security",
    "brandCommitted": true,
    "icon": "hard-drive",
    "desc": "Scheduled backups, tested restores and recovery plans for the data a business cannot lose.",
    "audience": "Any organisation holding records it cannot rebuild",
    "keywords": [
      "backup",
      "recovery",
      "restore",
      "data",
      "continuity"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Data%20Backup%20Solutions",
    "portalName": "Hybrid Cloud Backup",
    "actionLabel": "Configure Backup Plan",
    "badgeText": "Encrypted Storage",
    "isGov": false
  },
  {
    "id": "cybersecurity",
    "division": "technology",
    "name": "Cyber Security & Endpoint Protection",
    "brandCommitted": true,
    "icon": "shield",
    "desc": "Endpoint protection, access control, patching and staff awareness built around a real threat model.",
    "audience": "Businesses handling customer or payment data",
    "keywords": [
      "security",
      "antivirus",
      "patching",
      "firewall",
      "awareness"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Cybersecurity%20Solutions",
    "portalName": "Fortinet & Sophos Security",
    "actionLabel": "Request Security Audit",
    "badgeText": "Firewall & EDR",
    "isGov": false
  },
  {
    "id": "cloud-hosting",
    "division": "technology",
    "name": "Cloud & Server Management",
    "brandCommitted": true,
    "icon": "server",
    "desc": "Server and cloud hosting administration, monitoring, scaling and cost control.",
    "audience": "Teams moving from on-premise hardware to managed infrastructure",
    "keywords": [
      "cloud",
      "hosting",
      "server",
      "monitoring",
      "scaling",
      "domain"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Cloud%20Server%20Hosting",
    "portalName": "Cloud Infrastructure Desk",
    "actionLabel": "Deploy Cloud Server",
    "badgeText": "AWS / Azure Cloud",
    "isGov": false
  },
  {
    "id": "it-training-corporate",
    "division": "technology",
    "name": "Corporate IT Upskilling",
    "brandCommitted": true,
    "icon": "book-open",
    "desc": "Team training on productivity suites, cyber hygiene, workflows and the software the business runs on.",
    "audience": "Organisations improving internal digital capability",
    "keywords": [
      "corporate training",
      "upskilling",
      "workshop",
      "digital literacy"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Corporate%20IT%20Training",
    "portalName": "Corporate Skills Program",
    "actionLabel": "Book Training Session",
    "badgeText": "Enterprise Training",
    "isGov": false
  },
  {
    "id": "marriage-registration",
    "division": "personal",
    "name": "Marriage Registration",
    "sourceRef": "Marriage",
    "icon": "heart",
    "desc": "Marriage registration filing at the municipal office, with appointment and document coordination.",
    "audience": "Couples completing a legal marriage registration",
    "keywords": [
      "marriage",
      "wedding",
      "solemnization",
      "registration"
    ],
    "portalUrl": "https://igrmaharashtra.gov.in/",
    "portalName": "IGR Maharashtra Marriage Desk",
    "actionLabel": "Open IGR Marriage Portal",
    "badgeText": "Legal Registration",
    "isGov": true
  },
  {
    "id": "marriage-card-printing",
    "division": "personal",
    "name": "Marriage Cards & Invitations",
    "expanded": true,
    "icon": "mail",
    "desc": "Invitation card design and printing, including envelopes and return of the reply.",
    "audience": "Families hosting a wedding or a formal event",
    "keywords": [
      "invitation",
      "card",
      "design",
      "print",
      "envelope"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Marriage%20Card%20Printing",
    "portalName": "Luxury Invitation Press",
    "actionLabel": "View Card Catalog",
    "badgeText": "Gold Foil & Emboss",
    "isGov": false
  },
  {
    "id": "event-services",
    "division": "personal",
    "name": "Event & Stationery Services",
    "expanded": true,
    "icon": "calendar-days",
    "desc": "Banners, standees, flex prints and stage decoration for family and institutional events.",
    "audience": "Families and institutions hosting an event",
    "keywords": [
      "event",
      "decoration",
      "banner",
      "standee",
      "stage"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Event%20Services",
    "portalName": "Milestone Logistics Desk",
    "actionLabel": "Inquire Event Planning",
    "badgeText": "Complete Setup",
    "isGov": false
  },
  {
    "id": "matchmaking",
    "division": "personal",
    "name": "Matchmaking Referral",
    "expanded": true,
    "icon": "users-round",
    "desc": "Introduction to a vetted matchmaking network with profile preparation support.",
    "audience": "Families seeking a marriage partner",
    "keywords": [
      "marriage bureau",
      "matchmaking",
      "shaadi",
      "profile"
    ],
    "portalUrl": "https://wa.me/919876543210?text=Hello%20Myra%20Computer,%20I%20need%20Matchmaking%20Assistance",
    "portalName": "Verified Community Bureau",
    "actionLabel": "Consult Family Desk",
    "badgeText": "Confidential",
    "isGov": false
  }
];

export const documentsChecklist = [
  {
    "category": "Identity & Citizenship",
    "tag": "Central Portals",
    "color": "orange",
    "services": [
      {
        "name": "New Aadhaar / Demographic Update",
        "portal": "UIDAI myAadhaar",
        "portalUrl": "https://myaadhaar.uidai.gov.in/",
        "requirements": [
          "Proof of Identity (Voter ID / PAN / Passport)",
          "Proof of Address (Electricity Bill / Ration Card / Bank Passbook)",
          "DOB Proof (Birth Certificate / School Leaving)"
        ],
        "copies": "Originals + 1 Self-attested copy",
        "counterTurnaround": "15 mins counter biometrics; 5-7 days dispatch"
      },
      {
        "name": "PAN Card (New / Correction / Reprint)",
        "portal": "Protean NSDL / UTIITSL",
        "portalUrl": "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
        "requirements": [
          "Aadhaar Card (linked mobile for e-KYC)",
          "2 Recent Passport Size Photos (white background)",
          "Existing PAN copy (for correction/reprint)"
        ],
        "copies": "2 Photos + Aadhaar copy",
        "counterTurnaround": "Immediate e-PAN (2-4 hrs); Physical card (7 days)"
      },
      {
        "name": "Passport Seva (Fresh / Renewal / Tatkaal)",
        "portal": "Passport Seva Kendra",
        "portalUrl": "https://www.passportindia.gov.in/",
        "requirements": [
          "Aadhaar Card",
          "PAN Card / Voter ID",
          "10th Passing Certificate / Birth Certificate",
          "1-Year Bank Statement / Electricity Bill (Address Proof)"
        ],
        "copies": "All originals + 2 sets self-attested copies",
        "counterTurnaround": "Document verification & appointment slot in 24 hrs"
      }
    ]
  },
  {
    "category": "State Certificates (Aaple Sarkar)",
    "tag": "MahaOnline Direct",
    "color": "emerald",
    "services": [
      {
        "name": "Domicile & Age/Nationality Certificate",
        "portal": "Aaple Sarkar MahaOnline",
        "portalUrl": "https://aaplesarkar.mahaonline.gov.in/",
        "requirements": [
          "Ration Card",
          "School Leaving Certificate / Birth Certificate",
          "Continuous stay proof (15 years in Maharashtra - Light Bills/Tax Receipts)",
          "Affidavit on Stamp Paper"
        ],
        "copies": "Originals for scanning + Passport Photo",
        "counterTurnaround": "Filing in 30 mins; Approval in 7 to 15 working days"
      },
      {
        "name": "Income Certificate (Tehsildar)",
        "portal": "Revenue Department Maharashtra",
        "portalUrl": "https://aaplesarkar.mahaonline.gov.in/",
        "requirements": [
          "Salary Slip / Form 16 or Talathi Income Certificate",
          "Ration Card",
          "Aadhaar Card",
          "Self-declaration affidavit"
        ],
        "copies": "Original salary proof + Aadhaar",
        "counterTurnaround": "3 to 5 working days with digital seal"
      },
      {
        "name": "Caste Certificate & Caste Validity",
        "portal": "CCVIS MahaOnline",
        "portalUrl": "https://castevalidity.mahaonline.gov.in/",
        "requirements": [
          "Father / Paternal relative's pre-1961 caste evidence",
          "School Leaving Certificate of self & father",
          "7/12 extract or ancestral record",
          "Form 16 affidavit"
        ],
        "copies": "Complete lineage documentation dossier",
        "counterTurnaround": "Application preparation, upload & scrutiny tracking"
      }
    ]
  },
  {
    "category": "Land & Property Records",
    "tag": "Mahabhumi / IGR",
    "color": "amber",
    "services": [
      {
        "name": "Digitally Signed 7/12 & 8A Extract",
        "portal": "Bhulekh Mahabhumi",
        "portalUrl": "https://bhulekh.mahabhumi.gov.in/",
        "requirements": [
          "District, Taluka, Village name",
          "Gat Number / Survey Number",
          "Aadhaar for digitally signed official record"
        ],
        "copies": "Instant digitally signed printout",
        "counterTurnaround": "Instant 5-minute counter delivery"
      },
      {
        "name": "Registered Rent Agreement",
        "portal": "IGR Maharashtra",
        "portalUrl": "https://igrmaharashtra.gov.in/",
        "requirements": [
          "Landlord & Tenant Aadhaar + PAN",
          "Two Witnesses with Aadhaar",
          "Electricity Bill / Index II of Property",
          "Biometric verification at counter"
        ],
        "copies": "Originals + Index II copy",
        "counterTurnaround": "Same-day biometric execution & submission"
      },
      {
        "name": "Light Bill Connection Name Change",
        "portal": "Mahavitaran (MSEDCL)",
        "portalUrl": "https://wss.mahadiscom.in/wss/wss",
        "requirements": [
          "Latest Electricity Bill",
          "Registered Sale Deed / Rent Agreement / Index II",
          "NOC from previous owner / death certificate if inherited",
          "Consumer number"
        ],
        "copies": "Index II copy + Latest Bill + Aadhaar",
        "counterTurnaround": "Online portal filing & test report submission"
      }
    ]
  },
  {
    "category": "Welfare & Subsidies",
    "tag": "Health & Farmers",
    "color": "rose",
    "services": [
      {
        "name": "Ayushman Bharat PM-JAY (Golden Card)",
        "portal": "PM-JAY Beneficiary Portal",
        "portalUrl": "https://beneficiary.nha.gov.in/",
        "requirements": [
          "Ration Card (Orange / Yellow NFSA)",
          "Aadhaar Card of all family members",
          "Mobile linked with Aadhaar for OTP verification"
        ],
        "copies": "Aadhaar + Ration Card",
        "counterTurnaround": "Instant eligibility verification & PVC Card print"
      },
      {
        "name": "PM-KISAN Samman Nidhi e-KYC",
        "portal": "PM-KISAN Portal",
        "portalUrl": "https://pmkisan.gov.in/",
        "requirements": [
          "7/12 land extract in farmer's name",
          "Aadhaar Card",
          "Bank passbook linked with Aadhaar (NPCI mapped)"
        ],
        "copies": "Aadhaar + Bank Passbook + 7/12",
        "counterTurnaround": "Instant biometric / OTP e-KYC completion"
      },
      {
        "name": "Ration Card (New / Member Addition / Split)",
        "portal": "MahaFood RCMS",
        "portalUrl": "https://rcms.mahafood.gov.in/",
        "requirements": [
          "Existing Ration Card",
          "Birth Certificate or Aadhaar of member to add",
          "Surrender / Deletion certificate if migrating",
          "LPG connection details"
        ],
        "copies": "Original Ration Card + Aadhaar copies",
        "counterTurnaround": "Online submission with acknowledgement receipt"
      }
    ]
  }
];

export const company = {
  "name": "Myra Computer Enterprises",
  "legalName": "Myra Computer Enterprises",
  "tagline": "Government services, engineering and enterprise systems, from one counter.",
  "established": "2013",
  "address": {
    "line1": "Shop 12, Sai Arcade",
    "line2": "Fergusson College Road, Shivajinagar",
    "city": "Pune",
    "state": "Maharashtra",
    "pincode": "411005",
    "country": "India"
  },
  "phone": "+91 98765 43210",
  "whatsapp": "+91 98765 43210",
  "email": "contact@myracomputer.in",
  "hours": [
    {
      "days": "Monday – Friday",
      "time": "09:30 – 20:00"
    },
    {
      "days": "Saturday",
      "time": "09:30 – 20:00"
    },
    {
      "days": "Sunday & public holidays",
      "time": "10:00 – 14:00"
    }
  ],
  "credentials": [
    {
      "icon": "badge-check",
      "title": "Common Service Centre (CSC)",
      "detail": "Empanelled to deliver central and state citizen services."
    },
    {
      "icon": "scroll-text",
      "title": "Authorised Banking Correspondent",
      "detail": "Deposit, withdrawal and transfer transactions at the counter."
    },
    {
      "icon": "users-round",
      "title": "Insurance and Loan Point of Sale",
      "detail": "Appointed agent for principal insurers and lenders."
    },
    {
      "icon": "cpu",
      "title": "ISO-aligned service practice",
      "detail": "Documented intake, verification and delivery procedures."
    }
  ],
  "sectors": [
    "Households and families",
    "Micro-enterprises and traders",
    "Manufacturing MSMEs",
    "Schools and colleges",
    "Offices and co-working spaces",
    "Healthcare and clinics"
  ],
  "portals": [
    "UIDAI",
    "NSDL / UTIITSL",
    "Income Tax Portal",
    "GST Portal",
    "UMANG",
    "EPFO & ESIC",
    "Passport Seva",
    "National Portal for India"
  ]
};

export const legal = [
  {
    "label": "Privacy Policy",
    "href": "#"
  },
  {
    "label": "Terms of Use",
    "href": "#"
  },
  {
    "label": "Grievance Redressal",
    "href": "#"
  },
  {
    "label": "Accessibility Statement",
    "href": "#"
  },
  {
    "label": "Sitemap",
    "href": "#"
  }
];

export const serviceById = new Map(services.map((s) => [s.id, s]));

export const servicesByDivision = divisions.map((d) => ({
  ...d,
  services: services.filter((s) => s.division === d.id),
}));
