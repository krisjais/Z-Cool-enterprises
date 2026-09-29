'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, ChevronRight, Maximize2, X, 
  ShieldCheck, ArrowRight 
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';
import { resolveImageUrl } from '@/lib/api';

export default function RealInventoryGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const items = PRODUCTS_CATALOG.slice(0, 6);
  const activeItem = items[activeIndex] || items[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section id="gallery" className="py-20 lg:py-24 bg-[#071324] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10 engineering-grid-dark" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: Bold & Authentic */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs sm:text-[13px] text-[#0EA6A6] uppercase tracking-widest mb-1.5 flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0EA6A6]" />
                <span>PHYSICAL ASSET VERIFICATION</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
                REAL INVENTORY. REAL COMPRESSORS.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-2.5 font-sans max-w-xl font-normal leading-relaxed">
                Authentic photography of tested compressors currently staged for dispatch in our Mumbai warehouse facility.
              </p>
            </div>

            {/* Stepper Navigation */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm sm:text-base font-bold text-slate-300">
                0{activeIndex + 1} <span className="text-slate-500 font-normal">/ 0{items.length}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous gallery image"
                  className="w-10 h-10 rounded-lg border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors cursor-pointer active:scale-[0.98]"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next gallery image"
                  className="w-10 h-10 rounded-lg border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors cursor-pointer active:scale-[0.98]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Central Large Authentic Stage (Cardless, Product-First Focus) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Center Stage: Hero-Scale Real Compressor Image */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] group">
              {/* Realistic Contact Shadow Only */}
              <div className="absolute bottom-6 w-3/4 max-w-[360px] h-9 bg-black/85 rounded-full blur-2xl pointer-events-none" />

              <img
                key={activeItem.id}
                src={resolveImageUrl(activeItem.images?.[0])}
                alt={`${activeItem.brand} ${activeItem.code}`}
                className="relative z-10 max-h-[360px] sm:max-h-[460px] lg:max-h-[520px] w-auto object-contain filter drop-shadow-[0_28px_45px_rgba(0,0,0,0.85)] transition-all duration-300 animate-fadeIn cursor-pointer select-none"
                onClick={() => setModalImage(activeItem)}
                width={500}
                height={520}
              />

              {/* Fullscreen Zoom Trigger */}
              <button
                type="button"
                onClick={() => setModalImage(activeItem)}
                className="absolute top-2 right-2 p-2.5 rounded-lg bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 transition-colors shadow-lg cursor-pointer"
                title="Inspect high-res photo"
              >
                <Maximize2 size={16} />
              </button>
            </div>

            {/* Right Information Details — Clean Industrial Metadata */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                {/* 1. BRAND */}
                <div className="font-mono text-sm sm:text-[15px] text-[#0EA6A6] uppercase tracking-widest font-extrabold">
                  {activeItem.brand}
                </div>

                {/* 2. MODEL CODE */}
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-tight">
                  {activeItem.code}
                </h3>

                {/* 3. TYPE & STATUS */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="font-mono text-xs sm:text-[13px] uppercase tracking-wider text-slate-300 font-semibold bg-white/5 border border-white/10 px-3 py-1 rounded">
                    {activeItem.type || activeItem.category}
                  </span>
                  <span className="font-mono text-xs sm:text-[13px] uppercase tracking-wider text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded">
                    REFURBISHED
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed pt-2 font-normal">
                  {activeItem.description || activeItem.tagline}
                </p>
              </div>

              {/* Technical Specifications (Thin Hairline Rules, 14–15px Text) */}
              <div className="border-t border-white/10 pt-2 font-mono text-sm sm:text-[15px]">
                <div className="flex justify-between py-2.5 border-b border-white/10">
                  <span className="text-slate-400 text-xs sm:text-[13px] uppercase font-semibold">OPERATING VOLTAGE</span>
                  <span className="text-white font-bold">{activeItem.voltage || 'Standard Industrial 3PH'}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-white/10">
                  <span className="text-slate-400 text-xs sm:text-[13px] uppercase font-semibold">REFRIGERANT GAS</span>
                  <span className="text-[#0EA6A6] font-bold">{activeItem.refrigerant || 'Compatible'}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-white/10">
                  <span className="text-slate-400 text-xs sm:text-[13px] uppercase font-semibold">WAREHOUSE STATUS</span>
                  <span className="text-emerald-400 font-bold">TESTED & STAGED</span>
                </div>
              </div>

              {/* Direct Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/products/${activeItem.id}`}
                  className="font-mono text-xs sm:text-[13px] font-bold text-white hover:text-[#0EA6A6] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>View Product Dossier</span>
                  <ArrowRight size={15} />
                </Link>

                <button
                  type="button"
                  onClick={() => setModalImage(activeItem)}
                  className="text-xs sm:text-[13px] font-mono text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Inspect Fullscreen
                </button>
              </div>
            </div>

          </div>

          {/* Minimalist Thumbnail Rail Below — Cleaner and Slightly Larger */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 sm:grid-cols-6 gap-3.5">
            {items.map((it, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#0EA6A6] bg-white/10 ring-1 ring-[#0EA6A6]'
                      : 'border-white/10 hover:border-white/30 bg-white/5'
                  }`}
                >
                  <div className="font-mono text-xs text-slate-400 mb-1">
                    0{idx + 1} • {it.brand}
                  </div>
                  <div className="h-20 flex items-center justify-center p-1.5 my-1">
                    <img
                      src={resolveImageUrl(it.images?.[0])}
                      alt={it.name}
                      className="max-h-full w-auto object-contain"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className={`font-mono text-xs sm:text-[13px] font-bold truncate mt-1 ${isSelected ? 'text-[#0EA6A6]' : 'text-slate-300'}`}>
                    {it.code}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Fullscreen Inspection Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0A192F] border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="font-mono text-xs text-[#0EA6A6] uppercase tracking-widest block">WAREHOUSE PHYSICAL SPECIMEN</span>
              <h4 className="font-display font-bold text-2xl text-white mt-1">{modalImage.name}</h4>
              <div className="font-mono text-xs text-slate-400 mt-0.5">MODEL: {modalImage.code}</div>
            </div>

            <div className="max-h-[60vh] flex items-center justify-center py-6">
              <img
                src={resolveImageUrl(modalImage.images?.[0])}
                alt={modalImage.name}
                className="max-h-[55vh] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-300">
              <div>BRAND: <strong className="text-white">{modalImage.brand}</strong></div>
              <div>TYPE: <strong className="text-white">{modalImage.type}</strong></div>
              <div>STATUS: <strong className="text-emerald-400">BENCH-TESTED</strong></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
