'use client';

import React, { useState } from 'react';
import { FileCheck, Camera, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import QuoteModal from '@/components/ui/QuoteModal';
import PhotoUpload from '@/components/ui/PhotoUpload';
import { COMPANY_DETAILS } from '@/constants/company';

/* ── Inline button to request a similar compressor ── */
export function RequestSimilarButton({
  product = null,
  text = 'Request Similar Compressor',
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          className ||
          'inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#1D6FA3] hover:text-[#165680] cursor-pointer transition-colors'
        }
      >
        <span>{text}</span>
        <ArrowRight size={13} />
      </button>

      <QuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialProduct={
          product
            ? {
                name: product.compressorSupplied || product.name,
                brand: product.brand || '',
                code: product.model || '',
              }
            : null
        }
      />
    </>
  );
}

/* ── Final CTA Section for Case Studies Page ── */
export function CaseStudiesBottomCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  const checklistItems = [
    'Compressor model number (e.g. ZR72KC, JT160G, MTZ64)',
    'Part number or manufacturer electrical code',
    'Clear photo of compressor nameplate sticker',
    'Application requirement (Package AC, VRV, cold room, chiller)',
  ];

  return (
    <>
      <div className="bg-[#0A192F] text-white rounded-2xl border border-white/10 p-8 sm:p-12 overflow-hidden relative">
        {/* Subtle industrial grid background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1 rounded">
              <span>PROCUREMENT &amp; SOURCING DESK</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              LOOKING FOR A SIMILAR COMPRESSOR?
            </h2>

            <p className="text-slate-300 text-sm font-sans leading-relaxed max-w-xl">
              If your commercial cooling system has a failed compressor, send us your equipment
              specifications. We will check available stock, identify direct drop-in units or
              suitable replacements, and confirm pricing.
            </p>

            {/* Checklist */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block">
                INFORMATION NEEDED FOR FAST QUOTES:
              </span>
              <ul className="space-y-2 font-sans text-xs text-slate-200">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#0EA6A6] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="px-6 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
              >
                <FileCheck size={16} />
                <span>GET A QUOTE</span>
              </button>

              <a
                href={`${COMPANY_DETAILS.whatsappUrl}?text=Hello%2C%20I%20need%20a%20replacement%20compressor.%20Here%20are%20my%20equipment%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageSquare size={16} />
                <span>WHATSAPP SOURCING DESK</span>
              </a>
            </div>
          </div>

          {/* Right upload / nameplate column */}
          <div className="lg:col-span-5 bg-white text-slate-900 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
              <Camera size={16} />
              <span>SEND NAMEPLATE PHOTO</span>
            </div>

            <p className="text-slate-600 text-xs font-sans leading-relaxed">
              Take a photo of the nameplate sticker on the side of your compressor. It provides model
              code, voltage, and displacement details needed for accurate matching.
            </p>

            <PhotoUpload
              label="Attach Nameplate Photo"
              onPhotoSelect={(file) => setPhoto(file)}
            />

            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="w-full px-5 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              <FileCheck size={15} />
              <span>{photo ? 'SUBMIT PHOTO FOR VERIFICATION' : 'SUBMIT DETAILS FOR QUOTE'}</span>
            </button>

            <div className="border-t border-slate-100 pt-3 flex items-center justify-between font-mono text-[11px] text-slate-500">
              <span>Mumbai Warehouse &amp; Desk</span>
              <a
                href={COMPANY_DETAILS.primaryTel}
                className="font-bold text-[#0A192F] hover:text-[#1D6FA3] transition-colors"
              >
                {COMPANY_DETAILS.formattedPrimaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
