'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, ChevronRight, ShieldCheck, ArrowRight, 
  Camera, Wind 
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';
import QuoteModal from '../ui/QuoteModal';
import { resolveImageUrl } from '@/lib/api';

export default function FeaturedInventoryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const products = PRODUCTS_CATALOG.slice(0, 6);

  const currentProduct = products[currentIndex] || products[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section id="inventory" className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header: Clean Industrial Typography */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="font-mono text-xs sm:text-[13px] text-[#1D6FA3] uppercase tracking-widest mb-1.5 flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#1D6FA3]" />
                <span>INVENTORY SPECIMENS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0A192F] tracking-tight leading-tight">
                FEATURED REFURBISHED COMPRESSORS
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-2.5 font-sans max-w-xl font-normal leading-relaxed">
                Coil-tested, nitrogen-sealed, and catalogued for immediate dispatch from our Mumbai central warehouse.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <span className="font-mono text-sm sm:text-base font-bold text-slate-800">
                0{currentIndex + 1} <span className="text-slate-400 font-normal">/ 0{products.length}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous compressor"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-300 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:text-black transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next compressor"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-300 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:text-black transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Large Architectural Equipment Showcase (Clean Lines, Reduced Card Noise) */}
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: High-Scale Product Image with Generous Breathing Room */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-50/80 to-white border-b lg:border-b-0 lg:border-r border-slate-200/80 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
                
                {/* Minimal Header Spec */}
                <div className="flex items-center justify-between font-mono text-xs sm:text-[13px]">
                  <span className="font-bold text-slate-900 tracking-wider">
                    {currentProduct.brand}
                  </span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <ShieldCheck size={15} />
                    <span>BENCH VERIFIED</span>
                  </span>
                </div>

                {/* Hero-Scale Compressor Asset with Ample Breathing Room */}
                <div className="my-auto py-10 flex items-center justify-center min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
                  <div className="absolute bottom-6 w-3/4 max-w-[320px] h-8 bg-slate-400/20 rounded-full blur-xl pointer-events-none" />
                  <img
                    key={currentProduct.id}
                    src={resolveImageUrl(currentProduct.images?.[0])}
                    alt={`${currentProduct.brand} ${currentProduct.name}`}
                    className="max-h-[340px] sm:max-h-[420px] lg:max-h-[450px] w-auto object-contain filter drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)] transition-all duration-300 animate-fadeIn select-none"
                    width={420}
                    height={450}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/ac_compressor.png';
                    }}
                  />
                </div>

                {/* Baseline Identification */}
                <div className="flex items-center justify-between font-mono text-xs sm:text-[13px] border-t border-slate-100 pt-3">
                  <span className="text-slate-400 text-xs">STOCK CODE</span>
                  <span className="font-bold text-[#1D6FA3]">{currentProduct.code}</span>
                </div>
              </div>

              {/* Right Column: Strong Editorial Hierarchy & Clean Specs List */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Brand & Type Eyebrow */}
                  <div className="font-mono text-xs sm:text-[13px] text-[#1D6FA3] uppercase tracking-wider font-bold">
                    {currentProduct.brand} {currentProduct.category}
                  </div>

                  {/* Primary Model Title */}
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-tight">
                      {currentProduct.code}
                    </h3>
                    <div className="text-slate-600 font-sans text-base sm:text-lg font-medium">
                      {currentProduct.name}
                    </div>
                  </div>

                  {/* Prominent Refurbished & Pressure Tested Indicators */}
                  <div className="flex items-center gap-3 pt-1 pb-1">
                    <span className="px-3 py-1 rounded bg-slate-100 text-slate-800 font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider border border-slate-200">
                      REFURBISHED
                    </span>
                    <span className="px-3 py-1 rounded bg-emerald-50 text-emerald-800 font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider border border-emerald-200/80 flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      <span>PRESSURE TESTED</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-base sm:text-[17px] font-sans leading-relaxed pt-1 font-normal">
                    {currentProduct.description || currentProduct.tagline}
                  </p>

                  {/* Clean Technical Specification List (Thin Hairline Rules, 14–15px metadata) */}
                  <div className="pt-3 font-mono text-sm sm:text-[15px] border-t border-slate-200/90">
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold block mb-2">
                      SPECIFICATION ATTRIBUTES
                    </span>

                    {currentProduct.voltage && (
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-slate-500 text-xs sm:text-[13px] uppercase font-semibold">VOLTAGE & PHASE</span>
                        <span className="font-bold text-slate-900">{currentProduct.voltage}</span>
                      </div>
                    )}
                    {currentProduct.refrigerant && (
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-slate-500 text-xs sm:text-[13px] uppercase font-semibold">REFRIGERANT</span>
                        <span className="font-bold text-slate-900">{currentProduct.refrigerant}</span>
                      </div>
                    )}
                    {currentProduct.displacement && (
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-slate-500 text-xs sm:text-[13px] uppercase font-semibold">DISPLACEMENT</span>
                        <span className="font-bold text-slate-900">{currentProduct.displacement}</span>
                      </div>
                    )}
                    {currentProduct.specs?.thermal?.['Cooling Capacity'] && (
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-slate-500 text-xs sm:text-[13px] uppercase font-semibold">COOLING CAPACITY</span>
                        <span className="font-bold text-[#1D6FA3]">{currentProduct.specs.thermal['Cooling Capacity']}</span>
                      </div>
                    )}
                    {currentProduct.specs?.mechanical?.['Net Weight'] && (
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-slate-500 text-xs sm:text-[13px] uppercase font-semibold">NET WEIGHT</span>
                        <span className="font-bold text-slate-900">{currentProduct.specs.mechanical['Net Weight']}</span>
                      </div>
                    )}
                    {currentProduct.application && (
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-slate-500 text-xs sm:text-[13px] uppercase font-semibold">APPLICATION</span>
                        <span className="font-semibold text-slate-900 truncate max-w-sm">{currentProduct.application}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Triggers */}
                <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/products/${currentProduct.id}`}
                    className="font-mono text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#1D6FA3] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>VIEW FULL SPECIFICATIONS</span>
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-8 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]"
                  >
                    <Camera size={16} />
                    <span>REQUEST QUOTE</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Minimalist Architectural Thumbnail Strip — Cleaner and Slightly Larger */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {products.map((p, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`group text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-[#1D6FA3] shadow-sm ring-1 ring-[#1D6FA3]'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span className={isActive ? 'text-[#1D6FA3] font-bold' : ''}>0{idx + 1}</span>
                    <span className="truncate max-w-[70px] font-semibold">{p.brand}</span>
                  </div>

                  <div className="h-20 flex items-center justify-center p-1.5 my-1.5">
                    <img
                      src={resolveImageUrl(p.images?.[0])}
                      alt={p.name}
                      className="max-h-full w-auto object-contain transition-transform group-hover:scale-105"
                      width={70}
                      height={70}
                    />
                  </div>

                  <div className={`pt-2 border-t border-slate-100 font-mono text-xs sm:text-[13px] font-bold truncate ${isActive ? 'text-[#0A192F]' : 'text-slate-800'}`}>
                    {p.code}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={currentProduct}
      />
    </>
  );
}
