'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { setCursorHover } = useTheme();

  const [openSection, setOpenSection] = React.useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="relative bg-[#121C26] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand block */}
          <div className="flex flex-col gap-6 border-b border-white/5 md:border-b-0 pb-6 md:pb-0">
            <Link href="/" className="flex items-center gap-3.5 group cursor-pointer transition-all duration-300 hover:scale-[1.03]" onMouseEnter={() => setCursorHover(true)} onMouseLeave={() => setCursorHover(false)}>
              <img
                src="/logo1.png"
                alt="Z Cool Tech Logo Icon"
                className="w-8 h-8 object-contain brightness-0 invert"
              />
              <span className="font-medium tracking-[0.25em] text-sm uppercase text-white group-hover:text-[#1D6FA3] transition-colors duration-300" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Z COOL TECH
              </span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-wider">
              ENGINEERING NEXT-GENERATION INDUSTRIAL HVAC AND THERMAL MANAGEMENT PLATFORMS FOR MISSION-CRITICAL INFRASTRUCTURE.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:gap-4 border-b border-white/5 md:border-b-0 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('solutions')}
              className="flex justify-between items-center w-full md:pointer-events-none text-left py-2 md:py-0 cursor-pointer outline-none"
            >
              <h4 className="text-xs uppercase tracking-widest text-white font-bold">Solutions</h4>
              <span className="md:hidden text-white font-mono text-sm">{openSection === 'solutions' ? '−' : '+'}</span>
            </button>
            <div className={`${openSection === 'solutions' ? 'flex' : 'hidden'} md:flex flex-col gap-2.5 mt-3 md:mt-0 transition-all duration-300`}>
              <Link href="/products" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Precision Chillers</Link>
              <Link href="/products" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Close Control ACs</Link>
              <Link href="/products" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Cabinet Exchangers</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col md:gap-4 border-b border-white/5 md:border-b-0 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('resources')}
              className="flex justify-between items-center w-full md:pointer-events-none text-left py-2 md:py-0 cursor-pointer outline-none"
            >
              <h4 className="text-xs uppercase tracking-widest text-white font-bold">Resources</h4>
              <span className="md:hidden text-white font-mono text-sm">{openSection === 'resources' ? '−' : '+'}</span>
            </button>
            <div className={`${openSection === 'resources' ? 'flex' : 'hidden'} md:flex flex-col gap-2.5 mt-3 md:mt-0 transition-all duration-300`}>
              <Link href="/blog" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Technical Blog</Link>
              <Link href="#cases" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Case Analyses</Link>
              <Link href="#certificates" className="text-xs text-gray-400 hover:text-[#1D6FA3] transition-colors uppercase tracking-wider">Certifications</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col md:gap-4 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('newsletter')}
              className="flex justify-between items-center w-full md:pointer-events-none text-left py-2 md:py-0 cursor-pointer outline-none"
            >
              <h4 className="text-xs uppercase tracking-widest text-white font-bold">Newsletter</h4>
              <span className="md:hidden text-white font-mono text-sm">{openSection === 'newsletter' ? '−' : '+'}</span>
            </button>
            <div className={`${openSection === 'newsletter' ? 'flex' : 'hidden'} md:flex flex-col gap-4 mt-3 md:mt-0 transition-all duration-300`}>
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
