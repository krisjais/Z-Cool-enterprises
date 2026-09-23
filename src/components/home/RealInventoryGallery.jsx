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
      <section id="gallery" className="py-28 bg-[#071324] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10 engineering-grid-dark" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: Bold & Authentic */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-mono text-xs text-[#0EA6A6] uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                <span>PHYSICAL ASSET VERIFICATION</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                REAL INVENTORY. REAL COMPRESSORS.
              </h2>
              <p className="text-slate-300 text-base mt-2 font-sans max-w-xl font-normal leading-relaxed">
                Authentic photography of tested compressors currently staged for dispatch in our Mumbai warehouse facility.
              </p>
            </div>

            {/* Stepper Navigation */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400">
                0{activeIndex + 1} / 0{items.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous gallery image"
                  className="w-10 h-10 rounded-lg border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next gallery image"
                  className="w-10 h-10 rounded-lg border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Central Large Authentic Stage (No Boxed Borders) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Center Stage: Hero-Scale Real Compressor Image */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] group">
              <div className="absolute bottom-6 w-3/4 max-w-[340px] h-8 bg-black/80 rounded-full blur-2xl pointer-events-none" />

              <img
                key={activeItem.id}
                src={resolveImageUrl(activeItem.images?.[0])}
                alt={`${activeItem.brand} ${activeItem.code}`}
                className="max-h-[340px] sm:max-h-[440px] lg:max-h-[500px] w-auto object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] transition-all duration-300 animate-fadeIn cursor-pointer"
                onClick={() => setModalImage(activeItem)}
                width={480}
                height={500}
              />

              {/* Fullscreen Zoom Trigger */}
              <button
                type="button"
                onClick={() => setModalImage(activeItem)}
                className="absolute top-2 right-2 p-2.5 rounded-lg bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 transition-colors shadow-lg cursor-pointer"
                title="Inspect high-res photo"
              >
                <Maximize2 size={16} />
              </button>
            </div>

            {/* Right Information Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="font-mono text-xs text-[#0EA6A6] uppercase tracking-widest font-bold">
                  {activeItem.brand} • {activeItem.type}
                </div>

                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  {activeItem.name}
                </h3>

                <div className="font-mono text-sm text-slate-300 font-bold">
                  MODEL NUMBER: <span className="text-white">{activeItem.code}</span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed pt-1 font-normal">
                  {activeItem.description || activeItem.tagline}
                </p>
              </div>

              {/* Technical Specifications (Thin Hairline Rules) */}
              <div className="space-y-2.5 border-t border-white/10 pt-5 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase">OPERATING VOLTAGE</span>
                  <span className="text-white font-semibold">{activeItem.voltage || 'Standard Industrial'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase">REFRIGERANT GAS</span>
                  <span className="text-[#0EA6A6] font-semibold">{activeItem.refrigerant || 'Compatible'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase">WAREHOUSE STATUS</span>
                  <span className="text-emerald-400 font-semibold">TESTED & STAGED</span>
                </div>
              </div>

              {/* Direct Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/products/${activeItem.id}`}
                  className="font-mono text-xs font-bold text-white hover:text-[#0EA6A6] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>View Product Dossier</span>
                  <ArrowRight size={14} />
                </Link>

                <button
                  type="button"
                  onClick={() => setModalImage(activeItem)}
                  className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Inspect Fullscreen
                </button>
              </div>
            </div>

          </div>

          {/* Minimalist Thumbnail Rail Below */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 sm:grid-cols-6 gap-4">
            {items.map((it, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#0EA6A6] bg-white/5'
                      : 'border-white/10 hover:border-white/20 bg-transparent'
                  }`}
                >
                  <div className="font-mono text-[9px] text-slate-400 mb-1">
                    0{idx + 1} • {it.brand}
                  </div>
                  <div className="h-16 flex items-center justify-center p-1">
                    <img
                      src={resolveImageUrl(it.images?.[0])}
                      alt={it.name}
                      className="max-h-full w-auto object-contain"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="font-mono text-[10px] text-slate-300 font-bold truncate mt-1">
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
