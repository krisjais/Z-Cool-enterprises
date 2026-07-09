'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';

export default function CompareDrawer({ isOpen, onClose, currentProduct }) {
  const comparisonProduct = PRODUCTS_CATALOG.find(p => p.id !== currentProduct.id) || PRODUCTS_CATALOG[0];

  const specKeys = [
    { label: 'Voltage Draw', key: 'Input Voltage', category: 'electrical' },
    { label: 'Max Capacity', key: 'Max Dissipated Wattage', altKey: 'Cooling Capacity', category: 'thermal' },
    { label: 'Unit Weight', key: 'Weight', altKey: 'Weight (Dry)', category: 'mechanical' },
    { label: 'BMS Connection', key: 'Communication Protocol', altKey: 'Fieldbus Communication', category: 'communication' },
    { label: 'IP Standard', key: 'Ingress Protection', altKey: 'Certifications', category: 'environmental' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Frosted backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9990] bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Slide up drawer container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 w-full z-[9995] bg-[#0F2B46] text-white border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] rounded-t-[32px] overflow-hidden"
          >
            {/* Header info */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-6 flex justify-between items-center border-b border-white/10 text-left">
              <div className="flex items-center gap-3">
                <Scale className="text-[#0EA6A6]" size={20} />
                <div>
                  <span className="font-mono text-[8px] text-[#B8955A] uppercase tracking-widest font-bold block">ENTERPRISE MATRIX AUDIT</span>
                  <h3 className="text-base font-bold font-sans">Parametric Specs Comparison</h3>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 border border-white/15 rounded-full hover:bg-white/10 transition-colors text-white"
              >
                <X size={16} />
              </button>
            </div>

            {/* Side-by-Side Grid comparison */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-8 overflow-y-auto max-h-[60vh] text-left">
              <div className="grid grid-cols-3 gap-6 font-mono text-[9px] text-slate-400 font-bold uppercase pb-3 border-b border-white/5">
                <div>SPECIFICATION KEY</div>
                <div className="text-[#1D6FA3]">{currentProduct.name} (ACTIVE)</div>
                <div className="text-[#0EA6A6]">{comparisonProduct.name}</div>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {specKeys.map((item, idx) => {
                  // Retrieve values dynamically
                  const valActive = currentProduct.specs[item.category]?.[item.key] || 'N/A';
                  const valCompare = comparisonProduct.specs[item.category]?.[item.key] || 
                                     comparisonProduct.specs[item.category]?.[item.altKey] || 'N/A';
                  
                  return (
                    <div 
                      key={idx} 
                      className="grid grid-cols-3 gap-6 py-3.5 border-b border-white/5 last:border-b-0 items-center text-xs md:text-sm"
                    >
                      <div className="font-mono text-[10px] text-slate-400 font-semibold">{item.label}</div>
                      <div className="font-mono font-bold text-white break-words">{valActive}</div>
                      <div className="font-mono text-slate-300 break-words">{valCompare}</div>
                    </div>
                  );
                })}
              </div>

              {/* Matrix Certification stamp footer */}
              <div className="mt-8 border-t border-white/10 pt-6 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="text-emerald-500" size={12} /> Live calibration verified conformant</span>
                <span>Z-COOL LAB AUDIT SYSTEM v3.4</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
