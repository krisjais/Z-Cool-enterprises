import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  env: {
    NEXT_PUBLIC_CATALOGUE_REVIEW_MODE: process.env.NEXT_PUBLIC_CATALOGUE_REVIEW_MODE || 'danfoss-sm110s4ea,highly-ate690uc3q9jk,tecumseh-aw5532f',
  },
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(self), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async rewrites() {
    const rawApi = (process.env.NEXT_PUBLIC_API_URL || '').trim();
    const isDev = process.env.NODE_ENV === 'development';

    if (rawApi && !rawApi.includes('localhost') && !rawApi.includes('127.0.0.1')) {
      return [
        {
          source: '/uploads/:path*',
          destination: `${rawApi.replace(/\/+$/, '')}/uploads/:path*`,
        },
      ];
    }

    if (isDev) {
      return [
        {
          source: '/uploads/:path*',
          destination: 'http://localhost:5000/uploads/:path*',
        },
      ];
    }

    return [];
  },
};

export default nextConfig;


