'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Send, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import PhotoUpload from './PhotoUpload';
import { submitInquiry } from '@/lib/api';
import { COMPANY_DETAILS } from '@/constants/company';

export default function QuoteModal({ isOpen, onClose, initialProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    brand: initialProduct?.brand || '',
    model: initialProduct?.code || initialProduct?.name || '',
    quantity: '1 Unit',
    requirement: '',
    consentGiven: false,
  });

  const [photo, setPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Sync formData with initialProduct when modal opens
  useEffect(() => {
    if (isOpen && initialProduct) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({
        ...prev,
        brand: initialProduct.brand || prev.brand,
        model: initialProduct.code || initialProduct.name || prev.model,
      }));
    }
  }, [isOpen, initialProduct]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Please fill in your Name and Contact Phone number.');
      return;
    }

    if (formData.phone.trim().length < 7) {
      toast.error('Please enter a valid phone number with at least 7 digits.');
      return;
    }

    if (!formData.consentGiven) {
      toast.error('Please acknowledge the Privacy Policy before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitInquiry(
        {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          brand: formData.brand.trim(),
          model: formData.model.trim(),
          quantity: formData.quantity,
          requirement: formData.requirement.trim(),
          type: 'quote',
          source: 'quote_modal',
          consentGiven: true,
        },
        photo
      );

      if (res && res.success) {
        const refId = res.inquiryId || res.data?.id || 'CONFIRMED';
        setInquiryRef(refId);
        setSubmitted(true);
        toast.success('Quote request registered successfully!');

        // Format message for WhatsApp directly to +91 99209 06508
        const waLines = [
          `*NEW COMPRESSOR QUOTE INQUIRY*`,
          `*Ref ID:* #${refId}`,
          `----------------------------------------`,
          `*Buyer Name:* ${formData.name.trim()}`,
          `*Phone:* ${formData.phone.trim()}`,
          formData.company.trim() ? `*Company:* ${formData.company.trim()}` : null,
          formData.email.trim() ? `*Email:* ${formData.email.trim()}` : null,
          ``,
          `*Compressor Requirement:*`,
          formData.brand.trim() ? `• Brand: ${formData.brand.trim()}` : null,
          formData.model.trim() ? `• Model / Code: ${formData.model.trim()}` : null,
          `• Quantity: ${formData.quantity}`,
          formData.requirement.trim() ? `• Notes: ${formData.requirement.trim()}` : null,
          photo ? `• Photo: Nameplate photo attached` : null,
          `----------------------------------------`,
          `Sent via Z.Cool Enterprises Portal (+91 99209 06508)`,
        ].filter((line) => line !== null);

        const directWaUrl = `https://wa.me/919920906508?text=${encodeURIComponent(waLines.join('\n'))}`;
        setWhatsappUrl(directWaUrl);

        // Directly open WhatsApp with pre-filled message
        if (typeof window !== 'undefined') {
          window.open(directWaUrl, '_blank', 'noopener,noreferrer');
        }
      } else {
        throw new Error(res?.message || 'Submission failed');
      }
    } catch (err) {
      toast.error(err.message || 'Unable to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#0A192F]/80 backdrop-blur-xs animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#0A192F] text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#1D6FA3] flex items-center justify-center font-mono font-bold text-xs text-white shrink-0">
              Z
            </div>
            <div>
              <h3 id="quote-modal-title" className="font-display font-bold text-sm sm:text-base text-white">
                REQUEST COMPRESSOR QUOTE
              </h3>
              <p className="font-mono text-[9px] sm:text-[10px] text-[#0EA6A6] uppercase tracking-widest">
                TECHNICAL PROCUREMENT & AVAILABILITY DESK
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 transition-colors rounded hover:bg-white/10 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          {submitted ? (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900">Quote Request Registered</h4>
              <p className="text-slate-600 text-xs max-w-md font-sans leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry has been registered directly in our Mumbai technical dispatch system.
              </p>
              {inquiryRef && (
                <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg font-mono text-xs text-slate-700">
                  <span className="text-slate-500 mr-2">REFERENCE ID:</span>
                  <span className="font-bold text-[#1D6FA3] tracking-wider">{String(inquiryRef)}</span>
                </div>
              )}
              <p className="text-slate-500 text-[11px] font-sans">
                Our sourcing engineers will review your model requirements and contact you at <strong className="text-slate-800">{formData.phone}</strong>.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs uppercase tracking-wider rounded-lg font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                  >
                    <MessageSquare size={16} />
                    <span>Send via WhatsApp (+91 99209 06508)</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setInquiryRef(null);
                    setPhoto(null);
                    setWhatsappUrl('');
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#0A192F] hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-wider rounded-lg font-bold cursor-pointer transition-colors shadow-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Apex HVAC Services"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Copeland / Daikin"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Model / Part No.
                  </label>
                  <input
                    type="text"
                    name="model"
                    placeholder="e.g. ZR72KC-TFD"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Quantity
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#1D6FA3]"
                  >
                    <option value="1 Unit">1 Unit</option>
                    <option value="2-5 Units">2 - 5 Units</option>
                    <option value="6-10 Units">6 - 10 Units</option>
                    <option value="10+ Bulk Order">10+ Bulk Order</option>
                  </select>
                </div>
              </div>

              {/* Photo Upload Component */}
              <PhotoUpload
                onPhotoSelect={(file) => setPhoto(file)}
                label="Compressor Nameplate Photo (Optional)"
              />

              <div>
                <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Operating Notes / Equipment Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify chiller brand, refrigerant, or urgency..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:border-[#1D6FA3]"
                />
              </div>

              {/* Privacy Policy Acknowledgement Checkbox */}
              <div className="pt-1">
                <div className="flex items-start gap-2.5">
                  <input
                    id="modal-quote-consent"
                    type="checkbox"
                    checked={formData.consentGiven}
                    onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                    className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-[#1D6FA3] focus:ring-2 focus:ring-[#1D6FA3]/30 cursor-pointer"
                  />
                  <label
                    htmlFor="modal-quote-consent"
                    className="text-[11px] text-slate-600 leading-snug cursor-pointer select-none"
                  >
                    I have read the{' '}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-[#1D6FA3] font-semibold underline underline-offset-2 hover:text-[#165680]"
                    >
                      Privacy Policy
                    </Link>{' '}
                    and understand that my information will be used to respond to this enquiry.
                  </label>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Direct Sourcing Desk</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
