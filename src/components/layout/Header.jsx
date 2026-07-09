'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { setCursorHover } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[990] transition-all duration-500 ${
        scrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Magnetic Logo */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group cursor-pointer transition-all duration-300 hover:scale-[1.03]"
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
        >
          <img
            src="/logo1.png"
            alt="Z Cool Tech Logo Icon"
            className="w-8 h-8 object-contain"
          />
          <span className="font-medium tracking-[0.25em] text-sm uppercase text-[#0F2B46] group-hover:text-[#1D6FA3] transition-colors duration-300" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Z COOL TECH
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                pathname === link.path ? 'text-[#1D6FA3] font-semibold' : 'text-[#4A6580] hover:text-[#0F2B46]'
              }`}
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="secondary" size="sm" magnetic href="/admin/login">
            Portal
          </Button>
          <Button variant="primary" size="sm" magnetic href="/contact">
            Get Quote <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-[#0F2B46] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#F6FAFD]/98 border-b border-black/5 py-8 px-6 flex flex-col gap-6 md:hidden backdrop-blur-lg"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-sm uppercase tracking-widest text-[#4A6580] hover:text-[#1D6FA3] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="secondary" size="sm" className="w-full text-center" href="/admin/login" onClick={() => setIsOpen(false)}>
                Portal
              </Button>
              <Button variant="primary" size="sm" className="w-full text-center" href="/contact" onClick={() => setIsOpen(false)}>
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
