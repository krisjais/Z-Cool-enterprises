# PRODUCT IMAGE INTEGRATION PLAN — Z COOL ENTERPRISES

**Date:** October 24, 2026  
**Status:** Proposal & Integration Strategy (Awaiting Client Approval)  
**Project Root:** `c:\Users\AFFAN KHAN\OneDrive\Desktop\zcool\Z-Cool-enterprises`  
**Image Source Directory:** `public/products/airconditionercompressor-source/`  
**Active Catalogue:** `src/data/products.js` (45 Products)  

---

## 1. Executive Context & Image Investigation

A cross-analysis between the newly extracted source archive (`public/products/airconditionercompressor-source/`) and the active product catalogue (`src/data/products.js`) revealed critical insights:

1. **Existing Catalogue Resolution:** All 10 high-confidence target products in `src/data/products.js` **already have high-resolution images** (ranging from **260×500 up to 555×555 pixels**) in `public/products/legacy/` and `public/ac_compressor.png`.
2. **Provenance Discovery:** Binary hash comparison proved that the existing `/products/legacy/compressor*.webp` files were originally sourced from this same site at full resolution (500×500 px).
3. **The 125×125 Thumbnail Risk:** 9 out of the 10 matched image sets in the newly extracted archive only contain **125×125 pixel thumbnails**. Replacing 500×500 images with 125×125 thumbnails would introduce severe blurriness and pixelation on high-DPI desktop monitors and mobile retina displays.
4. **LG VRV Opportunity:** The **LG VRV Air Conditioner Compressor** has high-resolution 375×500 px images in the newly extracted folder, providing 2 additional real photographic angles.

---

## 2. Integration Table for the 10 High-Confidence Matches

| # | Product Name & Code | Current Catalogue Image | Current Dimensions | Proposed Source Image | Proposed Dimensions | Recommendation & Action Plan |
| :-: | :--- | :--- | :-: | :--- | :-: | :--- |
| **1** | **Daikin Scroll JT125**<br>`(JT125)` | `/products/legacy/compressor19-278c06c9.webp` | **260×500** | `daikin-jt125-scroll-compressor-125x125-ead3c188.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Proposed image is a 125×125 thumbnail; replacing would degrade visual quality by 75%. |
| **2** | **Danfoss Performer SM185S4RC**<br>`(SM185S4RC)` | `/products/legacy/compressor16-edf2a5e4.webp` | **460×500** | `danfoss-sm185s4rc-scroll-compressor-125x125-e9cc6eb7.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Current image is a 460×500 crisp blue Danfoss Performer unit. Retain high-res asset. |
| **3** | **Copeland Scroll ZR72KC-TFD**<br>`(ZR72KC-TFD)` | `/ac_compressor.png` | **555×555** | `emerson-copeland-zr72kc-tfd-522-5-ton-compressor-125x125-57b6fcb9.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Current image is 555×555 high-res studio shot. 125×125 thumbnail would look pixelated in hero card. |
| **4** | **LG VRV Air Conditioner**<br>`(LG-VRV)` | `/products/legacy/compressor2-651af61b.webp` | **375×500** | `/products/airconditionercompressor-source/lg-vrv-air-conditioner-compressor-500x500-1fbb47a7.webp` | **375×500** | ✅ **EXPAND GALLERY (SAFE UPDATE).** The new file is high-res (375×500). Propose adding it as secondary gallery angle `images: ['/products/legacy/compressor2-651af61b.webp', '/products/airconditionercompressor-source/lg-vrv-air-conditioner-compressor-500x500-1fbb47a7.webp']`. |
| **5** | **Mitsubishi Rotary RB233**<br>`(RB233)` | `/products/legacy/compressor21-15b60a62.webp` | **489×500** | `mitsubishi-rb233-rotary-compressor-125x125-9f98ac38.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Current image is 489×500 px. Thumbnail downgrade is unacceptable for catalogue PDP. |
| **6** | **Panasonic Scroll SBN453**<br>`(SBN453)` | `/products/legacy/compressor38-fc59e0c9.webp` | **500×450** | `sbn453-panasonic-scroll-125x125-b2e67fe4.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Current image is 500×450 px authentic studio photo. |
| **7** | **Copeland Refrigeration ZB150**<br>`(ZB150)` | `/products/legacy/compressor13-30df9d9f.webp` | **500×500** | `zb150-emerson-copeland-125x125-0c439499.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Current image is 500×500 px. Proposed file is only 125×125. |
| **8** | **Copeland Digital Scroll ZPD72**<br>`(ZPD72)` | `/products/legacy/compressor14-b41709f7.webp` | **500×500** | `zpd72-emerson-scroll-compressor-125x125-8994c21d.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Current image is 500×500 px showing the modulation solenoid valve clearly. |
| **9** | **Copeland Scroll ZR125**<br>`(ZR125)` | `/products/legacy/compressor11-21a63ba1.webp` | **500×500** | `zr125-scroll-compressor-125x125-dfd6c425.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Current image is 500×500 px high-res commercial 10-TR photo. |
| **10** | **Copeland Scroll ZR190**<br>`(ZR190)` | `/products/legacy/compressor12-812a9015.webp` | **500×500** | `zr190-emerson-copeland-125x125-e109e862.webp` | 125×125 | ❌ **KEEP CURRENT IMAGE.** Current image is 500×500 px commercial 15-TR studio shot. |

---

## 3. Analysis of the 9 Products with 125×125 Thumbnails

> **Question:** Is using the 125×125 thumbnail acceptable, or should we keep the current images?

**Conclusion:** **Keep the current images.**

### Technical & UX Rationale:
1. **Aspect Ratio & Container Layout:** Next.js `<Image fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />` in `ProductCard.jsx` renders card image containers that are **280px to 380px wide** on mobile and desktop screens.
2. **Upscaling Artifacts:** A 125×125 pixel image stretched to 300px+ has a pixel density below 0.4×, resulting in visible blurring, fuzzy text on compressor nameplates, and a dated/unprofessional website appearance.
3. **Existing Image Quality:** The current images in `public/products/legacy/` are already 460px to 555px wide and have been optimized with transparent or neutral studio backdrops. Replacing them with 125×125 thumbnails would be a direct visual downgrade.

---

## 4. Next.js Static Asset Paths Confirmation

In Next.js App Router, all files placed under `public/` are served from the root domain (`/`):
- **Physical Disk Path:** `public/products/airconditionercompressor-source/image-name.webp`
- **Correct Next.js URL Path:** `/products/airconditionercompressor-source/image-name.webp`
- **Rules:**
  - Never include `public` in the URL (e.g. `/public/products/...` will result in 404).
  - Never use relative filesystem paths (e.g. `../../public/...`).

---

## 5. Other Valuable High-Resolution Images in the Source Archive

While 9 of the exact model matches only had thumbnails, the archive contains **genuine 500×500 px photos** for other series items that can be safely used:

1. **GMCC 1.5 Ton Rotary (`GMCC-1.5TR`):**  
   - Source: `/products/airconditionercompressor-source/1-5-ton-gmcc-rotary-compressor-5-500x500-10d9a476.webp` (500×500)
2. **Mitsubishi 1.5 Ton SCI Rotary (`MITSUBISHI-1.5TR`):**  
   - Source: `/products/airconditionercompressor-source/1-5-ton-mitsubishi-rotary-compressor-500x500-c4e45459.webp` (500×500)
3. **Copeland KCE Reciprocating (`KCE-444`):**  
   - Source: `/products/airconditionercompressor-source/emerson-copeland-compressor-kce-444-500x500-64eceef2.webp` (499×500)
4. **Danfoss NTZ271 Maneurop Reciprocating:**  
   - Source: `/products/airconditionercompressor-source/danfoss-ntz271-maneurop-reciprocating-compressor-500x500-07b7c45c.webp` (500×500)
5. **Daikin VRV Inverter Commercial Unit:**  
   - Source: `/products/airconditionercompressor-source/inverter-compressor-daikin-vrv-500x500-6028a222.webp` (500×500)

---

## 6. Recommended Action Plan (Requires Your Approval)

- [ ] **Action 1 (LG VRV Multi-Angle Gallery):** Add `/products/airconditionercompressor-source/lg-vrv-air-conditioner-compressor-500x500-1fbb47a7.webp` as a second gallery image to `legacy-02-lg-vrv-air-conditioner-compressor`.
- [ ] **Action 2 (Retain 9 Existing High-Res Images):** Keep the current 460px–555px high-resolution images for the other 9 models to preserve visual sharpness across desktop and mobile.
- [ ] **Action 3 (Review Series High-Res Assets):** If desired, apply the verified 500×500 images for GMCC 1.5 Ton Rotary, Mitsubishi 1.5 Ton Rotary, and Copeland KCE.
