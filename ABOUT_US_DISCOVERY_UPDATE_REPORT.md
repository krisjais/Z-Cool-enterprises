# Z COOL ENTERPRISES — INTERACTIVE ABOUT US & COMPANY PROFILE UPDATE REPORT

**Date:** October 24, 2026  
**Environment:** Next.js 16.2.10 (Turbopack) / React 19 / GSAP 3.15.0 / TailwindCSS  
**Project Workspace:** `c:\Users\AFFAN KHAN\OneDrive\Desktop\zcool\Z-Cool-enterprises`  
**Status:** **COMPLETE & VERIFIED (Build Exit Code: 0)**

---

## 1. Executive Summary

In accordance with the project requirements and inspired by the client's original website records, the About Us experience on the **Z Cool Enterprises** website has been transformed into a **two-stage discovery experience**.

Rather than overwhelming visitors with a large static data table immediately, visitors are presented with a clean, high-contrast **Stage 1: Premium Preview Card** that highlights core business facts and includes an accessible, animated **“Discover More”** trigger. Clicking it smoothly expands **Stage 2: Detailed Company Profile** with full GSAP-powered height expansion, staggered card reveals, a historical narrative, a 9-item basic information grid, a statutory profile with an interactive GST copy button, and payment/logistics terms.

---

## 2. Two-Stage Discovery Experience Architecture

### Stage 1: Premium About Us Preview Card
- **Small Label:** `ABOUT Z.COOL ENTERPRISES` (accented with pulse indicator).
- **Section Heading:** `Get to Know Our Business`
- **Short Introduction:**  
  > *“Z.Cool Enterprises is a Mumbai-based HVAC compressor trading and sourcing business serving commercial and industrial cooling requirements.”*
- **Three Compact Information Highlights:**
  1. `Trader - Retailer` (Core Operation &bull; `Store` icon)
  2. `Established business profile` (Commercial Track &bull; `Building` icon)
  3. `Mumbai, Maharashtra` (Procurement Hub &bull; `MapPin` icon)
- **Interactive Action:**
  - High-visibility industrial button: `Discover More` (with `ChevronDown` icon).
  - Switches smoothly to `Show Less` (with `ChevronUp` icon) when expanded.
  - Proper accessibility semantics: `id="about-discover-more-btn"`, `aria-expanded={isExpanded}`, `aria-controls="about-detailed-profile"`.

### Stage 2: Animated Expansion & Detailed Company Profile
- **Animation Implementation:** Uses the project's native `gsap` library (`src/lib/gsap.js`):
  - Smooth height expansion from 0 to `auto` with `power2.out` easing.
  - Smooth collapse with `power2.inOut` easing.
  - Full support for `prefers-reduced-motion` (instant state switch without motion if requested by user OS).
  - Smooth scroll recovery: If the user collapses the section after scrolling far down, the window gently scrolls back to keep the preview card in viewport focus.
  - Non-destructive rendering: Cards maintain full opacity and contrast without flash of hidden content (FOIC).

#### Detailed Profile Content Groups
1. **Historical Narrative Block (About Our Business):**  
   > *“Established in 2020, Z.Cool Enterprises has built its business around HVAC compressor trading, wholesale supply, and related services. The company deals in AC compressors, air-conditioning compressors, and Voltas AC AMC services. It focuses on understanding customer requirements and supplying suitable products and services.”*  
   - Context tags: `Year of Establishment: 2020`, `GST Registered: 04-07-2023`, `Depot: Dharavi, Mumbai`.

2. **Optional Second Discovery Level (Category Filter Tabs):**  
   Allows rapid filtering across:  
   `All Details` | `Basic Info (9)` | `Statutory Profile` | `Payment & Logistics`.

3. **Basic Information (9 Verified Cards):**  
   - Nature of Business: `Trader - Retailer`
   - Additional Business: `Retail Business, Supplier of Services, Wholesale Business`
   - Company Contact / CEO: `Samee Ulla`
   - Total Number of Employees: `Upto 10 People`
   - GST Registration Date: `04-07-2023`
   - Legal Status of Firm: `Proprietorship`
   - Annual Turnover: `0 - 40 L`
   - GST Partner Name: `Samee Ulla`
   - Registered Address: `Shop No 5, Plot 501, A1, Rajeev Darshan, Sion Bandra Link Road, Dharavi, Dharavi Bus Depot, Mumbai - 400017, Maharashtra, India` (Includes clickable `Get Directions on Google Maps` link).

4. **Statutory Profile (Visually Distinct):**  
   - **GST Number:** `27AKAPU9371N1ZB` displayed in high-contrast monospace format.
   - **Copy GST Button:** Interactive button with instant visual confirmation (`Copied!` toast + `Check` icon).
   - Jurisdiction: Maharashtra (State Code 27).
   - **Banker:** Field omitted as requested (*"Do not display this field unless the client confirms the correct bank information. The source screenshot contains repeated and inconsistent bank names"*).

5. **Packaging, Payment & Shipment Logistics:**  
   - **Payment Modes:** Clean outline chips for `Cash`, `Cheque`, `Online`, and `Bank Transfer`.
   - **Shipment Mode:** Distinct chip for `By Road` with note: *"Commercial surface road transport across Mumbai MMR & interstate dispatch."*

6. **Direct Procurement Desk Footer:**  
   - Contact Person: `Samee Ulla (Owner)`.
   - Primary Call: `+91 99209 06508` (`tel:+919920906508`).
   - WhatsApp RFQ: `+91 9920906508`.
   - Official Email: `zcoolenterprises392@gmail.com`.

---

## 3. Files Created & Modified

| File | Change Description |
| :--- | :--- |
| [`src/constants/company.js`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/constants/company.js) | Added `profile` object containing official narratives, 2020 establishment year, 9 statutory fields, payment modes, and shipment data. |
| [`src/components/about/InteractiveCompanyProfile.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/about/InteractiveCompanyProfile.jsx) | **NEW:** Reusable component implementing the Stage 1 preview card, Stage 2 GSAP expansion, copy-to-clipboard, filter pills, and all 9 basic cards + statutory profile. |
| [`src/components/home/AboutSection.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/home/AboutSection.jsx) | Replaced static 6-card grid on Homepage with `<InteractiveCompanyProfile defaultExpanded={false} />`. |
| [`src/app/about/page.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/about/page.jsx) | Updated the dedicated `/about` page statutory profile section to mount `<InteractiveCompanyProfile defaultExpanded={false} />`. |

---

## 4. Verification & Build Results

### 4.1. Production Build Output (`npm run build`)
```text
▲ Next.js 16.2.10 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 4.7s
  Running TypeScript ...
  Finished TypeScript in 87ms ...
  Collecting page data using 15 workers ...
  Generating static pages using 15 workers (15/15) in 362ms ...
✓ Generating static pages using 15 workers (15/15) in 362ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /admin
├ ○ /admin/dashboard
├ ○ /admin/login
├ ƒ /applications
├ ○ /blog
├ ○ /brands
├ ○ /case-studies
├ ○ /contact
├ ƒ /products
├ ƒ /products/[id]
├ ƒ /products/category/[slug]
├ ƒ /refurbishment
├ ○ /robots.txt
├ ƒ /services
└ ○ /sitemap.xml

Result: PASSED (Exit Code: 0)
```

### 4.2. ESLint Checks
- `npx eslint src/components/about/InteractiveCompanyProfile.jsx src/components/home/AboutSection.jsx`:
  **0 errors, 0 warnings**

---

## 5. Responsive Testing Across Viewports

The component was rendered and tested across all required device widths using the Edge Headless rendering engine:

| Viewport Width | Screen Category | Tested State | Result / Observations |
| :--- | :--- | :--- | :--- |
| **1440px** | Large Desktop | Collapsed & Expanded | Full 3-column basic info grid; 12-column layout for statutory profile; zero overflow. |
| **768px** | Tablet | Expanded | 2-column basic info grid; full address card spans both columns; clean chip wrapping. |
| **375px** | Standard Mobile | Collapsed & Expanded | 1-column stack; "Discover More" / "Show Less" button full width; GST card & copy button fit within 343px content width. |
| **320px** | Ultra-Compact Mobile | Collapsed & Expanded | Word-break applied on long strings; address wraps with proper line-height; zero horizontal scrolling. |

---

## 6. Data Conflict Analysis & Client Flagging

As required by the specification:
1. **Establishment Date vs. GST Registration Date:**
   - The historical narrative extracted from the client's original website states: *"Established in 2020..."*
   - Official GST records for firm `27AKAPU9371N1ZB` show registration date: `04-07-2023`.
   - **Resolution Implemented:** Preserved both accurately without conflating them. The historical narrative explicitly cites 2020 as the founding year of commercial operations, while the statutory card explicitly cites `04-07-2023` as the GST registration date. Both are displayed clearly in the context tags.
2. **Banker Information:**
   - In the client's source screenshots, the Banker field contains duplicated and contradictory bank names.
   - **Resolution Implemented:** Per instructions, the Banker field has been intentionally **omitted** from public display until verified banking credentials are confirmed by the client.
3. **CEO / Owner Designation:**
   - Source screenshot displayed *"Samee Ulla (CEO)"*.
   - In accordance with firm legal status as a `Proprietorship`, the display uses `Samee Ulla` (with role as `Owner` where needed), avoiding improper corporate nomenclature.

---

## 7. Screenshot Deliverables

All high-resolution verification screenshots are saved in [`screenshots/`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/):

1. **Homepage Preview Card (Collapsed - 1440px):**  
   [`screenshots/about_discovery_collapsed_desktop_1440.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/about_discovery_collapsed_desktop_1440.png)
2. **Homepage Detailed Profile (Expanded - 1440px):**  
   [`screenshots/about_discovery_expanded_desktop_1440.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/about_discovery_expanded_desktop_1440.png)
3. **Homepage Preview Card (Collapsed - 375px):**  
   [`screenshots/about_discovery_collapsed_mobile_375.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/about_discovery_collapsed_mobile_375.png)
4. **Homepage Detailed Profile (Expanded - 375px):**  
   [`screenshots/about_discovery_expanded_mobile_375.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/about_discovery_expanded_mobile_375.png)
5. **Homepage Detailed Profile (Expanded - 768px Tablet):**  
   [`screenshots/about_discovery_expanded_tablet_768.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/about_discovery_expanded_tablet_768.png)
6. **Dedicated About Page (Expanded - 1440px):**  
   [`screenshots/about_page_discovery_expanded_1440.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/about_page_discovery_expanded_1440.png)
