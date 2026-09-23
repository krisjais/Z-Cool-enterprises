'use client';

import React, { useState } from 'react';
import { FileCheck, MessageSquare, Camera } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import PhotoUpload from '../ui/PhotoUpload';

/* ─── Reusable quote button ─── */
export function ServicesQuoteButton({ text = 'REQUEST A QUOTE', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`px-6 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D6FA3]/50 ${className}`}
      >
        <FileCheck size={16} />
        <span>{text}</span>
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

/* ─── Nameplate photo upload block ─── */
export function ServicesPhotoBlock() {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <div className="space-y-4">
        <PhotoUpload
          label="Attach Nameplate Photo (Optional)"
          onPhotoSelect={(f) => setPhoto(f)}
        />
        <button
          onClick={() => setIsOpen(true)}
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-xs"
        >
          <FileCheck size={14} />
          <span>SUBMIT PHOTO &amp; GET A RESPONSE</span>
        </button>
      </div>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

/* ─── WhatsApp + Quote row (used in hero) ─── */
export function ServicesHeroCTA() {
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
        <button
          onClick={() => setIsOpen(true)}
          className="px-7 py-3.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <FileCheck size={16} />
          REQUEST A QUOTE
        </button>
        <a
          href="https://wa.me/919920691707?text=Hello%2C%20I%20have%20a%20compressor%20sourcing%20requirement"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <MessageSquare size={16} />
          WHATSAPP DESK
        </a>
      </div>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

/* ─── Inline text quote trigger ─── */
export function InlineQuoteLink({ text = 'REQUEST A QUOTE', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`font-mono text-xs font-bold text-[#1D6FA3] hover:underline cursor-pointer flex items-center gap-1 ${className}`}
      >
        {text} →
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
