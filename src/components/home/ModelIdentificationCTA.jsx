'use client';

import React, { useState } from 'react';
import { Camera, MessageSquare, ShieldCheck } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

export default function ModelIdentificationCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section id="identify" className="py-18 lg:py-22 bg-[#0A192F] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle Engineering Blueprint Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-8 space-y-4">
              <div className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#0EA6A6] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0EA6A6]" />
                <span>TECHNICAL SOURCING DESK • MUMBAI</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-white tracking-tight leading-tight">
                CAN'T FIND YOUR EXACT<br className="hidden sm:inline" /> COMPRESSOR MODEL?
              </h3>

              <p className="text-slate-300 text-base sm:text-lg font-sans max-w-2xl leading-relaxed font-normal">
                Send your compressor model number or a clear photo of the metal nameplate. Our technical desk will verify displacement, voltage, and mounting footprints to confirm matching options.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-[13px] font-mono text-slate-300 pt-2">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0EA6A6]" />
                  Mounting Pitch Verification
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0EA6A6]" />
                  Electrical & Voltage Matching
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0EA6A6]" />
                  Immediate Stock Check
                </span>
              </div>
            </div>

            {/* Right Column: Dominant Main Action + Secondary Action */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              {/* PRIMARY: UPLOAD NAMEPLATE */}
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="w-full px-8 py-4 rounded-lg bg-white hover:bg-slate-100 text-[#0A192F] font-mono text-xs sm:text-[13px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 shadow-md cursor-pointer active:scale-[0.98]"
              >
                <Camera size={18} className="text-[#1D6FA3]" />
                <span>UPLOAD NAMEPLATE</span>
              </button>

              {/* SECONDARY: WHATSAPP ENGINEER */}
              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-3.5 rounded-lg border border-white/30 hover:border-white text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 text-center active:scale-[0.98]"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>WHATSAPP ENGINEER</span>
              </a>
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
