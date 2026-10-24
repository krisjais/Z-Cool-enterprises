import { PRODUCTS_CATALOG } from '@/data/products';
import { getSiteUrl } from '@/utils/seo';

export default async function sitemap() {
  const baseUrl = getSiteUrl();

  const staticRoutes = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/products', changeFrequency: 'daily', priority: 0.9 },
    { path: '/brands', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/refurbishment', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/applications', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/case-studies', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Map only valid, unique products from the verified catalog
  const seenIds = new Set();
  const productUrls = [];

  for (const product of PRODUCTS_CATALOG) {
    if (product && product.id && !seenIds.has(product.id)) {
      seenIds.add(product.id);
      productUrls.push({
        url: `${baseUrl}/products/${encodeURIComponent(product.id)}`,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return [...staticRoutes, ...productUrls];
}
