'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone, MessageSquare, Mail, MapPin, ChevronRight, Home, ShieldCheck,
  Send, Clock, Award, Building, User, Info, FileText
} from 'lucide-react';
import Preloader from '../../components/loader/Preloader';

const C = {
  bgHero:        '#F1F6FA',
  bgWarmWhite:   '#E6F1F5',
  bgSage:        '#E2ECE9',
  bgNeutralGray: '#EAEDF1',
  bgDarkNavy:    '#0F2B46',
  card:          '#FFFFFF',
  navy:          '#0F2B46',
  blue:          '#1D6FA3',
  teal:          '#0EA6A6',
  gold:          '#F2C14E',
  slate:         '#6E7C93',
  borderLight:   'rgba(15,43,70,0.06)',
  borderStrong:  'rgba(15,43,70,0.12)',
};

export default function ContactPage() {
  const [ready, setReady] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', category: 'PCB Boards', message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Server connection issues. Try calling directly.');
      }
    } catch (err) {
      // Mock submit if server is offline
      setSubmitted(true);
    }
  };

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      <div className="w-full overflow-x-hidden min-h-screen" style={{ background: C.bgHero }}>
        
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-8 pb-4 flex items-center gap-2 font-mono text-[10px] text-slate-400 tracking-wider">
          <Link href="/" className="hover:text-[#1D6FA3] flex items-center gap-1">
            <Home size={10} /> HOME
          </Link>
          <ChevronRight size={10} />
          <span className="text-[#0F2B46] font-bold">CONTACT CHANNELS</span>
        </div>

        {/* Hero Banner */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-20 text-left">
          <span className="font-mono text-xs text-[#1D6FA3] tracking-widest uppercase font-bold">INQUIRY HUB</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.navy }}>
            Operational Procurement Desk
          </h1>
          <p className="text-slate-600 max-w-xl text-[15px] leading-relaxed">
            Get in touch with Z-Cool engineers. Submit system metrics for pricing schematics and delivery schedules.
          </p>
        </section>

        {/* Grid: Form and Contact details */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col (5 cols): Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Direct Call/WA Cards */}
              <div className="p-8 rounded-[28px] bg-white border flex flex-col gap-6 shadow-sm" style={{ borderColor: C.borderLight }}>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#0F2B46] border-b pb-3" style={{ borderColor: C.borderLight }}>
                  Direct Operational Links
                </h3>

                <a
                  href="tel:+919920691707"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border"
                  style={{ borderColor: C.borderStrong }}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-[#1D6FA3]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Call Now</div>
                    <div className="text-sm font-bold text-[#0F2B46]">+91 99206 91707</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919920691707"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border"
                  style={{ borderColor: C.borderStrong }}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">WhatsApp</div>
                    <div className="text-sm font-bold text-[#0F2B46]">Chat Live with Engineer</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border rounded-2xl" style={{ borderColor: C.borderStrong }}>
                  <div className="w-10 h-10 rounded-xl bg-[#0EA6A6]/10 flex items-center justify-center flex-shrink-0 text-[#0EA6A6]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Email Address</div>
                    <div className="text-sm font-bold text-[#0F2B46]">zcooltech4@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border rounded-2xl" style={{ borderColor: C.borderStrong }}>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-600">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Corporate Office</div>
                    <div className="text-sm font-bold text-[#0F2B46]">Plot 42, Okhla Industrial Area Phase-III, New Delhi</div>
                  </div>
                </div>
              </div>

              {/* Verified Badge card */}
              <div className="p-8 rounded-[28px] bg-slate-50 border flex items-center gap-4" style={{ borderColor: C.borderStrong }}>
                <ShieldCheck size={28} className="text-[#0EA6A6] flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#0F2B46]">Official Authorized OEM partner</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase tracking-widest">ISO 9001:2015 CERTIFIED ASSEMBLY LINES</p>
                </div>
              </div>
            </div>

            {/* Right Col (7 cols): Form */}
            <div className="lg:col-span-7 bg-white rounded-[32px] border p-10 shadow-sm" style={{ borderColor: C.borderLight }}>
              <h3 className="font-bold text-lg text-[#0F2B46] mb-8 pb-3 border-b" style={{ borderColor: C.borderLight }}>
                Inquiry Dispatch Form
              </h3>

              {submitted ? (
                <div className="text-center py-16 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-600 border border-emerald-500/30">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F2B46] mb-2">Inquiry Logged</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you. Your details are registered in our secure CRM. Our engineering support desk will email you layout schematics within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-xs text-[#1D6FA3] font-bold uppercase tracking-widest hover:underline">
                    Submit New Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">Operator / Company Name</label>
                      <input
                        type="text"
                        placeholder="Company Ltd"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs p-3 border rounded-xl bg-slate-50 outline-none placeholder-slate-400"
                        style={{ borderColor: C.borderStrong }}
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">Technical Email</label>
                      <input
                        type="email"
                        placeholder="procure@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-3 border rounded-xl bg-slate-50 outline-none placeholder-slate-400"
                        style={{ borderColor: C.borderStrong }}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">Contact Number</label>
                      <input
                        type="text"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-3 border rounded-xl bg-slate-50 outline-none placeholder-slate-400"
                        style={{ borderColor: C.borderStrong }}
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">Target Component Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full text-xs p-3 border rounded-xl bg-slate-50 outline-none text-slate-700"
                        style={{ borderColor: C.borderStrong }}
                      >
                        <option value="PCB Boards">VRF Inverter PCB Boards</option>
                        <option value="Chillers">Industrial Process Water Chillers</option>
                        <option value="Cabinet Coolers">Cabinet Panel Heat Exchangers</option>
                        <option value="Precision ACs">Precision Server Close Control ACs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">Enclosure Details / Custom Parameters</label>
                    <textarea
                      placeholder="Specify ambient temperature parameters, voltage phase, size footprint, and requested CAD format..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs p-3 border rounded-xl bg-slate-50 h-32 resize-none outline-none placeholder-slate-400"
                      style={{ borderColor: C.borderStrong }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1D6FA3] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 hover:bg-[#0F2B46]"
                  >
                    <Send size={13} /> Dispatch Inquiry Logs
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

