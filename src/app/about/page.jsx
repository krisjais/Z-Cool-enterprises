import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Wrench,
  Search,
  Package,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  HardHat,
  Users,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { PRODUCTS_CATALOG, CATEGORIES_LIST } from '@/data/products';
import { CASE_STUDIES } from '@/data/case-studies';
import ProductCard from '@/components/ui/ProductCard';
import { AboutHeroCTA, AboutBottomCTA, AboutQuoteButton } from '@/components/about/AboutActions';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'About Zcool Enterprises | Compressor & HVAC Equipment Supplier',
  description:
    'Zcool Enterprises is a Mumbai-based B2B supplier of refurbished and replacement AC compressors — scroll, rotary, reciprocating, and VRF/VRV types — for commercial HVAC, refrigeration, and industrial cooling applications.',
};

/* ─── Verified categories from CATEGORIES_LIST ─── */
const SUPPLY_CATEGORIES = [
  {
    name: 'Scroll Compressors',
    brands: ['Copeland', 'Daikin'],
    desc: 'Hermetic scroll compressors for commercial package AC, ductable units, VRF/VRV systems, and water chillers.',
    href: '/products?type=Scroll',
    image: '/ac_compressor.png',
  },
  {
    name: 'Rotary Compressors',
    brands: ['LG'],
    desc: 'Single and twin rotary compressors for commercial cassette, split, and tower AC units.',
    href: '/products?type=Rotary',
    image: '/ac_compressor_2.png',
  },
  {
    name: 'Reciprocating Compressors',
    brands: ['Danfoss', 'Copeland'],
    desc: 'Hermetic and semi-hermetic reciprocating compressors for cold storage, commercial refrigeration, and industrial process cooling.',
    href: '/products?type=Reciprocating',
    image: '/ac_compressor_3.png',
  },
  {
    name: 'VRF / VRV Compressors',
    brands: ['Daikin'],
    desc: 'DC Inverter scroll compressors for Daikin VRV IV and VRV V outdoor units.',
    href: '/products?category=VRF',
    image: '/ac_compressor_2.png',
  },
];

/* ─── How we help buyers ─── */
const BUYER_SERVICES = [
  {
    num: '01',
    title: 'Compressor Supply',
    desc: 'We maintain a catalog of refurbished and replacement compressors — condition-graded and ready for dispatch or available on sourcing request.',
  },
  {
    num: '02',
    title: 'Model & Nameplate Identification',
    desc: 'If you have a failed unit but are unsure of the exact model, share the nameplate sticker photograph or model code. We can help identify a matching unit in our stock.',
  },
  {
    num: '03',
    title: 'Replacement Model Matching',
    desc: 'Provide the brand, model, voltage, refrigerant, and application details and we will check whether a suitable replacement is available.',
  },
  {
    num: '04',
    title: 'Commercial & Bulk Procurement',
    desc: 'For contractors and service companies needing multiple units for project or ongoing procurement, we handle model-based sourcing requests with availability checks.',
  },
];

/* ─── Buyer profiles ─── */
const BUYER_TYPES = [
  {
    icon: HardHat,
    title: 'HVAC Contractors',
    desc: 'Service contractors and installation teams needing a replacement compressor quickly when an existing unit fails during a project.',
  },
  {
    icon: Wrench,
    title: 'Service & Maintenance Companies',
    desc: 'Multi-brand AC maintenance agencies managing compressor failures across commercial and residential properties.',
  },
  {
    icon: Building2,
    title: 'Commercial Buyers',
    desc: 'Facility managers, project procurement teams, and MEP consultants sourcing compressors for planned or emergency replacement.',
  },
  {
    icon: Users,
    title: 'Dealers & Resellers',
    desc: 'HVAC dealers and wholesale resellers maintaining stock for their regional service networks.',
  },
];

/* ─── Featured products (first 3 from catalog) ─── */
const FEATURED_PRODUCTS = PRODUCTS_CATALOG.slice(0, 3);

export default function AboutPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A]">

      {/* ─── HERO ─── */}
      <section className="bg-[#0A192F] text-white pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-white/10 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Copy */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal delay={0} direction="up" distance={10}>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6] animate-pulse" />
                  <span>ABOUT ZCOOL ENTERPRISES</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80} direction="up" distance={14}>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  COMPRESSOR SUPPLY<br />
                  <span className="text-[#0EA6A6]">& REPLACEMENT</span><br />
                  SOURCING.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160} direction="up" distance={14}>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-lg">
                  Zcool Enterprises is a Mumbai-based B2B supplier of refurbished and replacement AC compressors. We help contractors, service companies, and commercial buyers identify and source the right compressor — by model, application, or nameplate photograph.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={220} direction="up" distance={12}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#0EA6A6]" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <Phone size={13} className="text-[#0EA6A6]" />
                    <a href="tel:+919920691707" className="hover:text-white transition-colors">+91 99206 91707</a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={280} direction="up" distance={14}>
                <AboutHeroCTA />
              </ScrollReveal>
            </div>

            {/* Right: Compressor image */}
            <div className="lg:col-span-5 hidden lg:flex items-end justify-center">
              <ScrollReveal delay={200} direction="scale" distance={16}>
                <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-center">
                  <img
                    src="/ac_compressor.png"
                    alt="Refurbished AC compressor ready for B2B supply"
                    className="max-h-60 object-contain hover:scale-105 transition-transform duration-300"
                    width={380}
                    height={260}
                    loading="eager"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Company intro */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <ScrollReveal direction="up" distance={14}>
                <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">WHO WE ARE</span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                  A Specialist Compressor Supplier, Based in Mumbai
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={80} direction="up" distance={14}>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  Zcool Enterprises sources, evaluates, and supplies refurbished and replacement AC compressors for commercial HVAC, refrigeration, and industrial cooling applications. We work with contractors, service companies, and commercial buyers who need a compressor quickly — and need to be certain it is the right unit for their application.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed pt-2">
                  When a commercial AC compressor fails — in a hotel, office building, or cold storage facility — finding a replacement at short notice is often difficult. OEM lead times can stretch weeks. Import costs can be prohibitive. Zcool addresses this gap by maintaining a catalog of available units that buyers can identify, check, and order directly.
                </p>
                <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed pt-2">
                  We are straightforward about what we sell. Every unit in our catalog carries an honest condition label — Refurbished, Tested Used, Refurbished & Pressure Tested, or similar — so that buyers know exactly what they are purchasing.
                </p>
              </ScrollReveal>
            </div>

            {/* Right: Operational summary panel */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal delay={120} direction="up" distance={14}>
                <div className="bg-[#0A192F] text-white rounded-xl p-5 sm:p-6 space-y-4 border border-white/10 shadow-md">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0EA6A6]">
                    AT A GLANCE
                  </h3>
                  <div className="space-y-2.5 font-mono text-xs">
                    {[
                      { label: 'BASED IN', value: 'Mumbai, Maharashtra' },
                      { label: 'SPECIALISATION', value: 'Refurbished & Replacement Compressors' },
                      { label: 'COMPRESSOR TYPES', value: 'Scroll · Rotary · Reciprocating · VRF' },
                      { label: 'BRANDS CARRIED', value: 'Copeland · Daikin · LG · Danfoss' },
                      { label: 'APPLICATIONS', value: 'Commercial AC · Refrigeration · VRF/VRV' },
                      { label: 'BUYER TYPE', value: 'B2B — Contractors, Service Co., Dealers' },
                      { label: 'DESK SERVICES', value: 'Model Identification · Nameplate Matching' },
                    ].map((row) => (
                      <div key={row.label} className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-2 gap-0.5 sm:gap-1">
                        <span className="text-slate-400 text-[10px]">{row.label}</span>
                        <span className="font-semibold text-white sm:text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact quick-ref */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone size={13} className="text-[#1D6FA3]" />
                    <a href="tel:+919920691707" className="hover:text-[#1D6FA3] transition-colors font-semibold text-[#0A192F]">+91 99206 91707</a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail size={13} className="text-[#1D6FA3]" />
                    <a href="mailto:zcooltech4@gmail.com" className="hover:text-[#1D6FA3] transition-colors font-semibold text-[#0A192F]">zcooltech4@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={13} className="text-[#1D6FA3]" />
                    <span className="text-slate-700">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHAT WE SUPPLY ─── */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">

          <ScrollReveal direction="up" distance={14}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-1.5">
                <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">PRODUCT CATEGORIES</span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                  What We Supply
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-xl">
                  Our catalog covers four compressor categories across commercial AC, refrigeration, and industrial applications.
                </p>
              </div>
              <Link
                href="/products"
                className="font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1 flex-shrink-0"
              >
                VIEW FULL CATALOG <ChevronRight size={13} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Category grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {SUPPLY_CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 70} direction="up" distance={14}>
                <Link
                  href={cat.href}
                  className="group flex items-start gap-4 sm:gap-5 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 hover:border-[#1D6FA3]/40 hover:shadow-md transition-all duration-200 active:scale-[0.99] h-full"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-50 border border-slate-200 p-1 flex items-center justify-center">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="max-h-full max-w-full object-contain md:group-hover:scale-105 transition-transform duration-300"
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 space-y-2 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display font-bold text-base text-[#0A192F] group-hover:text-[#1D6FA3] transition-colors">
                        {cat.name}
                      </h3>
                      <div className="flex gap-1">
                        {cat.brands.map((b) => (
                          <span key={b} className="font-mono text-[9px] bg-[#0A192F] text-white px-1.5 py-0.5 rounded font-bold">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs font-sans leading-relaxed">
                      {cat.desc}
                    </p>
                    <span className="font-mono text-[11px] text-[#1D6FA3] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      VIEW MODELS <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Product previews */}
          <div className="space-y-4 pt-2">
            <span className="font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider block">
              SAMPLE FROM CURRENT INVENTORY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {FEATURED_PRODUCTS.map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 60} direction="up" distance={14}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── HOW WE HELP BUYERS ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">

          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">OUR ROLE</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                How We Help Buyers
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                Finding the right compressor for a replacement job is more than a catalog search. It requires matching the model, type, voltage, refrigerant, and application. Here is what we can assist with.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            {BUYER_SERVICES.map((svc, idx) => (
              <ScrollReveal key={svc.num} delay={idx * 70} direction="up" distance={12}>
                <div className="bg-white p-5 sm:p-6 space-y-3 hover:bg-slate-50 transition-colors h-full">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-extrabold text-slate-300 select-none leading-none">{svc.num}</span>
                    <h3 className="font-display font-bold text-base text-[#0A192F]">{svc.title}</h3>
                  </div>
                  <p className="text-slate-600 text-xs font-sans leading-relaxed pl-9 sm:pl-10">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/services"
              className="px-5 py-3 rounded-lg border border-slate-300 hover:border-[#1D6FA3] text-[#0A192F] hover:text-[#1D6FA3] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors active:scale-[0.98]"
            >
              VIEW ALL SERVICES <ArrowRight size={14} />
            </Link>
            <AboutQuoteButton text="REQUEST A QUOTE" />
          </div>

        </div>
      </section>

      {/* ─── WHO WE SERVE ─── */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">

          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">BUYER PROFILES</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Who We Serve
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
                    <h3 className="font-display font-bold text-base text-[#0A192F]">{bt.title}</h3>
                    <p className="text-slate-600 text-xs font-sans leading-relaxed">{bt.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── HOW THE PROCESS WORKS ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">

          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">PROCUREMENT FLOW</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                How the Process Works
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            {[
              { step: '01', title: 'Identify the Compressor', desc: 'Share the model number, part code, or nameplate photograph. We confirm what you need.' },
              { step: '02', title: 'Check Product Details', desc: 'Review the product listing for condition label, specifications, voltage, refrigerant, and compatibility notes.' },
              { step: '03', title: 'Confirm Availability', desc: 'We confirm current stock status — In Stock, Available on Order, or not currently available.' },
              { step: '04', title: 'Request a Quote', desc: 'Submit a quote request via the form or WhatsApp. We respond with pricing and next steps.' },
            ].map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 70} direction="up" distance={12}>
                <div className="bg-white px-5 py-5 sm:px-6 sm:py-6 space-y-2.5 hover:bg-slate-50 transition-colors h-full">
                  <span className="font-mono text-2xl font-extrabold text-slate-300 select-none leading-none block">
                    {step.step}
                  </span>
                  <h3 className="font-display font-bold text-sm text-[#0A192F]">{step.title}</h3>
                  <p className="text-slate-600 text-xs font-sans leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─── WHAT MAKES US USEFUL (TRUST) ─── */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            <div className="space-y-5">
              <ScrollReveal direction="up" distance={14}>
                <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">WHY BUYERS USE ZCOOL</span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                  What Makes Us Useful to B2B Buyers
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  We are not a generic HVAC dealer. We focus specifically on compressor sourcing and replacement matching. Here is what buyers typically find useful when working with us.
                </p>
              </ScrollReveal>

              <div className="space-y-2.5">
                {[
                  { point: 'Honest condition labels', detail: 'Every unit is listed with a specific condition grade — not just "used" or "refurbished" as a blanket term.' },
                  { point: 'Model-level product information', detail: 'Listings include voltage, refrigerant, displacement, compatibility notes, and available images.' },
                  { point: 'Nameplate identification', detail: 'If you can photograph the existing compressor nameplate, we can often identify a matching unit from our stock.' },
                  { point: 'Direct inquiry workflow', detail: 'No automated chatbots. Inquiries go directly to our sourcing desk via quote form or WhatsApp.' },
                  { point: 'Actual product photography', detail: 'Product images show the actual compressor type — not stock illustrations or generic photos.' },
                ].map((item, idx) => (
                  <ScrollReveal key={item.point} delay={idx * 50} direction="up" distance={10}>
                    <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-white border border-slate-200 rounded-xl">
                      <CheckCircle2 size={16} className="text-[#1D6FA3] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-mono text-xs text-[#0A192F] font-bold block">{item.point}</strong>
                        <span className="text-slate-600 text-xs font-sans leading-snug">{item.detail}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Case study references */}
            <div className="space-y-4">
              <ScrollReveal direction="up" distance={14}>
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block">RECENT SUPPLY EXAMPLES</span>
              </ScrollReveal>
              {CASE_STUDIES.map((cs, idx) => (
                <ScrollReveal key={cs.id} delay={idx * 80} direction="up" distance={12}>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5 shadow-xs">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[10px] font-bold text-[#1D6FA3] uppercase tracking-wider">{cs.sector}</span>
                      <span className="font-mono text-[10px] text-slate-400">{cs.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-[#0A192F] leading-snug">{cs.title}</h3>
                    <div className="space-y-1.5 text-xs font-sans text-slate-600">
                      <p>
                        <strong className="font-mono text-[10px] text-slate-400 uppercase block">SUPPLIED</strong>
                        {cs.compressorSupplied}
                      </p>
                      <p className="text-emerald-700 font-medium border-t border-slate-100 pt-2">
                        ↳ {cs.result}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              <Link
                href="/case-studies"
                className="font-mono text-xs font-bold text-[#1D6FA3] hover:underline flex items-center gap-1"
              >
                VIEW ALL CASE STUDIES <ChevronRight size={13} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CONTACT / BOTTOM CTA ─── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0A192F]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-2 text-white text-center lg:text-left">
              <span className="font-mono text-xs font-bold text-[#0EA6A6] uppercase tracking-wider block">GET IN TOUCH</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                LOOKING FOR A COMPRESSOR?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-xl lg:mx-0 mx-auto">
                Send us the model number, part number, or a photograph of the compressor nameplate. Our sourcing desk will check current stock and confirm whether we have a suitable unit available.
              </p>
            </div>
          </ScrollReveal>

          <AboutBottomCTA />
        </div>
      </section>

    </div>
  );
}
