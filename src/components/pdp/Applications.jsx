'use client';

import React from 'react';
import { ShieldAlert, Cpu, CheckCircle, Award } from 'lucide-react';

export default function Applications({ product }) {
  const C = {
    bgSage: '#E2ECE9',
    navy: '#0F2B46',
    borderLight: 'rgba(15,43,70,0.06)'
  };

  const applications = product.applications || [];

  return (
    <div className="w-full text-left">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {applications.map((app, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[32px] p-6 border shadow-lg flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            style={{ borderColor: C.borderLight }}
          >
            {/* Top accent border bar matching product accent color */}
            <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: product.accentColor }} />
            
            <div>
              {/* Industry Header */}
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-base font-bold text-[#0F2B46] font-sans flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0EA6A6]" />
                  {app.name}
                </h4>
                <span className="font-mono text-[9px] text-slate-400 font-bold">CASE STUDY 0{index + 1}</span>
              </div>

              {/* Problem Block */}
              <div className="mb-4">
                <span className="font-mono text-[7px] text-red-500 font-bold uppercase tracking-widest block mb-1.5 flex items-center gap-1">
                  <ShieldAlert size={10} /> FIELD PROBLEM REPORT
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {app.problem}
                </p>
              </div>

              {/* Solution Block */}
              <div className="mb-6">
                <span className="font-mono text-[7px] text-[#1D6FA3] font-bold uppercase tracking-widest block mb-1.5 flex items-center gap-1">
                  <Cpu size={10} /> SIZED ENGINEERING SYSTEM
                </span>
                <p className="text-xs text-[#0F2B46] font-bold leading-normal">
                  {app.product}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="flex flex-col gap-2 mb-6 border-t pt-4" style={{ borderColor: C.borderLight }}>
                {app.benefits?.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-[11px] text-slate-600">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={12} />
                    <span className="font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome Metric Block */}
            <div className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-4 mt-2">
              <span className="font-mono text-[7px] text-emerald-600 font-bold uppercase tracking-widest block mb-1 flex items-center gap-1">
                <Award size={10} /> VERIFIED OUTCOME PARAMETERS
              </span>
              <p className="text-xs font-bold text-[#0F2B46] leading-snug">
                {app.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
