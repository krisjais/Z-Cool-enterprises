import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, ShieldCheck, FileCheck, Phone } from 'lucide-react';
import { BRANDS_LIST } from '@/data/brands';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Supported Compressor Brands | Zcool Enterprises',
  description:
    'Browse commercial AC and refrigeration compressor brands supported and stocked by Zcool Enterprises — Copeland, Daikin, LG, Danfoss Maneurop, Carrier, and Hitachi.',
};

export default function BrandsPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A] overflow-x-hidden">
      {/* ── Header Banner ── */}
      <section className="bg-[#0A192F] text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1 rounded">
            <span>SUPPORTED MANUFACTURERS</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            COMPRESSOR BRANDS &amp; EQUIPMENT SOURCING
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
            We stock and source refurbished compressors for major commercial HVAC and refrigeration
            manufacturers. Browse supported brands below or request a replacement match from our Mumbai desk.
          </p>
        </div>
      </section>

      {/* ── Brands Grid ── */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS_LIST.map((brand, idx) => (
              <ScrollReveal key={brand.id} animation="fade-up" delay={idx * 60} duration={400}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-4 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <span className="font-mono text-xs font-bold text-white bg-[#0A192F] px-2.5 py-1 rounded">
                        {brand.name}
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase">
                        {brand.type}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                      {brand.description}
                    </p>

                    <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 font-mono text-[11px] space-y-1">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                        FREQUENT SOURCING MODELS:
                      </span>
                      <span className="font-semibold text-slate-800 leading-relaxed block">
                        {brand.popularModels.join(' • ')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                    <Link
                      href={`/products?brand=${encodeURIComponent(brand.name)}`}
                      className="font-mono text-xs font-bold text-[#1D6FA3] hover:text-[#165680] uppercase tracking-wider inline-flex items-center gap-1 transition-colors hover:underline active:scale-[0.985]"
                    >
                      <span>Browse {brand.name} Stock</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Sourcing Assistance Bar */}
          <ScrollReveal animation="fade-up" duration={450}>
            <div className="bg-[#0A192F] text-white rounded-xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#0EA6A6] uppercase tracking-wider block">
                  SPECIALIST BRAND ASSISTANCE
                </span>
                <h2 className="font-display font-bold text-xl text-white">
                  Don&apos;t see your required compressor brand or model code?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-xl">
                  Our Mumbai sourcing team maintains relationships across commercial HVAC channels to locate
                  discontinued, hard-to-find, or legacy compressor assemblies.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all active:scale-[0.985] shadow-xs"
                >
                  <FileCheck size={15} />
                  <span>INQUIRE ABOUT BRAND SOURCING</span>
                </Link>
                <a
                  href="tel:+919920691707"
                  className="px-5 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all active:scale-[0.985]"
                >
                  <Phone size={14} />
                  <span>+91 99206 91707</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
