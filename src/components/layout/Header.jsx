'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageSquare, Camera, ChevronRight, Phone } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile navigation drawer is open
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

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Compressors', path: '/products' },
    { name: 'Categories', path: '/#categories' },
    { name: 'Model Matching', path: '/#nameplate-matching' },
    { name: 'Applications', path: '/#applications' },
    { name: 'Contact', path: '/contact' },
  ];

  const desktopNavLinks = navLinks.filter((link) => link.name !== 'Home');

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@media (max-width: 359.98px) { .hide-below-360 { display: none !important; } }" }} />
      <header className="fixed top-0 left-0 w-full z-[995] bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs transition-colors duration-150">
        <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 min-[360px]:gap-3">
          
          {/* Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-2 min-[360px]:gap-3 flex-shrink min-w-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4B75] rounded-lg py-1"
            aria-label="Z Cool Enterprises Homepage"
          >
            <div className="w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 rounded-md bg-[#0E4B75] text-white flex items-center justify-center font-bold text-sm min-[360px]:text-base shadow-xs group-hover:bg-[#093757] transition-colors shrink-0">
              Z
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-xs min-[360px]:text-sm sm:text-base tracking-tight text-slate-900 leading-tight truncate">
                Z COOL ENTERPRISES
              </span>
              <span className="text-[9px] min-[360px]:text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-medium truncate">
                HVAC COMPRESSOR SOURCING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {desktopNavLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? pathname === '/'
                  : pathname === link.path;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                    isActive
                      ? 'text-[#0E4B75] bg-slate-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-stone-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop & Tablet Actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="tel:+919920691707"
              className="flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-md text-xs font-semibold text-slate-700 hover:text-[#0E4B75] hover:bg-stone-50 border border-stone-200 transition-colors"
              title="Call Mumbai Technical Desk"
            >
              <Phone size={14} className="text-[#0E4B75]" />
              <span>+91 99206 91707</span>
            </a>

            <button
              type="button"
              onClick={() => setIsQuoteModalOpen(true)}
              className="flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#0E4B75] hover:bg-[#093757] text-white shadow-xs transition-colors cursor-pointer active:scale-[0.98]"
            >
              <Camera size={15} />
              <span>REQUEST QUOTE</span>
            </button>
          </div>

          {/* Mobile Quick Action & Drawer Toggle */}
          <div className="flex lg:hidden items-center gap-1.5 min-[360px]:gap-2 shrink-0">
            {/* Quick Call Icon (Visible on 360px - 639px; on <360px hidden to preserve space for hamburger menu) */}
            <a
              href="tel:+919920691707"
              className="flex hide-below-360 sm:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-md border border-stone-200 text-slate-700 bg-stone-50 items-center justify-center transition-colors active:scale-95"
              aria-label="Call Mumbai Desk directly"
              title="Call Mumbai Desk"
            >
              <Phone size={18} className="text-[#0E4B75]" />
            </a>

            <button
              type="button"
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-md border border-stone-200 text-slate-800 bg-white hover:bg-stone-50 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* ── MOBILE ACCESSIBLE NAVIGATION DRAWER (OUTSIDE HEADER TO PREVENT CONTAINING BLOCK TRUNCATION) ── */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed top-16 inset-x-0 bottom-0 h-[calc(100dvh-64px)] bg-[#FBFBFA] z-[990] overflow-y-auto p-5 flex flex-col justify-between border-t border-stone-200 shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold px-2">
              Navigation &amp; Sourcing
            </div>

            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Menu Links">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="min-h-[48px] flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-white border border-stone-200/90 hover:border-slate-400 active:bg-stone-50 transition-colors shadow-xs"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} className="text-slate-400" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Actions in Drawer */}
          <div className="pt-6 border-t border-stone-200 space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsQuoteModalOpen(true);
              }}
              className="w-full min-h-[48px] py-3 rounded-lg bg-[#0E4B75] hover:bg-[#093757] text-white text-center text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors active:scale-[0.98]"
            >
              <Camera size={16} />
              <span>Submit Nameplate / Request Quote</span>
            </button>

            <a
              href="https://wa.me/919920691707"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-center text-sm font-semibold flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare size={16} />
              <span>WhatsApp Technical Desk</span>
            </a>

            <a
              href="tel:+919920691707"
              className="w-full min-h-[44px] py-2.5 rounded-lg border border-stone-300 text-slate-700 hover:bg-stone-100 text-center text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={14} className="text-[#0E4B75]" />
              <span>Direct Desk: +91 99206 91707</span>
            </a>
          </div>
        </div>
      )}

      {/* Shared Inquiry Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
