'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ChevronDown, ArrowUpRight, Download, Cpu,
  Settings, CheckCircle2, ShieldCheck, Thermometer, Zap, Layers,
  ChevronRight, Home, RefreshCw, X, MessageSquare, Phone, FileText, Info, HelpCircle
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';
import { gsap } from '@/lib/gsap';
import CountUp from 'react-countup';

const C = {
  bgHero:        '#F1F6FA',
  bgWarmWhite:   '#E6F1F5',
  bgSage:        '#E2ECE9',
  bgNeutralGray: '#EAEDF1',
  bgDarkNavy:    '#c3d2dfff', 
  card:          '#FFFFFF',
  navy:          '#0F2B46',
  blue:          '#106da7ff',
  teal:          '#0EA6A6',
  gold:          '#B8955A',
  slate:         '#6E7C93',
  borderLight:   'rgba(30, 65, 49, 0.06)',
  borderStrong:  'rgba(15,43,70,0.12)',
};

const INDUSTRY_SOLUTIONS = [
  {
    id: 'hospitals',
    title: 'Hospitals',
    iconName: 'ShieldCheck',
    image: '/hvac_pcb_front.png',
    description: 'Designed for operating theatres, laboratories, diagnostic rooms and critical healthcare infrastructure requiring precise environmental control.',
    products: ['Precision Air Conditioning', 'Close Control Units', 'Cabinet Heat Exchangers'],
    projects: '240+ Active Sites'
  },
  {
    id: 'data-centers',
    title: 'Data Centers',
    iconName: 'Cpu',
    image: '/chiller_internal.png',
    description: 'Maintain server uptime through stable temperature control and intelligent thermal management.',
    products: ['Precision Cooling Systems', 'High Capacity Chillers', 'VRF Controllers'],
    projects: '380+ Installations'
  },
  {
    id: 'factories',
    title: 'Factories',
    iconName: 'Settings',
    image: '/chiller_installation.png',
    description: 'Reliable thermal management for manufacturing plants, production lines and industrial automation systems.',
    products: ['Industrial Water Chillers', 'Cabinet Panel Coolers', 'Heavy Duty Cooling Units'],
    projects: '510+ Plants Active'
  },
  {
    id: 'hotels',
    title: 'Hotels',
    iconName: 'Home',
    image: '/hvac_story_installation.png',
    description: 'Comfort-focused HVAC electronics designed for hospitality environments with reduced operating costs.',
    products: ['VRF Controllers', 'Energy Efficient Cooling', 'Smart HVAC Controls'],
    projects: '190+ Hospitality Partners'
  },
  {
    id: 'commercial-buildings',
    title: 'Commercial Buildings',
    iconName: 'Layers',
    image: '/hvac_pcb_perspective.png',
    description: 'Efficient cooling infrastructure for offices, malls, commercial complexes and mixed-use developments.',
    products: ['Building Automation Controllers', 'VRF Systems', 'Precision Cooling'],
    projects: '420+ Corporate Towers'
  },
  {
    id: 'electrical-control-rooms',
    title: 'Electrical Control Rooms',
    iconName: 'Zap',
    image: '/hvac_pcb_exploded.png',
    description: 'Protect electrical equipment from overheating and extend system reliability.',
    products: ['Cabinet Heat Exchangers', 'Panel Cooling Systems', 'Industrial PCB Controllers'],
    projects: '630+ Cabinets Shielded'
  }
];

export default function ProductListingPage() {
  const router = useRouter();
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

  // Mobile drawer filter
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Quick View State
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Floating Support widget open state
  const [isSupportOpen, setIsSupportOpen] = useState(false);

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

  // Refs for animations
  const finderRef = useRef(null);
  const industryGridRef = useRef(null);

  // Category icons mapping
  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Electronic Components': return <Cpu size={13} />;
      case 'Water Cooling Systems': return <Thermometer size={13} />;
      case 'Panel Cooling Systems': return <Layers size={13} />;
      case 'Precision Air Conditioning': return <Zap size={13} />;
      default: return <Settings size={13} />;
    }
  };

  // Application icons mapping
  const getApplicationIcon = (app) => {
    switch (app) {
      case 'Hospitals': return <ShieldCheck size={13} />;
      case 'Data Centers': return <Cpu size={13} />;
      case 'Factories': return <Settings size={13} />;
      case 'Hotels': return <Home size={13} />;
      case 'Commercial Buildings': return <Layers size={13} />;
      case 'Electrical Control Rooms': return <Zap size={13} />;
      default: return <Info size={13} />;
    }
  };

  // Industry Solution icons mapping
  const getSolutionIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="text-[#1D6FA3]" size={20} />;
      case 'Cpu': return <Cpu className="text-[#1D6FA3]" size={20} />;
      case 'Settings': return <Settings className="text-[#1D6FA3]" size={20} />;
      case 'Home': return <Home className="text-[#1D6FA3]" size={20} />;
      case 'Layers': return <Layers className="text-[#1D6FA3]" size={20} />;
      case 'Zap': return <Zap className="text-[#1D6FA3]" size={20} />;
      default: return <Info className="text-[#1D6FA3]" size={20} />;
    }
  };

  // Computed Active Filters Count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'All') count++;
    if (selectedBrand !== 'All') count++;
    if (selectedApplication !== 'All') count++;
    if (searchTerm !== '') count++;
    return count;
  }, [selectedCategory, selectedBrand, selectedApplication, searchTerm]);

  // GSAP animation triggers
  useEffect(() => {
    // Stagger reveal of industry solutions grid (desktop)
    const grid = industryGridRef.current;
    if (!grid) return;
    
    const ctx = gsap.context(() => {
      // Reveal industry grid
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

      // Hero Split Text Reveal Timeline
      const tl = gsap.timeline();
      tl.to('.hero-tagline', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .to('.hero-word', { y: '0%', duration: 0.8, stagger: 0.08, ease: 'power4.out' }, '-=0.45')
        .to('.hero-desc', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to('.hero-stats', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4');
    });

    return () => ctx.revert();
  }, []);

  // ── FILTER & SORT LOGIC ──
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_CATALOG];

    if (searchTerm) {
      const q = String(searchTerm || "").toLowerCase();
      result = result.filter(p =>
        String(p?.name || "").toLowerCase().includes(q) ||
        String(p?.code || "").toLowerCase().includes(q) ||
        String(p?.description || "").toLowerCase().includes(q) ||
        String(p?.tagline || "").toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedBrand !== 'All') {
      result = result.filter(p => (p.compatibility ?? []).includes(selectedBrand));
    }

    if (selectedApplication !== 'All') {
      const app = String(selectedApplication || "").toLowerCase();
      result = result.filter(p => {
        const matchesCategory = (app === 'hospitals' && (p.category === 'Precision Air Conditioning' || p.type === 'PCB Boards')) ||
                                (app === 'data centers' && (p.type === 'Precision ACs' || p.category === 'Water Cooling Systems')) ||
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

  // Reset page to 1 on filter changes
  useEffect(() => {
    let frameId = requestAnimationFrame(() => {
      setCurrentPage(1);
    });
    return () => cancelAnimationFrame(frameId);
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
      const typeMatches = finderType === 'All' || String(p?.type || "").toLowerCase().includes(String(finderType || "").toLowerCase());
      const brandMatches = finderBrand === 'All' || (p?.compatibility ?? []).includes(finderBrand);
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
    <div className="w-full overflow-x-hidden min-h-screen relative pb-20 lg:pb-0" style={{ background: C.bgHero }}>
      
      {/* Subtle Engineering grid lines background (Animated blueprint grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] engineering-grid animated-grid z-0" />
      <div className="absolute inset-0 pointer-events-none blueprint-scanner z-0" />

      {/* Floating Blueprint Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02] z-0">
        <div className="absolute top-[12%] left-[8%] w-56 h-56 border border-dashed border-[#0F2B46] rounded-full animate-[spin_50s_linear_infinite]" />
        <div className="absolute top-[45%] right-[10%] w-72 h-72 border border-[#0F2B46] rounded-full flex items-center justify-center animate-[spin_70s_linear_infinite]">
          <div className="w-[85%] h-[85%] border border-dashed border-[#0F2B46] rounded-full" />
          <div className="absolute w-full h-[0.5px] bg-[#0F2B46] rotate-45" />
          <div className="absolute w-full h-[0.5px] bg-[#0F2B46] -rotate-45" />
        </div>
        <div className="absolute top-[35%] right-[5%] font-mono text-[7px] tracking-[0.2em] text-[#0F2B46] hidden md:block">
          SYS_STATUS: ACTIVE // POWER_DRAW: NOMINAL // COMP: OK
        </div>
        <div className="absolute top-[75%] left-[5%] font-mono text-[7px] tracking-[0.2em] text-[#0F2B46] hidden md:block">
          TEMP_OUTLET: 7.2°C // FLOW_RATE: 12.4 L/S
        </div>
      </div>
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-8 pb-4 flex items-center gap-2 font-mono text-[10px] text-slate-400 tracking-wider relative z-10">
        <Link href="/" className="hover:text-[#1D6FA3] flex items-center gap-1">
          <Home size={10} /> HOME
        </Link>
        <ChevronRight size={10} />
        <span className="text-[#0F2B46] font-bold">PRODUCTS ECOSYSTEM</span>
      </div>

      {/* ── PREMIUM EDITORIAL HERO ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-12 pb-16 relative z-10">
        <div className="vertical-guide left-[8%] hidden lg:block" />
        <div className="vertical-guide right-[8%] hidden lg:block" />
        
        {/* Border grid wrapper */}
        <div className="border-b pb-12" style={{ borderColor: C.borderStrong }}>
          
          {/* DEDICATED MOBILE LAYOUT: Tag -> Heading -> Description -> CTA -> 2x2 Stats -> Scroll Indicator */}
          <div className="flex lg:hidden flex-col gap-6 w-full">
            <span className="font-mono text-[9px] text-[#1D6FA3] tracking-[0.3em] uppercase font-bold block hero-tagline opacity-0">
              Z-COOL INDUSTRIAL PORTFOLIO
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-[#0F2B46] leading-tight animate-fade-in" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Engineered Climate Solutions
            </h1>
            <p className="text-slate-600 text-xs leading-relaxed hero-desc opacity-0">
              Explore our range of certified VRF logic controllers, heavy-duty industrial process chillers, closed-loop cabinet heat exchangers, and precision server-room units configured for high-density, mission-critical parameters.
            </p>
            
            {/* CTA block */}
            <div className="hero-cta opacity-0">
              <button
                onClick={() => {
                  const target = document.getElementById('catalog-grid-section');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 bg-[#0F2B46] hover:bg-[#1D6FA3] text-white text-[10px] font-mono tracking-widest uppercase rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 font-bold"
              >
                <span>Browse Inventory</span>
                <ChevronDown size={12} className="animate-bounce" />
              </button>
            </div>
            
            {/* 2x2 Stats */}
            <div className="grid grid-cols-2 gap-3 w-full hero-stats opacity-0">
              <div className="bg-white border rounded-xl p-4 flex flex-col justify-between shadow-sm border-[#0f2b46]/5">
                <span className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block">Deployed Systems</span>
                <span className="text-base font-bold text-[#0F2B46] mt-2 font-sans">
                  <CountUp end={1240} separator="," enableScrollSpy scrollSpyOnce />+ Active
                </span>
              </div>
              <div className="bg-white border rounded-xl p-4 flex flex-col justify-between shadow-sm border-[#0f2b46]/5">
                <span className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block">BMS Connectivity</span>
                <span className="text-base font-bold text-[#0EA6A6] mt-2 font-sans">Modbus/BACnet</span>
              </div>
              <div className="bg-white border rounded-xl p-4 flex flex-col justify-between shadow-sm border-[#0f2b46]/5">
                <span className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block">QA Verification</span>
                <span className="text-base font-bold text-[#B8955A] mt-2 font-sans">
                  <CountUp end={100} enableScrollSpy scrollSpyOnce />% Tested
                </span>
              </div>
              <div className="bg-white border rounded-xl p-4 flex flex-col justify-between shadow-sm border-[#0f2b46]/5">
                <span className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block">Design Standards</span>
                <span className="text-base font-bold text-[#1D6FA3] mt-2 font-sans">ASME & CE</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-2 animate-bounce">
              <div className="w-5 h-8 border border-slate-300 rounded-full flex justify-center pt-1">
                <span className="w-1 h-2 bg-[#1D6FA3] rounded-full" />
              </div>
            </div>
          </div>

          {/* DEDICATED DESKTOP LAYOUT (Hidden on mobile) */}
          <div className="hidden lg:flex flex-row justify-between items-start gap-12 w-full">
            <div className="max-w-3xl">
              <span className="font-mono text-[10px] text-[#1D6FA3] tracking-[0.3em] uppercase font-bold block mb-4 hero-tagline opacity-0">
                Z-COOL INDUSTRIAL PORTFOLIO
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0F2B46] mb-6 leading-[1.1] font-sans">
                {"Engineered Climate Solutions".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-block overflow-hidden mr-3 last:mr-0">
                    <span className="hero-word inline-block translate-y-[110%]">
                      {word}
                    </span>
                  </span>
                ))}
              </h1>
              <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed hero-desc opacity-0">
                Explore our range of certified VRF logic controllers, heavy-duty industrial process chillers, closed-loop cabinet heat exchangers, and precision server-room units configured for high-density, mission-critical parameters.
              </p>
            </div>

            {/* Quick HUD Metrics with CountUp */}
            <div className="grid grid-cols-2 gap-4 w-fit min-w-[320px] hero-stats opacity-0">
              <div className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm shadow-premium border-[#0f2b46]/5">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">Deployed Systems</span>
                <span className="text-xl font-bold text-[#0F2B46] mt-2">
                  <CountUp end={1240} separator="," enableScrollSpy scrollSpyOnce />+ Active
                </span>
              </div>
              <div className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm shadow-premium border-[#0f2b46]/5">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">BMS Connectivity</span>
                <span className="text-xl font-bold text-[#0EA6A6] mt-2">Modbus/BACnet</span>
              </div>
              <div className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm shadow-premium border-[#0f2b46]/5">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">QA Verification</span>
                <span className="text-xl font-bold text-[#B8955A] mt-2">
                  <CountUp end={100} enableScrollSpy scrollSpyOnce />% Tested
                </span>
              </div>
              <div className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm shadow-premium border-[#0f2b46]/5">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">Design Standards</span>
                <span className="text-xl font-bold text-[#1D6FA3] mt-2">ASME & CE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Product Finder Accordion / Wizard Trigger */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowFinder(!showFinder)}
            className="flex items-center gap-2.5 px-6 py-3.5 bg-[#0F2B46] hover:bg-[#1D6FA3] text-white text-[11px] font-mono tracking-widest uppercase rounded-full shadow-md transition-all duration-300 font-bold"
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
                          className="py-4 border border-slate-100 rounded-2xl hover:border-[#1D6FA3] hover:bg-[#1D6FA3]/5 text-xs text-slate-700 transition-all font-semibold"
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
                          className="py-4 border border-slate-100 rounded-2xl hover:border-[#1D6FA3] hover:bg-[#1D6FA3]/5 text-xs text-slate-700 transition-all font-semibold"
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
                            finderType === t ? 'border-[#1D6FA3] bg-[#1D6FA3]/5 text-[#1D6FA3]' : 'border-slate-100 hover:border-[#1D6FA3] hover:bg-[#1D6FA3]/5 text-slate-700'
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
                    <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-white p-3 rounded-2xl border border-slate-100">
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
                          className="px-4 py-2 border border-slate-200 font-mono text-[9px] uppercase tracking-wider rounded hover:bg-white text-slate-500"
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

      {/* MOBILE FILTER TRIGGER BAR (Visible on mobile/tablet only) */}
      <div className="lg:hidden px-6 pb-6 flex gap-3 relative z-10">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex-grow flex items-center justify-center gap-2.5 py-4 bg-[#0F2B46] text-white text-xs font-mono tracking-wider uppercase rounded-2xl shadow-md font-bold"
        >
          <Settings size={14} /> 
          <span>Filter Inventory</span>
          {activeFilterCount > 0 && (
            <span className="bg-[#1D6FA3] text-white text-[9px] font-mono px-2 py-0.5 rounded-full font-bold">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* ── STICKY SIDEBAR & PRODUCT LISTING SECTION ── */}
      <section id="catalog-grid-section" className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pb-32 scroll-mt-24 relative z-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          
          {/* DESKTOP SIDEBAR: Sticky Filter Sidebar (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-3 h-fit lg:sticky lg:top-[110px] relative top-auto bg-white border border-[#0F2B46]/5 rounded-3xl p-6 md:p-8 shadow-premium">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 pb-3 border-b flex justify-between items-center" style={{ color: C.navy, borderColor: C.borderLight }}>
              <span className="flex items-center gap-2">
                <span>Filter Inventory</span>
                {activeFilterCount > 0 && (
                  <span className="bg-[#1D6FA3]/10 text-[#1D6FA3] text-[9px] font-mono font-bold px-2 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </span>
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
                    className="flex items-center gap-2.5 text-left text-xs py-2.5 px-3.5 rounded-xl transition-colors border"
                    style={{
                      borderColor: selectedCategory === cat ? C.blue : 'transparent',
                      background: selectedCategory === cat ? `${C.blue}08` : 'transparent',
                      color: selectedCategory === cat ? C.blue : C.slate,
                      fontWeight: selectedCategory === cat ? 'bold' : 'normal'
                    }}
                  >
                    {getCategoryIcon(cat)}
                    <span>{cat === 'All' ? 'All Categories' : cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Compatibility Select */}
            <div className="mb-6">
              <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-2.5 font-bold">OEM Compatibility</label>
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
              <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-3.5 font-bold">Applications</label>
              <div className="flex flex-wrap gap-1.5">
                {applications.map(app => (
                  <button
                    key={app}
                    onClick={() => setSelectedApplication(app)}
                    className="flex items-center gap-1.5 text-[10px] font-mono py-1.5 px-3 rounded-full border transition-all"
                    style={{
                      borderColor: selectedApplication === app ? C.teal : C.borderStrong,
                      background: selectedApplication === app ? `${C.teal}08` : 'transparent',
                      color: selectedApplication === app ? C.teal : C.slate,
                      fontWeight: selectedApplication === app ? 'bold' : 'normal'
                    }}
                  >
                    {getApplicationIcon(app)}
                    <span>{app}</span>
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
                      onClick={(e) => {
                        if (e.target.closest('button') || e.target.closest('input') || e.target.closest('label') || e.target.closest('a')) {
                          return;
                        }
                        router.push(`/products/${p.id}`);
                      }}
                      className={`group bg-white rounded-[28px] border overflow-hidden shadow-premium light-sweep-container flex flex-col justify-between cursor-pointer ${
                        isWide ? 'md:col-span-2' : ''
                      }`}
                      style={{ borderColor: C.borderLight }}
                    >
                      {/* Diagonal light sweep gradient */}
                      <div className="light-sweep-element" />

                      <div className="flex flex-col md:flex-row h-full">
                        {/* Standardized studio photography image frame */}
                        <div className={`p-6 md:p-8 bg-gradient-to-tr from-slate-55 to-white/95 flex items-center justify-center border-b md:border-b-0 md:border-r relative overflow-hidden flex-shrink-0 ${
                          isWide ? 'w-full md:w-[42%]' : 'w-full'
                        }`} style={{ borderColor: C.borderLight }}>
                          
                          {/* Radial Studio Light Glow */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85),transparent_80%)] pointer-events-none" />
                          <div className="absolute top-0 left-0 w-[4px] h-full" style={{ background: p.accentColor }} />
                          
                          {/* Main Image with Zoom on Hover */}
                          <Link href={`/products/${p.id}`} className="relative flex items-center justify-center w-full h-full">
                            <img
                              src={p.images[0]}
                              alt={p.name}
                              loading="lazy"
                              className="max-h-[160px] md:max-h-[190px] object-contain group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[1.01] contrast-[0.99] saturate-[0.92] mix-blend-multiply"
                            />
                          </Link>

                          {/* Quick View Button Overlay (Visible on Hover - Desktop only) */}
                          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center backdrop-blur-[2px] z-10">
                            <button
                              onClick={() => setQuickViewProduct(p)}
                              className="px-5 py-2.5 bg-white text-[#0F2B46] hover:bg-[#0F2B46] hover:text-white font-mono text-[9px] font-bold uppercase tracking-widest rounded-xl shadow-lg transition-all duration-300 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0"
                            >
                              <Search size={11} /> Quick View
                            </button>
                          </div>

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

                            <Link href={`/products/${p.id}`} className="block">
                              <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-[#0F2B46] leading-snug group-hover:text-[#1D6FA3] transition-colors mb-2 font-sans">
                                {p.name}
                              </h3>
                            </Link>
                            
                            <p className="text-sm text-slate-500 leading-relaxed font-light mb-4 line-clamp-2">
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
                              <div className="flex gap-1.5 flex-wrap">
                                {(p.compatibility ?? []).slice(0, 4).map(comp => (
                                  <span key={comp} className="text-[9px] font-mono bg-slate-50 border rounded-md px-1.5 py-0.5 text-slate-500" style={{ borderColor: C.borderLight }}>
                                    {comp}
                                  </span>
                                ))}
                                {(p.compatibility ?? []).length > 4 && (
                                  <span className="text-[9px] font-mono bg-slate-100 rounded-md px-1.5 py-0.5 text-slate-500">
                                    +{(p.compatibility ?? []).length - 4}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Action area */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t pt-4" style={{ borderColor: C.borderLight }}>
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={comparedIds.includes(p.id)}
                                onChange={() => toggleCompare(p.id)}
                                className="w-3.5 h-3.5 border rounded cursor-pointer accent-[#1D6FA3]"
                              />
                              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">Compare spec</span>
                            </label>

                            <div className="flex gap-3 w-full sm:w-auto">
                              {/* Dedicated Quick View Trigger for Mobile Viewports */}
                              <button
                                onClick={() => setQuickViewProduct(p)}
                                className="md:hidden flex-1 py-2.5 border border-slate-200 rounded-xl text-center text-xs font-mono uppercase text-slate-600 font-bold flex items-center justify-center gap-1"
                              >
                                <Search size={12} />
                                <span>Quick View</span>
                              </button>
                              
                               <Link
                                 href={`/products/${p.id}`}
                                 className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#1D6FA3] hover:text-blue-600 transition-colors group/btn"
                               >
                                 <span>Explore Product</span> 
                                 <ArrowUpRight size={12} className="transform transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                               </Link>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-1 md:col-span-2 text-center py-20 bg-white border rounded-[28px] relative overflow-hidden flex flex-col items-center justify-center p-8 shadow-sm" style={{ borderColor: C.borderLight }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <img src="/logo1.png" alt="Watermark" className="w-80 h-80 object-contain" />
                  </div>
                  
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
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-mono disabled:opacity-40 bg-white"
                >
                  PREV
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-9 h-9 rounded-xl border text-xs font-mono font-bold transition-all ${
                      currentPage === i + 1 ? 'bg-[#0F2B46] text-white border-[#0F2B46]' : 'bg-white hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-mono disabled:opacity-40 bg-white"
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

          {/* DESKTOP VIEW: Grid Layout (Hidden on mobile) */}
          <div 
            ref={industryGridRef} 
            className="hidden lg:grid lg:grid-cols-3 gap-8"
          >
            {INDUSTRY_SOLUTIONS.map(ind => (
              <div
                key={ind.id}
                onClick={() => handleIndustrySelect(ind.title)}
                className="flex flex-col justify-between bg-white rounded-[28px] overflow-hidden border border-[#0F2B46]/5 hover:shadow-2xl shadow-premium cursor-pointer group"
                style={{ borderColor: C.borderLight }}
              >
                <div>
                  {/* Card Industrial Image Frame */}
                  <div className="h-48 relative overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src={ind.image} 
                      alt={ind.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: 'brightness(0.85) saturate(0.9)' }}
                    />
                    
                    {/* Industry Icon HUD Overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border rounded-2xl w-11 h-11 flex items-center justify-center shadow-md select-none">
                      {getSolutionIcon(ind.iconName)}
                    </div>

                    {/* Project Count Overlay */}
                    <div className="absolute top-4 right-4 bg-[#0F2B46]/85 backdrop-blur-sm border border-white/10 rounded-xl px-2.5 py-1 text-[8px] font-mono text-cyan-300 font-bold tracking-wider">
                      {ind.projects}
                    </div>
                  </div>

                  {/* Description area */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold text-[#0F2B46] mb-3 flex items-center gap-2 group-hover:text-[#1D6FA3] transition-colors font-sans">
                      {ind.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 leading-relaxed font-light mb-6 min-h-[50px]">
                      {ind.description}
                    </p>

                    {/* Recommended products capsule blocks */}
                    <div className="border-t pt-5" style={{ borderColor: C.borderLight }}>
                      <span className="font-mono text-[8px] text-[#B8955A] tracking-wider uppercase font-bold block mb-3">RECOMMENDED SOLUTIONS</span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.products.map(prod => (
                          <span key={prod} className="text-[9px] font-mono bg-slate-50 border border-slate-100 rounded-md px-2.5 py-1 text-[#0F2B46] font-semibold">
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Explore Solutions Footer button */}
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="w-full py-3.5 bg-slate-50 hover:bg-[#0F2B46] group-hover:bg-[#0F2B46] text-[#0F2B46] group-hover:text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm animate-cta">
                    Explore Solutions 
                    <ArrowUpRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* MOBILE EXPERIENCE: Swipeable Horizontal Carousel (Visible on mobile/tablet only) */}
          <div className="lg:hidden flex overflow-x-auto gap-5 pb-6 snap-x snap-mandatory scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {INDUSTRY_SOLUTIONS.map(ind => (
              <div
                key={ind.id}
                onClick={() => handleIndustrySelect(ind.title)}
                className="w-[82vw] sm:w-[50vw] snap-center flex-shrink-0 flex flex-col justify-between bg-white rounded-[28px] overflow-hidden border border-[#0F2B46]/5 hover:shadow-2xl cursor-pointer group"
                style={{ borderColor: C.borderLight }}
              >
                <div>
                  <div className="h-44 relative overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src={ind.image} 
                      alt={ind.title} 
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.85) saturate(0.9)' }}
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border rounded-2xl w-10 h-10 flex items-center justify-center shadow-md select-none">
                      {getSolutionIcon(ind.iconName)}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#0F2B46]/85 backdrop-blur-sm border border-white/10 rounded-xl px-2.5 py-1 text-[8px] font-mono text-cyan-300 font-bold tracking-wider">
                      {ind.projects}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#0F2B46] mb-2 font-sans">{ind.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light mb-4 line-clamp-3">{ind.description}</p>
                    
                    <div className="border-t pt-4" style={{ borderColor: C.borderLight }}>
                      <span className="font-mono text-[8px] text-[#B8955A] tracking-wider uppercase font-bold block mb-2">RECOMMENDED SOLUTIONS</span>
                      <div className="flex flex-wrap gap-1">
                        {ind.products.map(prod => (
                          <span key={prod} className="text-[9px] font-mono bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5 text-[#0F2B46]">
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="w-full py-3 bg-[#0F2B46] text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5">
                    <span>Explore Solutions</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── NEW CUSTOMER SUCCESS METRICS SECTION ── */}
      <section className="py-24 bg-[#0F2B46] text-white relative overflow-hidden">
        {/* Animated blueprint grid watermarked inside */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] engineering-grid animated-grid" />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[9px] text-cyan-400 tracking-[0.35em] uppercase font-bold block mb-4">OPERATIONAL VERIFICATION</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight font-sans">Proven Thermal Performance Metrics</h2>
            <p className="text-slate-300 text-sm md:text-base mt-4 leading-relaxed font-light">
              Real-world telemetry statistics and deployment metrics validated across active global contracts, ensuring absolute thermal stability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-300">
              <div>
                <span className="text-base font-mono text-cyan-400 font-bold">01 // TELEMETRY UPTIME</span>
                <p className="text-gray-300 text-xs mt-3 leading-relaxed">Continuous logic validation preventing mission-critical climate downtime.</p>
              </div>
              <h4 className="text-4xl md:text-5xl font-bold mt-8 text-white font-mono">
                <CountUp end={99.98} decimals={2} duration={2.5} enableScrollSpy scrollSpyOnce />%
              </h4>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-300">
              <div>
                <span className="text-base font-mono text-cyan-400 font-bold">02 // ENERGY REDUCTION</span>
                <p className="text-gray-300 text-xs mt-3 leading-relaxed">Average power conservation parameters tracked under standard dynamic loads.</p>
              </div>
              <h4 className="text-4xl md:text-5xl font-bold mt-8 text-white font-mono">
                <CountUp end={35} duration={2.5} enableScrollSpy scrollSpyOnce />%
              </h4>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-300">
              <div>
                <span className="text-base font-mono text-cyan-400 font-bold">03 // EMERGENCY SLA</span>
                <p className="text-gray-300 text-xs mt-3 leading-relaxed">Fast response target under SLA guidelines for remote support dispatch parameters.</p>
              </div>
              <h4 className="text-4xl md:text-5xl font-bold mt-8 text-white font-mono">
                &lt; <CountUp end={45} duration={2.5} enableScrollSpy scrollSpyOnce /> Min
              </h4>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-300">
              <div>
                <span className="text-base font-mono text-cyan-400 font-bold">04 // GLOBAL REACH</span>
                <p className="text-gray-300 text-xs mt-3 leading-relaxed">Active certified systems operating across hospital, datacenter, and factory grids.</p>
              </div>
              <h4 className="text-4xl md:text-5xl font-bold mt-8 text-white font-mono">
                <CountUp end={15000} separator="," duration={2.5} enableScrollSpy scrollSpyOnce />+
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW FEATURED BRANDS COMPATIBILITY GRID ── */}
      <section className="py-20 border-t bg-white" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <span className="font-mono text-[9px] text-[#1D6FA3] tracking-[0.35em] uppercase font-bold block mb-2">BMS INTEGRATION COMPATIBILITY</span>
            <h3 className="text-lg md:text-xl font-bold text-[#0F2B46] font-sans">Featured Ecosystem OEM Partners</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {/* LG */}
            <div className="group cursor-pointer flex flex-col items-center gap-2">
              <svg className="w-10 h-10 filter grayscale opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" fill="#a50034" />
                <path d="M50,15 A35,35 0 1,0 85,50" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
                <path d="M50,30 L50,50 L70,50" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
                <circle cx="35" cy="35" r="4" fill="white" />
              </svg>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">LG</span>
            </div>
            {/* Daikin */}
            <div className="group cursor-pointer flex flex-col items-center gap-2">
              <svg className="w-16 h-10 filter grayscale opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" viewBox="0 0 160 100" fill="currentColor">
                <path d="M10,25 L10,75 L30,75 C45,75 55,65 55,50 C55,35 45,25 30,25 Z M25,37 L30,37 C38,37 42,42 42,50 C42,58 38,63 30,63 L25,63 Z" fill="#00a0e9" />
                <path d="M70,25 L58,75 L74,75 L77,63 L93,63 L96,75 L112,75 Z M80,50 L85,35 L90,50 Z" fill="#00a0e9" />
                <rect x="120" y="25" width="15" height="50" fill="#00a0e9" />
              </svg>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">DAIKIN</span>
            </div>
            {/* Carrier */}
            <div className="group cursor-pointer flex flex-col items-center gap-2">
              <svg className="w-16 h-10 filter grayscale opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" viewBox="0 0 160 100" fill="none" stroke="currentColor">
                <ellipse cx="80" cy="50" rx="65" ry="30" stroke="#00356B" strokeWidth="4" />
                <ellipse cx="80" cy="50" rx="55" ry="22" stroke="#00356B" strokeWidth="1" strokeDasharray="3 3" />
                <text x="80" y="56" fontFamily="sans-serif" fontWeight="900" fontSize="16" fill="#00356B" stroke="none" textAnchor="middle">Carrier</text>
              </svg>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">CARRIER</span>
            </div>
            {/* Mitsubishi */}
            <div className="group cursor-pointer flex flex-col items-center gap-2">
              <svg className="w-10 h-10 filter grayscale opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" viewBox="0 0 100 100" fill="#e60012">
                <path d="M50,15 L62,38 L38,38 Z" />
                <path d="M26,58 L50,58 L38,38 Z" />
                <path d="M74,58 L50,58 L62,38 Z" />
                <path d="M50,58 L62,80 L38,80 Z" />
              </svg>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">MITSUBISHI</span>
            </div>
            {/* Siemens */}
            <div className="group cursor-pointer flex flex-col items-center gap-2">
              <svg className="w-16 h-10 filter grayscale opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" viewBox="0 0 160 100" fill="currentColor">
                <text x="80" y="58" fontFamily="Impact, Arial Black, sans-serif" fontWeight="bold" fontSize="24" fill="#009999" textAnchor="middle" letterSpacing="1">SIEMENS</text>
              </svg>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">SIEMENS</span>
            </div>
            {/* ABB */}
            <div className="group cursor-pointer flex flex-col items-center gap-2">
              <svg className="w-16 h-10 filter grayscale opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" viewBox="0 0 160 100" fill="currentColor">
                <text x="80" y="58" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="32" fill="#ff0000" textAnchor="middle">ABB</text>
              </svg>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">ABB</span>
            </div>
            {/* Rittal */}
            <div className="group cursor-pointer flex flex-col items-center gap-2">
              <svg className="w-10 h-10 filter grayscale opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" viewBox="0 0 100 100" fill="currentColor">
                <rect x="10" y="10" width="80" height="80" fill="#e30613" rx="4" />
                <text x="50" y="58" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="white" textAnchor="middle">RITTAL</text>
              </svg>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">RITTAL</span>
            </div>
            {/* Schneider */}
            <div className="group cursor-pointer flex flex-col items-center gap-2">
              <svg className="w-16 h-10 filter grayscale opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" viewBox="0 0 160 100" fill="currentColor">
                <rect x="10" y="35" width="20" height="30" fill="#3dcd58" />
                <text x="95" y="55" fontFamily="sans-serif" fontWeight="bold" fontSize="13" fill="#3dcd58" textAnchor="middle">Schneider</text>
              </svg>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">SCHNEIDER</span>
            </div>
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
            className="fixed bottom-20 lg:bottom-6 left-1/2 -translate-x-1/2 z-[9970] bg-[#0F2B46] text-white px-6 py-4 rounded-3xl shadow-[0_20px_50px_rgba(15,43,70,0.4)] flex flex-col md:flex-row items-center gap-6 border border-white/10 max-w-2xl w-[90%] md:w-full"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                COMPARISON HUD
              </span>
              <span className="text-[11px] font-mono text-white/80">{comparedIds.length} of 3 selected</span>
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
            </div>

            <div className="flex gap-2 flex-shrink-0 ml-auto w-full md:w-auto">
              <button
                disabled={comparedIds.length < 2}
                onClick={() => setShowComparisonModal(true)}
                className="flex-1 md:flex-none px-5 py-2.5 bg-white text-[#0F2B46] hover:bg-[#E6F1F5] font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all disabled:opacity-40 cursor-pointer"
              >
                Compare Specs
              </button>
              <button
                onClick={() => setComparedIds([])}
                className="px-3.5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[10px] font-mono uppercase cursor-pointer"
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
                  className="p-2 border border-slate-100 rounded-full hover:bg-slate-50 transition-colors text-[#0F2B46]"
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
                  className="px-6 py-3 bg-[#0F2B46] hover:bg-[#1D6FA3] text-white font-mono text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer"
                >
                  Close Overlay
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── QUICK VIEW SPECS DETAIL MODAL ── */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickViewProduct(null)}
            className="fixed inset-0 z-[9995] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 border-b flex justify-between items-start" style={{ borderColor: C.borderLight }}>
                <div>
                  <span className="font-mono text-[9px] text-[#1D6FA3] uppercase font-bold tracking-widest block">Quick Specifications Sheet</span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0F2B46] mt-1 font-sans">{quickViewProduct.name}</h3>
                  <span className="font-mono text-[10px] text-slate-400 block mt-0.5">CODE: {quickViewProduct.code}</span>
                </div>
                <button
                  onClick={() => setQuickViewProduct(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-6 overflow-y-auto flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side: Image and details */}
                <div className="flex flex-col gap-6">
                  <div className="aspect-square bg-gradient-to-tr from-slate-100/50 to-white border border-[#0F2B46]/5 rounded-2xl flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent)] pointer-events-none" />
                    <img
                      src={quickViewProduct.images[0]}
                      alt={quickViewProduct.name}
                      className="max-h-[180px] object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider font-bold block mb-2">OEM Compatibility</span>
                    <div className="flex flex-wrap gap-1.5">
                      {quickViewProduct.compatibility.map(oem => (
                        <span key={oem} className="text-[10px] font-mono bg-white border border-slate-200 rounded-md px-2 py-0.5 text-slate-600">
                          {oem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Key parameter specs */}
                <div className="flex flex-col gap-5 justify-between">
                  <div>
                    <h4 className="font-mono text-[10px] text-[#B8955A] uppercase tracking-wider font-bold mb-3">Technical Attributes</h4>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span className="text-xs text-slate-400 font-mono">Category</span>
                        <span className="text-xs text-[#0F2B46] font-bold">{quickViewProduct.category}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span className="text-xs text-slate-400 font-mono">Power Logic</span>
                        <span className="text-xs text-[#0F2B46] font-bold">{quickViewProduct.voltage}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span className="text-xs text-slate-400 font-mono">Grade</span>
                        <span className="text-xs text-[#0F2B46] font-bold">{quickViewProduct.oemGrade}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span className="text-xs text-slate-400 font-mono">Warranty</span>
                        <span className="text-xs text-[#0F2B46] font-bold">{quickViewProduct.warranty}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span className="text-xs text-slate-400 font-mono">Status</span>
                        <span className="text-xs text-emerald-600 font-bold">{quickViewProduct.availability}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mt-4">
                      {quickViewProduct.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/products/${quickViewProduct.id}`}
                      className="w-full py-3 bg-[#0F2B46] hover:bg-[#1D6FA3] text-white rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Full Technical Profile</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <button
                      onClick={() => {
                        setQuickViewProduct(null);
                        setIsSupportOpen(true);
                      }}
                      className="w-full py-3 border border-[#0F2B46]/10 hover:bg-slate-50 text-[#0F2B46] rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare size={14} />
                      <span>Inquire Specifications</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── APPLE STYLE BOTTOM SHEET FILTER DRAWER (MOBILE VIEWPORT ONLY) ── */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            {/* Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 z-[9990] bg-slate-900/60 backdrop-blur-md lg:hidden"
            />
            {/* Sliding Panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed bottom-0 left-0 right-0 z-[9991] bg-white rounded-t-[32px] p-6 shadow-2xl max-h-[85vh] overflow-y-auto lg:hidden flex flex-col border-t border-slate-100"
            >
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-lg text-[#0F2B46] font-sans">Filter Inventory</h3>
                  <p className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                    {activeFilterCount} Active Parameters
                  </p>
                </div>
                <button 
                  onClick={() => setIsMobileFilterOpen(false)} 
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-700"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Filter Categories */}
              <div className="mb-6">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block mb-3 font-bold">Category</span>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="flex items-center gap-3 text-left text-xs py-3.5 px-4 rounded-xl border transition-all"
                      style={{
                        borderColor: selectedCategory === cat ? C.blue : 'rgba(15,43,70,0.06)',
                        background: selectedCategory === cat ? `${C.blue}08` : 'transparent',
                        color: selectedCategory === cat ? C.blue : C.slate,
                        fontWeight: selectedCategory === cat ? 'bold' : 'normal'
                      }}
                    >
                      {getCategoryIcon(cat)}
                      <span>{cat === 'All' ? 'All Categories' : cat}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* OEM Compatibility */}
              <div className="mb-6">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block mb-3 font-bold">OEM Compatibility</span>
                <div className="grid grid-cols-2 gap-2">
                  {brands.map(br => (
                    <button
                      key={br}
                      onClick={() => setSelectedBrand(br)}
                      className="py-3 px-3 border rounded-xl text-center text-xs transition-all font-semibold"
                      style={{
                        borderColor: selectedBrand === br ? C.blue : 'rgba(15,43,70,0.06)',
                        background: selectedBrand === br ? `${C.blue}08` : 'transparent',
                        color: selectedBrand === br ? C.blue : C.slate
                      }}
                    >
                      {br === 'All' ? 'All OEMs' : br}
                    </button>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block mb-3 font-bold">Applications</span>
                <div className="flex flex-wrap gap-2">
                  {applications.map(app => (
                    <button
                      key={app}
                      onClick={() => setSelectedApplication(app)}
                      className="flex items-center gap-1.5 text-xs py-2 px-3.5 border rounded-full transition-all font-semibold"
                      style={{
                        borderColor: selectedApplication === app ? C.teal : 'rgba(15,43,70,0.06)',
                        background: selectedApplication === app ? `${C.teal}08` : 'transparent',
                        color: selectedApplication === app ? C.teal : C.slate
                      }}
                    >
                      {getApplicationIcon(app)}
                      <span>{app}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="border-t pt-4 flex gap-3 bg-white sticky bottom-0 left-0 right-0">
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                    setSelectedApplication('All');
                    setSearchTerm('');
                  }}
                  className="flex-1 py-4 border border-dashed rounded-xl text-xs font-mono uppercase text-slate-400 font-bold"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-[2] py-4 bg-[#0F2B46] text-white rounded-xl text-xs font-mono uppercase tracking-widest font-bold"
                >
                  Show {filteredProducts.length} Systems
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── DESKTOP FLOATING SUPPORT WIDGET (Bottom Right Corner) ── */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-[9980] flex-col items-end gap-3">
        <AnimatePresence>
          {isSupportOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="flex flex-col gap-2.5 bg-white border border-[#0F2B46]/10 p-4 rounded-2xl shadow-2xl min-w-[220px]"
            >
              <div className="font-mono text-[9px] text-[#0F2B46]/40 uppercase tracking-widest font-bold px-2 mb-1">
                Consultation & SLA Channels
              </div>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 px-3 py-2 text-xs text-[#0F2B46] hover:bg-slate-50 rounded-xl transition-colors font-semibold"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} />
                </div>
                <span>Talk to an Engineer</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 text-xs text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors font-semibold"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={14} />
                </div>
                <span>WhatsApp Support</span>
              </a>
              <button
                onClick={() => {
                  setShowFinder(true);
                  setIsSupportOpen(false);
                  const target = document.getElementById('catalog-grid-section');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-3 px-3 py-2 text-xs text-[#B8955A] hover:bg-amber-50 rounded-xl transition-colors font-semibold text-left w-full cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#B8955A] flex items-center justify-center flex-shrink-0">
                  <FileText size={14} />
                </div>
                <span>Book Consultation</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsSupportOpen(!isSupportOpen)}
          className="w-14 h-14 bg-[#0F2B46] text-white hover:bg-[#1D6FA3] rounded-full shadow-xl flex items-center justify-center transition-all duration-300 relative group cursor-pointer"
        >
          <span className="absolute inset-0 rounded-full bg-[#0F2B46]/20 animate-ping group-hover:bg-[#1D6FA3]/20" />
          <MessageSquare size={20} className={`absolute transition-transform duration-300 ${isSupportOpen ? 'scale-0 rotate-90' : 'scale-100'}`} />
          <X size={20} className={`absolute transition-transform duration-300 ${isSupportOpen ? 'scale-100' : 'scale-0 -rotate-90'}`} />
        </button>
      </div>

      {/* ── MOBILE BOTTOM STICKY DOCK (Always visible at the absolute bottom of the screen) ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9985] bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] px-4 py-3 flex gap-2">
        <a
          href="tel:+919876543210"
          className="flex-1 py-3 bg-[#0F2B46] text-white rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 min-h-[48px] touch-manipulation active:bg-[#1D6FA3] transition-colors"
        >
          <Phone size={14} /> 
          <span>Call</span>
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 min-h-[48px] touch-manipulation active:bg-emerald-700 transition-colors"
        >
          <MessageSquare size={14} /> 
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => {
            setShowFinder(true);
            const target = document.getElementById('catalog-grid-section');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex-1 py-3 bg-[#B8955A] text-white rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 min-h-[48px] touch-manipulation active:bg-amber-600 transition-colors"
        >
          <FileText size={14} /> 
          <span>Quote</span>
        </button>
      </div>

    </div>
  );
}
