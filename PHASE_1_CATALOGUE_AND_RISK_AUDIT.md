# Z COOL ENTERPRISES — PHASE 1: PRODUCT CATALOGUE, DATA & RISK AUDIT

**Document Type:** Strategic Architectural, Catalogue Forensic, Performance & Risk Compliance Audit  
**Date:** 24 October 2026  
**Auditor Roles:** Senior Next.js Architect, Catalogue Data Engineer, Performance Specialist & Website Compliance Auditor  
**Scope of Review:**  
- Active Frontend Project: `c:\Users\AFFAN KHAN\OneDrive\Desktop\zcool\Z-Cool-enterprises`  
- Active Backend Project: `c:\Projects\Z-Cool-enterprises-backend`  
- Legacy Asset Cache: `legacy-product-recovery/` & Local Reference PDF  
**Operational Status:** AUDIT COMPLETE — STRICT READ-ONLY MODE MAINTAINED (0 Production Code Mutations, 0 Package Installations, 0 External Scrapes, 0 Production API Calls)

---

## TABLE OF CONTENTS
1. [Existing Catalogue Inventory Analysis](#1-existing-catalogue-inventory-analysis)
2. [Old Website Reference & Source Asset Audit](#2-old-website-reference--source-asset-audit)
3. [Proposed Category Architecture & Data Schema](#3-proposed-category-architecture--data-schema)
4. [Data Inconsistencies, Model Conflicts & Client Inquiries](#4-data-inconsistencies-model-conflicts--client-inquiries)
5. [Copyright, Trademark & Intellectual Property Risk Review](#5-copyright-trademark--intellectual-property-risk-review)
6. [Performance, Scalability & Capacity Load-Test Plan](#6-performance-scalability--capacity-load-test-plan)
7. [Legal, Regulatory, Privacy & Accessibility Checklist](#7-legal-regulatory-privacy--accessibility-checklist)
8. [Phased Implementation Roadmap & Acceptance Gates](#8-phased-implementation-roadmap--acceptance-gates)
9. [Segregated Findings: Confirmed Facts, Explicit Assumptions & Unresolved Items](#9-segregated-findings-confirmed-facts-explicit-assumptions--unresolved-items)

---

## 1. EXISTING CATALOGUE INVENTORY ANALYSIS

### 1.1 Source-of-Truth Determination & Database State
An empirical audit was conducted across the frontend and backend repositories to determine where product data originates:

* **Backend MongoDB State (`http://localhost:5000/api/products`):**
  Querying the backend product endpoint returned:
  ```json
  { "success": true, "count": 0, "totalCount": 0, "data": [] }
  ```
  The MongoDB `Product` collection currently contains **zero records**.
* **Frontend Data Fallback Mechanism (`src/lib/api.js:L53-59`):**
  ```javascript
  if (json.success && Array.isArray(json.data) && json.data.length > 0) {
    return json.data;
  }
  // Fallback executed when backend DB is empty:
  return PRODUCTS_CATALOG;
  ```
* **Conclusive Finding:** The current website's live product catalogue is served **100% from the static file `src/data/products.js`**. The backend database has not yet been populated or synchronized with production inventory.

### 1.2 Core Metrics & Inventory Breakdown
* **Total Active Products:** **45** products defined in `PRODUCTS_CATALOG` (`src/data/products.js`).
  - **Core Initial Prototype Records:** 6 records (5 distinct + 1 unified Daikin JT160).
  - **Migrated Legacy Listing Records:** 39 records (Items #1–9, #11–40).
* **Total Image Assets Referenced:** **43 unique image files**.
  - **3 Prototype Stock Cutouts:** `/ac_compressor.png` (169.6 KB), `/ac_compressor_2.png` (271.9 KB), `/ac_compressor_3.png` (455.7 KB).
  - **40 Legacy Client Photographs:** `/products/legacy/compressor1-73e93547.webp` through `compressor40-c178cb21.webp` (all verified present on disk in `public/products/legacy/`).
  - **Missing / Image-Less Products:** **2 records** deliberately have empty image arrays (`images: []`):
    1. `danfoss-maneurop-mtz64` (Danfoss Maneurop Reciprocating MTZ64) — renders a fallback technical blueprint silhouette.
    2. `copeland-discus-semihermetic` (Copeland Semi-Hermetic 3DS3R17ME) — renders a fallback technical blueprint silhouette.
  - **Broken Disk Paths:** **0**. Every referenced image resolves with `HTTP 200` on the local file system.

### 1.3 Active Categories Distribution (`CATEGORIES_LIST`)
| Category Name | Category Slug | Active Product Count | Engineering Mechanism Description |
|:---|:---|:---:|:---|
| **Scroll Compressors** | `scroll-compressors` | **20 Models** | Hermetic orbital scroll units for commercial ducted splits, package units, and chillers. |
| **Rotary Compressors** | `rotary-compressors` | **17 Models** | Compact single/twin rotary units for commercial cassettes, split ACs, and modular systems. |
| **Reciprocating Compressors** | `reciprocating-compressors` | **4 Models** | Heavy-duty piston & semi-hermetic units for cold storage, deep freezers, and industrial chillers. |
| **VRF / DC Inverter** | `vrf-inverter-compressors` | **4 Models** | Variable-speed DC inverter compressors for multi-zone VRV/VRF commercial outdoor condensing units. |
| **Total** | — | **45 Models** | Reconciled catalogue inventory. |

### 1.4 Active Manufacturer Brands Breakdown
1. **Copeland (Emerson):** 10 models (Scroll: ZR72, ZR125, ZR190, ZR190KCE, ZB150, ZB114, ZPD72, ZF15K4E; Recip: KCN463, 3DS3R17ME)
2. **Daikin:** 6 models (Scroll: JT160G-P8Y1, JT125, JT300D, Generic Scroll; Inverter: JT300, JT15)
3. **Mitsubishi / Mitsubishi Electric / SCI:** 6 models (Rotary: RB233, HNB83FB, TNB306FPNMT, TNB306FPGMT, 1.5TR SCI, Generic Rotary)
4. **Danfoss:** 4 models (Scroll: SM185S4RC, Blue Star OEM; Reciprocating: MTZ64, MT72)
5. **Hitachi:** 3 models (Rotary: 1.5TR; Scroll: Commercial Scroll; Inverter: DC Inverter)
6. **LG:** 3 models (Rotary: HQ034P, Generic Rotary; VRF: Multi-V VRV unit)
7. **Highly:** 2 models (Rotary: ANB52FKRMT, 1.0TR Rotary)
8. **GMCC:** 2 models (Rotary: 1.5TR R22, 2.0TR 24840 BTU R22)
9. **Carrier:** 1 model (Scroll: Commercial replacement)
10. **Panasonic:** 1 model (Scroll: SBN453)
11. **Samsung:** 1 model (Rotary: Split AC compressor)
12. **Sanyo:** 1 model (Scroll: Commercial unit)
13. **Generic / Umbrella / Multi-Brand:** 4 models (1-Ton Split AC, Commercial Ductable batch, Multi-brand rotary, General AC compressor)

### 1.5 Data Completeness & Missing Attribute Audit
An automated scan of all 45 catalogue objects in `src/data/products.js` revealed:
* **Commercial Pricing:** **0% populated**. Every product currently lists pricing as on-enquiry or `0`. No wholesale rate-sheet or retail prices exist.
* **Warranty Terms:** **0% populated**. No formal warranty duration or replacement guarantee terms are listed per product.
* **Condition Specification:** Populated with provisional tags (`"Sourcing Reference"` on 5 core models, `"Enquire for availability"` on 39 legacy models, `"Nameplate Verified · Physical Stock"` on Daikin JT160).
* **Physical Weight & Crated Dimensions:** **0% populated**. Missing across all 45 products, creating a gap for freight logistics calculation.
* **Oil Charge Type & Volume:** Only populated for 4 core items; missing across all 39 legacy items.
* **Pagination & Infinite Scroll:** **Completely absent**. All 45 product cards are rendered concurrently into the client DOM inside `ProductCatalogView.jsx`.

---

## 2. OLD WEBSITE REFERENCE & SOURCE ASSET AUDIT

### 2.1 Reference Document & Image Repository
* **Reference Source File:** `screencapture-zcoolenterprises-co-in-ac-compressor-html-2026-10-19-20_48_58.pdf` (Discovered in `C:\Users\AFFAN KHAN\Downloads`, 34,098,766 bytes, 15 pages).
* **Extracted Dataset Archive:** `legacy-product-recovery/dataset_website-image-downloader_2026-10-19_15-56-08-770.json` (41 records collected via Apify downloader from `https://zcoolenterprises.co.in/ac-compressor.html`).
* **Binary Image Archive:** `legacy-product-recovery/images.zip` (842,143 bytes, extracting to 41 distinct files in `legacy-product-recovery/extracted-images/`).
* **Visual Contact Sheet:** Compiled at `legacy-product-recovery/contact-sheet.png` (634,161 bytes).

### 2.2 Forensic Import Inventory Table (40 Legacy Website Entries)
The 40 product listings extracted from the client's historical AC compressor category page have been analyzed. All 40 items share identical boilerplate description on the old site (*"We provide high-quality engineering and infrastructure solutions..."*); therefore, technical details must be evaluated from visual image evidence and title strings:

| # | Proposed Product Name | Source Asset Filename | Brand | Model Number | Proposed Category | Visual Equipment Condition | Technical Specs (Confirmed / Stamped) | Price & Source Date | Duplicate / Overlap Status | Image Ownership / Permission Status | Confidence Level | Required Client Confirmation |
|:---:|:---|:---|:---|:---|:---|:---|:---|:---:|:---|:---|:---:|:---|
| 01 | 1 Ton Split AC Compressor | `compressor1-73e93547.webp` | Multi-Brand | Unspecified | Rotary | Used / Refurbished Workshop Stock | 1-Ton Nominal (12,000 BTU/h) | Enquiry (Oct 2026) | Umbrella category listing | Client Workshop Photo (High probability) | Low | Confirm brand/model stamped on batch |
| 02 | LG VRV Air Conditioner Compressor | `compressor2-651af61b.webp` | LG | Unspecified | VRF / Inverter | Used / Workshop Stock | Multi-V VRF Inverter Scroll | Enquiry (Oct 2026) | Unique | Client Workshop Photo (High probability) | Medium | Provide model number from nameplate |
| 03 | Commercial Ductable Compressor Batch | `compressor3-eea3c088.webp` | Commercial | Unspecified | Scroll | Used / Workshop Stock | 3 to 7.5 TR Commercial Ducted | Enquiry (Oct 2026) | Generic Batch Listing | Client Workshop Photo (High probability) | Low | Confirm whether sold as batch or individual models |
| 04 | Mitsubishi AC Rotary Compressor | `compressor4-52dac4e5.webp` | Mitsubishi | Unspecified | Rotary | Used / Workshop Stock | 1.5 to 2.0 TR Rotary | Enquiry (Oct 2026) | Unique | Client Workshop Photo (High probability) | Medium | Inspect side label for exact model |
| 05 | Samsung Rotary AC Compressor | `compressor5-cf8223c1.webp` | Samsung | Unspecified | Rotary | Studio Cutout | Single-phase 220V Split AC | Enquiry (Oct 2026) | Unique | Stock / Third-Party Catalog Image | Medium | Confirm actual physical inventory vs catalog reference |
| 06 | Highly Rotary Compressor ANB52FKRMT | `compressor6-3d4c0d5e.webp` | Highly | `ANB52FKRMT` | Rotary | Workshop Photo | Model `ANB52FKRMT`, R410A, Wiring leads | Enquiry (Oct 2026) | Unique | Client Workshop Photo (Nameplate visible) | **High** | Confirm stock availability & physical condition |
| 07 | Daikin Commercial Scroll Compressor | `compressor7-9e846a50.webp` | Daikin | Unspecified | Scroll | Refurbished Unit on Red Carpet | 380-415V 3-Phase Scroll | Enquiry (Oct 2026) | Overlaps generic Daikin listings | Client Workshop Photo (High probability) | Medium | Read stamped serial and model suffix |
| 08 | Multi-Brand Rotary Compressor Range | `compressor8-6b648442.webp` | Multi-Brand | Unspecified | Rotary | Studio Cutout | Rotary with accumulator | Enquiry (Oct 2026) | Umbrella category card | Stock / Vendor Cutout | Low | Reclassify as category banner or retire |
| 09 | Hitachi Rotary Compressor 1.5 Ton | `compressor9-000a9bec.webp` | Hitachi | Unspecified | Rotary | Studio Cutout | 1.5 TR (18,000 BTU/h) | Enquiry (Oct 2026) | Unique | Stock / Catalog Cutout | Medium | Supply photo of actual Hitachi inventory |
| 10 | Daikin Scroll Compressor JT160 | `compressor10-b2cafdd3.webp` | Daikin | `JT160` | Scroll | Workshop Photo (Nameplate) | Stamped `DAIKIN MODEL JT160G-P8Y1` | Enquiry (Oct 2026) | Unified with Core Record #2 | Client Workshop Photo (High probability) | **High** | Confirm full suffix (P8Y1 vs BCBY1L) & stock count |
| 11 | Copeland Scroll Compressor ZR125 | `compressor11-21a63ba1.webp` | Copeland | `ZR125` | Scroll | Studio Photo | 10 TR Commercial Scroll | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm voltage code (e.g., TWD vs TFD) |
| 12 | Copeland Scroll Compressor ZR190 | `compressor12-812a9015.webp` | Copeland | `ZR190` | Scroll | Studio Photo | 15 TR Commercial Scroll | Enquiry (Oct 2026) | Near-duplicate of Item 15 (ZR190KCE) | OEM / Catalog Reference Image | **High** | Clarify mineral oil (ZR190) vs POE oil (ZR190KCE) |
| 13 | Copeland Refrigeration Scroll ZB150 | `compressor13-30df9d9f.webp` | Copeland | `ZB150` | Scroll | Studio Photo | Medium-Temp Refrigeration Scroll | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm R404A / R134a operating range |
| 14 | Copeland Digital Scroll ZPD72 | `compressor14-b41709f7.webp` | Copeland | `ZPD72` | Scroll | Studio Photo | 6 TR Digital Modulation Scroll | Enquiry (Oct 2026) | Related to Core ZR72KC | OEM / Catalog Reference Image | **High** | Confirm whether digital solenoid unloader is stocked |
| 15 | Copeland Scroll Compressor ZR190KCE | `compressor15-38744453.webp` | Copeland | `ZR190KCE` | Scroll | Studio Cutout | 15 TR R407C/R134a Scroll | Enquiry (Oct 2026) | Near-duplicate of Item 12 | OEM / Catalog Reference Image | **High** | Confirm whether Item 12 and 15 are the same stock |
| 16 | Danfoss Performer Scroll SM185S4RC | `compressor16-edf2a5e4.webp` | Danfoss | `SM185S4RC` | Scroll | Product Photo | 15 TR Blue Performer Scroll | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm electrical supply (380-400V/3/50Hz) |
| 17 | GMCC Rotary Compressor 1.5 Ton R22 | `compressor17-10d9a476.webp` | GMCC | Unspecified | Rotary | Product Photo | 1.5 TR R22 Rotary with accumulator | Enquiry (Oct 2026) | Unique | OEM / Distributor Catalog Image | Medium | Confirm physical stock model code |
| 18 | Daikin Commercial Scroll JT300D | `compressor18-cd943799.webp` | Daikin | `JT300D` | Scroll | Product Photo | 10 TR Constant-Speed Commercial Scroll | Enquiry (Oct 2026) | Distinct from Core JT300 Inverter | OEM / Catalog Reference Image | **High** | Confirm fixed-speed JT300D vs Inverter JT300 |
| 19 | Daikin Commercial Scroll JT125 | `compressor19-278c06c9.webp` | Daikin | `JT125` | Scroll | Studio Photo | ~4 TR Commercial Scroll | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm R22 or R410A variant |
| 20 | Copeland Low-Temp Scroll ZF15K4E | `compressor20-3ef88758.webp` | Copeland | `ZF15K4E` | Scroll | Product Photo | Low-Temp Cold Storage with Injection | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm DTC liquid injection valve included |
| 21 | Mitsubishi Rotary Compressor RB233 | `compressor21-15b60a62.webp` | Mitsubishi | `RB233` | Rotary | Product Photo | Commercial Rotary Compressor | Enquiry (Oct 2026) | Unique | Distributor Catalog Image | **High** | Confirm displacement and refrigerant |
| 22 | Mitsubishi Electric Compressor HNB83FB-YE-C | `compressor22-30aea93a.webp` | Mitsubishi Electric | `HNB83FB-YE-C` | Rotary | Workshop Photo | Model label `HNB83FB-YE-C` visible | Enquiry (Oct 2026) | Unique | Client Workshop Photo (High probability) | **High** | Confirm inverter drive requirement |
| 23 | LG Commercial AC Compressor | `compressor23-936c8491.webp` | LG | Unspecified | Rotary | Workshop Photo | Black cylinder on wooden floor | Enquiry (Oct 2026) | Overlaps Core LG HQ034P | Client Workshop Photo (High probability) | Medium | Provide model suffix from label |
| 24 | Mitsubishi Twin-Rotary TNB306FPNMT | `compressor24-e2a56c56.webp` | Mitsubishi | `TNB306FPNMT` | Rotary | Product Photo | Twin-Rotary Commercial Unit | Enquiry (Oct 2026) | Variant of Item 27 (TNB306FPGMT) | OEM / Distributor Catalog Image | **High** | Confirm difference between FPNMT and FPGMT |
| 25 | Split Air Conditioner Compressor Batch | `compressor25-c9b6dc9a.webp` | Multi-Brand | Unspecified | Rotary | Workshop Photo | Group of 1-2 TR split compressors | Enquiry (Oct 2026) | Near-duplicate of Item 1 | Client Workshop Photo (High probability) | Low | Clarify if sold as mixed lots or individual units |
| 26 | Carrier Commercial AC Compressor | `compressor26-346394ec.webp` | Carrier | Unspecified | Scroll | Product Photo | Commercial rooftop/package scroll | Enquiry (Oct 2026) | Unique | OEM / Distributor Catalog Image | Medium | Supply Carrier model code (e.g. 06D / Millennium) |
| 27 | Mitsubishi Twin-Rotary TNB306FPGMT | `compressor27-de153194.webp` | Mitsubishi | `TNB306FPGMT` | Rotary | Product Photo | Twin-Rotary Commercial Unit | Enquiry (Oct 2026) | Variant of Item 24 (TNB306FPNMT) | OEM / Distributor Catalog Image | **High** | Confirm voltage and oil specification |
| 28 | Sanyo Commercial Scroll Compressor | `compressor28-fd12d544.webp` | Sanyo | Unspecified | Scroll | Studio Photo | Commercial Scroll Unit | Enquiry (Oct 2026) | Unique | OEM / Distributor Catalog Image | Medium | Confirm C-SB or C-SC model code |
| 29 | 1.5 Ton Mitsubishi SCI Rotary Compressor | `compressor29-73704b79.webp` | Mitsubishi / SCI | Unspecified | Rotary | Studio Cutout | 1.5 TR Siam Compressor Industry unit | Enquiry (Oct 2026) | Unique | OEM / Distributor Catalog Image | Medium | Confirm RH series model code |
| 30 | Hitachi AC DC Inverter Compressor | `compressor30-f24c0ecf.webp` | Hitachi | Unspecified | VRF / Inverter | Product Photo | Variable-Speed DC Inverter Scroll | Enquiry (Oct 2026) | Unique | OEM / Distributor Catalog Image | Medium | Confirm driver board compatibility |
| 31 | Hitachi Commercial Scroll Compressor | `compressor31-9de4f015.webp` | Hitachi | Unspecified | Scroll | Product Photo | Commercial Fixed-Speed Scroll | Enquiry (Oct 2026) | Unique | OEM / Distributor Catalog Image | Medium | Confirm 400V 3-Phase model number |
| 32 | Highly 1 Ton Rotary Compressor | `compressor32-6b91a9f4.webp` | Highly | Unspecified | Rotary | Product Photo | 1.0 TR (12,000 BTU/h) Rotary | Enquiry (Oct 2026) | Related to Item 6 (ANB52) | OEM / Distributor Catalog Image | Medium | Confirm exact Highly model code |
| 33 | Blue Star Danfoss AC Compressor | `compressor33-3572b3fe.webp` | Danfoss / Blue Star | Unspecified | Scroll | Workshop Photo in Chiller Frame | Commercial Chiller Application | Enquiry (Oct 2026) | Unique | Client Workshop Photo (High probability) | Medium | Confirm whether selling bare compressor or package |
| 34 | Commercial Air Conditioner Compressor | `compressor34-23010b21.webp` | Generic | Unspecified | Scroll | Stock Photo | General Commercial Scroll Shell | Enquiry (Oct 2026) | Generic placeholder card | Stock Image | Low | Retire or replace with verified physical unit |
| 35 | GMCC 2.0 TR Rotary R22 Compressor | `compressor35-0a78f75f.webp` | GMCC | `24,840 BTU/h` | Rotary | Studio Photo | 2.0 TR (24,840 BTU/h) R22 Rotary | Enquiry (Oct 2026) | Unique | OEM / Distributor Catalog Image | **High** | Confirm PH series model number |
| 36 | Copeland Hermetic Reciprocating KCN463 | `compressor36-418aaab1.webp` | Copeland | `KCN 463` | Reciprocating | Product Photo | Small Hermetic Piston for Coolers | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm displacement and application range |
| 37 | Copeland Refrigeration Scroll ZB114KCE | `compressor37-945e55c6.webp` | Copeland | `ZB 114 KCE` | Scroll | Product Photo | 15 HP Medium-Temp Refrigeration | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm R404A / R407A refrigerant charge |
| 38 | Panasonic Commercial Scroll SBN453 | `compressor38-fc59e0c9.webp` | Panasonic | `SBN453` | Scroll | Studio Photo | 6 TR Commercial Scroll SBN Series | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm voltage code and oil level |
| 39 | Danfoss Maneurop Reciprocating MT72 | `compressor39-40c1c0c4.webp` | Danfoss | `MT72` | Reciprocating | Authentic Product Photo | 6 TR Round Blue Maneurop with Rotolock | Enquiry (Oct 2026) | Distinct from Core MTZ64 | Authentic Product Photo | **High** | Confirm Mineral 160P oil charge (R22) |
| 40 | Daikin DC Inverter Compressor JT15 | `compressor40-c178cb21.webp` | Daikin | `JT15` | VRF / Inverter | Product Photo | Mini-VRV / Commercial Split Inverter | Enquiry (Oct 2026) | Unique | OEM / Catalog Reference Image | **High** | Confirm drive controller requirements |

---

## 3. PROPOSED CATEGORY ARCHITECTURE & DATA SCHEMA

### 3.1 Multi-Dimensional B2B Navigation Architecture
Industrial HVAC buyers search by **mechanism**, **application**, or **OEM manufacturer**. A flat category list fails commercial procurement managers. The proposed catalogue implements a 3-tier orthogonal classification:

```
CATALOGUE TAXONOMY ROOT
│
├── 1. PRIMARY ENGINEERING MECHANISMS (Taxonomy Engine)
│   ├── /products/category/scroll-compressors
│   │   ├── Fixed-Speed Commercial Scrolls (Copeland ZR, Daikin JT, Danfoss SM)
│   │   ├── Digital Modulation Scrolls (Copeland ZPD)
│   │   └── Medium/Low-Temp Refrigeration Scrolls (Copeland ZB, ZF)
│   ├── /products/category/rotary-compressors
│   │   ├── Single-Cylinder Hermetic Rotaries (1.0 TR – 2.0 TR)
│   │   └── Twin-Rotary High-Capacity Commercial Units (Mitsubishi TNB, Highly)
│   ├── /products/category/reciprocating-compressors
│   │   ├── Welded Hermetic Piston Units (Copeland KCN)
│   │   ├── Maneurop Rotolock Reciprocating Compressors (Danfoss MT/MTZ)
│   │   └── Cast-Iron Semi-Hermetic Discus Machines (Copeland Discus, Bitzer)
│   ├── /products/category/vrf-inverter-compressors
│   │   ├── DC Inverter Variable Speed Units (Daikin VRV, LG Multi-V, Hitachi)
│   │   └── Multi-Zone Outdoor Condenser Replacement Blocks
│   └── /products/category/screw-compressors (Reserved for Future Industrial Chiller Expansion)
│
├── 2. APPLICATION-BASED FACETS (Cross-Filter Tagging)
│   ├── Commercial Ducted Splits & Rooftop Packages
│   ├── VRV / VRF Multi-Zone Office Infrastructure
│   ├── Cold Storage, Blast Freezers & Dairy Processing
│   └── Industrial Process Chillers & Chemical Plants
│
└── 3. NON-COMPRESSOR ANCILLARY COMPONENTS (Strict Isolation — Do Not Force into Compressors)
    ├── /products/parts/fan-motors (Condenser Fan Motors, Blower Drives)
    ├── /products/parts/inverter-pcbs (Inverter Power Boards, Noise Filters)
    ├── /products/parts/refrigeration-valves (TXVs, Solenoid Valves, Sight Glasses)
    └── /products/parts/consumables (Approved POE / PVE / Mineral Refrigeration Oils)
```

### 3.2 Target Product Data Schema (Mongoose & TypeScript Specification)
```typescript
interface ProductSchema {
  // Identification & URL Routing
  _id: string;                          // MongoDB ObjectId
  id: string;                           // Stable unique string identifier (e.g. 'daikin-jt160g-p8y1')
  slug: string;                         // SEO-canonical URL slug (e.g. 'daikin-jt160g-p8y1-scroll')
  catalogCode: string;                  // Internal SKU (e.g. 'Z-DAI-JT160')
  name: string;                         // Full commercial display name
  brand: string;                        // OEM brand (e.g. 'Daikin')
  modelNumber: string;                  // Exact OEM model code (e.g. 'JT160G-P8Y1')
  modelSeries?: string;                 // Family (e.g. 'JT Series')

  // Engineering Categorization
  category: 'Scroll' | 'Rotary' | 'Reciprocating' | 'VRF / Inverter' | 'Screw' | 'Ancillary Parts';
  subCategory?: string;                 // e.g. 'Semi-Hermetic Discus'
  applications: string[];               // ['Cold Storage', 'Process Chiller']

  // Sourcing & Commercial Status
  condition: 'Refurbished & Tested' | 'Tested Surplus Pull-Out' | 'New Surplus' | 'Sourcing on Order';
  availability: 'IN STOCK' | 'SOURCING 2-4 DAYS' | 'ENQUIRE AVAILABILITY' | 'OUT OF STOCK';
  stockQuantity?: number;               // Internal physical count (hidden or masked on frontend)
  price: {
    amount: number;                     // 0 = Price on Application
    currency: 'INR';
    priceType: 'Fixed' | 'On Enquiry' | 'Wholesale Tiered';
    taxStatus: '18% GST Extra' | 'Inclusive';
  };

  // Technical Specifications
  technical: {
    coolingCapacityBtu?: number;        // e.g. 72000
    tonnageNominal?: number;            // e.g. 6.0
    displacementM3h?: number;           // e.g. 17.1
    displacementCc?: number;            // e.g. 52.0 (for rotary)
    electrical: {
      voltage: string;                  // '380-415V' | '220-240V'
      phase: 1 | 3;
      frequencyHz: 50 | 60;
      rlaAmps?: number;
      lraAmps?: number;
    };
    refrigerant: string[];              // ['R410A'] or ['R22', 'R407C']
    oilType: 'POE' | 'PVE' | 'Mineral' | 'Alkylbenzene';
    oilChargeMl?: number;
    mountingFootprint?: string;         // Dimensions in mm
    suctionConnection: string;          // e.g. '7/8" ODF Braze' or 'Rotolock 1-1/4"'
    dischargeConnection: string;        // e.g. '1/2" ODF Braze'
    netWeightKg?: number;
  };

  // Workshop Verification & Quality Assurance
  qualityAssurance: {
    isPressureTested: boolean;
    nitrogenHoldingBar?: number;        // e.g. 28 bar holding test
    meggerInsulationMohm?: number;      // e.g. > 100 MΩ electrical insulation
    oilConditionCheck: boolean;
    terminalBlockInspected: boolean;
    testCertProvided: boolean;
  };

  // Media & Provenance Tracking
  media: Array<{
    url: string;                        // Absolute CDN or internal path
    publicId?: string;                  // Cloudinary identifier
    width: number;
    height: number;
    format: 'webp' | 'png' | 'jpg';
    imageType: 'authentic_workshop_photo' | 'nameplate_macro' | 'oem_reference_catalog' | 'silhouette_placeholder';
    isPrimary: boolean;
    caption: string;
    copyrightOwnership: 'Client Owned' | 'Nominative OEM Reference' | 'Licensed';
    disclaimerRequired: boolean;
  }>;

  // SEO & Metadata
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    keywords: string[];
  };

  createdAt: Date;
  updatedAt: Date;
}
```

---

## 4. DATA INCONSISTENCIES, MODEL CONFLICTS & CLIENT INQUIRIES

### 4.1 Critical Technical Discrepancies Flagged
During cross-referencing between the current codebase, the 40 legacy records, and physical engineering realities, seven critical discrepancies were detected:

1. **Card 4 Danfoss MTZ64 vs. Stock Copeland Silhouette (`src/data/products.js:L138`):**
   - *Conflict:* MTZ64 is an R404A/POE reciprocating compressor. The current application displays a Copeland orbital scroll silhouette (`/ac_compressor.png`).
   - *Risk:* Severe credibility failure when viewed by refrigeration engineers.
   - *Status:* Temporarily mitigated by removing the wrong image and displaying the technical blueprint placeholder.
2. **Card 5 Copeland Discus Semi-Hermetic 3DS3R17ME vs. Canister Silhouette (`src/data/products.js:L186`):**
   - *Conflict:* Discus compressors are massive 145 kg cast-iron multi-cylinder machines. The prototype displayed a smooth rotary canister (`/ac_compressor_3.png`).
   - *Status:* Temporarily mitigated by displaying the technical blueprint placeholder.
3. **Legacy Item 12 (`ZR190`) vs. Legacy Item 15 (`ZR190KCE`):**
   - *Conflict:* `ZR190` uses mineral oil for HCFC R22. `ZR190KCE` uses POE oil for HFC R407C/R134a. Mixing these oils causes chemical breakdown and system acid burnouts.
   - *Inquiry:* Must confirm whether client has both units in stock or if this represents two listings of the same machine.
4. **Legacy Item 18 (`JT300D`) vs. Core Record 6 (`JT300 VRV Inverter`):**
   - *Conflict:* `JT300D` is a constant-speed 10-HP commercial 380V scroll compressor. Core record 6 is listed as an inverter drive for Daikin VRV IV systems.
   - *Inquiry:* Client must confirm if they stock the constant-speed JT300D, the DC inverter VRV variant, or both.
5. **Legacy Item 6 (`ANB52FKRMT`) vs. Item 32 (`Highly 1 Ton`):**
   - *Conflict:* Both refer to Highly rotary compressors, but Item 6 has a verified workshop nameplate showing `ANB52FKRMT`.
   - *Inquiry:* Clarify if Item 32 is simply additional inventory of Item 6 or a distinct 1.0 TR model.
6. **Legacy Item 24 (`TNB306FPNMT`) vs. Item 27 (`TNB306FPGMT`):**
   - *Conflict:* Differ by a single character (`N` vs `G`), denoting electrical wiring harness or suction port orientation.
   - *Inquiry:* Confirm if client physically stocks both sub-variants.
7. **Generic Umbrella Listings (Items 1, 3, 8, 25, 34):**
   - *Conflict:* Listings like `"1ton Split Ac Compressor"` or `"Ductable Air Conditioner Compressor"` show workshop batch photos without manufacturer model numbers.
   - *Recommendation:* Do not display as specific product SKUs. Reclassify as batch inventory sourcing categories.

### 4.2 Questionnaire for Z Cool Enterprises Management
The following inquiries must be presented to Mr. Samee Ulla:
1. **Physical Inventory Verification:** Which of the 45 listed compressor models are currently physically present in the Dharavi workshop versus models sourced on demand from Mumbai trading networks?
2. **Standard Commercial Pricing Structure:** What is the baseline pricing methodology for refurbished scroll and rotary units (e.g. fixed price list, price-on-application via WhatsApp, or core-exchange discount for returning old compressor bodies)?
3. **Refurbishment Scope & Warranty Terms:** What specific reconditioning is performed (e.g. acid flush, valve plate replacement, motor rewinding, new POE oil charge, terminal pin replacement)? What warranty duration is provided (e.g. testing warranty only, 30-day testing warranty, or 3-month operational warranty)?
4. **Ancillary Parts Expansion:** Does Z Cool Enterprises supply fan motors, copper fittings, expansion valves, and inverter PCBs, or should the catalogue remain strictly focused on compressor assemblies?

---

## 5. COPYRIGHT, TRADEMARK & INTELLECTUAL PROPERTY RISK REVIEW

### 5.1 Media Provenance & Ownership Classification
The 43 photographic assets and external site graphics have been evaluated under the **Indian Copyright Act, 1957** and **Trade Marks Act, 1999**:

```
MEDIA PROVENANCE AUDIT
├── 1. CLIENT-OWNED ASSETS (Low Risk)
│   ├── Examples: compressor10-b2cafdd3.webp (Daikin JT160 Nameplate in workshop),
│   │             compressor6-3d4c0d5e.webp (Highly ANB52 on workbench),
│   │             compressor7-9e846a50.webp (Daikin unit on red carpet)
│   ├── Legal Status: Created by client in workshop; full copyright ownership resides with Z Cool Enterprises.
│   └── Action: Retain as primary authentic showcase imagery.
│
├── 2. NOMINATIVE OEM PRODUCT REFERENCE CUTOUTS (Medium / Managed Risk)
│   ├── Examples: compressor11 (Copeland ZR125), compressor16 (Danfoss SM185), compressor38 (Panasonic SBN453)
│   ├── Legal Status: Standard manufacturer catalog product representations.
│   ├── Risk: OEM copyright claim if portrayed as an authorized factory dealership.
│   └── Safe Harbor Compliance: Protected under Nominative Fair Use (Section 52 of Copyright Act, 1957 & Section 30 of Trade Marks Act, 1999)
│       provided:
│       a) Used solely for product identification and physical compatibility matching.
│       b) Accompanied by prominent non-affiliation disclaimers.
│       c) No alteration of OEM logo marks or deceptive claims of OEM authorized distributorship.
│
└── 3. EXCLUDED ASSETS & HIGH-RISK EXTERNAL MEDIA (Forbidden / Retired)
    ├── External Marketplace Badges (IndiaMART TrustSeal, TradeIndia Verified, JustDial Star Ratings)
    ├── Unverified Customer Avatars & Stock Testimonial Photographs
    ├── Unlicensed Technical Diagrams & Stolen OEM CAD Renderings
    └── Action: Strictly excluded from current and future production builds.
```

### 5.2 Mandatory Trademark & Non-Affiliation Disclaimer
To satisfy Indian trademark jurisprudence and prevent trade-dress dilution claims from Emerson/Copeland, Daikin, Danfoss, or Mitsubishi, the following notice must be permanently embedded in the website footer and on every Product Detail Page (PDP):
> *"Trademarks, brand names, and logos (including Copeland, Emerson, Daikin, Danfoss, LG, Mitsubishi, Highly, GMCC, Panasonic, Carrier, and Hitachi) displayed on this website are the registered property of their respective Original Equipment Manufacturers. Their display is strictly for nominative product identification, displacement referencing, and replacement compatibility purposes. Z Cool Enterprises is an independent B2B reconditioning and equipment sourcing trading firm and is not an authorized distributor, franchisee, or factory representative of these manufacturers."*

---

## 6. PERFORMANCE, SCALABILITY & CAPACITY LOAD-TEST PLAN

### 6.1 Architectural Bottlenecks & Code Inspection Findings
1. **Un-Indexed Regex Search in MongoDB (`controllers/productController.js:L110-131`):**
   ```javascript
   const searchRegex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
   const orClauses = [
     { name: searchRegex }, { code: searchRegex }, { modelNumber: searchRegex },
     { brand: searchRegex }, { category: searchRegex }, { type: searchRegex },
     { shortDescription: searchRegex }, { description: searchRegex },
     { 'specifications.key': searchRegex }, { 'specifications.value': searchRegex },
   ];
   ```
   *Analysis:* Searching executes an un-anchored case-insensitive regular expression across **10 fields per document** with **zero database indexes**. On 1,000 documents under 100 concurrent requests, MongoDB will lock the collection and CPU utilization will spike to 100%.
2. **Missing Database Indexes in `models/Product.js`:**
   * Analysis:* Only `slug` and `id` have indexes. `category`, `brand`, `status`, `availability`, and `price` have no indexes, causing full collection scans on every filter change.
3. **Disabled Static Caching on Products Route (`src/app/products/page.jsx:L11`):**
   ```javascript
   export const dynamic = 'force-dynamic';
   ```
   *Analysis:* Forces Next.js to bypass static generation and re-evaluate server components on every single page hit, adding unnecessary server compute overhead for static product lists.
4. **Missing HTML Image Dimensions on Product Cards (`src/components/ui/ProductCard.jsx:L67-76`):**
   ```html
   <img src={imageSrc} className="max-h-[145px] w-auto max-w-[85%] object-contain" loading="lazy" />
   ```
   *Analysis:* Native `<img>` tags lack explicit `width` and `height` attributes, causing browser layout reflows (CLS) and bypassing Next.js image optimization (AVIF conversion, automatic srcset generation, and blur placeholders).
5. **Global API Rate Limiter Bottleneck (`middleware/rateLimiter.js:L4-13`):**
   *Analysis:* Express rate limiter restricts all requests to 100 requests per 15 minutes per IP. In corporate HVAC offices where multiple engineers share an external NAT IP, browsing 10 products will exhaust the quota and block legitimate buyers.
6. **Local Disk Storage Leak in Multer (`middleware/upload.js:L7-18`):**
   *Analysis:* When Cloudinary credentials are absent or fail, files are stored on disk in `../uploads` with no scheduled cleanup or pruning job, exposing the server to disk exhaustion denial-of-service.

### 6.2 Staging Load-Test Plan (100 and 250 Concurrent Virtual Users)
> [!IMPORTANT]
> **Strict Non-Presumption Rule:** We do NOT claim the website supports 100 or 250 concurrent users until executed and validated in a staging environment.

#### Test Execution Parameters
* **Tooling:** k6 (load script in staging)
* **Target Environment:** Isolated staging cluster (Next.js frontend + Express backend + MongoDB instance mirroring production specs).
* **Simulated User Journey:**
  1. 30% Traffic: Homepage hit (`/`) + GSAP About Us toggle (`GET /`)
  2. 40% Traffic: Catalogue page (`/products`) with category and brand filtering (`GET /api/products?category=scroll-compressors`)
  3. 20% Traffic: Product Detail Page (`/products/[id]`) with image and spec view
  4. 10% Traffic: Quote Form Submission without photo (`POST /api/inquiries`)

#### Staging Load Scenarios
```
SCENARIO 1: 100 Concurrent Virtual Users (Moderate Commercial Peak)
- Ramp-up: 0 to 100 VUs over 2 minutes
- Steady-state: 100 VUs sustained for 10 minutes
- Ramp-down: 100 to 0 VUs over 1 minute
- Acceptance Target:
  * P95 Response Time < 450 ms (Cached Pages)
  * P95 Response Time < 800 ms (Database Queries)
  * Error Rate (HTTP 5xx / 429) < 0.5%
  * Backend Server CPU < 65%, Memory < 70%

SCENARIO 2: 250 Concurrent Virtual Users (High Heavy Surge)
- Ramp-up: 0 to 250 VUs over 3 minutes
- Steady-state: 250 VUs sustained for 10 minutes
- Ramp-down: 250 to 0 VUs over 2 minutes
- Acceptance Target:
  * P95 Response Time < 850 ms (Cached Pages)
  * P95 Response Time < 1500 ms (Database Queries)
  * Error Rate < 1.0%
  * Zero unhandled promise rejections or Node.js process crashes
```

---

## 7. LEGAL, REGULATORY, PRIVACY & ACCESSIBILITY CHECKLIST

### 7.1 Indian Legal & Regulatory Compliance Framework
An audit of the live application reveals **zero dedicated legal pages** (no `/privacy`, `/terms`, `/refund`, or `/cookies`). Under Indian cyber and commercial law, the following compliance obligations apply:

```
INDIAN APPLICABLE STATUTES & OBLIGATIONS
├── 1. DIGITAL PERSONAL DATA PROTECTION ACT, 2023 (DPDPA 2023)
│   ├── Status: Enacted August 2023; Central Government rules pending notification (implementation ongoing).
│   ├── Requirements for Z Cool Enterprises:
│   │   - Notice & Consent: Must provide clear, itemized notice before collecting buyer name, phone, email, and photos.
│   │   - Purpose Limitation: Data collected for quote generation must not be sold or shared with third-party telemarketers.
│   │   - Right to Withdraw & Erase: Buyers must have an easy channel (e.g. email) to request deletion of their records.
│   │   - Grievance Redressal: Must publish the name and email of a designated Grievance Officer.
│   └── Technical Action: Add consent checkbox on ContactForm and quote modal; deploy /privacy page.
│
├── 2. INFORMATION TECHNOLOGY ACT, 2000 & SPDI RULES, 2011
│   ├── Status: Enforced.
│   ├── Requirements: Mandatory publication of a Privacy Policy detailing security practices and data handling.
│   └── Mandatory Disclosure: Full business name, Mumbai registered address, and contact details.
│
├── 3. CONSUMER PROTECTION (E-COMMERCE) RULES, 2020
│   ├── Status: Enforced under Consumer Protection Act, 2019.
│   ├── Requirements:
│   │   - Full legal entity name: Z Cool Enterprises.
│   │   - Geographic address: Shop No 5, Dharavi Bus Depot, Dharavi, Mumbai 400017.
│   │   - Statutory GSTIN: 27AKAPU9371N1ZB.
│   │   - Clear cancellation, return, and refund policy matching commercial testing terms.
│   └── Technical Action: Deploy /terms and /refund pages; link in footer.
│
└── 4. COOKIE & TRACKING STATUS
    ├── Current Reality: The public website uses ZERO analytics cookies, ZERO tracking pixels, and ZERO third-party ad scripts.
    ├── Proportionality Assessment: A intrusive EU-style cookie consent banner is NOT legally required or warranted
    │   by the current code since no non-essential cookies exist.
    └── Recommended Action: Provide a transparent "Cookie & Storage Disclosure" within the Privacy Policy explaining
        that only necessary session storage is used.
```

### 7.2 B2B Refund, Cancellation & Return Terms Blueprint
In commercial B2B HVAC compressor trading, standard consumer e-commerce "7-day no-questions-asked" return policies are commercially non-viable because compressor windings can be destroyed in seconds by incorrect wiring, phase failure, or non-condensable contamination. The refund policy must be aligned with actual workshop testing:
* **Pre-Dispatch Verification:** All units undergo nitrogen pressure holding (25–28 bar) and electrical megger insulation testing prior to packaging.
* **Dead-on-Arrival (DOA) Window:** Claims accepted within **48 hours** of road transport delivery in Mumbai MMR.
* **Exclusions from Refund/Return:**
  - Compressors that have been brazed, soldered, or installed into refrigeration piping.
  - Burned motor terminals resulting from single-phasing, phase reversal, or incorrect contactor sizing.
  - Compressors filled with unapproved or contaminated refrigerant/oil mixtures.
* **Return Freight:** Return transport costs to the Dharavi depot are borne by the purchaser unless an incorrect model was dispatched by Z Cool Enterprises.

### 7.3 Web Accessibility (WCAG 2.2 Level AA) Audit
* **Text Contrast:** Ensure all body text exceeds **4.5:1** contrast ratio against backgrounds. Muted text like `text-slate-400` on white (contrast ~2.8:1) must be darkened to `text-slate-600` (contrast ~5.7:1).
* **Keyboard Navigation:** All interactive modal triggers, drawer toggles, and filter buttons must support `Tab`, `Enter`, `Space`, and `Escape` key controls.
* **Focus Visibility:** Add visible focus rings (`focus-visible:ring-2 focus-visible:ring-[#0E4B75]`) across all inputs and buttons.
* **Form Accessibility:** All form fields in `ContactForm.jsx` and `QuoteModal.jsx` must feature explicit `<label htmlFor="...">` associations and `aria-describedby` links to error messages.
* **Screen Reader Semantics:** Use semantic HTML5 `<article>`, `<section>`, and `<header>` tags with `aria-expanded` attributes on interactive accordion/drawer components.
* **Touch Target Size:** Ensure all interactive touch targets meet or exceed **44 × 44 CSS pixels** on mobile viewports.

---

## 8. RECOMMENDED IMPLEMENTATION PHASES & ACCEPTANCE CRITERIA

```
RECOMMENDED IMPLEMENTATION ROADMAP
├── PHASE 1: DATA CLEANUP & LEGAL PAGES (Foundation)
│   ├── Create /privacy, /terms, and /refund legal pages.
│   ├── Embed affirmative consent checkboxes on ContactForm and QuoteModal.
│   ├── Update Footer with legal links and nominative trademark disclaimers.
│   └── Acceptance Gate: 100% legal coverage, 0 missing mandatory disclosures.
│
├── PHASE 2: DATABASE SEEDING & BACKEND INDEXING (Capacity)
│   ├── Add compound text search indexes and category/brand indexes in models/Product.js.
│   ├── Run automated sync script to seed MongoDB with verified catalogue data.
│   ├── Implement server-side pagination (12 / 24 products per page) on GET /api/products.
│   └── Acceptance Gate: Query execution time < 50ms on 1,000 product records.
│
├── PHASE 3: FRONTEND CATALOGUE & PERFORMANCE UPGRADE (UX & CWV)
│   ├── Refactor ProductCatalogView to support server-driven pagination and URL sync (?page=1).
│   ├── Migrate ProductCard from standard <img> to next/image with explicit aspect ratios.
│   ├── Implement mobile category sliding drawer / touch-friendly filter sheet.
│   └── Acceptance Gate: Mobile LCP < 2.5s, CLS < 0.05, 0 layout shifts.
│
└── PHASE 4: STAGING LOAD TESTING & DEPLOYMENT GATES (Release)
    ├── Execute k6 load tests for 100 and 250 concurrent virtual users on staging.
    ├── Configure production environment variables (NEXT_PUBLIC_API_URL, CLIENT_URL, Cloudinary).
    ├── Client sign-off on model reconciliation and terms.
    └── Acceptance Gate: Staging P95 < 800ms under 250 VUs with < 1% error rate.
```

---

## 9. SEGREGATED FINDINGS: CONFIRMED FACTS, EXPLICIT ASSUMPTIONS & UNRESOLVED ITEMS

### 9.1 Confirmed Facts (Empirically Verified from Active Code & Files)
1. **Frontend Active Directory:** `c:\Users\AFFAN KHAN\OneDrive\Desktop\zcool\Z-Cool-enterprises` is the active Next.js frontend repository.
2. **Backend Active Directory:** `c:\Projects\Z-Cool-enterprises-backend` is the active Node.js/Express backend repository.
3. **Product Data Source:** The live website currently serves product data **exclusively from `src/data/products.js`**. The backend MongoDB `Product` collection contains **0 records**.
4. **Catalogue Counts:** `src/data/products.js` defines exactly **45 products** across 4 categories (Scroll: 20, Rotary: 17, Reciprocating: 4, VRF: 4).
5. **Image Inventory:** Exactly **40 legacy WebP images** reside in `public/products/legacy/` and match the 40 items extracted from the legacy website. Exactly **3 prototype PNG cutouts** reside in `public/`.
6. **Image Gaps:** Two products (`danfoss-maneurop-mtz64` and `copeland-discus-semihermetic`) currently have empty image arrays (`images: []`) and display technical blueprint boxes.
7. **Zero Trackers:** The public website contains **zero analytics scripts, zero tracking pixels, and zero third-party advertising cookies**.
8. **Legal Pages Absent:** The website currently has **no Privacy Policy, Terms of Service, Cookie Policy, or Refund Policy pages**.
9. **Build Verification:** The Next.js production build (`npm run build`) compiles cleanly with exit code `0` across 15 routes.

### 9.2 Explicit Assumptions (Not Assumed as Fact Until Approved)
1. **Physical Inventory Assumption:** We do *not* assume that all 45 listed compressor models are physically held in stock in the Mumbai depot; many are assumed to be sourced on demand from trading partner networks.
2. **Pricing Assumption:** We do *not* assume prices can be standardized on the public website without client authorization, as refurbished compressor pricing fluctuates based on core availability, scrap copper rates, and repair scope.
3. **OEM Image Ownership Assumption:** We do *not* assume the client owns copyright in studio product cutouts of Copeland, Danfoss, or Panasonic units; these are assumed to be third-party catalog images managed under nominative fair use.
4. **Traffic Capacity Assumption:** We do *not* assume the current server infrastructure can support 100 or 250 concurrent users without un-indexed query optimization and load-testing validation.

### 9.3 Unresolved Items Requiring Client Decision
1. **Resolution of 7 Model Discrepancies:** Clarification on ZR190 vs ZR190KCE, JT300D vs JT300 VRV Inverter, and sub-variant model suffixes.
2. **Disposal of 5 Generic Umbrella Cards:** Decision whether to retire generic entries (1-Ton split batch, ductable batch) or reclassify them into application sourcing pages.
3. **Mandatory B2B Return & Refund Terms:** Formal sign-off on the proposed 48-hour testing warranty and DOA policy.
4. **Grievance Officer Designation:** Formal appointment of the Data Protection & Grievance Officer name and contact email required under Indian DPDPA 2023.
5. **Cloudinary vs. Local Disk Storage:** Provisioning of production Cloudinary credentials to eliminate local disk storage risks for customer nameplate uploads.

---
*Report compiled in strict compliance with non-presumption rules and read-only directives. Awaiting client review and instruction before initiating Phase 1 implementation.*
