'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ChevronDown, ArrowUpRight, Download, Cpu,
  Settings, CheckCircle2, ShieldCheck, Thermometer, Zap, Layers,
  ChevronRight, Home, RefreshCw, X, MessageSquare, Phone, FileText, Info, HelpCircle
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';
import { gsap } from '@/lib/gsap';

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
  gold:          '#B8955A',
  slate:         '#6E7C93',
  borderLight:   'rgba(15,43,70,0.06)',
  borderStrong:  'rgba(15,43,70,0.12)',
};

const INDUSTRY_SOLUTIONS = [
  {
    id: 'hospitals',
    title: 'Hospitals',
    icon: '🏥',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?q=80&w=600&auto=format&fit=crop',
    description: 'Designed for operating theatres, laboratories, diagnostic rooms and critical healthcare infrastructure requiring precise environmental control.',
    products: ['Precision Air Conditioning', 'Close Control Units', 'Cabinet Heat Exchangers']
  },
  {
    id: 'data-centers',
    title: 'Data Centers',
    icon: '🖥',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    description: 'Maintain server uptime through stable temperature control and intelligent thermal management.',
    products: ['Precision Cooling Systems', 'High Capacity Chillers', 'VRF Controllers']
  },
  {
    id: 'factories',
    title: 'Factories',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    description: 'Reliable thermal management for manufacturing plants, production lines and industrial automation systems.',
    products: ['Industrial Water Chillers', 'Cabinet Panel Coolers', 'Heavy Duty Cooling Units']
  },
  {
    id: 'hotels',
    title: 'Hotels',
    icon: '🏨',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
    description: 'Comfort-focused HVAC electronics designed for hospitality environments with reduced operating costs.',
    products: ['VRF Controllers', 'Energy Efficient Cooling', 'Smart HVAC Controls']
  },
  {
    id: 'commercial-buildings',
    title: 'Commercial Buildings',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    description: 'Efficient cooling infrastructure for offices, malls, commercial complexes and mixed-use developments.',
    products: ['Building Automation Controllers', 'VRF Systems', 'Precision Cooling']
  },
  {
    id: 'electrical-control-rooms',
    title: 'Electrical Control Rooms',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
    description: 'Protect electrical equipment from overheating and extend system reliability.',
    products: ['Cabinet Heat Exchangers', 'Panel Cooling Systems', 'Industrial PCB Controllers']
  }
];

export default function ProductListingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedApplication, setSelectedApplication] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Comparison State
  const [comparedIds, setComparedIds] = useState([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  // Product Finder wizard states
  const [showFinder, setShowFinder] = useState(false);
  const [finderStep, setFinderStep] = useState(1);
  const [finderIndustry, setFinderIndustry] = useState('');
  const [finderBrand, setFinderBrand] = useState('');
  const [finderType, setFinderType] = useState('');
  const [finderResult, setFinderResult] = useState(null);

  // Dynamic filter arrays
  const categories = ['All', 'Electronic Components', 'Water Cooling Systems', 'Panel Cooling Systems', 'Precision Air Conditioning'];
  const brands = ['All', 'Daikin', 'LG', 'Carrier', 'Mitsubishi', 'Rittal', 'Siemens', 'ABB', 'Schneider'];
  const applications = ['All', 'Hospitals', 'Data Centers', 'Factories', 'Commercial Buildings', 'Hotels', 'Electrical Control Rooms'];

  // Ref for animations
  const finderRef = useRef(null);
  const industryGridRef = useRef(null);

  // Stagger reveal of industry solution cards with GSAP
  useEffect(() => {
    const grid = industryGridRef.current;
    if (!grid) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(grid.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%'
          }
        }
      );
    }, grid);

    return () => ctx.revert();
  }, []);

  // ── FILTER & SORT LOGIC ──
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_CATALOG];

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedBrand !== 'All') {
      result = result.filter(p => p.compatibility.includes(selectedBrand));
    }

    if (selectedApplication !== 'All') {
      const app = selectedApplication.toLowerCase();
      result = result.filter(p => {
        const matchesCategory = (app === 'hospitals' && (p.category === 'Precision Air Conditioning' || p.type === 'PCB Boards')) ||
                                (app === 'data centers' && (p.type === 'Precision ACs' || p.category === 'Water Cooling Systems')) ||
                                (app === 'factories' && (p.category === 'Water Cooling Systems' || p.category === 'Panel Cooling Systems')) ||
                                (app === 'hotels' && (p.type === 'PCB Boards' || p.category === 'Electronic Components')) ||
                                (app === 'commercial buildings' && (p.type === 'Precision ACs' || p.category === 'Electronic Components')) ||
                                (app === 'electrical control rooms' && (p.category === 'Panel Cooling Systems' || p.type === 'PCB Boards'));

        const matchesAppText = p.applications.some(a => {
          const name = a.name.toLowerCase();
          const challenge = a.challenge.toLowerCase();
          const solution = a.solution.toLowerCase();
          
          if (app === 'hospitals') return name.includes('hospital') || name.includes('medical') || name.includes('laboratory') || challenge.includes('surgery') || challenge.includes('calibration');
          if (app === 'data centers') return name.includes('data center') || name.includes('server') || name.includes('vault') || challenge.includes('rack');
          if (app === 'factories') return name.includes('factory') || name.includes('plant') || name.includes('milling') || name.includes('cement') || name.includes('steel') || challenge.includes('milling') || challenge.includes('drive');
          if (app === 'hotels') return name.includes('hotel') || name.includes('hospitality');
          if (app === 'commercial buildings') return name.includes('building') || name.includes('office') || name.includes('mall');
          if (app === 'electrical control rooms') return name.includes('cabinet') || name.includes('panel') || name.includes('control') || challenge.includes('short') || challenge.includes('overheating');
          return false;
        });

        return matchesCategory || matchesAppText;
      });
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
  }, [searchTerm, selectedCategory, selectedBrand, selectedApplication, sortBy]);

  // Paginated output
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Reset page on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedBrand, selectedApplication, sortBy]);

  // ── COMPARISON LOGIC ──
  const toggleCompare = (id) => {
    if (comparedIds.includes(id)) {
      setComparedIds(comparedIds.filter(x => x !== id));
    } else {
      if (comparedIds.length >= 3) {
        alert('You can compare a maximum of 3 products side-by-side.');
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
    const matched = PRODUCTS_CATALOG.find(p => {
      const typeMatches = finderType === 'All' || p.type.toLowerCase().includes(finderType.toLowerCase());
      const brandMatches = finderBrand === 'All' || p.compatibility.includes(finderBrand);
      return typeMatches && brandMatches;
    });

    setFinderResult(matched || PRODUCTS_CATALOG[0]);
    setFinderStep(4);
  };

  const resetFinder = () => {
    setFinderStep(1);
    setFinderIndustry('');
    setFinderBrand('');
    setFinderType('');
    setFinderResult(null);
  };

  // Industry click scroll-to-view filter helper
  const handleIndustrySelect = (indTitle) => {
    // Normalise name to match applications state
    let target = 'All';
    if (indTitle === 'Hospitals') target = 'Hospitals';
    if (indTitle === 'Data Centers') target = 'Data Centers';
    if (indTitle === 'Factories') target = 'Factories';
    if (indTitle === 'Hotels') target = 'Hotels';
    if (indTitle === 'Commercial Buildings') target = 'Commercial Buildings';
    if (indTitle === 'Electrical Control Rooms') target = 'Electrical Control Rooms';

    setSelectedApplication(target);

    const targetSection = document.getElementById('catalog-grid-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full overflow-x-hidden min-h-screen relative" style={{ background: C.bgHero }}>
      
      {/* Subtle Engineering grid lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] engineering-grid" />
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-8 pb-4 flex items-center gap-2 font-mono text-[10px] text-slate-400 tracking-wider">
        <Link href="/" className="hover:text-[#1D6FA3] flex items-center gap-1">
          <Home size={10} /> HOME
        </Link>
        <ChevronRight size={10} />
        <span className="text-[#0F2B46] font-bold">PRODUCTS ECOSYSTEM</span>
      </div>

      {/* ── PREMIUM EDITORIAL HERO ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-12 pb-16 relative">
        <div className="vertical-guide left-[8%] hidden lg:block" />
        <div className="vertical-guide right-[8%] hidden lg:block" />
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b pb-12" style={{ borderColor: C.borderStrong }}>
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] text-[#1D6FA3] tracking-[0.3em] uppercase font-bold block mb-4">
              Z-COOL INDUSTRIAL PORTFOLIO
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0F2B46] mb-6 leading-[1.1]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Engineered Climate Solutions
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Explore our range of certified VRF logic controllers, heavy-duty industrial process chillers, closed-loop cabinet heat exchangers, and precision server-room units configured for high-density, mission-critical parameters.
            </p>
          </div>

          {/* Quick HUD Metrics */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-fit min-w-[280px]">
            <div className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm" style={{ borderColor: C.borderLight }}>
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">Deployed Systems</span>
              <span className="text-xl font-bold text-[#0F2B46] mt-2">1,240+ Active</span>
            </div>
            <div className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm" style={{ borderColor: C.borderLight }}>
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">BMS Connectivity</span>
              <span className="text-xl font-bold text-[#0EA6A6] mt-2">Modbus/BACnet</span>
            </div>
            <div className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm" style={{ borderColor: C.borderLight }}>
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">QA Verification</span>
              <span className="text-xl font-bold text-[#B8955A] mt-2">100% Tested</span>
            </div>
            <div className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm" style={{ borderColor: C.borderLight }}>
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">Design Standards</span>
              <span className="text-xl font-bold text-[#1D6FA3] mt-2">ASME & CE</span>
            </div>
          </div>
        </div>

        {/* Product Finder Accordion / Wizard Trigger */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowFinder(!showFinder)}
            className="flex items-center gap-2.5 px-6 py-3.5 bg-[#0F2B46] hover:bg-[#1D6FA3] text-white text-[11px] font-mono tracking-widest uppercase rounded-full shadow-md transition-all duration-300"
          >
            <Cpu size={14} className={showFinder ? 'animate-spin' : ''} />
            {showFinder ? 'Close Assistant' : 'Launch System Finder Wizard'}
          </button>
        </div>

        {/* ── STUNNING INTERACTIVE PRODUCT FINDER WIZARD ── */}
        <AnimatePresence>
          {showFinder && (
            <motion.div
              ref={finderRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-6"
            >
              <div className="bg-white border border-[#0F2B46]/10 rounded-3xl p-6 md:p-10 shadow-lg relative">
                <button
                  onClick={() => setShowFinder(false)}
                  className="absolute right-5 top-5 text-slate-400 hover:text-red-500 transition-colors p-1"
                >
                  <X size={18} />
                </button>

                <div className="max-w-2xl mx-auto text-center mb-8">
                  <span className="text-[9px] font-mono text-[#0EA6A6] tracking-widest uppercase font-bold">INTELLIGENT SELECTION ENGINE</span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0F2B46] mt-2">Engineering Product Finder</h3>
                  <p className="text-xs text-slate-500 mt-2 font-mono">STEP {finderStep} OF 4</p>
                </div>

                {/* Step 1: Industry */}
                {finderStep === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <p className="text-sm font-bold text-center text-slate-700">Select your target operating industry:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Hospitals', 'Data Centers', 'Factories', 'Commercial Buildings', 'Electrical Control Rooms', 'Hotels'].map(ind => (
                        <button
                          key={ind}
                          onClick={() => { setFinderIndustry(ind); setFinderStep(2); }}
                          className="py-4 border rounded-2xl hover:border-[#1D6FA3] hover:bg-[#1D6FA3]/5 text-xs text-slate-700 transition-all font-semibold"
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Compatible Brand */}
                {finderStep === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <p className="text-sm font-bold text-center text-slate-700">Select compatible OEM equipment brand:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Daikin', 'LG', 'Siemens', 'ABB', 'Carrier', 'Rittal', 'Schneider', 'All'].map(br => (
                        <button
                          key={br}
                          onClick={() => { setFinderBrand(br); setFinderStep(3); }}
                          className="py-4 border rounded-2xl hover:border-[#1D6FA3] hover:bg-[#1D6FA3]/5 text-xs text-slate-700 transition-all font-semibold"
                        >
                          {br}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setFinderStep(1)} className="text-[10px] font-mono text-slate-400 hover:text-slate-600 block text-center mt-2 uppercase">← Back to Step 1</button>
                  </motion.div>
                )}

                {/* Step 3: Product Type */}
                {finderStep === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <p className="text-sm font-bold text-center text-slate-700">Select target system category component:</p>
                    <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto w-full">
                      {['PCB Boards', 'Chillers', 'Cabinet Coolers', 'Precision ACs', 'All'].map(t => (
                        <button
                          key={t}
                          onClick={() => { setFinderType(t); }}
                          className={`py-4 border rounded-2xl text-xs transition-all font-semibold ${
                            finderType === t ? 'border-[#1D6FA3] bg-[#1D6FA3]/5 text-[#1D6FA3]' : 'hover:border-[#1D6FA3] hover:bg-[#1D6FA3]/5 text-slate-700'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 justify-center mt-4">
                      <button onClick={() => setFinderStep(2)} className="text-[10px] font-mono text-slate-400 hover:text-slate-600 uppercase">← Back</button>
                      <button
                        onClick={handleFinderSubmit}
                        disabled={!finderType}
                        className="px-6 py-2.5 bg-[#1D6FA3] text-white text-[10px] font-mono tracking-widest uppercase rounded-lg disabled:opacity-50"
                      >
                        Resolve Code →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Result */}
                {finderStep === 4 && finderResult && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-[#F1F6FA]/50 p-6 rounded-2xl border" style={{ borderColor: C.borderLight }}>
                    <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-white p-3 rounded-2xl border">
                      <img src={finderResult.images[0]} alt={finderResult.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex-grow text-left">
                      <span className="font-mono text-[9px] text-[#1D6FA3] uppercase font-bold tracking-wider">RESOLVED SYSTEM MATCH</span>
                      <h4 className="text-base font-bold text-[#0F2B46] mt-1">{finderResult.name}</h4>
                      <p className="font-mono text-[10px] text-slate-400 mt-0.5">CODE: {finderResult.code}</p>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{finderResult.description}</p>
                      
                      <div className="flex gap-3 mt-4">
                        <Link
                          href={`/products/${finderResult.id}`}
                          className="px-4 py-2 bg-[#1D6FA3] text-white font-mono text-[9px] uppercase tracking-wider rounded hover:bg-blue-600 transition-colors"
                        >
                          Engineering Profile
                        </Link>
                        <button
                          onClick={resetFinder}
                          className="px-4 py-2 border font-mono text-[9px] uppercase tracking-wider rounded hover:bg-white text-slate-500"
                        >
                          Find Another
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── STICKY SIDEBAR & PRODUCT LISTING SECTION ── */}
      <section id="catalog-grid-section" className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pb-32 scroll-mt-24">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          
          {/* LEFT COLUMN: Sticky Filter Sidebar (Desktop) */}
          <div className="col-span-12 lg:col-span-3 h-fit lg:sticky lg:top-[110px] relative top-auto bg-white border border-[#0F2B46]/5 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 pb-3 border-b flex justify-between items-center" style={{ color: C.navy, borderColor: C.borderLight }}>
              <span>Filter Inventory</span>
              <Settings size={14} className="text-slate-400" />
            </h3>

            {/* Category Select */}
            <div className="mb-6">
              <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-3 font-bold">Category</label>
              <div className="flex flex-col gap-1.5">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="text-left text-xs py-2 px-3 rounded-xl transition-colors border"
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
              <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">OEM Compatibility</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full text-xs p-3 border rounded-xl bg-slate-50 text-slate-700 outline-none"
                style={{ borderColor: C.borderStrong }}
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand === 'All' ? 'All OEM Brands' : brand}</option>
                ))}
              </select>
            </div>

            {/* Application Filters */}
            <div className="mb-6">
              <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-3.5 font-bold font-mono">Applications</label>
              <div className="flex flex-wrap gap-1.5">
                {applications.map(app => (
                  <button
                    key={app}
                    onClick={() => setSelectedApplication(app)}
                    className="text-[10px] font-mono py-1.5 px-3 rounded-full border transition-all"
                    style={{
                      borderColor: selectedApplication === app ? C.teal : C.borderStrong,
                      background: selectedApplication === app ? `${C.teal}08` : 'transparent',
                      color: selectedApplication === app ? C.teal : C.slate,
                      fontWeight: selectedApplication === app ? 'bold' : 'normal'
                    }}
                  >
                    {app}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setSelectedCategory('All'); setSelectedBrand('All'); setSelectedApplication('All'); setSearchTerm(''); }}
              className="w-full text-center text-[9px] font-mono tracking-widest uppercase py-3.5 border border-dashed rounded-xl text-slate-400 hover:text-red-500 hover:border-red-400 transition-colors"
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
                  className="w-full pl-10 pr-4 py-2.5 border rounded-xl text-xs bg-slate-50 text-slate-700 placeholder-slate-400 outline-none"
                  style={{ borderColor: C.borderStrong }}
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">Sort Parameters</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs p-2.5 border rounded-xl bg-slate-50 text-slate-700 outline-none"
                  style={{ borderColor: C.borderStrong }}
                >
                  <option value="name-asc">Alphabetical A-Z</option>
                  <option value="name-desc">Alphabetical Z-A</option>
                  <option value="code">Model Code Reference</option>
                </select>
              </div>
            </div>

            {/* Asymmetric Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((p, index) => {
                  const isWide = index === 0 || index === 3;
                  return (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={`group bg-white rounded-[28px] border overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${
                        isWide ? 'md:col-span-2' : ''
                      }`}
                      style={{ borderColor: C.borderLight }}
                    >
                      <div className="flex flex-col md:flex-row h-full">
                        {/* Image Frame */}
                        <div className={`p-6 bg-slate-50/50 flex items-center justify-center border-b md:border-b-0 md:border-r relative overflow-hidden flex-shrink-0 ${
                          isWide ? 'w-full md:w-[40%]' : 'w-full'
                        }`} style={{ borderColor: C.borderLight }}>
                          
                          <div className="absolute top-0 left-0 w-[4px] h-full" style={{ background: p.accentColor }} />
                          
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="max-h-[180px] object-contain group-hover:scale-105 transition-transform duration-500"
                          />

                          <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[9px] font-mono text-slate-400 bg-white/80 backdrop-blur-sm border rounded-lg py-1.5 px-2.5">
                            <span>{p.availability}</span>
                            <span>{p.warranty}</span>
                          </div>
                        </div>

                        {/* Text Frame */}
                        <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-mono text-[9px] text-slate-400 tracking-wider">CODE: {p.code}</span>
                              <span className="text-[9px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">
                                {p.type}
                              </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-[#0F2B46] leading-snug group-hover:text-[#1D6FA3] transition-colors mb-2">
                              {p.name}
                            </h3>
                            
                            <p className="text-xs text-slate-500 leading-relaxed font-light mb-4 line-clamp-2">
                              {p.description}
                            </p>

                            <div className="grid grid-cols-2 gap-2.5 border-t pt-4 mb-4" style={{ borderColor: C.borderLight }}>
                              <div>
                                <span className="text-[7px] uppercase font-mono text-slate-400 block">Supply Logic</span>
                                <span className="text-[10px] font-bold text-[#0F2B46] truncate block">{p.voltage}</span>
                              </div>
                              <div>
                                <span className="text-[7px] uppercase font-mono text-slate-400 block">System Grade</span>
                                <span className="text-[10px] font-bold text-[#0EA6A6] truncate block">{p.oemGrade}</span>
                              </div>
                            </div>

                            <div className="flex gap-2 items-center mb-6">
                              <span className="text-[8px] font-mono uppercase text-slate-400">Couples With:</span>
                              <div className="flex gap-1.5">
                                {p.compatibility.map(comp => (
                                  <span key={comp} className="text-[9px] font-mono bg-slate-50 border rounded-md px-1.5 py-0.5 text-slate-500" style={{ borderColor: C.borderLight }}>
                                    {comp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: C.borderLight }}>
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={comparedIds.includes(p.id)}
                                onChange={() => toggleCompare(p.id)}
                                className="w-3.5 h-3.5 border rounded cursor-pointer accent-[#1D6FA3]"
                              />
                              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">Compare spec</span>
                            </label>

                            <Link
                              href={`/products/${p.id}`}
                              className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#1D6FA3] hover:text-blue-600 transition-colors"
                            >
                              Profile Details <ArrowUpRight size={12} />
                            </Link>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-1 md:col-span-2 text-center py-20 bg-white border rounded-[28px] relative overflow-hidden flex flex-col items-center justify-center p-8 shadow-sm" style={{ borderColor: C.borderLight }}>
                  {/* Large Logo 1 Watermark background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <img src="/logo1.png" alt="Watermark" className="w-80 h-80 object-contain" />
                  </div>
                  
                  {/* Premium illustration container */}
                  <div className="relative z-10 w-20 h-20 mb-6 flex items-center justify-center bg-slate-50 border rounded-2xl" style={{ borderColor: C.borderLight }}>
                    <img src="/logo1.png" alt="Z Icon Empty" className="w-10 h-10 object-contain opacity-40" />
                  </div>
                  
                  <h4 className="relative z-10 text-base font-bold text-[#0F2B46] mb-2 font-sans">
                    Zero Matching Systems Found
                  </h4>
                  <p className="relative z-10 text-xs text-slate-400 max-w-xs mx-auto leading-relaxed mb-6 font-light">
                    No products in our current database match your selected category, OEM brand, or target application filters.
                  </p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSelectedBrand('All'); setSelectedApplication('All'); setSearchTerm(''); }}
                    className="relative z-10 px-6 py-2.5 bg-slate-100 hover:bg-[#1D6FA3] hover:text-white text-[#0F2B46] text-[10px] font-mono font-bold uppercase tracking-wider rounded-xl transition-all"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-4 py-2 border rounded-xl text-xs font-mono disabled:opacity-40 bg-white"
                >
                  PREV
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-9 h-9 rounded-xl border text-xs font-mono font-bold transition-all ${
                      currentPage === i + 1 ? 'bg-[#0F2B46] text-white border-[#0F2B46]' : 'bg-white hover:bg-slate-50'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 border rounded-xl text-xs font-mono disabled:opacity-40 bg-white"
                >
                  NEXT
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── NEW PREMIUM SECTION: Engineering Solutions by Industry ── */}
      <section className="py-24 border-t" style={{ background: C.bgWarmWhite, borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 text-left">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] text-[#1D6FA3] tracking-[0.3em] uppercase font-bold block mb-4">DISCOVERY PORTAL</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F2B46] leading-tight mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Engineering Solutions by Industry
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Discover recommended HVAC and industrial electronic solutions tailored for your operational environment.
            </p>
          </div>

          {/* Grid Layout (Desktop) & Swipe Slider (Mobile/Tablet scroll viewport) */}
          <div 
            ref={industryGridRef} 
            className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {INDUSTRY_SOLUTIONS.map(ind => (
              <div
                key={ind.id}
                onClick={() => handleIndustrySelect(ind.title)}
                className="w-[85vw] sm:w-[50vw] lg:w-auto snap-center flex-shrink-0 flex flex-col justify-between bg-white rounded-[28px] overflow-hidden border border-[#0F2B46]/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer group"
                style={{ borderColor: C.borderLight }}
              >
                <div>
                  {/* Card Industrial Image Frame */}
                  <div className="h-48 relative overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src={ind.image} 
                      alt={ind.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: 'brightness(0.9) saturate(0.95)' }}
                    />
                    
                    {/* Industry Icon HUD Overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border rounded-2xl w-11 h-11 flex items-center justify-center shadow-md font-mono text-lg select-none">
                      {ind.icon}
                    </div>
                  </div>

                  {/* Description area */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold text-[#0F2B46] mb-3 flex items-center gap-2 group-hover:text-[#1D6FA3] transition-colors">
                      {ind.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 leading-relaxed font-light mb-6 min-h-[50px]">
                      {ind.description}
                    </p>

                    {/* Recommended products blocks */}
                    <div className="border-t pt-5" style={{ borderColor: C.borderLight }}>
                      <span className="font-mono text-[8px] text-[#B8955A] tracking-wider uppercase font-bold block mb-3">RECOMMENDED SOLUTIONS</span>
                      <div className="flex flex-col gap-2">
                        {ind.products.map(prod => (
                          <div key={prod} className="flex items-center gap-2 text-[10px] font-mono text-[#0F2B46]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                            {prod}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="w-full py-3.5 bg-slate-50 hover:bg-[#0F2B46] group-hover:bg-[#0F2B46] text-[#0F2B46] group-hover:text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                    Explore Solutions 
                    <ArrowUpRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── STICKY COMPARISON DRAWER ── */}
      <AnimatePresence>
        {comparedIds.length > 0 && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9990] bg-[#0F2B46] text-white px-6 py-4 rounded-3xl shadow-[0_20px_50px_rgba(15,43,70,0.4)] flex flex-col md:flex-row items-center gap-6 border border-white/10 max-w-2xl w-full"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                COMPARISON HUD
              </span>
              <span className="text-[11px] font-mono text-white/80">{comparedIds.length} of 3 systems selected</span>
            </div>

            <div className="flex gap-2 overflow-x-auto max-w-[280px]">
              {comparedProducts.map(cp => (
                <div key={cp.id} className="relative flex items-center bg-white/10 rounded-xl py-1 px-3 border border-white/5 pr-7 flex-shrink-0">
                  <span className="text-[10px] font-mono text-white font-bold">{cp.code}</span>
                  <button onClick={() => toggleCompare(cp.id)} className="absolute right-1 text-white/40 hover:text-white p-0.5">
                    <X size={10} />
                  </button>
                </div>
              ))}
              {comparedIds.length < 3 && (
                <div className="border border-dashed border-white/20 rounded-xl px-4 py-1 flex items-center justify-center text-[10px] text-white/40 font-mono">
                  + Slot 0{comparedIds.length + 1}
                </div>
              )}
            </div>

            <div className="flex gap-2 flex-shrink-0 ml-auto w-full md:w-auto">
              <button
                disabled={comparedIds.length < 2}
                onClick={() => setShowComparisonModal(true)}
                className="flex-1 md:flex-none px-5 py-2.5 bg-white text-[#0F2B46] hover:bg-[#E6F1F5] font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all disabled:opacity-40"
              >
                Compare Now
              </button>
              <button
                onClick={() => setComparedIds([])}
                className="px-3.5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[10px] font-mono uppercase"
              >
                Clear
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── COMPARISON SPECIFICATION OVERLAY MODAL ── */}
      <AnimatePresence>
        {showComparisonModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-6xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative"
            >
              <div className="p-6 border-b flex justify-between items-center" style={{ borderColor: C.borderStrong }}>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#1D6FA3] font-bold">PARAMETRIC MATRIX DIAGRAM</span>
                  <h3 className="text-xl font-bold text-[#0F2B46] mt-0.5">System Specification Comparison</h3>
                </div>
                <button
                  onClick={() => setShowComparisonModal(false)}
                  className="p-2 border rounded-full hover:bg-slate-50 transition-colors text-[#0F2B46]"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-grow">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 border-b text-[10px] font-mono uppercase text-slate-400 font-bold bg-slate-50/50">Technical parameters</th>
                      {comparedProducts.map(cp => (
                        <th key={cp.id} className="p-3 border-b bg-slate-50/50" style={{ minWidth: '220px' }}>
                          <span className="font-mono text-[9px] text-[#1D6FA3] uppercase font-bold block">{cp.code}</span>
                          <span className="text-sm font-bold text-[#0F2B46] block mt-0.5">{cp.name}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-50/20"><td colSpan={comparedProducts.length + 1} className="p-2.5 font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">General specifications</td></tr>
                    <tr>
                      <td className="p-3 border-b font-mono text-[11px] text-slate-500">Category</td>
                      {comparedProducts.map(cp => <td key={cp.id} className="p-3 border-b text-xs text-[#0F2B46] font-semibold">{cp.category}</td>)}
                    </tr>
                    <tr>
                      <td className="p-3 border-b font-mono text-[11px] text-slate-500">Standard Warranty</td>
                      {comparedProducts.map(cp => <td key={cp.id} className="p-3 border-b text-xs text-[#0F2B46] font-semibold">{cp.warranty}</td>)}
                    </tr>

                    <tr className="bg-slate-50/20"><td colSpan={comparedProducts.length + 1} className="p-2.5 font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Electrical specifications</td></tr>
                    {Object.keys(comparedProducts[0].specs.electrical).map(param => (
                      <tr key={param}>
                        <td className="p-3 border-b font-mono text-[11px] text-slate-500">{param}</td>
                        {comparedProducts.map(cp => (
                          <td key={cp.id} className="p-3 border-b text-xs text-[#0F2B46] font-mono">
                            {cp.specs.electrical[param] || 'N/A'}
                          </td>
                        ))}
                      </tr>
                    ))}

                    <tr className="bg-slate-50/20"><td colSpan={comparedProducts.length + 1} className="p-2.5 font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Thermal Performance</td></tr>
                    {Object.keys(comparedProducts[0].specs.thermal).map(param => (
                      <tr key={param}>
                        <td className="p-3 border-b font-mono text-[11px] text-slate-500">{param}</td>
                        {comparedProducts.map(cp => (
                          <td key={cp.id} className="p-3 border-b text-xs text-[#0F2B46] font-mono">
                            {cp.specs.thermal[param] || 'N/A'}
                          </td>
                        ))}
                      </tr>
                    ))}

                    <tr className="bg-slate-50/20"><td colSpan={comparedProducts.length + 1} className="p-2.5 font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Mechanical Dimensions</td></tr>
                    {Object.keys(comparedProducts[0].specs.mechanical).map(param => (
                      <tr key={param}>
                        <td className="p-3 border-b font-mono text-[11px] text-slate-500">{param}</td>
                        {comparedProducts.map(cp => (
                          <td key={cp.id} className="p-3 border-b text-xs text-[#0F2B46] font-mono">
                            {cp.specs.mechanical[param] || 'N/A'}
                          </td>
                        ))}
                      </tr>
                    ))}

                    <tr className="bg-slate-50/20"><td colSpan={comparedProducts.length + 1} className="p-2.5 font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Communication Protocol support</td></tr>
                    {Object.keys(comparedProducts[0].specs.communication).map(param => (
                      <tr key={param}>
                        <td className="p-3 border-b font-mono text-[11px] text-slate-500">{param}</td>
                        {comparedProducts.map(cp => (
                          <td key={cp.id} className="p-3 border-b text-xs text-[#0F2B46] font-mono">
                            {cp.specs.communication[param] || 'N/A'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 border-t flex justify-end gap-3 bg-slate-50" style={{ borderColor: C.borderStrong }}>
                <button
                  onClick={() => setShowComparisonModal(false)}
                  className="px-6 py-3 bg-[#0F2B46] hover:bg-[#1D6FA3] text-white font-mono text-xs uppercase tracking-widest rounded-xl transition-all"
                >
                  Close Overlay
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
