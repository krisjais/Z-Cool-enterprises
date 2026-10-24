import { getSiteUrl } from '@/utils/seo';

export default function robots() {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/admin'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
