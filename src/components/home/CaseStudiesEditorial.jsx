'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Building2, Hotel, Snowflake } from 'lucide-react';
import { CASE_STUDIES } from '@/data/case-studies';

const CASE_ICONS = {
  'Commercial Real Estate': Building2,
  'Hospitality': Hotel,
  'Refrigeration & Cold Chain': Snowflake,
};

const CASE_IMAGES = {
  'commercial-tower-mumbai': '/ac_compressor.png',
  'hotel-vrv-retrofit': '/ac_compressor_2.png',
  'cold-storage-refurbishment': '/ac_compressor_3.png',
};

export default function CaseStudiesEditorial() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = CASE_STUDIES[activeTab] || CASE_STUDIES[0];
  const Icon = CASE_ICONS[currentCase.sector] || Building2;
  const imageSrc = CASE_IMAGES[currentCase.id] || '/ac_compressor.png';

  return (
    <section id="case-studies" className="py-28 bg-[#F8F9FA] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimal & Editorial */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs text-[#1D6FA3] uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D6FA3]" />
              <span>CONTRACTOR SUPPLY ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              RECENT COMPRESSOR SUPPLY SCENARIOS
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans max-w-xl font-normal leading-relaxed">
              Verified supply scenarios documenting model verification, mounting compatibility, and prompt dispatch from Mumbai.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1D6FA3] hover:text-[#165680] uppercase tracking-wider self-start sm:self-end"
          >
            <span>Read All Case Studies</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Minimal Architectural Sector Tabs */}
        <div className="flex items-center gap-8 overflow-x-auto pb-4 mb-14 no-scrollbar border-b border-slate-200">
          {CASE_STUDIES.map((cs, idx) => {
            const isSelected = idx === activeTab;
            return (
              <button
                key={cs.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`group flex items-baseline gap-2 pb-3 -mb-[17px] border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'border-[#0A192F] text-[#0A192F]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                <span className={`font-mono text-[11px] ${isSelected ? 'text-[#1D6FA3] font-bold' : 'text-slate-400'}`}>
                  0{idx + 1}
                </span>
                <span className={`font-display text-sm sm:text-base font-bold tracking-tight ${isSelected ? 'text-[#0A192F]' : ''}`}>
                  {cs.sector}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  ({cs.location.split(',')[0]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Large Editorial Dominant Case Study (No Box-In-Box Clutter) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Supplied Equipment Visual */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[340px] sm:min-h-[420px]">
            <div className="absolute inset-0 bg-white rounded-3xl border border-slate-200/80 -z-10 shadow-xs" />
            <div className="absolute bottom-6 w-3/4 max-w-[280px] h-6 bg-slate-400/20 rounded-full blur-xl pointer-events-none" />

            <div className="w-full px-8 pt-6 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="font-bold text-[#1D6FA3]">{currentCase.brand}</span>
              <span className="text-emerald-700 font-semibold">VERIFIED SUPPLY</span>
            </div>

            <div className="my-auto py-6 flex items-center justify-center">
              <img
                key={currentCase.id}
                src={imageSrc}
                alt={currentCase.compressorSupplied}
                className="max-h-[280px] sm:max-h-[340px] w-auto object-contain filter drop-shadow-[0_16px_30px_rgba(15,23,42,0.18)] animate-fadeIn"
                width={320}
                height={340}
              />
            </div>

            <div className="w-full px-8 pb-6 border-t border-slate-100 flex items-center justify-between font-mono text-xs text-slate-600">
              <span>MODEL: <strong className="text-slate-900">{currentCase.model}</strong></span>
              <span>{currentCase.location}</span>
            </div>
          </div>

          {/* Right Column: Case Story with Thin Hairline Dividers */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#1D6FA3] uppercase tracking-wider font-bold">
                {currentCase.sector} • {currentCase.location}
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                {currentCase.title}
              </h3>
            </div>

            {/* Technical Case Details Grid */}
            <div className="border-t border-slate-200 pt-5 space-y-4 font-sans text-sm">
              
              <div className="pb-3 border-b border-slate-200">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  APPLICATION & EQUIPMENT
                </span>
                <div className="font-semibold text-slate-900 text-base">
                  {currentCase.equipment}
                </div>
              </div>

              <div className="pb-3 border-b border-slate-200">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  CONTRACTOR REQUIREMENT
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentCase.requirement}
                </p>
              </div>

              <div className="pb-3 border-b border-slate-200">
                <span className="font-mono text-[10px] uppercase font-bold text-[#1D6FA3] tracking-wider block mb-1">
                  COMPRESSOR SUPPLIED & SOURCING ACTION
                </span>
                <div className="font-bold text-slate-900 text-sm">
                  {currentCase.compressorSupplied}
                </div>
                {currentCase.action && (
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    {currentCase.action}
                  </p>
                )}
              </div>

              {currentCase.result && (
                <div className="pt-1 flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-emerald-700 block">
                      VERIFIED RESULT
                    </span>
                    <span className="font-medium">{currentCase.result}</span>
                  </div>
                </div>
              )}

            </div>

            {/* Link to Full Case Study */}
            <div className="pt-2">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#1D6FA3] hover:text-[#165680] uppercase tracking-wider"
              >
                <span>Explore Full Case Study Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
