# Service catalogue matrix

**86 service lines across 11 divisions.** This document is generated from `src/data/catalog.js` by `scripts/build-docs.mjs`; the shipped site is built from the same source, so the two cannot drift.

## Provenance

The reference site (`sites.google.com/view/vighnaharta-enterprises`) renders its body copy dynamically, so its navigation tree was the only machine-readable statement of its catalogue. That tree was harvested in full: the top-level pages, the **Services** sub-tree, the **Government** sub-tree and the **Contact Us** sub-tree. Every entry below carries the reference label it came from.

- **Reference** — the entry is a literal label from the reference navigation tree.
- **Expanded** — a sub-offering of a reference hub label (for example, *Printing* → *Lamination & Binding*). Legitimate expansion of an extracted label, not invention.
- **Brand** — derived from the Myra Computer Enterprises name rather than the reference site. The Technology division's list is brand-committed and needs client confirmation.

### Reference navigation tree as harvested

```
Home · DOCUMENTS · About · Our Mission · YOJANA · Tourism · Services · Government · Contact Us · Customer Review · Courier

Services
├── Educational ── RTE Forms · Scholarship Forms · Admissions
├── Sales
│   ├── Property Rent Sale & Purchase
│   ├── Engineering Supply to all India
│   ├── Job Search and Post ── job search · job post
│   ├── Insurance ── LIC · Star Health · HDFC Ergo · PIK VIMA · POS
│   ├── Loans ── MUDRA Loan · Personal Loan · Business Loan · Finance POS · Annasaheb Patil
│   └── Ticket Booking
├── Printing
├── Money Transfer
├── Mazi Nokari
├── Finance And Banking
├── Marriage
└── Gadi Kharedi Vikri

Government (29 entries)
AAPALE SARKAR · Bank Account Opening · EPFO · ESIC · Aadhaar · PAN · Passport
Ayushman Bharat · Ration Card · GST · PMAY 2.0 · ITR · Rent Agreement
Caste Validity · Smart Card Order · Partnership Firm Registration · recharge · Maps Forms
RTO Service · Light Bill Name Change · PMRDA · Gazette · MHADA Lottery
Marriage Certificate PCMC · Police Verification · Ticket Booking · PM KISAN · CSC · Anganwadi Bharti

Contact Us
Team · Payments · Careers · Blogs · News · Partners · Certification · OUR FRENCHISEE
Setu Connect AI Assistant · others (STYLE 1–5, INV, SIMPLE BLL, ADVANCE)
```

## Division summary

| # | Division | Services | Reference anchor |
|---|---|---|---|
| 1 | Government & Civic Services | 29 | AAPALE SARKAR · Bank Account Opening · Epfo |
| 2 | Education & Admissions | 3 | Rte Forms · Escholership Forms · Addmissions |
| 3 | Insurance & Protection | 5 | LIC · Star Health · HDFC Ergo |
| 4 | Loans & Credit | 5 | MUDRA lOAN · PERSONAL Loan · buissness loan |
| 5 | Print & Documentation | 8 | Printing · DOCUMENTS · Expanded |
| 6 | Money Transfer & Payments | 6 | Money Transfer · Expanded |
| 7 | Employment & Recruitment | 5 | Mazi Nokari · job search · job post |
| 8 | Sales & Commerce | 5 | Property Rent Sale & Purchase · Engineering Supply to all india · Gadi Kharedi Vikri |
| 9 | Travel & Tourism | 6 | Tourism · Ticket Booking · Expanded |
| 10 | Technology & IT | 10 | Brand |
| 11 | Marriage & Personal Records | 4 | Marriage · Expanded |

---

## Government & Civic Services

*Applications, registrations and certificates handled end to end across state and central portals.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Aaple Sarkar Portal Access** | Guided access to the State Government scheme and application portal, including scheme discovery and application filing. | Citizens, small traders and applicants unaware of which scheme applies | `lucide:globe` | Reference — `AAPALE SARKAR` |
| **Bank Account Opening** | New savings accounts, zero-balance and Jan Dhan accounts, with KYC completed at the counter. | First-time account holders, students, workers and micro-entrepreneurs | `lucide:building-2` | Reference — `Bank Account Opening` |
| **EPFO Services** | EPFO enrolment, employer registration, contribution records, claims and provident fund account updates. | Salaried employees, contract staff and small employers | `lucide:briefcase-business` | Reference — `Epfo` |
| **ESIC Services** | ESIC registration for employers and employees, contribution statements and benefit claims. | Employers with insured staff and workers in covered employment | `lucide:briefcase-medical` | Reference — `Esic` |
| **Aadhaar Services** | Aadhaar enrolment, address and demographic updates, and PVC card issuance. | Every adult and minor needing a verified identity document | `lucide:id-card` | Reference — `Adhar` |
| **PAN Card Services** | New PAN applications, corrections to name and date of birth, and reprint requests. | Students, salaried applicants and businesses filing returns | `lucide:id-card` | Reference — `Pan` |
| **Passport Application Services** | Fresh passport applications, renewals, reissue on lost or damaged documents, and police clearance coordination. | Applicants for domestic travel, study or employment abroad | `lucide:plane` | Reference — `Passport` |
| **Ayushman Bharat (PM-JAY)** | Ayushman Bharat card enrolment, beneficiary verification and hospital cashless entitlement assistance. | Low-income families seeking ₹5 lakh of secondary and tertiary health cover | `lucide:heart-pulse` | Reference — `Aushman Bharat` |
| **Ration Card Services** | New ration cards, family member additions and deletions, name corrections and card reprints. | Households drawing subsidised food grains | `lucide:receipt` | Reference — `RATION CARD` |
| **GST Registration & Returns** | GST registration, amendment of registration data, and monthly or quarterly return filing. | Traders, manufacturers, service firms and online sellers | `lucide:file-text` | Reference — `GST` |
| **PMAY 2.0 Housing Support** | Pradhan Mantri Awas Yojana 2.0 applications, urban credit-linked subsidy verification and document submission. | First-time home buyers and applicants for affordable urban housing | `lucide:house` | Reference — `Pmay 2.0` |
| **Income Tax Return Filing** | Return preparation and filing for individuals, proprietors, partnerships and companies, with e-verification. | Salaried taxpayers, traders and small business owners | `lucide:file-text` | Reference — `ITR` |
| **Rent Agreement Registration** | Drafting, printing and registration of rent agreements for tenant and landlord, with supporting copies. | Landlords and tenants needing a registered tenancy record | `lucide:file-text` | Reference — `RENT AGRIMENT` |
| **Caste Validity Certificate** | Application preparation and filing for caste validity certificates, including the supporting affidavit and evidence pack. | Students and job applicants needing a valid caste certificate | `lucide:badge-check` | Reference — `CASTE VALIDITY` |
| **Smart Card Ordering** | Ordering and reprinting of smart cards issued against ration, health and welfare schemes. | Beneficiaries of state and central welfare schemes | `lucide:credit-card` | Reference — `SMART CARD ORDER` |
| **Partnership Firm Registration** | Deed drafting, signature coordination and registration of a partnership firm with the Registrar. | New businesses forming a partnership rather than a company | `lucide:building` | Reference — `Partnership Firm Registrastion` |
| **Recharge & Bill Payment** | Mobile, DTH and data recharge alongside electricity, water and municipal bill payment. | Everyday counter traffic and households without digital payment access | `lucide:smartphone` | Reference — `recharge` |
| **Maps Forms & Land Records** | 7/12 extracts, land record applications, property maps and mutation paperwork. | Property buyers, tenants and farmers verifying land holdings | `lucide:map-pin` | Reference — `Maps Forms` |
| **RTO Vehicle Services** | Driving licence applications and renewals, registration certificate work, permits, fitness and challan payment. | Vehicle owners and prospective licence holders | `lucide:car` | Reference — `RTO SERVICE` |
| **Light Bill Name Change** | Transferring a electricity connection to a new name, tenant or owner, with all supporting forms filed. | Tenants, new owners and property transfers | `lucide:receipt` | Reference — `Light Bill Name change` |
| **PMRDA Plot & Lottery Services** | PMRDA scheme applications, plot allotment and lottery participation for the metropolitan region. | Prospective buyers of residential and commercial plots | `lucide:map-pin` | Reference — `PMRDA` |
| **Gazette Publication** | Publication of notices, tenders and legal advertisements in the official gazette. | Businesses and individuals with a statutory publication requirement | `lucide:scroll-text` | Reference — `gazette` |
| **MHADA Housing Lottery** | Application assistance, lottery participation and allotment tracking for MHADA housing schemes. | Families seeking subsidised housing through MHADA | `lucide:house` | Reference — `MHADA LOTTERY` |
| **Marriage Certificate (PCMC)** | Marriage registration and certified copies of the marriage register for municipal ward offices. | Newlyweds needing proof of marriage for records and claims | `lucide:heart` | Reference — `Marriage certificate PCMC` |
| **Police Verification** | Passport, visa and employment police verification applications submitted and tracked. | Applicants for passports, visas and government positions | `lucide:shield-check` | Reference — `POLICE VERIFICATION` |
| **Government Ticket Booking** | Reserved and unreserved tickets on state transport services, with the passenger's documents verified at the counter. | Commuters booking on MSRTC and city bus services | `lucide:ticket` | Reference — `TICKET BOOKING` |
| **PM KISAN Registration** | PM KISAN enrolment, e-KYC completion, beneficiary list correction and instalment status checks. | Landholding farmer families | `lucide:wheat` | Reference — `PM KISAN` |
| **CSC Common Services** | Bill payment, certificate applications and online form submission delivered through the Common Service Centre. | Anyone needing a certified government service without a queue | `lucide:monitor` | Reference — `csc` |
| **Anganwadi Bharti** | Application filing for Anganwadi recruitment, including application preparation and document upload. | Candidates for supervisor and helper posts | `lucide:users` | Reference — `ANGANWADI BHARTI` |

## Education & Admissions

*Right-to-Education applications, scholarship forms and admission support for students and parents.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Right to Education Forms** | RTE admission applications, lottery participation and school allotment processing. | Parents seeking admission for children from reserved categories | `lucide:graduation-cap` | Reference — `Rte Forms` |
| **Scholarship Forms** | Preparation and submission of central and state scholarship applications, with document bundling. | Students across pre-matric, post-matric and merit categories | `lucide:badge-check` | Reference — `Escholership Forms` |
| **Admissions Assistance** | Admission form filling, document collation and application submission for colleges and professional courses. | Students applying to degree, diploma and vocational programmes | `lucide:scroll-text` | Reference — `Addmissions` |

## Insurance & Protection

*Life, health, accident and point-of-sale cover arranged with principal insurers.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **LIC Life Insurance** | New life policies, premium collection, revival and claims support for Life Insurance Corporation policies. | Families and individuals planning long-term cover | `lucide:shield-check` | Reference — `LIC` |
| **Star Health Cover** | Retail and family health policies, hospital cash and top-up plans with renewal assistance. | Individuals and families buying private health cover | `lucide:heart-pulse` | Reference — `Star Health` |
| **HDFC Ergo Cover** | Accident and hospital cash policies from HDFC Ergo, including motor-linked accident cover. | Motorists, gig workers and families seeking accident cover | `lucide:shield` | Reference — `HDFC Ergo` |
| **PM Suraksha & Jeevan Jyoti** | Voluntary enrolment and premium payment for the government life and accident insurance schemes. | Low-income households eligible for subsidised cover | `lucide:users` | Reference — `PIK VIMA` |
| **Point of Sale Cover** | Short-duration POS insurance for travellers, vehicles and goods in transit, issued at the counter. | Customers needing immediate, low-term cover | `lucide:credit-card` | Reference — `POS` |

## Loans & Credit

*MUDRA, personal, business and POS credit, assessed and progressed at the counter.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **MUDRA Loan** | Shishu, Kishore and Tarun MUDRA applications prepared, filed and progressed with the lender. | Micro-entrepreneurs and small traders seeking collateral-free credit | `lucide:badge-indian-rupee` | Reference — `MUDRA lOAN` |
| **Personal Loan** | Unsecured personal credit applications, with eligibility assessment and document coordination. | Individuals funding medical, wedding or household needs | `lucide:wallet` | Reference — `PERSONAL Loan` |
| **Business Loan** | Working capital and term loans for MSMEs and proprietors, including business banking setup. | Manufacturers, retailers and service businesses | `lucide:factory` | Reference — `buissness loan` |
| **POS Finance** | Point-of-sale credit for retail and consumer transactions, with repayment tracked through the counter. | Retail customers and small merchants extending credit at the till | `lucide:scan-line` | Reference — `Finance POS` |
| **Annasaheb Patil Credit** | Applications under the Annasaheb Patil credit schemes for rural and self-help group borrowers. | SHG members and rural borrowers under state credit schemes | `lucide:landmark` | Reference — `annasaheb patil` |

## Print & Documentation

*The document room: printing, scanning, lamination, binding, typing and drafting.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Printing Services** | Colour and mono printing of applications, certificates, letters and office documents on the counter. | Anyone with a form to file, a document to copy or a notice to publish | `lucide:printer` | Reference — `Printing` |
| **Documents & Forms Library** | A maintained library of blank government forms, affidavits and certificates, printed on demand. | Applicants who need a correct, current form without a search | `lucide:folder-open` | Reference — `DOCUMENTS` |
| **Scanning & Digitisation** | Document scanning at print resolution, with file naming and PDF packaging for upload. | Applicants uploading documents to government portals | `lucide:scan-line` | Expanded — sub-offering of a reference hub |
| **Lamination & Binding** | Lamination of certificates and cards, and spiral, staple and hard binding of dossiers. | Students, applicants and office staff preparing records | `lucide:layers` | Expanded — sub-offering of a reference hub |
| **Typing & Drafting** | Document typing, letter drafting, affidavit preparation and resume preparation. | Job applicants, litigants and small business owners | `lucide:notebook-pen` | Expanded — sub-offering of a reference hub |
| **Application Print Runs** | Bulk printing of application forms for institutions, schools, societies and offices. | Institutions filing a batch of forms on behalf of many people | `lucide:file-text` | Expanded — sub-offering of a reference hub |
| **ID Card Printing** | Photo ID cards, staff cards, badges and membership cards for organisations. | Offices, associations, hostels and coaching centres | `lucide:id-card` | Expanded — sub-offering of a reference hub |
| **Banners & Signage** | Banners, flex boards, standees and office signage produced and installed. | Shops, societies, offices and event organisers | `lucide:layout-panel-top` | Expanded — sub-offering of a reference hub |

## Money Transfer & Payments

*Counter and digital transfers, deposits and withdrawals, and merchant settlement.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Money Transfer** | Counter-based transfer of funds with an acknowledgement slip issued on the spot. | Anyone sending money to someone who may not use a banking app | `lucide:send` | Reference — `Money Transfer` |
| **Domestic Transfers** | Same-day domestic transfers by IMPS, NEFT and RTGS with receipt generation. | Individuals and small businesses paying across the country | `lucide:banknote` | Expanded — sub-offering of a reference hub |
| **International Remittance** | Outbound remittance support with compliant paperwork and bank-side processing. | Families supporting relatives overseas | `lucide:globe` | Expanded — sub-offering of a reference hub |
| **UPI & Digital Payments** | UPI ID creation, payment collection on behalf of a merchant, and digital payment onboarding. | Small merchants and first-time digital payment users | `lucide:smartphone` | Expanded — sub-offering of a reference hub |
| **Cash Deposit & Withdrawal** | Bank deposits and withdrawals for customers without net banking access. | Seniors, daily-wage workers and cash-dependent households | `lucide:landmark` | Expanded — sub-offering of a reference hub |
| **Merchant Settlement** | POS terminal activation, daily settlement and reconciliation for retail merchants. | Retailers and service businesses accepting card payments | `lucide:credit-card` | Expanded — sub-offering of a reference hub |

## Employment & Recruitment

*A placement desk for job seekers, and staffing support for employers who need people.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Mazi Nokari Placement Desk** | A local placement desk matching registered job seekers to live openings, with follow-up on applications. | Job seekers in the district, including first-time and career-changers | `lucide:users-round` | Reference — `Mazi Nokari` |
| **Job Search Support** | Job profile preparation, vacancy matching and application filing for registered candidates. | Candidates preparing for and applying to active openings | `lucide:search` | Reference — `job search` |
| **Job Posting for Employers** | Employer job requirements published to the local candidate pool, with screening support. | Employers recruiting locally without a large HR function | `lucide:briefcase-business` | Reference — `job post` |
| **Staffing & Temporary Staffing** | Verified staffing for shops, offices, events and site work, with payroll support at the counter. | Businesses needing short-term or hourly staff | `lucide:users` | Expanded — sub-offering of a reference hub |
| **Computer & Skills Training** | Short certification courses in office applications, basic coding, accounts and digital literacy. | Students, job seekers and staff needing a formal computer qualification | `lucide:graduation-cap` | Expanded — sub-offering of a reference hub |

## Sales & Commerce

*Property transactions, industrial supply, and second-hand vehicle brokerage.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Property Rent, Sale & Purchase** | Property listings, tenant matching, agreement drafting and registration coordination. | Landlords, tenants and buyers in the local market | `lucide:house` | Reference — `Property Rent Sale & Purchase` |
| **Engineering & Industrial Supply** | Industrial and engineering consumables, tools and equipment supplied across the country. | MSME manufacturers, fabricators and engineering workshops | `lucide:factory` | Reference — `Engineering Supply to all india` |
| **Second-hand Vehicle Brokerage** | Valuation, document verification and brokered resale of second-hand cars and two-wheelers. | Private buyers and sellers of used vehicles | `lucide:car` | Reference — `Gadi Kharedi Vikri` |
| **Vendor & Supplier Sourcing** | Supplier identification, quotation collection and comparison for procurement needs. | Procurement teams and small businesses buying at volume | `lucide:store` | Expanded — sub-offering of a reference hub |
| **Business Setup Advisory** | Guidance on entity type, registration sequence and compliance calendar for a new business. | First-time founders setting up an enterprise | `lucide:briefcase` | Expanded — sub-offering of a reference hub |

## Travel & Tourism

*Tickets, packages, stays and the paperwork that travels with you.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Tour Packages** | Domestic and international leisure packages arranged with transport, stay and itinerary support. | Families and groups planning a holiday or pilgrimage | `lucide:plane` | Reference — `Tourism` |
| **Flight & Train Ticket Booking** | Domestic and international air tickets and rail bookings, including cancellation and reissue. | Travellers booking directly rather than through an app | `lucide:ticket` | Reference — `Ticket Booking` |
| **Hotel & Resort Booking** | Accommodation reserved across budgets, with negotiated rates for longer stays. | Business travellers and families booking directly | `lucide:bed-double` | Expanded — sub-offering of a reference hub |
| **Visa & Travel Documentation** | Visa form preparation, document collation and appointment scheduling for travel and study. | Applicants for business, tourist, work and student visas | `lucide:file-check` | Expanded — sub-offering of a reference hub |
| **Forex & Travel Insurance** | Travel insurance arranged alongside foreign currency guidance for outbound journeys. | International travellers | `lucide:circle-dollar-sign` | Expanded — sub-offering of a reference hub |
| **Group & Tour Transport** | Coordinated coach and tempo transport for group tours, pilgrimages and institutional outings. | Tour operators, schools and social groups | `lucide:bus` | Expanded — sub-offering of a reference hub |

## Technology & IT

*The core engineering practice: hardware, networks, software, security and support.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Hardware Procurement & Supply** | Desktops, laptops, servers and peripherals specified for the workload and supplied with warranty cover. | Offices, schools, clinics and retail businesses equipping a floor | `lucide:monitor` | Brand — Technology division |
| **Network & Infrastructure** | Structured cabling, switching, wireless coverage and firewall installation for offices and campuses. | Organisations moving beyond a single unmanaged router | `lucide:wifi` | Brand — Technology division |
| **AMC & Maintenance Contracts** | Annual maintenance contracts with defined response times, preventive visits and a spares commitment. | Offices that need downtime covered rather than paid for per incident | `lucide:wrench` | Brand — Technology division |
| **On-Site & Remote IT Support** | Remote helpdesk and scheduled on-site visits for hardware faults, software issues and user onboarding. | Small and mid-sized teams without a dedicated IT hire | `lucide:headset` | Brand — Technology division |
| **Software Installation & Licensing** | Installation, activation and renewal of operating systems, office suites and business applications. | Offices standardising software across machines | `lucide:package` | Brand — Technology division |
| **Websites & Web Applications** | Corporate websites, catalogue sites and internal web applications, built and maintained end to end. | Businesses that need to be found, or to transact online | `lucide:globe` | Brand — Technology division |
| **Backup, Recovery & Data Security** | Scheduled backups, tested restores and recovery plans for the data a business cannot lose. | Any organisation holding records it cannot rebuild | `lucide:hard-drive` | Brand — Technology division |
| **Cyber Security & Endpoint Protection** | Endpoint protection, access control, patching and staff awareness built around a real threat model. | Businesses handling customer or payment data | `lucide:shield` | Brand — Technology division |
| **Cloud & Server Management** | Server and cloud hosting administration, monitoring, scaling and cost control. | Teams moving from on-premise hardware to managed infrastructure | `lucide:server` | Brand — Technology division |
| **Corporate IT Upskilling** | Team training on productivity suites, cyber hygiene, workflows and the software the business runs on. | Organisations improving internal digital capability | `lucide:book-open` | Brand — Technology division |

## Marriage & Personal Records

*Registration, certificates and event paperwork for the milestones that matter.*

| Service | Description | Target audience / use case | Icon | Provenance |
|---|---|---|---|---|
| **Marriage Registration** | Marriage registration filing at the municipal office, with appointment and document coordination. | Couples completing a legal marriage registration | `lucide:heart` | Reference — `Marriage` |
| **Marriage Cards & Invitations** | Invitation card design and printing, including envelopes and return of the reply. | Families hosting a wedding or a formal event | `lucide:mail` | Expanded — sub-offering of a reference hub |
| **Event & Stationery Services** | Banners, standees, flex prints and stage decoration for family and institutional events. | Families and institutions hosting an event | `lucide:calendar-days` | Expanded — sub-offering of a reference hub |
| **Matchmaking Referral** | Introduction to a vetted matchmaking network with profile preparation support. | Families seeking a marriage partner | `lucide:users-round` | Expanded — sub-offering of a reference hub |

---

## Inquiry routing

Every service resolves to one inquiry path. The service's `id` is the value submitted by the inquiry form and is used to pre-select the service when a visitor clicks **"Inquire about this service"** on a tile.

| Field | Required | Notes |
|---|---|---|
| Full name | Yes | Used to address the reply. |
| Phone number | Yes | 10-digit minimum; the service owner calls back. |
| Email | No | Validated when supplied; used for document lists. |
| Service | Yes | 65 options, grouped by division in an `optgroup`. |
| Needed by | No | Flexible, one week, fortnight, month, urgent. |
| What is required | No | Applicants, documents held, portal deadlines. |

**Counter.** Shop 12, Sai Arcade, Fergusson College Road, Shivajinagar, Pune 411005, Maharashtra. Phone +91 98765 43210. Email contact@myracomputer.in.

| Day | Hours |
|---|---|
| Monday – Friday | 09:30 – 20:00 |
| Saturday | 09:30 – 20:00 |
| Sunday & public holidays | 10:00 – 14:00 |

---

### Placeholder notice

Every contact detail, address, hour, credential and figure in this matrix is placeholder content carried in `src/data/catalog.js`. They are marked with `PLACEHOLDER` in that file and must be confirmed before the site is published. No testimonial, client count or performance claim is present anywhere in the build.
