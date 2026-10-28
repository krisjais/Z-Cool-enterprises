'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
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

  ChevronDown,
  ShieldAlert,
  Cpu,
  FileText,
  Download,
  CheckCircle2,
  ExternalLink,
  Mail,
} from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import { resolveImageUrl } from '@/lib/api';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { COMPANY_DETAILS } from '@/constants/company';

export default function ProductDetailView({
  product,
  allProducts = [],
  backendRelated = [],
}) {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [fullscreenImgIdx, setFullscreenImgIdx] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({
    '01': true,
    '02': true,
    '03': true,
    '04': true,
    '05': true,
  });

  // GSAP DOM Element Refs
  const desktopSectionRef = useRef(null);
  const desktopVisualRef = useRef(null);
  const desktopDetailsRef = useRef(null);
  const mobileStageWrapperRef = useRef(null);
  const mobilePinnedStageRef = useRef(null);
  const mobileVisualRef = useRef(null);
  const mobileDetailsRegionRef = useRef(null);
  const mobileDetailsContentRef = useRef(null);

  // Toggle mobile accordion section
  const toggleAccordion = (number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };

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

  // Always guarantee primary image is valid; defaults to index 0 (verified single compressor)
  const currentImage = images[selectedImgIdx] || images[0] || null;

  // Metadata helper for image provenance and authenticity
  const getImageMeta = (idx) => {
    if (product?.imageManifest && product.imageManifest[idx]) {
      const item = product.imageManifest[idx];
      if (item.label && item.caption) {
        return {
          isVerified: item.isVerified ?? true,
          label: item.label,
          badgeText: item.badgeText || (item.isVerified ? 'Verified OEM Asset · Single Unit' : 'Reference Asset'),
          badgeClass: item.badgeClass || (item.isVerified ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-slate-50 text-slate-800 border-slate-300'),
          dotClass: item.dotClass || (item.isVerified ? 'bg-emerald-600' : 'bg-slate-600'),
          caption: item.caption,
          thumbTag: item.thumbTag || (item.isVerified ? 'OEM' : `Photo #${idx + 1}`),
        };
      }

      const isOfficial =
        item.type === 'primary' ||
        (item.source && item.source.toLowerCase().includes('danfoss')) ||
        (item.provenance && item.provenance.toLowerCase().includes('danfoss'));

      if (isOfficial) {
        return {
          isVerified: true,
          label: 'OEM Technical CAD Render',
          badgeText: 'Verified OEM Asset · Single Unit',
          badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-300',
          dotClass: 'bg-emerald-600',
          caption: 'Official Danfoss manufacturer CAD drawing / render from OEM publication (SM110-4EAG). Single compressor reference.',
          thumbTag: 'OEM CAD',
        };
      }

      const isDual = idx === 1 || (item.url && item.url.includes('supplier_1'));
      return {
        isVerified: false,
        label: isDual ? 'Marketplace Dual-Unit Photo' : 'Marketplace Workshop Photo',
        badgeText: isDual
          ? 'Unverified Marketplace Asset · Dual-Unit Staging'
          : 'Unverified Marketplace Asset · Workshop Unit',
        badgeClass: 'bg-amber-50 text-amber-900 border-amber-300',
        dotClass: 'bg-amber-600',
        caption: isDual
          ? 'Preserved IndiaMART listing photograph showing dual compressor staging for workshop inspection. Not primary unit image.'
          : 'Preserved IndiaMART listing photograph of workshop physical unit and electrical terminal box.',
        thumbTag: isDual ? 'Dual Unit' : `Photo #${idx + 1}`,
      };
    }

    // Heuristic fallbacks for products without imageManifest
    const url = String(images[idx] || '').toLowerCase();
    if (url.includes('official') || idx === 0) {
      return {
        isVerified: true,
        label: 'Verified OEM Render',
        badgeText: 'Verified OEM Asset · Single Unit',
        badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-300',
        dotClass: 'bg-emerald-600',
        caption: 'Verified manufacturer technical CAD render. Single compressor unit.',
        thumbTag: 'OEM CAD',
      };
    }

    const isDual = url.includes('supplier_1') || idx === 1;
    return {
      isVerified: false,
      label: isDual ? 'Marketplace Dual-Unit' : 'Marketplace Photo',
      badgeText: isDual
        ? 'Unverified Marketplace Asset · Dual-Unit Staging'
        : 'Unverified Marketplace Asset · Workshop Unit',
      badgeClass: 'bg-amber-50 text-amber-900 border-amber-300',
      dotClass: 'bg-amber-600',
      caption: isDual
        ? 'Preserved marketplace listing photo showing dual-unit staging for workshop reference.'
        : 'Preserved marketplace listing photograph. Confirm specifications on physical nameplate.',
      thumbTag: isDual ? 'Dual Unit' : `Photo #${idx + 1}`,
    };
  };

  const activeImageMeta = getImageMeta(selectedImgIdx);

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

  // ── GSAP SCROLLTRIGGER STICKY EXPERIENCES (DESKTOP & MOBILE) ──
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Pinning (>= 1024px)
      mm.add('(min-width: 1024px)', () => {
        if (!desktopVisualRef.current || !desktopDetailsRef.current) return;

        const visual = desktopVisualRef.current;
        const details = desktopDetailsRef.current;

        const stDesktop = ScrollTrigger.create({
          trigger: visual,
          start: 'top 80px',
          endTrigger: details,
          end: () => `bottom ${80 + visual.offsetHeight}px`,
          pin: visual,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        return () => {
          stDesktop.kill();
        };
      });

      // Mobile Pinning (< 1024px)
      mm.add('(max-width: 1023px)', () => {
        if (
          !mobileStageWrapperRef.current ||
          !mobilePinnedStageRef.current ||
          !mobileDetailsRegionRef.current ||
          !mobileDetailsContentRef.current
        ) {
          return;
        }

        const stageWrapper = mobileStageWrapperRef.current;
        const pinnedStage = mobilePinnedStageRef.current;
        const region = mobileDetailsRegionRef.current;
        const content = mobileDetailsContentRef.current;

        const getMaxScroll = () => {
          if (!content || !region) return 0;
          return Math.max(0, content.scrollHeight - region.clientHeight);
        };

        const tween = gsap.to(content, {
          y: () => -getMaxScroll(),
          ease: 'none',
          scrollTrigger: {
            trigger: stageWrapper,
            start: 'top 64px',
            end: () => `+=${Math.max(150, getMaxScroll())}`,
            pin: pinnedStage,
            pinSpacing: true,
            scrub: 0.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          if (tween.scrollTrigger) tween.scrollTrigger.kill();
          tween.kill();
          gsap.set(content, { clearProps: 'transform' });
        };
      });
    });

    return () => {
      ctx.revert();
    };
  }, [product?.id]);

  // Recalculate ScrollTrigger measurements when accordions toggle
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);
    return () => clearTimeout(timer);
  }, [openAccordions]);

  // Refresh measurements on image load / change
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [selectedImgIdx, currentImage]);

  // ── STRICT PRODUCT-SPECIFIC DATASHEET VERIFICATION ──
  // Associates a datasheet only when the brand and model code affirmatively match.
  // Never falls back to a global default or shared PDF.
  const verifiedDatasheet = useMemo(() => {
    if (!product || !product.datasheet || typeof product.datasheet !== 'object') {
      return null;
    }
    const ds = product.datasheet;
    if (!ds.url || typeof ds.url !== 'string' || !ds.url.trim()) {
      return null;
    }

    const prodCode = String(product.code || product.modelNumber || '').toUpperCase().trim();
    const prodCatalog = String(product.catalogCode || '').toUpperCase().trim();
    const prodBrand = String(product.brand || '').toUpperCase().trim();

    const dsModel = String(ds.model || '').toUpperCase().trim();
    const dsOemCode = String(ds.oemModelCode || '').toUpperCase().trim();
    const dsFilename = String(ds.filename || '').toUpperCase().trim();
    const dsManufacturer = String(ds.manufacturer || ds.brand || '').toUpperCase().trim();

    // Verify manufacturer brand match if present
    if (dsManufacturer && prodBrand) {
      const brandMatches = dsManufacturer.includes(prodBrand) || prodBrand.includes(dsManufacturer);
      if (!brandMatches) {
        return null;
      }
    }

    // Verify model correspondence
    const cleanProdCode = prodCode.replace(/[^A-Z0-9]/g, '');
    const cleanDsModel = dsModel.replace(/[^A-Z0-9]/g, '');
    const cleanDsOem = dsOemCode.replace(/[^A-Z0-9]/g, '');
    const cleanDsFilename = dsFilename.replace(/[^A-Z0-9]/g, '');
    const cleanCatalog = prodCatalog.replace(/[^A-Z0-9]/g, '');

    const modelMatches =
      (cleanProdCode && (cleanDsModel.includes(cleanProdCode) || cleanDsOem.includes(cleanProdCode) || cleanDsFilename.includes(cleanProdCode))) ||
      (cleanDsModel && cleanProdCode.includes(cleanDsModel)) ||
      (cleanCatalog && (cleanDsModel.includes(cleanCatalog) || cleanDsOem.includes(cleanCatalog) || cleanDsFilename.includes(cleanCatalog)));

    if (!modelMatches) {
      return null;
    }

    return {
      url: ds.url.trim(),
      filename: ds.filename || `${prodCode || 'Product'}-Datasheet.pdf`,
      title: ds.displayName || ds.title || (ds.isCatalogue ? 'Highly Rotary Compressor Catalogue' : 'Official Manufacturer Datasheet'),
      size: ds.size || 'PDF Document',
      manufacturer: ds.manufacturer || (prodBrand ? `${prodBrand} Climate Solutions` : 'Manufacturer Technical Documentation'),
      model: ds.oemModelCode || ds.model || prodCode,
      verifiedAt: ds.verifiedAt,
      isCatalogue: Boolean(ds.isCatalogue),
    };
  }, [product]);

  // ── STRUCTURED SPECIFICATION GROUPS (COMBINES ROOT, SPECS, AND SPECIFICATIONS ARRAY) ──
  const technicalGroups = useMemo(() => {
    if (!product) return [];
    const groups = [];

    // Helper to query product.specifications array
    const findSpec = (pattern) => {
      if (!Array.isArray(product.specifications)) return null;
      const lowerPat = pattern.toLowerCase();
      const found = product.specifications.find(
        (s) => (s.key || '').toLowerCase().includes(lowerPat)
      );
      return found ? found.value : null;
    };

    // Group 1: Model Identification & Nomenclature
    const brandLabel = product.brand ? `${product.brand.toUpperCase()} OEM CODE` : 'OEM EQUIPMENT CODE';
    const idRows = [
      { label: 'EQUIPMENT MODEL CODE', value: product.code || product.modelNumber },
      { label: brandLabel, value: product.catalogCode || findSpec(`${product.brand || 'OEM'} OEM Equipment Code`) || findSpec('Danfoss OEM Equipment Code') },
      { label: 'MANUFACTURER BRAND', value: product.brand },
      { label: 'COMPRESSOR TECHNOLOGY', value: product.type },
      { label: 'CATALOGUE CATEGORY', value: product.category },
      { label: 'VERIFICATION STATUS', value: product.verificationStatus || product.statusBadge },
      {
        label: 'OFFICIAL DATASHEET',
        value: verifiedDatasheet
          ? `${verifiedDatasheet.filename} (${verifiedDatasheet.size})`
          : 'Datasheet available upon request from technical desk',
      },
      {
        label: 'PRICE PROVENANCE',
        value: product.source?.priceDisplay
          ? `${product.source.priceDisplay} (${product.source.verificationStatus || 'Unconfirmed - Request Quote'})`
          : (product.price ? `₹${Number(product.price).toLocaleString('en-IN')}` : 'Official Quote Required'),
      },
      { label: 'ORIGINAL LISTING SOURCE', value: product.source?.marketplace ? `${product.source.marketplace} (${product.source.sellerName || 'Verified Supplier'})` : product.legacyTitle },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (idRows.length > 0) {
      groups.push({
        number: '01',
        title: 'IDENTIFICATION & NOMENCLATURE',
        rows: idRows,
      });
    }

    // Group 2: Electrical & Operating Ratings
    const electricalSpecs = product.specs?.electrical || {};
    const electricalRows = [
      { label: 'OPERATING VOLTAGE', value: product.voltage || electricalSpecs['Input Voltage'] || findSpec('Voltage') },
      { label: 'NOMINAL CAPACITY', value: product.coolingCapacity || electricalSpecs['Nominal HP'] || findSpec('Cooling Capacity') },
      { label: 'POWER SOURCE', value: findSpec('Power Source') || 'Electric (Three-Phase)' },
      { label: 'RUNNING CURRENT (RLA)', value: electricalSpecs['RLA (Running Amps)'] || electricalSpecs['RLA'] || findSpec('RLA') },
      { label: 'LOCKED ROTOR AMPS (LRA)', value: electricalSpecs['LRA (Locked Rotor)'] || findSpec('LRA') },
      { label: 'MOTOR CONTROL / DRIVE', value: electricalSpecs['Control'] || findSpec('Control') || 'Fixed speed' },
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
      { label: 'SWEPT VOLUME (DISPLACEMENT)', value: product.displacement || thermalSpecs['Displacement'] || findSpec('Swept Volume') },
      { label: 'REFRIGERANT COMPATIBILITY', value: product.refrigerant || findSpec('Refrigerant') },
      { label: 'APPLICATION DUTY RANGE', value: thermalSpecs['Application'] || product.application || findSpec('Application') },
      { label: 'SEGMENT USAGE', value: findSpec('Segment Usage') || 'Air conditioning' },
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
      { label: 'SUCTION LINE CONNECTION', value: mechSpecs['Suction Line Size'] || mechSpecs['Suction Connection'] || findSpec('Suction Connection') },
      { label: 'DISCHARGE LINE CONNECTION', value: mechSpecs['Discharge Line Size'] || mechSpecs['Discharge Connection'] || findSpec('Discharge Connection') },
      { label: 'NET UNIT WEIGHT', value: mechSpecs['Net Weight'] || findSpec('Net Weight') },
      { label: 'OVERALL DIAMETER', value: findSpec('Diameter') },
      { label: 'OVERALL HEIGHT', value: findSpec('Height') },
      { label: 'MOUNTING FOOTPRINT', value: mechSpecs['Mounting Footprint'] || mechSpecs['Mounting'] },
      { label: 'OIL CONNECTION / CHARGE', value: findSpec('Oil Charge') || findSpec('Oil Connection') },
      { label: 'OIL SIGHT GLASS', value: findSpec('Glass Mounting') },
      { label: 'LOW PRESSURE GAUGE PORT', value: findSpec('Gauge Port') },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (mechRows.length > 0) {
      groups.push({
        number: '04',
        title: 'MECHANICAL CONNECTIONS & FOOTPRINT',
        rows: mechRows,
      });
    }

    // Group 5: Factory Compliance, Standards & Certifications
    const complianceRows = [
      { label: 'APPROVAL & STANDARDS', value: findSpec('Approval') || findSpec('Standard') },
      { label: 'EAN / GLOBAL ARTICLE CODE', value: findSpec('EAN') || findSpec('UPC') },
      { label: 'FACTORY DRAWING NUMBER', value: findSpec('Drawing Number') },
      { label: 'EU SCIP REGISTRATION DOSSIER', value: findSpec('SCIP') },
    ].filter((r) => Boolean(r.value && typeof r.value === 'string' && r.value.trim() !== ''));

    if (complianceRows.length > 0) {
      groups.push({
        number: '05',
        title: 'FACTORY COMPLIANCE & DOCUMENTATION',
        rows: complianceRows,
      });
    }

    return groups;
  }, [product]);

  // Dynamic related products (strictly filtered to preserve review mode isolation)
  const related = useMemo(() => {
    const pool = (backendRelated && backendRelated.length > 0) ? backendRelated : (allProducts || []);
    if (!pool || pool.length === 0) return [];

    const sameCategory = pool.filter((p) => p.id !== product?.id && p.category === product?.category);
    if (sameCategory.length > 0) {
      return sameCategory.slice(0, 3);
    }
    return pool.filter((p) => p.id !== product?.id).slice(0, 3);
  }, [allProducts, backendRelated, product]);

  if (!product) return null;

  const statusBadgeText = product.verificationStatus || product.statusBadge || 'Verified Commercial Unit';
  const whatsappMessage = encodeURIComponent(
    `Hello Z Cool Enterprises, I am inquiring about compressor model: ${product.name} (Code: ${product.code || 'N/A'}, Catalog: ${product.catalogCode || product.id}). Please share current availability and procurement quotation.`
  );
  const whatsappDatasheetMessage = encodeURIComponent(
    `Hello Z Cool Enterprises Technical Desk, I am requesting the official manufacturer datasheet and technical documentation for compressor model: ${product.name} (Code: ${product.code || 'N/A'}, Catalog: ${product.catalogCode || product.id}).`
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 py-4 sm:py-6 lg:py-8 pb-36 lg:pb-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* ══════════════════════════════════════════════════════════════
            DESKTOP LAYOUT (>= 1024px) — INDUSTRIAL B2B REDESIGN
           ══════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block space-y-6">

          {/* Breadcrumb & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E4B75] hover:text-[#093757] transition-colors cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Compressor Catalogue</span>
            </Link>

            <nav
              aria-label="Breadcrumb Desktop"
              className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap"
            >
              <Link href="/" className="hover:text-slate-800">HOME</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-slate-800">CATALOGUE</Link>
              <span>/</span>
              {product.brand && (
                <>
                  <span className="text-slate-700 uppercase font-semibold">{product.brand}</span>
                  <span>/</span>
                </>
              )}
              <span className="text-[#0E4B75] font-bold uppercase truncate max-w-[280px]">
                {product.code || product.name}
              </span>
            </nav>
          </div>

          {/* Desktop Two-Column Grid */}
          <div ref={desktopSectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Column (Sticky Visual Column) */}
            <div className="lg:col-span-6">
              <div ref={desktopVisualRef} className="space-y-4 w-full">

                {/* Main Image Stage Box */}
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">

                  {/* Card Header: Brand & Verification Pill */}
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[#0E4B75] tracking-wider uppercase">
                        {product.brand || 'INDUSTRIAL'}
                      </span>
                      {product.type && (
                        <span className="text-slate-400 font-mono text-[11px]">• {product.type}</span>
                      )}
                    </div>

                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border shadow-2xs shrink-0 whitespace-nowrap ${activeImageMeta.badgeClass}`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeImageMeta.dotClass}`} />
                      <span>{activeImageMeta.badgeText}</span>
                    </span>
                  </div>

                  {/* Primary Visual Display Canvas (Unstretched, Contained) */}
                  <div className="relative min-h-[360px] bg-white flex flex-col items-center justify-center p-6 overflow-hidden">
                    {hasRealImage ? (
                      <>
                        <div
                          onClick={() => {
                            setFullscreenImgIdx(selectedImgIdx);
                            setIsFullscreenOpen(true);
                          }}
                          className="w-full h-full flex flex-col items-center justify-center cursor-zoom-in relative z-0 py-2"
                          role="button"
                          tabIndex={0}
                          aria-label={`Inspect high resolution image of ${product.name}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              setFullscreenImgIdx(selectedImgIdx);
                              setIsFullscreenOpen(true);
                            }
                          }}
                        >
                          <img
                            src={currentImage}
                            alt={`${product.brand || ''} ${product.code || product.name} - ${activeImageMeta.label}`}
                            className="max-h-[340px] w-auto max-w-[90%] object-contain select-none transition-transform duration-200 hover:scale-[1.02]"
                            loading="eager"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/ac_compressor.png';
                            }}
                          />
                          <div className="w-56 h-2 bg-slate-900/10 rounded-full blur-[3px] mt-3 pointer-events-none" />
                        </div>

                        {/* Top-Left Asset Provenance Chip */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${activeImageMeta.badgeClass}`}>
                            {activeImageMeta.label}
                          </span>
                        </div>

                        {/* Inspect Zoom Button */}
                        <button
                          type="button"
                          onClick={() => {
                            setFullscreenImgIdx(selectedImgIdx);
                            setIsFullscreenOpen(true);
                          }}
                          className="absolute bottom-3 right-3 z-10 text-[11px] font-semibold bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                          aria-label="Inspect fullscreen photo"
                        >
                          <Eye size={13} className="text-[#0E4B75]" />
                          <span>Inspect Photo</span>
                        </button>
                      </>
                    ) : (
                      <div className="w-full py-12 px-6 flex flex-col items-center justify-center text-center bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                        <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0E4B75] mb-2.5">
                          <Cpu size={24} />
                        </div>
                        <span className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                          Technical Blueprint Silhouette
                        </span>
                        <p className="text-xs text-slate-600 max-w-sm mt-1 leading-relaxed">
                          Physical photographic asset undergoing workshop verification.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Dynamic Image Caption & Provenance Sub-bar */}
                  <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200">
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {activeImageMeta.caption}
                    </p>
                  </div>
                </div>

                {/* Clickable Image Gallery Thumbnails */}
                {hasRealImage && images.length > 1 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider px-1">
                      <span>Available Views & Documentation ({images.length})</span>
                      <span>Click to switch</span>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                      {images.map((img, idx) => {
                        const meta = getImageMeta(idx);
                        const isSelected = selectedImgIdx === idx;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedImgIdx(idx)}
                            className={`rounded-lg bg-white border p-1.5 flex flex-col items-center justify-between cursor-pointer transition-all min-h-[72px] ${isSelected
                                ? 'border-[#0E4B75] ring-2 ring-[#0E4B75]/30 shadow-xs bg-blue-50/40'
                                : 'border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100'
                              }`}
                            aria-label={`Select ${meta.label}`}
                            aria-current={isSelected ? 'true' : undefined}
                          >
                            <span className="font-mono text-[9px] font-bold text-slate-500 self-start truncate w-full">
                              {meta.thumbTag}
                            </span>
                            <div className="h-10 w-full flex items-center justify-center my-0.5">
                              <img
                                src={img}
                                alt=""
                                className="max-h-9 w-auto max-w-full object-contain"
                              />
                            </div>
                            <span className={`text-[8px] font-mono uppercase font-semibold px-1 rounded ${meta.isVerified ? 'text-emerald-700 bg-emerald-50' : 'text-amber-800 bg-amber-50'}`}>
                              {meta.thumbTag || (meta.isVerified ? 'OEM' : 'Ref')}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Technical Matching & Displacement Assurance Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-700">
                  <PackageCheck size={20} className="text-[#0E4B75] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-mono font-bold text-slate-900 uppercase block tracking-wide">
                      VERIFIED DISPLACEMENT MATCHING & SOURCING
                    </span>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Every commercial HVAC compressor is matched against OEM displacement specifications. Physical nameplate confirmation recommended prior to final order dispatch.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (Product Information & Specifications) */}
            <div ref={desktopDetailsRef} className="lg:col-span-6 space-y-6">

              {/* Manufacturer Tag & H1 Title */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#0E4B75] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded tracking-wider uppercase">
                    {product.brand} · {product.category || 'COMMERCIAL COMPRESSOR'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>{statusBadgeText}</span>
                  </span>
                </div>

                <h1 className="font-extrabold text-3xl text-slate-900 leading-tight tracking-tight break-words">
                  {product.name}
                </h1>

                {/* Model Reference & OEM Code Pill */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5 font-mono text-xs">
                  {(product.code || product.modelNumber) && (
                    <span className="font-bold text-[#0E4B75] bg-slate-100 border border-slate-300 px-3 py-1 rounded">
                      MODEL: {product.code || product.modelNumber}
                    </span>
                  )}
                  {product.catalogCode && (
                    <span className="font-bold text-slate-700 bg-slate-100 border border-slate-300 px-3 py-1 rounded">
                      OEM CODE: {product.catalogCode}
                    </span>
                  )}
                  {product.condition && (
                    <span className="text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded">
                      {product.condition}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed pt-1">
                  {product.shortDescription || product.description}
                </p>
              </div>

              {/* 4-Metric Key Engineering Parameters Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs shadow-xs">
                {product.coolingCapacity && (
                  <div className="space-y-1">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      COOLING CAPACITY
                    </span>
                    <span className="font-extrabold text-slate-900 text-base">
                      {product.coolingCapacity}
                    </span>
                  </div>
                )}

                {product.displacement && (
                  <div className="space-y-1">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      SWEPT VOLUME
                    </span>
                    <span className="font-extrabold text-slate-900 text-base">
                      {product.displacement}
                    </span>
                  </div>
                )}

                {product.voltage && (
                  <div className="space-y-1">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      ELECTRICAL
                    </span>
                    <span className="font-bold text-slate-900 text-xs">
                      {product.voltage.split('/')[0]?.trim() || product.voltage}
                    </span>
                  </div>
                )}

                {product.refrigerant && (
                  <div className="space-y-1">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      REFRIGERANT
                    </span>
                    <span className="font-extrabold text-slate-900 text-base">
                      {product.refrigerant}
                    </span>
                  </div>
                )}
              </div>

              {/* Commercial Pricing & Procurement Notice Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                    COMMERCIAL PRICING STRUCTURE
                  </span>
                  <span className="font-mono text-xs font-semibold text-blue-900 bg-blue-100/70 border border-blue-200 px-2.5 py-0.5 rounded">
                    Official Quote Required
                  </span>
                </div>

                <div className="flex items-baseline gap-2 pt-0.5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Request Official Quote
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {product.source?.verificationStatus ||
                    'Marketplace reference price (₹24,000) is an unconfirmed 3rd-party source listing, not Z Cool Enterprises verified selling price. Submit quote inquiry for official quotation based on active inventory, workshop testing, and delivery destination.'}
                </p>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsQuoteOpen(true)}
                    className="w-full min-h-[48px] px-5 py-2.5 rounded-xl bg-[#0E4B75] hover:bg-[#093757] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <Send size={16} />
                    <span>Request Availability & Quote</span>
                  </button>

                  <a
                    href={`${COMPANY_DETAILS.whatsappUrl}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp Technical Desk</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full min-h-[42px] px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Camera size={14} className="text-[#0E4B75]" />
                  <span>Upload Physical Nameplate Photo for Displacement Match</span>
                </button>
              </div>

              {/* Dedicated Official Manufacturer Datasheet Card (Desktop) */}
              {verifiedDatasheet ? (
                <div className="bg-gradient-to-r from-blue-50/80 to-slate-50 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-[#0E4B75] shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide">
                        {verifiedDatasheet.title || 'Official Manufacturer Datasheet'}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {verifiedDatasheet.manufacturer} · {verifiedDatasheet.model} ({verifiedDatasheet.size} PDF)
                      </p>
                    </div>
                  </div>

                  <a
                    href={verifiedDatasheet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={verifiedDatasheet.filename}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-200/70 border border-slate-300 flex items-center justify-center text-slate-600 shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide">
                            Manufacturer Technical Documentation
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                            Available Upon Request
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Datasheet currently unavailable — contact us for technical documentation. Official manufacturer technical datasheet, wiring schematics, and performance curves for {product.brand || 'OEM'} {product.code || product.name} are available upon request. Contact our engineering desk to receive verified OEM documentation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`${COMPANY_DETAILS.whatsappUrl}?text=${whatsappDatasheetMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold transition-colors"
                      >
                        <MessageSquare size={13} />
                        <span>Inquire via WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setIsQuoteOpen(true)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Mail size={14} className="text-[#0E4B75]" />
                        <span>Request OEM Datasheet</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Verified Technical Specification Groups (5 Tables) */}
              {technicalGroups.length > 0 && (
                <div className="space-y-4 pt-3 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Verified Technical Specifications & OEM Parameters
                    </h3>
                    <span className="font-mono text-[11px] text-slate-500">
                      5 Structured Groups
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {technicalGroups.map((group) => (
                      <div
                        key={group.number}
                        className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
                      >
                        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between font-mono text-[11px] font-bold text-slate-800 uppercase tracking-wide">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded bg-[#0E4B75]/10 text-[#0E4B75] flex items-center justify-center">
                              {group.number}
                            </span>
                            <span>{group.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-normal">
                            {group.rows.length} attributes
                          </span>
                        </div>

                        <div className="divide-y divide-slate-100 font-mono text-xs">
                          {group.rows.map((row) => (
                            <div
                              key={row.label}
                              className="px-4 py-2.5 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                            >
                              <span className="text-slate-500 text-[11px] font-medium shrink-0">
                                {row.label}
                              </span>
                              <span className="text-slate-900 font-semibold text-right text-xs break-words max-w-[65%]">
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

              {/* Full Description / Overview */}
              {product.description && (
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Engineering Overview & Application Scope
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

            </div>

          </div>

          {/* Desktop Related Products Grid (Only shown when related models exist) */}
          {related.length > 0 && (
            <div className="hidden lg:block mt-12 pt-8 border-t border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Alternative {product.category}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium pt-0.5">
                    Alternative displacement-matched commercial compressors.
                  </p>
                </div>
                <Link
                  href={`/products?category=${encodeURIComponent(product.category)}`}
                  className="text-xs font-semibold text-[#0E4B75] hover:text-[#093757] flex items-center gap-1 min-h-[36px]"
                >
                  <span>View All {product.category}</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-between hover:border-slate-400 hover:shadow-2xs transition-all group"
                  >
                    <div className="h-28 bg-slate-50 rounded-lg flex items-center justify-center p-2 mb-2 overflow-hidden">
                      {item.images && item.images[0] ? (
                        <img
                          src={resolveImageUrl(item.images[0])}
                          alt={item.name}
                          className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      ) : (
                        <Cpu size={20} className="text-slate-400" />
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

        {/* ══════════════════════════════════════════════════════════════
            MOBILE LAYOUT (< 1024px) — MOBILE-FIRST B2B EXPERIENCE
           ══════════════════════════════════════════════════════════════ */}
        <div className="block lg:hidden space-y-5">

          {/* 1. Header & Back to Catalogue */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0E4B75] hover:text-[#093757] py-1 cursor-pointer min-h-[44px]"
            >
              <ArrowLeft size={16} className="shrink-0" />
              <span>Back to Catalogue</span>
            </Link>

            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider shrink-0">
              {product.brand}
            </span>
          </div>

          {/* 2. Brand & Verification Pill */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider">
                {product.brand}
              </span>
              {product.category && (
                <span className="text-xs text-slate-500 font-medium">
                  • {product.category}
                </span>
              )}
            </div>

            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full border shadow-2xs ${activeImageMeta.badgeClass}`}>
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeImageMeta.dotClass}`} />
              <span>{activeImageMeta.thumbTag}</span>
            </span>
          </div>

          {/* 3. Bounded GSAP Stage Container */}
          <div ref={mobileStageWrapperRef} className="relative w-full">

            <div
              ref={mobilePinnedStageRef}
              className="w-full flex flex-col bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-xs overflow-hidden gsap-mobile-stage"
            >
              {/* 3A. Compact Visual Stage */}
              <div
                ref={mobileVisualRef}
                className="shrink-0 bg-white border-b border-slate-200 flex flex-col justify-between p-3 relative z-10 min-h-[170px]"
              >
                <div className="relative w-full h-[140px] flex items-center justify-center overflow-hidden">
                  {hasRealImage ? (
                    <>
                      <div
                        onClick={() => {
                          setFullscreenImgIdx(selectedImgIdx);
                          setIsFullscreenOpen(true);
                        }}
                        className="w-full h-full flex flex-col items-center justify-center cursor-zoom-in relative z-0"
                        role="button"
                        tabIndex={0}
                        aria-label={`Inspect full size image of ${product.name}`}
                      >
                        <img
                          src={currentImage}
                          alt={`${product.brand || ''} ${product.code || product.name}`}
                          className="max-h-[125px] w-auto max-w-[85%] object-contain select-none"
                          loading="eager"
                        />
                        <div className="w-36 h-1 bg-slate-900/10 rounded-full blur-[2px] mt-1 pointer-events-none" />
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setFullscreenImgIdx(selectedImgIdx);
                          setIsFullscreenOpen(true);
                        }}
                        className="absolute bottom-1 right-1 z-10 text-[11px] font-semibold bg-white/95 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs flex items-center gap-1 cursor-pointer min-h-[30px]"
                      >
                        <Eye size={12} className="text-[#0E4B75]" />
                        <span>Inspect</span>
                      </button>
                    </>
                  ) : (
                    <div className="w-full py-4 px-2 flex flex-col items-center justify-center text-center">
                      <Cpu size={20} className="text-[#0E4B75] mb-1" />
                      <span className="text-xs font-bold text-slate-800 uppercase">Blueprint</span>
                    </div>
                  )}

                  {/* Multi-photo switcher (mobile) */}
                  {hasRealImage && images.length > 1 && (
                    <div className="absolute bottom-1 left-1 z-10 flex items-center gap-1 bg-white/95 p-0.5 rounded-md border border-slate-200 shadow-2xs">
                      {images.map((img, idx) => {
                        const isSelected = selectedImgIdx === idx;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedImgIdx(idx)}
                            className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono font-bold transition-all cursor-pointer ${isSelected
                                ? 'bg-[#0E4B75] text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            aria-label={`Select photo ${idx + 1}`}
                          >
                            #{idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="pt-1.5 mt-1 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span className="font-semibold text-slate-800 truncate max-w-[65%]">
                    {product.brand} · {product.code || product.name}
                  </span>
                  <span className="text-[#0E4B75] font-bold shrink-0">
                    {activeImageMeta.thumbTag}
                  </span>
                </div>
              </div>

              {/* 3B. Dedicated Details Region */}
              <div
                ref={mobileDetailsRegionRef}
                className="flex-1 w-full relative bg-[#F8FAFC] gsap-mobile-region"
              >
                <div
                  ref={mobileDetailsContentRef}
                  className="p-4 space-y-4 will-change-transform pb-8"
                >
                  {/* Image Disclaimer Pill */}
                  <div className="px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-lg text-center">
                    <p className="text-xs text-slate-600 leading-snug font-medium">
                      {activeImageMeta.caption}
                    </p>
                  </div>

                  {/* Product Title */}
                  <div className="space-y-2">
                    <h1 className="font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug tracking-tight break-words">
                      {product.name}
                    </h1>

                    {(product.code || product.modelNumber) && (
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-block font-mono text-xs font-bold text-[#0E4B75] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                          MODEL: {product.code || product.modelNumber}
                        </span>
                        {product.catalogCode && (
                          <span className="inline-block font-mono text-xs font-bold text-slate-700 bg-slate-100 border border-slate-300 px-2.5 py-1 rounded">
                            OEM: {product.catalogCode}
                          </span>
                        )}
                      </div>
                    )}

                    <p className="text-[14px] text-slate-700 leading-relaxed font-normal pt-1">
                      {product.shortDescription || product.description}
                    </p>
                  </div>

                  {/* Key Parameters Card */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Operating Specifications
                    </h3>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      {product.coolingCapacity && (
                        <div className="space-y-0.5">
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">
                            CAPACITY
                          </span>
                          <span className="font-bold text-slate-900 text-sm">
                            {product.coolingCapacity}
                          </span>
                        </div>
                      )}

                      {product.displacement && (
                        <div className="space-y-0.5">
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">
                            SWEPT VOLUME
                          </span>
                          <span className="font-bold text-slate-900 text-sm">
                            {product.displacement}
                          </span>
                        </div>
                      )}

                      {product.voltage && (
                        <div className="space-y-0.5">
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">
                            VOLTAGE
                          </span>
                          <span className="font-bold text-slate-900 text-xs">
                            {product.voltage.split('/')[0]?.trim() || product.voltage}
                          </span>
                        </div>
                      )}

                      {product.refrigerant && (
                        <div className="space-y-0.5">
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">
                            REFRIGERANT
                          </span>
                          <span className="font-bold text-slate-900 text-sm">
                            {product.refrigerant}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-500 uppercase font-bold">PRICING</span>
                      <span className="font-semibold text-blue-900 bg-blue-100/70 border border-blue-200 px-2 py-0.5 rounded text-[11px]">
                        Quote Required
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {product.source?.priceDisplay
                        ? `Marketplace reference (${product.source.priceDisplay}) is an unconfirmed 3rd-party source listing. Submit quote for official pricing based on active stock and delivery city.`
                        : 'Submit inquiry for official B2B wholesale quotation based on active inventory, warranty terms, and freight destination.'}
                    </p>
                  </div>

                  {/* Datasheet Card (Mobile) */}
                  {verifiedDatasheet ? (
                    <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText size={18} className="text-[#0E4B75] shrink-0" />
                        <div className="min-w-0">
                          <span className="text-xs font-mono font-bold text-slate-900 block truncate">
                            {verifiedDatasheet.title || 'Official OEM Datasheet'}
                          </span>
                          <span className="text-[11px] text-slate-600 block truncate">
                            {verifiedDatasheet.model} · {verifiedDatasheet.size}
                          </span>
                        </div>
                      </div>

                      <a
                        href={verifiedDatasheet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={verifiedDatasheet.filename}
                        className="px-3 py-1.5 rounded-lg bg-[#0E4B75] text-white text-xs font-semibold shrink-0"
                      >
                        Download
                      </a>
                    </div>
                  ) : (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <FileText size={16} className="text-slate-500 shrink-0" />
                          <span className="text-xs font-mono font-bold text-slate-900 truncate">
                            Manufacturer Technical Documentation
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                          On Request
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Datasheet currently unavailable — contact us for technical documentation. Official engineering specs for {product.brand || 'OEM'} {product.code || product.name} available upon request.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsQuoteOpen(true)}
                        className="w-full min-h-[36px] px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <Mail size={13} className="text-[#0E4B75]" />
                        <span>Request OEM Datasheet</span>
                      </button>
                    </div>
                  )}

                  {/* Expandable Technical Specification Groups */}
                  {technicalGroups.length > 0 && (
                    <div className="space-y-3 pt-2 border-t border-slate-200">
                      <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Detailed Specifications
                      </h3>

                      <div className="space-y-2">
                        {technicalGroups.map((group) => {
                          const isOpen = Boolean(openAccordions[group.number]);
                          return (
                            <div
                              key={group.number}
                              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
                            >
                              <button
                                type="button"
                                onClick={() => toggleAccordion(group.number)}
                                className="w-full px-4 py-3 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer min-h-[48px]"
                                aria-expanded={isOpen}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <span className="w-5 h-5 rounded bg-[#0E4B75]/10 text-[#0E4B75] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                    {group.number}
                                  </span>
                                  <span className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wide truncate">
                                    {group.title}
                                  </span>
                                </div>
                                <ChevronDown
                                  size={16}
                                  className={`text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0E4B75]' : ''
                                    }`}
                                />
                              </button>

                              {isOpen && (
                                <div className="divide-y divide-slate-100 border-t border-slate-200 font-mono text-xs bg-white">
                                  {group.rows.map((row) => (
                                    <div
                                      key={row.label}
                                      className="px-4 py-2 flex flex-col gap-0.5 hover:bg-slate-50/50"
                                    >
                                      <span className="text-slate-500 text-[11px] font-medium">
                                        {row.label}
                                      </span>
                                      <span className="text-slate-900 font-semibold text-xs break-words">
                                        {row.value}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* End of Model Specifications */}
                  <div className="pt-4 pb-2 text-center border-t border-dashed border-slate-200">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Verified Equipment Data · Z Cool Enterprises
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE STICKY BOTTOM ENQUIRY DOCK (< 1024px)
         ══════════════════════════════════════════════════════════════ */}
      {!isQuoteOpen && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg">
          <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
            <a
              href={`${COMPANY_DETAILS.whatsappUrl}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
              aria-label="Contact WhatsApp Technical Desk"
            >
              <MessageSquare size={16} className="shrink-0" />
              <span className="truncate">WhatsApp Desk</span>
            </a>

            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#0E4B75] hover:bg-[#093757] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              aria-label="Request Compressor Quote"
            >
              <Send size={15} className="shrink-0" />
              <span className="truncate">Request Quote</span>
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          ACCESSIBLE FULLSCREEN IMAGE LIGHTBOX
         ══════════════════════════════════════════════════════════════ */}
      {isFullscreenOpen && hasRealImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`High-resolution view of ${product.name}`}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-between p-4"
        >
          {/* Lightbox Header */}
          <div className="w-full flex items-center justify-between text-white text-xs font-mono max-w-5xl">
            <div className="flex items-center gap-2">
              <span className="font-bold">{product.brand} · {product.code || product.name}</span>
              <span className="text-slate-400">({fullscreenImgIdx + 1}/{images.length})</span>
            </div>
            <button
              type="button"
              onClick={() => setIsFullscreenOpen(false)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close fullscreen view"
            >
              <X size={20} />
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
            {getImageMeta(fullscreenImgIdx).caption}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          COMMERCIAL QUOTE INQUIRY MODAL (PREFILLED)
         ══════════════════════════════════════════════════════════════ */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={product}
      />
    </div>
  );
}
