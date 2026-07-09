'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { setCursorHover } = useTheme();

  return (
    <footer className="relative bg-[#121C26] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand block */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2" onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)}>
              <svg className="w-8 h-8 text-[#1D6FA3]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,15 H 85 L 65,35 H 15 Z M 15,85 H 85 L 65,65 H 15 Z" fill="#FFFFFF" />
                <path d="M 65,35 L 35,65" stroke="#1D6FA3" strokeWidth="6" strokeLinecap="round" />
              </svg>
              <span className="font-bold tracking-widest text-sm uppercase text-white">Z COOL TECH</span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-wider">
              ENGINEERING NEXT-GENERATION INDUSTRIAL HVAC AND THERMAL MANAGEMENT PLATFORMS FOR MISSION-CRITICAL INFRASTRUCTURE.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Solutions</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/products" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Precision Chillers</Link>
              <Link href="/products" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Close Control ACs</Link>
              <Link href="/products" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Cabinet Exchangers</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Resources</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/blog" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Technical Blog</Link>
              <Link href="#cases" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Case Analyses</Link>
              <Link href="#certificates" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Certifications</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Newsletter</h4>
            <p className="text-xs text-gray-400 uppercase tracking-wider">SUBSCRIBE TO RECEIVE INDUSTRIAL EFFICIENCY UPDATES.</p>
            <form className="relative flex items-center border border-white/10 focus-within:border-[#1D6FA3] transition-all rounded-[16px] overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent text-xs text-white placeholder-gray-500 px-4 py-3 focus:outline-none uppercase tracking-wider"
              />
              <button className="px-4 py-3 bg-white/5 border-l border-white/10 hover:bg-[#1D6FA3] hover:text-white transition-colors cursor-pointer">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Copyrights */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Z COOL TECHNOLOGY. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-[#1D6FA3] transition-colors">PRIVACY TERMS</Link>
            <Link href="#disclaimer" className="hover:text-[#1D6FA3] transition-colors">LEGAL COMPLIANCE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
