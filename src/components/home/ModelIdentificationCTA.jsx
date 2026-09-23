'use client';

import React, { useState } from 'react';
import { Camera, MessageSquare, ShieldCheck } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

export default function ModelIdentificationCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section id="identify" className="py-20 bg-[#1D6FA3] text-white relative overflow-hidden">
        {/* Subtle Engineering Blueprint Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-15 engineering-grid-dark" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0A192F] rounded-2xl p-8 sm:p-14 shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-8 space-y-4">
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0EA6A6] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                  <span>MODEL IDENTIFICATION DESK</span>
                </div>

                <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  CAN'T FIND YOUR EXACT COMPRESSOR MODEL?
                </h3>

                <p className="text-slate-300 text-base sm:text-lg font-sans max-w-2xl leading-relaxed font-normal">
                  Send your compressor model number or a clear photo of the metal nameplate. Our technical desk will verify displacement, voltage, and mounting footprints to confirm matching options.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#0EA6A6]" />
                    Mounting Pitch Verification
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#0EA6A6]" />
                    Electrical & Voltage Matching
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#0EA6A6]" />
                    Stock Availability Check
                  </span>
                </div>
              </div>

              {/* Right Column: Dominant Main Action + Secondary Actions */}
              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                {/* Main Prominent Action */}
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full px-8 py-4 rounded-lg bg-white hover:bg-slate-100 text-[#0A192F] font-mono text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 shadow-lg cursor-pointer"
                >
                  <Camera size={18} className="text-[#1D6FA3]" />
                  <span>Upload Nameplate</span>
                </button>

                {/* Secondary Actions */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="https://wa.me/919920691707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg border border-white/20 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-4 py-3 rounded-lg border border-white/20 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center"
                  >
                    <span>Get A Quote</span>
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
