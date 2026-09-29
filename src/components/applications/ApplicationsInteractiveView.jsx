'use client';

import React, { useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Wind,
  Hotel,
  Snowflake,
  Factory,
  Wrench,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  AlertCircle,
  FileCheck,
  Camera,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Zap,
} from 'lucide-react';
import QuoteModal from '@/components/ui/QuoteModal';
import PhotoUpload from '@/components/ui/PhotoUpload';
import { resolveImageUrl } from '@/lib/api';

/* ─── Static Application Definitions with Verified Content ─── */
const APPLICATION_META = [
  {
    id: 'commercial-ac',
    num: '01',
    icon: Building2,
    title: 'Commercial Air Conditioning',
    subtitle: 'Package AC · Ductable Units · Chillers',
    description:
      'Commercial package AC, ductable split systems, and water-cooled chillers used in offices, shopping centres, and large-floor-plan commercial spaces commonly require 3-ton to 15-ton hermetic scroll compressors.',
    compressorTypes: ['Hermetic Scroll', 'Semi-Hermetic Scroll'],
    brands: ['Copeland', 'Daikin'],
    typicalBuyer: 'HVAC contractors, MEP consultants, facility management companies',
    filterHref: '/products?type=Scroll',
    categoryFilter: 'Scroll Compressors',
    preferredProductIds: ['copeland-zr72kc-tFD', 'daikin-jt160g-p8y1'],
  },
  {
    id: 'vrf-vrv',
    num: '02',
    icon: Wind,
    title: 'VRF / VRV Systems',
    subtitle: 'Variable Refrigerant Flow · Multi-Zone Outdoor Units',
    description:
      'VRF and VRV outdoor units use DC inverter scroll compressors to modulate refrigerant flow across multiple indoor fan coil units in office buildings, hotels, and multi-floor commercial fit-outs.',
    compressorTypes: ['DC Inverter Scroll', 'Hermetic Scroll'],
    brands: ['Daikin'],
    typicalBuyer: 'VRF service engineers, HVAC retrofit contractors, building management teams',
    filterHref: '/products?type=VRF',
    categoryFilter: 'VRF / VRV Compressors',
    preferredProductIds: ['daikin-vrv-inverter-jt300', 'daikin-jt160g-p8y1'],
    note: 'Inverter scroll compressors for VRF/VRV systems are model-specific. Verify the model number from your outdoor unit before ordering.',
  },
  {
    id: 'hotels',
    num: '03',
    icon: Hotel,
    title: 'Hotels & Hospitality',
    subtitle: 'Cassette AC · Low-Noise Split Units · 24/7 Comfort Cooling',
    description:
      'Hotel guest room AC and centralized hospitality cooling systems require low-vibration rotary and scroll compressors. Commercial cassette and tower AC units used in hospitality environments typically use single or twin-rotary compressors.',
    compressorTypes: ['Twin Rotary', 'Hermetic Scroll'],
    brands: ['LG', 'Copeland'],
    typicalBuyer: 'Hotel engineering departments, hospitality HVAC agencies, facilities contractors',
    filterHref: '/products?type=Rotary',
    categoryFilter: 'Rotary Compressors',
    preferredProductIds: ['lg-hq034p-rotary', 'copeland-zr72kc-tFD'],
  },
  {
    id: 'cold-storage',
    num: '04',
    icon: Snowflake,
    title: 'Cold Storage & Commercial Refrigeration',
    subtitle: 'Cold Rooms · Chillers · Frozen Storage Circuits',
    description:
      'Cold storage facilities, commercial refrigeration racks, and process chillers require compressors rated for medium and low-temperature evaporation. Reciprocating and specialized scroll compressors operating on R404A or R22 are standard in this category.',
    compressorTypes: ['Reciprocating', 'Hermetic Scroll'],
    brands: ['Danfoss', 'Copeland'],
    typicalBuyer: 'Refrigeration contractors, cold store operators, food processing engineers',
    filterHref: '/products?type=Reciprocating',
    categoryFilter: 'Reciprocating Compressors',
    preferredProductIds: ['danfoss-maneurop-mtz64', 'copeland-discus-semihermetic'],
  },
  {
    id: 'industrial-cooling',
    num: '05',
    icon: Factory,
    title: 'Industrial Process Cooling',
    subtitle: 'Process Chillers · Factory Environment Cooling',
    description:
      'Manufacturing facilities and process cooling systems use heavy-duty scroll and reciprocating compressors running continuously under high thermal loads. Reliability and exact capacity matching are critical to prevent factory downtime.',
    compressorTypes: ['Hermetic Scroll', 'Reciprocating'],
    brands: ['Copeland', 'Danfoss'],
    typicalBuyer: 'Plant maintenance engineers, industrial HVAC service companies',
    filterHref: '/products',
    categoryFilter: 'Scroll Compressors',
    preferredProductIds: ['copeland-zr72kc-tFD', 'danfoss-maneurop-mtz64'],
  },
  {
    id: 'breakdown-replacement',
    num: '06',
    icon: Wrench,
    title: 'Emergency Service & Breakdown Replacements',
    subtitle: 'Fast Replacement Sourcing for Failed Compressors',
    description:
      'When an operational compressor fails in a commercial building or cold store, finding an immediate replacement model is time-critical. Zcool maintains a catalog of available units ready for model matching and quick dispatch.',
    compressorTypes: ['Scroll', 'Rotary', 'Reciprocating'],
    brands: ['Copeland', 'Daikin', 'LG', 'Danfoss'],
    typicalBuyer: 'AC service contractors, emergency repair technicians, facility managers',
    filterHref: '/products',
    categoryFilter: 'all',
    preferredProductIds: ['copeland-zr72kc-tFD', 'daikin-jt160g-p8y1', 'lg-hq034p-rotary', 'danfoss-maneurop-mtz64'],
  },
];

export default function ApplicationsInteractiveView({ products = [] }) {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [productIndices, setProductIndices] = useState({});
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState(null);
  const [nameplatePhoto, setNameplatePhoto] = useState(null);

  const selectorRef = useRef(null);
  const activeApp = APPLICATION_META[activeAppIndex] || APPLICATION_META[0];

  // Resolve matching products for each application using live products or fallback
  const appProducts = useMemo(() => {
    const map = {};
    APPLICATION_META.forEach((app, idx) => {
      let matched = [];
      // 1. Try matching preferred product IDs
      if (app.preferredProductIds?.length && products.length) {
        matched = products.filter((p) =>
          app.preferredProductIds.some(
            (id) => p.id?.toLowerCase() === id.toLowerCase() || p.code?.toLowerCase() === id.toLowerCase()
          )
        );
      }
      // 2. Fallback by category or application keyword if not enough
      if (matched.length === 0 && products.length) {
        if (app.categoryFilter && app.categoryFilter !== 'all') {
          matched = products.filter((p) => p.category === app.categoryFilter);
        } else {
          matched = products.slice(0, 3);
        }
      }
      // 3. Fallback to first few products if still empty
      if (matched.length === 0 && products.length) {
        matched = products.slice(0, 2);
      }
      map[idx] = matched;
    });
    return map;
  }, [products]);

  const currentMatchedProducts = appProducts[activeAppIndex] || [];
  const currentProductIndex = productIndices[activeAppIndex] || 0;
  const activeProduct = currentMatchedProducts[currentProductIndex] || currentMatchedProducts[0] || null;

  const handlePrevProduct = () => {
    if (!currentMatchedProducts.length) return;
    setProductIndices((prev) => ({
      ...prev,
      [activeAppIndex]: (currentProductIndex - 1 + currentMatchedProducts.length) % currentMatchedProducts.length,
    }));
  };

  const handleNextProduct = () => {
    if (!currentMatchedProducts.length) return;
    setProductIndices((prev) => ({
      ...prev,
      [activeAppIndex]: (currentProductIndex + 1) % currentMatchedProducts.length,
    }));
  };

  const scrollToSelector = () => {
    selectorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openQuoteForProduct = (prod) => {
    setSelectedProductForQuote(prod);
    setQuoteModalOpen(true);
  };

  const openGeneralQuote = () => {
    setSelectedProductForQuote(null);
    setQuoteModalOpen(true);
  };

  const ActiveAppIcon = activeApp.icon;

  return (
    <div className="bg-[#F8F9FA] text-[#0F172A] min-h-screen">

      {/* ── 1. APPLICATION HERO ── */}
      <section className="bg-[#0A192F] text-white pt-12 sm:pt-16 pb-14 sm:pb-20 border-b border-white/10 relative overflow-hidden engineering-grid-dark">
        {/* Subtle engineering lines background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0EA6A6]/40 to-transparent" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1D6FA3]/30 to-transparent" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#1D6FA3]/10 blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <Layers size={14} className="text-[#0EA6A6]" />
                <span>COMPRESSOR APPLICATIONS</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.12] tracking-tight">
                FIND THE RIGHT COMPRESSOR<br />
                <span className="text-[#0EA6A6]">FOR THE APPLICATION.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
                Different cooling systems require different compressor designs, motor ratings, and refrigerant compatibility. Explore verified compressor types mapped to real-world commercial HVAC, VRF, refrigeration, and industrial cooling applications.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <button
                  onClick={scrollToSelector}
                  className="px-6 sm:px-7 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>EXPLORE APPLICATIONS</span>
                  <ChevronRight size={15} />
                </button>
                <button
                  onClick={openGeneralQuote}
                  className="px-6 sm:px-7 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <FileCheck size={15} className="text-[#0EA6A6]" />
                  <span>REQUEST A QUOTE</span>
                </button>
              </div>

              {/* Verified application badges */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500 uppercase tracking-wider text-[11px]">COVERING:</span>
                <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 text-[11px]">Package AC</span>
                <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 text-[11px]">VRF/VRV</span>
                <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 text-[11px]">Cold Storage</span>
                <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 text-[11px]">Process Chillers</span>
              </div>
            </div>

            {/* Right Authentic Compressor Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-2xl group">
                <Image
                  src="/ac_compressor_3.png"
                  alt="Industrial AC compressor for commercial cooling applications"
                  width={460}
                  height={360}
                  priority
                  className="max-w-full max-h-full object-contain filter drop-shadow-[0_16px_28px_rgba(15,23,42,0.18)] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Industrial technical callouts */}
                <div className="absolute top-4 right-4 bg-[#0A192F] border border-white/15 px-3 py-1.5 rounded-lg flex items-center gap-2 text-white shadow-md">
                  <ShieldCheck size={14} className="text-[#0EA6A6]" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-slate-200">
                    PRESSURE TESTED
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#0A192F] border border-white/15 px-3 py-1.5 rounded-lg flex items-center gap-2 text-white shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#0EA6A6] animate-pulse" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-slate-300">
                    HERMETIC SCROLL · ROTARY · RECIP
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. INTERACTIVE APPLICATION SELECTOR & DISCOVERY STAGE ── */}
      <section
        id="application-selector"
        ref={selectorRef}
        className="py-10 sm:py-16 border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          
          {/* Section Anchor Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
                INTERACTIVE APPLICATION SELECTOR
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Select an Application to View Verified Units
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-500">
              6 CORE COMMERCIAL SECTORS · SOURCING &amp; DISPATCH
            </span>
          </div>

          {/* MOBILE TABS (Horizontal Swipe / Tap Bar) */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-2 min-w-max">
              {APPLICATION_META.map((app, idx) => {
                const isActive = idx === activeAppIndex;
                const Icon = app.icon;
                return (
                  <button
                    key={app.id}
                    onClick={() => {
                      setActiveAppIndex(idx);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg border font-mono text-xs font-bold uppercase transition-all ${
                      isActive
                        ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={isActive ? 'text-[#0EA6A6]' : 'text-slate-400'}>{app.num}</span>
                    <Icon size={14} className={isActive ? 'text-[#0EA6A6]' : 'text-slate-500'} />
                    <span className="whitespace-nowrap">{app.title.split('&')[0].trim()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DESKTOP SPLIT LAYOUT: Left Navigation | Right Active Application Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Vertical Navigation List (Sticky on desktop) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-2">
              <div className="p-2 bg-slate-100 rounded-xl border border-slate-200/80 space-y-1.5">
                {APPLICATION_META.map((app, idx) => {
                  const isActive = idx === activeAppIndex;
                  const Icon = app.icon;

                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveAppIndex(idx)}
                      className={`w-full text-left p-3.5 rounded-lg transition-all flex items-start gap-3.5 group relative cursor-pointer ${
                        isActive
                          ? 'bg-[#0A192F] text-white shadow-md'
                          : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/60'
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#0EA6A6] rounded-r" />
                      )}

                      <span
                        className={`font-mono text-base font-extrabold flex-shrink-0 transition-colors ${
                          isActive ? 'text-[#0EA6A6]' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      >
                        {app.num}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <Icon
                            size={16}
                            className={`flex-shrink-0 ${
                              isActive ? 'text-[#0EA6A6]' : 'text-[#1D6FA3]'
                            }`}
                          />
                          <h3
                            className={`font-display font-bold text-sm leading-snug truncate ${
                              isActive ? 'text-white' : 'text-[#0A192F]'
                            }`}
                          >
                            {app.title}
                          </h3>
                        </div>
                        <p
                          className={`font-mono text-[11px] truncate mt-1 ${
                            isActive ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {app.subtitle}
                        </p>
                      </div>

                      <ChevronRight
                        size={16}
                        className={`flex-shrink-0 mt-1 transition-transform ${
                          isActive
                            ? 'text-[#0EA6A6] translate-x-0.5'
                            : 'text-slate-300 group-hover:text-slate-500'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Technical Help Box in Left Nav */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  CANNOT FIND YOUR UNIT?
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Send your nameplate model code or unit photo to our technical desk for stock identification.
                </p>
                <button
                  onClick={openGeneralQuote}
                  className="font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>INQUIRE WITH PHOTO</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Active Application Experience + Dominant Large Product Visual */}
            <div className="lg:col-span-8">
              <div
                key={activeApp.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs animate-fadeIn transition-all"
              >
                
                {/* 1. Active Application Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                        APPLICATION {activeApp.num}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="font-mono text-xs text-slate-500 uppercase">
                        {activeApp.subtitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#0A192F] rounded-lg flex items-center justify-center text-[#0EA6A6] flex-shrink-0">
                        <ActiveAppIcon size={18} />
                      </div>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                        {activeApp.title}
                      </h2>
                    </div>
                  </div>

                  <Link
                    href={activeApp.filterHref}
                    className="font-mono text-xs font-bold text-[#1D6FA3] hover:text-[#165680] hover:underline flex items-center gap-1.5 flex-shrink-0 self-start sm:self-center"
                  >
                    <span>VIEW MATCHING INVENTORY</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>

                {/* 2. Application Description & Technical Parameters (Only Verified Data) */}
                <div className="space-y-5">
                  <p className="text-slate-700 text-sm font-sans leading-relaxed">
                    {activeApp.description}
                  </p>

                  {/* Model-specific advisory notice if applicable */}
                  {activeApp.note && (
                    <div className="flex items-start gap-2.5 p-3.5 bg-amber-50/80 border border-amber-200/90 rounded-lg text-amber-900 text-xs font-sans">
                      <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{activeApp.note}</span>
                    </div>
                  )}

                  {/* Verified parameters grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                      <span className="text-slate-400 text-[10px] block uppercase font-bold tracking-wider">
                        TYPICAL COMPRESSOR DESIGN
                      </span>
                      <span className="font-semibold text-slate-900 block mt-1">
                        {activeApp.compressorTypes.join(', ')}
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                      <span className="text-slate-400 text-[10px] block uppercase font-bold tracking-wider">
                        BRANDS CARRIED
                      </span>
                      <span className="font-semibold text-slate-900 block mt-1">
                        {activeApp.brands.join(', ')}
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                      <span className="text-slate-400 text-[10px] block uppercase font-bold tracking-wider">
                        TYPICAL BUYER
                      </span>
                      <span className="font-semibold text-slate-900 block mt-1 truncate" title={activeApp.typicalBuyer}>
                        {activeApp.typicalBuyer}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. LARGE PRODUCT VISUAL & APPLICATION -> PRODUCT RELATIONSHIP */}
                <div className="border border-slate-200 rounded-xl bg-slate-50/50 p-5 sm:p-6 space-y-5">
                  
                  {/* Top Bar of Active Product: Relationship & Prev/Next Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-3.5">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-[#1D6FA3] uppercase tracking-wider block">
                        SUITABLE INVENTORY MODEL
                      </span>
                      <span className="text-xs text-slate-600 font-sans">
                        Verified unit matching {activeApp.title} requirements
                      </span>
                    </div>

                    {currentMatchedProducts.length > 1 && (
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-500">
                          MODEL {currentProductIndex + 1} OF {currentMatchedProducts.length}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={handlePrevProduct}
                            aria-label="Previous relevant product"
                            className="w-8 h-8 rounded-md bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer transition-colors"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            onClick={handleNextProduct}
                            aria-label="Next relevant product"
                            className="w-8 h-8 rounded-md bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer transition-colors"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dominant Active Product Showcase */}
                  {activeProduct ? (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      
                      {/* Product Visual */}
                      <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-xl p-4 sm:p-6 flex items-center justify-center aspect-[4/3] relative overflow-hidden group">
                        <Image
                          src={resolveImageUrl(activeProduct.images?.[0])}
                          alt={activeProduct.name || 'Commercial Compressor'}
                          width={320}
                          height={240}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-2.5 left-2.5">
                          <span className="badge-industrial bg-[#0A192F] text-[#0EA6A6] text-[10px]">
                            {activeProduct.condition || activeProduct.statusBadge || 'Refurbished'}
                          </span>
                        </div>
                      </div>

                      {/* Product Specifications & Quick Action */}
                      <div className="md:col-span-7 space-y-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                              {activeProduct.brand}
                            </span>
                            {activeProduct.code && (
                              <>
                                <span className="text-slate-300">·</span>
                                <span className="font-mono text-xs text-slate-500">
                                  {activeProduct.code}
                                </span>
                              </>
                            )}
                          </div>
                          <h3 className="font-display font-extrabold text-xl text-[#0A192F] leading-snug">
                            {activeProduct.name}
                          </h3>
                        </div>

                        {/* Verified Specs Snapshot */}
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          {activeProduct.type && (
                            <div className="bg-white border border-slate-200 p-2 rounded">
                              <span className="text-[10px] text-slate-400 block uppercase">TYPE</span>
                              <span className="font-semibold text-slate-800 truncate block">
                                {activeProduct.type}
                              </span>
                            </div>
                          )}
                          {activeProduct.refrigerant && (
                            <div className="bg-white border border-slate-200 p-2 rounded">
                              <span className="text-[10px] text-slate-400 block uppercase">REFRIGERANT</span>
                              <span className="font-semibold text-slate-800 truncate block">
                                {activeProduct.refrigerant}
                              </span>
                            </div>
                          )}
                          {activeProduct.voltage && (
                            <div className="bg-white border border-slate-200 p-2 rounded">
                              <span className="text-[10px] text-slate-400 block uppercase">VOLTAGE</span>
                              <span className="font-semibold text-slate-800 truncate block">
                                {activeProduct.voltage}
                              </span>
                            </div>
                          )}
                          {activeProduct.specs?.electrical?.['Nominal HP'] && (
                            <div className="bg-white border border-slate-200 p-2 rounded">
                              <span className="text-[10px] text-slate-400 block uppercase">HORSEPOWER</span>
                              <span className="font-semibold text-slate-800 truncate block">
                                {activeProduct.specs.electrical['Nominal HP']}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2.5 pt-2">
                          <Link
                            href={`/products/${activeProduct.id}`}
                            className="px-4 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-[0.98]"
                          >
                            <span>VIEW PRODUCT</span>
                            <ArrowRight size={14} />
                          </Link>
                          <button
                            onClick={() => openQuoteForProduct(activeProduct)}
                            className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-white text-slate-800 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <FileCheck size={14} className="text-[#1D6FA3]" />
                            <span>REQUEST QUOTE</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  ) : (
                    <div className="p-8 text-center bg-white rounded-xl border border-slate-200 space-y-3">
                      <p className="text-xs font-mono text-slate-500">
                        Units for {activeApp.title} currently in refurbishment or available on direct sourcing inquiry.
                      </p>
                      <button
                        onClick={openGeneralQuote}
                        className="px-5 py-2.5 rounded-lg bg-[#1D6FA3] text-white font-mono text-xs font-bold uppercase"
                      >
                        REQUEST SOURCING
                      </button>
                    </div>
                  )}

                  {/* Multi-unit preview row if more models exist */}
                  {currentMatchedProducts.length > 1 && (
                    <div className="pt-2 border-t border-slate-200/80">
                      <div className="flex items-center justify-between text-xs font-mono mb-2 text-slate-500">
                        <span>AVAILABLE RELEVANT MODELS ({currentMatchedProducts.length})</span>
                        <Link href={activeApp.filterHref} className="text-[#1D6FA3] hover:underline flex items-center gap-1">
                          VIEW ALL <ChevronRight size={12} />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {currentMatchedProducts.map((p, pIdx) => (
                          <button
                            key={p.id || pIdx}
                            onClick={() =>
                              setProductIndices((prev) => ({ ...prev, [activeAppIndex]: pIdx }))
                            }
                            className={`p-2.5 rounded-lg border text-left font-mono transition-all cursor-pointer ${
                              pIdx === currentProductIndex
                                ? 'bg-white border-[#1D6FA3] shadow-xs ring-1 ring-[#1D6FA3]'
                                : 'bg-slate-100/80 border-slate-200 hover:bg-white'
                            }`}
                          >
                            <span className="text-[10px] text-slate-500 block truncate">{p.brand}</span>
                            <span className="text-xs font-bold text-slate-800 block truncate">{p.code || p.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* 4. Bottom Active App Footer Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Verified model matching for {activeApp.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={activeApp.filterHref}
                      className="font-mono font-bold text-[#1D6FA3] hover:underline flex items-center gap-1"
                    >
                      VIEW MATCHING COMPRESSORS <ChevronRight size={14} />
                    </Link>
                    <span className="text-slate-300">|</span>
                    <button
                      onClick={openGeneralQuote}
                      className="font-mono font-bold text-[#0A192F] hover:text-[#1D6FA3] hover:underline cursor-pointer"
                    >
                      REQUEST QUOTE
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. APPLICATION SUMMARY MATRIX ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
              APPLICATION SUMMARY MATRIX
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
              Which Application Are You Servicing?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
              Quick cross-reference mapping verified compressor types, primary brands, and target systems across all commercial categories.
            </p>
          </div>

          {/* Clean Visual Matrix Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0A192F] text-white font-mono uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">APPLICATION</th>
                    <th className="py-3.5 px-4">TYPICAL COMPRESSOR TYPE</th>
                    <th className="py-3.5 px-4">BRANDS CARRIED</th>
                    <th className="py-3.5 px-4 hidden md:table-cell">TARGET BUYER</th>
                    <th className="py-3.5 px-4 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-sans">
                  {APPLICATION_META.map((app, idx) => {
                    const isSelected = idx === activeAppIndex;
                    return (
                      <tr
                        key={app.id}
                        className={`transition-colors ${
                          isSelected ? 'bg-slate-50 font-medium' : 'hover:bg-slate-50/70'
                        }`}
                      >
                        <td className="py-4 px-4 sm:px-6">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-xs font-extrabold text-[#1D6FA3]">
                              {app.num}
                            </span>
                            <div>
                              <span className="font-display font-bold text-sm text-[#0A192F] block">
                                {app.title}
                              </span>
                              <span className="font-mono text-[10px] text-slate-500 block">
                                {app.subtitle}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-mono text-slate-700">
                          {app.compressorTypes.join(', ')}
                        </td>
                        <td className="py-4 px-4 font-mono text-slate-700">
                          {app.brands.join(', ')}
                        </td>
                        <td className="py-4 px-4 text-slate-600 hidden md:table-cell max-w-xs truncate">
                          {app.typicalBuyer}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => {
                              setActiveAppIndex(idx);
                              scrollToSelector();
                            }}
                            className="font-mono text-xs font-bold text-[#1D6FA3] hover:text-[#165680] hover:underline inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>EXPLORE</span>
                            <ChevronRight size={13} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TECHNICAL ENQUIRY & NAMEPLATE MATCHING BLOCK ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A192F] text-white border-b border-white/10 relative overflow-hidden engineering-grid-dark">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs font-bold text-[#0EA6A6] uppercase tracking-wider block">
                COMPRESSOR IDENTIFICATION DESK
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                NOT SURE WHICH COMPRESSOR FITS YOUR REQUIREMENT?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-xl">
                Send the model number, application details or nameplate photo. Our technical sourcing desk will check mounting parameters, voltage ratings, and refrigerant compatibility for you.
              </p>
              
              <div className="space-y-2 font-mono text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#0EA6A6]">→</span>
                  <span>Direct photograph upload of compressor nameplate tag</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0EA6A6]">→</span>
                  <span>Model number cross-referencing against verified inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0EA6A6]">→</span>
                  <span>Response from HVAC technical desk via Email or WhatsApp</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={openGeneralQuote}
                  className="px-6 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <FileCheck size={16} />
                  <span>REQUEST A QUOTE</span>
                </button>
                <a
                  href="https://wa.me/919920691707?text=Hello%2C%20I%20need%20help%20matching%20a%20compressor%20for%20an%20HVAC%20application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-[0.98]"
                >
                  <MessageSquare size={16} />
                  <span>WHATSAPP ENGINEER</span>
                </a>
              </div>
            </div>

            {/* Right Photo Upload Card */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                <Camera size={16} />
                <span>UPLOAD NAMEPLATE PHOTO</span>
              </div>
              <p className="text-slate-600 text-xs font-sans leading-relaxed">
                Take a clear picture of the manufacturer sticker on your compressor. JPG, PNG, or WEBP (Max 5MB).
              </p>
              
              <PhotoUpload
                label="Attach Nameplate Photograph"
                onPhotoSelect={(file) => setNameplatePhoto(file)}
              />

              <button
                onClick={openGeneralQuote}
                className="w-full px-5 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] cursor-pointer"
              >
                <FileCheck size={15} />
                <span>SUBMIT FOR MATCHING</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM CATALOG REDIRECTION ── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="font-display font-extrabold text-xl text-[#0A192F]">
                Explore All Refurbished Compressors
              </h2>
              <p className="text-slate-500 text-xs font-sans">
                Browse our complete live inventory by brand, model code, or compressor type.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start flex-shrink-0">
              <Link
                href="/products"
                className="px-6 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-[0.98]"
              >
                <span>VIEW FULL CATALOG</span>
                <ArrowRight size={15} />
              </Link>
              <button
                onClick={openGeneralQuote}
                className="px-5 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <span>REQUEST QUOTE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Central Reusable Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />

    </div>
  );
}
