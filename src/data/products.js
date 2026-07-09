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
      '/hvac_pcb_macro.png',
      '/hvac_pcb_installed.png',
      '/hvac_pcb_exploded.png',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop', // Warehouse
      '/hvac_pcb_technician.png',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop' // Packaging
    ],
    imageLabels: [
      '01 // Front View Layout',
      '02 // 45° Component Perspective',
      '03 // Macro Microprocessor Close-up',
      '04 // Installed HVAC Control Cabinet',
      '05 // Exploded Layer CAD Schema',
      '06 // Warehouse Dispatch Assembly Area',
      '07 // Active Engineering Calibration Check',
      '08 // ESD Protective Premium Packaging'
    ],
    hotspots: [
      { id: 'controller', x: 45, y: 35, title: 'Controller Processor Core', desc: '32-bit Cortex-M4 ARM microcontroller executes active real-time compressor speed calculations.' },
      { id: 'capacitor', x: 25, y: 65, title: 'Capacitor Filtering Block', desc: 'Heavy-duty 450V electrolytic smoothing capacitors filter input ripple, protecting the compressor motor.' },
      { id: 'transformer', x: 65, y: 40, title: 'High-Frequency Transformer', desc: 'Galvanically isolates low-voltage control signals from 400V high-power driver lines.' },
      { id: 'relay', x: 75, y: 20, title: 'Solid State Relay Grid', desc: 'High-reliability relays control EEV coils and crankcase heaters with zero electric arcing risk.' },
      { id: 'fan', x: 80, y: 75, title: 'Cooling Fan Speed Header', desc: 'Pulse-Width Modulated (PWM) connection port scales heatsink cooling fan speeds dynamically.' },
      { id: 'power', x: 15, y: 25, title: 'Power Section Modulator', desc: 'Intelligent Power Module rectifies AC input and gates DC inverter output loops smoothly.' }
    ],
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
      { num: '01', title: 'System Overview', label: 'Inverter Core', desc: 'Main controller designed for VRF/VRV central climate loops, coordinating compressor scaling dynamically.' },
      { num: '02', title: 'Engineering Architecture', label: 'Logical Blocks', desc: 'High-speed ARM processing nodes drive calculations to match cooling loads without overshoot errors.' },
      { num: '03', title: 'Internal Components', label: 'Core Silicon', desc: 'Assembled with Japanese high-reliability capacitors and high-efficiency solid-state relays.' },
      { num: '04', title: 'Key Benefits', label: 'Thermodynamics', desc: 'Maintains flat system temperatures while reducing mechanical wear, preventing cyclic compressor stresses.' },
      { num: '05', title: 'Specifications Parameters', label: 'Parameters', desc: 'Parametric details confirm high voltage thresholds and extreme surge protection parameters.' },
      { num: '06', title: 'Applications Scope', label: 'Solutions', desc: 'Engineered for environments requiring 100% continuous runtime such as hospitals and server hubs.' },
      { num: '07', title: 'Ingress Protection', label: 'IP54 Standard', desc: 'Acrylic conformal protection resists chemical condensation and dust accumulation in industrial sites.' },
      { num: '08', title: 'Installation Guide', label: 'Commissioning', desc: 'Pluggable spring clamps and standard DIN rail mount channels decrease deployment schedules.' },
      { num: '09', title: 'Maintenance Protocols', label: 'Diagnostics', desc: 'Onboard status LEDs and error logging registers report system health directly to the master BMS.' },
      { num: '10', title: 'Downloads Desk', label: 'CAD & Manuals', desc: 'Retrieve architectural DWG schematics and PDF software registers manuals.' },
      { num: '11', title: 'Warranty Coverage', label: '36 Months', desc: 'Backed by our three-year absolute repair and replace warranty service agreement.' },
      { num: '12', title: 'Procurement Request', label: 'Get Quote', desc: 'Submit specifications requirements to receive corporate bulk quotes from our sales engineers.' }
    ],
    applications: [
      {
        name: 'Hospital',
        problem: 'Zero temperature fluctuations allowed. Critical surgeries depend on clean climate loops.',
        product: 'Z-PCB-H100 Inverter VRF Board',
        benefits: 'Stable temperature parameters at ±0.2°C, eliminating climate-driven diagnostic errors.'
      },
      {
        name: 'Data Center',
        problem: 'High heat density requires high air volume cooling with zero humidity condensation.',
        product: 'Z-PCB-H100 + CCU-X10 HVAC Module',
        benefits: '35% reduction in annual cooling energy cost parameters and active preventative alerts.'
      },
      {
        name: 'Factory',
        problem: 'Airborne metal shavings and chemical dust settle on electronics, causing short circuits.',
        product: 'Z-PCB-H100 with Sealed IP54 Cover',
        benefits: 'Mean Time Between Failures (MTBF) increased by 4x under extreme dust conditions.'
      },
      {
        name: 'Warehouse',
        problem: 'Volumetric storage depots suffer from air stratification, leading to high thermal loss.',
        product: 'Z-PCB-H100 staging air loops',
        benefits: 'Ensures even temperature columns and optimal energy conservation.'
      },
      {
        name: 'Commercial Building',
        problem: 'Fluctuating tenant thermal loads draw excessive grid power during peak periods.',
        product: 'VRF Controller with smart staging',
        benefits: 'Coordinated compressor loops to trim peak power spikes, lowering costs by 28%.'
      },
      {
        name: 'Hotel',
        problem: 'Acoustic compressor vibration humming through suite ducts, disrupting guest comfort.',
        product: 'Z-PCB-H100 with Soft-Start Inverter',
        benefits: 'Smooth frequency ramping keeps decibel ratings below comfort thresholds.'
      }
    ],
    installationSteps: [
      { step: '1', title: 'Inspection', desc: 'Verify incoming packaging crate seals, run ESD voltage audits, and perform micro-crack scans under diagnostic magnifier grids.' },
      { step: '2', title: 'Installation', desc: 'Mount onto standardized DIN Rail brackets, connect pluggable screw clamp terminals, and ground high-voltage baseplates.' },
      { step: '3', title: 'Testing', desc: 'Verify input voltages, check Modbus RTU communication loop addresses, and monitor EEV valve resistance parameters.' },
      { step: '4', title: 'Commissioning', desc: 'Boot the controller system logic board, auto-detect compatibility register logs, and log active metrics to the facility BMS.' },
      { step: '5', title: 'Support', desc: 'Establish redundant remote diagnostics telemetry lines, configure BMS alarms, and assign a dedicated local field technician.' }
    ],
    factoryQuality: [
      { name: 'Incoming Inspection', desc: 'Incoming silicon capacitors and relay blocks undergo micro-resistance and capacity drift audits.' },
      { name: 'Assembly', desc: 'SMD lines place components with 10-micron tolerance under class 10000 cleanroom parameters.' },
      { name: 'Quality Testing', desc: 'Boards are run at full 415V load at +65°C ambient temperature for 72 continuous hours in burn-in chambers.' },
      { name: 'Packaging', desc: 'Muffled ESD shielding bags and structural vacuum-sealed thermal layers guard boards.' },
      { name: 'Delivery', desc: 'Tracked logistics dispatch containing shock deflection sensors inside timber boxing layers.' }
    ],
    faqs: [
      { q: 'Is this board compatible with older R-22 refrigeration compressor systems?', a: 'No. The active EEV frequency algorithms are specifically configured for high-pressure R-410A and R-32 eco refrigerants. Operating on R-22 will cause compressor safety shutdowns.' },
      { q: 'Can this communicate with BACnet IP protocols directly?', a: 'It communicates over BACnet MS/TP natively. For BACnet IP networks, an external Modbus/IP converter bridge is required.' },
      { q: 'How does the surge guard handle continuous overvoltage?', a: 'The surge guard absorbs transient spikes up to 6kV. For continuous grid overvoltage (e.g., above 460V AC), a phase failure protector relay must be connected upstream.' },
      { q: 'What is the standard delivery schedule for bulk OEM batches?', a: 'Standard batches are in stock. Large OEM custom orders require 4-6 weeks for component placement, burn-in validation, and packaging.' }
    ],
    supportEngineer: {
      name: 'Arjun Mehta',
      role: 'Lead HVAC Control Systems Engineer',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
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
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop', // Front
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop', // 45°
      'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1200&auto=format&fit=crop', // Macro
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop', // Installed
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop', // Exploded
      'https://images.unsplash.com/photo-1581091870621-e0c2ca54199c?q=80&w=1200&auto=format&fit=crop', // Warehouse
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop', // Technician
      'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1200&auto=format&fit=crop'  // Packaging
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
    hotspots: [
      { id: 'controller', x: 80, y: 30, title: 'Microcontroller PLC Panel', desc: 'Carel microprocessor manages active scroll staging loop parameters.' },
      { id: 'capacitor', x: 25, y: 35, title: 'Phase Correction Capacitors', desc: 'Corrects grid power factors up to >0.96 targets under full load.' },
      { id: 'transformer', x: 65, y: 30, title: 'Mains Isolation Transformer', desc: 'Isolates digital PLC signal inputs from 415V compressor power draws.' },
      { id: 'relay', x: 75, y: 40, title: 'Overload Safety Relays', desc: 'Trips motor circuits if operational currents exceed 30A thresholds.' },
      { id: 'fan', x: 50, y: 15, title: 'Condenser Fan Controller', desc: 'PWM controls scale axial exhaust fans based on head pressure.' },
      { id: 'power', x: 30, y: 55, title: 'Scroll Compressor Power Stage', desc: 'Staged contactors ramp scroll motors without initial current spikes.' }
    ],
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
      { num: '01', title: 'System Overview', label: 'Liquid Chiller', desc: 'Engineered for medical imaging chambers, industrial laser processes, and central climate networks.' },
      { num: '02', title: 'Engineering Architecture', label: 'Thermodynamics', desc: 'Dual refrigeration circuits allow redundancy, ensuring uninterrupted cooling runtime parameters.' },
      { num: '03', title: 'Internal Components', label: 'Mechanical Core', desc: 'Equipped with Copeland scroll compressors and shell-and-tube evaporators.' },
      { num: '04', title: 'Key Benefits', label: 'High COP', desc: 'Achieves a COP of 4.2 under nominal load parameters, reducing energy draw by 30%.' },
      { num: '05', title: 'Specifications Parameters', label: 'Specs Table', desc: 'Parametric properties match industrial automated manufacturing load requirements.' },
      { num: '06', title: 'Applications Scope', label: 'Case Studies', desc: 'Ensures plastic injection molds and chemical reactors remain within safe thermal margins.' },
      { num: '07', title: 'System Protection', label: 'Safety Relays', desc: 'Equipped with phase monitor relays, low flow alarms, and dual pressure safety switches.' },
      { num: '08', title: 'Installation Guide', label: 'Hydronics', desc: 'Designed with dual lifting lugs and quick-clamp hydronic flange configurations.' },
      { num: '09', title: 'Maintenance Protocols', label: 'BMS Alerts', desc: 'Integrated Modbus ports monitor compressor running hours and scale filter service reminders.' },
      { num: '10', title: 'Downloads Desk', label: 'Resources', desc: 'Retrieve PDF user manuals, mechanical drawings, and test reports.' },
      { num: '11', title: 'Warranty Coverage', label: '24 Months', desc: 'Includes full replacement of compressors and core heat exchangers under warranty.' },
      { num: '12', title: 'Procurement Request', label: 'Consultation', desc: 'Speak to our hydronics engineers to size flow rates and pressure configurations.' }
    ],
    applications: [
      {
        name: 'Hospital',
        problem: 'Medical MRI magnet cores generate severe hot zones, risking diagnostic device outages.',
        product: 'CH-W50 Liquid Chiller System',
        benefits: 'Sustains a continuous coolant temperature grid within ±0.2°C tolerances.'
      },
      {
        name: 'Data Center',
        problem: 'High sensible heat load from servers increases power consumption of standard units.',
        product: 'CH-W50 Process Chiller Staging',
        benefits: 'Lowers yearly facility PUE parameters while maximizing sensible heat ratios.'
      },
      {
        name: 'Factory',
        problem: 'Slow setting times on plastic blow molding pipelines restrict daily production.',
        product: 'CH-W50 Cooling Process Loop',
        benefits: 'Speeds up mold setting runs by 24%, boosting batch parameters instantly.'
      },
      {
        name: 'Warehouse',
        problem: 'Cold-chain storage bays losing temperature margins under hot weather peaks.',
        product: 'CH-W50 Chiller Units Array',
        benefits: 'Ensures absolute shelf-life metrics and preserves storage integrity.'
      },
      {
        name: 'Commercial Building',
        problem: 'Core office hubs suffering from volatile loop temperature deficits.',
        product: 'CH-W50 chiller loop couplers',
        benefits: 'Delivers steady hydronic cooling loads, eliminating room temperature fluctuations.'
      },
      {
        name: 'Hotel',
        problem: 'Outdoor rooftop chiller noise levels trigger local council acoustic complaints.',
        product: 'CH-W50 Low Noise Chiller',
        benefits: 'Acoustic dampers drop emissions to 68 dBA, meeting strict quiet parameters.'
      }
    ],
    installationSteps: [
      { step: '1', title: 'Inspection', desc: 'Inspect hydronic connections and copper pipes for damage during transit.' },
      { step: '2', title: 'Installation', desc: 'Level frame skid pads, connect structural water piping, and check electrical phases.' },
      { step: '3', title: 'Testing', desc: 'Pressure test lines at 45 Bar with nitrogen, and configure Modbus address maps.' },
      { step: '4', title: 'Commissioning', desc: 'Start scroll arrays step-by-step, verify flow rates, and sync with plant BMS.' },
      { step: '5', title: 'Support', desc: 'Integrate telemetry ports, configure alarms thresholds, and assign a dedicated local field technician.' }
    ],
    factoryQuality: [
      { name: 'Incoming Inspection', desc: 'Certify compressor copper coils and plate components under standard pressure loops.' },
      { name: 'Assembly', desc: 'Piping welded by ASME Section IX certified technicians in isolated assembly bays.' },
      { name: 'Quality Testing', desc: 'System lines are pressure tested at 45 Bar to ensure absolute loop seals.' },
      { name: 'Packaging', desc: 'Wrapped in vapor-barrier poly layers on heavy timber shipping runner skids.' },
      { name: 'Delivery', desc: 'Dispatched via heavy flatbeds containing dynamic shock deflectors.' }
    ],
    faqs: [
      { q: 'Can this chiller work with ethylene glycol coolant?', a: 'Yes. It supports glycol mixtures up to 40% to run temperatures down to -5°C. Heat transfer scaling tables are listed in the manual.' },
      { q: 'Is the condenser loop air-cooled or water-cooled?', a: 'CH-W50 is an air-cooled process chiller, fitted with high-efficiency axial fans. No cooling tower loop is required.' }
    ],
    supportEngineer: {
      name: 'Rohan Sharma',
      role: 'Lead Hydronics Design Engineer',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
    }
  }
];
