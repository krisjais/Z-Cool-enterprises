'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Package,
  Search,
  Wrench,
  Layers,
  ShoppingCart,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Camera,
  MessageSquare,
  ShieldCheck,
  Clock,
  HardHat,
  Building2,
  Users,
  Send,
  Check,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import QuoteModal from '@/components/ui/QuoteModal';
import PhotoUpload from '@/components/ui/PhotoUpload';

/* ─── 5 Verified Service Definitions ─── */
const SERVICES_DATA = [
  {
    id: 'supply',
    num: '01',
    icon: Package,
    title: 'Refurbished & Replacement Compressor Supply',
    tagline: 'Scroll · Rotary · Reciprocating · Semi-Hermetic',
    description:
      'We supply refurbished scroll, rotary, and reciprocating compressors sourced from decommissioned commercial HVAC systems and surplus equipment channels. Each unit listed in our catalog carries an honest condition label — Refurbished, Tested Used, Surplus, or New Old Stock — so you know exactly what you are ordering.',
    customerProvides: [
      'Model number or target cooling capacity (TR / HP rating)',
      'Compressor type (Scroll, Rotary, Reciprocating)',
      'Operating electrical voltage (e.g. 380-415V 3-Phase or 230V 1-Phase)',
      'Refrigerant specification (R22, R410A, R407C, R404A, R32)',
    ],
    zcoolHelpsWith: [
      'Real-time warehouse inventory availability verification',
      'Physical inspection and pressure testing documentation',
      'Transparent condition grading and photographic verification',
      'Immediate wooden-crate dispatch and logistics coordination',
    ],
    scopeBullets: [
      'Hermetic scroll compressors for commercial AC and VRF systems',
      'Twin rotary compressors for cassette and split units',
      'Reciprocating compressors for refrigeration and cold storage',
      'Semi-hermetic compressors for industrial rack systems',
    ],
    primaryAction: { label: 'BROWSE COMPRESSORS', href: '/products' },
    secondaryAction: { label: 'REQUEST AVAILABILITY', type: 'quote' },
    hasProducts: true,
  },
  {
    id: 'identification',
    num: '02',
    icon: Search,
    title: 'Compressor Model & Nameplate Identification',
    tagline: 'Model Number · Part Code · Nameplate Photo',
    description:
      'If you have a failed compressor but are unsure of the exact model, our sourcing desk can help. Provide the model number from the nameplate, the brand, the part code, or a clear photograph of the nameplate sticker, and we will work to identify the unit and check whether a matching or compatible replacement is available in our current stock.',
    customerProvides: [
      'Clear photograph of manufacturer nameplate tag or sticker',
      'Outdoor unit / system brand and capacity if sticker is missing',
      'Refrigerant type indicated on unit service valve',
      'Any stamped part codes or terminal cover markings',
    ],
    zcoolHelpsWith: [
      'Manufacturer model code decoding and series identification',
      'Displacement, phase rating, and oil type cross-referencing',
      'Catalog lookup for direct OEM match or functional equivalent',
      'Advice on whether a compatible replacement is currently in stock',
    ],
    scopeBullets: [
      'Model number lookup from nameplate data',
      'Part code cross-reference assistance',
      'Nameplate photograph-based identification',
      'Brand and series identification for unlabelled or damaged plates',
    ],
    primaryAction: { label: 'UPLOAD NAMEPLATE PHOTO', type: 'photo' },
    secondaryAction: { label: 'WHATSAPP PHOTO', type: 'whatsapp' },
    hasProducts: false,
  },
  {
    id: 'matching',
    num: '03',
    icon: Wrench,
    title: 'Replacement Model Matching',
    tagline: 'Compressor Compatibility Assistance',
    description:
      'Finding a functional replacement for a compressor requires matching several technical parameters. We can assist buyers in identifying suitable replacement units from our catalog based on the information provided. Note: confirming a match does not imply guaranteed drop-in compatibility — we recommend verifying technical parameters before installation.',
    customerProvides: [
      'Brand and exact model number of failed compressor',
      'Compressor technology (scroll, rotary, reciprocating)',
      'Voltage, phase rating, and frequency (50Hz)',
      'Refrigerant type (R22, R410A, R407C, R404A, etc.)',
      'System application (commercial AC, cold storage, VRF, etc.)',
    ],
    zcoolHelpsWith: [
      'Capacity equivalence comparison (BTU/h / TR rating)',
      'Mounting footprint and vibration isolator compatibility check',
      'Suction and discharge line diameter alignment (ODF / Rotolock)',
      'Verification of oil type compatibility (POE vs Mineral)',
    ],
    scopeBullets: [
      'Brand and model number evaluation',
      'Compressor type matching (scroll, rotary, reciprocating)',
      'Voltage and phase rating verification',
      'Refrigerant type compatibility review',
      'Application suitability verification',
    ],
    primaryAction: { label: 'REQUEST MATCHING ASSISTANCE', type: 'quote' },
    secondaryAction: { label: 'WHATSAPP SOURCING DESK', type: 'whatsapp' },
    hasProducts: false,
    isChecklist: true,
  },
  {
    id: 'bulk',
    num: '04',
    icon: Layers,
    title: 'Commercial & Bulk Procurement',
    tagline: 'Multi-Unit Orders · Project Procurement',
    description:
      'For HVAC contractors, service agencies, and commercial buyers who require multiple units for project-based or ongoing procurement, we handle model-based sourcing requests with availability checks and quote turnaround. Contact us with your model list and quantity requirement.',
    customerProvides: [
      'Bill of Quantities (BOQ) with requested model codes and quantities',
      'Project installation timeline or staged delivery schedule',
      'Site destination or regional warehouse location',
      'Any specific condition preferences (Refurbished vs Tested Used)',
    ],
    zcoolHelpsWith: [
      'Consolidated multi-unit commercial quotation',
      'Staggered testing and physical verification for all units',
      'Batch packaging and palletized freight logistics',
      'Ongoing account support for repeat service requirements',
    ],
    scopeBullets: [
      'Model-based multi-unit quote requests',
      'Availability check before order confirmation',
      'Sourcing on request for non-listed models',
      'Procurement support for HVAC project teams',
    ],
    primaryAction: { label: 'REQUEST BULK QUOTE', type: 'quote' },
    secondaryAction: { label: 'WHATSAPP DESK', type: 'whatsapp' },
    hasProducts: false,
  },
  {
    id: 'sourcing',
    num: '05',
    icon: ShoppingCart,
    title: 'HVAC Equipment & Component Sourcing',
    tagline: 'Compressor-Related Equipment on Request',
    description:
      'Beyond standard catalog items, we assist with sourcing HVAC compressor-related components and equipment on request. If a specific unit is not listed in our online catalog, contact us with the technical details and we will check availability through our sourcing channels.',
    customerProvides: [
      'Target brand, OEM part number, or technical datasheet',
      'Target equipment type and installation specifications',
      'Target procurement budget and acceptable lead time',
    ],
    zcoolHelpsWith: [
      'Targeted inquiry across verified industrial surplus networks',
      'Initial condition assessment and electrical winding test',
      'Direct freight coordination from source to buyer site',
      'Honest communication if a model cannot be sourced safely',
    ],
    scopeBullets: [
      'Non-listed compressor models sourced on request',
      'Brand-specific equipment availability checks',
      'Contact our desk with model number and quantity',
    ],
    primaryAction: { label: 'SUBMIT SOURCING REQUEST', type: 'quote' },
    secondaryAction: { label: 'WHATSAPP SOURCING DESK', type: 'whatsapp' },
    hasProducts: false,
  },
];

/* ─── 4 Verified Process Steps ─── */
const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Send Requirement',
    desc: 'Share the compressor model number, nameplate photograph, brand, application, or any available technical details with our desk via the quote form or WhatsApp.',
    whatHappens: 'Our desk logs your inquiry, reviews model codes, and checks physical specifications.',
  },
  {
    num: '02',
    title: 'Identify / Match',
    desc: 'Our sourcing desk reviews the details and checks whether a matching or suitable replacement unit is available in our current inventory or can be sourced.',
    whatHappens: 'Technical evaluation of electrical parameters, line sizes, and refrigerant suitability.',
  },
  {
    num: '03',
    title: 'Check Availability',
    desc: 'We confirm current availability and condition. Stock status is communicated honestly — In Stock, Available on Order, or Not Currently Available.',
    whatHappens: 'Direct warehouse physical inspection and verification of testing readiness.',
  },
  {
    num: '04',
    title: 'Quote & Supply',
    desc: 'Once availability is confirmed, we provide pricing and proceed to supply on order confirmation. Dispatch follows after payment and logistics coordination.',
    whatHappens: 'Safe wooden crate packing and national transport dispatch with tracking.',
  },
];

/* ─── 4 Verified Buyer Profiles ─── */
const BUYER_PROFILES = [
  {
    id: 'contractors',
    num: '01',
    icon: HardHat,
    title: 'HVAC Contractors',
    desc: 'Service contractors and installation companies requiring replacement units during repair or commissioning work.',
    keyRequirement: 'Quick turnaround on commercial scroll and rotary units to avoid client AC downtime.',
    typicalOrder: 'Single or twin compressor replacements for package units and chillers.',
  },
  {
    id: 'maintenance',
    num: '02',
    icon: Wrench,
    title: 'Service & Maintenance Companies',
    desc: 'Multi-brand AC maintenance agencies managing compressor failures across commercial and residential properties.',
    keyRequirement: 'Model matching assistance and reliable tested condition with honest grading.',
    typicalOrder: 'Regular stock replenishment and emergency breakdown replacements.',
  },
  {
    id: 'facility',
    num: '03',
    icon: Building2,
    title: 'Facility & Project Teams',
    desc: 'Commercial facility managers, MEP consultants, and project procurement teams sourcing compressors for planned or emergency replacements.',
    keyRequirement: 'Transparent commercial quotations, technical specification compliance, and GST invoicing.',
    typicalOrder: 'Planned retrofits, backup units, and emergency chiller compressor sourcing.',
  },
  {
    id: 'dealers',
    num: '04',
    icon: Users,
    title: 'Dealers & Resellers',
    desc: 'HVAC dealers and wholesale resellers maintaining stock for their regional service networks.',
    keyRequirement: 'Competitive bulk rates, batch condition verification, and consolidated logistics.',
    typicalOrder: 'Multi-unit bulk shipments of popular Copeland and Daikin scroll models.',
  },
];

export default function ServicesInteractiveView({ products = [] }) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeBuyerIndex, setActiveBuyerIndex] = useState(0);

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [nameplatePhoto, setNameplatePhoto] = useState(null);

  const servicesRef = useRef(null);
  const activeService = SERVICES_DATA[activeServiceIndex] || SERVICES_DATA[0];
  const ActiveServiceIcon = activeService.icon;

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAction = (action) => {
    if (!action) return;
    if (action.href) {
      window.location.href = action.href;
      return;
    }
    if (action.type === 'quote' || action.type === 'photo') {
      setQuoteProduct(null);
      setQuoteModalOpen(true);
    } else if (action.type === 'whatsapp') {
      window.open(
        `https://wa.me/919920691707?text=Hello%2C%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(
          activeService.title
        )}`,
        '_blank'
      );
    }
  };

  return (
    <div className="bg-[#F8F9FA] text-[#0F172A] min-h-screen">

      {/* ── 11. SERVICES HERO ── */}
      <section className="bg-[#0A192F] text-white pt-12 sm:pt-16 pb-14 sm:pb-20 border-b border-white/10 relative overflow-hidden engineering-grid-dark">
        {/* Subtle engineering lines background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#0EA6A6]/40 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1D6FA3]/30 to-transparent" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#1D6FA3]/10 blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <Wrench size={14} className="text-[#0EA6A6]" />
                <span>B2B COMPRESSOR SOURCING SERVICES</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.12] tracking-tight">
                COMPRESSOR SOURCING,<br />
                <span className="text-[#0EA6A6]">WITHOUT THE GUESSWORK.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
                Zcool Enterprises helps contractors, service companies, HVAC dealers, and commercial buyers identify and source refurbished and replacement compressors — based on model number, application, nameplate identification, or technical requirement.
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                {['Compressor Supply', 'Model Identification', 'Replacement Matching', 'Bulk Procurement', 'Sourcing on Request'].map((s) => (
                  <span key={s} className="bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-md text-[11px]">
                    {s}
                  </span>
                ))}
              </div>

              {/* Primary & Secondary Actions */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <button
                  onClick={() => {
                    setQuoteProduct(null);
                    setQuoteModalOpen(true);
                  }}
                  className="px-6 sm:px-7 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <FileCheck size={16} />
                  <span>START A REQUIREMENT</span>
                </button>
                <a
                  href="https://wa.me/919920691707?text=Hello%2C%20I%20have%20a%20compressor%20sourcing%20requirement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-[0.98] shadow-xs"
                >
                  <MessageSquare size={16} />
                  <span>WHATSAPP ENGINEER</span>
                </a>
              </div>
            </div>

            {/* Right Authentic Compressor Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-2xl group">
                <Image
                  src="/ac_compressor_3.png"
                  alt="Refurbished AC compressor ready for B2B supply"
                  width={440}
                  height={340}
                  priority
                  className="max-w-full max-h-full object-contain filter drop-shadow-[0_16px_28px_rgba(15,23,42,0.18)] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
                  <span className="badge-industrial bg-[#0A192F] text-[#0EA6A6] border border-[#0EA6A6]/30 font-mono text-[10px] shadow-sm">
                    SOURCED &amp; INSPECTED
                  </span>
                  <span className="badge-industrial bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono text-[10px] shadow-sm">
                    CONDITION GRADED
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 12 & 13. INTERACTIVE SERVICE SELECTOR & ACTIVE SERVICE DETAIL ── */}
      <section
        id="service-selector"
        ref={servicesRef}
        className="py-12 sm:py-16 border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
                PROCUREMENT CAPABILITIES
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Select a Service Workflow
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-500">
              5 VERIFIED PROCUREMENT SERVICES · B2B DESK
            </span>
          </div>

          {/* MOBILE TABS (Horizontal Swipe / Tap Bar) */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-2 min-w-max">
              {SERVICES_DATA.map((svc, idx) => {
                const isActive = idx === activeServiceIndex;
                const Icon = svc.icon;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveServiceIndex(idx)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg border font-mono text-xs font-bold uppercase transition-all ${
                      isActive
                        ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={isActive ? 'text-[#0EA6A6]' : 'text-slate-400'}>{svc.num}</span>
                    <Icon size={14} className={isActive ? 'text-[#0EA6A6]' : 'text-slate-500'} />
                    <span className="whitespace-nowrap">{svc.title.split('&')[0].trim()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DESKTOP SPLIT LAYOUT: Left Vertical Nav | Right Active Service Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Vertical Service Navigation (Sticky) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-2">
              <div className="p-2 bg-slate-100 rounded-xl border border-slate-200/80 space-y-1.5">
                {SERVICES_DATA.map((svc, idx) => {
                  const isActive = idx === activeServiceIndex;
                  const Icon = svc.icon;

                  return (
                    <button
                      key={svc.id}
                      onClick={() => setActiveServiceIndex(idx)}
                      className={`w-full text-left p-3.5 rounded-lg transition-all flex items-start gap-3.5 group relative cursor-pointer ${
                        isActive
                          ? 'bg-[#0A192F] text-white shadow-md'
                          : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/60'
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#0EA6A6] rounded-r" />
                      )}

                      <span
                        className={`font-mono text-base font-extrabold flex-shrink-0 transition-colors ${
                          isActive ? 'text-[#0EA6A6]' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      >
                        {svc.num}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <Icon
                            size={16}
                            className={`flex-shrink-0 ${
                              isActive ? 'text-[#0EA6A6]' : 'text-[#1D6FA3]'
                            }`}
                          />
                          <h3
                            className={`font-display font-bold text-sm leading-snug truncate ${
                              isActive ? 'text-white' : 'text-[#0A192F]'
                            }`}
                          >
                            {svc.title}
                          </h3>
                        </div>
                        <p
                          className={`font-mono text-[11px] truncate mt-1 ${
                            isActive ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {svc.tagline}
                        </p>
                      </div>

                      <ChevronRight
                        size={16}
                        className={`flex-shrink-0 mt-1 transition-transform ${
                          isActive
                            ? 'text-[#0EA6A6] translate-x-0.5'
                            : 'text-slate-300 group-hover:text-slate-500'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Direct Help Callout in Left Column */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  FAST SOURCING RESPONSE
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Inquiries sent with model number or nameplate photo are prioritized for stock verification within working hours.
                </p>
                <a
                  href="https://wa.me/919920691707?text=Hello%2C%20I%20have%20a%20compressor%20sourcing%20question"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <MessageSquare size={13} />
                  <span>CHAT WITH SOURCING DESK</span>
                </a>
              </div>
            </div>

            {/* Right Active Service Content Panel */}
            <div className="lg:col-span-8">
              <div
                key={activeService.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs animate-fadeIn transition-all"
              >
                
                {/* 1. Service Top Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                        SERVICE {activeService.num}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="font-mono text-xs text-slate-500 uppercase">
                        {activeService.tagline}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#0A192F] rounded-lg flex items-center justify-center text-[#0EA6A6] flex-shrink-0">
                        <ActiveServiceIcon size={18} />
                      </div>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                        {activeService.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                    <button
                      onClick={() => handleAction(activeService.primaryAction)}
                      className="px-4 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                    >
                      <span>{activeService.primaryAction.label}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

                {/* 2. Service Description */}
                <p className="text-slate-700 text-sm font-sans leading-relaxed">
                  {activeService.description}
                </p>

                {/* 3. STRUCTURED BREAKDOWN: YOU PROVIDE vs ZCOOL HELPS WITH */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* What Customer Provides */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1D6FA3]" />
                      <h4 className="font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider">
                        WHAT YOU PROVIDE:
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {activeService.customerProvides.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-700 leading-snug">
                          <Check size={14} className="text-[#1D6FA3] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What Zcool Helps With */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      <h4 className="font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider">
                        WHAT ZCOOL HELPS WITH:
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {activeService.zcoolHelpsWith.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-700 leading-snug">
                          <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* 4. Verified Service Capabilities / Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    VERIFIED SCOPE &amp; CAPABILITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.scopeBullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-slate-200/80 rounded-lg flex items-start gap-2 text-xs font-sans text-slate-700"
                      >
                        <span className="font-mono text-[#1D6FA3] font-bold">→</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Special Block: If Photo Upload Service Active */}
                {activeService.id === 'identification' && (
                  <div className="bg-[#0A192F] text-white rounded-xl p-6 space-y-4 border border-white/10">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#0EA6A6] font-bold uppercase tracking-wider">
                      <Camera size={16} />
                      <span>DIRECT NAMEPLATE PHOTO SUBMISSION</span>
                    </div>
                    <p className="text-slate-300 text-xs font-sans leading-relaxed">
                      Photograph the compressor sticker tag and upload it here. We will decode the model code and check matching replacement stock.
                    </p>
                    <div className="bg-white text-slate-900 rounded-lg p-4">
                      <PhotoUpload
                        label="Attach Compressor Nameplate Photo"
                        onPhotoSelect={(f) => setNameplatePhoto(f)}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      <button
                        onClick={() => {
                          setQuoteProduct(null);
                          setQuoteModalOpen(true);
                        }}
                        className="px-5 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                      >
                        <FileCheck size={14} />
                        <span>SUBMIT PHOTO FOR IDENTIFICATION</span>
                      </button>
                      <a
                        href="https://wa.me/919920691707?text=Hello%2C%20I%20have%20a%20compressor%20nameplate%20photo%20to%20identify"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                      >
                        <MessageSquare size={14} />
                        <span>SEND VIA WHATSAPP</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* 6. REAL INVENTORY PREVIEW (For Service 01: Refurbished & Replacement Compressor Supply) */}
                {activeService.hasProducts && products.length > 0 && (
                  <div className="pt-6 border-t border-slate-200/80 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider block">
                          AVAILABLE UNITS IN CURRENT STOCK
                        </span>
                        <span className="text-xs text-slate-500 font-sans">
                          Inspected, pressure-tested, and ready for dispatch from Mumbai
                        </span>
                      </div>
                      <Link
                        href="/products"
                        className="font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1"
                      >
                        <span>VIEW ALL INVENTORY</span>
                        <ChevronRight size={13} />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {products.slice(0, 3).map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onQuoteClick={(prod) => {
                            setQuoteProduct(prod);
                            setQuoteModalOpen(true);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Action Footer Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <ShieldCheck size={16} className="text-[#1D6FA3] flex-shrink-0" />
                    <span>Inquiries handled directly by technical sourcing staff</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleAction(activeService.primaryAction)}
                      className="font-mono font-bold text-[#1D6FA3] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>{activeService.primaryAction.label}</span>
                      <ArrowRight size={13} />
                    </button>
                    <span className="text-slate-300">|</span>
                    <a
                      href="https://wa.me/919920691707"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <span>WHATSAPP DESK</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 14. INTERACTIVE SERVICE JOURNEY (HOW THE SERVICE WORKS) ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
              PROCUREMENT JOURNEY
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
              How the Service Works
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
              Step-by-step workflow from initial model inquiry to physical testing and dispatch.
            </p>
          </div>

          {/* 4 Interactive Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = idx === activeProcessStep;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-md ring-1 ring-[#0EA6A6]'
                      : 'bg-slate-50 hover:bg-white text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-2xl font-extrabold select-none leading-none ${
                          isSelected ? 'text-[#0EA6A6]' : 'text-slate-300'
                        }`}
                      >
                        {step.num}
                      </span>
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          isSelected ? 'bg-[#0EA6A6]' : 'bg-slate-300'
                        }`}
                      />
                    </div>
                    <h3
                      className={`font-display font-bold text-base leading-snug ${
                        isSelected ? 'text-white' : 'text-[#0A192F]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs font-sans leading-relaxed ${
                        isSelected ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>

                  <div
                    className={`pt-2 border-t text-[11px] font-mono ${
                      isSelected ? 'border-white/10 text-[#0EA6A6]' : 'border-slate-200 text-slate-500'
                    }`}
                  >
                    <span>{isSelected ? 'ACTIVE STAGE' : 'CLICK TO VIEW DETAILS'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Detailed Explanation */}
          <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-[#1D6FA3] uppercase tracking-wider block">
                STAGE {PROCESS_STEPS[activeProcessStep].num} DETAILS: {PROCESS_STEPS[activeProcessStep].title.toUpperCase()}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 font-sans">
                {PROCESS_STEPS[activeProcessStep].whatHappens}
              </p>
            </div>
            <button
              onClick={() => {
                setQuoteProduct(null);
                setQuoteModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex-shrink-0 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
            >
              START INQUIRY
            </button>
          </div>

        </div>
      </section>

      {/* ── 15. CUSTOMER TYPES (WHO WE HELP) ── */}
      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
              BUYER PROFILES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
              Who We Help
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
              Tailored procurement support designed around real B2B cooling requirements.
            </p>
          </div>

          {/* Horizontal / Interactive Audience Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUYER_PROFILES.map((buyer, idx) => {
              const isSelected = idx === activeBuyerIndex;
              const Icon = buyer.icon;
              return (
                <div
                  key={buyer.id}
                  onClick={() => setActiveBuyerIndex(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer space-y-3 ${
                    isSelected
                      ? 'bg-white border-[#1D6FA3] shadow-md ring-1 ring-[#1D6FA3]'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-[#0A192F] text-[#0EA6A6]' : 'bg-slate-100 text-[#1D6FA3]'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-bold">{buyer.num}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#0A192F]">
                    {buyer.title}
                  </h3>

                  <p className="text-slate-600 text-xs font-sans leading-relaxed">
                    {buyer.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block font-bold">
                      KEY REQUIREMENT
                    </span>
                    <p className="text-slate-700 text-xs font-sans leading-snug">
                      {buyer.keyRequirement}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 16. PROMINENT NAMEPLATE / SOURCING WORKFLOW ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A192F] text-white border-b border-white/10 relative overflow-hidden engineering-grid-dark">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs font-bold text-[#0EA6A6] uppercase tracking-wider block">
                NAMEPLATE SOURCING WORKFLOW
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-snug">
                HAVE THE COMPRESSOR,<br />
                <span className="text-[#0EA6A6]">BUT NOT THE MODEL?</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-xl">
                If your compressor nameplate is still readable, photograph it clearly. The nameplate carries the model number, serial number, voltage rating, refrigerant type, and horsepower — all the information needed to find a matching replacement.
              </p>
              
              <div className="space-y-2 font-mono text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#0EA6A6]">→</span>
                  <span>Photograph the nameplate sticker clearly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0EA6A6]">→</span>
                  <span>Include the full model code and voltage details</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0EA6A6]">→</span>
                  <span>Send via the form or WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0EA6A6]">→</span>
                  <span>We check current stock and respond with availability</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={() => {
                    setQuoteProduct(null);
                    setQuoteModalOpen(true);
                  }}
                  className="px-6 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Camera size={16} />
                  <span>UPLOAD NAMEPLATE</span>
                </button>
                <button
                  onClick={() => {
                    setQuoteProduct(null);
                    setQuoteModalOpen(true);
                  }}
                  className="px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <FileCheck size={16} className="text-[#0EA6A6]" />
                  <span>REQUEST A QUOTE</span>
                </button>
              </div>
            </div>

            {/* Right Photo Upload Box */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                <Camera size={16} />
                <span>UPLOAD NAMEPLATE PHOTO</span>
              </div>
              <p className="text-slate-600 text-xs font-sans leading-relaxed">
                Attach a photograph of the nameplate sticker. JPG, PNG, or WEBP (Max 5MB). Our sourcing desk will review and respond with stock availability.
              </p>

              <PhotoUpload
                label="Attach Compressor Nameplate Photo"
                onPhotoSelect={(file) => setNameplatePhoto(file)}
              />

              <button
                onClick={() => {
                  setQuoteProduct(null);
                  setQuoteModalOpen(true);
                }}
                className="w-full px-5 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] cursor-pointer"
              >
                <FileCheck size={15} />
                <span>SUBMIT PHOTO &amp; GET AVAILABILITY</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── 18. CATALOG FOOTER CTA ── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="font-display font-extrabold text-xl text-[#0A192F]">
                Browse the Full Compressor Inventory
              </h2>
              <p className="text-slate-500 text-xs font-sans">
                Scroll, rotary, and reciprocating compressors from Copeland, Daikin, LG, and Danfoss.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start flex-shrink-0">
              <Link
                href="/products"
                className="px-6 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-[0.98]"
              >
                <span>VIEW ALL COMPRESSORS</span>
                <ArrowRight size={15} />
              </Link>
              <button
                onClick={() => {
                  setQuoteProduct(null);
                  setQuoteModalOpen(true);
                }}
                className="px-5 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <span>REQUEST A QUOTE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Central Reusable Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={quoteProduct}
      />

    </div>
  );
}
