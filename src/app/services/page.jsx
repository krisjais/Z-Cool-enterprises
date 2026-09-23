import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Search,
  Camera,
  Package,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
  Building2,
  HardHat,
  ShoppingCart,
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import {
  ServicesHeroCTA,
  ServicesQuoteButton,
  ServicesPhotoBlock,
  InlineQuoteLink,
} from '@/components/services/ServicesActions';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Compressor Sourcing & Supply Services | Zcool Enterprises',
  description:
    'Zcool Enterprises provides refurbished and replacement compressor supply, model identification, replacement matching, and commercial HVAC equipment sourcing for contractors, service companies, and industrial buyers.',
};

/* ─── A small product preview drawn from real catalog ─── */
const FEATURED_PRODUCTS = PRODUCTS_CATALOG.slice(0, 3);

/* ─── Service definitions ─── */
const SERVICES = [
  {
    id: 'supply',
    num: '01',
    icon: Package,
    title: 'Refurbished & Replacement Compressor Supply',
    tagline: 'Scroll · Rotary · Reciprocating · Semi-Hermetic',
    description:
      'We supply refurbished scroll, rotary, and reciprocating compressors sourced from decommissioned commercial HVAC systems and surplus equipment channels. Each unit listed in our catalog carries an honest condition label — Refurbished, Tested Used, Surplus, or New Old Stock — so you know exactly what you are ordering.',
    bullets: [
      'Hermetic scroll compressors for commercial AC and VRF systems',
      'Twin rotary compressors for cassette and split units',
      'Reciprocating compressors for refrigeration and cold storage',
      'Semi-hermetic compressors for industrial rack systems',
    ],
    cta: { label: 'BROWSE COMPRESSORS', href: '/products' },
  },
  {
    id: 'identification',
    num: '02',
    icon: Search,
    title: 'Compressor Model & Nameplate Identification',
    tagline: 'Model Number · Part Code · Nameplate Photo',
    description:
      'If you have a failed compressor but are unsure of the exact model, our sourcing desk can help. Provide the model number from the nameplate, the brand, the part code, or a clear photograph of the nameplate sticker, and we will work to identify the unit and check whether a matching or compatible replacement is available in our current stock.',
    bullets: [
      'Model number lookup from nameplate data',
      'Part code cross-reference assistance',
      'Nameplate photograph-based identification',
      'Brand and series identification for unlabelled or damaged plates',
    ],
    photoUpload: true,
    cta: { label: 'SEND NAMEPLATE PHOTO', action: 'photo' },
  },
  {
    id: 'matching',
    num: '03',
    icon: Wrench,
    title: 'Replacement Model Matching',
    tagline: 'Compressor Compatibility Assistance',
    description:
      'Finding a functional replacement for a compressor requires matching several technical parameters. We can assist buyers in identifying suitable replacement units from our catalog based on the information provided. Note: confirming a match does not imply guaranteed drop-in compatibility — we recommend verifying technical parameters before installation.',
    bullets: [
      'Brand and model number',
      'Compressor type (scroll, rotary, reciprocating)',
      'Voltage and phase rating',
      'Refrigerant type (R22, R410A, R407C, R404A, etc.)',
      'Application (commercial AC, cold storage, VRF, etc.)',
    ],
    isChecklist: true,
    checklistLabel: 'PROVIDE THESE DETAILS FOR BEST MATCHING RESULTS',
    cta: { label: 'REQUEST MATCHING ASSISTANCE', action: 'quote' },
  },
  {
    id: 'bulk',
    num: '04',
    icon: Layers,
    title: 'Commercial & Bulk Procurement',
    tagline: 'Multi-Unit Orders · Project Procurement',
    description:
      'For HVAC contractors, service agencies, and commercial buyers who require multiple units for project-based or ongoing procurement, we handle model-based sourcing requests with availability checks and quote turnaround. Contact us with your model list and quantity requirement.',
    bullets: [
      'Model-based multi-unit quote requests',
      'Availability check before order confirmation',
      'Sourcing on request for non-listed models',
      'Procurement support for HVAC project teams',
    ],
    cta: { label: 'REQUEST BULK QUOTE', action: 'quote' },
  },
  {
    id: 'sourcing',
    num: '05',
    icon: ShoppingCart,
    title: 'HVAC Equipment & Component Sourcing',
    tagline: 'Compressor-Related Equipment on Request',
    description:
      'Beyond standard catalog items, we assist with sourcing HVAC compressor-related components and equipment on request. If a specific unit is not listed in our online catalog, contact us with the technical details and we will check availability through our sourcing channels.',
    bullets: [
      'Non-listed compressor models sourced on request',
      'Brand-specific equipment availability checks',
      'Contact our desk with model number and quantity',
    ],
    cta: { label: 'SUBMIT A SOURCING REQUEST', action: 'quote' },
  },
];

/* ─── Process steps ─── */
const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Send Requirement',
    desc: 'Share the compressor model number, nameplate photograph, brand, application, or any available technical details with our desk via the quote form or WhatsApp.',
  },
  {
    num: '02',
    title: 'Identify / Match',
    desc: 'Our sourcing desk reviews the details and checks whether a matching or suitable replacement unit is available in our current inventory or can be sourced.',
  },
  {
    num: '03',
    title: 'Check Availability',
    desc: 'We confirm current availability and condition. Stock status is communicated honestly — In Stock, Available on Order, or Not Currently Available.',
  },
  {
    num: '04',
    title: 'Quote & Supply',
    desc: 'Once availability is confirmed, we provide pricing and proceed to supply on order confirmation. Dispatch follows after payment and logistics coordination.',
  },
];

/* ─── Buyer profiles ─── */
const BUYER_TYPES = [
  {
    icon: HardHat,
    title: 'HVAC Contractors',
    desc: 'Service contractors and installation companies requiring replacement units during repair or commissioning work.',
  },
  {
    icon: Wrench,
    title: 'Service & Maintenance Companies',
    desc: 'Multi-brand AC maintenance agencies managing compressor failures across commercial and residential properties.',
  },
  {
    icon: Building2,
    title: 'Facility & Project Teams',
    desc: 'Commercial facility managers, MEP consultants, and project procurement teams sourcing compressors for planned or emergency replacements.',
  },
  {
    icon: Users,
    title: 'Dealers & Resellers',
    desc: 'HVAC dealers and wholesale resellers maintaining stock for their regional service networks.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A]">

      {/* ─── HERO ─── */}
      <section className="bg-[#0A192F] text-white pt-12 sm:pt-14 pb-12 sm:pb-16 border-b border-white/10 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Copy */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal delay={0} direction="up" distance={10}>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <Wrench size={14} />
                  <span>B2B COMPRESSOR SOURCING SERVICES</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80} direction="up" distance={14}>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  COMPRESSOR SOURCING,<br />
                  <span className="text-[#0EA6A6]">WITHOUT THE<br />GUESSWORK.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160} direction="up" distance={14}>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-xl">
                  Zcool Enterprises helps contractors, service companies, HVAC dealers, and commercial buyers identify and source refurbished and replacement compressors — based on model number, application, nameplate identification, or technical requirement.
                </p>
              </ScrollReveal>

              {/* Service labels */}
              <ScrollReveal delay={220} direction="up" distance={12}>
                <div className="flex flex-wrap gap-2 font-mono text-[11px] pt-1">
                  {['Compressor Supply', 'Model Identification', 'Replacement Matching', 'Bulk Procurement', 'Sourcing on Request'].map((s) => (
                    <span key={s} className="bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={280} direction="up" distance={14}>
                <ServicesHeroCTA />
              </ScrollReveal>
            </div>

            {/* Right: Compressor image + condition badge */}
            <div className="lg:col-span-5 hidden lg:block">
              <ScrollReveal delay={200} direction="scale" distance={16}>
                <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/ac_compressor_3.png"
                    alt="Refurbished AC compressor ready for B2B supply"
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    width={480}
                    height={360}
                    loading="eager"
                  />
                  <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
                    <span className="badge-industrial bg-[#0A192F] text-[#0EA6A6] border border-[#0EA6A6]/30 font-mono text-[10px]">
                      SOURCED & INSPECTED
                    </span>
                    <span className="badge-industrial bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-mono text-[10px]">
                      CONDITION GRADED
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SERVICES — NUMBERED EDITORIAL LAYOUT ─── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {SERVICES.map((svc, index) => {
          const Icon = svc.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={svc.id}
              id={svc.id}
              className={`py-12 sm:py-16 lg:py-20 border-b border-slate-200 ${!isEven ? 'bg-[#F8F9FA] -mx-4 sm:-mx-8 px-4 sm:px-8' : ''}`}
            >
              <ScrollReveal direction="up" distance={16}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">

                  {/* Service header — full width top */}
                  <div className="lg:col-span-12 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl font-extrabold text-slate-300 select-none leading-none">
                        {svc.num}
                      </span>
                      <div className="w-8 h-8 bg-[#0A192F] rounded-lg flex items-center justify-center text-[#0EA6A6] flex-shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-bold text-[#1D6FA3] uppercase tracking-wider block">
                          {svc.tagline}
                        </span>
                        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F]">
                          {svc.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Left: Description + bullets */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                    <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                      {svc.description}
                    </p>

                    {svc.isChecklist ? (
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                          {svc.checklistLabel}
                        </span>
                        {svc.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                            <CheckCircle2 size={14} className="text-[#1D6FA3] flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-xs font-sans">{b}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {svc.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-sans text-slate-600">
                            <span className="text-[#1D6FA3] font-bold mt-0.5 flex-shrink-0">→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Right: CTA panel */}
                  <div className="lg:col-span-5 space-y-4">
                    {svc.photoUpload ? (
                      /* Photo upload service */
                      <div className="bg-[#0A192F] text-white rounded-xl p-5 sm:p-6 space-y-4 border border-white/10 shadow-md">
                        <div className="flex items-center gap-2 font-mono text-xs text-[#0EA6A6] font-bold uppercase tracking-wider">
                          <Camera size={15} />
                          <span>NAMEPLATE IDENTIFICATION</span>
                        </div>
                        <p className="text-slate-300 text-xs font-sans leading-relaxed">
                          Photograph the nameplate sticker on your existing compressor and upload it here. We will identify the unit and check our current stock.
                        </p>
                        <ServicesPhotoBlock />
                      </div>
                    ) : (
                      /* Standard CTA panel */
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-4">
                        <p className="text-slate-500 text-xs font-sans leading-snug">
                          Ready to proceed? Use the button below to submit an inquiry to our sourcing desk.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {svc.cta.href ? (
                            <Link
                              href={svc.cta.href}
                              className="min-h-[44px] px-5 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-xs"
                            >
                              {svc.cta.label}
                              <ArrowRight size={14} />
                            </Link>
                          ) : (
                            <ServicesQuoteButton text={svc.cta.label} />
                          )}
                          <a
                            href="https://wa.me/919920691707"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[44px] px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                          >
                            WHATSAPP
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </ScrollReveal>

              {/* Product previews — only on supply service */}
              {svc.id === 'supply' && (
                <div className="mt-8 sm:mt-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider">
                      SAMPLE FROM CURRENT INVENTORY
                    </span>
                    <Link
                      href="/products"
                      className="font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1"
                    >
                      VIEW ALL <ChevronRight size={13} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {FEATURED_PRODUCTS.map((product, idx) => (
                      <ScrollReveal key={product.id} delay={idx * 60} direction="up" distance={12}>
                        <ProductCard product={product} />
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ─── HOW THE SERVICE WORKS ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">PROCUREMENT WORKFLOW</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                How the Service Works
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                The typical workflow from requirement to supply.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={step.num} delay={idx * 70} direction="up" distance={12}>
                <div className="bg-white p-5 sm:p-6 space-y-2.5 hover:bg-slate-50 transition-colors h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold text-slate-300 select-none leading-none">
                      {step.num}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#1D6FA3]" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0A192F]">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE HELP ─── */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">BUYER PROFILES</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Who We Help
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {BUYER_TYPES.map((bt, idx) => {
              const Icon = bt.icon;
              return (
                <ScrollReveal key={bt.title} delay={idx * 60} direction="up" distance={12}>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3 h-full hover:border-[#1D6FA3]/30 transition-colors">
                    <div className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-[#1D6FA3]">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#0A192F]">
                      {bt.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-sans leading-relaxed">
                      {bt.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── NAMEPLATE PHOTO IDENTIFICATION CTA ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A192F] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            <ScrollReveal direction="up" distance={14}>
              <div className="space-y-4 text-white">
                <span className="font-mono text-xs font-bold text-[#0EA6A6] uppercase tracking-wider block">
                  NAMEPLATE IDENTIFICATION
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  HAVE THE COMPRESSOR,<br />
                  BUT NOT THE MODEL?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-md">
                  If your compressor nameplate is still readable, photograph it clearly. The nameplate carries the model number, serial number, voltage rating, refrigerant type, and horsepower — all the information needed to find a matching replacement.
                </p>
                <div className="space-y-2 font-mono text-xs text-slate-400 pt-1">
                  {[
                    'Photograph the nameplate sticker clearly',
                    'Include the full model code and voltage details',
                    'Send via the form or WhatsApp',
                    'We check current stock and respond with availability',
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#0EA6A6]">→</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="up" distance={14}>
              <div className="bg-white rounded-xl p-5 sm:p-6 space-y-4 shadow-md">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                  <Camera size={15} />
                  <span>UPLOAD NAMEPLATE PHOTO</span>
                </div>
                <p className="text-slate-600 text-xs font-sans leading-relaxed">
                  Attach a photograph of the nameplate sticker. JPG, PNG, or WEBP — max 5MB. Once submitted, our sourcing desk will review and respond with relevant stock information.
                </p>
                <ServicesPhotoBlock />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ─── CATALOG FOOTER CTA ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up" distance={12}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h2 className="font-display font-bold text-xl text-[#0A192F]">
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
                  VIEW ALL COMPRESSORS
                  <ArrowRight size={16} />
                </Link>
                <InlineQuoteLink text="OR REQUEST A QUOTE" className="px-4" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
