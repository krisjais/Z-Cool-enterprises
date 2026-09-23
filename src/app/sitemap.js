import { PRODUCTS_CATALOG } from '@/data/products';

export default async function sitemap() {
  const baseUrl = 'https://zcoolenterprises.com';

  const productUrls = PRODUCTS_CATALOG.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const routes = [
    '',
    '/products',
    '/brands',
    '/services',
    '/refurbishment',
    '/applications',
    '/about',
    '/case-studies',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes, ...productUrls];
}
