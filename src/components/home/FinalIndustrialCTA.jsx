'use client';

import React, { useState } from 'react';
import { Camera, MessageSquare, Phone, ShieldCheck, Truck, Clock } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import { COMPANY_DETAILS } from '@/constants/company';

export default function FinalIndustrialCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section id="quote" className="py-20 lg:py-24 bg-[#0A192F] text-white relative overflow-hidden border-t border-white/10">
        {/* Restrained Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />
        
        {/* Extremely Subtle Watermark Silhouette on Right */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[560px] opacity-[0.05] pointer-events-none select-none hidden lg:block">
          <img
            src="/ac_compressor.png"
            alt=""
            className="w-full h-auto filter grayscale invert"
            width={560}
            height={560}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="font-mono text-xs sm:text-[13px] text-[#0EA6A6] uppercase tracking-widest flex items-center justify-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0EA6A6]" />
              <span>DIRECT SOURCING DESK • MUMBAI</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-white tracking-tight leading-[1.04]">
              LOOKING FOR A SPECIFIC<br />
              <span className="text-[#1D6FA3]">AC COMPRESSOR?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed max-w-xl mx-auto font-normal">
              Send your compressor model number, nameplate photo, or cooling requirements. Our Mumbai warehouse team will confirm matching availability and dispatch timelines immediately.
            </p>

            {/* Quick Guarantees (Clean Typography Line) */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-[13px] font-mono text-slate-300 pt-2 pb-2">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#0EA6A6]" />
                Bench & Pressure Verified
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#0EA6A6]" />
                Immediate Stock Confirmation
              </span>
              <span className="flex items-center gap-2">
                <Truck size={16} className="text-[#0EA6A6]" />
                Pan-India Pallet Freight
              </span>
            </div>

            {/* Action Buttons — GET A QUOTE Is The Strongest */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
              {/* PRIMARY: Strongest */}
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="px-9 py-4 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs sm:text-[13px] font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]"
              >
                <Camera size={18} />
                <span>GET A QUOTE</span>
              </button>

              {/* SECONDARY: WhatsApp Us */}
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <MessageSquare size={16} />
                <span>WHATSAPP US</span>
              </a>

              {/* TERTIARY: Call */}
              <a
                href={COMPANY_DETAILS.primaryTel}
                className="px-6 py-4 rounded-lg border border-white/20 hover:border-white text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 active:scale-[0.98]"
              >
                <Phone size={16} />
                <span>CALL {COMPANY_DETAILS.formattedPrimaryPhone}</span>
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
