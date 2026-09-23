'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/AuthContext';

export default function RootProvider({ children }) {
  return (
    <AuthProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#0A192F',
            color: '#FFFFFF',
            borderRadius: '8px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
          },
        }}
      />
      {children}
    </AuthProvider>
  );
}
