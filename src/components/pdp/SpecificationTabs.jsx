'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Info, ArrowUpRight } from 'lucide-react';

export default function SpecificationTabs({ product }) {
  const categories = Object.keys(product?.specs || {});
  const [activeTab, setActiveTab] = useState(categories[0] || 'electrical');
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedParam, setSelectedParam] = useState(null);

  const toggleRow = (key) => {
    setExpandedRows(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const C = {
    navy: '#0F2B46',
    blue: '#1D6FA3',
    borderLight: 'rgba(15,43,70,0.06)'
  };

  const currentSpecs = (product?.specs || {})[activeTab] || {};

  return (
    <div className="w-full text-left">
      {/* Dynamic tab categories trigger row */}
      <div className="flex flex-wrap gap-2 mb-8 border-b pb-4" style={{ borderColor: C.borderLight }}>
        {categories.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setExpandedRows({});
              setSelectedParam(null);
            }}
            className={`px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all border ${
              activeTab === tab
                ? 'bg-[#0F2B46] text-white border-[#0F2B46] shadow-md'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-500 border-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Parametric Matrix Table (Left 8) */}
        <div className="col-span-1 lg:col-span-8 border rounded-3xl overflow-hidden bg-white" style={{ borderColor: C.borderLight }}>
          <div className="grid grid-cols-12 bg-slate-50/50 p-4 border-b font-mono text-[10px] text-slate-400 font-bold uppercase" style={{ borderColor: C.borderLight }}>
            <div className="col-span-5 md:col-span-4">Parameter Name</div>
            <div className="col-span-7 md:col-span-6">Value / Operational Limits</div>
            <div className="hidden md:col-span-2 md:block text-right">Verification</div>
          </div>

          {Object.entries(currentSpecs).map(([key, val]) => {
            const isExpanded = !!expandedRows[key];
            return (
              <div key={key} className="border-b last:border-b-0" style={{ borderColor: C.borderLight }}>
                <button
                  onClick={() => {
                    toggleRow(key);
                    setSelectedParam({ name: key, value: val });
                  }}
                  className={`w-full grid grid-cols-12 p-4 items-center text-xs md:text-sm hover:bg-slate-50/30 transition-colors text-left ${
                    selectedParam && selectedParam.name === key ? 'bg-slate-50/50' : ''
                  }`}
                >
                  <div className="col-span-5 md:col-span-4 font-semibold text-[#0F2B46] pr-2">{key}</div>
                  <div className="col-span-7 md:col-span-6 font-mono text-[#1D6FA3] font-semibold break-all">{val}</div>
                  <div className="hidden md:col-span-2 md:block text-right text-[10px] font-mono text-[#0EA6A6] font-bold">
                    {isExpanded ? 'Collapse [-]' : 'Inspect [+]'}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-slate-50/20"
                    >
                      <div className="p-4 border-t text-[11px] text-slate-500 leading-relaxed font-mono" style={{ borderColor: C.borderLight }}>
                        Verification Checkpoint: Conforms under standard IEC testing parameters. Calibration tolerance buffer is within ±1.5% margins. Register values mapped to telemetry logger.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Spec highlight card (Right 4) */}
        <div className="col-span-1 lg:col-span-4">
          <AnimatePresence mode="wait">
            {selectedParam ? (
              <motion.div
                key={selectedParam.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-50 border rounded-3xl p-6 relative flex flex-col justify-between h-full min-h-[220px]"
                style={{ borderColor: C.borderLight }}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[8px] text-[#0EA6A6] font-bold uppercase tracking-wider">PARAMETER INSIGHT CARD</span>
                    <Settings className="text-[#0EA6A6]" size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-[#0F2B46] mt-4 mb-2">{selectedParam.name}</h4>
                  <p className="text-[11px] text-[#1D6FA3] font-mono font-bold break-all mb-4">{selectedParam.value}</p>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Designed to ensure stability under multi-phase grid fluctuations, protecting the compressor stage and logic cores from noise spikes.
                  </p>
                </div>
                
                <a href="#downloads-desk" className="flex items-center gap-1.5 font-mono text-[10px] text-[#1D6FA3] font-bold mt-6 hover:underline uppercase">
                  Learn More <ArrowUpRight size={12} />
                </a>
              </motion.div>
            ) : (
              <div className="border border-dashed rounded-3xl p-12 text-center text-slate-400 font-mono text-xs flex flex-col items-center justify-center min-h-[220px]">
                <Info className="mb-2 text-slate-300" size={24} />
                <span>Select or tap a parameter row on the matrix grid to review insight logs.</span>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
