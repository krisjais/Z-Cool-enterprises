import React from 'react';
import { ShieldCheck, CheckCircle2, Zap, Gauge, Wind, Droplets } from 'lucide-react';

const INSPECTION_STAGES = [
  {
    icon: Zap,
    title: 'Stator Electrical & Megger Insulation Test',
    desc: 'Motor windings are tested with high-voltage megohmmeter insulation checks to verify zero phase-to-ground shorts, coil burnout, or insulation degradation.',
  },
  {
    icon: Gauge,
    title: 'Compression & Valve Seal Pressure Hold',
    desc: 'Mechanical compression test verifies suction and discharge valve plates, spiral scroll seals, and internal check valves maintain rated differential pressure without blowby.',
  },
  {
    icon: Wind,
    title: 'Dry Nitrogen Pressure Leak Testing',
    desc: 'The compressor shell, end-cap welds, and terminal plate are pressurized with dry nitrogen to verify leak-tight structural integrity before packaging.',
  },
  {
    icon: Droplets,
    title: 'Lubricant Quality & System Evacuation',
    desc: 'Crankcase is inspected for moisture and acid formation. Evacuated under vacuum and recharged with fresh POE or mineral oil matching target refrigerant specifications.',
  },
];

export default function QualityStandardSection() {
  return (
    <section id="quality-standard" className="py-14 sm:py-18 lg:py-20 bg-[#F4F3EF] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0E4B75] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
            <span>Inspection &amp; Verification Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Multi-Point Bench Testing Protocol
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Every refurbished and replacement compressor undergoes bench assessment at our Mumbai facility prior to pallet staging. We do not dispatch unchecked equipment.
          </p>
        </div>

        {/* 4-Card Inspection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {INSPECTION_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-xl p-6 sm:p-7 shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-[#0E4B75] flex items-center justify-center shrink-0 border border-stone-200">
                  <Icon size={20} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Confirmed Policy Box */}
        <div className="mt-8 bg-white border border-stone-200 rounded-xl p-5 sm:p-6 flex items-center gap-3 text-xs sm:text-sm text-slate-700">
          <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
          <span>
            <strong>B2B Technical Transparency:</strong> Compressors are dispatched sealed under positive nitrogen pressure. Technicians must verify system evacuation and filter-drier replacement upon installation.
          </span>
        </div>

      </div>
    </section>
  );
}
