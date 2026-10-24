'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Mail, Send, Clock } from 'lucide-react';
import { COMPANY_DETAILS } from '@/constants/company';

export default function QuoteDock({ product, isDesktop, setQuoteModalOpen }) {
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const C = {
    navy: '#0F2B46',
    gold: '#B8955A'
  };

  return (
    <AnimatePresence>
      {showDock && (
        <>
          {isDesktop ? (
            /* ── DESKTOP SCROLL FLOATING PANEL ── */
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="fixed right-6 bottom-6 z-[9990] flex flex-col items-end gap-3 pointer-events-none select-none"
            >
              {/* Guarantee Tag */}
              <div className="pointer-events-auto bg-[#B8955A] text-white px-3.5 py-1.5 rounded-full shadow-md text-[9px] font-mono uppercase tracking-widest font-bold flex items-center gap-1">
                <Clock size={10} /> 15-Min Response Guarantee
              </div>

              {/* Action buttons panel */}
              <div className="pointer-events-auto bg-[#0F2B46] border border-white/10 rounded-2xl p-4 shadow-[0_15px_40px_rgba(15,43,70,0.35)] flex flex-col gap-3 min-w-[240px] text-left">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <img
                    src={product.supportEngineer.img}
                    alt={product.supportEngineer.name}
                    className="w-9 h-9 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <span className="text-[10px] text-white font-bold block leading-snug">{product.supportEngineer.name}</span>
                    <span className="text-[8px] text-slate-400 block font-mono uppercase tracking-wider">{product.supportEngineer.role}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={COMPANY_DETAILS.primaryTel}
                    className="flex-1 h-9 bg-white/10 hover:bg-white text-white hover:text-[#0F2B46] rounded-lg flex items-center justify-center transition-all"
                    title="Call Engineering Desk"
                  >
                    <Phone size={14} />
                  </a>
                  <a
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all"
                    title="WhatsApp Chat"
                  >
                    <MessageSquare size={14} />
                  </a>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="flex-1 h-9 bg-[#1D6FA3] hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all shadow-md cursor-pointer"
                    title="Request Parametric RFQ"
                  >
                    <Mail size={14} />
                  </button>
                  <a
                    href={COMPANY_DETAILS.mailto}
                    className="flex-1 h-9 bg-[#B8955A] hover:bg-amber-600 text-white rounded-lg flex items-center justify-center transition-all"
                    title="Email Procurement Desk"
                  >
                    <Send size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ── MOBILE VIEW FIXED BOTTOM CTA PANEL ── */
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 left-0 w-full z-[9995] bg-[#0F2B46] text-white p-3.5 grid grid-cols-4 gap-2 border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]"
            >
              <a
                href={COMPANY_DETAILS.primaryTel}
                className="flex flex-col items-center justify-center gap-1 py-2 bg-white/10 hover:bg-white/20 rounded-xl"
              >
                <Phone size={14} />
                <span className="text-[8px] font-mono uppercase">Call</span>
              </a>
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 py-2 bg-emerald-500/90 hover:bg-emerald-600 rounded-xl"
              >
                <MessageSquare size={14} />
                <span className="text-[8px] font-mono uppercase">WhatsApp</span>
              </a>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="flex flex-col items-center justify-center gap-1 py-2 bg-[#1D6FA3] hover:bg-blue-600 rounded-xl cursor-pointer"
              >
                <Mail size={14} />
                <span className="text-[8px] font-mono uppercase">Quote RFQ</span>
              </button>
              <a
                href={COMPANY_DETAILS.mailto}
                className="flex flex-col items-center justify-center gap-1 py-2 bg-[#B8955A]/90 hover:bg-amber-600 rounded-xl"
              >
                <Send size={14} />
                <span className="text-[8px] font-mono uppercase">Email</span>
              </a>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
