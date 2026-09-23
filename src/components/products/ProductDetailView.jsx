'use client';

import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';
import ProductCard from '../ui/ProductCard';
import ScrollReveal from '../ui/ScrollReveal';
import { resolveImageUrl } from '@/lib/api';

export default function ProductDetailView({ product, relatedProducts = [] }) {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialTab, setQuoteInitialTab] = useState('quote');

  if (!product) return null;

  const handleOpenQuote = (tab = 'quote') => {
    setQuoteInitialTab(tab);
    setIsQuoteOpen(true);
  };

  const images = (Array.isArray(product.images) && product.images.length > 0 
    ? product.images 
    : ['/ac_compressor.png']).map(resolveImageUrl);

  const currentImage = images[selectedImgIdx] || images[0];

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A] py-6 sm:py-10 lg:py-12 pb-24 lg:pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-6 sm:space-y-10">
        
        {/* Breadcrumb Navigation Bar */}
        <ScrollReveal delay={0} direction="up" distance={10}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-slate-500 overflow-x-auto pb-1 no-scrollbar whitespace-nowrap">
            <Link 
              href="/products" 
              className="hover:text-[#1D6FA3] flex items-center gap-1.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D6FA3] rounded px-1"
            >
              <ArrowLeft size={14} />
              <span>Compressor Inventory</span>
            </Link>
            <span className="text-slate-300">/</span>
            {product.brand && (
              <>
                <span className="text-slate-700 font-medium">{product.brand}</span>
                <span className="text-slate-300">/</span>
              </>
            )}
            <span className="text-[#1D6FA3] font-bold truncate">{product.code || product.name}</span>
          </nav>
        </ScrollReveal>

        {/* Top Product Hero Grid (Mobile First Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Image & Gallery Experience */}
          <div className="lg:col-span-6 space-y-4">
            
            <ScrollReveal delay={80} direction="scale" distance={14}>
              <div className="group aspect-[4/3] bg-white border border-slate-200 rounded-xl p-4 sm:p-6 relative flex items-center justify-center shadow-xs overflow-hidden">
                <img
                  src={currentImage}
                  alt={`${product.brand || 'Compressor'} ${product.name}`}
                  className="max-w-full max-h-full object-contain md:group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                  loading="eager"
                  width={600}
                  height={450}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/ac_compressor.png';
                  }}
                />

                {/* Status Badges Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  {product.brand && (
                    <span className="badge-industrial bg-[#0A192F] text-white shadow-xs">
                      {product.brand}
                    </span>
                  )}
                  {product.condition && (
                    <span className="badge-industrial bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1 shadow-xs">
                      <ShieldCheck size={12} className="text-emerald-600 flex-shrink-0" />
                      <span>{product.condition}</span>
                    </span>
                  )}
                </div>

                {/* Model Code Overlay */}
                {product.code && (
                  <div className="absolute bottom-3 left-3 font-mono text-xs font-bold text-slate-700 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-300/80 shadow-xs max-w-[85%] truncate">
                    {product.code}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Thumbnail Gallery Navigation (Only if > 1 real image) */}
            {images.length > 1 && (
              <ScrollReveal delay={140} direction="up" distance={10}>
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-1 no-scrollbar" role="region" aria-label="Product thumbnails">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIdx(idx)}
                      aria-label={`View product image ${idx + 1}`}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-white border p-1.5 flex items-center justify-center cursor-pointer transition-all flex-shrink-0 focus:outline-none ${
                        selectedImgIdx === idx 
                          ? 'border-[#1D6FA3] ring-2 ring-[#1D6FA3]/30 shadow-xs' 
                          : 'border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/ac_compressor.png';
                        }}
                      />
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* Technical Verification Guarantee Bar */}
            <ScrollReveal delay={180} direction="up" distance={12}>
              <div className="bg-slate-100/90 border border-slate-200 rounded-xl p-3.5 flex items-start sm:items-center gap-3 text-xs text-slate-700">
                <PackageCheck size={18} className="text-[#1D6FA3] flex-shrink-0 mt-0.5 sm:mt-0" />
                <div className="font-sans leading-snug">
                  <strong className="font-mono text-slate-900 font-bold uppercase block text-[11px]">Technical Dispatch Ready</strong>
                  <span>Pressure-tested, electrical insulation verified, and sealed for Pan-India B2B freight.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Identity, Quick Specs & Primary Actions */}
          <div className="lg:col-span-6 space-y-5">
            
            <ScrollReveal delay={100} direction="up" distance={14}>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
                  <span>{product.brand}</span>
                  {product.code && <span>• {product.code}</span>}
                  {product.category && <span className="text-slate-400">• {product.category}</span>}
                </div>

                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F] leading-tight break-words">
                  {product.name}
                </h1>

                {product.tagline && (
                  <p className="font-mono text-xs font-semibold text-[#0EA6A6] uppercase tracking-wide">
                    {product.tagline}
                  </p>
                )}

                {product.description && (
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed pt-1">
                    {product.description}
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Quick Parametric Summary Strip */}
            <ScrollReveal delay={160} direction="up" distance={14}>
              <div className="bg-white border border-slate-200 rounded-xl p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs shadow-xs">
                {product.availability && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">AVAILABILITY</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                      <span className="truncate">{product.availability}</span>
                    </span>
                  </div>
                )}

                {product.voltage && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">VOLTAGE</span>
                    <span className="text-slate-800 font-semibold truncate block">{product.voltage}</span>
                  </div>
                )}

                {product.refrigerant && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">REFRIGERANT</span>
                    <span className="text-slate-800 font-semibold truncate block">{product.refrigerant}</span>
                  </div>
                )}

                {product.displacement && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">DISPLACEMENT</span>
                    <span className="text-slate-800 font-semibold truncate block">{product.displacement}</span>
                  </div>
                )}

                {product.type && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">DESIGN TYPE</span>
                    <span className="text-slate-800 font-semibold truncate block">{product.type}</span>
                  </div>
                )}

                {product.condition && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">CONDITION</span>
                    <span className="text-slate-800 font-semibold truncate block">{product.condition}</span>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Primary Action Buttons (Desktop & Inline Mobile) */}
            <ScrollReveal delay={200} direction="up" distance={14}>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch gap-3">
                  <button
                    onClick={() => handleOpenQuote('quote')}
                    className="flex-1 min-h-[48px] py-3.5 px-6 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all duration-150 active:scale-[0.99]"
                  >
                    <FileCheck size={16} />
                    <span>REQUEST PRICE & QUOTE</span>
                  </button>

                  <a
                    href={`https://wa.me/919920691707?text=Hello%2C%20I%20am%20inquiring%20about%20compressor%20model%20${encodeURIComponent(product.code || product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] py-3.5 px-6 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-150 shadow-xs active:scale-[0.99]"
                  >
                    <MessageSquare size={16} />
                    <span>WHATSAPP DESK</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-mono px-1">
                  <span className="flex items-center gap-1.5">
                    <Phone size={13} className="text-[#1D6FA3]" />
                    <span>Direct Technical Desk: +91 99206 91707</span>
                  </span>
                  <span>Pan-India Freight Sourcing</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Technical Nameplate Identification Box */}
            <ScrollReveal delay={240} direction="up" distance={14}>
              <div className="bg-[#0A192F] text-white rounded-xl p-5 space-y-3 border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-[#0EA6A6] font-mono text-xs font-bold uppercase tracking-wider">
                  <Camera size={16} />
                  <span>UNSURE IF THIS IS YOUR EXACT MODEL?</span>
                </div>
                <p className="text-slate-300 text-xs font-sans leading-relaxed">
                  Send us a photo of your old compressor nameplate sticker. Our Mumbai technical desk will verify mounting footprint, terminal box orientation, and suction displacement compatibility.
                </p>
                <button
                  onClick={() => handleOpenQuote('photo')}
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-lg bg-[#0EA6A6] hover:bg-[#0c8e8e] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 active:scale-[0.99]"
                >
                  <Camera size={15} />
                  <span>UPLOAD NAMEPLATE PHOTO FOR MATCHING</span>
                </button>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* ── TECHNICAL DATASHEET SPECIFICATIONS SECTION ── */}
        <ScrollReveal direction="up" distance={16}>
          <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8 space-y-6 sm:space-y-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-display font-bold text-lg sm:text-xl text-[#0A192F] uppercase tracking-tight">
                  Technical Datasheet Specifications
                </h2>
                <p className="text-slate-500 text-xs font-sans mt-0.5">
                  Verified technical parameters and operational tolerances.
                </p>
              </div>
              {product.code && (
                <span className="font-mono text-xs font-bold text-[#1D6FA3] bg-slate-100 px-3 py-1 rounded-md border border-slate-200 w-fit">
                  MODEL: {product.code}
                </span>
              )}
            </div>

            {/* Technical Parameter Categories (Single Column on Mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 font-mono text-xs">
              
              {/* Electrical Parameters */}
              {product.specs?.electrical && Object.keys(product.specs.electrical).length > 0 && (
                <div className="space-y-3 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-[#1D6FA3] uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-1.5">
                    <Zap size={15} />
                    <span>Electrical Parameters</span>
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(product.specs.electrical).map(([key, val]) => (
                      val ? (
                        <div key={key} className="flex justify-between items-center py-1 border-b border-slate-200/60 last:border-0 gap-2">
                          <span className="text-slate-400 text-[10px] uppercase">{key}:</span>
                          <span className="font-semibold text-slate-900 text-right truncate max-w-[60%]">{val}</span>
                        </div>
                      ) : null
                    ))}
                  </div>
                </div>
              )}

              {/* Thermal & Capacity Parameters */}
              {product.specs?.thermal && Object.keys(product.specs.thermal).length > 0 && (
                <div className="space-y-3 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-[#1D6FA3] uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-1.5">
                    <Thermometer size={15} />
                    <span>Thermal & Capacity</span>
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(product.specs.thermal).map(([key, val]) => (
                      val ? (
                        <div key={key} className="flex justify-between items-center py-1 border-b border-slate-200/60 last:border-0 gap-2">
                          <span className="text-slate-400 text-[10px] uppercase">{key}:</span>
                          <span className="font-semibold text-slate-900 text-right truncate max-w-[60%]">{val}</span>
                        </div>
                      ) : null
                    ))}
                  </div>
                </div>
              )}

              {/* Mechanical Parameters */}
              {product.specs?.mechanical && Object.keys(product.specs.mechanical).length > 0 && (
                <div className="space-y-3 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-[#1D6FA3] uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-1.5">
                    <Wrench size={15} />
                    <span>Mechanical & Dimensions</span>
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(product.specs.mechanical).map(([key, val]) => (
                      val ? (
                        <div key={key} className="flex justify-between items-center py-1 border-b border-slate-200/60 last:border-0 gap-2">
                          <span className="text-slate-400 text-[10px] uppercase">{key}:</span>
                          <span className="font-semibold text-slate-900 text-right truncate max-w-[60%]">{val}</span>
                        </div>
                      ) : null
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Verified Compatibility Breakdown */}
            {product.compatDetails && Object.keys(product.compatDetails).length > 0 && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-[#1D6FA3]" />
                  <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Suitable Applications & Compatible Equipment Frames
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-sans text-xs">
                  {Object.entries(product.compatDetails).map(([brandName, details]) => (
                    <div key={brandName} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <strong className="font-mono text-slate-900 text-xs uppercase block font-bold">{brandName}</strong>
                        <span className="text-slate-600 leading-snug block">{details}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </section>
        </ScrollReveal>

        {/* ── RELATED PRODUCTS SECTION ("YOU MAY ALSO NEED") ── */}
        {relatedProducts.length > 0 && (
          <ScrollReveal direction="up" distance={16}>
            <section className="space-y-5 pt-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h2 className="font-display font-extrabold text-lg sm:text-xl text-[#0A192F] uppercase tracking-tight">
                    YOU MAY ALSO NEED
                  </h2>
                  <p className="text-slate-500 text-xs font-sans mt-0.5">
                    Similar compressors matched by brand, capacity, or design.
                  </p>
                </div>
                <Link 
                  href="/products" 
                  className="font-mono text-xs text-[#1D6FA3] font-bold hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((relProd, idx) => (
                  <ScrollReveal key={relProd.id} delay={idx * 60} direction="up" distance={12}>
                    <ProductCard product={relProd} />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

      </div>

      {/* ── COMPACT MOBILE STICKY BOTTOM ACTION BAR (lg:hidden) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 flex items-center gap-2.5 lg:hidden shadow-lg mb-[env(safe-area-inset-bottom)]">
        <button
          onClick={() => handleOpenQuote('quote')}
          className="flex-1 min-h-[44px] px-4 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
        >
          <FileCheck size={15} />
          <span>REQUEST QUOTE</span>
        </button>

        <a
          href={`https://wa.me/919920691707?text=Hello%2C%20I%20am%20inquiring%20about%20compressor%20model%20${encodeURIComponent(product.code || product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] px-3.5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-150 shadow-xs active:scale-[0.98]"
        >
          <MessageSquare size={16} />
          <span className="hidden sm:inline">WHATSAPP</span>
        </a>
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
