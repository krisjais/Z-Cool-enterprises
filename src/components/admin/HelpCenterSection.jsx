'use client';

import React, { useState } from 'react';
import {
  HelpCircle,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Clock,
  Layers,
  Box,
  ShoppingCart,
  Truck,
  Users,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileQuestion,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const GUIDES = [
  {
    id: 'products',
    icon: Box,
    title: 'Product Catalogue Management',
    summary: 'Guidelines for adding, pressure testing records, and editing technical specifications.',
    steps: [
      'Navigate to the "Products" tab to view all 177+ technical catalogue items.',
      'To add a new compressor or AC unit, click "Add Product" and complete the technical schema (Code, Brand, Refrigerant, Voltage, Displacement, and Application).',
      'For image attachments, click "Choose Files" to upload real nameplate photos and units directly to Cloudinary or the local uploads storage.',
      'Primary images can be re-ordered anytime by clicking "Make Primary" on the uploaded image card.',
      'Always set availability accurately: IN STOCK, OUT OF STOCK, REFURBISHMENT IN PROGRESS, or MADE TO ORDER.',
    ],
  },
  {
    id: 'categories',
    icon: Layers,
    title: 'Categories & Taxonomy Architecture',
    summary: 'Managing catalog categorization, ordering, and protecting product relationships.',
    steps: [
      'The Categories section maintains the official 25 commercial taxonomy groups (Scroll Compressors, Rotary, Screw, AMC, etc.).',
      'When renaming a category, the backend automatically updates all products mapped to that category name to preserve catalog integrity.',
      'Safety check: A category cannot be deleted if active products are assigned to it. You must reassign those products first.',
      'You can toggle category status between "Active" and "Inactive" at any time to temporarily hide categories from public browsing.',
    ],
  },
  {
    id: 'orders',
    icon: ShoppingCart,
    title: 'Order Tracking & Dispatches',
    summary: 'Handling online quotations, B2B requisitions, and dispatch docket creation.',
    steps: [
      'Orders represent confirmed commercial buyer orders placed either via the online technical desk or offline phone desk.',
      'Statuses transition through: PENDING → CONFIRMED → PROCESSING → COMPLETED (or CANCELLED).',
      'Once an order is confirmed, create a shipment docket under the "Shipments" tab to link tracking numbers and courier partner references (e.g. Blue Dart Express, V-Trans, Safechem).',
      'Customer details, contact phone, and delivery city are permanently attached to each order for auditing.',
    ],
  },
  {
    id: 'customers',
    icon: Users,
    title: 'Customer Profiles & Inquiries',
    summary: 'Understanding customer aggregation and nameplate quote requests.',
    steps: [
      'The "Customers" directory automatically aggregates contacts who have submitted quote inquiries or placed confirmed orders.',
      'Click "View" on any customer card to open their drawer and inspect their complete engagement history, including requested compressor models and uploaded nameplate photos.',
      'Use the direct phone and email links in the customer drawer to follow up with technical quotes quickly.',
    ],
  },
];

const FAQS = [
  {
    q: 'Why does an empty state appear on orders or dispatches?',
    a: 'The system queries real MongoDB collections. If no orders or dispatches have been entered into the database yet, it legitimately displays an empty state. Once you record an order or quote, metrics update immediately.',
  },
  {
    q: 'How does the system handle image uploads?',
    a: 'Images are uploaded through multipart/form-data to the backend API. If Cloudinary credentials are configured in your environment, files are stored on Cloudinary CDN; otherwise, they fall back to the secure local /uploads server directory with automatic path resolution.',
  },
  {
    q: 'What should I do if I see "Authorizing session..." or get logged out?',
    a: 'Admin JWT tokens are valid for 30 days. If your session expires or the token is invalidated, the system redirects you to /admin/login. Simply log back in with your username and password.',
  },
  {
    q: 'Are destructive operations (like deleting products or categories) reversible?',
    a: 'No. Deleting a product or category permanently removes the database record. For categories with assigned products, the system automatically blocks deletion to prevent orphaned products.',
  },
];

export default function HelpCenterSection() {
  const [expandedGuide, setExpandedGuide] = useState('products');
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <HelpCircle className="text-[#1D6FA3]" size={28} />
          Admin Help & Documentation Desk
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Operational documentation, troubleshooting protocols, and verified technical support channels.
        </p>
      </div>

      {/* Verified Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D6FA3] flex items-center justify-center shrink-0">
            <Phone size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Mumbai Technical Desk
            </span>
            <a
              href="tel:+919920906508"
              className="text-base font-bold text-slate-900 hover:text-[#1D6FA3] transition-colors mt-0.5 block"
            >
              +91 99209 06508
            </a>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Secondary: <a href="tel:+919892158245" className="hover:underline">+91 98921 58245</a>
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Mail size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Official Email Support
            </span>
            <a
              href="mailto:zcooltech4@gmail.com"
              className="text-base font-bold text-slate-900 hover:text-[#1D6FA3] transition-colors mt-0.5 block truncate max-w-[200px]"
            >
              zcooltech4@gmail.com
            </a>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Monitored during business hours
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <MapPin size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Central Sourcing Hub
            </span>
            <span className="text-sm font-bold text-slate-900 mt-0.5 block">
              Mumbai Central, Maharashtra
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block flex items-center gap-1">
              <Clock size={11} /> Mon – Sat: 9:30 AM – 7:30 PM IST
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Usage Guides */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="text-[#1D6FA3]" size={20} />
          <span>Operational Guidance by Module</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GUIDES.map((guide) => {
            const Icon = guide.icon;
            const isExpanded = expandedGuide === guide.id;

            return (
              <div
                key={guide.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 transition-all"
              >
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => setExpandedGuide(isExpanded ? null : guide.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1D6FA3] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{guide.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{guide.summary}</p>
                    </div>
                  </div>
                  <button type="button" className="text-slate-400 p-1">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 animate-in fade-in duration-150">
                    {guide.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-[#1D6FA3] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Troubleshooting FAQs */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
          <FileQuestion className="text-[#1D6FA3]" size={20} />
          <span>Common Troubleshooting & Technical FAQs</span>
        </h2>

        <div className="divide-y divide-slate-100">
          {FAQS.map((faq, idx) => {
            const isOpen = expandedFaq === idx;

            return (
              <div key={idx} className="py-3">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-800 hover:text-[#1D6FA3] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-slate-400 ml-2">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
