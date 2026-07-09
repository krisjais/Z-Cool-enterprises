'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Card from '../../../components/ui/Card';
import Counter from '../../../components/ui/Counter';
import { useAuth } from '../../../context/AuthContext';
import {
  Box, Mail, Users, TrendingUp, Edit3, Trash2, Plus, Save,
  CheckCircle2, X, RefreshCw, AlertCircle, FileText, Send
} from 'lucide-react';

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

// ══════════════════════════════════════════════════════════════════
// DEFAULT SEED DATA FOR ADMIN PANEL CRUD
// ══════════════════════════════════════════════════════════════════
const INITIAL_PRODUCTS = [
  { id: 'hvac-pcb-100', code: 'Z-PCB-H100', name: 'Inverter VRF Controller Board', category: 'Electronic Components', price: '₹45,000', status: 'In Stock' },
  { id: 'chiller-w50', code: 'CH-W50', name: 'Industrial Process Water Chiller', category: 'Water Cooling Systems', price: '₹3,50,000', status: '4 Weeks' },
  { id: 'panel-pex15', code: 'PEX-P15', name: 'Cabinet Panel Heat Exchanger', category: 'Panel Cooling Systems', price: '₹85,000', status: 'In Stock' }
];

const INITIAL_BLOGS = [
  { id: 'nema-ratings-guide', title: 'Industrial Enclosure NEMA Classification Guidelines', author: 'Z-Cool Tech Desk', date: 'July 02, 2026' },
  { id: 'cop-efficiency-chillers', title: 'Process Chiller Thermodynamic COP Calculations', author: 'Vikram Mehta', date: 'June 28, 2026' }
];

const INITIAL_INQUIRIES = [
  { id: 'inq-1', name: 'Rakesh Sharma (BlueStar India)', email: 'rakesh@bluestar.in', phone: '9876543210', category: 'PCB Boards', message: 'Requesting schematic DXF files for Z-PCB-H100 compatibilities.', read: false },
  { id: 'inq-2', name: 'Sanjay Dutt (AeroCool)', email: 'sanjay@aerocool.com', phone: '9811223344', category: 'Chillers', message: 'Price quote for 3 units of CH-W50 chiller cabinets.', read: true }
];

function DashboardContent() {
  const { admin } = useAuth();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  // State Management
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [inquiries, setInquiries] = useState(INITIAL_INQUIRIES);

  // Edit / Form states
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [activeProductForm, setActiveProductForm] = useState({ id: '', code: '', name: '', category: '', price: '', status: '' });
  const [isEditingBlog, setIsEditingBlog] = useState(false);
  const [activeBlogForm, setActiveBlogForm] = useState({ id: '', title: '', author: '', date: '' });

  // ── PRODUCT CRUD ──
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (activeProductForm.id) {
      // Edit mode
      setProducts(products.map(p => p.id === activeProductForm.id ? activeProductForm : p));
    } else {
      // Create mode
      const newProduct = { ...activeProductForm, id: `p-${Date.now()}` };
      setProducts([...products, newProduct]);
    }
    setIsEditingProduct(false);
    setActiveProductForm({ id: '', code: '', name: '', category: '', price: '', status: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // ── BLOG CRUD ──
  const handleSaveBlog = (e) => {
    e.preventDefault();
    if (activeBlogForm.id) {
      setBlogs(blogs.map(b => b.id === activeBlogForm.id ? activeBlogForm : b));
    } else {
      const newBlog = { ...activeBlogForm, id: `b-${Date.now()}`, date: new Date().toLocaleDateString() };
      setBlogs([...blogs, newBlog]);
    }
    setIsEditingBlog(false);
    setActiveBlogForm({ id: '', title: '', author: '', date: '' });
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  // ── INQUIRY MANAGEMENT ──
  const toggleReadInquiry = (id) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, read: !inq.read } : inq));
  };

  const handleDeleteInquiry = (id) => {
    setInquiries(inquiries.filter(inq => inq.id !== id));
  };

  return (
    <div className="flex flex-col gap-8 text-slate-100">
      
      {/* ── OVERVIEW TAB ── */}
      {activeTab === 'overview' && (
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold tracking-widest text-white uppercase">
              Welcome back, {admin?.username}
            </h1>
            <p className="text-xs text-[#0EA6A6] font-mono uppercase tracking-widest mt-1">
              SYSTEM CONSOLE • MONITORING POWER AND THERMAL SERVICES LOGS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'ACTIVE CATALOG PRODUCTS', value: products.length, icon: Box, color: 'text-blue-500' },
              { name: 'PENDING CLIENT INQUIRIES', value: inquiries.filter(i => !i.read).length, icon: Mail, color: 'text-cyan-400' },
              { name: 'PUBLISHED BLOG POSTS', value: blogs.length, icon: FileText, color: 'text-emerald-400' },
              { name: 'SYSTEM INTEGRITY RATING', value: 99, icon: TrendingUp, suffix: '%', color: 'text-purple-400' },
            ].map((metric) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.name} className="border-blue-500/10 bg-[#0B1220]/60" enableGlare>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                      {metric.name}
                    </span>
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <Counter
                      end={metric.value}
                      suffix={metric.suffix}
                      className="text-3xl font-mono text-white tracking-wider font-bold"
                    />
                  </div>
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent mt-4" />
                </Card>
              );
            })}
          </div>

          {/* Graphical Mock Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-blue-500/10 bg-[#0B1220]/60 h-80 flex flex-col justify-between">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-white mb-1">
                  Traffic & Inquiry Velocity
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">
                  DAILY CHART MATRIX INDICATING OPERATOR ACTIVITY.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-between gap-2 mt-8">
                {[40, 25, 60, 45, 80, 50, 95, 65, 75, 90, 85, 100].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div 
                      className="w-full bg-blue-600/20 group-hover:bg-cyan-400/50 border border-blue-500/35 rounded-sm transition-all duration-500 origin-bottom" 
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[8px] font-mono text-gray-600 group-hover:text-cyan-400">
                      H{i+1}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-blue-500/10 bg-[#0B1220]/60 h-80 flex flex-col justify-between">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-white mb-1">
                  Active Load Categories
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">
                  DISTRIBUTION OF ENGINES AND COOLING CHASSIS MODULES.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-4 mt-4">
                {[
                  { label: 'Precision HVAC Units', pct: '45%', color: 'bg-blue-500' },
                  { label: 'Chillers & Coolers', pct: '35%', color: 'bg-cyan-400' },
                  { label: 'Panel Exchangers', pct: '20%', color: 'bg-purple-500' }
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      <span>{item.label}</span>
                      <span className="text-white">{item.pct}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: item.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* ── PRODUCTS CRUD TAB ── */}
      {activeTab === 'products' && (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center pb-4 border-b border-white/5">
            <div>
              <h1 className="text-xl font-bold uppercase tracking-widest text-white">Product Inventory</h1>
              <p className="text-[10px] uppercase tracking-widest text-[#0EA6A6] mt-1 font-mono">Create, Edit, or Remove HVAC models.</p>
            </div>
            {!isEditingProduct && (
              <button
                onClick={() => {
                  setIsEditingProduct(true);
                  setActiveProductForm({ id: '', code: '', name: '', category: 'Electronic Components', price: '', status: 'In Stock' });
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-xs uppercase font-bold tracking-wider rounded-lg text-white"
              >
                <Plus size={14} /> Add Product
              </button>
            )}
          </div>

          {isEditingProduct ? (
            <Card className="border-blue-500/10 bg-[#0B1220]/60 p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6">{activeProductForm.id ? 'Edit Product details' : 'Add New Product'}</h3>
              <form onSubmit={handleSaveProduct} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Product Code (e.g. Z-PCB-H100)"
                    value={activeProductForm.code}
                    onChange={(e) => setActiveProductForm({ ...activeProductForm, code: e.target.value })}
                    className="p-3 bg-[#050608] border border-white/10 rounded-xl text-xs outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={activeProductForm.name}
                    onChange={(e) => setActiveProductForm({ ...activeProductForm, name: e.target.value })}
                    className="p-3 bg-[#050608] border border-white/10 rounded-xl text-xs outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    value={activeProductForm.category}
                    onChange={(e) => setActiveProductForm({ ...activeProductForm, category: e.target.value })}
                    className="p-3 bg-[#050608] border border-white/10 rounded-xl text-xs outline-none text-gray-300"
                  >
                    <option value="Electronic Components">Electronic Components</option>
                    <option value="Water Cooling Systems">Water Cooling Systems</option>
                    <option value="Panel Cooling Systems">Panel Cooling Systems</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Estimated Price"
                    value={activeProductForm.price}
                    onChange={(e) => setActiveProductForm({ ...activeProductForm, price: e.target.value })}
                    className="p-3 bg-[#050608] border border-white/10 rounded-xl text-xs outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Status / Availability"
                    value={activeProductForm.status}
                    onChange={(e) => setActiveProductForm({ ...activeProductForm, status: e.target.value })}
                    className="p-3 bg-[#050608] border border-white/10 rounded-xl text-xs outline-none"
                    required
                  />
                </div>
                <div className="flex gap-3 justify-end mt-4">
                  <button type="button" onClick={() => setIsEditingProduct(false)} className="px-4 py-2 border border-white/10 rounded-lg text-xs uppercase">Cancel</button>
                  <button type="submit" className="px-5 py-2 bg-blue-600 rounded-lg text-xs uppercase font-bold flex items-center gap-1.5 text-white"><Save size={14} /> Save Product</button>
                </div>
              </form>
            </Card>
          ) : (
            <div className="bg-[#0B1220]/30 border border-white/5 rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/5 bg-[#0B1220]/50 font-mono text-gray-400">
                    <th className="p-4 uppercase tracking-wider font-bold">Code</th>
                    <th className="p-4 uppercase tracking-wider font-bold">Name</th>
                    <th className="p-4 uppercase tracking-wider font-bold">Category</th>
                    <th className="p-4 uppercase tracking-wider font-bold">Price</th>
                    <th className="p-4 uppercase tracking-wider font-bold">Status</th>
                    <th className="p-4 uppercase tracking-wider font-bold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4 font-mono font-bold text-cyan-400">{p.code}</td>
                      <td className="p-4 font-bold">{p.name}</td>
                      <td className="p-4 text-gray-400">{p.category}</td>
                      <td className="p-4 font-mono">{p.price}</td>
                      <td className="p-4 text-emerald-500 font-bold">{p.status}</td>
                      <td className="p-4 flex gap-3 justify-center">
                        <button
                          onClick={() => {
                            setActiveProductForm(p);
                            setIsEditingProduct(true);
                          }}
                          className="p-2 hover:bg-blue-900/30 rounded-lg text-blue-400"
                        >
                          <Edit3 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-2 hover:bg-red-950/30 rounded-lg text-red-400"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── BLOG EDITOR TAB ── */}
      {activeTab === 'blogs' && (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center pb-4 border-b border-white/5">
            <div>
              <h1 className="text-xl font-bold uppercase tracking-widest text-white">Technical logs Editor</h1>
              <p className="text-[10px] uppercase tracking-widest text-[#0EA6A6] mt-1 font-mono">Create or manage documentation posts.</p>
            </div>
            {!isEditingBlog && (
              <button
                onClick={() => {
                  setIsEditingBlog(true);
                  setActiveBlogForm({ id: '', title: '', author: admin?.username || 'Operator', date: '' });
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-xs uppercase font-bold tracking-wider rounded-lg text-white"
              >
                <Plus size={14} /> Write Post
              </button>
            )}
          </div>

          {isEditingBlog ? (
            <Card className="border-blue-500/10 bg-[#0B1220]/60 p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6">{activeBlogForm.id ? 'Edit Log details' : 'Write New Journal Entry'}</h3>
              <form onSubmit={handleSaveBlog} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Article Title"
                  value={activeBlogForm.title}
                  onChange={(e) => setActiveBlogForm({ ...activeBlogForm, title: e.target.value })}
                  className="p-3 bg-[#050608] border border-white/10 rounded-xl text-xs outline-none w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Author Profile"
                  value={activeBlogForm.author}
                  onChange={(e) => setActiveBlogForm({ ...activeBlogForm, author: e.target.value })}
                  className="p-3 bg-[#050608] border border-white/10 rounded-xl text-xs outline-none w-full"
                  required
                />
                <div className="flex gap-3 justify-end mt-4">
                  <button type="button" onClick={() => setIsEditingBlog(false)} className="px-4 py-2 border border-white/10 rounded-lg text-xs uppercase">Cancel</button>
                  <button type="submit" className="px-5 py-2 bg-blue-600 rounded-lg text-xs uppercase font-bold flex items-center gap-1.5 text-white"><Save size={14} /> Publish Log</button>
                </div>
              </form>
            </Card>
          ) : (
            <div className="bg-[#0B1220]/30 border border-white/5 rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/5 bg-[#0B1220]/50 font-mono text-gray-400">
                    <th className="p-4 uppercase tracking-wider font-bold">Article Title</th>
                    <th className="p-4 uppercase tracking-wider font-bold">Author</th>
                    <th className="p-4 uppercase tracking-wider font-bold">Publish Date</th>
                    <th className="p-4 uppercase tracking-wider font-bold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map(b => (
                    <tr key={b.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4 font-bold text-white">{b.title}</td>
                      <td className="p-4 text-cyan-400 font-mono">{b.author}</td>
                      <td className="p-4 text-gray-400">{b.date}</td>
                      <td className="p-4 flex gap-3 justify-center">
                        <button
                          onClick={() => {
                            setActiveBlogForm(b);
                            setIsEditingBlog(true);
                          }}
                          className="p-2 hover:bg-blue-900/30 rounded-lg text-blue-400"
                        >
                          <Edit3 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(b.id)}
                          className="p-2 hover:bg-red-950/30 rounded-lg text-red-400"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── INQUIRIES TAB ── */}
      {activeTab === 'inquiries' && (
        <div className="flex flex-col gap-6">
          <div className="pb-4 border-b border-white/5">
            <h1 className="text-xl font-bold uppercase tracking-widest text-white">Client Inquiry Inbox</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#0EA6A6] mt-1 font-mono">Monitor real-time incoming system quotes.</p>
          </div>

          <div className="flex flex-col gap-4">
            {inquiries.map(inq => (
              <div
                key={inq.id}
                className="p-6 rounded-2xl border bg-[#0B1220]/20 flex flex-col gap-4 relative overflow-hidden"
                style={{
                  borderColor: inq.read ? 'rgba(255,255,255,0.05)' : 'rgba(0,240,255,0.15)',
                  boxShadow: inq.read ? 'none' : '0 0 15px rgba(0,240,255,0.02)'
                }}
              >
                {!inq.read && (
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-cyan-400" />
                )}

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm">{inq.name}</h4>
                    <div className="flex gap-4 text-[10px] font-mono text-gray-500 mt-1">
                      <span>EMAIL: {inq.email}</span>
                      <span>PHONE: {inq.phone}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] bg-blue-950 text-cyan-400 border border-blue-500/30 px-2 py-0.5 rounded uppercase">
                    {inq.category}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-light mt-1 p-3 bg-black/20 rounded-xl">
                  {inq.message}
                </p>

                <div className="flex justify-end gap-3 items-center border-t border-white/5 pt-4 mt-2">
                  <button
                    onClick={() => toggleReadInquiry(inq.id)}
                    className="flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-gray-400 hover:text-cyan-400"
                  >
                    <CheckCircle2 size={12} className={inq.read ? 'text-[#0EA6A6]' : 'text-gray-500'} /> {inq.read ? 'Mark Unread' : 'Mark Reviewed'}
                  </button>
                  <span className="text-gray-700">|</span>
                  <button
                    onClick={() => handleDeleteInquiry(inq.id)}
                    className="flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={12} /> Remove Log
                  </button>
                </div>
              </div>
            ))}

            {inquiries.length === 0 && (
              <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/5 text-gray-500 text-xs">
                Inbox empty. No inquiries registered.
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default function DashboardOverview() {
  return (
    <Suspense fallback={
      <div className="w-full h-80 flex items-center justify-center">
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 animate-pulse flex items-center gap-2">
          <RefreshCw size={14} className="animate-spin" /> Fetching console state...
        </div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
