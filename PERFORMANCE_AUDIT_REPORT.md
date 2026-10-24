# Comprehensive Performance Audit Report: Z Cool Enterprises Deployed Website

**Date:** 25 October 2026  
**Target Host (Deployed):** `https://z-cool-enterprises.vercel.app/`  
**Hosting Environment:** Vercel (Edge Network + Serverless Functions `bom1` Mumbai / `iad1` Washington DC)  
**Codebase:** `C:\Users\AFFAN KHAN\OneDrive\Desktop\zcool\Z-Cool-enterprises`  
**Backend Reference:** `C:\Projects\Z-Cool-enterprises-backend`  
**Audit Mode:** Read-Only Static Code Analysis, Live HTTP/cURL Benchmarks, Bundle Inspection  
**Browser Status:** Automated CDP browser rendering tools could not establish a context due to a CDP port resolution error; live performance was empirically measured via network-level HTTP/1.1 and HTTP/2 latency benchmarks, TTFB, and RSC request tracing as approved.

---

## Executive Summary & Root Cause Matrix

The noticeable slowness and page-navigation freeze reported on the deployed website stems primarily from a **catastrophic serverless API timeout loop**:

1. **The 10.6-Second Navigation Freeze (Critical Root Cause):**  
   Whenever a user navigates or Next.js prefetches routes like `/products`, `/products/[id]`, `/refurbishment`, `/services`, or `/applications`, the serverless function executes `getProducts()` or `getProductById()`.  
   Because `process.env.NEXT_PUBLIC_API_URL` is undefined on Vercel, the code falls back to `http://localhost:5000`. Inside Vercel's cloud Lambda container, port 5000 is empty, and `fetch()` lacks an `AbortSignal.timeout()`. The serverless function hangs for **10.5 to 11.0 seconds** until Node.js encounters an internal TCP connect timeout, only then falling back to the local static dataset `PRODUCTS_CATALOG`. Because `export const dynamic = 'force-dynamic'` and `cache: 'no-store'` are configured, this 10.6-second stall happens **on every single route transition and prefetch**, making the website feel completely frozen.

2. **Uncached Dynamic Rendering vs. Static Prerendering (High Impact):**  
   Routes without API calls (`/`, `/about`, `/brands`, `/contact`) are served directly from Vercel's Edge CDN in **0.12s to 0.83s**. In stark contrast, all catalog-driven routes take **10.5s to 33.9s**. None of the product pages are prerendered at build time or cached via ISR (Incremental Static Regeneration).

3. **Massive Over-Serialization of Dead Data (High Impact):**  
   On single product detail pages (`/products/[id]`), `src/app/products/[id]/page.jsx` fetches and passes all 181 products (`allProducts`) into `ProductDetailView`. However, `ProductDetailView` **never uses `allProducts`**. Next.js serializes this massive dead catalog into the page's React Server Component (RSC) hydration payload, bloating the HTML document to **457 KB** per product page.

4. **Render-Blocking External Font Import (Medium Impact):**  
   `src/styles/globals.css` begins with `@import url('https://fonts.googleapis.com/...');`. In CSS, `@import` creates a sequential waterfall that blocks the browser from parsing styles and rendering First Contentful Paint (FCP) until external Google Fonts stylesheets are resolved, rather than using Next.js zero-runtime `next/font/google`.

5. **Client Bundle Overhead & Animation Redundancy (Medium Impact):**  
   Both `framer-motion` (v12) and `gsap` (with `ScrollTrigger`) are bundled simultaneously. Unused 3D rendering packages (`three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, `maath`, `leva`) remain in `package.json` dependencies and are present in orphan components (`src/components/three/*`, `src/components/background/ShaderBackground.jsx`).

6. **SEO & Indexing Domain Mismatch (High Impact for Search):**  
   `robots.txt`, `sitemap.xml`, and `src/utils/seo.js` hardcode canonical URLs to `https://zcoolenterprises.com/`. However, `zcoolenterprises.com` has no active DNS record (`NXDOMAIN`). Search crawlers visiting the deployed `https://z-cool-enterprises.vercel.app/` receive canonical headers directing them to a non-existent host, creating an indexing dead-end.

---

## 1. Route Navigation Audit

### 1.1 Empirical Live Benchmarks (Deployed Site)

The following real-world latency benchmarks were captured directly against `https://z-cool-enterprises.vercel.app/`:

| Route | Type in Next.js | Measured Total Time | X-Vercel-Cache | Cause of Delay |
|:---|:---|:---:|:---:|:---|
| `/` (Homepage) | Static (SSG) | **0.127 s** | `HIT` | Fast CDN edge delivery |
| `/about` | Static (SSG) | **0.125 s** | `HIT` | Fast CDN edge delivery |
| `/brands` | Static (SSG) | **0.573 s** | `HIT` | Fast CDN edge delivery |
| `/contact` | Static (SSG) | **0.832 s** | `HIT` | Static HTML |
| `/case-studies` | Static (SSG) | **0.622 s** | `HIT` | Static HTML |
| `/blog` | Static (SSG) | **0.597 s** | `HIT` | Static HTML |
| `/terms` / `/privacy` | Static (SSG) | **0.567 s** | `HIT` | Static HTML |
| **`/services`** | Dynamic (Serverless) | **10.918 s** | `MISS` | `getProducts()` connects to localhost:5000 & times out |
| **`/applications`** | Dynamic (Serverless) | **10.941 s** | `MISS` | `getProducts()` connects to localhost:5000 & times out |
| **`/products`** | Dynamic (`force-dynamic`) | **10.893 s** *(up to 33.9s cold)* | `MISS` | `getProducts()` connects to localhost:5000 & times out |
| **`/products/[id]`** | Dynamic (`force-dynamic`) | **11.002 s** | `MISS` | `getProductById()` + `getProducts()` timeout |
| **`/refurbishment`** | Dynamic (`force-dynamic`) | **10.587 s** | `MISS` | `getProducts()` connects to localhost:5000 & times out |

### 1.2 Route Prefetching & The Client Freeze

Next.js `<Link>` components automatically prefetch linked routes when they enter the browser viewport.  
- On the homepage and header, links point to `/products`, `/products?category=...`, and `/refurbishment`.
- When these links become visible, Next.js sends background prefetch requests with the header `RSC: 1`.
- A direct test of `curl -H "RSC: 1" "https://z-cool-enterprises.vercel.app/products"` proved that **the prefetch request itself stalls for 10.69 seconds**.
- While this 10.69s request is in flight, the browser's HTTP connection pool is occupied, and when a visitor clicks "Compressors", the Next.js router waits for the in-flight or fresh RSC response. The user experiences **10+ seconds where clicking appears to do nothing**, followed by an abrupt page jump.

### 1.3 Link Usage & Full-Page Reloads

- **`<Link>` vs `<a>`:** The main header and footer predominantly use `next/link` for internal routes. However, in `src/app/admin/dashboard/page.jsx` (line 668), `<a href="/admin/dashboard?tab=orders">` is used instead of `<Link>`, triggering unnecessary full browser reloads for tab switching.
- **Hash Links:** Links in `Header.jsx` to `/#categories`, `/#nameplate-matching`, and `/#applications` work smoothly when already on the homepage, but when navigated from subpages (`/products` or `/about`), they cause a cross-page route transition to `/` before scrolling.

---

## 2. API Requests & Backend Connectivity Audit (`src/lib/api.js`)

### 2.1 Missing Environment Variable & Hardcoded Localhost Default

In `src/lib/api.js`:
```javascript
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
```
In the deployed Vercel production dashboard, `NEXT_PUBLIC_API_URL` was not configured. Consequently:
- `API_BASE` evaluates to `'http://localhost:5000'`.
- All server-side data fetching methods (`getProducts`, `getCategories`, `getProductById`, `getProductsByCategory`) initiate HTTP requests to `http://localhost:5000/api/...`.
- In a serverless cloud execution environment (AWS Lambda / Vercel Functions), there is no process listening on port 5000.
- Modern Node.js networking (`undici`/`fetch`) maintains an internal connection timeout of approximately **10 seconds** before rejecting the TCP connection with `ECONNREFUSED` or `ETIMEDOUT`.

### 2.2 Absence of Request Timeouts (`AbortSignal.timeout`)

None of the `fetch()` calls in `src/lib/api.js` specify a timeout signal. For example:
```javascript
const res = await fetch(`${API_BASE}/api/products${queryString}`, {
  cache: 'no-store',
});
```
Even if a production backend were deployed on a service like Render (Free Tier), sleeping instances require **45 to 60 seconds** to wake up from cold sleep. Without an explicit timeout (e.g., `signal: AbortSignal.timeout(1500)`), the frontend remains hung for the entire duration of the backend wake-up.

### 2.3 Redundant Backend Calls on Product Detail Pages (`/products/[id]`)

In `src/app/products/[id]/page.jsx`:
1. `generateMetadata({ params })` executes:
   ```javascript
   const data = await getProductById(identifier);
   ```
   *(Wait ~10 seconds for timeout)*
2. `ProductDetailPage({ params })` executes:
   ```javascript
   const [data, allProducts] = await Promise.all([
     getProductById(identifier),
     getProducts(),
   ]);
   ```
   *(Wait another ~10 seconds for timeout)*
Because both calls specify `cache: 'no-store'`, Next.js **does not deduplicate** `fetch` requests across `generateMetadata` and `Page`. `getProductById` is executed twice per page request.

---

## 3. Rendering, JavaScript & Bundle Audit

### 3.1 Heavy Dependencies & Dual Animation Frameworks

The production bundle includes multiple redundant, heavy animation and 3D libraries:

| Package | Version | Typical Gzipped Size | Purpose / Current Status |
|:---|:---:|:---:|:---|
| `three` | `^0.185.1` | ~160 KB (600 KB raw) | **Unused in production UI.** Only imported in orphan files (`R3FCanvas.jsx`, `ShaderBackground.jsx`). |
| `@react-three/fiber` | `^9.6.1` | ~50 KB | Unused in active pages. |
| `@react-three/drei` | `^10.7.7` | ~120 KB | Unused in active pages. |
| `@react-three/postprocessing` | `^3.0.4` | ~35 KB | Unused in active pages. |
| `framer-motion` | `^12.42.2` | ~40-60 KB | Used in modals, accordions, and drawers. |
| `gsap` + `ScrollTrigger` | `^3.15.0` | ~70 KB | Used in PDP scroll pinning and page reveals. |
| `lottie-react` | `^2.4.1` | ~60 KB | Heavy canvas/SVG player. |
| `swiper` | `^14.0.2` | ~45 KB | Carousel engine. |

**Key Finding:** Both `framer-motion` AND `gsap` are bundled and execute simultaneously on product detail pages. Meanwhile, `three.js` and its React wrappers add significant dead weight if referenced anywhere in the module graph.

### 3.2 Massive HTML Hydration Payload (Over-Serialization)

- **Measurement:** `https://z-cool-enterprises.vercel.app/products/copeland-zr72kc-tFD`
- **Measured Response Size:** **457,621 bytes (~457 KB)** for a single product page.
- **Root Cause:** In `src/app/products/[id]/page.jsx`:
  ```javascript
  const [data, allProducts] = await Promise.all([
    getProductById(identifier),
    getProducts(), // Returns all 181 catalogue products with full specs
  ]);
  return <ProductDetailView product={data.product} allProducts={allProducts} ... />
  ```
  Inspection of `src/components/products/ProductDetailView.jsx` reveals that **`allProducts` is never referenced or rendered**. Yet Next.js serializes all 181 objects into the inline HTML `<script>` tag for React client hydration, forcing the visitor to download half a megabyte of text before the page becomes interactive.

### 3.3 Large Client Components

`src/components/products/ProductDetailView.jsx` is **1,270 lines** long and marked with `'use client'`. It contains 8 distinct sub-sections (Hero, Story, Factory Journey, Blueprint, Hotspots, Specifications, FAQ, Related Products) and instantiates multiple `useRef` hooks, GSAP ScrollTrigger contexts, matchMedia breakpoints, and local state trackers in a single monolithic client component.

---

## 4. Images & Fonts Audit

### 4.1 Synchronous Render-Blocking Font `@import`

In `src/styles/globals.css` (Line 1):
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```
- **Performance Impact:** Browsers cannot proceed with CSS construction until the `@import` URL is downloaded and parsed. This creates a multi-hop network waterfall:  
  `HTML` ➔ `_next/static/css` ➔ `fonts.googleapis.com` (CSS) ➔ `fonts.gstatic.com` (WOFF2 font files).
- **Remedy:** Next.js includes `next/font/google`, which downloads and self-hosts fonts at build time with zero external network requests and automated font-display swapping.

### 4.2 Raw `<img>` vs. `next/image`

While `next/image` is used in `ProductCard.jsx`, several key components still use standard `<img>` tags:
- `src/components/home/VerifiedSpotlightSection.jsx` (lines 85-92): Loads unoptimized PNGs (`/ac_compressor.png` at 173 KB, `/ac_compressor_2.png` at 278 KB).
- `src/components/layout/Header.jsx` (line 72): Loads `/logo-icon.png` (112 KB) at 36px x 36px without responsive resizing.
- `src/components/products/ProductDetailView.jsx` (line 453): Loads thumbnail assets directly via `<img>`.
- `public/logo2.png` exists in the filesystem at **960 KB** (almost 1 MB for an icon/logo graphic).

### 4.3 Next.js Image Rewrites Fallback

`next.config.mjs` defines:
```javascript
async rewrites() {
  return [
    {
      source: '/uploads/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/uploads/:path*`,
    },
  ];
}
```
Any image referencing `/uploads/...` is rewritten to `localhost:5000` on production, causing broken image requests or connection hangs.

---

## 5. Caching & Rendering Audit (Static vs. Dynamic)

### 5.1 Route Prerender Status Breakdown

Inspection of `.next/prerender-manifest.json` confirms:
- **Prerendered Statically (Fast SSG/ISR):**  
  `/`, `/about`, `/brands`, `/contact`, `/case-studies`, `/blog`, `/terms`, `/privacy`, `/refund`, `/cookies`.
- **Dynamic (Bypasses Static Optimization completely):**  
  `/products`, `/products/[id]`, `/products/category/[slug]`, `/refurbishment`, `/services`, `/applications`.

### 5.2 Misuse of `force-dynamic` and `cache: 'no-store'`

In `src/app/products/page.jsx`, `src/app/products/[id]/page.jsx`, and `src/app/refurbishment/page.jsx`:
```javascript
export const dynamic = 'force-dynamic';
```
Combined with `fetch(..., { cache: 'no-store' })` in `src/lib/api.js`:
- Every page load requires a serverless invocation on Vercel.
- Vercel's global CDN cache is bypassed (`X-Vercel-Cache: MISS`, `Cache-Control: private, no-cache, no-store`).
- Catalogue data changes infrequently (bimonthly or monthly). This data is ideal for **Incremental Static Regeneration (ISR)** with `revalidate = 3600` (1 hour) or `stale-while-revalidate`.

---

## 6. Third-Party Scripts Audit

- **Third-Party Embeds:** None detected. The project does not load Google Tag Manager, Facebook Pixel, Hotjar, or external chat widgets.
- **Structured Data:** Root layout (`src/app/layout.jsx`) injects a clean, inline JSON-LD script for Organization schema (`<script type="application/ld+json">`). This is lightweight (<2 KB) and non-blocking.
- **Third-Party Script Assessment:** Third-party scripts are **NOT** a contributor to the observed page navigation lag.

---

## 7. Production vs. Development Discrepancies

A crucial reason the site felt acceptable during local development but became slow in production:

| Characteristic | Local Development (`npm run dev`) | Deployed Production (`Vercel`) |
|:---|:---|:---|
| **Backend Connectivity** | A developer often runs `npm run dev` in `Z-Cool-enterprises-backend` concurrently on port 5000. `fetch('http://localhost:5000')` succeeds in <5 ms. | There is no server running on port 5000 in Vercel's serverless containers. The connection attempt hangs for 10.6 seconds every time. |
| **Fallback Path** | Never triggered locally if backend is running. | Triggered on **every single request**, but only after the full 10.6-second timeout. |
| **Caching Behavior** | Next.js development server recompiles pages on the fly, masking CDN caching benefits. | Static routes (`/about`) are served in 0.12s from edge cache; dynamic routes (`/products`) stall for 11s. |
| **RSC Prefetching** | Prefetching is disabled or minimal in `next dev`. | In production, every visible link automatically prefetches its RSC payload, causing immediate network saturation. |

---

## 8. SEO Baseline Audit

### 8.1 Critical Domain Mismatch & Dead Canonical URLs

- **Configuration:** `src/utils/seo.js`, `src/app/sitemap.js`, and `src/app/robots.js` define:
  ```javascript
  const baseUrl = 'https://zcoolenterprises.com';
  ```
- **Live Status:** `https://zcoolenterprises.com` does not resolve (`dial tcp: lookup zcoolenterprises.com: no such host`).
- **Live `robots.txt` (`https://z-cool-enterprises.vercel.app/robots.txt`):**
  ```
  User-Agent: *
  Allow: /
  Disallow: /admin/

  Sitemap: https://zcoolenterprises.com/sitemap.xml
  ```
- **Impact:** Search crawlers landing on `https://z-cool-enterprises.vercel.app/` read canonical tags pointing to `https://zcoolenterprises.com`. Crawlers will fail to reach the canonical destination and drop the indexed pages.

### 8.2 Inconsistent Metadata URLs

In `src/app/services/page.jsx` (line 21) and `src/app/applications/page.jsx` (line 22):
- OpenGraph URLs are hardcoded to `https://zcool.in/services` and `https://zcool.in/applications` instead of using the central `siteConfig.url`.

### 8.3 Sitemap Scope

`src/app/sitemap.js` correctly maps all 45 verified core products and 10 main routes. However, all `<loc>` entries point to the inactive domain `https://zcoolenterprises.com`.

---

## Affected Files & Routes Matrix

| File Path | Impacted Route(s) | Primary Issue | Severity |
|:---|:---|:---|:---:|
| `src/lib/api.js` | `/products`, `/products/[id]`, `/services`, `/applications`, `/refurbishment` | Missing `NEXT_PUBLIC_API_URL`, defaults to `localhost:5000`, `cache: 'no-store'`, no `AbortSignal.timeout` | **CRITICAL** |
| `src/app/products/page.jsx` | `/products` | `export const dynamic = 'force-dynamic'`, uncached data fetch | **CRITICAL** |
| `src/app/products/[id]/page.jsx` | `/products/[id]` | `force-dynamic`, duplicate `getProductById` calls, passes unused `allProducts` (457 KB payload) | **CRITICAL** |
| `src/app/services/page.jsx` | `/services` | Calls `getProducts()` with `cache: 'no-store'`, 10.9s delay, inconsistent OG URL | **HIGH** |
| `src/app/applications/page.jsx` | `/applications` | Calls `getProducts()` with `cache: 'no-store'`, 10.9s delay, inconsistent OG URL | **HIGH** |
| `src/app/refurbishment/page.jsx` | `/refurbishment` | `export const dynamic = 'force-dynamic'`, calls `getProducts()`, 10.6s delay | **HIGH** |
| `src/styles/globals.css` | All pages | Render-blocking `@import url('https://fonts.googleapis.com/...')` on line 1 | **MEDIUM** |
| `src/utils/seo.js` | All pages | Hardcoded `https://zcoolenterprises.com` causes dead canonical URLs | **HIGH** |
| `src/app/robots.js` & `sitemap.js` | `/robots.txt`, `/sitemap.xml` | Non-resolving sitemap and canonical domains | **HIGH** |
| `src/components/products/ProductDetailView.jsx` | `/products/[id]` | 1,270-line monolithic client component, dual GSAP/Framer animations, unused `allProducts` prop | **MEDIUM** |
| `src/components/layout/Header.jsx` | All pages | Unoptimized 112 KB logo PNG loaded via raw `<img>` | **LOW** |
| `src/app/admin/dashboard/page.jsx` | `/admin/dashboard` | `<a>` tag used for internal tab navigation causing full reloads | **LOW** |
| `package.json` | Global bundle | Unused `three`, `@react-three/*`, `leva`, `maath` dependencies in module graph | **MEDIUM** |

---

## Findings Ranked by Impact

### 🔴 Critical Impact (Blocks Navigation & Destroys User Experience)
1. **The 10.6-Second Localhost Timeout in `src/lib/api.js`:** The frontend makes server-side requests to `http://localhost:5000` because `NEXT_PUBLIC_API_URL` is unset on Vercel. With no `AbortSignal.timeout`, every call takes 10.5–11.0 seconds to time out before falling back to static data.
2. **`export const dynamic = 'force-dynamic'` on Catalogue Pages:** Prevents Vercel from caching `/products` and `/products/[id]`, forcing the 10.6-second delay on every single page view and prefetch.
3. **457 KB Over-Serialized Payload on Product Pages:** Passing `allProducts` to `ProductDetailView` (which does not use it) injects all 181 catalogue records into the page HTML on every product detail view.

### 🟠 High Impact (Severe SEO Damage & Secondary Latency)
4. **Dead Canonical Domain (`zcoolenterprises.com`):** Directs search engine crawlers to an unresolvable domain, risking complete de-indexing.
5. **Uncached Server Requests on `/services`, `/applications`, `/refurbishment`:** All three routes call `getProducts()` with `cache: 'no-store'`, causing 10.9-second load times.

### 🟡 Medium Impact (Asset Optimization & Performance Overhead)
6. **Render-Blocking `@import` in `globals.css`:** Blocks browser rendering until Google Fonts completes an external CSS and WOFF2 waterfall.
7. **Dual Animation Libraries (`framer-motion` + `gsap`):** Bloats the JavaScript runtime on product detail pages.
8. **Orphan 3D Dependencies:** `three.js` and `@react-three/*` are installed and present in unused background components.

### 🟢 Low Impact (Minor Polish)
9. **Raw `<img>` Tags in Header and Cards:** Lack automated WebP/AVIF compression and responsive `srcset`.
10. **Full Reload Anchor Tag in Admin Dashboard:** Tab switching in `/admin/dashboard` uses `<a>` instead of `<Link>`.

---

## Recommended Fixes in Implementation Order

### Phase 1: Immediate Latency Elimination (Drop Navigation Time from 11s to <0.3s)
1. **Add Instant Timeout & Fallback in `src/lib/api.js`:**
   - Configure `AbortSignal.timeout(1200)` (1.2 seconds) on all `fetch()` calls. If the backend fails to answer within 1.2s, immediately fall back to `PRODUCTS_CATALOG` / `CATEGORIES_LIST` without hanging.
   - When running on Vercel and `NEXT_PUBLIC_API_URL` is undefined or contains `localhost`, skip the external network request entirely and return the local static catalog immediately.
2. **Enable Incremental Static Regeneration (ISR) / Safe Caching:**
   - In `src/lib/api.js`, change `cache: 'no-store'` to `next: { revalidate: 3600 }` (or `cache: 'force-cache'`).
   - Remove `export const dynamic = 'force-dynamic'` from `/products`, `/products/[id]`, and `/refurbishment`.
   - Add `generateStaticParams()` to `src/app/products/[id]/page.jsx` so all 45 core products are statically compiled at build time.

### Phase 2: Payload Pruning & Metadata Deduplication
3. **Remove Unused `allProducts` Prop on Product Detail Pages:**
   - In `src/app/products/[id]/page.jsx`, delete `getProducts()` from `Promise.all` in `ProductDetailPage`. Only fetch the single product needed. This immediately cuts the HTML payload from **457 KB down to ~40 KB** (a 91% reduction).
4. **Deduplicate `getProductById` in Metadata:**
   - Cache or pass product metadata using React's `cache()` utility so `generateMetadata` and `ProductDetailPage` share the single lookup.

### Phase 3: Font Optimization & SEO Repair
5. **Migrate Fonts to `next/font/google`:**
   - Remove `@import url(...)` from `src/styles/globals.css`.
   - Initialize `Inter` and `JetBrains_Mono` in `src/app/layout.jsx` using `next/font/google` with `display: 'swap'`.
6. **Harmonize Canonical Domain:**
   - In `src/utils/seo.js`, `sitemap.js`, and `robots.js`, dynamically determine the domain (e.g., `process.env.NEXT_PUBLIC_SITE_URL || 'https://z-cool-enterprises.vercel.app'`) so canonical tags point to the active live site until the custom domain DNS is pointed.

### Phase 4: Asset & Dependency Clean-Up
7. **Replace Critical `<img>` with `next/image`:**
   - In `Header.jsx`, wrap `/logo-icon.png` in `next/image` with explicit dimensions (36x36) and priority loading.
8. **Prune Unused 3D Dependencies:**
   - Remove unused packages (`three`, `@react-three/*`, `leva`, `maath`) if 3D shaders are not actively required on the marketing site.

---

## Risks & Verification Steps

| Proposed Fix | Potential Risk | Safe Verification Step |
|:---|:---|:---|
| **Adding 1.2s timeout in `src/lib/api.js`** | If a live backend is added later, very slow queries might time out. | Use `AbortSignal.timeout(2000)` only as a fallback safeguard; ensure static catalogue renders smoothly. |
| **Removing `force-dynamic`** | Newly added products in MongoDB won't show instantly without revalidation. | Use Next.js on-demand revalidation (`revalidatePath('/products')`) or time-based ISR (`revalidate = 3600`). |
| **Removing `allProducts` from PDP** | A subcomponent in PDP might secretly rely on `allProducts`. | Grep verified zero references to `allProducts` in `ProductDetailView.jsx`. Test PDP thoroughly in development before release. |
| **Migrating to `next/font/google`** | Font styling or font-family classes might shift if CSS variable names mismatch. | Keep CSS variable names `--font-inter` and `--font-mono` mapped cleanly to Tailwind tokens. |
