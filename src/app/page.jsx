import React from 'react';
import Link from 'next/link';
import {
  ChevronRight, Camera, MessageSquare, Phone, ShieldCheck,
  CheckCircle2, Truck
} from 'lucide-react';
import { PRODUCTS_CATALOG, CATEGORIES_LIST } from '@/data/products';
import { CASE_STUDIES } from '@/data/case-studies';
import ProductCard from '@/components/ui/ProductCard';
import HomeQuoteTrigger from '@/components/home/HomeQuoteTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Zcool Enterprises | Refurbished AC Compressors & HVAC Sourcing',
  description: 'Specialized B2B supplier of refurbished and replacement scroll, rotary, and reciprocating AC compressors in Mumbai, India.',
};

export default function HomePage() {
  return (
    <div className="bg-[#F8F9FA] text-[#0F172A] min-h-screen">
      
      {/* ── SECTION 1: HERO ── */}
      <section className="relative bg-[#0A192F] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10 engineering-grid-dark" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <ScrollReveal delay={0} direction="up" distance={12}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0EA6A6] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#0EA6A6] animate-pulse" />
                <span>ZCOOL ENTERPRISES • INDUSTRIAL COMPRESSOR SUPPLIER</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="up" distance={16}>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white">
                REFURBISHED AC COMPRESSORS.<br />
                <span className="text-[#1D6FA3]">READY FOR REUSE.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="up" distance={16}>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl font-sans leading-relaxed">
                Zcool supplies refurbished and replacement compressors for commercial air conditioning, VRF systems, chillers, and industrial cooling applications across India.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={300} direction="up" distance={16}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/products"
                  className="group px-6 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>View Compressors</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <HomeQuoteTrigger variant="hero" buttonText="Request Quote" />

                <a
                  href="https://wa.me/919920691707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageSquare size={16} className="group-hover:scale-105 transition-transform duration-200" />
                  <span>WhatsApp Engineer</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Photo Upload Notice */}
            <ScrollReveal delay={400} direction="up" distance={12}>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Camera size={15} className="text-[#0EA6A6]" />
                <span>Have a compressor nameplate photo? Click "Request Quote" to upload for model matching.</span>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Hero Product Feature Frame */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={250} direction="scale" distance={16}>
              <div className="group bg-[#112240] border border-white/15 hover:border-white/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-3 mb-4">
                  <span className="uppercase text-[#0EA6A6] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                    FEATURED INDUSTRIAL STOCK
                  </span>
                  <span className="font-bold text-slate-300">Z-COP-ZR72</span>
                </div>

                <div className="aspect-[4/3] bg-[#0A192F] rounded-xl p-4 flex items-center justify-center border border-white/10 relative overflow-hidden">
                  <img
                    src="/ac_compressor.png"
                    alt="Copeland Scroll Compressor"
                    className="max-w-full max-h-full object-contain md:group-hover:scale-[1.03] md:group-hover:-translate-y-1 transition-transform duration-300 ease-out"
                    width={400}
                    height={300}
                    priority="true"
                  />
                  <span className="absolute bottom-3 right-3 badge-industrial bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    TESTED & PRESSURE READY
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between font-mono text-xs text-slate-300 border-t border-white/5 pt-3">
                  <div>
                    <span className="text-slate-500 block text-[10px]">MODEL:</span>
                    <span className="font-bold text-white">Copeland ZR72KC-TFD</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block text-[10px]">APPLICATION:</span>
                    <span className="text-[#0EA6A6] font-semibold">Package AC & Chillers</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Technical Trust Strip */}
        <div className="mt-14 border-t border-white/10 bg-[#071324] py-4">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
            <ScrollReveal delay={500} direction="up" distance={12}>
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-300 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0EA6A6]" />
                  <span>SCROLL COMPRESSORS</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0EA6A6]" />
                  <span>ROTARY COMPRESSORS</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0EA6A6]" />
                  <span>RECIPROCATING UNITS</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0EA6A6]" />
                  <span>VRF / VRV INVERTERS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-[#0EA6A6]" />
                  <span>PAN-INDIA FREIGHT</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PRODUCT CATEGORIES ── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up" distance={16}>
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs font-semibold text-[#1D6FA3] uppercase tracking-widest block mb-1">
                PRODUCT CATEGORIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                Browse Compressors by Technology
              </h2>
              <p className="text-slate-600 text-sm mt-2 font-sans">
                We stock and source refurbished and replacement units across major commercial HVAC compressor designs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES_LIST.map((cat, idx) => (
              <ScrollReveal key={cat.id} delay={idx * 80} direction="up" distance={16}>
                <div className="group card-industrial bg-[#F8F9FA] border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-[#1D6FA3]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                  <div>
                    <div className="aspect-[4/3] bg-white rounded-lg p-3 mb-4 border border-slate-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="max-h-full object-contain md:group-hover:scale-105 transition-transform duration-300 ease-out"
                        loading="lazy"
                        width={240}
                        height={180}
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2 md:group-hover:text-[#1D6FA3] transition-colors duration-200">
                      {cat.name}
                    </h3>
                    <p className="text-slate-600 text-xs font-sans leading-relaxed mb-4">
                      {cat.desc}
                    </p>
                  </div>

                  <Link
                    href={`/products?type=${encodeURIComponent(cat.name)}`}
                    className="group/link font-mono text-xs font-bold text-[#1D6FA3] hover:text-[#165680] uppercase tracking-wider flex items-center gap-1 mt-2"
                  >
                    <span>Explore {cat.name}</span>
                    <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 3: AVAILABLE INVENTORY PREVIEW ── */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up" distance={16}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="font-mono text-xs font-semibold text-[#1D6FA3] uppercase tracking-widest block mb-1">
                  CURRENT CATALOG
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                  Available Refurbished Compressors
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Inspected, coil-tested, and ready for immediate dispatch from our Mumbai warehouse.
                </p>
              </div>

              <Link
                href="/products"
                className="group px-5 py-2.5 rounded-lg bg-[#0A192F] hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-fit transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Full Inventory</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_CATALOG.slice(0, 6).map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 60} direction="up" distance={16}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: REFURBISHMENT PROCESS ── */}
      <section className="py-16 bg-[#0A192F] text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up" distance={16}>
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs font-semibold text-[#0EA6A6] uppercase tracking-widest block mb-1">
                QUALITY CONTROL & SOURCING
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                What "Refurbished" Means at Zcool
              </h2>
              <p className="text-slate-300 text-sm mt-2 font-sans">
                Every replacement compressor passes through our 6-stage technical validation process before dispatch.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Selective Core Sourcing', desc: 'We source genuine OEM compressor casings with verified operational background.' },
              { num: '02', title: 'Electrical Insulation Test', desc: 'Motor windings undergo high-potential insulation checks to prevent internal shorts.' },
              { num: '03', title: 'Pressure & Leak Testing', desc: 'Pressure tested using dry nitrogen to verify structural integrity and shell tightness.' },
              { num: '04', title: 'Oil & Flush Verification', desc: 'Refrigeration oil is checked and flushed with compatible POE or mineral oil.' },
              { num: '05', title: 'Port Sealing & Prep', desc: 'Suction and discharge copper ports are brazed and sealed to prevent air contamination.' },
              { num: '06', title: 'Crated Freight Dispatch', desc: 'Secured on heavy wooden palettes or custom crates for safe Pan-India transit.' },
            ].map((step, idx) => (
              <ScrollReveal key={step.num} delay={idx * 90} direction="up" distance={16}>
                <div className="group relative bg-[#112240] border border-white/10 hover:border-[#0EA6A6]/40 rounded-xl p-6 space-y-3 transition-all duration-300 hover:bg-[#162a4d] overflow-hidden h-full">
                  <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-[#0EA6A6] transition-all duration-300" />
                  <span className="font-mono font-bold text-lg text-[#0EA6A6] block md:group-hover:translate-x-1 transition-transform duration-200">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 5: WHY BUY FROM ZCOOL ── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal direction="right" distance={20}>
                <span className="font-mono text-xs font-semibold text-[#1D6FA3] uppercase tracking-widest block">
                  B2B SOURCING PARTNER
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                  Why HVAC Engineers & Contractors Buy From Zcool
                </h2>
                <p className="text-slate-600 text-sm font-sans leading-relaxed">
                  Finding the right replacement compressor for an old commercial AC unit or chiller can be difficult. We streamline model matching, stock availability, and quick dispatch.
                </p>
                
                <div className="pt-2">
                  <HomeQuoteTrigger variant="primary" buttonText="Send Photo for Matching" />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Specialized Compressor Focus', desc: 'We specialize purely in compressors and HVAC cooling components — not generic products.' },
                { title: 'Multiple Top Brands', desc: 'Copeland, Daikin, LG, Danfoss, Carrier, Hitachi, Voltas, and Mitsubishi replacement models.' },
                { title: 'Model Identification Support', desc: 'Unsure of the part number? Send a photo of the nameplate and our desk will match it.' },
                { title: 'Cost-Effective Replacement', desc: 'Refurbished units provide substantial savings over brand-new imported OEM assemblies.' },
                { title: 'Bulk Freight & Sourcing', desc: 'Pan-India supply for facility management, HVAC contractors, and commercial complexes.' },
                { title: 'Tested Before Freight', desc: 'Every compressor undergoes winding check, rotation test, and pressure hold verification.' }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 70} direction="up" distance={14}>
                  <div className="group bg-[#F8F9FA] border border-slate-200 rounded-xl p-5 space-y-2 hover:border-[#1D6FA3]/30 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 h-full">
                    <div className="flex items-center gap-2 text-[#1D6FA3] font-bold text-sm">
                      <CheckCircle2 size={16} className="text-[#0EA6A6] md:group-hover:scale-110 transition-transform duration-200" />
                      <h4>{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-xs font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 6: PHOTO IDENTIFICATION CTA BANNER ── */}
      <section className="py-14 bg-[#1D6FA3] text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0EA6A6] bg-[#0A192F] px-3 py-1 rounded">
                  MODEL IDENTIFICATION DESK
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  CAN'T FIND YOUR EXACT COMPRESSOR MODEL?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm font-sans max-w-xl">
                  Send us a photo of your compressor nameplate or model sticker. Our Mumbai technical desk will identify the specs, check cross-compatibility, and confirm stock availability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                <HomeQuoteTrigger variant="banner" buttonText="Upload Nameplate Photo" />

                <a
                  href="https://wa.me/919920691707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-5 py-3.5 rounded-lg bg-[#0A192F] hover:bg-slate-900 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageSquare size={18} className="group-hover:scale-105 transition-transform duration-200" />
                  <span>WhatsApp Image</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 7: CASE STUDIES PREVIEW ── */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up" distance={16}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="font-mono text-xs font-semibold text-[#1D6FA3] uppercase tracking-widest block mb-1">
                  REAL-WORLD SOURCING
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                  Recent Compressor Supply Scenarios
                </h2>
              </div>

              <Link
                href="/case-studies"
                className="group font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider flex items-center gap-1"
              >
                <span>View All Case Studies</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, idx) => (
              <ScrollReveal key={cs.id} delay={idx * 100} direction="up" distance={16}>
                <div className="group card-industrial bg-white border border-slate-200 rounded-xl p-6 space-y-4 flex flex-col justify-between hover:border-[#1D6FA3]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-100 pb-2">
                      <span className="font-bold text-[#1D6FA3] group-hover:text-[#165680] transition-colors duration-200">{cs.sector}</span>
                      <span>{cs.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 leading-snug">
                      {cs.title}
                    </h3>
                    
                    <div className="space-y-2 text-xs font-sans text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div>
                        <strong className="text-slate-800 font-mono text-[10px] uppercase block">REQUIREMENT:</strong>
                        <span>{cs.requirement}</span>
                      </div>
                      <div>
                        <strong className="text-slate-800 font-mono text-[10px] uppercase block">SUPPLIED:</strong>
                        <span className="text-[#1D6FA3] font-semibold">{cs.compressorSupplied}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-sans text-emerald-700 font-medium pt-2 border-t border-slate-100 flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 md:group-hover:scale-110 transition-transform duration-200" />
                    <span>{cs.result}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 8: FINAL CTA ── */}
      <section className="py-16 bg-[#0A192F] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center max-w-3xl space-y-6">
          <ScrollReveal direction="up" distance={16}>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0EA6A6] block mb-2">
              DIRECTORY & TECHNICAL SOURCING
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              LOOKING FOR A SPECIFIC AC COMPRESSOR?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up" distance={16}>
            <p className="text-slate-300 text-sm font-sans leading-relaxed max-w-xl mx-auto">
              Send us your model number, compressor photo, or nameplate specs. Our team will verify technical specs and confirm stock availability immediately.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up" distance={16}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <HomeQuoteTrigger variant="primary" buttonText="Get A Quote" />

              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageSquare size={16} className="group-hover:scale-105 transition-transform duration-200" />
                <span>WhatsApp Us Now</span>
              </a>

              <a
                href="tel:+919920691707"
                className="group px-6 py-3.5 rounded-lg border border-white/20 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone size={16} className="group-hover:scale-105 transition-transform duration-200" />
                <span>Call +91 99206 91707</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
