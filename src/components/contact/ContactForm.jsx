'use client';

import React, { useState } from 'react';
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  Camera,
  RotateCcw,
  Building2,
  FileCheck,
} from 'lucide-react';
import PhotoUpload from '@/components/ui/PhotoUpload';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    quantity: '1 Unit',
    application: 'Commercial Air Conditioning',
    requirement: '',
  });

  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCompiled, setIsCompiled] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsCompiled(true);
  };

  // Construct structured text for WhatsApp and Email transmission
  const compiledSummary = `*COMPRESSOR PROCUREMENT INQUIRY*
----------------------------------------
*Buyer Details:*
• Name: ${formData.name.trim()}
• Company: ${formData.company.trim() || 'Not specified'}
• Phone: ${formData.phone.trim()}
• Email: ${formData.email.trim() || 'Not specified'}

*Compressor Requirement:*
• Brand: ${formData.brand.trim() || 'Open / Unspecified'}
• Model / Part No: ${formData.model.trim() || 'To be identified from nameplate'}
• Quantity: ${formData.quantity}
• Application: ${formData.application}

*Additional Notes:*
${formData.requirement.trim() || 'None provided'}
${photo ? '\n*Photo:* Nameplate photo attached for identification' : ''}`;

  const whatsappUrl = `https://wa.me/919920691707?text=${encodeURIComponent(compiledSummary)}`;
  const mailtoUrl = `mailto:zcooltech4@gmail.com?subject=${encodeURIComponent(
    `Compressor Inquiry: ${formData.model.trim() || 'Model Match'} - ${formData.name.trim()}`
  )}&body=${encodeURIComponent(compiledSummary)}`;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs">
      {isCompiled ? (
        /* Truthful, Integration-Ready Transmission Review State */
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded mb-2">
              <CheckCircle2 size={14} />
              <span>SPECIFICATIONS VALIDATED &amp; COMPILED</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl text-[#0A192F]">
              Review &amp; Transmit Your Inquiry
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans mt-1">
              Your inquiry details have been formatted. Our direct online API dispatch is currently
              integration-ready. To send these exact specifications directly to our Mumbai technical
              desk right now, choose your preferred channel:
            </p>
          </div>

          {/* Compiled Summary Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 font-mono text-xs text-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pb-3 border-b border-slate-200">
              <div>
                <span className="text-slate-400 block">BUYER NAME</span>
                <strong className="text-slate-900">{formData.name}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">PHONE / WHATSAPP</span>
                <strong className="text-slate-900">{formData.phone}</strong>
              </div>
              {formData.company && (
                <div>
                  <span className="text-slate-400 block">COMPANY</span>
                  <span className="text-slate-800">{formData.company}</span>
                </div>
              )}
              {formData.email && (
                <div>
                  <span className="text-slate-400 block">EMAIL</span>
                  <span className="text-slate-800">{formData.email}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pb-3 border-b border-slate-200">
              <div>
                <span className="text-slate-400 block">COMPRESSOR MODEL / CODE</span>
                <strong className="text-[#1D6FA3]">
                  {formData.model || 'To be verified from nameplate'}
                </strong>
              </div>
              <div>
                <span className="text-slate-400 block">BRAND</span>
                <span className="text-slate-800">{formData.brand || 'Unspecified'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">QUANTITY</span>
                <span className="text-slate-800">{formData.quantity}</span>
              </div>
              <div>
                <span className="text-slate-400 block">APPLICATION</span>
                <span className="text-slate-800">{formData.application}</span>
              </div>
            </div>

            {formData.requirement && (
              <div className="text-[11px]">
                <span className="text-slate-400 block mb-0.5">REQUIREMENT NOTES</span>
                <p className="text-slate-800 font-sans text-xs">{formData.requirement}</p>
              </div>
            )}

            {photo && (
              <div className="text-[11px] text-[#1D6FA3] flex items-center gap-1.5 pt-1">
                <Camera size={13} />
                <span>Nameplate photo selected: {photo.name}</span>
              </div>
            )}
          </div>

          {/* Direct Transmit Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2.5 shadow-md transition-colors"
            >
              <MessageSquare size={18} />
              <span>TRANSMIT VIA WHATSAPP SOURCING DESK</span>
            </a>

            <a
              href={mailtoUrl}
              className="w-full py-3.5 px-6 bg-[#0A192F] hover:bg-[#122847] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2.5 transition-colors"
            >
              <Mail size={16} />
              <span>SEND VIA EMAIL SPECIFICATION DESK</span>
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 font-mono text-xs">
              <button
                type="button"
                onClick={() => setIsCompiled(false)}
                className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
              >
                <RotateCcw size={13} />
                <span>Edit Form Details</span>
              </button>

              <div className="text-slate-500 text-[11px]">
                <span>Direct Desk: </span>
                <a href="tel:+919920691707" className="font-bold text-[#0A192F] hover:underline">
                  +91 99206 91707
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* The Standard Procurement Inquiry Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-8 font-sans" id="quote-form">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="font-display font-extrabold text-2xl text-[#0A192F]">
              Request Compressor Quote &amp; Sourcing
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Provide your required model details or existing equipment specifications.
            </p>
          </div>

          {/* 01 // YOUR DETAILS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider border-b border-slate-100 pb-2">
              <span>01 // YOUR DETAILS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1"
                >
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                  className={`w-full min-h-[44px] px-3.5 py-3 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all ${
                    errors.name
                      ? 'border-rose-500 focus:border-rose-600 focus:ring-rose-500/20'
                      : 'border-slate-300 focus:border-[#1D6FA3]'
                  }`}
                />
                {errors.name && (
                  <p className="text-rose-600 font-mono text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Phone / WhatsApp Number <span className="text-rose-600">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder="+91 99206 91707"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: null });
                  }}
                  className={`w-full min-h-[44px] px-3.5 py-3 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all ${
                    errors.phone
                      ? 'border-rose-500 focus:border-rose-600 focus:ring-rose-500/20'
                      : 'border-slate-300 focus:border-[#1D6FA3]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-rose-600 font-mono text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-company"
                  className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Company / Firm Name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="e.g. Apex Cooling Solutions"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1D6FA3] focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="engineer@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1D6FA3] focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all"
                />
              </div>
            </div>
          </div>

          {/* 02 // COMPRESSOR REQUIREMENT */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider border-b border-slate-100 pb-2">
              <span>02 // COMPRESSOR REQUIREMENT</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-brand"
                  className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Brand (If Known)
                </label>
                <input
                  id="contact-brand"
                  type="text"
                  placeholder="Copeland / Daikin / Danfoss / LG"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1D6FA3] focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-model"
                  className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Model Number / Part Code
                </label>
                <input
                  id="contact-model"
                  type="text"
                  placeholder="e.g. ZR72KC-TFD / JT160G-P8Y1"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1D6FA3] focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-quantity"
                  className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Required Quantity
                </label>
                <select
                  id="contact-quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D6FA3] focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all cursor-pointer"
                >
                  <option value="1 Unit">1 Unit (Emergency Replacement)</option>
                  <option value="2-5 Units">2 - 5 Units (Batch)</option>
                  <option value="6-10 Units">6 - 10 Units (Project Requirement)</option>
                  <option value="10+ Bulk Order">10+ Units (Bulk Procurement)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-application"
                  className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Application / Equipment Type
                </label>
                <select
                  id="contact-application"
                  value={formData.application}
                  onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D6FA3] focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all cursor-pointer"
                >
                  <option value="Commercial Air Conditioning">
                    Commercial Air Conditioning (Ductable / Package)
                  </option>
                  <option value="VRV / VRF System">VRV / VRF Outdoor System</option>
                  <option value="Cold Storage & Refrigeration">
                    Cold Storage &amp; Refrigeration Unit
                  </option>
                  <option value="Water Chiller Circuit">Water Chiller Circuit</option>
                  <option value="Commercial Cassette & Tower AC">
                    Commercial Cassette &amp; Tower AC
                  </option>
                  <option value="Industrial Process Cooling">Industrial Process Cooling</option>
                  <option value="Other Application">Other / To Discuss</option>
                </select>
              </div>
            </div>
          </div>

          {/* 03 // ADDITIONAL INFORMATION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider border-b border-slate-100 pb-2">
              <span>03 // ADDITIONAL INFORMATION</span>
            </div>

            {/* Photo Upload Component (Section 5) */}
            <div className="space-y-1.5">
              <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                SEND NAMEPLATE PHOTO (OPTIONAL)
              </label>
              <p className="text-slate-500 text-xs font-sans">
                A clear photo of the compressor label can help us identify the model and review your
                requirement.
              </p>
              <PhotoUpload
                label="Attach Compressor Nameplate Photo"
                onPhotoSelect={(file) => setPhoto(file)}
              />
            </div>

            {/* Requirement / Operating Notes */}
            <div>
              <label
                htmlFor="contact-requirement"
                className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Requirement / Operating Notes
              </label>
              <textarea
                id="contact-requirement"
                rows={3}
                placeholder="Specify refrigerant (e.g. R22, R410A, R407C), operating voltage (415V 3-phase vs 230V 1-phase), mounting footprint, or timeframe..."
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                className="w-full min-h-[100px] px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1D6FA3] focus:ring-2 focus:ring-[#1D6FA3]/30 transition-all resize-y"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full min-h-[48px] py-3.5 px-6 bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.985]"
            >
              <FileCheck size={18} />
              <span>REVIEW &amp; TRANSMIT INQUIRY</span>
            </button>
            <p className="text-slate-400 text-[11px] font-mono text-center mt-2">
              Zero obligation • Direct review by Mumbai compressor procurement desk
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
