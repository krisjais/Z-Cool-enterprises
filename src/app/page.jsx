'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from '../lib/gsap';
import {
  ArrowUpRight, ArrowDown, ChevronRight, Phone, MessageSquare,
  Download, ShieldCheck, Clock, Package, Users, MapPin, Mail, Globe, FileText, CheckCircle2
} from 'lucide-react';
import Preloader from '../components/loader/Preloader';

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// PREMIUM ENGINEERING PALETTE (HEX CODES FROM CLIENT SPEC SHEET)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

// FLAGSHIP RICH STICKY STORYTELLING DATA (10 DETAILED SECTIONS)
const FLAGSHIP_PRODUCT = {
  id: 'hvac-pcb-100',
  code: 'Z-PCB-H100',
  name: 'Inverter VRF Controller Board',
  category: 'Core Components',
  compatibleBrands: 'Daikin â€¢ LG â€¢ Carrier â€¢ Mitsubishi',
  statusBadge: 'OEM Certified',
  accentColor: '#1D6FA3',
  bgSection: '#E6F1F5',
  images: [
    '/hvac_pcb_front.png',
    '/hvac_pcb_perspective.png',
    '/hvac_pcb_macro.png',
    '/hvac_pcb_installed.png',
    '/hvac_pcb_technician.png',
    '/hvac_pcb_exploded.png',
  ],
  imageLabels: [
    '01 // Front View Layout',
    '02 // 45Â° Component Perspective',
    '03 // Macro Microprocessor Close-up',
    '04 // Installed HVAC Control Cabinet',
    '05 // Active Engineering Calibration',
    '06 // Exploded Layer CAD Schema'
  ],
  cards: [
    {
      num: '01',
      title: 'System Overview',
      label: 'Core Inverter Module',
      desc: 'The master inverter controller board for high-capacity VRF systems. Engineered to coordinate active compressor frequency scaling and electronic expansion valve throttling.',
      benefits: ['Active frequency scaling', 'Soft-start logic controls', 'BMS building network ready'],
      specs: { 'Voltage': '380V - 415V AC', 'PCB Type': 'FR-4 High-TG', 'Cooling Capacity': '10-25 kW', 'Warranty': '36 Months' },
      techNotes: 'Active PID algorithms match real-time discharge temperature parameters to prevent cycling stress.'
    },
    {
      num: '02',
      title: 'Key Benefits',
      label: 'Thermodynamic Efficiencies',
      desc: 'Maintains flat system temperatures while reducing peak cycling stress, saving up to 34% power draw under severe ambient loads.',
      benefits: ['Soft-start current drop', 'Eliminates peak current spike', 'Low vibration startup loop'],
      specs: { 'Starting Amp': 'Soft-start logic', 'Power factor': '> 0.96', 'THD Level': '< 5%', 'Response Delay': '< 200ms' },
      techNotes: 'Smooth frequency throttling keeps coil temperatures constant, extending compressor lifespan.'
    },
    {
      num: '03',
      title: 'Technical Specifications',
      label: 'Engineering Parametric Specs',
      desc: 'Built with heavy-duty components designed for fluctuating voltages and extreme ambient parameters.',
      benefits: ['6-layer glass-epoxy layout', 'Conformal dust encapsulation', 'Surge defense up to 6kV'],
      specs: { 'Board Layering': '6 Layers', 'Conformal Seal': 'IP54 Class', 'Control Bus': 'Modbus RS485', 'Relay Load': '10A Resistive' },
      techNotes: '2oz copper traces optimize heat dissipation, reducing PCB local hot-spot temperatures.'
    },
    {
      num: '04',
      title: 'Compatible Brands',
      label: 'Universal Inverter Protocols',
      desc: 'Plug-and-play communication protocols matched with major OEM inverter compressors.',
      benefits: ['Auto-detects OEM protocol registers', 'Daikin VRV series compatible', 'LG Multi V integration ready'],
      specs: { 'Daikin VRV': 'Supported', 'LG Multi V': 'Supported', 'Mitsubishi City': 'Supported', 'Carrier Super X': 'Supported' },
      techNotes: 'Supports standard RTU RS485 communication protocols with standard baud rates.'
    },
    {
      num: '05',
      title: 'Request Quote',
      label: 'OEM Purchasing',
      desc: 'Submit your delivery times and bulk quantity needs for instant pricing schematics from our support desk.',
      benefits: ['Pan India express delivery', 'Authorized bulk packaging', 'Corporate accounts support'],
      specs: { 'Min Order Qty': '1 Unit', 'Lead Time': 'Immediate (In-stock)', 'Custom packaging': 'Available', 'Bulk Discounts': 'Yes, contact desk' },
      techNotes: 'Official Authorized OEM partner. ISO 9001:2015 certified assembly lines.',
      isQuoteForm: true
    }
  ]
};

const FEATURED_PRODUCTS_LIST = [
  {
    id: 'hvac-pcb-100',
    code: 'Z-PCB-H100',
    name: 'Inverter VRF Controller Board',
    desc: 'Dual-stage frequency logic controller board designed to scale compressor speeds and EEV parameters.',
    img: '/hvac_pcb_front.png',
    bg: '#E6F1F5',
    color: '#1D6FA3'
  },
  {
    id: 'chiller-w50',
    code: 'CH-W50',
    name: 'Industrial Process Liquid Chiller',
    desc: 'Continuous-loop thermodynamic chiller featuring scroll arrays and shell-and-tube condensers.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
    bg: '#E2ECE9',
    color: '#0EA6A6'
  },
  {
    id: 'panel-pex15',
    code: 'PEX-P15',
    name: 'Cabinet Panel Heat Exchanger',
    desc: 'IP55 closed-loop air exchanger configured to shield logical PLCs from dusty ambient factory loops.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
    bg: '#EAEDF1',
    color: '#1D6FA3'
  }
];

const TRUST_ITEMS = [
  'GST REGISTERED BUSINESS', 'INDIAMART GOLD STAR VERIFIED', 'OFFICIAL OEM DISTRIBUTOR',
  'PAN INDIA SECURED FREIGHT', 'OEM SPECIFICATION COMPLIANT', '24/7 TECHNICAL ADVISORY',
];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// HERO SECTION
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function HeroSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const arrowRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleX: 0, transformOrigin: 'left', duration: 1.8, ease: 'expo.inOut', delay: 0.5
      });
      gsap.to(arrowRef.current, {
        y: 8, duration: 1.5, ease: 'sine.inOut', repeat: -1, yoyo: true
      });
      gsap.to(imgRef.current, {
        yPercent: 12, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, scrub: 1.5, start: 'top top', end: 'bottom top' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] lg:min-h-[115vh] flex flex-col justify-between overflow-hidden"
      style={{
        background: `radial-gradient(circle at 10% 20%, ${C.bgHero} 0%, ${C.bgWarmWhite} 100%)`
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-25" style={{
        backgroundImage: `linear-gradient(${C.borderStrong} 1.2px, transparent 1.2px), linear-gradient(90deg, ${C.borderStrong} 1.2px, transparent 1.2px)`,
        backgroundSize: '90px 90px'
      }} />

      <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-16 lg:px-24 grid grid-cols-12 gap-10 items-center flex-grow pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center z-10 pr-0 lg:pr-8 min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 mb-8"
          >
            <div className="w-6 h-[2px] rounded-full" style={{ background: C.gold }} />
            <span style={{ color: C.slate, fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
              Authorized HVAC Electronics Partner
            </span>
          </motion.div>

          <div className="overflow-hidden mb-1">
            <motion.h1
              style={{ fontSize: 'clamp(54px, 8vw, 110px)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, lineHeight: 0.98, color: C.navy, letterSpacing: '-0.025em', margin: 0 }}
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              ENGINEERED
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              style={{ fontSize: 'clamp(54px, 8vw, 110px)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, lineHeight: 0.98, color: C.blue, letterSpacing: '-0.025em', margin: 0 }}
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              COLD.
            </motion.h1>
          </div>

          <div ref={lineRef} style={{ width: '100%', height: 1.5, background: C.borderStrong, marginBottom: 36 }} />

          <motion.p
            style={{ fontSize: 18, lineHeight: 1.8, color: C.slate, maxWidth: 500, marginBottom: 44, fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Sourcing precision air handling, process fluid chillers, and sealed panel coolers for heavy industrial applications. 20+ years of thermal engineering trust.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 sm:gap-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/products"
              className="group flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-[16px] text-white font-medium hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-center"
              style={{ background: C.blue, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', boxShadow: `0 8px 30px rgba(29,111,163,0.3)` }}
            >
              Explore Products
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-[16px] font-medium border hover:bg-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-center"
              style={{ color: C.navy, borderColor: C.borderStrong, background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              Get Instant Quote
            </Link>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-5 hidden lg:flex justify-center relative pl-8">
          <div className="absolute inset-0 bg-[#0F2B46]/5 rounded-[32px] blur-2xl -translate-y-4 translate-x-4 scale-95 pointer-events-none" />
          <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-white border border-[#0F2B46]/10 shadow-2xl">
            <div ref={imgRef} className="absolute inset-0 w-full h-full scale-[1.08]">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop"
                alt="Precision industrial climate control equipment"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.5) contrast(1.1) brightness(0.92)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121C26]/80 backdrop-blur-md border border-white/10">
              <ShieldCheck size={14} className="text-[#0EA6A6]" />
              <span className="font-mono text-[9px] tracking-widest uppercase text-white/95 font-bold">SYSTEM CERTIFIED</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-16 lg:px-24 z-10 mt-6 mb-2">
        <div className="bg-white/80 border border-[#0F2B46]/5 shadow-lg rounded-[20px] p-5 sm:p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 backdrop-blur-md">
          {[
            { Icon: Clock, num: '20+', label: 'Years Experience', sub: 'Proven thermal engineering' },
            { Icon: Package, num: '500+', label: 'Products Offered', sub: 'In-stock commercial supply' },
            { Icon: Users, num: '1000+', label: 'Satisfied Clients', sub: 'Pan India industrial network' },
            { Icon: MapPin, num: 'Pan India', label: 'Delivery network', sub: 'Vibration insulated transport' }
          ].map((item, idx) => (
            <div key={item.label} className={`flex items-start gap-4 ${idx > 0 ? 'lg:border-l lg:border-[#0F2B46]/10 lg:pl-8' : ''}`}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${C.blue}0F`, border: `1px solid ${C.blue}20` }}>
                <item.Icon className="w-5 h-5" style={{ color: C.blue }} />
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy, lineHeight: 1.1 }}>{item.num}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.navy, marginTop: 4, fontFamily: 'Inter, sans-serif' }}>{item.label}</div>
                <div style={{ fontSize: 11, color: C.slate, marginTop: 2, fontFamily: 'Inter, sans-serif' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={arrowRef} className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 pointer-events-none">
        <ArrowDown size={14} style={{ color: C.slate }} />
      </div>
    </section>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TRUST MARQUEE RIBBON
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function TrustRibbon() {
  const doubled = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <div style={{ background: C.card, borderTop: `1px solid ${C.borderLight}`, borderBottom: `1px solid ${C.borderLight}`, paddingTop: 20, paddingBottom: 20, overflow: 'hidden' }}>
      <div className="flex gap-14 whitespace-nowrap animate-[marquee_35s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: C.slate }}>
            <span className="w-2 h-2 rounded-full" style={{ background: C.teal }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// 2-3 FEATURED PRODUCTS CATALOG OVERVIEW
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function FeaturedProductsOverview() {
  return (
    <section className="py-24" style={{ background: C.bgHero, borderBottom: `1px solid ${C.borderLight}` }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-14">
          <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">SOLUTIONS PORTFOLIO</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-2 text-[#0F2B46]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Featured Climate Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS_LIST.map(p => (
            <div
              key={p.id}
              className="group bg-white rounded-3xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              style={{ borderColor: C.borderLight }}
            >
              <div>
                <div className="p-6 bg-slate-50/50 flex items-center justify-center aspect-[4/3] border-b" style={{ borderColor: C.borderLight }}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <span className="font-mono text-[9px] tracking-widest uppercase font-bold block mb-1" style={{ color: p.color }}>
                    CODE: {p.code}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F2B46] mb-3 leading-snug">{p.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href={`/products/${p.id}`}
                  className="w-full py-3.5 bg-slate-100 hover:bg-[#1D6FA3] hover:text-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center block"
                >
                  View Solution details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// APPLE-STYLE SINGLE STICKY SHOWCASE
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function StickyProductShowcase({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // IntersectionObserver for mobile cards scroll tracking
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop Pin scroll trigger
  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    if (!container || !cardsWrapper) return;

    const ctx = gsap.context(() => {
      const scrollDistance = cardsWrapper.scrollHeight - window.innerHeight;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${cardsWrapper.scrollHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * product.cards.length),
              product.cards.length - 1
            );
            setActiveIndex(index);
          }
        }
      });

      tl.to(cardsWrapper, {
        y: -scrollDistance,
        ease: 'none'
      });
    }, container);

    return () => ctx.revert();
  }, [isDesktop, product.cards.length]);

  // Mobile Intersection Observer for active card tracking
  useEffect(() => {
    if (isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px', // Center active line detection
        threshold: 0.1
      }
    );

    mobileCardsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isDesktop]);

  // Map 5 cards to 5 unique images
  const getImageIndex = (cardIdx) => {
    const map = [0, 1, 2, 3, 5];
    return map[cardIdx] !== undefined ? map[cardIdx] : 0;
  };

  const activeImage = getImageIndex(activeIndex);

  return (
    <div
      ref={containerRef}
      className="relative w-full border-t border-b"
      style={{ background: product.bgSection, borderColor: C.borderLight }}
    >
      
      {/* DESKTOP VIEW */}
      {isDesktop ? (
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-12 gap-12 h-screen items-center overflow-hidden relative">
          
          {/* LEFT SIDE (45%): Sticky Header, Image Frame, Captions */}
          <div className="col-span-5 h-[85vh] flex flex-col justify-between z-10 py-6">
            
            {/* 1. PREMIUM PRODUCT HEADER (Visible during scroll) */}
            <div className="border-b pb-5" style={{ borderColor: C.borderStrong }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#1D6FA3] bg-[#1D6FA3]/10 px-2.5 py-0.5 rounded-full font-bold">
                  {product.category}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-bold">
                  {product.statusBadge}
                </span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2B46] mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {product.name}
              </h2>
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
                <span>CODE: {product.code}</span>
                <span className="text-[#0EA6A6]">{product.compatibleBrands}</span>
              </div>
            </div>

            {/* Sticky Image Showcase */}
            <div className="relative w-full aspect-[4/3] rounded-[24px] bg-white border border-[#0F2B46]/5 shadow-lg flex items-center justify-center p-8 overflow-hidden my-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.04, y: 10 }}
                  animate={{ opacity: 1, scale: 1.0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={product.images[activeImage]}
                    alt={`${product.name} view`}
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(1.02) saturate(0.8)' }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Captions and Indexes */}
            <div className="flex justify-between items-center text-xs font-mono text-slate-500 border-t pt-4" style={{ borderColor: C.borderStrong }}>
              <span className="uppercase tracking-widest">
                {product.imageLabels[activeImage]}
              </span>
              <span className="font-bold text-slate-700">
                View 0{activeImage + 1} / 06
              </span>
            </div>

          </div>

          {/* RIGHT SIDE (55%): Fixed Timeline HUD & Dense Cards Panel */}
          <div className="col-span-7 h-full flex items-center relative pl-8 overflow-hidden">
            
            {/* 4. PROGRESS TIMELINE (Fixed HUD indicator) */}
            <div className="relative flex flex-col items-center justify-between h-[65vh] mr-12 w-8 flex-shrink-0 z-10">
              
              {/* Connecting progress line */}
              <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 z-0">
                <div
                  className="w-full bg-[#1D6FA3] transition-all duration-300"
                  style={{ height: `${(activeIndex / (product.cards.length - 1)) * 100}%` }}
                />
              </div>

              {product.cards.map((card, idx) => {
                const isActive = activeIndex === idx;
                const isFinished = idx < activeIndex;
                
                return (
                  <button
                    key={card.num}
                    onClick={() => {
                      // Allow clicking timeline elements to trigger dynamic smooth scroll on desktop
                      const wrapper = cardsWrapperRef.current;
                      if (wrapper) {
                        const targetScroll = (wrapper.scrollHeight / product.cards.length) * idx;
                        gsap.to(window, { scrollTo: { y: containerRef.current.offsetTop + targetScroll }, duration: 0.8 });
                      }
                    }}
                    className={`w-8 h-8 rounded-full border-2 font-mono text-[10px] font-bold flex items-center justify-center transition-all duration-500 z-10 ${
                      isActive
                        ? 'bg-[#1D6FA3] border-[#1D6FA3] text-white shadow-[0_0_15px_rgba(29,111,163,0.5)] scale-110'
                        : isFinished
                        ? 'bg-[#1D6FA3] border-[#1D6FA3] text-white'
                        : 'bg-white border-slate-200 text-slate-400'
                    }`}
                  >
                    {card.num}
                  </button>
                );
              })}
            </div>

            {/* Cards Wrapper (Dense Specs Layout) */}
            <div className="flex-grow h-screen overflow-hidden flex items-start relative">
              <div
                ref={cardsWrapperRef}
                className="w-full flex flex-col gap-12 py-[40vh]"
              >
                {product.cards.map((card, idx) => {
                  const isActive = activeIndex === idx;
                  
                  return (
                    <div
                      key={card.num}
                      className="rounded-[28px] bg-white border transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
                      style={{
                        borderColor: isActive ? product.accentColor : C.borderLight,
                        boxShadow: isActive ? '0 30px 80px rgba(15,43,70,0.14)' : '0 4px 15px rgba(0,0,0,0.01)',
                        // ACTIVE 100%, INACTIVE 70% WITH SLIGHT BLUR TRANSITION
                        opacity: isActive ? 1.0 : 0.70,
                        transform: isActive ? 'scale(1.03)' : 'scale(0.97)',
                        filter: isActive ? 'none' : 'blur(0.6px)'
                      }}
                    >
                      
                      {/* Active Blue left indicator */}
                      {isActive && (
                        <div
                          className="absolute left-0 top-0 h-full w-[4px]"
                          style={{ background: product.accentColor }}
                        />
                      )}

                      {/* Header block inside card */}
                      <div className="p-8 pb-5 border-b" style={{ borderColor: C.borderLight }}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-bold text-slate-400">SECTION {card.num}</span>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-[#0EA6A6] font-bold bg-[#0EA6A6]/5 px-2 py-0.5 rounded">{card.label}</span>
                        </div>
                        <h3 className="text-xl font-bold" style={{ color: C.navy }}>
                          {card.title}
                        </h3>
                      </div>

                      {/* Core DENSE specifications list */}
                      <div className="p-8 flex flex-col gap-5 bg-slate-50/30">
                        {/* 1. Description */}
                        <div>
                          <p className="text-xs text-slate-600 leading-relaxed font-light">{card.desc}</p>
                        </div>

                        {/* 2. Key Benefits */}
                        {card.benefits && (
                          <div className="border-t pt-4" style={{ borderColor: C.borderLight }}>
                            <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2 font-bold">Key Benefits</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {card.benefits.map(b => (
                                <span key={b} className="flex items-center gap-1.5 text-[10px] text-slate-700 font-mono">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                                  {b}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 3. Quick Specs Grid */}
                        {card.specs && (
                          <div className="border-t pt-4" style={{ borderColor: C.borderLight }}>
                            <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2.5 font-bold">Quick Specs Parameters</div>
                            <div className="grid grid-cols-2 gap-3">
                              {Object.entries(card.specs).map(([key, val]) => (
                                <div key={key} className="bg-white border rounded-lg p-2 flex flex-col" style={{ borderColor: C.borderStrong }}>
                                  <span className="text-[7px] uppercase font-mono text-slate-400">{key}</span>
                                  <span className="text-[10px] font-bold text-[#0F2B46] truncate mt-0.5">{val}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Technical Notes Footer */}
                      <div className="p-8 pt-5 border-t bg-slate-50/60" style={{ borderColor: C.borderLight }}>
                        <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-1 font-bold">Technical Engineering Notes</div>
                        <p className="text-[10px] font-mono text-slate-500 leading-relaxed font-light">
                          {card.techNotes}
                        </p>

                        {card.isDownloads && (
                          <div className="flex gap-3.5 mt-5">
                            <Link href="#" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 border rounded-xl text-[10px] font-mono uppercase font-bold text-slate-700 bg-white hover:bg-slate-50" style={{ borderColor: C.borderStrong }}>
                              <Download size={12} /> Dimensions DWG
                            </Link>
                            <Link href="#" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 border rounded-xl text-[10px] font-mono uppercase font-bold text-slate-700 bg-white hover:bg-slate-50" style={{ borderColor: C.borderStrong }}>
                              <Download size={12} /> Registers PDF
                            </Link>
                          </div>
                        )}

                        {card.isQuoteForm && (
                          <div className="mt-5">
                            <Link href="/contact" className="w-full flex items-center justify-center gap-1.5 py-4 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-600">
                              Dispatch Procurement Request <ArrowUpRight size={13} />
                            </Link>
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* 7. MOBILE EXPERIENCE LAYOUT (NO DESKTOP REUSE) */
        <div className="flex flex-col relative min-h-screen">
          
          {/* Top Sticky Pinned Image & Header Block */}
          <div className="sticky top-[80px] z-30 w-full bg-white border-b flex flex-col justify-between p-5 shadow-sm" style={{ height: '32vh' }}>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[8px] tracking-widest uppercase font-bold text-[#1D6FA3]">
                  {product.code} â€¢ {product.category}
                </span>
                <h3 className="text-lg font-bold text-[#0F2B46] mt-0.5 leading-snug">{product.name}</h3>
              </div>
              <span className="font-mono text-[8px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded font-bold uppercase">
                {product.statusBadge}
              </span>
            </div>

            {/* Contained image preview */}
            <div className="flex-grow flex items-center justify-center max-h-[16vh] my-1">
              <img
                src={product.images[activeImage]}
                alt="HVAC product view"
                className="h-full object-contain max-h-[15vh]"
              />
            </div>

            <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 border-t pt-2" style={{ borderColor: C.borderLight }}>
              <span>{product.imageLabels[activeImage]}</span>
              <span className="font-bold text-[#1D6FA3]">View 0{activeImage + 1} / 06</span>
            </div>
          </div>

          {/* Middle scrollable stacked cards panel */}
          <div className="px-5 py-8 flex flex-col gap-6">
            {product.cards.map((card, idx) => {
              const isActive = activeIndex === idx;
              
              return (
                <div
                  key={card.num}
                  data-index={idx}
                  ref={el => mobileCardsRef.current[idx] = el}
                  className="p-6 rounded-2xl bg-white border transition-all duration-300 scroll-mt-[35vh]"
                  style={{
                    borderColor: isActive ? product.accentColor : C.borderLight,
                    boxShadow: isActive ? '0 15px 35px rgba(15,43,70,0.08)' : 'none',
                    opacity: isActive ? 1.0 : 0.70
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] text-[#0EA6A6] font-bold uppercase">{card.label}</span>
                    <span className="font-mono text-xs text-slate-400">0{card.num}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#0F2B46] mb-2">{card.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">{card.desc}</p>

                  {card.benefits && (
                    <div className="border-t pt-3 mt-3" style={{ borderColor: C.borderLight }}>
                      <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2 font-bold">Benefits</div>
                      <div className="flex flex-col gap-1.5">
                        {card.benefits.map(b => (
                          <span key={b} className="flex items-center gap-1.5 text-[9px] text-slate-600 font-mono">
                            <span className="w-1 h-1 rounded-full bg-[#0EA6A6]" />
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {card.specs && (
                    <div className="border-t pt-3 mt-3" style={{ borderColor: C.borderLight }}>
                      <div className="text-[8px] uppercase tracking-widest font-mono text-slate-400 mb-2 font-bold">Specs</div>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(card.specs).map(([key, val]) => (
                          <div key={key} className="bg-slate-50 border rounded-lg p-2 flex flex-col" style={{ borderColor: C.borderStrong }}>
                            <span className="text-[6px] uppercase font-mono text-slate-400">{key}</span>
                            <span className="text-[9px] font-bold text-[#0F2B46] truncate">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {card.isDownloads && (
                    <div className="flex gap-2 mt-4 pt-3 border-t" style={{ borderColor: C.borderLight }}>
                      <Link href="#" className="flex-1 text-center py-2.5 border rounded-lg text-[9px] font-mono uppercase text-slate-700 bg-slate-50">
                        DWG CAD
                      </Link>
                      <Link href="#" className="flex-1 text-center py-2.5 border rounded-lg text-[9px] font-mono uppercase text-slate-700 bg-slate-50">
                        Manual
                      </Link>
                    </div>
                  )}

                  {card.isQuoteForm && (
                    <div className="mt-4 pt-3 border-t" style={{ borderColor: C.borderLight }}>
                      <Link href="/contact" className="w-full text-center py-3 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-lg block">
                        Get Quote Pricing
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Pinned Mobile Dot Progress indicator */}
          <div className="sticky bottom-0 left-0 w-full z-[9990] bg-[#0F2B46] text-white p-3.5 flex justify-between items-center px-6 border-t border-white/10 shadow-lg">
            <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-bold">Story progress</span>
            <div className="flex gap-1.5">
              {product.cards.map((c, i) => (
                <div
                  key={c.num}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background: activeIndex === i ? '#1D6FA3' : i < activeIndex ? '#0EA6A6' : 'rgba(255,255,255,0.15)',
                    transform: activeIndex === i ? 'scale(1.3)' : 'scale(1.0)'
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[9px] font-bold">0{activeIndex + 1} / 05</span>
          </div>

        </div>
      )}

    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// SPECIAL FEATURED PRODUCT: Exploded Video Transition Layer
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function FeaturedProductSection() {
  const [activeLayer, setActiveLayer] = useState(0);
  const sectionRef = useRef(null);

  const layers = [
    { name: '01 // Conformal Coating Layer', desc: 'Dual-layer polyurethane sealant sprayed under clean room isolation shields. Stops moisture condensation, heavy dust collection, and chemical vapors from corroding microchip traces.' },
    { name: '02 // 32-Bit ARM MCU Core', desc: 'The digital processing engine executing active PID cooling loop calculations at 200 cycles per second. Integrates directly with EEV throttling valves.' },
    { name: '03 // High-TG Multi-Layer Board', desc: '6-layer FR-4 glass-epoxy board configured with 2oz copper traces. Prevents physical board warping under sustained 85Â°C operating parameters.' }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 border-t text-white" style={{ background: C.bgDarkNavy }}>
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-20 text-center">
          <span className="font-mono text-xs text-[#0EA6A6] tracking-widest uppercase font-bold">SPECIAL ENGINEERING FEATURE</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">Core PCB Exploded Technical View</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Inspect the advanced electronic layers of the Z-PCB-H100 controller board engineered for severe HVAC thermal conditions.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            {layers.map((layer, idx) => (
              <div
                key={layer.name}
                onClick={() => setActiveLayer(idx)}
                className="p-6 rounded-2xl border cursor-pointer transition-all duration-300"
                style={{
                  background: activeLayer === idx ? 'rgba(255,255,255,0.06)' : 'transparent',
                  borderColor: activeLayer === idx ? C.teal : 'rgba(255,255,255,0.08)'
                }}
              >
                <h4 className="font-mono text-xs font-bold text-white mb-2">{layer.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{layer.desc}</p>
              </div>
            ))}

            <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
              <Link
                href="/contact"
                className="flex items-center gap-1.5 px-6 py-3.5 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-700"
              >
                Inquire Specs <ArrowUpRight size={13} />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1.5 px-6 py-3.5 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white/5"
              >
                <Download size={13} /> Schematic PDF
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 flex justify-center relative">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <video
                src="/Create_a_highly_realistic_D_t.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 font-mono text-[10px] text-slate-400">
                ACTIVE LAYER SELECTED: {layers[activeLayer].name}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// INDUSTRIES GALLERY (Horizontal scroll)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function ApplicationsGallery() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const panels = [
    { title: 'Data Centers', sub: '99.999% uptime server load', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop', accent: C.blue },
    { title: 'Healthcare Units', sub: 'Clean room hospital specs', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop', accent: C.teal },
    { title: 'Pharmaceutical', sub: 'Zero-humidity storage path', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop', accent: C.blue },
    { title: 'Automation Plants', sub: 'High cabinet heat dissipation', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop', accent: C.teal },
    { title: 'Food & Beverage', sub: 'Cold chain warehouse cooling', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop', accent: C.blue },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - container.offsetWidth;
      gsap.to(track, {
        x: -totalWidth, ease: 'none',
        scrollTrigger: {
          trigger: container, start: 'top top',
          end: () => `+=${totalWidth}`, pin: true, scrub: 1.2,
          anticipatePin: 1, invalidateOnRefresh: true,
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: C.bgDarkNavy }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-32 pb-14">
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.teal, marginBottom: 14, fontWeight: 700 }}>
          Where Our Systems Operate
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500, color: '#F1F6FA', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Industries We Serve
        </h2>
      </div>

      <div ref={containerRef} className="hidden lg:block" style={{ height: '100vh', overflow: 'hidden' }}>
        <div ref={trackRef} className="flex items-center h-full px-8 md:px-16 lg:px-24 pb-20 gap-8" style={{ width: 'max-content' }}>
          {panels.map((panel, i) => (
            <div key={i} className="relative flex-shrink-0 overflow-hidden group" style={{ width: '35vw', minWidth: 320, height: '62vh', borderRadius: 24 }}>
              <img src={panel.img} alt={panel.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.85) saturate(0.5)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,43,70,0.9) 30%, transparent 70%)' }} />
              <div className="absolute bottom-8 left-8 pr-6">
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: panel.accent, marginBottom: 10, fontWeight: 800 }}>
                  SECTOR APPLICATION 0{i + 1}
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: '#FFFFFF', marginBottom: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.01em' }}>
                  {panel.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{panel.sub}</p>
              </div>
              <div className="absolute inset-0 rounded-[24px] border border-white/5 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile grid fallback for Industries section */}
      <div className="lg:hidden px-5 sm:px-8 pb-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {panels.map((panel, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl" style={{ height: 220 }}>
            <img src={panel.img} alt={panel.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.85) saturate(0.5)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,43,70,0.9) 30%, transparent 70%)' }} />
            <div className="absolute bottom-5 left-5 pr-4">
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: panel.accent, marginBottom: 6, fontWeight: 800 }}>SECTOR 0{i + 1}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#FFFFFF', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{panel.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{panel.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// CASE STUDIES PREVIEW
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function CaseStudies() {
  const cases = [
    {
      metric: '35%', label: 'Average Energy Savings',
      title: 'Automated Logistics Hub Conveyor Cooling',
      desc: '12 PEX-P15 cabinet exchangers deployed across automation control enclosures at Chennai logistics port, eliminating summer panel shutdowns and saving 35% energy.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
      accent: C.blue,
    },
    {
      metric: '99.8%', label: 'System Uptime Maintained',
      title: 'Mission Critical General ICU Climate Stability',
      desc: 'CCU-X10 close control air handling systems installed in Mumbai diagnostic and ward wards. Maintained precise Â±0.5Â°C control with 99.8% server room uptime.',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
      accent: C.teal,
    },
  ];

  return (
    <section style={{ background: C.bgSage, borderTop: `1px solid ${C.borderLight}`, padding: '128px 0' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-20">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.teal, marginBottom: 12, fontWeight: 700 }}>
            Proven Field Operations
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500, color: C.navy, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Thermal Performance Outcomes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-[24px] border bg-white"
              style={{ borderColor: C.borderLight, boxShadow: '0 8px 30px rgba(15,43,70,0.03)', transition: 'all 0.5s ease' }}
            >
              <div className="relative overflow-hidden" style={{ height: 240 }}>
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.9) saturate(0.6)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,43,70,0.4) 0%, transparent 60%)' }} />
                <div className="absolute top-6 left-6" style={{ padding: '6px 14px', borderRadius: 100, background: 'rgba(18,28,38,0.85)', backdropFilter: 'blur(8px)', fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFFFFF', fontWeight: 700 }}>
                  FIELD STUDY 0{i + 1}
                </div>
              </div>
              <div style={{ padding: 40 }}>
                <div className="flex items-baseline gap-3 mb-4">
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 44, fontWeight: 800, color: c.accent, letterSpacing: '-0.02em', lineHeight: 1 }}>{c.metric}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.slate, fontWeight: 700 }}>{c.label}</span>
                </div>
                <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 19, fontWeight: 700, color: C.navy, marginBottom: 14, letterSpacing: '-0.01em' }}>
                  {c.title}
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7, color: C.slate }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// FOOTER CTA SECTION
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function CTASection() {
  const ref = useRef(null);

  return (
    <section id="quote" style={{ background: C.navy, position: 'relative', overflow: 'hidden', padding: '128px 0' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1.5, background: `linear-gradient(to right, transparent 0%, ${C.gold} 40%, ${C.teal} 70%, transparent 100%)` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(700px, 100%)', height: 'min(450px, 60vw)', background: `radial-gradient(ellipse, ${C.blue}15 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div ref={ref} className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center relative z-10">
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.teal, marginBottom: 20, fontWeight: 700 }}>
          Ready to Optimize Your Climate Systems?
        </div>
        
        <h2 style={{ fontSize: 'clamp(32px, 5.5vw, 60px)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500, color: '#F1F6FA', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 28 }}>
          Talk to our experts today and get
          <br />
          <span style={{ color: C.gold, fontWeight: 300 }}>the right solution for your needs.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mt-12 mb-16">
          <a
            href="https://wa.me/919920691707"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-[22px] border text-left hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#0F3C2C', borderColor: '#10B98133' }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
              <MessageSquare size={26} className="text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-wide">WhatsApp</div>
              <div className="text-[#10B981] font-mono text-xs uppercase tracking-widest mt-1">Chat Now with Engineer</div>
            </div>
            <ArrowUpRight size={20} className="ml-auto text-white/50" />
          </a>

          <a
            href="tel:+919920691707"
            className="flex items-center gap-5 p-6 rounded-[22px] border text-left hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#0F2C43', borderColor: `${C.blue}40` }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: C.blue }}>
              <Phone size={24} className="text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-wide">Call Now</div>
              <div className="text-[#60a5fa] font-mono text-xs mt-1">+91 99206 91707</div>
            </div>
            <ArrowUpRight size={20} className="ml-auto text-white/50" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { Icon: Mail, text: 'zcooltech4@gmail.com' },
            { Icon: MapPin, text: 'Pan India Delivery' },
            { Icon: FileText, text: 'Get Instant Quote' }
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
              <item.Icon size={13} style={{ color: C.teal }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(200,225,245,0.7)', letterSpacing: '0.04em' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// MOBILE PREMIUM STICKY BOTTOM ACTION CTA
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function MobileStickyNav() {
  return (
    <div
      className="md:hidden fixed bottom-6 right-5 z-[9998] flex flex-col gap-3 items-center"
    >
      {/* WhatsApp circle */}
      <a
        href="https://wa.me/919920691707"
        target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl active:scale-95 transition-transform"
        style={{ background: '#128C7E', boxShadow: '0 6px 20px rgba(18,140,126,0.45)' }}
        aria-label="WhatsApp"
      >
        <MessageSquare size={22} />
      </a>

      {/* Call circle */}
      <a
        href="tel:+919920691707"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl active:scale-95 transition-transform"
        style={{ background: C.blue, boxShadow: `0 6px 20px ${C.blue}60` }}
        aria-label="Call Now"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// MASTER PAGE ROOT
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
export default function HomePage() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      <main className="w-full overflow-x-hidden pb-[110px] md:pb-0">
        <HeroSection />
        <TrustRibbon />
        
        {/* 2-3 Featured Products Overview Section */}
        <FeaturedProductsOverview />

        {/* Apple-style flagship sticky product storytelling */}
        <div id="products">
          <StickyProductShowcase product={FLAGSHIP_PRODUCT} />
          
          {/* Company Exploded View Video directly following Sticky Product */}
          <FeaturedProductSection />
        </div>

        <ApplicationsGallery />
        <CaseStudies />
        <CTASection />
        <MobileStickyNav />
      </main>
    </>
  );
}

