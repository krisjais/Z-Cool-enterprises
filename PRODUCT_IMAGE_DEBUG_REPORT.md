# PRODUCT IMAGE DEBUG & AUDIT REPORT — Z COOL ENTERPRISES

**Date:** October 24, 2026  
**Status:** Audit & Fix Complete  
**Project:** `Z-Cool-enterprises`  
**Inspected Files:**
- `src/data/products.js` (Catalogue Database)
- `src/components/ui/ProductCard.jsx` (Catalogue Card Image & Fallback Component)
- `src/components/catalog/ProductCatalogView.jsx` (Main Catalogue Grid & Pagination)
- `src/components/products/ProductDetailView.jsx` (Interactive Multi-Image PDP & Lightbox)

---

## 1. Root Causes for Card Display Issues in the Screenshot

From visual inspection of the screenshot of `http://localhost:3000/products`, three distinct patterns were identified:

### Issue A: "Technical Silhouette" Placeholders (Cards #4 & #5)
- **Affected Cards:**
  - Card #4: **Danfoss Maneurop Reciprocating Compressor MTZ64** (`MTZ64`)
  - Card #5: **Copeland Semi-Hermetic Compressor 3DS3R17ME** (`3DS3R17ME`)
- **Exact Cause:**
  - In `src/data/products.js`, both records were intentionally initialized with `images: []` and `imageType: "placeholder"`.
  - In `ProductCard.jsx`, line 30 defines `hasRealImage = !imgError && Array.isArray(product.images) && product.images.length > 0 && product.imageType !== 'placeholder'`.
  - When `hasRealImage` is `false`, the component intentionally renders the honest "Technical Silhouette" fallback instead of fabricating or showing unrelated images.
- **Why this was not replaced arbitrarily:**
  - For Copeland Semi-Hermetic 3DS3R17ME: The archive contains Bitzer semi-hermetics, but **zero Copeland cast-iron semi-hermetics**. Falsely showing a green Bitzer machine on a Copeland Discus card would mislead industrial refrigeration buyers.
  - For Danfoss Maneurop MTZ64: The archive file `danfoss-ntz271...` has "Danfoss NTZ271" baked into the bottom of the image, while `compressor39` has "MT72" on the physical nameplate. Showing an incorrect model number would degrade engineering credibility.

---

### Issue B: Warehouse Floor / Group Inventory Shot (Card #10)
- **Affected Card:**
  - Card #10: **Mitsubishi AC Compressor** (`MITS-ROTARY`)
- **Exact Cause:**
  - In the legacy catalog import, `legacy-04-mitsubishi-ac-compressor` had been pointed to `compressor4-52dac4e5.webp`.
  - Cross-referencing against the source archive revealed this image is identical to `all-brand-ac-compressor-500x500-52dac4e5.webp`, an unbranded photograph of a row of miscellaneous compressors on a wooden warehouse floor.
- **Fix Implemented:**
  - Sourced and verified `/products/airconditionercompressor-source/mitsubishi-rotary-compressor-500x500-2f51735a.webp` (500×500 px).
  - This is an authentic studio photograph showing an isolated black Mitsubishi rotary compressor (`RH313VAMT`) with official Siam Compressor Industry / Mitsubishi Electric badging on a pure white background.
  - Updated `src/data/products.js` to set this image as primary, retaining the legacy photo in the gallery.

---

### Issue C: Close-Up Nameplate Photo (Card #2)
- **Affected Card:**
  - Card #2: **Daikin Scroll Compressor JT160G-P8Y1** (`JT160G-P8Y1`)
- **Exact Cause:**
  - Card #2 was using `/products/legacy/compressor10-b2cafdd3.webp`. This is an authentic workshop photograph taken on the client's shop floor, but tightly cropped onto the compressor cylinder and nameplate label.
- **Fix Implemented:**
  - Identified that `/products/legacy/compressor18-cd943799.webp` is an authentic, full-body studio photograph of a Daikin JT160 scroll compressor (`JT160BCBY1L` on its nameplate).
  - Configured `images: ["/products/legacy/compressor18-cd943799.webp", "/products/legacy/compressor10-b2cafdd3.webp"]`.
  - The main catalogue card now displays the full, clean studio photograph of the Daikin compressor, and the Product Detail Page provides both the studio view and the authentic workshop nameplate photo.

---

## 2. Full Summary of Files Changed

| File Path | Description of Changes |
| :--- | :--- |
| [`src/data/products.js`](file:///c:/Users/AFFAN%20KHAN/OneDrive/Desktop/zcool/Z-Cool-enterprises/src/data/products.js) | 1. **Daikin JT160 (`daikin-jt160g-p8y1`):** Added clean studio photograph as primary image while keeping workshop nameplate photo in gallery.<br>2. **Mitsubishi Rotary (`legacy-04-mitsubishi-ac-compressor`):** Replaced unbranded warehouse floor photo with verified 500×500 studio cutout.<br>3. **LG VRV (`legacy-02-lg-vrv-air-conditioner-compressor`):** Added 2 verified 375×500 high-res gallery angles.<br>4. **Mitsubishi 1.5TR (`legacy-29-1-5-ton-mitsubishi-sci-rotary-compressor`):** Added verified 500×500 secondary photo. |

---

## 3. Product Status & Verification Matrix

| Card # | Product Code & Name | Primary Image Path | Dimensions | Image Type / Status |
| :-: | :--- | :--- | :-: | :--- |
| **#1** | `ZR72KC-TFD` Copeland Scroll | `/ac_compressor.png` | 555×555 | ✅ High-Res Studio Asset |
| **#2** | `JT160G-P8Y1` Daikin Scroll | `/products/legacy/compressor18-cd943799.webp` | 500×500 | ✅ Fixed (Full Studio Photo + Nameplate in Gallery) |
| **#3** | `HQ034P` LG Commercial Rotary | `/ac_compressor_3.png` | 555×555 | ✅ High-Res Studio Asset |
| **#4** | `MTZ64` Danfoss Maneurop Recip | *(None — Awaiting Verified Asset)* | — | ⚠️ Honest Technical Silhouette (MTZ64 photo pending) |
| **#5** | `3DS3R17ME` Copeland Semi-Hermetic | *(None — Awaiting Verified Asset)* | — | ⚠️ Honest Technical Silhouette (Copeland Discus photo pending) |
| **#6** | `JT300` Daikin Inverter Scroll | `/ac_compressor_2.png` | 555×555 | ✅ High-Res Studio Asset |
| **#7** | `1TR-SPLIT` 1 Ton Split AC | `/products/legacy/compressor1-73e93547.webp` | 500×500 | ✅ Authentic Workshop Twin Rotary Photo |
| **#8** | `LG-VRV` LG VRV Compressor | `/products/legacy/compressor2-651af61b.webp` | 375×500 | ✅ 3-Photo Interactive Gallery Configured |
| **#9** | `DUCT-COMM` Ductable AC | `/products/legacy/compressor3-eea3c088.webp` | 500×500 | ✅ Commercial Batch Inventory Photo |
| **#10** | `MITS-ROTARY` Mitsubishi AC | `/products/airconditionercompressor-source/mitsubishi-rotary-compressor-500x500-2f51735a.webp` | 500×500 | ✅ Fixed (Replaced warehouse photo with studio cutout) |
| **#11** | `SAMS-ROTARY` Samsung AC | `/products/legacy/compressor5-cf8223c1.webp` | 500×500 | ✅ Authentic Samsung Rotary Studio Photo |
| **#12** | `ANB52FKRMT` Highly AC | `/products/legacy/compressor6-3d4c0d5e.webp` | 500×500 | ✅ Authentic Workshop Photo with Wiring & Plate |

---

## 4. Products Awaiting Client/Workshop Photography

In adherence to client instructions (*"Do not guess product specifications or assign uncertain images automatically"*):
1. **Danfoss Maneurop MTZ64 (`MTZ64`):** Requires physical workshop photograph of an authentic MTZ64 unit (current archive only has MT72 and NTZ271 with hardcoded labels).
2. **Copeland Discus 3DS3R17ME (`3DS3R17ME`):** Requires physical workshop photograph of an authentic Copeland semi-hermetic compressor (current archive only has Bitzer machines).
