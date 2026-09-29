import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#1D6FA3] text-white flex items-center justify-center font-mono font-bold text-xs">
                Z
              </div>
              <div>
                <span className="font-bold text-white text-sm sm:text-base tracking-wider uppercase font-display block">
                  ZCOOL ENTERPRISES
                </span>
                <span className="font-mono text-[10px] text-[#0EA6A6] uppercase tracking-widest block font-semibold">
                  INDUSTRIAL HVAC COMPRESSORS
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              Specialized B2B supplier of refurbished and replacement scroll, rotary, and reciprocating AC compressors for commercial HVAC, chillers, and industrial cooling across India.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded w-fit">
              <ShieldCheck size={14} />
              <span>TESTED & CHECKED INVENTORY</span>
            </div>
          </div>

          {/* Compressors Column */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5">
              Compressors
            </h4>
            <ul className="space-y-1.5 font-mono text-xs text-slate-400">
              <li>
                <Link href="/products?type=Scroll" className="hover:text-[#0EA6A6] transition-colors">
                  Scroll Compressors
                </Link>
              </li>
              <li>
                <Link href="/products?type=Rotary" className="hover:text-[#0EA6A6] transition-colors">
                  Rotary Compressors
                </Link>
              </li>
              <li>
                <Link href="/products?type=Reciprocating" className="hover:text-[#0EA6A6] transition-colors">
                  Reciprocating Units
                </Link>
              </li>
              <li>
                <Link href="/products?type=AC" className="hover:text-[#0EA6A6] transition-colors">
                  AC Compressors
                </Link>
              </li>
            </ul>
          </div>

          {/* Supported Brands Column */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5">
              Supported Brands
            </h4>
            <ul className="space-y-1.5 font-mono text-xs text-slate-400">
              <li>
                <Link href="/brands" className="hover:text-[#0EA6A6] transition-colors">
                  Copeland
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-[#0EA6A6] transition-colors">
                  Daikin
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-[#0EA6A6] transition-colors">
                  LG Commercial
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-[#0EA6A6] transition-colors">
                  Danfoss Maneurop
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-[#0EA6A6] transition-colors">
                  Carrier / Hitachi
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact Column */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5">
              Company & Contact
            </h4>
            <ul className="space-y-1.5 font-mono text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-[#0EA6A6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0EA6A6] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/refurbishment" className="hover:text-[#0EA6A6] transition-colors">
                  Refurbishment
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-[#0EA6A6] transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#0EA6A6] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#0EA6A6] transition-colors">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0EA6A6] transition-colors">
                  Contact Sourcing Desk
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-slate-500">
          <span>&copy; {new Date().getFullYear()} ZCOOL ENTERPRISES. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-4">
            <a href="tel:+919920691707" className="hover:text-slate-300 transition-colors">
              +91 99206 91707
            </a>
            <span>•</span>
            <a href="mailto:zcooltech4@gmail.com" className="hover:text-slate-300 transition-colors">
              zcooltech4@gmail.com
            </a>
            <span>•</span>
            <span>Mumbai, Maharashtra</span>
            <span>•</span>
            <Link href="/admin" className="hover:text-slate-300 transition-colors">
              Admin
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
