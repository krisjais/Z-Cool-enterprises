import React from 'react';
import Link from 'next/link';
import { ChevronRight, Layers, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'scroll',
    type: 'Scroll Compressors',
    slug: 'Scroll Compressors',
    desc: 'High-efficiency orbital scroll units for commercial ducted splits, package units, and chillers.',
    brands: 'Copeland, Daikin, Danfoss',
  },
  {
    id: 'rotary',
    type: 'Rotary Compressors',
    slug: 'Rotary Compressors',
    desc: 'Compact rotary units for commercial split systems, ceiling cassettes, and modular cooling plants.',
    brands: 'LG Commercial, Highly, GMCC',
  },
  {
    id: 'reciprocating',
    type: 'Reciprocating Compressors',
    slug: 'Reciprocating Compressors',
    desc: 'Heavy-duty piston compressors for cold storage, deep freezers, and industrial refrigeration.',
    brands: 'Danfoss Maneurop, Copeland Discus, Bitzer',
  },
  {
    id: 'vrf',
    type: 'VRF / Inverter Compressors',
    slug: 'VRF / VRV Compressors',
    desc: 'Variable-speed DC inverter scrolls for multi-zone VRV/VRF commercial outdoor condensing units.',
    brands: 'Daikin VRV, Mitsubishi Electric',
  },
];

export default function CompressorCategoriesSection() {
  return (
    <section id="categories" className="py-12 sm:py-16 bg-[#FBFBFA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0E4B75] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              <span>Compressor Taxonomy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Compressor Categories by Engineering Mechanism
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
              We source replacement compressors across four primary commercial refrigeration and air conditioning architectures.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E4B75] hover:text-[#093757] self-start sm:self-end transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 4 Categories 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {cat.type}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {cat.desc}
                </p>

                <div className="text-xs text-slate-500 pt-1">
                  <span className="font-medium text-slate-700">Typical Brands:</span> {cat.brands}
                </div>
              </div>

              {/* Browse Link */}
              <div className="pt-4 mt-5 border-t border-stone-100">
                <Link
                  href={`/products?category=${encodeURIComponent(cat.slug)}`}
                  className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[#0E4B75] hover:text-[#093757] group"
                >
                  <span>Browse {cat.type}</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
