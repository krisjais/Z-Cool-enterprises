'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Camera } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

const EDITORIAL_POINTS = [
  {
    id: 'inspected',
    label: 'INSPECTED',
    sub: '01. Physical Housing & Shell Integrity Verification',
    headline: 'Visual & Housing Structural Assessment',
    details: 'Every compressor begins with meticulous casing inspection. We verify original factory serial stampings, confirm casing structural soundness without metal fatigue, and reject units showing signs of shell stress or internal corrosion.',
    metrics: '100% Casing Authenticity Verified',
  },
  {
    id: 'tested',
    label: 'TESTED',
    sub: '02. Winding & Pressure Bench Testing',
    headline: 'High-Potential Insulation & Nitrogen Pressure Hold',
    details: 'Motor windings undergo high-potential insulation resistance testing to confirm stator health. Units are pressurized with dry nitrogen to verify zero casing porosity, valve blow-by, or micro-leaks under industrial test pressure.',
    metrics: 'Zero-Porosity Nitrogen Certified',
  },
  {
    id: 'reconditioned',
    label: 'RECONDITIONED',
    sub: '03. Lubrication Flush & Terminal Restoration',
    headline: 'Clean Oil Flush & Moisture-Free Port Brazing',
    details: 'Existing lubricant is drained and tested before flushing with fresh POE or mineral oil matching the system refrigerant. Terminal posts are cleaned, and line ports are brazed and sealed under slight nitrogen positive pressure.',
    metrics: 'POE / Mineral Lubricant Prepped',
  },
  {
    id: 'multi-brand',
    label: 'MULTI-BRAND',
    sub: '04. Multi-OEM Replacement Sourcing',
    headline: 'Copeland, Daikin, Danfoss, LG, Carrier & More',
    details: 'We maintain inventory across leading commercial air conditioning and chiller brands, enabling HVAC engineers to source direct drop-in replacements that match existing piping and mounting footprints without system alterations.',
    metrics: 'Scroll, Rotary, Reciprocating & VRF',
  },
  {
    id: 'model-identification',
    label: 'MODEL IDENTIFICATION',
    sub: '05. Technical Nameplate Matching Support',
    headline: 'Nameplate Photo Identification Desk',
    details: 'Uncertain about outdated codes or discontinued part numbers? Send a photo of your compressor nameplate. Our technical desk verifies displacement, voltage, and port orientations to confirm matching replacements.',
    metrics: 'Mumbai Technical Desk Support',
  },
  {
    id: 'b2b-supply',
    label: 'B2B SUPPLY',
    sub: '06. Pan-India Logistics & Pallet Crate Transit',
    headline: 'Industrial B2B Freight For Contractors & Plants',
    details: 'Tailored for commercial HVAC contractors, facility engineering teams, and cold storage facilities. Compressors are secured onto heavy wooden pallets with weather-wrap for safe long-distance transit across all Indian states.',
    metrics: 'Pan-India Commercial Freight',
  },
];

export default function WhyRefurbishedEditorial() {
  const [activeId, setActiveId] = useState('inspected');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const activePoint = EDITORIAL_POINTS.find((p) => p.id === activeId) || EDITORIAL_POINTS[0];

  return (
    <>
      <section id="why-zcool" className="py-28 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header: Pure Editorial Statement with Generous Whitespace */}
          <div className="max-w-4xl mb-20 space-y-4">
            <div className="font-mono text-xs text-[#1D6FA3] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D6FA3]" />
              <span>THE REFURBISHED ADVANTAGE</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A192F] tracking-tight leading-[1.05]">
              WHY BUY REFURBISHED?<br />
              <span className="text-[#1D6FA3]">NOT EVERY COMPRESSOR NEEDS TO BE NEW.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-sans max-w-2xl leading-relaxed pt-2 font-normal">
              Refurbished industrial compressors deliver tested performance at a fraction of imported OEM lead times and replacement costs, keeping commercial chillers and HVAC plants online.
            </p>
          </div>

          {/* Clean Editorial Split Composition (No Heavy Card Boxes) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-slate-200 pt-12">
            
            {/* Left Column: Minimalist Benefit Navigation Rail */}
            <div className="lg:col-span-5 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold block mb-4">
                CORE TECHNICAL ASSURANCES
              </span>

              {EDITORIAL_POINTS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left py-3.5 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#0A192F] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className={`font-mono text-[10px] uppercase tracking-wider ${isActive ? 'text-[#0EA6A6]' : 'text-slate-400'}`}>
                        {item.sub.split('.')[0]}
                      </div>
                      <div className={`font-display text-base tracking-tight font-bold ${isActive ? 'text-white' : 'text-slate-800'}`}>
                        {item.label}
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`transition-transform duration-200 ${
                        isActive ? 'text-[#0EA6A6] translate-x-1' : 'text-slate-300 opacity-40 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dominant Single Benefit Panel with Thin Dividers */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-200 lg:pl-16">
              
              <div className="space-y-4">
                <div className="font-mono text-xs text-[#0EA6A6] uppercase tracking-widest font-bold">
                  {activePoint.metrics}
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
                  {activePoint.headline}
                </h3>

                <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed font-normal">
                  {activePoint.details}
                </p>

                {/* Contractor Rationale with Hairline Rule */}
                <div className="pt-6 border-t border-slate-200 flex items-start gap-3 text-sm text-slate-800">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Eliminates prolonged equipment downtime with ready-to-dispatch tested units from Mumbai inventory.</span>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3 rounded-lg bg-[#0A192F] hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Camera size={15} />
                  <span>Send Model For Verification</span>
                </button>
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
