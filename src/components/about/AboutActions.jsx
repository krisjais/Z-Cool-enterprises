'use client';

import React, { useState } from 'react';
import { FileCheck, MessageSquare } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import PhotoUpload from '../ui/PhotoUpload';

/* ── Hero CTA row ── */
export function AboutHeroCTA() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/products"
          className="px-7 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-[#0A192F] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
        >
          VIEW COMPRESSORS
        </a>
        <a
          href="/contact"
          className="px-7 py-3.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
        >
          CONTACT ZCOOL
        </a>
      </div>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

/* ── Bottom CTA block with photo upload ── */
export function AboutBottomCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Photo upload */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <p className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
            SEND NAMEPLATE PHOTO
          </p>
          <p className="text-slate-600 text-xs font-sans leading-relaxed">
            Photograph the nameplate sticker on your existing compressor and upload it here. We will identify the unit and check current stock.
          </p>
          <PhotoUpload
            label="Attach Nameplate Photo (Optional)"
            onPhotoSelect={(f) => setPhoto(f)}
          />
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-xs"
          >
            <FileCheck size={14} />
            <span>SUBMIT &amp; GET A RESPONSE</span>
          </button>
        </div>

        {/* Right: Direct contact */}
        <div className="space-y-4">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full px-6 py-4 rounded-xl bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
          >
            <FileCheck size={18} />
            GET A QUOTE
          </button>
          <a
            href="https://wa.me/919920691707?text=Hello%2C%20I%20have%20a%20compressor%20requirement"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <MessageSquare size={18} />
            WHATSAPP DESK
          </a>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 font-mono text-xs">
            <div className="flex justify-between text-slate-600 border-b border-slate-100 pb-2">
              <span className="text-slate-400">PHONE</span>
              <a href="tel:+919920691707" className="font-semibold text-[#0A192F] hover:text-[#1D6FA3] transition-colors">
                +91 99206 91707
              </a>
            </div>
            <div className="flex justify-between text-slate-600 border-b border-slate-100 pb-2">
              <span className="text-slate-400">EMAIL</span>
              <a href="mailto:zcooltech4@gmail.com" className="font-semibold text-[#0A192F] hover:text-[#1D6FA3] transition-colors">
                zcooltech4@gmail.com
              </a>
            </div>
            <div className="flex justify-between text-slate-600">
              <span className="text-slate-400">LOCATION</span>
              <span className="font-semibold text-[#0A192F]">Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

/* ── Inline quote link ── */
export function AboutQuoteButton({ text = 'REQUEST A QUOTE', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`px-6 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-xs ${className}`}
      >
        <FileCheck size={15} />
        {text}
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
