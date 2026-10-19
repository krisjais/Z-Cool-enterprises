'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Camera,
  MessageSquare,
  PackageCheck,
  Eye,
  X,
  Send,
  Info,
  ChevronRight,
  ShieldAlert,
  Cpu
} from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import { resolveImageUrl } from '@/lib/api';

export default function ProductDetailView({
  product,
  allProducts = [],
  backendRelated = [],
}) {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [fullscreenImgIdx, setFullscreenImgIdx] = useState(0);

  // Determine whether this model has authentic photographic assets
  const hasRealImage = useMemo(() => {
    return (
      product?.imageType !== 'placeholder' &&
      Array.isArray(product?.images) &&
      product.images.length > 0 &&
      Boolean(product.images[0])
    );
  }, [product?.imageType, product?.images]);

  // Clean local image list
  const images = useMemo(() => {
    if (!hasRealImage) return [];
    return product.images.map(resolveImageUrl);
  }, [hasRealImage, product?.images]);

  const currentImage = images[selectedImgIdx] || images[0] || null;

  // Fullscreen keyboard navigation
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

  // Lock body scroll when fullscreen modal is open
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

  // ── STRUCTURED SPECIFICATION GROUPS (ONLY SUPPORTED DATA) ──
  const technicalGroups = useMemo(() => {
    if (!product) return [];
    const groups = [];

    // Group 1: Model Identification & Nomenclature
    const idRows = [
      { label: 'EQUIPMENT MODEL CODE', value: product.code || product.modelNumber },
      { label: 'CATALOG CODE / SKU', value: product.catalogCode },
      { label: 'MANUFACTURER BRAND', value: product.brand },
      { label: 'COMPRESSOR DESIGN', value: product.type },
      { label: 'CATALOGUE CATEGORY', value: product.category },
      { label: 'VERIFICATION STATUS', value: product.verificationStatus || product.statusBadge },
      { label: 'ORIGINAL SOURCE TITLE', value: product.legacyTitle },
      { label: 'HISTORICAL LISTING REF', value: product.legacyOrder ? `Item #${product.legacyOrder} of 40` : null },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (idRows.length > 0) {
      groups.push({
        number: '01',
        title: 'IDENTIFICATION & NOMENCLATURE',
        rows: idRows,
      });
    }

    // Group 2: Key Operating Parameters (Only where supported)
    const electricalSpecs = product.specs?.electrical || {};
    const electricalRows = [
      { label: 'OPERATING VOLTAGE', value: product.voltage || electricalSpecs['Input Voltage'] },
      { label: 'NOMINAL POWER / CAPACITY', value: product.coolingCapacity || electricalSpecs['Nominal HP'] },
      { label: 'RUNNING CURRENT (RLA)', value: electricalSpecs['RLA (Running Amps)'] || electricalSpecs['RLA'] },
      { label: 'LOCKED ROTOR AMPS (LRA)', value: electricalSpecs['LRA (Locked Rotor)'] },
      { label: 'CONTROL / DRIVE TYPE', value: electricalSpecs['Control'] },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (electricalRows.length > 0) {
      groups.push({
        number: '02',
        title: 'ELECTRICAL & OPERATING RATINGS',
        rows: electricalRows,
      });
    }

    // Group 3: Refrigeration & Thermal Specifications (Only where supported)
    const thermalSpecs = product.specs?.thermal || {};
    const thermalRows = [
      { label: 'VOLUMETRIC DISPLACEMENT', value: product.displacement || thermalSpecs['Displacement'] },
      { label: 'REFRIGERANT COMPATIBILITY', value: product.refrigerant },
      { label: 'APPLICATION DUTY RANGE', value: thermalSpecs['Application'] || product.application },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (thermalRows.length > 0) {
      groups.push({
        number: '03',
        title: 'REFRIGERATION & THERMAL PARAMETERS',
        rows: thermalRows,
      });
    }

    // Group 4: Mechanical & Physical Dimensions (Only where supported)
    const mechSpecs = product.specs?.mechanical || {};
    const mechRows = [
      { label: 'SUCTION LINE SIZE', value: mechSpecs['Suction Line Size'] || mechSpecs['Suction Connection'] },
      { label: 'DISCHARGE LINE SIZE', value: mechSpecs['Discharge Line Size'] || mechSpecs['Discharge Connection'] },
      { label: 'NET UNIT WEIGHT', value: mechSpecs['Net Weight'] },
      { label: 'MOUNTING FOOTPRINT', value: mechSpecs['Mounting Footprint'] || mechSpecs['Mounting'] },
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

  // ── DYNAMIC RELATED PRODUCTS (STRICTLY SAME CATEGORY) ──
  const related = useMemo(() => {
    const pool = allProducts && allProducts.length > 0 ? allProducts : backendRelated;
    if (!pool || pool.length === 0 || !product?.category) return [];

    return pool
      .filter((p) => p.id !== product.id && p.category === product.category)
      .slice(0, 3);
  }, [allProducts, backendRelated, product]);

  if (!product) return null;

  const statusBadgeText = product.verificationStatus || product.statusBadge || 'Sourcing Reference';
  const whatsappMessage = encodeURIComponent(
    `Hello Z Cool Enterprises, I am inquiring about compressor model: ${product.name} (Code: ${product.code || 'N/A'}, Catalog: ${product.catalogCode || product.id}). Please share current availability and procurement quotation.`
  );

  return (
    <div className="bg-[#FBFBFA] min-h-screen text-slate-900 py-6 sm:py-8 lg:py-10 pb-32 lg:pb-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

        {/* ── 1. BREADCRUMB & BACK TO CATALOGUE LINK ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E4B75] hover:text-[#093757] transition-colors cursor-pointer group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Compressor Catalogue</span>
          </Link>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap"
          >
            <Link href="/" className="hover:text-slate-800">HOME</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-slate-800">COMPRESSORS</Link>
            <span>/</span>
            {product.brand && (
              <>
                <span className="text-slate-700 uppercase">{product.brand}</span>
                <span>/</span>
              </>
            )}
            <span className="text-[#0E4B75] font-bold uppercase truncate max-w-[180px] sm:max-w-[280px]">
              {product.code || product.name}
            </span>
          </nav>
        </div>

        {/* ── 2. TWO-COLUMN LAYOUT (DESKTOP STICKY IMAGE / MOBILE NATURAL SCROLL) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── LEFT COLUMN: PRODUCT VISUAL (STICKY ON DESKTOP) ── */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-4">
            
            {/* Visual Canvas Card */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
              
              {/* Card Header Bar */}
              <div className="px-4 py-2.5 bg-[#FAF9F6] border-b border-stone-200 flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-slate-900 tracking-tight uppercase truncate">
                  {product.brand || 'INDUSTRIAL'}
                </span>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-white border border-stone-200 px-2 py-0.5 rounded shadow-2xs shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E4B75] shrink-0" />
                  <span>{statusBadgeText}</span>
                </span>
              </div>

              {/* Contained Image Display */}
              <div className="relative min-h-[280px] sm:min-h-[340px] bg-[#FBFBFA] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
                {hasRealImage ? (
                  <>
                    <div
                      onClick={() => {
                        setFullscreenImgIdx(selectedImgIdx);
                        setIsFullscreenOpen(true);
                      }}
                      className="w-full h-full flex flex-col items-center justify-center cursor-zoom-in relative z-0 py-2 sm:py-4"
                      role="button"
                      tabIndex={0}
                      aria-label={`Inspect full size image of ${product.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setFullscreenImgIdx(selectedImgIdx);
                          setIsFullscreenOpen(true);
                        }
                      }}
                    >
                      <img
                        src={currentImage}
                        alt={`${product.brand || ''} ${product.code || product.name}`}
                        className="max-h-[250px] sm:max-h-[320px] w-auto max-w-[85%] object-contain select-none transition-transform duration-200 hover:scale-[1.02]"
                        loading="eager"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/ac_compressor.png';
                        }}
                      />
                      <div className="w-32 sm:w-48 h-1.5 bg-slate-900/10 rounded-full blur-[2px] mt-2 pointer-events-none" />
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setFullscreenImgIdx(selectedImgIdx);
                        setIsFullscreenOpen(true);
                      }}
                      className="absolute bottom-3 right-3 z-10 text-[11px] font-semibold bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 px-2.5 py-1 rounded border border-stone-200 shadow-xs flex items-center gap-1.5 cursor-pointer"
                      aria-label="Inspect fullscreen photo"
                    >
                      <Eye size={13} className="text-[#0E4B75]" />
                      <span>Inspect Photo</span>
                    </button>
                  </>
                ) : (
                  /* Honest Technical Silhouette Blueprint Box */
                  <div className="w-full py-10 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-stone-50/90 rounded-lg border-2 border-dashed border-stone-300">
                    <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-slate-500 mb-2.5 shadow-2xs">
                      <Cpu size={24} className="text-[#0E4B75]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                      Technical Blueprint Silhouette
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-600 max-w-sm mt-1 leading-relaxed font-medium">
                      Physical photograph awaiting workshop verification.
                    </p>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-500 bg-white border border-stone-200 px-2.5 py-1 rounded">
                      <Info size={12} className="text-[#0E4B75] shrink-0" />
                      <span>Sourced and displacement-matched to OEM nameplate</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dedicated Image Disclaimer Sub-bar */}
              <div className="px-3.5 sm:px-4 py-2 bg-stone-50 border-t border-stone-200 text-center">
                <p className="text-[11px] text-slate-600 leading-snug font-medium">
                  {product.imageDisclaimer || 'Authentic legacy catalogue photograph — confirm exact specifications on physical nameplate.'}
                </p>
              </div>

            </div>

            {/* Thumbnail Strip (Rendered ONLY when multiple verified photos exist) */}
            {hasRealImage && images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImgIdx(idx)}
                    className={`h-16 w-20 rounded-lg bg-white border p-1 flex flex-col items-center justify-between cursor-pointer transition-all shrink-0 ${
                      selectedImgIdx === idx
                        ? 'border-[#0E4B75] ring-2 ring-[#0E4B75]/20 shadow-xs bg-stone-50'
                        : 'border-stone-200 hover:border-slate-300 opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`Select photo ${idx + 1}`}
                  >
                    <span className="font-mono text-[9px] font-bold text-slate-400 self-start">
                      #{idx + 1}
                    </span>
                    <img src={img} alt="" className="max-h-[32px] w-auto max-w-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Honest Sourcing & Testing Notice */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-3.5 flex items-start gap-2.5 text-xs text-slate-700">
              <PackageCheck size={18} className="text-[#0E4B75] shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-mono font-bold text-slate-900 uppercase block text-[11px] tracking-wide">
                  TECHNICAL SOURCING & DISPLACEMENT MATCHING
                </span>
                <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                  Electrical megger testing, nitrogen pressure holding, and physical nameplate verification conducted prior to final dispatch from our Mumbai workshop.
                </p>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: HIERARCHICAL PRODUCT INFORMATION ── */}
          <div className="lg:col-span-6 space-y-6">

            {/* 1. Manufacturer & Model Identity */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider">
                <span>{product.brand}</span>
                {product.category && <span className="text-slate-400">• {product.category}</span>}
              </div>

              <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight tracking-tight break-words">
                {product.name}
              </h1>

              {/* Prominent Model Code Box */}
              {(product.code || product.modelNumber) && (
                <div className="pt-0.5">
                  <span className="inline-block font-mono text-xs sm:text-sm font-bold text-[#0E4B75] bg-blue-50 border border-blue-200 px-3 py-1 rounded">
                    MODEL REF: {product.code || product.modelNumber}
                  </span>
                </div>
              )}

              {/* Historical Listing Source Line (if applicable) */}
              {product.legacyTitle && (
                <div className="text-xs text-slate-500 font-mono pt-0.5">
                  Legacy Source Title: <span className="text-slate-700 font-semibold">&ldquo;{product.legacyTitle}&rdquo;</span>
                  {product.legacyOrder && <span> (Listing #{product.legacyOrder})</span>}
                </div>
              )}

              {/* Short Product Description */}
              <p className="text-slate-600 text-sm leading-relaxed pt-1">
                {product.shortDescription || product.description}
              </p>
            </div>

            {/* 2. Key Specifications Grid (Displacement, Electrical, Rated Capacity) */}
            <div className="bg-white border border-stone-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs shadow-xs">
              {product.displacement && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                    DISPLACEMENT (SWEPT VOLUME)
                  </span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    {product.displacement}
                  </span>
                </div>
              )}

              {product.coolingCapacity && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                    RATED CAPACITY
                  </span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    {product.coolingCapacity}
                  </span>
                </div>
              )}

              {product.voltage && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                    ELECTRICAL RATING
                  </span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    {product.voltage}
                  </span>
                </div>
              )}

              {product.refrigerant && (
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                    REFRIGERANT
                  </span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    {product.refrigerant}
                  </span>
                </div>
              )}

              {/* Fallback Key Specs for Legacy Items */}
              {(!product.displacement && !product.voltage && product.keySpecs) && (
                product.keySpecs.map((spec) => (
                  <div key={spec.label} className="space-y-0.5">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                      {spec.label}
                    </span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* 3. Availability & Sourcing Status Box */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 uppercase font-semibold">Availability State</span>
                <span className="font-semibold text-slate-800 bg-white border border-stone-200 px-2.5 py-0.5 rounded">
                  {product.availability || 'Enquire for availability'}
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-600 pt-1">
                <ShieldAlert size={15} className="text-[#0E4B75] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  All commercial compressor models are supplied upon exact technical matching. Please submit your physical nameplate photograph to confirm terminal orientation, displacement, and mounting footprint before dispatch.
                </p>
              </div>
            </div>

            {/* 4. Primary Product Enquiry Actions */}
            <div className="space-y-2.5 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full min-h-[46px] px-5 py-2.5 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Send size={15} />
                  <span>Request Availability & Quote</span>
                </button>

                <a
                  href={`https://wa.me/919920691707?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Technical Desk</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="w-full min-h-[42px] px-4 py-2 rounded-lg bg-white hover:bg-stone-50 border border-stone-300 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Camera size={14} className="text-[#0E4B75]" />
                <span>Upload Nameplate Photo for Custom Match</span>
              </button>
            </div>

            {/* 5. Reconciled Technical Specifications Groups */}
            {technicalGroups.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-stone-200">
                <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Verified Technical Data & Sourcing Records
                </h3>

                <div className="space-y-3">
                  {technicalGroups.map((group) => (
                    <div
                      key={group.number}
                      className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-2xs"
                    >
                      <div className="px-3.5 py-2 bg-stone-50 border-b border-stone-200 flex items-center gap-2 font-mono text-[11px] font-bold text-slate-800 uppercase tracking-wide">
                        <span className="text-[#0E4B75]">{group.number}</span>
                        <span>{group.title}</span>
                      </div>

                      <div className="divide-y divide-stone-100 font-mono text-xs">
                        {group.rows.map((row) => (
                          <div
                            key={row.label}
                            className="px-3.5 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-stone-50/50"
                          >
                            <span className="text-slate-500 text-[11px] font-medium shrink-0">
                              {row.label}
                            </span>
                            <span className="text-slate-900 font-semibold text-left sm:text-right text-[11px] sm:text-xs break-words">
                              {row.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Applications & Sourcing Scope */}
            {product.application && (
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Typical Application Scope
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {product.application}
                </p>
              </div>
            )}

            {/* 7. Related Models (Strictly Same Category) */}
            {related.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Related {product.category}
                  </h4>
                  <Link
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="text-xs font-semibold text-[#0E4B75] hover:text-[#093757] flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ChevronRight size={13} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      href={`/products/${item.id}`}
                      className="bg-white border border-stone-200 rounded-lg p-2.5 flex flex-col justify-between hover:border-slate-400 hover:shadow-2xs transition-all group"
                    >
                      <div className="h-20 bg-stone-50 rounded flex items-center justify-center p-1 mb-2 overflow-hidden">
                        {item.images && item.images[0] ? (
                          <img
                            src={resolveImageUrl(item.images[0])}
                            alt=""
                            className="max-h-16 w-auto object-contain group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        ) : (
                          <Cpu size={18} className="text-slate-400" />
                        )}
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono font-bold text-[#0E4B75] uppercase block truncate">
                          {item.brand}
                        </span>
                        <span className="text-xs font-bold text-slate-900 block truncate group-hover:text-[#0E4B75] transition-colors">
                          {item.code || item.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* ── 3. MOBILE STICKY BOTTOM ENQUIRY DOCK (< 1024px) ── */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-lg">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
          <a
            href={`https://wa.me/919920691707?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-3 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageSquare size={15} />
            <span>WhatsApp Desk</span>
          </a>

          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="min-h-[44px] px-3 py-2 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <Send size={14} />
            <span>Request Quote</span>
          </button>
        </div>
      </div>

      {/* ── 4. ACCESSIBLE FULLSCREEN IMAGE LIGHTBOX ── */}
      {isFullscreenOpen && hasRealImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`High-resolution view of ${product.name}`}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-between p-4"
        >
          {/* Lightbox Header */}
          <div className="w-full flex items-center justify-between text-white text-xs font-mono max-w-5xl">
            <span>
              {product.brand} · {product.code || product.name} ({fullscreenImgIdx + 1}/{images.length})
            </span>
            <button
              type="button"
              onClick={() => setIsFullscreenOpen(false)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close fullscreen view"
            >
              <X size={18} />
            </button>
          </div>

          {/* Lightbox Center Image */}
          <div className="relative flex-grow flex items-center justify-center p-4 max-h-[85vh] w-full">
            <img
              src={images[fullscreenImgIdx]}
              alt={product.name}
              className="max-h-[80vh] max-w-[90vw] object-contain select-none"
            />
          </div>

          {/* Lightbox Footer Disclaimer */}
          <div className="text-center text-slate-400 text-xs max-w-xl pb-2">
            {product.imageDisclaimer || 'Authentic legacy catalogue photograph — confirm exact model on physical nameplate.'}
          </div>
        </div>
      )}

      {/* ── 5. SHARED COMMERCIAL QUOTE INQUIRY MODAL ── */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={product}
      />
    </div>
  );
}
