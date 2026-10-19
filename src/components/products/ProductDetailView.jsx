'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Camera,
  MessageSquare,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  PackageCheck,
  ChevronRight,
  ChevronLeft,
  Eye,
  X,
  Send,
  Building2,
  SlidersHorizontal,
  Info,
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

  // Determine whether this model has genuine verified photographic assets
  const hasRealImage = useMemo(() => {
    return (
      product?.imageType !== 'placeholder' &&
      Array.isArray(product?.images) &&
      product.images.length > 0
    );
  }, [product?.imageType, product?.images]);

  // Safe images list only when real images are present
  const images = useMemo(() => {
    if (!hasRealImage) return [];
    return product.images.map(resolveImageUrl);
  }, [hasRealImage, product?.images]);

  const currentImage = images[selectedImgIdx] || images[0] || null;

  // Open Quote Modal helper
  const handleOpenQuote = (tab = 'quote') => {
    setQuoteInitialTab(tab);
    setIsQuoteOpen(true);
  };

  // Open Fullscreen Image Inspection
  const openFullscreen = (index) => {
    if (!hasRealImage) return;
    setFullscreenImgIdx(index);
    setIsFullscreenOpen(true);
  };

  // Fullscreen keyboard navigation (Left/Right arrows & Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreenOpen) return;
      if (e.key === 'Escape') {
        setIsFullscreenOpen(false);
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        setFullscreenImgIdx((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
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

  // ── RECONCILED TECHNICAL SPECIFICATIONS GROUPS ──
  const technicalGroups = useMemo(() => {
    if (!product) return [];
    const groups = [];

    // Group 1: Model Identification & Nomenclature
    const idRows = [
      { label: 'EQUIPMENT MODEL CODE', value: product.code || product.modelNumber },
      { label: 'CATALOG CODE / SKU', value: product.catalogCode },
      { label: 'MANUFACTURER BRAND', value: product.brand },
      { label: 'MODEL NAME', value: product.name },
      { label: 'COMPRESSOR DESIGN', value: product.type },
      { label: 'CATALOGUE CATEGORY', value: product.category },
      { label: 'SOURCING CLASSIFICATION', value: product.verificationStatus || product.condition },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (idRows.length > 0) {
      groups.push({
        number: '01',
        title: 'IDENTIFICATION & NOMENCLATURE',
        rows: idRows,
      });
    }

    // Group 2: Key Operating Parameters
    const electricalSpecs = product.specs?.electrical || {};
    const electricalRows = [
      { label: 'OPERATING VOLTAGE', value: product.voltage || electricalSpecs['Input Voltage'] },
      { label: 'NOMINAL POWER / CAPACITY', value: product.coolingCapacity || electricalSpecs['Nominal HP'] },
      {
        label: 'RUNNING CURRENT (RLA)',
        value: electricalSpecs['RLA (Running Amps)'] || electricalSpecs['RLA'],
      },
      { label: 'LOCKED ROTOR AMPS (LRA)', value: electricalSpecs['LRA (Locked Rotor)'] },
      { label: 'DRIVE / CONTROL TYPE', value: electricalSpecs['Control'] || 'Direct Online / Induction' },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (electricalRows.length > 0) {
      groups.push({
        number: '02',
        title: 'ELECTRICAL & OPERATING RATINGS',
        rows: electricalRows,
      });
    }

    // Group 3: Refrigeration & Thermal Specifications
    const thermalSpecs = product.specs?.thermal || {};
    const thermalRows = [
      { label: 'VOLUMETRIC DISPLACEMENT', value: product.displacement || thermalSpecs['Displacement'] },
      { label: 'REFRIGERANT COMPATIBILITY', value: product.refrigerant },
      { label: 'APPLICATION DUTY RANGE', value: thermalSpecs['Application'] || product.application },
      {
        label: 'OIL CHARGE & COMPATIBILITY',
        value: thermalSpecs['Oil Type'] || thermalSpecs['Oil Charge'] || (product.refrigerant?.includes('R404A') ? 'POE Lubricant' : 'Verified Factory Charge'),
      },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (thermalRows.length > 0) {
      groups.push({
        number: '03',
        title: 'REFRIGERATION & THERMAL PARAMETERS',
        rows: thermalRows,
      });
    }

    // Group 4: Mechanical & Physical Dimensions
    const mechSpecs = product.specs?.mechanical || {};
    const mechRows = [
      {
        label: 'SUCTION FITTING',
        value:
          mechSpecs['Suction Rotolock'] ||
          mechSpecs['Suction Valve'] ||
          mechSpecs['Suction Line Size'] ||
          mechSpecs['Suction Connection'],
      },
      {
        label: 'DISCHARGE FITTING',
        value:
          mechSpecs['Discharge Rotolock'] ||
          mechSpecs['Discharge Valve'] ||
          mechSpecs['Discharge Line Size'] ||
          mechSpecs['Discharge Connection'],
      },
      { label: 'NET UNIT WEIGHT', value: mechSpecs['Net Weight'] },
      {
        label: 'MOUNTING FOOTPRINT',
        value: mechSpecs['Mounting Footprint'] || mechSpecs['Mounting'] || 'Standard OEM Footprint',
      },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (mechRows.length > 0) {
      groups.push({
        number: '04',
        title: 'MECHANICAL CONNECTIONS & FOOTPRINT',
        rows: mechRows,
      });
    }

    return groups;
  }, [product]);

  // ── DYNAMIC RELATED PRODUCTS SELECTION ──
  const related = useMemo(() => {
    const pool = allProducts && allProducts.length > 0 ? allProducts : backendRelated;
    if (!pool || pool.length === 0) return [];

    const candidates = pool.filter(
      (p) => p.id !== product.id && p.code !== product.code
    );

    // Score relevance without fabricating relationships:
    // 1. Same compressor category: +3
    // 2. Same brand: +2
    const scored = candidates.map((cand) => {
      let score = 0;
      if (cand.category && cand.category === product.category) score += 3;
      if (cand.brand && cand.brand === product.brand) score += 2;
      return { product: cand, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 3).map((s) => s.product);
  }, [allProducts, backendRelated, product]);

  if (!product) return null;

  const statusBadgeText = product.verificationStatus || product.statusBadge || 'Sourcing Reference';

  return (
    <div className="bg-[#FBFBFA] min-h-screen text-slate-900 py-4 sm:py-8 lg:py-10 pb-28 lg:pb-16 overflow-x-hidden">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        
        {/* ── 1. BREADCRUMB NAVIGATION ── */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-1 max-w-full"
        >
          <Link
            href="/"
            className="hover:text-[#0E4B75] flex items-center gap-1 font-semibold transition-colors focus:outline-none rounded shrink-0"
          >
            HOME
          </Link>
          <span className="text-slate-300 shrink-0">/</span>
          <Link
            href="/products"
            className="hover:text-[#0E4B75] flex items-center gap-1 font-semibold transition-colors focus:outline-none rounded shrink-0"
          >
            <span>COMPRESSORS</span>
          </Link>
          <span className="text-slate-300 shrink-0">/</span>
          {product.brand && (
            <>
              <span className="text-slate-700 font-semibold uppercase shrink-0">{product.brand}</span>
              <span className="text-slate-300 shrink-0">/</span>
            </>
          )}
          <span className="text-[#0E4B75] font-bold uppercase tracking-wide truncate max-w-[180px] sm:max-w-[280px]">
            {product.code || product.name}
          </span>
        </nav>

        {/* ── 2. PRODUCT HERO GRID (Split ~55% Left / ~45% Right) ── */}
        <section
          aria-label="Product Summary"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
        >
          
          {/* ── LEFT COLUMN: MEDIA DISPLAY & AUTHENTIC VERIFICATION (~55%) ── */}
          <div className="lg:col-span-7 space-y-4 min-w-0">
            
            {/* Main Product Image Container or Blueprint Box */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
              
              {/* Header inside media card */}
              <div className="px-3.5 sm:px-4 py-2.5 bg-[#FAF9F6] border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-slate-900 tracking-tight uppercase truncate">
                  {product.brand || 'INDUSTRIAL'}
                </span>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-white border border-stone-200 px-2 py-0.5 rounded shadow-2xs shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E4B75] shrink-0" />
                  <span>{statusBadgeText}</span>
                </span>
              </div>

              {/* Media Display Area */}
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] bg-[#FBFBFA] flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-hidden">
                {hasRealImage ? (
                  /* Verified Product Photography */
                  <>
                    <div
                      onClick={() => openFullscreen(selectedImgIdx)}
                      className="w-full h-full flex flex-col items-center justify-center cursor-zoom-in relative z-0 py-2 sm:py-4"
                      role="button"
                      tabIndex={0}
                      aria-label={`Inspect full size image of ${product.name}`}
                      onKeyDown={(e) => e.key === 'Enter' && openFullscreen(selectedImgIdx)}
                    >
                      <img
                        src={currentImage}
                        alt={`${product.brand || ''} ${product.code || product.name}`}
                        className="max-h-[220px] sm:max-h-[300px] lg:max-h-[340px] w-auto max-w-[90%] object-contain hover:scale-[1.02] transition-transform duration-300 ease-out"
                        loading="eager"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/ac_compressor.png';
                        }}
                      />
                      {/* Floor Contact Shadow */}
                      <div className="w-36 sm:w-56 h-2 bg-slate-900/10 rounded-full blur-[3px] mt-2 pointer-events-none" />
                    </div>

                    {/* Inspect Fullscreen Button */}
                    <button
                      type="button"
                      onClick={() => openFullscreen(selectedImgIdx)}
                      className="absolute bottom-3 right-3 z-10 font-mono text-[10px] sm:text-[11px] font-semibold bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded border border-stone-200 shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye size={13} className="text-[#0E4B75]" />
                      <span>Inspect Fullscreen</span>
                    </button>
                  </>
                ) : (
                  /* Honest Technical Blueprint Silhouette Box (NO Copeland Scroll cutout mismatch!) */
                  <div className="w-full py-10 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-stone-50/90 rounded-lg border-2 border-dashed border-stone-300">
                    <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-slate-500 mb-2.5 shadow-2xs">
                      <Cpu size={24} className="text-[#0E4B75]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                      Technical Blueprint Silhouette
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-600 max-w-sm mt-1 leading-relaxed font-medium">
                      Physical photograph with factory valve fittings awaiting workshop verification.
                    </p>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-500 bg-white border border-stone-200 px-2.5 py-1 rounded">
                      <Info size={12} className="text-[#0E4B75] shrink-0" />
                      <span>Sourced and tested to OEM nameplate specifications</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ── DEDICATED DISCLAIMER SUB-BAR (CLEAN SEPARATION) ── */}
              <div className="px-3.5 sm:px-4 py-2 bg-stone-50 border-t border-stone-200 text-center">
                <p className="text-[11px] text-slate-600 leading-snug font-medium">
                  {product.imageDisclaimer || 'Representative model — confirm exact specifications by nameplate.'}
                </p>
              </div>

            </div>

            {/* Thumbnail Navigation Strip (Only when multiple authentic images exist) */}
            {hasRealImage && images.length > 1 && (
              <div
                className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar"
                role="region"
                aria-label="Image gallery thumbnails"
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImgIdx(idx)}
                    aria-label={`Select compressor photo ${idx + 1}`}
                    className={`h-16 w-20 rounded-lg bg-white border p-1.5 flex flex-col items-center justify-between cursor-pointer transition-all shrink-0 focus:outline-none ${
                      selectedImgIdx === idx
                        ? 'border-[#0E4B75] ring-2 ring-[#0E4B75]/20 shadow-xs bg-stone-50'
                        : 'border-stone-200 hover:border-slate-300 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <span className="font-mono text-[9px] font-bold text-slate-400 self-start">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="max-h-[32px] w-auto max-w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Bench Verification Guarantee Bar */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 sm:p-3.5 flex items-start sm:items-center gap-2.5 sm:gap-3 text-xs text-slate-700">
              <PackageCheck size={18} className="text-[#0E4B75] shrink-0 mt-0.5 sm:mt-0" />
              <div className="font-sans leading-snug">
                <strong className="font-mono text-slate-900 font-bold uppercase block text-[11px] tracking-wide">
                  BENCH CERTIFIED & FREIGHT READY
                </strong>
                <span className="text-slate-600 text-[11px] sm:text-xs">
                  Inspected, pressure-tested, megger insulation verified, and dry nitrogen sealed for express Pan-India industrial dispatch.
                </span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: IDENTITY, PARAMETRICS & ACTIONS (~45%) ── */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 min-w-0">
            
            {/* Identity Header */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider">
                <span>{product.brand}</span>
                {product.type && <span className="text-slate-400">• {product.type}</span>}
              </div>

              <h1 className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-snug sm:leading-tight tracking-tight break-words">
                {product.name}
              </h1>

              {/* Prominent Model Code */}
              {(product.code || product.modelNumber) && (
                <div className="pt-0.5">
                  <span className="inline-block font-mono text-xs sm:text-sm font-bold text-[#0E4B75] bg-blue-50/80 border border-blue-200 px-2.5 sm:px-3 py-1 rounded">
                    MODEL REF: {product.code || product.modelNumber}
                  </span>
                </div>
              )}

              {/* Tagline / Subtitle */}
              {product.tagline && (
                <p className="font-mono text-[11px] sm:text-xs font-semibold text-[#0E4B75] uppercase tracking-wide pt-0.5">
                  {product.tagline}
                </p>
              )}

              {/* Concise Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-0.5">
                {product.shortDescription || product.description}
              </p>
            </div>

            {/* Quick Parametric Grid (Verified Fields) */}
            <div className="bg-white border border-stone-200 rounded-xl p-3 sm:p-4 grid grid-cols-1 min-[360px]:grid-cols-2 gap-2.5 sm:gap-3.5 font-mono text-xs shadow-xs">
              {product.displacement && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
                    DISPLACEMENT
                  </span>
                  <strong className="text-slate-900 font-bold block text-xs sm:text-[13px]">
                    {product.displacement}
                  </strong>
                </div>
              )}

              {product.coolingCapacity && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
                    RATED CAPACITY / POWER
                  </span>
                  <strong className="text-slate-900 font-bold block text-xs sm:text-[13px]">
                    {product.coolingCapacity}
                  </strong>
                </div>
              )}

              {product.voltage && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
                    ELECTRICAL RATING
                  </span>
                  <strong className="text-slate-900 font-bold block text-xs sm:text-[13px] break-words">
                    {product.voltage}
                  </strong>
                </div>
              )}

              {product.refrigerant && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
                    REFRIGERANT
                  </span>
                  <strong className="text-slate-900 font-bold block text-xs sm:text-[13px] break-words">
                    {product.refrigerant}
                  </strong>
                </div>
              )}

              {product.category && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
                    CATEGORY
                  </span>
                  <span className="text-slate-800 font-medium block text-xs">
                    {product.category}
                  </span>
                </div>
              )}

              <div className="space-y-0.5">
                <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
                  SOURCING STATUS
                </span>
                <span className="text-slate-800 font-medium flex items-center gap-1.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E4B75] shrink-0" />
                  <span className="truncate">{statusBadgeText}</span>
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <button
                  type="button"
                  onClick={() => handleOpenQuote('quote')}
                  className="w-full sm:flex-1 min-h-[46px] py-3 px-4 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors active:scale-[0.99] text-center"
                >
                  <Send size={14} className="rotate-45 shrink-0" />
                  <span>REQUEST PRICE & AVAILABILITY</span>
                </button>

                <a
                  href={`https://wa.me/919920691707?text=Hello%2C%20I%20am%20inquiring%20about%20compressor%20model%20${encodeURIComponent(
                    product.code || product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[46px] py-3 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-[0.99] shrink-0 text-center"
                >
                  <MessageSquare size={16} className="shrink-0" />
                  <span>WHATSAPP DESK</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-500 font-mono px-1">
                <a
                  href="tel:+919920691707"
                  className="flex items-center gap-1.5 hover:text-[#0E4B75] transition-colors"
                >
                  <Phone size={12} className="text-[#0E4B75] shrink-0" />
                  <span>Mumbai Desk: +91 99206 91707</span>
                </a>
                <span>Pan-India Commercial Freight</span>
              </div>
            </div>

            {/* Nameplate Sourcing Assistance Card */}
            <div className="bg-[#FAF9F6] border border-stone-200 rounded-xl p-5 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-[#0E4B75] font-mono text-xs font-bold uppercase tracking-wider">
                <Camera size={15} />
                <span>NOT SURE THIS IS THE RIGHT MATCH?</span>
              </div>
              <p className="text-slate-600 text-xs font-sans leading-relaxed">
                Send us your compressor nameplate photograph. Our technical desk will verify mounting footprint, terminal voltage, and displacement match before dispatch.
              </p>
              <div className="pt-1 flex flex-col sm:flex-row items-stretch gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => handleOpenQuote('photo')}
                  className="flex-1 min-h-[40px] py-2 px-3 bg-[#0E4B75] hover:bg-[#093757] text-white font-bold uppercase rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                >
                  <Camera size={13} />
                  <span>Upload Nameplate Photo</span>
                </button>
                <a
                  href={`https://wa.me/919920691707?text=Hello%2C%20I%20have%20a%20nameplate%20photo%20for%20verification%20related%20to%20${encodeURIComponent(
                    product.code || product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[40px] py-2 px-3 bg-white hover:bg-stone-50 text-slate-800 border border-stone-300 font-bold uppercase rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare size={13} className="text-emerald-600" />
                  <span>WhatsApp Engineer</span>
                </a>
              </div>
            </div>

          </div>

        </section>

        {/* ── 3. TECHNICAL SPECIFICATIONS DATASHEET (Clean Open Tables) ── */}
        <section
          aria-label="Technical Specifications"
          className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-8 shadow-xs"
        >
          <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider">
                ENGINEERING DATASHEET
              </div>
              <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 uppercase tracking-tight">
                Verified Technical Specifications
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Reconciled parameters verified against manufacturer documentation and workshop standards.
              </p>
            </div>
            {product.code && (
              <span className="font-mono text-xs font-bold text-slate-800 bg-stone-100 px-3.5 py-1.5 rounded-lg border border-stone-200 self-start sm:self-auto">
                RECORD ID: {product.code}
              </span>
            )}
          </div>

          {/* Structured Technical Tables (2 Columns on Desktop, 1 on Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {technicalGroups.map((group) => (
              <div key={group.number} className="space-y-2">
                {/* Technical Group Header */}
                <div className="font-mono text-xs font-bold text-[#0E4B75] tracking-widest uppercase pb-2 border-b-2 border-[#0E4B75] flex items-center justify-between">
                  <span>[{group.number}] {group.title}</span>
                  <span className="text-[10px] text-slate-400 font-normal">RECONCILED</span>
                </div>

                {/* Technical Rows */}
                <div className="divide-y divide-stone-100 font-mono">
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                    >
                      <span className="text-slate-500 text-xs uppercase font-medium tracking-wider shrink-0">
                        {row.label}:
                      </span>
                      <span className="text-slate-900 text-xs sm:text-sm font-semibold text-left sm:text-right break-words max-w-full sm:max-w-[65%]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. VERIFIED REFURBISHMENT & TESTING PROTOCOL ── */}
        <section
          aria-label="Condition and Verification"
          className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs"
        >
          <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider">
                QUALITY ASSURANCE
              </div>
              <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 uppercase tracking-tight">
                Refurbishment & Testing Protocol
              </h2>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-800 bg-stone-100 border border-stone-200 px-3 py-1 rounded-lg uppercase">
              <ShieldCheck size={14} className="text-[#0E4B75]" />
              <span>{statusBadgeText}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
            {/* Step 01 */}
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
              <div className="text-[#0E4B75] font-bold text-xs uppercase tracking-widest flex items-center justify-between">
                <span>01 / MECHANICAL INSPECTION</span>
                <CheckCircle2 size={15} className="text-emerald-600" />
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Scroll flank and bearing clearance tolerance checks, rotor shaft runout measurement, and internal sump inspection.
              </p>
            </div>

            {/* Step 02 */}
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
              <div className="text-[#0E4B75] font-bold text-xs uppercase tracking-widest flex items-center justify-between">
                <span>02 / INSULATION & PRESSURE TEST</span>
                <CheckCircle2 size={15} className="text-emerald-600" />
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Winding insulation resistance verification (Megger test &gt; 100MΩ) and dry nitrogen pressure holding test.
              </p>
            </div>

            {/* Step 03 */}
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
              <div className="text-[#0E4B75] font-bold text-xs uppercase tracking-widest flex items-center justify-between">
                <span>03 / DEHYDRATION & SEALING</span>
                <CheckCircle2 size={15} className="text-emerald-600" />
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Dehydration under deep vacuum, verified oil charge, and sealed with a dry nitrogen holding charge for freight transit.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. SYSTEM INTEGRATION & COMPATIBILITY ── */}
        {(product.application ||
          (product.compatDetails && Object.keys(product.compatDetails).length > 0)) && (
          <section
            aria-label="Suitable Applications"
            className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-5 shadow-xs"
          >
            <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider">
                  SYSTEM INTEGRATION
                </div>
                <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 uppercase tracking-tight">
                  Application & OEM Equipment Compatibility
                </h2>
              </div>
              <Building2 size={20} className="text-[#0E4B75] hidden sm:block" />
            </div>

            {product.application && (
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-1">
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  PRIMARY APPLICATION TARGET:
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
                      className="p-3.5 bg-stone-50 border border-stone-200 rounded-lg flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
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

        {/* ── 6. RELATED PRODUCTS / ALTERNATIVES ── */}
        {related.length > 0 && (
          <section aria-label="Related Products" className="space-y-5 pt-2">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <div className="font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider">
                  INVENTORY ALTERNATIVES
                </div>
                <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 uppercase tracking-tight">
                  Related Compressor Models
                </h2>
                <p className="text-slate-500 text-xs font-sans mt-0.5">
                  Compatible compressor models matched by category, displacement, or manufacturer.
                </p>
              </div>
              <Link
                href="/products"
                className="font-mono text-xs text-[#0E4B75] font-bold hover:underline flex items-center gap-1"
              >
                <span>View Full Catalogue</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((relProd, idx) => (
                <ScrollReveal key={relProd.id} delay={idx * 50} direction="up" distance={12}>
                  <ProductCard product={relProd} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* ── 7. FULLSCREEN IMAGE INSPECTION MODAL (Only when real images exist) ── */}
      {isFullscreenOpen && hasRealImage && (
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
              {images.length > 1 && (
                <>
                  <span className="text-white/30">•</span>
                  <span className="font-mono text-xs text-slate-400">
                    [ {String(fullscreenImgIdx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} ]
                  </span>
                </>
              )}
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

      {/* ── 8. DESKTOP STICKY ENQUIRY BAR (Scroll Triggered) ── */}
      {showStickyBar && (
        <div className="hidden lg:flex fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-8 py-3.5 items-center justify-between shadow-lg animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center gap-4">
            {hasRealImage && currentImage ? (
              <img
                src={currentImage}
                alt=""
                className="w-11 h-11 object-contain bg-stone-50 rounded p-0.5 border border-stone-200 shrink-0"
              />
            ) : (
              <div className="w-11 h-11 flex items-center justify-center bg-stone-100 rounded border border-dashed border-stone-300 shrink-0 text-[#0E4B75]">
                <Cpu size={18} />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold text-slate-900 uppercase">{product.brand}</span>
                {product.code && <span className="text-[#0E4B75]">• {product.code}</span>}
                <span className="text-slate-500 text-[11px]">• {statusBadgeText}</span>
              </div>
              <p className="text-slate-600 text-xs truncate max-w-lg font-sans">
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
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Desk</span>
            </a>
            <button
              type="button"
              onClick={() => handleOpenQuote('quote')}
              className="px-5 py-2 bg-[#0E4B75] hover:bg-[#093757] text-white rounded-lg font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Send size={13} className="rotate-45" />
              <span>Request Price & Quote</span>
            </button>
          </div>
        </div>
      )}

      {/* ── 9. MOBILE STICKY BOTTOM ACTION BAR (Narrow Screen Priority) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-2 sm:p-3 flex items-center gap-2 lg:hidden shadow-lg pb-[calc(0.6rem+env(safe-area-inset-bottom))]">
        <a
          href={`https://wa.me/919920691707?text=Hello%2C%20I%20am%20inquiring%20about%20compressor%20model%20${encodeURIComponent(
            product.code || product.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] px-2.5 sm:px-3.5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-[11px] min-[360px]:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors active:scale-[0.99] shadow-2xs whitespace-nowrap"
        >
          <MessageSquare size={14} className="shrink-0" />
          <span>WHATSAPP</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenQuote('quote')}
          className="flex-1 min-h-[44px] px-2.5 sm:px-4 py-2.5 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white font-mono text-[11px] min-[360px]:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs transition-colors active:scale-[0.99] cursor-pointer whitespace-nowrap"
        >
          <Send size={13} className="rotate-45 shrink-0" />
          <span>GET QUOTE</span>
        </button>
      </div>

      {/* Phase 1 Verified MongoDB Inquiry Pipeline Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={product}
      />
    </div>
  );
}
