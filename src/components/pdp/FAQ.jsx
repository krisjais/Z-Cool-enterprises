'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, HelpCircle, Info } from 'lucide-react';

export default function FAQ({ product }) {
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const C = {
    blue: '#1D6FA3',
    borderLight: 'rgba(15,43,70,0.06)',
    borderStrong: 'rgba(15,43,70,0.12)'
  };

  const filteredFaqs = useMemo(() => {
    const faqsList = product?.faqs || [];
    if (!faqSearch) return faqsList;
    const q = String(faqSearch || "").toLowerCase();
    return faqsList.filter(faq => 
      String(faq?.q || "").toLowerCase().includes(q) || 
      String(faq?.a || "").toLowerCase().includes(q)
    );
  }, [faqSearch, product?.faqs]);

  return (
    <div className="w-full text-left">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Search HUD header */}
        <div className="text-center mb-12 select-none">
          <span className="font-mono text-[10px] text-[#0EA6A6] tracking-widest uppercase font-bold">ENGINEERING INQUIRIES</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B46] mt-2">Technical FAQs</h2>
          
          <div className="relative w-full max-w-md mx-auto mt-6 flex items-center">
            <Search size={14} className="absolute left-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQs by keywords..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border rounded-xl text-xs bg-slate-50 outline-none text-slate-700 placeholder-slate-400"
              style={{ borderColor: C.borderStrong }}
            />
          </div>
        </div>

        {/* FAQs stack list */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="border rounded-2xl overflow-hidden transition-colors bg-white" 
                  style={{ borderColor: isOpen ? C.blue : C.borderLight }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-5 font-bold text-xs md:text-sm text-[#0F2B46] bg-slate-50/50 hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={14} className="text-[#1D6FA3]/60 flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <span className="font-mono text-xs ml-4 flex-shrink-0">{isOpen ? '—' : '+'}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 border-t text-xs text-slate-600 leading-relaxed font-light font-mono bg-slate-50/20" style={{ borderColor: C.borderLight }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center font-mono text-xs text-slate-400 py-12 border border-dashed rounded-2xl">
              <Info className="mx-auto mb-2 text-slate-300" size={20} />
              No matching technical FAQs found.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
