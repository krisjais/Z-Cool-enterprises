'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from '../../lib/gsap';
import {
  ArrowUpRight, Award, Compass, History, Target, Users2, ShieldCheck,
  ChevronRight, Home, Settings, Briefcase, Zap, Cpu
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

const TIMELINE = [
  { year: '2005', title: 'Inception', desc: 'Founded as a localized thermal control provider in industrial HVAC subsystems.' },
  { year: '2012', title: 'National Expansion', desc: 'Commissioned first major pharmaceutical cooling plant loops and expanded across North India.' },
  { year: '2018', title: 'Inverter Partnership', desc: 'Established partnerships with tier-1 OEM brands to build custom VRF controller PCBs.' },
  { year: '2026', title: 'Market Leadership', desc: 'Over 1000+ satisfied industrial clients operating Z-Cool precision systems.' }
];

export default function AboutPage() {
  const [ready, setReady] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        opacity: 0, y: 30, duration: 1.0, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' }
      });
    }, timelineRef);
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
          <span className="text-[#0F2B46] font-bold">ABOUT COMPANY</span>
        </div>

        {/* Hero Banner */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-20 text-left">
          <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">OUR PROFILE</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
            Precision Thermal Engineering
          </h1>
          <p className="text-slate-600 max-w-xl text-[15px] leading-relaxed">
            Z-Cool Technology is an engineering-first partner delivering robust closed-loop thermal control systems for server vaults, factory automation panels, and process machinery loops.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="py-24" style={{ background: C.bgWarmWhite, borderTop: `1px solid ${C.borderLight}` }}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
            <div className="mb-14">
              <span className="font-mono text-xs text-[#0EA6A6] tracking-widest uppercase font-bold font-bold">OPERATIONAL ETHICS</span>
              <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
                Our Core Anchors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { Icon: Award, title: 'Precision First', desc: 'Sub-degree calibration and multi-layer board trace insulation configurations ensure zero margins of error.' },
                { Icon: Compass, title: 'Reliability Guarantee', desc: 'Every chiller cabinet and panel cooler model undergoes 100% stress chamber validation.' },
                { Icon: Target, title: 'Direct Sourcing', desc: 'Complete OEM brand authorization loops ensure genuine technical support and zero intermediary lag.' }
              ].map((val) => (
                <div key={val.title} className="bg-white rounded-3xl border p-8 flex flex-col justify-between" style={{ borderColor: C.borderLight }}>
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${C.blue}0F` }}>
                      <val.Icon className="w-6 h-6" style={{ color: C.blue }} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F2B46] mb-3">{val.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Journey Timeline */}
        <section ref={timelineRef} className="py-24" style={{ background: C.bgSage, borderTop: `1px solid ${C.borderLight}` }}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
            <div className="mb-14">
              <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">CHRONICLE LOGS</span>
              <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
                Our Historical Journey
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {TIMELINE.map((item) => (
                <div
                  key={item.year}
                  className="timeline-item bg-white rounded-2xl border p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between"
                  style={{ borderColor: C.borderLight }}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-3xl font-extrabold text-[#1D6FA3]">{item.year}</span>
                    <div>
                      <h4 className="font-bold text-sm text-[#0F2B46]">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-light">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border flex items-center justify-center" style={{ borderColor: C.borderStrong }}>
                    <ShieldCheck size={14} className="text-[#0EA6A6]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Summary */}
        <section className="py-28 text-white" style={{ background: C.bgDarkNavy }}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 text-center">
            <span className="font-mono text-xs text-[#0EA6A6] tracking-widest uppercase font-bold">METRIC DATA</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-14" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Scale of Industrial Influence
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { count: '20+', label: 'Years Support' },
                { count: '1000+', label: 'Happy Clients' },
                { count: '500+', label: 'Solutions Catalog' },
                { count: '100%', label: 'Quality Verified' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-4xl font-mono font-bold" style={{ color: C.gold }}>{stat.count}</div>
                  <div className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
