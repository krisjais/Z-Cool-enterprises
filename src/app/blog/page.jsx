'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from '../../lib/gsap';
import {
  ArrowUpRight, FileText, ChevronRight, Home, ShieldCheck, Clock, Calendar
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

const POSTS = [
  {
    id: 'nema-ratings-guide',
    title: 'Industrial Enclosure NEMA Classification Guidelines',
    category: 'Standards & Ingress Defense',
    date: 'July 02, 2026',
    readTime: '6 Min Read',
    desc: 'Understanding the engineering differences between NEMA 12 dust protection and NEMA 4/4X sealed closed-loop moisture parameters for side-mount panel cooling exchangers.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop',
    author: 'Z-Cool Tech Desk'
  },
  {
    id: 'cop-efficiency-chillers',
    title: 'Process Chiller Thermodynamic COP Calculations',
    category: 'Thermodynamics & Chillers',
    date: 'June 28, 2026',
    readTime: '8 Min Read',
    desc: 'Evaluating water-side evaporator scaling coefficients and scroll compressor array frequencies to maximize COP ratings above 4.2 under severe summer ambient loads.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=900&auto=format&fit=crop',
    author: 'Eng. Vikram Mehta'
  },
  {
    id: 'vrf-pcb-pid-loop',
    title: 'Active PID Frequency Throttling in Inverter PCBs',
    category: 'Electrical & Controller Boards',
    date: 'June 15, 2026',
    readTime: '10 Min Read',
    desc: 'How the STM32 ARM MCU uses active feedback inputs from discharge temperature line sensors to adjust EEV electronic throttling and coordinate VRF compressors.',
    img: '/hvac_pcb_macro.png',
    author: 'Z-Cool Tech Desk'
  }
];

export default function BlogPage() {
  const [ready, setReady] = useState(false);
  const postsGridRef = useRef(null);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.from('.blog-card', {
        opacity: 0, y: 35, duration: 1.0, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: postsGridRef.current, start: 'top 80%' }
      });
    }, postsGridRef);
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
          <span className="text-[#0F2B46] font-bold">TECHNICAL BLOG</span>
        </div>

        {/* Hero Banner */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-20 text-left">
          <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">KNOWLEDGE CENTER</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
            The Engineering Journal
          </h1>
          <p className="text-slate-600 max-w-xl text-[15px] leading-relaxed">
            Technical analysis, calculation sheets, standards compliance documents, and installation best practices curated by our HVAC engineering experts.
          </p>
        </section>

        {/* Blog Post Cards */}
        <section ref={postsGridRef} className="py-24" style={{ background: C.bgWarmWhite, borderTop: `1px solid ${C.borderLight}` }}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <div
                key={post.id}
                className="blog-card group bg-white rounded-3xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                style={{ borderColor: C.borderLight }}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden border-b" style={{ borderColor: C.borderLight }}>
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.95) saturate(0.7)' }} />
                  </div>
                  <div className="p-8">
                    <span className="font-mono text-[9px] text-[#1D6FA3] tracking-widest uppercase font-bold block mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0F2B46] mb-3 group-hover:text-[#1D6FA3] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light mb-6">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 font-bold border-t pt-4" style={{ borderColor: C.borderLight }}>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
