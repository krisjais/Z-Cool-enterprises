'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Camera, CheckCircle2 } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

const VERIFIED_MODELS = [
  {
    brand: 'Copeland (Emerson)',
    model: 'ZR72KC-TFD',
    type: 'Commercial Scroll Compressor',
    image: '/ac_compressor.png',
    displacement: '17.1 m³/h (50 Hz)',
    electrical: '380-420V / 3-Phase / 50Hz',
    use: 'Ducted air conditioning and chillers',
  },
  {
    brand: 'Daikin',
    model: 'JT160G-P8Y1',
    type: 'Commercial Scroll Compressor',
    image: '/ac_compressor_2.png',
    displacement: '15.2 m³/h (50 Hz)',
    electrical: '380-415V / 3-Phase / 50Hz',
    use: 'Packaged commercial AC condensing units',
  },
];

export default function VerifiedSpotlightSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');

  const handleQuoteClick = (model) => {
    setSelectedModel(model);
    setIsQuoteOpen(true);
  };

  return (
    <>
      <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0E4B75] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              <span>Representative Sourcing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Representative Commercial Sourcing References
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
              Commonly requested commercial models sourced for contractor HVAC replacements across India.
            </p>
          </div>

          {/* 2-Column Product Spotlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {VERIFIED_MODELS.map((item) => (
              <div
                key={item.model}
                className="bg-[#FBFBFA] border border-stone-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Model Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4B75]">
                      {item.brand}
                    </span>
                    <span className="inline-flex items-center text-[11px] font-semibold text-slate-700 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">
                      Representative Model
                    </span>
                  </div>

                  {/* Title & Type */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 font-mono">
                    {item.model}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.type}
                  </p>

                  {/* Image Display */}
                  <div className="py-5 flex flex-col items-center justify-center">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.model}`}
                      className="max-h-[200px] sm:max-h-[240px] w-auto object-contain select-none"
                      width={280}
                      height={300}
                      loading="lazy"
                    />
                    <p className="text-[11px] text-slate-500 text-center italic mt-2">
                      Representative compressor image — confirm exact model by nameplate.
                    </p>
                  </div>

                  {/* Essential Specifications */}
                  <div className="space-y-1.5 text-xs border-t border-stone-200 pt-3 text-slate-700">
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-slate-500">Displacement:</span>
                      <strong className="font-mono text-slate-900">{item.displacement}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-slate-500">Electrical Rating:</span>
                      <strong className="font-mono text-slate-900">{item.electrical}</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Typical Use:</span>
                      <span className="text-slate-800 font-medium">{item.use}</span>
                    </div>
                  </div>
                </div>

                {/* Sourcing CTA */}
                <div className="pt-4 mt-5 border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => handleQuoteClick(item.model)}
                    className="w-full min-h-[42px] px-5 py-2.5 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Camera size={14} />
                    <span>Enquire About Availability</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Integrity Note */}
          <div className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto">
            Note: Representative compressor image — confirm exact model by nameplate. Availability and specifications should be verified with our Mumbai technical desk prior to ordering.
          </div>

        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultModel={selectedModel}
      />
    </>
  );
}
