'use client';

import React, { useState } from 'react';
import { Camera, MessageSquare, FileCheck } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import PhotoUpload from '../ui/PhotoUpload';

export default function RefurbishmentActions() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  return (
    <>
      {/* Hero CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3" id="refurbishment-hero-cta">
        <a
          href="/products"
          className="px-7 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
        >
          <FileCheck size={16} />
          <span>VIEW AVAILABLE COMPRESSORS</span>
        </a>
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="px-7 py-3.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Camera size={16} />
          <span>ASK ABOUT A COMPRESSOR</span>
        </button>
      </div>

      {/* Inline nameplate photo section */}
      <div className="mt-6" id="nameplate-upload-section">
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
            <Camera size={15} />
            <span>NOT SURE WHICH COMPRESSOR YOU NEED?</span>
          </div>
          <p className="text-slate-600 text-xs font-sans leading-relaxed max-w-lg">
            Send us a photograph of your old compressor nameplate sticker. We will match the model, check our current stock, and confirm whether we carry a suitable replacement.
          </p>
          <PhotoUpload
            label="Attach Nameplate Photo"
            onPhotoSelect={(file) => setPhoto(file)}
          />
          {photo && (
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              <FileCheck size={14} />
              <span>SUBMIT PHOTO FOR MATCHING</span>
            </button>
          )}
          {!photo && (
            <p className="text-slate-400 text-[11px] font-mono">
              JPG, PNG, or WEBP — max 5MB. Photo is optional but helps us respond faster.
            </p>
          )}
        </div>
      </div>

      {/* CTA Banner bottom modal trigger */}
      <div className="flex flex-col sm:flex-row gap-3" id="refurbishment-footer-cta">
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="flex-1 px-6 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
        >
          <FileCheck size={16} />
          <span>REQUEST COMPRESSOR QUOTE</span>
        </button>
        <a
          href="https://wa.me/919920691707?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20refurbished%20compressor"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <MessageSquare size={16} />
          <span>WHATSAPP DESK</span>
        </a>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
