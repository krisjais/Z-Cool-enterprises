import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-slate-300 border-t border-stone-800 pt-14 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Summary Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0E4B75] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                Z
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight block">
                  Z COOL ENTERPRISES
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">
                  INDUSTRIAL HVAC COMPRESSORS
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Direct B2B supply of replacement and refurbished scroll, rotary, and reciprocating compressors for commercial HVAC plants, package units, chillers, and refrigeration across India.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 bg-stone-800/80 px-2.5 py-1 rounded border border-stone-700">
                <ShieldCheck size={13} className="text-sky-400" />
                <span>B2B Multi-Brand Sourcing</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-stone-800/80 px-2.5 py-1 rounded border border-stone-700">
                <MapPin size={13} className="text-slate-400" />
                <span>Mumbai Operations Desk</span>
              </div>
            </div>
          </div>

          {/* Compressors Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Compressor Types
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/products?type=Scroll" className="hover:text-white transition-colors">
                  Scroll Compressors
                </Link>
              </li>
              <li>
                <Link href="/products?type=Rotary" className="hover:text-white transition-colors">
                  Rotary Compressors
                </Link>
              </li>
              <li>
                <Link href="/products?type=Reciprocating" className="hover:text-white transition-colors">
                  Reciprocating Units
                </Link>
              </li>
              <li>
                <Link href="/products?type=VRF" className="hover:text-white transition-colors">
                  VRF / DC Inverters
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  All Compressors
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Sourced Brands
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/brands" className="hover:text-white transition-colors">
                  Copeland / Emerson
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white transition-colors">
                  Daikin Scroll
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white transition-colors">
                  Danfoss Maneurop
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white transition-colors">
                  LG Commercial
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white transition-colors">
                  Carrier / Bitzer
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Desk Contact Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Mumbai Technical Desk
            </h3>
            <div className="space-y-2.5 text-sm text-slate-400">
              <a
                href="tel:+919920691707"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#0E4B75] shrink-0" />
                <span>+91 99206 91707</span>
              </a>

              <a
                href="mailto:zcooltech4@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#0E4B75] shrink-0" />
                <span>zcooltech4@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare size={14} className="shrink-0" />
                <span>WhatsApp Technical Chat</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-xs text-slate-400">
                <MapPin size={14} className="text-[#0E4B75] shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India • Sourcing &amp; Dispatch Desk</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & B2B Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Z Cool Enterprises. All rights reserved. Industrial HVAC Compressor Sourcing.
          </div>
          <div className="flex items-center gap-5 text-slate-400">
            <span>B2B Commercial Supply</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
