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
    "condition": "Physical Stock / Workshop Verified",
    "availability": "Sourcing Reference",
    "voltage": "380V–415V, 3-Phase, 50Hz",
    "displacement": "15.2 m³/h (50 Hz)",
    "coolingCapacity": "60,000 BTU/h (5 TR)",
    "refrigerant": "R410A Compatible",
    "application": "Packaged AC & modular chillers",
    "accentColor": "#0E4B75",
    "statusBadge": "Nameplate Verified · Physical Stock",
    "verificationStatus": "Nameplate Verified · Physical Stock",
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
      "/products/legacy/compressor10-b2cafdd3.webp",
      "/ac_compressor_2.png"
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
      "/products/legacy/compressor2-651af61b.webp"
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
      "/products/legacy/compressor29-73704b79.webp"
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
  }
];

export const CATEGORIES_LIST = [
  {
    "id": "scroll-compressors",
    "name": "Scroll Compressors",
    "slug": "scroll-compressors",
    "count": "20 Models",
    "desc": "Hermetic orbital scroll compressors for commercial ducted splits, package units, and chillers."
  },
  {
    "id": "rotary-compressors",
    "name": "Rotary Compressors",
    "slug": "rotary-compressors",
    "count": "17 Models",
    "desc": "Compact rotary compressors for commercial cassettes, ceiling units, and modular split systems."
  },
  {
    "id": "reciprocating-compressors",
    "name": "Reciprocating Compressors",
    "slug": "reciprocating-compressors",
    "count": "4 Models",
    "desc": "Heavy-duty piston and semi-hermetic compressors for cold storage, freezers, and industrial refrigeration."
  },
  {
    "id": "vrf-inverter-compressors",
    "name": "VRF / DC Inverter",
    "slug": "vrf-inverter-compressors",
    "count": "4 Models",
    "desc": "Variable-speed DC inverter compressors for multi-zone VRV / VRF commercial outdoor units."
  }
];
