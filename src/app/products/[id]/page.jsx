'use client';

import React, { use, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from '../../../lib/gsap';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Download, FileText,
  CheckCircle2, ShieldCheck, Clock, Settings, User, Building, Send, ChevronRight, Home
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
  borderLight:   'rgba(15,43,70,0.06)',
  borderStrong:  'rgba(15,43,70,0.12)',
};

// ══════════════════════════════════════════════════════════════════
// DETAILED PRODUCT CORES DATA (10 DENSE SECTIONS EACH)
// ══════════════════════════════════════════════════════════════════
const DETAILED_PRODUCTS = {
  'hvac-pcb-100': {
    id: 'hvac-pcb-100',
    code: 'Z-PCB-H100',
    name: 'Inverter VRF Controller Board',
    category: 'Electronic Components',
    compatibleBrands: 'Daikin • LG • Carrier • Mitsubishi',
    statusBadge: 'OEM Certified',
    accentColor: '#1D6FA3',
    bgSection: '#E6F1F5',
    images: [
      '/hvac_pcb_front.png',
      '/hvac_pcb_perspective.png',
      '/hvac_pcb_macro.png',
      '/hvac_pcb_installed.png',
      '/hvac_pcb_technician.png',
      '/hvac_pcb_exploded.png',
    ],
    imageLabels: [
      '01 // Front View Layout',
      '02 // 45° Component Perspective',
      '03 // Macro Microprocessor Close-up',
      '04 // Installed HVAC Control Cabinet',
      '05 // Active Engineering Calibration',
      '06 // Exploded Layer CAD Schema'
    ],
    sections: [
      {
        num: '01',
        title: 'System Overview',
        label: 'Core Inverter Module',
        desc: 'The master inverter controller board for high-capacity VRF systems. Engineered to coordinate active compressor frequency scaling and electronic expansion valve throttling.',
        benefits: ['Active frequency scaling', 'Soft-start logic controls', 'BMS building network ready'],
        specs: { 'Voltage': '380V - 415V AC', 'PCB Type': 'FR-4 High-TG', 'Cooling Capacity': '10-25 kW', 'Warranty': '36 Months' },
        techNotes: 'Active PID algorithms match real-time discharge temperature parameters to prevent cycling stress.'
      },
      {
        num: '02',
        title: 'Key Benefits',
        label: 'Thermodynamic Efficiencies',
        desc: 'Maintains flat system temperatures while reducing peak cycling stress, saving up to 34% power draw under severe ambient loads.',
        benefits: ['Soft-start current drop', 'Eliminates peak current spike', 'Low vibration startup loop'],
        specs: { 'Starting Amp': 'Soft-start logic', 'Power factor': '> 0.96', 'THD Level': '< 5%', 'Response Delay': '< 200ms' },
        techNotes: 'Smooth frequency throttling keeps coil temperatures constant, extending compressor lifespan.'
      },
      {
        num: '03',
        title: 'Technical Specifications',
        label: 'Engineering Parametric Specs',
        desc: 'Built with heavy-duty components designed for fluctuating voltages and extreme ambient parameters.',
        benefits: ['6-layer glass-epoxy layout', 'Conformal dust encapsulation', 'Surge defense up to 6kV'],
        specs: { 'Board Layering': '6 Layers', 'Conformal Seal': 'IP54 Class', 'Control Bus': 'Modbus RS485', 'Relay Load': '10A Resistive' },
        techNotes: '2oz copper traces optimize heat dissipation, reducing PCB local hot-spot temperatures.'
      },
      {
        num: '04',
        title: 'Compatible Brands',
        label: 'Universal Inverter Protocols',
        desc: 'Plug-and-play communication protocols matched with major OEM inverter compressors.',
        benefits: ['Auto-detects OEM protocol registers', 'Daikin VRV series compatible', 'LG Multi V integration ready'],
        specs: { 'Daikin VRV': 'Supported', 'LG Multi V': 'Supported', 'Mitsubishi City': 'Supported', 'Carrier Super X': 'Supported' },
        techNotes: 'Supports standard RTU RS485 communication protocols with standard baud rates.'
      },
      {
        num: '05',
        title: 'Request Quote',
        label: 'OEM Purchasing',
        desc: 'Submit your delivery times and bulk quantity needs for instant pricing schematics from our support desk.',
        benefits: ['Pan India express delivery', 'Authorized bulk packaging', 'Corporate accounts support'],
        specs: { 'Min Order Qty': '1 Unit', 'Lead Time': 'Immediate (In-stock)', 'Custom packaging': 'Available', 'Bulk Discounts': 'Yes, contact desk' },
        techNotes: 'Official Authorized OEM partner. ISO 9001:2015 certified assembly lines.',
        isQuoteForm: true
      }
    ]
  },
  'chiller-w50': {
    id: 'chiller-w50',
    code: 'CH-W50',
    name: 'Industrial Process Liquid Chiller',
    category: 'Water Cooling Systems',
    compatibleBrands: 'Carrier • Trane • York • Daikin',
    statusBadge: 'OEM Grade',
    accentColor: '#0EA6A6',
    bgSection: '#E2ECE9',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091870621-e0c2ca54199c?q=80&w=1200&auto=format&fit=crop',
    ],
    imageLabels: [
      '01 // Front Loop Layout',
      '02 // Evaporator Assembly',
      '03 // Control Interface Panel',
      '04 // Water Piping Inlets',
      '05 // Dynamic Load Testing',
      '06 // Shell and Tube Diagram'
    ],
    sections: [
      {
        num: '01',
        title: 'System Overview',
        label: 'Process Water Chiller',
        desc: 'Engineered for process cooling in automated factories, medical imaging centers, and chemical reactors. Features scroll compressor array and shell-and-tube heat exchanger.',
        benefits: ['Dual refrigerant circuits', 'Hermetic scroll compressors', 'Electronic expansion valves'],
        specs: { 'Cooling Capacity': '50 kW Nominal', 'Refrigerant': 'R410A Eco', 'Water Flow': '8.6 m³/h', 'Evaporator': 'Shell & Tube' },
        techNotes: 'Shell-and-tube condenser configuration reduces fouling risk, scaling maintenance parameters.'
      },
      {
        num: '02',
        title: 'Key Benefits',
        label: 'Thermodynamic Efficiencies',
        desc: 'Maintains flat system temperatures while reducing peak cycling stress, saving up to 30% power draw.',
        benefits: ['High COP ratings above 4.2', 'Intelligent compressor modulation', 'Extends mechanical life cycles'],
        specs: { 'Starting Amp': 'Soft-start logic', 'COP Rating': '4.2 Nominal', 'THD Level': '< 5%', 'Response Delay': '< 200ms' },
        techNotes: 'Intelligent microprocessor coordinates active scroll staging to scale energy parameters.'
      },
      {
        num: '03',
        title: 'Technical Specifications',
        label: 'Evaporator Core Parametrics',
        desc: 'Built with titanium plates and inner-grooved copper tube circuits for aggressive chemical process loops.',
        benefits: ['Corrosion protection coating', 'Brazed plate exchangers', 'Ingress seal box rating IP55'],
        specs: { 'Exchanger Plates': 'Titanium Plate', 'Ingress Seal': 'IP55 Box', 'Control Bus': 'Modbus RTU RS485', 'Relay Load': '10A Resistive' },
        techNotes: 'High-density mineral insulation shields cold evaporator lines, eliminating pipe sweat.'
      },
      {
        num: '04',
        title: 'Compatible Brands',
        label: 'Universal System Coupling',
        desc: 'Standard water inlet/outlet flanges align with major chiller loops and cooling tower circuits.',
        benefits: ['Carrier loops', 'Trane cooling setups', 'York chiller circuits', 'Daikin commercial plants'],
        specs: { 'Carrier': 'Supported', 'Trane': 'Supported', 'York': 'Supported', 'Daikin': 'Supported' },
        techNotes: 'Modbus RS485 registers address mapping integrates directly with standard building management systems.'
      },
      {
        num: '05',
        title: 'Request Quote',
        label: 'OEM Purchasing',
        desc: 'Submit your delivery times and bulk quantity needs for instant pricing schematics from our support desk.',
        benefits: ['Pan India express delivery', 'Authorized bulk packaging', 'Corporate accounts support'],
        specs: { 'Min Order Qty': '1 Unit', 'Lead Time': 'Immediate (In-stock)', 'Custom packaging': 'Available', 'Bulk Discounts': 'Yes, contact desk' },
        techNotes: 'Official Authorized OEM partner. ISO 9001:2015 certified assembly lines.',
        isQuoteForm: true
      }
    ]
  },
  'panel-pex15': {
    id: 'panel-pex15',
    code: 'PEX-P15',
    name: 'Cabinet Panel Heat Exchanger',
    category: 'Panel Cooling Systems',
    compatibleBrands: 'Rittal • Siemens • ABB • Schneider',
    statusBadge: 'Industrial Grade',
    accentColor: '#1D6FA3',
    bgSection: '#EAEDF1',
    images: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091870621-e0c2ca54199c?q=80&w=1200&auto=format&fit=crop',
    ],
    imageLabels: [
      '01 // Front Exchanger View',
      '02 // NEMA Enclosure Seal',
      '03 // Side-Mount Cutout Grid',
      '04 // Evaporator Loop Fan',
      '05 // High-Temperature Testing',
      '06 // Sealed Loop Exploded CAD'
    ],
    sections: [
      {
        num: '01',
        title: 'System Overview',
        label: 'Cabinet Heat Exchanger',
        desc: 'A sealed closed-loop air-to-air heat exchanger designed to protect cabinet automation components from dust, chemical vapors, and thermal failure.',
        benefits: ['Dust-free cooling cycles', 'Side mount installations', 'BMS Modbus integration card'],
        specs: { 'Heat Extraction': '1500 W', 'Ingress Seal': 'IP55 Sealed', 'Airflow Rate': '450 m³/h', 'Voltage': '220V - 240V' },
        techNotes: 'Closed-loop cycle design completely seals electrical components from corrosive factory ambient air.'
      },
      {
        num: '02',
        title: 'Key Benefits',
        label: 'Thermal Safeguard',
        desc: 'Guarantees continuous NEMA 4/12 ratings of the electrical cabinet under high-heat operations.',
        benefits: ['Protects logical PLCs from warping', 'Maintains IP55 air tightness', 'Prevents chemical vapor ingress'],
        specs: { 'Starting Amp': 'Soft-start logic', 'COP Rating': '3.2 Nominal', 'THD Level': '< 5%', 'Response Delay': '< 200ms' },
        techNotes: 'Maintains NEMA 12 parameters for factory floor panels, preventing electrostatic shorts.'
      },
      {
        num: '03',
        title: 'Technical Specifications',
        label: 'Ingress Defense Parametrics',
        desc: 'Constructed with double centrifugal fans and polyurethane seal gaskets for maximum ingress protection.',
        benefits: ['Centrifugal fan arrays', 'Polyurethane seal gaskets', 'Modbus RS485 address codes'],
        specs: { 'Heat Extraction': '1500 W', 'Ingress Seal': 'IP54 Class', 'Control Bus': 'Modbus RS485', 'Airflow Rate': '450 m³/h' },
        techNotes: 'Dual high-velocity fan modules circulate internal cabinet air across the aluminum fins.'
      },
      {
        num: '04',
        title: 'Compatible Brands',
        label: 'Cabinet Cutout Patterns',
        desc: 'Mounting cutout dimension patterns align with standard industrial electrical enclosures.',
        benefits: ['Rittal TS8 cabinet frames', 'Siemens SIVACON panels', 'ABB ArTu Cabinets', 'Schneider Spacial Enclosures'],
        specs: { 'Rittal': 'Supported', 'Siemens': 'Supported', 'ABB': 'Supported', 'Schneider': 'Supported' },
        techNotes: 'Pluggable spring-clamp wiring blocks reduce service times by 40%.'
      },
      {
        num: '05',
        title: 'Request Quote',
        label: 'OEM Purchasing',
        desc: 'Submit your delivery times and bulk quantity needs for instant pricing schematics from our support desk.',
        benefits: ['Pan India express delivery', 'Authorized bulk packaging', 'Corporate accounts support'],
        specs: { 'Min Order Qty': '1 Unit', 'Lead Time': 'Immediate (In-stock)', 'Custom packaging': 'Available', 'Bulk Discounts': 'Yes, contact desk' },
        techNotes: 'Official Authorized OEM partner. ISO 9001:2015 certified assembly lines.',
        isQuoteForm: true
      }
    ]
  }
};

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  
  // Load data or fallback to core PCB
  const product = DETAILED_PRODUCTS[productId] || DETAILED_PRODUCTS['hvac-pcb-100'];

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  const containerRef = useRef(null);
  const rightWrapperRef = useRef(null);
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop Pin scroll trigger
  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    const rightWrapper = rightWrapperRef.current;
    if (!container || !rightWrapper) return;

    const ctx = gsap.context(() => {
      const scrollDistance = rightWrapper.scrollHeight - window.innerHeight;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${rightWrapper.scrollHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * product.sections.length),
              product.sections.length - 1
            );
            setActiveSectionIndex(index);
          }
        }
      });

      tl.to(rightWrapper, {
        y: -scrollDistance,
        ease: 'none'
      });
    }, container);

    return () => ctx.revert();
  }, [isDesktop, product.sections.length]);

  // Mobile Intersection Observer for active card tracking
  useEffect(() => {
    if (isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveSectionIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0.1
      }
    );

    mobileCardsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isDesktop]);

  // Map 5 sections to 5 unique product images
  const getImageIndex = (sectionIdx) => {
    const map = [0, 1, 2, 3, 5];
    return map[sectionIdx] !== undefined ? map[sectionIdx] : 0;
  };

  const activeImage = getImageIndex(activeSectionIndex);
  const displayImageIndex = isDesktop ? activeImage : activeThumbnail;

  return (
    <div className="w-full overflow-x-hidden min-h-screen" style={{ background: product.bgSection }}>
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-8 pb-4 flex items-center justify-between font-mono text-[10px] text-slate-400 tracking-wider">
        <div className="flex items-center gap-2">
          <Link href="/products" className="hover:text-[#1D6FA3] flex items-center gap-1">
            <ArrowLeft size={10} /> CATALOG
          </Link>
          <ChevronRight size={10} />
          <span className="text-[#0F2B46] font-bold">{product.code}</span>
        </div>
        <span className="text-slate-400 font-bold uppercase">Z-COOL PRE-COMMISSION SYSTEM</span>
      </div>

      {/* DESKTOP VIEW */}
      {isDesktop ? (
        <section ref={containerRef} className="relative w-full overflow-hidden border-t" style={{ borderColor: C.borderLight }}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-12 gap-12 h-screen items-center relative">
            
            {/* LEFT SIDE (45%): Sticky Header, Image Frame, Captions */}
            <div className="col-span-5 h-[85vh] flex flex-col justify-between py-6 z-10">
              
              {/* PREMIUM PRODUCT HEADER (Visible during scroll) */}
              <div className="border-b pb-5" style={{ borderColor: C.borderStrong }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#1D6FA3] bg-[#1D6FA3]/10 px-2.5 py-0.5 rounded-full font-bold">
                    {product.category}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-bold">
                    {product.statusBadge}
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2B46] mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {product.name}
                </h2>
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
                  <span>CODE: {product.code}</span>
                  <span className="text-[#0EA6A6]">{product.compatibleBrands}</span>
                </div>
              </div>

              {/* Image box */}
              <div className="relative w-full aspect-[4/3] rounded-[24px] bg-white border border-[#0F2B46]/5 shadow-lg flex items-center justify-center p-8 overflow-hidden my-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={displayImageIndex}
                    initial={{ opacity: 0, scale: 1.04, y: 10 }}
                    animate={{ opacity: 1, scale: 1.0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={product.images[displayImageIndex]}
                      alt={`${product.name} detailed view`}
                      className="w-full h-full object-contain"
                      style={{ filter: 'brightness(1.02) saturate(0.8)' }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Captions and Indexes */}
              <div className="flex justify-between items-center text-xs font-mono text-slate-500 border-t pt-4" style={{ borderColor: C.borderStrong }}>
                <span className="uppercase tracking-widest">
                  {product.imageLabels[displayImageIndex]}
                </span>
                <span className="font-bold text-slate-700">
                  View 0{displayImageIndex + 1} / 06
                </span>
              </div>

            </div>

            {/* RIGHT SIDE (55%): Fixed Timeline HUD & Dense Cards Panel */}
            <div className="col-span-7 h-full flex items-center relative pl-8 overflow-hidden">
              
              {/* PROGRESS TIMELINE (Fixed HUD indicator) */}
              <div className="relative flex flex-col items-center justify-between h-[65vh] mr-12 w-8 flex-shrink-0 z-10">
                
                {/* Connecting progress line */}
                <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 z-0">
                  <div
                    className="w-full bg-[#1D6FA3] transition-all duration-300"
                    style={{ height: `${(activeSectionIndex / (product.sections.length - 1)) * 100}%` }}
                  />
                </div>

                {product.sections.map((sec, idx) => {
                  const isActive = activeSectionIndex === idx;
                  const isFinished = idx < activeSectionIndex;
                  
                  return (
                    <button
                      key={sec.num}
                      onClick={() => {
                        const wrapper = rightWrapperRef.current;
                        if (wrapper) {
                          const targetScroll = (wrapper.scrollHeight / product.sections.length) * idx;
                          gsap.to(window, { scrollTo: { y: containerRef.current.offsetTop + targetScroll }, duration: 0.8 });
                        }
                      }}
                      className={`w-8 h-8 rounded-full border-2 font-mono text-[10px] font-bold flex items-center justify-center transition-all duration-500 z-10 ${
                        isActive
                          ? 'bg-[#1D6FA3] border-[#1D6FA3] text-white shadow-[0_0_15px_rgba(29,111,163,0.5)] scale-110'
                          : isFinished
                          ? 'bg-[#1D6FA3] border-[#1D6FA3] text-white'
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      {sec.num}
                    </button>
                  );
                })}
              </div>

              {/* Scrolling wrapper driven by GSAP timeline */}
              <div className="flex-grow h-screen overflow-hidden flex items-start relative">
                <div
                  ref={rightWrapperRef}
                  className="w-full flex flex-col gap-12 py-[40vh]"
                >
                  {product.sections.map((sec, idx) => {
                    const isActive = activeSectionIndex === idx;
                    
                    return (
                      <div
                        key={sec.num}
                        className="rounded-[28px] bg-white border transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
                        style={{
                          borderColor: isActive ? product.accentColor : C.borderLight,
                          boxShadow: isActive ? '0 30px 80px rgba(15,43,70,0.14)' : '0 4px 15px rgba(0,0,0,0.01)',
                          opacity: isActive ? 1.0 : 0.70,
                          transform: isActive ? 'scale(1.03)' : 'scale(0.97)',
                          filter: isActive ? 'none' : 'blur(0.6px)'
                        }}
                      >
                        
                        {isActive && (
                          <div
                            className="absolute left-0 top-0 h-full w-[4px]"
                            style={{ background: product.accentColor }}
                          />
                        )}

                        {/* Card Header */}
                        <div className="p-8 pb-5 border-b" style={{ borderColor: C.borderLight }}>
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-xs font-bold text-slate-400">SECTION {sec.num}</span>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#0EA6A6] font-bold bg-[#0EA6A6]/5 px-2 py-0.5 rounded">{sec.label}</span>
                          </div>
                          <h3 className="text-xl font-bold" style={{ color: C.navy }}>
                            {sec.title}
                          </h3>
                        </div>

                        {/* Card Specifications Body */}
                        <div className="p-8 flex flex-col gap-5 bg-slate-50/30">
                          <div>
                            <p className="text-xs text-slate-600 leading-relaxed font-light">{sec.desc}</p>
                          </div>

                          {/* 2. Key Benefits */}
                          {sec.benefits && (
                            <div className="border-t pt-4" style={{ borderColor: C.borderLight }}>
                              <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2 font-bold">Key Benefits</div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {sec.benefits.map(b => (
                                  <span key={b} className="flex items-center gap-1.5 text-[10px] text-slate-700 font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                                    {b}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 3. Quick Specs Grid */}
                          {sec.specs && (
                            <div className="border-t pt-4" style={{ borderColor: C.borderLight }}>
                              <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2.5 font-bold">Quick Specs Parameters</div>
                              <div className="grid grid-cols-2 gap-3">
                                {Object.entries(sec.specs).map(([key, val]) => (
                                  <div key={key} className="bg-white border rounded-lg p-2 flex flex-col" style={{ borderColor: C.borderStrong }}>
                                    <span className="text-[7px] uppercase font-mono text-slate-400">{key}</span>
                                    <span className="text-[10px] font-bold text-[#0F2B46] truncate mt-0.5">{val}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Technical Notes Footer */}
                        <div className="p-8 pt-5 border-t bg-slate-50/60" style={{ borderColor: C.borderLight }}>
                          <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-1 font-bold">Technical Engineering Notes</div>
                          <p className="text-[10px] font-mono text-slate-500 leading-relaxed font-light font-bold">
                            {sec.techNotes}
                          </p>

                          {sec.isDownloads && (
                            <div className="flex gap-3.5 mt-5">
                              <Link href="#" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 border rounded-xl text-[10px] font-mono uppercase font-bold text-slate-700 bg-white hover:bg-slate-50" style={{ borderColor: C.borderStrong }}>
                                <Download size={12} /> Dimensions DWG
                              </Link>
                              <Link href="#" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 border rounded-xl text-[10px] font-mono uppercase font-bold text-slate-700 bg-white hover:bg-slate-50" style={{ borderColor: C.borderStrong }}>
                                <Download size={12} /> Registers PDF
                              </Link>
                            </div>
                          )}

                          {sec.isQuoteForm && (
                            <div className="mt-5">
                              <Link href="/contact" className="w-full flex items-center justify-center gap-1.5 py-4 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-600">
                                Dispatch Procurement Request <ArrowUpRight size={13} />
                              </Link>
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </section>
      ) : (
        /* MOBILE EXPERIENCE LAYOUT (NO PINNING REUSE) */
        <div className="flex flex-col relative min-h-screen">
          
          {/* Sticky Top Mobile Pinned Frame */}
          <div className="sticky top-[80px] z-30 w-full bg-white border-b flex flex-col justify-between p-5 shadow-sm" style={{ height: '32vh' }}>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[8px] tracking-widest uppercase font-bold text-[#1D6FA3]">
                  {product.code} • {product.category}
                </span>
                <h3 className="text-lg font-bold text-[#0F2B46] mt-0.5 leading-snug">{product.name}</h3>
              </div>
              <span className="font-mono text-[8px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded font-bold uppercase">
                {product.statusBadge}
              </span>
            </div>

            {/* Contained image preview */}
            <div className="flex-grow flex items-center justify-center max-h-[16vh] my-1">
              <img
                src={product.images[activeImage]}
                alt="HVAC product view"
                className="h-full object-contain max-h-[15vh]"
              />
            </div>

            <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 border-t pt-2" style={{ borderColor: C.borderLight }}>
              <span>{product.imageLabels[activeImage]}</span>
              <span className="font-bold text-[#1D6FA3]">View 0{activeImage + 1} / 06</span>
            </div>
          </div>

          {/* Middle scrollable stacked cards panel */}
          <div className="px-5 py-8 flex flex-col gap-6">
            {product.sections.map((sec, idx) => {
              const isActive = activeSectionIndex === idx;
              
              return (
                <div
                  key={sec.num}
                  data-index={idx}
                  ref={el => mobileCardsRef.current[idx] = el}
                  className="p-6 rounded-2xl bg-white border transition-all duration-300 scroll-mt-[35vh]"
                  style={{
                    borderColor: isActive ? product.accentColor : C.borderLight,
                    boxShadow: isActive ? '0 15px 35px rgba(15,43,70,0.08)' : 'none',
                    opacity: isActive ? 1.0 : 0.70
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] text-[#0EA6A6] font-bold uppercase">{sec.label}</span>
                    <span className="font-mono text-xs text-slate-400">0{sec.num}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#0F2B46] mb-2">{sec.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">{sec.desc}</p>

                  {sec.benefits && (
                    <div className="border-t pt-3 mt-3" style={{ borderColor: C.borderLight }}>
                      <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2 font-bold">Benefits</div>
                      <div className="flex flex-col gap-1.5">
                        {sec.benefits.map(b => (
                          <span key={b} className="flex items-center gap-1.5 text-[9px] text-slate-600 font-mono">
                            <span className="w-1 h-1 rounded-full bg-[#0EA6A6]" />
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {sec.specs && (
                    <div className="border-t pt-3 mt-3" style={{ borderColor: C.borderLight }}>
                      <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2 font-bold">Specs</div>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(sec.specs).map(([key, val]) => (
                          <div key={key} className="bg-slate-50 border rounded-lg p-2 flex flex-col" style={{ borderColor: C.borderStrong }}>
                            <span className="text-[6px] uppercase font-mono text-slate-400">{key}</span>
                            <span className="text-[9px] font-bold text-[#0F2B46] truncate">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {sec.isDownloads && (
                    <div className="flex gap-2 mt-4 pt-3 border-t" style={{ borderColor: C.borderLight }}>
                      <Link href="#" className="flex-1 text-center py-2.5 border rounded-lg text-[9px] font-mono uppercase text-slate-700 bg-slate-50">
                        DWG CAD
                      </Link>
                      <Link href="#" className="flex-1 text-center py-2.5 border rounded-lg text-[9px] font-mono uppercase text-slate-700 bg-slate-50">
                        Manual
                      </Link>
                    </div>
                  )}

                  {sec.isQuoteForm && (
                    <div className="mt-4 pt-3 border-t" style={{ borderColor: C.borderLight }}>
                      <Link href="/contact" className="w-full text-center py-3 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-lg block">
                        Get Quote Pricing
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Pinned Mobile Dot Progress indicator */}
          <div className="sticky bottom-0 left-0 w-full z-[9990] bg-[#0F2B46] text-white p-3.5 flex justify-between items-center px-6 border-t border-white/10 shadow-lg">
            <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-bold">Story progress</span>
            <div className="flex gap-1.5">
              {product.sections.map((c, i) => (
                <div
                  key={c.num}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background: activeSectionIndex === i ? '#1D6FA3' : i < activeSectionIndex ? '#0EA6A6' : 'rgba(255,255,255,0.15)',
                    transform: activeSectionIndex === i ? 'scale(1.3)' : 'scale(1.0)'
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[9px] font-bold">0{activeSectionIndex + 1} / 10</span>
          </div>

        </div>
      )}

      {/* ── RELATED COMPATIBLE SYSTEM SOLUTIONS ── */}
      <section className="py-24" style={{ background: C.bgSage, borderTop: `1px solid ${C.borderLight}` }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="mb-14">
            <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">SYSTEM ACCESSORIES</span>
            <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
              Related System Components
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(DETAILED_PRODUCTS)
              .filter(item => item.id !== productId)
              .map(item => (
                <div
                  key={item.id}
                  className="group bg-white rounded-3xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  style={{ borderColor: C.borderLight }}
                >
                  <div>
                    <div className="p-6 bg-slate-50/50 flex items-center justify-center aspect-[4/3] border-b" style={{ borderColor: C.borderLight }}>
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500" />
                    </div>
                    <div className="p-8">
                      <span className="font-mono text-[9px] tracking-widest uppercase font-bold block mb-1 text-[#1D6FA3]">
                        CODE: {item.code}
                      </span>
                      <h3 className="text-lg font-bold text-[#0F2B46] mb-3 leading-snug">{item.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">{item.sections[0].desc}</p>
                    </div>
                  </div>
                  <div className="p-8 pt-0">
                    <Link
                      href={`/products/${item.id}`}
                      className="w-full py-3.5 bg-slate-100 hover:bg-[#1D6FA3] hover:text-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center block"
                    >
                      View Accessories
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}
