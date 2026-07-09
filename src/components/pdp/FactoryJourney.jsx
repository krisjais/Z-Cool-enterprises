'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from '@/lib/gsap';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function FactoryJourney({ product }) {
  const timelineRef = useRef(null);
  const C = {
    borderLight: 'rgba(15,43,70,0.06)',
    gold: '#B8955A'
  };

  const steps = useMemo(() => product?.factoryQuality || [], [product?.factoryQuality]);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el.children,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [steps]);

  return (
    <div className="w-full text-left">
      <div 
        ref={timelineRef} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6"
      >
        {steps.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-slate-50 border rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden group hover:bg-slate-100/50 transition-colors" 
            style={{ borderColor: C.borderLight }}
          >
            <div>
              {/* Step indicator */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-[8px] text-slate-400 font-bold uppercase tracking-widest">
                  PHASE 0{idx + 1}
                </span>
                {idx < 5 && (
                  <ArrowRight size={12} className="text-[#B8955A]/50 hidden lg:block group-hover:translate-x-1 transition-transform" />
                )}
              </div>
              
              {/* Phase name & description */}
              <h4 className="text-xs font-bold text-[#0F2B46] mb-3 leading-snug uppercase tracking-wide">
                {item.name}
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-light font-mono">
                {item.desc}
              </p>
            </div>

            {/* Verification Footer indicator */}
            <div className="border-t pt-4 mt-6 flex justify-between items-center text-[9px] font-mono text-[#B8955A] font-bold">
              <span>QC STAMP</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={10} /> PASSED
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
