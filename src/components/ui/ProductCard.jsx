'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Send, Eye } from 'lucide-react';
import QuoteModal from './QuoteModal';
import { resolveImageUrl } from '@/lib/api';

export default function ProductCard({
  product,
  onQuickView,
  onQuoteClick,
  className = '',
}) {
  const [internalQuoteOpen, setInternalQuoteOpen] = useState(false);

  if (!product) return null;

  const handleQuote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuoteClick) {
      onQuoteClick(product);
    } else {
      setInternalQuoteOpen(true);
    }
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  const imageSrc = resolveImageUrl(product.images?.[0]);

  // Clean condition label from verified data
  const conditionLabel = product.condition || product.statusBadge || 'Refurbished';

  // Key technical snapshot fields - ONLY display fields that contain actual data
  const techFields = [
    { label: 'TYPE', value: product.type || product.category },
    { label: 'APPLICATION', value: product.application },
    { label: 'REFRIGERANT', value: product.refrigerant },
    { label: 'VOLTAGE', value: product.voltage },
  ].filter((f) => Boolean(f.value && typeof f.value === 'string' && f.value.trim() !== ''));

  return (
    <>
      <article
        className={`group flex flex-col h-full bg-white border border-slate-200/90 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-200 text-[#0F172A] overflow-hidden ${className}`}
      >
        {/* ── 1. BRAND & CONDITION HEADER BAR ── */}
        <div className="px-4 py-2.5 bg-slate-50/80 border-b border-slate-200/80 flex items-center justify-between gap-2 text-xs">
          <span className="font-mono font-bold text-xs uppercase tracking-wider text-slate-800">
            {product.brand || 'INDUSTRIAL'}
          </span>

          {conditionLabel && (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded tracking-wide uppercase truncate max-w-[190px]">
              <ShieldCheck size={11} className="flex-shrink-0 text-emerald-600" />
              <span className="truncate">{conditionLabel}</span>
            </span>
          )}
        </div>

        {/* ── 2. LARGE PRODUCT IMAGE AREA (240–280px tall) ── */}
        <div className="relative h-60 sm:h-64 md:h-68 bg-[#FAFAFA] flex flex-col items-center justify-center p-5 overflow-hidden border-b border-slate-200/80">
          <Link
            href={`/products/${product.id}`}
            className="w-full h-full flex flex-col items-center justify-center relative z-10"
            aria-label={`View details for ${product.name}`}
          >
            <img
              src={imageSrc}
              alt={`${product.brand || ''} ${product.code || product.name}`}
              className="max-h-[195px] w-auto max-w-[90%] object-contain group-hover:scale-[1.03] transition-transform duration-300 ease-out select-none"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/ac_compressor.png';
              }}
            />
            {/* Subtle floor contact shadow */}
            <div className="w-32 sm:w-40 h-2 bg-slate-900/10 rounded-full blur-[3px] mt-1 pointer-events-none" />
          </Link>

          {/* Quick View Button (hover on desktop or interactive) */}
          {onQuickView && (
            <button
              onClick={handleQuickView}
              className="absolute bottom-2.5 right-2.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 font-mono text-[11px] font-semibold bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-200 shadow-xs flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
              aria-label={`Quick view specifications for ${product.name}`}
            >
              <Eye size={12} className="text-[#1D6FA3]" />
              <span>Quick Spec</span>
            </button>
          )}
        </div>

        {/* ── 3. PRODUCT IDENTIFICATION ── */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-4">
          <div className="space-y-1.5">
            {/* Model Code */}
            {product.code && (
              <div className="font-mono text-xs font-bold text-[#1D6FA3] tracking-wide uppercase">
                MODEL: {product.code}
              </div>
            )}

            {/* Product Name */}
            <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
              <Link
                href={`/products/${product.id}`}
                className="hover:text-[#1D6FA3] transition-colors line-clamp-2"
              >
                {product.name}
              </Link>
            </h3>

            {/* Short Description / Tagline */}
            {(product.tagline || product.description) && (
              <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed font-sans">
                {product.tagline || product.description}
              </p>
            )}
          </div>

          {/* ── 4. TECHNICAL SNAPSHOT (Clean Aligned Table, NOT mini-cards) ── */}
          {techFields.length > 0 && (
            <div className="pt-3 border-t border-slate-200/80">
              <div className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>TECHNICAL SNAPSHOT</span>
                <span className="text-[9px] text-slate-400">BENCH VERIFIED</span>
              </div>

              <div className="divide-y divide-slate-100 font-mono text-xs">
                {techFields.map((field) => (
                  <div
                    key={field.label}
                    className="py-1.5 flex items-baseline justify-between gap-3"
                  >
                    <span className="text-slate-500 text-[10px] font-medium tracking-wider uppercase flex-shrink-0">
                      {field.label}
                    </span>
                    <span className="text-slate-800 text-[11px] font-semibold text-right truncate max-w-[65%]">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── 5. PRODUCT CARD ACTIONS (VIEW PRODUCT & REQUEST QUOTE) ── */}
          <div className="pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2.5">
            {/* Primary Action: VIEW PRODUCT */}
            <Link
              href={`/products/${product.id}`}
              className="group/cta min-h-[40px] px-3 py-2 bg-[#0A192F] hover:bg-slate-800 text-white rounded font-mono text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.99]"
            >
              <span>View Product</span>
              <ChevronRight
                size={13}
                className="group-hover/cta:translate-x-0.5 transition-transform duration-150"
              />
            </Link>

            {/* Secondary Action: REQUEST QUOTE */}
            <button
              type="button"
              onClick={handleQuote}
              className="min-h-[40px] px-3 py-2 bg-white hover:bg-slate-50 text-[#1D6FA3] border border-[#1D6FA3]/40 hover:border-[#1D6FA3] rounded font-mono text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer active:scale-[0.99]"
            >
              <Send size={12} className="rotate-45" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </article>

      {/* Internal Quote Modal fallback if card is used standalone on another page */}
      {!onQuoteClick && (
        <QuoteModal
          isOpen={internalQuoteOpen}
          onClose={() => setInternalQuoteOpen(false)}
          initialProduct={product}
        />
      )}
    </>
  );
}
