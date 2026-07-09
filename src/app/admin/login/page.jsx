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
      <div className="w-full h-screen bg-[#050608] flex items-center justify-center">
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
        <Card className="p-8 border border-blue-500/20" enableGlare>
          <div className="flex flex-col items-center gap-2 mb-8">
            <svg className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_12px_#00F0FF]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 15,15 H 85 L 65,35 H 15 Z M 15,85 H 85 L 65,65 H 15 Z" fill="#005BFF" />
              <path d="M 65,35 L 35,65" stroke="#00F0FF" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <h1 className="text-lg font-bold tracking-widest text-white uppercase mt-4">
              SECURE PORTAL
            </h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Z COOL TECH ADMINISTRATIVE GATEWAY
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
