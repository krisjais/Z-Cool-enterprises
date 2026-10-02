import React from 'react';
import { getProducts, getCategories } from '@/lib/api';
import ProductCatalogView from '@/components/catalog/ProductCatalogView';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'Compressor Inventory & Catalog | Zcool Enterprises',
  description: 'Browse available refurbished and replacement AC compressors by brand, model code, compressor type, application, and condition. Mumbai sourcing desk.',
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const initialCategory = resolvedParams?.category || 'All';

  const [products, catData] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const inventoryCount = Array.isArray(products) ? products.length : 0;

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A] py-6 sm:py-8 lg:py-10">
      <Container className="space-y-6 sm:space-y-8">
        
        {/* ── COMPACT INDUSTRIAL HERO ── */}
        <section
          aria-label="Catalogue Header"
          className="bg-[#0A192F] text-white rounded-lg p-5 sm:p-7 lg:p-8 border border-white/10 relative overflow-hidden shadow-sm"
        >
          {/* Subtle Technical Engineering Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />
          
          <div className="relative z-10 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* SMALL EYEBROW */}
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                <span>B2B TECHNICAL INVENTORY</span>
              </div>

              {/* DYNAMIC STOCK INDICATOR */}
              <div className="inline-flex items-center gap-2 font-mono text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white tracking-wide">
                  {inventoryCount} COMPRESSOR MODEL{inventoryCount !== 1 ? 'S' : ''} AVAILABLE
                </span>
              </div>
            </div>

            {/* MAIN HEADING */}
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              COMPRESSOR INVENTORY
            </h1>

            {/* DESCRIPTION */}
            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl font-sans leading-relaxed">
              Commercial and industrial HVAC compressor inventory. Verified scroll, reciprocating, rotary, and inverter replacement units inspected, bench-tested, and prepared for Pan-India freight dispatch.
            </p>
          </div>
        </section>

        {/* ── PRODUCT CATALOG VIEW (Search, Filters, Toolbar, Grid, Mobile Drawer, Quick View) ── */}
        <ProductCatalogView
          products={products}
          initialCategory={initialCategory}
          availableCategories={catData?.categories || []}
        />

      </Container>
    </div>
  );
}
