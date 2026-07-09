'use client';

import React from 'react';

const RAIL_NODES = [
  { num: '01', title: 'Overview' },
  { num: '02', title: 'Cooling' },
  { num: '03', title: 'PCB' },
  { num: '04', title: 'Installation' },
  { num: '05', title: 'Testing' },
  { num: '06', title: 'Warranty' },
  { num: '07', title: 'Downloads' },
  { num: '08', title: 'Support' }
];

export default function ProgressRail({ activeChapter }) {
  const percentage = (activeChapter / (RAIL_NODES.length - 1)) * 100;

  return (
    <div className="relative flex flex-col gap-3.5 pl-4 border-l border-slate-200 mt-2 z-20 select-none">
      {/* Dynamic scrolling filling indicator line */}
      <div 
        className="absolute left-[-1px] top-0 w-[2px] bg-[#1D6FA3] transition-all duration-300"
        style={{
          height: `${percentage}%`
        }}
      />
      
      <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
        {RAIL_NODES.map((ch, idx) => {
          const isActive = activeChapter === idx;
          const isCompleted = idx < activeChapter;
          
          return (
            <button
              key={ch.num}
              onClick={() => {
                const targetCard = document.getElementById(`story-card-${ch.num}`);
                if (targetCard) {
                  targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <span className={`font-mono text-[9px] transition-all duration-300 ${
                isActive 
                  ? 'text-[#1D6FA3] font-bold scale-110' 
                  : isCompleted 
                  ? 'text-[#0F2B46]/70' 
                  : 'text-slate-400/60'
              }`}>
                {ch.num}
              </span>
              <span className={`text-[10px] font-sans tracking-wide uppercase transition-all duration-300 ${
                isActive 
                  ? 'text-[#0F2B46] font-bold translate-x-1' 
                  : isCompleted 
                  ? 'text-[#0F2B46]/60' 
                  : 'text-slate-400/40'
              }`}>
                {ch.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
