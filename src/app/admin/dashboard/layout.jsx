'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Box, 
  ShoppingCart, 
  Truck, 
  LogOut,
  UserCheck
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function DashboardLayout({ children }) {
  const { admin, loading, logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  // Strict JWT Authentication protection
  useEffect(() => {
    if (!loading && !admin) {
      router.replace('/admin/login');
    }
  }, [admin, loading, router]);

  if (loading || !admin) {
    return (
      <div className="w-full min-h-screen bg-[#0A192F] flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#1D6FA3] text-white flex items-center justify-center font-mono font-bold text-lg shadow-md animate-pulse">
            Z
          </div>
          <p className="font-mono text-xs text-slate-300 uppercase tracking-wider">
            Authorizing session...
          </p>
        </div>
      </div>
    );
  }

  const navTabs = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard, href: '/admin/dashboard?tab=overview' },
    { id: 'products', name: 'Products', icon: Box, href: '/admin/dashboard?tab=products' },
    { id: 'orders', name: 'Orders', icon: ShoppingCart, href: '/admin/dashboard?tab=orders' },
    { id: 'shipments', name: 'Shipments', icon: Truck, href: '/admin/dashboard?tab=shipments' },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-100 text-slate-900 flex flex-col antialiased">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-[#0A192F] text-white border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
            {/* Logo / Title */}
            <div className="flex items-center gap-2.5 min-w-0">
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#1D6FA3] text-white flex items-center justify-center font-mono font-bold text-xs sm:text-sm">
                  Z
                </div>
                <span className="font-bold text-xs sm:text-sm tracking-wide text-white uppercase hidden min-[360px]:inline">
                  ZCOOL ADMIN
                </span>
              </Link>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-[11px] font-mono text-[#0EA6A6] uppercase tracking-wider truncate hidden md:inline">
                Management Portal
              </span>
            </div>

            {/* Operator and Logout */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300">
                <UserCheck size={14} className="text-[#0EA6A6]" />
                <span className="font-medium text-white">{admin.username}</span>
              </div>
              <button
                type="button"
                onClick={logout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-red-900/60 transition-colors border border-slate-700 min-h-[36px]"
              >
                <LogOut size={13} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Desktop Segmented Navigation Bar */}
        <div className="bg-[#0D213F] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2 no-scrollbar" aria-label="Tabs">
              {navTabs.map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-colors min-h-[40px] ${
                      isSelected
                        ? 'bg-[#1D6FA3] text-white shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{tab.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
