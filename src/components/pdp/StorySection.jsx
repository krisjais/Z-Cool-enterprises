'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Info, Settings, Thermometer, Zap, ShieldCheck, Building, User, Clock, ArrowRight, Mail } from 'lucide-react';
import ProgressRail from './ProgressRail';
import Link from 'next/link';

// Custom icons picker
const getChapterIcon = (iconName) => {
  switch (iconName) {
    case 'Info': return <Info size={16} className="text-[#1D6FA3]" />;
    case 'Settings': return <Settings size={16} className="text-[#1D6FA3]" />;
    case 'Thermometer': return <Thermometer size={16} className="text-[#1D6FA3]" />;
    case 'Zap': return <Zap size={16} className="text-[#1D6FA3]" />;
    case 'ShieldCheck': return <ShieldCheck size={16} className="text-[#1D6FA3]" />;
    case 'Building': return <Building size={16} className="text-[#1D6FA3]" />;
    case 'User': return <User size={16} className="text-[#1D6FA3]" />;
    case 'Clock': return <Clock size={16} className="text-[#1D6FA3]" />;
    default: return <Info size={16} className="text-[#1D6FA3]" />;
  }
};

// Dynamic storytelling annotations coordinates mapping
const STORY_ANNOTATIONS = {
  'hvac-pcb-100': {
    0: { text: '→ Front Interface Port', x: '5%', y: '25%' },
    1: { text: '→ ARM Cortex Controller', x: '45%', y: '35%' },
    2: { text: '→ High Efficiency Heat Sink', x: '80%', y: '60%' },
    3: { text: '→ 6kV Surge Protector', x: '10%', y: '70%' },
    4: { text: '→ Conformal Protection Coat', x: '35%', y: '15%' },
    5: { text: '→ DIN Rail Bracket Mount', x: '85%', y: '25%' },
    6: { text: '→ Diagnostics RGB LED Grid', x: '75%', y: '80%' },
    7: { text: '→ Multi-layer Exploded Logic', x: '50%', y: '50%' }
  },
  'chiller-w50': {
    0: { text: '→ Flow Inlet Connectors', x: '15%', y: '75%' },
    1: { text: '→ Scroll Compressor Unit', x: '30%', y: '55%' },
    2: { text: '→ Blue Fin Heat Exchanger', x: '55%', y: '15%' },
    3: { text: '→ Isolation Transformer', x: '65%', y: '30%' },
    4: { text: '→ High Pressure Safety Valve', x: '75%', y: '20%' },
    5: { text: '→ Structural Skid Mounting', x: '80%', y: '80%' },
    6: { text: '→ Evaporator Assembly Tube', x: '45%', y: '35%' },
    7: { text: '→ PLC Digital Interface board', x: '80%', y: '30%' }
  }
};

const getTransitionProps = (chapterIndex) => {
  switch (chapterIndex) {
    case 1: // Morph/Scale
      return {
        initial: { opacity: 0, scale: 0.85 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.85 },
        transition: { duration: 0.65, ease: 'easeInOut' }
      };
    case 2: // Zoom
      return {
        initial: { opacity: 0, scale: 0.68 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.25 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
      };
    case 3: // Rotate
      return {
        initial: { opacity: 0, rotate: -15, scale: 0.92 },
        animate: { opacity: 1, rotate: 0, scale: 1 },
        exit: { opacity: 0, rotate: 15, scale: 0.92 },
        transition: { duration: 0.6, ease: 'easeOut' }
      };
    case 4: // Slide
      return {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.55, ease: 'easeOut' }
      };
    case 5: // Blur Reveal
      return {
        initial: { opacity: 0, filter: 'blur(16px)', scale: 0.95 },
        animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
        exit: { opacity: 0, filter: 'blur(16px)', scale: 0.95 },
        transition: { duration: 0.75 }
      };
    case 6: // Explode
      return {
        initial: { opacity: 0, scale: 1.15, y: -25 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.85, y: 25 },
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
      };
    default: // Crossfade
      return {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
        transition: { duration: 0.5 }
      };
  }
};

export default function StorySection({ product, isDesktop }) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOffset, setZoomOffset] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      // Create ScrollTrigger tracking index triggers for the 8 storytelling cards
      product.storytelling.forEach((ch, idx) => {
        ScrollTrigger.create({
          trigger: `#story-card-${ch.num}`,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveChapter(idx);
            }
          }
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [isDesktop, product.storytelling]);

  const handleParallaxMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setParallaxOffset({ x, y });
  };

  const handleParallaxLeave = () => {
    setParallaxOffset({ x: 0, y: 0 });
    setIsZoomed(false);
  };

  const handleZoomMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOffset({ x, y });
    setIsZoomed(true);
  };

  const annotationsMap = STORY_ANNOTATIONS[product.id] || {};
  const activeAnnotation = annotationsMap[activeChapter] || null;

  const C = {
    blue: '#1D6FA3',
    navy: '#0F2B46',
    borderLight: 'rgba(15,43,70,0.06)'
  };

  return (
    <div className="w-full">
      {isDesktop ? (
        /* ── DESKTOP LAYOUT ── */
        <section id="storytelling-section" ref={containerRef} className="relative w-full border-b bg-white" style={{ borderColor: C.borderLight }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 flex flex-col lg:flex-row gap-12 relative min-h-screen">
            
            {/* Left Column (Sticky Visual box) */}
            <div className="w-full lg:w-[45%] h-fit lg:sticky lg:top-[120px] z-20 flex flex-col gap-6 text-left">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#1D6FA3] bg-[#1D6FA3]/10 px-2.5 py-0.5 rounded-full font-bold">
                  {product.category}
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F2B46] mt-3 font-sans leading-tight">
                  {product.name}
                </h2>
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2">
                  <span>CODE: {product.code}</span>
                  <span>CHAPTER 0{activeChapter + 1} / 8</span>
                </div>
              </div>

              {/* Story Visual Box */}
              <div
                className="relative aspect-[4/3] w-full rounded-[24px] bg-gradient-to-tr from-slate-50 to-white border border-[#0f2b46]/5 shadow-[0_20px_50px_-12px_rgba(15,43,70,0.08)] overflow-hidden flex items-center justify-center p-6 cursor-zoom-in"
                onMouseMove={(e) => {
                  handleParallaxMove(e);
                  handleZoomMove(e);
                }}
                onMouseLeave={handleParallaxLeave}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent)] pointer-events-none z-10" />

                {/* Pulsating Annotation Tooltip */}
                <AnimatePresence>
                  {activeAnnotation && (
                    <motion.div
                      key={activeChapter}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="absolute bg-white/95 backdrop-blur-md border border-[#1D6FA3]/25 px-3.5 py-2 rounded-xl shadow-xl text-[9px] font-mono text-[#1D6FA3] font-extrabold tracking-wider pointer-events-none z-30 flex items-center gap-2"
                      style={{
                        left: activeAnnotation.x,
                        top: activeAnnotation.y,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D6FA3] animate-ping" />
                      {activeAnnotation.text}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Visual container with Custom Chapter transitions */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeChapter}
                      src={product.images[activeChapter]}
                      alt="Chapter visual"
                      className="max-h-[85%] max-w-[85%] object-contain mix-blend-multiply select-none pointer-events-none"
                      {...getTransitionProps(activeChapter)}
                      style={{
                        transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px) scale(${isZoomed ? 1.3 : 1})`,
                        transformOrigin: isZoomed ? `${zoomOffset.x}% ${zoomOffset.y}%` : 'center',
                        transition: isZoomed ? 'none' : 'transform 0.4s ease-out',
                        filter: 'brightness(1.02) saturate(0.95)'
                      }}
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress Tracker Rail */}
              <ProgressRail activeChapter={activeChapter} />

              {/* Story visual index button selectors */}
              <div className="grid grid-cols-8 gap-1.5 border-t pt-4" style={{ borderColor: C.borderLight }}>
                {(product?.images ?? []).map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const targetCard = document.getElementById(`story-card-0${idx + 1}`);
                      if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`aspect-square border rounded-lg bg-white p-1 transition-all overflow-hidden flex items-center justify-center hover:scale-105 hover:border-[#1D6FA3] hover:shadow-md cursor-pointer ${
                      activeChapter === idx ? 'border-[#1D6FA3] ring-2 ring-[#1D6FA3]/15' : 'border-slate-200'
                    }`}
                    title={(product?.storytelling ?? [])[idx]?.title}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="max-h-full max-w-full object-contain pointer-events-none" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column (Scrolling Cards list) */}
            <div className="w-full lg:w-[55%] flex flex-col gap-32 py-[15vh] z-10">
              {(product?.storytelling ?? []).map((ch, idx) => {
                const isActive = activeChapter === idx;
                return (
                  <div
                    key={ch.num}
                    id={`story-card-${ch.num}`}
                    className="story-card rounded-3xl bg-white border p-8 transition-all duration-500 relative overflow-hidden flex flex-col gap-5 text-left min-h-[70vh] justify-center"
                    style={{
                      borderColor: isActive ? C.blue : 'rgba(15,43,70,0.06)',
                      boxShadow: isActive ? '0 25px 60px -15px rgba(15,43,70,0.12)' : 'none',
                      opacity: isActive ? 1.0 : 0.35,
                      transform: isActive ? 'scale(1.01)' : 'scale(0.97)',
                      filter: isActive ? 'none' : 'blur(0.8px)'
                    }}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 h-full w-[4px] bg-[#1D6FA3]" />
                    )}

                    <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: C.borderLight }}>
                      <span className="flex items-center gap-2">
                        {getChapterIcon(ch.iconName)}
                        <span className="font-mono text-[9px] text-[#1D6FA3] font-bold uppercase">{ch.label}</span>
                      </span>
                      <span className="font-mono text-xs text-slate-300 font-bold">0{ch.num}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#0F2B46] font-sans transition-colors duration-300">
                      {ch.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {ch.desc}
                    </p>

                    <div className="flex flex-col gap-2.5 my-2">
                      {ch.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 text-xs text-[#0F2B46] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1D6FA3] mt-1.5 flex-shrink-0 animate-pulse" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {ch.chips.map(chip => (
                        <span key={chip} className="text-[10px] font-mono bg-slate-50 border border-slate-200/50 rounded-md px-2.5 py-1 text-slate-500 font-semibold shadow-sm">
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div className="font-mono text-[9px] text-slate-400 border-t pt-4 mt-2">
                      {ch.note}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        /* ── MOBILE ACCORDION EXPERIENCE ── */
        <section className="px-6 py-12 bg-white border-b" style={{ borderColor: C.borderLight }}>
          <div className="mb-6 text-left">
            <span className="font-mono text-[9px] text-[#1D6FA3] uppercase font-bold tracking-wider">PRODUCT TIMELINE</span>
            <h3 className="text-2xl font-bold text-[#0F2B46] mt-1 font-sans">Engineering Chapters</h3>
          </div>

          {/* Swipe gallery of product renders */}
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none pb-4 mb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {(product?.images ?? []).map((imgUrl, idx) => (
              <div
                key={idx}
                className="w-[85vw] snap-center flex-shrink-0 aspect-[4/3] bg-gradient-to-tr from-slate-50 to-white border border-[#0F2B46]/5 rounded-2xl flex items-center justify-center p-6 relative overflow-hidden"
              >
                <img
                  src={imgUrl}
                  alt={(product?.storytelling ?? [])[idx]?.title}
                  className="max-h-[85%] max-w-[85%] object-contain mix-blend-multiply"
                />
                <span className="absolute bottom-3 left-4 font-mono text-[9px] text-slate-400 bg-white/80 px-2 py-0.5 rounded border border-slate-100">
                  Visual 0{idx + 1} :: {(product?.storytelling ?? [])[idx]?.title}
                </span>
              </div>
            ))}
          </div>

          {/* Chapters accordion stack */}
          <div className="flex flex-col gap-3">
            {(product?.storytelling ?? []).map((ch, idx) => {
              const isOpen = activeChapter === idx;
              return (
                <div
                  key={ch.num}
                  id={`accordion-${ch.num}`}
                  className="border rounded-2xl overflow-hidden bg-white text-left transition-all"
                  style={{ borderColor: isOpen ? C.blue : 'rgba(15,43,70,0.06)' }}
                >
                  <button
                    onClick={() => setActiveChapter(isOpen ? -1 : idx)}
                    className="w-full p-4 flex justify-between items-center text-[#0F2B46] hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-slate-300 font-bold">0{ch.num}</span>
                      <h4 className="font-bold text-sm font-sans">{ch.title}</h4>
                    </span>
                    <span className="font-mono text-xs">{isOpen ? '−' : '+'}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-4 border-t border-slate-100 flex flex-col gap-4 bg-slate-50/50">
                          <p className="text-xs text-slate-600 leading-relaxed font-light">{ch.desc}</p>
                          
                          <div className="flex flex-col gap-2">
                            {ch.bullets.map((b, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-2 text-xs text-[#0F2B46]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1D6FA3] mt-1.5 flex-shrink-0" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {ch.chips.map(chip => (
                              <span key={chip} className="text-[9px] font-mono bg-white border border-slate-200 rounded px-1.5 py-0.5 text-slate-500">
                                {chip}
                              </span>
                            ))}
                          </div>

                          <div className="font-mono text-[8px] text-slate-400 border-t pt-2 mt-1">
                            {ch.note}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
