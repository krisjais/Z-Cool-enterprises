'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, ChevronDown, Search } from 'lucide-react';

const PRODUCT_CATEGORIES = [
  {
    label: 'Electronic Components',
    items: [
      { name: 'Inverter VRF Controller Board', code: 'Z-PCB-H100', href: '/products/hvac-pcb-100' },
      { name: 'Industrial Chiller Controller', code: 'CH-CTL-02', href: '/products/chiller-w50' },
      { name: 'Cabinet Panel Exchanger', code: 'PEX-P15', href: '/products/panel-pex15' },
    ]
  },
  {
    label: 'Thermal Systems',
    items: [
      { name: 'Industrial Process Chiller', code: 'CH-W50', href: '/products/chiller-w50' },
      { name: 'Air-Cooled Condensing Unit', code: 'AC-CU-30', href: '/products' },
      { name: 'Close Control Air Conditioning', code: 'CCAC-15', href: '/products' },
    ]
  },
  {
    label: 'Panel Cooling',
    items: [
      { name: 'Cabinet Heat Exchanger IP55', code: 'PEX-P15', href: '/products/panel-pex15' },
      { name: 'Control Panel Air Conditioner', code: 'PAC-12', href: '/products' },
      { name: 'Vortex Coolers', code: 'VX-05', href: '/products' },
    ]
  },
];

const NAV_LINKS = [
  { name: 'Products', href: '/products', hasMega: true },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef(null);
  const megaTimerRef = useRef(null);

  // Determine if we're on a dark-hero page (homepage)
  const isHeroPage = pathname === '/';
  const isTransparent = isHeroPage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setMegaOpen(false); }, [pathname]);

  const handleMegaEnter = () => {
    clearTimeout(megaTimerRef.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const textColor = isTransparent ? 'text-white' : 'text-[#111827]';
  const mutedColor = isTransparent ? 'text-white/65' : 'text-[#4B5563]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[980] transition-all duration-500 ${
          scrolled
            ? 'glass-nav shadow-[0_1px_0_rgba(17,24,39,0.06)]'
            : isHeroPage
            ? 'bg-transparent border-b border-transparent'
            : 'bg-[#FCFBF8] border-b border-[rgba(17,24,39,0.06)]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">

            {/* ── LOGO ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <svg
                className="w-8 h-8 flex-shrink-0"
                viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="10" fill={isTransparent ? 'rgba(255,255,255,0.1)' : '#111827'} />
                <path d="M10 14 H38 L28 24 H10 Z" fill="white" />
                <path d="M10 34 H38 L28 24 H10 Z" fill={isTransparent ? '#C8A76E' : '#2563EB'} opacity="0.85" />
              </svg>
              <div className="flex flex-col">
                <span className={`font-bold text-[13px] tracking-[0.12em] uppercase leading-none transition-colors ${
                  isTransparent ? 'text-white' : 'text-[#111827]'
                }`}>
                  Z Cool Tech
                </span>
                <span className={`font-normal text-[9px] tracking-[0.18em] uppercase leading-none mt-0.5 transition-colors ${
                  isTransparent ? 'text-white/50' : 'text-[#9CA3AF]'
                }`}>
                  Engineering Co.
                </span>
              </div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center gap-0.5" role="navigation">
              {NAV_LINKS.map((link) => (
                link.hasMega ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                    ref={megaRef}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-[12px] font-medium tracking-wide transition-all duration-200 ${
                        megaOpen || pathname.startsWith('/products')
                          ? isTransparent ? 'text-white bg-white/10' : 'text-[#2563EB] bg-[#2563EB]/06'
                          : `${mutedColor} hover:${textColor}`
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-[12px] font-medium tracking-wide transition-all duration-200 ${
                      pathname === link.href
                        ? isTransparent ? 'text-white bg-white/10' : 'text-[#2563EB] bg-[#2563EB]/06'
                        : `${mutedColor} hover:${textColor} hover:bg-black/04`
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* ── RIGHT CTAs ── */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                  isTransparent ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-[#4B5563] hover:text-[#111827] hover:bg-black/05'
                }`}
                aria-label="Search"
              >
                <Search size={15} />
              </button>

              {/* Call */}
              <a
                href="tel:+919920691707"
                className={`hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all ${
                  isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#4B5563] hover:text-[#111827] hover:bg-black/05'
                }`}
              >
                <Phone size={12} />
                +91 99206 91707
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all ${
                  isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#4B5563] hover:text-[#111827] hover:bg-black/05'
                }`}
                aria-label="WhatsApp"
              >
                <MessageSquare size={12} />
                WhatsApp
              </a>

              {/* Request Quote CTA */}
              <Link
                href="/contact"
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-[8px] text-[12px] font-semibold tracking-wide transition-all duration-200 ${
                  isTransparent
                    ? 'bg-white text-[#111827] hover:bg-white/90'
                    : 'bg-[#111827] text-white hover:bg-[#2563EB]'
                } shadow-sm hover:shadow-md hover:-translate-y-px`}
              >
                Request Quote
                <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                isTransparent ? 'text-white hover:bg-white/10' : 'text-[#111827] hover:bg-black/05'
              }`}
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* ── MEGA MENU ── */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
              className="absolute top-full left-0 w-full bg-[#FCFBF8] border-b border-[rgba(17,24,39,0.06)] shadow-[0_12px_48px_rgba(17,24,39,0.08)]"
            >
              <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-8 grid grid-cols-4 gap-8">
                {/* Brand Column */}
                <div className="col-span-1 pr-8 border-r border-[rgba(17,24,39,0.06)]">
                  <div className="section-label mb-4">Products</div>
                  <p className="text-[#4B5563] text-sm leading-relaxed font-light">
                    Precision-engineered HVAC electronics and thermal management systems for industrial applications.
                  </p>
                  <Link
                    href="/products"
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[#2563EB] hover:gap-3 transition-all"
                  >
                    View Full Catalogue
                    <ArrowUpRight size={13} />
                  </Link>
                </div>

                {/* Category Columns */}
                {PRODUCT_CATEGORIES.map((cat) => (
                  <div key={cat.label} className="col-span-1">
                    <div className="font-mono-eng text-[#9CA3AF] mb-4">{cat.label}</div>
                    <div className="flex flex-col gap-1">
                      {cat.items.map((item) => (
                        <Link
                          key={item.code}
                          href={item.href}
                          className="group flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F5F4EF] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div>
                            <div className="text-[13px] font-medium text-[#111827] group-hover:text-[#2563EB] transition-colors leading-tight">
                              {item.name}
                            </div>
                            <div className="text-[10px] font-mono text-[#9CA3AF] mt-0.5 tracking-widest">
                              {item.code}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-[970] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[360px] bg-[#FCFBF8] z-[975] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-[rgba(17,24,39,0.06)]">
                <span className="font-bold text-[13px] tracking-[0.12em] uppercase text-[#111827]">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#4B5563] hover:bg-black/05"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[14px] font-medium transition-colors ${
                        pathname === link.href || (link.hasMega && pathname.startsWith('/products'))
                          ? 'bg-[#2563EB]/08 text-[#2563EB]'
                          : 'text-[#111827] hover:bg-[#F5F4EF]'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                      <ArrowUpRight size={14} className="text-[#9CA3AF]" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-4 pb-8 pt-4 border-t border-[rgba(17,24,39,0.06)] flex flex-col gap-3">
                <a
                  href="tel:+919920691707"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[rgba(17,24,39,0.1)] text-[13px] font-medium text-[#111827] hover:bg-[#F5F4EF] transition-colors"
                >
                  <Phone size={15} />
                  +91 99206 91707
                </a>
                <a
                  href="https://wa.me/919920691707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-[13px] font-semibold hover:bg-[#22C55E] transition-colors"
                >
                  <MessageSquare size={15} />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="btn-primary text-center justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Quote
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── SEARCH MODAL ── */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[990]"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[20vh] left-1/2 -translate-x-1/2 w-full max-w-[560px] px-4 z-[991]"
            >
              <div className="bg-[#FCFBF8] rounded-2xl shadow-2xl border border-[rgba(17,24,39,0.08)] overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 border-b border-[rgba(17,24,39,0.06)]">
                  <Search size={18} className="text-[#9CA3AF] flex-shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products, parts, technical specs..."
                    className="flex-1 bg-transparent text-[14px] font-medium placeholder-[#9CA3AF] outline-none text-[#111827]"
                  />
                  <button onClick={() => setSearchOpen(false)} className="text-[#9CA3AF] hover:text-[#111827]">
                    <X size={16} />
                  </button>
                </div>
                <div className="px-5 py-4">
                  <div className="font-mono-eng text-[#9CA3AF] mb-3">Quick Links</div>
                  <div className="flex flex-col gap-1">
                    {['Inverter VRF Controller Board', 'Industrial Process Chiller', 'Cabinet Panel Exchanger'].map((q) => (
                      <button
                        key={q}
                        className="text-left px-3 py-2.5 rounded-lg text-[13px] text-[#111827] hover:bg-[#F5F4EF] transition-colors flex items-center gap-3"
                      >
                        <Search size={12} className="text-[#9CA3AF]" />
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
