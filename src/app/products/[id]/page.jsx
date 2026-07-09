'use client';

import React, { use, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from '@/lib/gsap';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Download, FileText,
  CheckCircle2, ShieldCheck, Clock, Settings, User, Building, Send,
  ChevronRight, Home, Phone, MessageSquare, Mail, Play, Maximize2, Shield, Eye, Search, HelpCircle, HardDrive
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';

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
  gold:          '#B8955A',
  slate:         '#6E7C93',
  borderLight:   'rgba(15,43,70,0.06)',
  borderStrong:  'rgba(15,43,70,0.12)',
};

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  
  // Find product from centralized database
  const product = PRODUCTS_CATALOG.find(p => p.id === productId) || PRODUCTS_CATALOG[0];

  const [isDesktop, setIsDesktop] = useState(true);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  // Section 4 Gallery selection
  const [sec4ActiveIndex, setSec4ActiveIndex] = useState(0);

  // Specs Tab state
  const [activeSpecTab, setActiveSpecTab] = useState('electrical');
  const [expandedSpecRows, setExpandedSpecRows] = useState({});

  // Interactive Explorer state
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Searchable FAQ state
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Quote Form Modal state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Refs for GSAP scroll pinning & timelines
  const containerRef = useRef(null);
  const rightWrapperRef = useRef(null);
  const relatedSliderRef = useRef(null);
  const mobileCardsRef = useRef([]);
  const installationTimelineRef = useRef(null);

  const galleryLabels = [
    'Front View',
    '45° Perspective',
    'Back View',
    'Macro Close-up',
    'Installed View',
    'Warehouse Inventory',
    'Technician Inspection',
    'Exploded Diagram',
    'Packaging & Shipping'
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop Pin scroll trigger (Section 2)
  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    const rightWrapper = rightWrapperRef.current;
    if (!container || !rightWrapper) return;

    const ctx = gsap.context(() => {
      const scrollDistance = rightWrapper.scrollHeight - window.innerHeight;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${rightWrapper.scrollHeight - window.innerHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * product.storytelling.length),
              product.storytelling.length - 1
            );
            setActiveSectionIndex(index);
          }
        }
      });

      tl.to(rightWrapper, {
        y: -scrollDistance,
        ease: 'none'
      });
    }, container);

    return () => ctx.revert();
  }, [isDesktop, product.storytelling.length]);

  // Mobile Intersection Observer for active card tracking
  useEffect(() => {
    if (isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveSectionIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0.1
      }
    );

    mobileCardsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isDesktop, product.storytelling.length]);

  // Related Products Slider Animation
  useEffect(() => {
    const slider = relatedSliderRef.current;
    if (!slider) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(slider.children, 
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: slider,
            start: 'top 85%'
          }
        }
      );
    }, slider);

    return () => ctx.revert();
  }, []);

  // Installation Timeline Steps animation
  useEffect(() => {
    const timeline = installationTimelineRef.current;
    if (!timeline) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(timeline.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timeline,
            start: 'top 80%'
          }
        }
      );
    }, timeline);

    return () => ctx.revert();
  }, []);

  // 360-degree rotational drag gallery logic (Hero and Section 4)
  const handleGalleryMouseDown = (e) => {
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleGalleryMouseMove = (e, isSec4 = false) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    if (Math.abs(deltaX) > 20) {
      const step = deltaX > 0 ? -1 : 1;
      if (isSec4) {
        const nextIndex = (sec4ActiveIndex + step + product.images.length) % product.images.length;
        setSec4ActiveIndex(nextIndex);
      } else {
        const nextIndex = (activeImageIndex + step + product.images.length) % product.images.length;
        setActiveImageIndex(nextIndex);
      }
      setDragStartX(e.clientX);
    }
  };

  const handleGalleryMouseUp = () => {
    setIsDragging(false);
  };

  // Zoom-on-hover calculations
  const handleMouseMoveZoom = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
    setZoomScale(1.8);
  };

  const handleMouseLeaveZoom = () => {
    setZoomScale(1);
  };

  // Map 12 storytelling chapters to 8 unique product images
  const getImageIndex = (sectionIdx) => {
    const map = [0, 1, 2, 3, 4, 3, 4, 1, 6, 7, 5, 0];
    return map[sectionIdx] !== undefined ? map[sectionIdx] : 0;
  };

  const activeImage = getImageIndex(activeSectionIndex);

  // Toggle spec row expand details
  const toggleSpecRow = (key) => {
    setExpandedSpecRows(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter FAQs based on search string
  const filteredFaqs = useMemo(() => {
    if (!faqSearch) return product.faqs;
    const q = faqSearch.toLowerCase();
    return product.faqs.filter(faq => 
      faq.q.toLowerCase().includes(q) || 
      faq.a.toLowerCase().includes(q)
    );
  }, [faqSearch, product.faqs]);

  return (
    <div className="w-full overflow-x-hidden min-h-screen relative font-sans" style={{ background: C.bgHero }}>
      
      {/* Subtle Engineering grid lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] engineering-grid" />

      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-8 pb-4 flex items-center justify-between font-mono text-[10px] text-slate-400 tracking-wider border-b" style={{ borderColor: C.borderLight }}>
        <div className="flex items-center gap-2">
          <Link href="/products" className="hover:text-[#1D6FA3] flex items-center gap-1">
            <ArrowLeft size={10} /> CATALOG
          </Link>
          <ChevronRight size={10} />
          <span className="text-[#0F2B46] font-bold">{product.code}</span>
        </div>
        <span className="text-slate-400 font-bold uppercase hidden sm:inline">Z-COOL INDUSTRIAL PARAMETRIC SYSTEM</span>
      </div>

      {/* ── SECTION 1: PREMIUM HERO ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Hero Details (Left 5 Columns) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-full text-left">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#1D6FA3] bg-[#1D6FA3]/10 px-2.5 py-0.5 rounded-full font-bold">
                  {product.category}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-bold">
                  {product.statusBadge}
                </span>
                <span className="font-mono text-[9px] text-slate-400 uppercase">
                  {product.availability}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0F2B46] leading-[1.1] mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {product.name}
              </h1>
              
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2 mb-4">
                <span>CODE: {product.code}</span>
                <span>WARRANTY: {product.warranty}</span>
              </div>
              
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                {product.tagline} — Designed and certified to meet high-performance specifications under severe operating parameters.
              </p>
            </div>

            {/* Quick action controls panel */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6" style={{ borderColor: C.borderLight }}>
              <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest block mb-4 font-bold">QUICK ACTION PROTOCOLS</span>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-[#0F2B46] text-[10px] font-mono uppercase font-bold rounded-xl transition-all"
                >
                  <Phone size={12} /> Call Desk
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[10px] font-mono uppercase font-bold rounded-xl transition-all"
                >
                  <MessageSquare size={12} /> WhatsApp
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="flex items-center justify-center gap-2 py-3.5 bg-[#1D6FA3] hover:bg-blue-600 text-white text-[10px] font-mono uppercase font-bold rounded-xl transition-all shadow-md"
                >
                  <Mail size={12} /> Request Quote
                </button>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 py-3.5 border border-slate-200 hover:border-[#1D6FA3] text-[#0F2B46] text-[10px] font-mono uppercase font-bold rounded-xl transition-all bg-white"
                >
                  <Download size={12} /> Datasheet PDF
                </a>
              </div>
            </div>

            {/* Compatible OEM brands inline summary */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-slate-400 uppercase">Coupling compatibility:</span>
              <div className="flex flex-wrap gap-1.5">
                {product.compatibility.slice(0, 4).map(b => (
                  <span key={b} className="text-[9px] font-mono font-bold bg-[#0F2B46]/5 text-[#0F2B46] px-2 py-0.5 rounded">
                    {b}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Hero Gallery Slider Panel (Right 7 Columns) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-4">
            <div
              className="relative w-full aspect-[4/3] rounded-[32px] bg-white border border-[#0F2B46]/5 shadow-lg flex items-center justify-center p-8 overflow-hidden cursor-grab active:cursor-grabbing group"
              onMouseDown={handleGalleryMouseDown}
              onMouseMove={handleGalleryMouseMove}
              onMouseUp={handleGalleryMouseUp}
              onMouseLeave={handleGalleryMouseUp}
            >
              
              <div 
                className="w-full h-full relative overflow-hidden flex items-center justify-center"
                onMouseMove={handleMouseMoveZoom}
                onMouseLeave={handleMouseLeaveZoom}
              >
                <img
                  src={product.images[activeImageIndex]}
                  alt={`${product.name} detailed view`}
                  className="max-h-full max-w-full object-contain pointer-events-none transition-transform duration-100"
                  style={{
                    transform: `scale(${zoomScale})`,
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    filter: 'brightness(1.01) saturate(0.85)'
                  }}
                />
              </div>

              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="p-2.5 bg-white/80 hover:bg-white text-[#0F2B46] rounded-full shadow-sm backdrop-blur-sm transition-all"
                  title="Fullscreen lightbox"
                >
                  <Maximize2 size={12} />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-slate-400 bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none select-none flex items-center gap-1">
                <Eye size={10} /> Drag to spin 360°
              </div>
            </div>

            {/* Captions and Thumbnail Carousel */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-left">
                {product.imageLabels[activeImageIndex]}
              </p>
              
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-square border rounded-xl bg-white p-1.5 transition-all overflow-hidden flex items-center justify-center ${
                      activeImageIndex === idx ? 'border-[#1D6FA3] ring-2 ring-[#1D6FA3]/15' : 'hover:border-slate-400 border-slate-200'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="max-h-full max-w-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 2: STICKY STORYTELLING ── */}
      {isDesktop ? (
        <section ref={containerRef} className="relative w-full overflow-hidden border-b" style={{ borderColor: C.borderLight }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-12 gap-10 h-screen items-center relative">
            
            {/* LEFT PANEL: Sticky Header & Progress Indicator */}
            <div className="col-span-5 h-[80vh] flex flex-col justify-between py-6 z-10 text-left">
              
              <div className="border-b pb-4" style={{ borderColor: C.borderStrong }}>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#1D6FA3] bg-[#1D6FA3]/10 px-2 py-0.5 rounded font-bold">
                    {product.category}
                  </span>
                  <img src="/logo1.png" alt="Z Icon Brand" className="w-5 h-5 object-contain opacity-40" />
                </div>
                <h2 className="text-2xl font-bold text-[#0F2B46] mt-3">{product.name}</h2>
                
                {/* HUD Quick Stats */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-white/50 border rounded-xl p-2.5 flex flex-col justify-between shadow-sm" style={{ borderColor: C.borderLight }}>
                    <span className="font-mono text-[7px] text-slate-400 uppercase block">Grade</span>
                    <span className="text-[10px] font-bold text-[#0F2B46]">{product.oemGrade}</span>
                  </div>
                  <div className="bg-white/50 border rounded-xl p-2.5 flex flex-col justify-between shadow-sm" style={{ borderColor: C.borderLight }}>
                    <span className="font-mono text-[7px] text-slate-400 uppercase block">Support</span>
                    <span className="text-[10px] font-bold text-[#0EA6A6]">{product.techSupport}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic scroll indicator image preview */}
              <div className="relative w-full aspect-[4/3] rounded-[20px] bg-white border border-[#0F2B46]/5 shadow-md flex items-center justify-center p-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={product.images[activeImage]}
                      alt="Story Frame"
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Story navigation timeline labels */}
              <div className="text-[9px] font-mono text-slate-400 flex justify-between border-t pt-4" style={{ borderColor: C.borderLight }}>
                <span>FRAME: {product.imageLabels[activeImage]}</span>
                <span className="font-bold text-[#1D6FA3]">Chapter 0{activeSectionIndex + 1} / 12</span>
              </div>

            </div>

            {/* RIGHT PANEL: 12 Information Chapters */}
            <div className="col-span-7 h-full flex items-center relative pl-8 overflow-hidden">
              
              <div className="relative flex flex-col items-center justify-between h-[65vh] mr-10 w-8 flex-shrink-0 z-10">
                <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 z-0">
                  <div
                    className="w-full bg-[#1D6FA3] transition-all duration-300"
                    style={{ height: `${(activeSectionIndex / (product.storytelling.length - 1)) * 100}%` }}
                  />
                </div>

                {product.storytelling.map((sec, idx) => {
                  const isActive = activeSectionIndex === idx;
                  const isDone = idx < activeSectionIndex;
                  return (
                    <button
                      key={sec.num}
                      onClick={() => {
                        const wrapper = rightWrapperRef.current;
                        if (wrapper) {
                          const targetScroll = (wrapper.scrollHeight / product.storytelling.length) * idx;
                          gsap.to(window, {
                            scrollTo: { y: containerRef.current.offsetTop + targetScroll },
                            duration: 0.6
                          });
                        }
                      }}
                      className={`w-7 h-7 rounded-full border-2 font-mono text-[9px] font-bold flex items-center justify-center transition-all duration-300 z-10 ${
                        isActive
                          ? 'bg-[#1D6FA3] border-[#1D6FA3] text-white shadow-lg scale-110'
                          : isDone
                          ? 'bg-[#1D6FA3] border-[#1D6FA3] text-white'
                          : 'bg-white border-slate-200 text-slate-400 hover:border-slate-400'
                      }`}
                    >
                      {sec.num}
                    </button>
                  );
                })}
              </div>

              {/* Stories scrolling wrapper */}
              <div className="flex-grow h-screen overflow-hidden flex items-start relative">
                <div
                  ref={rightWrapperRef}
                  className="w-full flex flex-col gap-6 py-[45vh]"
                >
                  {product.storytelling.map((sec, idx) => {
                    const isActive = activeSectionIndex === idx;
                    return (
                      <div
                        key={sec.num}
                        className="rounded-3xl bg-white border p-6 md:p-8 transition-all duration-300 relative overflow-hidden flex flex-col gap-4 text-left"
                        style={{
                          borderColor: isActive ? product.accentColor : C.borderLight,
                          boxShadow: isActive ? '0 15px 40px rgba(15,43,70,0.08)' : 'none',
                          opacity: isActive ? 1.0 : 0.25,
                          transform: isActive ? 'scale(1.01)' : 'scale(0.98)',
                          filter: isActive ? 'none' : 'blur(0.8px)'
                        }}
                      >
                        {isActive && (
                          <div className="absolute left-0 top-0 h-full w-[4px]" style={{ background: product.accentColor }} />
                        )}

                        <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: C.borderLight }}>
                          <span className="font-mono text-[9px] text-[#0EA6A6] font-bold uppercase">{sec.label}</span>
                          <span className="font-mono text-xs text-slate-300 font-bold">0{sec.num}</span>
                        </div>

                        <h3 className="text-lg font-bold text-[#0F2B46]">{sec.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-light">{sec.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </section>
      ) : (
        /* MOBILE VIEW STORYTELLING */
        <section className="px-6 py-10 bg-white border-b" style={{ borderColor: C.borderLight }}>
          <div className="mb-6 text-left">
            <span className="font-mono text-[9px] text-[#1D6FA3] uppercase font-bold tracking-wider">PRODUCT TIMELINE</span>
            <h3 className="text-xl font-bold text-[#0F2B46] mt-1">Timeline Chapters</h3>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
            {product.storytelling.map((sec, idx) => (
              <button
                key={sec.num}
                onClick={() => setActiveSectionIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex-shrink-0 transition-all border ${
                  activeSectionIndex === idx
                    ? 'bg-[#0F2B46] text-white border-[#0F2B46]'
                    : 'bg-slate-50 text-slate-400 border-slate-200'
                }`}
              >
                {sec.num} // {sec.title}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#F1F6FA] border text-left" style={{ borderColor: C.borderLight }}>
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-[8px] text-[#0EA6A6] font-bold uppercase">{product.storytelling[activeSectionIndex].label}</span>
              <span className="font-mono text-[10px] text-slate-400 font-bold">0{product.storytelling[activeSectionIndex].num}</span>
            </div>
            
            <div className="aspect-[4/3] bg-white rounded-xl p-4 flex items-center justify-center mb-4 border">
              <img src={product.images[activeImage]} alt="Story Frame" className="max-h-full max-w-full object-contain" />
            </div>

            <h4 className="text-base font-bold text-[#0F2B46] mb-2">{product.storytelling[activeSectionIndex].title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-light">{product.storytelling[activeSectionIndex].desc}</p>
          </div>
        </section>
      )}

      {/* ── SECTION 3: INTERACTIVE ENGINEERING EXPLORER ── */}
      <section className="py-20 bg-white border-t border-b" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="max-w-2xl text-left mb-12">
            <span className="font-mono text-[10px] text-[#0EA6A6] tracking-widest uppercase font-bold">EXPLODED SCHEMATIC DIRECTORY</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2 leading-tight">Exploded PCB Diagram Explorer</h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Hover or tap on components like the Capacitor, Relay, Transformer, Controller, Cooling Fan, and Power Section to view tech insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Diagram Board (Left 7 Columns) */}
            <div className="col-span-1 lg:col-span-7 flex justify-center relative bg-slate-50 rounded-[32px] p-8 border border-[#0F2B46]/5 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] engineering-grid" />
              
              <div className="relative w-full aspect-[4/3] max-w-lg flex items-center justify-center">
                <img
                  src={product.images[0]}
                  alt="Engineering Exploded Diagram"
                  className="max-h-full max-w-full object-contain opacity-95 filter saturate-50"
                />

                {/* Hotspots */}
                {product.hotspots.map(spot => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    onMouseEnter={() => setActiveHotspot(spot)}
                    className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D6FA3] text-white flex items-center justify-center font-mono text-xs font-bold shadow-[0_0_15px_rgba(29,111,163,0.6)] cursor-pointer focus:outline-none"
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                    }}
                  >
                    <span className="absolute inset-0 rounded-full bg-[#1D6FA3] animate-ping opacity-60" />
                    +
                  </button>
                ))}
              </div>
            </div>

            {/* Explorer description details (Right 5 Columns) */}
            <div className="col-span-1 lg:col-span-5">
              <AnimatePresence mode="wait">
                {activeHotspot ? (
                  <motion.div
                    key={activeHotspot.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-50 border rounded-3xl p-6 md:p-8 relative text-left shadow-sm"
                    style={{ borderColor: C.borderStrong }}
                  >
                    <span className="font-mono text-[9px] text-[#1D6FA3] uppercase tracking-wider font-bold">COMPONENT SPEC SHEET</span>
                    <h3 className="text-xl font-bold text-[#0F2B46] mt-2 mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1D6FA3]" />
                      {activeHotspot.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                      {activeHotspot.desc}
                    </p>
                    <div className="border-t pt-4 font-mono text-[10px] text-slate-400" style={{ borderColor: C.borderLight }}>
                      EXPLODED PART ID: #{activeHotspot.id.toUpperCase()}
                    </div>
                  </motion.div>
                ) : (
                  <div className="border border-dashed rounded-3xl p-12 text-center text-slate-400 font-mono text-xs">
                    Hover or tap a hotspot on the diagram to load component technical specs.
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 4: 360 GALLERY ── */}
      <section className="py-20 bg-slate-50 border-b animate-section" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="max-w-2xl text-left mb-12">
            <span className="font-mono text-[10px] text-[#1D6FA3] tracking-widest uppercase font-bold font-mono">360° ROTATION VIEW</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Interactive 360° Gallery</h2>
            <p className="text-xs text-slate-500 mt-2">
              Select key views below or drag left/right on the frame to spin and explore angles: Front, 45°, Back, Macro, Installed, Warehouse, Technician, Exploded, and Packaging.
            </p>
          </div>

          {/* Large image grid display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div 
              className="col-span-1 lg:col-span-8 bg-white border rounded-[32px] p-6 aspect-[4/3] flex items-center justify-center relative cursor-grab active:cursor-grabbing group overflow-hidden"
              style={{ borderColor: C.borderLight }}
              onMouseDown={handleGalleryMouseDown}
              onMouseMove={(e) => handleGalleryMouseMove(e, true)}
              onMouseUp={handleGalleryMouseUp}
              onMouseLeave={handleGalleryMouseUp}
            >
              <img 
                src={product.images[sec4ActiveIndex % product.images.length]} 
                alt="360 view" 
                className="max-h-full max-w-full object-contain pointer-events-none"
              />
              
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="p-2 bg-white/90 border rounded-full hover:bg-white text-[#0F2B46] shadow-sm flex items-center justify-center"
                >
                  <Maximize2 size={12} />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 bg-[#0F2B46] text-white px-3.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider flex items-center gap-1.5 pointer-events-none select-none">
                <Eye size={10} /> Drag Frame to rotate
              </div>
            </div>

            {/* List button selects (Right 4 Columns) */}
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-2">
              <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">ANGLE SELECTORS</span>
              {galleryLabels.map((lbl, idx) => (
                <button
                  key={lbl}
                  onClick={() => setSec4ActiveIndex(idx % product.images.length)}
                  className={`text-left text-xs py-3 px-4 rounded-xl border font-mono transition-all flex justify-between items-center ${
                    (sec4ActiveIndex % product.images.length) === (idx % product.images.length)
                      ? 'border-[#1D6FA3] bg-[#1D6FA3]/5 text-[#1D6FA3] font-bold'
                      : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                  }`}
                >
                  <span>0{idx + 1} // {lbl}</span>
                  <ChevronRight size={10} className="opacity-45" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 5: TECHNICAL SPECIFICATIONS ── */}
      <section className="py-20 bg-white border-b" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="max-w-2xl text-left mb-12">
            <span className="font-mono text-[10px] text-[#1D6FA3] tracking-widest uppercase font-bold">PARAMETRIC SPECIFICATIONS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Technical Specifications Matrix</h2>
            <p className="text-xs text-slate-500 mt-2">
              Browse detailed physical tolerances, connection registers, and environmental thresholds divided by engineering disciplines. Click rows to view check parameters.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b pb-4" style={{ borderColor: C.borderLight }}>
            {['electrical', 'thermal', 'mechanical', 'communication', 'environmental'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveSpecTab(tab)}
                className={`px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all border ${
                  activeSpecTab === tab
                    ? 'bg-[#0F2B46] text-white border-[#0F2B46] shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-500 border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Expandable Rows Table */}
          <div className="border rounded-3xl overflow-hidden bg-white text-left" style={{ borderColor: C.borderLight }}>
            <div className="grid grid-cols-12 bg-slate-50/50 p-4 border-b font-mono text-[10px] text-slate-400 font-bold uppercase" style={{ borderColor: C.borderLight }}>
              <div className="col-span-5 md:col-span-4">Parameter Name</div>
              <div className="col-span-7 md:col-span-6">Value / Limits</div>
              <div className="hidden md:col-span-2 md:block text-right">Details</div>
            </div>
            
            {product.specs[activeSpecTab] ? (
              Object.entries(product.specs[activeSpecTab]).map(([key, val]) => {
                const isExpanded = !!expandedSpecRows[key];
                return (
                  <div key={key} className="border-b last:border-b-0" style={{ borderColor: C.borderLight }}>
                    <button
                      onClick={() => toggleSpecRow(key)}
                      className="w-full grid grid-cols-12 p-4 items-center text-xs md:text-sm hover:bg-slate-50/30 transition-colors text-left"
                    >
                      <div className="col-span-5 md:col-span-4 font-semibold text-[#0F2B46] pr-2">{key}</div>
                      <div className="col-span-7 md:col-span-6 font-mono text-[#1D6FA3] font-semibold break-all">{val}</div>
                      <div className="hidden md:col-span-2 md:block text-right text-[10px] font-mono text-slate-400 uppercase">
                        {isExpanded ? 'Collapse [-]' : 'Expand [+]'}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-slate-50/30"
                        >
                          <div className="p-4 border-t text-[11px] text-slate-500 leading-relaxed font-mono" style={{ borderColor: C.borderLight }}>
                            Verification Checkpoint: Tested under IEC standard parameters. Tolerance margin ±1.5%. Active alarms configured in BMS registers code index.
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="p-6 text-center text-slate-400 text-xs font-mono">No data configured.</div>
            )}
          </div>

        </div>
      </section>

      {/* ── SECTION 6: APPLICATIONS ── */}
      <section className="py-20" style={{ background: C.bgWarmWhite }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="max-w-2xl text-left mb-12">
            <span className="font-mono text-[10px] text-[#0EA6A6] tracking-widest uppercase font-bold">REAL-WORLD SOLUTIONS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Operational Environments & Case Studies</h2>
            <p className="text-xs text-[#0F2B46]/70 mt-2">
              Explore concrete field audits illustrating challenges faced, engineered solutions sized, and verified parameters benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {product.applications.map((app, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 border shadow-sm flex flex-col justify-between relative overflow-hidden" style={{ borderColor: C.borderLight }}>
                <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: product.accentColor }} />
                
                <div>
                  <h3 className="text-base font-bold text-[#0F2B46] mb-5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                    {app.name}
                  </h3>

                  <div className="flex flex-col gap-4 mb-6">
                    <div>
                      <span className="font-mono text-[7px] uppercase text-red-500 font-bold block mb-1">Problem</span>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">{app.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[7px] uppercase text-[#1D6FA3] font-bold block mb-1">Recommended Product</span>
                      <p className="text-xs text-slate-600 font-semibold leading-relaxed">{app.product}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 bg-slate-50/50 p-4 rounded-xl" style={{ borderColor: C.borderLight }}>
                  <span className="font-mono text-[7px] uppercase text-emerald-600 font-bold block mb-1">Benefits</span>
                  <p className="text-xs font-bold text-[#0F2B46] leading-snug">{app.benefits}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 7: COMPATIBILITY HUB ── */}
      <section className="py-20 bg-white border-b" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="max-w-2xl text-left mb-12">
            <span className="font-mono text-[10px] text-[#1D6FA3] tracking-widest uppercase font-bold">OEM COMPATIBILITY HUB</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Compatible OEM Brands</h2>
            <p className="text-xs text-slate-500 mt-2">
              Select brands to review register mapping protocols, connection guidelines, and terminal interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {product.compatibility.map(brand => (
              <div key={brand} className="bg-slate-50 border rounded-3xl p-6 flex flex-col justify-between" style={{ borderColor: C.borderLight }}>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center font-bold text-[#0F2B46] font-mono mb-4 text-xs">
                    {brand.slice(0, 2).toUpperCase()}
                  </div>
                  <h4 className="text-sm font-bold text-[#0F2B46] uppercase tracking-wider mb-2">{brand} coupling compatibility</h4>
                  <p className="text-[11px] text-slate-500 font-mono leading-relaxed">
                    {product.compatDetails[brand] || 'Standard isolated control terminal coupler interface registers.'}
                  </p>
                </div>
                <div className="border-t pt-4 mt-6 text-[8px] font-mono text-slate-400 uppercase font-bold">
                  Galvanic isolation: YES
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 8: DOWNLOADS ── */}
      <section className="py-20 bg-slate-50 border-b" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="max-w-2xl text-left mb-12">
            <span className="font-mono text-[10px] text-[#1D6FA3] tracking-widest uppercase font-bold">TECHNICAL RESOURCE ARCHIVES</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Resource Download Desk</h2>
            <p className="text-xs text-slate-500 mt-2">
              Retrieve 3D CAD files, electrical registers manuals, and validation certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border rounded-3xl p-6 shadow-sm flex flex-col justify-between" style={{ borderColor: C.borderLight }}>
              <div>
                <FileText className="text-[#1D6FA3] mb-4" size={24} />
                <h4 className="text-sm font-bold text-[#0F2B46] mb-1">Datasheet & Modbus Registers</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">Complete address configurations mapping registers and communication parameters.</p>
              </div>
              <a href="#" className="w-full py-3 border border-slate-200 hover:border-[#1D6FA3] text-[#0F2B46] text-[10px] font-mono font-bold uppercase rounded-xl text-center block transition-colors">
                Download PDF (2.4 MB)
              </a>
            </div>

            <div className="bg-white border rounded-3xl p-6 shadow-sm flex flex-col justify-between" style={{ borderColor: C.borderLight }}>
              <div>
                <Settings className="text-[#0EA6A6] mb-4" size={24} />
                <h4 className="text-sm font-bold text-[#0F2B46] mb-1">CAD Drawings & Dimensions (DWG)</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">DWG / DXF layout blocks containing precise mechanical bracket mounting paths.</p>
              </div>
              <a href="#" className="w-full py-3 border border-slate-200 hover:border-[#0EA6A6] text-[#0F2B46] text-[10px] font-mono font-bold uppercase rounded-xl text-center block transition-colors">
                Download DWG (1.8 MB)
              </a>
            </div>

            <div className="bg-white border rounded-3xl p-6 shadow-sm flex flex-col justify-between" style={{ borderColor: C.borderLight }}>
              <div>
                <Shield className="text-[#B8955A] mb-4" size={24} />
                <h4 className="text-sm font-bold text-[#0F2B46] mb-1">Quality Inspection Certificates</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">Validation reports detailing burn-in hours, CE approvals, and compliance codes.</p>
              </div>
              <a href="#" className="w-full py-3 border border-slate-200 hover:border-[#B8955A] text-[#0F2B46] text-[10px] font-mono font-bold uppercase rounded-xl text-center block transition-colors">
                Download PDF (840 KB)
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 9: INSTALLATION TIMELINE ── */}
      <section className="py-20 bg-white border-b" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="max-w-2xl text-left mb-16">
            <span className="font-mono text-[10px] text-[#1D6FA3] tracking-widest uppercase font-bold">COMMISSION TIMELINE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Installation Guide</h2>
            <p className="text-xs text-slate-500 mt-2">
              Review our verified 5-step sequence to unpack, mount, test, safely commission, and secure local engineering support.
            </p>
          </div>

          {/* Animated Timeline list */}
          <div ref={installationTimelineRef} className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left relative">
            {product.installationSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-slate-50 border rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden"
                style={{ borderColor: C.borderLight }}
              >
                <div>
                  <span className="text-2xl font-bold text-[#1D6FA3] opacity-35 font-mono block mb-4">0{step.step}</span>
                  <h4 className="text-sm font-bold text-[#0F2B46] mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="absolute right-4 bottom-4 text-[#0EA6A6]/40 hidden md:block">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 10: FACTORY QUALITY ── */}
      <section className="py-20 bg-white border-b" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="max-w-2xl text-left mb-12">
            <span className="font-mono text-[10px] text-[#B8955A] tracking-widest uppercase font-bold">QUALITY ASSURANCE FACTORY DECK</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Factory Assembly & Testing</h2>
            <p className="text-xs text-slate-500 mt-2">
              Every system is assembled and verified to guarantee compliance with international engineering guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {product.factoryQuality.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border rounded-3xl p-5 flex flex-col justify-between" style={{ borderColor: C.borderLight }}>
                <div>
                  <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest block mb-1">PHASE 0{idx + 1}</span>
                  <h4 className="text-xs font-bold text-[#0F2B46] mb-3 leading-snug">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">{item.desc}</p>
                </div>
                <div className="border-t pt-4 mt-6 flex justify-between items-center text-[9px] font-mono text-[#B8955A] font-bold">
                  <span>QC COMPLIANT</span>
                  <span className="flex items-center gap-1"><CheckCircle2 size={10} /> Passed</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 11: RELATED PRODUCTS ── */}
      <section className="py-20" style={{ background: C.bgSage }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="mb-12 text-left">
            <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">SYSTEM INTEGRATION</span>
            <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
              Related System Components
            </h2>
          </div>

          <div ref={relatedSliderRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS_CATALOG
              .filter(item => item.id !== productId)
              .slice(0, 3)
              .map(item => (
                <div
                  key={item.id}
                  className="group bg-white rounded-[28px] border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  style={{ borderColor: C.borderLight }}
                >
                  <div>
                    <div className="p-6 bg-slate-50/50 flex items-center justify-center aspect-[4/3] border-b" style={{ borderColor: C.borderLight }}>
                      <img src={item.images[0]} alt={item.name} className="max-h-[150px] object-contain group-hover:scale-102 transition-transform duration-500" />
                    </div>
                    <div className="p-8 text-left">
                      <span className="font-mono text-[9px] tracking-widest uppercase font-bold block mb-1 text-[#1D6FA3]">
                        CODE: {item.code}
                      </span>
                      <h3 className="text-base font-bold text-[#0F2B46] mb-3 leading-snug">{item.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="p-8 pt-0">
                    <Link
                      href={`/products/${item.id}`}
                      className="w-full py-3.5 bg-slate-100 hover:bg-[#1D6FA3] hover:text-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center block"
                    >
                      View Integration
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FAQ ── */}
      <section className="py-20 bg-white border-t" style={{ borderColor: C.borderLight }}>
        <div className="max-w-[800px] mx-auto px-6 text-left">
          
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-[#0EA6A6] tracking-widest uppercase font-bold">ENGINEERING INQUIRIES</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Technical FAQs</h2>
            
            {/* Search Input */}
            <div className="relative w-full max-w-md mx-auto mt-6 flex items-center">
              <Search size={14} className="absolute left-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search FAQs by keywords..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border rounded-xl text-xs bg-slate-50 outline-none text-slate-700 placeholder-slate-400"
                style={{ borderColor: C.borderStrong }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border rounded-2xl overflow-hidden transition-colors" style={{ borderColor: isOpen ? C.blue : C.borderLight }}>
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center p-5 font-bold text-xs md:text-sm text-[#0F2B46] bg-slate-50/50 hover:bg-slate-50 transition-colors text-left"
                    >
                      <span>{faq.q}</span>
                      <span className="font-mono text-xs ml-4 flex-shrink-0">{isOpen ? '—' : '+'}</span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 border-t text-xs text-slate-600 leading-relaxed font-light" style={{ borderColor: C.borderLight }}>
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center font-mono text-xs text-slate-400 py-6">No matching technical FAQs found.</div>
            )}
          </div>

        </div>
      </section>

      {/* ── SECTION 13: STICKY QUOTE PANEL ── */}
      {isDesktop ? (
        <div className="fixed right-6 bottom-6 z-[9990] flex flex-col items-end gap-3 pointer-events-none">
          
          <div className="pointer-events-auto bg-[#B8955A] text-white px-3.5 py-1.5 rounded-full shadow-md text-[9px] font-mono uppercase tracking-widest font-bold flex items-center gap-1">
            <Clock size={10} /> 15-Min Response Guarantee
          </div>

          <div className="pointer-events-auto bg-[#0F2B46] border border-white/10 rounded-2xl p-4 shadow-[0_15px_40px_rgba(15,43,70,0.3)] flex flex-col gap-3 min-w-[220px] text-left">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <img
                src={product.supportEngineer.img}
                alt={product.supportEngineer.name}
                className="w-9 h-9 rounded-full object-cover border border-white/20"
              />
              <div>
                <span className="text-[10px] text-white font-bold block">{product.supportEngineer.name}</span>
                <span className="text-[8px] text-slate-400 block font-mono uppercase">{product.supportEngineer.role}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="tel:+919876543210"
                className="flex-1 h-9 bg-white/10 hover:bg-white text-white hover:text-[#0F2B46] rounded-lg flex items-center justify-center transition-all"
                title="Call Engineer"
              >
                <Phone size={14} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all"
                title="WhatsApp Chat"
              >
                <MessageSquare size={14} />
              </a>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="flex-1 h-9 bg-[#1D6FA3] hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all shadow-md"
                title="Request Quote Form"
              >
                <Mail size={14} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* MOBILE VIEW FIXED BOTTOM CTA PANEL */
        <div className="fixed bottom-0 left-0 w-full z-[9995] bg-[#0F2B46] text-white p-3.5 grid grid-cols-3 gap-2 border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center justify-center gap-1 py-2 bg-white/10 hover:bg-white/20 rounded-xl"
          >
            <Phone size={14} />
            <span className="text-[8px] font-mono uppercase">Call</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2 bg-emerald-500/95 hover:bg-emerald-600 rounded-xl"
          >
            <MessageSquare size={14} />
            <span className="text-[8px] font-mono uppercase">WhatsApp</span>
          </a>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="flex flex-col items-center justify-center gap-1 py-2 bg-[#1D6FA3] hover:bg-blue-600 rounded-xl"
          >
            <Mail size={14} />
            <span className="text-[8px] font-mono uppercase">Quote RFQ</span>
          </button>
        </div>
      )}

      {/* ── FULLSCREEN GALLERY LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col justify-between p-6 select-none"
          >
            <div className="flex justify-between items-center text-white/60 font-mono text-[10px]">
              <span>LIGHTBOX ARCHIVES // {product.code}</span>
              <button onClick={() => setLightboxOpen(false)} className="text-white hover:text-red-400 p-2 border rounded-full border-white/10">
                CLOSE [X]
              </button>
            </div>

            <div className="flex-grow flex items-center justify-center max-h-[75vh]">
              <img src={product.images[activeImageIndex]} alt="Fullscreen" className="max-h-full max-w-full object-contain" />
            </div>

            <div className="text-center text-white/80 font-mono text-xs">
              <p className="uppercase tracking-widest mb-3">{product.imageLabels[activeImageIndex]}</p>
              <div className="flex justify-center gap-1.5">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${activeImageIndex === i ? 'bg-[#1D6FA3] scale-125' : 'bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TECHNICAL QUOTE MODAL FORM ── */}
      <AnimatePresence>
        {quoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 relative text-left shadow-2xl"
            >
              <button onClick={() => { setQuoteModalOpen(false); setFormSubmitted(false); }} className="absolute right-5 top-5 text-slate-400 hover:text-red-500 p-1">
                <X size={18} />
              </button>

              <div className="flex items-center gap-3.5 mb-6">
                <img src="/logo1.png" alt="Z Cool Tech Logo Icon" className="w-10 h-10 object-contain" />
                <div>
                  <span className="font-mono text-[9px] text-[#B8955A] uppercase tracking-widest font-bold block">DISPATCH PROCUREMENT REQUEST</span>
                  <h3 className="text-xl font-bold text-[#0F2B46] mt-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Request Parametric Quote</h3>
                </div>
              </div>
              <p className="text-[10px] font-mono text-slate-400 -mt-3 mb-6 block border-b pb-3" style={{ borderColor: C.borderLight }}>Assigned System: {product.code} ({product.name})</p>

              {!formSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block mb-1">Corporate Email Address *</label>
                    <input type="email" required placeholder="name@company.com" className="w-full text-xs p-3 border rounded-xl bg-slate-50 outline-none" style={{ borderColor: C.borderStrong }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block mb-1">Target Quantity Units *</label>
                      <input type="number" required defaultValue="10" className="w-full text-xs p-3 border rounded-xl bg-slate-50 outline-none" style={{ borderColor: C.borderStrong }} />
                    </div>
                    <div>
                      <label className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block mb-1">Required Voltage config</label>
                      <input type="text" placeholder={product.voltage} className="w-full text-xs p-3 border rounded-xl bg-slate-50 outline-none" style={{ borderColor: C.borderStrong }} />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block mb-1">Engineering project notes</label>
                    <textarea rows="3" placeholder="Sizing details, environmental considerations, coupling parameters..." className="w-full text-xs p-3 border rounded-xl bg-slate-50 outline-none resize-none" style={{ borderColor: C.borderStrong }}></textarea>
                  </div>
                  
                  <div className="bg-[#B8955A]/5 border border-[#B8955A]/25 rounded-xl p-3.5 flex items-center gap-3">
                    <Clock className="text-[#B8955A] flex-shrink-0" size={16} />
                    <span className="text-[10px] font-mono text-[#B8955A] leading-snug font-bold">
                      Assigned Engineer: {product.supportEngineer.name} ({product.supportEngineer.role}). Response guaranteed in 15 minutes.
                    </span>
                  </div>

                  <button type="submit" className="w-full py-4 bg-[#1D6FA3] text-white hover:bg-blue-600 text-xs font-mono uppercase font-bold tracking-wider rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-1.5">
                    Submit Proposal <Send size={12} />
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                  <CheckCircle2 className="mx-auto text-emerald-500 mb-4" size={48} />
                  <h4 className="text-base font-bold text-[#0F2B46] mb-1">Proposal Dispatched Successfully</h4>
                  <p className="text-xs text-slate-500 font-light max-w-sm mx-auto leading-relaxed mb-6">
                    Your request has been logged. {product.supportEngineer.name} is currently compiling pricing parameters.
                  </p>
                  <button
                    onClick={() => { setQuoteModalOpen(false); setFormSubmitted(false); }}
                    className="px-6 py-2.5 bg-[#0F2B46] text-white font-mono text-[10px] uppercase tracking-wider rounded-xl"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
