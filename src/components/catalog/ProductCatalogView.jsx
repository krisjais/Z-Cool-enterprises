'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  RotateCcw, 
  Camera, 
  MessageSquare, 
  Phone,
  FileQuestion,
  HelpCircle
} from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import QuoteModal from '@/components/ui/QuoteModal';

export default function ProductCatalogView({
  products = [],
  initialCategory = 'All',
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);

  // Approved Primary Categories
  const categories = [
    { id: 'All', label: 'All Categories' },
    { id: 'Scroll Compressors', label: 'Scroll' },
    { id: 'Rotary Compressors', label: 'Rotary' },
    { id: 'Reciprocating Compressors', label: 'Reciprocating' },
    { id: 'VRF / DC Inverter', label: 'VRF / Inverter' },
  ];

  // Dynamically extract verified brands from catalogue products
  const brands = useMemo(() => {
    const set = new Set();
    products.forEach((p) => {
      if (p.brand && !p.brand.startsWith('Generic') && p.brand !== 'Multi-Brand') {
        set.add(p.brand);
      }
    });
    return ['All', ...Array.from(set).sort()];
  }, [products]);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      // 1. Text Search (Matches name, model code, brand, application, refrigerant, legacyTitle)
      const matchesSearch =
        !q ||
        product.name?.toLowerCase().includes(q) ||
        product.code?.toLowerCase().includes(q) ||
        product.catalogCode?.toLowerCase().includes(q) ||
        product.brand?.toLowerCase().includes(q) ||
        product.application?.toLowerCase().includes(q) ||
        product.refrigerant?.toLowerCase().includes(q) ||
        product.legacyTitle?.toLowerCase().includes(q);

      // 2. Category Filter
      const matchesCategory =
        selectedCategory === 'All' ||
        product.category === selectedCategory ||
        (selectedCategory === 'Scroll' && product.category?.includes('Scroll')) ||
        (selectedCategory === 'Rotary' && product.category?.includes('Rotary')) ||
        (selectedCategory === 'Reciprocating' && product.category?.includes('Reciprocating')) ||
        (selectedCategory === 'VRF / Inverter' && (product.category?.includes('VRF') || product.type?.includes('Inverter')));

      // 3. Brand Filter
      const matchesBrand =
        selectedBrand === 'All' ||
        product.brand?.toLowerCase() === selectedBrand.toLowerCase() ||
        (product.brand && product.brand.toLowerCase().includes(selectedBrand.toLowerCase()));

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [products, searchTerm, selectedCategory, selectedBrand]);

  const handleOpenQuote = (product = null) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedBrand('All');
  };

  const hasActiveFilters = searchTerm.trim() !== '' || selectedCategory !== 'All' || selectedBrand !== 'All';

  return (
    <div className="space-y-8">
      {/* ── 1. COMPACT PAGE HEADER & B2B SUMMARY ── */}
      <div className="border-b border-stone-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#0E4B75] mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
          <span>B2B Technical Inventory · Mumbai Desk</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Compressor Catalogue
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Commercial and industrial HVAC compressors sourced, displacement-matched, and supplied for cooling plants across India.
        </p>
      </div>

      {/* ── 2. SEARCH & FILTER CONTROLS ── */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
        
        {/* Search Bar + Brand Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          {/* Search Input */}
          <div className="sm:col-span-8 relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by model (e.g. ZR72, JT160), brand, or application..."
              className="w-full min-h-[44px] pl-10 pr-9 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0E4B75] focus:ring-2 focus:ring-[#0E4B75]/20 transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search text"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Brand Filter */}
          <div className="sm:col-span-4">
            <div className="relative">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-slate-800 font-medium focus:outline-none focus:bg-white focus:border-[#0E4B75] focus:ring-2 focus:ring-[#0E4B75]/20 cursor-pointer transition-all"
                aria-label="Filter by manufacturer brand"
              >
                <option value="All">All Manufacturers ({products.length} models)</option>
                {brands.filter(b => b !== 'All').map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">
            Category:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0E4B75] text-white shadow-2xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}

          {/* Reset Filters Shortcut */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 hover:bg-rose-50 border border-rose-200 flex items-center gap-1.5 transition-colors cursor-pointer ml-auto"
            >
              <RotateCcw size={13} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

      </div>

      {/* ── 3. RESULTS STATUS BAR ── */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
        <div>
          Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> of {products.length} compressor reference models
        </div>
        {hasActiveFilters && (
          <div className="text-slate-500 text-[11px]">
            Filters active
          </div>
        )}
      </div>

      {/* ── 4. PRODUCT GRID ── */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuoteClick={handleOpenQuote}
            />
          ))}
        </div>
      ) : (
        /* ── 5. EMPTY SEARCH STATE ── */
        <div className="bg-white border border-stone-200 rounded-xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-stone-100 border border-stone-200 mx-auto flex items-center justify-center text-slate-500">
            <FileQuestion size={28} className="text-[#0E4B75]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              No Compressors Match Your Search
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              We source and match replacement models beyond our listed catalog. You can reset your filters or send a nameplate photo for custom matching.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleResetFilters}
              className="min-h-[44px] px-5 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>Clear All Filters</span>
            </button>
            <button
              type="button"
              onClick={() => handleOpenQuote(null)}
              className="min-h-[44px] px-5 py-2.5 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Camera size={14} />
              <span>Submit Nameplate Photo for Match</span>
            </button>
          </div>
        </div>
      )}

      {/* ── 6. SIMPLE NAMEPLATE SOURCING ASSISTANCE BANNER ── */}
      <section
        aria-label="Custom Model Sourcing Assistance"
        className="bg-[#FAF9F6] border border-stone-200 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-1.5 text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Need a Specific or Discontinued Compressor?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Our Mumbai desk matches discontinued part codes, legacy scroll units, and non-standard electrical voltages directly from nameplate photos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => handleOpenQuote(null)}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
          >
            <Camera size={15} />
            <span>Upload Nameplate Photo</span>
          </button>

          <a
            href="https://wa.me/919920691707"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare size={15} />
            <span>WhatsApp Desk</span>
          </a>
        </div>
      </section>

      {/* Shared Inquiry Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setQuoteProduct(null);
        }}
        initialProduct={quoteProduct}
      />
    </div>
  );
}
