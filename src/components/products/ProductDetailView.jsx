'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Camera,
  MessageSquare,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Zap,
  Thermometer,
  Wrench,
  Building2,
  PackageCheck,
  FileCheck,
  ChevronRight,
  ChevronLeft,
  Eye,
  X,
  Send,
} from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import ProductCard from '../ui/ProductCard';
import ScrollReveal from '../ui/ScrollReveal';
import { resolveImageUrl } from '@/lib/api';

export default function ProductDetailView({
  product,
  allProducts = [],
  backendRelated = [],
}) {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialTab, setQuoteInitialTab] = useState('quote');
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [fullscreenImgIdx, setFullscreenImgIdx] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Fallback safe images array
  const images = useMemo(() => {
    const raw = Array.isArray(product?.images) && product.images.length > 0
      ? product.images
      : ['/ac_compressor.png'];
    return raw.map(resolveImageUrl);
  }, [product?.images]);

  const currentImage = images[selectedImgIdx] || images[0];

  // Open Quote Modal helper
  const handleOpenQuote = (tab = 'quote') => {
    setQuoteInitialTab(tab);
    setIsQuoteOpen(true);
  };

  // Open Fullscreen Image Inspection
  const openFullscreen = (index) => {
    setFullscreenImgIdx(index);
    setIsFullscreenOpen(true);
  };

  // Fullscreen keyboard navigation (Left/Right arrows & Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreenOpen) return;
      if (e.key === 'Escape') {
        setIsFullscreenOpen(false);
      } else if (e.key === 'ArrowRight') {
        setFullscreenImgIdx((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setFullscreenImgIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen, images.length]);

  // Lock body scroll when fullscreen inspection is open
  useEffect(() => {
    if (isFullscreenOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreenOpen]);

  // Scroll listener for desktop sticky enquiry bar (> 450px)
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── DYNAMIC TECHNICAL SPECIFICATIONS BUILDER (ONLY NON-EMPTY FIELDS) ──
  const technicalGroups = useMemo(() => {
    if (!product) return [];
    const groups = [];

    // Group 1: IDENTIFICATION & ARCHITECTURE
    const idRows = [
      { label: 'EQUIPMENT CODE', value: product.code },
      { label: 'MANUFACTURER BRAND', value: product.brand },
      { label: 'MODEL NAME', value: product.name },
      { label: 'COMPRESSOR DESIGN', value: product.type || product.category },
      { label: 'INVENTORY CATEGORY', value: product.category },
      { label: 'CONDITION STANDARD', value: product.condition },
      { label: 'STOCK AVAILABILITY', value: product.availability },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (idRows.length > 0) {
      groups.push({
        number: '01',
        title: 'IDENTIFICATION & ARCHITECTURE',
        rows: idRows,
      });
    }

    // Group 2: ELECTRICAL PARAMETERS
    const electricalSpecs = product.specs?.electrical || {};
    const electricalRows = [
      { label: 'OPERATING VOLTAGE', value: product.voltage || electricalSpecs['Input Voltage'] },
      { label: 'NOMINAL POWER RATING', value: electricalSpecs['Nominal HP'] },
      {
        label: 'RUNNING CURRENT (RLA)',
        value: electricalSpecs['RLA (Running Amps)'] || electricalSpecs['RLA'],
      },
      { label: 'LOCKED ROTOR AMPS (LRA)', value: electricalSpecs['LRA (Locked Rotor)'] },
      { label: 'DRIVE / SPEED CONTROL', value: electricalSpecs['Control'] },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (electricalRows.length > 0) {
      groups.push({
        number: String(groups.length + 1).padStart(2, '0'),
        title: 'ELECTRICAL PARAMETERS',
        rows: electricalRows,
      });
    }

    // Group 3: REFRIGERATION & THERMAL SPECIFICATIONS
    const thermalSpecs = product.specs?.thermal || {};
    const thermalRows = [
      { label: 'PRIMARY REFRIGERANT', value: product.refrigerant },
      { label: 'COOLING CAPACITY', value: thermalSpecs['Cooling Capacity'] },
      { label: 'THERMAL APPLICATION RANGE', value: thermalSpecs['Application'] },
      {
        label: 'OIL CHARGE & SPECIFICATION',
        value: thermalSpecs['Oil Type'] || thermalSpecs['Oil Charge'] || thermalSpecs['Oil Pump'],
      },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (thermalRows.length > 0) {
      groups.push({
        number: String(groups.length + 1).padStart(2, '0'),
        title: 'REFRIGERATION & THERMAL',
        rows: thermalRows,
      });
    }

    // Group 4: MECHANICAL & DISPLACEMENT
    const mechSpecs = product.specs?.mechanical || {};
    const mechRows = [
      { label: 'VOLUMETRIC DISPLACEMENT', value: product.displacement },
      {
        label: 'SUCTION CONNECTION',
        value:
          mechSpecs['Suction Line Size'] ||
          mechSpecs['Suction Connection'] ||
          mechSpecs['Suction Rotolock'] ||
          mechSpecs['Suction Valve'],
      },
      {
        label: 'DISCHARGE CONNECTION',
        value:
          mechSpecs['Discharge Line Size'] ||
          mechSpecs['Discharge Connection'] ||
          mechSpecs['Discharge Rotolock'] ||
          mechSpecs['Discharge Valve'],
      },
      { label: 'NET UNIT WEIGHT', value: mechSpecs['Net Weight'] },
      {
        label: 'MOUNTING FOOTPRINT',
        value: mechSpecs['Mounting Footprint'] || mechSpecs['Mounting'],
      },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (mechRows.length > 0) {
      groups.push({
        number: String(groups.length + 1).padStart(2, '0'),
        title: 'MECHANICAL & PHYSICAL',
        rows: mechRows,
      });
    }

    // Group 5: APPLICATION & INTEGRATION
    const appRows = [
      { label: 'PRIMARY APPLICATION', value: product.application },
      {
        label: 'COMPATIBLE OEM BRANDS',
        value:
          Array.isArray(product.compatibility) && product.compatibility.length > 0
            ? product.compatibility.join(', ')
            : null,
      },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (appRows.length > 0) {
      groups.push({
        number: String(groups.length + 1).padStart(2, '0'),
        title: 'APPLICATION & INTEGRATION',
        rows: appRows,
      });
    }

    return groups;
  }, [product]);

  // ── DYNAMIC RELATED PRODUCTS SELECTION (Prioritized: Type -> App -> Brand) ──
  const related = useMemo(() => {
    const pool = allProducts && allProducts.length > 0 ? allProducts : backendRelated;
    if (!pool || pool.length === 0) return [];

    const candidates = pool.filter(
      (p) => p.id !== product.id && p.code !== product.code
    );

    // Score relevance without fabricating relationships:
    // 1. Same compressor type/category: +3
    // 2. Matching application: +2
    // 3. Same brand: +1
    const scored = candidates.map((cand) => {
      let score = 0;
      if (
        (cand.category && cand.category === product.category) ||
        (cand.type && cand.type === product.type)
      ) {
        score += 3;
      }
      if (cand.application && product.application) {
        const productApps = product.application.toLowerCase().split(',');
        if (
          productApps.some((app) => cand.application.toLowerCase().includes(app.trim()))
        ) {
          score += 2;
        }
      }
      if (cand.brand && cand.brand === product.brand) {
        score += 1;
      }
      return { product: cand, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 4).map((s) => s.product);
  }, [allProducts, backendRelated, product]);

  if (!product) return null;

  const conditionBadgeText = product.condition || product.statusBadge || 'Refurbished';

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A] py-6 sm:py-8 lg:py-10 pb-28 lg:pb-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* ── 1. BREADCRUMB NAVIGATION ── */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-mono text-xs text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-1"
        >
          <Link
            href="/products"
            className="hover:text-[#1D6FA3] flex items-center gap-1.5 font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-[#1D6FA3] rounded px-1"
          >
            <ArrowLeft size={13} />
            <span>COMPRESSOR INVENTORY</span>
          </Link>
          <span className="text-slate-300">/</span>
          {product.brand && (
            <>
              <span className="text-slate-700 font-semibold uppercase">{product.brand}</span>
              <span className="text-slate-300">/</span>
            </>
          )}
          <span className="text-[#1D6FA3] font-bold uppercase tracking-wide truncate max-w-[280px]">
            {product.code || product.name}
          </span>
        </nav>

        {/* ── 2. PRODUCT HERO GRID (Split ~55% Left / ~45% Right) ── */}
        <section aria-label="Product Summary" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT COLUMN: LARGE PRODUCT IMAGE & GALLERY (~55%) ── */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Product Image Container */}
            <div className="group h-80 sm:h-96 lg:h-[440px] bg-[#FAFAFA] border border-slate-200/90 rounded-lg p-6 relative flex flex-col items-center justify-center shadow-xs overflow-hidden select-none">
              
              {/* Top Bar on Image: Brand & Refined Condition Badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200 shadow-xs">
                  {product.brand || 'INDUSTRIAL'}
                </span>

                {conditionBadgeText && (
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs font-semibold text-emerald-800 bg-emerald-50/95 border border-emerald-200 px-2.5 py-1 rounded shadow-xs uppercase tracking-wide">
                    <ShieldCheck size={12} className="text-emerald-600 flex-shrink-0" />
                    <span>{conditionBadgeText}</span>
                  </span>
                )}
              </div>

              {/* Main Compressor Image (Clickable for Fullscreen Inspection) */}
              <div
                onClick={() => openFullscreen(selectedImgIdx)}
                className="w-full h-full flex flex-col items-center justify-center cursor-zoom-in relative z-0"
                role="button"
                tabIndex={0}
                aria-label={`Inspect full size image of ${product.name}`}
                onKeyDown={(e) => e.key === 'Enter' && openFullscreen(selectedImgIdx)}
              >
                <img
                  src={currentImage}
                  alt={`${product.brand || 'Compressor'} ${product.name}`}
                  className="max-h-[290px] sm:max-h-[340px] lg:max-h-[380px] w-auto max-w-[90%] object-contain group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/ac_compressor.png';
                  }}
                />
                {/* Subtle Floor Contact Shadow */}
                <div className="w-44 sm:w-56 h-3 bg-slate-900/10 rounded-full blur-[4px] mt-2 pointer-events-none" />
              </div>

              {/* Hover Inspection Badge */}
              <button
                type="button"
                onClick={() => openFullscreen(selectedImgIdx)}
                className="absolute bottom-3 right-3 z-10 opacity-90 group-hover:opacity-100 transition-opacity font-mono text-[11px] font-semibold bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded border border-slate-200 shadow-xs flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
              >
                <Eye size={13} className="text-[#1D6FA3]" />
                <span>Inspect Fullscreen</span>
              </button>
            </div>

            {/* Thumbnail Navigation Strip (01, 02, 03) */}
            {images.length > 1 && (
              <div
                className="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar"
                role="region"
                aria-label="Image gallery thumbnails"
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImgIdx(idx)}
                    aria-label={`Select compressor photo ${idx + 1}`}
                    className={`h-20 w-24 sm:h-22 sm:w-28 rounded-lg bg-white border p-2 flex flex-col items-center justify-between cursor-pointer transition-all flex-shrink-0 focus:outline-none ${
                      selectedImgIdx === idx
                        ? 'border-[#1D6FA3] ring-2 ring-[#1D6FA3]/30 shadow-xs bg-slate-50'
                        : 'border-slate-200 hover:border-slate-300 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <span className="font-mono text-[10px] font-bold text-slate-400 self-start">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="max-h-[46px] w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/ac_compressor.png';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Technical Verification Guarantee Bar */}
            <div className="bg-slate-100/90 border border-slate-200/90 rounded-lg p-3.5 flex items-start sm:items-center gap-3 text-xs text-slate-700">
              <PackageCheck size={18} className="text-[#1D6FA3] flex-shrink-0 mt-0.5 sm:mt-0" />
              <div className="font-sans leading-snug">
                <strong className="font-mono text-slate-900 font-bold uppercase block text-[11px] tracking-wide">
                  BENCH CERTIFIED & FREIGHT READY
                </strong>
                <span>
                  Inspected, pressure-tested, terminal megger-tested, and nitrogen-sealed for Pan-India commercial dispatch.
                </span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: IDENTITY, QUICK SNAPSHOT & ACTIONS (~45%) ── */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Identity Header */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                <span>{product.brand}</span>
                {product.type && <span className="text-slate-400">• {product.type}</span>}
              </div>

              <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] leading-tight tracking-tight">
                {product.name}
              </h1>

              {/* Prominent Model Code */}
              {product.code && (
                <div className="font-mono text-sm sm:text-base font-bold text-slate-800 tracking-wide uppercase pt-0.5">
                  MODEL: <span className="text-[#1D6FA3]">{product.code}</span>
                </div>
              )}

              {/* Tagline / Subtitle */}
              {product.tagline && (
                <p className="font-mono text-xs font-semibold text-[#0EA6A6] uppercase tracking-wide pt-1">
                  {product.tagline}
                </p>
              )}

              {/* Concise Description */}
              {product.description && (
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed pt-1">
                  {product.description}
                </p>
              )}
            </div>

            {/* Quick Parametric Strip (Only Valid Non-Empty Fields) */}
            <div className="bg-white border border-slate-200/90 rounded-lg p-4 grid grid-cols-2 sm:grid-cols-3 gap-3.5 font-mono text-xs shadow-xs">
              {product.availability && (
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                    AVAILABILITY
                  </span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1.5 pt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    <span className="truncate">{product.availability}</span>
                  </span>
                </div>
              )}

              {product.voltage && (
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                    VOLTAGE
                  </span>
                  <span className="text-slate-800 font-semibold truncate block pt-0.5">
                    {product.voltage}
                  </span>
                </div>
              )}

              {product.refrigerant && (
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                    REFRIGERANT
                  </span>
                  <span className="text-slate-800 font-semibold truncate block pt-0.5">
                    {product.refrigerant}
                  </span>
                </div>
              )}

              {product.displacement && (
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                    DISPLACEMENT
                  </span>
                  <span className="text-slate-800 font-semibold truncate block pt-0.5">
                    {product.displacement}
                  </span>
                </div>
              )}

              {product.type && (
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                    DESIGN TYPE
                  </span>
                  <span className="text-slate-800 font-semibold truncate block pt-0.5">
                    {product.type}
                  </span>
                </div>
              )}

              {conditionBadgeText && (
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                    CONDITION
                  </span>
                  <span className="text-slate-800 font-semibold truncate block pt-0.5">
                    {conditionBadgeText}
                  </span>
                </div>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenQuote('quote')}
                  className="flex-1 min-h-[48px] py-3.5 px-6 rounded bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-all active:scale-[0.99]"
                >
                  <Send size={14} className="rotate-45" />
                  <span>REQUEST PRICE & QUOTE</span>
                </button>

                <a
                  href={`https://wa.me/919920691707?text=Hello%2C%20I%20am%20inquiring%20about%20compressor%20model%20${encodeURIComponent(
                    product.code || product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] py-3.5 px-6 rounded bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs active:scale-[0.99]"
                >
                  <MessageSquare size={16} />
                  <span>WHATSAPP DESK</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-mono px-1">
                <span className="flex items-center gap-1.5">
                  <Phone size={12} className="text-[#1D6FA3]" />
                  <span>Direct Technical Desk: +91 99206 91707</span>
                </span>
                <span>Pan-India Freight Sourcing</span>
              </div>
            </div>

            {/* Nameplate Sourcing Box */}
            <div className="bg-[#0A192F] text-white rounded-lg p-5 space-y-3 border border-white/10 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />
              <div className="relative z-10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#0EA6A6] font-mono text-xs font-bold uppercase tracking-wider">
                  <Camera size={15} />
                  <span>NOT SURE THIS IS THE RIGHT MODEL?</span>
                </div>
                <p className="text-slate-300 text-xs font-sans leading-relaxed">
                  Send us your compressor nameplate photo and our technical desk will verify mounting footprint, terminal configuration, and displacement match.
                </p>
                <div className="pt-1 flex flex-col sm:flex-row items-stretch gap-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => handleOpenQuote('photo')}
                    className="flex-1 py-2 px-3 bg-[#0EA6A6] hover:bg-[#0c8e8e] text-white font-bold uppercase rounded flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                  >
                    <Camera size={13} />
                    <span>Upload Nameplate</span>
                  </button>
                  <a
                    href={`https://wa.me/919920691707?text=Hello%2C%20I%20have%20a%20nameplate%20photo%20for%20verification%20related%20to%20${encodeURIComponent(
                      product.code || product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold uppercase rounded flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare size={13} className="text-[#0EA6A6]" />
                    <span>WhatsApp Engineer</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ── 3. TECHNICAL DATASHEET SPECIFICATIONS (Editorial Open Tables) ── */}
        <section aria-label="Technical Specifications" className="bg-white border border-slate-200/90 rounded-lg p-6 sm:p-8 space-y-8 shadow-xs">
          
          <div className="border-b border-slate-200/90 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                ENGINEERING DATASHEET
              </div>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#0A192F] uppercase tracking-tight">
                Technical Specifications
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-sans mt-0.5">
                Verified parameters available for this compressor model.
              </p>
            </div>
            {product.code && (
              <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-3.5 py-1.5 rounded border border-slate-200 self-start sm:self-auto">
                RECORD ID: {product.code}
              </span>
            )}
          </div>

          {/* Structured Editorial Technical Tables (Open Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {technicalGroups.map((group) => (
              <div key={group.number} className="space-y-2">
                {/* Technical Group Header */}
                <div className="font-mono text-xs font-bold text-[#1D6FA3] tracking-widest uppercase pb-2 border-b-2 border-[#1D6FA3] flex items-center justify-between">
                  <span>[{group.number}] {group.title}</span>
                  <span className="text-[10px] text-slate-400">BENCH VERIFIED</span>
                </div>

                {/* Technical Rows */}
                <div className="divide-y divide-slate-200/80 font-mono">
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                    >
                      <span className="text-slate-500 text-xs uppercase font-medium tracking-wider flex-shrink-0">
                        {row.label}
                      </span>
                      <span className="text-slate-900 text-sm sm:text-base font-semibold text-left sm:text-right break-words max-w-full sm:max-w-[65%]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ── 4. CONDITION & BENCH VERIFICATION PROTOCOL (Section 11) ── */}
        <section aria-label="Condition and Verification" className="bg-white border border-slate-200/90 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
          
          <div className="border-b border-slate-200/90 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                QUALITY ASSURANCE
              </div>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F] uppercase tracking-tight">
                Condition & Verification Protocol
              </h2>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded uppercase">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>{conditionBadgeText}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
            {/* Step 01 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-2">
              <div className="text-[#1D6FA3] font-bold text-xs uppercase tracking-widest flex items-center justify-between">
                <span>01 / MECHANICAL INSPECTION</span>
                <CheckCircle2 size={15} className="text-emerald-600" />
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Scroll flank and bearing clearance tolerance checks, rotor shaft runout measurement, and internal sump inspection.
              </p>
            </div>

            {/* Step 02 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-2">
              <div className="text-[#1D6FA3] font-bold text-xs uppercase tracking-widest flex items-center justify-between">
                <span>
                  02 /{' '}
                  {product.condition?.toUpperCase().includes('PRESSURE')
                    ? 'PRESSURE & COIL TESTING'
                    : product.condition?.toUpperCase().includes('LEAK')
                    ? 'HELIUM LEAK TESTING'
                    : product.condition?.toUpperCase().includes('BENCH')
                    ? 'BENCH DYNAMIC RUN-UP'
                    : 'COIL & RUN-UP TESTING'}
                </span>
                <CheckCircle2 size={15} className="text-emerald-600" />
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                {product.condition?.includes('Pressure')
                  ? 'High-pressure nitrogen leak test to 450 PSI. Motor winding insulation resistance (megger test > 100MΩ).'
                  : product.condition?.includes('Leak')
                  ? 'Submerged dual-stage helium and nitrogen pressure containment test verifying casing hermetic seal.'
                  : product.condition?.includes('Bench')
                  ? 'Operational bench run-up test. Acoustic sound measurement and balanced 3-phase amperage confirmation.'
                  : 'Multi-stage coil impedance verification, electrical surge withstand check, and mechanical run-up test.'}
              </p>
            </div>

            {/* Step 03 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-2">
              <div className="text-[#1D6FA3] font-bold text-xs uppercase tracking-widest flex items-center justify-between">
                <span>03 / DISPATCH SEALING</span>
                <CheckCircle2 size={15} className="text-emerald-600" />
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Dehydration under deep vacuum, oil charge verified, and sealed with dry nitrogen holding charge for freight transit.
              </p>
            </div>
          </div>

        </section>

        {/* ── 5. SUITABLE APPLICATION & EQUIPMENT FRAMES (Section 13) ── */}
        {(product.application ||
          (product.compatDetails && Object.keys(product.compatDetails).length > 0)) && (
          <section aria-label="Suitable Applications" className="bg-white border border-slate-200/90 rounded-lg p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="border-b border-slate-200/90 pb-3 flex items-center justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                  SYSTEM INTEGRATION
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F] uppercase tracking-tight">
                  Application & Equipment Compatibility
                </h2>
              </div>
              <Building2 size={20} className="text-[#1D6FA3] hidden sm:block" />
            </div>

            {product.application && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-1">
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  TARGET APPLICATION:
                </span>
                <p className="font-sans text-sm sm:text-base font-semibold text-slate-900">
                  {product.application}
                </p>
              </div>
            )}

            {product.compatDetails && Object.keys(product.compatDetails).length > 0 && (
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  MATCHED OEM EQUIPMENT FRAMES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(product.compatDetails).map(([brandName, details]) => (
                    <div
                      key={brandName}
                      className="p-3.5 bg-slate-50 border border-slate-200 rounded flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="font-mono text-xs uppercase font-bold text-slate-900 block">
                          {brandName}
                        </span>
                        <span className="font-sans text-xs text-slate-600 leading-snug block">
                          {details}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ── 6. RELATED PRODUCTS ("YOU MAY ALSO NEED") (Section 14 & 15) ── */}
        {related.length > 0 && (
          <section aria-label="Related Products" className="space-y-5 pt-2">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <div className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                  INVENTORY ALTERNATIVES
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F] uppercase tracking-tight">
                  YOU MAY ALSO NEED
                </h2>
                <p className="text-slate-500 text-xs font-sans mt-0.5">
                  Compatible compressor models matched by type, capacity, or OEM application.
                </p>
              </div>
              <Link
                href="/products"
                className="font-mono text-xs text-[#1D6FA3] font-bold hover:underline flex items-center gap-1"
              >
                <span>View All Inventory</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((relProd, idx) => (
                <ScrollReveal key={relProd.id} delay={idx * 50} direction="up" distance={12}>
                  <ProductCard product={relProd} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* ── 7. FULLSCREEN IMAGE INSPECTION MODAL (Section 6) ── */}
      {isFullscreenOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-[#0A192F]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 transition-opacity duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen Product Inspection"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsFullscreenOpen(false);
          }}
        >
          {/* Inspection Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0EA6A6]">
                {product.brand}
              </span>
              <span className="text-white/30">•</span>
              <span className="font-mono text-xs text-white/90 uppercase">
                {product.code || product.name}
              </span>
              <span className="text-white/30">•</span>
              <span className="font-mono text-xs text-slate-400">
                [ {String(fullscreenImgIdx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} ]
              </span>
            </div>
            
            <button
              type="button"
              onClick={() => setIsFullscreenOpen(false)}
              className="p-2 text-white/70 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close fullscreen inspection"
            >
              <X size={20} />
            </button>
          </div>

          {/* Centered Large Inspection Image */}
          <div className="relative flex-grow flex items-center justify-center p-4">
            {images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setFullscreenImgIdx((prev) => (prev - 1 + images.length) % images.length)
                }
                className="absolute left-2 sm:left-6 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <img
              src={images[fullscreenImgIdx]}
              alt={`${product.name} large view`}
              className="max-h-[70vh] max-w-[90vw] object-contain select-none shadow-2xl transition-transform duration-200"
            />

            {images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setFullscreenImgIdx((prev) => (prev + 1) % images.length)
                }
                className="absolute right-2 sm:right-6 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-3 py-2 border-t border-white/10">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFullscreenImgIdx(idx)}
                  className={`w-16 h-14 rounded bg-white p-1 flex items-center justify-center cursor-pointer transition-all ${
                    fullscreenImgIdx === idx
                      ? 'ring-2 ring-[#0EA6A6] opacity-100 scale-105'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Inspect photo ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── 8. DESKTOP STICKY ENQUIRY BAR (Section 8) ── */}
      {showStickyBar && (
        <div className="hidden lg:flex fixed bottom-0 left-0 right-0 z-40 bg-[#0A192F]/95 backdrop-blur-md border-t border-white/10 px-8 py-3.5 items-center justify-between shadow-2xl animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center gap-4">
            <img
              src={currentImage}
              alt=""
              className="w-11 h-11 object-contain bg-white rounded p-0.5 border border-white/20 flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold text-white uppercase">{product.brand}</span>
                {product.code && <span className="text-[#0EA6A6]">• {product.code}</span>}
                {conditionBadgeText && (
                  <span className="text-emerald-400 text-[11px]">• {conditionBadgeText}</span>
                )}
              </div>
              <p className="text-slate-300 text-xs truncate max-w-lg font-sans">
                {product.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={`https://wa.me/919920691707?text=Hello%2C%20I%20am%20inquiring%20about%20compressor%20model%20${encodeURIComponent(
                product.code || product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Desk</span>
            </a>
            <button
              type="button"
              onClick={() => handleOpenQuote('quote')}
              className="px-5 py-2 bg-[#1D6FA3] hover:bg-[#165680] text-white rounded font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Send size={13} className="rotate-45" />
              <span>Request Price & Quote</span>
            </button>
          </div>
        </div>
      )}

      {/* ── 9. MOBILE STICKY BOTTOM ACTION BAR (Section 18) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 flex items-center gap-2.5 lg:hidden shadow-lg mb-[env(safe-area-inset-bottom)]">
        <a
          href={`https://wa.me/919920691707?text=Hello%2C%20I%20am%20inquiring%20about%20compressor%20model%20${encodeURIComponent(
            product.code || product.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] px-3.5 py-2.5 rounded bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors active:scale-[0.99]"
        >
          <MessageSquare size={15} />
          <span>WHATSAPP</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenQuote('quote')}
          className="flex-1 min-h-[44px] px-4 py-2.5 rounded bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-[0.99] cursor-pointer"
        >
          <Send size={13} className="rotate-45" />
          <span>GET QUOTE</span>
        </button>
      </div>

      {/* Shared Inquiry Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={product}
        initialTab={quoteInitialTab}
      />
    </div>
  );
}
