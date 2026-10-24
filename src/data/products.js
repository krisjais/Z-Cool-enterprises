// Central database of industrial products in Z Cool Enterprises catalog
// Reconciled against PRODUCT_DATA_RECONCILIATION.md and LEGACY_PRODUCT_IMAGE_MAP.csv
// Phase 3.3 Active Catalogue: 6 Core records (including unified Daikin JT160) + 39 Migrated Legacy Records = 45 Verified Catalogue Products

export const PRODUCTS_CATALOG = [
{
    "id": "copeland-zr72kc-tFD",
    "code": "ZR72KC-TFD",
    "catalogCode": "Z-COP-ZR72",
    "name": "Copeland Scroll Compressor ZR72KC-TFD",
    "brand": "Copeland",
    "tagline": "Commercial Air-Conditioning Orbital Scroll Compressor",
    "category": "Scroll Compressors",
    "type": "Hermetic Scroll",
    "condition": "Sourcing Reference",
    "availability": "Sourcing Reference",
    "voltage": "380V–415V, 3-Phase, 50Hz",
    "displacement": "17.1 m³/h (50 Hz)",
    "coolingCapacity": "72,000 BTU/h (6 TR)",
    "refrigerant": "R22 / R407C Compatible",
    "application": "Commercial ducted AC & chillers",
    "accentColor": "#0E4B75",
    "statusBadge": "Sourcing Reference",
    "verificationStatus": "Sourcing Reference",
    "imageType": "representative",
    "imageDisclaimer": "Representative scroll image — confirm exact suffix by nameplate.",
    "shortDescription": "Orbital scroll compressor sourced for commercial package units, ducted systems, and liquid chillers.",
    "description": "High-performance orbital scroll compressor for commercial package units, ducted systems, and liquid chillers. Sourced for replacement and displacement matching.",
    "keySpecs": [
      {
        "label": "Rated Capacity",
        "value": "72,000 BTU/h (6 TR)"
      },
      {
        "label": "Electrical",
        "value": "380V–415V, 3-Phase, 50Hz"
      },
      {
        "label": "Primary Use",
        "value": "Commercial ducted AC & chillers"
      }
    ],
    "compatibility": [
      "Daikin",
      "Carrier",
      "Blue Star",
      "Voltas",
      "Trane",
      "Emerson"
    ],
    "compatDetails": {
      "Daikin": "Drop-in displacement replacement for compatible Daikin package units.",
      "Carrier": "Fits Carrier 6-Ton commercial ductable frames.",
      "Blue Star": "Direct match for Blue Star commercial chiller circuits.",
      "Voltas": "Matches Voltas commercial HVAC unit mounting feet.",
      "Trane": "Compatible with Trane packaged rooftop systems."
    },
    "images": [
      "/ac_compressor.png"
    ],
    "specs": {
      "electrical": {
        "Input Voltage": "380V - 415V, 3-Phase, 50Hz",
        "Nominal HP": "6.0 HP",
        "RLA": "11.5 A"
      },
      "thermal": {
        "Cooling Capacity": "72,000 BTU/h (6 TR)",
        "Displacement": "17.1 m³/h (50 Hz)",
        "Application": "Medium / High Temp Air Conditioning"
      },
      "mechanical": {
        "Suction Line Size": "7/8 in ODF",
        "Discharge Line Size": "1/2 in ODF",
        "Mounting Footprint": "190.5 mm x 190.5 mm",
        "Net Weight": "38.5 kg"
      }
    }
  },
  {
    "id": "daikin-jt160g-p8y1",
    "code": "JT160G-P8Y1",
    "catalogCode": "Z-DAI-JT160",
    "name": "Daikin Scroll Compressor JT160G-P8Y1",
    "brand": "Daikin",
    "tagline": "Commercial Scroll Compressor for Packaged AC & Chillers",
    "category": "Scroll Compressors",
    "type": "Hermetic Scroll",
    "condition": "Sourcing Reference",
    "availability": "Enquire for availability",
    "voltage": "380V–415V, 3-Phase, 50Hz",
    "displacement": "15.2 m³/h (50 Hz)",
    "coolingCapacity": "60,000 BTU/h (5 TR)",
    "refrigerant": "R410A Compatible",
    "application": "Packaged AC & modular chillers",
    "accentColor": "#0E4B75",
    "statusBadge": "Nameplate Verified · Sourcing Reference",
    "verificationStatus": "Nameplate Verified · Sourcing Reference",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic workshop nameplate photograph from client legacy catalogue.",
    "shortDescription": "Commercial scroll compressor for packaged air conditioners, condensing units, and modular chillers.",
    "description": "Original Daikin hermetic scroll compressor verified from client legacy catalogue (Item #10: Daikin Refrigeration Compressors). Authentic workshop photograph confirms JT160 series nameplate.",
    "keySpecs": [
      {
        "label": "Rated Capacity",
        "value": "60,000 BTU/h (5 TR)"
      },
      {
        "label": "Electrical",
        "value": "380V–415V, 3-Phase, 50Hz"
      },
      {
        "label": "Primary Use",
        "value": "Packaged AC & modular chillers"
      }
    ],
    "compatibility": [
      "Daikin",
      "McQuay",
      "York"
    ],
    "compatDetails": {
      "Daikin": "Original OEM specification for Daikin commercial condensing units.",
      "McQuay": "Matches McQuay air-cooled water chiller circuits."
    },
    "images": [
      "/products/legacy/compressor18-cd943799.webp",
      "/products/legacy/compressor10-b2cafdd3.webp"
    ],
    "specs": {
      "electrical": {
        "Input Voltage": "380V - 415V, 3-Phase, 50Hz",
        "Nominal HP": "5.0 HP",
        "RLA": "9.8 A"
      },
      "thermal": {
        "Cooling Capacity": "60,000 BTU/h (5 TR)",
        "Displacement": "15.2 m³/h (50 Hz)",
        "Application": "Commercial AC & Chillers"
      },
      "mechanical": {
        "Suction Line Size": "7/8 in ODF",
        "Discharge Line Size": "1/2 in ODF",
        "Net Weight": "36.0 kg"
      }
    },
    "legacyTitle": "Daikin Refrigeration Compressors",
    "legacyOrder": 10
  },
  {
    "id": "lg-hq034p-rotary",
    "code": "HQ034P",
    "catalogCode": "Z-LG-HQ034",
    "name": "LG Commercial Rotary Compressor HQ034P",
    "brand": "LG",
    "tagline": "Commercial Rotary Compressor for Cassette & Split AC",
    "category": "Rotary Compressors",
    "type": "Commercial Rotary",
    "condition": "Awaiting Nameplate Confirmation",
    "availability": "Awaiting Confirmation",
    "voltage": "220V–240V, 1-Phase, 50Hz",
    "displacement": "34.0 cc/rev",
    "coolingCapacity": "36,000 BTU/h Class",
    "refrigerant": "R32 / R410A",
    "application": "Commercial split & cassette AC",
    "accentColor": "#0E4B75",
    "statusBadge": "Nameplate Check Needed",
    "verificationStatus": "Nameplate Check Needed",
    "imageType": "representative",
    "imageDisclaimer": "Representative canister — verify model & accumulator by nameplate.",
    "shortDescription": "Compact rotary compressor for commercial cassette air conditioning and light commercial split plants.",
    "description": "Compact rotary compressor designed for commercial cassette air conditioning and light commercial split plants.",
    "keySpecs": [
      {
        "label": "Displacement",
        "value": "34.0 cc/rev"
      },
      {
        "label": "Electrical",
        "value": "220V–240V, 1-Phase, 50Hz"
      },
      {
        "label": "Primary Use",
        "value": "Commercial split & cassette AC"
      }
    ],
    "compatibility": [
      "LG",
      "Lloyd",
      "Voltas",
      "O General"
    ],
    "compatDetails": {
      "LG": "Direct fit for LG Commercial Multi-Split & Cassette systems.",
      "Voltas": "Standard mounting configuration for Voltas 3-Ton cassette units."
    },
    "images": [
      "/ac_compressor_3.png"
    ],
    "specs": {
      "electrical": {
        "Input Voltage": "220V - 240V, 1-Phase, 50Hz",
        "Nominal HP": "3.0 HP",
        "RLA": "13.2 A"
      },
      "thermal": {
        "Displacement": "34.0 cc/rev",
        "Application": "Cassette & Ductable Air Conditioning"
      },
      "mechanical": {
        "Suction Connection": "5/8 in ODF",
        "Discharge Connection": "3/8 in ODF",
        "Net Weight": "24.5 kg"
      }
    }
  },
  {
    "id": "danfoss-maneurop-mtz64",
    "code": "MTZ64",
    "catalogCode": "Z-DAN-MTZ64",
    "name": "Danfoss Maneurop Reciprocating Compressor MTZ64",
    "brand": "Danfoss",
    "tagline": "Heavy-Duty Reciprocating Compressor for Cold Storage & Chillers",
    "category": "Reciprocating Compressors",
    "type": "Hermetic Reciprocating",
    "condition": "Photo Pending",
    "availability": "Sourcing Reference",
    "voltage": "380V–400V, 3-Phase, 50Hz",
    "displacement": "107.7 cc/rev",
    "coolingCapacity": "5.5 HP Class",
    "refrigerant": "R404A / R134a / R407C",
    "application": "Cold storage & refrigeration",
    "accentColor": "#0E4B75",
    "statusBadge": "Photo Pending",
    "verificationStatus": "Photo Pending",
    "imageType": "placeholder",
    "imageDisclaimer": "Technical silhouette — physical Maneurop photo awaiting verification.",
    "shortDescription": "Heavy-duty reciprocating compressor with rotolock fittings for walk-in cold rooms and refrigeration plants.",
    "description": "Heavy-duty Danfoss Maneurop MTZ series reciprocating compressor designed for demanding cold storage rooms and commercial refrigeration.",
    "keySpecs": [
      {
        "label": "Displacement",
        "value": "107.7 cc/rev"
      },
      {
        "label": "Electrical",
        "value": "380V–400V, 3-Phase, 50Hz"
      },
      {
        "label": "Primary Use",
        "value": "Cold storage & refrigeration"
      }
    ],
    "compatibility": [
      "Danfoss",
      "Bitzer",
      "Copeland",
      "Carrier"
    ],
    "compatDetails": {
      "Danfoss": "OEM replacement for Maneurop MTZ64 / MT72 series.",
      "Carrier": "Used in Carrier cold room condensing units."
    },
    "images": [],
    "specs": {
      "electrical": {
        "Input Voltage": "380V - 400V, 3-Phase, 50Hz",
        "Nominal HP": "5.5 HP",
        "RLA": "10.5 A"
      },
      "thermal": {
        "Displacement": "107.7 cc/rev",
        "Application": "Medium & Low Temp Refrigeration",
        "Oil Charge": "POE 160PZ"
      },
      "mechanical": {
        "Suction Rotolock": "1-3/4 in",
        "Discharge Rotolock": "1-1/4 in",
        "Net Weight": "37.0 kg"
      }
    }
  },
  {
    "id": "copeland-discus-semihermetic",
    "code": "3DS3R17ME",
    "catalogCode": "Z-COP-DISCUS",
    "name": "Copeland Semi-Hermetic Compressor 3DS3R17ME",
    "brand": "Copeland",
    "tagline": "Industrial Heavy Refrigeration Semi-Hermetic Machine",
    "category": "Reciprocating Compressors",
    "type": "Semi-Hermetic Reciprocating",
    "condition": "Sourcing Confirmation Needed",
    "availability": "Offline Sourcing Only",
    "voltage": "380V–415V, 3-Phase, 50Hz",
    "displacement": "50.0 m³/h",
    "coolingCapacity": "15.0 HP Class",
    "refrigerant": "R404A / R507 / R22",
    "application": "Industrial cold storage & rack systems",
    "accentColor": "#0E4B75",
    "statusBadge": "Sourcing Confirmation Needed",
    "verificationStatus": "Sourcing Confirmation Needed",
    "imageType": "placeholder",
    "imageDisclaimer": "Technical silhouette — semi-hermetic photo awaiting confirmation.",
    "shortDescription": "Multi-cylinder cast-iron semi-hermetic compressor built for extreme industrial refrigeration duty and rack systems.",
    "description": "Heavy industrial Copeland Discus semi-hermetic compressor built for extreme refrigeration duty, cold storage plants, and multi-compressor rack systems.",
    "keySpecs": [
      {
        "label": "Displacement",
        "value": "50.0 m³/h"
      },
      {
        "label": "Electrical",
        "value": "380V–415V, 3-Phase, 50Hz"
      },
      {
        "label": "Primary Use",
        "value": "Industrial cold storage & rack systems"
      }
    ],
    "compatibility": [
      "Copeland",
      "Emerson",
      "Bitzer",
      "Dorin"
    ],
    "compatDetails": {
      "Copeland": "Original Copeland Discus valve design.",
      "Bitzer": "Mounting adaptation available for supermarket racks."
    },
    "images": [],
    "specs": {
      "electrical": {
        "Input Voltage": "380V - 415V, 3-Phase, 50Hz",
        "Nominal HP": "15.0 HP",
        "RLA": "28.0 A"
      },
      "thermal": {
        "Displacement": "50.0 m³/h",
        "Application": "Industrial Low & Medium Temperature Refrigeration"
      },
      "mechanical": {
        "Suction Valve": "1-3/8 in",
        "Discharge Valve": "1-1/8 in",
        "Net Weight": "145.0 kg"
      }
    }
  },
  {
    "id": "daikin-vrv-inverter-jt300",
    "code": "JT300",
    "catalogCode": "Z-DAI-VRV300",
    "name": "Daikin Inverter Scroll Compressor JT300",
    "brand": "Daikin",
    "tagline": "Inverter Scroll Compressor for Daikin VRV Systems",
    "category": "VRF / DC Inverter",
    "type": "DC Inverter Scroll",
    "condition": "Sourcing Reference",
    "availability": "Sourcing Reference",
    "voltage": "380V–415V (Inverter Drive)",
    "displacement": "Variable Speed",
    "coolingCapacity": "10.0 HP Class",
    "refrigerant": "R410A",
    "application": "VRV commercial outdoor units",
    "accentColor": "#0E4B75",
    "statusBadge": "Sourcing Reference",
    "verificationStatus": "Sourcing Reference",
    "imageType": "representative",
    "imageDisclaimer": "Representative profile — confirm inverter model by nameplate.",
    "shortDescription": "Variable-speed inverter scroll compressor engineered for multi-zone VRV commercial outdoor condensing units.",
    "description": "Precision DC Inverter scroll compressor specifically calibrated for Daikin VRV variable refrigerant flow outdoor units.",
    "keySpecs": [
      {
        "label": "Nominal Rating",
        "value": "10.0 HP Class"
      },
      {
        "label": "Drive Type",
        "value": "Inverter Drive (380V–415V)"
      },
      {
        "label": "Primary Use",
        "value": "VRV commercial outdoor units"
      }
    ],
    "compatibility": [
      "Daikin"
    ],
    "compatDetails": {
      "Daikin": "Matches Daikin VRV IV RXQ / RXYQ outdoor unit models."
    },
    "images": [
      "/ac_compressor_2.png"
    ],
    "specs": {
      "electrical": {
        "Input Voltage": "DC Inverter Controlled (380V Drive)",
        "Nominal HP": "10.0 HP",
        "Control": "Variable Frequency Drive"
      },
      "thermal": {
        "Application": "VRV Variable Refrigerant Flow"
      },
      "mechanical": {
        "Mounting": "Original Daikin Vibration Isolation",
        "Net Weight": "41.0 kg"
      }
    }
  },
  {
    "id": "legacy-01-1ton-split-ac-compressor",
    "code": "1TR-SPLIT",
    "catalogCode": "Z-LEG-01",
    "name": "1 Ton Split AC Compressor",
    "legacyTitle": "1ton Split Ac Compressor",
    "legacyOrder": 1,
    "brand": "Generic / Multi-Brand",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Category Listing · Workshop Photo",
    "verificationStatus": "Category Listing · Workshop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue photograph — confirm exact brand and model on nameplate before ordering.",
    "shortDescription": "1.0 Ton split air conditioner rotary compressor entry recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (1ton Split Ac Compressor). Authentic workshop photograph depicts twin rotary units on workbench. Available for replacement sourcing and displacement matching.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Generic / Multi-Brand"
      },
      {
        "label": "Model Series",
        "value": "1TR-SPLIT"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor1-73e93547.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #1 of 40",
        "Original Legacy Title": "1ton Split Ac Compressor",
        "Manufacturer Brand": "Generic / Multi-Brand",
        "Model Reference": "1TR-SPLIT",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Category Listing · Workshop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-02-lg-vrv-air-conditioner-compressor",
    "code": "LG-VRV",
    "catalogCode": "Z-LEG-02",
    "name": "LG VRV Air Conditioner Compressor",
    "legacyTitle": "LG VRV Air Conditioner Compressor",
    "legacyOrder": 2,
    "brand": "LG",
    "tagline": "Historical Catalogue Entry · VRF / DC Inverter",
    "category": "VRF / DC Inverter",
    "type": "VRF / Inverter Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand Verified · Model Pending Nameplate",
    "verificationStatus": "Brand Verified · Model Pending Nameplate",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue photograph — confirm exact Multi-V suffix on nameplate.",
    "shortDescription": "LG commercial VRV / VRF air conditioning compressor recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (LG VRV Air Conditioner Compressor). Authentic workshop photograph confirms LG commercial cylindrical compressor. Sourced for commercial Multi-V system replacement.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "LG"
      },
      {
        "label": "Model Series",
        "value": "LG-VRV"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor2-651af61b.webp",
      "/products/airconditionercompressor-source/lg/lg-vrv-air-conditioner-compressor-500x500-1fbb47a7.webp",
      "/products/airconditionercompressor-source/lg/lg-vrv-air-conditioner-compressor-500x500-fbb569e3.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #2 of 40",
        "Original Legacy Title": "LG VRV Air Conditioner Compressor",
        "Manufacturer Brand": "LG",
        "Model Reference": "LG-VRV",
        "Assigned Category": "VRF / DC Inverter",
        "Asset Verification": "Brand Verified · Model Pending Nameplate"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-03-ductable-air-conditioner-compressor",
    "code": "DUCT-COMM",
    "catalogCode": "Z-LEG-03",
    "name": "Ductable Air Conditioner Compressor",
    "legacyTitle": "Ductable Air Conditioner Compressor",
    "legacyOrder": 3,
    "brand": "Generic / Commercial",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Commercial Batch · Workshop Photo",
    "verificationStatus": "Commercial Batch · Workshop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue photograph showing commercial ductable inventory.",
    "shortDescription": "Commercial ductable air conditioner compressor batch listing recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Ductable Air Conditioner Compressor). Authentic workshop photograph displays 4 commercial packaged-unit compressors. Sourced for commercial ducted systems.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Generic / Commercial"
      },
      {
        "label": "Model Series",
        "value": "DUCT-COMM"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor3-eea3c088.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #3 of 40",
        "Original Legacy Title": "Ductable Air Conditioner Compressor",
        "Manufacturer Brand": "Generic / Commercial",
        "Model Reference": "DUCT-COMM",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Commercial Batch · Workshop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-04-mitsubishi-ac-compressor",
    "code": "MITS-ROTARY",
    "catalogCode": "Z-LEG-04",
    "name": "Mitsubishi AC Compressor",
    "legacyTitle": "Mitsubishi AC Compressor",
    "legacyOrder": 4,
    "brand": "Mitsubishi",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand Verified · Model Pending Nameplate",
    "verificationStatus": "Brand Verified · Model Pending Nameplate",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue photograph — confirm model suffix on physical nameplate.",
    "shortDescription": "Mitsubishi air conditioner rotary compressor recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Mitsubishi AC Compressor). Authentic overhead workshop photograph shows Mitsubishi rotary compressor units. Sourced for split and cassette AC replacement.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Model Series",
        "value": "MITS-ROTARY"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/airconditionercompressor-source/mitsubishi/mitsubishi-rotary-compressor-500x500-2f51735a.webp",
      "/products/legacy/compressor4-52dac4e5.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #4 of 40",
        "Original Legacy Title": "Mitsubishi AC Compressor",
        "Manufacturer Brand": "Mitsubishi",
        "Model Reference": "MITS-ROTARY",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Brand Verified · Model Pending Nameplate"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-05-samsung-ac-compressor",
    "code": "SAMS-ROTARY",
    "catalogCode": "Z-LEG-05",
    "name": "Samsung AC Compressor",
    "legacyTitle": "Samsung Ac Compressor",
    "legacyOrder": 5,
    "brand": "Samsung",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand Verified · Model Pending Nameplate",
    "verificationStatus": "Brand Verified · Model Pending Nameplate",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue studio photograph — confirm exact capacity and suffix.",
    "shortDescription": "Samsung air conditioner rotary compressor recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Samsung Ac Compressor). Authentic studio photograph portrays black Samsung rotary compressor with suction accumulator. Sourced for residential and commercial split systems.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Samsung"
      },
      {
        "label": "Model Series",
        "value": "SAMS-ROTARY"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor5-cf8223c1.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #5 of 40",
        "Original Legacy Title": "Samsung Ac Compressor",
        "Manufacturer Brand": "Samsung",
        "Model Reference": "SAMS-ROTARY",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Brand Verified · Model Pending Nameplate"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-06-anb52fkrmt-ac-compressor",
    "code": "ANB52FKRMT",
    "catalogCode": "Z-LEG-06",
    "name": "ANB52FKRMT AC Compressor",
    "legacyTitle": "ANB52FKRMT AC Compressor",
    "legacyOrder": 6,
    "brand": "Highly",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Code Verified · Workshop Photo",
    "verificationStatus": "Model Code Verified · Workshop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic close-up workshop photograph showing ANB52FKRMT model label and wiring leads.",
    "shortDescription": "Highly / Hitachi rotary compressor model ANB52FKRMT recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (ANB52FKRMT AC Compressor). Authentic close-up photograph clearly verifies OEM model label ANB52FKRMT with standard 3-wire leads.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Highly"
      },
      {
        "label": "Model Series",
        "value": "ANB52FKRMT"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor6-3d4c0d5e.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #6 of 40",
        "Original Legacy Title": "ANB52FKRMT AC Compressor",
        "Manufacturer Brand": "Highly",
        "Model Reference": "ANB52FKRMT",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Model Code Verified · Workshop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-07-daikin-air-conditioner-compressor",
    "code": "DAI-SCROLL",
    "catalogCode": "Z-LEG-07",
    "name": "Daikin Air Conditioner Compressor",
    "legacyTitle": "Daikin Air Conditioner Compressor",
    "legacyOrder": 7,
    "brand": "Daikin",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand Verified · Workshop Photo",
    "verificationStatus": "Brand Verified · Workshop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic workshop photograph — confirm exact JT series suffix by nameplate.",
    "shortDescription": "Daikin commercial scroll air conditioner compressor recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Daikin Air Conditioner Compressor). Authentic workshop photograph shows Daikin commercial scroll unit standing in workshop.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Daikin"
      },
      {
        "label": "Model Series",
        "value": "DAI-SCROLL"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor7-9e846a50.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #7 of 40",
        "Original Legacy Title": "Daikin Air Conditioner Compressor",
        "Manufacturer Brand": "Daikin",
        "Model Reference": "DAI-SCROLL",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Brand Verified · Workshop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-08-rotary-compressor-gmcc-highly-panasonic-lg-samsung",
    "code": "ROTARY-MULTI",
    "catalogCode": "Z-LEG-08",
    "name": "Rotary Compressor (GMCC / Highly / Panasonic / LG / Samsung)",
    "legacyTitle": "Rotary Compressor GMCC HIGHLY PANASONIC LG SAMSUNG",
    "legacyOrder": 8,
    "brand": "Multi-Brand",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Multi-Brand Category · Studio Cutout",
    "verificationStatus": "Multi-Brand Category · Studio Cutout",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue image representing multi-brand rotary sourcing inventory.",
    "shortDescription": "Multi-brand rotary compressor inventory entry (GMCC, Highly, Panasonic, LG, Samsung).",
    "description": "Historical product entry from the client legacy catalogue representing multi-brand rotary compressor sourcing inventory across GMCC, Highly, Panasonic, LG, and Samsung platforms.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Multi-Brand"
      },
      {
        "label": "Model Series",
        "value": "ROTARY-MULTI"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor8-6b648442.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #8 of 40",
        "Original Legacy Title": "Rotary Compressor GMCC HIGHLY PANASONIC LG SAMSUNG",
        "Manufacturer Brand": "Multi-Brand",
        "Model Reference": "ROTARY-MULTI",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Multi-Brand Category · Studio Cutout"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-09-hitachi-rotary-compressor-1-5-ton",
    "code": "HIT-1.5TR",
    "catalogCode": "Z-LEG-09",
    "name": "Hitachi Rotary Compressor 1.5 Ton",
    "legacyTitle": "Hitachi Rotary Compressor 1.5 Ton",
    "legacyOrder": 9,
    "brand": "Hitachi",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand & Capacity Verified",
    "verificationStatus": "Brand & Capacity Verified",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue photograph — confirm exact model code on physical nameplate.",
    "shortDescription": "Hitachi 1.5 Ton rotary compressor recovered from historical catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Hitachi Rotary Compressor 1.5 Ton). Authentic product image portrays black rotary unit with suction accumulator for 1.5 TR air conditioning.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Hitachi"
      },
      {
        "label": "Model Series",
        "value": "HIT-1.5TR"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor9-000a9bec.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #9 of 40",
        "Original Legacy Title": "Hitachi Rotary Compressor 1.5 Ton",
        "Manufacturer Brand": "Hitachi",
        "Model Reference": "HIT-1.5TR",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Brand & Capacity Verified"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-11-zr125-scroll-compressor",
    "code": "ZR125",
    "catalogCode": "Z-LEG-11",
    "name": "Copeland Scroll Compressor ZR125",
    "legacyTitle": "Zr125 Scroll Compressor",
    "legacyOrder": 11,
    "brand": "Copeland",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Studio Photo",
    "verificationStatus": "Model Verified · Studio Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue studio photo of commercial 10-Ton Copeland Scroll.",
    "shortDescription": "Commercial 10-Ton Copeland Scroll compressor model ZR125 recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Zr125 Scroll Compressor). Authentic studio photograph portrays commercial 10-Ton Copeland Scroll compressor with green Emerson/Copeland label.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Copeland"
      },
      {
        "label": "Model Series",
        "value": "ZR125"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor11-21a63ba1.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #11 of 40",
        "Original Legacy Title": "Zr125 Scroll Compressor",
        "Manufacturer Brand": "Copeland",
        "Model Reference": "ZR125",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Studio Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-12-zr190-emerson-copeland",
    "code": "ZR190",
    "catalogCode": "Z-LEG-12",
    "name": "Copeland Scroll Compressor ZR190",
    "legacyTitle": "Zr190 Emerson Copeland",
    "legacyOrder": 12,
    "brand": "Copeland",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Studio Photo",
    "verificationStatus": "Model Verified · Studio Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue studio photo of commercial 15-Ton Copeland Scroll.",
    "shortDescription": "Commercial 15-Ton Copeland Scroll compressor model ZR190 recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Zr190 Emerson Copeland). Authentic studio photograph portrays commercial 15-Ton Copeland Scroll compressor with side terminal box.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Copeland"
      },
      {
        "label": "Model Series",
        "value": "ZR190"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor12-812a9015.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #12 of 40",
        "Original Legacy Title": "Zr190 Emerson Copeland",
        "Manufacturer Brand": "Copeland",
        "Model Reference": "ZR190",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Studio Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-13-zb150-emerson-copeland",
    "code": "ZB150",
    "catalogCode": "Z-LEG-13",
    "name": "Copeland Refrigeration Scroll ZB150",
    "legacyTitle": "ZB150 EMERSON COPELAND",
    "legacyOrder": 13,
    "brand": "Copeland",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Studio Photo",
    "verificationStatus": "Model Verified · Studio Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue studio photo of Copeland commercial refrigeration scroll.",
    "shortDescription": "Copeland commercial refrigeration scroll compressor model ZB150 recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (ZB150 EMERSON COPELAND). Authentic studio photograph portrays tall teal/green Copeland scroll refrigeration compressor (ZB150KCE series).",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Copeland"
      },
      {
        "label": "Model Series",
        "value": "ZB150"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor13-30df9d9f.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #13 of 40",
        "Original Legacy Title": "ZB150 EMERSON COPELAND",
        "Manufacturer Brand": "Copeland",
        "Model Reference": "ZB150",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Studio Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-14-zpd72-emerson-scroll-compressor",
    "code": "ZPD72",
    "catalogCode": "Z-LEG-14",
    "name": "Copeland Digital Scroll Compressor ZPD72",
    "legacyTitle": "ZPD72 EMERSON SCROLL COMPRESSOR",
    "legacyOrder": 14,
    "brand": "Copeland",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Digital Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Studio Photo",
    "verificationStatus": "Model Verified · Studio Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic studio photograph showing top modulation solenoid unloader valve.",
    "shortDescription": "Copeland Digital Scroll compressor model ZPD72 recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (ZPD72 EMERSON SCROLL COMPRESSOR). Authentic photograph shows Copeland Digital Scroll compressor with top modulation solenoid unloader valve.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Copeland"
      },
      {
        "label": "Model Series",
        "value": "ZPD72"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor14-b41709f7.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #14 of 40",
        "Original Legacy Title": "ZPD72 EMERSON SCROLL COMPRESSOR",
        "Manufacturer Brand": "Copeland",
        "Model Reference": "ZPD72",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Studio Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-15-zr190kce-copeland-scroll-compressor",
    "code": "ZR190KCE",
    "catalogCode": "Z-LEG-15",
    "name": "Copeland Scroll Compressor ZR190KCE",
    "legacyTitle": "Zr190kce Copeland Scroll Compressor",
    "legacyOrder": 15,
    "brand": "Copeland",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Studio Cutout",
    "verificationStatus": "Model Verified · Studio Cutout",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue studio cutout of 15-Ton Copeland scroll compressor.",
    "shortDescription": "Copeland Scroll compressor model ZR190KCE (POE oil / R407C / R134a) from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Zr190kce Copeland Scroll Compressor). Authentic studio cutout shows 15-Ton Copeland scroll compressor configured for POE lubricant.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Copeland"
      },
      {
        "label": "Model Series",
        "value": "ZR190KCE"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor15-38744453.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #15 of 40",
        "Original Legacy Title": "Zr190kce Copeland Scroll Compressor",
        "Manufacturer Brand": "Copeland",
        "Model Reference": "ZR190KCE",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Studio Cutout"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-16-danfoss-sm185s4rc-scroll-compressor",
    "code": "SM185S4RC",
    "catalogCode": "Z-LEG-16",
    "name": "Danfoss Performer Scroll Compressor SM185S4RC",
    "legacyTitle": "Danfoss Sm185s4rc Scroll Compressor",
    "legacyOrder": 16,
    "brand": "Danfoss",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Product Photo",
    "verificationStatus": "Model Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue photograph of blue Danfoss Performer 15-Ton scroll.",
    "shortDescription": "Danfoss Performer commercial scroll compressor model SM185S4RC recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Danfoss Sm185s4rc Scroll Compressor). Authentic photograph shows large blue Danfoss Performer commercial 15-Ton scroll compressor.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Danfoss"
      },
      {
        "label": "Model Series",
        "value": "SM185S4RC"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor16-edf2a5e4.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #16 of 40",
        "Original Legacy Title": "Danfoss Sm185s4rc Scroll Compressor",
        "Manufacturer Brand": "Danfoss",
        "Model Reference": "SM185S4RC",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-17-rotary-1-5-ton-r22-gmcc",
    "code": "GMCC-1.5TR",
    "catalogCode": "Z-LEG-17",
    "name": "GMCC Rotary Compressor 1.5 Ton R22",
    "legacyTitle": "Rotary 1.5 Ton , R22 GMCC",
    "legacyOrder": 17,
    "brand": "GMCC",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand & Spec Verified",
    "verificationStatus": "Brand & Spec Verified",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue photograph — confirm exact GMCC model code on nameplate.",
    "shortDescription": "GMCC 1.5 Ton R22 rotary air conditioning compressor recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Rotary 1.5 Ton , R22 GMCC). Authentic product image shows black GMCC rotary compressor with accumulator for R22 refrigerant.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "GMCC"
      },
      {
        "label": "Model Series",
        "value": "GMCC-1.5TR"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor17-10d9a476.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #17 of 40",
        "Original Legacy Title": "Rotary 1.5 Ton , R22 GMCC",
        "Manufacturer Brand": "GMCC",
        "Model Reference": "GMCC-1.5TR",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Brand & Spec Verified"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-18-daikin-jt300d-scroll-compressor",
    "code": "JT300D",
    "catalogCode": "Z-LEG-18",
    "name": "Daikin Scroll Compressor JT300D",
    "legacyTitle": "DAIKIN Jt300d SCROLL COMPRESSOR",
    "legacyOrder": 18,
    "brand": "Daikin",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Product Photo",
    "verificationStatus": "Model Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue product photograph of Daikin JT300D commercial scroll.",
    "shortDescription": "Daikin commercial scroll compressor model JT300D recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (DAIKIN Jt300d SCROLL COMPRESSOR). Authentic product photograph shows tall black Daikin commercial 10-HP scroll compressor JT300D.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Daikin"
      },
      {
        "label": "Model Series",
        "value": "JT300D"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor18-cd943799.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #18 of 40",
        "Original Legacy Title": "DAIKIN Jt300d SCROLL COMPRESSOR",
        "Manufacturer Brand": "Daikin",
        "Model Reference": "JT300D",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-19-daikin-jt125-scroll-compressor",
    "code": "JT125",
    "catalogCode": "Z-LEG-19",
    "name": "Daikin Scroll Compressor JT125",
    "legacyTitle": "Daikin JT125 SCROLL COMPRESSOR",
    "legacyOrder": 19,
    "brand": "Daikin",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Studio Photo",
    "verificationStatus": "Model Verified · Studio Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue studio photo of 4-TR Daikin commercial scroll.",
    "shortDescription": "Daikin commercial scroll compressor model JT125 (4 TR) recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Daikin JT125 SCROLL COMPRESSOR). Authentic studio photograph shows black Daikin commercial scroll compressor JT125.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Daikin"
      },
      {
        "label": "Model Series",
        "value": "JT125"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor19-278c06c9.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #19 of 40",
        "Original Legacy Title": "Daikin JT125 SCROLL COMPRESSOR",
        "Manufacturer Brand": "Daikin",
        "Model Reference": "JT125",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Studio Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-20-zf15k4e-emerson-copeland",
    "code": "ZF15K4E",
    "catalogCode": "Z-LEG-20",
    "name": "Copeland Low-Temp Scroll Compressor ZF15K4E",
    "legacyTitle": "ZF15K4E EMERSON COPELAND",
    "legacyOrder": 20,
    "brand": "Copeland",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Low-Temp Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Product Photo",
    "verificationStatus": "Model Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic product photograph showing Copeland low-temperature scroll with liquid injection fitting.",
    "shortDescription": "Copeland low-temperature refrigeration scroll ZF15K4E recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (ZF15K4E EMERSON COPELAND). Authentic product photo portrays black Copeland low-temperature refrigeration scroll with liquid injection fitting.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Copeland"
      },
      {
        "label": "Model Series",
        "value": "ZF15K4E"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor20-3ef88758.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #20 of 40",
        "Original Legacy Title": "ZF15K4E EMERSON COPELAND",
        "Manufacturer Brand": "Copeland",
        "Model Reference": "ZF15K4E",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-21-mitsubishi-rb233-rotary-compressor",
    "code": "RB233",
    "catalogCode": "Z-LEG-21",
    "name": "Mitsubishi Rotary Compressor RB233",
    "legacyTitle": "Mitsubishi RB233 ROTARY COMPRESSOR",
    "legacyOrder": 21,
    "brand": "Mitsubishi",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Product Photo",
    "verificationStatus": "Model Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue product photograph of Mitsubishi RB233 rotary unit.",
    "shortDescription": "Mitsubishi rotary compressor model RB233 recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Mitsubishi RB233 ROTARY COMPRESSOR). Authentic product photograph shows black Mitsubishi rotary compressor with accumulator.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Model Series",
        "value": "RB233"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor21-15b60a62.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #21 of 40",
        "Original Legacy Title": "Mitsubishi RB233 ROTARY COMPRESSOR",
        "Manufacturer Brand": "Mitsubishi",
        "Model Reference": "RB233",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Model Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-22-hnb83fb-ye-c-mitsubishi-electric-compressor",
    "code": "HNB83FB-YE-C",
    "catalogCode": "Z-LEG-22",
    "name": "Mitsubishi Electric Compressor HNB83FB-YE-C",
    "legacyTitle": "HNB83FB-YE-C Mitsubishi electric compressor",
    "legacyOrder": 22,
    "brand": "Mitsubishi Electric",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Code Verified · Workshop Photo",
    "verificationStatus": "Model Code Verified · Workshop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic workshop photograph showing OEM model code label HNB83FB-YE-C.",
    "shortDescription": "Mitsubishi Electric compressor model HNB83FB-YE-C recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (HNB83FB-YE-C Mitsubishi electric compressor). Authentic workshop photograph confirms specific model code HNB83FB-YE-C on compressor body.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Mitsubishi Electric"
      },
      {
        "label": "Model Series",
        "value": "HNB83FB-YE-C"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor22-30aea93a.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #22 of 40",
        "Original Legacy Title": "HNB83FB-YE-C Mitsubishi electric compressor",
        "Manufacturer Brand": "Mitsubishi Electric",
        "Model Reference": "HNB83FB-YE-C",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Model Code Verified · Workshop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-23-lg-air-conditioner-compressor",
    "code": "LG-AC-ROT",
    "catalogCode": "Z-LEG-23",
    "name": "LG Air Conditioner Compressor",
    "legacyTitle": "LG Air Conditioner Compressor",
    "legacyOrder": 23,
    "brand": "LG",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand Verified · Workshop Photo",
    "verificationStatus": "Brand Verified · Workshop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic workshop photograph — confirm exact LG model suffix by physical nameplate.",
    "shortDescription": "LG air conditioner rotary compressor recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (LG Air Conditioner Compressor). Authentic workshop photograph portrays black LG rotary compressor unit.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "LG"
      },
      {
        "label": "Model Series",
        "value": "LG-AC-ROT"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor23-936c8491.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #23 of 40",
        "Original Legacy Title": "LG Air Conditioner Compressor",
        "Manufacturer Brand": "LG",
        "Model Reference": "LG-AC-ROT",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Brand Verified · Workshop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-24-mitsubishi-compressor-tnb306fpnmt",
    "code": "TNB306FPNMT",
    "catalogCode": "Z-LEG-24",
    "name": "Mitsubishi Twin-Rotary Compressor TNB306FPNMT",
    "legacyTitle": "Mitsubishi Compressor TNB306FPNMT",
    "legacyOrder": 24,
    "brand": "Mitsubishi",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Twin-Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Code Verified · Product Photo",
    "verificationStatus": "Model Code Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic photograph showing model label details for twin-rotary TNB306FPNMT.",
    "shortDescription": "Mitsubishi twin-rotary compressor model TNB306FPNMT recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Mitsubishi Compressor TNB306FPNMT). Authentic photo confirms model label for twin-rotary compressor model TNB306FPNMT.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Model Series",
        "value": "TNB306FPNMT"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor24-e2a56c56.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #24 of 40",
        "Original Legacy Title": "Mitsubishi Compressor TNB306FPNMT",
        "Manufacturer Brand": "Mitsubishi",
        "Model Reference": "TNB306FPNMT",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Model Code Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-25-split-air-conditioner-compressor",
    "code": "SPLIT-AC-ROT",
    "catalogCode": "Z-LEG-25",
    "name": "Split Air Conditioner Compressor",
    "legacyTitle": "Split Air Conditioner Compressor",
    "legacyOrder": 25,
    "brand": "Generic / Multi-Brand",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Category Listing · Workshop Photo",
    "verificationStatus": "Category Listing · Workshop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic workshop photo of split AC compressors standing together.",
    "shortDescription": "Split air conditioner replacement compressor entry recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Split Air Conditioner Compressor). Authentic workshop photograph shows multiple split AC compressors standing on warehouse floor.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Generic / Multi-Brand"
      },
      {
        "label": "Model Series",
        "value": "SPLIT-AC-ROT"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor25-c9b6dc9a.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #25 of 40",
        "Original Legacy Title": "Split Air Conditioner Compressor",
        "Manufacturer Brand": "Generic / Multi-Brand",
        "Model Reference": "SPLIT-AC-ROT",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Category Listing · Workshop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-26-carrier-air-conditioner-compressor",
    "code": "CARRIER-AC",
    "catalogCode": "Z-LEG-26",
    "name": "Carrier Air Conditioner Compressor",
    "legacyTitle": "Carrier Air Conditioner Compressor",
    "legacyOrder": 26,
    "brand": "Carrier",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand Verified · Product Photo",
    "verificationStatus": "Brand Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue product photo of Carrier commercial compressor.",
    "shortDescription": "Carrier commercial air conditioner compressor recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Carrier Air Conditioner Compressor). Authentic product photo portrays Carrier commercial scroll compressor.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Carrier"
      },
      {
        "label": "Model Series",
        "value": "CARRIER-AC"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor26-346394ec.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #26 of 40",
        "Original Legacy Title": "Carrier Air Conditioner Compressor",
        "Manufacturer Brand": "Carrier",
        "Model Reference": "CARRIER-AC",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Brand Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-27-mitsubishi-tnb306fpgmt-ac-compressor",
    "code": "TNB306FPGMT",
    "catalogCode": "Z-LEG-27",
    "name": "Mitsubishi Twin-Rotary Compressor TNB306FPGMT",
    "legacyTitle": "Mitsubishi TNB306FPGMT AC Compressor",
    "legacyOrder": 27,
    "brand": "Mitsubishi",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Twin-Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Code Verified · Product Photo",
    "verificationStatus": "Model Code Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic product photograph showing label details for twin-rotary TNB306FPGMT.",
    "shortDescription": "Mitsubishi twin-rotary AC compressor TNB306FPGMT recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Mitsubishi TNB306FPGMT AC Compressor). Authentic photograph verifies twin-rotary compressor model TNB306FPGMT.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Model Series",
        "value": "TNB306FPGMT"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor27-de153194.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #27 of 40",
        "Original Legacy Title": "Mitsubishi TNB306FPGMT AC Compressor",
        "Manufacturer Brand": "Mitsubishi",
        "Model Reference": "TNB306FPGMT",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Model Code Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-28-sanyo-compressor",
    "code": "SANYO-COMM",
    "catalogCode": "Z-LEG-28",
    "name": "Sanyo Commercial Compressor",
    "legacyTitle": "Sanyo compressor",
    "legacyOrder": 28,
    "brand": "Sanyo",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand Verified · Studio Photo",
    "verificationStatus": "Brand Verified · Studio Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue studio photo of black Sanyo commercial scroll.",
    "shortDescription": "Sanyo commercial compressor recovered from historical catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Sanyo compressor). Authentic studio photo portrays black Sanyo commercial scroll compressor.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Sanyo"
      },
      {
        "label": "Model Series",
        "value": "SANYO-COMM"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor28-fd12d544.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #28 of 40",
        "Original Legacy Title": "Sanyo compressor",
        "Manufacturer Brand": "Sanyo",
        "Model Reference": "SANYO-COMM",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Brand Verified · Studio Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-29-1-5-ton-mitsubishi-sci-rotary-compressor",
    "code": "SCI-1.5TR",
    "catalogCode": "Z-LEG-29",
    "name": "1.5 Ton Mitsubishi SCI Rotary Compressor",
    "legacyTitle": "1.5 Ton Mitsubishi SCI Rotary Compressor",
    "legacyOrder": 29,
    "brand": "Mitsubishi",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand & Capacity Verified",
    "verificationStatus": "Brand & Capacity Verified",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic cutout of black rotary compressor with suction accumulator (1.5 TR SCI).",
    "shortDescription": "1.5 Ton Mitsubishi SCI (Siam Compressor Industry) rotary compressor.",
    "description": "Historical product entry from the client legacy catalogue (1.5 Ton Mitsubishi SCI Rotary Compressor). Authentic product image shows Siam Compressor Industry rotary compressor with suction accumulator.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Mitsubishi"
      },
      {
        "label": "Model Series",
        "value": "SCI-1.5TR"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor29-73704b79.webp",
      "/products/airconditionercompressor-source/mitsubishi/1-5-ton-mitsubishi-rotary-compressor-500x500-c4e45459.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #29 of 40",
        "Original Legacy Title": "1.5 Ton Mitsubishi SCI Rotary Compressor",
        "Manufacturer Brand": "Mitsubishi",
        "Model Reference": "SCI-1.5TR",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Brand & Capacity Verified"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-30-hitachi-ac-dc-inverter-compressor",
    "code": "HIT-DC-INV",
    "catalogCode": "Z-LEG-30",
    "name": "Hitachi AC DC Inverter Compressor",
    "legacyTitle": "Hitachi AC DC Inverter Compressor",
    "legacyOrder": 30,
    "brand": "Hitachi",
    "tagline": "Historical Catalogue Entry · VRF / DC Inverter",
    "category": "VRF / DC Inverter",
    "type": "DC Inverter Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand & Inverter Tech Verified",
    "verificationStatus": "Brand & Inverter Tech Verified",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic product photo of Hitachi DC Inverter variable-speed compressor.",
    "shortDescription": "Hitachi DC Inverter variable-speed air conditioning compressor from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Hitachi AC DC Inverter Compressor). Authentic product photo portrays Hitachi DC Inverter variable-speed compressor.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Hitachi"
      },
      {
        "label": "Model Series",
        "value": "HIT-DC-INV"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor30-f24c0ecf.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #30 of 40",
        "Original Legacy Title": "Hitachi AC DC Inverter Compressor",
        "Manufacturer Brand": "Hitachi",
        "Model Reference": "HIT-DC-INV",
        "Assigned Category": "VRF / DC Inverter",
        "Asset Verification": "Brand & Inverter Tech Verified"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-31-hitachi-scroll-compressor",
    "code": "HIT-SCROLL",
    "catalogCode": "Z-LEG-31",
    "name": "Hitachi Scroll Compressor",
    "legacyTitle": "Hitachi Scroll Compressor",
    "legacyOrder": 31,
    "brand": "Hitachi",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand & Form Factor Verified",
    "verificationStatus": "Brand & Form Factor Verified",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue product photo of Hitachi commercial scroll compressor.",
    "shortDescription": "Hitachi commercial scroll compressor recovered from historical catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Hitachi Scroll Compressor). Authentic product photo shows Hitachi commercial scroll compressor for packaged air conditioning.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Hitachi"
      },
      {
        "label": "Model Series",
        "value": "HIT-SCROLL"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor31-9de4f015.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #31 of 40",
        "Original Legacy Title": "Hitachi Scroll Compressor",
        "Manufacturer Brand": "Hitachi",
        "Model Reference": "HIT-SCROLL",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Brand & Form Factor Verified"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-32-1-ton-rotary-highly-compressor",
    "code": "HIGHLY-1TR",
    "catalogCode": "Z-LEG-32",
    "name": "1 Ton Rotary Highly Compressor",
    "legacyTitle": "1 Ton Rotary Highly Compressor",
    "legacyOrder": 32,
    "brand": "Highly",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand & Capacity Verified",
    "verificationStatus": "Brand & Capacity Verified",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic product photo of Highly 1 Ton rotary compressor with accumulator.",
    "shortDescription": "Highly 1 Ton rotary compressor recovered from historical catalogue.",
    "description": "Historical product entry from the client legacy catalogue (1 Ton Rotary Highly Compressor). Authentic product photo portrays Highly 1 Ton rotary compressor with suction accumulator.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Highly"
      },
      {
        "label": "Model Series",
        "value": "HIGHLY-1TR"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor32-6b91a9f4.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #32 of 40",
        "Original Legacy Title": "1 Ton Rotary Highly Compressor",
        "Manufacturer Brand": "Highly",
        "Model Reference": "HIGHLY-1TR",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Brand & Capacity Verified"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-33-bluestar-danfoss-ac-compressor",
    "code": "BLUESTAR-DANFOSS",
    "catalogCode": "Z-LEG-33",
    "name": "Blue Star Danfoss AC Compressor",
    "legacyTitle": "Bluestar danfoss AC compressor",
    "legacyOrder": 33,
    "brand": "Danfoss",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Application Verified · Workshop Photo",
    "verificationStatus": "Application Verified · Workshop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic workshop photo of Danfoss blue compressor in Blue Star packaged chiller unit.",
    "shortDescription": "Danfoss scroll compressor for Blue Star packaged air conditioner / chiller applications.",
    "description": "Historical product entry from the client legacy catalogue (Bluestar danfoss AC compressor). Authentic workshop photo shows Danfoss blue commercial compressor installed in Blue Star packaged unit.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Danfoss"
      },
      {
        "label": "Model Series",
        "value": "BLUESTAR-DANFOSS"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor33-3572b3fe.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #33 of 40",
        "Original Legacy Title": "Bluestar danfoss AC compressor",
        "Manufacturer Brand": "Danfoss",
        "Model Reference": "BLUESTAR-DANFOSS",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Application Verified · Workshop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-34-air-conditioner-compressor",
    "code": "GEN-AC-COMP",
    "catalogCode": "Z-LEG-34",
    "name": "Air Conditioner Compressor",
    "legacyTitle": "Air Conditioner Compressor",
    "legacyOrder": 34,
    "brand": "Generic / Commercial",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Category Listing · Product Photo",
    "verificationStatus": "Category Listing · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic legacy catalogue photo of commercial compressor housing.",
    "shortDescription": "General air conditioner commercial compressor listing from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Air Conditioner Compressor). Authentic catalogue photograph of commercial compressor shell. Available for replacement sourcing.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Generic / Commercial"
      },
      {
        "label": "Model Series",
        "value": "GEN-AC-COMP"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor34-23010b21.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #34 of 40",
        "Original Legacy Title": "Air Conditioner Compressor",
        "Manufacturer Brand": "Generic / Commercial",
        "Model Reference": "GEN-AC-COMP",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Category Listing · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-35-gmcc-2-0-tr-rotary-r22-compressor-24840-btu",
    "code": "GMCC-2.0TR-24840",
    "catalogCode": "Z-LEG-35",
    "name": "GMCC 2.0 TR Rotary R22 Compressor (24,840 BTU/h)",
    "legacyTitle": "Gmcc 2.0 Tr Rotary R22 Compressor 24840 Btu",
    "legacyOrder": 35,
    "brand": "GMCC",
    "tagline": "Historical Catalogue Entry · Rotary Compressors",
    "category": "Rotary Compressors",
    "type": "Rotary Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Brand & Rating Verified · Studio Photo",
    "verificationStatus": "Brand & Rating Verified · Studio Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic studio photo of GMCC 2.0 TR rotary compressor (24,840 BTU/h, R22).",
    "shortDescription": "GMCC 2.0 TR (24,840 BTU/h) R22 rotary compressor from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Gmcc 2.0 Tr Rotary R22 Compressor 24840 Btu). Authentic studio photo portrays black GMCC rotary unit rated at 2.0 TR / 24,840 BTU/h for R22.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "GMCC"
      },
      {
        "label": "Model Series",
        "value": "GMCC-2.0TR-24840"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor35-0a78f75f.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #35 of 40",
        "Original Legacy Title": "Gmcc 2.0 Tr Rotary R22 Compressor 24840 Btu",
        "Manufacturer Brand": "GMCC",
        "Model Reference": "GMCC-2.0TR-24840",
        "Assigned Category": "Rotary Compressors",
        "Asset Verification": "Brand & Rating Verified · Studio Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-36-emerson-copeland-compressor-kcn-463",
    "code": "KCN 463",
    "catalogCode": "Z-LEG-36",
    "name": "Copeland Hermetic Reciprocating Compressor KCN 463",
    "legacyTitle": "Emerson Copeland Compressor KCN 463",
    "legacyOrder": 36,
    "brand": "Copeland",
    "tagline": "Historical Catalogue Entry · Reciprocating Compressors",
    "category": "Reciprocating Compressors",
    "type": "Hermetic Reciprocating",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Product Photo",
    "verificationStatus": "Model Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic product photo of Copeland KCN 463 hermetic reciprocating compressor.",
    "shortDescription": "Copeland hermetic reciprocating compressor model KCN 463 from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Emerson Copeland Compressor KCN 463). Authentic product photo portrays small hermetic reciprocating unit for commercial refrigeration and coolers.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Copeland"
      },
      {
        "label": "Model Series",
        "value": "KCN 463"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor36-418aaab1.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #36 of 40",
        "Original Legacy Title": "Emerson Copeland Compressor KCN 463",
        "Manufacturer Brand": "Copeland",
        "Model Reference": "KCN 463",
        "Assigned Category": "Reciprocating Compressors",
        "Asset Verification": "Model Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-37-emerson-copeland-compressor-zb-114-kce",
    "code": "ZB 114 KCE",
    "catalogCode": "Z-LEG-37",
    "name": "Copeland Refrigeration Scroll Compressor ZB 114 KCE",
    "legacyTitle": "Emerson Copeland Compressor ZB 114 KCE",
    "legacyOrder": 37,
    "brand": "Copeland",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Refrigeration Scroll",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Product Photo",
    "verificationStatus": "Model Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic product photo of tall green Copeland refrigeration scroll (approx. 15 HP).",
    "shortDescription": "Copeland refrigeration scroll compressor model ZB 114 KCE from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (Emerson Copeland Compressor ZB 114 KCE). Authentic product photo portrays tall green Copeland refrigeration scroll compressor (approx. 15 HP).",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Copeland"
      },
      {
        "label": "Model Series",
        "value": "ZB 114 KCE"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor37-945e55c6.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #37 of 40",
        "Original Legacy Title": "Emerson Copeland Compressor ZB 114 KCE",
        "Manufacturer Brand": "Copeland",
        "Model Reference": "ZB 114 KCE",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-38-sbn453-panasonic-scroll",
    "code": "SBN453",
    "catalogCode": "Z-LEG-38",
    "name": "Panasonic Commercial Scroll Compressor SBN453",
    "legacyTitle": "SBN453 PANASONIC SCROLL",
    "legacyOrder": 38,
    "brand": "Panasonic",
    "tagline": "Historical Catalogue Entry · Scroll Compressors",
    "category": "Scroll Compressors",
    "type": "Scroll Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Studio Photo",
    "verificationStatus": "Model Verified · Studio Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic studio photo of commercial 6-Ton Panasonic scroll compressor model SBN453.",
    "shortDescription": "Panasonic commercial 6-Ton scroll compressor model SBN453 from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (SBN453 PANASONIC SCROLL). Authentic studio photo portrays commercial 6-Ton Panasonic scroll compressor model SBN453.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Panasonic"
      },
      {
        "label": "Model Series",
        "value": "SBN453"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor38-fc59e0c9.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #38 of 40",
        "Original Legacy Title": "SBN453 PANASONIC SCROLL",
        "Manufacturer Brand": "Panasonic",
        "Model Reference": "SBN453",
        "Assigned Category": "Scroll Compressors",
        "Asset Verification": "Model Verified · Studio Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-39-mt72-danfoss-compressor",
    "code": "MT72",
    "catalogCode": "Z-LEG-39",
    "name": "Danfoss Maneurop Reciprocating Compressor MT72",
    "legacyTitle": "MT72 DANFOSS COMPRESSOR",
    "legacyOrder": 39,
    "brand": "Danfoss",
    "tagline": "Historical Catalogue Entry · Reciprocating Compressors",
    "category": "Reciprocating Compressors",
    "type": "Maneurop Reciprocating",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Maneurop Photo",
    "verificationStatus": "Model Verified · Maneurop Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic product photo of round blue Danfoss Maneurop reciprocating compressor MT72.",
    "shortDescription": "Danfoss Maneurop medium-temperature reciprocating compressor MT72 from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (MT72 DANFOSS COMPRESSOR). Authentic product photo portrays round blue Danfoss Maneurop reciprocating compressor with rotolock valves.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Danfoss"
      },
      {
        "label": "Model Series",
        "value": "MT72"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor39-40c1c0c4.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #39 of 40",
        "Original Legacy Title": "MT72 DANFOSS COMPRESSOR",
        "Manufacturer Brand": "Danfoss",
        "Model Reference": "MT72",
        "Assigned Category": "Reciprocating Compressors",
        "Asset Verification": "Model Verified · Maneurop Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
    "id": "legacy-40-jt15-daikin-dc-compressor",
    "code": "JT15",
    "catalogCode": "Z-LEG-40",
    "name": "Daikin DC Inverter Compressor JT15",
    "legacyTitle": "JT15 DAIKIN DC COMPRESSOR",
    "legacyOrder": 40,
    "brand": "Daikin",
    "tagline": "Historical Catalogue Entry · VRF / DC Inverter",
    "category": "VRF / DC Inverter",
    "type": "DC Inverter Compressor",
    "condition": "Historical Catalogue Entry",
    "availability": "Enquire for availability",
    "statusBadge": "Model Verified · Product Photo",
    "verificationStatus": "Model Verified · Product Photo",
    "imageType": "legacy-recovered",
    "imageDisclaimer": "Authentic product photo of Daikin DC inverter compressor for mini-VRV / split systems.",
    "shortDescription": "Daikin DC Inverter compressor model JT15 recovered from legacy catalogue.",
    "description": "Historical product entry from the client legacy catalogue (JT15 DAIKIN DC COMPRESSOR). Authentic product photo portrays compact Daikin DC inverter compressor for mini-VRV and inverter split systems.",
    "keySpecs": [
      {
        "label": "Manufacturer",
        "value": "Daikin"
      },
      {
        "label": "Model Series",
        "value": "JT15"
      },
      {
        "label": "Availability",
        "value": "Enquire for availability"
      }
    ],
    "images": [
      "/products/legacy/compressor40-c178cb21.webp"
    ],
    "isLegacy": true,
    "specs": {
      "identification": {
        "Legacy Listing Order": "Item #40 of 40",
        "Original Legacy Title": "JT15 DAIKIN DC COMPRESSOR",
        "Manufacturer Brand": "Daikin",
        "Model Reference": "JT15",
        "Assigned Category": "VRF / DC Inverter",
        "Asset Verification": "Model Verified · Product Photo"
      },
      "sourcing": {
        "Historical Source": "zcoolenterprises.co.in/ac-compressor.html",
        "Availability Status": "Enquire for availability",
        "Physical Nameplate Check": "Required before dispatch",
        "Workshop Testing Available": "Meggering, Nitrogen Pressure Holding, Vacuum Drawdown"
      }
    }
  },
  {
  "id": "acc-1-5-ton-air-conditioning-compressor",
  "code": "1-5-TON",
  "catalogCode": "Z-GENERAL-1-5-TON",
  "name": "1.5 TON Air Conditioning Compressor",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "1.5 TON Air Conditioning Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "1.5 TON Air Conditioning Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "1-5-TON"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/1-5-ton-air-conditioning-compressor-500x500-9ed1a82d.webp",
    "/products/airconditionercompressor-source/general/1-5-ton-air-conditioning-compressor-500x500-b2c5bc4e.webp",
    "/products/airconditionercompressor-source/general/1-5-ton-air-conditioning-compressor-500x500-d6ab2d6d.webp",
    "/products/airconditionercompressor-source/general/1-5-ton-air-conditioning-compressor-250x250-c074f14d.webp",
    "/products/airconditionercompressor-source/general/1-5-ton-air-conditioning-compressor-125x125-1d6b0881.webp",
    "/products/airconditionercompressor-source/general/1-5-ton-air-conditioning-compressor-125x125-36582298.webp",
    "/products/airconditionercompressor-source/general/1-5-ton-air-conditioning-compressor-125x125-dadc3c1f.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-1-ton-panasonic-rotary-compressor",
  "code": "1-TON-PANASONIC",
  "catalogCode": "Z-PANASONIC-1-TON-PA",
  "name": "1 TON Panasonic Rotary Compressor",
  "brand": "Panasonic",
  "tagline": "Panasonic Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "1 TON Panasonic Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "1 TON Panasonic Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Panasonic"
    },
    {
      "label": "Model Code",
      "value": "1-TON-PANASONIC"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Panasonic"
  ],
  "compatDetails": {
    "Panasonic": "Drop-in replacement or displacement match for compatible Panasonic systems."
  },
  "images": [
    "/products/airconditionercompressor-source/panasonic/1-ton-panasonic-rotary-compressor-125x125-07fe24de.webp",
    "/products/airconditionercompressor-source/panasonic/1-ton-panasonic-rotary-compressor-125x125-a9d17b76.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-1-ton-rotary-highly-compressor",
  "code": "1-TON-ROTARY",
  "catalogCode": "Z-HIGHLY-1-TON-RO",
  "name": "1 TON Rotary Highly Compressor",
  "brand": "Highly",
  "tagline": "Highly Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "1 TON Rotary Highly Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "1 TON Rotary Highly Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Highly"
    },
    {
      "label": "Model Code",
      "value": "1-TON-ROTARY"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Highly"
  ],
  "compatDetails": {
    "Highly": "Drop-in replacement or displacement match for compatible Highly systems."
  },
  "images": [
    "/products/airconditionercompressor-source/highly/1-ton-rotary-highly-compressor-125x125-aae1a117.webp",
    "/products/airconditionercompressor-source/highly/1-ton-rotary-highly-compressor-125x125-036176ce.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-1-ton-toshiba-rotary-compressor",
  "code": "1-TON-TOSHIBA",
  "catalogCode": "Z-TOSHIBA-1-TON-TO",
  "name": "1 TON Toshiba Rotary Compressor",
  "brand": "Toshiba",
  "tagline": "Toshiba Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "1 TON Toshiba Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "1 TON Toshiba Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Toshiba"
    },
    {
      "label": "Model Code",
      "value": "1-TON-TOSHIBA"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Toshiba"
  ],
  "compatDetails": {
    "Toshiba": "Drop-in replacement or displacement match for compatible Toshiba systems."
  },
  "images": [
    "/products/airconditionercompressor-source/toshiba/1-ton-toshiba-rotary-compressor-125x125-31f39086.webp",
    "/products/airconditionercompressor-source/toshiba/1-ton-toshiba-rotary-compressor-125x125-735c452f.webp",
    "/products/airconditionercompressor-source/toshiba/1-ton-toshiba-rotary-compressor-125x125-ae27ac62.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-2-ton-mitsibushi-rotary-compressor",
  "code": "2-TON-MITSIBUSHI",
  "catalogCode": "Z-MITSUBISHI-2-TON-MI",
  "name": "Mitsubishi 2 TON Mitsibushi Rotary Compressor",
  "brand": "Mitsubishi",
  "tagline": "Mitsubishi Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Mitsubishi 2 TON Mitsibushi Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Mitsubishi 2 TON Mitsibushi Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Mitsubishi"
    },
    {
      "label": "Model Code",
      "value": "2-TON-MITSIBUSHI"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Mitsubishi"
  ],
  "compatDetails": {
    "Mitsubishi": "Drop-in replacement or displacement match for compatible Mitsubishi systems."
  },
  "images": [
    "/products/airconditionercompressor-source/mitsubishi/2-ton-mitsibushi-rotary-compressor-500x500-2291a36e.webp",
    "/products/airconditionercompressor-source/mitsubishi/2-ton-mitsibushi-rotary-compressor-500x500-73704b79.webp",
    "/products/airconditionercompressor-source/mitsubishi/2-ton-mitsibushi-rotary-compressor-500x500-cbf8e918.webp",
    "/products/airconditionercompressor-source/mitsubishi/2-ton-mitsibushi-rotary-compressor-125x125-0adcc402.webp",
    "/products/airconditionercompressor-source/mitsubishi/2-ton-mitsibushi-rotary-compressor-125x125-7be517e6.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-2-ton-toshiba-rotary-compressor",
  "code": "2-TON-TOSHIBA",
  "catalogCode": "Z-TOSHIBA-2-TON-TO",
  "name": "2 TON Toshiba Rotary Compressor",
  "brand": "Toshiba",
  "tagline": "Toshiba Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "2 TON Toshiba Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "2 TON Toshiba Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Toshiba"
    },
    {
      "label": "Model Code",
      "value": "2-TON-TOSHIBA"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Toshiba"
  ],
  "compatDetails": {
    "Toshiba": "Drop-in replacement or displacement match for compatible Toshiba systems."
  },
  "images": [
    "/products/airconditionercompressor-source/toshiba/2-ton-toshiba-rotary-compressor-125x125-09333a8a.webp",
    "/products/airconditionercompressor-source/toshiba/2-ton-toshiba-rotary-compressor-125x125-4370d472.webp",
    "/products/airconditionercompressor-source/toshiba/2-ton-toshiba-rotary-compressor-125x125-4deecd16.webp",
    "/products/airconditionercompressor-source/toshiba/2-ton-toshiba-rotary-compressor-125x125-9e8a95c1.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-air-conditioner-compressor",
  "code": "AIR-CONDITIONER-COMPRESSOR",
  "catalogCode": "Z-GENERAL-AIR-COND",
  "name": "Air Conditioner Compressor",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "AIR-CONDITIONER-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/air-conditioner-compressor-125x125-0c8c527b.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-all-brand-ac-compressor",
  "code": "ALL-BRAND-AC",
  "catalogCode": "Z-GENERAL-ALL-BRAN",
  "name": "All Brand AC Compressor",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "All Brand AC Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "All Brand AC Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "ALL-BRAND-AC"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/all-brand-ac-compressor-500x500-329c5ffc.webp",
    "/products/airconditionercompressor-source/general/all-brand-ac-compressor-500x500-52dac4e5.webp",
    "/products/airconditionercompressor-source/general/all-brand-ac-compressor-500x500-f12d506a.webp",
    "/products/airconditionercompressor-source/general/all-brand-ac-compressor-125x125-684e48e6.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-all-typs-of-ac-compressor",
  "code": "ALL-TYPS-OF",
  "catalogCode": "Z-GENERAL-ALL-TYPS",
  "name": "All Typs Of AC Compressor",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "All Typs Of AC Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "All Typs Of AC Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "ALL-TYPS-OF"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/all-typs-of-ac-compressor-125x125-a4b1a86a.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-bitzer-4ees-4y-semi-hermatic-compressors",
  "code": "4EES",
  "catalogCode": "Z-BITZER-4EES",
  "name": "Bitzer 4ees 4y Semi Hermatic Compressors",
  "brand": "Bitzer",
  "tagline": "Bitzer Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Bitzer 4ees 4y Semi Hermatic Compressors sourced for commercial replacement, repair, and displacement matching.",
  "description": "Bitzer 4ees 4y Semi Hermatic Compressors listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Bitzer"
    },
    {
      "label": "Model Code",
      "value": "4EES"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Bitzer"
  ],
  "compatDetails": {
    "Bitzer": "Drop-in replacement or displacement match for compatible Bitzer systems."
  },
  "images": [
    "/products/airconditionercompressor-source/bitzer/bitzer-4ees-4y-semi-hermatic-compressors-125x125-51d6f3bc.webp",
    "/products/airconditionercompressor-source/bitzer/bitzer-4ees-4y-semi-hermatic-compressors-125x125-bcd4e57d.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-bitzer-4pes-12y-40p-compressor",
  "code": "4PES",
  "catalogCode": "Z-BITZER-4PES",
  "name": "Bitzer 4pes 12y 40p Compressor",
  "brand": "Bitzer",
  "tagline": "Bitzer Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Bitzer 4pes 12y 40p Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Bitzer 4pes 12y 40p Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Bitzer"
    },
    {
      "label": "Model Code",
      "value": "4PES"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Bitzer"
  ],
  "compatDetails": {
    "Bitzer": "Drop-in replacement or displacement match for compatible Bitzer systems."
  },
  "images": [
    "/products/airconditionercompressor-source/bitzer/bitzer-4pes-12y-40p-compressor-500x500-bf31e522.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-bitzer-chiller-compressor-4ces-9y",
  "code": "4CES",
  "catalogCode": "Z-BITZER-4CES",
  "name": "Bitzer Chiller Compressor 4ces 9y",
  "brand": "Bitzer",
  "tagline": "Bitzer Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Bitzer Chiller Compressor 4ces 9y sourced for commercial replacement, repair, and displacement matching.",
  "description": "Bitzer Chiller Compressor 4ces 9y listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Bitzer"
    },
    {
      "label": "Model Code",
      "value": "4CES"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Bitzer"
  ],
  "compatDetails": {
    "Bitzer": "Drop-in replacement or displacement match for compatible Bitzer systems."
  },
  "images": [
    "/products/airconditionercompressor-source/bitzer/bitzer-chiller-compressor-4ces-9y-125x125-252edefd.webp",
    "/products/airconditionercompressor-source/bitzer/bitzer-chiller-compressor-4ces-9y-125x125-3cfb4421.webp",
    "/products/airconditionercompressor-source/bitzer/bitzer-chiller-compressor-4ces-9y-125x125-771a13ce.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-bluestar-air-conditioner-compressor",
  "code": "BLUESTAR-AIR-CONDITIONER",
  "catalogCode": "Z-BLUESTAR-BLUESTAR",
  "name": "Blue Star Bluestar Air Conditioner Compressor",
  "brand": "Blue Star",
  "tagline": "Blue Star Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Blue Star Bluestar Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Blue Star Bluestar Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Blue Star"
    },
    {
      "label": "Model Code",
      "value": "BLUESTAR-AIR-CONDITIONER"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Blue Star"
  ],
  "compatDetails": {
    "Blue Star": "Drop-in replacement or displacement match for compatible Blue Star systems."
  },
  "images": [
    "/products/airconditionercompressor-source/bluestar/bluestar-air-conditioner-compressor-500x500-660e02d7.webp",
    "/products/airconditionercompressor-source/bluestar/bluestar-air-conditioner-compressor-500x500-849d74f2.webp",
    "/products/airconditionercompressor-source/bluestar/bluestar-air-conditioner-compressor-500x500-e5444005.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-compressor-mtz50-danfoss",
  "code": "MTZ50",
  "catalogCode": "Z-DANFOSS-MTZ50",
  "name": "Compressor Mtz50 Danfoss",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Compressor Mtz50 Danfoss sourced for commercial replacement, repair, and displacement matching.",
  "description": "Compressor Mtz50 Danfoss listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "MTZ50"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/compressor-mtz50-danfoss-125x125-3da55db9.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-copeland-scroll-compressor",
  "code": "COPELAND-SCROLL-COMPRESSOR",
  "catalogCode": "Z-COPELAND-COPELAND",
  "name": "Copeland Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "COPELAND-SCROLL-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/copeland-scroll-compressor-500x500-27d7b3cc.webp",
    "/products/airconditionercompressor-source/copeland/copeland-scroll-compressor-500x500-bc9584ac.webp",
    "/products/airconditionercompressor-source/copeland/copeland-scroll-compressor-500x500-1b96f1d5.webp",
    "/products/airconditionercompressor-source/copeland/copeland-scroll-compressor-125x125-904a2005.webp",
    "/products/airconditionercompressor-source/copeland/copeland-scroll-compressor-3-125x125-c43728d7.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-cr-22-emerson-reciprocating-compressor",
  "code": "CR-22-EMERSON",
  "catalogCode": "Z-COPELAND-CR-22-EM",
  "name": "Copeland Cr 22 Emerson Reciprocating Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Cr 22 Emerson Reciprocating Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Cr 22 Emerson Reciprocating Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "CR-22-EMERSON"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/cr-22-emerson-reciprocating-compressor-1-500x500-c599b7d1.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-cr30-2-ton-emerson-copeland-compressor",
  "code": "CR30",
  "catalogCode": "Z-COPELAND-CR30",
  "name": "Cr30 2 TON Emerson Copeland Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Cr30 2 TON Emerson Copeland Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Cr30 2 TON Emerson Copeland Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "CR30"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/cr30-2-ton-emerson-copeland-compressor-500x500-54921192.webp",
    "/products/airconditionercompressor-source/copeland/cr30-2-ton-emerson-copeland-compressor-500x500-b816c9c2.webp",
    "/products/airconditionercompressor-source/copeland/cr30-2-ton-emerson-copeland-compressor-500x500-145cf2c9.webp",
    "/products/airconditionercompressor-source/copeland/cr30-2-ton-emerson-copeland-compressor-125x125-72d8cd9d.webp",
    "/products/airconditionercompressor-source/copeland/cr30-2-ton-emerson-copeland-compressor-125x125-b5b05488.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-cr42k6m-emerson-reciprocating-compressor",
  "code": "CR42K6M",
  "catalogCode": "Z-COPELAND-CR42K6M",
  "name": "Copeland Cr42k6m Emerson Reciprocating Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Cr42k6m Emerson Reciprocating Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Cr42k6m Emerson Reciprocating Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "CR42K6M"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/cr42k6m-emerson-reciprocating-compressor-125x125-d67d220e.webp",
    "/products/airconditionercompressor-source/copeland/cr42k6m-emerson-reciprocating-compressor-125x125-7141cded.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-daikin-air-conditioner-compressor",
  "code": "DAIKIN-AIR-CONDITIONER",
  "catalogCode": "Z-DAIKIN-DAIKIN-A",
  "name": "Daikin Air Conditioner Compressor",
  "brand": "Daikin",
  "tagline": "Daikin Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Daikin Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Daikin Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Daikin"
    },
    {
      "label": "Model Code",
      "value": "DAIKIN-AIR-CONDITIONER"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Daikin"
  ],
  "compatDetails": {
    "Daikin": "Drop-in replacement or displacement match for compatible Daikin systems."
  },
  "images": [
    "/products/airconditionercompressor-source/daikin/daikin-air-conditioner-compressor-125x125-e3a2e153.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-daikin-jt265d-scroll-compressor",
  "code": "JT265D",
  "catalogCode": "Z-DAIKIN-JT265D",
  "name": "Daikin Jt265d Scroll Compressor",
  "brand": "Daikin",
  "tagline": "Daikin Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Daikin Jt265d Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Daikin Jt265d Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Daikin"
    },
    {
      "label": "Model Code",
      "value": "JT265D"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Daikin"
  ],
  "compatDetails": {
    "Daikin": "Drop-in replacement or displacement match for compatible Daikin systems."
  },
  "images": [
    "/products/airconditionercompressor-source/daikin/daikin-jt265d-scroll-compressor-500x500-f034a64a.webp",
    "/products/airconditionercompressor-source/daikin/daikin-jt265d-scroll-compressor-500x500-5f5f3841.webp",
    "/products/airconditionercompressor-source/daikin/daikin-jt265d-scroll-compressor-500x500-cd943799.webp",
    "/products/airconditionercompressor-source/daikin/daikin-jt265d-scroll-compressor-125x125-4d027048.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-daikin-refrigeration-compressors",
  "code": "DAIKIN-REFRIGERATION-COMPRESSORS",
  "catalogCode": "Z-DAIKIN-DAIKIN-R",
  "name": "Daikin Refrigeration Compressors",
  "brand": "Daikin",
  "tagline": "Daikin Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Daikin Refrigeration Compressors sourced for commercial replacement, repair, and displacement matching.",
  "description": "Daikin Refrigeration Compressors listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Daikin"
    },
    {
      "label": "Model Code",
      "value": "DAIKIN-REFRIGERATION-COMPRESSORS"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Daikin"
  ],
  "compatDetails": {
    "Daikin": "Drop-in replacement or displacement match for compatible Daikin systems."
  },
  "images": [
    "/products/airconditionercompressor-source/daikin/daikin-refrigeration-compressors-125x125-99384e6c.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-danfoss-compressor",
  "code": "DANFOSS-COMPRESSOR",
  "catalogCode": "Z-DANFOSS-DANFOSS-",
  "name": "Danfoss Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Danfoss Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Danfoss Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "DANFOSS-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-125x125-18e5a6ae.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-125x125-2699dce9.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-125x125-e8afff1e.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-125x125-eb996acd.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-danfoss-compressor-mt22",
  "code": "MT22",
  "catalogCode": "Z-DANFOSS-MT22",
  "name": "Danfoss Compressor Mt22",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Danfoss Compressor Mt22 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Danfoss Compressor Mt22 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "MT22"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-mt22-125x125-02071536.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-mt22-125x125-79415c7d.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-mt22-125x125-fd12aaae.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-danfoss-compressor-sm",
  "code": "DANFOSS-COMPRESSOR-SM",
  "catalogCode": "Z-DANFOSS-DANFOSS-",
  "name": "Danfoss Compressor Sm",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Danfoss Compressor Sm sourced for commercial replacement, repair, and displacement matching.",
  "description": "Danfoss Compressor Sm listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "DANFOSS-COMPRESSOR-SM"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-sm-110-500x500-07e09578.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-sm-110-500x500-7eedce75.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-sm-110-500x500-ec1c8779.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-sm-100-125x125-71523034.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-sm-110-125x125-22e4dda0.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-sm-110-125x125-879dcab0.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-sm-110-125x125-b176b200.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-compressor-sm-100-125x125-bde02532.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-danfoss-ntz271-maneurop-reciprocating-compressor",
  "code": "NTZ271",
  "catalogCode": "Z-DANFOSS-NTZ271",
  "name": "Danfoss Ntz271 Maneurop Reciprocating Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Danfoss Ntz271 Maneurop Reciprocating Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Danfoss Ntz271 Maneurop Reciprocating Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "NTZ271"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/danfoss-ntz271-maneurop-reciprocating-compressor-500x500-07b7c45c.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-danfoss-reciprocating-compressors",
  "code": "DANFOSS-RECIPROCATING-COMPRESSORS",
  "catalogCode": "Z-DANFOSS-DANFOSS-",
  "name": "Danfoss Reciprocating Compressors",
  "brand": "Danfoss",
  "tagline": "Danfoss Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Danfoss Reciprocating Compressors sourced for commercial replacement, repair, and displacement matching.",
  "description": "Danfoss Reciprocating Compressors listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "DANFOSS-RECIPROCATING-COMPRESSORS"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/danfoss-reciprocating-compressors-125x125-a70e5edf.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-reciprocating-compressors-125x125-ca59395d.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-danfoss-scroll-compressor",
  "code": "DANFOSS-SCROLL-COMPRESSOR",
  "catalogCode": "Z-DANFOSS-DANFOSS-",
  "name": "Danfoss Scroll Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Danfoss Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Danfoss Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "DANFOSS-SCROLL-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/danfoss-scroll-compressor-5-500x500-0fcacb35.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-danfoss-scroll-compressor-sm120",
  "code": "SM120",
  "catalogCode": "Z-DANFOSS-SM120",
  "name": "Danfoss Scroll Compressor Sm120",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Danfoss Scroll Compressor Sm120 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Danfoss Scroll Compressor Sm120 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "SM120"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/danfoss-scroll-compressor-sm120-125x125-039ebd8e.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-danfoss-sz185-scroll-compressor",
  "code": "SZ185",
  "catalogCode": "Z-DANFOSS-SZ185",
  "name": "Danfoss Sz185 Scroll Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Danfoss Sz185 Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Danfoss Sz185 Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "SZ185"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/danfoss-sz185-scroll-compressor-500x500-6a22908c.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-sz185-scroll-compressor-500x500-eb6e8938.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-sz185-scroll-compressor-500x500-1dc3b6d7.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-sz185-scroll-compressor-250x250-32b0c10e.webp",
    "/products/airconditionercompressor-source/danfoss/danfoss-sz185-scroll-compressor-125x125-a6953c88.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-ductable-air-conditioner-compressor",
  "code": "DUCTABLE-AIR-CONDITIONER",
  "catalogCode": "Z-GENERAL-DUCTABLE",
  "name": "Ductable Air Conditioner Compressor",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Ductable Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Ductable Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "DUCTABLE-AIR-CONDITIONER"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/ductable-air-conditioner-compressor-500x500-791e2d2d.webp",
    "/products/airconditionercompressor-source/general/ductable-air-conditioner-compressor-500x500-c7f14de6.webp",
    "/products/airconditionercompressor-source/general/ductable-air-conditioner-compressor-500x500-eea3c088.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-compressor-model-cr-42-k6m-tfm",
  "code": "K6M",
  "catalogCode": "Z-COPELAND-K6M",
  "name": "Copeland Emerson Compressor Model Cr 42 K6m Tfm",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Emerson Compressor Model Cr 42 K6m Tfm sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Emerson Compressor Model Cr 42 K6m Tfm listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "K6M"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-compressor-model-cr-42-k6m-tfm-2-500x500-4ff20211.webp",
    "/products/airconditionercompressor-source/copeland/emerson-compressor-model-cr-42-k6m-tfm-3-500x500-0cc26be9.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copeland-compressor-kce",
  "code": "EMERSON-COPELAND-COMPRESSOR",
  "catalogCode": "Z-COPELAND-EMERSON-",
  "name": "Emerson Copeland Compressor Kce",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Emerson Copeland Compressor Kce sourced for commercial replacement, repair, and displacement matching.",
  "description": "Emerson Copeland Compressor Kce listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "EMERSON-COPELAND-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copeland-compressor-kce-444-500x500-64eceef2.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-compressor-kce-444-500x500-a989c2b8.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-compressor-kce-444-500x500-e0fd9e49.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-compressor-kce-444-125x125-4cd5b171.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-compressor-kce-444-125x125-7698f474.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-compressor-kce-444-125x125-a6e10417.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copeland-compressor-vr61",
  "code": "VR61",
  "catalogCode": "Z-COPELAND-VR61",
  "name": "Emerson Copeland Compressor Vr61",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Emerson Copeland Compressor Vr61 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Emerson Copeland Compressor Vr61 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "VR61"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copeland-compressor-vr61-125x125-7e0541ca.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copeland-refrigeration-compressor-in-karnataka",
  "code": "EMERSON-COPELAND-REFRIGERATION",
  "catalogCode": "Z-COPELAND-EMERSON-",
  "name": "Emerson Copeland Refrigeration Compressor In Karnataka",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Emerson Copeland Refrigeration Compressor In Karnataka sourced for commercial replacement, repair, and displacement matching.",
  "description": "Emerson Copeland Refrigeration Compressor In Karnataka listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "EMERSON-COPELAND-REFRIGERATION"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copeland-refrigeration-compressor-in-karnataka-500x5-bdc05ad3.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-refrigeration-compressor-in-karnataka-500x5-de76a22f.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-refrigeration-compressor-in-karnataka-500x5-7354c947.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copeland-scroll-compressor",
  "code": "EMERSON-COPELAND-SCROLL",
  "catalogCode": "Z-COPELAND-EMERSON-",
  "name": "Emerson Copeland Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Emerson Copeland Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Emerson Copeland Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "EMERSON-COPELAND-SCROLL"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copeland-scroll-compressor-125x125-d66cab1c.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copeland-scroll-zr250",
  "code": "ZR250",
  "catalogCode": "Z-COPELAND-ZR250",
  "name": "Emerson Copeland Scroll Zr250",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Emerson Copeland Scroll Zr250 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Emerson Copeland Scroll Zr250 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZR250"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copeland-scroll-zr250-500x500-6a005ac7.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-scroll-zr250-500x500-b73647e9.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-scroll-zr250-500x500-dd1c968f.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-scroll-zr250-125x125-9a98f44f.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-scroll-zr250-125x125-d44b1c63.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copeland-zpd83",
  "code": "ZPD83",
  "catalogCode": "Z-COPELAND-ZPD83",
  "name": "Emerson Copeland Zpd83",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Emerson Copeland Zpd83 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Emerson Copeland Zpd83 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZPD83"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copeland-zpd83-125x125-25358131.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copeland-zpd83-125x125-5d201d77.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copeland-zr-94-compressor",
  "code": "EMERSON-COPELAND-ZR",
  "catalogCode": "Z-COPELAND-EMERSON-",
  "name": "Emerson Copeland Zr 94 Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Emerson Copeland Zr 94 Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Emerson Copeland Zr 94 Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "EMERSON-COPELAND-ZR"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copeland-zr-94-compressor-125x125-3eba0cf9.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copeland-zr72kc-tfd-522-5-ton-compressor",
  "code": "ZR72KC",
  "catalogCode": "Z-COPELAND-ZR72KC",
  "name": "Emerson Copeland Zr72kc Tfd 522.5 TON Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Emerson Copeland Zr72kc Tfd 522.5 TON Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Emerson Copeland Zr72kc Tfd 522.5 TON Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZR72KC"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copeland-zr72kc-tfd-522-5-ton-compressor-125x125-57b6fcb9.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-copland-cr62kqm-tfd",
  "code": "CR62KQM",
  "catalogCode": "Z-COPELAND-CR62KQM",
  "name": "Copeland Emerson Copland Cr62kqm Tfd",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Emerson Copland Cr62kqm Tfd sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Emerson Copland Cr62kqm Tfd listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "CR62KQM"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-copland-cr62kqm-tfd-125x125-48088605.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copland-cr62kqm-tfd-125x125-fa62a235.webp",
    "/products/airconditionercompressor-source/copeland/emerson-copland-cr62kqm-tfd-125x125-5f6428fc.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-kcn",
  "code": "EMERSON-KCN",
  "catalogCode": "Z-COPELAND-EMERSON-",
  "name": "Copeland Emerson Kcn",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Emerson Kcn sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Emerson Kcn listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "EMERSON-KCN"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-kcn-430-125x125-83e5b4d1.webp",
    "/products/airconditionercompressor-source/copeland/emerson-kcn-430-125x125-b7503ad2.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-emerson-zr61kctdf522-scroll-compressor",
  "code": "ZR61KCTDF522",
  "catalogCode": "Z-COPELAND-ZR61KCTD",
  "name": "Copeland Emerson Zr61kctdf522 Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Emerson Zr61kctdf522 Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Emerson Zr61kctdf522 Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZR61KCTDF522"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/emerson-zr61kctdf522-scroll-compressor-125x125-2fa575fe.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-ffff",
  "code": "FFFF",
  "catalogCode": "Z-GENERAL-FFFF",
  "name": "Commercial Sourcing Technical Reference Lot Ffff",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot Ffff sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot Ffff listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "FFFF"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/ffff-125x125-198af74d.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-gmcc-2-0-tr-rotary-r22-compressor-24840-btu",
  "code": "R22",
  "catalogCode": "Z-GMCC-R22",
  "name": "Gmcc 2 0 TR Rotary R22 Compressor 24840 Btu",
  "brand": "GMCC",
  "tagline": "GMCC Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Gmcc 2 0 TR Rotary R22 Compressor 24840 Btu sourced for commercial replacement, repair, and displacement matching.",
  "description": "Gmcc 2 0 TR Rotary R22 Compressor 24840 Btu listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "GMCC"
    },
    {
      "label": "Model Code",
      "value": "R22"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "GMCC"
  ],
  "compatDetails": {
    "GMCC": "Drop-in replacement or displacement match for compatible GMCC systems."
  },
  "images": [
    "/products/airconditionercompressor-source/gmcc/gmcc-2-0-tr-rotary-r22-compressor-24840-btu-125x125-57a81b25.webp",
    "/products/airconditionercompressor-source/gmcc/gmcc-2-0-tr-rotary-r22-compressor-24840-btu-125x125-5fce737c.webp",
    "/products/airconditionercompressor-source/gmcc/gmcc-2-0-tr-rotary-r22-compressor-24840-btu-125x125-8aebbfab.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-gmcc-rotary-refrigeration-compressor",
  "code": "GMCC-ROTARY-REFRIGERATION",
  "catalogCode": "Z-GMCC-GMCC-ROT",
  "name": "Gmcc Rotary Refrigeration Compressor",
  "brand": "GMCC",
  "tagline": "GMCC Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Gmcc Rotary Refrigeration Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Gmcc Rotary Refrigeration Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "GMCC"
    },
    {
      "label": "Model Code",
      "value": "GMCC-ROTARY-REFRIGERATION"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "GMCC"
  ],
  "compatDetails": {
    "GMCC": "Drop-in replacement or displacement match for compatible GMCC systems."
  },
  "images": [
    "/products/airconditionercompressor-source/gmcc/gmcc-rotary-refrigeration-compressor-1-500x500-5e31b3e1.webp",
    "/products/airconditionercompressor-source/gmcc/gmcc-rotary-refrigeration-compressor-1-125x125-af207e29.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-highly-ate800-dc-inverter-rotary",
  "code": "ATE800",
  "catalogCode": "Z-HIGHLY-ATE800",
  "name": "Highly Ate800 DC Inverter Rotary",
  "brand": "Highly",
  "tagline": "Highly VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Highly Ate800 DC Inverter Rotary sourced for commercial replacement, repair, and displacement matching.",
  "description": "Highly Ate800 DC Inverter Rotary listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Highly"
    },
    {
      "label": "Model Code",
      "value": "ATE800"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Highly"
  ],
  "compatDetails": {
    "Highly": "Drop-in replacement or displacement match for compatible Highly systems."
  },
  "images": [
    "/products/airconditionercompressor-source/highly/highly-ate800-dc-inverter-rotary-500x500-1c9fc8dc.webp",
    "/products/airconditionercompressor-source/highly/highly-ate800-dc-inverter-rotary-500x500-3aa4105e.webp",
    "/products/airconditionercompressor-source/highly/highly-ate800-dc-inverter-rotary-500x500-4d5197ad.webp",
    "/products/airconditionercompressor-source/highly/highly-ate800-dc-inverter-rotary-250x250-d678b38d.webp",
    "/products/airconditionercompressor-source/highly/highly-ate800-dc-inverter-rotary-125x125-ae345efb.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-highly-ath356-rotary",
  "code": "ATH356",
  "catalogCode": "Z-HIGHLY-ATH356",
  "name": "Highly Ath356 Rotary",
  "brand": "Highly",
  "tagline": "Highly Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Highly Ath356 Rotary sourced for commercial replacement, repair, and displacement matching.",
  "description": "Highly Ath356 Rotary listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Highly"
    },
    {
      "label": "Model Code",
      "value": "ATH356"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Highly"
  ],
  "compatDetails": {
    "Highly": "Drop-in replacement or displacement match for compatible Highly systems."
  },
  "images": [
    "/products/airconditionercompressor-source/highly/highly-ath356-rotary-125x125-e79b07c4.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-highly-gsh218uy-compressor",
  "code": "GSH218UY",
  "catalogCode": "Z-HIGHLY-GSH218UY",
  "name": "Highly Gsh218uy Compressor",
  "brand": "Highly",
  "tagline": "Highly Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Highly Gsh218uy Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Highly Gsh218uy Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Highly"
    },
    {
      "label": "Model Code",
      "value": "GSH218UY"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Highly"
  ],
  "compatDetails": {
    "Highly": "Drop-in replacement or displacement match for compatible Highly systems."
  },
  "images": [
    "/products/airconditionercompressor-source/highly/highly-gsh218uy-compressor-125x125-499959bc.webp",
    "/products/airconditionercompressor-source/highly/highly-gsh218uy-compressor-125x125-847701ef.webp",
    "/products/airconditionercompressor-source/highly/highly-gsh218uy-compressor-125x125-188def12.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-highly-te800rc-rotary-scroll-compressor",
  "code": "TE800RC",
  "catalogCode": "Z-HIGHLY-TE800RC",
  "name": "Highly Te800rc Rotary Scroll Compressor",
  "brand": "Highly",
  "tagline": "Highly Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Highly Te800rc Rotary Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Highly Te800rc Rotary Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Highly"
    },
    {
      "label": "Model Code",
      "value": "TE800RC"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Highly"
  ],
  "compatDetails": {
    "Highly": "Drop-in replacement or displacement match for compatible Highly systems."
  },
  "images": [
    "/products/airconditionercompressor-source/highly/highly-te800rc-rotary-scroll-compressor-125x125-fd3b1ec9.webp",
    "/products/airconditionercompressor-source/highly/highly-te800rc-rotary-scroll-compressor-125x125-52e12070.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-highly-whp18000asc-rotary-compressor",
  "code": "WHP18000ASC",
  "catalogCode": "Z-HIGHLY-WHP18000",
  "name": "Highly Whp18000asc Rotary Compressor",
  "brand": "Highly",
  "tagline": "Highly Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Highly Whp18000asc Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Highly Whp18000asc Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Highly"
    },
    {
      "label": "Model Code",
      "value": "WHP18000ASC"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Highly"
  ],
  "compatDetails": {
    "Highly": "Drop-in replacement or displacement match for compatible Highly systems."
  },
  "images": [
    "/products/airconditionercompressor-source/highly/highly-whp18000asc-rotary-compressor-500x500-843e6352.webp",
    "/products/airconditionercompressor-source/highly/highly-whp18000asc-rotary-compressor-500x500-f6bd376d.webp",
    "/products/airconditionercompressor-source/highly/highly-whp18000asc-rotary-compressor-500x500-7bc0fb88.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-hitachi-603-scroll-compressor",
  "code": "HITACHI-603-SCROLL",
  "catalogCode": "Z-HITACHI-HITACHI-",
  "name": "Hitachi 603 Scroll Compressor",
  "brand": "Hitachi",
  "tagline": "Hitachi Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Hitachi 603 Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Hitachi 603 Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Hitachi"
    },
    {
      "label": "Model Code",
      "value": "HITACHI-603-SCROLL"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Hitachi"
  ],
  "compatDetails": {
    "Hitachi": "Drop-in replacement or displacement match for compatible Hitachi systems."
  },
  "images": [
    "/products/airconditionercompressor-source/hitachi/hitachi-603-scroll-compressor-500x500-4ef8ff2a.webp",
    "/products/airconditionercompressor-source/hitachi/hitachi-603-scroll-compressor-500x500-06759102.webp",
    "/products/airconditionercompressor-source/hitachi/hitachi-603-scroll-compressor-500x500-e9160974.webp",
    "/products/airconditionercompressor-source/hitachi/hitachi-603-scroll-compressor-125x125-7adf7d94.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-hitachi-all-air-conditioners-compressor",
  "code": "HITACHI-ALL-AIR",
  "catalogCode": "Z-HITACHI-HITACHI-",
  "name": "Hitachi All Air Conditioners Compressor",
  "brand": "Hitachi",
  "tagline": "Hitachi Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Hitachi All Air Conditioners Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Hitachi All Air Conditioners Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Hitachi"
    },
    {
      "label": "Model Code",
      "value": "HITACHI-ALL-AIR"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Hitachi"
  ],
  "compatDetails": {
    "Hitachi": "Drop-in replacement or displacement match for compatible Hitachi systems."
  },
  "images": [
    "/products/airconditionercompressor-source/hitachi/hitachi-all-air-conditioners-compressor-125x125-17517692.webp",
    "/products/airconditionercompressor-source/hitachi/hitachi-all-air-conditioners-compressor-125x125-62edd23b.webp",
    "/products/airconditionercompressor-source/hitachi/hitachi-all-air-conditioners-compressor-125x125-e767508a.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-hitachi-inverter-scroll-compressor",
  "code": "HITACHI-INVERTER-SCROLL",
  "catalogCode": "Z-HITACHI-HITACHI-",
  "name": "Hitachi Inverter Scroll Compressor",
  "brand": "Hitachi",
  "tagline": "Hitachi VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Hitachi Inverter Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Hitachi Inverter Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Hitachi"
    },
    {
      "label": "Model Code",
      "value": "HITACHI-INVERTER-SCROLL"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Hitachi"
  ],
  "compatDetails": {
    "Hitachi": "Drop-in replacement or displacement match for compatible Hitachi systems."
  },
  "images": [
    "/products/airconditionercompressor-source/hitachi/hitachi-inverter-scroll-compressor-125x125-cd2d3b8a.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-hitachi-rotary-compressor-1-5-ton",
  "code": "HITACHI-ROTARY-COMPRESSOR",
  "catalogCode": "Z-HITACHI-HITACHI-",
  "name": "Hitachi Rotary Compressor 1.5 TON",
  "brand": "Hitachi",
  "tagline": "Hitachi Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Hitachi Rotary Compressor 1.5 TON sourced for commercial replacement, repair, and displacement matching.",
  "description": "Hitachi Rotary Compressor 1.5 TON listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Hitachi"
    },
    {
      "label": "Model Code",
      "value": "HITACHI-ROTARY-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Hitachi"
  ],
  "compatDetails": {
    "Hitachi": "Drop-in replacement or displacement match for compatible Hitachi systems."
  },
  "images": [
    "/products/airconditionercompressor-source/hitachi/hitachi-rotary-compressor-1-5-ton-125x125-660253b8.webp",
    "/products/airconditionercompressor-source/hitachi/hitachi-rotary-compressor-1-5-ton-125x125-aee166d2.webp",
    "/products/airconditionercompressor-source/hitachi/hitachi-rotary-compressor-1-5-ton-125x125-8fae5c0c.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-hlj072t4lc6-danfoss-compressor",
  "code": "HLJ072T4LC6",
  "catalogCode": "Z-DANFOSS-HLJ072T4",
  "name": "Hlj072t4lc6 Danfoss Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Hlj072t4lc6 Danfoss Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Hlj072t4lc6 Danfoss Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "HLJ072T4LC6"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/hlj072t4lc6-danfoss-compressor-125x125-34069694.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-hrm042-danfoss-scroll-compressor",
  "code": "HRM042",
  "catalogCode": "Z-DANFOSS-HRM042",
  "name": "Hrm042 Danfoss Scroll Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Hrm042 Danfoss Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Hrm042 Danfoss Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "HRM042"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/hrm042-danfoss-scroll-compressor-125x125-cb93b107.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img-20250104-wa0051",
  "code": "WA0051",
  "catalogCode": "Z-GENERAL-WA0051",
  "name": "Commercial Sourcing Technical Reference Lot 20250104 Wa0051",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 20250104 Wa0051 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 20250104 Wa0051 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "WA0051"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img-20250104-wa0051-500x500-e5b1ae5e.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img-20250104-wa0053",
  "code": "WA0053",
  "catalogCode": "Z-GENERAL-WA0053",
  "name": "Commercial Sourcing Technical Reference Lot 20250104 Wa0053",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 20250104 Wa0053 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 20250104 Wa0053 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "WA0053"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img-20250104-wa0053-500x500-673e2706.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img-20250104-wa0054",
  "code": "WA0054",
  "catalogCode": "Z-GENERAL-WA0054",
  "name": "Commercial Sourcing Technical Reference Lot 20250104 Wa0054",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 20250104 Wa0054 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 20250104 Wa0054 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "WA0054"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img-20250104-wa0054-500x500-776c2558.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406130206",
  "code": "IMG20240406130206",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406130206",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406130206 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406130206 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406130206"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406130206-500x500-6b20f8d9.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406130243",
  "code": "IMG20240406130243",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406130243",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406130243 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406130243 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406130243"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406130243-500x500-f312d111.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406130301",
  "code": "IMG20240406130301",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406130301",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406130301 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406130301 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406130301"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406130301-500x500-c8ab6127.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406130540",
  "code": "IMG20240406130540",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406130540",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406130540 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406130540 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406130540"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406130540-500x500-f6d63acc.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406130949",
  "code": "IMG20240406130949",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406130949",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406130949 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406130949 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406130949"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406130949-500x500-bba8d95d.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406131730",
  "code": "IMG20240406131730",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406131730",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406131730 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406131730 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406131730"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406131730-500x500-6cc2c375.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406132138",
  "code": "IMG20240406132138",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406132138",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406132138 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406132138 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406132138"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406132138-500x500-0016ca9b.webp",
    "/products/airconditionercompressor-source/general/img20240406132138-125x125-25f80384.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406132200",
  "code": "IMG20240406132200",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406132200",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406132200 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406132200 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406132200"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406132200-500x500-3611d9cf.webp",
    "/products/airconditionercompressor-source/general/img20240406132200-125x125-98a410f4.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406132247",
  "code": "IMG20240406132247",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406132247",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406132247 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406132247 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406132247"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406132247-500x500-c058f7a2.webp",
    "/products/airconditionercompressor-source/general/img20240406132247-125x125-ce392bb8.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406132827",
  "code": "IMG20240406132827",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406132827",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406132827 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406132827 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406132827"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406132827-500x500-e9888871.webp",
    "/products/airconditionercompressor-source/general/img20240406132827-125x125-f8b644a4.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406132910",
  "code": "IMG20240406132910",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406132910",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406132910 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406132910 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406132910"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406132910-500x500-c25ccf47.webp",
    "/products/airconditionercompressor-source/general/img20240406132910-125x125-6060cfef.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406132939",
  "code": "IMG20240406132939",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406132939",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406132939 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406132939 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406132939"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406132939-500x500-c2efc96b.webp",
    "/products/airconditionercompressor-source/general/img20240406132939-125x125-19ff54d2.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406135452",
  "code": "IMG20240406135452",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406135452",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406135452 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406135452 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406135452"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406135452-500x500-1d77c72c.webp",
    "/products/airconditionercompressor-source/general/img20240406135452-125x125-97a92834.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406135556",
  "code": "IMG20240406135556",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406135556",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406135556 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406135556 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406135556"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406135556-500x500-d6df247d.webp",
    "/products/airconditionercompressor-source/general/img20240406135556-125x125-972d53a8.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406140346",
  "code": "IMG20240406140346",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406140346",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406140346 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406140346 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406140346"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406140346-500x500-7e6d45a1.webp",
    "/products/airconditionercompressor-source/general/img20240406140346-125x125-1638a4b3.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406140355",
  "code": "IMG20240406140355",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406140355",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406140355 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406140355 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406140355"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406140355-500x500-4a816bbf.webp",
    "/products/airconditionercompressor-source/general/img20240406140355-125x125-c2c8998e.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406140423",
  "code": "IMG20240406140423",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406140423",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406140423 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406140423 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406140423"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406140423-500x500-4fbfc6c3.webp",
    "/products/airconditionercompressor-source/general/img20240406140423-125x125-11a47bd1.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406140624",
  "code": "IMG20240406140624",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406140624",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406140624 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406140624 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406140624"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406140624-125x125-4dacca29.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406140647",
  "code": "IMG20240406140647",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406140647",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406140647 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406140647 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406140647"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406140647-125x125-60ce3107.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406141137",
  "code": "IMG20240406141137",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406141137",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406141137 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406141137 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406141137"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406141137-500x500-f9726f34.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406141153",
  "code": "IMG20240406141153",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406141153",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406141153 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406141153 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406141153"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406141153-500x500-8ea36954.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-img20240406141228",
  "code": "IMG20240406141228",
  "catalogCode": "Z-GENERAL-IMG20240",
  "name": "Commercial Sourcing Technical Reference Lot 240406141228",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 240406141228 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 240406141228 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "IMG20240406141228"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/img20240406141228-500x500-10379d73.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-inverter-compressor-daikin-vrv",
  "code": "INVERTER-COMPRESSOR-DAIKIN",
  "catalogCode": "Z-DAIKIN-INVERTER",
  "name": "Inverter Compressor Daikin VRV",
  "brand": "Daikin",
  "tagline": "Daikin VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Inverter Compressor Daikin VRV sourced for commercial replacement, repair, and displacement matching.",
  "description": "Inverter Compressor Daikin VRV listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Daikin"
    },
    {
      "label": "Model Code",
      "value": "INVERTER-COMPRESSOR-DAIKIN"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Daikin"
  ],
  "compatDetails": {
    "Daikin": "Drop-in replacement or displacement match for compatible Daikin systems."
  },
  "images": [
    "/products/airconditionercompressor-source/daikin/inverter-compressor-daikin-vrv-500x500-6028a222.webp",
    "/products/airconditionercompressor-source/daikin/inverter-compressor-daikin-vrv-125x125-173efbb4.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-kcj498-emerson-compressor",
  "code": "KCJ498",
  "catalogCode": "Z-COPELAND-KCJ498",
  "name": "Copeland Kcj498 Emerson Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Kcj498 Emerson Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Kcj498 Emerson Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "KCJ498"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/kcj498-emerson-compressor-125x125-f87c38bd.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-kcm511cal-emerson-copeland-compressor",
  "code": "KCM511CAL",
  "catalogCode": "Z-COPELAND-KCM511CA",
  "name": "Kcm511cal Emerson Copeland Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Kcm511cal Emerson Copeland Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Kcm511cal Emerson Copeland Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "KCM511CAL"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/kcm511cal-emerson-copeland-compressor-125x125-a80f2b61.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-lg-rotary-compressor-1-5tr",
  "code": "5TR",
  "catalogCode": "Z-LG-5TR",
  "name": "Lg Rotary Compressor 1 5tr",
  "brand": "LG",
  "tagline": "LG Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Lg Rotary Compressor 1 5tr sourced for commercial replacement, repair, and displacement matching.",
  "description": "Lg Rotary Compressor 1 5tr listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "LG"
    },
    {
      "label": "Model Code",
      "value": "5TR"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "LG"
  ],
  "compatDetails": {
    "LG": "Drop-in replacement or displacement match for compatible LG systems."
  },
  "images": [
    "/products/airconditionercompressor-source/lg/lg-rotary-compressor-1-5tr-125x125-108f5420.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-lg-vrv-air-conditioner-compressor",
  "code": "LG-VRV-AIR",
  "catalogCode": "Z-LG-LG-VRV-A",
  "name": "Lg VRV Air Conditioner Compressor",
  "brand": "LG",
  "tagline": "LG VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Lg VRV Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Lg VRV Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "LG"
    },
    {
      "label": "Model Code",
      "value": "LG-VRV-AIR"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "LG"
  ],
  "compatDetails": {
    "LG": "Drop-in replacement or displacement match for compatible LG systems."
  },
  "images": [
    "/products/airconditionercompressor-source/lg/lg-vrv-air-conditioner-compressor-500x500-1fbb47a7.webp",
    "/products/airconditionercompressor-source/lg/lg-vrv-air-conditioner-compressor-500x500-651af61b.webp",
    "/products/airconditionercompressor-source/lg/lg-vrv-air-conditioner-compressor-500x500-fbb569e3.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-ltz40hl4ave-danfoss-scroll-compressor",
  "code": "LTZ40HL4AVE",
  "catalogCode": "Z-DANFOSS-LTZ40HL4",
  "name": "Ltz40hl4ave Danfoss Scroll Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Ltz40hl4ave Danfoss Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Ltz40hl4ave Danfoss Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "LTZ40HL4AVE"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/ltz40hl4ave-danfoss-scroll-compressor-125x125-29df965f.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-midea-vrv-air-conditioner-compressor",
  "code": "MIDEA-VRV-AIR",
  "catalogCode": "Z-MIDEA-MIDEA-VR",
  "name": "Midea VRV Air Conditioner Compressor",
  "brand": "Midea",
  "tagline": "Midea VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Midea VRV Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Midea VRV Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Midea"
    },
    {
      "label": "Model Code",
      "value": "MIDEA-VRV-AIR"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Midea"
  ],
  "compatDetails": {
    "Midea": "Drop-in replacement or displacement match for compatible Midea systems."
  },
  "images": [
    "/products/airconditionercompressor-source/midea/midea-vrv-air-conditioner-compressor-125x125-723d41d3.jpg"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-mitsubishi-rb174-rotary-compressor",
  "code": "RB174",
  "catalogCode": "Z-MITSUBISHI-RB174",
  "name": "Mitsubishi Rb174 Rotary Compressor",
  "brand": "Mitsubishi",
  "tagline": "Mitsubishi Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Mitsubishi Rb174 Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Mitsubishi Rb174 Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Mitsubishi"
    },
    {
      "label": "Model Code",
      "value": "RB174"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Mitsubishi"
  ],
  "compatDetails": {
    "Mitsubishi": "Drop-in replacement or displacement match for compatible Mitsubishi systems."
  },
  "images": [
    "/products/airconditionercompressor-source/mitsubishi/mitsubishi-rb174-rotary-compressor-125x125-69fa646d.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-mitsubishi-rotary-compressor",
  "code": "MITSUBISHI-ROTARY-COMPRESSOR",
  "catalogCode": "Z-MITSUBISHI-MITSUBIS",
  "name": "Mitsubishi Rotary Compressor",
  "brand": "Mitsubishi",
  "tagline": "Mitsubishi Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Mitsubishi Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Mitsubishi Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Mitsubishi"
    },
    {
      "label": "Model Code",
      "value": "MITSUBISHI-ROTARY-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Mitsubishi"
  ],
  "compatDetails": {
    "Mitsubishi": "Drop-in replacement or displacement match for compatible Mitsubishi systems."
  },
  "images": [
    "/products/airconditionercompressor-source/mitsubishi/mitsubishi-rotary-compressor-500x500-2f51735a.webp",
    "/products/airconditionercompressor-source/mitsubishi/mitsubishi-rotary-compressor-500x500-5c16f5fc.webp",
    "/products/airconditionercompressor-source/mitsubishi/mitsubishi-rotary-compressor-125x125-58759a69.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-mtz125-danfoss-compressor",
  "code": "MTZ125",
  "catalogCode": "Z-DANFOSS-MTZ125",
  "name": "Mtz125 Danfoss Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Mtz125 Danfoss Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Mtz125 Danfoss Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "MTZ125"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/mtz125-danfoss-compressor-125x125-5c26775c.webp",
    "/products/airconditionercompressor-source/danfoss/mtz125-danfoss-compressor-125x125-a45dba38.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-panasonic-2-ton-rotary-compressor",
  "code": "PANASONIC-2-TON",
  "catalogCode": "Z-PANASONIC-PANASONI",
  "name": "Panasonic 2 TON Rotary Compressor",
  "brand": "Panasonic",
  "tagline": "Panasonic Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Panasonic 2 TON Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Panasonic 2 TON Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Panasonic"
    },
    {
      "label": "Model Code",
      "value": "PANASONIC-2-TON"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Panasonic"
  ],
  "compatDetails": {
    "Panasonic": "Drop-in replacement or displacement match for compatible Panasonic systems."
  },
  "images": [
    "/products/airconditionercompressor-source/panasonic/panasonic-2-ton-rotary-compressor-125x125-9e3eeeba.webp",
    "/products/airconditionercompressor-source/panasonic/panasonic-2-ton-rotary-compressor-125x125-3f63e143.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-panasonic-2p21t225az-rotary-compressor",
  "code": "2P21T225AZ",
  "catalogCode": "Z-PANASONIC-2P21T225",
  "name": "Panasonic 2p21t225az Rotary Compressor",
  "brand": "Panasonic",
  "tagline": "Panasonic Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Panasonic 2p21t225az Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Panasonic 2p21t225az Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Panasonic"
    },
    {
      "label": "Model Code",
      "value": "2P21T225AZ"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Panasonic"
  ],
  "compatDetails": {
    "Panasonic": "Drop-in replacement or displacement match for compatible Panasonic systems."
  },
  "images": [
    "/products/airconditionercompressor-source/panasonic/panasonic-2p21t225az-rotary-compressor-125x125-65ac8792.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-panasonic-2v42s225aua-rotary-compressor",
  "code": "2V42S225AUA",
  "catalogCode": "Z-PANASONIC-2V42S225",
  "name": "Panasonic 2v42s225aua Rotary Compressor",
  "brand": "Panasonic",
  "tagline": "Panasonic Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Panasonic 2v42s225aua Rotary Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Panasonic 2v42s225aua Rotary Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Panasonic"
    },
    {
      "label": "Model Code",
      "value": "2V42S225AUA"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Panasonic"
  ],
  "compatDetails": {
    "Panasonic": "Drop-in replacement or displacement match for compatible Panasonic systems."
  },
  "images": [
    "/products/airconditionercompressor-source/panasonic/panasonic-2v42s225aua-rotary-compressor-125x125-7c02767b.webp",
    "/products/airconditionercompressor-source/panasonic/panasonic-2v42s225aua-rotary-compressor-125x125-ed2efb54.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-panasonic-sb453-scroll-compressor",
  "code": "SB453",
  "catalogCode": "Z-PANASONIC-SB453",
  "name": "Panasonic Sb453 Scroll Compressor",
  "brand": "Panasonic",
  "tagline": "Panasonic Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Panasonic Sb453 Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Panasonic Sb453 Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Panasonic"
    },
    {
      "label": "Model Code",
      "value": "SB453"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Panasonic"
  ],
  "compatDetails": {
    "Panasonic": "Drop-in replacement or displacement match for compatible Panasonic systems."
  },
  "images": [
    "/products/airconditionercompressor-source/panasonic/panasonic-sb453-scroll-compressor-125x125-65e3f5ce.webp",
    "/products/airconditionercompressor-source/panasonic/panasonic-sb453-scroll-compressor-125x125-f64ad2b8.webp",
    "/products/airconditionercompressor-source/panasonic/panasonic-sb453-scroll-compressor-125x125-acc9fea5.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-panasonic-scn603-scroll-compressor",
  "code": "SCN603",
  "catalogCode": "Z-PANASONIC-SCN603",
  "name": "Panasonic Scn603 Scroll Compressor",
  "brand": "Panasonic",
  "tagline": "Panasonic Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Panasonic Scn603 Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Panasonic Scn603 Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Panasonic"
    },
    {
      "label": "Model Code",
      "value": "SCN603"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Panasonic"
  ],
  "compatDetails": {
    "Panasonic": "Drop-in replacement or displacement match for compatible Panasonic systems."
  },
  "images": [
    "/products/airconditionercompressor-source/panasonic/panasonic-scn603-scroll-compressor-125x125-09f99f24.webp",
    "/products/airconditionercompressor-source/panasonic/panasonic-scn603-scroll-compressor-125x125-8444e119.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-panasonic-scn903h8a-scroll-compressor",
  "code": "SCN903H8A",
  "catalogCode": "Z-PANASONIC-SCN903H8",
  "name": "Panasonic Scn903h8a Scroll Compressor",
  "brand": "Panasonic",
  "tagline": "Panasonic Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Panasonic Scn903h8a Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Panasonic Scn903h8a Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Panasonic"
    },
    {
      "label": "Model Code",
      "value": "SCN903H8A"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Panasonic"
  ],
  "compatDetails": {
    "Panasonic": "Drop-in replacement or displacement match for compatible Panasonic systems."
  },
  "images": [
    "/products/airconditionercompressor-source/panasonic/panasonic-scn903h8a-scroll-compressor-125x125-adbee8fb.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-product",
  "code": "PRODUCT",
  "catalogCode": "Z-GENERAL-PRODUCT",
  "name": "Product",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Product sourced for commercial replacement, repair, and displacement matching.",
  "description": "Product listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "PRODUCT"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/product-500x500-5e611b78.webp",
    "/products/airconditionercompressor-source/general/product-500x500-6d7d9c72.webp",
    "/products/airconditionercompressor-source/general/product-500x500-6ee859e3.webp",
    "/products/airconditionercompressor-source/general/product-500x500-9388b98b.webp",
    "/products/airconditionercompressor-source/general/product-500x500-e1193127.webp",
    "/products/airconditionercompressor-source/general/product-500x500-53b3332f.webp",
    "/products/airconditionercompressor-source/general/product-500x500-fedab6b6.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-product-jpeg",
  "code": "PRODUCT-JPEG",
  "catalogCode": "Z-GENERAL-PRODUCT-",
  "name": "Commercial Sourcing Technical Reference Lot Product Jpeg",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot Product Jpeg sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot Product Jpeg listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "PRODUCT-JPEG"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/product-jpeg-64-500x500-79f258a4.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-84-500x500-f6ad6374.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-007b76f0.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-03c45022.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-07334bab.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-07464832.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-0ad8b99a.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-0fa828c6.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-1162f287.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-14faa51e.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-15ea7b9a.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-16be6ade.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-187d3dd1.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-1be90e3a.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-1e718731.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-21f4affa.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-244ad2fc.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-25ac4d51.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-2b9356f2.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-2c18ce48.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-2ff62e23.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-32bae37e.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-340d85b4.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-3707c533.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-3ab44c8c.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-3b05c797.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-3c58a4eb.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-40aebabe.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-41d26932.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-45e5cb28.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-4c5cf62c.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-52ce0ec2.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-52ce3638.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-5651858b.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-57a19076.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-5f47445f.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-5fb2c850.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-613cad9a.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-619f9243.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-68869ddc.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-6ae3d981.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-7bb5c440.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-81df09d5.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-836d54a3.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-8466debe.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-8f46846b.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-95909139.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-99702f41.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-9e1bf1fc.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-9fe38447.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-a4ee3565.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-a7a7cd12.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-a842b21e.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-af79b664.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-b0ef2730.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-b6cb1c57.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-be631f92.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-c2eed853.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-c53a94d9.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-cf3f73bb.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-d31174ae.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-d4c6737a.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-d83a1aa8.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-e19600a4.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-e4345417.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-fb2277b8.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-fe41ebf8.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-65-500x500-2f4f1f34.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-e684a5e9.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-3d76510f.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-4588f5ad.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-821d51af.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-898b6ba4.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-500x500-1d63afe2.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-250x250-d1e2698b.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-64-125x125-3831d794.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-125x125-3c457294.webp",
    "/products/airconditionercompressor-source/general/product-jpeg-84-125x125-2dc007e6.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-rotary-compressor-gmcc-highly-panasonic-lg-samsung",
  "code": "ROTARY-COMPRESSOR-GMCC",
  "catalogCode": "Z-PANASONIC-ROTARY-C",
  "name": "Rotary Compressor Gmcc Highly Panasonic Lg Samsung",
  "brand": "Panasonic",
  "tagline": "Panasonic Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Rotary Compressor Gmcc Highly Panasonic Lg Samsung sourced for commercial replacement, repair, and displacement matching.",
  "description": "Rotary Compressor Gmcc Highly Panasonic Lg Samsung listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Panasonic"
    },
    {
      "label": "Model Code",
      "value": "ROTARY-COMPRESSOR-GMCC"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Panasonic"
  ],
  "compatDetails": {
    "Panasonic": "Drop-in replacement or displacement match for compatible Panasonic systems."
  },
  "images": [
    "/products/airconditionercompressor-source/panasonic/rotary-compressor-gmcc-highly-panasonic-lg-samsung-125x125-4f004d52.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-rotary-highly-compressor",
  "code": "ROTARY-HIGHLY-COMPRESSOR",
  "catalogCode": "Z-HIGHLY-ROTARY-H",
  "name": "Rotary Highly Compressor",
  "brand": "Highly",
  "tagline": "Highly Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Rotary Highly Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Rotary Highly Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Highly"
    },
    {
      "label": "Model Code",
      "value": "ROTARY-HIGHLY-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Highly"
  ],
  "compatDetails": {
    "Highly": "Drop-in replacement or displacement match for compatible Highly systems."
  },
  "images": [
    "/products/airconditionercompressor-source/highly/rotary-highly-compressor-125x125-956cb3a1.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-rotary-refrigeration-compressor",
  "code": "ROTARY-REFRIGERATION-COMPRESSOR",
  "catalogCode": "Z-GENERAL-ROTARY-R",
  "name": "Rotary Refrigeration Compressor",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Rotary Refrigeration Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Rotary Refrigeration Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "ROTARY-REFRIGERATION-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/rotary-refrigeration-compressor-1-500x500-6d696b00.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-samsung-ac-compressor",
  "code": "SAMSUNG-AC-COMPRESSOR",
  "catalogCode": "Z-SAMSUNG-SAMSUNG-",
  "name": "Samsung AC Compressor",
  "brand": "Samsung",
  "tagline": "Samsung Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Samsung AC Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Samsung AC Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Samsung"
    },
    {
      "label": "Model Code",
      "value": "SAMSUNG-AC-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Samsung"
  ],
  "compatDetails": {
    "Samsung": "Drop-in replacement or displacement match for compatible Samsung systems."
  },
  "images": [
    "/products/airconditionercompressor-source/samsung/samsung-ac-compressor-500x500-cf2b1243.webp",
    "/products/airconditionercompressor-source/samsung/samsung-ac-compressor-500x500-da2d3b14.webp",
    "/products/airconditionercompressor-source/samsung/samsung-ac-compressor-500x500-431586fa.webp",
    "/products/airconditionercompressor-source/samsung/samsung-ac-compressor-125x125-8772e8c1.webp",
    "/products/airconditionercompressor-source/samsung/samsung-ac-compressor-125x125-cbfb4732.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-samsung-rotary-compressor-1-5-ton",
  "code": "SAMSUNG-ROTARY-COMPRESSOR",
  "catalogCode": "Z-SAMSUNG-SAMSUNG-",
  "name": "Samsung Rotary Compressor 1.5 TON",
  "brand": "Samsung",
  "tagline": "Samsung Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Samsung Rotary Compressor 1.5 TON sourced for commercial replacement, repair, and displacement matching.",
  "description": "Samsung Rotary Compressor 1.5 TON listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Samsung"
    },
    {
      "label": "Model Code",
      "value": "SAMSUNG-ROTARY-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Samsung"
  ],
  "compatDetails": {
    "Samsung": "Drop-in replacement or displacement match for compatible Samsung systems."
  },
  "images": [
    "/products/airconditionercompressor-source/samsung/samsung-rotary-compressor-1-5-ton-125x125-00e8171b.webp",
    "/products/airconditionercompressor-source/samsung/samsung-rotary-compressor-1-5-ton-125x125-477ea291.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-samsung-rotary-compressor-2ton",
  "code": "2TON",
  "catalogCode": "Z-SAMSUNG-2TON",
  "name": "Samsung Rotary Compressor 2ton",
  "brand": "Samsung",
  "tagline": "Samsung Rotary Compressors Sourcing & Displacement Match",
  "category": "Rotary Compressors",
  "type": "Rotary Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Samsung Rotary Compressor 2ton sourced for commercial replacement, repair, and displacement matching.",
  "description": "Samsung Rotary Compressor 2ton listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Samsung"
    },
    {
      "label": "Model Code",
      "value": "2TON"
    },
    {
      "label": "Category",
      "value": "Rotary Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Samsung"
  ],
  "compatDetails": {
    "Samsung": "Drop-in replacement or displacement match for compatible Samsung systems."
  },
  "images": [
    "/products/airconditionercompressor-source/samsung/samsung-rotary-compressor-2ton-125x125-5cf3fe4c.webp",
    "/products/airconditionercompressor-source/samsung/samsung-rotary-compressor-2ton-125x125-fd8bcdd5.webp",
    "/products/airconditionercompressor-source/samsung/samsung-rotary-compressor-2ton-125x125-c244e316.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-samsung-rotary-ds4g-dc-inverter-rotary",
  "code": "DS4G",
  "catalogCode": "Z-SAMSUNG-DS4G",
  "name": "Samsung Rotary Ds4g DC Inverter Rotary",
  "brand": "Samsung",
  "tagline": "Samsung VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Samsung Rotary Ds4g DC Inverter Rotary sourced for commercial replacement, repair, and displacement matching.",
  "description": "Samsung Rotary Ds4g DC Inverter Rotary listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Samsung"
    },
    {
      "label": "Model Code",
      "value": "DS4G"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Samsung"
  ],
  "compatDetails": {
    "Samsung": "Drop-in replacement or displacement match for compatible Samsung systems."
  },
  "images": [
    "/products/airconditionercompressor-source/samsung/samsung-rotary-ds4g-dc-inverter-rotary-125x125-cce4472b.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-samsung-vrv-air-conditioner-compressor",
  "code": "SAMSUNG-VRV-AIR",
  "catalogCode": "Z-SAMSUNG-SAMSUNG-",
  "name": "Samsung VRV Air Conditioner Compressor",
  "brand": "Samsung",
  "tagline": "Samsung VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Samsung VRV Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Samsung VRV Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Samsung"
    },
    {
      "label": "Model Code",
      "value": "SAMSUNG-VRV-AIR"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Samsung"
  ],
  "compatDetails": {
    "Samsung": "Drop-in replacement or displacement match for compatible Samsung systems."
  },
  "images": [
    "/products/airconditionercompressor-source/samsung/samsung-vrv-air-conditioner-compressor-125x125-f489fd59.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-scroll-compressor-all-brands",
  "code": "SCROLL-COMPRESSOR-ALL",
  "catalogCode": "Z-GENERAL-SCROLL-C",
  "name": "Scroll Compressor All Brands",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Scroll Compressor All Brands sourced for commercial replacement, repair, and displacement matching.",
  "description": "Scroll Compressor All Brands listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "SCROLL-COMPRESSOR-ALL"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/scroll-compressor-all-brands-125x125-20d58a83.webp",
    "/products/airconditionercompressor-source/general/scroll-compressor-all-brands-125x125-74bea520.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-semi-hermetic-compressor-bitzer-2ces-3y-40s",
  "code": "2CES",
  "catalogCode": "Z-BITZER-2CES",
  "name": "Semi Hermetic Compressor Bitzer 2ces 3y 40s",
  "brand": "Bitzer",
  "tagline": "Bitzer Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Semi Hermetic Compressor Bitzer 2ces 3y 40s sourced for commercial replacement, repair, and displacement matching.",
  "description": "Semi Hermetic Compressor Bitzer 2ces 3y 40s listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Bitzer"
    },
    {
      "label": "Model Code",
      "value": "2CES"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Bitzer"
  ],
  "compatDetails": {
    "Bitzer": "Drop-in replacement or displacement match for compatible Bitzer systems."
  },
  "images": [
    "/products/airconditionercompressor-source/bitzer/semi-hermetic-compressor-bitzer-2ces-3y-40s-500x500-7e30234a.webp",
    "/products/airconditionercompressor-source/bitzer/semi-hermetic-compressor-bitzer-2ces-3y-40s-500x500-86cceea3.webp",
    "/products/airconditionercompressor-source/bitzer/semi-hermetic-compressor-bitzer-2ces-3y-40s-500x500-6ac2d74a.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-sh140-danfoss-compressor",
  "code": "SH140",
  "catalogCode": "Z-DANFOSS-SH140",
  "name": "Sh140 Danfoss Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Sh140 Danfoss Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Sh140 Danfoss Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "SH140"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/sh140-danfoss-compressor-125x125-c48e8969.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-sm110-danfoss-scroll-compressor",
  "code": "SM110",
  "catalogCode": "Z-DANFOSS-SM110",
  "name": "Sm110 Danfoss Scroll Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Sm110 Danfoss Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Sm110 Danfoss Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "SM110"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/sm110-danfoss-scroll-compressor-500x500-79956953.webp",
    "/products/airconditionercompressor-source/danfoss/sm110-danfoss-scroll-compressor-500x500-60b1d2bb.webp",
    "/products/airconditionercompressor-source/danfoss/sm110-danfoss-scroll-compressor-500x500-8ca6b98a.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-sm160-danfoss-small-domb-compressor",
  "code": "SM160",
  "catalogCode": "Z-DANFOSS-SM160",
  "name": "Sm160 Danfoss Small Domb Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Sm160 Danfoss Small Domb Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Sm160 Danfoss Small Domb Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "SM160"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/sm160-danfoss-small-domb-compressor-125x125-01574263.webp",
    "/products/airconditionercompressor-source/danfoss/sm160-danfoss-small-domb-compressor-125x125-77fff068.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-sy-240-danfoss-scroll-compressor",
  "code": "SY-240-DANFOSS",
  "catalogCode": "Z-DANFOSS-SY-240-D",
  "name": "Sy 240 Danfoss Scroll Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Sy 240 Danfoss Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Sy 240 Danfoss Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "SY-240-DANFOSS"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/sy-240-danfoss-scroll-compressor-1-500x500-5c9c62c0.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-sy240-danfoss-compressor",
  "code": "SY240",
  "catalogCode": "Z-DANFOSS-SY240",
  "name": "Sy240 Danfoss Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Sy240 Danfoss Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Sy240 Danfoss Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "SY240"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/sy240-danfoss-compressor-125x125-34f4fa9c.webp",
    "/products/airconditionercompressor-source/danfoss/sy240-danfoss-compressor-125x125-729fa6cb.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-sy300-danfoss-scroll-compressor",
  "code": "SY300",
  "catalogCode": "Z-DANFOSS-SY300",
  "name": "Sy300 Danfoss Scroll Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Sy300 Danfoss Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Sy300 Danfoss Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "SY300"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/sy300-danfoss-scroll-compressor-125x125-43d40407.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-tecumseh-aw-compressor",
  "code": "TECUMSEH-AW-COMPRESSOR",
  "catalogCode": "Z-TECUMSEH-TECUMSEH",
  "name": "Tecumseh Aw Compressor",
  "brand": "Tecumseh",
  "tagline": "Tecumseh Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Tecumseh Aw Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Tecumseh Aw Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Tecumseh"
    },
    {
      "label": "Model Code",
      "value": "TECUMSEH-AW-COMPRESSOR"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Tecumseh"
  ],
  "compatDetails": {
    "Tecumseh": "Drop-in replacement or displacement match for compatible Tecumseh systems."
  },
  "images": [
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw-compressor-500x500-3b45e3a5.webp",
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw-compressor-500x500-3df6a8d7.webp",
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw-compressor-500x500-71514797.webp",
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw-compressor-125x125-757a3310.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-tecumseh-aw235-recip-compressor",
  "code": "AW235",
  "catalogCode": "Z-TECUMSEH-AW235",
  "name": "Tecumseh Aw235 RECIP Compressor",
  "brand": "Tecumseh",
  "tagline": "Tecumseh Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Tecumseh Aw235 RECIP Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Tecumseh Aw235 RECIP Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Tecumseh"
    },
    {
      "label": "Model Code",
      "value": "AW235"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Tecumseh"
  ],
  "compatDetails": {
    "Tecumseh": "Drop-in replacement or displacement match for compatible Tecumseh systems."
  },
  "images": [
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw235-recip-compressor-125x125-a08a5d9c.webp",
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw235-recip-compressor-125x125-6e8c365b.webp",
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw235-recip-compressor-125x125-103428bf.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-tecumseh-aw235th-compressor",
  "code": "AW235TH",
  "catalogCode": "Z-TECUMSEH-AW235TH",
  "name": "Tecumseh Aw235th Compressor",
  "brand": "Tecumseh",
  "tagline": "Tecumseh Reciprocating Compressors Sourcing & Displacement Match",
  "category": "Reciprocating Compressors",
  "type": "Semi-Hermetic Reciprocating",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Tecumseh Aw235th Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Tecumseh Aw235th Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Tecumseh"
    },
    {
      "label": "Model Code",
      "value": "AW235TH"
    },
    {
      "label": "Category",
      "value": "Reciprocating Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Tecumseh"
  ],
  "compatDetails": {
    "Tecumseh": "Drop-in replacement or displacement match for compatible Tecumseh systems."
  },
  "images": [
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw235th-compressor-125x125-4eb7699d.webp",
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw235th-compressor-125x125-e0e0c03d.webp",
    "/products/airconditionercompressor-source/tecumseh/tecumseh-aw235th-compressor-125x125-70f35d26.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-toshiba-vrv-air-conditioner-compressor",
  "code": "TOSHIBA-VRV-AIR",
  "catalogCode": "Z-TOSHIBA-TOSHIBA-",
  "name": "Toshiba VRV Air Conditioner Compressor",
  "brand": "Toshiba",
  "tagline": "Toshiba VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Toshiba VRV Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Toshiba VRV Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Toshiba"
    },
    {
      "label": "Model Code",
      "value": "TOSHIBA-VRV-AIR"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Toshiba"
  ],
  "compatDetails": {
    "Toshiba": "Drop-in replacement or displacement match for compatible Toshiba systems."
  },
  "images": [
    "/products/airconditionercompressor-source/toshiba/toshiba-vrv-air-conditioner-compressor-500x500-bbc309de.webp",
    "/products/airconditionercompressor-source/toshiba/toshiba-vrv-air-conditioner-compressor-500x500-cdb5719e.webp",
    "/products/airconditionercompressor-source/toshiba/toshiba-vrv-air-conditioner-compressor-500x500-e245d61a.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-voltas-air-conditioner-compressor",
  "code": "VOLTAS-AIR-CONDITIONER",
  "catalogCode": "Z-VOLTAS-VOLTAS-A",
  "name": "Voltas Air Conditioner Compressor",
  "brand": "Voltas",
  "tagline": "Voltas Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Voltas Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Voltas Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Voltas"
    },
    {
      "label": "Model Code",
      "value": "VOLTAS-AIR-CONDITIONER"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Voltas"
  ],
  "compatDetails": {
    "Voltas": "Drop-in replacement or displacement match for compatible Voltas systems."
  },
  "images": [
    "/products/airconditionercompressor-source/voltas/voltas-air-conditioner-compressor-500x500-0b722412.webp",
    "/products/airconditionercompressor-source/voltas/voltas-air-conditioner-compressor-500x500-2c0d25b6.webp",
    "/products/airconditionercompressor-source/voltas/voltas-air-conditioner-compressor-500x500-e68397af.webp",
    "/products/airconditionercompressor-source/voltas/voltas-air-conditioner-compressor-500x500-ea2cf13c.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-vrv-vrf-air-conditioner-compressor",
  "code": "VRV-VRF-AIR",
  "catalogCode": "Z-GENERAL-VRV-VRF-",
  "name": "VRV VRF Air Conditioner Compressor",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing VRF / DC Inverter Sourcing & Displacement Match",
  "category": "VRF / DC Inverter",
  "type": "VRF / Inverter Compressor",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "VRV VRF Air Conditioner Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "VRV VRF Air Conditioner Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "VRV-VRF-AIR"
    },
    {
      "label": "Category",
      "value": "VRF / DC Inverter"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/vrv-vrf-air-conditioner-compressor-500x500-19e44ec5.webp",
    "/products/airconditionercompressor-source/general/vrv-vrf-air-conditioner-compressor-500x500-73e93547.webp",
    "/products/airconditionercompressor-source/general/vrv-vrf-air-conditioner-compressor-500x500-faa20270.webp",
    "/products/airconditionercompressor-source/general/vrv-vrf-air-conditioner-compressor-250x250-e19d1d7b.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-vzh044-danfoss-compressor",
  "code": "VZH044",
  "catalogCode": "Z-DANFOSS-VZH044",
  "name": "Vzh044 Danfoss Compressor",
  "brand": "Danfoss",
  "tagline": "Danfoss Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Vzh044 Danfoss Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Vzh044 Danfoss Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Danfoss"
    },
    {
      "label": "Model Code",
      "value": "VZH044"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Danfoss"
  ],
  "compatDetails": {
    "Danfoss": "Drop-in replacement or displacement match for compatible Danfoss systems."
  },
  "images": [
    "/products/airconditionercompressor-source/danfoss/vzh044-danfoss-compressor-125x125-6b6993a8.webp",
    "/products/airconditionercompressor-source/danfoss/vzh044-danfoss-compressor-125x125-c0d57f9c.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-whatsapp-image-2023-12-11-at-14-22-37",
  "code": "WHATSAPP-IMAGE-2023",
  "catalogCode": "Z-GENERAL-WHATSAPP",
  "name": "Commercial Sourcing Technical Reference Lot 2023 12 11 At 1",
  "brand": "Commercial Sourcing",
  "tagline": "Commercial Sourcing Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Commercial Sourcing Technical Reference Lot 2023 12 11 At 1 sourced for commercial replacement, repair, and displacement matching.",
  "description": "Commercial Sourcing Technical Reference Lot 2023 12 11 At 1 listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Commercial Sourcing"
    },
    {
      "label": "Model Code",
      "value": "WHATSAPP-IMAGE-2023"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Commercial Sourcing"
  ],
  "compatDetails": {
    "Commercial Sourcing": "Drop-in replacement or displacement match for compatible Commercial Sourcing systems."
  },
  "images": [
    "/products/airconditionercompressor-source/general/whatsapp-image-2023-12-11-at-14-22-37-1-500x500-a1092390.webp",
    "/products/airconditionercompressor-source/general/whatsapp-image-2023-12-11-at-14-22-37-2-500x500-3d4c0d5e.webp",
    "/products/airconditionercompressor-source/general/whatsapp-image-2023-12-11-at-14-22-37-3-500x500-c3486dc7.webp",
    "/products/airconditionercompressor-source/general/whatsapp-image-2023-12-11-at-14-22-37-4-500x500-e046a187.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zb58kqe-tfd-emerson-copeland-scroll-compressor",
  "code": "ZB58KQE",
  "catalogCode": "Z-COPELAND-ZB58KQE",
  "name": "Zb58kqe Tfd Emerson Copeland Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Zb58kqe Tfd Emerson Copeland Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Zb58kqe Tfd Emerson Copeland Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZB58KQE"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zb58kqe-tfd-emerson-copeland-scroll-compressor-500x500-25ccbdf2.webp",
    "/products/airconditionercompressor-source/copeland/zb58kqe-tfd-emerson-copeland-scroll-compressor-500x500-243f75b6.webp",
    "/products/airconditionercompressor-source/copeland/zb58kqe-tfd-emerson-copeland-scroll-compressor-500x500-a44a47cc.webp",
    "/products/airconditionercompressor-source/copeland/zb58kqe-tfd-emerson-copeland-scroll-compressor-250x250-d565c273.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zp-104-kce-tfd-522-emerson-scroll-compressor",
  "code": "ZP-104-KCE",
  "catalogCode": "Z-COPELAND-ZP-104-K",
  "name": "Copeland Zp 104 Kce Tfd 522 Emerson Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Zp 104 Kce Tfd 522 Emerson Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Zp 104 Kce Tfd 522 Emerson Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZP-104-KCE"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zp-104-kce-tfd-522-emerson-scroll-compressor-500x500-67e31f17.webp",
    "/products/airconditionercompressor-source/copeland/zp-104-kce-tfd-522-emerson-scroll-compressor-500x500-38744453.webp",
    "/products/airconditionercompressor-source/copeland/zp-104-kce-tfd-522-emerson-scroll-compressor-500x500-c791d5a7.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zp103kce-emerson-scroll-compresssor",
  "code": "ZP103KCE",
  "catalogCode": "Z-COPELAND-ZP103KCE",
  "name": "Copeland Zp103kce Emerson Scroll Compresssor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Zp103kce Emerson Scroll Compresssor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Zp103kce Emerson Scroll Compresssor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZP103KCE"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zp103kce-emerson-scroll-compresssor-125x125-e7155138.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zp295kce-emerson-scroll-compressor",
  "code": "ZP295KCE",
  "catalogCode": "Z-COPELAND-ZP295KCE",
  "name": "Copeland Zp295kce Emerson Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Zp295kce Emerson Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Zp295kce Emerson Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZP295KCE"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zp295kce-emerson-scroll-compressor-500x500-30df9d9f.webp",
    "/products/airconditionercompressor-source/copeland/zp295kce-emerson-scroll-compressor-500x500-67e9dd93.webp",
    "/products/airconditionercompressor-source/copeland/zp295kce-emerson-scroll-compressor-500x500-05f80940.webp",
    "/products/airconditionercompressor-source/copeland/zp295kce-emerson-scroll-compressor-500x500-f1abde98.webp",
    "/products/airconditionercompressor-source/copeland/zp295kce-emerson-scroll-compressor-125x125-4ff3fd2b.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zp29k5e-emerson-copeland",
  "code": "ZP29K5E",
  "catalogCode": "Z-COPELAND-ZP29K5E",
  "name": "Zp29k5e Emerson Copeland",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Zp29k5e Emerson Copeland sourced for commercial replacement, repair, and displacement matching.",
  "description": "Zp29k5e Emerson Copeland listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZP29K5E"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zp29k5e-emerson-copeland-125x125-2d5bf924.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zp61k3etfd-emerson-copeland-scroll-compressor",
  "code": "ZP61K3ETFD",
  "catalogCode": "Z-COPELAND-ZP61K3ET",
  "name": "Zp61k3etfd Emerson Copeland Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Zp61k3etfd Emerson Copeland Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Zp61k3etfd Emerson Copeland Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZP61K3ETFD"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zp61k3etfd-emerson-copeland-scroll-compressor-125x125-4cc5e508.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zpd103-scroll-compressor",
  "code": "ZPD103",
  "catalogCode": "Z-COPELAND-ZPD103",
  "name": "Copeland Zpd103 Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Zpd103 Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Zpd103 Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZPD103"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zpd103-scroll-compressor-125x125-8b73f54b.webp",
    "/products/airconditionercompressor-source/copeland/zpd103-scroll-compressor-125x125-c3fc9a36.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zr108-scroll-compressor",
  "code": "ZR108",
  "catalogCode": "Z-COPELAND-ZR108",
  "name": "Copeland Zr108 Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Zr108 Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Zr108 Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZR108"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zr108-scroll-compressor-125x125-73bc0b6b.webp",
    "/products/airconditionercompressor-source/copeland/zr108-scroll-compressor-125x125-8ca623bb.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zr16m3e-twd-551-scroll-copeland-compressor",
  "code": "ZR16M3E",
  "catalogCode": "Z-COPELAND-ZR16M3E",
  "name": "Zr16m3e Twd 551 Scroll Copeland Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Zr16m3e Twd 551 Scroll Copeland Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Zr16m3e Twd 551 Scroll Copeland Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZR16M3E"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zr16m3e-twd-551-scroll-copeland-compressor-500x500-775b1da7.webp",
    "/products/airconditionercompressor-source/copeland/zr16m3e-twd-551-scroll-copeland-compressor-500x500-a764c765.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zr19m3e-emerson-copeland-scroll-compressor",
  "code": "ZR19M3E",
  "catalogCode": "Z-COPELAND-ZR19M3E",
  "name": "Zr19m3e Emerson Copeland Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Zr19m3e Emerson Copeland Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Zr19m3e Emerson Copeland Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZR19M3E"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zr19m3e-emerson-copeland-scroll-compressor-125x125-170d09c4.webp",
    "/products/airconditionercompressor-source/copeland/zr19m3e-emerson-copeland-scroll-compressor-125x125-c83edef8.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zr57kce-emerson-copeland",
  "code": "ZR57KCE",
  "catalogCode": "Z-COPELAND-ZR57KCE",
  "name": "Zr57kce Emerson Copeland",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Zr57kce Emerson Copeland sourced for commercial replacement, repair, and displacement matching.",
  "description": "Zr57kce Emerson Copeland listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZR57KCE"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zr57kce-emerson-copeland-125x125-2804edd9.webp",
    "/products/airconditionercompressor-source/copeland/zr57kce-emerson-copeland-125x125-57f6f089.webp",
    "/products/airconditionercompressor-source/copeland/zr57kce-emerson-copeland-125x125-99b6c590.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zrd72-scroll-compressor",
  "code": "ZRD72",
  "catalogCode": "Z-COPELAND-ZRD72",
  "name": "Copeland Zrd72 Scroll Compressor",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Copeland Zrd72 Scroll Compressor sourced for commercial replacement, repair, and displacement matching.",
  "description": "Copeland Zrd72 Scroll Compressor listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZRD72"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zrd72-scroll-compressor-125x125-7d094907.webp",
    "/products/airconditionercompressor-source/copeland/zrd72-scroll-compressor-125x125-e324cb18.webp"
  ],
  "isSourcedCatalogue": true
},
  {
  "id": "acc-zxi15-emerson-copeland",
  "code": "ZXI15",
  "catalogCode": "Z-COPELAND-ZXI15",
  "name": "Zxi15 Emerson Copeland",
  "brand": "Copeland",
  "tagline": "Copeland Scroll Compressors Sourcing & Displacement Match",
  "category": "Scroll Compressors",
  "type": "Hermetic Scroll",
  "condition": "Sourcing Reference",
  "availability": "Enquire for availability",
  "voltage": "380V–415V, 3-Phase, 50Hz (or 220V 1-Ph)",
  "displacement": "OEM Displacement Specified on Nameplate",
  "coolingCapacity": "Commercial Capacity Class",
  "refrigerant": "R22 / R410A / R407C / R404A Specified by OEM",
  "application": "Commercial air-conditioning, chillers & refrigeration",
  "accentColor": "#0E4B75",
  "statusBadge": "Sourcing Reference · Industry Catalogue",
  "verificationStatus": "Sourcing Reference · Industry Catalogue",
  "imageType": "reference",
  "imageDisclaimer": "Reference compressor image from airconditionercompressor.in catalogue — confirm exact model and suffix by physical nameplate.",
  "shortDescription": "Zxi15 Emerson Copeland sourced for commercial replacement, repair, and displacement matching.",
  "description": "Zxi15 Emerson Copeland listed for commercial and industrial HVAC sourcing. Available from Mumbai technical desk for direct replacement, displacement matching, and retrofit inquiries.",
  "keySpecs": [
    {
      "label": "Manufacturer",
      "value": "Copeland"
    },
    {
      "label": "Model Code",
      "value": "ZXI15"
    },
    {
      "label": "Category",
      "value": "Scroll Compressors"
    },
    {
      "label": "Sourcing Status",
      "value": "Enquire for availability"
    }
  ],
  "compatibility": [
    "Copeland"
  ],
  "compatDetails": {
    "Copeland": "Drop-in replacement or displacement match for compatible Copeland systems."
  },
  "images": [
    "/products/airconditionercompressor-source/copeland/zxi15-emerson-copeland-125x125-7f364dd5.webp",
    "/products/airconditionercompressor-source/copeland/zxi15-emerson-copeland-125x125-94258943.webp",
    "/products/airconditionercompressor-source/copeland/zxi15-emerson-copeland-125x125-14cd28d5.webp"
  ],
  "isSourcedCatalogue": true
}
];

export const CATEGORIES_LIST = [
  {
    "id": "scroll-compressors",
    "name": "Scroll Compressors",
    "slug": "scroll-compressors",
    "count": "111 Models",
    "desc": "Hermetic orbital scroll compressors for commercial ducted splits, package units, and chillers."
  },
  {
    "id": "rotary-compressors",
    "name": "Rotary Compressors",
    "slug": "rotary-compressors",
    "count": "41 Models",
    "desc": "Compact rotary compressors for commercial cassettes, ceiling units, and modular split systems."
  },
  {
    "id": "reciprocating-compressors",
    "name": "Reciprocating Compressors",
    "slug": "reciprocating-compressors",
    "count": "16 Models",
    "desc": "Heavy-duty piston and semi-hermetic compressors for cold storage, freezers, and industrial refrigeration."
  },
  {
    "id": "vrf-inverter-compressors",
    "name": "VRF / DC Inverter",
    "slug": "vrf-inverter-compressors",
    "count": "13 Models",
    "desc": "Variable-speed DC inverter compressors for multi-zone VRV / VRF commercial outdoor units."
  }
];
