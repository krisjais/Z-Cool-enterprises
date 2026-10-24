# IMAGE RIGHTS & ASSET PROVENANCE REGISTER
**Z.Cool Enterprises — Industrial HVAC/R Sourcing**  
**Document Ref:** ZCE-LEGAL-REG-001  
**Phase:** Phase 1 Legal & Privacy Baseline  
**Date:** October 2026  
**Auditor:** Automated Engineering & Compliance Review  

---

## 1. Executive Summary & Legal Principles

Z.Cool Enterprises operates as an independent HVAC/R compressor trader, stockist, and refurbishment/sourcing desk in Mumbai, India. The website acts primarily as a technical catalog and Request-for-Quotation (RFQ) platform.

### Key Legal Precedents & Principles
1. **Trade Mark Fair Use (Indian Trade Marks Act, 1999 — Section 30(2)(d)):**
   - The use of third-party OEM brand names (e.g., Emerson / Copeland, Danfoss / Maneurop, Bitzer, Carrier / Carlyle, Frascold, Daikin, Tecumseh, Bristol) is strictly **nominative fair use** to inform buyers regarding compatibility, brand, and specifications.
   - It is legally essential to state that Z.Cool Enterprises is an independent trader and is not an authorized distributor, franchisee, or commercial agent of these OEMs.
2. **Copyright Independence (Indian Copyright Act, 1957 — Section 14 & 51):**
   - **Crucial Warning:** A trademark disclaimer **does NOT grant copyright permission** to copy, reproduce, or publish proprietary product photography, studio renders, or technical cutouts created by OEM manufacturers.
   - Using OEM promotional photographs without express written permission constitutes potential copyright infringement, regardless of whether a trademark disclaimer is displayed.
3. **Verification & Provenance Principle:**
   - Every media asset must be classified by its true source: **Client-Owned Photography**, **Legacy Scraped/Supplier Imagery**, **OEM Studio Cutouts**, or **Original UI/SVG Vector Graphics**.
   - Where authentic workshop photos are absent, the application displays an honest **Technical Silhouette Blueprint** box rather than unverified third-party imagery.

---

## 2. Master Image & Media Register

| Asset Path / Category | Description / Subject | Provenance / Sourced From | Rights Holder | Risk Level | Current Display Status | Mitigation / Action Required |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/logo.png`, `/logo2.png`, `/logo-icon.png`, `/logo-badge.png` | Official Z.Cool Enterprises Brand Identity | Commissioned / Created for Z.Cool Enterprises | Client (Samee Ulla / Z.Cool Enterprises) | **LOW** | Active on Header, Footer, Hero, Modals | Verify graphic designer copyright assignment or business ownership documentation. |
| `/ac_compressor.png`, `/ac_compressor_2.png`, `/ac_compressor_3.png` | Semi-hermetic and scroll compressor showcase renders | Existing frontend starter assets / Rendered stock | Unverified stock / Open library render | **MEDIUM** | Hero section and fallback placeholder | Replace with authenticated photograph of workshop inventory at Dharavi facility. |
| `/compressor_showcase.mp4` | 3D/video demonstration of compressor unit | Frontend asset repository | Unverified digital asset | **MEDIUM** | Hero video background / interactive preview | Confirm whether video was custom rendered or sourced from commercial stock license. |
| `/products/legacy/compressor1-73e93547.webp` to `compressor40-c178cb21.webp` *(Workshop pallet shots)* | Compressors on wooden pallets, workshop shelves, and refurbishment benches | Extracted from legacy web assets / previous 13-page catalogue PDF | Z.Cool Enterprises (Physical inventory at workshop) | **LOW** *(Subject to Owner Sign-off)* | Active in product catalogue and related items | Obtain written confirmation from Samee Ulla that photos were captured on premises. |
| `/products/legacy/*` *(Manufacturer clean white cutouts)* | Isolated white-background studio photos of Copeland Scroll, Danfoss Maneurop, Bitzer Semi-Hermetic | Extracted from legacy website (likely downloaded from OEM distributor catalogs) | Third-Party OEMs (Copeland, Danfoss, Bitzer, etc.) | **HIGH** | Product cards with disclaimer: *"Representative model — confirm by nameplate"* | **Transition Plan:** Actively replace with genuine workshop photos of real units. In the interim, ensure caption explicitly disclaims endorsement. |
| `Technical Silhouette Blueprint` (CSS / SVG vector) | Vector blueprint box with CPU/compressor icon | Antigravity frontend codebase (native SVG/Tailwind) | Z.Cool Enterprises / Antigravity MIT | **ZERO** | Rendered whenever `hasRealImage` is false | **Primary Recommended Fallback:** Use across all catalog listings pending physical workshop photography. |
| User-Uploaded Nameplate Photos | Photos of compressor data plates uploaded by clients via quote form | Uploaded by prospective customers | Customer (Uploaded under enquiry terms) | **LOW** *(Privacy Sensitive)* | Backend upload storage (`/uploads` or Cloudinary) | Restricted access; strictly used for model matching; deleted/purged according to data retention policy. |

---

## 3. Detailed Risk Assessment by Asset Type

### A. Third-Party OEM Catalogue Cutouts
- **Risk:** High copyright exposure under Indian Copyright Act, 1957. OEMs occasionally issue cease-and-desist notices to independent traders who scrape studio catalog images.
- **Current Safeguard in Code:**
  - `ProductCard.jsx` and `ProductDetailView.jsx` display a clear, mandatory sub-bar disclaimer:
    > *"Representative model — confirm by nameplate. Z.Cool Enterprises is an independent trader and stockist. All manufacturer brand names and model codes are the property of their respective owners and used solely for identification."*
  - The alt text is strictly descriptive (e.g., `alt="Danfoss MTZ50-4VI HVAC Compressor"`), avoiding misleading claims such as *"Official Danfoss Image"*.
- **Required Action:** Business owner must systematically replace studio cutouts with in-house photographs of stock units received at the Dharavi workshop.

### B. Client Workshop Inventory Photos
- **Risk:** Low, provided the photographs were taken by Samee Ulla, Z.Cool Enterprises staff, or hired contractors.
- **Current Status:** Several pallet shots in `public/products/legacy/` show actual workshop environments.
- **Required Action:** Owner must formally confirm that these photographs were taken by Z.Cool Enterprises personnel on location.

### C. Technical Silhouette System
- **Risk:** Zero risk.
- **Current Implementation:** When a catalog item has no verified physical photograph, the UI renders:
  ```jsx
  <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 bg-stone-50/90 rounded-lg border border-dashed border-stone-300">
    <Cpu size={20} className="text-[#0E4B75]" />
    <span className="text-xs font-bold text-slate-800">Technical Silhouette</span>
    <p className="text-[11px] text-slate-500 max-w-[210px] mt-0.5 leading-tight font-medium">
      Physical photograph awaiting workshop verification.
    </p>
  </div>
  ```
- This ensures honest presentation without misleading buyers into expecting brand-new boxed retail packaging when buying surplus, refurbished, or open-box compressors.

---

## 4. Operational Recommendations & Next Steps

1. **Conduct Physical Workshop Photo Shoot:**
   - Organize a 1-day photo session at Shop No 5, Dharavi Bus Depot, Mumbai.
   - Photograph top 20 high-demand models (Copeland VR/ZR series, Danfoss Maneurop, Bitzer 4-cylinder, Carrier Carlyle 06D) from 3 angles:
     1. Front 45-degree angle.
     2. Suction/discharge service valve connections.
     3. Crisp, legible close-up of the metal specification nameplate.
2. **Standardize Nameplate Capture Protocol:**
   - Nameplates contain critical data: Refrigerant type (R22, R134a, R404A, R410A), Displacement (CFM / m³/h), Electrical voltage/phase (380-420V 3Ph 50Hz vs 220V 1Ph), and Oil charge.
   - Displaying real nameplate photos eliminates ambiguity and prevents commercial disputes regarding model revisions.
3. **Deprecate Unverified Stock Renders:**
   - Phase out generic 3D compressor graphics in favor of genuine Mumbai workshop photos.
4. **Maintain Customer Upload Privacy:**
   - Inquiries containing uploaded nameplate images must remain confidential and must never be exposed to public search crawlers (`X-Robots-Tag: noindex` on upload directories).

---
*Signed as part of Implementation Phase 1: Legal & Privacy Baseline — Z.Cool Enterprises.*
