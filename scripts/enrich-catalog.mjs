import { readFileSync, writeFileSync } from "node:fs";

const PORTAL_METADATA = {
  // ----------------------- government
  "aaple-sarkar": {
    portalUrl: "https://aaplesarkar.mahaonline.gov.in/",
    portalName: "Aaple Sarkar MahaOnline",
    actionLabel: "Open Aaple Sarkar Portal",
    badgeText: "MahaGovt Official",
    isGov: true,
  },
  "bank-account-opening": {
    portalUrl: "https://pmjdy.gov.in/",
    portalName: "PM Jan Dhan Yojana (PMJDY)",
    actionLabel: "Open Jan Dhan Portal",
    badgeText: "Govt Banking",
    isGov: true,
  },
  "epfo": {
    portalUrl: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
    portalName: "EPFO Member UAN Portal",
    actionLabel: "Open EPFO Member Portal",
    badgeText: "EPFO Central",
    isGov: true,
  },
  "esic": {
    portalUrl: "https://www.esic.gov.in/",
    portalName: "ESIC Citizen & Employer Portal",
    actionLabel: "Open ESIC Portal",
    badgeText: "Ministry of Labour",
    isGov: true,
  },
  "aadhaar": {
    portalUrl: "https://myaadhaar.uidai.gov.in/",
    portalName: "UIDAI myAadhaar Portal",
    actionLabel: "Open myAadhaar (UIDAI)",
    badgeText: "UIDAI Official",
    isGov: true,
  },
  "pan": {
    portalUrl: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    portalName: "Protean NSDL / UTIITSL",
    actionLabel: "Apply on NSDL PAN Portal",
    badgeText: "Income Tax Dept",
    isGov: true,
  },
  "passport": {
    portalUrl: "https://www.passportindia.gov.in/",
    portalName: "Passport Seva Kendra (PSP)",
    actionLabel: "Open Passport Seva Portal",
    badgeText: "MEA Central",
    isGov: true,
  },
  "ayushman-bharat": {
    portalUrl: "https://beneficiary.nha.gov.in/",
    portalName: "PM-JAY Beneficiary Portal",
    actionLabel: "Open PM-JAY Portal",
    badgeText: "National Health Auth",
    isGov: true,
  },
  "ration-card": {
    portalUrl: "https://rcms.mahafood.gov.in/",
    portalName: "MahaFood RCMS (NFSA)",
    actionLabel: "Open MahaFood RCMS Portal",
    badgeText: "Food & Civil Supplies",
    isGov: true,
  },
  "gst": {
    portalUrl: "https://www.gst.gov.in/",
    portalName: "GST Common Portal (GSTN)",
    actionLabel: "Open GST Common Portal",
    badgeText: "CBIC / GSTN",
    isGov: true,
  },
  "pmay-2": {
    portalUrl: "https://pmay-urban.gov.in/",
    portalName: "PMAY Urban 2.0 Portal",
    actionLabel: "Open PMAY Urban 2.0",
    badgeText: "MoHUA Housing",
    isGov: true,
  },
  "itr": {
    portalUrl: "https://www.incometax.gov.in/iec/fposervices/",
    portalName: "Income Tax e-Filing Portal",
    actionLabel: "Open Income Tax e-Filing",
    badgeText: "CBDT / IT Dept",
    isGov: true,
  },
  "rent-agreement": {
    portalUrl: "https://igrmaharashtra.gov.in/",
    portalName: "IGR Maharashtra e-Registration",
    actionLabel: "Open IGR Maharashtra Portal",
    badgeText: "Govt of Maharashtra",
    isGov: true,
  },
  "caste-validity": {
    portalUrl: "https://castevalidity.mahaonline.gov.in/",
    portalName: "CCVIS Caste Validity MahaOnline",
    actionLabel: "Open CCVIS MahaOnline",
    badgeText: "Social Justice Dept",
    isGov: true,
  },
  "smart-card-order": {
    portalUrl: "https://aaplesarkar.mahaonline.gov.in/",
    portalName: "MahaOnline Smart Cards",
    actionLabel: "Order Smart PVC Card",
    badgeText: "MahaOnline Service",
    isGov: true,
  },
  "partnership-firm-registration": {
    portalUrl: "https://rof.mahaonline.gov.in/",
    portalName: "Registrar of Firms (RoF)",
    actionLabel: "Open RoF Maharashtra Portal",
    badgeText: "Registrar of Firms",
    isGov: true,
  },
  "recharge": {
    portalUrl: "https://www.bharatbillpay.com/",
    portalName: "Bharat BillPay (BBPS)",
    actionLabel: "Open Bharat BillPay",
    badgeText: "NPCI BBPS",
    isGov: true,
  },
  "maps-forms": {
    portalUrl: "https://bhulekh.mahabhumi.gov.in/",
    portalName: "Mahabhumi Bhulekh (7/12 & 8A)",
    actionLabel: "Open Bhulekh 7/12 Mahabhumi",
    badgeText: "Land Records Dept",
    isGov: true,
  },
  "rto-service": {
    portalUrl: "https://parivahan.gov.in/parivahan/",
    portalName: "Parivahan Sewa (MoRTH)",
    actionLabel: "Open Parivahan Sewa (RTO)",
    badgeText: "MoRTH Parivahan",
    isGov: true,
  },
  "light-bill-name-change": {
    portalUrl: "https://wss.mahadiscom.in/wss/wss",
    portalName: "Mahavitaran (MSEDCL)",
    actionLabel: "Open Mahavitaran Portal",
    badgeText: "MSEDCL Electricity",
    isGov: true,
  },
  "pmrda": {
    portalUrl: "https://www.pmrda.gov.in/",
    portalName: "PMRDA Official Portal",
    actionLabel: "Open PMRDA Official Portal",
    badgeText: "Pune Metro Authority",
    isGov: true,
  },
  "gazette": {
    portalUrl: "https://egazette.mahaonline.gov.in/",
    portalName: "e-Gazette Maharashtra",
    actionLabel: "Open e-Gazette MahaOnline",
    badgeText: "State Printing Press",
    isGov: true,
  },
  "mhada-lottery": {
    portalUrl: "https://housing.mhada.gov.in/",
    portalName: "MHADA Housing Lottery",
    actionLabel: "Open MHADA Lottery Portal",
    badgeText: "MHADA Official",
    isGov: true,
  },
  "marriage-certificate-pcmc": {
    portalUrl: "https://www.pcmcindia.gov.in/",
    portalName: "PCMC Citizen Services Portal",
    actionLabel: "Open PCMC Citizen Portal",
    badgeText: "PCMC Civic Body",
    isGov: true,
  },
  "police-verification": {
    portalUrl: "https://pcs.mahaonline.gov.in/",
    portalName: "Maharashtra Police PCS Portal",
    actionLabel: "Open Police Clearance (PCS)",
    badgeText: "Maharashtra Police",
    isGov: true,
  },
  "ticket-booking-govt": {
    portalUrl: "https://msrtc.maharashtra.gov.in/",
    portalName: "MSRTC Bus Booking (ST Maha)",
    actionLabel: "Open MSRTC ST Portal",
    badgeText: "State Transport",
    isGov: true,
  },
  "pm-kisan": {
    portalUrl: "https://pmkisan.gov.in/",
    portalName: "PM-KISAN Samman Nidhi",
    actionLabel: "Open PM-KISAN Portal",
    badgeText: "Dept of Agriculture",
    isGov: true,
  },
  "csc": {
    portalUrl: "https://digitalseva.csc.gov.in/",
    portalName: "Digital Seva (CSC Portal)",
    actionLabel: "Open Digital Seva CSC",
    badgeText: "MeitY CSC India",
    isGov: true,
  },
  "anganwadi-bharti": {
    portalUrl: "https://wcd.maharashtra.gov.in/",
    portalName: "Maha Women & Child Dev (WCD)",
    actionLabel: "Open Maha WCD Portal",
    badgeText: "WCD Maharashtra",
    isGov: true,
  },

  // ----------------------- education
  "rte-forms": {
    portalUrl: "https://student.maharashtra.gov.in/adm_portal/",
    portalName: "RTE Maharashtra 25% Portal",
    actionLabel: "Open RTE Admissions Portal",
    badgeText: "School Education Dept",
    isGov: true,
  },
  "scholarship-forms": {
    portalUrl: "https://mahadbt.maharashtra.gov.in/",
    portalName: "MahaDBT Scholarship Portal",
    actionLabel: "Open MahaDBT Portal",
    badgeText: "MahaDBT Direct",
    isGov: true,
  },
  "admissions": {
    portalUrl: "https://cetcell.mahacet.org/",
    portalName: "State Common Entrance Test Cell",
    actionLabel: "Open State CET Cell",
    badgeText: "CET Cell Maharashtra",
    isGov: true,
  },

  // ----------------------- insurance
  "lic": {
    portalUrl: "https://licindia.in/",
    portalName: "Life Insurance Corporation (LIC)",
    actionLabel: "Open LIC Official Portal",
    badgeText: "Govt Life Insurer",
    isGov: true,
  },
  "star-health": {
    portalUrl: "https://www.starhealth.in/",
    portalName: "Star Health & Allied Insurance",
    actionLabel: "Open Star Health Portal",
    badgeText: "Health Protection",
    isGov: false,
  },
  "hdfc-ergo": {
    portalUrl: "https://www.hdfcergo.com/",
    portalName: "HDFC ERGO General Insurance",
    actionLabel: "Open HDFC ERGO Portal",
    badgeText: "General Insurance",
    isGov: false,
  },
  "pik-vima": {
    portalUrl: "https://pmfby.gov.in/",
    portalName: "PM Fasal Bima Yojana (PMFBY)",
    actionLabel: "Open PMFBY Crop Insurance",
    badgeText: "Central Scheme",
    isGov: true,
  },
  "pos-insurance": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20a%20quote%20for%20POS%20Insurance",
    portalName: "Counter POS Insurance Desk",
    actionLabel: "Get Instant Policy Quote",
    badgeText: "IRDAI Registered",
    isGov: false,
  },

  // ----------------------- credit
  "mudra-loan": {
    portalUrl: "https://www.mudra.org.in/",
    portalName: "PMMY MUDRA Portal",
    actionLabel: "Open PMMY MUDRA Portal",
    badgeText: "PMMY Central",
    isGov: true,
  },
  "personal-loan": {
    portalUrl: "https://www.psbloansin59minutes.com/",
    portalName: "PSB Loans in 59 Minutes",
    actionLabel: "Open PSB Loans Portal",
    badgeText: "Public Sector Bank",
    isGov: true,
  },
  "business-loan": {
    portalUrl: "https://www.psbloansin59minutes.com/",
    portalName: "MSME / PSB Business Loans",
    actionLabel: "Open MSME Loan Portal",
    badgeText: "MSME Ministry",
    isGov: true,
  },
  "finance-pos": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20details%20for%20Merchant%20POS%20Finance",
    portalName: "Merchant POS Finance Desk",
    actionLabel: "Inquire POS Machine",
    badgeText: "Merchant POS",
    isGov: false,
  },
  "annasaheb-patil": {
    portalUrl: "https://urjapawap.maharashtra.gov.in/",
    portalName: "Annasaheb Patil Mandal (APESTCL)",
    actionLabel: "Open Annasaheb Patil Portal",
    badgeText: "MahaGovt Subsidy",
    isGov: true,
  },

  // ----------------------- print
  "printing": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20have%20a%20Print%20Job",
    portalName: "Shivajinagar Document Room",
    actionLabel: "Send Print Job on WhatsApp",
    badgeText: "High-Speed Print",
    isGov: false,
  },
  "documents": {
    portalUrl: "#documents",
    portalName: "Document Verification Desk",
    actionLabel: "View Document Checklist",
    badgeText: "Paperwork Guide",
    isGov: false,
  },
  "scanning": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Document%20Scanning%20and%20Digitisation",
    portalName: "High-Res OCR Scanning Desk",
    actionLabel: "Book Scanning & OCR",
    badgeText: "PDF / OCR Archive",
    isGov: false,
  },
  "lamination-binding": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Lamination%20and%20Binding",
    portalName: "Lamination & Spiral Desk",
    actionLabel: "Order Lamination / Binding",
    badgeText: "Instant Counter",
    isGov: false,
  },
  "typing-drafting": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Typing%20or%20Affidavit%20Drafting",
    portalName: "Legal Typing & Affidavit Desk",
    actionLabel: "Draft Legal Document",
    badgeText: "English & Marathi",
    isGov: false,
  },
  "application-printing": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Online%20Form%20Printout",
    portalName: "Application Print Desk",
    actionLabel: "Print Application Form",
    badgeText: "Color / B&W",
    isGov: false,
  },
  "id-card-printing": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20PVC%20Smart%20Card%20Printing",
    portalName: "PVC Smart Card Unit",
    actionLabel: "Order PVC Smart Card",
    badgeText: "Durable PVC",
    isGov: false,
  },
  "signage": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Signage%20and%20Flex",
    portalName: "Signage & Display Print",
    actionLabel: "Request Signage Quote",
    badgeText: "Commercial Display",
    isGov: false,
  },

  // ----------------------- payments
  "money-transfer": {
    portalUrl: "https://www.npci.org.in/",
    portalName: "NPCI Domestic Money Transfer",
    actionLabel: "Domestic Transfer Desk",
    badgeText: "IMPS / NEFT 24x7",
    isGov: false,
  },
  "domestic-transfer": {
    portalUrl: "https://www.npci.org.in/",
    portalName: "Instant IMPS Account Transfer",
    actionLabel: "Counter IMPS Transfer",
    badgeText: "Zero Delay",
    isGov: false,
  },
  "international-remittance": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20International%20Remittance%20Assistance",
    portalName: "Authorized Remittance Desk",
    actionLabel: "Inquire Forex Transfer",
    badgeText: "RBI Compliant",
    isGov: false,
  },
  "upi-assistance": {
    portalUrl: "https://www.npci.org.in/what-we-do/upi/product-overview",
    portalName: "NPCI UPI & QR Helpdesk",
    actionLabel: "Resolve UPI Issue",
    badgeText: "NPCI Partner",
    isGov: false,
  },
  "cash-services": {
    portalUrl: "https://www.npci.org.in/what-we-do/aeps/product-overview",
    portalName: "AePS Aadhaar Micro-ATM",
    actionLabel: "AePS Cash Withdrawal Desk",
    badgeText: "Aadhaar Biometric",
    isGov: false,
  },
  "merchant-settlement": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Merchant%20Settlement%20Support",
    portalName: "Merchant POS Settlement",
    actionLabel: "POS Settlement Desk",
    badgeText: "Next-Day Credit",
    isGov: false,
  },

  // ----------------------- employment
  "mazi-nokari": {
    portalUrl: "https://www.majhinaukri.in/",
    portalName: "Majhi Naukri (Mazi Nokari)",
    actionLabel: "Open Majhi Naukri Portal",
    badgeText: "Govt Job Alerts",
    isGov: true,
  },
  "job-search": {
    portalUrl: "https://www.ncs.gov.in/",
    portalName: "National Career Service (NCS)",
    actionLabel: "Open National Career Service",
    badgeText: "MoLE Central",
    isGov: true,
  },
  "job-post": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20want%20to%20Post%20a%20Job%20Vacancy",
    portalName: "Employer Posting Desk",
    actionLabel: "Post Job Vacancy",
    badgeText: "Pune & PCMC",
    isGov: false,
  },
  "staffing": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Staffing%20Solutions",
    portalName: "Pune Staffing Bureau",
    actionLabel: "Hire Verified Staff",
    badgeText: "Contract & Perm",
    isGov: false,
  },
  "skill-training": {
    portalUrl: "https://www.skillindia.gov.in/",
    portalName: "Skill India Digital",
    actionLabel: "Open Skill India Digital",
    badgeText: "MSDE Govt",
    isGov: true,
  },

  // ----------------------- commerce
  "property-transactions": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20have%20a%20Property%20Rent%20or%20Sale%20Inquiry",
    portalName: "Pune Property Desk",
    actionLabel: "List / Search Property",
    badgeText: "Verified Listings",
    isGov: false,
  },
  "engineering-supply": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Engineering%20Supplies",
    portalName: "All-India Industrial Supply",
    actionLabel: "Request Industrial Quote",
    badgeText: "B2B Procurement",
    isGov: false,
  },
  "gadi-kharedi-vikri": {
    portalUrl: "https://vahan.parivahan.gov.in/vahanservice/vahan/",
    portalName: "Vahan Citizen Portal (MoRTH)",
    actionLabel: "Open Vahan Vehicle Portal",
    badgeText: "MoRTH Vahan",
    isGov: true,
  },
  "vendor-sourcing": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Vendor%20Sourcing",
    portalName: "Vendor Verification Desk",
    actionLabel: "Connect with Vendors",
    badgeText: "Pune Industrial",
    isGov: false,
  },
  "business-setup": {
    portalUrl: "https://www.mca.gov.in/",
    portalName: "Ministry of Corporate Affairs",
    actionLabel: "Open MCA Portal",
    badgeText: "MCA Central",
    isGov: true,
  },

  // ----------------------- travel
  "tourism": {
    portalUrl: "https://www.maharashtratourism.gov.in/",
    portalName: "Maharashtra Tourism (MTDC)",
    actionLabel: "Open MTDC Tourism Portal",
    badgeText: "MTDC Official",
    isGov: true,
  },
  "ticket-booking": {
    portalUrl: "https://www.irctc.co.in/",
    portalName: "IRCTC NextGen e-Ticketing",
    actionLabel: "Open IRCTC Rail Connect",
    badgeText: "Indian Railways",
    isGov: true,
  },
  "hotel-booking": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Hotel%20Booking%20Assistance",
    portalName: "Hotel Desk Pune",
    actionLabel: "Book Verified Stay",
    badgeText: "Corporate & Leisure",
    isGov: false,
  },
  "visa-assistance": {
    portalUrl: "https://indianvisaonline.gov.in/",
    portalName: "Indian Visa Online / Global",
    actionLabel: "Open e-Visa Portal",
    badgeText: "MEA / MHA Official",
    isGov: true,
  },
  "forex": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Forex%20Exchange",
    portalName: "Authorized Currency Bureau",
    actionLabel: "Get Live Forex Rates",
    badgeText: "RBI Authorized",
    isGov: false,
  },
  "tourism-bus": {
    portalUrl: "https://msrtc.maharashtra.gov.in/",
    portalName: "MSRTC Tourist Buses",
    actionLabel: "Open MSRTC Bus Portal",
    badgeText: "MSRTC Official",
    isGov: true,
  },

  // ----------------------- technology
  "hardware-supply": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Enterprise%20Hardware%20Quotation",
    portalName: "OEM Enterprise Hardware",
    actionLabel: "Request Hardware Quote",
    badgeText: "HP / Dell / Lenovo",
    isGov: false,
  },
  "network-infrastructure": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Network%20Infrastructure%20Setup",
    portalName: "Cisco & Ubiquiti Practice",
    actionLabel: "Schedule Network Audit",
    badgeText: "Structured Cabling",
    isGov: false,
  },
  "amc-maintenance": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20an%20AMC%20Maintenance%20Contract",
    portalName: "Comprehensive AMC Desk",
    actionLabel: "Inquire AMC Contract",
    badgeText: "SLA Guaranteed",
    isGov: false,
  },
  "it-support": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20IT%20Support",
    portalName: "Pune On-Site & Remote Desk",
    actionLabel: "Book IT Support Visit",
    badgeText: "Immediate Dispatch",
    isGov: false,
  },
  "software-licensing": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Software%20Licensing",
    portalName: "Authorized License Reseller",
    actionLabel: "Order Genuine Licenses",
    badgeText: "Microsoft / Tally",
    isGov: false,
  },
  "web-development": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Web%20Development",
    portalName: "Custom Engineering Practice",
    actionLabel: "Scope Web Project",
    badgeText: "Full-Stack Web",
    isGov: false,
  },
  "data-backup": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Data%20Backup%20Solutions",
    portalName: "Hybrid Cloud Backup",
    actionLabel: "Configure Backup Plan",
    badgeText: "Encrypted Storage",
    isGov: false,
  },
  "cybersecurity": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Cybersecurity%20Solutions",
    portalName: "Fortinet & Sophos Security",
    actionLabel: "Request Security Audit",
    badgeText: "Firewall & EDR",
    isGov: false,
  },
  "cloud-hosting": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Cloud%20Server%20Hosting",
    portalName: "Cloud Infrastructure Desk",
    actionLabel: "Deploy Cloud Server",
    badgeText: "AWS / Azure Cloud",
    isGov: false,
  },
  "it-training-corporate": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Corporate%20IT%20Training",
    portalName: "Corporate Skills Program",
    actionLabel: "Book Training Session",
    badgeText: "Enterprise Training",
    isGov: false,
  },

  // ----------------------- personal
  "marriage-registration": {
    portalUrl: "https://igrmaharashtra.gov.in/",
    portalName: "IGR Maharashtra Marriage Desk",
    actionLabel: "Open IGR Marriage Portal",
    badgeText: "Legal Registration",
    isGov: true,
  },
  "marriage-card-printing": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Marriage%20Card%20Printing",
    portalName: "Luxury Invitation Press",
    actionLabel: "View Card Catalog",
    badgeText: "Gold Foil & Emboss",
    isGov: false,
  },
  "event-services": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Event%20Services",
    portalName: "Milestone Logistics Desk",
    actionLabel: "Inquire Event Planning",
    badgeText: "Complete Setup",
    isGov: false,
  },
  "matchmaking": {
    portalUrl: "https://wa.me/919766174974?text=Hello%20Amayra%20Computers,%20I%20need%20Matchmaking%20Assistance",
    portalName: "Verified Community Bureau",
    actionLabel: "Consult Family Desk",
    badgeText: "Confidential",
    isGov: false,
  },
};

const DIVISION_THEMES = {
  government: {
    colorName: "orange",
    colorHex: "#ea580c",
    badgeClass: "badge-gov",
    borderClass: "border-t-orange-500",
    iconBgClass: "bg-orange-50 text-orange-600 border border-orange-200",
    pillActiveBg: "bg-orange-600 text-white",
  },
  education: {
    colorName: "emerald",
    colorHex: "#059669",
    badgeClass: "badge-edu",
    borderClass: "border-t-emerald-600",
    iconBgClass: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    pillActiveBg: "bg-emerald-600 text-white",
  },
  insurance: {
    colorName: "rose",
    colorHex: "#e11d48",
    badgeClass: "badge-ins",
    borderClass: "border-t-rose-600",
    iconBgClass: "bg-rose-50 text-rose-600 border border-rose-200",
    pillActiveBg: "bg-rose-600 text-white",
  },
  credit: {
    colorName: "amber",
    colorHex: "#d97706",
    badgeClass: "badge-credit",
    borderClass: "border-t-amber-600",
    iconBgClass: "bg-amber-50 text-amber-700 border border-amber-200",
    pillActiveBg: "bg-amber-600 text-white",
  },
  print: {
    colorName: "rust",
    colorHex: "#c2410c",
    badgeClass: "badge-print",
    borderClass: "border-t-orange-700",
    iconBgClass: "bg-orange-50 text-orange-800 border border-orange-200",
    pillActiveBg: "bg-orange-700 text-white",
  },
  payments: {
    colorName: "green",
    colorHex: "#15803d",
    badgeClass: "badge-pay",
    borderClass: "border-t-green-600",
    iconBgClass: "bg-green-50 text-green-700 border border-green-200",
    pillActiveBg: "bg-green-600 text-white",
  },
  employment: {
    colorName: "purple",
    colorHex: "#7c3aed",
    badgeClass: "badge-emp",
    borderClass: "border-t-purple-600",
    iconBgClass: "bg-purple-50 text-purple-700 border border-purple-200",
    pillActiveBg: "bg-purple-600 text-white",
  },
  commerce: {
    colorName: "blue",
    colorHex: "#2563eb",
    badgeClass: "badge-com",
    borderClass: "border-t-blue-600",
    iconBgClass: "bg-blue-50 text-blue-700 border border-blue-200",
    pillActiveBg: "bg-blue-600 text-white",
  },
  travel: {
    colorName: "sky",
    colorHex: "#0284c7",
    badgeClass: "badge-travel",
    borderClass: "border-t-sky-600",
    iconBgClass: "bg-sky-50 text-sky-700 border border-sky-200",
    pillActiveBg: "bg-sky-600 text-white",
  },
  technology: {
    colorName: "cyan",
    colorHex: "#0891b2",
    badgeClass: "badge-tech",
    borderClass: "border-t-cyan-500",
    iconBgClass: "bg-cyan-50 text-cyan-800 border border-cyan-200",
    pillActiveBg: "bg-cyan-700 text-white",
  },
  personal: {
    colorName: "pink",
    colorHex: "#db2777",
    badgeClass: "badge-personal",
    borderClass: "border-t-pink-500",
    iconBgClass: "bg-pink-50 text-pink-700 border border-pink-200",
    pillActiveBg: "bg-pink-600 text-white",
  },
};

async function main() {
  const filePath = "./src/data/catalog.js";
  const catalogModule = await import("../src/data/catalog.js");

  const newDivisions = catalogModule.divisions.map((d) => ({
    ...d,
    theme: DIVISION_THEMES[d.id] || DIVISION_THEMES.government,
  }));

  const newServices = catalogModule.services.map((s) => {
    const meta = PORTAL_METADATA[s.id] || {
      portalUrl: `https://wa.me/919766174974?text=${encodeURIComponent(`Hello Amayra Computers, I need assistance with: ${s.name}`)}`,
      portalName: "Direct Counter Desk",
      actionLabel: `Inquire ${s.name}`,
      badgeText: "Counter Service",
      isGov: false,
    };
    return {
      ...s,
      ...meta,
    };
  });

  const documentsChecklist = [
    {
      category: "Identity & Citizenship",
      tag: "Central Portals",
      color: "orange",
      services: [
        {
          name: "New Aadhaar / Demographic Update",
          portal: "UIDAI myAadhaar",
          portalUrl: "https://myaadhaar.uidai.gov.in/",
          requirements: ["Proof of Identity (Voter ID / PAN / Passport)", "Proof of Address (Electricity Bill / Ration Card / Bank Passbook)", "DOB Proof (Birth Certificate / School Leaving)"],
          copies: "Originals + 1 Self-attested copy",
          counterTurnaround: "15 mins counter biometrics; 5-7 days dispatch",
        },
        {
          name: "PAN Card (New / Correction / Reprint)",
          portal: "Protean NSDL / UTIITSL",
          portalUrl: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
          requirements: ["Aadhaar Card (linked mobile for e-KYC)", "2 Recent Passport Size Photos (white background)", "Existing PAN copy (for correction/reprint)"],
          copies: "2 Photos + Aadhaar copy",
          counterTurnaround: "Immediate e-PAN (2-4 hrs); Physical card (7 days)",
        },
        {
          name: "Passport Seva (Fresh / Renewal / Tatkaal)",
          portal: "Passport Seva Kendra",
          portalUrl: "https://www.passportindia.gov.in/",
          requirements: ["Aadhaar Card", "PAN Card / Voter ID", "10th Passing Certificate / Birth Certificate", "1-Year Bank Statement / Electricity Bill (Address Proof)"],
          copies: "All originals + 2 sets self-attested copies",
          counterTurnaround: "Document verification & appointment slot in 24 hrs",
        },
      ],
    },
    {
      category: "State Certificates (Aaple Sarkar)",
      tag: "MahaOnline Direct",
      color: "emerald",
      services: [
        {
          name: "Domicile & Age/Nationality Certificate",
          portal: "Aaple Sarkar MahaOnline",
          portalUrl: "https://aaplesarkar.mahaonline.gov.in/",
          requirements: ["Ration Card", "School Leaving Certificate / Birth Certificate", "Continuous stay proof (15 years in Maharashtra - Light Bills/Tax Receipts)", "Affidavit on Stamp Paper"],
          copies: "Originals for scanning + Passport Photo",
          counterTurnaround: "Filing in 30 mins; Approval in 7 to 15 working days",
        },
        {
          name: "Income Certificate (Tehsildar)",
          portal: "Revenue Department Maharashtra",
          portalUrl: "https://aaplesarkar.mahaonline.gov.in/",
          requirements: ["Salary Slip / Form 16 or Talathi Income Certificate", "Ration Card", "Aadhaar Card", "Self-declaration affidavit"],
          copies: "Original salary proof + Aadhaar",
          counterTurnaround: "3 to 5 working days with digital seal",
        },
        {
          name: "Caste Certificate & Caste Validity",
          portal: "CCVIS MahaOnline",
          portalUrl: "https://castevalidity.mahaonline.gov.in/",
          requirements: ["Father / Paternal relative's pre-1961 caste evidence", "School Leaving Certificate of self & father", "7/12 extract or ancestral record", "Form 16 affidavit"],
          copies: "Complete lineage documentation dossier",
          counterTurnaround: "Application preparation, upload & scrutiny tracking",
        },
      ],
    },
    {
      category: "Land & Property Records",
      tag: "Mahabhumi / IGR",
      color: "amber",
      services: [
        {
          name: "Digitally Signed 7/12 & 8A Extract",
          portal: "Bhulekh Mahabhumi",
          portalUrl: "https://bhulekh.mahabhumi.gov.in/",
          requirements: ["District, Taluka, Village name", "Gat Number / Survey Number", "Aadhaar for digitally signed official record"],
          copies: "Instant digitally signed printout",
          counterTurnaround: "Instant 5-minute counter delivery",
        },
        {
          name: "Registered Rent Agreement",
          portal: "IGR Maharashtra",
          portalUrl: "https://igrmaharashtra.gov.in/",
          requirements: ["Landlord & Tenant Aadhaar + PAN", "Two Witnesses with Aadhaar", "Electricity Bill / Index II of Property", "Biometric verification at counter"],
          copies: "Originals + Index II copy",
          counterTurnaround: "Same-day biometric execution & submission",
        },
        {
          name: "Light Bill Connection Name Change",
          portal: "Mahavitaran (MSEDCL)",
          portalUrl: "https://wss.mahadiscom.in/wss/wss",
          requirements: ["Latest Electricity Bill", "Registered Sale Deed / Rent Agreement / Index II", "NOC from previous owner / death certificate if inherited", "Consumer number"],
          copies: "Index II copy + Latest Bill + Aadhaar",
          counterTurnaround: "Online portal filing & test report submission",
        },
      ],
    },
    {
      category: "Welfare & Subsidies",
      tag: "Health & Farmers",
      color: "rose",
      services: [
        {
          name: "Ayushman Bharat PM-JAY (Golden Card)",
          portal: "PM-JAY Beneficiary Portal",
          portalUrl: "https://beneficiary.nha.gov.in/",
          requirements: ["Ration Card (Orange / Yellow NFSA)", "Aadhaar Card of all family members", "Mobile linked with Aadhaar for OTP verification"],
          copies: "Aadhaar + Ration Card",
          counterTurnaround: "Instant eligibility verification & PVC Card print",
        },
        {
          name: "PM-KISAN Samman Nidhi e-KYC",
          portal: "PM-KISAN Portal",
          portalUrl: "https://pmkisan.gov.in/",
          requirements: ["7/12 land extract in farmer's name", "Aadhaar Card", "Bank passbook linked with Aadhaar (NPCI mapped)"],
          copies: "Aadhaar + Bank Passbook + 7/12",
          counterTurnaround: "Instant biometric / OTP e-KYC completion",
        },
        {
          name: "Ration Card (New / Member Addition / Split)",
          portal: "MahaFood RCMS",
          portalUrl: "https://rcms.mahafood.gov.in/",
          requirements: ["Existing Ration Card", "Birth Certificate or Aadhaar of member to add", "Surrender / Deletion certificate if migrating", "LPG connection details"],
          copies: "Original Ration Card + Aadhaar copies",
          counterTurnaround: "Online submission with acknowledgement receipt",
        },
      ],
    },
  ];

  let code = `/**
 * Canonical service catalogue for Amayra Computers.
 * Enriched with direct Indian Government and official portal endpoints,
 * action labels, authentic badge types, and document verification checklists.
 */

export const divisions = ${JSON.stringify(newDivisions, null, 2)};

export const services = ${JSON.stringify(newServices, null, 2)};

export const documentsChecklist = ${JSON.stringify(documentsChecklist, null, 2)};

export const company = ${JSON.stringify(catalogModule.company, null, 2)};

export const legal = ${JSON.stringify(catalogModule.legal, null, 2)};

export const serviceById = new Map(services.map((s) => [s.id, s]));

export const servicesByDivision = divisions.map((d) => ({
  ...d,
  services: services.filter((s) => s.division === d.id),
}));
`;

  writeFileSync(filePath, code, "utf8");
  console.log("Successfully enriched src/data/catalog.js with portal endpoints and documents checklist!");
}

main().catch(console.error);
