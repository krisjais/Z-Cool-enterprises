'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Phone, MessageSquare, Mail, Download, Maximize2, Eye, 
  ChevronRight, ArrowLeft, RotateCw, Pause, Play, Compass
} from 'lucide-react';
import BlueprintViewer from './BlueprintViewer';

export default function Hero({ product, setQuoteModalOpen, setLightboxOpen, activeImageIndex, setActiveImageIndex }) {
  const [isBlueprint, setIsBlueprint] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const imagesLength = (product?.images ?? []).length;

  // Auto-rotate logic with pause-on-hover
  useEffect(() => {
    if (!autoRotate || isHovered) return;
    const interval = setInterval(() => {
      setActiveImageIndex(prev => (prev + 1) % imagesLength);
    }, 2800);
    return () => clearInterval(interval);
  }, [autoRotate, isHovered, imagesLength, setActiveImageIndex]);

  // Drag-to-spin logic
  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    if (Math.abs(deltaX) > 24) {
      const step = deltaX > 0 ? -1 : 1;
      const nextIndex = (activeImageIndex + step + (product?.images ?? []).length) % (product?.images ?? []).length;
      setActiveImageIndex(nextIndex);
      setDragStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Zoom-on-hover logic for standard rendering
  const handleZoomMove = (e) => {
    if (isBlueprint) return; // disable magnifying zoom when in blueprint mode
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
    setZoomScale(1.6);
  };

  const handleZoomLeave = () => {
    setZoomScale(1);
    setIsHovered(false);
  };

  const C = {
    navy: '#0F2B46',
    borderLight: 'rgba(15,43,70,0.06)',
    borderStrong: 'rgba(15,43,70,0.12)',
    bgHero: '#F1F6FA'
  };

  return (
    <div className="w-full">
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-8 pb-4 flex items-center justify-between font-mono text-[10px] text-slate-400 tracking-wider border-b" style={{ borderColor: C.borderLight }}>
        <div className="flex items-center gap-2">
          <Link href="/products" className="hover:text-[#1D6FA3] flex items-center gap-1">
            <ArrowLeft size={10} /> CATALOG
          </Link>
          <ChevronRight size={10} />
          <span className="text-[#0F2B46] font-bold">{product.code}</span>
        </div>
        <span className="text-slate-400 font-bold uppercase hidden sm:inline">Z-COOL INDUSTRIAL PARAMETRIC SYSTEMS</span>
      </div>

      {/* ── HERO GRID SECTION ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Details Column (Left 5) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-full text-left">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#1D6FA3] bg-[#1D6FA3]/10 px-2.5 py-0.5 rounded-full font-bold">
                  {product.category}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-bold">
                  {product.statusBadge}
                </span>
                <span className="font-mono text-[9px] text-slate-400 uppercase font-bold">
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
                  href="tel:+919920691707"
                  className="flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-[#0F2B46] text-[10px] font-mono uppercase font-bold rounded-xl transition-all"
                >
                  <Phone size={12} /> Call Us
                </a>
                <a
                  href="https://wa.me/919920691707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[10px] font-mono uppercase font-bold rounded-xl transition-all"
                >
                  <MessageSquare size={12} /> WhatsApp Us
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="flex items-center justify-center gap-2 py-3.5 bg-[#1D6FA3] hover:bg-blue-600 text-white text-[10px] font-mono uppercase font-bold rounded-xl transition-all shadow-md"
                >
                  <Mail size={12} /> Enquire Now
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
              <span className="font-mono text-[9px] text-slate-400 uppercase font-bold">Coupling compatibility:</span>
              <div className="flex flex-wrap gap-1.5">
                {(product?.compatibility ?? []).slice(0, 4).map(b => (
                  <span key={b} className="text-[9px] font-mono font-bold bg-[#0F2B46]/5 text-[#0F2B46] px-2 py-0.5 rounded">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Showcase Panel (Right 7) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-4">
            {isBlueprint ? (
              <BlueprintViewer product={product} activeImageIndex={activeImageIndex} />
            ) : (
              <div
                className="relative w-full aspect-[4/3] rounded-[32px] bg-white border border-[#0F2B46]/5 shadow-lg flex items-center justify-center p-8 overflow-hidden cursor-grab active:cursor-grabbing group"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseEnter={() => setIsHovered(true)}
              >
                {/* Auto-rotation studio lighting background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent)] pointer-events-none" />
                
                <div 
                  className="w-full h-full relative overflow-hidden flex items-center justify-center"
                  onMouseMove={handleZoomMove}
                  onMouseLeave={handleZoomLeave}
                >
                  <img
                    src={product.images[activeImageIndex]}
                    alt={`${product.name} showcase`}
                    className="max-h-full max-w-full object-contain pointer-events-none transition-transform duration-100"
                    style={{
                      transform: `scale(${zoomScale})`,
                      transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                      filter: 'brightness(1.01) saturate(0.85)'
                    }}
                  />
                </div>

                {/* Hotspot overlays toggles panel */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`p-2.5 rounded-full shadow-sm backdrop-blur-sm transition-all border text-xs flex items-center justify-center ${
                      autoRotate 
                        ? 'bg-[#1D6FA3] text-white border-[#1D6FA3]' 
                        : 'bg-white/80 hover:bg-white text-[#0F2B46] border-slate-200'
                    }`}
                    title={autoRotate ? "Pause Auto-Rotation" : "Start Auto-Rotation"}
                  >
                    {autoRotate ? <Pause size={12} /> : <Play size={12} />}
                  </button>
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="p-2.5 bg-white/80 hover:bg-white text-[#0F2B46] rounded-full shadow-sm backdrop-blur-sm transition-all border border-slate-200"
                    title="Fullscreen Lightbox"
                  >
                    <Maximize2 size={12} />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-slate-400 bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none select-none flex items-center gap-1.5">
                  <Eye size={10} /> Drag to spin 360° {autoRotate && !isHovered && "// Auto Rotating"}
                </div>
              </div>
            )}

            {/* Bottom Controls: Switch to CAD mode & select thumbnails */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-left">
                  {product.imageLabels[activeImageIndex]}
                </p>
                <button
                  onClick={() => setIsBlueprint(!isBlueprint)}
                  className={`px-4 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-wider font-bold transition-all border flex items-center gap-1.5 ${
                    isBlueprint 
                      ? 'bg-[#0EA6A6] text-white border-[#0EA6A6] shadow-sm' 
                      : 'bg-white hover:bg-slate-50 text-[#0EA6A6] border-[#0EA6A6]/30'
                  }`}
                >
                  <Compass size={10} className="animate-spin-slow" />
                  {isBlueprint ? "Normal Mode" : "Blueprint Mode [CAD]"}
                </button>
              </div>

              {/* Thumbnails block selector */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {(product?.images ?? []).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setIsBlueprint(false);
                    }}
                    className={`aspect-square border rounded-xl bg-white p-1.5 transition-all overflow-hidden flex items-center justify-center cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-[#1D6FA3] ring-2 ring-[#1D6FA3]/15' 
                        : 'hover:border-slate-400 border-slate-200'
                    }`}
                  >
                    <img src={img} alt={`${product?.name || 'AC Compressor'} thumbnail ${idx + 1}`} className="max-h-full max-w-full object-contain pointer-events-none" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
