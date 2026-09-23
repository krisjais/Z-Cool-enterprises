'use client';

import React, { useState } from 'react';
import { Camera, MessageSquare, Phone, ShieldCheck, Truck, Clock } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

export default function FinalIndustrialCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section id="quote" className="py-28 bg-[#0A192F] text-white relative overflow-hidden border-t border-white/10">
        {/* Restrained Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />
        
        {/* Extremely Subtle Watermark Silhouette */}
        <div className="absolute -right-20 -bottom-20 w-[480px] opacity-[0.04] pointer-events-none select-none hidden lg:block">
          <img
            src="/ac_compressor.png"
            alt=""
            className="w-full h-auto filter grayscale invert"
            width={480}
            height={480}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="font-mono text-xs text-[#0EA6A6] uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
              <span>DIRECT SOURCING DESK • MUMBAI</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              LOOKING FOR A SPECIFIC AC COMPRESSOR?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed max-w-xl mx-auto font-normal">
              Send your compressor model number, nameplate photo, or cooling requirements. Our Mumbai warehouse team will confirm matching availability and dispatch timelines immediately.
            </p>

            {/* Quick Guarantees (Clean Typography Line) */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400 pt-2 pb-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#0EA6A6]" />
                Bench & Pressure Verified
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#0EA6A6]" />
                Immediate Stock Confirmation
              </span>
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-[#0EA6A6]" />
                Pan-India Pallet Freight
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-4 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Camera size={16} />
                <span>Get A Quote</span>
              </button>

              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all hover:-translate-y-0.5"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+919920691707"
                className="px-6 py-4 rounded-lg border border-white/20 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <Phone size={16} />
                <span>Call +91 99206 91707</span>
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
