'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Store,
  Layers,
  UserCheck,
  MapPin,
  Users,
  CalendarCheck,
  Scale,
  TrendingUp,
  Award,
  Receipt,
  Truck,
  CreditCard,
  Banknote,
  CheckSquare,
  Globe,
  Building2,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Building,
  History,
  Phone,
  MessageSquare,
  Mail,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/constants/company';
import { gsap } from '@/lib/gsap';

export default function InteractiveCompanyProfile({
  defaultExpanded = false,
  className = '',
}) {
  const [isExpanded, setIsExpanded] = useState(() => {
    if (defaultExpanded) return true;
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        return params.get('about_expanded') === 'true';
      } catch (_) {
        return false;
      }
    }
    return false;
  });
  const [activeGroup, setActiveGroup] = useState('all'); // 'all' | 'basic' | 'statutory' | 'logistics'
  const [copiedGst, setCopiedGst] = useState(false);
  const contentRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const previewCardRef = useRef(null);
  const hasExpandedOnce = useRef(defaultExpanded);

  // Handle Copy GST
  const handleCopyGst = (e) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(COMPANY_DETAILS.profile.gstNumber);
      setCopiedGst(true);
      setTimeout(() => setCopiedGst(false), 2200);
    }
  };

  const isInitialMount = useRef(true);

  // Toggle Expansion with GSAP
  const handleToggle = () => {
    const nextState = !isExpanded;
    hasExpandedOnce.current = true;
    setIsExpanded(nextState);

    // If collapsing and user has scrolled below preview card, scroll back smoothly
    if (!nextState && previewCardRef.current) {
      const rect = previewCardRef.current.getBoundingClientRect();
      if (rect.top < 0) {
        window.scrollTo({
          top: window.scrollY + rect.top - 90,
          behavior: 'smooth',
        });
      }
    }
  };

  // GSAP Smooth Reveal / Collapse Animation
  useEffect(() => {
    if (!contentRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isExpanded) {
        gsap.set(contentRef.current, {
          height: 'auto',
          opacity: 1,
          display: 'block',
        });
        if (cardsContainerRef.current) {
          const cards = cardsContainerRef.current.querySelectorAll('.profile-stagger-item');
          if (cards.length > 0) {
            gsap.set(cards, { opacity: 1, y: 0 });
          }
        }
      }
      return;
    }

    if (isExpanded) {
      if (prefersReducedMotion) {
        gsap.set(contentRef.current, {
          height: 'auto',
          opacity: 1,
          display: 'block',
        });
      } else {
        gsap.killTweensOf(contentRef.current);
        // Expand smoothly
        gsap.fromTo(
          contentRef.current,
          { height: 0, opacity: 0, display: 'block' },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.45,
            ease: 'power2.out',
            onComplete: () => {
              if (contentRef.current) contentRef.current.style.height = 'auto';
            },
          }
        );

        // Stagger entrance of inner groups and cards
        if (cardsContainerRef.current) {
          const cards = cardsContainerRef.current.querySelectorAll('.profile-stagger-item');
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { y: 8 },
              {
                y: 0,
                duration: 0.3,
                stagger: 0.02,
                ease: 'power2.out',
              }
            );
          }
        }
      }
    } else {
      if (prefersReducedMotion) {
        gsap.set(contentRef.current, {
          height: 0,
          opacity: 0,
          display: 'none',
        });
      } else {
        gsap.killTweensOf(contentRef.current);
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: 'power2.inOut',
          onComplete: () => {
            if (contentRef.current) contentRef.current.style.display = 'none';
          },
        });
      }
    }
  }, [isExpanded]);

  // Basic Information Cards
  const basicInfoCards = [
    {
      id: 'nature',
      label: 'Nature of Business',
      value: COMPANY_DETAILS.profile.natureOfBusiness,
      icon: Store,
      badge: 'Core Model',
    },
    {
      id: 'additional',
      label: 'Additional Business',
      value: COMPANY_DETAILS.profile.additionalBusiness,
      icon: Layers,
      badge: 'Supply & Service',
    },
    {
      id: 'contact-person',
      label: 'Company Contact / Owner',
      value: COMPANY_DETAILS.profile.contactPerson,
      icon: UserCheck,
      badge: 'Authorized Lead',
    },
    {
      id: 'employees',
      label: 'Total Number of Employees',
      value: COMPANY_DETAILS.profile.employees,
      icon: Users,
      badge: 'Team Size',
    },
    {
      id: 'gst-date',
      label: 'GST Registration Date',
      value: COMPANY_DETAILS.profile.gstRegistrationDate,
      icon: CalendarCheck,
      badge: 'Tax Record',
    },
    {
      id: 'legal-status',
      label: 'Legal Status of Firm',
      value: COMPANY_DETAILS.profile.legalStatus,
      icon: Scale,
      badge: 'Constitution',
    },
    {
      id: 'turnover',
      label: 'Annual Turnover',
      value: COMPANY_DETAILS.profile.annualTurnover,
      icon: TrendingUp,
      badge: 'Commercial',
    },
    {
      id: 'partner-name',
      label: 'GST Partner Name',
      value: COMPANY_DETAILS.profile.gstPartnerName,
      icon: Award,
      badge: 'Proprietor',
    },
    {
      id: 'registered-address',
      label: 'Registered Address',
      value: COMPANY_DETAILS.address.full,
      icon: MapPin,
      badge: 'Official Depot',
      isFullWidth: true,
      hasMapsLink: true,
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* ── STAGE 1: PREMIUM ABOUT US PREVIEW CARD ── */}
      <div
        ref={previewCardRef}
        className="bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative"
      >
        {/* Subtle Industrial Accent Top Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0E4B75] via-[#1D6FA3] to-[#0EA6A6]" />

        <div className="p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100/80 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E4B75]">
                <span className="w-2 h-2 rounded-full bg-[#0E4B75] animate-pulse" />
                <span>ABOUT Z.COOL ENTERPRISES</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] tracking-tight leading-tight">
                Get to Know Our Business
              </h3>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-normal pt-1">
                {COMPANY_DETAILS.profile.previewIntro}
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="hidden lg:flex flex-col items-end shrink-0 pt-2 text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <ShieldCheck size={14} className="text-emerald-600" />
                Verified Commercial Profile
              </span>
              <span className="text-[11px] font-mono text-slate-400 mt-1">
                GST: 27AKAPU9371N1ZB
              </span>
            </div>
          </div>

          {/* Three Compact Information Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#1D6FA3]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0E4B75] flex items-center justify-center shrink-0 shadow-2xs">
                <Store size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Core Operation
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                  Trader - Retailer
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#1D6FA3]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0E4B75] flex items-center justify-center shrink-0 shadow-2xs">
                <Building size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Commercial Track
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                  Established business profile
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#1D6FA3]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0E4B75] flex items-center justify-center shrink-0 shadow-2xs">
                <MapPin size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Procurement Hub
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                  Mumbai, Maharashtra
                </strong>
              </div>
            </div>
          </div>

          {/* Action Row: Discover More Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
            <button
              id="about-discover-more-btn"
              type="button"
              onClick={handleToggle}
              aria-expanded={isExpanded}
              aria-controls="about-detailed-profile"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E4B75] hover:bg-[#093757] active:scale-[0.99] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              <span>{isExpanded ? 'Show Less' : 'Discover More'}</span>
              {isExpanded ? (
                <ChevronUp size={16} className="transition-transform duration-200" />
              ) : (
                <ChevronDown size={16} className="transition-transform duration-200" />
              )}
            </button>

            <span className="text-xs text-slate-500 font-sans text-center sm:text-right">
              {isExpanded
                ? 'Showing complete statutory registration & logistics terms'
                : 'Click to view complete business registration, statutory details & shipment terms'}
            </span>
          </div>
        </div>

        {/* ── STAGE 2: ANIMATED DETAILED COMPANY PROFILE ── */}
        <div
          ref={contentRef}
          id="about-detailed-profile"
          role="region"
          aria-labelledby="about-discover-more-btn"
          className="border-t border-slate-200 bg-[#FAFBFD] overflow-hidden"
          style={{ display: isExpanded ? 'block' : 'none' }}
        >
          <div ref={cardsContainerRef} className="p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* 1. Historical Business Narrative */}
            <div className="profile-stagger-item bg-white border border-blue-100 rounded-xl p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-[#0E4B75] font-mono text-xs font-bold uppercase tracking-wider">
                <History size={15} />
                <span>About Our Business</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base font-sans leading-relaxed">
                {COMPANY_DETAILS.profile.historicalNarrative}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-slate-500">
                <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                  Year of Establishment: <strong>{COMPANY_DETAILS.profile.establishedYear}</strong>
                </span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                  GST Registered: <strong>{COMPANY_DETAILS.profile.gstRegistrationDate}</strong>
                </span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                  Depot: <strong>Dharavi, Mumbai</strong>
                </span>
              </div>
            </div>

            {/* Optional Second Discovery Level: Filter / Group Selector */}
            <div className="profile-stagger-item flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <div className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                DETAILED COMPANY SPECIFICATIONS
              </div>

              {/* Discovery Level Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/80 p-1 rounded-lg text-xs font-mono">
                {[
                  { id: 'all', label: 'All Details' },
                  { id: 'basic', label: 'Basic Info (9)' },
                  { id: 'statutory', label: 'Statutory Profile' },
                  { id: 'logistics', label: 'Payment & Logistics' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveGroup(tab.id)}
                    className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
                      activeGroup === tab.id
                        ? 'bg-white text-[#0E4B75] shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Group: Basic Information (9 Items) */}
            {(activeGroup === 'all' || activeGroup === 'basic') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider flex items-center gap-2">
                    <Building2 size={14} />
                    <span>Basic Information</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">9 verified fields</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {basicInfoCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.id}
                        className={`profile-stagger-item bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs hover:border-[#1D6FA3]/40 transition-all flex flex-col justify-between ${
                          card.isFullWidth ? 'sm:col-span-2 lg:col-span-3' : ''
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                              {card.label}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                              {card.badge}
                            </span>
                          </div>

                          <div className="flex items-start gap-3 pt-1">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-[#0E4B75] flex items-center justify-center shrink-0 mt-0.5">
                              <Icon size={18} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <strong className="block text-slate-900 font-bold text-sm sm:text-base leading-snug break-words">
                                {card.value}
                              </strong>

                              {card.hasMapsLink && (
                                <div className="pt-2 flex flex-wrap items-center gap-3">
                                  <a
                                    href={COMPANY_DETAILS.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0E4B75] hover:text-[#093757] hover:underline"
                                  >
                                    <span>Get Directions on Google Maps</span>
                                    <ExternalLink size={12} />
                                  </a>
                                  <span className="text-slate-300">|</span>
                                  <span className="text-[11px] font-mono text-slate-500">
                                    Depot Landmark: Dharavi Bus Depot
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Group: Statutory Profile */}
            {(activeGroup === 'all' || activeGroup === 'statutory') && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck size={14} />
                    <span>Statutory Profile</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    Official Tax &amp; GST Entity
                  </span>
                </div>

                <div className="profile-stagger-item bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-2xs space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                    
                    {/* GST Display & Copy */}
                    <div className="md:col-span-7 space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                        Goods &amp; Services Tax Number (GSTIN)
                      </span>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="font-mono text-base sm:text-xl font-extrabold text-[#0E4B75] bg-blue-50/70 border border-blue-200/80 px-4 py-2 rounded-lg tracking-wider select-all">
                          {COMPANY_DETAILS.profile.gstNumber}
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyGst}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-semibold transition-colors cursor-pointer border border-slate-200 shadow-2xs"
                          title="Copy GST Number to clipboard"
                        >
                          {copiedGst ? (
                            <>
                              <Check size={14} className="text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy GST</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 font-sans">
                        State: Maharashtra (Code 27) &bull; Verified under Central Board of Indirect Taxes &amp; Customs
                      </p>
                    </div>

                    {/* Statutory Highlights */}
                    <div className="md:col-span-5 grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                        <span className="text-slate-400 text-[10px] block">REGISTRATION DATE</span>
                        <strong className="text-slate-800 font-bold">{COMPANY_DETAILS.profile.gstRegistrationDate}</strong>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                        <span className="text-slate-400 text-[10px] block">LEGAL ENTITY</span>
                        <strong className="text-slate-800 font-bold">{COMPANY_DETAILS.profile.legalStatus}</strong>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                        <span className="text-slate-400 text-[10px] block">PROPRIETOR</span>
                        <strong className="text-slate-800 font-bold">{COMPANY_DETAILS.profile.gstPartnerName}</strong>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                        <span className="text-slate-400 text-[10px] block">TURNOVER BRACKET</span>
                        <strong className="text-slate-800 font-bold">{COMPANY_DETAILS.profile.annualTurnover}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Group: Packaging, Payment and Shipment */}
            {(activeGroup === 'all' || activeGroup === 'logistics') && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs font-bold text-[#0E4B75] uppercase tracking-wider flex items-center gap-2">
                    <CreditCard size={14} />
                    <span>Packaging, Payment &amp; Shipment</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    B2B Commercial Settlement
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Payment Modes */}
                  <div className="profile-stagger-item bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                        <Banknote size={15} className="text-[#0E4B75]" />
                        <span>Accepted Payment Modes</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">4 Supported</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        { name: 'Cash', icon: Banknote },
                        { name: 'Cheque', icon: CheckSquare },
                        { name: 'Online', icon: Globe },
                        { name: 'Bank Transfer', icon: Building2 },
                      ].map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={item.name}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/90 text-slate-800 font-mono text-xs font-semibold shadow-2xs"
                          >
                            <ItemIcon size={14} className="text-[#0E4B75]" />
                            <span>{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[11px] text-slate-500 font-sans pt-1">
                      Direct invoice payment via RTGS/NEFT or cheque clearing for verified institutional accounts.
                    </p>
                  </div>

                  {/* Shipment Mode */}
                  <div className="profile-stagger-item bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                        <Truck size={15} className="text-[#0E4B75]" />
                        <span>Shipment &amp; Logistics Mode</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Logistics</span>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono text-sm font-bold shadow-2xs">
                        <Truck size={17} className="text-emerald-700" />
                        <span>By Road</span>
                      </div>
                      <span className="text-xs font-sans text-slate-600">
                        Commercial surface road transport across Mumbai MMR &amp; interstate dispatch.
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-sans pt-1">
                      Secure wooden pallet crating and transport tie-ups for industrial compressors.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Clean Statutory Footnote & Collapse Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="text-xs font-mono text-slate-500 text-center sm:text-left">
                <span>Official Commercial Profile &bull; {COMPANY_DETAILS.name} &bull; Mumbai, Maharashtra</span>
              </div>

              <button
                type="button"
                onClick={handleToggle}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 active:scale-[0.99] text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ChevronUp size={14} />
                <span>Show Less</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
