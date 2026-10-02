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
  { id: 'ac-compressor', name: 'AC Compressor', slug: 'ac-compressor', count: 'Available Models', desc: 'Air conditioning compressors for residential and commercial cooling systems.' },
  { id: 'scroll-compressor', name: 'Scroll Compressor', slug: 'scroll-compressor', count: 'Available Models', desc: 'Scroll compressors for air conditioning, refrigeration and HVAC applications.' },
  { id: 'refrigeration-compressors', name: 'Refrigeration Compressors', slug: 'refrigeration-compressors', count: 'Available Models', desc: 'Compressors designed for refrigeration and cooling applications.' },
  { id: 'copeland-scroll-compressor', name: 'Copeland Scroll Compressor', slug: 'copeland-scroll-compressor', count: 'Available Models', desc: 'Copeland scroll compressors engineered for commercial and industrial cooling systems.' },
  { id: 'air-compressor', name: 'Air Compressor', slug: 'air-compressor', count: 'Available Models', desc: 'Industrial and commercial air compressor units and air systems.' },
  { id: 'rotary-compressor', name: 'Rotary Compressor', slug: 'rotary-compressor', count: 'Available Models', desc: 'Rotary compressors designed for high-efficiency residential and light commercial cooling.' },
  { id: 'air-conditioner', name: 'Air Conditioner', slug: 'air-conditioner', count: 'Available Models', desc: 'Air conditioner units, systems, and modular cooling equipment.' },
  { id: 'danfoss-scroll-compressor', name: 'Danfoss Scroll Compressor', slug: 'danfoss-scroll-compressor', count: 'Available Models', desc: 'Danfoss scroll compressors for commercial air conditioning and refrigeration applications.' },
  { id: 'air-conditioning-compressors', name: 'Air Conditioning Compressors', slug: 'air-conditioning-compressors', count: 'Available Models', desc: 'Compressors for residential, commercial, and industrial air conditioning systems.' },
  { id: 'copeland-compressor', name: 'Copeland Compressor', slug: 'copeland-compressor', count: 'Available Models', desc: 'Copeland compressors including semi-hermetic, reciprocating, and scroll models.' },
  { id: 'screw-compressor', name: 'Screw Compressor', slug: 'screw-compressor', count: 'Available Models', desc: 'Screw compressors for large-scale industrial chilling and refrigeration systems.' },
  { id: 'ac-amc-service', name: 'AC AMC Service', slug: 'ac-amc-service', count: 'Available Services', desc: 'Annual maintenance contract (AMC) services for commercial and industrial air conditioning.' },
  { id: 'vrf-system', name: 'VRF System', slug: 'vrf-system', count: 'Available Systems', desc: 'Variable Refrigerant Flow (VRF) systems and multi-split cooling solutions.' },
  { id: 'relays', name: 'Relays', slug: 'relays', count: 'Available Models', desc: 'Electrical relays and protection components for HVAC and compressor equipment.' },
  { id: 'air-conditioner-installation-service', name: 'Air Conditioner Installation Service', slug: 'air-conditioner-installation-service', count: 'Available Services', desc: 'Professional installation and commissioning services for air conditioning systems.' },
  { id: 'air-conditioner-motor', name: 'Air Conditioner Motor', slug: 'air-conditioner-motor', count: 'Available Models', desc: 'Fan and blower motors for residential, commercial, and industrial air conditioners.' },
  { id: 'air-conditioner-maintenance-service', name: 'Air Conditioner Maintenance Service', slug: 'air-conditioner-maintenance-service', count: 'Available Services', desc: 'Preventive and corrective maintenance services for air conditioning units.' },
  { id: 'rotary-and-refrigerator-compressor', name: 'Rotary And Refrigerator Compressor', slug: 'rotary-and-refrigerator-compressor', count: 'Available Models', desc: 'Rotary and reciprocating compressor units for domestic and commercial refrigeration.' },
  { id: 'emerson-scroll-compressor', name: 'Emerson Scroll Compressor', slug: 'emerson-scroll-compressor', count: 'Available Models', desc: 'Emerson Copeland scroll compressors for HVAC and process cooling applications.' },
  { id: 'daikin-compressor', name: 'Daikin Compressor', slug: 'daikin-compressor', count: 'Available Models', desc: 'Daikin scroll and inverter compressors for VRV, VRF, and commercial split systems.' },
  { id: 'air-conditioner-compressor', name: 'Air Conditioner Compressor', slug: 'air-conditioner-compressor', count: 'Available Models', desc: 'Replacement air conditioner compressors for all major cooling equipment brands.' },
  { id: '3d-bed-sheet', name: '3D Bed Sheet', slug: '3d-bed-sheet', count: 'Available Items', desc: 'Specialty industrial fabric and 3D protective bed sheets.' },
  { id: 'pump-and-valve', name: 'Pump And Valve', slug: 'pump-and-valve', count: 'Available Items', desc: 'Industrial pumps, expansion valves, and fluid control accessories for cooling plants.' },
  { id: 'aacsr-conductor', name: 'AACSR Conductor', slug: 'aacsr-conductor', count: 'Available Items', desc: 'Aluminum Alloy Conductor Steel Reinforced (AACSR) electrical transmission conductors.' },
  { id: 'new-items', name: 'New Items', slug: 'new-items', count: 'Available Items', desc: 'Newly arrived industrial cooling components, compressors, and specialized equipment.' },
];

