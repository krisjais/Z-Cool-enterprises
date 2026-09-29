'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, Activity, Gauge, Droplet, 
  Lock, Truck, ArrowRight, ChevronLeft, ChevronRight 
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    num: '01',
    id: 'sourcing',
    title: 'Selective Core Sourcing',
    shortTitle: 'CORE SOURCING',
    icon: ShieldCheck,
    focusArea: 'OEM CASING & SERIAL STAMP',
    annotation: 'Visual shell assessment for genuine manufacturer serial stamping and casing integrity.',
    desc: 'We inspect OEM compressor casings with verified operational background, ensuring no internal corrosion, housing cracks, or mechanical body deformations before initiating refurbishment.',
    markerPosition: 'top-[36%] left-[32%]',
  },
  {
    num: '02',
    id: 'electrical',
    title: 'Electrical Insulation Test',
    shortTitle: 'ELECTRICAL CHECK',
    icon: Activity,
    focusArea: 'TERMINAL BOX & WINDING INTEGRITY',
    annotation: 'Megger high-potential insulation test and phase-to-ground resistance balancing.',
    desc: 'Motor windings undergo high-potential insulation testing and terminal resistance checks to confirm coil health and prevent internal shorts under commercial electrical load.',
    markerPosition: 'top-[22%] right-[28%]',
  },
  {
    num: '03',
    id: 'pressure',
    title: 'Pressure & Leak Testing',
    shortTitle: 'PRESSURE & LEAK',
    icon: Gauge,
    focusArea: 'HERMETIC PRESSURE CHAMBER',
    annotation: 'Dry nitrogen pressurized hold to confirm absolute hermetic shell seal.',
    desc: 'Units are pressurized with dry nitrogen to verify structural integrity, shell seams, and gasket tightness, confirming zero pressure decay over standard holding durations.',
    markerPosition: 'top-[52%] left-[34%]',
  },
  {
    num: '04',
    id: 'oil',
    title: 'Oil & Flush Verification',
    shortTitle: 'LUBRICATION FLUSH',
    icon: Droplet,
    focusArea: 'LUBRICANT FLUSH & RECHARGE',
    annotation: 'Complete internal flush and recharge with compatible POE or mineral oil.',
    desc: 'Existing refrigeration oil is drained, inspected for acid or moisture contamination, flushed, and recharged with clean lubricant matching R22, R410A, or R404A cooling loops.',
    markerPosition: 'bottom-[28%] right-[34%]',
  },
  {
    num: '05',
    id: 'ports',
    title: 'Port Sealing & Prep',
    shortTitle: 'PORT BRAZING',
    icon: Lock,
    focusArea: 'SERVICE VALVES & COPPER STUBS',
    annotation: 'Brazed cap seals under positive nitrogen pressure to prevent ambient air ingress.',
    desc: 'Suction and discharge line stubs are brazed and sealed under positive nitrogen pressure to preserve internal dryness and prevent atmospheric moisture ingress during warehousing.',
    markerPosition: 'top-[16%] left-[45%]',
  },
  {
    num: '06',
    id: 'freight',
    title: 'Crated Freight Dispatch',
    shortTitle: 'CRATED DISPATCH',
    icon: Truck,
    focusArea: 'PALLET MOUNTING & PROTECTION',
    annotation: 'Bolted to heavy wooden pallets with vibration dampening for road transit.',
    desc: 'Compressors are bolted onto reinforced wooden pallets with protective weather-wrap and vibration-dampened bases, ensuring damage-free transit to contractors across India.',
    markerPosition: 'bottom-[12%] left-[45%]',
  },
];

export default function RefurbishmentProcessSticky() {
  const [activeStep, setActiveStep] = useState(0);

  const current = PROCESS_STEPS[activeStep] || PROCESS_STEPS[0];
  const StepIcon = current.icon;

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? PROCESS_STEPS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev === PROCESS_STEPS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#0A192F] text-white border-b border-white/10 relative overflow-hidden">
      {/* Restrained Background Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 engineering-grid-dark" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0EA6A6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Minimal & Editorial */}
        <div className="max-w-3xl mb-12 lg:mb-14">
          <div className="font-mono text-xs sm:text-[13px] text-[#0EA6A6] uppercase tracking-widest mb-1.5 flex items-center gap-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#0EA6A6]" />
            <span>TECHNICAL VALIDATION PROCESS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
            FROM USED COMPONENT TO READY-TO-SUPPLY COMPRESSOR
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2.5 font-sans leading-relaxed max-w-2xl font-normal">
            Every replacement compressor passes through our 6-stage technical validation protocol before dispatch from Mumbai.
          </p>
        </div>

        {/* Mobile Horizontal Stepper Rail (< md) */}
        <div className="flex md:hidden items-center gap-3 overflow-x-auto pb-3 mb-8 no-scrollbar border-b border-white/10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`group flex items-center gap-1.5 pb-2 -mb-[13px] border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'border-[#0EA6A6] text-white font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className={`font-mono text-xs ${isActive ? 'text-[#0EA6A6]' : 'text-slate-500'}`}>
                  {step.num}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider">
                  {step.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Signature Editorial Composition: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Sticky Real Compressor (Cardless, Atmospheric Equipment Visual) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[400px] sm:min-h-[480px] lg:min-h-[580px]">
            {/* Contact Depth Shadow */}
            <div className="absolute bottom-6 w-3/4 max-w-[340px] h-9 bg-black/80 rounded-full blur-2xl pointer-events-none" />

            {/* Real Compressor Photo — Larger Presentation */}
            <img
              src="/ac_compressor.png"
              alt="Zcool Refurbished AC Compressor Validation"
              className="relative z-10 max-h-[380px] sm:max-h-[460px] lg:max-h-[540px] xl:max-h-[580px] w-auto object-contain filter drop-shadow-[0_28px_45px_rgba(0,0,0,0.85)] select-none transition-all duration-300"
              width={480}
              height={580}
            />

            {/* Dynamic Focal Coordinate Annotation */}
            <div className={`absolute ${current.markerPosition} z-20 transition-all duration-300 pointer-events-none flex items-center gap-2`}>
              <div className="relative">
                <span className="absolute -inset-1 rounded-full bg-[#0EA6A6]/40 animate-ping" />
                <span className="relative block w-3.5 h-3.5 rounded-full bg-[#0EA6A6] border-2 border-white shadow-lg" />
              </div>
              <div className="hidden sm:block bg-[#0A192F]/95 border border-white/20 px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-[#0EA6A6] whitespace-nowrap shadow-md">
                {current.focusArea}
              </div>
            </div>

            {/* Baseline Engineering Line */}
            <div className="w-full px-4 flex items-center justify-between font-mono text-xs sm:text-[13px] text-slate-400 border-t border-white/10 pt-3 mt-4">
              <span>ACTIVE STAGE: <strong className="text-white">{current.num} / 06</strong></span>
              <span className="text-[#0EA6A6] font-semibold">STAGE VALIDATION ACTIVE</span>
            </div>
          </div>

          {/* Right Column: Clear Vertical Progress Line + Dominant Active Stage Content */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Clear Vertical Progress Line (Desktop & Tablet md+) */}
            <div className="hidden md:flex md:col-span-5 flex-col relative pl-1">
              {/* Continuous vertical progress track */}
              <div className="absolute left-[17px] top-5 bottom-6 w-[2px] bg-white/10 pointer-events-none" />

              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="relative flex items-center gap-3.5 py-3 text-left cursor-pointer group transition-all"
                  >
                    {/* Node on vertical line */}
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-[#0EA6A6] text-[#0A192F] ring-4 ring-[#0EA6A6]/25 shadow-md scale-110'
                          : 'bg-[#0d223f] text-slate-400 border border-white/20 group-hover:border-white/50 group-hover:text-white'
                      }`}
                    >
                      {step.num}
                    </div>

                    <div className="flex flex-col">
                      <span
                        className={`font-mono text-xs sm:text-[13px] uppercase tracking-wider transition-colors ${
                          isActive
                            ? 'text-white font-extrabold'
                            : 'text-slate-500 group-hover:text-slate-300 font-normal'
                        }`}
                      >
                        {step.shortTitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dominant Active Step in Large Editorial Typography */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Gigantic Step Numeral & Eyebrow */}
              <div className="space-y-1">
                <div className="font-mono text-5xl sm:text-7xl font-extrabold text-white/20 leading-none">
                  {current.num}
                </div>
                <div className="font-mono text-xs sm:text-[13px] uppercase tracking-widest text-[#0EA6A6] font-bold flex items-center gap-2">
                  <StepIcon size={16} />
                  <span>STAGE {current.num} OF 06</span>
                </div>
              </div>

              {/* Stage Title — Large and Confident */}
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                {current.title}
              </h3>

              {/* Stage Detailed Description */}
              <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed font-normal">
                {current.desc}
              </p>

              {/* Technical Verification Attribute */}
              <div className="border-t border-white/10 pt-5 space-y-2 font-mono text-xs sm:text-[13px]">
                <div className="text-slate-400 text-xs uppercase tracking-wider">
                  VALIDATION PROTOCOL FOCUS
                </div>
                <div className="text-white font-semibold text-sm sm:text-base">
                  {current.annotation}
                </div>
              </div>

              {/* Stepper Navigation Controls */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-lg border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors cursor-pointer active:scale-[0.98]"
                    aria-label="Previous step"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-lg border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors cursor-pointer active:scale-[0.98]"
                    aria-label="Next step"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <span className="font-mono text-xs sm:text-[13px] text-slate-400">
                  Step {current.num} of 06
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
