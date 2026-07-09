// Central database of all industrial products in the ecosystem
export const PRODUCTS_CATALOG = [
  {
    id: 'hvac-pcb-100',
    code: 'Z-PCB-H100',
    name: 'Inverter VRF Controller Board',
    tagline: 'VRF/VRV Core Inverter Controller PCB',
    category: 'Electronic Components',
    type: 'PCB Boards',
    accentColor: '#1D6FA3',
    statusBadge: 'OEM Certified',
    availability: 'In Stock',
    voltage: '380V - 415V AC 3-Phase',
    warranty: '36 Months',
    oemGrade: 'Tier-1 OEM Approved',
    techSupport: '24/7 Remote Support',
    description: 'The master inverter controller board for high-capacity VRF climate systems. Engineered to coordinate active compressor frequency scaling and electronic expansion valve throttling.',
    compatibility: ['Daikin', 'LG', 'Carrier', 'Hitachi', 'Voltas', 'ABB', 'Siemens'],
    compatDetails: {
      'Daikin': 'Modbus RTU over RS-485 at 9600 Baud rate, mapping D-BACS parameters.',
      'LG': 'BACnet MSTP native integration registers for LG Multi V VFD systems.',
      'Carrier': 'LonWorks FTT-10A transceiver registers for Super X chiller controllers.',
      'Hitachi': 'H-Link custom protocol bridge with high speed address decoders.',
      'Voltas': 'Serial ASCII communication registers for Voltas commercial splits.',
      'ABB': 'Modbus TCP over Ethernet registers matching ABB ACS880 drive profiles.',
      'Siemens': 'PROFINET coupler registers for Siemens Desigo building automation networks.'
    },
    images: [
      '/hvac_pcb_front.png',
      '/hvac_pcb_perspective.png',
      '/hvac_story_components.png',
      '/hvac_pcb_exploded.png',
      '/hvac_story_installation.png',
      '/hvac_story_testing.png',
      '/hvac_pcb_macro.png',
      '/hvac_pcb_technician.png',
      '/hvac_pcb_installed.png',
      '/hvac_story_front.png',
      '/hvac_story_perspective.png',
      '/hvac_story_fins.png',
      '/hvac_story_macro.png',
      '/hvac_story_technician.png',
      '/hvac_story_wiring.png',
      '/hvac_story_exploded.png'
    ],
    imageLabels: [
      '01 // Front View Layout',
      '02 // 45° Component Perspective',
      '03 // Component Circuit Core',
      '04 // Exploded Layer CAD Schema',
      '05 // Control Cabinet Mounting',
      '06 // Factory Calibration Setup',
      '07 // Macro Microcontroller Focus',
      '08 // Technician Field View',
      '09 // Installed Panel Configuration',
      '10 // Engineering Front Elevation',
      '11 // Engineering Perspective',
      '12 // Copper Fin Array Detail',
      '13 // Macro Component Focus',
      '14 // Engineering Technician Closeup',
      '15 // Internal Wiring Harness',
      '16 // Full Exploded CAD Render'
    ],
    blueprintSpecs: {
      dimensions: '245mm x 180mm x 42mm (W x H x D)',
      measurements: [
        'Mounting pitch: 220mm x 160mm',
        'Terminal pitch: 5.08mm screw type',
        'Coating thickness: 35 microns (conformal)',
        'Copper foil weight: 2.0 oz double-layer'
      ],
      annotations: [
        { id: 'controller', x: 45, y: 35, text: 'Main ARM controller core. Coordinates frequency speed grids.' },
        { id: 'capacitor', x: 25, y: 65, text: 'Smoothing capacitors. Tolerances rated at 450V.' },
        { id: 'transformer', x: 65, y: 40, text: 'High frequency transformer. Galvanic isolation loops.' },
        { id: 'relay', x: 75, y: 20, text: 'SSR logic gates. Static zero electric arc switching.' },
        { id: 'fan', x: 80, y: 75, text: 'PWM cooling fan headers.' }
      ]
    },
    specs: {
      electrical: {
        'Input Voltage': '380V - 415V AC, 3-Phase, 50/60Hz',
        'Max Current Draw': '16.5A RMS per phase',
        'Control Logic Fuse': '2.0A Time-Delay Ceramic',
        'Surge Immunity': 'IEC 61000-4-5 Class 4 (6kV L-N, L-PE)'
      },
      thermal: {
        'Operating Temp Range': '-25°C to +85°C Junction',
        'Cooling Stage': 'Passive Extruded Anodized Heatsink',
        'Thermal Cutoff Switch': 'Active at +105°C Gate junction',
        'Max Dissipated Wattage': '45W at rated load parameters'
      },
      mechanical: {
        'Board Dimensions': '245mm x 180mm x 42mm (W x H x D)',
        'PCB Base Core': 'FR-4 High-TG 180C Glass Epoxy',
        'Weight': '1.24 kg including aluminum plate',
        'Mounting Hole Guide': '6 x M4 studs (ground isolated)'
      },
      communication: {
        'Communication Protocol': 'Modbus RTU, BACnet MS/TP, ASCII Registers',
        'Physical Layer': 'Dual isolated RS-485 loop terminals',
        'Baud Rates Supported': '9600, 19200, 38400, 57600, 115200 bps',
        'Addressing Controls': '8-position DIP switch addressing'
      },
      environmental: {
        'Ingress Protection': 'IP54 conforming with dual coat seal',
        'Operating Humidity': '5% to 95% non-condensing RH',
        'Vibration Resistance': 'MIL-STD-810G Method 514.6 compliant',
        'Compliance Stamps': 'CE, RoHS, UL 60730-1 standard certified'
      }
    },
    storytelling: [
      {
        num: '01',
        label: 'SYSTEM ARCHITECTURE',
        title: 'Parametric Overview',
        iconName: 'Info',
        desc: 'The master inverter controller board coordinates active compressor frequency scaling and electronic expansion valve throttling in mission-critical VRF systems.',
        bullets: [
          '32-bit ARM Cortex-M4 real-time core',
          'Modbus, BACnet MS/TP, and custom protocols',
          'Dual galvanically isolated RS-485 loop terminals',
          'Active ESD protective premium casing layers'
        ],
        chips: ['Grade: Tier-1', 'Bauds: 115k', 'MTBF: 85k Hours'],
        note: 'NOTE: Calibrated under ISO-9001 quality specifications for 24/7 operating cycles.'
      },
      {
        num: '02',
        label: 'LOGIC MODULATION',
        title: 'Engineering Benefits',
        iconName: 'Settings',
        desc: 'Maintains flat system temperatures while reducing mechanical wear, preventing cyclic compressor stresses and ensuring optimal compressor efficiency.',
        bullets: [
          'Active compressor frequency tracking logic',
          'Zero climate-driven diagnostic overshoot errors',
          'Integrated soft-start frequency ramping circuits',
          'Decreased vibration acoustics under full load'
        ],
        chips: ['Frequency: 10-150Hz', 'Modulation: PWM', 'Soft-Start: <2.5s'],
        note: 'NOTE: Ramps motor loops smoothly to decrease active power surges during staging.'
      },
      {
        num: '03',
        label: 'HEAT DISSIPATION',
        title: 'Thermal Performance',
        iconName: 'Thermometer',
        desc: 'Heavy-duty extruded aluminum heatsink and custom cooling fin matrices dissipate component heat loads in severe ambient operating environments.',
        bullets: [
          'Extruded anodized aluminum heatsink plate',
          'Active junction cutoff threshold protection at +105°C',
          'Optimized passive convective cooling patterns',
          'Max dissipated wastage parameters under 45W'
        ],
        chips: ['Junction: -25°C to +85°C', 'Dissipation: 45W', 'Thermal cut: +105°C'],
        note: 'NOTE: Heatsink core plates are ground isolated to protect sensitive silicon gates.'
      },
      {
        num: '04',
        label: 'ELECTRICAL PARAMETERS',
        title: 'Electrical Specifications',
        iconName: 'Zap',
        desc: 'Configured for high-voltage multi-phase grids, incorporating surge suppressors and high-frequency filtering blocks.',
        bullets: [
          'Input Voltage logic draw: 380V - 415V AC 3-Phase',
          'Smoothing ceramic capacitor filtering grid',
          'Surge immunity conforming to IEC 61000-4-5 Class 4',
          'Low control logic fuse rating: 2.0A Ceramic'
        ],
        chips: ['Voltage: 415V AC', 'Surge limit: 6kV', 'Fuse loop: 2.0A'],
        note: 'NOTE: Active surge components absorb spikes up to 6kV to protect downstream devices.'
      },
      {
        num: '05',
        label: 'SAFETY COMPLIANCE',
        title: 'Protection System',
        iconName: 'ShieldCheck',
        desc: 'Dual-layered conformal coat shielding defends microprocessors from airborne metal shavings, chemical dust, and humidity.',
        bullets: [
          'Acrylic conformal protective coating',
          'IP54 rated particulate ingress seal',
          'Galvanic control terminal isolation loops',
          'Phase failure detection and auto shutdown'
        ],
        chips: ['Ingress: IP54', 'Isolation: 3.75kV', 'Coating: Acrylic'],
        note: 'NOTE: Designed to withstand chemical condensation challenges in factory grids.'
      },
      {
        num: '06',
        label: 'FIELD DEPLOYMENT',
        title: 'Installation Guidelines',
        iconName: 'Building',
        desc: 'Standardized DIN rail mounts and pluggable spring clamps decrease field integration schedules and commissioning hours.',
        bullets: [
          'Standardized DIN Rail mounting brackets',
          'Pluggable screw clamp terminals for wiring loops',
          'Ground-isolated M4 mounting stud spacing',
          'Integrated BMS communication address switches'
        ],
        chips: ['Mounting: DIN Rail', 'Stud spacing: 6x M4', 'Address switches: 8-DIP'],
        note: 'NOTE: Ensure grounding baseplates are connected directly to building chassis ground.'
      },
      {
        num: '07',
        label: 'OPERATIONAL BREADTH',
        title: 'Applications Scope',
        iconName: 'User',
        desc: 'Optimized for high-density, mission-critical parameters in hospital wards, data vault server racks, and automated processing lines.',
        bullets: [
          'Hospitals: ±0.2°C temperature accuracy control',
          'Data Centers: High air volume, zero humidity loops',
          'Factories: Harsh environments with metallic dusts',
          'Hotels & Offices: Acoustic-dampened HVAC control'
        ],
        chips: ['Precision: ±0.2°C', 'BMS: Modbus/BACnet', 'MTBF: 85k Hours'],
        note: 'NOTE: Supports dual redundant Modbus failover logic registers.'
      },
      {
        num: '08',
        label: 'TELEMETRY MONITORS',
        title: 'Maintenance & Support',
        iconName: 'Clock',
        desc: 'Active diagnostic registers report real-time system performance, diagnostic telemetry logs, and error codes directly to building automation networks.',
        bullets: [
          'Onboard status LEDs reporting loop health',
          'Modbus/BACnet real-time parameter register telemetry',
          'Preventative thermal monitoring sensors',
          'Error code memory logging registers'
        ],
        chips: ['LED indicators: 4x RGB', 'Telemetry: RS-485', 'Alarm delay: <500ms'],
        note: 'NOTE: Remote firmware upgrades are supported over isolated serial terminals.'
      }
    ],
    applications: [
      {
        name: 'Hospital Operation Wards',
        problem: 'Volatile ambient drafts cause surgical equipment sensors to trip. Zero temperature fluctuations are permitted in clean HVAC corridors.',
        product: 'Z-PCB-H100 Inverter VRF Board',
        benefits: ['Eliminates climate-driven sensor overshoots', 'Guarantees continuous loop runtime parameters', 'Maintains microclimate balance'],
        outcome: 'Stable room parameters kept within ±0.2°C tolerances, matching international healthcare design compliance guide standards.'
      },
      {
        name: 'Enterprise Data Vaults',
        problem: 'High sensible heat load from server racks increases cooling cycle staging loops, drawing excessive building power spikes.',
        product: 'Z-PCB-H100 Smart Chiller Grid',
        benefits: ['Active frequency tracking scales motor load', 'Ramps stages smoothly to trim peak surge loads', 'Integrates natively with Modbus networks'],
        outcome: 'Achieved a verified 28% reduction in annual cooling infrastructure power costs with zero thermal cutoff shutdowns.'
      },
      {
        name: 'Chemical Processing Plants',
        problem: 'Airborne conductive dust and chemical condensation settle on control circuits, causing PCB dielectric failure and shutoffs.',
        product: 'Z-PCB-H100 with Conformal Coating',
        benefits: ['Acrylic double coating seals copper traces', 'IP54 particulate resistance blocks metallic dust', 'Pluggable spring clamps isolate control loops'],
        outcome: 'Mean Time Between Failures (MTBF) increased by 4.2x under extreme continuous chemical dust factory environments.'
      }
    ],
    installationSteps: [
      { step: '1', title: 'Calibration Inspection', desc: 'Unpack the ESD protective seal, run voltage balance checks, and verify board core traces under diagnostic magnifier scopes.' },
      { step: '2', title: 'DIN Rail Mounting', desc: 'Secure onto standard 35mm DIN rail tracks. Mount with chassis grounding studs connected to earth chassis loops.' },
      { step: '3', title: 'Terminal Connection', desc: 'Wire 3-phase mains to logic input bridges, connect pluggable RS-485 serial pins, and clamp EEV motor control signals.' },
      { step: '4', title: 'Logic Synchronization', desc: 'Address the unit DIP switches, boot system power, and verify Modbus register communication parameters.' },
      { step: '5', title: 'Live Commissioning', desc: 'Initiate frequency scaling ramp checks, calibrate safety threshold alarm limits, and synchronize metrics to building automation BMS.' },
      { step: '6', title: 'Telemetry Handover', desc: 'Activate dynamic diagnostics logs, verify failover register links, and assign the project field SLA monitoring profile.' }
    ],
    factoryQuality: [
      { name: 'Micro-Resistance Scan', desc: 'Solder joints and silicon components are tested for capacitance drift under high frequency parameters.' },
      { name: 'Class 10000 Placement', desc: 'Robotic SMD pick-and-place lines position logic chips with 10-micron tolerance margins.' },
      { name: 'Validation Burn-In Test', desc: 'Each board is run under 415V load at +65°C ambient temperature for 72 consecutive hours.' },
      { name: 'Acrylic Conformal Coat', desc: 'Automated spray valves apply dual protective acrylic shield layers to insulate circuits.' },
      { name: 'Logistics Shielding', desc: 'Boards are vacuum sealed inside ESD protective packages with shock registers.' },
      { name: 'Technical Support Sync', desc: 'SLA coordinates are assigned and product serial registers are logged to regional support databases.' }
    ],
    downloads: [
      { name: 'Technical Product Datasheet', type: 'PDF', version: 'v2.4.1', size: '2.5 MB', updated: '2026-05-15', file: '#' },
      { name: 'CAD Layout Drawings (3D STEP)', type: 'CAD', version: 'v1.8.0', size: '4.8 MB', updated: '2026-04-20', file: '#' },
      { name: 'Modbus Register Address Manual', type: 'MANUAL', version: 'v3.1.2', size: '1.4 MB', updated: '2026-06-02', file: '#' },
      { name: 'CE & ISO Compliance Certificate', type: 'CERTIFICATE', version: '2026-A', size: '820 KB', updated: '2026-01-10', file: '#' }
    ],
    faqs: [
      { q: 'Is this board compatible with legacy R-22 refrigeration compressor grids?', a: 'No. The logic frequency algorithms are strictly tuned for high-pressure R-410A and R-32 eco refrigerants. Operating on R-22 will cause phase errors and automatic motor shutdowns.' },
      { q: 'Can this communicate with BACnet IP protocols natively?', a: 'It communicates over serial BACnet MS/TP natively. For ethernet-based BACnet IP networks, a Z-Cool isolated network gateway adapter bridge is required.' },
      { q: 'What is the standard warranty and engineering support response SLA?', a: 'Every board is backed by an absolute 36-month diagnostic hardware replacement contract. Registered commercial sites receive a 15-minute response support engineer dispatch guarantee.' }
    ],
    supportEngineer: {
      name: 'Arjun Mehta',
      role: 'Lead HVAC Control Systems Engineer',
      img: '/logo1.png'
    }
  },
  {
    id: 'chiller-w50',
    code: 'CH-W50',
    name: 'Industrial Process Water Chiller',
    tagline: 'Heavy-Duty Process Liquid Chillers',
    category: 'Water Cooling Systems',
    type: 'Chillers',
    accentColor: '#0EA6A6',
    statusBadge: 'OEM Grade',
    availability: '4 Weeks',
    voltage: '415V AC 3-Phase 50Hz',
    warranty: '24 Months',
    oemGrade: 'OEM Grade ISO 9001',
    techSupport: '24/7 Field Engineering',
    description: 'Engineered for process cooling in automated factories, medical imaging centers, and chemical reactors. Features scroll compressor array and shell-and-tube heat exchanger.',
    compatibility: ['Daikin', 'LG', 'Carrier', 'Hitachi', 'Voltas', 'ABB', 'Siemens'],
    compatDetails: {
      'Daikin': 'Flanged loop communication ports coupling directly.',
      'LG': 'Standard Modbus card couples with LG control hubs.',
      'Carrier': 'Standard ANSI 2-inch flanged inlet/outlet parameters.',
      'Hitachi': 'Centralised address loops mapping parameters.',
      'Voltas': 'Serial connection terminals interfaces.',
      'ABB': 'Modbus registers speed speed controls matching standard converters.',
      'Siemens': 'Integrates with Siemens Desigo building automation networks.'
    },
    images: [
      '/chiller_front.png',
      '/chiller_perspective.png',
      '/chiller_internal.png',
      '/chiller_exploded.png',
      '/chiller_installation.png',
      '/chiller_testing.png',
      '/chiller_macro.png',
      '/chiller_packaging.png'
    ],
    imageLabels: [
      '01 // Front Loop Layout',
      '02 // Evaporator Assembly',
      '03 // Control Interface Panel',
      '04 // Water Piping Inlets',
      '05 // Dynamic Load Testing',
      '06 // Shell and Tube Diagram',
      '07 // Pressure Calibration Check',
      '08 // Structural Frame Protection Packaging'
    ],
    blueprintSpecs: {
      dimensions: '1850mm x 950mm x 1650mm (W x H x D)',
      measurements: [
        'Piping size: 2.0-inch flanged ANSI',
        'Channel base: 100mm structural rail',
        'Working pressure: 45 Bar nominal limit',
        'Dry operational weight: 680 kg'
      ],
      annotations: [
        { id: 'controller', x: 80, y: 30, text: 'Microprocessor PLC panel. Carel control unit.' },
        { id: 'capacitor', x: 25, y: 35, text: 'Phase correction capacitors grid. Over 0.96 targets.' },
        { id: 'transformer', x: 65, y: 30, text: 'Mains isolation transformer blocks.' },
        { id: 'relay', x: 75, y: 40, text: 'Overload safety relays. Triggers on motor spikes.' },
        { id: 'fan', x: 50, y: 15, text: 'PWM axial exhaust cooling fans.' }
      ]
    },
    specs: {
      electrical: {
        'Operating Power': '415V AC, 3-Phase, 50Hz input',
        'Nominal Current': '24.8A per phase',
        'Maximum Power Draw': '18.4 kW',
        'Starting Method': 'Soft-starter control unit integrated'
      },
      thermal: {
        'Cooling Capacity': '50 kW Nominal (14.2 Tons)',
        'Chilled Water Output Temp': '+5°C to +20°C adjustable',
        'Refrigerant Charge': '9.5 kg R410A Eco-refrigerant',
        'Heat Extraction Coefficient': '4.2 COP at rated parameters'
      },
      mechanical: {
        'Water Connections': '2-inch ANSI Class 150 flange',
        'Frame Structural Core': 'Heavy gauge galvanized channel steel',
        'Water Volumetric Capacity': '65 Liters internal loop',
        'Weight (Dry)': '680 kg'
      },
      communication: {
        'System Controller': 'Carel pCO5 Microprocessor Platform',
        'Fieldbus Communication': 'Modbus RTU / RS-485 serial block',
        'BMS Interfaces': 'Optional Ethernet card for BACnet IP',
        'Diagnostic Displays': 'High-contrast LCD status screen panel'
      },
      environmental: {
        'Noise Output': '68 dBA at 10 meters distance',
        'Ambient Operating Limit': '-10°C to +45°C air temperature',
        'Coating Protection': 'Powder-coated epoxy frame finish',
        'Certifications': 'AHRI Certified, CE compliance, ISO 9001'
      }
    },
    storytelling: [
      {
        num: '01',
        label: 'SYSTEM ARCHITECTURE',
        title: 'Parametric Overview',
        iconName: 'Info',
        desc: 'Engineered for process cooling in automated factories, medical imaging centers, and chemical reactors. Features scroll compressor array and shell-and-tube heat exchanger.',
        bullets: [
          'Dual scroll compressors with staging loops',
          'Heavy-duty shell-and-tube evaporator core',
          'Microprocessor controller with diagnostic LCD screen',
          'Anti-vibration floor mounting skid brackets'
        ],
        chips: ['Capacity: 50kW', 'Refrigerant: R410a', 'COP: 4.2'],
        note: 'NOTE: Configured for industrial 24/7 liquid cooling runs under volatile thermal loads.'
      },
      {
        num: '02',
        label: 'LOGIC MODULATION',
        title: 'Engineering Benefits',
        iconName: 'Settings',
        desc: 'Coordinates dual refrigeration circuits to allow component redundancy, ensuring stable water outputs even during maintenance events.',
        bullets: [
          'Soft-start motor staging controls',
          'Automatic compressor duty hour balancing',
          'Zero-vibration acoustic dampening pads',
          'Optimized cooling efficiency metrics'
        ],
        chips: ['Modulation: 2-Stage', 'Soft-Start: Yes', 'Control: Carel PLC'],
        note: 'NOTE: Smooth staging sequences eliminate logic-induced grid power spikes.'
      },
      {
        num: '03',
        label: 'HEAT DISSIPATION',
        title: 'Thermal Performance',
        iconName: 'Thermometer',
        desc: 'High-volume axial condenser fans combined with optimized aluminum fin arrays extract process heat efficiently under extreme ambient climates.',
        bullets: [
          'Axial fans conforming with ERP guidelines',
          'Anti-corrosive hydrophilic blue fin coating',
          'Dynamic head pressure fan speed scaling',
          'Working limits from -10°C to +45°C air'
        ],
        chips: ['Ambient Limit: +45°C', 'Fans: 2x Axial', 'Coating: Hydrophilic'],
        note: 'NOTE: Blue fin coating prevents rust buildup in coastal factory applications.'
      },
      {
        num: '04',
        label: 'ELECTRICAL PARAMETERS',
        title: 'Electrical Specifications',
        iconName: 'Zap',
        desc: 'Fitted with integrated mains isolation breakers, phase protective relays, and high capacity contactor grids.',
        bullets: [
          'Operating Voltage draw: 415V AC 3-Phase 50Hz',
          'Phase failure detection and shutoff relay',
          'IP54 rated powder coated control panel cabinet',
          'Capacitor bank power factor correction'
        ],
        chips: ['Power: 415V AC', 'PF: >0.96', 'Safety: Phase Relay'],
        note: 'NOTE: Power factor is corrected dynamically to lower utility charges.'
      },
      {
        num: '05',
        label: 'SAFETY COMPLIANCE',
        title: 'Protection System',
        iconName: 'ShieldCheck',
        desc: 'Multi-tiered safety mechanisms including dual high/low pressure switches, flow switches, and automatic thermal cutoffs.',
        bullets: [
          'Dual refrigerant loop pressure release switches',
          'Water flow differential safety switch',
          'Anti-freeze liquid threshold sensor trigger',
          'ASME certified evaporator core design'
        ],
        chips: ['Pressure limit: 45 Bar', 'Flow min: 12 L/min', 'Anti-freeze: +2°C'],
        note: 'NOTE: Flow switch triggers automatic scroll shutdown to prevent evaporator freezing.'
      },
      {
        num: '06',
        label: 'FIELD DEPLOYMENT',
        title: 'Installation Guidelines',
        iconName: 'Building',
        desc: 'Pre-piped skid packaging requires only simple water connections and mains hookups to activate plant cooling.',
        bullets: [
          '2-inch ANSI flanged water inlet/outlet pipes',
          'Dual structural steel crane lifting lugs',
          'Leveling shock absorber mount pads',
          'External control bypass switch terminals'
        ],
        chips: ['Inlet/Outlet: 2" ANSI', 'Lifting: 2x Lugs', 'Mounts: Rubber Pad'],
        note: 'NOTE: Ensure water loops are flushed before opening chiller isolators.'
      },
      {
        num: '07',
        label: 'OPERATIONAL BREADTH',
        title: 'Applications Scope',
        iconName: 'User',
        desc: 'Delivers high sensible heat ratio cooling loops to factory injection molds, medical MRI scanners, and chemical jacket reactors.',
        bullets: [
          'Medical: High accuracy magnetic resonance scan cooling',
          'Manufacturing: Instant plastic blow mold cooling',
          'Chemical: Temperature jacket process validation',
          'Breweries: Fermentation tank temperature control'
        ],
        chips: ['Temp accuracy: ±0.2°C', 'Liquid: Glycol compatible', 'Skid type: Packaged'],
        note: 'NOTE: Glycol ratios up to 40% are supported for sub-zero temperature loops.'
      },
      {
        num: '08',
        label: 'TELEMETRY MONITORS',
        title: 'Maintenance & Support',
        iconName: 'Clock',
        desc: 'Carel PLC registers transmit real-time telemetry metrics directly to local factory automation networks over serial Modbus.',
        bullets: [
          'Real-time refrigerant pressure registers log',
          'Water inlet/outlet delta temperature monitor',
          'Compressor run hours maintenance alarm trigger',
          'Remote shutdown input relay interface terminal'
        ],
        chips: ['BMS Protocol: Modbus RTU', 'Alarm output: 24V Relay', 'LCD size: 5" custom'],
        note: 'NOTE: Maintenance registers trigger automatically every 4000 operating hours.'
      }
    ],
    applications: [
      {
        name: 'MRI Medical Corridors',
        problem: 'MRI superconducting magnets release extreme heat spikes. Cooling failures ruin imaging diagnostics and cause helium boil-offs.',
        product: 'CH-W50 Liquid Chiller System',
        benefits: ['Stable temp delivery at ±0.2°C', 'Dual scroll circuit redundancy', 'Continuous liquid flow sensors monitoring'],
        outcome: 'Maintains steady coolant loop temperatures under high loads, preventing helium boil-off alarms and scanning outages.'
      },
      {
        name: 'Plastic Blow Molding Lines',
        problem: 'Extended mold setting times reduce daily output. Uncontrolled coolant temperatures lead to warped plastic batches.',
        product: 'CH-W50 Mold Cooling Loop',
        benefits: ['Fast heat extraction shell-and-tube core', 'Constant volume flow rates', 'Soft-starter limits motor currents spikes'],
        outcome: 'Increased daily molding batch cycles by 24% with 100% dimensions compliance on finished products.'
      },
      {
        name: 'Refinery Chemical Reactors',
        problem: 'Exothermic reactions generate unpredictable thermal surges, causing reactor temperature overshoots and safety halts.',
        product: 'CH-W50 Redundant Chiller Skid',
        benefits: ['Staged scroll compressors react instantly', 'Supports 40% ethylene glycol loops', 'IP54 control cabinets handle outdoor dust'],
        outcome: 'Maintains jacket process loops within tight safety limits, reducing emergency shutdown frequencies.'
      }
    ],
    installationSteps: [
      { step: '1', title: 'Crate Inspection', desc: 'Inspect structural steel skids and piping seals. Run pressure gauge checks to ensure shipping integrity.' },
      { step: '2', title: 'Skid Position', desc: 'Secure onto a concrete plinth using leveling rubber pads. Verify the base is chassis ground connected.' },
      { step: '3', title: 'Hydronic Flange Hookup', desc: 'Pipe Z-Cool ANSI flanges to loops, bleed air valves, and connect bypass valves.' },
      { step: '4', title: 'Contactor Wiring', desc: 'Connect 415V AC phase cables to the control cabinet breaker. Interface BMS cables to RS-485 pins.' },
      { step: '5', title: 'Plant Commissioning', desc: 'Fill the loop with glycol-water mixture, test flow rates, and stage the compressor motor runs.' },
      { step: '6', title: 'Telemetry Handover', desc: 'Calibrate water output registers, test BMS alarm relays, and activate remote support logs.' }
    ],
    factoryQuality: [
      { name: 'Skid Base Weld Check', desc: 'Galvanized steel skid mounts are scanned for micro-fractures and welding bead depth.' },
      { name: 'Piping Pressure Test', desc: 'Evaporator and hydronic pipes are pressurized at 45 Bar for 24 hours to check joints.' },
      { name: 'PLC Logic Verification', desc: 'PLC inputs and Carel program limits are simulated under zero-load conditions.' },
      { name: 'Burn-In Validation Run', desc: 'Chillers are run at maximum load at +40°C air temperature for 48 continuous hours.' },
      { name: 'Anti-Rust Coating', desc: 'Coated with epoxy powder and hydrophilic blue fin layers for weather proofing.' },
      { name: 'Logistics Cradling', desc: 'Skids are bolted onto timber runner skids and boxed in reinforced crates with shock sensors.' }
    ],
    downloads: [
      { name: 'Technical Product Datasheet', type: 'PDF', version: 'v1.2.0', size: '3.1 MB', updated: '2026-05-20', file: '#' },
      { name: 'Hydronic CAD drawings (3D STEP)', type: 'CAD', version: 'v2.0.0', size: '4.2 MB', updated: '2026-03-12', file: '#' },
      { name: 'Commissioning & Wiring Manual', type: 'MANUAL', version: 'v1.1.4', size: '2.5 MB', updated: '2026-05-25', file: '#' },
      { name: 'Factory Performance Certificate', type: 'CERTIFICATE', version: '2026-C', size: '1.1 MB', updated: '2026-02-10', file: '#' }
    ],
    faqs: [
      { q: 'Can this chiller work with pure water or must glycol be added?', a: 'For chilled water outputs above +6°C, pure water can be used. For outputs below +6°C, an ethylene glycol mixture (up to 40%) is mandatory to prevent internal copper tube freezing.' },
      { q: 'Is the condenser loop air-cooled or water-cooled?', a: 'CH-W50 is an air-cooled process chiller, fitted with high-efficiency axial fans. It operates standalone and does not require a cooling tower loop.' }
    ],
    supportEngineer: {
      name: 'Rohan Sharma',
      role: 'Lead Hydronics Design Engineer',
      img: '/logo1.png'
    }
  },
  {
    id: 'panel-pex15',
    code: 'PEX-P15',
    name: 'Cabinet Panel Heat Exchanger',
    tagline: 'IP55 Closed-Loop Cabinet Air Exchanger',
    category: 'Panel Cooling Systems',
    type: 'Cabinet Coolers',
    accentColor: '#1D6FA3',
    statusBadge: 'IP55 Certified',
    availability: 'In Stock',
    voltage: '230V AC 1-Phase 50Hz',
    warranty: '36 Months',
    oemGrade: 'Industrial Grade',
    techSupport: '24/7 Phone Support',
    description: 'Closed-loop air-to-air heat exchanger designed to protect sensitive PLC components and VFDs from dust, oil mist, and humidity in industrial environments.',
    compatibility: ['Rittal', 'Siemens', 'ABB', 'Schneider', 'Rockwell'],
    compatDetails: {
      'Rittal': 'Compatible with standard TS8 and VX25 cabinet bay patterns.',
      'Siemens': 'Direct interface links for Simatic S7-1500 panel assemblies.',
      'ABB': 'Engineered cabinet mount spacing matching standard ACS drives.',
      'Schneider': 'Couples directly into Spacial SF enclosures with standardized seals.',
      'Rockwell': 'Mounting dimensions accommodate Allen-Bradley control panels.'
    },
    images: [
      '/hvac_story_fins.png',
      '/hvac_story_macro.png',
      '/hvac_story_wiring.png',
      '/hvac_story_exploded.png',
      '/hvac_story_installation.png',
      '/hvac_story_testing.png',
      '/hvac_pcb_macro.png',
      '/hvac_pcb_front.png'
    ],
    imageLabels: [
      '01 // Front Face Overview',
      '02 // Internal Copper Heat Core',
      '03 // Sealed Air Loop Flow',
      '04 // CAD Dimension Assembly',
      '05 // Integrated Enclosure Setup',
      '06 // Dynamic Airflow Test',
      '07 // Digital Microcontroller Panel',
      '08 // Completed Assembly Profile'
    ],
    blueprintSpecs: {
      dimensions: '400mm x 950mm x 220mm (W x H x D)',
      measurements: [
        'Cutout dimensions: 360mm x 910mm',
        'Mounting studs: M6 thread type',
        'Airflow capacity: 1200 m³/h',
        'Heat transfer: 65 W/K performance rating'
      ],
      annotations: [
        { id: 'fin-array', x: 50, y: 25, text: 'Aluminum heat dissipation core. Conductive cooling path.' },
        { id: 'seal', x: 15, y: 50, text: 'IP55 dual-lip polyurethane dust seal gasket.' },
        { id: 'fan-loop', x: 80, y: 45, text: 'High-pressure backward curved centrifugal fans.' },
        { id: 'control', x: 75, y: 80, text: 'Microprocessor control display. High temp alarm output.' }
      ]
    },
    specs: {
      electrical: {
        'Operating Power': '230V AC, 1-Phase, 50/60Hz',
        'Nominal Current': '3.2A at 50Hz load',
        'Maximum Power Draw': '720W',
        'Starting Method': 'Direct-on-line (DOL) capacitor motor'
      },
      thermal: {
        'Specific Heat Transmission': '65 W/K continuous',
        'Operating Temperature Limits': '+10°C to +55°C cabinet internal',
        'Internal Loop Airflow': '1200 m³/h backward fans',
        'External Loop Airflow': '950 m³/h forward fans'
      },
      mechanical: {
        'Enclosure Rating': 'IP55 Closed-Loop Conformance',
        'Frame Material': 'Electro-galvanized sheet steel',
        'Surface Coating': 'Powder coated RAL 7035 textured paint',
        'Weight (Dry)': '28 kg packaged weight'
      },
      communication: {
        'Control Unit': 'Electronic controller with LED display',
        'Modbus Interface': 'Optional Modbus RTU RS-485 link',
        'Alarm Relay Output': 'Volt-free contact (max 230V / 2A)',
        'Display Indicator': '3-digit diagnostic screen'
      },
      environmental: {
        'Noise Output': '58 dBA at 1 meter',
        'Operating Humidity': '100% condensing ambient resistance',
        'Corrosion Protection': 'Epoxy-coated fins (optional)',
        'Compliance Stamps': 'CE, RoHS, UL Type 12 rating'
      }
    },
    storytelling: [
      {
        num: '01',
        label: 'SYSTEM ARCHITECTURE',
        title: 'Closed Loop Protection',
        iconName: 'Info',
        desc: 'Protects active PLC drives and high-voltage power components from metal shavings, chemical dust, oil mist, and humidity challenges.',
        bullets: [
          'Maintains IP55 hermetic cabinet seal',
          'Prevents outdoor pollutants from entering panels',
          'High thermal transfer coefficient (65 W/K)',
          'Compact 220mm frame footprint depth'
        ],
        chips: ['Ingress: IP55', 'Depth: 220mm', 'Cooling: Closed Loop'],
        note: 'NOTE: Air loop cycles inside the cabinet to prevent dust bypass failures.'
      },
      {
        num: '02',
        label: 'HEAT EXCHANGE CORE',
        title: 'Aluminum Fin Array',
        iconName: 'Settings',
        desc: 'Precision folded aluminum heat sink plates maximize thermal conduction margins without cross-contaminating cabinet air loops.',
        bullets: [
          'High purity aluminum core plates',
          'Epoxy-coated elements protect against acid vapor',
          'Optimized pitch minimizes airflow resistance',
          'Zero mechanical coolant piping leaks risk'
        ],
        chips: ['Core: Aluminum', 'Pitch: 3.5mm', 'Coating: Anti-corrosion'],
        note: 'NOTE: Passive conductive sheets guarantee zero refrigerant loop issues.'
      },
      {
        num: '03',
        label: 'AIR CIRCULATION',
        title: 'Centrifugal Fan Assemblies',
        iconName: 'Thermometer',
        desc: 'Equipped with dual backward-curved fan wheels running on maintenance-free ball bearings for 80k continuous operating hours.',
        bullets: [
          'Dual loops: Dedicated internal & external fans',
          'High static pressure handles dense cabling blocks',
          'Rated up to 1200 m³/h internal air cycles',
          'Acoustic-optimized impeller blade geometries'
        ],
        chips: ['B10 Life: 80k Hours', 'Impeller: Centrifugal', 'Total Flow: 1200 m³/h'],
        note: 'NOTE: Internal loop runs continuously to prevent logic hot-spots.'
      },
      {
        num: '04',
        label: 'CONTROLS SYSTEM',
        title: 'Parametric Diagnostics',
        iconName: 'Zap',
        desc: 'Onboard digital processor measures internal cabinet parameters, manages fan stages, and triggers temperature alerts.',
        bullets: [
          '3-digit high-contrast diagnostic LED screen',
          'Programmable differential switch setpoints',
          'Integrates dual NTC temperature sensor probes',
          'Dedicated dry-contact alarm fault output relay'
        ],
        chips: ['Display: 3-Digit LED', 'Sensors: 2x NTC', 'Alarm contact: 2A Rated'],
        note: 'NOTE: Set default alarm thresholds at +45°C to protect electronics.'
      },
      {
        num: '05',
        label: 'MECHANICAL INTEGRATION',
        title: 'Standardized Cabinet Mount',
        iconName: 'ShieldCheck',
        desc: 'Mounting brackets and pre-punched stud arrays match industry standard enclosures for immediate bay scaling.',
        bullets: [
          'Direct fit matching TS8 & VX25 enclosures',
          'Self-adhesive polyurethane gasket seals',
          'Includes structural reinforcement mounting plates',
          'Quick surface mount or partial recess depth'
        ],
        chips: ['Mounting: VX25/TS8', 'Seals: Polyurethane', 'Grip studs: M6 Thread'],
        note: 'NOTE: Apply uniform torque to M6 studs to secure the IP55 gasket seal.'
      },
      {
        num: '06',
        label: 'MAINTENANCE FLOW',
        title: 'Slide-Out Core Access',
        iconName: 'Building',
        desc: 'Designed with quick-release fasteners to slide the core out without disconnecting power lines or opening cabinet hinges.',
        bullets: [
          'Hinged front grille drops for immediate access',
          'Slide-out aluminum core cartridge system',
          'Washable metal mesh pre-filters option',
          'Standard terminal block disconnect plug'
        ],
        chips: ['Access: Toolless Front', 'Core: Slide-out', 'Filters: Washable Mesh'],
        note: 'NOTE: Blow clean dry compressed air through the aluminum core every 6 months.'
      },
      {
        num: '07',
        label: 'APPLICATION SUITE',
        title: 'Versatile Plant Fitting',
        iconName: 'User',
        desc: 'Ideal for cement mills, steel casting bays, paper factories, and high humidity pharmaceutical processing hubs.',
        bullets: [
          'Protects variable frequency drives (VFD)',
          'Maintains logic stability on PLC card racks',
          'Cools server cabinet backup battery trays',
          'Shields indoor control nodes near boiler rooms'
        ],
        chips: ['VFD Protection: Yes', 'PLC Shielding: Yes', 'Ambient max: +55°C'],
        note: 'NOTE: Replaces active air conditioning filters where dust load is high.'
      },
      {
        num: '08',
        label: 'TELEMETRY INTELLIGENCE',
        title: 'Modbus Protocol Loop',
        iconName: 'Clock',
        desc: 'Optional communications card logs operational metrics and fans duty status to central control rooms.',
        bullets: [
          'Logs external grid voltage draw spikes',
          'Reports fan current draw limits warnings',
          'Measures dynamic heat transfer rate changes',
          'Remote fan override controller triggers'
        ],
        chips: ['Bus link: Modbus RTU', 'Registers: Read/Write', 'Baud rates: 9.6-115k'],
        note: 'NOTE: Monitor heat transfer trends to schedule preventative cleanings.'
      }
    ],
    applications: [
      {
        name: 'Cement Grinding Mills',
        problem: 'Suspended abrasive limestone dust penetrates standard fan ventilation cabinets, shorting PLC control modules.',
        product: 'PEX-P15 Heat Exchanger Enclosure',
        benefits: ['Maintains absolute IP55 sealed loop isolation', 'Converts cabinet to a dust-free cooling cycle', 'Backward fans overcome heavy filter loads'],
        outcome: 'Zero dust-related PLC shutoffs recorded over 18 months, saving massive milling down-times.'
      },
      {
        name: 'Automotive Painting Lines',
        problem: 'Sticky paint solvents and chemical mist coat electronic heatsinks, causing drive overheating and line halts.',
        product: 'PEX-P15 Closed Air Exchanger',
        benefits: ['Shields VFD cards from chemical solvent vapors', 'Aluminum core blocks wet chemical entry', 'Smooth front face allows spray cleaning'],
        outcome: 'Cabinet interior remains clean and paint-free, extending inverter drive service parameters.'
      },
      {
        name: 'coastal Water Desalination',
        problem: 'High relative humidity combined with salt mist corrodes copper tracks on backup safety switchboards.',
        product: 'PEX-P15 with Epoxy Coating',
        benefits: ['Epoxy-coated aluminum core resists salt rust', 'Closed-loop prevents high humidity air entry', 'Dual-lip polyurethane gasket seals door seams'],
        outcome: 'Switchboard cabinet interior moisture values kept below condensation limits, preventing arc faults.'
      }
    ],
    installationSteps: [
      { step: '1', title: 'Panel Cutout', desc: 'Trace the PEX-P15 mounting schematic template, check clearance margins, and cut the 360mm x 910mm enclosure opening.' },
      { step: '2', title: 'Gasket Sealing', desc: 'Position the polyurethane foam gaskets around the panel flange edges. Verify there are zero cuts or gaps.' },
      { step: '3', title: 'Enclosure Fitting', desc: 'Lift the unit into place, align the integrated studs, and tighten M6 nuts to clamp the gasket seal.' },
      { step: '4', title: 'Mains Connection', desc: 'Route 230V AC lines through cable glands, and plug terminals to the controller board pins.' },
      { step: '5', title: 'Setpoint Tuning', desc: 'Power on the circuit, check fan rotation direction, and set thermal threshold alarms to +45°C.' },
      { step: '6', title: 'Commissioning Sign-off', desc: 'Measure running current, test alarm relay outputs, and secure the front filter grille block.' }
    ],
    factoryQuality: [
      { name: 'Core Leak Testing', desc: 'Aluminum sheets are helium pressure tested to ensure zero cross-contamination of air paths.' },
      { name: 'IP55 Ingress Validation', desc: 'Seals and gaskets are tested under standardized water jets to confirm IP55 ratings.' },
      { name: 'Motor Load Analysis', desc: 'Fans are run at +60°C cabinet parameters for 24 hours to monitor bearing temperatures.' },
      { name: 'Dielectric Insulation Check', desc: 'Electrical circuits are tested at 1.5kV to confirm grounding protection margins.' },
      { name: 'Epoxy Coating Spray', desc: 'Conducted under electrostatic spray lines to verify coat thickness targets (25 microns).' },
      { name: 'Shock-Absorbent Pack', desc: 'Enclosed in reinforced double-wall cartons with custom foam buffers.' }
    ],
    downloads: [
      { name: 'Technical Product Datasheet', type: 'PDF', version: 'v1.4.2', size: '1.8 MB', updated: '2026-06-10', file: '#' },
      { name: 'Mechanical Mounting Guide (2D CAD)', type: 'CAD', version: 'v1.1.0', size: '2.1 MB', updated: '2026-03-05', file: '#' },
      { name: 'Modbus register address manual', type: 'MANUAL', version: 'v1.0.2', size: '820 KB', updated: '2026-01-18', file: '#' },
      { name: 'CE & RoHS Compliance Declaration', type: 'CERTIFICATE', version: '2026-R', size: '540 KB', updated: '2026-02-12', file: '#' }
    ],
    faqs: [
      { q: 'What maintenance schedules are required for dusty environments?', a: 'Clean the aluminum core core every 3 to 6 months using clean, dry compressed air. Do not use chemical solvents or wire brushes on the aluminum fins.' },
      { q: 'Can this unit be mounted horizontally on the roof of a cabinet?', a: 'No. PEX-P15 is designed for vertical side-panel or door-mounting configurations only. Horizontal mounting will compromise condensate drainage loops.' }
    ],
    supportEngineer: {
      name: 'Arjun Mehta',
      role: 'Lead HVAC Control Systems Engineer',
      img: '/logo1.png'
    }
  },
  {
    id: 'precision-ac-200',
    code: 'PAC-C200',
    name: 'Precision Close Control Unit',
    tagline: 'High-Capacity Sensible Server Cooling CCU',
    category: 'Precision Air Conditioning',
    type: 'Precision ACs',
    accentColor: '#0EA6A6',
    statusBadge: 'CRAC Certified',
    availability: '2 Weeks',
    voltage: '415V AC 3-Phase 50Hz',
    warranty: '24 Months',
    oemGrade: 'Mission-Critical',
    techSupport: '24/7 Field Engineering',
    description: 'Downflow precision cooling air conditioner designed to maintain temperature, humidity, and air cleanliness within tight server room tolerances.',
    compatibility: ['LG', 'Daikin', 'Siemens', 'ABB', 'Schneider'],
    compatDetails: {
      'LG': 'BACnet MSTP native registers matching LG Multi V systems.',
      'Daikin': 'D-BACS parameters serial communication register interface.',
      'Siemens': 'PROFINET coupler registers for Siemens Desigo building automation networks.',
      'ABB': 'Modbus registers speed controls matching ACS drives.',
      'Schneider': 'EcoStruxure IT native integration and status telemetry mapping.'
    },
    images: [
      '/chiller_internal.png',
      '/chiller_perspective.png',
      '/chiller_front.png',
      '/chiller_exploded.png',
      '/chiller_installation.png',
      '/chiller_testing.png',
      '/chiller_macro.png',
      '/chiller_packaging.png'
    ],
    imageLabels: [
      '01 // Compressor Deck Assembly',
      '02 // Direct Expansion Coil Frame',
      '03 // EC Fan Discharge Plenum',
      '04 // CAD Core Assembly Drawing',
      '05 // Server Floor Placement',
      '06 // Factory Performance Test Run',
      '07 // PLC Carel Controller Interface',
      '08 // Finished Wooden Packaging'
    ],
    blueprintSpecs: {
      dimensions: '900mm x 1950mm x 900mm (W x H x D)',
      measurements: [
        'Floor tile footprint: 900mm x 900mm',
        'EC Fan diameter: 450mm',
        'Humidifier capacity: 8.5 kg/h',
        'Sensible heat ratio: 0.98 rating'
      ],
      annotations: [
        { id: 'ec-fan', x: 50, y: 85, text: 'Infinitely variable EC fan motor assembly. Downflow discharge.' },
        { id: 'coil', x: 45, y: 40, text: 'High-surface area hydrophilic copper/aluminum DX cooling coil.' },
        { id: 'humidifier', x: 20, y: 60, text: 'Electrode steam humidifier cylinder loop.' },
        { id: 'filter', x: 50, y: 15, text: 'G4 class MERV-8 air filtration pre-filter chamber.' }
      ]
    },
    specs: {
      electrical: {
        'Operating Power': '415V AC, 3-Phase, 50Hz',
        'Nominal Current': '18.5A per phase',
        'Maximum Power Draw': '12.2 kW',
        'Starting Method': 'EC Fan soft-start ramp control'
      },
      thermal: {
        'Cooling Capacity': '25 kW Sensible load',
        'Airflow Volume': '6200 m³/h variable EC fan',
        'Sensible Heat Ratio': '0.98 SHR',
        'Humidifier Capacity': '8.5 kg/h electrode cylinder'
      },
      mechanical: {
        'Discharge Layout': 'Downflow under-floor tile configuration',
        'Refrigerant Circuit': 'R410A scroll compressor cycle',
        'Filter Class': 'G4/MERV-8 standard disposable block',
        'Weight (Dry)': '320 kg'
      },
      communication: {
        'CCU Controller': 'Carel microprocessor with RS-485 Modbus',
        'Network Port': 'Native RJ45 Ethernet socket',
        'BMS Protocol': 'Modbus RTU, BACnet IP, SNMP protocol',
        'Alarms Logging': 'Active database registers (up to 150 events)'
      },
      environmental: {
        'Noise Output': '62 dBA at 2 meters',
        'Ambient Operating Limit': '-15°C to +48°C outdoor condenser temp',
        'Frame Structure': 'Acoustically insulated double-skin panels',
        'Compliance Stamps': 'ISO 9001, Eurovent, CE certified'
      }
    },
    storytelling: [
      {
        num: '01',
        label: 'SYSTEM ARCHITECTURE',
        title: 'Precision Room Control',
        iconName: 'Info',
        desc: 'Designed to manage latent heat loads, relative humidity, and air dust levels in continuous-run data vault architectures.',
        bullets: [
          'Maintains target temperatures within ±0.5°C margins',
          'Monitors relative humidity tolerances within ±3%',
          'Downflow air cycle leverages raised access floors',
          'Continuous operational runs (8760 hours/year)'
        ],
        chips: ['Temp accuracy: ±0.5°C', 'Humidity: ±3%', 'SHR: 0.98'],
        note: 'NOTE: Designed to support high-density server racks drawing sensible heat loads.'
      },
      {
        num: '02',
        label: 'EC FAN TECHNOLOGY',
        title: 'Variable Airflow Delivery',
        iconName: 'Settings',
        desc: 'Infinitely variable electronically commutated fan motors match discharge parameters to real-time cabinet loading curves.',
        bullets: [
          'Backward curved centrifugal wheel design',
          'Consumes up to 30% less power than AC motors',
          'Soft-start frequency profiles protect electric grid',
          'Integrated modulating speed register logic'
        ],
        chips: ['Motor: EC Type', 'Plenum: Downflow', 'Power saving: 30%'],
        note: 'NOTE: Air volume scales automatically based on under-floor static pressures.'
      },
      {
        num: '03',
        label: 'HUMIDITY SYSTEM',
        title: 'Electrode Steam hum',
        iconName: 'Thermometer',
        desc: 'Integrated cylinder type steam humidifier ensures static-free environments, preventing circuit board arc arcs.',
        bullets: [
          'Modulating steam output (up to 8.5 kg/h)',
          'Replaceable steam cylinder with scale flushing',
          'Conductivity sensor monitors water quality input',
          'Auto-flush cycle handles hard water environments'
        ],
        chips: ['Humidifier: Steam', 'Output: 8.5 kg/h', 'Cylinder: Cleanable'],
        note: 'NOTE: Prevents ESD damage in dry cold climates by maintaining >45% RH.'
      },
      {
        num: '04',
        label: 'REFRIGERATION CORE',
        title: 'Scroll Compressor Loop',
        iconName: 'Zap',
        desc: 'Copeland hermetic scroll compressors coupled with electronic expansion valves provide quick response cycles.',
        bullets: [
          'High efficiency scroll compression mechanisms',
          'Electronic expansion valve modulation',
          'Hydrophilic blue fin condenser coils protection',
          'Refrigerant sight glass check interface ports'
        ],
        chips: ['Compressor: Scroll', 'EEV Type: Electronic', 'COP: 3.8 continuous'],
        note: 'NOTE: EEV speed matching prevents compressor liquid floodback loops.'
      },
      {
        num: '05',
        label: 'FILTRATION PLENUM',
        title: 'MERV-8 Ingress Defense',
        iconName: 'ShieldCheck',
        desc: 'High-surface G4 filters clean incoming room air, intercepting dust particles before server intake paths.',
        bullets: [
          'MERV-8 disposable pleated filter cassettes',
          'Differential pressure sensor triggers filter alarms',
          'Quick-slide front track frame access rails',
          'Metal support frames prevent element bending'
        ],
        chips: ['Rating: MERV-8', 'Access: Slide Track', 'Monitor: DP Sensor'],
        note: 'NOTE: Clogged filters reduce cooling capacity. Replace when alarm triggers.'
      },
      {
        num: '06',
        label: 'INTEGRATED HEATER',
        title: 'Thyristor Reheat Stage',
        iconName: 'Building',
        desc: 'Fitted with electric low-watt reheat tubes to prevent overcooling cycles during intensive dehumidification runs.',
        bullets: [
          'Stainless steel tubular heating rods array',
          'Modulating solid-state thyristor control',
          'Over-temperature auto cutoff limit switches',
          'Zero acoustic hum heater staging design'
        ],
        chips: ['Heater: Thyristor', 'Modulation: SSR', 'Element: Stainless'],
        note: 'NOTE: Reheat cycles activate only when dehumidification setpoints are open.'
      },
      {
        num: '07',
        label: 'APPLICATION MATRIX',
        title: 'Mission Critical Fits',
        iconName: 'User',
        desc: 'Fitted in telecom switch hubs, server data rooms, calibration laboratories, and medical scanner suites.',
        bullets: [
          'Telecom vaults: Dual redundant master/slave link',
          'Server centers: Hot-aisle cooling grids',
          'Hospitals: Constant temperature diagnostics',
          'Lab spaces: Strict clean room parameters'
        ],
        chips: ['Data Rooms: Yes', 'Labs: Yes', 'Master/Slave: Yes'],
        note: 'NOTE: Configured to support automatic failover routing protocols.'
      },
      {
        num: '08',
        label: 'TELEMETRY HUD',
        title: 'Smart BMS Integrations',
        iconName: 'Clock',
        desc: 'Native RJ45 Ethernet ports and RS-485 interfaces communicate status parameters directly to BACnet building managers.',
        bullets: [
          'BACnet IP and Modbus RTU register mapping',
          'Logs detailed alarm histories (150 events)',
          'Real-time sensible load status parameters reports',
          'Dual network loops for redundant backup'
        ],
        chips: ['Link: RJ45 Ethernet', 'BMS: BACnet IP/SNMP', 'Alarms: 150 Logged'],
        note: 'NOTE: Alerts can trigger SMS or email alarms via custom BMS gateways.'
      }
    ],
    applications: [
      {
        name: 'cloud Provider Data Vault',
        problem: 'Server thermal densities exceed 8kW per rack. Traditional comfort ACs cannot handle the sensible heat load, causing hotspots.',
        product: 'PAC-C200 Downflow Cooling unit',
        benefits: ['0.98 Sensible Heat Ratio targets sensible load', 'EC fans adjust speed to under-floor pressure', 'Continuous 24/7 runtime assurance'],
        outcome: 'Hotspots were eliminated, keeping CPU temperatures below +65°C and reducing facility PUE metrics to 1.35.'
      },
      {
        name: 'Telecom Switch Center',
        problem: 'Volatile relative humidity causes electrostatic arc discharges, shorting copper transmission card arrays.',
        product: 'PAC-C200 with Steam Humidifier',
        benefits: ['Steam cylinder maintains static-free 50% RH', 'Downflow airflow routes cold air directly', 'Dual redundant slave failover mode'],
        outcome: 'Static discharges dropped to zero, and redundant slave controllers ensure zero climate system outages.'
      },
      {
        name: 'Metrology Testing Labs',
        problem: 'Calibration devices drift under temperature fluctuations exceeding ±1.0°C, causing inaccurate testing certification logs.',
        product: 'PAC-C200 Precision Loop',
        benefits: ['Sustains steady temperature within ±0.5°C setpoints', 'MERV-8 filters clear airborne micro-particles', 'Thyristor reheater adjusts temperature instantly'],
        outcome: 'Lab ambient parameters conform strictly to ISO/IEC 17025 standard calibration environment guide values.'
      }
    ],
    installationSteps: [
      { step: '1', title: 'Position Unit', desc: 'Secure the base frame matching the raised access floor grid, checking level alignments carefully.' },
      { step: '2', title: 'Connect Piping', desc: 'Pipe the liquid refrigerant lines, connect condensate drain traps, and test joints at 45 Bar.' },
      { step: '3', title: 'Wire Power', desc: 'Route 415V 3-phase mains to the terminal block. Wire the BACnet network cable to the RJ45 socket.' },
      { step: '4', title: 'Plenum Setup', desc: 'Open raised floor discharge tiles, checking that under-floor airflow paths are clear.' },
      { step: '5', title: 'Run Diagnostics', desc: 'Verify sensor inputs, check humidifier steam cylinder cylinder, and initiate fan startup sequences.' },
      { step: '6', title: 'Sync to BMS', desc: 'Set Modbus device ID addresses, check telemetry register maps, and configure failover rules.' }
    ],
    factoryQuality: [
      { name: 'EC Fan Balancing', desc: 'Centrifugal fan impellers are dynamically balanced to reduce vibrations under full speed load.' },
      { name: 'DX Coil Seal test', desc: 'DX copper circuits are leak-tested at 45 Bar to verify solder joint integrity.' },
      { name: 'Microprocessor Simulation', desc: 'Input signals and NTC probe arrays are checked against pre-set logic rules.' },
      { name: 'Continuous Run Test', desc: 'Tested under high heat parameters in climate chambers for 48 consecutive hours.' },
      { name: 'Frame Sound Insulation', desc: 'Verified double-skin panel acoustic seals block direct compressor noises.' },
      { name: 'Crating and Wrapping', desc: 'Mounted on wooden transport skids and packaged inside plywood boxes.' }
    ],
    downloads: [
      { name: 'Technical Product Datasheet', type: 'PDF', version: 'v2.1.0', size: '2.8 MB', updated: '2026-06-05', file: '#' },
      { name: 'CCU Mechanical CAD Layout', type: 'CAD', version: 'v1.6.0', size: '3.5 MB', updated: '2026-03-20', file: '#' },
      { name: 'Operation & Commissioning Manual', type: 'MANUAL', version: 'v2.0.4', size: '2.2 MB', updated: '2026-05-10', file: '#' },
      { name: 'BMS Register address table', type: 'MANUAL', version: 'v1.1.2', size: '940 KB', updated: '2026-02-15', file: '#' }
    ],
    faqs: [
      { q: 'Is the humidifier cleanable or disposable?', a: 'The PAC-C200 electrode humidifier cylinder is cleanable. It can be opened, descaled of mineral deposits, and reused multiple times before needing replacement.' },
      { q: 'Can this unit operate under high outdoor ambient temperatures?', a: 'Yes. With the standard air-cooled condenser, the system can run under outdoor temperatures up to +48°C without safety high-pressure trips.' }
    ],
    supportEngineer: {
      name: 'Rohan Sharma',
      role: 'Lead Hydronics Design Engineer',
      img: '/logo1.png'
    }
  }
];

