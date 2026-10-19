import React from 'react';
import Link from 'next/link';
import { Building2, Snowflake, Factory, Hotel, ChevronRight } from 'lucide-react';

const APPLICATIONS = [
  {
    icon: Building2,
    title: 'Commercial Air Conditioning',
    desc: 'Scroll and reciprocating units for office buildings, retail spaces, and central ducted packages.',
  },
  {
    icon: Snowflake,
    title: 'Cold Storage & Refrigeration',
    desc: 'Low-temperature compressors for walk-in freezers, food preservation, and dairy facilities.',
  },
  {
    icon: Factory,
    title: 'Industrial Process Chillers',
    desc: 'Process cooling compressors for manufacturing, plastic injection, and chemical facilities.',
  },
  {
    icon: Hotel,
    title: 'VRV / VRF HVAC Systems',
    desc: 'DC inverter replacement units for modular commercial multi-zone cooling systems.',
  },
];

export default function ApplicationsSection() {
  return (
    <section id="applications" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0E4B75] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
            <span>Facilities Served</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Commercial &amp; Industrial Applications
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
            Replacement compressors supplied for commercial facilities and refrigeration plants across India.
          </p>
        </div>

        {/* 4 Application Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APPLICATIONS.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBFBFA] border border-stone-200 rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 text-[#0E4B75] flex items-center justify-center border border-stone-200">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {app.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
