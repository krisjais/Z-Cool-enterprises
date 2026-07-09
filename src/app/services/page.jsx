'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from '../../lib/gsap';
import {
  Settings, ShieldCheck, Thermometer, Tool, Phone, MessageSquare,
  ChevronRight, Home, ArrowUpRight, Award, Zap, Cpu, FileText, CheckCircle2
} from 'lucide-react';
import Preloader from '../../components/loader/Preloader';

const C = {
  bgHero:        '#F1F6FA',
  bgWarmWhite:   '#E6F1F5',
  bgSage:        '#E2ECE9',
  bgNeutralGray: '#EAEDF1',
  bgDarkNavy:    '#0F2B46',
  card:          '#FFFFFF',
  navy:          '#0F2B46',
  blue:          '#1D6FA3',
  teal:          '#0EA6A6',
  gold:          '#F2C14E',
  slate:         '#6E7C93',
  borderLight:   'rgba(15,43,70,0.06)',
  borderStrong:  'rgba(15,43,70,0.12)',
};

const SERVICES = [
  {
    num: '01',
    title: 'Thermal Load Auditing',
    desc: 'On-site profiling of severe heat loads, VFD rack spikes, and room volume profiles to compute required air change metrics.',
    details: ['VFD Cabinet thermodynamic profiling', 'Clean room ambient humidity audits', 'Chiller coil pressure measurements']
  },
  {
    num: '02',
    title: 'System Engineering CAD Model',
    desc: 'Detailed fluid dynamic simulations and mechanical layout drawings aligned with OEM bracket parameters.',
    details: ['Cutout CAD templates (.dwg / .step)', 'Compressor frequency scaling calculations', 'Modbus registers address mapping']
  },
  {
    num: '03',
    title: 'Commissioning & Handover',
    desc: 'On-site engineer verification of system pipelines, refrigerant levels, and initial sensor calibrations.',
    details: ['Refrigerant charge validation', 'Startup cycle noise vibration checks', 'Operations team manual handover']
  },
  {
    num: '04',
    title: 'Calibration & PMC Support',
    desc: 'Annual maintenance contracts incorporating logic board diagnostics checks and condensation evaporator cleaning.',
    details: ['PCB conformal coating inspections', 'Evaporator coil chemical cleaning', 'Safety pressure release valve testing']
  }
];

export default function ServicesPage() {
  const [ready, setReady] = useState(false);
  const cardGridRef = useRef(null);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        opacity: 0, y: 30, duration: 1.0, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: cardGridRef.current, start: 'top 80%' }
      });
    }, cardGridRef);
    return () => ctx.revert();
  }, [ready]);

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      <div className="w-full overflow-x-hidden min-h-screen" style={{ background: C.bgHero }}>
        
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-8 pb-4 flex items-center gap-2 font-mono text-[10px] text-slate-400 tracking-wider">
          <Link href="/" className="hover:text-[#1D6FA3] flex items-center gap-1">
            <Home size={10} /> HOME
          </Link>
          <ChevronRight size={10} />
          <span className="text-[#0F2B46] font-bold">SOLUTIONS PORTFOLIO</span>
        </div>

        {/* Hero Banner */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-20 text-left">
          <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">SERVICES</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
            Operational Commissioning Solutions
          </h1>
          <p className="text-slate-600 max-w-xl text-[15px] leading-relaxed">
            From design CAD drafting to high-vibration site calibrations, our dedicated commercial engineers support every stage of system execution.
          </p>
        </section>

        {/* Services Showcase Cards */}
        <section ref={cardGridRef} className="py-24" style={{ background: C.bgWarmWhite, borderTop: `1px solid ${C.borderLight}` }}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col gap-10">
            {SERVICES.map((srv) => (
              <div
                key={srv.num}
                className="service-card bg-white rounded-3xl border p-10 flex flex-col lg:flex-row gap-8 items-start justify-between hover:shadow-xl transition-all duration-300"
                style={{ borderColor: C.borderLight }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[#1D6FA3] font-bold text-lg">{srv.num}</span>
                    <h3 className="text-2xl font-bold text-[#0F2B46] tracking-tight">{srv.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light mb-6">{srv.desc}</p>
                  
                  {/* Service Specs Checklist */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {srv.details.map((det) => (
                      <span key={det} className="flex items-center gap-2 text-[10px] font-mono text-slate-700 bg-slate-50 border p-2.5 rounded-lg" style={{ borderColor: C.borderStrong }}>
                        <CheckCircle2 size={12} className="text-[#0EA6A6] flex-shrink-0" />
                        {det}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 pt-2 lg:pt-0">
                  <Link
                    href="/contact"
                    className="flex items-center gap-1 px-5 py-3 border rounded-xl text-xs uppercase tracking-wider font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    style={{ borderColor: C.borderStrong }}
                  >
                    Inquire Service <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering standards banner */}
        <section className="py-28 text-white" style={{ background: C.bgDarkNavy }}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 text-center">
            <span className="font-mono text-xs text-[#0EA6A6] tracking-widest uppercase font-bold">VERIFICATIONS</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Qualified Engineering Handover
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-14">
              All calibrations align with ISO 9001 and OEM parameters to guarantee zero downtime risk during high-heat operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all">
                Speak to our Team
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
