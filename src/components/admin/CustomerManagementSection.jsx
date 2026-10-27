'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Users,
  Search,
  Phone,
  Mail,
  Building,
  MapPin,
  Calendar,
  ShoppingCart,
  MessageSquare,
  Clock,
  Eye,
  RefreshCw,
  X,
  FileText,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { adminGetCustomers, resolveImageUrl } from '@/lib/api';

export default function CustomerManagementSection({ token, notify }) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, orders, inquiries
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [activeDetailTab, setActiveDetailTab] = useState('overview'); // overview, orders, inquiries

  // Fetch real customer data from backend
  const loadCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminGetCustomers(token);
      if (res.success && Array.isArray(res.data)) {
        setCustomers(res.data);
      } else {
        setCustomers([]);
      }
    } catch (err) {
      notify('Failed to load customers: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, [token, notify]);

  useEffect(() => {
    loadCustomers();
  }, [loadCustomers]);

  // Filtered customer list
  const filteredCustomers = useMemo(() => {
    return customers.filter((cust) => {
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cust.name?.toLowerCase().includes(q) ||
        cust.phone?.toLowerCase().includes(q) ||
        cust.email?.toLowerCase().includes(q) ||
        cust.company?.toLowerCase().includes(q) ||
        cust.city?.toLowerCase().includes(q);

      const matchesType =
        filterType === 'all' ||
        (filterType === 'orders' && (cust.ordersCount || 0) > 0) ||
        (filterType === 'inquiries' && (cust.inquiriesCount || 0) > 0);

      return matchesSearch && matchesType;
    });
  }, [customers, searchTerm, filterType]);

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return '—';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Users className="text-[#1D6FA3]" size={28} />
            Customer Directory
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Real customer records aggregated from authenticated orders and quote enquiries.
          </p>
        </div>

        <button
          type="button"
          onClick={loadCustomers}
          disabled={loading}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-xs transition-all h-10 self-start sm:self-auto"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D6FA3] flex items-center justify-center shrink-0">
            <Users size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Unique Customers
            </span>
            <span className="text-2xl font-bold text-slate-900 mt-0.5 block">
              {loading ? '...' : customers.length}
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShoppingCart size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Ordering Clients
            </span>
            <span className="text-2xl font-bold text-slate-900 mt-0.5 block">
              {loading ? '...' : customers.filter((c) => (c.ordersCount || 0) > 0).length}
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <MessageSquare size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Inquiry Contacts
            </span>
            <span className="text-2xl font-bold text-slate-900 mt-0.5 block">
              {loading ? '...' : customers.filter((c) => (c.inquiriesCount || 0) > 0).length}
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, phone, email, company..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-800 placeholder:text-slate-400 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-medium text-slate-500 hidden sm:inline">Filter:</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] text-slate-700 font-medium"
          >
            <option value="all">All Contacts ({customers.length})</option>
            <option value="orders">Clients with Orders</option>
            <option value="inquiries">Contacts with Inquiries</option>
          </select>
        </div>
      </div>

      {/* Customer List Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-100 text-xs uppercase font-semibold text-slate-500 tracking-wider">
              <tr>
                <th className="px-6 py-4">Customer Name & Company</th>
                <th className="px-6 py-4">Contact Phone</th>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4 text-center">Orders</th>
                <th className="px-6 py-4 text-center">Inquiries</th>
                <th className="px-6 py-4">Last Activity</th>
                <th className="px-6 py-4 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-400">
                    <RefreshCw size={24} className="animate-spin mx-auto mb-2 text-[#1D6FA3]" />
                    <p className="text-xs">Loading customer directory...</p>
                  </td>
                </tr>
              ) : filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                      <Users size={36} className="text-slate-300 mb-2" />
                      <p className="text-base font-semibold text-slate-800">No customer records found</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {searchTerm
                          ? `No customers match query "${searchTerm}".`
                          : 'No client inquiries or orders have been registered in the database yet.'}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((cust, idx) => (
                  <tr key={cust.id || idx} className="hover:bg-slate-50/75 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{cust.name}</div>
                      {cust.company ? (
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <Building size={12} className="text-slate-400" />
                          <span>{cust.company}</span>
                        </div>
                      ) : cust.city ? (
                        <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin size={12} />
                          <span>{cust.city}</span>
                        </div>
                      ) : null}
                    </td>

                    <td className="px-6 py-4 font-mono text-xs">
                      {cust.phone ? (
                        <a
                          href={`tel:${cust.phone}`}
                          className="text-[#1D6FA3] hover:underline flex items-center gap-1"
                        >
                          <Phone size={12} />
                          <span>{cust.phone}</span>
                        </a>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-xs">
                      {cust.email ? (
                        <a
                          href={`mailto:${cust.email}`}
                          className="text-slate-600 hover:text-[#1D6FA3] flex items-center gap-1 truncate max-w-[180px]"
                        >
                          <Mail size={12} className="shrink-0 text-slate-400" />
                          <span className="truncate">{cust.email}</span>
                        </a>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                          (cust.ordersCount || 0) > 0
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {cust.ordersCount || 0}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                          (cust.inquiriesCount || 0) > 0
                            ? 'bg-blue-50 text-[#1D6FA3]'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {cust.inquiriesCount || 0}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">
                      {formatDate(cust.lastActivity)}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCustomer(cust);
                          setActiveDetailTab('overview');
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1D6FA3] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                      >
                        <Eye size={13} />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Details Drawer / Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-150">
            {/* Drawer Header */}
            <div className="flex items-start justify-between px-6 py-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1D6FA3] text-white flex items-center justify-center text-lg font-bold shadow-xs">
                  {selectedCustomer.name?.charAt(0)?.toUpperCase() || 'C'}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{selectedCustomer.name}</h2>
                  {selectedCustomer.company && (
                    <p className="text-xs font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                      <Building size={12} />
                      <span>{selectedCustomer.company}</span>
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCustomer(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Tabs in Drawer */}
            <div className="flex items-center border-b border-slate-100 px-6 gap-6 bg-slate-50 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveDetailTab('overview')}
                className={`py-3 border-b-2 transition-colors ${
                  activeDetailTab === 'overview'
                    ? 'border-[#1D6FA3] text-[#1D6FA3]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Profile & Contact
              </button>
              <button
                type="button"
                onClick={() => setActiveDetailTab('orders')}
                className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeDetailTab === 'orders'
                    ? 'border-[#1D6FA3] text-[#1D6FA3]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>Orders History</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">
                  {selectedCustomer.orders?.length || 0}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDetailTab('inquiries')}
                className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeDetailTab === 'inquiries'
                    ? 'border-[#1D6FA3] text-[#1D6FA3]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>Inquiries & Quotes</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">
                  {selectedCustomer.inquiries?.length || 0}
                </span>
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {activeDetailTab === 'overview' && (
                <div className="space-y-5">
                  {/* Verified Contact Details Card */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Verified Contact Information
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                          <Phone size={15} />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">Phone</span>
                          {selectedCustomer.phone ? (
                            <a
                              href={`tel:${selectedCustomer.phone}`}
                              className="font-semibold text-[#1D6FA3] hover:underline"
                            >
                              {selectedCustomer.phone}
                            </a>
                          ) : (
                            <span className="text-slate-400 text-xs">Not provided</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                          <Mail size={15} />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">Email</span>
                          {selectedCustomer.email ? (
                            <a
                              href={`mailto:${selectedCustomer.email}`}
                              className="font-semibold text-[#1D6FA3] hover:underline truncate block max-w-[200px]"
                            >
                              {selectedCustomer.email}
                            </a>
                          ) : (
                            <span className="text-slate-400 text-xs">Not provided</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                          <Building size={15} />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">Company / Firm</span>
                          <span className="font-semibold text-slate-800">
                            {selectedCustomer.company || 'Direct / Individual Client'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                          <MapPin size={15} />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">Location</span>
                          <span className="font-semibold text-slate-800">
                            {selectedCustomer.city || 'India'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity Timeline */}
                  <div className="border border-slate-100 rounded-xl p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Engagement Timeline
                    </h4>
                    <div className="space-y-3 text-xs text-slate-600">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Calendar size={14} /> First Registered
                        </span>
                        <span className="font-semibold text-slate-800">
                          {formatDate(selectedCustomer.firstSeen)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Clock size={14} /> Last Engagement
                        </span>
                        <span className="font-semibold text-slate-800">
                          {formatDate(selectedCustomer.lastActivity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDetailTab === 'orders' && (
                <div className="space-y-3">
                  {!selectedCustomer.orders || selectedCustomer.orders.length === 0 ? (
                    <div className="text-center py-8 text-slate-400">
                      <ShoppingCart size={32} className="mx-auto mb-2 text-slate-300" />
                      <p className="text-sm font-semibold text-slate-700">No orders placed yet</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        This contact has submitted inquiries but has not completed an order.
                      </p>
                    </div>
                  ) : (
                    selectedCustomer.orders.map((ord, idx) => (
                      <div
                        key={ord.id || idx}
                        className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#1D6FA3]">
                              {ord.id}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-200 text-slate-700">
                              {ord.orderType || 'OFFLINE'}
                            </span>
                          </div>
                          <p className="text-sm font-bold text-slate-900 mt-1">{ord.productName}</p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Quantity: <span className="font-semibold">{ord.quantity} Unit(s)</span> • Date:{' '}
                            {formatDate(ord.createdAt)}
                          </p>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                              ord.status === 'COMPLETED'
                                ? 'bg-emerald-50 text-emerald-700'
                                : ord.status === 'CANCELLED'
                                ? 'bg-red-50 text-red-700'
                                : 'bg-blue-50 text-[#1D6FA3]'
                            }`}
                          >
                            {ord.status || 'CONFIRMED'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeDetailTab === 'inquiries' && (
                <div className="space-y-3">
                  {!selectedCustomer.inquiries || selectedCustomer.inquiries.length === 0 ? (
                    <div className="text-center py-8 text-slate-400">
                      <MessageSquare size={32} className="mx-auto mb-2 text-slate-300" />
                      <p className="text-sm font-semibold text-slate-700">No inquiries recorded</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        This customer was created directly from an order record.
                      </p>
                    </div>
                  ) : (
                    selectedCustomer.inquiries.map((inq, idx) => (
                      <div
                        key={inq.id || idx}
                        className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1D6FA3]">
                            {inq.type} Request
                          </span>
                          <span className="text-xs text-slate-500">{formatDate(inq.createdAt)}</span>
                        </div>

                        {(inq.model || inq.brand) && (
                          <div className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-100">
                            <span className="font-bold text-slate-900">Requested Compressor: </span>
                            {inq.brand && <span>{inq.brand} </span>}
                            {inq.model && <span className="font-mono">{inq.model}</span>}
                            {inq.quantity && <span> ({inq.quantity})</span>}
                          </div>
                        )}

                        {inq.message && (
                          <p className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-100 italic">
                            "{inq.message}"
                          </p>
                        )}

                        {inq.nameplatePhoto && (
                          <div className="pt-1">
                            <a
                              href={resolveImageUrl(inq.nameplatePhoto)}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D6FA3] hover:underline"
                            >
                              <ExternalLink size={12} />
                              <span>View Attached Nameplate Photo</span>
                            </a>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[11px] text-slate-400">Status:</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              inq.status === 'resolved'
                                ? 'bg-emerald-50 text-emerald-700'
                                : inq.status === 'in-progress'
                                ? 'bg-amber-50 text-amber-700'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {inq.status || 'pending'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                ID: {selectedCustomer.id}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCustomer(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
