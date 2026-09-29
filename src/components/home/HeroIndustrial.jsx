'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, Camera, MessageSquare, ShieldCheck, 
  Truck, ArrowDownRight, CheckCircle2 
} from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

export default function HeroIndustrial() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isReducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <>
      <section
        id="hero"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-[#0A192F] text-white pt-20 pb-12 lg:pt-28 lg:pb-16 border-b border-white/10 overflow-hidden min-h-[calc(100vh-64px)] flex flex-col justify-between"
      >
        {/* Restrained Architectural Grid & Ambient Atmosphere */}
        <div className="absolute inset-0 pointer-events-none opacity-10 engineering-grid-dark" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#1D6FA3]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Impact Typography & Clear Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Minimal Technical Identifier */}
              <div className="flex items-center gap-2 font-mono text-xs sm:text-[13px] text-[#0EA6A6] tracking-widest uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0EA6A6]" />
                <span>ZCOOL ENTERPRISES • INDUSTRIAL HVAC COMPRESSOR SOURCING</span>
              </div>

              {/* Cinematic Section Heading — 64–76px Desktop Target */}
              <h1 className="font-display font-extrabold text-[38px] sm:text-[52px] md:text-[58px] lg:text-[66px] xl:text-[74px] tracking-tight leading-[1.04] text-white">
                REFURBISHED AC<br />
                COMPRESSORS.<br />
                <span className="text-[#1D6FA3]">READY FOR REUSE.</span>
              </h1>

              {/* Editorial Description */}
              <p className="text-slate-300 text-base sm:text-lg max-w-xl font-sans leading-relaxed font-normal">
                Direct B2B supply of inspected, bench-tested, and pressure-verified replacement compressors for commercial air conditioning, VRF systems, chillers, and cold chain refrigeration across India.
              </p>

              {/* Primary Actions (Clear Strict Hierarchy) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {/* 1. PRIMARY: Solid Blue */}
                <Link
                  href="/products"
                  className="px-7 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-[0.98]"
                >
                  <span>VIEW COMPRESSORS</span>
                  <ChevronRight size={16} />
                </Link>

                {/* 2. SECONDARY: Light / Outlined */}
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3.5 rounded-lg border border-white/30 hover:border-white text-white font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 cursor-pointer active:scale-[0.98]"
                >
                  <Camera size={16} className="text-[#0EA6A6]" />
                  <span>REQUEST A QUOTE</span>
                </button>

                {/* 3. TERTIARY: Subtle */}
                <a
                  href="https://wa.me/919920691707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 text-slate-300 hover:text-emerald-400 font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare size={16} className="text-emerald-400" />
                  <span>WHATSAPP ENGINEER</span>
                </a>
              </div>

              {/* Nameplate Photo Sourcing Note */}
              <div className="pt-1 flex items-center gap-2 text-xs sm:text-[13px] font-mono text-slate-400">
                <span className="text-[#0EA6A6]">→</span>
                <span>Send a compressor nameplate photo for exact mounting & displacement model matching.</span>
              </div>

              {/* Architecture Numbers Strip with Thin Hairline Dividers */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 max-w-lg">
                <div className="border-l border-white/15 pl-2.5 sm:pl-4">
                  <div className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">100%</div>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">Bench Tested</div>
                </div>
                <div className="border-l border-white/15 pl-2.5 sm:pl-4">
                  <div className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-[#0EA6A6] tracking-tight">IN-STOCK</div>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">Mumbai Depot</div>
                </div>
                <div className="border-l border-white/15 pl-2.5 sm:pl-4">
                  <div className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-[#1D6FA3] tracking-tight">PAN-INDIA</div>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">Pallet Freight</div>
                </div>
              </div>

            </div>

            {/* Right Column: High-Scale Physical Compressor Floating in Atmospheric Space */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[640px]">
              
              {/* Thin Technical Measurement Lines Framing the Equipment */}
              <div className="absolute inset-x-2 sm:inset-x-4 top-2 sm:top-4 bottom-2 sm:bottom-4 pointer-events-none flex flex-col justify-between select-none">
                <div className="flex justify-between items-start font-mono text-[10px] sm:text-[11px] text-white/40 tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#0EA6A6] rounded-xs" />
                    <span>REF: COPELAND ZR72KC</span>
                  </div>
                  <span>SCALE: 1:1 INDUSTRIAL CORE</span>
                </div>
                
                <div className="flex justify-between items-end font-mono text-[10px] sm:text-[11px] text-white/40 tracking-wider border-b border-white/10 pb-1.5">
                  <span>DISPLACEMENT: 17.1 m³/h</span>
                  <span>STATUS: COIL & PRESSURE VERIFIED</span>
                </div>
              </div>

              {/* Physical Floating Compressor Object (Free of Card Containers) */}
              <div
                className="relative z-10 w-full flex items-center justify-center py-6 transition-transform duration-300 ease-out"
                style={{
                  transform: isReducedMotion
                    ? 'none'
                    : `perspective(1200px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg) translate3d(${mousePos.x * 5}px, ${mousePos.y * 5}px, 0)`,
                }}
              >
                {/* Physical Floor Contact Shadow */}
                <div className="absolute bottom-4 sm:bottom-6 w-3/4 max-w-[360px] h-9 bg-black/80 rounded-full blur-2xl pointer-events-none" />

                {/* Hero Compressor Image - Majestic Large Scale (~40-45% Visual Area) */}
                <img
                  src="/ac_compressor.png"
                  alt="Zcool Industrial Refurbished AC Compressor"
                  className="relative z-10 max-h-[460px] sm:max-h-[540px] lg:max-h-[600px] xl:max-h-[640px] w-auto object-contain filter drop-shadow-[0_28px_45px_rgba(0,0,0,0.85)] select-none"
                  width={520}
                  height={640}
                  priority="true"
                />

                {/* Technical Callout 1: REFURBISHED */}
                <div className="hidden sm:flex absolute -left-2 top-20 z-20 items-center gap-2">
                  <div className="text-left font-mono text-xs tracking-wider">
                    <span className="text-slate-400 block text-[9px]">CORE INTEGRITY</span>
                    <span className="text-white font-bold">REFURBISHED</span>
                  </div>
                  <div className="w-8 h-[1px] bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-[#0EA6A6]" />
                </div>

                {/* Technical Callout 2: TESTED & SEALED */}
                <div className="hidden sm:flex absolute -right-2 top-32 z-20 items-center gap-2 flex-row-reverse">
                  <div className="text-right font-mono text-xs tracking-wider">
                    <span className="text-slate-400 block text-[9px]">NITROGEN HOLD</span>
                    <span className="text-emerald-400 font-bold">TESTED & SEALED</span>
                  </div>
                  <div className="w-8 h-[1px] bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* Technical Callout 3: MULTI-BRAND */}
                <div className="hidden sm:flex absolute -left-2 bottom-24 z-20 items-center gap-2">
                  <div className="text-left font-mono text-xs tracking-wider">
                    <span className="text-slate-400 block text-[9px]">COMPATIBILITY</span>
                    <span className="text-white font-bold">MULTI-BRAND</span>
                  </div>
                  <div className="w-8 h-[1px] bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-[#1D6FA3]" />
                </div>

                {/* Technical Callout 4: B2B SUPPLY */}
                <div className="hidden sm:flex absolute -right-2 bottom-20 z-20 items-center gap-2 flex-row-reverse">
                  <div className="text-right font-mono text-xs tracking-wider">
                    <span className="text-slate-400 block text-[9px]">DISPATCH</span>
                    <span className="text-white font-bold">B2B SUPPLY</span>
                  </div>
                  <div className="w-8 h-[1px] bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-[#1D6FA3]" />
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Minimal Engineering Trust Strip */}
        <div className="mt-8 border-t border-white/10 bg-[#071324]/90 py-4">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs sm:text-[13px] text-slate-300 uppercase tracking-wider">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#0EA6A6]" /> SCROLL COMPRESSORS</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#0EA6A6]" /> ROTARY UNITS</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#0EA6A6]" /> RECIPROCATING</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#0EA6A6]" /> VRF / INVERTERS</span>
              <span className="flex items-center gap-2"><Truck size={16} className="text-[#0EA6A6]" /> PAN-INDIA FREIGHT</span>
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
