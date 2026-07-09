'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FOOTER_LINKS = {
  Products: [
    { name: 'Inverter VRF Boards', href: '/products/hvac-pcb-100' },
    { name: 'Industrial Chillers', href: '/products/chiller-w50' },
    { name: 'Panel Heat Exchangers', href: '/products/panel-pex15' },
    { name: 'Control Panel ACs', href: '/products' },
    { name: 'Full Catalogue', href: '/products' },
  ],
  Company: [
    { name: 'About Z Cool Tech', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Technical Blog', href: '/blog' },
    { name: 'Certifications', href: '/about' },
  ],
  Support: [
    { name: 'Request a Quote', href: '/contact' },
    { name: 'WhatsApp Support', href: 'https://wa.me/919920691707', external: true },
    { name: 'Call Us Now', href: 'tel:+919920691707', external: true },
    { name: 'Admin Portal', href: '/admin/login' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111827] overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-100 pointer-events-none" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Large background typemark */}
      <div
        className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="block font-bold leading-none text-white/[0.025]"
          style={{
            fontSize: 'clamp(120px, 20vw, 320px)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            letterSpacing: '-0.04em',
            lineHeight: 0.85,
          }}
        >
          Z
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── TOP MASTHEAD ── */}
        <div className="py-16 lg:py-24 border-b border-white/06">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-5 h-px bg-[#C8A76E]" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9CA3AF]">
                  India's Industrial HVAC Electronics Partner
                </span>
              </div>

              <h2
                className="font-bold text-white leading-[1.0] mb-6"
                style={{
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-0.03em',
                }}
              >
                Built for<br />
                <span className="text-[#C8A76E]">Engineers.</span>
                <br />Trusted by<br />
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>Industry.</span>
              </h2>

              <p className="text-[#4B5563] text-sm leading-relaxed max-w-md font-light">
                Z Cool Technology supplies precision HVAC electronic components, industrial chillers, and thermal management systems across India. OEM authorized. ISO 9001:2015 certified.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919920691707"
                className="group flex items-center gap-5 p-5 rounded-xl bg-white/[0.04] border border-white/08 hover:bg-white/08 hover:border-white/14 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#2563EB]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#4B5563] mb-0.5">Call Us</div>
                  <div className="text-white font-semibold text-[15px]">+91 99206 91707</div>
                </div>
                <ArrowUpRight size={16} className="text-[#4B5563] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="mailto:zcooltech4@gmail.com"
                className="group flex items-center gap-5 p-5 rounded-xl bg-white/[0.04] border border-white/08 hover:bg-white/08 hover:border-white/14 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C8A76E]/15 border border-[#C8A76E]/25 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#C8A76E]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#4B5563] mb-0.5">Email</div>
                  <div className="text-white font-semibold text-[15px]">zcooltech4@gmail.com</div>
                </div>
                <ArrowUpRight size={16} className="text-[#4B5563] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 rounded-xl bg-[#25D366]/08 border border-[#25D366]/15 hover:bg-[#25D366]/14 hover:border-[#25D366]/25 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={16} className="text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#4B5563] mb-0.5">WhatsApp</div>
                  <div className="text-white font-semibold text-[15px]">Chat Instantly</div>
                </div>
                <ArrowUpRight size={16} className="text-[#4B5563] group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/06">
                <div className="w-11 h-11 rounded-xl bg-white/08 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#9CA3AF]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#4B5563] mb-0.5">Location</div>
                  <div className="text-white font-semibold text-[14px]">Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── LINK GRID ── */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/06">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="10" fill="rgba(255,255,255,0.06)" />
                <path d="M10 14 H38 L28 24 H10 Z" fill="white" />
                <path d="M10 34 H38 L28 24 H10 Z" fill="#C8A76E" opacity="0.9" />
              </svg>
              <div>
                <div className="font-bold text-[12px] tracking-[0.12em] uppercase text-white">Z Cool Tech</div>
                <div className="text-[9px] tracking-[0.18em] uppercase text-[#4B5563]">Engineering Co.</div>
              </div>
            </Link>
            <p className="text-[#4B5563] text-[12px] leading-relaxed font-light">
              GST Registered · IndiaMART Gold Star · OEM Authorized Partner
            </p>
            {/* Newsletter */}
            <div className="mt-2">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center rounded-lg overflow-hidden border border-white/10 focus-within:border-white/20 transition-colors"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-[12px] text-white placeholder-[#4B5563] px-3 py-2.5 outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-2.5 bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors flex-shrink-0"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
              <p className="text-[10px] text-[#4B5563] mt-1.5">Subscribe for industrial efficiency updates</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white">
                {section}
              </div>
              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[12px] text-[#4B5563] hover:text-[#C8A76E] transition-colors leading-snug"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-[12px] text-[#4B5563] hover:text-white transition-colors leading-snug"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-[#4B5563] tracking-wide">
            © {year} Z Cool Technology. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-[11px] text-[#4B5563] hover:text-white transition-colors tracking-wide">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-[11px] text-[#4B5563] hover:text-white transition-colors tracking-wide">
              Legal Compliance
            </Link>
            <a
              href="https://wa.me/919920691707"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#4B5563] hover:text-[#25D366] transition-colors tracking-wide"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
