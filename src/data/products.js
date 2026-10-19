// Central database of industrial products in Z Cool Enterprises catalog
// Reconciled against PRODUCT_DATA_RECONCILIATION.md with honest image & status classifications

export const PRODUCTS_CATALOG = [
  {
    id: 'copeland-zr72kc-tFD',
    code: 'ZR72KC-TFD',
    catalogCode: 'Z-COP-ZR72',
    name: 'Copeland Scroll Compressor ZR72KC-TFD',
    brand: 'Copeland',
    tagline: 'Commercial Air-Conditioning Orbital Scroll Compressor',
    category: 'Scroll Compressors',
    type: 'Hermetic Scroll',
    condition: 'Sourcing Reference',
    availability: 'Sourcing Reference',
    voltage: '380V–415V, 3-Phase, 50Hz',
    displacement: '17.1 m³/h (50 Hz)',
    coolingCapacity: '72,000 BTU/h (6 TR)',
    refrigerant: 'R22 / R407C Compatible',
    application: 'Commercial ducted AC & chillers',
    accentColor: '#0E4B75',
    statusBadge: 'Sourcing Reference',
    verificationStatus: 'Sourcing Reference',
    imageType: 'representative',
    imageDisclaimer: 'Representative scroll image — confirm exact suffix by nameplate.',
    shortDescription: 'Orbital scroll compressor sourced for commercial package units, ducted systems, and liquid chillers.',
    description: 'High-performance orbital scroll compressor for commercial package units, ducted systems, and liquid chillers. Sourced for replacement and displacement matching.',
    keySpecs: [
      { label: 'Rated Capacity', value: '72,000 BTU/h (6 TR)' },
      { label: 'Electrical', value: '380V–415V, 3-Phase, 50Hz' },
      { label: 'Primary Use', value: 'Commercial ducted AC & chillers' }
    ],
    compatibility: ['Daikin', 'Carrier', 'Blue Star', 'Voltas', 'Trane', 'Emerson'],
    compatDetails: {
      'Daikin': 'Drop-in displacement replacement for compatible Daikin package units.',
      'Carrier': 'Fits Carrier 6-Ton commercial ductable frames.',
      'Blue Star': 'Direct match for Blue Star commercial chiller circuits.',
      'Voltas': 'Matches Voltas commercial HVAC unit mounting feet.',
      'Trane': 'Compatible with Trane packaged rooftop systems.'
    },
    images: [
      '/ac_compressor.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': '380V - 415V, 3-Phase, 50Hz',
        'Nominal HP': '6.0 HP',
        'RLA': '11.5 A'
      },
      thermal: {
        'Cooling Capacity': '72,000 BTU/h (6 TR)',
        'Displacement': '17.1 m³/h (50 Hz)',
        'Application': 'Medium / High Temp Air Conditioning'
      },
      mechanical: {
        'Suction Line Size': '7/8 in ODF',
        'Discharge Line Size': '1/2 in ODF',
        'Mounting Footprint': '190.5 mm x 190.5 mm',
        'Net Weight': '38.5 kg'
      }
    }
  },
  {
    id: 'daikin-jt160g-p8y1',
    code: 'JT160G-P8Y1',
    catalogCode: 'Z-DAI-JT160',
    name: 'Daikin Scroll Compressor JT160G-P8Y1',
    brand: 'Daikin',
    tagline: 'Commercial Scroll Compressor for Packaged AC & Chillers',
    category: 'Scroll Compressors',
    type: 'Hermetic Scroll',
    condition: 'Sourcing Reference',
    availability: 'Sourcing Reference',
    voltage: '380V–415V, 3-Phase, 50Hz',
    displacement: '15.2 m³/h (50 Hz)',
    coolingCapacity: '60,000 BTU/h (5 TR)',
    refrigerant: 'R410A Compatible',
    application: 'Packaged AC & modular chillers',
    accentColor: '#0E4B75',
    statusBadge: 'Sourcing Reference',
    verificationStatus: 'Sourcing Reference',
    imageType: 'representative',
    imageDisclaimer: 'Representative scroll image — confirm exact model by nameplate.',
    shortDescription: 'Commercial scroll compressor for packaged air conditioners, condensing units, and modular chillers.',
    description: 'Original Daikin hermetic scroll compressor rebuilt with precision tolerances for commercial packaged air conditioners and modular chillers.',
    keySpecs: [
      { label: 'Rated Capacity', value: '60,000 BTU/h (5 TR)' },
      { label: 'Electrical', value: '380V–415V, 3-Phase, 50Hz' },
      { label: 'Primary Use', value: 'Packaged AC & modular chillers' }
    ],
    compatibility: ['Daikin', 'McQuay', 'York'],
    compatDetails: {
      'Daikin': 'Original OEM specification for Daikin commercial condensing units.',
      'McQuay': 'Matches McQuay air-cooled water chiller circuits.'
    },
    images: [
      '/ac_compressor_2.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': '380V - 415V, 3-Phase, 50Hz',
        'Nominal HP': '5.0 HP',
        'RLA': '9.8 A'
      },
      thermal: {
        'Cooling Capacity': '60,000 BTU/h (5 TR)',
        'Displacement': '15.2 m³/h (50 Hz)',
        'Application': 'Commercial AC & Chillers'
      },
      mechanical: {
        'Suction Line Size': '7/8 in ODF',
        'Discharge Line Size': '1/2 in ODF',
        'Net Weight': '36.0 kg'
      }
    }
  },
  {
    id: 'lg-hq034p-rotary',
    code: 'HQ034P',
    catalogCode: 'Z-LG-HQ034',
    name: 'LG Commercial Rotary Compressor HQ034P',
    brand: 'LG',
    tagline: 'Commercial Rotary Compressor for Cassette & Split AC',
    category: 'Rotary Compressors',
    type: 'Commercial Rotary',
    condition: 'Awaiting Nameplate Confirmation',
    availability: 'Awaiting Confirmation',
    voltage: '220V–240V, 1-Phase, 50Hz',
    displacement: '34.0 cc/rev',
    coolingCapacity: '36,000 BTU/h Class',
    refrigerant: 'R32 / R410A',
    application: 'Commercial split & cassette AC',
    accentColor: '#0E4B75',
    statusBadge: 'Nameplate Check Needed',
    verificationStatus: 'Nameplate Check Needed',
    imageType: 'representative',
    imageDisclaimer: 'Representative canister — verify model & accumulator by nameplate.',
    shortDescription: 'Compact rotary compressor for commercial cassette air conditioning and light commercial split plants.',
    description: 'Compact rotary compressor designed for commercial cassette air conditioning and light commercial split plants.',
    keySpecs: [
      { label: 'Displacement', value: '34.0 cc/rev' },
      { label: 'Electrical', value: '220V–240V, 1-Phase, 50Hz' },
      { label: 'Primary Use', value: 'Commercial split & cassette AC' }
    ],
    compatibility: ['LG', 'Lloyd', 'Voltas', 'O General'],
    compatDetails: {
      'LG': 'Direct fit for LG Commercial Multi-Split & Cassette systems.',
      'Voltas': 'Standard mounting configuration for Voltas 3-Ton cassette units.'
    },
    images: [
      '/ac_compressor_3.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': '220V - 240V, 1-Phase, 50Hz',
        'Nominal HP': '3.0 HP',
        'RLA': '13.2 A'
      },
      thermal: {
        'Displacement': '34.0 cc/rev',
        'Application': 'Cassette & Ductable Air Conditioning'
      },
      mechanical: {
        'Suction Connection': '5/8 in ODF',
        'Discharge Connection': '3/8 in ODF',
        'Net Weight': '24.5 kg'
      }
    }
  },
  {
    id: 'danfoss-maneurop-mtz64',
    code: 'MTZ64',
    catalogCode: 'Z-DAN-MTZ64',
    name: 'Danfoss Maneurop Reciprocating Compressor MTZ64',
    brand: 'Danfoss',
    tagline: 'Heavy-Duty Reciprocating Compressor for Cold Storage & Chillers',
    category: 'Reciprocating Compressors',
    type: 'Hermetic Reciprocating',
    condition: 'Photo Pending',
    availability: 'Sourcing Reference',
    voltage: '380V–400V, 3-Phase, 50Hz',
    displacement: '107.7 cc/rev',
    coolingCapacity: '5.5 HP Class',
    refrigerant: 'R404A / R134a / R407C',
    application: 'Cold storage & refrigeration',
    accentColor: '#0E4B75',
    statusBadge: 'Photo Pending',
    verificationStatus: 'Photo Pending',
    imageType: 'placeholder',
    imageDisclaimer: 'Technical silhouette — physical Maneurop photo awaiting verification.',
    shortDescription: 'Heavy-duty reciprocating compressor with rotolock fittings for walk-in cold rooms and refrigeration plants.',
    description: 'Heavy-duty Danfoss Maneurop MTZ series reciprocating compressor designed for demanding cold storage rooms and commercial refrigeration.',
    keySpecs: [
      { label: 'Displacement', value: '107.7 cc/rev' },
      { label: 'Electrical', value: '380V–400V, 3-Phase, 50Hz' },
      { label: 'Primary Use', value: 'Cold storage & refrigeration' }
    ],
    compatibility: ['Danfoss', 'Bitzer', 'Copeland', 'Carrier'],
    compatDetails: {
      'Danfoss': 'OEM replacement for Maneurop MTZ64 / MT72 series.',
      'Carrier': 'Used in Carrier cold room condensing units.'
    },
    images: [],
    specs: {
      electrical: {
        'Input Voltage': '380V - 400V, 3-Phase, 50Hz',
        'Nominal HP': '5.5 HP',
        'RLA': '10.5 A'
      },
      thermal: {
        'Displacement': '107.7 cc/rev',
        'Application': 'Medium & Low Temp Refrigeration',
        'Oil Charge': 'POE 160PZ'
      },
      mechanical: {
        'Suction Rotolock': '1-3/4 in',
        'Discharge Rotolock': '1-1/4 in',
        'Net Weight': '37.0 kg'
      }
    }
  },
  {
    id: 'copeland-discus-semihermetic',
    code: '3DS3R17ME',
    catalogCode: 'Z-COP-DISCUS',
    name: 'Copeland Semi-Hermetic Compressor 3DS3R17ME',
    brand: 'Copeland',
    tagline: 'Industrial Heavy Refrigeration Semi-Hermetic Machine',
    category: 'Reciprocating Compressors',
    type: 'Semi-Hermetic Reciprocating',
    condition: 'Sourcing Confirmation Needed',
    availability: 'Offline Sourcing Only',
    voltage: '380V–415V, 3-Phase, 50Hz',
    displacement: '50.0 m³/h',
    coolingCapacity: '15.0 HP Class',
    refrigerant: 'R404A / R507 / R22',
    application: 'Industrial cold storage & rack systems',
    accentColor: '#0E4B75',
    statusBadge: 'Sourcing Confirmation Needed',
    verificationStatus: 'Sourcing Confirmation Needed',
    imageType: 'placeholder',
    imageDisclaimer: 'Technical silhouette — semi-hermetic photo awaiting confirmation.',
    shortDescription: 'Multi-cylinder cast-iron semi-hermetic compressor built for extreme industrial refrigeration duty and rack systems.',
    description: 'Heavy industrial Copeland Discus semi-hermetic compressor built for extreme refrigeration duty, cold storage plants, and multi-compressor rack systems.',
    keySpecs: [
      { label: 'Displacement', value: '50.0 m³/h' },
      { label: 'Electrical', value: '380V–415V, 3-Phase, 50Hz' },
      { label: 'Primary Use', value: 'Industrial cold storage & rack systems' }
    ],
    compatibility: ['Copeland', 'Emerson', 'Bitzer', 'Dorin'],
    compatDetails: {
      'Copeland': 'Original Copeland Discus valve design.',
      'Bitzer': 'Mounting adaptation available for supermarket racks.'
    },
    images: [],
    specs: {
      electrical: {
        'Input Voltage': '380V - 415V, 3-Phase, 50Hz',
        'Nominal HP': '15.0 HP',
        'RLA': '28.0 A'
      },
      thermal: {
        'Displacement': '50.0 m³/h',
        'Application': 'Industrial Low & Medium Temperature Refrigeration'
      },
      mechanical: {
        'Suction Valve': '1-3/8 in',
        'Discharge Valve': '1-1/8 in',
        'Net Weight': '145.0 kg'
      }
    }
  },
  {
    id: 'daikin-vrv-inverter-jt300',
    code: 'JT300',
    catalogCode: 'Z-DAI-VRV300',
    name: 'Daikin Inverter Scroll Compressor JT300',
    brand: 'Daikin',
    tagline: 'Inverter Scroll Compressor for Daikin VRV Systems',
    category: 'VRF / DC Inverter',
    type: 'DC Inverter Scroll',
    condition: 'Sourcing Reference',
    availability: 'Sourcing Reference',
    voltage: '380V–415V (Inverter Drive)',
    displacement: 'Variable Speed',
    coolingCapacity: '10.0 HP Class',
    refrigerant: 'R410A',
    application: 'VRV commercial outdoor units',
    accentColor: '#0E4B75',
    statusBadge: 'Sourcing Reference',
    verificationStatus: 'Sourcing Reference',
    imageType: 'representative',
    imageDisclaimer: 'Representative profile — confirm inverter model by nameplate.',
    shortDescription: 'Variable-speed inverter scroll compressor engineered for multi-zone VRV commercial outdoor condensing units.',
    description: 'Precision DC Inverter scroll compressor specifically calibrated for Daikin VRV variable refrigerant flow outdoor units.',
    keySpecs: [
      { label: 'Nominal Rating', value: '10.0 HP Class' },
      { label: 'Drive Type', value: 'Inverter Drive (380V–415V)' },
      { label: 'Primary Use', value: 'VRV commercial outdoor units' }
    ],
    compatibility: ['Daikin'],
    compatDetails: {
      'Daikin': 'Matches Daikin VRV IV RXQ / RXYQ outdoor unit models.'
    },
    images: [
      '/ac_compressor_2.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': 'DC Inverter Controlled (380V Drive)',
        'Nominal HP': '10.0 HP',
        'Control': 'Variable Frequency Drive'
      },
      thermal: {
        'Application': 'VRV Variable Refrigerant Flow'
      },
      mechanical: {
        'Mounting': 'Original Daikin Vibration Isolation',
        'Net Weight': '41.0 kg'
      }
    }
  }
];

export const CATEGORIES_LIST = [
  {
    id: 'scroll-compressors',
    name: 'Scroll Compressors',
    slug: 'scroll-compressors',
    count: '2 Models',
    desc: 'Hermetic orbital scroll compressors for commercial ducted splits, package units, and chillers.'
  },
  {
    id: 'rotary-compressors',
    name: 'Rotary Compressors',
    slug: 'rotary-compressors',
    count: '1 Model',
    desc: 'Compact rotary compressors for commercial cassettes, ceiling units, and modular split systems.'
  },
  {
    id: 'reciprocating-compressors',
    name: 'Reciprocating Compressors',
    slug: 'reciprocating-compressors',
    count: '2 Models',
    desc: 'Heavy-duty piston and semi-hermetic compressors for cold storage, freezers, and industrial refrigeration.'
  },
  {
    id: 'vrf-inverter-compressors',
    name: 'VRF / DC Inverter',
    slug: 'vrf-inverter-compressors',
    count: '1 Model',
    desc: 'Variable-speed DC inverter compressors for multi-zone VRV / VRF commercial outdoor units.'
  }
];
