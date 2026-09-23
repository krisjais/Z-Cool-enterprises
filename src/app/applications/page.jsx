import React from 'react';
import Link from 'next/link';
import {
  Layers,
  ChevronRight,
  Building2,
  Wind,
  Hotel,
  Factory,
  Snowflake,
  Wrench,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import ApplicationsActions, {
  ApplicationsPhotoBlock,
  InlineQuoteButton,
} from '@/components/applications/ApplicationsActions';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Compressor Applications & HVAC Use Cases | Zcool Enterprises',
  description:
    'Find the right refurbished or replacement AC compressor for your application — commercial air conditioning, VRF/VRV systems, cold storage, hotels, industrial cooling, and service replacements.',
};

/* ─── Product helpers — pull from actual catalog data ─── */
const COMMERCIAL_AC_PRODUCTS = PRODUCTS_CATALOG.filter((p) =>
  ['Scroll Compressors'].includes(p.category) &&
  (p.application?.toLowerCase().includes('commercial') ||
    p.application?.toLowerCase().includes('package') ||
    p.application?.toLowerCase().includes('ductable'))
).slice(0, 2);

const VRF_PRODUCTS = PRODUCTS_CATALOG.filter(
  (p) =>
    p.category === 'VRF / VRV Compressors' ||
    p.application?.toLowerCase().includes('vrv') ||
    p.application?.toLowerCase().includes('vrf')
).slice(0, 2);

const ROTARY_PRODUCTS = PRODUCTS_CATALOG.filter(
  (p) => p.category === 'Rotary Compressors'
).slice(0, 2);

const COLD_PRODUCTS = PRODUCTS_CATALOG.filter(
  (p) =>
    p.category === 'Refrigeration Compressors' ||
    p.application?.toLowerCase().includes('cold storage') ||
    p.application?.toLowerCase().includes('refrigeration')
).slice(0, 2);

/* ─── Application definitions — derived purely from product data ─── */
const APPLICATIONS = [
  {
    id: 'commercial-ac',
    num: '01',
    icon: Building2,
    title: 'Commercial Air Conditioning',
    subtitle: 'Package AC · Ductable Units · Chillers',
    description:
      'Commercial package AC, ductable split systems, and water-cooled chillers used in offices, shopping centres, and large-floor-plan commercial spaces commonly require 3-ton to 15-ton hermetic scroll compressors.',
    compressorTypes: ['Hermetic Scroll', 'Semi-Hermetic Scroll'],
    brands: ['Copeland', 'Daikin'],
    typicalBuyer: 'HVAC contractors, MEP consultants, facility management companies',
    products: COMMERCIAL_AC_PRODUCTS,
    filterHref: '/products?type=Scroll',
  },
  {
    id: 'vrf-vrv',
    num: '02',
    icon: Wind,
    title: 'VRF / VRV Systems',
    subtitle: 'Variable Refrigerant Flow · Multi-Zone Outdoor Units',
    description:
      'VRF and VRV outdoor units use DC inverter scroll compressors to modulate refrigerant flow across multiple indoor fan coil units in office buildings, hotels, and multi-floor commercial fit-outs.',
    compressorTypes: ['DC Inverter Scroll', 'Hermetic Scroll'],
    brands: ['Daikin'],
    typicalBuyer: 'VRF service engineers, HVAC retrofit contractors, building management teams',
    products: VRF_PRODUCTS,
    filterHref: '/products?type=VRF',
    note: 'Inverter scroll compressors for VRF/VRV systems are model-specific. Verify the model number from your outdoor unit before ordering.',
  },
  {
    id: 'hotels',
    num: '03',
    icon: Hotel,
    title: 'Hotels & Hospitality',
    subtitle: 'Cassette AC · Low-Noise Split Units · 24/7 Comfort Cooling',
    description:
      'Hotel guest room AC and centralized hospitality cooling systems require low-vibration rotary and scroll compressors. Commercial cassette and tower AC units used in hospitality environments typically use single or twin-rotary compressors.',
    compressorTypes: ['Twin Rotary', 'Hermetic Scroll'],
    brands: ['LG', 'Copeland'],
    typicalBuyer: 'Hotel engineering departments, hospitality HVAC agencies, facilities contractors',
    products: ROTARY_PRODUCTS,
    filterHref: '/products?type=Rotary',
  },
  {
    id: 'cold-storage',
    num: '04',
    icon: Snowflake,
    title: 'Cold Storage & Commercial Refrigeration',
    subtitle: 'Cold Rooms · Chillers · Frozen Storage Circuits',
    description:
      'Cold storage facilities, commercial refrigeration racks, and process chillers require compressors rated for medium and low-temperature evaporation. Reciprocating and specialized scroll compressors operating on R404A or R22 are standard in this category.',
    compressorTypes: ['Reciprocating', 'Hermetic Scroll'],
    brands: ['Danfoss', 'Copeland'],
    typicalBuyer: 'Refrigeration contractors, cold store operators, food processing engineers',
    products: COLD_PRODUCTS,
    filterHref: '/products?type=Reciprocating',
  },
  {
    id: 'industrial-cooling',
    num: '05',
    icon: Factory,
    title: 'Industrial Process Cooling',
    subtitle: 'Process Chillers · Factory Environment Cooling',
    description:
      'Manufacturing facilities and process cooling systems use heavy-duty scroll and reciprocating compressors running continuously under high thermal loads. Reliability and exact capacity matching are critical to prevent factory downtime.',
    compressorTypes: ['Hermetic Scroll', 'Reciprocating'],
    brands: ['Copeland', 'Danfoss'],
    typicalBuyer: 'Plant maintenance engineers, industrial HVAC service companies',
    products: COMMERCIAL_AC_PRODUCTS,
    filterHref: '/products',
  },
  {
    id: 'breakdown-replacement',
    num: '06',
    icon: Wrench,
    title: 'Emergency Service & Breakdown Replacements',
    subtitle: 'Fast Replacement Sourcing for Failed Compressors',
    description:
      'When an operational compressor fails in a commercial building or cold store, finding an immediate replacement model is time-critical. Zcool maintains a catalog of available units ready for model matching and quick dispatch.',
    compressorTypes: ['Scroll', 'Rotary', 'Reciprocating'],
    brands: ['Copeland', 'Daikin', 'LG', 'Danfoss'],
    typicalBuyer: 'AC service contractors, emergency repair technicians, facility managers',
    products: PRODUCTS_CATALOG.slice(0, 2),
    filterHref: '/products',
  },
];

export default function ApplicationsPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A]">

      {/* ─── HERO ─── */}
      <section className="bg-[#0A192F] text-white pt-12 sm:pt-14 pb-12 sm:pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <ScrollReveal delay={0} direction="up" distance={10}>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <Layers size={14} />
                  <span>APPLICATION-BASED COMPRESSOR SOURCING</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80} direction="up" distance={14}>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  FIND COMPRESSORS BY<br />
                  <span className="text-[#0EA6A6]">APPLICATION &amp; USE CASE.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160} direction="up" distance={14}>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl">
                  Different cooling systems require different compressor designs, motor ratings, and refrigerant compatibility. Browse our supply categories mapped to real-world commercial HVAC, VRF, refrigeration, and industrial cooling applications.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={220} direction="up" distance={14}>
                <ApplicationsActions />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLICATION SECTIONS — EDITORIAL STAGGER ─── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {APPLICATIONS.map((app, index) => {
          const Icon = app.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={app.id}
              id={app.id}
              className={`py-12 sm:py-16 border-b border-slate-200 ${!isEven ? 'bg-white -mx-4 sm:-mx-8 px-4 sm:px-8' : ''}`}
            >
              <ScrollReveal direction="up" distance={16}>
                <div className="space-y-6">

                  {/* Section Top Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-300 select-none leading-none">
                        {app.num}
                      </span>
                      <div className="w-8 h-8 bg-[#0A192F] rounded-lg flex items-center justify-center text-[#0EA6A6] flex-shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-bold text-[#1D6FA3] uppercase tracking-wider block">
                          {app.subtitle}
                        </span>
                        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F]">
                          {app.title}
                        </h2>
                      </div>
                    </div>

                    <Link
                      href={app.filterHref}
                      className="font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1 w-fit"
                    >
                      VIEW MATCHING COMPRESSORS <ChevronRight size={14} />
                    </Link>
                  </div>

                  {/* Description & Technical Breakdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                        {app.description}
                      </p>

                      {app.note && (
                        <div className="flex items-start gap-2.5 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs font-sans">
                          <AlertCircle size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{app.note}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-1">
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <span className="text-slate-400 text-[10px] block uppercase">TYPICAL DESIGN</span>
                          <span className="font-semibold text-slate-800">{app.compressorTypes.join(', ')}</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <span className="text-slate-400 text-[10px] block uppercase">BRANDS CARRIED</span>
                          <span className="font-semibold text-slate-800">{app.brands.join(', ')}</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <span className="text-slate-400 text-[10px] block uppercase">TYPICAL BUYER</span>
                          <span className="font-semibold text-slate-800 truncate block">{app.typicalBuyer}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Matched Product Previews from Catalog */}
                    <div className="lg:col-span-5 space-y-3">
                      <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        SUITABLE CATALOG MODELS
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {app.products.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </section>
          );
        })}
      </div>

      {/* ─── NAMEPLATE PHOTO MATCHING CTA ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A192F] text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ScrollReveal direction="up" distance={14}>
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#0EA6A6] uppercase tracking-wider block">
                  NAMEPLATE IDENTIFICATION
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  UNSURE WHICH COMPRESSOR TYPE YOUR SYSTEM REQUIRES?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-md">
                  Send a photograph of the failed compressor nameplate or system rating tag. Our technical desk will check mounting parameters, voltage ratings, and refrigerant compatibility for you.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="up" distance={14}>
              <div className="bg-white text-slate-900 rounded-xl p-5 sm:p-6 space-y-4 shadow-md">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                  <Wrench size={15} />
                  <span>UPLOAD NAMEPLATE FOR MATCHING</span>
                </div>
                <p className="text-slate-600 text-xs font-sans leading-relaxed">
                  Attach your compressor sticker photo. JPG, PNG, or WEBP (Max 5MB).
                </p>
                <ApplicationsPhotoBlock />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CATALOG CTA ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up" distance={12}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h2 className="font-display font-bold text-xl text-[#0A192F]">
                  Explore All Refurbished Compressors
                </h2>
                <p className="text-slate-500 text-xs font-sans">
                  Browse our full inventory by brand, model code, or compressor type.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start flex-shrink-0">
                <Link
                  href="/products"
                  className="px-6 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-[0.98]"
                >
                  VIEW FULL CATALOG
                  <ArrowRight size={16} />
                </Link>
                <InlineQuoteButton text="REQUEST QUOTE" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
