'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Search,
  ClipboardList,
  Tag,
  Box,
  CheckCircle2,
  Camera,
  MessageSquare,
  FileCheck,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowRight,
  Building2,
  Gauge,
  Activity,
  Layers,
  HelpCircle,
  Phone,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/constants/company';
import ProductCard from '@/components/ui/ProductCard';
import QuoteModal from '@/components/ui/QuoteModal';
import PhotoUpload from '@/components/ui/PhotoUpload';
import ScrollReveal from '@/components/ui/ScrollReveal';

// ── VERIFIED 6-STAGE REFURBISHMENT PROCESS ──
const PROCESS_STAGES = [
  {
    num: '01',
    id: 'source-inspect',
    title: 'Sourcing & Incoming Inspection',
    shortTitle: 'SOURCE & INSPECT',
    heading: 'Compressor Acquisition & Visual Check',
    desc: 'Units are acquired from decommissioned commercial HVAC systems, surplus inventory, and verified trade channels. Each incoming compressor undergoes an immediate visual check for shell integrity, terminal block condition, and connection ports.',
    focusArea: 'OEM CASING & SERIAL STAMP',
    annotation: 'Visual shell assessment for genuine OEM serial stamping, housing integrity, and terminal block condition.',
    image: '/ac_compressor.png',
    markerPosition: 'top-[36%] left-[32%]',
  },
  {
    num: '02',
    id: 'assess',
    title: 'Physical Assessment',
    shortTitle: 'PHYSICAL ASSESSMENT',
    heading: 'Model Verification & Structural Check',
    desc: 'Each compressor is examined against manufacturer technical specifications. Our technicians verify mounting footprint alignment, suction and discharge port threads, and inspect for external damage or casing corrosion.',
    focusArea: 'MOUNTING FOOTPRINT & PORTS',
    annotation: 'Verification of mounting footprint dimensions, port threads, and external casing condition.',
    image: '/ac_compressor_2.png',
    markerPosition: 'top-[22%] right-[28%]',
  },
  {
    num: '03',
    id: 'test',
    title: 'Operational & Electrical Check',
    shortTitle: 'ELECTRICAL CHECK',
    heading: 'Operational & Coil Integrity Testing',
    desc: 'Units undergo electrical continuity and operational checks. Motor winding integrity and terminal block connections are verified to ensure operational viability under commercial electrical supply.',
    focusArea: 'TERMINAL BOX & WINDING INTEGRITY',
    annotation: 'Electrical continuity check, terminal condition review, and motor winding verification.',
    image: '/ac_compressor.png',
    markerPosition: 'top-[52%] left-[34%]',
  },
  {
    num: '04',
    id: 'recondition',
    title: 'Reconditioning & Servicing',
    shortTitle: 'RECONDITIONING',
    heading: 'Cleaning & Component Servicing',
    desc: 'External surfaces are thoroughly cleaned and prepared. Dependent on unit requirement and incoming condition, connection stubs are cleaned, internal oil condition is evaluated, and servicing work is performed.',
    focusArea: 'HOUSING & CONNECTION STUBS',
    annotation: 'Cleaning of external casing, port servicing, and evaluation of lubrication status.',
    image: '/ac_compressor_3.png',
    markerPosition: 'bottom-[28%] right-[34%]',
  },
  {
    num: '05',
    id: 'verify',
    title: 'Condition Verification & Sealing',
    shortTitle: 'VERIFICATION & SEALING',
    heading: 'Condition Grading & Port Sealing',
    desc: 'Units are assigned an accurate condition label (Refurbished, Tested, Pressure Tested, Bench Tested, or Overhauled). Suction and discharge ports are sealed with protective caps to prevent contamination during warehousing.',
    focusArea: 'SEALED SERVICE PORTS',
    annotation: 'Application of protective port seals and assignment of verified condition label.',
    image: '/ac_compressor_2.png',
    markerPosition: 'top-[16%] left-[45%]',
  },
  {
    num: '06',
    id: 'dispatch',
    title: 'B2B Freight Dispatch',
    shortTitle: 'FREIGHT DISPATCH',
    heading: 'Protective Packaging & Logistics',
    desc: 'Compressors are packaged for freight transit with protective crating and vibration dampening. Technical compatibility is reviewed with buyers prior to dispatch from our Mumbai central warehouse.',
    focusArea: 'PALLET MOUNTING & PROTECTION',
    annotation: 'Reinforced pallet securing, transit wrap, and dispatch documentation for Pan-India freight.',
    image: '/ac_compressor.png',
    markerPosition: 'bottom-[14%] left-[45%]',
  },
];

// ── VERIFIED CONDITION LABELS USED IN ACTUAL CATALOGUE ──
const CONDITION_DEFINITIONS = [
  {
    label: 'Refurbished',
    tag: 'Standard Refurbishment',
    desc: 'Unit has been physically inspected, cleaned, and prepared for commercial reuse. Any obvious external or connection faults have been addressed.',
  },
  {
    label: 'Refurbished & Tested',
    tag: 'Operational Verification',
    desc: 'Inspected and subjected to an operational check to confirm functional performance before inventory listing.',
  },
  {
    label: 'Refurbished & Pressure Tested',
    tag: 'Pressure Integrity Verified',
    desc: 'Casing shell and port connections verified for pressure containment in addition to standard physical inspection.',
  },
  {
    label: 'Refurbished & Overhauled',
    tag: 'Internal Overhaul',
    desc: 'Unit has been disassembled, internal components inspected and serviced, reassembled, and re-tested.',
  },
  {
    label: 'Refurbished & Leak Tested',
    tag: 'Leak Containment Checked',
    desc: 'Unit has been checked for refrigerant leakage integrity across ports, welds, and casing seals.',
  },
  {
    label: 'Refurbished & Bench Tested',
    tag: 'Bench Test Verified',
    desc: 'Unit was tested on an operational bench setup to verify mechanical and electrical parameters before listing.',
  },
];

// ── TECHNICAL REFERENCE DETAILS (ACCORDION) ──
const REFURBISHMENT_DETAILS = [
  {
    id: 'detail-01',
    number: '01',
    title: 'Sourcing & Incoming Inspection',
    summary: 'What is assessed upon initial compressor acquisition.',
    content:
      'Compressors enter our inventory from decommissioned commercial installations, chiller retrofits, and trusted trade channels. Upon arrival at our Mumbai workshop, technicians log the manufacturer serial number, inspect the external shell for physical trauma, verify terminal block integrity, and record any available equipment history.',
  },
  {
    id: 'detail-02',
    number: '02',
    title: 'Physical & Model Verification',
    summary: 'What is checked during dimensional and structural assessment.',
    content:
      'We verify the compressor model code against OEM technical documentation. Physical mounting footprint dimensions, suction and discharge line connection sizes, and terminal orientation are confirmed so buyers receive drop-in replacement units that match their existing chiller or package AC frames.',
  },
  {
    id: 'detail-03',
    number: '03',
    title: 'Electrical & Operational Checks',
    summary: 'What tests are conducted for electrical viability.',
    content:
      'Motor windings are tested for electrical continuity, phase balance, and terminal resistance. Units designated as "Tested" or "Bench Tested" undergo operational run-up verification to confirm smooth mechanical operation before warehouse approval.',
  },
  {
    id: 'detail-04',
    number: '04',
    title: 'Condition Grading & Protective Sealing',
    summary: 'How units are labeled and preserved for storage and freight.',
    content:
      'Every unit is assigned a specific condition label reflecting the exact evaluation it received. Suction and discharge ports are fitted with protective seals to prevent ambient air and moisture ingress while stored in our Mumbai inventory and during Pan-India freight dispatch.',
  },
];

// ── FACTUAL B2B SOURCING BENEFITS ──
const REFURBISH_BENEFITS = [
  {
    number: '01',
    title: 'Immediate Replacement Sourcing',
    desc: 'Commercial cooling breakdowns demand fast resolution. Refurbished compressors in existing inventory bypass OEM production backorders and international lead times.',
  },
  {
    number: '02',
    title: 'Discontinued & Legacy Models',
    desc: 'Many commercial installations use older compressor frame sizes no longer in active production. Sourcing refurbished legacy models prevents costly piping and ductwork alterations.',
  },
  {
    number: '03',
    title: 'Multi-Brand Inventory Access',
    desc: 'Instead of managing separate supplier channels, contractors and plant engineers can source Copeland, Daikin, Danfoss, and LG models through a single technical desk.',
  },
  {
    number: '04',
    title: 'Transparent Condition Grading',
    desc: 'Every unit is labeled with its verified evaluation level — from basic inspection to pressure-tested and overhauled — ensuring procurement clarity.',
  },
];

// ── WHAT WE VERIFY (TECHNICAL TRUST) ──
const VERIFICATION_CHECKS = [
  {
    category: 'MODEL / IDENTIFICATION',
    desc: 'Nameplate data, model code, voltage phase, and serial verification.',
  },
  {
    category: 'PHYSICAL CONDITION',
    desc: 'Outer casing integrity, mounting footprint alignment, and connection port threads.',
  },
  {
    category: 'ELECTRICAL INTEGRITY',
    desc: 'Terminal block condition, winding insulation, and operational continuity.',
  },
  {
    category: 'PRESSURE / LEAK CONDITION',
    desc: 'Shell and port pressure containment check for units designated pressure-tested or leak-tested.',
  },
  {
    category: 'REFURBISHMENT STATUS',
    desc: 'Honest grading under verified condition standards (Refurbished, Tested, Overhauled, Bench Tested).',
  },
  {
    category: 'FINAL DISPATCH CONDITION',
    desc: 'Protective port sealing to prevent contamination during warehousing and freight transit.',
  },
];

export default function RefurbishmentProcessView({ featuredProducts = [] }) {
  const [activeStep, setActiveStep] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('detail-01');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialTab, setQuoteInitialTab] = useState('quote');
  const [photoFile, setPhotoFile] = useState(null);

  const current = PROCESS_STAGES[activeStep] || PROCESS_STAGES[0];

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? PROCESS_STAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev === PROCESS_STAGES.length - 1 ? 0 : prev + 1));
  };

  const openQuoteModal = (tab = 'quote') => {
    setQuoteInitialTab(tab);
    setIsQuoteOpen(true);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A] selection:bg-[#1D6FA3] selection:text-white">
      
      {/* ── 1. CINEMATIC INDUSTRIAL HERO (Section 4 & 5) ── */}
      <section className="bg-[#0A192F] text-white pt-14 sm:pt-20 pb-16 sm:pb-24 border-b border-white/10 relative overflow-hidden">
        {/* Engineering Blueprint Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0EA6A6]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Description & CTAs (~55%) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1.5 rounded uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                <span>REFURBISHMENT PROCESS</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1]">
                FROM USED COMPRESSOR<br />
                <span className="text-[#0EA6A6]">TO READY-TO-SUPPLY EQUIPMENT</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed max-w-2xl font-normal">
                At Zcool Enterprises, our multi-stage evaluation and preparation workflow ensures commercial AC compressors are physically inspected, operationally tested, condition-classified, and sealed for B2B dispatch.
              </p>

              {/* Factual Workflow Badge */}
              <div className="flex items-center gap-3 font-mono text-xs text-slate-400 border-l-2 border-[#0EA6A6] pl-3 py-0.5">
                <span className="font-bold text-white uppercase tracking-wider">
                  PROCESS 01 → 06
                </span>
                <span>•</span>
                <span className="text-slate-300">VERIFIED B2B PREPARATION WORKFLOW</span>
              </div>

              {/* Hero Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono text-xs">
                <a
                  href="#signature-process"
                  className="px-6 py-3.5 rounded bg-[#1D6FA3] hover:bg-[#165680] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99]"
                >
                  <span>EXPLORE THE PROCESS</span>
                  <ArrowRight size={14} />
                </a>

                <button
                  type="button"
                  onClick={() => openQuoteModal('quote')}
                  className="px-6 py-3.5 rounded bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99]"
                >
                  <FileCheck size={15} className="text-[#0EA6A6]" />
                  <span>REQUEST A QUOTE</span>
                </button>
              </div>

            </div>

            {/* Right Column: Large Real Compressor Industrial Composition (~45%) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">
              {/* Floor Contact Depth Shadow */}
              <div className="absolute bottom-6 w-3/4 max-w-[320px] h-8 bg-black/80 rounded-full blur-xl pointer-events-none" />

              {/* Real Compressor Photo */}
              <img
                src="/ac_compressor.png"
                alt="Zcool Compressor Refurbishment"
                className="relative z-10 max-h-[320px] sm:max-h-[400px] lg:max-h-[440px] w-auto object-contain select-none transition-transform duration-300"
                width={440}
                height={480}
              />

              {/* Measurement Baseline Technical Hailline */}
              <div className="w-full px-2 flex items-center justify-between font-mono text-[11px] text-slate-400 border-t border-white/10 pt-2.5 mt-3 relative z-10">
                <span className="text-slate-300">STAGE 01 → 06</span>
                <span className="text-[#0EA6A6] font-semibold">MUMBAI WORKSHOP EVALUATION</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROCESS INTRODUCTION & HORIZONTAL STEPPER RAIL (Section 6) ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
              EVALUATION ROADMAP
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] tracking-tight">
              HOW THE PROCESS WORKS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              Compressor condition and required work can vary by model, origin, and incoming unit. Every unit passes through our structured 6-stage protocol from acquisition to dispatch.
            </p>
          </div>

          {/* Horizontal Process Index (Clickable to jump to stage in sticky viewer) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROCESS_STAGES.map((stage, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    setActiveStep(idx);
                    const el = document.getElementById('signature-process');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-left p-3.5 rounded border transition-all cursor-pointer font-mono ${
                    isSelected
                      ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/90'
                  }`}
                >
                  <span className={`text-[10px] font-bold block mb-1 ${isSelected ? 'text-[#0EA6A6]' : 'text-slate-400'}`}>
                    STAGE {stage.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider block truncate">
                    {stage.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. SIGNATURE STICKY PROCESS STORYTELLING SECTION (Section 7, 8, 9, 23) ── */}
      <section
        id="signature-process"
        className="py-16 sm:py-20 lg:py-24 bg-[#0A192F] text-white border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <div className="font-mono text-xs text-[#0EA6A6] uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0EA6A6]" />
              <span>INTERACTIVE STAGE INSPECTION</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              6-STAGE TECHNICAL EVALUATION
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              Explore how each compressor is assessed, tested, classified, and protected before shipment.
            </p>
          </div>

          {/* Desktop & Tablet Split Sticky Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Sticky Anchored Compressor Visual (~45%) */}
            <div className="lg:col-span-5 lg:sticky lg:top-[120px] flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 min-h-[380px] sm:min-h-[460px] relative overflow-hidden shadow-xl">
              {/* Radial Glow */}
              <div className="absolute inset-0 pointer-events-none bg-radial from-[#0EA6A6]/10 to-transparent" />

              {/* Anchored Authentic Compressor Image */}
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[280px] sm:max-h-[360px] w-auto max-w-[90%] object-contain select-none transition-all duration-300 relative z-10"
              />

              {/* Floor Contact Shadow */}
              <div className="w-40 sm:w-56 h-3 bg-black/70 rounded-full blur-[4px] mt-2 pointer-events-none" />

              {/* Focal Coordinate Annotation */}
              <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">
                  STAGE <strong className="text-white">{current.num} / 06</strong>
                </span>
                <span className="text-[#0EA6A6] font-semibold uppercase text-[11px] truncate max-w-[60%]">
                  {current.focusArea}
                </span>
              </div>
            </div>

            {/* Right Column: Process Navigator & Active Stage Content (~55%) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Vertical Process Step Navigator (Desktop & Tablet) */}
              <div className="hidden sm:grid grid-cols-6 gap-2 border-b border-white/10 pb-4">
                {PROCESS_STAGES.map((stage, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`text-left p-2 rounded transition-colors cursor-pointer font-mono ${
                        isActive
                          ? 'bg-[#0EA6A6] text-[#0A192F] font-bold shadow-xs'
                          : 'text-slate-400 hover:text-white bg-white/5'
                      }`}
                    >
                      <span className="text-[10px] block opacity-75">{stage.num}</span>
                      <span className="text-[11px] uppercase block truncate">{stage.shortTitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Stepper Controls (< sm) */}
              <div className="flex sm:hidden items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-xs">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1"
                >
                  <ChevronLeft size={14} />
                  <span>Prev</span>
                </button>
                <span className="text-slate-300 font-bold">
                  Stage {current.num} of 06
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight size={14} />
                </button>
              </div>

              {/* Active Stage Editorial Card */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 space-y-6">
                
                <div className="space-y-1">
                  <div className="font-mono text-4xl sm:text-6xl font-extrabold text-white/20 leading-none">
                    {current.num}
                  </div>
                  <div className="font-mono text-xs text-[#0EA6A6] font-bold uppercase tracking-wider">
                    STAGE {current.num} — {current.shortTitle}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {current.heading}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                    {current.desc}
                  </p>
                </div>

                {/* Validation Protocol Focus */}
                <div className="pt-4 border-t border-white/10 space-y-1.5 font-mono text-xs">
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider block">
                    VALIDATION FOCUS:
                  </span>
                  <p className="text-white font-semibold">
                    {current.annotation}
                  </p>
                </div>

                {/* Stepper Navigation Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="p-2 rounded border border-white/20 hover:border-white text-white transition-colors cursor-pointer"
                      aria-label="Previous stage"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="p-2 rounded border border-white/20 hover:border-white text-white transition-colors cursor-pointer"
                      aria-label="Next stage"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <span className="text-slate-400 text-xs">
                    {current.title}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 4. "REFURBISHMENT IS CONDITION-BASED" (Section 10 & 13) ── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Editorial Explanation (~60%) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
                CONDITION-DEPENDENT EVALUATION
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] tracking-tight">
                REFURBISHMENT IS CONDITION-BASED
              </h2>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                <p>
                  Refurbishment scope depends on the compressor model, incoming condition, application and required checks. Condition and testing procedures vary by compressor and requirement.
                </p>
                <p>
                  Not every compressor in commercial circulation requires the same intervention. Units sourced from clean decommissioned facilities may only require visual confirmation, coil testing, and protective port sealing. Other units undergo operational bench testing, pressure verification, or mechanical overhauling.
                </p>
                <p>
                  Our inventory clearly distinguishes each unit’s evaluation level through honest, verified condition labeling so technical buyers can procure with complete confidence.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border-l-4 border-[#1D6FA3] rounded-r font-mono text-xs text-slate-700">
                <strong>Procurement Note:</strong> Detailed test certificates or specific verification records are confirmed with buyers based on model availability.
              </div>
            </div>

            {/* Right Column: Large Compressor Image Presentation (~40%) */}
            <div className="lg:col-span-5 bg-[#FAFAFA] border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center min-h-[300px] shadow-xs">
              <img
                src="/ac_compressor_2.png"
                alt="Refurbished compressor condition"
                className="max-h-[260px] w-auto object-contain select-none"
              />
              <div className="w-36 h-2 bg-slate-900/10 rounded-full blur-[3px] mt-2" />
              <span className="font-mono text-[11px] text-slate-500 uppercase mt-2">
                VERIFIED INVENTORY STANDARD
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. WHAT WE VERIFY (Section 11) ── */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
              TECHNICAL TRUST
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] tracking-tight">
              WHAT WE VERIFY
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              Available verification information may include the following checks based on compressor type, incoming state, and buyer specifications:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-mono text-xs">
            {VERIFICATION_CHECKS.map((check, idx) => (
              <div
                key={check.category}
                className="bg-white border border-slate-200 rounded-lg p-5 space-y-2 shadow-xs hover:border-[#1D6FA3]/40 transition-colors"
              >
                <div className="flex items-center gap-2 font-bold text-[#0A192F] uppercase tracking-wider border-b border-slate-100 pb-2">
                  <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                  <span>{check.category}</span>
                </div>
                <p className="font-sans text-xs text-slate-600 leading-relaxed pt-1">
                  {check.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. CONDITION LABELS BREAKDOWN (Section 11 & Data) ── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
              CATALOGUE DEFINITIONS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] tracking-tight">
              OUR CONDITION LABELS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              Every compressor in our inventory is tagged with its actual evaluation standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONDITION_DEFINITIONS.map((c) => (
              <div
                key={c.label}
                className="bg-[#FAFAFA] border border-slate-200 rounded-lg p-5 space-y-2.5 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded uppercase">
                    <ShieldCheck size={12} className="text-emerald-600" />
                    <span>{c.label}</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase">
                    {c.tag}
                  </span>
                </div>
                <p className="text-slate-600 text-xs font-sans leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. PROCESS DETAIL ACCORDION / DISCLOSURE (Section 14) ── */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
              TECHNICAL REFERENCE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] tracking-tight">
              REFURBISHMENT DETAILS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              Detailed technical breakdown of what is assessed, serviced, and sealed across each phase.
            </p>
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl space-y-3 font-mono">
            {REFURBISHMENT_DETAILS.map((item) => {
              const isOpen = openAccordion === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-[#1D6FA3] font-bold text-xs sm:text-sm">
                        [{item.number}]
                      </span>
                      <div>
                        <span className="font-display font-bold text-sm sm:text-base text-slate-900 block">
                          {item.title}
                        </span>
                        <span className="text-slate-500 font-sans text-xs hidden sm:block">
                          {item.summary}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#1D6FA3]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 8. WHY CONSIDER A REFURBISHED COMPRESSOR? (Section 15) ── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
              B2B PROCUREMENT VALUE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] tracking-tight">
              WHY CONSIDER A REFURBISHED COMPRESSOR?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              Factual operational benefits for contractors, facility managers, and commercial plant operators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REFURBISH_BENEFITS.map((b) => (
              <div
                key={b.number}
                className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5 shadow-xs"
              >
                <div className="font-mono text-xs font-bold text-[#1D6FA3] tracking-widest uppercase">
                  {b.number} / VALUE
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 leading-snug">
                  {b.title}
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 9. MODEL IDENTIFICATION / NAMEPLATE PHOTO BLOCK (Section 16) ── */}
      <section className="py-14 sm:py-20 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] uppercase tracking-wider">
              <Camera size={15} />
              <span>TECHNICAL IDENTIFICATION DESK</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              NOT SURE WHICH COMPRESSOR YOU NEED?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              Send us the existing model number or nameplate sticker photo. Our Mumbai technical desk will verify mounting footprint dimensions, electrical phase, displacement, and confirm matching replacement options.
            </p>

            {/* Interactive Photo Upload Widget */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 space-y-4">
              <PhotoUpload
                label="Attach Compressor Nameplate Photo"
                onPhotoSelect={(file) => setPhotoFile(file)}
              />

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => openQuoteModal('photo')}
                  className="px-6 py-3 rounded bg-[#0EA6A6] hover:bg-[#0c8e8e] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                >
                  <Camera size={14} />
                  <span>UPLOAD NAMEPLATE PHOTO</span>
                </button>

                <button
                  type="button"
                  onClick={() => openQuoteModal('quote')}
                  className="px-6 py-3 rounded bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FileCheck size={14} />
                  <span>REQUEST A QUOTE</span>
                </button>

                <a
                  href={`${COMPANY_DETAILS.whatsappUrl}?text=Hello%2C%20I%20have%20a%20compressor%20nameplate%20photo%20and%20need%20assistance%20verifying%20a%20replacement%20model.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded bg-emerald-700 hover:bg-emerald-800 text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare size={14} />
                  <span>WHATSAPP ENGINEER</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
              <a href={COMPANY_DETAILS.primaryTel} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone size={12} className="text-[#0EA6A6]" />
                <span>Technical Helpline: {COMPANY_DETAILS.formattedPrimaryPhone}</span>
              </a>
              <span>•</span>
              <span>Pan-India Commercial Freight</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. RELATED PRODUCT DISCOVERY (Section 17) ── */}
      {featuredProducts && featuredProducts.length > 0 && (
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
                  WAREHOUSE INVENTORY
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F] tracking-tight">
                  SEE AVAILABLE COMPRESSORS
                </h2>
              </div>
              <Link
                href="/products"
                className="font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                <span>VIEW FULL INVENTORY</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.slice(0, 3).map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 60} direction="up" distance={12}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 11. FINAL INDUSTRIAL CTA (Section 18) ── */}
      <section className="py-16 sm:py-20 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
            <span>MUMBAI SOURCING DESK</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            READY TO SOURCE A COMPRESSOR?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto">
            Tell us the model, application or replacement requirement. Our Mumbai technical team will confirm available stock and exact condition parameters.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs">
            <button
              type="button"
              onClick={() => openQuoteModal('quote')}
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#1D6FA3] hover:bg-[#165680] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-[0.99]"
            >
              <FileCheck size={15} />
              <span>GET A QUOTE</span>
            </button>

            <a
              href={`${COMPANY_DETAILS.whatsappUrl}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20refurbished%20compressor%20requirement.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-emerald-700 hover:bg-emerald-800 text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs active:scale-[0.99]"
            >
              <MessageSquare size={15} />
              <span>WHATSAPP ENGINEER</span>
            </a>
          </div>
        </div>
      </section>

      {/* Shared Inquiry Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialTab={quoteInitialTab}
        initialPhoto={photoFile}
      />
    </div>
  );
}
