'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Send, 
  Cpu
} from 'lucide-react';
import QuoteModal from './QuoteModal';
import { resolveImageUrl } from '@/lib/api';

export default function ProductCard({
  product,
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

  const hasRealImage = Array.isArray(product.images) && product.images.length > 0 && product.imageType !== 'placeholder';
  const imageSrc = hasRealImage ? resolveImageUrl(product.images[0]) : null;

  // Use the exact 3 verified essential specification rows
  const specRows = product.keySpecs || [
    { label: 'Capacity', value: product.coolingCapacity || product.displacement },
    { label: 'Electrical', value: product.voltage },
    { label: 'Primary Use', value: product.application },
  ];

  return (
    <>
      <article
        className={`group flex flex-col h-full bg-white border border-stone-200 rounded-xl hover:border-slate-400 hover:shadow-sm transition-all duration-200 text-slate-900 overflow-hidden ${className}`}
      >
        {/* ── 1. HEADER BAR: BRAND & CONCISE STATUS BADGE ── */}
        <div className="px-3.5 sm:px-4 py-2.5 bg-[#FAF9F6] border-b border-stone-200 flex items-center justify-between gap-2 text-xs">
          <span className="font-bold text-slate-900 tracking-tight text-xs shrink-0">
            {product.brand || 'INDUSTRIAL'}
          </span>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-white border border-stone-200 px-2 py-0.5 rounded shadow-2xs whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E4B75] shrink-0" />
            <span>{product.verificationStatus || 'Sourcing Reference'}</span>
          </span>
        </div>

        {/* ── 2A. DEDICATED PRODUCT IMAGE / TECHNICAL SILHOUETTE AREA (NO OVERLAY) ── */}
        <div className="relative h-48 sm:h-52 bg-[#FBFBFA] flex flex-col items-center justify-center p-3 overflow-hidden">
          {hasRealImage ? (
            <Link
              href={`/products/${product.id}`}
              className="w-full h-full flex flex-col items-center justify-center relative"
              aria-label={`View details for ${product.name}`}
            >
              <img
                src={imageSrc}
                alt={`${product.brand || ''} ${product.code || product.name}`}
                className="max-h-[145px] w-auto max-w-[85%] object-contain group-hover:scale-[1.02] transition-transform duration-200 select-none"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/ac_compressor.png';
                }}
              />
              <div className="w-28 sm:w-36 h-1.5 bg-slate-900/10 rounded-full blur-[2px] mt-1 pointer-events-none" />
            </Link>
          ) : (
            /* Honest Technical Silhouette Blueprint Box */
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 bg-stone-50/90 rounded-lg border border-dashed border-stone-300">
              <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-slate-500 mb-1.5">
                <Cpu size={20} className="text-[#0E4B75]" />
              </div>
              <span className="text-xs font-bold text-slate-800">
                Technical Silhouette
              </span>
              <p className="text-[11px] text-slate-500 max-w-[210px] mt-0.5 leading-tight font-medium">
                Physical photograph awaiting workshop verification.
              </p>
            </div>
          )}
        </div>

        {/* ── 2B. SEPARATE DISCLAIMER CAPTION SUB-BAR (CLEARLY SEPARATED) ── */}
        <div className="px-3 py-1.5 bg-stone-50 border-t border-b border-stone-200 text-center">
          <p className="text-[11px] text-slate-600 leading-snug font-medium">
            {product.imageDisclaimer || 'Representative model — confirm by nameplate'}
          </p>
        </div>

        {/* ── 3. PRODUCT IDENTIFICATION & SPECIFICATIONS ── */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-4">
          <div className="space-y-1.5">
            {/* Model Code */}
            {product.code && (
              <div className="text-xs font-bold font-mono text-[#0E4B75] tracking-wide">
                MODEL: {product.code}
              </div>
            )}

            {/* Product Title */}
            <h3 className="font-bold text-slate-900 text-base leading-snug">
              <Link
                href={`/products/${product.id}`}
                className="hover:text-[#0E4B75] transition-colors line-clamp-2"
              >
                {product.name}
              </Link>
            </h3>

            {/* 1 Short Descriptive Sentence */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {product.shortDescription || product.tagline || product.description}
            </p>
          </div>

          {/* ── 4. EXACTLY 3 ESSENTIAL SPECIFICATION ROWS ── */}
          {specRows.length > 0 && (
            <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
              {specRows.slice(0, 3).map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-2.5">
                  <span className="text-slate-500 shrink-0 text-[11px] font-medium">
                    {item.label}:
                  </span>
                  <span className="text-slate-900 font-semibold text-right text-[11px] leading-tight">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ── 5. CARD ACTIONS (CONSISTENTLY ALIGNED AT BOTTOM) ── */}
          <div className="pt-3 border-t border-stone-200 grid grid-cols-2 gap-2 mt-auto">
            {/* Secondary Action: View Details */}
            <Link
              href={`/products/${product.id}`}
              className="min-h-[42px] px-3 py-2 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors text-center"
            >
              <span>View Details</span>
              <ChevronRight size={14} className="shrink-0 text-slate-500" />
            </Link>

            {/* Primary Action: Enquire Availability */}
            <button
              type="button"
              onClick={handleQuote}
              className="min-h-[42px] px-3 py-2 bg-[#0E4B75] hover:bg-[#093757] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center shadow-2xs"
            >
              <Send size={13} className="shrink-0" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </article>

      {/* Internal Quote Modal fallback if card is clicked standalone */}
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
