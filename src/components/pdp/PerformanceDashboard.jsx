'use client';

import React from 'react';
import { Zap, Thermometer, ShieldCheck, HelpCircle, HardDrive } from 'lucide-react';

export default function PerformanceDashboard({ product }) {
  const C = {
    navy: '#0F2B46',
    borderLight: 'rgba(15,43,70,0.06)'
  };

  // Dynamically map telemetry gauges based on product catalog data
  const metrics = [
    {
      label: 'EFFICIENCY RATING',
      value: product.id === 'hvac-pcb-100' ? '97%' : '4.2 COP',
      desc: 'System power conversion ratio under nominal grid load.',
      icon: <Zap className="text-[#1D6FA3]" size={16} />
    },
    {
      label: 'TEMPERATURE THRESHOLD',
      value: product.id === 'hvac-pcb-100' ? '+105°C' : '+45°C Air',
      desc: 'Maximum operational safety threshold trigger limit.',
      icon: <Thermometer className="text-[#0EA6A6]" size={16} />
    },
    {
      label: 'WARRANTY CONTRACT',
      value: product.warranty,
      desc: 'Complete factory hardware replacement security period.',
      icon: <ShieldCheck className="text-[#B8955A]" size={16} />
    },
    {
      label: 'TECHNICAL SUPPORT',
      value: product.techSupport,
      desc: 'Dedicated controls engineer helpline dispatch SLA.',
      icon: <HelpCircle className="text-indigo-500" size={16} />
    },
    {
      label: 'STOCK AVAILABILITY',
      value: product.availability,
      desc: 'Current warehouse inventory dispatch readiness.',
      icon: <HardDrive className="text-emerald-500" size={16} />
    }
  ];

  return (
    <div className="w-full bg-[#0F2B46] text-white py-12 rounded-[32px] px-6 md:px-12 border border-white/10 shadow-2xl text-left select-none relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] engineering-grid" />
      
      <div className="max-w-[1440px] mx-auto">
        <span className="font-mono text-[8px] text-[#B8955A] uppercase tracking-widest block mb-1.5 font-bold">REAL-TIME PARAMETRIC HUD</span>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight font-sans mb-8">Performance Telemetry Dashboard</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[8px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</span>
                  {item.icon}
                </div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-2 font-mono">
                  {item.value}
                </h4>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
