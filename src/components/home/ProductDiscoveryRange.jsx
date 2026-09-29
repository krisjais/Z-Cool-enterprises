'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';

const CATEGORY_DETAILS = [
  {
    id: 'scroll',
    slug: 'Scroll Compressors',
    code: 'CAT-SCR-01',
    name: 'Scroll Compressors',
    shortName: 'SCROLL',
    type: 'Hermetic Orbital Scroll Mechanism',
    application: 'Commercial Package AC, Ductable Systems, Water Chillers',
    refrigerant: 'R22 / R407C / R410A',
    image: '/ac_compressor.png',
    representativeModel: 'Copeland ZR72KC-TFD / Daikin JT160',
    description: 'Continuous compression with orbiting scroll spiral design. Delivers high volumetric efficiency, smooth torque delivery, and reliable duty in central air conditioning plants.',
    highlightPoints: [
      'Minimal moving parts reduce mechanical wear and frictional drag',
      'High seasonal energy efficiency under partial chiller load',
      'Direct replacement compatibility for commercial DX coils',
    ],
  },
  {
    id: 'rotary',
    slug: 'Rotary Compressors',
    code: 'CAT-ROT-02',
    name: 'Rotary Compressors',
    shortName: 'ROTARY',
    type: 'Hermetic Single & Twin Rotary Piston',
    application: 'Commercial Splits, Ceiling Cassettes, Tower ACs',
    refrigerant: 'R410A / R32',
    image: '/ac_compressor_2.png',
    representativeModel: 'LG HQ034P / Multi-Brand Rotary',
    description: 'Precision roller inside a cylindrical chamber. Engineered for compact footprint, low operating noise, and direct replacement in high-ambient commercial split applications.',
    highlightPoints: [
      'Compact outer dimensions for tight condensing unit frames',
      'Dual-rotor counter-balance for mechanical vibration dampening',
      'Immediate torque response for modular cooling zones',
    ],
  },
  {
    id: 'reciprocating',
    slug: 'Reciprocating Compressors',
    code: 'CAT-REC-03',
    name: 'Reciprocating Compressors',
    shortName: 'RECIPROCATING',
    type: 'Piston / Semi-Hermetic & Hermetic Reciprocating',
    application: 'Cold Storage, Walk-in Freezers, Industrial Process Cooling',
    refrigerant: 'R404A / R134a / R22',
    image: '/ac_compressor_3.png',
    representativeModel: 'Danfoss Maneurop MTZ64 / Copeland Discus',
    description: 'Heavy cast iron piston assemblies engineered for wide pressure ratios, low evaporation temperatures, and demanding multi-rack cold chain refrigeration installations.',
    highlightPoints: [
      'High compression ratio capability for sub-zero cold storage duty',
      'Field-serviceable valve plates and suction rotolock fittings',
      'Direct compatibility with mineral and synthetic POE lubricants',
    ],
  },
  {
    id: 'vrf-vrv',
    slug: 'VRF / VRV Compressors',
    code: 'CAT-VRF-04',
    name: 'VRF / VRV Inverter Compressors',
    shortName: 'VRF / INVERTER',
    type: 'DC Inverter Variable Speed Scroll',
    application: 'Daikin VRV IV/V, Mitsubishi Electric, Multi-Split VRF',
    refrigerant: 'R410A DC Inverter Drive',
    image: '/ac_compressor_2.png',
    representativeModel: 'Daikin JT300 DC Inverter',
    description: 'Frequency-modulated DC brushless motor scroll compressors designed specifically for variable refrigerant flow condensing circuits with multi-evaporator zoning.',
    highlightPoints: [
      'Synchronous DC brushless motor for precise frequency regulation',
      'Direct electrical match for Daikin VRV and modular multi-splits',
      'Bench-tested stator insulation and variable-speed rotor balance',
    ],
  },
];

export default function ProductDiscoveryRange() {
  const [activeTab, setActiveTab] = useState('scroll');

  const counts = useMemo(() => {
    const map = {};
    CATEGORY_DETAILS.forEach((cat) => {
      const match = PRODUCTS_CATALOG.filter((p) => {
        if (cat.id === 'scroll') return p.category?.toLowerCase().includes('scroll');
        if (cat.id === 'rotary') return p.category?.toLowerCase().includes('rotary');
        if (cat.id === 'reciprocating') return p.category?.toLowerCase().includes('reciprocating') || p.category?.toLowerCase().includes('refrigeration');
        if (cat.id === 'vrf-vrv') return p.category?.toLowerCase().includes('vrf') || p.category?.toLowerCase().includes('inverter') || p.type?.toLowerCase().includes('inverter');
        return false;
      });
      map[cat.id] = match.length;
    });
    return map;
  }, []);

  const activeCategory = CATEGORY_DETAILS.find((c) => c.id === activeTab) || CATEGORY_DETAILS[0];
  const activeCount = counts[activeCategory.id] || 0;

  return (
    <section id="discovery" className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Editorial & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-mono text-xs sm:text-[13px] text-[#1D6FA3] uppercase tracking-widest mb-1.5 flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1D6FA3]" />
              <span>TECHNOLOGY CLASSIFICATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0A192F] tracking-tight leading-tight">
              EXPLORE THE COMPRESSOR RANGE
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2.5 font-sans max-w-2xl font-normal leading-relaxed">
              Explore compressor architectures, mechanical working mechanisms, and verified in-stock models available at our Mumbai central depot.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold text-[#1D6FA3] hover:text-[#165680] uppercase tracking-wider whitespace-nowrap self-start md:self-end transition-colors"
          >
            <span>View All Stock Models ({PRODUCTS_CATALOG.length})</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Minimal Architectural Category Selector Line */}
        <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto pb-3.5 mb-12 no-scrollbar border-b border-slate-200">
          {CATEGORY_DETAILS.map((cat, idx) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`group flex items-baseline gap-2.5 pb-3 -mb-[15px] transition-all cursor-pointer whitespace-nowrap border-b-2 ${
                  isActive
                    ? 'border-[#1D6FA3] text-[#0A192F]'
                    : 'border-transparent text-slate-400 hover:text-slate-800'
                }`}
              >
                <span className={`font-mono text-xs sm:text-[13px] ${isActive ? 'text-[#1D6FA3] font-bold' : 'text-slate-400'}`}>
                  0{idx + 1}
                </span>
                <span className={`font-display text-sm sm:text-base tracking-tight ${isActive ? 'font-extrabold text-[#0A192F]' : 'font-semibold'}`}>
                  {cat.shortName}
                </span>
                {counts[cat.id] > 0 && (
                  <span className={`font-mono text-xs ${isActive ? 'text-[#1D6FA3] font-semibold' : 'text-slate-400'}`}>
                    ({counts[cat.id]})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Immersive Catalogue Layout (Cardless, Generous Whitespace) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: High-Scale Product Visual with Contact Shadow */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[400px] sm:min-h-[480px] lg:min-h-[540px]">
            {/* Soft Ambient Depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/90 to-transparent rounded-3xl -z-10" />
            <div className="absolute bottom-6 w-3/4 max-w-[360px] h-9 bg-slate-400/25 rounded-full blur-xl pointer-events-none" />

            {/* Immense Compressor Photo */}
            <img
              key={activeCategory.id}
              src={activeCategory.image}
              alt={activeCategory.name}
              className="relative z-10 max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] xl:max-h-[540px] w-auto object-contain filter drop-shadow-[0_22px_38px_rgba(15,23,42,0.18)] transition-all duration-300 animate-fadeIn select-none"
              width={460}
              height={520}
            />

            {/* Subtle Annotation Baseline */}
            <div className="w-full px-4 sm:px-6 flex items-center justify-between font-mono text-xs sm:text-[13px] text-slate-400 border-t border-slate-200/80 pt-3.5 mt-4">
              <span>MODEL REF: <strong className="text-slate-800">{activeCategory.representativeModel}</strong></span>
              <span className="text-[#0EA6A6] font-semibold">VERIFIED ARCHITECTURE</span>
            </div>
          </div>

          {/* Right Column: Editorial Specifications with Thin Hairline Dividers */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#1D6FA3] font-bold">
                {activeCategory.code}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] tracking-tight leading-tight">
                {activeCategory.name}
              </h3>
              <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed pt-1 font-normal">
                {activeCategory.description}
              </p>
            </div>

            {/* Technical Specifications (Thin Hairline Rules, No Heavy Cards) */}
            <div className="border-t border-slate-200/90 font-mono text-sm sm:text-[15px] pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 border-b border-slate-200/80 gap-1">
                <span className="text-slate-400 text-xs sm:text-[13px] uppercase tracking-wider font-semibold w-36 shrink-0">MODEL REF</span>
                <span className="font-bold text-slate-900 text-left sm:text-right">{activeCategory.representativeModel}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 border-b border-slate-200/80 gap-1">
                <span className="text-slate-400 text-xs sm:text-[13px] uppercase tracking-wider font-semibold w-36 shrink-0">TYPE</span>
                <span className="font-semibold text-slate-900 text-left sm:text-right">{activeCategory.type}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 border-b border-slate-200/80 gap-1">
                <span className="text-slate-400 text-xs sm:text-[13px] uppercase tracking-wider font-semibold w-36 shrink-0">APPLICATION</span>
                <span className="font-semibold text-slate-900 text-left sm:text-right">{activeCategory.application}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 border-b border-slate-200/80 gap-1">
                <span className="text-slate-400 text-xs sm:text-[13px] uppercase tracking-wider font-semibold w-36 shrink-0">CONDITION</span>
                <span className="font-bold text-emerald-700 text-left sm:text-right">REFURBISHED & TESTED</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 border-b border-slate-200/80 gap-1">
                <span className="text-slate-400 text-xs sm:text-[13px] uppercase tracking-wider font-semibold w-36 shrink-0">REFRIGERANT</span>
                <span className="font-semibold text-slate-900 text-left sm:text-right">{activeCategory.refrigerant}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 border-b border-slate-200/80 gap-1">
                <span className="text-slate-400 text-xs sm:text-[13px] uppercase tracking-wider font-semibold w-36 shrink-0">CATALOG STOCK</span>
                <span className="font-bold text-[#1D6FA3] text-left sm:text-right">
                  {activeCount > 0 ? `${activeCount} Verified Models Available` : 'Available On Verified Request'}
                </span>
              </div>
            </div>

            {/* Engineering Merits */}
            <div className="space-y-2 pt-1">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold block">
                ENGINEERING MERITS
              </span>
              <div className="space-y-1.5">
                {activeCategory.highlightPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                    <span className="text-[#0EA6A6] font-bold mt-0.5">―</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/products?type=${encodeURIComponent(activeCategory.slug)}`}
                className="px-7 py-3.5 rounded-lg bg-[#0A192F] hover:bg-slate-800 text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:scale-[0.98]"
              >
                <span>Browse {activeCategory.shortName} Inventory</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
