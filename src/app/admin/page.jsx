'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AdminRootPage() {
  const { admin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (admin) {
        router.replace('/admin/dashboard');
      } else {
        router.replace('/admin/login');
      }
    }
  }, [admin, loading, router]);

  return (
    <div className="w-full min-h-screen bg-[#0A192F] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#1D6FA3] text-white flex items-center justify-center font-mono font-bold text-lg shadow-md animate-pulse">
          Z
        </div>
        <p className="font-mono text-xs text-slate-300 uppercase tracking-wider">
          Verifying security session...
        </p>
      </div>
    </div>
  );
}
