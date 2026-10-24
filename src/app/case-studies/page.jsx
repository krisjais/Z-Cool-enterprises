import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { CASE_STUDIES } from '@/data/case-studies';
import { PRODUCTS_CATALOG } from '@/data/products';
import {
  RequestSimilarButton,
  CaseStudiesBottomCTA,
} from '@/components/case-studies/CaseStudiesActions';
import ScrollReveal from '@/components/ui/ScrollReveal';

import { generateSEO } from '@/utils/seo';

export const metadata = generateSEO({
  title: 'Compressor Supply Case Studies',
  description:
    'Real-world compressor sourcing and replacement examples for commercial AC, VRV systems, and cold storage units supplied by Z Cool Enterprises in Mumbai and Maharashtra.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A]">
      {/* ── Header Banner ── */}
      <section className="bg-[#0A192F] text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-3.5 relative z-10">
          <ScrollReveal delay={0} direction="up" distance={10}>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span>REAL-WORLD SOURCING LOGS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} direction="up" distance={14}>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              COMPRESSOR SUPPLY CASE STUDIES
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160} direction="up" distance={14}>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-sans leading-relaxed">
              Practical examples of how Zcool Enterprises assists commercial HVAC contractors,
              facility engineers, and refrigeration operators with replacement compressors, model
              identification, and verified unit supply.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Case Studies List ── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {CASE_STUDIES.map((cs, idx) => {
              const matchedProduct = cs.productId
                ? PRODUCTS_CATALOG.find((p) => p.id === cs.productId)
                : null;

              return (
                <ScrollReveal key={cs.id} delay={idx * 100} direction="up" distance={16}>
                  <article className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-xs hover:border-slate-300 transition-colors">
                    {/* Case Title & Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 sm:pb-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                          <span>CASE LOG #{String(idx + 1).padStart(2, '0')}</span>
                          {cs.sector && (
                            <>
                              <span className="text-slate-300">•</span>
                              <span>{cs.sector}</span>
                            </>
                          )}
                        </div>
                        <h2 className="font-display font-extrabold text-lg sm:text-2xl text-[#0A192F] tracking-tight">
                          {cs.title}
                        </h2>
                      </div>

                      {/* Customer / Site Location */}
                      {cs.location && (
                        <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200 w-fit flex-shrink-0">
                          <MapPin size={13} className="text-slate-400" />
                          <span>{cs.location}</span>
                        </div>
                      )}
                    </div>

                    {/* 4 Information Blocks: Requirement, Equipment, Compressor, Outcome */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-xs">
                      {/* 01 // REQUIREMENT */}
                      {cs.requirement && (
                        <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                              01 // REQUIREMENT
                            </span>
                            <p className="text-slate-700 leading-relaxed">{cs.requirement}</p>
                          </div>
                        </div>
                      )}

                      {/* 02 // ORIGINAL EQUIPMENT */}
                      {cs.originalEquipment && (
                        <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                              02 // ORIGINAL EQUIPMENT
                            </span>
                            <p className="text-slate-700 leading-relaxed">{cs.originalEquipment}</p>
                          </div>
                        </div>
                      )}

                      {/* 03 // COMPRESSOR SUPPLIED */}
                      {cs.compressorSupplied && (
                        <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                              03 // COMPRESSOR SUPPLIED
                            </span>
                            <p className="text-[#1D6FA3] font-mono font-bold leading-relaxed">{cs.compressorSupplied}</p>
                          </div>
                          {matchedProduct && (
                            <Link
                              href={`/products/${matchedProduct.id}`}
                              className="font-mono text-[11px] font-bold text-[#1D6FA3] hover:underline flex items-center gap-1 pt-2 border-t border-slate-200/80"
                            >
                              VIEW SPECIFICATIONS <ArrowUpRight size={12} />
                            </Link>
                          )}
                        </div>
                      )}

                      {/* 04 // OUTCOME */}
                      {cs.result && (
                        <div className="space-y-2 bg-emerald-50/70 p-4 rounded-lg border border-emerald-200/80 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                              04 // OUTCOME
                            </span>
                            <p className="text-emerald-900 font-medium leading-relaxed">{cs.result}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action button */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                      <RequestSimilarButton caseTitle={cs.title} />
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal direction="up" distance={14}>
            <CaseStudiesBottomCTA />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
