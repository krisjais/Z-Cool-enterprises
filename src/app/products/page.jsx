'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ChevronDown, ArrowUpRight, Download, Cpu,
  Settings, CheckCircle2, ShieldCheck, Thermometer, Zap, Layers,
  ChevronRight, Home, RefreshCw, X, MessageSquare, Phone, FileText, Info
} from 'lucide-react';

const C = {
  bgHero:        '#F1F6FA',
  bgWarmWhite:   '#E6F1F5',
  bgSage:        '#E2ECE9',
  bgNeutralGray: '#EAEDF1',
  bgDarkNavy:    '#0F2B46',
  card:          '#FFFFFF',
  navy:          '#0F2B46',
  blue:          '#1D6FA3',
  teal:          '#0EA6A6',
  gold:          '#F2C14E',
  slate:         '#6E7C93',
  muted:         '#8A9BB4',
  borderLight:   'rgba(15,43,70,0.06)',
  borderStrong:  'rgba(15,43,70,0.12)',
};

// ══════════════════════════════════════════════════════════════════
// DETAILED PRODUCT SEED DATA (FULL CATALOG)
// ══════════════════════════════════════════════════════════════════
const PRODUCTS_CATALOG = [
  {
    id: 'hvac-pcb-100',
    code: 'Z-PCB-H100',
    name: 'Inverter VRF Controller Board',
    tagline: 'VRF/VRV Core Inverter Controller PCB',
    category: 'Electronic Components',
    type: 'PCB Boards',
    accentColor: '#1D6FA3',
    img: '/hvac_pcb_front.png',
    imgAlt: 'Precision PCB inverter controller board',
    voltage: '380V - 415V AC 3-Phase',
    pcbType: 'FR-4 High-TG 6-Layer',
    availability: 'In Stock',
    oemGrade: 'Tier-1 OEM Approved',
    warranty: '36 Months',
    techSupport: '24/7 Remote Support',
    description: 'The master inverter controller board for high-capacity VRF climate systems. Engineered to coordinate active compressor frequency scaling and electronic expansion valve throttling.',
    compatibility: ['Daikin', 'LG', 'Mitsubishi', 'Carrier'],
    applications: ['VRF/VRV Outdoor Units', 'Commercial Multi-Split Central Loops', 'Heavy Duty Heat Pumps'],
    specs: { 'Cooling Capacity': '10-25 kW', 'Compressor Control': 'Active PID', 'Ingress Seal': 'IP54 Conformal' }
  },
  {
    id: 'chiller-w50',
    code: 'CH-W50',
    name: 'Industrial Process Water Chiller',
    tagline: 'Heavy-Duty Process Liquid Chillers',
    category: 'Water Cooling Systems',
    type: 'Chillers',
    accentColor: '#0EA6A6',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
    imgAlt: 'Industrial water chiller compressor pipeline',
    voltage: '415V AC 3-Phase 50Hz',
    pcbType: 'Microprocessor Controller',
    availability: '4 Weeks Delivery',
    oemGrade: 'OEM Grade ISO 9001',
    warranty: '24 Months',
    techSupport: '24/7 Field Engineering',
    description: 'Engineered for process cooling in automated factories, medical imaging centers, and chemical reactors. Features scroll compressor array and shell-and-tube heat exchanger.',
    compatibility: ['Carrier', 'Trane', 'York', 'Daikin'],
    applications: ['Medical Diagnostics (MRI/CT)', 'Plastic Injection Molds', 'Laser Cutting Cooling'],
    specs: { 'Cooling Capacity': '50 kW Nominal', 'Refrigerant': 'R410A Eco', 'Water Flow Rate': '8.6 m³/h' }
  },
  {
    id: 'panel-pex15',
    code: 'PEX-P15',
    name: 'Cabinet Panel Heat Exchanger',
    tagline: 'Sealed Enclosure Heat Protection',
    category: 'Panel Cooling Systems',
    type: 'Cabinet Coolers',
    accentColor: '#1D6FA3',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
    imgAlt: 'Sealed electrical cabinet cooling panel mount',
    voltage: '220V - 240V AC 50/60Hz',
    pcbType: 'Sealed Analog Thermal Card',
    availability: 'In Stock',
    oemGrade: 'Tier-1 Industrial',
    warranty: '36 Months',
    techSupport: '24/7 Help Desk Support',
    description: 'Protects critical PLC, VFD, and automation electronics from thermal failure without allowing ambient dust or chemical vapors inside the enclosure.',
    compatibility: ['Rittal', 'Siemens', 'ABB', 'Schneider'],
    applications: ['Automated Factory VFD Cabinets', 'CNC Control Panels', 'Outdoor Telecom Hub Cabinets'],
    specs: { 'Heat Extraction': '1500 W', 'Ingress Seal': 'IP55 Closed Loop', 'Airflow Rate': '450 m³/h' }
  },
  {
    id: 'ccu-x10',
    code: 'CCU-X10',
    name: 'Precision Close Control Unit',
    tagline: 'Mission-Critical Server Room Climate AC',
    category: 'Precision Air Conditioning',
    type: 'Precision ACs',
    accentColor: '#1D6FA3',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    imgAlt: 'Data server rack infrastructure cooling unit',
    voltage: '380V - 415V AC 3-Phase',
    pcbType: 'Integrated Microprocessor Loop',
    availability: 'In Stock',
    oemGrade: 'Tier-1 Telecom Grade',
    warranty: '24 Months',
    techSupport: '24/7 Field Commissioning Support',
    description: 'Provides precise climate regulation within ±0.5°C tolerances. Configured with inner-grooved copper tube exchangers and EC fan modulations.',
    compatibility: ['Emerson', 'Schneider', 'Daikin', 'ABB'],
    applications: ['Data Centers', 'High-density Server Vaults', 'Calibration Laboratories'],
    specs: { 'Cooling Capacity': '10 kW', 'Airflow Rate': '2200 m³/h', 'Temperature Control': '±0.5°C' }
  },
  {
    id: 'chiller-w100',
    code: 'CH-W100',
    name: 'High-Capacity Liquid Chiller',
    tagline: 'Double Capacity Process Liquid Chiller',
    category: 'Water Cooling Systems',
    type: 'Chillers',
    accentColor: '#0EA6A6',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    imgAlt: 'High capacity water chiller equipment loop',
    voltage: '415V AC 3-Phase 50Hz',
    pcbType: 'Dual Redundant PLC System',
    availability: '6 Weeks Delivery',
    oemGrade: 'OEM Grade ISO 9001',
    warranty: '24 Months',
    techSupport: '24/7 Field Engineering',
    description: 'Double-capacity process chiller featuring a multi-compressor Scroll Array and titanium plates heat exchangers for harsh chemical process loops.',
    compatibility: ['Carrier', 'Daikin Applied', 'Siemens', 'Trane'],
    applications: ['Chemical Processing Plants', 'Central Building HVAC loops', 'Industrial Plant Cooling'],
    specs: { 'Cooling Capacity': '100 kW Nominal', 'Refrigerant': 'R410A Eco', 'Water Flow Rate': '17.2 m³/h' }
  },
  {
    id: 'panel-pex30',
    code: 'PEX-P30',
    name: 'Cabinet Heat Exchanger 3000W',
    tagline: 'Double-Capacity Panel Cooling Core',
    category: 'Panel Cooling Systems',
    type: 'Cabinet Coolers',
    accentColor: '#1D6FA3',
    img: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=600&auto=format&fit=crop',
    imgAlt: 'Double capacity panel cooling core macro view',
    voltage: '220V - 240V AC 50/60Hz',
    pcbType: 'Modbus Integrated Control Board',
    availability: 'In Stock',
    oemGrade: 'Tier-1 Industrial',
    warranty: '36 Months',
    techSupport: '24/7 Help Desk Support',
    description: 'Heavy duty cabinet cooler delivering 3000W of heat extraction. Maintains sealed NEMA 4X parameters for control equipment in harsh steel or cement mill environments.',
    compatibility: ['Rittal', 'Siemens', 'ABB', 'Schneider'],
    applications: ['Heavy Industry CNC Cabinets', 'High-capacity VFD enclosures', 'Power Station Switchgear'],
    specs: { 'Heat Extraction': '3000 W', 'Ingress Seal': 'IP55 Closed Loop', 'Airflow Rate': '850 m³/h' }
  }
];

export default function ProductListingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Comparison State
  const [comparedIds, setComparedIds] = useState([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  // Quick View State
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Product Finder wizard states
  const [finderStep, setFinderStep] = useState(1);
  const [finderBrand, setFinderBrand] = useState('');
  const [finderType, setFinderType] = useState('');
  const [finderModel, setFinderModel] = useState('');
  const [finderResult, setFinderResult] = useState(null);

  // Dynamic filter arrays
  const categories = ['All', 'Electronic Components', 'Water Cooling Systems', 'Panel Cooling Systems', 'Precision Air Conditioning'];
  const brands = ['All', 'Daikin', 'LG', 'Carrier', 'Mitsubishi', 'Rittal', 'Siemens', 'ABB', 'Schneider'];
  const types = ['All', 'PCB Boards', 'Chillers', 'Cabinet Coolers', 'Precision ACs'];

  // ── FILTER & SORT LOGIC ──
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_CATALOG];

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedBrand !== 'All') {
      result = result.filter(p => p.compatibility.includes(selectedBrand));
    }

    if (selectedType !== 'All') {
      result = result.filter(p => p.type === selectedType);
    }

    // Sorting
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'code') {
      result.sort((a, b) => a.code.localeCompare(b.code));
    }

    return result;
  }, [searchTerm, selectedCategory, selectedBrand, selectedType, sortBy]);

  // Paginated output
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Reset page on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedBrand, selectedType, sortBy]);

  // ── COMPARISON LOGIC ──
  const toggleCompare = (id) => {
    if (comparedIds.includes(id)) {
      setComparedIds(comparedIds.filter(x => x !== id));
    } else {
      if (comparedIds.length >= 2) {
        alert('You can compare a maximum of 2 products side-by-side.');
        return;
      }
      setComparedIds([...comparedIds, id]);
    }
  };

  const comparedProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter(p => comparedIds.includes(p.id));
  }, [comparedIds]);

  // ── PRODUCT FINDER RESOLVE ──
  const handleFinderSubmit = () => {
    const matched = PRODUCTS_CATALOG.find(p =>
      p.compatibility.includes(finderBrand) &&
      p.type === finderType
    );
    setFinderResult(matched || PRODUCTS_CATALOG[0]);
    setFinderStep(4);
  };

  const resetFinder = () => {
    setFinderStep(1);
    setFinderBrand('');
    setFinderType('');
    setFinderModel('');
    setFinderResult(null);
  };

  return (
    <div className="w-full overflow-x-hidden min-h-screen" style={{ background: C.bgHero }}>
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-8 pb-4 flex items-center gap-2 font-mono text-[10px] text-slate-400 tracking-wider">
        <Link href="/" className="hover:text-[#1D6FA3] flex items-center gap-1">
          <Home size={10} /> HOME
        </Link>
        <ChevronRight size={10} />
        <span className="text-[#0F2B46] font-bold">PRODUCTS CATALOG</span>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-16 text-left">
        <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">Z-COOL INDUSTRIAL INVENTORY</span>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
          Engineering Solutions
        </h1>
        <p className="text-slate-600 max-w-xl text-[15px] leading-relaxed">
          Explore our certified range of HVAC controller PCBs, heavy-duty industrial water chillers, and closed-loop cabinet heat exchangers designed for critical telecom and automated factory parameters.
        </p>
      </section>

      {/* ── STICKY SIDEBAR & PRODUCT LISTING SECTION ── */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pb-32">
        <div className="grid grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Sticky Filter Sidebar (Desktop) */}
          <div className="col-span-12 lg:col-span-3 h-fit lg:sticky lg:top-[130px] relative top-auto bg-white border border-[#0F2B46]/5 rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 pb-3 border-b" style={{ color: C.navy, borderColor: C.borderLight }}>
              Filter Inventory
            </h3>

            {/* Category Select */}
            <div className="mb-6">
              <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2.5">Category</label>
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="text-left text-xs py-1.5 px-3 rounded-lg transition-colors border"
                    style={{
                      borderColor: selectedCategory === cat ? C.blue : 'transparent',
                      background: selectedCategory === cat ? `${C.blue}08` : 'transparent',
                      color: selectedCategory === cat ? C.blue : C.slate,
                      fontWeight: selectedCategory === cat ? 'bold' : 'normal'
                    }}
                  >
                    {cat === 'All' ? 'All Categories' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Compatibility Select */}
            <div className="mb-6">
              <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2.5">Brand Support</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full text-xs p-2.5 border rounded-xl bg-slate-50 text-slate-700 outline-none"
                style={{ borderColor: C.borderStrong }}
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand === 'All' ? 'All OEM Brands' : brand}</option>
                ))}
              </select>
            </div>

            {/* Product Type Select */}
            <div className="mb-6">
              <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2.5">Product Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full text-xs p-2.5 border rounded-xl bg-slate-50 text-slate-700 outline-none"
                style={{ borderColor: C.borderStrong }}
              >
                {types.map(t => (
                  <option key={t} value={t}>{t === 'All' ? 'All Component Types' : t}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => { setSelectedCategory('All'); setSelectedBrand('All'); setSelectedType('All'); setSearchTerm(''); }}
              className="w-full text-center text-[10px] font-mono tracking-widest uppercase py-3 border border-dashed rounded-xl text-slate-400 hover:text-red-500 hover:border-red-400 transition-colors"
            >
              Reset Filters
            </button>
          </div>

          {/* RIGHT COLUMN: Product Grid + Search/Sort toolbar */}
          <div className="col-span-12 lg:col-span-9">
            
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white border border-[#0F2B46]/5 rounded-2xl p-4 shadow-sm mb-8">
              <div className="relative w-full md:w-80 flex items-center">
                <Search size={14} className="absolute left-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search code, model, spec..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-xl text-xs bg-slate-50 text-slate-700 placeholder-slate-400 outline-none"
                  style={{ borderColor: C.borderStrong }}
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">Sort By</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs p-2 border rounded-xl bg-slate-50 text-slate-700 outline-none"
                  style={{ borderColor: C.borderStrong }}
                >
                  <option value="name-asc">Alphabetical A-Z</option>
                  <option value="name-desc">Alphabetical Z-A</option>
                  <option value="code">Model Code Reference</option>
                </select>
              </div>
            </div>

            {/* Product Card Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {paginatedProducts.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white rounded-3xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
                    style={{ borderColor: C.borderLight }}
                  >
                    <div>
                      {/* Product Image Frame (Contained Apple style) */}
                      <div className="p-6 bg-slate-50/80 flex items-center justify-center relative aspect-[4/3] border-b" style={{ borderColor: C.borderLight }}>
                        <img
                          src={p.img}
                          alt={p.imgAlt}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          style={{ filter: 'brightness(1.02) saturate(0.8)' }}
                        />
                        <div className="absolute top-4 left-4 font-mono text-[9px] bg-white border border-slate-200 text-[#0F2B46] px-2.5 py-1 rounded-full font-bold">
                          {p.code}
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-8">
                        <span className="font-mono text-[9px] text-[#1D6FA3] tracking-widest uppercase font-bold block mb-1">
                          {p.category}
                        </span>
                        <h3 className="text-xl font-bold text-[#0F2B46] mb-2 leading-snug group-hover:text-[#1D6FA3] transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-mono mb-4">{p.tagline}</p>
                        <p className="text-xs text-slate-600 leading-relaxed mb-6 font-light">{p.description}</p>

                        {/* Details specs */}
                        <div className="grid grid-cols-2 gap-3.5 mb-6 pb-6 border-b" style={{ borderColor: C.borderLight }}>
                          <div>
                            <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400">Voltage</div>
                            <div className="text-[11px] font-bold text-[#0F2B46] truncate">{p.voltage}</div>
                          </div>
                          <div>
                            <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400">Availability</div>
                            <div className="text-[11px] font-bold text-emerald-600 truncate">{p.availability}</div>
                          </div>
                        </div>

                        {/* Compatible brands */}
                        <div>
                          <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2">Compatible Brands</div>
                          <div className="flex flex-wrap gap-1.5">
                            {p.compatibility.map(b => (
                              <span key={b} className="text-[9px] font-mono border px-2 py-0.5 rounded bg-slate-50 text-slate-600" style={{ borderColor: C.borderStrong }}>{b}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="p-8 pt-0 flex flex-col gap-3">
                      <div className="flex gap-3">
                        <Link
                          href={`/products/${p.id}`}
                          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 bg-[#1D6FA3] hover:bg-[#0F2B46] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                        >
                          Details <ArrowUpRight size={13} />
                        </Link>
                        <button
                          onClick={() => setQuickViewProduct(p)}
                          className="flex-1 flex items-center justify-center py-3.5 border rounded-xl text-xs uppercase tracking-wider font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                          style={{ borderColor: C.borderStrong }}
                        >
                          Quick View
                        </button>
                      </div>

                      {/* Compare toggle */}
                      <button
                        onClick={() => toggleCompare(p.id)}
                        className="w-full text-center py-2 border border-dashed rounded-xl text-[10px] font-mono uppercase tracking-widest transition-colors"
                        style={{
                          borderColor: comparedIds.includes(p.id) ? C.teal : C.borderStrong,
                          color: comparedIds.includes(p.id) ? C.teal : C.slate,
                          background: comparedIds.includes(p.id) ? `${C.teal}0c` : 'transparent'
                        }}
                      >
                        {comparedIds.includes(p.id) ? '✓ Added to Compare' : '+ Compare Model'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredProducts.length === 0 && (
                <div className="col-span-2 text-center py-20 bg-white border rounded-3xl" style={{ borderColor: C.borderLight }}>
                  <div className="text-slate-400 mb-2">No matching products found</div>
                  <button onClick={() => { setSelectedCategory('All'); setSelectedBrand('All'); setSelectedType('All'); setSearchTerm(''); }} className="text-xs text-[#1D6FA3] underline font-bold uppercase tracking-wider">Reset filters</button>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2.5 mt-12">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className="w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-mono transition-colors"
                    style={{
                      background: currentPage === i + 1 ? C.blue : 'transparent',
                      color: currentPage === i + 1 ? '#fff' : C.navy,
                      borderColor: currentPage === i + 1 ? C.blue : C.borderStrong
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── INTERACTIVE PRODUCT FINDER WIZARD ── */}
      <section className="py-28 relative text-white" style={{ background: C.bgDarkNavy }}>
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '70px 70px'
        }} />

        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <span className="font-mono text-xs text-[#0EA6A6] tracking-widest uppercase font-bold">DIGITAL CONFIGURATOR</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Interactive Product Finder
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-14">
            Select your brand support and hardware specifications, and our algorithm will suggest the compatible Z-Cool module code instantly.
          </p>

          <div className="bg-[#122438] border border-white/10 rounded-[32px] p-10 text-left shadow-2xl">
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/5">
              <span className="font-mono text-xs text-white/50">STEP 0{finderStep} // 04</span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map(s => (
                  <div
                    key={s}
                    className="w-8 h-1 rounded transition-colors duration-300"
                    style={{ background: finderStep >= s ? C.teal : 'rgba(255,255,255,0.1)' }}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {finderStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-lg font-bold">Select OEM Compressor Brand</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Daikin', 'LG', 'Carrier', 'Mitsubishi', 'Rittal', 'Siemens', 'ABB', 'Schneider'].map(b => (
                      <button
                        key={b}
                        onClick={() => { setFinderBrand(b); setFinderStep(2); }}
                        className="py-3 px-4 rounded-xl border text-center transition-all text-xs font-mono tracking-wider uppercase hover:border-[#0EA6A6]"
                        style={{
                          background: finderBrand === b ? '#0EA6A6' : 'rgba(255,255,255,0.03)',
                          borderColor: finderBrand === b ? '#0EA6A6' : 'rgba(255,255,255,0.1)'
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {finderStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-lg font-bold">Select Target Component Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { type: 'PCB Boards', label: 'Inverter Logic / Controller PCBs' },
                      { type: 'Chillers', label: 'Liquid Evaporator / Water Chillers' },
                      { type: 'Cabinet Coolers', label: 'Sealed Enclosure Heat Exchangers' },
                      { type: 'Precision ACs', label: 'Server Vault Climate Air Handlers' }
                    ].map(item => (
                      <button
                        key={item.type}
                        onClick={() => { setFinderType(item.type); setFinderStep(3); }}
                        className="py-4 px-6 rounded-2xl border text-left transition-all hover:border-[#0EA6A6]"
                        style={{
                          background: finderType === item.type ? '#0EA6A6' : 'rgba(255,255,255,0.03)',
                          borderColor: finderType === item.type ? '#0EA6A6' : 'rgba(255,255,255,0.1)'
                        }}
                      >
                        <div className="font-bold text-xs font-mono uppercase tracking-wider text-white">{item.type}</div>
                        <div className="text-[10px] text-white/50 mt-1">{item.label}</div>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setFinderStep(1)} className="text-xs text-white/40 mt-4 hover:text-white underline">Back to Brand Selection</button>
                </motion.div>
              )}

              {finderStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-lg font-bold">Select Hardware Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['Light Commercial (220V)', 'Heavy Industrial (415V)', 'High Capacity Redundant'].map(m => (
                      <button
                        key={m}
                        onClick={() => { setFinderModel(m); handleFinderSubmit(); }}
                        className="py-4 px-4 rounded-xl border text-center transition-all text-xs font-mono tracking-wider uppercase hover:border-[#0EA6A6]"
                        style={{
                          background: finderModel === m ? '#0EA6A6' : 'rgba(255,255,255,0.03)',
                          borderColor: finderModel === m ? '#0EA6A6' : 'rgba(255,255,255,0.1)'
                        }}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setFinderStep(2)} className="text-xs text-white/40 mt-4 hover:text-white underline">Back to Component Type</button>
                </motion.div>
              )}

              {finderStep === 4 && finderResult && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-6 text-center md:text-left md:flex-row items-center gap-8"
                >
                  <div className="w-40 h-40 p-4 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                    <img src={finderResult.img} alt={finderResult.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[9px] text-[#0EA6A6] tracking-widest uppercase font-bold block mb-1">
                      RECOMMENDED SOLUTION
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{finderResult.name}</h3>
                    <p className="font-mono text-xs text-white/60 mb-3">CODE: {finderResult.code}</p>
                    <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">{finderResult.description}</p>
                    <div className="flex flex-wrap gap-3.5 justify-center md:justify-start">
                      <Link
                        href={`/products/${finderResult.id}`}
                        className="flex items-center gap-1 px-5 py-3 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-600"
                      >
                        View Details <ArrowUpRight size={13} />
                      </Link>
                      <button
                        onClick={resetFinder}
                        className="flex items-center gap-1 px-5 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white/5"
                      >
                        <RefreshCw size={12} /> Configure Again
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── RESOURCE DOWNLOAD CENTER ── */}
      <section className="py-28" style={{ background: C.bgSage, borderTop: `1px solid ${C.borderLight}` }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="mb-14">
            <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">RESOURCE ACCESS</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
              Download Center
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: 'Product Datasheets', size: 'PDF // 4.8 MB', desc: 'Detailed dimensional drawings, connection diagrams, and thermodynamic parameters.' },
              { type: 'Installation Manuals', size: 'PDF // 8.2 MB', desc: 'Wiring guides, bracket mounting instructions, and Modbus address registers.' },
              { type: 'Technical Certificates', size: 'PDF // 2.1 MB', desc: 'CE directives compliance records, NEMA type approvals, and ISO certificates.' },
            ].map((file) => (
              <div key={file.type} className="bg-white rounded-2xl border p-6 flex flex-col justify-between" style={{ borderColor: C.borderLight }}>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                    <FileText size={18} className="text-[#1D6FA3]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0F2B46] mb-1">{file.type}</h4>
                  <div className="text-[10px] font-mono text-[#0EA6A6] font-bold mb-3">{file.size}</div>
                  <p className="text-[12px] text-slate-500 leading-relaxed mb-6 font-light">{file.desc}</p>
                </div>
                <button
                  className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-[#1D6FA3] font-bold hover:underline"
                >
                  <Download size={12} /> Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY FLOATING COMPARISON DRAWER ── */}
      {comparedIds.length > 0 && (
        <div
          className="fixed bottom-0 left-0 w-full z-[9990] bg-[#0F2B46] text-white p-6 border-t border-white/10 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs uppercase text-cyan-400 tracking-wider font-bold">Compare Models:</span>
            <div className="flex gap-4">
              {comparedProducts.map(p => (
                <div key={p.id} className="flex items-center gap-2 bg-[#122438] px-3.5 py-1.5 rounded-lg border border-white/5">
                  <span className="text-xs font-bold">{p.code}</span>
                  <button onClick={() => toggleCompare(p.id)} className="text-slate-400 hover:text-white"><X size={12} /></button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (comparedIds.length < 2) {
                  alert('Please select exactly 2 products to compare.');
                  return;
                }
                setShowComparisonModal(true);
              }}
              className="px-6 py-2.5 bg-[#0EA6A6] text-xs uppercase font-bold tracking-widest text-white rounded-lg"
            >
              Compare Now
            </button>
            <button onClick={() => setComparedIds([])} className="text-xs text-white/50 hover:text-white font-bold font-mono uppercase tracking-widest">Clear</button>
          </div>
        </div>
      )}

      {/* ── SIDE-BY-SIDE COMPARISON MODAL ── */}
      {showComparisonModal && comparedProducts.length === 2 && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-8 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[32px] p-10 max-w-4xl w-full max-h-[85vh] overflow-y-auto relative text-slate-800 shadow-2xl">
            <button onClick={() => setShowComparisonModal(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50"><X size={20} className="text-slate-400" /></button>
            <h3 className="text-xl font-bold text-[#0F2B46] mb-8 pb-3 border-b">Side-by-Side System Comparison</h3>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest flex flex-col gap-8 justify-end pb-4">
                <div>Model Reference</div>
                <div>Category</div>
                <div>Voltage Standard</div>
                <div>Operating Specs</div>
                <div>Warranty</div>
                <div>Support Access</div>
              </div>

              {comparedProducts.map(p => (
                <div key={p.id} className="flex flex-col gap-8 bg-slate-50/50 p-6 rounded-2xl border" style={{ borderColor: C.borderLight }}>
                  <div>
                    <h4 className="font-bold text-[#0F2B46] text-base leading-snug">{p.name}</h4>
                    <span className="font-mono text-xs text-[#1D6FA3] font-bold mt-1 block">{p.code}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-700">{p.category}</div>
                  <div className="text-xs font-bold text-slate-700">{p.voltage}</div>
                  <div className="text-xs flex flex-col gap-1 text-slate-700">
                    {Object.entries(p.specs).map(([k, v]) => (
                      <div key={k} className="font-light"><span className="font-bold">{k}:</span> {v}</div>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-slate-700">{p.warranty}</div>
                  <div className="text-xs font-bold text-[#0EA6A6]">{p.techSupport}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── QUICK VIEW DETAIL DIALOG MODAL ── */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-8 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[32px] p-10 max-w-2xl w-full relative text-slate-800 shadow-2xl flex flex-col md:flex-row gap-8">
            <button onClick={() => setQuickViewProduct(null)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50"><X size={20} className="text-slate-400" /></button>
            
            <div className="w-full md:w-1/2 aspect-square p-6 bg-slate-50 rounded-2xl flex items-center justify-center border" style={{ borderColor: C.borderLight }}>
              <img src={quickViewProduct.img} alt={quickViewProduct.name} className="w-full h-full object-contain" />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] text-[#1D6FA3] tracking-widest uppercase font-bold block mb-1">QUICK VIEW SPEC</span>
                <h3 className="text-lg font-bold text-[#0F2B46] mb-1 leading-snug">{quickViewProduct.name}</h3>
                <span className="font-mono text-xs text-slate-400 font-bold block mb-4">{quickViewProduct.code}</span>
                <p className="text-xs text-slate-500 leading-relaxed font-light mb-6">{quickViewProduct.description}</p>
                
                <div className="grid grid-cols-2 gap-3.5 mb-6 text-xs">
                  <div>
                    <span className="font-mono text-[8px] text-slate-400 block uppercase">Voltage</span>
                    <span className="font-bold text-slate-700">{quickViewProduct.voltage}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] text-slate-400 block uppercase">Warranty</span>
                    <span className="font-bold text-slate-700">{quickViewProduct.warranty}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/products/${quickViewProduct.id}`}
                  className="flex-1 text-center py-3 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-xl"
                  onClick={() => setQuickViewProduct(null)}
                >
                  View Details Page
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center py-3 border text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl"
                  style={{ borderColor: C.borderStrong }}
                  onClick={() => setQuickViewProduct(null)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
