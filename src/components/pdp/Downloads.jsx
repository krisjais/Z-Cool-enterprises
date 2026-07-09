'use client';

import React from 'react';
import { Download, FileText, Settings, Shield, BookOpen } from 'lucide-react';

const getFileIcon = (fileType) => {
  switch (fileType) {
    case 'PDF':
      return <FileText className="text-[#1D6FA3]" size={24} />;
    case 'CAD':
      return <Settings className="text-[#0EA6A6]" size={24} />;
    case 'MANUAL':
      return <BookOpen className="text-indigo-500" size={24} />;
    case 'CERTIFICATE':
      return <Shield className="text-[#B8955A]" size={24} />;
    default:
      return <FileText className="text-slate-500" size={24} />;
  }
};

export default function Downloads({ product }) {
  const C = {
    borderLight: 'rgba(15,43,70,0.06)'
  };

  const downloads = product.downloads || [];

  return (
    <div id="downloads-desk" className="w-full text-left">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {downloads.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white border rounded-[28px] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            style={{ borderColor: C.borderLight }}
          >
            {/* Top document category color stripe */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-[#1D6FA3] transition-colors" />

            <div>
              {/* Document Icon & Metadata */}
              <div className="flex justify-between items-start mb-4">
                {getFileIcon(item.type)}
                <span className="font-mono text-[8px] bg-slate-50 border border-slate-200 text-slate-500 rounded px-2 py-0.5 font-bold uppercase">
                  {item.type}
                </span>
              </div>

              {/* Document Name */}
              <h4 className="text-sm font-bold text-[#0F2B46] mb-3 leading-snug group-hover:text-[#1D6FA3] transition-colors">
                {item.name}
              </h4>

              {/* CAD drawing visual preview placeholder or micro schematics */}
              <div className="w-full h-16 bg-slate-50 rounded-xl mb-4 border border-dashed border-slate-200/50 flex items-center justify-center relative overflow-hidden select-none">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] engineering-grid" />
                <span className="font-mono text-[7px] text-slate-400 tracking-wider uppercase">PREVIEW FILE BLOCK</span>
              </div>

              {/* Version & Date Logs */}
              <div className="flex flex-col gap-1.5 mb-6 text-[10px] font-mono text-slate-500">
                <div className="flex justify-between border-b pb-1 border-slate-100">
                  <span>VERSION:</span>
                  <span className="font-bold text-[#0F2B46]">{item.version}</span>
                </div>
                <div className="flex justify-between border-b pb-1 border-slate-100">
                  <span>SIZE:</span>
                  <span className="font-bold text-[#1D6FA3]">{item.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>UPDATED:</span>
                  <span className="font-bold text-slate-400">{item.updated}</span>
                </div>
              </div>
            </div>

            {/* Download Link */}
            <a 
              href={item.file} 
              className="w-full py-3.5 border border-slate-200 hover:border-[#1D6FA3] hover:bg-[#1D6FA3] hover:text-white text-[#0F2B46] text-[10px] font-mono font-bold uppercase rounded-xl text-center flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Download size={12} />
              <span>Download File</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
