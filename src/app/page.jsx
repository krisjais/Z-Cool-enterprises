'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';
import { gsap } from '../lib/gsap';
import {
  ArrowUpRight, ArrowDown, ChevronRight, Phone, MessageSquare,
  Shield, Clock, Package, Users, MapPin, Mail, CheckCircle2,
  Zap, Settings, Star, Globe
} from 'lucide-react';

/* ───────────────────────────────────────────────────────────────
   DESIGN TOKENS
──────────────────────────────────────────────────────────────── */
const T = {
  bg:       '#FCFBF8',
  bgAlt:    '#F5F4EF',
  dark:     '#111827',
  text:     '#111827',
  muted:    '#4B5563',
  subtle:   '#9CA3AF',
  blue:     '#2563EB',
  blueH:    '#1D4ED8',
  gold:     '#C8A76E',
  hair:     'rgba(17,24,39,0.06)',
  light:    'rgba(17,24,39,0.10)',
};

/* ───────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
──────────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

/* ───────────────────────────────────────────────────────────────
   TRUSTED BRANDS DATA
──────────────────────────────────────────────────────────────── */
const BRANDS = [
  'DAIKIN', 'CARRIER', 'LG', 'VOLTAS', 'BLUE STAR',
  'HITACHI', 'SAMSUNG', 'MITSUBISHI', 'TOSHIBA', 'PANASONIC',
];

/* ───────────────────────────────────────────────────────────────
   PRODUCTS DATA
──────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 'hvac-pcb-100',
    code: 'Z-PCB-H100',
    category: 'Electronic Components',
    name: 'Inverter VRF Controller Board',
    desc: 'Master inverter controller for high-capacity VRF systems. Coordinates active compressor frequency scaling and EEV throttling with PID precision.',
    img: '/hvac_pcb_front.png',
    color: '#2563EB',
    badge: 'OEM Certified',
    specs: [
      { label: 'Voltage', value: '380–415V AC' },
      { label: 'PCB Type', value: 'FR-4 High-TG' },
      { label: 'Warranty', value: '36 Months' },
      { label: 'Protocol', value: 'Modbus RS485' },
    ],
    compat: 'Daikin · LG · Carrier · Mitsubishi',
  },
  {
    id: 'chiller-w50',
    code: 'CH-W50',
    category: 'Water Cooling Systems',
    name: 'Industrial Process Liquid Chiller',
    desc: 'Engineered for process cooling in factories, medical centers, and chemical reactors. Scroll compressor array, shell-and-tube heat exchanger.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    color: '#0B8F8F',
    badge: 'OEM Grade',
    specs: [
      { label: 'Capacity', value: '50 kW' },
      { label: 'Refrigerant', value: 'R410A' },
      { label: 'Water Flow', value: '8.6 m³/h' },
      { label: 'COP', value: '4.2 Nominal' },
    ],
    compat: 'Carrier · Trane · York · Daikin',
  },
  {
    id: 'panel-pex15',
    code: 'PEX-P15',
    category: 'Panel Cooling Systems',
    name: 'Cabinet Panel Heat Exchanger',
    desc: 'IP55 sealed closed-loop air-to-air heat exchanger protecting PLC cabinets from dust, chemical vapor, and thermal failure in harsh environments.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    color: '#C8A76E',
    badge: 'Industrial Grade',
    specs: [
      { label: 'Heat Extract', value: '1500 W' },
      { label: 'Ingress', value: 'IP55' },
      { label: 'Airflow', value: '450 m³/h' },
      { label: 'Voltage', value: '220–240V' },
    ],
    compat: 'Rittal · Siemens · ABB · Schneider',
  },
  {
    id: 'hvac-pcb-100',
    code: 'Z-PCB-H200',
    category: 'Electronic Components',
    name: 'Dual-Stage Compressor Drive PCB',
    desc: 'Advanced dual-stage frequency drive board for oversized HVAC compressors. Features anti-surge logic and thermal protection algorithms.',
    img: '/hvac_pcb_perspective.png',
    color: '#2563EB',
    badge: 'Premium Series',
    specs: [
      { label: 'Stages', value: '2-Stage' },
      { label: 'Max Load', value: '60 kW' },
      { label: 'THD', value: '< 5%' },
      { label: 'Warranty', value: '24 Months' },
    ],
    compat: 'Daikin VRV · Mitsubishi City',
  },
  {
    id: 'chiller-w50',
    code: 'AC-CU-30',
    category: 'Condensing Units',
    name: 'Air-Cooled Condensing Unit',
    desc: 'High-efficiency air-cooled condensing unit for commercial refrigeration and precision air conditioning applications in hot climates.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    color: '#0B8F8F',
    badge: 'In Stock',
    specs: [
      { label: 'Capacity', value: '30 kW' },
      { label: 'Fan Type', value: 'Axial EC' },
      { label: 'EER', value: '3.6' },
      { label: 'Refrigerant', value: 'R448A' },
    ],
    compat: 'Universal OEM Compatible',
  },
];

/* ───────────────────────────────────────────────────────────────
   INDUSTRIES DATA
──────────────────────────────────────────────────────────────── */
const INDUSTRIES = [
  { num: '01', name: 'Hospitals & Healthcare', desc: 'Precision climate control for operating theaters, server rooms, and pharma cold chain.', stat: '50+ Installations' },
  { num: '02', name: 'Hotels & Hospitality', desc: 'Quiet, energy-efficient HVAC systems ensuring guest comfort across 5-star properties.', stat: '120+ Projects' },
  { num: '03', name: 'Industrial Factories', desc: 'Heavy-duty thermal management for process equipment, CNC machines, and robotics.', stat: '200+ Setups' },
  { num: '04', name: 'Commercial Buildings', desc: 'Central HVAC systems with BMS integration for offices, malls, and data centers.', stat: 'Pan India' },
  { num: '05', name: 'HVAC OEM Partners', desc: 'Authorized PCB and component supply for original equipment manufacturers.', stat: '20+ Brands' },
  { num: '06', name: 'Industrial Plants', desc: 'Process cooling for chemical plants, foundries, and heavy manufacturing units.', stat: '30+ Plants' },
];

/* ───────────────────────────────────────────────────────────────
   STATS DATA
──────────────────────────────────────────────────────────────── */
const STATS = [
  { num: '20+', label: 'Years of Engineering Excellence' },
  { num: '500+', label: 'Products & Components' },
  { num: '1000+', label: 'Satisfied Industrial Clients' },
  { num: '100%', label: 'OEM Authorized Supply Chain' },
];

/* ═══════════════════════════════════════════════════════════════
   SECTION 1: HERO
═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const subRef = useRef(null);
  const lineRef = useRef(null);
  const coordRef = useRef(null);
  const cursorX = useMotionValue(0.5);
  const cursorY = useMotionValue(0.5);
  const springX = useSpring(cursorX, { stiffness: 60, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line sweep
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.8,
        ease: 'expo.inOut',
        delay: 1.0,
      });
      // Coordinates counter
      if (coordRef.current) {
        gsap.from(coordRef.current, { opacity: 0, duration: 0.6, delay: 1.5 });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorX.set((e.clientX - rect.left) / rect.width);
    cursorY.set((e.clientY - rect.top) / rect.height);
  }, [cursorX, cursorY]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ background: T.dark }}
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-100" />

      {/* Mouse parallax glow */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
          x: springX.get ? undefined : 0,
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          left: `${(cursorX.get ? cursorX.get() : 0.5) * 100}%`,
          top: `${(cursorY.get ? cursorY.get() : 0.5) * 100}%`,
        }}
        transition={{ duration: 0, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-24 pb-16">
        <div className="grid grid-cols-12 gap-6 items-center min-h-[80vh]">

          {/* Left: Typography */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-8 h-px bg-[#C8A76E]" />
              <span
                className="text-[#9CA3AF] font-medium"
                style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}
              >
                Authorized HVAC Electronics Partner · Mumbai, India
              </span>
            </motion.div>

            {/* Headline — 3 lines */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(52px, 8.5vw, 130px)',
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  color: 'white',
                  margin: 0,
                }}
              >
                ENGINEERED
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(52px, 8.5vw, 130px)',
                  fontWeight: 300,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  color: 'rgba(255,255,255,0.22)',
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                FOR
              </motion.div>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(52px, 8.5vw, 130px)',
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  color: T.gold,
                  margin: 0,
                }}
              >
                RELIABILITY.
              </motion.div>
            </div>

            {/* Divider line */}
            <div
              ref={lineRef}
              className="w-full mb-8"
              style={{ height: 1, background: 'rgba(255,255,255,0.08)' }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.75 }}
              className="text-[#9CA3AF] font-light leading-relaxed mb-10"
              style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', maxWidth: 500, fontFamily: 'Inter, sans-serif' }}
            >
              Sourcing precision air handling, process fluid chillers, and sealed panel coolers for heavy industrial applications. 20+ years of thermal engineering expertise across India.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/products" className="btn-primary">
                Explore Products
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-7 py-[14px] rounded-[10px] border text-white font-semibold text-[13px] tracking-wide transition-all duration-200 hover:bg-white hover:text-[#111827] hover:-translate-y-px"
                style={{ borderColor: 'rgba(255,255,255,0.16)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                Request Quote
              </Link>
              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-[14px] rounded-[10px] bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] font-semibold text-[13px] tracking-wide transition-all hover:bg-[#25D366] hover:text-white hover:-translate-y-px"
                style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                <MessageSquare size={15} />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: Technical Panel */}
          <div className="col-span-12 lg:col-span-5 hidden lg:flex flex-col gap-4">
            {/* PCB Image Frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', aspectRatio: '4/3' }}
            >
              <img
                src="/hvac_pcb_front.png"
                alt="Inverter VRF Controller Board"
                className="w-full h-full object-contain p-8"
                style={{ filter: 'brightness(0.9) saturate(0.8)' }}
              />
              <div className="absolute inset-0 eng-grid-sm opacity-30" />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827]/80 backdrop-blur-md border border-white/08">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/90">OEM Certified · In Stock</span>
              </div>
            </motion.div>

            {/* Spec Chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: 'Brands Supported', value: '8+ OEM' },
                { label: 'Warranty', value: '36 Months' },
                { label: 'Lead Time', value: 'In Stock' },
                { label: 'Experience', value: '20+ Years' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 border flex flex-col gap-1"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#4B5563]">{s.label}</span>
                  <span className="text-white font-bold text-[15px]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Engineering coordinates */}
            <motion.div
              ref={coordRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center justify-between text-[9px] font-mono text-[#4B5563] tracking-widest uppercase px-1"
            >
              <span>N 18°58'30" E 72°49'33"</span>
              <span>Mumbai · Maharashtra · IND</span>
              <span>T: 293K · P: 1ATM</span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-[#4B5563]" />
        </motion.div>
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#4B5563]">Scroll</span>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2: TRUSTED BRANDS MARQUEE
═══════════════════════════════════════════════════════════════ */
function TrustedBrandsSection() {
  return (
    <section className="py-12 border-y" style={{ background: T.bg, borderColor: T.hair }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-8">
        <div className="section-label">Compatible Brands</div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="marquee-track">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center gap-4 flex-shrink-0 group cursor-default select-none"
            >
              <span
                className="font-bold text-[#9CA3AF] tracking-[0.18em] transition-colors group-hover:text-[#111827] duration-300"
                style={{ fontSize: 12, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}
              >
                {brand}
              </span>
              <span className="w-1 h-1 rounded-full bg-[rgba(17,24,39,0.12)] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3: ENGINEERING PHILOSOPHY (SPLIT LAYOUT)
═══════════════════════════════════════════════════════════════ */
function EngineeringPhilosophySection() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { yPercent: 8 },
        { yPercent: -8, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 1.5, start: 'top bottom', end: 'bottom top' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: T.bgAlt }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: Editorial text */}
          <div className="lg:col-span-5">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              className="flex flex-col gap-8"
            >
              <motion.div variants={fadeUp}>
                <div className="section-label mb-6">Engineering Philosophy</div>
                <h2
                  className="font-bold leading-[1.05]"
                  style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.03em', color: T.dark }}
                >
                  Precision built<br />
                  <em className="font-light not-italic" style={{ color: T.muted }}>
                    at every layer.
                  </em>
                </h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-[#4B5563] leading-relaxed font-light" style={{ fontSize: 16 }}>
                Every component we supply is selected through a rigorous engineering audit. From PCB trace widths to refrigerant compatibility matrices — we operate at the molecular level of industrial thermal management.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                {[
                  { title: 'OEM Specification Compliance', desc: 'All products match exact manufacturer datasheets and tolerance ratings.' },
                  { title: 'ISO 9001:2015 Certified Supply', desc: 'Full traceability from component origin to installation handover.' },
                  { title: '20+ Years Field Experience', desc: 'Deep-rooted knowledge across residential, commercial, and industrial HVAC.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: T.blue + '15', border: `1px solid ${T.blue}30` }}
                    >
                      <CheckCircle2 size={11} color={T.blue} />
                    </div>
                    <div>
                      <div className="font-semibold text-[13px]" style={{ color: T.dark }}>{item.title}</div>
                      <div className="text-[12px] font-light mt-0.5" style={{ color: T.muted }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link href="/about" className="btn-ghost inline-flex">
                  Learn Our Process
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: PCB Image with Blueprint Callouts */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: T.hair, aspectRatio: '4/3', background: '#F0F0EB' }}
            >
              <div ref={imgRef} className="w-full h-full scale-[1.1]">
                <img
                  src="/hvac_pcb_exploded.png"
                  alt="PCB exploded technical drawing"
                  className="w-full h-full object-contain p-6"
                  style={{ filter: 'saturate(0.6) contrast(1.08)' }}
                />
              </div>
              {/* Blueprint overlay grid */}
              <div className="absolute inset-0 eng-grid pointer-events-none" />

              {/* Technical callout chips */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm border rounded-xl px-4 py-2.5 shadow-md"
                style={{ borderColor: T.hair }}
              >
                <div className="text-[9px] font-semibold tracking-[0.15em] uppercase" style={{ color: T.muted }}>PCB Type</div>
                <div className="text-[13px] font-bold" style={{ color: T.dark }}>FR-4 High-TG</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm border rounded-xl px-4 py-2.5 shadow-md"
                style={{ borderColor: T.hair }}
              >
                <div className="text-[9px] font-semibold tracking-[0.15em] uppercase" style={{ color: T.muted }}>Surge Protection</div>
                <div className="text-[13px] font-bold" style={{ color: T.dark }}>Up to 6kV</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute top-1/2 left-5 -translate-y-1/2 bg-[#2563EB] text-white rounded-xl px-4 py-2.5 shadow-md"
              >
                <div className="text-[9px] font-semibold tracking-[0.15em] uppercase text-blue-200">Protocol</div>
                <div className="text-[13px] font-bold">Modbus RS485</div>
              </motion.div>
            </div>

            {/* Label below image */}
            <div className="mt-4 flex justify-between text-[10px] font-mono text-[#9CA3AF] tracking-widest uppercase px-1">
              <span>06 // Exploded Layer CAD Schema</span>
              <span>Z-PCB-H100 Rev.3</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4: INTERACTIVE PRODUCT CATALOGUE
═══════════════════════════════════════════════════════════════ */
function ProductCatalogueSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const active = PRODUCTS[activeIdx];

  // Mobile: track active card via IntersectionObserver
  const cardRefs = useRef([]);
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = parseInt(e.target.dataset.index || '0', 10);
            setActiveIdx(idx);
          }
        });
      },
      { root: carouselRef.current, threshold: 0.6 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section ref={sectionRef} style={{ background: T.bg, paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <motion.div variants={fadeUp}><div className="section-label mb-4">Product Catalogue</div></motion.div>
            <motion.h2 variants={fadeUp} className="font-bold leading-[1.05]" style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.025em', color: T.dark }}>
              Precision HVAC<br />
              <span style={{ color: T.muted, fontWeight: 300 }}>Engineering Components</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link href="/products" className="btn-ghost inline-flex whitespace-nowrap">
              View Full Catalogue
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── DESKTOP LAYOUT: Left nav + right large card ── */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">

          {/* Left: Product Selector Nav */}
          <div className="col-span-3 flex flex-col gap-1 sticky top-[100px]">
            {PRODUCTS.map((p, idx) => (
              <button
                key={p.code}
                onClick={() => setActiveIdx(idx)}
                className={`group text-left px-4 py-4 rounded-xl transition-all duration-300 border ${
                  activeIdx === idx
                    ? 'bg-[#111827] border-transparent'
                    : 'bg-transparent border-transparent hover:bg-[#F5F4EF] hover:border-[rgba(17,24,39,0.06)]'
                }`}
              >
                <div className={`text-[9px] font-semibold tracking-[0.18em] uppercase mb-1 transition-colors ${
                  activeIdx === idx ? 'text-[#C8A76E]' : 'text-[#9CA3AF]'
                }`}>
                  {p.code}
                </div>
                <div className={`text-[13px] font-medium leading-snug transition-colors ${
                  activeIdx === idx ? 'text-white' : 'text-[#111827]'
                }`}>
                  {p.name}
                </div>
                <div className={`text-[11px] font-light mt-1 transition-colors ${
                  activeIdx === idx ? 'text-[rgba(255,255,255,0.45)]' : 'text-[#9CA3AF]'
                }`}>
                  {p.category}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Product Detail Card */}
          <div className="col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-0 rounded-2xl overflow-hidden border"
                style={{ borderColor: T.hair, background: T.bg }}
              >
                {/* Image Panel (left 5) */}
                <div
                  className="col-span-5 relative flex items-center justify-center p-8"
                  style={{ background: T.bgAlt, borderRight: `1px solid ${T.hair}`, minHeight: 420 }}
                >
                  <div className="absolute inset-0 eng-grid-sm opacity-60 pointer-events-none" />
                  <img
                    src={active.img}
                    alt={active.name}
                    className="relative z-10 w-full h-full object-contain"
                    style={{ maxHeight: 320, filter: 'saturate(0.75)' }}
                  />
                  {/* Badge */}
                  <div
                    className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[9px] font-bold tracking-[0.14em] uppercase"
                    style={{ background: active.color + '18', color: active.color, border: `1px solid ${active.color}30` }}
                  >
                    {active.badge}
                  </div>
                  {/* Code */}
                  <div className="absolute bottom-5 right-5 font-mono text-[9px] tracking-[0.18em] uppercase" style={{ color: T.subtle }}>
                    {active.code}
                  </div>
                </div>

                {/* Info Panel (right 7) */}
                <div className="col-span-7 flex flex-col justify-between p-8 lg:p-10">
                  <div>
                    {/* Category */}
                    <div className="section-label mb-5" style={{ fontSize: 9 }}>{active.category}</div>

                    {/* Name */}
                    <h3
                      className="font-bold mb-4 leading-[1.1]"
                      style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.025em', color: T.dark }}
                    >
                      {active.name}
                    </h3>

                    {/* Desc */}
                    <p className="font-light leading-relaxed mb-8" style={{ fontSize: 14, color: T.muted }}>
                      {active.desc}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {active.specs.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl p-3.5 border"
                          style={{ background: T.bgAlt, borderColor: T.hair }}
                        >
                          <div className="text-[9px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: T.subtle }}>{s.label}</div>
                          <div className="font-bold text-[13px]" style={{ color: T.dark }}>{s.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Compat */}
                    <div className="text-[11px] font-light" style={{ color: T.muted }}>
                      <span className="font-semibold" style={{ color: T.dark }}>Compatible: </span>
                      {active.compat}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-8 pt-8 border-t" style={{ borderColor: T.hair }}>
                    <Link href={`/products/${active.id}`} className="btn-primary flex-1 justify-center">
                      View Details
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-ghost flex-1 justify-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination dots */}
            <div className="flex items-center gap-2 mt-6 justify-center">
              {PRODUCTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className="transition-all duration-300"
                  style={{
                    width: activeIdx === idx ? 24 : 6,
                    height: 6,
                    borderRadius: 999,
                    background: activeIdx === idx ? T.dark : T.hair,
                  }}
                  aria-label={`Select product ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* ── MOBILE LAYOUT: Horizontal Swipe Carousel ── */}
        <div className="lg:hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x-mandatory pb-4 -mx-5 px-5"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {PRODUCTS.map((p, idx) => (
              <motion.div
                key={p.code}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="snap-child flex-shrink-0 rounded-2xl border overflow-hidden"
                style={{
                  width: 'min(82vw, 340px)',
                  borderColor: activeIdx === idx ? p.color + '40' : T.hair,
                  background: T.bg,
                  boxShadow: activeIdx === idx ? `0 8px 32px ${p.color}18` : 'none',
                }}
              >
                {/* Image */}
                <div
                  className="relative flex items-center justify-center p-6"
                  style={{ background: T.bgAlt, borderBottom: `1px solid ${T.hair}`, aspectRatio: '4/3' }}
                >
                  <div className="absolute inset-0 eng-grid-sm opacity-50" />
                  <img src={p.img} alt={p.name} className="relative z-10 h-full object-contain" style={{ maxHeight: 200, filter: 'saturate(0.75)' }} />
                  <div
                    className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wide uppercase"
                    style={{ background: p.color + '18', color: p.color }}
                  >
                    {p.badge}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="text-[9px] font-semibold tracking-[0.18em] uppercase mb-1" style={{ color: T.subtle }}>{p.code}</div>
                  <h3 className="font-bold text-[15px] leading-snug mb-2" style={{ color: T.dark, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{p.name}</h3>
                  <p className="text-[12px] font-light leading-relaxed mb-4" style={{ color: T.muted }}>{p.desc}</p>

                  {/* 2x2 Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {p.specs.slice(0, 4).map((s) => (
                      <div key={s.label} className="rounded-lg p-2.5 border" style={{ background: T.bgAlt, borderColor: T.hair }}>
                        <div className="text-[8px] font-semibold tracking-wide uppercase mb-0.5" style={{ color: T.subtle }}>{s.label}</div>
                        <div className="font-bold text-[12px]" style={{ color: T.dark }}>{s.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/products/${p.id}`} className="flex-1 btn-primary text-center justify-center py-2.5 text-[11px]">
                      Details
                    </Link>
                    <Link href="/contact" className="flex-1 btn-ghost text-center justify-center py-2.5 text-[11px]">
                      Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {PRODUCTS.map((_, idx) => (
              <div
                key={idx}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: activeIdx === idx ? 20 : 5,
                  height: 5,
                  background: activeIdx === idx ? T.dark : T.hair,
                }}
              />
            ))}
          </div>
          <p className="text-center text-[10px] text-[#9CA3AF] mt-2 tracking-wide">Swipe to explore products</p>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 5: STATS / WHY CHOOSE US
═══════════════════════════════════════════════════════════════ */
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} style={{ background: T.dark, paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Stats grid */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="w-5 h-px bg-[#C8A76E]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#4B5563]">By The Numbers</span>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="border-t pt-6"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="font-extrabold leading-none mb-2"
                    style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.04em', color: i % 2 === 0 ? 'white' : T.gold }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[11px] font-medium tracking-wide uppercase" style={{ color: '#4B5563' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Editorial copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <h2
                className="font-bold leading-[1.05] mb-8"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.03em', color: 'white' }}
              >
                Why engineers<br />
                <span style={{ color: 'rgba(255,255,255,0.28)', fontWeight: 300 }}>trust Z Cool Tech.</span>
              </h2>

              <div className="flex flex-col gap-8">
                {[
                  {
                    icon: Shield,
                    title: 'OEM Authorized Partner',
                    body: 'Directly authorized by Daikin, LG, Carrier, Mitsubishi and 8+ leading OEMs. Zero counterfeit risk in your supply chain.',
                  },
                  {
                    icon: Zap,
                    title: 'Immediate Availability',
                    body: 'Extensive in-stock inventory with same-day dispatch. No waiting months for critical replacement parts.',
                  },
                  {
                    icon: Globe,
                    title: 'Pan India Delivery',
                    body: 'Vibration-insulated freight to every major industrial hub in India. Custom packaging for delicate PCBs.',
                  },
                  {
                    icon: Settings,
                    title: 'Technical Advisory',
                    body: '24/7 engineering support for compatibility verification, installation guidance, and troubleshooting.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.7 }}
                    className="flex gap-5 items-start"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <item.icon size={16} style={{ color: T.gold }} />
                    </div>
                    <div>
                      <div className="font-semibold text-[14px] text-white mb-1">{item.title}</div>
                      <div className="font-light text-[13px] leading-relaxed" style={{ color: '#4B5563' }}>{item.body}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowUpRight size={14} />
                </Link>
                <a
                  href="tel:+919920691707"
                  className="flex items-center gap-2 px-6 py-[13px] rounded-[10px] border text-white font-semibold text-[12px] tracking-wide transition-all hover:bg-white/08"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                >
                  <Phone size={14} />
                  +91 99206 91707
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 6: INDUSTRIES SERVED
═══════════════════════════════════════════════════════════════ */
function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [hover, setHover] = useState(null);

  return (
    <section ref={ref} style={{ background: T.bg, paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={stagger}
          className="mb-14"
        >
          <motion.div variants={fadeUp}><div className="section-label mb-5">Industries Served</div></motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-bold leading-[1.05]"
            style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.025em', color: T.dark, maxWidth: 600 }}
          >
            Industrial-grade thermal<br />
            <span style={{ color: T.muted, fontWeight: 300 }}>management, everywhere.</span>
          </motion.h2>
        </motion.div>

        {/* Grid of Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: T.hair }}>
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={ind.num}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              onHoverStart={() => setHover(idx)}
              onHoverEnd={() => setHover(null)}
              className="relative p-8 lg:p-10 flex flex-col justify-between transition-all duration-300"
              style={{
                background: hover === idx ? T.dark : T.bg,
                minHeight: 220,
              }}
            >
              {/* Number */}
              <div
                className="font-mono text-[11px] font-semibold tracking-[0.18em] mb-5 transition-colors duration-300"
                style={{ color: hover === idx ? T.gold : T.subtle }}
              >
                {ind.num}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-bold text-[18px] mb-3 leading-tight transition-colors duration-300"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: hover === idx ? 'white' : T.dark }}
                >
                  {ind.name}
                </h3>
                <p
                  className="text-[13px] font-light leading-relaxed transition-colors duration-300"
                  style={{ color: hover === idx ? 'rgba(255,255,255,0.55)' : T.muted }}
                >
                  {ind.desc}
                </p>
              </div>

              {/* Stat */}
              <div className="mt-6 pt-5 border-t transition-colors duration-300" style={{ borderColor: hover === idx ? 'rgba(255,255,255,0.08)' : T.hair }}>
                <span
                  className="text-[11px] font-semibold tracking-wide uppercase transition-colors duration-300"
                  style={{ color: hover === idx ? T.gold : T.muted }}
                >
                  {ind.stat}
                </span>
              </div>

              {/* Arrow */}
              <AnimatePresence>
                {hover === idx && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    className="absolute top-6 right-6"
                  >
                    <ArrowUpRight size={18} color="rgba(255,255,255,0.4)" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 7: CONTACT CTA
═══════════════════════════════════════════════════════════════ */
function ContactCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} style={{ background: T.bgAlt, paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="rounded-2xl overflow-hidden" style={{ background: T.dark }}>
          <div className="relative p-10 lg:p-16 xl:p-20">
            {/* Blueprint grid */}
            <div className="absolute inset-0 blueprint-grid opacity-100" />

            {/* Large typemark */}
            <div className="absolute -bottom-4 -right-4 select-none pointer-events-none overflow-hidden" aria-hidden>
              <span className="block font-extrabold text-white/[0.04]" style={{ fontSize: 'clamp(80px, 14vw, 220px)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.05em', lineHeight: 1 }}>
                QUOTE
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-5 h-px bg-[#C8A76E]" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#4B5563]">Get In Touch</span>
                  </div>
                  <h2
                    className="font-bold text-white leading-[1.02] mb-6"
                    style={{ fontSize: 'clamp(34px, 5vw, 68px)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.035em' }}
                  >
                    Need a PCB<br />
                    <span style={{ color: T.gold }}>Today?</span><br />
                    <span className="font-light" style={{ color: 'rgba(255,255,255,0.28)' }}>Let's Talk.</span>
                  </h2>
                  <p className="font-light leading-relaxed max-w-md" style={{ fontSize: 15, color: '#4B5563' }}>
                    Our engineering team responds within 2 hours with compatibility verification, pricing, and lead times. Same-day dispatch available for in-stock items.
                  </p>
                </motion.div>
              </div>

              {/* Contact Options */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <Link href="/contact" className="btn-primary justify-center py-4 text-[14px]">
                  Submit a Quote Request
                  <ArrowUpRight size={16} />
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919920691707"
                    className="flex items-center gap-3 p-4 rounded-xl border transition-all hover:border-white/20 hover:bg-white/06"
                    style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    <Phone size={16} className="text-[#2563EB]" />
                    <div>
                      <div className="text-[9px] font-semibold tracking-wide uppercase text-[#4B5563] mb-0.5">Call</div>
                      <div className="text-white font-semibold text-[12px]">99206 91707</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919920691707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border transition-all hover:border-[#25D366]/30 hover:bg-[#25D366]/08"
                    style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    <MessageSquare size={16} className="text-[#25D366]" />
                    <div>
                      <div className="text-[9px] font-semibold tracking-wide uppercase text-[#4B5563] mb-0.5">WhatsApp</div>
                      <div className="text-white font-semibold text-[12px]">Chat Now</div>
                    </div>
                  </a>
                </div>

                <a
                  href="mailto:zcooltech4@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl border transition-all hover:border-white/20 hover:bg-white/06"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
                >
                  <Mail size={16} className="text-[#C8A76E]" />
                  <div>
                    <div className="text-[9px] font-semibold tracking-wide uppercase text-[#4B5563] mb-0.5">Email</div>
                    <div className="text-white font-semibold text-[13px]">zcooltech4@gmail.com</div>
                  </div>
                </a>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['GST Registered', 'IndiaMART Gold Star', 'OEM Authorized', 'Pan India Shipping'].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-full text-[9px] font-semibold tracking-wide uppercase"
                      style={{ background: 'rgba(255,255,255,0.06)', color: '#4B5563', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT PAGE COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TrustedBrandsSection />
      <EngineeringPhilosophySection />
      <ProductCatalogueSection />
      <StatsSection />
      <IndustriesSection />
      <ContactCTASection />
    </div>
  );
}
