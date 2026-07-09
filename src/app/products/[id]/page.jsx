'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Send, CheckCircle2, ChevronRight, Scale } from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';

// Import modular PDP subcomponents
import LoadingScreen from '@/components/pdp/LoadingScreen';
import Hero from '@/components/pdp/Hero';
import StorySection from '@/components/pdp/StorySection';
import Hotspots from '@/components/pdp/Hotspots';
import PerformanceDashboard from '@/components/pdp/PerformanceDashboard';
import SpecificationTabs from '@/components/pdp/SpecificationTabs';
import Applications from '@/components/pdp/Applications';
import Downloads from '@/components/pdp/Downloads';
import CompareDrawer from '@/components/pdp/CompareDrawer';
import BlueprintViewer from '@/components/pdp/BlueprintViewer';
import RelatedProducts from '@/components/pdp/RelatedProducts';
import QuoteDock from '@/components/pdp/QuoteDock';
import FAQ from '@/components/pdp/FAQ';

import { notFound } from 'next/navigation';

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Modals & Drawers state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Responsive layout watcher
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamic retrieval of standard product object
  const product = PRODUCTS_CATALOG.find(p => p.id === productId);
  if (!product) {
    return (
      <div className="min-h-screen bg-[#F1F6FA] flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white border border-[#0F2B46]/10 rounded-2xl shadow-premium">
          <img src="/logo1.png" alt="Z Cool Tech Logo" className="w-10 h-10 object-contain opacity-50" />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mb-3">Product Not Found</h1>
        <p className="text-slate-500 text-xs md:text-sm max-w-md mb-8 leading-relaxed font-light">
          The requested system ID <code className="font-mono bg-white px-2 py-0.5 rounded border border-[#0F2B46]/10 font-semibold">{productId}</code> is either invalid or has been decommissioned from our inventory directory.
        </p>

        <Link
          href="/products"
          className="px-6 py-3 bg-[#0F2B46] hover:bg-[#1D6FA3] text-white text-[11px] font-mono font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md flex items-center gap-2"
        >
          <span>Return to Catalog</span>
        </Link>
      </div>
    );
  }

  // SEO JSON-LD Schemas generation
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': (product?.images ?? []).map(img => `https://zcool.com${img}`),
    'description': product.description,
    'sku': product.code,
    'brand': {
      '@type': 'Brand',
      'name': 'Z Cool'
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'availability': product.availability === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      'url': `https://zcool.com/products/${product.id}`
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': (product.faqs || []).map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Catalog',
        'item': 'https://zcool.com/products'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': product.name,
        'item': `https://zcool.com/products/${product.id}`
      }
    ]
  };

  const C = {
    navy: '#0F2B46',
    borderLight: 'rgba(15,43,70,0.06)',
    borderStrong: 'rgba(15,43,70,0.12)'
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50 pb-20 relative select-none">
      
      {/* ── SEO SCHEMA INJECTION ── */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />

      {/* ── PREMIUM INTRO PRELOADER ── */}
      {isLoading && (
        <LoadingScreen 
          productName={product.name} 
          productCode={product.code} 
          onComplete={() => setIsLoading(false)} 
        />
      )}

      {/* ── SECTION 1: HERO SHOWCASE ── */}
      <Hero 
        product={product} 
        setQuoteModalOpen={setQuoteModalOpen} 
        setLightboxOpen={setLightboxOpen}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
      />

      {/* ── SECTION 2: ENGINEERING OVERVIEW ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 text-left">
        <div className="mb-10">
          <span className="font-mono text-[9px] text-[#1D6FA3] uppercase tracking-widest block mb-2 font-bold">SYSTEM DIAGNOSTICS HUD</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F2B46] leading-tight font-sans">Engineering Overview & Performance</h3>
          <p className="text-sm text-slate-500 font-light mt-2 leading-relaxed max-w-3xl">
            Audit live system telemetry metrics, active efficiency indexes, junction cutoff limits, and direct dispatch field engineering parameters configured for extreme reliability.
          </p>
        </div>
        <PerformanceDashboard product={product} />
      </section>

      {/* ── SECTION 3: STORYTELLING TIMELINE ── */}
      <div className="bg-white border-t border-b" style={{ borderColor: C.borderLight }}>
        <StorySection product={product} isDesktop={isDesktop} />
      </div>

      {/* ── SECTION 4: SPECIFICATIONS ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10 text-left">
          <div>
            <span className="font-mono text-[9px] text-[#0EA6A6] uppercase tracking-widest block mb-2 font-bold">SPECIFICATIONS WAREHOUSE</span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F2B46] leading-tight font-sans">Parametric Specs Matrix</h3>
          </div>
          <button
            onClick={() => setCompareOpen(true)}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0F2B46] border rounded-xl font-mono text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            style={{ borderColor: C.borderStrong }}
          >
            <Scale size={12} /> Compare Specs Drawer
          </button>
        </div>
        <SpecificationTabs product={product} />
      </section>

      {/* ── SECTION 5: BLUEPRINT VIEW ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 border-t" style={{ borderColor: C.borderLight }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
          <div className="lg:col-span-5">
            <span className="font-mono text-[9px] text-[#0EA6A6] uppercase tracking-widest block mb-2 font-bold">CAD SCHEMATICS ARCHIVE</span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F2B46] leading-tight font-sans mb-4">Engineering Blueprint Drawing</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
              Audit raw dimensional layout metrics, terminal connection pitch details, and physical footprint specifications. Hover directly on the schematic canvas to activate 1.5x technical zoom.
            </p>
            <div className="flex flex-col gap-3.5 border-t pt-6" style={{ borderColor: C.borderLight }}>
              {product.blueprintSpecs?.measurements?.map((m, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-mono text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <BlueprintViewer product={product} activeImageIndex={3} />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOTSPOT EXPLORER ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 text-center border-t" style={{ borderColor: C.borderLight }}>
        <div className="mb-12">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#1D6FA3] bg-[#1D6FA3]/10 px-2.5 py-0.5 rounded-full font-bold">
            DIAGRAM EXPLORER
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F2B46] mt-3 font-sans leading-tight">
            Internal Component Diagnostics
          </h2>
          <p className="text-xs text-slate-400 mt-2 font-mono uppercase tracking-wider">
            TAP HIGHLIGHT ANNOTATIONS TO AUDIT INDIVIDUAL CHASSIS PARTS
          </p>
        </div>
        <Hotspots product={product} />
      </section>

      {/* ── SECTION 7: APPLICATIONS ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 border-t" style={{ borderColor: C.borderLight }}>
        <div className="mb-10 text-left">
          <span className="font-mono text-[9px] text-emerald-600 uppercase tracking-widest block mb-2 font-bold">FIELD AUDIT PERFORMANCE</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F2B46] leading-tight font-sans">Applications & Case Studies</h3>
        </div>
        <Applications product={product} />
      </section>

      {/* ── SECTION 8: DOWNLOADS ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 border-t" style={{ borderColor: C.borderLight }}>
        <div className="mb-10 text-left">
          <span className="font-mono text-[9px] text-[#1D6FA3] uppercase tracking-widest block mb-2 font-bold">TECHNICAL RESOURCE VAULT</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F2B46] leading-tight font-sans">Documentation & CAD Downloads</h3>
        </div>
        <Downloads product={product} />
      </section>

      {/* ── SECTION 9: FAQ ── */}
      <section className="py-16 bg-white border-t border-b" style={{ borderColor: C.borderLight }}>
        <FAQ product={product} />
      </section>

      {/* ── SECTION 10: RELATED PRODUCTS ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="mb-10 text-left">
          <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">INTEGRATED ECOSYSTEM CATALOG</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F2B46] leading-tight font-sans">Related Industrial Systems</h3>
        </div>
        <RelatedProducts productId={product.id} currentAccentColor={product.accentColor} />
      </section>

      {/* ── COMPARISON DRAWER OVERLAY ── */}
      <CompareDrawer 
        isOpen={compareOpen} 
        onClose={() => setCompareOpen(false)} 
        currentProduct={product} 
      />

      {/* ── STICKY QUOTE FLOATING DOCK ── */}
      <QuoteDock 
        product={product} 
        isDesktop={isDesktop} 
        setQuoteModalOpen={setQuoteModalOpen} 
      />

      {/* ── RFQ SPEC REQUEST MODAL ── */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 text-left">
          <div className="bg-white border rounded-[32px] max-w-md w-full p-8 shadow-2xl relative">
            <button 
              onClick={() => {
                setQuoteModalOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors border text-slate-500 cursor-pointer"
            >
              <X size={14} />
            </button>

            {!formSubmitted ? (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="flex flex-col gap-4"
              >
                <div className="mb-2">
                  <span className="font-mono text-[8px] text-[#1D6FA3] uppercase tracking-widest font-bold block mb-1">PARAMETRIC RFQ FORM</span>
                  <h3 className="text-xl font-bold text-[#0F2B46]">Request Procurement Quote</h3>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">PRODUCT SPEC CODE: {product.code}</p>
                </div>

                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-mono text-slate-400 uppercase font-bold text-[9px]">Contact Name</label>
                  <input required type="text" placeholder="John Doe" className="px-3.5 py-2.5 border rounded-xl bg-slate-50 outline-none text-slate-700 placeholder-slate-400 text-xs" style={{ borderColor: C.borderStrong }} />
                </div>

                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-mono text-slate-400 uppercase font-bold text-[9px]">Corporate Email</label>
                  <input required type="email" placeholder="john@enterprise.com" className="px-3.5 py-2.5 border rounded-xl bg-slate-50 outline-none text-slate-700 placeholder-slate-400 text-xs" style={{ borderColor: C.borderStrong }} />
                </div>

                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-mono text-slate-400 uppercase font-bold text-[9px]">Project Detail Specifications</label>
                  <textarea rows={3} placeholder="Describe site integration specifications..." className="px-3.5 py-2.5 border rounded-xl bg-slate-50 outline-none text-slate-700 placeholder-slate-400 text-xs resize-none" style={{ borderColor: C.borderStrong }} />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-[#1D6FA3] hover:bg-blue-600 text-white font-mono text-[10px] font-bold uppercase rounded-xl tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer mt-2"
                >
                  <Send size={12} /> Send RFQ Inquiry
                </button>
              </form>
            ) : (
              <div className="text-center py-8 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F2B46]">Inquiry Logs Handover Successful</h4>
                  <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                    Our lead controls engineer will email standard pricing matrices to your corporate account within 15 minutes.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setQuoteModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0F2B46] font-mono text-[10px] font-bold uppercase rounded-xl transition-all border cursor-pointer"
                  style={{ borderColor: C.borderStrong }}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── FULLSCREEN IMAGE LIGHTBOX ── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex flex-col justify-between p-6 select-none">
          <div className="flex justify-between items-center text-white">
            <span className="font-mono text-xs text-slate-400">{product.imageLabels[activeImageIndex]}</span>
            <button 
              onClick={() => setLightboxOpen(false)}
              className="p-2 border border-white/20 rounded-full hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="flex-grow flex items-center justify-center p-6">
            <img 
              src={(product?.images ?? [])[activeImageIndex]} 
              alt="Fullscreen visual" 
              className="max-h-[85vh] max-w-full object-contain pointer-events-none"
            />
          </div>

          <div className="flex justify-center gap-2 pb-4">
            {(product?.images ?? []).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                  activeImageIndex === idx ? 'bg-white' : 'bg-white/35'
                }`}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
