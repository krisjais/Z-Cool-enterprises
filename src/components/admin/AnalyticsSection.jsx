'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  BarChart2,
  TrendingUp,
  Box,
  ShoppingCart,
  Truck,
  MessageSquare,
  RefreshCw,
  Calendar,
  Layers,
  CheckCircle,
  AlertCircle,
  Clock,
  Info
} from 'lucide-react';
import { adminGetAnalytics } from '@/lib/api';

export default function AnalyticsSection({ token, notify }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('all'); // all, 30days, 90days

  const fetchAnalytics = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminGetAnalytics(token);
      if (res.success && res.data) {
        setData(res.data);
      } else {
        setData(null);
      }
    } catch (err) {
      notify('Failed to load analytics: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, [token, notify]);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  const overview = data?.overview || {};
  const ordersData = data?.orders || {};
  const productsData = data?.products || {};
  const categoriesData = data?.categories || {};
  const inquiriesData = data?.inquiries || {};
  const shipmentsData = data?.shipments || {};
  const revenueData = data?.revenue || {};

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <BarChart2 className="text-[#1D6FA3]" size={28} />
            Business & Catalogue Analytics
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Aggregated operational insights derived directly from your live database.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] text-slate-700 font-medium shadow-xs"
          >
            <option value="all">All-Time Cumulative</option>
            <option value="90days">Last 90 Days</option>
            <option value="30days">Last 30 Days</option>
          </select>

          <button
            type="button"
            onClick={fetchAnalytics}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-xs transition-all h-10"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D6FA3] flex items-center justify-center shrink-0">
            <ShoppingCart size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Total Orders
            </span>
            <span className="text-2xl font-bold text-slate-900 mt-0.5 block">
              {loading ? '...' : overview.totalOrders ?? 0}
            </span>
            <span className="text-[11px] text-slate-400">
              {overview.totalUnitsOrdered ?? 0} units moved
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Box size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Catalogue Items
            </span>
            <span className="text-2xl font-bold text-slate-900 mt-0.5 block">
              {loading ? '...' : overview.totalProducts ?? 0}
            </span>
            <span className="text-[11px] text-slate-400">
              across {overview.totalCategories ?? 0} categories
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Truck size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Active Dispatches
            </span>
            <span className="text-2xl font-bold text-slate-900 mt-0.5 block">
              {loading ? '...' : overview.activeShipments ?? 0}
            </span>
            <span className="text-[11px] text-slate-400">
              {overview.totalShipments ?? 0} total shipments
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <MessageSquare size={22} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Total Inquiries
            </span>
            <span className="text-2xl font-bold text-slate-900 mt-0.5 block">
              {loading ? '...' : overview.totalInquiries ?? 0}
            </span>
            <span className="text-[11px] text-amber-600 font-semibold">
              {overview.pendingInquiries ?? 0} pending review
            </span>
          </div>
        </div>
      </div>

      {/* Revenue & Transaction Note */}
      <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-900">
        <Info size={18} className="text-[#1D6FA3] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-sm block mb-0.5">Commercial Transaction Transparency</span>
          <p className="text-blue-800/90 leading-relaxed">
            {revenueData.note ||
              'In accordance with B2B technical compressor sourcing protocols, direct currency checkouts are not processed online. Orders reflect verified freight requisitions with volume measured in physical units.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Status Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">Order Fulfillment Status</h3>
            <span className="text-xs text-slate-400">Total: {ordersData.total ?? 0}</span>
          </div>

          {!ordersData.byStatus || Object.keys(ordersData.byStatus).length === 0 || ordersData.total === 0 ? (
            <div className="text-center py-8 text-slate-400">
              <ShoppingCart size={28} className="mx-auto mb-2 text-slate-300" />
              <p className="text-xs font-semibold text-slate-700">No order status data available</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Orders created via Orders tab will display here.</p>
            </div>
          ) : (
            <div className="space-y-3 pt-2">
              {Object.entries(ordersData.byStatus).map(([status, count]) => {
                const total = ordersData.total || 1;
                const percentage = Math.round((count / total) * 100);

                const colorClass =
                  status === 'COMPLETED'
                    ? 'bg-emerald-500'
                    : status === 'CONFIRMED'
                    ? 'bg-[#1D6FA3]'
                    : status === 'PROCESSING'
                    ? 'bg-blue-400'
                    : status === 'CANCELLED'
                    ? 'bg-red-400'
                    : 'bg-amber-400';

                return (
                  <div key={status} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700 uppercase tracking-wider">
                        {status}
                      </span>
                      <span className="text-slate-500 font-medium">
                        {count} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colorClass} rounded-full transition-all duration-300`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Orders by Type: Online vs Offline */}
          {ordersData.total > 0 && ordersData.byType && (
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
              <div className="bg-slate-50 p-2.5 rounded-xl">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block">Online Web Orders</span>
                <span className="text-base font-bold text-slate-900">{ordersData.byType.ONLINE || 0}</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block">Offline B2B Orders</span>
                <span className="text-base font-bold text-slate-900">{ordersData.byType.OFFLINE || 0}</span>
              </div>
            </div>
          )}
        </div>

        {/* Product Inventory Availability */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">Inventory Availability Status</h3>
            <span className="text-xs text-slate-400">Total: {productsData.total ?? 0}</span>
          </div>

          <div className="space-y-3 pt-2">
            {productsData.byAvailability &&
              Object.entries(productsData.byAvailability).map(([status, count]) => {
                const total = productsData.total || 1;
                const percentage = Math.round((count / total) * 100);

                const colorClass =
                  status === 'IN STOCK'
                    ? 'bg-emerald-500'
                    : status === 'REFURBISHMENT IN PROGRESS'
                    ? 'bg-amber-400'
                    : status === 'MADE TO ORDER'
                    ? 'bg-[#1D6FA3]'
                    : 'bg-slate-400';

                return (
                  <div key={status} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">{status}</span>
                      <span className="text-slate-500 font-medium">
                        {count} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colorClass} rounded-full transition-all duration-300`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Active vs Inactive Categories */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span>Category Health:</span>
            <div className="flex items-center gap-3">
              <span className="text-emerald-600 font-bold">
                {categoriesData.active ?? 0} Active
              </span>
              <span>•</span>
              <span className="text-slate-400 font-medium">
                {categoriesData.inactive ?? 0} Inactive
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Product Demands / Best Sellers */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base">Top Requested / Ordered Compressors</h3>
              <span className="text-xs text-slate-400">By Unit Volume</span>
            </div>

            {!ordersData.topSelling || ordersData.topSelling.length === 0 ? (
              <div className="text-center py-10 text-slate-400">
                <Box size={32} className="mx-auto mb-2 text-slate-300" />
                <p className="text-xs font-semibold text-slate-700">No order volume data yet</p>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto mt-0.5">
                  Top ordered products will automatically aggregate once orders are booked in the system.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {ordersData.topSelling.map((prod, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white text-[#1D6FA3] text-xs font-bold flex items-center justify-center border border-slate-200">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-semibold text-slate-800 line-clamp-1 max-w-[240px]">
                        {prod.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {prod.units} Unit(s)
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 text-center">
            Calculated strictly from completed and confirmed dispatch records.
          </div>
        </div>

        {/* Customer Inquiries Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base">Inquiry Pipeline</h3>
              <span className="text-xs text-slate-400">Total: {inquiriesData.total ?? 0}</span>
            </div>

            {inquiriesData.total === 0 ? (
              <div className="text-center py-10 text-slate-400">
                <MessageSquare size={32} className="mx-auto mb-2 text-slate-300" />
                <p className="text-xs font-semibold text-slate-700">No customer inquiries registered</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Web inquiries and quote requests will automatically populate here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                    <span className="text-[11px] font-semibold text-amber-700 uppercase block">Pending</span>
                    <span className="text-xl font-bold text-amber-900 mt-0.5 block">
                      {inquiriesData.byStatus?.pending || 0}
                    </span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <span className="text-[11px] font-semibold text-[#1D6FA3] uppercase block">In-Progress</span>
                    <span className="text-xl font-bold text-blue-900 mt-0.5 block">
                      {inquiriesData.byStatus?.['in-progress'] || 0}
                    </span>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <span className="text-[11px] font-semibold text-emerald-700 uppercase block">Resolved</span>
                    <span className="text-xl font-bold text-emerald-900 mt-0.5 block">
                      {inquiriesData.byStatus?.resolved || 0}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-600 block">Inquiries By Intent Type:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    {inquiriesData.byType &&
                      Object.entries(inquiriesData.byType).map(([type, count]) => (
                        <div key={type} className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                          <span className="capitalize text-slate-500 text-[11px] block">{type}</span>
                          <span className="font-bold text-slate-800">{count}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 text-center">
            Monitored in real-time from the technical sourcing desk inbox.
          </div>
        </div>
      </div>
    </div>
  );
}
