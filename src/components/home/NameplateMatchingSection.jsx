'use client';

import React, { useState } from 'react';
import { Camera, CheckCircle2, ArrowRight, Upload, Phone, AlertCircle } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import { COMPANY_DETAILS } from '@/constants/company';

export default function NameplateMatchingSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Locate Nameplate',
      desc: 'Find the manufacturer metal tag or label on the compressor shell.',
    },
    {
      num: '02',
      title: 'Photo or Note Codes',
      desc: 'Capture the model number, operating voltage, and refrigerant code.',
    },
    {
      num: '03',
      title: 'Send for Verification',
      desc: 'Submit your photo online or via WhatsApp for immediate model assistance.',
    },
  ];

  return (
    <>
      <section id="nameplate-matching" className="py-12 sm:py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0E4B75] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              <span>Model Identification Desk</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Need a Replacement Model? Send Us a Nameplate Photo.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
              We identify displacement, voltage, and mounting footprint to confirm compatibility before you order.
            </p>
          </div>

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#FBFBFA] border border-stone-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#0E4B75] bg-stone-100 border border-stone-200 w-fit px-2.5 py-1 rounded mb-3">
                    STEP {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Callout Bar */}
          <div className="mt-10 bg-[#F4F3EF] border border-stone-300 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Ready to match your compressor?
              </h4>
              <p className="text-slate-600 text-sm">
                Attach your nameplate photo directly or message our Mumbai engineering desk on WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Camera size={16} />
                <span>Upload Nameplate Photo</span>
              </button>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>WhatsApp Desk</span>
                <ArrowRight size={14} />
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
