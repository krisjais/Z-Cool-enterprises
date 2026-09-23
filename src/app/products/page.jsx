import React from 'react';
import { getProducts } from '@/lib/api';
import ProductCatalogView from '@/components/catalog/ProductCatalogView';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Compressor Inventory & Catalog | Zcool Enterprises',
  description: 'Browse available refurbished and replacement AC compressors by brand, model code, compressor type, application, and condition. Mumbai sourcing desk.',
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await getProducts();
  const inventoryCount = products.length;

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A] py-6 sm:py-10 lg:py-12">
      <Container className="space-y-6 sm:space-y-8">
        
        {/* Page Header */}
        <div className="bg-[#0A192F] text-white rounded-xl p-5 sm:p-8 space-y-3.5 border border-white/10 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />
          
          <div className="relative z-10 space-y-3">
            <ScrollReveal delay={0} direction="up" distance={10}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6] animate-pulse" />
                  <span>B2B TECHNICAL INVENTORY CATALOG</span>
                </div>

                <span className="font-mono text-[11px] sm:text-xs text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  STOCK INVENTORY: <strong className="text-emerald-400 font-bold">{inventoryCount} MODEL(S) AVAILABLE</strong>
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80} direction="up" distance={14}>
              <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                COMPRESSOR INVENTORY
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160} direction="up" distance={14}>
              <p className="text-slate-300 text-xs sm:text-sm max-w-3xl font-sans leading-relaxed">
                Browse refurbished and replacement compressors by brand, model, type, application, and condition. All units are checked and prepared for Pan-India freight dispatch.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Product Catalog View Component (Search, Filters, Mobile Bottom Sheet, Grid) */}
        <ProductCatalogView products={products} />

      </Container>
    </div>
  );
}
