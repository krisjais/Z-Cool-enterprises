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
    <section id="case-studies" className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimal & Editorial */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs sm:text-[13px] text-[#1D6FA3] uppercase tracking-widest mb-1.5 flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1D6FA3]" />
              <span>CONTRACTOR SUPPLY ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0A192F] tracking-tight leading-tight">
              RECENT COMPRESSOR SUPPLY SCENARIOS
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2.5 font-sans max-w-xl font-normal leading-relaxed">
              Verified supply scenarios documenting model verification, mounting compatibility, and prompt dispatch from Mumbai.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold text-[#1D6FA3] hover:text-[#165680] uppercase tracking-wider self-start sm:self-end transition-colors"
          >
            <span>Read All Case Studies</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Minimal Architectural Sector Tabs */}
        <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto pb-3 mb-10 no-scrollbar border-b border-slate-200">
          {CASE_STUDIES.map((cs, idx) => {
            const isSelected = idx === activeTab;
            return (
              <button
                key={cs.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`group flex items-baseline gap-2 pb-3 -mb-[14px] border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'border-[#0A192F] text-[#0A192F]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                <span className={`font-mono text-xs sm:text-[13px] ${isSelected ? 'text-[#1D6FA3] font-bold' : 'text-slate-400'}`}>
                  0{idx + 1}
                </span>
                <span className={`font-display text-sm sm:text-base tracking-tight ${isSelected ? 'font-extrabold text-[#0A192F]' : 'font-semibold'}`}>
                  {cs.sector}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ({cs.location.split(',')[0]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Large Editorial Dominant Case Study (No Box-In-Box Clutter) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Supplied Equipment Visual */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[500px]">
            <div className="absolute inset-0 bg-white rounded-3xl border border-slate-200/90 -z-10 shadow-sm" />
            <div className="absolute bottom-6 w-3/4 max-w-[320px] h-8 bg-slate-400/20 rounded-full blur-xl pointer-events-none" />

            <div className="w-full px-8 pt-6 flex items-center justify-between text-xs sm:text-[13px] font-mono text-slate-500">
              <span className="font-bold text-[#1D6FA3]">{currentCase.brand}</span>
              <span className="text-emerald-700 font-semibold">VERIFIED SUPPLY</span>
            </div>

            <div className="my-auto py-8 flex items-center justify-center">
              <img
                key={currentCase.id}
                src={imageSrc}
                alt={currentCase.compressorSupplied}
                className="max-h-[320px] sm:max-h-[380px] lg:max-h-[420px] w-auto object-contain filter drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)] animate-fadeIn select-none"
                width={360}
                height={420}
              />
            </div>

            <div className="w-full px-8 pb-6 border-t border-slate-100 flex items-center justify-between font-mono text-xs sm:text-[13px] text-slate-600">
              <span>MODEL: <strong className="text-slate-900">{currentCase.model}</strong></span>
              <span>{currentCase.location}</span>
            </div>
          </div>

          {/* Right Column: Case Story with Thin Hairline Dividers (Strict Case Hierarchy) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="font-mono text-xs sm:text-[13px] text-[#1D6FA3] uppercase tracking-wider font-bold">
                CASE TYPE: {currentCase.sector.toUpperCase()} • {currentCase.location.toUpperCase()}
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
                {currentCase.title}
              </h3>
            </div>

            {/* Technical Case Details Rows */}
            <div className="border-t border-slate-200/90 pt-4 space-y-4 font-sans text-sm sm:text-base">
              
              {/* APPLICATION */}
              <div className="pb-3 border-b border-slate-200/80">
                <span className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  APPLICATION
                </span>
                <div className="font-bold text-slate-900 text-base sm:text-lg">
                  {currentCase.equipment}
                </div>
              </div>

              {/* REQUIREMENT */}
              <div className="pb-3 border-b border-slate-200/80">
                <span className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  REQUIREMENT
                </span>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  {currentCase.requirement}
                </p>
              </div>

              {/* COMPRESSOR */}
              <div className="pb-3 border-b border-slate-200/80">
                <span className="font-mono text-xs uppercase font-bold text-[#1D6FA3] tracking-wider block mb-1">
                  COMPRESSOR SUPPLIED
                </span>
                <div className="font-bold text-slate-900 text-base sm:text-[17px]">
                  {currentCase.compressorSupplied}
                </div>
              </div>

              {/* SOLUTION */}
              <div className="pb-3 border-b border-slate-200/80">
                <span className="font-mono text-xs uppercase font-bold text-emerald-700 tracking-wider block mb-1">
                  SOLUTION & VERIFIED DISPATCH
                </span>
                {currentCase.action && (
                  <p className="text-slate-700 text-base leading-relaxed">
                    {currentCase.action}
                  </p>
                )}
                {currentCase.result && (
                  <div className="mt-2 flex items-start gap-2.5 text-sm sm:text-base text-emerald-900 font-medium">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{currentCase.result}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Link to Full Case Study */}
            <div className="pt-2">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-[13px] font-bold text-[#1D6FA3] hover:text-[#165680] uppercase tracking-wider"
              >
                <span>EXPLORE FULL CASE STUDY DETAILS</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
