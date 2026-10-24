'use client';

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  X,
  RotateCcw,
  Camera,
  MessageSquare,
  FileQuestion,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
} from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import QuoteModal from '@/components/ui/QuoteModal';
import { COMPANY_DETAILS } from '@/constants/company';

const PRODUCTS_PER_PAGE = 12;

// Stable sort comparators
const SORT_OPTIONS = [
  { id: 'default',   label: 'Default Order' },
  { id: 'name-asc',  label: 'Name A → Z' },
  { id: 'name-desc', label: 'Name Z → A' },
  { id: 'brand-asc', label: 'Brand A → Z' },
  { id: 'cat-asc',   label: 'Category A → Z' },
];

function sortProducts(products, sortId) {
  const list = [...products];
  switch (sortId) {
    case 'name-asc':
      return list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    case 'name-desc':
      return list.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
    case 'brand-asc':
      return list.sort((a, b) => (a.brand || '').localeCompare(b.brand || ''));
    case 'cat-asc':
      return list.sort((a, b) => (a.category || '').localeCompare(b.category || ''));
    default:
      return list; // preserve original catalogue order
  }
}

export default function ProductCatalogView({
  products = [],
  initialCategory = 'All',
  initialPage = 1,
  initialSort = 'default',
}) {
  const router      = useRouter();
  const pathname    = usePathname();
  const searchParams = useSearchParams();

  const urlCategory = searchParams?.get('category') || searchParams?.get('type');
  const urlBrand    = searchParams?.get('brand');
  const urlSearch   = searchParams?.get('search') || searchParams?.get('q') || '';
  const urlPage     = parseInt(searchParams?.get('page') || '1', 10);
  const urlSort     = searchParams?.get('sort') || 'default';

  const [searchTerm,       setSearchTerm]       = useState(urlSearch);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || initialCategory || 'All');
  const [selectedBrand,    setSelectedBrand]    = useState(urlBrand || 'All');
  const [sortId,           setSortId]           = useState(urlSort || initialSort || 'default');
  const [currentPage,      setCurrentPage]      = useState(Math.max(1, isNaN(urlPage) ? (initialPage || 1) : urlPage));
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct,     setQuoteProduct]     = useState(null);

  // Sync state if searchParams change externally (e.g. Back/Forward button or external links)
  useEffect(() => {
    if (searchParams) {
      const cat = searchParams.get('category') || searchParams.get('type') || 'All';
      const brand = searchParams.get('brand') || 'All';
      const search = searchParams.get('search') || searchParams.get('q') || '';
      const page = parseInt(searchParams.get('page') || '1', 10);
      const sort = searchParams.get('sort') || 'default';
      setSelectedCategory((prev) => (prev !== cat ? cat : prev));
      setSelectedBrand((prev) => (prev !== brand ? brand : prev));
      setSearchTerm((prev) => (prev !== search ? search : prev));
      setCurrentPage((prev) => (prev !== page && page > 0 ? page : prev));
      setSortId((prev) => (prev !== sort ? sort : prev));
    }
  }, [searchParams]);

  // Track whether filters caused a reset (to avoid infinite loops)
  const didFilterChange = useRef(false);

  // ----- helpers to push URL without full navigation -----
  const updateUrl = useCallback((overrides = {}) => {
    const params = new URLSearchParams(searchParams ? searchParams.toString() : '');
    const map = {
      page:     String(overrides.page     ?? currentPage),
      sort:     overrides.sort            ?? sortId,
      category: overrides.category        ?? (selectedCategory !== 'All' ? selectedCategory : ''),
      brand:    overrides.brand           ?? (selectedBrand !== 'All' ? selectedBrand : ''),
      search:   overrides.search          ?? (searchTerm ? searchTerm : ''),
    };

    Object.entries(map).forEach(([k, v]) => {
      if (v && v !== 'All' && v !== '1' && v !== 'default' && v !== '') {
        params.set(k, v);
      } else {
        params.delete(k);
      }
    });

    // Override page: always write page > 1
    if ((overrides.page ?? currentPage) > 1) {
      params.set('page', String(overrides.page ?? currentPage));
    } else {
      params.delete('page');
    }

    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false });
  }, [router, pathname, searchParams, currentPage, sortId, selectedCategory, selectedBrand, searchTerm]);

  // ----- Approved Primary Categories -----
  const categories = [
    { id: 'All',                     label: 'All Categories' },
    { id: 'Scroll Compressors',      label: 'Scroll' },
    { id: 'Rotary Compressors',      label: 'Rotary' },
    { id: 'Reciprocating Compressors', label: 'Reciprocating' },
    { id: 'VRF / DC Inverter',       label: 'VRF / Inverter' },
  ];

  // ----- Dynamically extract brands (sorted alphabetically) -----
  const brands = useMemo(() => {
    const set = new Set();
    products.forEach((p) => {
      if (p.brand && !p.brand.startsWith('Generic') && p.brand !== 'Multi-Brand') {
        set.add(p.brand);
      }
    });
    return ['All', ...Array.from(set).sort()];
  }, [products]);

  // ----- Full filtered list (all pages combined) -----
  const filteredProducts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesSearch =
        !q ||
        product.name?.toLowerCase().includes(q) ||
        product.code?.toLowerCase().includes(q) ||
        product.catalogCode?.toLowerCase().includes(q) ||
        product.brand?.toLowerCase().includes(q) ||
        product.application?.toLowerCase().includes(q) ||
        product.refrigerant?.toLowerCase().includes(q) ||
        product.legacyTitle?.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === 'All' ||
        product.category === selectedCategory ||
        (selectedCategory === 'VRF / DC Inverter' &&
          (product.category?.includes('VRF') || product.type?.includes('Inverter')));

      const matchesBrand =
        selectedBrand === 'All' ||
        product.brand?.toLowerCase() === selectedBrand.toLowerCase();

      return matchesSearch && matchesCategory && matchesBrand;
    });

    return sortProducts(filtered, sortId);
  }, [products, searchTerm, selectedCategory, selectedBrand, sortId]);

  // ----- Pagination derived values -----
  const totalPages    = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const safePage      = Math.min(Math.max(1, currentPage), totalPages);
  const pageStart     = (safePage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts  = filteredProducts.slice(pageStart, pageStart + PRODUCTS_PER_PAGE);

  // When filters change, reset to page 1
  const prevFilters = useRef({ searchTerm, selectedCategory, selectedBrand, sortId });
  useEffect(() => {
    const prev = prevFilters.current;
    const changed =
      prev.searchTerm       !== searchTerm       ||
      prev.selectedCategory !== selectedCategory ||
      prev.selectedBrand    !== selectedBrand    ||
      prev.sortId           !== sortId;
    if (changed) {
      prevFilters.current = { searchTerm, selectedCategory, selectedBrand, sortId };
      setCurrentPage(1);
      updateUrl({
        page: 1,
        sort: sortId,
        category: selectedCategory !== 'All' ? selectedCategory : '',
        brand: selectedBrand !== 'All' ? selectedBrand : '',
        search: searchTerm,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, selectedCategory, selectedBrand, sortId]);

  // Sync URL when page changes explicitly
  const goToPage = useCallback((page) => {
    const clamped = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(clamped);
    updateUrl({ page: clamped });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [totalPages, updateUrl]);

  // ----- Build visible page numbers (ellipsis-compressed) -----
  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = new Set([1, totalPages, safePage]);
    for (let d = 1; d <= 2; d++) {
      if (safePage - d >= 1) pages.add(safePage - d);
      if (safePage + d <= totalPages) pages.add(safePage + d);
    }
    return Array.from(pages).sort((a, b) => a - b);
  }, [totalPages, safePage]);

  const hasActiveFilters =
    searchTerm.trim() !== '' || selectedCategory !== 'All' || selectedBrand !== 'All';

  const handleOpenQuote = (product = null) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSortId('default');
    setCurrentPage(1);
    router.replace(pathname, { scroll: false });
  };

  return (
    <div className="space-y-8">
      {/* ── 1. PAGE HEADER ── */}
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

        {/* Row 1: Search + Brand */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          {/* Search */}
          <div className="sm:col-span-8 relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by model (e.g. ZR72, JT160), brand, or application…"
              className="w-full min-h-[44px] pl-10 pr-9 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0E4B75] focus:ring-2 focus:ring-[#0E4B75]/20 transition-all"
              aria-label="Search products"
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

        {/* Row 2: Category pills + Sort */}
        <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline shrink-0">
            Category:
          </span>

          {/* Category pills – scrollable on small screens */}
          <div className="flex flex-wrap gap-2 flex-1 min-w-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`min-h-[38px] px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#0E4B75] text-white shadow-2xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5 shrink-0 ml-auto">
            <ArrowUpDown size={14} className="text-slate-400 hidden sm:block" />
            <select
              value={sortId}
              onChange={(e) => setSortId(e.target.value)}
              className="min-h-[38px] px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-slate-700 font-medium focus:outline-none focus:border-[#0E4B75] focus:ring-1 focus:ring-[#0E4B75]/20 cursor-pointer transition-all"
              aria-label="Sort products"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Reset button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 hover:bg-rose-50 border border-rose-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <RotateCcw size={13} />
              <span className="hidden sm:inline">Reset Filters</span>
              <span className="sm:hidden">Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* ── 3. RESULTS STATUS BAR ── */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
        <div>
          {filteredProducts.length > 0 ? (
            <>
              Showing{' '}
              <strong className="text-slate-900 font-bold">
                {pageStart + 1}–{Math.min(pageStart + PRODUCTS_PER_PAGE, filteredProducts.length)}
              </strong>{' '}
              of{' '}
              <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong>{' '}
              compressor models
              {totalPages > 1 && (
                <span className="text-slate-500 ml-1">
                  · Page {safePage} of {totalPages}
                </span>
              )}
            </>
          ) : (
            <span>No results found</span>
          )}
        </div>
        {hasActiveFilters && (
          <div className="text-slate-500 text-[11px]">Filters active</div>
        )}
      </div>

      {/* ── 4. PRODUCT GRID ── */}
      {pageProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pageProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuoteClick={handleOpenQuote}
              />
            ))}
          </div>

          {/* ── 5. PAGINATION CONTROLS ── */}
          {totalPages > 1 && (
            <nav
              className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200"
              aria-label="Catalogue page navigation"
            >
              {/* Prev button */}
              <button
                type="button"
                onClick={() => goToPage(safePage - 1)}
                disabled={safePage <= 1}
                className="flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-lg text-xs font-semibold border border-stone-300 text-slate-700 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Previous page"
              >
                <ChevronLeft size={15} />
                <span>Previous</span>
              </button>

              {/* Page number pills */}
              <div className="flex items-center gap-1 flex-wrap justify-center">
                {pageNumbers.map((num, idx) => {
                  const prevNum = pageNumbers[idx - 1];
                  const showEllipsis = prevNum && num - prevNum > 1;
                  return (
                    <React.Fragment key={num}>
                      {showEllipsis && (
                        <span className="text-slate-400 text-xs px-1">…</span>
                      )}
                      <button
                        type="button"
                        onClick={() => goToPage(num)}
                        className={`min-w-[36px] min-h-[36px] px-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          num === safePage
                            ? 'bg-[#0E4B75] text-white shadow-2xs'
                            : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                        }`}
                        aria-label={`Go to page ${num}`}
                        aria-current={num === safePage ? 'page' : undefined}
                      >
                        {num}
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Next button */}
              <button
                type="button"
                onClick={() => goToPage(safePage + 1)}
                disabled={safePage >= totalPages}
                className="flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-lg text-xs font-semibold border border-stone-300 text-slate-700 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Next page"
              >
                <span>Next</span>
                <ChevronRight size={15} />
              </button>
            </nav>
          )}
        </>
      ) : (
        /* ── 6. EMPTY STATE ── */
        <div className="bg-white border border-stone-200 rounded-xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-stone-100 border border-stone-200 mx-auto flex items-center justify-center">
            <FileQuestion size={28} className="text-[#0E4B75]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              No Compressors Match Your Search
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              We source and match replacement models beyond our listed catalog. Reset filters or send a nameplate photo for custom matching.
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

      {/* ── 7. SOURCING ASSISTANCE BANNER ── */}
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
            href={COMPANY_DETAILS.whatsappUrl}
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
