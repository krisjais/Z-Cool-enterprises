'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageSquare, Camera, ChevronRight, Phone } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  // Scroll handler for sticky header compacting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when mobile navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC key handler to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close mobile navigation menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Compressors', path: '/products' },
    { name: 'Brands', path: '/brands' },
    { name: 'Services', path: '/services' },
    { name: 'Refurbishment', path: '/refurbishment' },
    { name: 'Applications', path: '/applications' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[990] transition-all duration-200 ${
          scrolled
            ? 'py-2.5 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs'
            : 'py-3.5 bg-[#0A192F] text-white border-b border-white/10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          
          {/* Brand Logo & Tagline */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#1D6FA3] rounded-lg p-0.5"
            aria-label="Zcool Enterprises Homepage"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1D6FA3] text-white flex items-center justify-center font-mono font-bold text-sm sm:text-base shadow-sm group-hover:bg-[#165680] transition-colors border border-white/20">
              Z
            </div>
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-xs sm:text-sm lg:text-[15px] tracking-wider uppercase font-display leading-tight transition-colors ${
                  scrolled ? 'text-[#0A192F]' : 'text-white'
                }`}
              >
                ZCOOL ENTERPRISES
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#0EA6A6] font-semibold">
                INDUSTRIAL HVAC COMPRESSORS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on lg+) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? pathname === '/'
                  : pathname === link.path || pathname.startsWith(`${link.path}/`);

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative text-[13px] font-sans font-medium transition-colors px-2.5 py-1.5 focus:outline-none group ${
                    isActive
                      ? scrolled ? 'text-[#1D6FA3] font-semibold' : 'text-white font-semibold'
                      : scrolled
                      ? 'text-slate-600 hover:text-[#0A192F]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full transition-all duration-200 ${
                      isActive
                        ? scrolled ? 'bg-[#1D6FA3]' : 'bg-[#0EA6A6]'
                        : 'bg-transparent group-hover:bg-slate-400/40'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/919920691707"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 min-h-[38px] px-3.5 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 active:scale-[0.98] ${
                scrolled
                  ? 'text-emerald-700 hover:bg-emerald-50 border border-emerald-600/30'
                  : 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 border border-emerald-500/30'
              }`}
            >
              <MessageSquare size={14} />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="flex items-center gap-1.5 min-h-[38px] px-4.5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#1D6FA3] hover:bg-[#165680] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]"
            >
              <Camera size={14} />
              <span>GET A QUOTE</span>
            </button>
          </div>

          {/* Mobile Right Controls (Quick Phone Call + Menu Trigger Button) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Call Icon (Mobile < 640px) */}
            <a
              href="tel:+919920691707"
              className={`sm:hidden min-h-[44px] min-w-[44px] p-2 rounded-lg border flex items-center justify-center transition-colors cursor-pointer active:scale-[0.95] ${
                scrolled
                  ? 'border-emerald-600/30 text-emerald-700 bg-emerald-50'
                  : 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
              }`}
              aria-label="Call Mumbai Sourcing Desk"
              title="Call Mumbai Sourcing Desk"
            >
              <Phone size={18} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className={`min-h-[44px] min-w-[44px] p-2 rounded-lg border flex items-center justify-center transition-colors cursor-pointer active:scale-[0.96] ${
                scrolled
                  ? 'border-slate-300 text-slate-900 bg-slate-50'
                  : 'border-white/20 text-white bg-white/5'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* ── MOBILE FULL-PANEL NAVIGATION DRAWER ── */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden absolute top-full left-0 right-0 h-[calc(100dvh-100%)] max-h-[calc(100dvh-100%)] bg-[#0A192F]/98 backdrop-blur-md z-[995] overflow-y-auto p-5 sm:p-6 flex flex-col justify-between border-t border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation panel"
          >
            {/* Nav Links Stack */}
            <div className="space-y-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#0EA6A6] font-bold border-b border-white/10 pb-2">
                CATALOG DIRECTORY & PAGES
              </div>

              <nav className="flex flex-col space-y-1" aria-label="Mobile Menu Links">
                {navLinks.map((link, idx) => {
                  const isActive =
                    link.path === '/'
                      ? pathname === '/'
                      : pathname === link.path || pathname.startsWith(`${link.path}/`);

                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-widest transition-all duration-150 active:scale-[0.99] ${
                        isActive
                          ? 'text-[#0EA6A6] font-bold bg-white/10 border-l-2 border-[#0EA6A6] pl-3.5'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      style={{ transitionDelay: `${idx * 20}ms` }}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={14} className={isActive ? 'text-[#0EA6A6]' : 'text-slate-600'} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Bottom Action Buttons */}
            <div className="pt-6 border-t border-white/10 space-y-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full min-h-[48px] py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white text-center font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-[0.98]"
              >
                <Camera size={16} />
                <span>Request Quote / Send Nameplate</span>
              </button>

              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-center font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Technical Engineer</span>
              </a>
            </div>

          </div>
        )}
      </header>

      {/* Shared Inquiry Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
