# AIRCONDITIONER.IN COMPRESSOR IMAGE AUDIT REPORT

**Date:** October 24, 2026  
**Source Archive:** `C:\Users\AFFAN KHAN\Downloads\images (3).zip` (6,113,463 bytes)  
**Destination Folder:** `public/products/airconditionercompressor-source/`  
**Status:** Audit Complete — No Live Website or Database Records Modified  

---

## 1. Executive Summary

A comprehensive automated audit was conducted on the 458 images downloaded from `airconditionercompressor.in`.

- **Total Imported Files:** 458 files
- **File Formats:** 457 WebP files, 1 JPEG file
- **Resolution Breakdown:**
  - **High/Medium-Res Images (>250px up to 500×500):** 231 files (50.4%)
  - **Thumbnail Variants (≤250px, mostly 125×125):** 227 files (49.6%)
- **Unique Compressor & Part Subjects:** 168 distinct subjects identified
- **Thumbnail / Resizing Redundancy:** The archive contains dual-resolution sets from the source CMS (typically one 125×125 thumbnail and one or more 500×500 product photos per item).

---

## 2. Cross-Reference Against Existing 45 Catalogue Products (`src/data/products.js`)

### A. High-Confidence Direct Model Matches (Score ≥ 90)
These image sets contain explicit model code strings matching active catalogue items:

| Model Code | Catalogue Product Name | Best Image File | Resolution | Thumbnails Available |
| :--- | :--- | :--- | :--- | :--- |
| **JT125** | Daikin Scroll Compressor JT125 | `daikin-jt125-scroll-compressor-125x125-ead3c188.webp` | 125×125 | 2 thumb(s) |
| **SM185S4RC** | Danfoss Performer Scroll Compressor SM185S4RC | `danfoss-sm185s4rc-scroll-compressor-125x125-e9cc6eb7.webp` | 125×125 | 2 thumb(s) |
| **ZR72KC-TFD** | Copeland Scroll Compressor ZR72KC-TFD | `emerson-copeland-zr72kc-tfd-522-5-ton-compressor-125x125-57b6fcb9.webp` | 125×125 | 1 thumb(s) |
| **LG-VRV** | LG VRV Air Conditioner Compressor | `lg-vrv-air-conditioner-compressor-500x500-1fbb47a7.webp` | 375×500 | 0 thumb(s) |
| **RB233** | Mitsubishi Rotary Compressor RB233 | `mitsubishi-rb233-rotary-compressor-125x125-9f98ac38.webp` | 125×125 | 2 thumb(s) |
| **SBN453** | Panasonic Commercial Scroll Compressor SBN453 | `sbn453-panasonic-scroll-125x125-b2e67fe4.webp` | 125×125 | 3 thumb(s) |
| **ZB150** | Copeland Refrigeration Scroll ZB150 | `zb150-emerson-copeland-125x125-0c439499.webp` | 125×125 | 2 thumb(s) |
| **ZPD72** | Copeland Digital Scroll Compressor ZPD72 | `zpd72-emerson-scroll-compressor-125x125-8994c21d.webp` | 125×125 | 2 thumb(s) |
| **ZR125** | Copeland Scroll Compressor ZR125 | `zr125-emerson-scroll-compressor-125x125-9d8f15ad.webp` | 125×125 | 1 thumb(s) |
| **ZR125** | Copeland Scroll Compressor ZR125 | `zr125-scroll-compressor-125x125-dfd6c425.webp` | 125×125 | 2 thumb(s) |
| **ZR190** | Copeland Scroll Compressor ZR190 | `zr190-emerson-copeland-125x125-e109e862.webp` | 125×125 | 2 thumb(s) |
| **ZR72KC-TFD** | Copeland Scroll Compressor ZR72KC-TFD | `zr72kc-tfd-522-5-5-ton-emerson-copeland-scroll-compressor-12-4df867cb.webp` | 125×125 | 1 thumb(s) |

### B. Medium-Confidence Model Series Matches (Score 70–89)
These image sets match specific product series, capacities, or brand/model combinations:

| Subject / Brand | Potential Catalogue Match | Best Image File | Resolution | Match Details |
| :--- | :--- | :--- | :--- | :--- |
| **1-5-ton-gmcc-rotary-compressor** | GMCC Rotary Compressor 1.5 Ton R22 | `1-5-ton-gmcc-rotary-compressor-5-500x500-10d9a476.webp` | 500×500 | Brand (GMCC) + terms: gmcc, ton |
| **1-5-ton-hitachi-rotary-compressor** | Hitachi Rotary Compressor 1.5 Ton | `1-5-ton-hitachi-rotary-compressor-125x125-fa21d15d.webp` | 125×125 | Brand (Hitachi) + terms: hitachi, ton |
| **1-5-ton-mitsubishi-rotary-compressor** | 1.5 Ton Mitsubishi SCI Rotary Compressor | `1-5-ton-mitsubishi-rotary-compressor-500x500-c4e45459.webp` | 500×500 | Brand (Mitsubishi) + terms: ton, mitsubishi |
| **1-5-ton-mitsubishi-sci-rotary-compressor** | 1.5 Ton Mitsubishi SCI Rotary Compressor | `1-5-ton-mitsubishi-sci-rotary-compressor-125x125-dd9e3c19.webp` | 125×125 | Brand (Mitsubishi) + terms: ton, mitsubishi, sci |
| **1-ton-rotary-highly-compressor** | 1 Ton Rotary Highly Compressor | `1-ton-rotary-highly-compressor-125x125-aae1a117.webp` | 125×125 | Brand (Highly) + terms: ton, highly |
| **daikin-air-conditioner-compressor** | Daikin Air Conditioner Compressor | `daikin-air-conditioner-compressor-125x125-e3a2e153.webp` | 119×125 | Brand (Daikin) + terms: daikin, air, conditioner |
| **danfoss-ntz271-maneurop-reciprocating-compressor** | Danfoss Maneurop Reciprocating Compressor MTZ64 | `danfoss-ntz271-maneurop-reciprocating-compressor-500x500-07b7c45c.webp` | 500×500 | Brand (Danfoss) + terms: danfoss, maneurop |
| **emerson-copeland-compressor-kce** | Copeland Refrigeration Scroll Compressor ZB 114 KCE | `emerson-copeland-compressor-kce-444-500x500-64eceef2.webp` | 499×500 | Brand (Copeland) + terms: copeland, kce |
| **emerson-copeland-compressor-kcn** | Copeland Hermetic Reciprocating Compressor KCN 463 | `emerson-copeland-compressor-kcn-411-125x125-38e64853.webp` | 125×125 | Brand (Copeland) + terms: copeland, kcn |
| **emerson-copeland-compressor-zb-114-kce** | Copeland Refrigeration Scroll Compressor ZB 114 KCE | `emerson-copeland-compressor-zb-114-kce-125x125-9a16b93d.webp` | 125×125 | Brand (Copeland) + terms: copeland, 114, kce |
| **emerson-copeland-compressor-zb-26-kce** | Copeland Refrigeration Scroll Compressor ZB 114 KCE | `emerson-copeland-compressor-zb-26-kce-500x500-945e55c6.webp` | 500×500 | Brand (Copeland) + terms: copeland, kce |
| **emerson-copeland-refrigeration-compressor-in-karnataka** | Copeland Refrigeration Scroll ZB150 | `emerson-copeland-refrigeration-compressor-in-karnataka-500x5-bdc05ad3.webp` | 500×500 | Brand (Copeland) + terms: copeland, refrigeration |
| **gmcc-2-0-tr-rotary-r22-compressor-24840-btu** | GMCC Rotary Compressor 1.5 Ton R22 | `gmcc-2-0-tr-rotary-r22-compressor-24840-btu-125x125-57a81b25.webp` | 125×125 | Brand (GMCC) + terms: gmcc, r22 |
| **hitachi-inverter-scroll-compressor** | Hitachi AC DC Inverter Compressor | `hitachi-inverter-scroll-compressor-125x125-cd2d3b8a.webp` | 125×102 | Brand (Hitachi) + terms: hitachi, inverter |
| **hitachi-rotary-compressor-1-5-ton** | Hitachi Rotary Compressor 1.5 Ton | `hitachi-rotary-compressor-1-5-ton-125x125-660253b8.webp` | 125×125 | Brand (Hitachi) + terms: hitachi, ton |
| **inverter-compressor-daikin-vrv** | Daikin Inverter Scroll Compressor JT300 | `inverter-compressor-daikin-vrv-500x500-6028a222.webp` | 500×500 | Brand (Daikin) + terms: daikin, inverter |
| **rotary-1-5-ton-r22-gmcc-highly-toshiba-panasonic-mitsubishi-** | GMCC Rotary Compressor 1.5 Ton R22 | `rotary-1-5-ton-r22-gmcc-highly-toshiba-panasonic-mitsubishi--34de369a.webp` | 125×125 | Brand (GMCC) + terms: gmcc, ton, r22 |
| **zb58kqe-tfd-emerson-copeland-scroll-compressor** | Copeland Scroll Compressor ZR72KC-TFD | `zb58kqe-tfd-emerson-copeland-scroll-compressor-500x500-25ccbdf2.webp` | 375×500 | Brand (Copeland) + terms: copeland, tfd |
| **zp61k3etfd-emerson-copeland-scroll-compressor** | Copeland Scroll Compressor ZR72KC-TFD | `zp61k3etfd-emerson-copeland-scroll-compressor-125x125-4cc5e508.webp` | 125×125 | Brand (Copeland) + terms: copeland, tfd |
| **zr57kce-emerson-copeland** | Copeland Refrigeration Scroll Compressor ZB 114 KCE | `zr57kce-emerson-copeland-125x125-2804edd9.webp` | 125×125 | Brand (Copeland) + terms: copeland, kce |

### C. Brand & Partial Keyword Matches (Score 50–69)
These images match catalogue brands (Daikin, Copeland, Danfoss, Carrier, Mitsubishi, GMCC, Highly, Hitachi, Panasonic, etc.) but require visual nameplate verification:

| Subject Key | Potential Brand Match | Best Image File | Resolution | Total Images |
| :--- | :--- | :--- | :--- | :--- |
| **1-ton-panasonic-rotary-compressor** | Panasonic (Panasonic Commercial Scroll Compressor SBN453) | `1-ton-panasonic-rotary-compressor-125x125-07fe24de.webp` | 125×125 | 2 file(s) |
| **bitzer-4ees-4y-semi-hermatic-compressors** |  (Scroll Compressors) | `bitzer-4ees-4y-semi-hermatic-compressors-125x125-51d6f3bc.webp` | 125×124 | 2 file(s) |
| **compressor-mtz50-danfoss** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `compressor-mtz50-danfoss-125x125-3da55db9.webp` | 119×125 | 1 file(s) |
| **copeland-scroll-compressor** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `copeland-scroll-compressor-500x500-27d7b3cc.webp` | 500×500 | 5 file(s) |
| **cr30-2-ton-emerson-copeland-compressor** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `cr30-2-ton-emerson-copeland-compressor-500x500-54921192.webp` | 500×500 | 5 file(s) |
| **daikin-jt265d-scroll-compressor** | Daikin (Daikin Scroll Compressor JT160G-P8Y1) | `daikin-jt265d-scroll-compressor-500x500-f034a64a.webp` | 500×500 | 4 file(s) |
| **daikin-refrigeration-compressors** | Daikin (Daikin Scroll Compressor JT160G-P8Y1) | `daikin-refrigeration-compressors-125x125-99384e6c.webp` | 121×125 | 1 file(s) |
| **danfoss-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `danfoss-compressor-125x125-18e5a6ae.webp` | 125×125 | 4 file(s) |
| **danfoss-compressor-mt22** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `danfoss-compressor-mt22-125x125-02071536.webp` | 125×125 | 3 file(s) |
| **danfoss-compressor-sm** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `danfoss-compressor-sm-110-500x500-07e09578.webp` | 500×500 | 8 file(s) |
| **danfoss-reciprocating-compressors** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `danfoss-reciprocating-compressors-125x125-a70e5edf.webp` | 125×125 | 2 file(s) |
| **danfoss-scroll-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `danfoss-scroll-compressor-5-500x500-0fcacb35.webp` | 500×500 | 1 file(s) |
| **danfoss-scroll-compressor-sh** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `danfoss-scroll-compressor-sh-240-500x500-03abdd7f.webp` | 500×334 | 1 file(s) |
| **danfoss-scroll-compressor-sm120** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `danfoss-scroll-compressor-sm120-125x125-039ebd8e.webp` | 125×125 | 1 file(s) |
| **danfoss-sz185-scroll-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `danfoss-sz185-scroll-compressor-500x500-6a22908c.webp` | 500×500 | 5 file(s) |
| **emerson-copeland-compressor-vr61** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `emerson-copeland-compressor-vr61-125x125-7e0541ca.webp` | 125×125 | 1 file(s) |
| **emerson-copeland-scroll-compressor** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `emerson-copeland-scroll-compressor-125x125-d66cab1c.webp` | 125×125 | 1 file(s) |
| **emerson-copeland-scroll-zr250** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `emerson-copeland-scroll-zr250-500x500-6a005ac7.webp` | 500×500 | 5 file(s) |
| **emerson-copeland-zpd83** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `emerson-copeland-zpd83-125x125-25358131.webp` | 125×125 | 2 file(s) |
| **emerson-copeland-zr-94-compressor** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `emerson-copeland-zr-94-compressor-125x125-3eba0cf9.webp` | 125×125 | 1 file(s) |
| **gmcc-rotary-refrigeration-compressor** | GMCC (GMCC Rotary Compressor 1.5 Ton R22) | `gmcc-rotary-refrigeration-compressor-1-500x500-5e31b3e1.webp` | 500×500 | 2 file(s) |
| **highly-ate800-dc-inverter-rotary** | Highly (1 Ton Rotary Highly Compressor) | `highly-ate800-dc-inverter-rotary-500x500-1c9fc8dc.webp` | 500×500 | 5 file(s) |
| **highly-ath356-rotary** | Highly (1 Ton Rotary Highly Compressor) | `highly-ath356-rotary-125x125-e79b07c4.webp` | 125×125 | 1 file(s) |
| **highly-gsh218uy-compressor** | Highly (1 Ton Rotary Highly Compressor) | `highly-gsh218uy-compressor-125x125-499959bc.webp` | 125×125 | 3 file(s) |
| **highly-te800rc-rotary-scroll-compressor** | Highly (1 Ton Rotary Highly Compressor) | `highly-te800rc-rotary-scroll-compressor-125x125-fd3b1ec9.webp` | 125×125 | 2 file(s) |
| **highly-whp18000asc-rotary-compressor** | Highly (1 Ton Rotary Highly Compressor) | `highly-whp18000asc-rotary-compressor-500x500-843e6352.webp` | 375×500 | 3 file(s) |
| **hitachi-603-scroll-compressor** | Hitachi (Hitachi Rotary Compressor 1.5 Ton) | `hitachi-603-scroll-compressor-500x500-4ef8ff2a.webp` | 500×500 | 4 file(s) |
| **hitachi-all-air-conditioners-compressor** | Hitachi (Hitachi Rotary Compressor 1.5 Ton) | `hitachi-all-air-conditioners-compressor-125x125-17517692.webp` | 125×125 | 3 file(s) |
| **hlj072t4lc6-danfoss-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `hlj072t4lc6-danfoss-compressor-125x125-34069694.webp` | 125×125 | 1 file(s) |
| **hrm042-danfoss-scroll-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `hrm042-danfoss-scroll-compressor-125x125-cb93b107.webp` | 109×125 | 1 file(s) |
| **kcm511cal-emerson-copeland-compressor** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `kcm511cal-emerson-copeland-compressor-125x125-a80f2b61.webp` | 125×125 | 1 file(s) |
| **ltz40hl4ave-danfoss-scroll-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `ltz40hl4ave-danfoss-scroll-compressor-125x125-29df965f.webp` | 125×125 | 1 file(s) |
| **mitsubishi-rb174-rotary-compressor** | Mitsubishi (Mitsubishi AC Compressor) | `mitsubishi-rb174-rotary-compressor-125x125-69fa646d.webp` | 125×100 | 1 file(s) |
| **mitsubishi-rotary-compressor** | Mitsubishi (Mitsubishi AC Compressor) | `mitsubishi-rotary-compressor-500x500-2f51735a.webp` | 500×500 | 3 file(s) |
| **mt22-danfoss-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `mt22-danfoss-compressor-500x500-64731e60.webp` | 375×500 | 3 file(s) |
| **mtz125-danfoss-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `mtz125-danfoss-compressor-125x125-5c26775c.webp` | 125×125 | 2 file(s) |
| **panasonic-2-ton-rotary-compressor** | Panasonic (Panasonic Commercial Scroll Compressor SBN453) | `panasonic-2-ton-rotary-compressor-125x125-9e3eeeba.webp` | 125×125 | 2 file(s) |
| **panasonic-2p21t225az-rotary-compressor** | Panasonic (Panasonic Commercial Scroll Compressor SBN453) | `panasonic-2p21t225az-rotary-compressor-125x125-65ac8792.webp` | 125×125 | 1 file(s) |
| **panasonic-2v42s225aua-rotary-compressor** | Panasonic (Panasonic Commercial Scroll Compressor SBN453) | `panasonic-2v42s225aua-rotary-compressor-125x125-7c02767b.webp` | 125×125 | 2 file(s) |
| **panasonic-sb453-scroll-compressor** | Panasonic (Panasonic Commercial Scroll Compressor SBN453) | `panasonic-sb453-scroll-compressor-125x125-65e3f5ce.webp` | 125×125 | 3 file(s) |
| **panasonic-scn603-scroll-compressor** | Panasonic (Panasonic Commercial Scroll Compressor SBN453) | `panasonic-scn603-scroll-compressor-125x125-09f99f24.webp` | 125×125 | 2 file(s) |
| **panasonic-scn903h8a-scroll-compressor** | Panasonic (Panasonic Commercial Scroll Compressor SBN453) | `panasonic-scn903h8a-scroll-compressor-125x125-adbee8fb.webp` | 125×125 | 1 file(s) |
| **rotary-compressor-gmcc-highly-panasonic-lg-samsung** | Samsung (Samsung AC Compressor) | `rotary-compressor-gmcc-highly-panasonic-lg-samsung-125x125-4f004d52.webp` | 104×125 | 1 file(s) |
| **rotary-highly-compressor** | Highly (1 Ton Rotary Highly Compressor) | `rotary-highly-compressor-125x125-956cb3a1.webp` | 119×125 | 1 file(s) |
| **samsung-ac-compressor** | Samsung (Samsung AC Compressor) | `samsung-ac-compressor-500x500-cf2b1243.webp` | 466×500 | 5 file(s) |
| **samsung-rotary-compressor-1-5-ton** | Samsung (Samsung AC Compressor) | `samsung-rotary-compressor-1-5-ton-125x125-00e8171b.webp` | 125×125 | 2 file(s) |
| **samsung-rotary-compressor-2ton** | Samsung (Samsung AC Compressor) | `samsung-rotary-compressor-2ton-125x125-5cf3fe4c.webp` | 125×125 | 3 file(s) |
| **samsung-rotary-ds4g-dc-inverter-rotary** | Samsung (Samsung AC Compressor) | `samsung-rotary-ds4g-dc-inverter-rotary-125x125-cce4472b.webp` | 125×125 | 1 file(s) |
| **samsung-vrv-air-conditioner-compressor** | Samsung (Samsung AC Compressor) | `samsung-vrv-air-conditioner-compressor-125x125-f489fd59.webp` | 125×125 | 1 file(s) |
| **sh140-danfoss-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `sh140-danfoss-compressor-125x125-c48e8969.webp` | 125×125 | 1 file(s) |
| **sm110-danfoss-scroll-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `sm110-danfoss-scroll-compressor-500x500-79956953.webp` | 319×500 | 3 file(s) |
| **sm160-danfoss-small-domb-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `sm160-danfoss-small-domb-compressor-125x125-01574263.webp` | 125×125 | 2 file(s) |
| **sy-240-danfoss-scroll-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `sy-240-danfoss-scroll-compressor-1-500x500-5c9c62c0.webp` | 500×500 | 1 file(s) |
| **sy240-danfoss-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `sy240-danfoss-compressor-125x125-34f4fa9c.webp` | 125×125 | 2 file(s) |
| **sy300-danfoss-scroll-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `sy300-danfoss-scroll-compressor-125x125-43d40407.webp` | 125×125 | 1 file(s) |
| **sz185-danfoss-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `sz185-danfoss-compressor-125x125-185e9d0f.webp` | 125×125 | 2 file(s) |
| **sz185-danfoss-scroll-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `sz185-danfoss-scroll-compressor-125x125-79ef5db5.webp` | 125×125 | 2 file(s) |
| **vzh044-danfoss-compressor** | Danfoss (Danfoss Maneurop Reciprocating Compressor MTZ64) | `vzh044-danfoss-compressor-125x125-6b6993a8.webp` | 125×125 | 2 file(s) |
| **zp29k5e-emerson-copeland** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `zp29k5e-emerson-copeland-125x125-2d5bf924.webp` | 125×125 | 1 file(s) |
| **zr16m3e-twd-551-scroll-copeland-compressor** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `zr16m3e-twd-551-scroll-copeland-compressor-500x500-775b1da7.webp` | 379×500 | 2 file(s) |
| **zr19m3e-emerson-copeland-scroll-compressor** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `zr19m3e-emerson-copeland-scroll-compressor-125x125-170d09c4.webp` | 125×125 | 2 file(s) |
| **zxi15-emerson-copeland** | Copeland (Copeland Scroll Compressor ZR72KC-TFD) | `zxi15-emerson-copeland-125x125-7f364dd5.webp` | 125×125 | 3 file(s) |

---

## 3. Ambiguous Items & New Models (Requires Manual Confirmation)

The source archive also includes 87 unique product/equipment subjects that do NOT currently exist in the 45-product catalogue or are generic:

### 1. New Commercial / Industrial Compressor Models (Not in 45 Catalogue)
- **Bitzer Semi-Hermetic Reciprocating Compressors:**
  - `bitzer-4ces-9y` (Chiller compressor)
  - `bitzer-4ees-4y-semi-hermatic-compressors`
  - `bitzer-4pes-12y-40p-compressor` (375×500 WebP)
  - `bitzer-compressor-6ge-34y`
  - `bitzer-chiller-compressor`
- **Danfoss / Maneurop:**
  - `compressor-mtz50-danfoss`
  - `danfoss-ntz271-maneurop-reciprocating-compressor` (500×500)
- **Carrier / Carlyle Semi-Hermetic:**
  - `carrier-06e-semi-hermetic-compressor`
  - `carlyle-semi-hermetic-compressor`
- **Frascold Semi-Hermetic:**
  - `frascold-semi-hermetic-chiller-compressor`
- **Sanyo / Panasonic Scroll:**
  - `sanyo-c-sb373h8a-scroll-compressor`
  - `sanyo-scroll-compressor`
- **Bock / Dorin Semi-Hermetic:**
  - `semi-hermetic-bock-compressor`
  - `dorin-semi-hermetic-compressor`

### 2. Generic Or Multi-Unit Images
- `all-brand-ac-compressor` (Group warehouse shot of multiple compressors)
- `all-typs-of-ac-compressor` (Display lineup)
- `1-5-ton-air-conditioning-compressor` (Unbranded generic unit photo)
- `2-ton-air-conditioner-compressor` (Unbranded rotary unit)

### 3. Auxiliary Non-Compressor HVAC Parts
- `air-conditioners-indoor-motor` (Blower fan motor)
- `copper-pipe-fittings` / `refrigeration-valves`

---

## 4. Technical File & Thumbnail Audit Summary

```
Total Raw Files:        458
Unique Content Hashes:  458
Unique Product Topics:  168
- Full Images (500x500 / 375x500): 231
- Thumbnails (125x125 / 100x125):  227
```

> [!IMPORTANT]
> **Resolution Recommendation:**  
> When selecting images to link to catalogue products in `src/data/products.js`, always use the **`-500x500-`** full-resolution files rather than the **`-125x125-`** thumbnail variants. The thumbnails are too low-resolution for modern responsive product detail views.

---

## 5. Compliance & Safety Reminder

As documented in `IMAGE_RIGHTS_REGISTER.md`:
- Images sourced from third-party websites must be reviewed for watermarks, copyright ownership, or proprietary labels before being set as primary product images.
- Unverified photos must retain the `imageType: "representative"` flag with the honest disclaimer: *"Representative compressor image — confirm exact model and suffix by nameplate."*
