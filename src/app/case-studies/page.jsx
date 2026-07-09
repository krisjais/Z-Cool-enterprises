'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from '../../lib/gsap';
import {
  ArrowUpRight, Users2, ShieldCheck, Award, Briefcase,
  ChevronRight, Home, Settings, Zap, Cpu, FileText
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

const CASES = [
  {
    num: '01',
    metric: '35% Savings',
    label: 'Energy Consumption Drop',
    title: 'Automated Logistics Conveyor Cooling Enclosures',
    desc: 'Deployment of 12 closed-loop PEX-P15 cabinet heat exchangers at Chennai logistics port VFD control boxes. Eliminated summer trip failures and dropped fan electricity bills by 35%.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
    sector: 'Logistics Port / Infrastructure'
  },
  {
    num: '02',
    metric: '99.8% Uptime',
    label: 'Thermal Stability Guarantee',
    title: 'Mission Critical General ICU Diagnostic Unit',
    desc: 'Precision CCU-X10 air handling loops commissioned for diagnostic and surgical ICU rooms in Mumbai. Restored humidity parameters to strict ±1% tolerances.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
    sector: 'Healthcare Services'
  },
  {
    num: '03',
    metric: 'Zero Failures',
    label: 'Dust Loop Containment',
    title: 'CNC Mill Automation Control Cooler Integration',
    desc: 'Installed sealed side-mount coolers for high-density robotic welding cells in Pune. Completely contained metal grind dust loops from entering server controller logic.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop',
    sector: 'Robotic Manufacturing'
  }
];

export default function CaseStudiesPage() {
  const [ready, setReady] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.from('.case-study-card', {
        opacity: 0, y: 35, duration: 1.1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
      });
    }, cardsRef);
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
          <span className="text-[#0F2B46] font-bold">CASE STUDIES</span>
        </div>

        {/* Hero Banner */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-20 text-left">
          <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">FIELD PERFORMANCE</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
            Thermodynamic Outcomes
          </h1>
          <p className="text-slate-600 max-w-xl text-[15px] leading-relaxed">
            Real-world performance logs demonstrating sustained component durability and energy efficiency scaling across India.
          </p>
        </section>

        {/* Case Cards */}
        <section ref={cardsRef} className="py-24" style={{ background: C.bgSage, borderTop: `1px solid ${C.borderLight}` }}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASES.map((item) => (
              <div
                key={item.num}
                className="case-study-card group bg-white rounded-3xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                style={{ borderColor: C.borderLight }}
              >
                <div>
                  <div className="relative overflow-hidden aspect-[16/10] border-b" style={{ borderColor: C.borderLight }}>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.9) saturate(0.6)' }} />
                  </div>
                  <div className="p-8">
                    <span className="font-mono text-[9px] text-[#0EA6A6] tracking-widest uppercase font-bold block mb-1">
                      {item.sector}
                    </span>
                    <h3 className="text-lg font-bold text-[#0F2B46] mb-3 leading-snug">{item.title}</h3>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-light mb-6">{item.desc}</p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="flex items-baseline gap-3 mb-6 pb-6 border-b" style={{ borderColor: C.borderLight }}>
                    <span className="text-3xl font-mono font-bold text-[#1D6FA3] tracking-tight">{item.metric}</span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold">{item.label}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full py-3.5 bg-slate-100 group-hover:bg-[#1D6FA3] group-hover:text-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center block"
                  >
                    Inquire Similar Setup
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
