'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Box, 
  FolderTree, 
  Tag, 
  Image, 
  FileText, 
  Briefcase, 
  FileCheck, 
  Mail, 
  Users, 
  History, 
  LogOut,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import Button from '../../../components/ui/Button';

export default function DashboardLayout({ children }) {
  const { admin, loading, logout } = useAuth();
  const router = useRouter();

  // Enforce JWT Authentication shield
  useEffect(() => {
    if (!loading && !admin) {
      router.push('/admin/login');
    }
  }, [admin, loading, router]);

  if (loading || !admin) {
    return (
      <div className="w-full h-screen bg-[#050608] flex items-center justify-center">
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 animate-pulse">
          Authorizing Operator Session...
        </div>
      </div>
    );
  }

  const sidebarLinks = [
    { name: 'Overview', path: '/admin/dashboard?tab=overview', icon: LayoutDashboard },
    { name: 'Products', path: '/admin/dashboard?tab=products', icon: Box },
    { name: 'Blog Editor', path: '/admin/dashboard?tab=blogs', icon: FileText },
    { name: 'Inquiries', path: '/admin/dashboard?tab=inquiries', icon: Mail },
  ];

  return (
    <div className="w-full min-h-screen bg-[#050608] text-white flex">
      {/* Sidebar Panel */}
      <aside className="w-64 bg-[#0B1220] border-r border-white/5 flex flex-col justify-between p-6">
        <div className="flex flex-col gap-8">
          {/* Logo link */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_6px_#00F0FF]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 15,15 H 85 L 65,35 H 15 Z M 15,85 H 85 L 65,65 H 15 Z" fill="#005BFF" />
              <path d="M 65,35 L 35,65" stroke="#00F0FF" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <span className="font-bold tracking-widest text-xs uppercase text-white">
              Z COOL TECH
            </span>
          </Link>

          {/* Sidebar Menu Links */}
          <nav className="flex flex-col gap-1.5">
            <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase px-2 mb-2">
              OPERATIONAL CONTROLS
            </span>
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-400 hover:text-cyan-400 hover:bg-white/5 px-3 py-3 rounded-sm transition-all"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Admin Footer block */}
        <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
          <div className="flex items-center gap-2.5 px-2">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-white truncate max-w-[120px]">
                {admin.username}
              </span>
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                SYSTEM OPERATOR
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full py-2.5 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/20 border-red-950/30"
            onClick={logout}
          >
            <LogOut className="w-3.5 h-3.5 mr-2" /> End Session
          </Button>
        </div>
      </aside>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Panel */}
        <header className="h-16 bg-[#0B1220]/40 border-b border-white/5 px-8 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono bg-blue-950/40 text-cyan-400 border border-blue-500/25 px-2.5 py-1 rounded-sm uppercase tracking-wider">
              NODE_ENV: PRODUCTION_READY
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
            <span>OPERATOR LOGGED:</span>
            <span className="text-white font-bold">{admin.email}</span>
          </div>
        </header>

        {/* Content Container */}
        <main className="flex-1 p-8 overflow-y-auto bg-[#050608]">
          {children}
        </main>
      </div>
    </div>
  );
}
