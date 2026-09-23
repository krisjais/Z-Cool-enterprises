'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Camera } from 'lucide-react';
import QuoteModal from './QuoteModal';
import { resolveImageUrl } from '@/lib/api';

export default function ProductCard({ product }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  if (!product) return null;

  return (
    <>
      <div className="card-industrial group flex flex-col h-full overflow-hidden bg-white border border-slate-200 rounded-xl transition-all duration-200 hover:border-slate-300 hover:shadow-md active:scale-[0.99] sm:active:scale-100">
        
        {/* Card Image Frame */}
        <div className="relative aspect-[4/3] bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-center overflow-hidden">
          <img
            src={resolveImageUrl(product.images?.[0])}
            alt={`${product.brand || 'Compressor'} ${product.code || product.name}`}
            className="max-w-full max-h-full object-contain md:group-hover:scale-[1.03] transition-transform duration-300 ease-out"
            loading="lazy"
            width={300}
            height={225}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/ac_compressor.png';
            }}
          />

          {/* Top Badges */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            {product.brand && (
              <span className="badge-industrial bg-[#0A192F] text-white shadow-xs">
                {product.brand}
              </span>
            )}

            {product.condition && (
              <span className="badge-industrial bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-xs">
                <ShieldCheck size={11} className="flex-shrink-0" />
                <span className="truncate">{product.condition}</span>
              </span>
            )}
          </div>

          {product.code && (
            <div className="absolute bottom-2 left-2.5 font-mono text-[10px] text-slate-600 font-bold bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded border border-slate-200/90 shadow-xs max-w-[85%] truncate">
              {product.code}
            </div>
          )}
        </div>

        {/* Card Content Body */}
        <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
          <div className="space-y-1">
            {product.category && (
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#1D6FA3] font-semibold">
                {product.category}
              </div>
            )}

            <h3 className="font-display font-bold text-slate-900 text-sm leading-snug line-clamp-2 break-words">
              <Link href={`/products/${product.id}`} className="hover:text-[#1D6FA3] transition-colors">
                {product.name}
              </Link>
            </h3>

            {(product.tagline || product.description) && (
              <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed font-sans pt-0.5">
                {product.tagline || product.description}
              </p>
            )}
          </div>

          {/* Technical Specs Key-Value Grid */}
          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200/80 space-y-1 font-mono text-[11px]">
            {product.voltage && (
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-400 text-[10px] uppercase">VOLTAGE:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[140px]">{product.voltage}</span>
              </div>
            )}
            {product.refrigerant && (
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-400 text-[10px] uppercase">REFRIGERANT:</span>
                <span className="font-semibold text-slate-800">{product.refrigerant}</span>
              </div>
            )}
            {product.application && (
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-400 text-[10px] uppercase">APPLICATION:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[140px]">{product.application}</span>
              </div>
            )}
          </div>

          {/* Card Actions (Mobile First Tap Targets) */}
          <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
            <Link
              href={`/products/${product.id}`}
              className="group/btn min-h-[40px] px-3 py-2 rounded-lg border border-slate-300 hover:border-slate-800 text-slate-800 font-mono text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all duration-150 active:bg-slate-100"
            >
              <span>Details</span>
              <ChevronRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </Link>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="min-h-[40px] px-3 py-2 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-xs transition-all duration-150 active:scale-[0.98] cursor-pointer"
            >
              <Camera size={13} />
              <span>Quote</span>
            </button>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={product}
      />
    </>
  );
}
