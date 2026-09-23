'use client';

import React, { useState } from 'react';
import { Camera, FileCheck, MessageSquare } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import PhotoUpload from '../ui/PhotoUpload';

export default function ApplicationsActions({ label = 'GET HELP FINDING A COMPRESSOR' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  return (
    <>
      {/* Compact quote trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D6FA3]/50"
      >
        <FileCheck size={16} />
        <span>{label}</span>
      </button>

      <QuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export function ApplicationsPhotoBlock() {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
          <Camera size={15} />
          <span>SEND YOUR COMPRESSOR DETAILS</span>
        </div>
        <p className="text-slate-600 text-xs font-sans leading-relaxed max-w-md">
          Share the model number, part number, or nameplate photograph from your existing unit. We will check our current stock and confirm whether we carry a compatible replacement.
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
          <span>SUBMIT & GET A RESPONSE</span>
        </button>
      </div>

      <QuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export function InlineQuoteButton({ text = 'REQUEST A QUOTE', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1 cursor-pointer ${className}`}
      >
        {text} →
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
