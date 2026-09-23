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
      <section id="inventory" className="py-24 bg-[#F8F9FA] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header: Clean Industrial Typography */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs text-[#1D6FA3] uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D6FA3]" />
                <span>INVENTORY SPECIMENS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
                FEATURED REFURBISHED COMPRESSORS
              </h2>
              <p className="text-slate-600 text-base mt-2 font-sans max-w-xl font-normal leading-relaxed">
                Coil-tested, nitrogen-sealed, and catalogued for immediate dispatch from our Mumbai central warehouse.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-slate-800">
                0{currentIndex + 1} <span className="text-slate-400">/ 0{products.length}</span>
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous compressor"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-300 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:text-black transition-colors cursor-pointer shadow-2xs"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next compressor"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-300 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:text-black transition-colors cursor-pointer shadow-2xs"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Large Architectural Equipment Showcase (Clean Lines, Reduced Card Noise) */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: High-Scale Product Image */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white border-b lg:border-b-0 lg:border-r border-slate-200 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
                
                {/* Minimal Header Spec */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-slate-900 tracking-wider">
                    {currentProduct.brand}
                  </span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck size={13} />
                    <span>{currentProduct.condition || 'Tested'}</span>
                  </span>
                </div>

                {/* Hero-Scale Compressor Asset */}
                <div className="my-auto py-8 flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
                  <div className="absolute bottom-6 w-3/4 max-w-[280px] h-6 bg-slate-400/20 rounded-full blur-xl pointer-events-none" />
                  <img
                    key={currentProduct.id}
                    src={resolveImageUrl(currentProduct.images?.[0])}
                    alt={`${currentProduct.brand} ${currentProduct.name}`}
                    className="max-h-[320px] sm:max-h-[400px] w-auto object-contain filter drop-shadow-[0_18px_30px_rgba(15,23,42,0.18)] transition-all duration-300 animate-fadeIn"
                    width={400}
                    height={400}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/ac_compressor.png';
                    }}
                  />
                </div>

                {/* Baseline Identification */}
                <div className="flex items-center justify-between font-mono text-xs border-t border-slate-100 pt-3">
                  <span className="text-slate-400 text-[10px]">STOCK CODE</span>
                  <span className="font-bold text-[#1D6FA3]">{currentProduct.code}</span>
                </div>
              </div>

              {/* Right Column: Strong Editorial Hierarchy & Clean Specs List */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Brand & Type Eyebrow */}
                  <div className="font-mono text-xs text-[#1D6FA3] uppercase tracking-wider font-bold">
                    {currentProduct.brand} • {currentProduct.category}
                  </div>

                  {/* Primary Model Title */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                    {currentProduct.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed pt-1">
                    {currentProduct.description || currentProduct.tagline}
                  </p>

                  {/* Clean Technical Specification List (Hairline Lines, No Small Boxes) */}
                  <div className="pt-4 space-y-2.5 font-mono text-xs border-t border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block mb-2">
                      SPECIFICATION ATTRIBUTES
                    </span>

                    {currentProduct.voltage && (
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                        <span className="text-slate-500 text-[11px] uppercase">VOLTAGE & PHASE</span>
                        <span className="font-bold text-slate-900">{currentProduct.voltage}</span>
                      </div>
                    )}
                    {currentProduct.refrigerant && (
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                        <span className="text-slate-500 text-[11px] uppercase">REFRIGERANT</span>
                        <span className="font-bold text-slate-900">{currentProduct.refrigerant}</span>
                      </div>
                    )}
                    {currentProduct.displacement && (
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                        <span className="text-slate-500 text-[11px] uppercase">DISPLACEMENT</span>
                        <span className="font-bold text-slate-900">{currentProduct.displacement}</span>
                      </div>
                    )}
                    {currentProduct.specs?.thermal?.['Cooling Capacity'] && (
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                        <span className="text-slate-500 text-[11px] uppercase">COOLING CAPACITY</span>
                        <span className="font-bold text-[#1D6FA3]">{currentProduct.specs.thermal['Cooling Capacity']}</span>
                      </div>
                    )}
                    {currentProduct.specs?.mechanical?.['Net Weight'] && (
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                        <span className="text-slate-500 text-[11px] uppercase">NET WEIGHT</span>
                        <span className="font-semibold text-slate-800">{currentProduct.specs.mechanical['Net Weight']}</span>
                      </div>
                    )}
                    {currentProduct.application && (
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                        <span className="text-slate-500 text-[11px] uppercase">APPLICATION</span>
                        <span className="font-semibold text-slate-800 truncate max-w-xs">{currentProduct.application}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Triggers */}
                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/products/${currentProduct.id}`}
                    className="font-mono text-xs font-bold text-slate-800 hover:text-[#1D6FA3] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-7 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Camera size={15} />
                    <span>Request Quote For This Model</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Minimalist Architectural Thumbnail Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {products.map((p, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`group text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-[#0A192F] shadow-sm ring-1 ring-[#0A192F]'
                      : 'bg-white/60 border-slate-200/90 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span className={isActive ? 'text-[#0A192F] font-bold' : ''}>0{idx + 1}</span>
                    <span className="truncate max-w-[60px]">{p.brand}</span>
                  </div>

                  <div className="h-16 flex items-center justify-center p-1 my-1">
                    <img
                      src={resolveImageUrl(p.images?.[0])}
                      alt={p.name}
                      className="max-h-full w-auto object-contain transition-transform group-hover:scale-105"
                      width={60}
                      height={60}
                    />
                  </div>

                  <div className="pt-1.5 border-t border-slate-100 font-mono text-[11px] font-bold text-slate-800 truncate">
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
