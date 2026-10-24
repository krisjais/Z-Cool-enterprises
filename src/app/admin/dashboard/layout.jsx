'use client';

import React, { useEffect, Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Box, 
  ShoppingCart, 
  Truck, 
  LogOut,
  UserCheck,
  Search,
  Bell,
  Menu,
  X,
  Settings,
  HelpCircle,
  Users,
  BarChart2
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const NAV_ITEMS = [
  { id: 'overview', name: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard?tab=overview' },
  { id: 'products', name: 'Products', icon: Box, href: '/admin/dashboard?tab=products' },
  { id: 'categories', name: 'Categories', icon: Box, href: '/admin/dashboard?tab=overview' }, // Route to overview for now
  { id: 'orders', name: 'Orders', icon: ShoppingCart, href: '/admin/dashboard?tab=orders' },
  { id: 'shipments', name: 'Shipments', icon: Truck, href: '/admin/dashboard?tab=shipments' },
  { id: 'customers', name: 'Customers', icon: Users, href: '/admin/dashboard?tab=overview' }, // Dummy route to match design
  { id: 'analytics', name: 'Analytics', icon: BarChart2, href: '/admin/dashboard?tab=overview' }, // Dummy route
  { id: 'settings', name: 'Settings', icon: Settings, href: '/admin/dashboard?tab=overview' }, // Dummy route
];

function SidebarContent({ activeTab, setIsMobileOpen }) {
  const { logout } = useAuth();
  
  return (
    <div className="flex flex-col h-full bg-[#0A192F] text-white">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 gap-3 shrink-0">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMobileOpen?.(false)}>
          <div className="w-8 h-8 rounded-lg bg-white shadow-2xs flex items-center justify-center p-1 shrink-0">
            <img
              src="/logo-icon.png"
              alt="Z Cool Enterprises Logo"
              className="w-full h-full object-contain"
              width={32}
              height={32}
            />
          </div>
          <span className="font-bold text-sm tracking-wide uppercase">
            ZCOOL ADMIN
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1 no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          // Active state logic - fall back to 'overview' if tab is not found or empty
          const isActive = activeTab === item.id || (!activeTab && item.id === 'overview');
          
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsMobileOpen?.(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#1D6FA3] text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-800 space-y-1">
        <button
          type="button"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <HelpCircle size={18} />
          <span>Help Center</span>
        </button>
        <button
          type="button"
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-red-900/40 transition-colors"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

function DashboardLayoutContent({ children }) {
  const { admin, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-20">
        <SidebarContent activeTab={activeTab} />
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out md:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SidebarContent activeTab={activeTab} setIsMobileOpen={setIsMobileOpen} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64 relative">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 shrink-0 sticky top-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
            
            {/* Search Bar - hidden on very small screens */}
            <div className="hidden sm:flex items-center bg-slate-100 px-3 py-1.5 rounded-lg border border-transparent focus-within:border-[#1D6FA3] focus-within:bg-white transition-all w-64">
              <Search size={16} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm ml-2 w-full text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-sm font-bold text-slate-800">{admin.username}</span>
                <span className="text-xs font-medium text-slate-500">Admin</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#1D6FA3] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                {admin.username.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { admin, loading } = useAuth();

  useEffect(() => {
    if (!loading && !admin) {
      router.replace('/admin/login');
    }
  }, [admin, loading, router]);

  return (
    <Suspense fallback={
      <div className="w-full min-h-screen bg-[#0A192F] flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#1D6FA3] text-white flex items-center justify-center font-mono font-bold text-lg shadow-md animate-pulse">
            Z
          </div>
          <p className="font-mono text-xs text-slate-300 uppercase tracking-wider">
            Loading shell...
          </p>
        </div>
      </div>
    }>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </Suspense>
  );
}
