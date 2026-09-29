'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  X,
  Camera,
  ChevronRight,
  SlidersHorizontal,
  ArrowUpDown,
  ShieldCheck,
  Send,
  Eye,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import QuoteModal from '@/components/ui/QuoteModal';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { resolveImageUrl } from '@/lib/api';

export default function ProductCatalogView({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);

  const searchInputRef = useRef(null);

  // Keyboard shortcut listener: '/' focuses search, 'Esc' clears search / closes modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA' &&
        !isMobileDrawerOpen &&
        !quickViewProduct &&
        !isQuoteModalOpen
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape') {
        if (quickViewProduct) {
          setQuickViewProduct(null);
        } else if (isMobileDrawerOpen) {
          setIsMobileDrawerOpen(false);
        } else if (document.activeElement === searchInputRef.current) {
          setSearchTerm('');
          searchInputRef.current?.blur();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileDrawerOpen, quickViewProduct, isQuoteModalOpen]);

  // Lock body scroll when mobile drawer or quick view is open
  useEffect(() => {
    if (isMobileDrawerOpen || quickViewProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileDrawerOpen, quickViewProduct]);

  // Extract actual unique filter options present in the dataset with real counts
  const availableTypes = useMemo(() => {
    const map = new Map();
    products.forEach((p) => {
      const type = p.category || p.type;
      if (type) {
        map.set(type, (map.get(type) || 0) + 1);
      }
    });
    return [
      { label: 'All', count: products.length },
      ...Array.from(map.entries()).map(([label, count]) => ({ label, count })),
    ];
  }, [products]);

  const availableBrands = useMemo(() => {
    const map = new Map();
    products.forEach((p) => {
      if (p.brand) {
        map.set(p.brand, (map.get(p.brand) || 0) + 1);
      }
    });
    return [
      { label: 'All', count: products.length },
      ...Array.from(map.entries()).map(([label, count]) => ({ label, count })),
    ];
  }, [products]);

  const availableConditions = useMemo(() => {
    const map = new Map();
    products.forEach((p) => {
      const cond = p.condition;
      if (cond) {
        map.set(cond, (map.get(cond) || 0) + 1);
      }
    });
    return [
      { label: 'All', count: products.length },
      ...Array.from(map.entries()).map(([label, count]) => ({ label, count })),
    ];
  }, [products]);

  const availableAvailabilities = useMemo(() => {
    const map = new Map();
    products.forEach((p) => {
      const avail = p.availability;
      if (avail) {
        map.set(avail, (map.get(avail) || 0) + 1);
      }
    });
    return [
      { label: 'All', count: products.length },
      ...Array.from(map.entries()).map(([label, count]) => ({ label, count })),
    ];
  }, [products]);

  // Normalized search and multi-criteria local filtering
  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    let result = products.filter((product) => {
      // 1. Search Query: matches name, code, brand, category, type, application, refrigerant, condition
      const matchesSearch =
        query === '' ||
        product.name?.toLowerCase().includes(query) ||
        product.code?.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query) ||
        product.type?.toLowerCase().includes(query) ||
        product.application?.toLowerCase().includes(query) ||
        product.refrigerant?.toLowerCase().includes(query) ||
        product.condition?.toLowerCase().includes(query);

      // 2. Type Filter
      const matchesType =
        selectedType === 'All' ||
        product.category === selectedType ||
        product.type === selectedType;

      // 3. Brand Filter
      const matchesBrand =
        selectedBrand === 'All' || product.brand === selectedBrand;

      // 4. Condition Filter
      const matchesCondition =
        selectedCondition === 'All' || product.condition === selectedCondition;

      // 5. Availability Filter
      const matchesAvailability =
        selectedAvailability === 'All' ||
        product.availability === selectedAvailability;

      return (
        matchesSearch &&
        matchesType &&
        matchesBrand &&
        matchesCondition &&
        matchesAvailability
      );
    });

    // Sort Results using only implemented criteria
    if (sortBy === 'model-asc') {
      result.sort((a, b) => (a.code || a.name || '').localeCompare(b.code || b.name || ''));
    } else if (sortBy === 'model-desc') {
      result.sort((a, b) => (b.code || b.name || '').localeCompare(a.code || a.name || ''));
    } else if (sortBy === 'brand-asc') {
      result.sort((a, b) => (a.brand || '').localeCompare(b.brand || ''));
    }

    return result;
  }, [
    products,
    searchTerm,
    selectedType,
    selectedBrand,
    selectedCondition,
    selectedAvailability,
    sortBy,
  ]);

  const activeFilterCount =
    (selectedType !== 'All' ? 1 : 0) +
    (selectedBrand !== 'All' ? 1 : 0) +
    (selectedCondition !== 'All' ? 1 : 0) +
    (selectedAvailability !== 'All' ? 1 : 0) +
    (searchTerm.trim() !== '' ? 1 : 0);

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedType('All');
    setSelectedBrand('All');
    setSelectedCondition('All');
    setSelectedAvailability('All');
    setSortBy('relevance');
  };

  const openQuoteForProduct = (product = null) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="space-y-6">
      
      {/* ── 1. PROMINENT SEARCH BAR & QUICK CONTROLS ── */}
      <section
        aria-label="Catalogue Search and Controls"
        className="bg-white border border-slate-200/90 rounded-lg p-3 sm:p-4 shadow-xs space-y-3"
      >
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          
          {/* Main Search Input */}
          <div className="relative flex-grow">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search model, brand, code, application..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 sm:py-2.5 bg-slate-50 hover:bg-slate-100/50 border border-slate-300 rounded font-mono text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D6FA3] focus:bg-white focus:ring-1 focus:ring-[#1D6FA3]/30 transition-all duration-150"
              aria-label="Search compressor inventory"
            />
            
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              {searchTerm ? (
                <button
                  onClick={() => setSearchTerm('')}
                  className="p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer rounded"
                  aria-label="Clear search input"
                >
                  <X size={16} />
                </button>
              ) : (
                <span className="hidden sm:inline-block font-mono text-[10px] text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded border border-slate-300/60 pointer-events-none">
                  /
                </span>
              )}
            </div>
          </div>

          {/* Mobile & Tablet Controls Bar (Filter drawer trigger & Sort) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="lg:hidden flex-1 flex items-center justify-center gap-2 min-h-[42px] px-4 py-2 bg-[#0A192F] hover:bg-slate-800 text-white rounded font-mono text-xs font-bold uppercase tracking-wider cursor-pointer active:scale-[0.99] transition-all"
              aria-label="Open filter drawer"
            >
              <SlidersHorizontal size={14} className="text-[#0EA6A6]" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#1D6FA3] text-white text-[10px] font-bold flex items-center justify-center ml-0.5">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort Control */}
            <div className="flex items-center gap-2 font-mono text-xs text-slate-600 flex-1 sm:flex-initial">
              <label htmlFor="catalog-sort" className="sr-only">
                Sort catalogue products
              </label>
              <div className="relative w-full sm:w-auto">
                <select
                  id="catalog-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-auto min-h-[42px] px-3 py-2 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer transition-colors"
                >
                  <option value="relevance">Sort: Relevance</option>
                  <option value="model-asc">Sort: Model (A – Z)</option>
                  <option value="model-desc">Sort: Model (Z – A)</option>
                  <option value="brand-asc">Sort: Brand (A – Z)</option>
                </select>
              </div>
            </div>

          </div>

        </div>

        {/* ── Active Filter Chips Bar ── */}
        {activeFilterCount > 0 && (
          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-full">
              <span className="text-slate-400 text-[10px] uppercase font-bold flex-shrink-0">
                ACTIVE FILTERS:
              </span>

              {searchTerm && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-0.5 rounded text-[11px] font-medium flex-shrink-0">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="p-0.5 hover:text-slate-900 cursor-pointer"
                    aria-label="Remove search filter"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {selectedType !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-0.5 rounded text-[11px] font-medium flex-shrink-0">
                  Type: {selectedType}
                  <button
                    onClick={() => setSelectedType('All')}
                    className="p-0.5 hover:text-slate-900 cursor-pointer"
                    aria-label="Remove type filter"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {selectedBrand !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-0.5 rounded text-[11px] font-medium flex-shrink-0">
                  Brand: {selectedBrand}
                  <button
                    onClick={() => setSelectedBrand('All')}
                    className="p-0.5 hover:text-slate-900 cursor-pointer"
                    aria-label="Remove brand filter"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {selectedCondition !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-0.5 rounded text-[11px] font-medium flex-shrink-0">
                  Condition: {selectedCondition}
                  <button
                    onClick={() => setSelectedCondition('All')}
                    className="p-0.5 hover:text-slate-900 cursor-pointer"
                    aria-label="Remove condition filter"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {selectedAvailability !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-0.5 rounded text-[11px] font-medium flex-shrink-0">
                  Status: {selectedAvailability}
                  <button
                    onClick={() => setSelectedAvailability('All')}
                    className="p-0.5 hover:text-slate-900 cursor-pointer"
                    aria-label="Remove availability filter"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}
            </div>

            <button
              onClick={resetAllFilters}
              className="text-[11px] font-mono text-slate-500 hover:text-red-600 font-semibold underline flex-shrink-0 cursor-pointer ml-1"
            >
              Clear All
            </button>
          </div>
        )}
      </section>

      {/* ── 2. TWO-COLUMN LAYOUT: STICKY TECHNICAL FILTER SIDEBAR + INVENTORY GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* ── DESKTOP STICKY TECHNICAL FILTER PANEL ── */}
        <aside
          aria-label="Catalogue Technical Filters"
          className="hidden lg:block lg:col-span-3 space-y-4 bg-white border border-slate-200/90 rounded-lg p-5 shadow-xs sticky top-[84px]"
        >
          <div className="flex items-center justify-between border-b border-slate-200/90 pb-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider">
              <Filter size={14} className="text-[#1D6FA3]" />
              <span>Technical Filters</span>
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="font-mono text-[11px] text-[#1D6FA3] hover:underline cursor-pointer font-bold"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Filter 1: Compressor Type */}
          <div className="space-y-1.5">
            <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Compressor Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer"
            >
              {availableTypes.map((t) => (
                <option key={t.label} value={t.label}>
                  {t.label === 'All' ? 'All Types' : `${t.label} (${t.count})`}
                </option>
              ))}
            </select>
          </div>

          {/* Filter 2: Manufacturer / Brand */}
          <div className="space-y-1.5">
            <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Manufacturer / Brand
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer"
            >
              {availableBrands.map((b) => (
                <option key={b.label} value={b.label}>
                  {b.label === 'All' ? 'All Brands' : `${b.label} (${b.count})`}
                </option>
              ))}
            </select>
          </div>

          {/* Filter 3: Condition Standard */}
          <div className="space-y-1.5">
            <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Condition & Testing
            </label>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer"
            >
              {availableConditions.map((c) => (
                <option key={c.label} value={c.label}>
                  {c.label === 'All' ? 'All Conditions' : `${c.label} (${c.count})`}
                </option>
              ))}
            </select>
          </div>

          {/* Filter 4: Stock Availability */}
          <div className="space-y-1.5">
            <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Stock Availability
            </label>
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer"
            >
              {availableAvailabilities.map((a) => (
                <option key={a.label} value={a.label}>
                  {a.label === 'All' ? 'All Stock Statuses' : `${a.label} (${a.count})`}
                </option>
              ))}
            </select>
          </div>

          {/* Technical Sourcing Help Box */}
          <div className="pt-4 border-t border-slate-200/90 space-y-2.5 bg-[#0A192F] text-white p-4 rounded-lg">
            <span className="font-mono text-[10px] text-[#0EA6A6] uppercase font-bold tracking-widest block">
              CAN'T FIND YOUR MODEL?
            </span>
            <p className="text-[11px] font-sans text-slate-300 leading-relaxed">
              Send your compressor nameplate photo for technical identification and custom sourcing.
            </p>
            <button
              type="button"
              onClick={() => openQuoteForProduct(null)}
              className="w-full py-2 bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-[11px] font-bold uppercase rounded flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-xs"
            >
              <Camera size={13} />
              <span>Send Nameplate</span>
            </button>
          </div>
        </aside>

        {/* ── 3. PRODUCT INVENTORY RESULTS COLUMN ── */}
        <main className="lg:col-span-9 space-y-5">
          
          {/* Clean Result Toolbar (Section 6) */}
          <div className="flex items-center justify-between font-mono text-xs text-slate-600 border-b border-slate-200/90 pb-3">
            <span className="font-bold text-slate-800 tracking-wide">
              SHOWING {filteredProducts.length} COMPRESSOR MODEL{filteredProducts.length !== 1 ? 'S' : ''}
            </span>
            <span className="text-[11px] text-slate-400 uppercase hidden sm:inline">
              MUMBAI CENTRAL SOURCING DESK
            </span>
          </div>

          {/* Grid vs Empty State */}
          {filteredProducts.length === 0 ? (
            /* Professional Empty State (Section 15) */
            <div className="bg-white border border-slate-200/90 rounded-lg p-8 sm:p-12 text-center space-y-4 max-w-lg mx-auto shadow-xs">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto border border-slate-200">
                <Search size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-slate-900 uppercase tracking-tight">
                  No Matching Compressors
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  No compressor models matched your search or active filters.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded p-3.5 text-left text-xs font-mono text-slate-600 space-y-1">
                <span className="font-bold text-slate-700 block uppercase text-[10px] tracking-wider">
                  Suggestions:
                </span>
                <p>• Try another model code (e.g. ZR72, JT160, HQ034)</p>
                <p>• Filter by manufacturer (Copeland, Daikin, Danfoss, LG)</p>
                <p>• Reset compressor type or condition filters to "All"</p>
                <p>• Broaden application keywords (HVAC, Chiller, Cold Storage)</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="w-full sm:w-auto px-4 py-2.5 min-h-[40px] bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded font-mono text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Clear Filters
                </button>
                <button
                  type="button"
                  onClick={() => openQuoteForProduct(null)}
                  className="w-full sm:w-auto px-4 py-2.5 min-h-[40px] bg-[#1D6FA3] hover:bg-[#165680] text-white rounded font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Camera size={14} />
                  <span>Request Custom Sourcing</span>
                </button>
              </div>
            </div>
          ) : (
            /* Product Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {filteredProducts.map((product, idx) => (
                <ScrollReveal
                  key={product.id}
                  delay={Math.min(idx * 40, 240)}
                  direction="up"
                  distance={12}
                >
                  <ProductCard
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                    onQuoteClick={(p) => openQuoteForProduct(p)}
                  />
                </ScrollReveal>
              ))}
            </div>
          )}

        </main>

      </div>

      {/* ── 4. LIGHTWEIGHT QUICK VIEW MODAL (Section 14) ── */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-[99999] bg-[#0A192F]/80 backdrop-blur-xs flex items-center justify-center p-4 transition-opacity duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setQuickViewProduct(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Quick View Specifications for ${quickViewProduct.name}`}
        >
          <div className="w-full max-w-2xl bg-white rounded-lg border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
                  {quickViewProduct.brand}
                </span>
                <span className="text-slate-300">/</span>
                <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase">
                  {quickViewProduct.code}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                className="p-1 text-slate-400 hover:text-slate-800 rounded transition-colors cursor-pointer"
                aria-label="Close quick view"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                {/* Product Image Frame */}
                <div className="h-56 bg-[#FAFAFA] border border-slate-200/80 rounded flex flex-col items-center justify-center p-4">
                  <img
                    src={resolveImageUrl(quickViewProduct.images?.[0])}
                    alt={quickViewProduct.name}
                    className="max-h-[170px] w-auto max-w-[90%] object-contain select-none"
                  />
                  <div className="w-32 h-2 bg-slate-900/10 rounded-full blur-[3px] mt-1" />
                </div>

                {/* Identification & Condition */}
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded tracking-wide uppercase">
                    <ShieldCheck size={11} className="text-emerald-600" />
                    <span>{quickViewProduct.condition || 'Refurbished'}</span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {quickViewProduct.name}
                  </h3>

                  {(quickViewProduct.tagline || quickViewProduct.description) && (
                    <p className="text-slate-600 text-xs font-sans leading-relaxed">
                      {quickViewProduct.tagline || quickViewProduct.description}
                    </p>
                  )}

                  <div className="pt-1 flex items-center gap-2 font-mono text-[11px] text-slate-500">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Pan-India Freight Ready</span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="border border-slate-200 rounded overflow-hidden">
                <div className="bg-slate-50 px-3.5 py-2 border-b border-slate-200 font-mono text-[10px] font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                  <span>TECHNICAL SPECIFICATIONS SNAPSHOT</span>
                  <span className="text-slate-400">BENCH VERIFIED</span>
                </div>
                <div className="divide-y divide-slate-100 font-mono text-xs">
                  {quickViewProduct.type && (
                    <div className="px-3.5 py-2 flex items-center justify-between">
                      <span className="text-slate-500 text-[11px] uppercase">TYPE:</span>
                      <span className="font-semibold text-slate-800">{quickViewProduct.type}</span>
                    </div>
                  )}
                  {quickViewProduct.application && (
                    <div className="px-3.5 py-2 flex items-center justify-between">
                      <span className="text-slate-500 text-[11px] uppercase">APPLICATION:</span>
                      <span className="font-semibold text-slate-800 truncate max-w-[280px]">{quickViewProduct.application}</span>
                    </div>
                  )}
                  {quickViewProduct.refrigerant && (
                    <div className="px-3.5 py-2 flex items-center justify-between">
                      <span className="text-slate-500 text-[11px] uppercase">REFRIGERANT:</span>
                      <span className="font-semibold text-slate-800">{quickViewProduct.refrigerant}</span>
                    </div>
                  )}
                  {quickViewProduct.voltage && (
                    <div className="px-3.5 py-2 flex items-center justify-between">
                      <span className="text-slate-500 text-[11px] uppercase">VOLTAGE:</span>
                      <span className="font-semibold text-slate-800">{quickViewProduct.voltage}</span>
                    </div>
                  )}
                  {quickViewProduct.displacement && (
                    <div className="px-3.5 py-2 flex items-center justify-between">
                      <span className="text-slate-500 text-[11px] uppercase">DISPLACEMENT:</span>
                      <span className="font-semibold text-slate-800">{quickViewProduct.displacement}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-2.5">
              <Link
                href={`/products/${quickViewProduct.id}`}
                className="w-full sm:w-auto px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-mono text-xs font-bold uppercase tracking-wider text-center transition-colors"
                onClick={() => setQuickViewProduct(null)}
              >
                View Full Product
              </Link>
              <button
                type="button"
                onClick={() => {
                  const prod = quickViewProduct;
                  setQuickViewProduct(null);
                  openQuoteForProduct(prod);
                }}
                className="w-full sm:w-auto px-4 py-2 bg-[#1D6FA3] hover:bg-[#165680] text-white rounded font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send size={12} className="rotate-45" />
                <span>Request Quote</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── 5. MOBILE FILTER BOTTOM-SHEET DRAWER (Section 16) ── */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-[#0A192F]/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMobileDrawerOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Filter compressor catalogue"
        >
          <div className="w-full max-w-md bg-white rounded-t-xl sm:rounded-lg max-h-[85vh] p-5 space-y-5 overflow-y-auto flex flex-col justify-between shadow-2xl border border-slate-200 animate-in slide-in-from-bottom duration-200">
            
            {/* Drawer Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#0A192F] uppercase">
                  <Filter size={15} className="text-[#1D6FA3]" />
                  <span>Filter Catalogue</span>
                  {activeFilterCount > 0 && (
                    <span className="text-xs bg-[#1D6FA3] text-white px-2 py-0.5 rounded font-bold">
                      {activeFilterCount} Active
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 rounded transition-colors cursor-pointer"
                  aria-label="Close filter drawer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Filter 1: Compressor Type */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold text-slate-700 uppercase">
                  Compressor Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full min-h-[42px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3]"
                >
                  {availableTypes.map((t) => (
                    <option key={t.label} value={t.label}>
                      {t.label === 'All' ? 'All Types' : `${t.label} (${t.count})`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Filter 2: Manufacturer / Brand */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold text-slate-700 uppercase">
                  Manufacturer / Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full min-h-[42px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3]"
                >
                  {availableBrands.map((b) => (
                    <option key={b.label} value={b.label}>
                      {b.label === 'All' ? 'All Brands' : `${b.label} (${b.count})`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Filter 3: Condition Standard */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold text-slate-700 uppercase">
                  Condition & Testing
                </label>
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full min-h-[42px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3]"
                >
                  {availableConditions.map((c) => (
                    <option key={c.label} value={c.label}>
                      {c.label === 'All' ? 'All Conditions' : `${c.label} (${c.count})`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Filter 4: Stock Availability */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold text-slate-700 uppercase">
                  Stock Availability
                </label>
                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full min-h-[42px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3]"
                >
                  {availableAvailabilities.map((a) => (
                    <option key={a.label} value={a.label}>
                      {a.label === 'All' ? 'All Stock Statuses' : `${a.label} (${a.count})`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-full min-h-[44px] py-2.5 bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase rounded shadow-xs transition-colors cursor-pointer"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>

              <button
                type="button"
                onClick={() => {
                  resetAllFilters();
                  setIsMobileDrawerOpen(false);
                }}
                className="w-full min-h-[40px] py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold uppercase rounded border border-slate-300 transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── 6. GLOBAL QUOTE REQUEST MODAL ── */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={quoteProduct}
      />
    </div>
  );
}
