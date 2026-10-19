'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Camera, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

export default function HeroSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#FBFBFA] text-[#18181B] pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-stone-200 overflow-hidden">
        {/* Subtle Warm Architectural Grid */}
        <div className="absolute inset-0 pointer-events-none architectural-grid opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Sourcing Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-md bg-stone-100 border border-stone-200 text-xs font-semibold uppercase tracking-wider text-slate-700 max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#0E4B75] shrink-0" />
                <span className="sm:hidden">B2B HVAC SOURCING · MUMBAI DESK</span>
                <span className="hidden sm:inline">B2B INDUSTRIAL HVAC SOURCING · MUMBAI CENTRAL DESK</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Refurbished &amp; Replacement{' '}
                <span className="text-[#0E4B75]">AC Compressors</span> for Industrial HVAC.
              </h1>

              {/* Explanatory Body Copy - 2 Concise Sentences */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Direct B2B supplier of replacement scroll, rotary, and reciprocating compressors across India. We match mounting footprints, displacement ratings, and electrical specifications for commercial cooling equipment.
              </p>

              {/* Action Buttons: 1 Primary and 1 Secondary */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 max-w-full">
                {/* 1. Primary CTA: Browse Compressors */}
                <Link
                  href="/products"
                  className="min-h-[48px] px-6 py-3 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors active:scale-[0.98] w-full sm:w-auto"
                >
                  <span className="sm:hidden">Browse Compressors</span>
                  <span className="hidden sm:inline">Browse Compressor Catalogue</span>
                  <ChevronRight size={16} />
                </Link>

                {/* 2. Secondary CTA: Submit Nameplate Photo */}
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="min-h-[48px] px-5 py-3 rounded-lg bg-white hover:bg-stone-50 text-slate-800 text-sm font-semibold border border-stone-300 hover:border-slate-400 flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer active:scale-[0.98] w-full sm:w-auto"
                >
                  <Camera size={16} className="text-[#0E4B75]" />
                  <span>Submit Nameplate for Match</span>
                </button>
              </div>

            </div>

            {/* Right Product Showcase (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-md bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm relative">
                
                {/* Visual Label */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100 text-xs">
                  <span className="font-semibold text-slate-800">COPELAND SCROLL SERIES</span>
                  <span className="text-slate-700 bg-stone-100 px-2 py-0.5 rounded font-medium border border-stone-200">
                    REPRESENTATIVE MODEL
                  </span>
                </div>

                {/* Compressor Image */}
                <div className="relative py-4 flex items-center justify-center">
                  <img
                    src="/ac_compressor.png"
                    alt="Copeland Scroll Compressor Unit"
                    className="max-h-[280px] sm:max-h-[340px] w-auto object-contain select-none"
                    width={400}
                    height={460}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>

                {/* Honest Caption */}
                <div className="pt-3 border-t border-stone-100 text-center">
                  <p className="text-xs text-slate-500">
                    Representative compressor image — confirm exact model and suffix by nameplate.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsQuoteOpen(true)}
                    className="mt-3 text-xs font-semibold text-[#0E4B75] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Submit nameplate to check model availability</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
