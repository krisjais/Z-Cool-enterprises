import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Search,
  Tag,
  ClipboardList,
  Box,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import RefurbishmentActions from '@/components/refurbishment/RefurbishmentActions';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'What Does Refurbished Mean? | Zcool Enterprises',
  description:
    'Understand what "refurbished" means for AC compressors at Zcool Enterprises — how units are sourced, evaluated, condition-graded, and prepared for B2B sale.',
};

// --- Data: Process stages (honest, no invented procedures) ---
const PROCESS_STAGES = [
  {
    id: '01',
    icon: Search,
    title: 'Source',
    heading: 'Compressor Acquisition',
    desc: 'Units are acquired from decommissioned commercial HVAC systems, surplus equipment, and known trade channels. Each unit is tagged with its origin and any available service history.',
  },
  {
    id: '02',
    icon: ClipboardList,
    title: 'Inspect',
    heading: 'Physical & Visual Inspection',
    desc: 'Each compressor undergoes a visual check for physical damage — shell integrity, terminal block condition, connection ports, and any visible signs of oil leakage or corrosion.',
  },
  {
    id: '03',
    icon: ShieldCheck,
    title: 'Test',
    heading: 'Operational & Electrical Check',
    desc: 'Units are tested for basic electrical integrity and operational condition. Only units that pass inspection are moved forward in the inventory.',
  },
  {
    id: '04',
    icon: Tag,
    title: 'Classify',
    heading: 'Condition Grading',
    desc: 'Compressors are assigned an honest condition label based on the evaluation outcome — such as Refurbished, Tested Used, Used, Reconditioned, Surplus, or New Old Stock.',
  },
  {
    id: '05',
    icon: Box,
    title: 'Prepare',
    heading: 'Storage & Sealing',
    desc: 'Units are sealed at their suction and discharge ports to prevent contamination during storage. Relevant model and condition information is recorded.',
  },
  {
    id: '06',
    icon: CheckCircle2,
    title: 'Dispatch',
    heading: 'B2B Freight Dispatch',
    desc: 'Compressors are packaged appropriately for freight and dispatched upon confirmed order. We work with buyers to confirm technical compatibility before dispatch where possible.',
  },
];

// --- Data: Condition labels used in actual product data ---
const CONDITION_LABELS = [
  {
    label: 'Refurbished',
    color: 'emerald',
    desc: 'Unit has been inspected, cleaned, and prepared for reuse. Any obvious faults identified during inspection have been addressed.',
  },
  {
    label: 'Refurbished & Tested',
    color: 'emerald',
    desc: 'Inspected and subjected to an operational test. Confirmed functional before listing.',
  },
  {
    label: 'Refurbished & Pressure Tested',
    color: 'emerald',
    desc: 'Shell and port integrity verified under pressure in addition to standard inspection.',
  },
  {
    label: 'Refurbished & Overhauled',
    color: 'blue',
    desc: 'Unit has been disassembled, internal components inspected, reassembled, and re-tested.',
  },
  {
    label: 'Refurbished & Leak Tested',
    color: 'blue',
    desc: 'Unit has been checked for refrigerant leakage integrity at ports and welds.',
  },
  {
    label: 'Refurbished & Bench Tested',
    color: 'slate',
    desc: 'Unit was tested on a bench setup to verify operational parameters before listing.',
  },
];

const FEATURED_PRODUCTS = PRODUCTS_CATALOG.slice(0, 3);

export default function RefurbishmentPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A]">

      {/* ─── HERO ─── */}
      <section className="bg-[#0A192F] text-white pt-12 sm:pt-14 pb-12 sm:pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal delay={0} direction="up" distance={10}>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>QUALITY CONTROL &amp; CONDITION LABELS</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80} direction="up" distance={14}>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                WHAT DOES "REFURBISHED"<br />
                <span className="text-[#0EA6A6]">MEAN AT ZCOOL?</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160} direction="up" distance={14}>
              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                In commercial HVAC, "refurbished" can mean anything from a quick exterior clean to a fully tested and overhauled compressor. At Zcool Enterprises, we use specific condition labels so buyers know the evaluation status of every unit in our inventory.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── VERTICAL PROCESS TIMELINE ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-12">
          
          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">6-STAGE EVALUATION</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Our Sourcing &amp; Evaluation Process
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                Every unit passes through these six steps from acquisition to dispatch.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline Layout */}
          <div className="relative pl-6 sm:pl-10 space-y-8 sm:space-y-10">
            {/* Decorative Vertical Connecting Line */}
            <div className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-0.5 bg-slate-200" />

            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <ScrollReveal key={stage.id} delay={idx * 70} direction="up" distance={14}>
                  <div className="relative flex items-start gap-4 sm:gap-6 group">
                    {/* Numbered Circle Node on Line */}
                    <div className="absolute -left-6 sm:-left-10 top-0 w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#0A192F] text-white border-2 border-white flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold shadow-xs flex-shrink-0">
                      {stage.id}
                    </div>

                    <div className="bg-[#F8F9FA] border border-slate-200 rounded-xl p-5 sm:p-6 space-y-2 flex-1 hover:border-[#1D6FA3]/40 transition-colors shadow-xs">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                        <Icon size={15} />
                        <span>STAGE {stage.id} — {stage.title}</span>
                      </div>
                      <h3 className="font-display font-extrabold text-lg text-[#0A192F]">
                        {stage.heading}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── CONDITION LABELS BREAKDOWN ─── */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">

          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">CONDITION DEFINITIONS</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Understanding Our Condition Labels
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                We use precise condition descriptors so you know the exact evaluation level of each compressor.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CONDITION_LABELS.map((item, idx) => (
              <ScrollReveal key={item.label} delay={idx * 60} direction="up" distance={12}>
                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5 shadow-xs hover:border-[#1D6FA3]/30 transition-colors h-full">
                  <span className="badge-industrial bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[10px] w-fit">
                    {item.label}
                  </span>
                  <p className="text-slate-600 text-xs font-sans leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CATALOG SAMPLE PREVIEWS ─── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-6">
          <ScrollReveal direction="up" distance={14}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider">
                REFURBISHED INVENTORY PREVIEW
              </span>
              <Link href="/products" className="font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1">
                VIEW CATALOG <ChevronRight size={13} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FEATURED_PRODUCTS.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 60} direction="up" distance={12}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM ACTIONS ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A192F] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-2 text-center sm:text-left max-w-2xl">
              <span className="font-mono text-xs font-bold text-[#0EA6A6] uppercase tracking-wider block">INQUIRIES &amp; SOURCING</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                HAVE QUESTIONS ABOUT A COMPRESSOR?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                Contact our Mumbai desk with your model code or nameplate photo to confirm availability and condition details.
              </p>
            </div>
          </ScrollReveal>

          <RefurbishmentActions />
        </div>
      </section>

    </div>
  );
}
