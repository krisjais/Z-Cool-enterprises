'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, X, Camera, ChevronRight, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import QuoteModal from '@/components/ui/QuoteModal';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProductCatalogView({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedApp, setSelectedApp] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);

  // Close drawer on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileDrawerOpen(false);
      }
    };
    if (isMobileDrawerOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileDrawerOpen]);

  // Extract actual unique filter options present in dataset
  const availableTypes = useMemo(() => {
    const types = new Set(products.map((p) => p.category).filter(Boolean));
    return ['All', ...Array.from(types)];
  }, [products]);

  const availableBrands = useMemo(() => {
    const brands = new Set(products.map((p) => p.brand).filter(Boolean));
    return ['All', ...Array.from(brands)];
  }, [products]);

  const availableConditions = useMemo(() => {
    const conds = new Set(products.map((p) => p.condition).filter(Boolean));
    return ['All', ...Array.from(conds)];
  }, [products]);

  const availableAvailabilities = useMemo(() => {
    const avail = new Set(products.map((p) => p.availability).filter(Boolean));
    return ['All', ...Array.from(avail)];
  }, [products]);

  // Normalized search and multi-criteria local filtering
  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    let result = products.filter((product) => {
      // 1. Search Query
      const matchesSearch =
        normalizedQuery === '' ||
        product.name?.toLowerCase().includes(normalizedQuery) ||
        product.code?.toLowerCase().includes(normalizedQuery) ||
        product.brand?.toLowerCase().includes(normalizedQuery) ||
        product.category?.toLowerCase().includes(normalizedQuery) ||
        product.type?.toLowerCase().includes(normalizedQuery);

      // 2. Type Filter
      const matchesType =
        selectedType === 'All' || product.category === selectedType;

      // 3. Brand Filter
      const matchesBrand =
        selectedBrand === 'All' || product.brand === selectedBrand;

      // 4. Application Filter
      const matchesApp =
        selectedApp === 'All' || product.application?.toLowerCase().includes(selectedApp.toLowerCase());

      // 5. Condition Filter
      const matchesCondition =
        selectedCondition === 'All' || product.condition === selectedCondition;

      // 6. Availability Filter
      const matchesAvailability =
        selectedAvailability === 'All' || product.availability === selectedAvailability;

      return (
        matchesSearch &&
        matchesType &&
        matchesBrand &&
        matchesApp &&
        matchesCondition &&
        matchesAvailability
      );
    });

    // Sort Results
    if (sortBy === 'brand-asc') {
      result.sort((a, b) => (a.brand || '').localeCompare(b.brand || ''));
    } else if (sortBy === 'model-asc') {
      result.sort((a, b) => (a.code || '').localeCompare(b.code || ''));
    } else if (sortBy === 'in-stock') {
      result.sort((a, b) => ((a.availability || '').includes('In Stock') ? -1 : 1));
    }

    return result;
  }, [
    products,
    searchTerm,
    selectedType,
    selectedBrand,
    selectedApp,
    selectedCondition,
    selectedAvailability,
    sortBy,
  ]);

  const activeFilterCount =
    (selectedType !== 'All' ? 1 : 0) +
    (selectedBrand !== 'All' ? 1 : 0) +
    (selectedApp !== 'All' ? 1 : 0) +
    (selectedCondition !== 'All' ? 1 : 0) +
    (selectedAvailability !== 'All' ? 1 : 0) +
    (searchTerm !== '' ? 1 : 0);

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedType('All');
    setSelectedBrand('All');
    setSelectedApp('All');
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
      
      {/* ── SEARCH & TOP CONTROL BAR (MOBILE FIRST) ── */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-4">
        
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
          
          {/* Prominent Full-Width Search Input */}
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search model, brand, code (e.g. ZR72, Copeland)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-3 sm:py-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D6FA3] focus:bg-white focus:ring-1 focus:ring-[#1D6FA3]/30 transition-all duration-150"
              aria-label="Search compressor inventory"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Clear search text"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Mobile Filter & Sort Control Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mobile Filter Drawer Trigger (Visible below lg breakpoint) */}
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="lg:hidden flex-1 flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 bg-[#0A192F] hover:bg-slate-800 text-white border border-[#0A192F] rounded-lg font-mono text-xs font-bold uppercase tracking-wider cursor-pointer active:scale-[0.99] transition-all duration-150"
              aria-label="Open filter menu"
            >
              <SlidersHorizontal size={15} className="text-[#0EA6A6]" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#1D6FA3] text-white text-[10px] font-bold flex items-center justify-center ml-0.5">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sorting Select Dropdown */}
            <div className="flex items-center gap-2 font-mono text-xs text-slate-600 flex-1 sm:flex-initial">
              <div className="relative w-full sm:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-auto min-h-[44px] sm:min-h-0 px-3.5 py-2.5 sm:py-2 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer transition-colors"
                  aria-label="Sort products by"
                >
                  <option value="relevance">Sort: Relevance</option>
                  <option value="brand-asc">Sort: Brand (A - Z)</option>
                  <option value="model-asc">Sort: Model (A - Z)</option>
                  <option value="in-stock">Sort: In Stock First</option>
                </select>
              </div>
            </div>

          </div>

        </div>

        {/* Active Filter Chips Bar (Horizontal Scrollable on Mobile) */}
        {activeFilterCount > 0 && (
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 text-xs font-mono max-w-full">
              <span className="text-slate-400 text-[10px] uppercase font-bold flex-shrink-0">ACTIVE:</span>
              
              {searchTerm && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-1 rounded-full text-[11px] font-medium flex-shrink-0 animate-in fade-in duration-150">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="p-0.5 hover:text-slate-900 rounded-full"><X size={12} /></button>
                </span>
              )}

              {selectedType !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-1 rounded-full text-[11px] font-medium flex-shrink-0 animate-in fade-in duration-150">
                  Type: {selectedType}
                  <button onClick={() => setSelectedType('All')} className="p-0.5 hover:text-slate-900 rounded-full"><X size={12} /></button>
                </span>
              )}

              {selectedBrand !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-1 rounded-full text-[11px] font-medium flex-shrink-0 animate-in fade-in duration-150">
                  Brand: {selectedBrand}
                  <button onClick={() => setSelectedBrand('All')} className="p-0.5 hover:text-slate-900 rounded-full"><X size={12} /></button>
                </span>
              )}

              {selectedCondition !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-1 rounded-full text-[11px] font-medium flex-shrink-0 animate-in fade-in duration-150">
                  Condition: {selectedCondition}
                  <button onClick={() => setSelectedCondition('All')} className="p-0.5 hover:text-slate-900 rounded-full"><X size={12} /></button>
                </span>
              )}

              {selectedAvailability !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/25 px-2.5 py-1 rounded-full text-[11px] font-medium flex-shrink-0 animate-in fade-in duration-150">
                  Stock: {selectedAvailability}
                  <button onClick={() => setSelectedAvailability('All')} className="p-0.5 hover:text-slate-900 rounded-full"><X size={12} /></button>
                </span>
              )}
            </div>

            <button
              onClick={resetAllFilters}
              className="text-xs font-mono text-slate-500 hover:text-red-600 font-semibold underline flex-shrink-0 cursor-pointer ml-1"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* ── MAIN 2-COLUMN CATALOG BODY ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Desktop Filter Sidebar Rail (Visible on lg+) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-5 bg-white border border-slate-200 rounded-xl p-5 shadow-xs sticky top-[80px]">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider">
              <Filter size={15} className="text-[#1D6FA3]" />
              <span>Catalog Filters</span>
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="font-mono text-[11px] text-[#1D6FA3] hover:underline cursor-pointer font-bold"
              >
                Reset
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
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer"
            >
              {availableTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Filter 2: Supported Brand */}
          <div className="space-y-1.5">
            <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Manufacturer Brand
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer"
            >
              {availableBrands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Filter 3: Condition Tag */}
          <div className="space-y-1.5">
            <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Condition Standard
            </label>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer"
            >
              {availableConditions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Filter 4: Availability */}
          <div className="space-y-1.5">
            <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Stock Availability
            </label>
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] cursor-pointer"
            >
              {availableAvailabilities.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* Quick Custom Sourcing Trigger Box */}
          <div className="pt-4 border-t border-slate-200 space-y-2 bg-[#0A192F] text-white p-4 rounded-xl">
            <span className="font-mono text-[10px] text-[#0EA6A6] uppercase font-bold tracking-widest block">
              CAN'T FIND YOUR MODEL?
            </span>
            <p className="text-[11px] font-sans text-slate-300 leading-relaxed">
              Send your compressor nameplate photo for technical identification.
            </p>
            <button
              onClick={() => openQuoteForProduct(null)}
              className="w-full py-2.5 bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-[11px] font-bold uppercase rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <Camera size={14} />
              <span>Send Nameplate</span>
            </button>
          </div>
        </aside>

        {/* ── PRODUCT GRID & RESULTS COLUMN ── */}
        <main className="lg:col-span-9 space-y-5">
          
          {/* Dynamic Result Summary Counter */}
          <div className="flex items-center justify-between font-mono text-xs text-slate-500 border-b border-slate-200 pb-2.5">
            <span className="font-bold text-slate-700">
              SHOWING {filteredProducts.length} COMPRESSOR MODEL(S)
            </span>
            <span className="text-[11px] uppercase hidden sm:inline">MUMBAI WAREHOUSE DESK</span>
          </div>

          {/* Grid vs Empty State */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 text-center space-y-4 max-w-lg mx-auto shadow-xs">
              <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200/60">
                <Search size={24} />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 uppercase tracking-tight">
                No Matching Compressors
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                Try another model code, brand, or compressor type. We also source non-cataloged OEM replacement models on request.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetAllFilters}
                  className="w-full sm:w-auto px-5 py-3 min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-lg font-mono text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Clear All Filters
                </button>
                <button
                  onClick={() => openQuoteForProduct(null)}
                  className="w-full sm:w-auto px-5 py-3 min-h-[44px] bg-[#1D6FA3] hover:bg-[#165680] text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Camera size={15} />
                  <span>Send Nameplate Tag</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product, idx) => (
                <ScrollReveal key={product.id} delay={Math.min(idx * 50, 300)} direction="up" distance={14}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          )}

        </main>

      </div>

      {/* ── MOBILE FILTER BOTTOM-SHEET PANEL ── */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-[#0A192F]/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMobileDrawerOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Filter compressor catalog"
        >
          <div className="w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl max-h-[85vh] p-5 space-y-5 overflow-y-auto flex flex-col justify-between shadow-2xl border border-slate-200 animate-in slide-in-from-bottom duration-200">
            
            {/* Drawer Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#0A192F] uppercase">
                  <Filter size={16} className="text-[#1D6FA3]" />
                  <span>Filter Catalog</span>
                  {activeFilterCount > 0 && (
                    <span className="text-xs bg-[#1D6FA3] text-white px-2 py-0.5 rounded-full font-bold">
                      {activeFilterCount} Active
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close filter panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Filter 1 */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold text-slate-700 uppercase">
                  Compressor Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3]"
                >
                  {availableTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Mobile Filter 2 */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold text-slate-700 uppercase">
                  Manufacturer Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3]"
                >
                  {availableBrands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Mobile Filter 3 */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold text-slate-700 uppercase">
                  Condition Standard
                </label>
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3]"
                >
                  {availableConditions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Mobile Filter 4 */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold text-slate-700 uppercase">
                  Stock Availability
                </label>
                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3]"
                >
                  {availableAvailabilities.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Bottom Sheet Action Controls */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-full min-h-[48px] py-3 bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>

              <button
                onClick={() => {
                  resetAllFilters();
                  setIsMobileDrawerOpen(false);
                }}
                className="w-full min-h-[44px] py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold uppercase rounded-lg border border-slate-300 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={quoteProduct}
      />
    </div>
  );
}
