# POLICY & LEGAL REVIEW CHECKLIST — INDIA COMPLIANCE
**Z.Cool Enterprises — Industrial HVAC/R Compressor Trading**  
**Document Ref:** ZCE-LEGAL-CHK-001  
**Target:** Samee Ulla (Proprietor / Managing Partner) & Legal Counsel  
**Status:** Baseline Draft for Review & Sign-Off  
**Date:** October 2026  

---

## 1. Statutory Context & Website Scope Classification

Before evaluating legal liabilities, the operating model of **Z.Cool Enterprises** must be defined accurately:

- **Current Architecture:** B2B Quotation-Request & Technical Sourcing Platform.
- **Transactions:** The website does **NOT** collect payments, process card checkouts, execute instant binding digital contracts, or ship goods automatically via consumer payment gateways.
- **Contract Formation:** Quotations are communicated offline or via WhatsApp/Email. Sale contracts, tax invoices, and dispatch clearances are executed via traditional B2B commercial terms.

---

## 2. Category 1: Requirements Confirmed by Current Official Indian Law

These statutory rules apply immediately to commercial websites, business communications, and electronic inquiries under Indian law:

| Statutory Provision / Rule | Current Legal Mandate | Z.Cool Enterprises Status | Required Action / Owner Sign-Off |
| :--- | :--- | :--- | :--- |
| **Information Technology Act, 2000 (Section 43A, 72A)** & **SPDI Rules, 2011** | Mandates publishing a clear Privacy Policy on the website disclosing what sensitive personal data is collected, purpose of use, and security practices. | **COMPLETED IN DRAFT** (`/privacy`) | Confirm business contact desk and internal data access controls. |
| **Consumer Protection (E-Commerce) Rules, 2020 (Rule 4 & 5)** | Requires commercial entities to display legal name, principal geographic address, customer care telephone number, email, and complaint redressal details. | **COMPLETED IN DRAFT** (Footer & Header) | Confirm official shop address at Shop No 5, Dharavi Bus Depot, Mumbai - 400017. |
| **Trade Marks Act, 1999 (Section 30(2)(d))** | Nominative fair use allows listing third-party trademarks (Copeland, Danfoss, Bitzer, Carrier, etc.) strictly to indicate compatibility, make, and characteristics. | **COMPLETED IN DRAFT** (Footer & Product Cards) | Maintain clear disclaimer that Z.Cool Enterprises is an independent trader and not an authorized OEM agent. |
| **Central Goods and Services Tax (CGST) Act, 2017** | Commercial invoices must display 15-digit GSTIN, state code (27 for Maharashtra), and accurate 8-digit HSN code (typically **8414 30 00** for refrigeration compressors). | **PENDING OWNER INPUT** | Provide official GSTIN for display on formal quotes and invoices. |
| **Indian Copyright Act, 1957 (Section 14 & 51)** | Prohibits unlicenced reproduction of OEM studio photography, catalogue graphics, and proprietary technical brochures. | **COMPLETED IN DRAFT** (`IMAGE_RIGHTS_REGISTER.md`) | Replace OEM stock cutouts with real workshop photos. |

---

## 3. Category 2: Provisions with Phased Commencement (DPDPA 2023)

The **Digital Personal Data Protection Act, 2023 (DPDPA 2023)** was enacted by the Parliament of India in August 2023. Key considerations:

| DPDPA 2023 Concept | Legal Status / Implementation Stage | Applicability to Z.Cool Enterprises | Interim Design Implemented |
| :--- | :--- | :--- | :--- |
| **Notice & Itemized Consent (Section 5 & 6)** | Rules and operational notification by the Ministry of Electronics and IT (MeitY) are rolling out in phases. | Applicable to personal data collected via website enquiry forms (Name, Phone, Email, IP). | Unchecked-by-default consent checkbox linking directly to `/privacy` added to all quote forms. |
| **Data Principal Rights (Section 11-14)** | Right to access, correct, update, and erase personal data, and grievance redressal mechanism. | Prospective clients can request erasure or correction of contact information. | Direct privacy desk contact (`zcoolenterprises392@gmail.com`) documented in Privacy Policy. |
| **Data Protection Board (DPB) of India** | Establishment and appellate mechanism under phased administrative rollout. | Pre-complaint resolution handled via designated business contact. | Formal internal escalation contact to be confirmed by owner. |
| **Parental Consent / Children's Data (Section 9)** | Strict ban on tracking or targeted ads directed at children under 18. | Zero consumer tracking cookies, advertising pixels, or children's profiling tools present on site. | Verified zero tracking cookies; no tracking banner needed. |

---

## 4. Category 3: Applicability Dependent on Website Transaction Model

The regulatory burden differs significantly between an **RFQ/Lead Generation Desk** versus a **Direct Online Payment E-Commerce Store**:

| Regulatory Obligation | If RFQ / Sourcing Desk (CURRENT) | If Online Payment Store (FUTURE) | Strategic Recommendation |
| :--- | :--- | :--- | :--- |
| **Payment Gateway Compliance (RBI Master Directions)** | **EXEMPT** (No card, UPI, or net banking integration on site). | **MANDATORY** (PCI-DSS compliance, tokenization, escrow accounts). | Maintain current offline quotation and NEFT/RTGS commercial banking flow. |
| **E-Commerce Grievance Officer Publication** | Recommended as standard best practice; formal statutory penalty applies to active online retail platforms. | **STRICTLY MANDATORY** with 48-hour acknowledgement and 1-month resolution SLA. | Designate Samee Ulla as primary operational grievance contact. |
| **Mandatory 14-Day Consumer Return Window** | **EXEMPT** (Commercial B2B machinery sales between business entities). | Potentially applicable if selling direct to individual retail consumers online. | Explicitly clarify B2B nature in all quotes (`/terms`). |
| **Country of Origin Display (Legal Metrology Act)** | Voluntary on technical RFQ listings; recommended on nameplate specifications. | **MANDATORY** for every packaged commodity sold on an e-commerce platform. | Nameplate photos provide authentic visual confirmation of manufacturing origin. |

---

## 5. Category 4: Business Policies Requiring Business Owner Decision

The following operational terms **CANNOT be invented or finalized by AI** and require explicit written decisions from Samee Ulla:

- [ ] **1. Refund & Testing Window:**
  - *Proposed Draft:* 48-hour Dead-On-Arrival (DOA) bench testing window from physical delivery.
  - *Decision Needed:* Does Z.Cool Enterprises offer a 48-hour testing window, 7-day exchange window, or strictly *"Inspection at Dharavi workshop prior to dispatch with zero post-dispatch return"*?
  - *Sign-off:* `[   ] Approved  [   ] Rejected  [   ] Modified to: ____________________`

- [ ] **2. Warranty & Return Exclusions:**
  - *Proposed Draft:* Warranty void if compressor is brazed/soldered into piping, contaminated with acid/sludge, or operated without motor thermal protection / phase failure relay.
  - *Decision Needed:* Are these standard trade exclusions acceptable, or does Z.Cool Enterprises provide replacement warranties on reconditioned compressors?
  - *Sign-off:* `[   ] Approved  [   ] Modified to: ____________________`

- [ ] **3. Freight & Transport Liability:**
  - *Proposed Draft:* Buyer bears two-way return transportation costs for warranty evaluation. Risk of transit damage transfers to buyer upon carrier handover in Mumbai.
  - *Decision Needed:* Confirm whether dispatch terms are strictly Ex-Works (EXW Dharavi) or Door-Delivery with transit insurance.
  - *Sign-off:* `[   ] Approved  [   ] Modified to: ____________________`

- [ ] **4. Customer Data Retention Period:**
  - *Proposed Draft:* Lead enquiries retained for 12 months for commercial re-orders, or purged within 90 days upon customer request.
  - *Decision Needed:* What is the official retention period for MongoDB inquiry records and uploaded nameplate images?
  - *Sign-off:* `[   ] 90 Days  [   ] 180 Days  [   ] 1 Year  [   ] 3 Years (Tax/Audit Standard)`

- [ ] **5. Formal Business Registration Identity:**
  - *Current Display:* Z.Cool Enterprises (Proprietorship / Partnership).
  - *Decision Needed:* Provide official GSTIN and state whether legal entity is a Sole Proprietorship, Partnership Firm, or LLP.
  - *GSTIN:* `_________________________________________`

---

## 6. Category 5: Matters Requiring Indian Legal Professional Review

Before publishing formal terms or launching commercial contracts, retain a qualified Advocate or High Court Counsel in Mumbai to review:

1. **Limitation of Liability under Indian Contract Act, 1872 (Section 73 & 74):**
   - Ensure the limitation of liability clause (capping maximum claims at the purchase price of the specific compressor core) is enforceable against commercial damages, loss of business, or refrigerant gas leakage.
2. **Jurisdiction & Arbitration Agreement:**
   - Formalize the dispute resolution clause: Exclusive jurisdiction of competent civil courts in Mumbai, Maharashtra, and arbitration under the Arbitration and Conciliation Act, 1996.
3. **B2B Nominative Trademark Fair Use Language:**
   - Review fair-use disclaimers regarding OEM brands (Danfoss, Copeland, Bitzer, Carrier Carlyle, etc.) under Section 30 of the Trade Marks Act, 1999 to guarantee immunity from trademark infringement claims.
4. **Drafting of Standard Tax Invoice Terms & Conditions:**
   - Synchronize website terms (`/terms`) with the fine print printed on physical tax invoices and delivery challans.

---

## 7. Approval Sign-Off Block

| Role | Name | Signature / Decision | Date |
| :--- | :--- | :--- | :--- |
| **Business Owner / Proprietor** | Samee Ulla | `[ PENDING OWNER REVIEW ]` | `____ / ____ / 2026` |
| **Legal Counsel / Advocate** | ____________________ | `[ PENDING COUNSEL REVIEW ]` | `____ / ____ / 2026` |

---
*Generated as part of Implementation Phase 1: Legal & Privacy Baseline — Z.Cool Enterprises.*
