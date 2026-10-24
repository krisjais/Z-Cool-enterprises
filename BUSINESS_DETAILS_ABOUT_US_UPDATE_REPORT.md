# Z COOL ENTERPRISES — BUSINESS DETAILS & ABOUT US UPDATE REPORT

**Date:** October 24, 2026  
**Environment:** Next.js 16.2.10 (Turbopack) / React 19 / TailwindCSS  
**Project Workspace:** `c:\Users\AFFAN KHAN\OneDrive\Desktop\zcool\Z-Cool-enterprises`  
**Status:** **COMPLETE & VERIFIED (Build Exit Code: 0)**

---

## 1. Executive Summary

All requested business details, contact information, hero copy, and statutory company information updates for **Z Cool Enterprises** have been implemented and verified. The website maintains its premium industrial blue-and-white HVAC aesthetic, responsive design, and robust link structure.

No demo phone numbers (`9920691707`), demo emails (`zcooltech4@gmail.com`), or old Kurla addresses remain anywhere in the active source code.

---

## 2. Confirmation of Contact & Business Details Used

| Parameter | Value Used Across Website | Link Protocol / Implementation |
| :--- | :--- | :--- |
| **Business Name** | `Z.Cool Enterprises` | Used in Header, Footer, Hero, About, SEO JSON-LD |
| **Owner / Contact Person** | `Samee Ulla` (Role: `Owner`) | "CEO" title removed everywhere per requirements |
| **Primary Phone** | `9920906508` (`+91 99209 06508`) | `tel:+919920906508` |
| **Secondary Phone** | `9920906607` (`+91 99209 06607`) | `tel:+919920906607` |
| **WhatsApp Direct** | `+91 9920906508` | `https://wa.me/919920906508?text=...` |
| **Official Email** | `zcoolenterprises392@gmail.com` | `mailto:zcoolenterprises392@gmail.com` |
| **Official Address** | Shop No 5, Plot 501, A1, Rajeev Darshan, Sion Bandra Link Road, Dharavi, Dharavi Bus Depot, Mumbai - 400017, Maharashtra, India | Formatted with proper mobile text wrapping |
| **Google Maps Destination** | `https://maps.google.com/?q=19.05128000,72.86084000` | Clickable `target="_blank" rel="noopener noreferrer"` |
| **Coordinates** | Latitude: `19.05128000`, Longitude: `72.86084000` | Injected in `LocalBusiness` JSON-LD schema |

---

## 3. Statutory Company Information (About Us Cards)

The 6 company information cards were created with exact values and clean outline icons from `lucide-react`:

1. **Card 1: Nature of Business**  
   - Value: `Trader - Retailer`  
   - Icon: `Briefcase`
2. **Card 2: Total Number of Employees**  
   - Value: `Upto 10 People`  
   - Icon: `Users`
3. **Card 3: GST Registration Date**  
   - Value: `04-07-2023` (Exact format preserved)  
   - Icon: `Calendar`
4. **Card 4: Legal Status of Firm**  
   - Value: `Proprietorship`  
   - Icon: `Scale`
5. **Card 5: Annual Turnover**  
   - Value: `0 - 40 L` (Exact unit preserved)  
   - Icon: `TrendingUp`
6. **Card 6: GST No.**  
   - Value: `27AKAPU9371N1ZB` (Font-mono, break-safe format preserved)  
   - Icon: `FileCheck2`

---

## 4. Exact Sections Updated

### 4.1. Homepage Hero Section (`src/components/home/HeroSection.jsx`)
- **Heading (Preserved):** *"Refurbished & Replacement AC Compressors for Industrial HVAC."*
- **Description (Updated):**  
  > *"Explore all types of refurbished AC compressors for commercial and industrial cooling applications. We also help customers find suitable replacement compressors based on their requirements."*
- **Buttons (Preserved & Enhanced):**
  - "Explore Refurbished Compressors" -> `/products`
  - "Submit Nameplate for Match" -> Opens interactive Quote Modal (dynamically compacts to "Submit Nameplate" on `<360px` screens to prevent horizontal overflow).

### 4.2. Modern "About Z Cool Enterprises" Section (`src/components/home/AboutSection.jsx`)
- Mounted on the Homepage immediately preceding the Quote/Contact section (`src/app/page.jsx`).
- Contains official intro copy:
  > *"Z.Cool Enterprises is an HVAC compressor sourcing and trading business based in Mumbai, Maharashtra. We supply compressor options for commercial and industrial cooling requirements, including refurbished and replacement compressors."*
- Displays the 6 statutory cards in a responsive grid:
  - 3 columns on Desktop (`lg:grid-cols-3`)
  - 2 columns on Tablet (`sm:grid-cols-2`)
  - 1 column on Mobile (`grid-cols-1`)
- Includes quick-contact summary card showing Owner `Samee Ulla`, location `Dharavi, Mumbai`, and direct phone links.

### 4.3. Header & Mobile Navigation (`src/components/layout/Header.jsx`)
- Desktop Top Bar: Displays primary phone `+91 99209 06508` (`tel:+919920906508`) and WhatsApp button.
- Mobile Navigation Drawer: Features quick-call buttons for both Primary (`9920906508`) and Secondary (`9920906607`) phone lines, WhatsApp link, and official Dharavi Mumbai location.
- Brand logo badge updated.

### 4.4. Footer (`src/components/layout/Footer.jsx`)
- Official Business Name: `Z.Cool Enterprises`
- Contact Person: `Samee Ulla` (Role: `Owner`)
- Primary Phone: `+91 99209 06508`
- Secondary Phone: `+91 99209 06607`
- Official Email: `zcoolenterprises392@gmail.com`
- Official Address: Complete Dharavi address with clickable "Get Directions" link opening Google Maps.

### 4.5. Contact Page (`src/app/contact/page.jsx`)
- Key Contact Card: `Samee Ulla` (Owner).
- Direct Contact Cards:
  - Calling Desk: Primary `+91 99209 06508` & Secondary `+91 99209 06607`.
  - WhatsApp Desk: Instant RFQ & nameplate upload via `+91 9920906508`.
  - Email Desk: `zcoolenterprises392@gmail.com`.
  - Office & Depot: Complete Dharavi address with "Get Directions" button to Google Maps destination.

### 4.6. About Page (`src/app/about/page.jsx` & `AboutActions.jsx`)
- "AT A GLANCE" company overview table updated with `Samee Ulla`, `27AKAPU9371N1ZB`, `0 - 40 L`, and Dharavi location.
- Statutory Details grid displaying all 6 cards.
- Quick direct contact sidebar updated with official numbers and email.

### 4.7. SEO & Business Metadata (`src/utils/seo.js` & `src/app/layout.jsx`)
- Updated `siteConfig` and `getOrganizationSchema()` with:
  - `name`: "Z.Cool Enterprises"
  - `email`: "zcoolenterprises392@gmail.com"
  - `telephone`: "+91 99209 06508"
  - `alternateTelephone`: "+91 99209 06607"
  - `address`: `Shop No 5, Plot 501, A1, Rajeev Darshan, Sion Bandra Link Road, Dharavi, Dharavi Bus Depot`, `Mumbai`, `Maharashtra`, `400017`, `IN`.
  - `geo`: Latitude `19.05128000`, Longitude `72.86084000`.
- Injected `LocalBusiness` / `Organization` JSON-LD structured data into root layout `<head>`.

---

## 5. Complete List of Files Changed

### Centralized Configuration (Single Source of Truth)
- [`src/constants/company.js`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/constants/company.js) — *NEW: Centralized `COMPANY_DETAILS` configuration.*
- [`src/constants/index.js`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/constants/index.js) — *Re-exports `COMPANY_DETAILS`.*

### Core Layouts & Pages
- [`src/app/page.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/page.jsx) — *Integrated AboutSection.*
- [`src/app/layout.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/layout.jsx) — *Structured JSON-LD schema injection.*
- [`src/app/contact/page.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/contact/page.jsx) — *Contact page cards, owner name, address, phones, email.*
- [`src/app/about/page.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/about/page.jsx) — *About page statutory overview and company details.*
- [`src/components/layout/Header.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/layout/Header.jsx) — *Header and mobile drawer contact links.*
- [`src/components/layout/Footer.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/layout/Footer.jsx) — *Footer contact cards, address, map link, owner name.*

### Components
- [`src/components/home/HeroSection.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/home/HeroSection.jsx) — *Hero description update and 320px text wrap.*
- [`src/components/home/AboutSection.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/home/AboutSection.jsx) — *NEW: Modern About Z Cool Enterprises component.*
- [`src/components/home/HomeQuoteSection.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/home/HomeQuoteSection.jsx) — *Sidebar contact info update.*
- [`src/components/about/AboutActions.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/about/AboutActions.jsx) — *Converted to Next.js `<Link>`, updated contact info.*
- [`src/components/contact/ContactForm.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/contact/ContactForm.jsx) — *Form sidebar contact info.*
- [`src/components/contact/ContactHeroCTA.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/contact/ContactHeroCTA.jsx) — *Hero CTA phone link.*
- [`src/components/ui/ScrollReveal.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/ui/ScrollReveal.jsx) — *Fixed initial visibility and animation frame logic.*
- [`src/utils/seo.js`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/utils/seo.js) — *SEO and schema metadata alignment.*

### Eradication of Legacy Contact Details in Secondary Components
- [`src/components/pdp/QuoteDock.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/pdp/QuoteDock.jsx)
- [`src/components/pdp/Hero.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/pdp/Hero.jsx)
- [`src/components/products/ProductDetailView.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/products/ProductDetailView.jsx)
- [`src/components/refurbishment/RefurbishmentProcessView.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/refurbishment/RefurbishmentProcessView.jsx)
- [`src/components/refurbishment/RefurbishmentActions.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/refurbishment/RefurbishmentActions.jsx)
- [`src/components/services/ServicesInteractiveView.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/services/ServicesInteractiveView.jsx)
- [`src/components/services/ServicesActions.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/services/ServicesActions.jsx)
- [`src/components/case-studies/CaseStudiesActions.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/case-studies/CaseStudiesActions.jsx)
- [`src/components/home/FinalIndustrialCTA.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/home/FinalIndustrialCTA.jsx)
- [`src/components/home/ModelIdentificationCTA.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/home/ModelIdentificationCTA.jsx)
- [`src/components/home/NameplateMatchingSection.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/home/NameplateMatchingSection.jsx)
- [`src/components/home/HeroIndustrial.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/home/HeroIndustrial.jsx)
- [`src/components/catalog/ProductCatalogView.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/catalog/ProductCatalogView.jsx)
- [`src/components/blog/BlogActions.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/components/blog/BlogActions.jsx)
- [`src/app/products/[id]/not-found.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/products/[id]/not-found.jsx)
- [`src/app/not-found.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/not-found.jsx)
- [`src/app/brands/page.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/brands/page.jsx)
- [`src/app/blog/page.jsx`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/app/blog/page.jsx)

---

## 6. Build & Quality Assurance Results

### 6.1. Production Build Output (`npm run build`)
```text
▲ Next.js 16.2.10 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 5.0s
  Running TypeScript ...
  Finished TypeScript in 92ms ...
  Collecting page data using 15 workers ...
  Generating static pages using 15 workers (15/15) in 393ms ...
✓ Generating static pages using 15 workers (15/15) in 393ms
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

○ (Static)   prerendered as static content
ƒ (Dynamic)  server-rendered on demand

Result: PASSED (Exit Code: 0)
```

### 6.2. Verification of Eradication (Zero Legacy Data)
- `grep "99206" src/` -> **0 occurrences found**
- `grep "zcooltech4" src/` -> **0 occurrences found**
- `grep "Samee Ulla (CEO)" src/` -> **0 occurrences found**

---

## 7. Browser-Tested Viewport Sizes

All viewports were rendered and inspected via Microsoft Edge Headless engine against the running application at `http://localhost:3000`:

| Viewport Width | Device Category | Verified Behavior |
| :--- | :--- | :--- |
| **1440px** | Large Desktop | Full 3-column statutory grid, spacious header with primary phone, clear multi-column footer |
| **1024px** | Laptop / Small Desktop | Balanced 3-column layout, zero horizontal overflow, nav menu fits cleanly |
| **768px** | Tablet | 2-column statutory grid, adaptive flex layouts in hero, header switches to compact CTA |
| **430px** | Large Mobile (iPhone 14/15/16 Pro Max) | 1-column cards, easy touch targets, full address wraps naturally |
| **375px** | Standard Mobile (iPhone SE/12/13/Mini) | Clean typography, no clipped text, direct call button accessible |
| **320px** | Ultra-Compact Mobile | Adaptive button text ("Submit Nameplate") prevents overflow; zero horizontal scrolling |

---

## 8. Actual Issues Found and Fixed During QA

1. **ScrollReveal Visibility FOIC Bug**:
   - *Issue*: `ScrollReveal.jsx` initialized with `useState(false)` and `opacity: 0`, causing initial page content or sections in headless screen captures to render blank until an explicit scroll event.
   - *Fix*: Initialized state to `true`, avoiding synchronous `setState` in effects by wrapping viewport checks in `requestAnimationFrame`. Content renders immediately and smoothly.
2. **Ultra-Narrow (320px) Hero Button Overflow**:
   - *Issue*: The button label "Submit Nameplate for Match" was 270px wide, which combined with padding exceeded 320px container padding on small devices.
   - *Fix*: Added responsive label: `Submit Nameplate` on screens `<360px` and `Submit Nameplate for Match` on screens `>=360px`.
3. **Geo Coordinate Schema Property Mismatch**:
   - *Issue*: `COMPANY_DETAILS` defined `geo.latitude`, while `seo.js` accessed `COMPANY_DETAILS.coordinates.latitude`.
   - *Fix*: Added compatibility alias `coordinates` to `company.js` and safe optional chaining in `seo.js`.
4. **HTML Anchor Navigation in About Actions**:
   - *Issue*: `@next/next/no-html-link-for-pages` flagged raw `<a>` tags for internal paths in `AboutActions.jsx`.
   - *Fix*: Replaced with Next.js `<Link href="...">` components.
5. **Lucide Import Syntax & Unescaped Apostrophe**:
   - *Issue*: Missing closing brace on `HeroIndustrial.jsx` import and unescaped apostrophe in `ModelIdentificationCTA.jsx`.
   - *Fix*: Cleaned syntax and properly escaped JSX entities.

---

## 9. Captured Screenshots

All screenshots are stored in the project's [`screenshots/`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/) directory:

- Desktop (1440px): [`screenshots/homepage_desktop_1440.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/homepage_desktop_1440.png)
- Desktop (1024px): [`screenshots/homepage_desktop_1024.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/homepage_desktop_1024.png)
- Tablet (768px): [`screenshots/homepage_tablet_768.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/homepage_tablet_768.png)
- Mobile (430px): [`screenshots/homepage_mobile_430.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/homepage_mobile_430.png)
- Mobile (375px): [`screenshots/homepage_mobile_375.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/homepage_mobile_375.png)
- Ultra-Compact (320px): [`screenshots/homepage_mobile_320.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/homepage_mobile_320.png)
- About & Footer Section: [`screenshots/homepage_about_and_footer.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/homepage_about_and_footer.png)
- Contact Page Desktop: [`screenshots/contact_desktop_1440.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/contact_desktop_1440.png)
- Contact Page Mobile: [`screenshots/contact_mobile_375.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/contact_mobile_375.png)
- About Page Desktop: [`screenshots/about_desktop_1440.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/about_desktop_1440.png)
- About Page Mobile: [`screenshots/about_mobile_375.png`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/screenshots/about_mobile_375.png)
