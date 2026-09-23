// Central database of industrial products in Zcool Enterprises catalog
export const PRODUCTS_CATALOG = [
  {
    id: 'copeland-zr72kc-tFD',
    code: 'Z-COP-ZR72',
    name: 'Copeland Scroll Compressor ZR72KC-TFD',
    brand: 'Copeland',
    tagline: 'Refurbished Commercial Air-Conditioning Scroll Compressor',
    category: 'Scroll Compressors',
    type: 'Hermetic Scroll',
    condition: 'Refurbished & Pressure Tested',
    availability: 'In Stock (Ready for Freight)',
    voltage: '380V - 415V AC, 3-Phase, 50Hz',
    displacement: '17.1 m³/h',
    refrigerant: 'R22 / R407C Compatible',
    application: 'Commercial Air Conditioning, Ductable Units, Package AC',
    accentColor: '#1D6FA3',
    statusBadge: 'Pressure Tested',
    description: 'High-performance Copeland scroll compressor ideal for commercial package units, ductable systems, and chillers. Fully inspected, coil-tested, and pressure-tested by Zcool technicians.',
    compatibility: ['Daikin', 'Carrier', 'Blue Star', 'Voltas', 'Trane', 'Emerson'],
    compatDetails: {
      'Daikin': 'Direct mounting drop-in replacement for Daikin package units.',
      'Carrier': 'Fits Carrier 6-Ton commercial ductable frames.',
      'Blue Star': 'Standard replacement for Blue Star commercial chillers.',
      'Voltas': 'Matches Voltas commercial HVAC unit mounting feet.',
      'Trane': 'Compatible with Trane packaged rooftop units.'
    },
    images: [
      '/ac_compressor.png',
      '/ac_compressor_2.png',
      '/ac_compressor_3.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': '380V - 415V, 3-Phase, 50Hz',
        'Nominal HP': '6.0 HP',
        'RLA (Running Amps)': '11.5 A',
        'LRA (Locked Rotor)': '74 A'
      },
      thermal: {
        'Cooling Capacity': '72,000 BTU/h (6 TR)',
        'Application': 'Medium / High Temp Air Conditioning',
        'Oil Type': 'POE / Mineral Oil Compatible'
      },
      mechanical: {
        'Suction Line Size': '7/8 in (22.2 mm) ODF',
        'Discharge Line Size': '1/2 in (12.7 mm) ODF',
        'Mounting Footprint': '190.5 mm x 190.5 mm',
        'Net Weight': '38.5 kg'
      }
    }
  },
  {
    id: 'daikin-jt160g-p8y1',
    code: 'Z-DAI-JT160',
    name: 'Daikin Scroll Compressor JT160G-P8Y1',
    brand: 'Daikin',
    tagline: 'Refurbished VRV & Package AC Scroll Compressor',
    category: 'Scroll Compressors',
    type: 'Hermetic Scroll',
    condition: 'Refurbished & Tested',
    availability: 'In Stock',
    voltage: '380V - 415V AC, 3-Phase, 50Hz',
    displacement: '15.8 m³/h',
    refrigerant: 'R410A Compatible',
    application: 'VRV / VRF Systems, Modular Chillers, Commercial Split',
    accentColor: '#0EA6A6',
    statusBadge: 'Tested',
    description: 'Original Daikin hermetic scroll compressor rebuilt with precision tolerances for VRV and high-efficiency commercial cooling loops.',
    compatibility: ['Daikin', 'McQuay', 'York'],
    compatDetails: {
      'Daikin': 'Original OEM specs for Daikin VRV II & VRV III outdoor units.',
      'McQuay': 'Matches McQuay air-cooled water chiller circuits.'
    },
    images: [
      '/ac_compressor_2.png',
      '/ac_compressor.png',
      '/ac_compressor_3.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': '380V - 415V, 3-Phase, 50Hz',
        'Nominal HP': '5.0 HP',
        'RLA (Running Amps)': '9.8 A'
      },
      thermal: {
        'Cooling Capacity': '60,000 BTU/h (5 TR)',
        'Application': 'Commercial VRV / Air Conditioning',
        'Oil Charge': '1.4 Liters POE'
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
    code: 'Z-LG-HQ034',
    name: 'LG Commercial Rotary Compressor HQ034P',
    brand: 'LG',
    tagline: 'High-Efficiency Rotary Compressor for Heavy Split & Cassette Units',
    category: 'Rotary Compressors',
    type: 'Twin Rotary',
    condition: 'Refurbished',
    availability: 'In Stock',
    voltage: '220V - 240V AC, 1-Phase, 50Hz',
    displacement: '34.0 cm³/rev',
    refrigerant: 'R32 / R410A',
    application: 'Commercial Cassette AC, Ductable Split, Tower AC',
    accentColor: '#1D6FA3',
    statusBadge: 'Tested',
    description: 'Durable LG twin-rotary compressor designed for smooth acoustic operation and low vibration in commercial cassette and tower AC units.',
    compatibility: ['LG', 'Lloyd', 'Voltas', 'O General'],
    compatDetails: {
      'LG': 'Direct fit for LG Commercial Multi-Split & Cassette systems.',
      'Voltas': 'Standard mounting configuration for Voltas 3-Ton cassette units.'
    },
    images: [
      '/ac_compressor_3.png',
      '/ac_compressor.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': '220V - 240V, 1-Phase, 50Hz',
        'Nominal HP': '3.0 HP',
        'RLA': '13.2 A'
      },
      thermal: {
        'Cooling Capacity': '36,000 BTU/h (3 TR)',
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
    code: 'Z-DAN-MTZ64',
    name: 'Danfoss Maneurop Reciprocating Compressor MTZ64',
    brand: 'Danfoss',
    tagline: 'Refurbished Reciprocating Compressor for Cold Storage & HVAC',
    category: 'Reciprocating Compressors',
    type: 'Hermetic Reciprocating',
    condition: 'Refurbished & Leak Tested',
    availability: 'In Stock',
    voltage: '380V - 400V AC, 3-Phase, 50Hz',
    displacement: '107.7 cm³/rev',
    refrigerant: 'R404A / R134a / R407C',
    application: 'Cold Storage, Commercial Refrigeration, Process Chillers',
    accentColor: '#0EA6A6',
    statusBadge: 'Leak Tested',
    description: 'Heavy-duty Danfoss Maneurop MTZ series reciprocating compressor designed for demanding cold storage rooms and commercial refrigeration.',
    compatibility: ['Danfoss', 'Bitzer', 'Copeland', 'Carrier'],
    compatDetails: {
      'Danfoss': 'Exact OEM replacement for Maneurop MTZ64-4VI.',
      'Carrier': 'Used in Carrier cold room condensing units.'
    },
    images: [
      '/ac_compressor.png',
      '/ac_compressor_3.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': '380V - 400V, 3-Phase, 50Hz',
        'Nominal HP': '5.5 HP',
        'RLA': '10.5 A'
      },
      thermal: {
        'Application': 'Medium & Low Temp Refrigeration',
        'Oil Charge': '1.8 Liters POE 160PZ'
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
    code: 'Z-COP-DISCUS',
    name: 'Copeland Semi-Hermetic Compressor 3DS3R17ME',
    brand: 'Copeland',
    tagline: 'Industrial Heavy Refrigeration Semi-Hermetic Compressor',
    category: 'Refrigeration Compressors',
    type: 'Semi-Hermetic Reciprocating',
    condition: 'Refurbished & Overhauled',
    availability: 'Available on Order / Sourcing',
    voltage: '380V - 415V AC, 3-Phase, 50Hz',
    displacement: '50.0 m³/h',
    refrigerant: 'R404A / R507 / R22',
    application: 'Industrial Cold Storage, Blast Freezers, Supermarket Rack Systems',
    accentColor: '#1D6FA3',
    statusBadge: 'Industrial Grade',
    description: 'Heavy industrial Copeland Discus semi-hermetic compressor built for extreme refrigeration duty, cold storage plants, and multi-compressor rack systems.',
    compatibility: ['Copeland', 'Emerson', 'Bitzer', 'Dorin'],
    compatDetails: {
      'Copeland': 'Original Copeland Discus valve design.',
      'Bitzer': 'Mounting adaptation available for supermarket racks.'
    },
    images: [
      '/ac_compressor_3.png',
      '/ac_compressor_2.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': '380V - 415V, 3-Phase, 50Hz',
        'Nominal HP': '15.0 HP',
        'RLA': '28.0 A'
      },
      thermal: {
        'Application': 'Industrial Low & Medium Temperature Refrigeration',
        'Oil Pump': 'Positive Displacement Oil Pump'
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
    code: 'Z-[#DAI-VRV300]',
    name: 'Daikin Inverter Scroll Compressor JT300',
    brand: 'Daikin',
    tagline: 'Inverter Scroll Compressor for Daikin VRV IV Systems',
    category: 'VRF / VRV Compressors',
    type: 'DC Inverter Scroll',
    condition: 'Refurbished & Bench Tested',
    availability: 'In Stock',
    voltage: '380V - 415V AC (Inverter Driven)',
    displacement: 'Variable Speed',
    refrigerant: 'R410A',
    application: 'Daikin VRV IV / VRV V Outdoor Units',
    accentColor: '#0EA6A6',
    statusBadge: 'VRV Specialist',
    description: 'Precision DC Inverter scroll compressor specifically calibrated for Daikin VRV variable refrigerant flow outdoor units.',
    compatibility: ['Daikin'],
    compatDetails: {
      'Daikin': 'Matches Daikin VRV IV RXQ / RXYQ outdoor unit models.'
    },
    images: [
      '/ac_compressor_2.png',
      '/ac_compressor.png'
    ],
    specs: {
      electrical: {
        'Input Voltage': 'DC Inverter Controlled (380V Drive)',
        'Control': 'Variable Frequency Drive (30Hz - 120Hz)'
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
    id: 'scroll',
    name: 'Scroll Compressors',
    count: 'Available Models',
    desc: 'High-efficiency hermetic scroll units for commercial package AC, VRF, and water chillers.',
    image: '/ac_compressor.png'
  },
  {
    id: 'rotary',
    name: 'Rotary Compressors',
    count: 'Available Models',
    desc: 'Compact single and twin rotary compressors for commercial split, cassette, and tower ACs.',
    image: '/ac_compressor_2.png'
  },
  {
    id: 'reciprocating',
    name: 'Reciprocating Compressors',
    count: 'Available Models',
    desc: 'Robust piston compressors built for commercial refrigeration, cold rooms, and process cooling.',
    image: '/ac_compressor_3.png'
  },
  {
    id: 'vrf-vrv',
    name: 'VRF / VRV Compressors',
    count: 'Available Models',
    desc: 'Specialized DC Inverter scroll replacement units for Daikin, Mitsubishi, and LG multi-split systems.',
    image: '/ac_compressor_2.png'
  }
];
