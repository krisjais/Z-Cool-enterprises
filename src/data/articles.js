// Central technical guides & article data for Zcool Enterprises Knowledge Center

export const ARTICLE_CATEGORIES = [
  { id: 'ALL', label: 'All Guides' },
  { id: 'IDENTIFICATION', label: 'Identification' },
  { id: 'COMPRESSOR BASICS', label: 'Compressor Basics' },
  { id: 'REPLACEMENT', label: 'Replacement' },
  { id: 'REFURBISHMENT', label: 'Refurbishment' },
];

export const ARTICLES = [
  {
    id: 'how-to-read-compressor-nameplate',
    title: 'How to Read an AC Compressor Nameplate',
    category: 'IDENTIFICATION',
    readTime: '5 min read',
    summary:
      'A practical breakdown of the stamped specifications on Copeland, Daikin, and Danfoss nameplates — including model codes, electrical configuration (voltage/phase/Hz), refrigerant type, and displacement.',
    keyPoints: [
      'Model Code: Identifies compressor family, displacement, and protection series (e.g., ZR72KC-TFD indicates a 72,000 BTU/h scroll compressor).',
      'Electrical Configuration: Decodes operating voltage and phase. Codes like TFD signify 380V–415V, 3-Phase, 50Hz, while PFJ or single-phase codes require 220V–240V.',
      'Refrigerant & Oil: Verifies whether the unit was factory-charged for Mineral oil (legacy R22) or synthetic POE oil (R410A, R407C, R404A).',
      'Current Ratings (RLA & LRA): Rated Load Amps indicate continuous operating load; Locked Rotor Amps represent the startup current surge threshold.',
    ],
    takeaway:
      'Always photograph the entire compressor nameplate before removing a failed unit to avoid guessing replacement voltage or mounting pitch.',
    image: '/ac_compressor.png',
    catalogLink: { text: 'Browse Tested Compressors', href: '/products' },
    actionLink: { text: 'Send Nameplate Photo for Matching', action: 'photo_upload' },
    featured: true,
  },
  {
    id: 'scroll-vs-rotary-compressors',
    title: 'Scroll vs Rotary Compressors: Selecting the Correct Replacement',
    category: 'COMPRESSOR BASICS',
    readTime: '4 min read',
    summary:
      'Compare mechanical differences, capacity boundaries, and practical retrofit limitations between rotary and scroll compressors in commercial HVAC equipment.',
    keyPoints: [
      'Application Boundaries: Rotary compressors are best suited for smaller capacities (1.5 to 3 TR) in cassette, split, and light ductable units.',
      'Scroll Advantages: Scroll compressors operate without reciprocating valves, providing smoother continuous compression for 3 to 15+ TR package AC units and chillers.',
      'Mounting & Port Alignment: Replacing one mechanism with another requires verifying suction/discharge line orientations, mounting foot pitch, and electrical controls.',
    ],
    takeaway:
      'For units above 3 TR, standard commercial air conditioners almost exclusively use scroll compressors for efficiency and lower vibration.',
    image: '/ac_compressor_2.png',
    catalogLink: { text: 'View Scroll Compressors', href: '/products?type=Scroll' },
    actionLink: { text: 'Request a Model Match', action: 'quote_modal' },
    featured: false,
  },
  {
    id: 'understanding-compressor-voltage-and-phase',
    title: 'Understanding Compressor Voltage and Phase in India',
    category: 'IDENTIFICATION',
    readTime: '4 min read',
    summary:
      'A practical guide to commercial building power configurations in India, and why verifying phase rotation is critical before powering up a replacement scroll compressor.',
    keyPoints: [
      'Commercial 3-Phase Standard: In India, commercial package units and VRV outdoor systems operate on 380V–415V, 3-Phase, 50Hz AC mains.',
      'Single-Phase Commercial: Single-phase 220V–240V compressors are common in units up to 3 TR and require matching run capacitors and start relays.',
      'Phase Rotation Warning: 3-phase scroll compressors only compress in one direction; running them backwards due to reversed phases causes immediate loss of pumping and severe internal damage.',
    ],
    takeaway:
      'Always verify supply voltage and phase rotation with a meter before wiring the terminal block of a replacement 3-phase compressor.',
    image: '/ac_compressor_3.png',
    catalogLink: { text: 'View 3-Phase Inventory', href: '/products' },
    actionLink: { text: 'Check Electrical Compatibility', action: 'quote_modal' },
    featured: false,
  },
  {
    id: 'refrigerant-and-oil-compatibility-basics',
    title: 'Refrigerant and Compressor Compatibility Basics',
    category: 'REPLACEMENT',
    readTime: '5 min read',
    summary:
      'Key guidelines for technicians handling compressor replacements across R22, R407C, R410A, and R404A cooling loops, including POE oil moisture precautions.',
    keyPoints: [
      'Oil Matching: R22 compressors often used mineral or alkylbenzene oil, whereas HFC refrigerants (R410A, R407C, R404A) require synthetic Polyolester (POE) oil.',
      'Hygroscopic Nature of POE: POE oil absorbs atmospheric moisture within minutes of exposure; keep replacement compressor ports sealed until immediate brazing.',
      'Flushing Requirements: When replacing a burnt compressor, refrigerant lines and coils must be thoroughly flushed to remove acidic oil sludge before installing the new unit.',
    ],
    takeaway:
      'Never leave compressor suction or discharge rubber plugs open to atmospheric humidity prior to installation.',
    image: '/ac_compressor.png',
    catalogLink: { text: 'View Replacement Inventory', href: '/products' },
    actionLink: { text: 'Ask Sourcing Desk About Refrigerants', action: 'quote_modal' },
    featured: false,
  },
  {
    id: 'refurbished-vs-used-compressors',
    title: 'Refurbished vs Used Compressors: What Buyers Need to Know',
    category: 'REFURBISHMENT',
    readTime: '4 min read',
    summary:
      'The critical differences between untested scrap-yard compressors and inspected, coil-checked, pressure-tested units graded honestly for commercial re-use.',
    keyPoints: [
      'Scrap vs Prepared: Untested units from demolition sites often carry contaminated oil, damaged terminal seals, or internal mechanical seizures.',
      'Inspection Standards: Refurbished compressors at Zcool undergo physical casing inspection, electrical insulation and coil resistance checks, and sealed storage.',
      'Honest Condition Grading: Units are categorized transparently — Refurbished & Tested, Pressure Tested, or Overhauled — so buyers know exactly what they are purchasing.',
    ],
    takeaway:
      'Commercial HVAC replacements should always come from suppliers who verify winding integrity and supply units with sealed, dry ports.',
    image: '/ac_compressor_2.png',
    catalogLink: { text: 'Explore Refurbishment Standards', href: '/refurbishment' },
    actionLink: { text: 'Inquire About Refurbished Units', action: 'quote_modal' },
    featured: false,
  },
  {
    id: 'what-to-send-when-requesting-a-compressor',
    title: 'What Information to Send When Requesting a Replacement Compressor',
    category: 'REPLACEMENT',
    readTime: '3 min read',
    summary:
      'A straightforward 4-point checklist that helps facility managers and technicians get exact model matches and quick quotes from our Mumbai sourcing desk.',
    keyPoints: [
      '1. Compressor Model Code: Stamped on the compressor body sticker (e.g., Copeland ZR72KC-TFD-522, Daikin JT160G-P8Y1, Danfoss MTZ64-4VI).',
      '2. Operating Voltage & Frequency: Confirm 380–415V 3-phase or 220–240V 1-phase 50Hz.',
      '3. Refrigerant Type: Specify R22, R410A, R407C, or R404A.',
      '4. Clear Nameplate Photo: A photograph allows our technicians to verify terminal layout, mounting footprint, and port orientations.',
    ],
    takeaway:
      'Sending a clear photograph of the compressor nameplate sticker cuts identification time and eliminates model confusion.',
    image: '/ac_compressor_3.png',
    catalogLink: { text: 'Browse Compressor Catalog', href: '/products' },
    actionLink: { text: 'Attach Nameplate Photo Now', action: 'photo_upload' },
    featured: false,
  },
];
