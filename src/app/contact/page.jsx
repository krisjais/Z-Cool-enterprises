import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
  Layers,
  FileCheck,
  Camera,
  Package,
  ExternalLink,
  UserCheck,
} from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { ContactHeroCTA } from '@/components/contact/ContactHeroCTA';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { COMPANY_DETAILS } from '@/constants/company';

export const metadata = {
  title: 'Contact Zcool Enterprises | Compressor Quote & Sourcing Desk',
  description:
    'Contact Zcool Enterprises in Mumbai for commercial AC, VRV, and refrigeration compressor inquiries, refurbished unit availability, quote requests, and nameplate matching.',
};

export default function ContactPage() {
  const whatToSendItems = [
    {
      title: 'Compressor Model Number',
      desc: 'Stamped on the compressor body sticker (e.g. Copeland ZR72KC-TFD, Daikin JT160G-P8Y1, Danfoss MTZ64-4VI).',
    },
    {
      title: 'Nameplate Photograph',
      desc: 'A photo of the label showing full model, electrical code, voltage, phase, and displacement numbers.',
    },
    {
      title: 'Operating Refrigerant',
      desc: 'Specify whether your system uses R22, R410A, R407C, or R404A so we verify oil compatibility.',
    },
    {
      title: 'Equipment Application',
      desc: 'Let us know if the unit is for a commercial package AC, VRV outdoor system, cold room, or chiller circuit.',
    },
    {
      title: 'Required Quantity',
      desc: 'Single unit for emergency breakdown replacement or multiple units for scheduled maintenance.',
    },
    {
      title: 'Existing Equipment Frame',
      desc: 'Any details on existing mounting bolt pitch or suction/discharge line dimensions to confirm direct fit.',
    },
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Send Requirement',
      desc: 'Submit your model code, nameplate photo, or equipment specifications via our form, WhatsApp, or phone.',
    },
    {
      num: '02',
      title: 'Review Details',
      desc: 'Our Mumbai technical desk cross-references voltage, phase, displacement, and mounting footprint.',
    },
    {
      num: '03',
      title: 'Check Available Options',
      desc: 'We check warehouse inventory for direct drop-ins, tested refurbished units, or suitable alternatives.',
    },
    {
      num: '04',
      title: 'Quote & Supply Discussion',
      desc: 'We confirm pricing, verified condition grading, transport packaging, and freight arrangements.',
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A] overflow-x-hidden">
      {/* ── Editorial Hero ── */}
      <section className="bg-[#0A192F] text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1 rounded">
                <span>B2B COMPRESSOR PROCUREMENT DESK</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                NEED A COMPRESSOR?
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
                Send us the model number, nameplate photo, part number, application, or quantity
                requirement and we will review your request. Our Mumbai desk assists commercial HVAC
                contractors, facility managers, and dealers.
              </p>

              <ContactHeroCTA />
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs max-w-xs space-y-3">
                <div className="relative h-44 w-full bg-slate-900/40 rounded-xl overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src="/ac_compressor.png"
                    alt="Commercial AC Compressor"
                    width={200}
                    height={160}
                    className="object-contain max-h-40 drop-shadow-md"
                    priority
                  />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#0EA6A6] uppercase tracking-wider block">
                    MUMBAI SOURCING DESK
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Stock checks, condition verification, and direct freight dispatch from Mumbai,
                    Maharashtra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Contact & Form Section ── */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Channels & Operational Hub */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal animation="fade-up" duration={450}>
                {/* Direct Channels Box */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-xs">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#1D6FA3] uppercase tracking-wider block mb-1">
                      DIRECT REACH
                    </span>
                    <h2 className="font-display font-bold text-xl text-[#0A192F]">
                      Contact Sourcing Desk
                    </h2>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    {/* Owner / Contact Person */}
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-white flex items-center justify-center flex-shrink-0">
                        <UserCheck size={18} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">
                          CONTACT PERSON / OWNER
                        </span>
                        <strong className="text-slate-900 text-sm font-sans block mt-0.5">
                          {COMPANY_DETAILS.owner}
                        </strong>
                        <span className="text-slate-500 font-sans text-xs block">
                          {COMPANY_DETAILS.role} · Z.Cool Enterprises
                        </span>
                      </div>
                    </div>

                    {/* Primary Phone */}
                    <a
                      href={COMPANY_DETAILS.primaryTel}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#1D6FA3] hover:bg-blue-50/40 transition-colors active:scale-[0.985] group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1D6FA3] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">
                          PRIMARY CALLING DESK
                        </span>
                        <strong className="text-slate-900 text-sm font-sans block mt-0.5">
                          {COMPANY_DETAILS.formattedPrimaryPhone}
                        </strong>
                      </div>
                    </a>

                    {/* Secondary Phone */}
                    <a
                      href={COMPANY_DETAILS.secondaryTel}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#1D6FA3] hover:bg-blue-50/40 transition-colors active:scale-[0.985] group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">
                          SECONDARY CONTACT LINE
                        </span>
                        <strong className="text-slate-900 text-sm font-sans block mt-0.5">
                          {COMPANY_DETAILS.formattedSecondaryPhone}
                        </strong>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={COMPANY_DETAILS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 hover:bg-emerald-100/70 transition-colors active:scale-[0.985] group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <span className="text-emerald-700 text-[10px] uppercase block">
                          WHATSAPP NAMEPLATE PHOTO
                        </span>
                        <strong className="text-emerald-950 text-sm font-sans block mt-0.5">
                          {COMPANY_DETAILS.formattedPrimaryPhone}
                        </strong>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={COMPANY_DETAILS.mailto}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#1D6FA3] hover:bg-blue-50/40 transition-colors active:scale-[0.985] group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Mail size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-slate-400 text-[10px] uppercase block">
                          OFFICIAL BUSINESS EMAIL
                        </span>
                        <strong className="text-slate-900 text-xs font-sans block mt-0.5 break-all">
                          {COMPANY_DETAILS.email}
                        </strong>
                      </div>
                    </a>

                    {/* Location & Directions */}
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2.5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin size={18} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-slate-400 text-[10px] uppercase block">
                            OFFICIAL BUSINESS PREMISES
                          </span>
                          <strong className="text-slate-900 text-xs font-sans block mt-0.5">
                            {COMPANY_DETAILS.name}
                          </strong>
                          <p className="text-slate-600 font-sans text-xs leading-relaxed mt-1">
                            {COMPANY_DETAILS.address.full}
                          </p>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex justify-end">
                        <a
                          href={COMPANY_DETAILS.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1D6FA3] hover:bg-[#14537D] text-white font-mono text-xs font-semibold transition-colors active:scale-95 shadow-2xs"
                        >
                          <span>Get Directions</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Practical Trust Box */}
              <ScrollReveal animation="fade-up" delay={100} duration={450}>
                <div className="bg-[#0A192F] text-white rounded-xl p-6 sm:p-7 space-y-4 border border-white/10">
                  <div className="flex items-center gap-2 text-[#0EA6A6] font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck size={16} />
                    <span>COMMERCIAL PROCUREMENT PROTOCOL</span>
                  </div>
                  <p className="text-slate-300 text-xs font-sans leading-relaxed">
                    Every inquiry is handled directly by technical personnel in Mumbai. We confirm
                    electrical specifications, terminal layouts, port configurations, and condition
                    ratings before dispatching any compressor.
                  </p>
                  <div className="border-t border-white/10 pt-3 flex flex-wrap gap-3 font-mono text-[11px] text-slate-400">
                    <span>• Copeland</span>
                    <span>• Daikin</span>
                    <span>• LG</span>
                    <span>• Danfoss</span>
                    <span>• Carrier</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Main Compressor Inquiry Form */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-up" delay={150} duration={500}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Buyer Requirement Guidance ── */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal animation="fade-up" duration={450}>
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider mb-2">
                <HelpCircle size={14} />
                <span>INQUIRY CHECKLIST</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                WHAT TO SEND US
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-sans mt-1 max-w-2xl">
                Providing complete information helps our sourcing desk confirm exact model matches and
                pricing without back-and-forth delays.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatToSendItems.map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 60} duration={400}>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 h-full">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#0A192F]">
                    <CheckCircle2 size={15} className="text-[#0EA6A6] flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-600 text-xs font-sans leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal animation="fade-up" duration={450}>
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider mb-2">
                <Clock size={14} />
                <span>TRANSPARENT PROCESS</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                WHAT HAPPENS NEXT
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-sans mt-1 max-w-2xl">
                How our Mumbai procurement desk processes your compressor inquiry from initial review
                to supply discussion.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <ScrollReveal key={step.num} animation="fade-up" delay={idx * 80} duration={450}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-xs h-full">
                  <span className="font-mono text-xs font-extrabold text-[#1D6FA3] bg-blue-50 border border-blue-100 px-2 py-1 rounded inline-block">
                    {step.num} {'// STEP'}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#0A192F]">{step.title}</h3>
                  <p className="text-slate-600 text-xs font-sans leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Discovery ── */}
      <section className="py-12 sm:py-14 bg-slate-100 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <ScrollReveal animation="fade-up" duration={450}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
                  COMPRESSOR INVENTORY &amp; SPECS
                </span>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F]">
                  LOOKING FOR A SPECIFIC COMPRESSOR?
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-sans">
                  Explore our catalog of scroll, rotary, and reciprocating compressors by brand or
                  application.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/products"
                  className="px-5 py-3 rounded-lg bg-[#0A192F] hover:bg-[#142847] text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all active:scale-[0.985] shadow-xs"
                >
                  <span>VIEW COMPRESSORS</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/brands"
                  className="px-5 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all active:scale-[0.985]"
                >
                  <span>BROWSE BRANDS</span>
                </Link>
                <Link
                  href="/applications"
                  className="px-5 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all active:scale-[0.985]"
                >
                  <span>VIEW APPLICATIONS</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
