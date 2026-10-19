'use client';

import React, { useState } from 'react';
import { 
  Phone, Mail, MessageSquare, MapPin, CheckCircle2, 
  AlertCircle, Loader2, Camera, Send, RotateCcw 
} from 'lucide-react';
import PhotoUpload from '@/components/ui/PhotoUpload';
import { submitInquiry } from '@/lib/api';

export default function HomeQuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    model: '',
    requirement: '',
  });

  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [inquiryRef, setInquiryRef] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid contact phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim() || undefined,
        model: formData.model.trim() || undefined,
        message: formData.requirement.trim() || 'Fast quote request from homepage',
        type: 'quote',
        source: 'homepage_quote_section',
      };

      const result = await submitInquiry(payload, photo);
      setInquiryRef(result.inquiryId || result.data?.inquiryId || 'CONFIRMED');
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(err.message || 'Failed to submit quote request. Please try again or reach us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      company: '',
      model: '',
      requirement: '',
    });
    setPhoto(null);
    setErrors({});
    setSubmitSuccess(false);
    setInquiryRef(null);
    setSubmitError(null);
  };

  return (
    <section id="quote-section" className="py-14 sm:py-18 lg:py-20 bg-[#F4F3EF] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Mumbai Desk Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0E4B75] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
                <span>Commercial Inquiry</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Request a Compressor Quote or Availability Check
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Connect with our Mumbai procurement desk for displacement matching, stock confirmation, and freight quotations.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2 text-sm">
              <a
                href="https://wa.me/919920691707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-300 transition-colors shadow-xs group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Fastest Response</span>
                  <strong className="text-slate-900 font-semibold group-hover:text-emerald-700 transition-colors">
                    WhatsApp: +91 99206 91707
                  </strong>
                </div>
              </a>

              <a
                href="tel:+919920691707"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-stone-200 hover:border-[#0E4B75] transition-colors shadow-xs group"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-[#0E4B75] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Direct Calling Line</span>
                  <strong className="text-slate-900 font-semibold group-hover:text-[#0E4B75] transition-colors">
                    +91 99206 91707
                  </strong>
                </div>
              </a>

              <a
                href="mailto:zcooltech4@gmail.com"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-stone-200 hover:border-slate-400 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Formal POs &amp; RFQs</span>
                  <strong className="text-slate-900 font-semibold">
                    zcooltech4@gmail.com
                  </strong>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white/70 border border-stone-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <MapPin size={14} className="text-[#0E4B75]" />
                <span>Mumbai Operations &amp; Sourcing Desk</span>
              </div>
              <p>
                Sourcing and dispatch coordination for HVAC contractors across India. Contact our desk for availability, specifications, and freight quotations.
              </p>
            </div>
          </div>

          {/* Right Column: Live Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm">
            {submitSuccess ? (
              /* Verified Database Confirmation Receipt */
              <div className="space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded mb-2">
                    <CheckCircle2 size={14} />
                    <span>ENQUIRY SAVED TO DATABASE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Quote Request Received
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Your specifications have been saved to our procurement system. Our Mumbai technical team will review compressor availability.
                  </p>
                </div>

                <div className="bg-[#FBFBFA] border border-stone-200 rounded-xl p-5 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <span className="text-slate-500 font-semibold">DATABASE REFERENCE:</span>
                    <span className="font-mono font-bold text-[#0E4B75] bg-white px-2.5 py-1 rounded border border-stone-300">
                      {inquiryRef}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-500 block">Buyer:</span>
                      <strong className="text-slate-900">{formData.name}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Phone:</span>
                      <strong className="text-slate-900">{formData.phone}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Model Match:</span>
                      <strong className="text-[#0E4B75]">{formData.model || 'To be verified from nameplate'}</strong>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={`https://wa.me/919920691707?text=${encodeURIComponent(
                      `*COMPRESSOR INQUIRY [Ref: ${inquiryRef}]*\nBuyer: ${formData.name}\nPhone: ${formData.phone}\nModel: ${formData.model || 'Open match'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] px-6 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>Follow Up Immediately on WhatsApp (Ref #{inquiryRef})</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full min-h-[40px] px-4 py-2 rounded-lg border border-stone-300 hover:bg-stone-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The Active Working Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-stone-200 pb-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Quick Specification &amp; Quote Form
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                    Provide your compressor model or contact information below.
                  </p>
                </div>

                {submitError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs flex items-start gap-2">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <div>
                      <strong>Submission Failed:</strong> {submitError}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="home-quote-name"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Your Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="home-quote-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-stone-50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0E4B75]/20 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-600'
                          : 'border-stone-300 focus:border-[#0E4B75]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="home-quote-phone"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Phone / WhatsApp <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="home-quote-phone"
                      type="tel"
                      required
                      placeholder="+91 99206 91707"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-stone-50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0E4B75]/20 transition-all ${
                        errors.phone
                          ? 'border-rose-500 focus:border-rose-600'
                          : 'border-stone-300 focus:border-[#0E4B75]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="home-quote-company"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Company / Contracting Firm
                    </label>
                    <input
                      id="home-quote-company"
                      type="text"
                      placeholder="e.g. Apex Chillers Mumbai"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0E4B75] focus:ring-2 focus:ring-[#0E4B75]/20 transition-all"
                    />
                  </div>

                  {/* Compressor Model Number */}
                  <div>
                    <label
                      htmlFor="home-quote-model"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Compressor Model / Part Code
                    </label>
                    <input
                      id="home-quote-model"
                      type="text"
                      placeholder="e.g. ZR72KC-TFD / JT160"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0E4B75] focus:ring-2 focus:ring-[#0E4B75]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Optional Photo Attachment */}
                <div>
                  <PhotoUpload
                    label="Attach Compressor Nameplate Photo (Optional)"
                    onPhotoSelect={(file) => setPhoto(file)}
                  />
                </div>

                {/* Operating / Requirement Notes */}
                <div>
                  <label
                    htmlFor="home-quote-requirement"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Requirement Notes / Voltage / Application
                  </label>
                  <textarea
                    id="home-quote-requirement"
                    rows={2}
                    placeholder="e.g. Need 415V 3-phase replacement for water chiller in Andheri East..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full min-h-[80px] px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0E4B75] focus:ring-2 focus:ring-[#0E4B75]/20 transition-all resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] py-3.5 px-6 bg-[#0E4B75] hover:bg-[#093757] text-white text-sm font-semibold flex items-center justify-center gap-2 rounded-lg shadow-xs cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Saving Quote Request...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-slate-400 text-xs text-center mt-2">
                    Reviewed directly by our Mumbai sourcing desk
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
