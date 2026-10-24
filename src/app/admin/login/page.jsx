'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Card from '../../../components/ui/Card';

// Zod schema for login inputs validation
const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function AdminLogin() {
  const { admin, login, loading } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Redirect admin if already authenticated
  useEffect(() => {
    if (!loading && admin) {
      router.push('/admin/dashboard');
    }
  }, [admin, loading, router]);

  const onSubmit = async (data) => {
    const result = await login(data.username, data.password);
    if (result.success) {
      toast.success('Successfully Authenticated. Welcome back!');
      router.push('/admin/dashboard');
    } else {
      toast.error(result.message || 'Verification Failed');
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen bg-[#050608] flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg border border-cyan-400/40 animate-pulse">
          <img src="/logo-icon.png" alt="Z Cool Enterprises" className="w-full h-full object-contain" />
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 animate-pulse">
          Validating Security Credentials...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#050608] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full top-1/4 left-1/4 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full bottom-1/4 right-1/4 pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <Card variant="dark" className="p-8 border border-slate-800 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/50 p-2.5 flex items-center justify-center shadow-xl">
              <img src="/logo-icon.png" alt="Z Cool Enterprises Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-lg font-bold tracking-widest text-white uppercase mt-4">
              SECURE PORTAL
            </h1>
            <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-1">
              ZCOOL ENTERPRISES PROCUREMENT DESK
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <Input
              label="Username / Operator ID"
              placeholder="ENTER ADMIN OPERATOR USERNAME"
              error={errors.username}
              disabled={isSubmitting}
              {...register('username')}
            />

            <Input
              type="password"
              label="Security Access Key"
              placeholder="ENTER HASHED ACCESS PASSWORD"
              error={errors.password}
              disabled={isSubmitting}
              {...register('password')}
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full py-4 mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Verifying...' : 'Authorize Login'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
