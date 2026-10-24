import React, { cache } from 'react';
import { notFound, redirect } from 'next/navigation';
import { getProductById, getProducts, getCategories } from '@/lib/api';
import ProductDetailView from '@/components/products/ProductDetailView';
import { getSiteUrl, getProductSchema, getBreadcrumbSchema } from '@/utils/seo';

export const revalidate = 3600; // 1-hour ISR cache for verified catalogue products

// Approved active engineering categories from CATEGORIES_LIST
const KNOWN_CATEGORY_SLUGS = {
  'scroll-compressor': 'Scroll Compressors',
  'scroll-compressors': 'Scroll Compressors',
  'rotary-compressor': 'Rotary Compressors',
  'rotary-compressors': 'Rotary Compressors',
  'reciprocating-compressor': 'Reciprocating Compressors',
  'reciprocating-compressors': 'Reciprocating Compressors',
  'vrf-inverter-compressors': 'VRF / DC Inverter',
  'vrf-system': 'VRF / DC Inverter',
};

async function matchCategory(identifier) {
  if (!identifier) return null;
  const clean = identifier.toLowerCase().trim();

  if (KNOWN_CATEGORY_SLUGS[clean]) {
    return {
      name: KNOWN_CATEGORY_SLUGS[clean],
      slug: clean,
    };
  }

  try {
    const catData = await getCategories();
    const categories = catData?.categories || [];
    const found = categories.find(
      (c) =>
        c.slug?.toLowerCase() === clean ||
        c.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === clean
    );
    if (found) {
      return {
        name: found.name,
        slug: found.slug,
        description: found.description,
      };
    }
  } catch (_) {}

  return null;
}

// Per-request memoization ensures generateMetadata and ProductDetailPage share the single lookup
const getCachedProduct = cache(async (id) => {
  return getProductById(id);
});

const getCachedCategory = cache(async (identifier) => {
  return matchCategory(identifier);
});

/**
 * Statically pre-render verified catalogue records at build time for instant CDN delivery.
 * Uncached or newly added models fall back smoothly to ISR on-demand rendering.
 */
export async function generateStaticParams() {
  const products = await getProducts();
  if (!Array.isArray(products) || products.length === 0) {
    return [];
  }
  return products
    .filter((p) => Boolean(p.id))
    .map((p) => ({
      id: p.id,
    }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const identifier = resolvedParams?.id;
  const siteUrl = getSiteUrl();

  // 1. Check if it's a product
  const data = await getCachedProduct(identifier);
  const product = data?.product;

  if (product) {
    const rawName = (product.name || '').trim();
    const rawBrand = (product.brand || '').trim();
    const displayName = rawName.toLowerCase().startsWith(rawBrand.toLowerCase())
      ? rawName
      : `${rawBrand} ${rawName}`;

    const model = product.modelNumber || product.code;
    const codeStr = model && !displayName.includes(model) ? ` (${model})` : '';
    const condStr = product.condition ? ` · ${product.condition}` : '';

    const cleanTitle = `${displayName}${codeStr}`;
    const fullTitle = `${cleanTitle} | Z Cool Enterprises`;
    const description = `${displayName}${codeStr}${condStr}. ${product.shortDescription || product.tagline || product.description || 'Commercial AC compressor sourcing and displacement matching.'} Verified B2B dispatch in Mumbai and pan-India.`;
    const canonicalUrl = `${siteUrl}/products/${encodeURIComponent(product.id)}`;

    const rawImg = product.images?.[0]
      ? (typeof product.images[0] === 'object' ? product.images[0].url : product.images[0])
      : '/ac_compressor.png';
    const ogImage = rawImg.startsWith('http') ? rawImg : `${siteUrl}${rawImg.startsWith('/') ? rawImg : `/${rawImg}`}`;

    return {
      title: cleanTitle,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: fullTitle,
        description,
        url: canonicalUrl,
        type: 'website',
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: fullTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: fullTitle,
        description,
        images: [ogImage],
      },
    };
  }

  // 2. Check if it's a category
  const category = await getCachedCategory(identifier);
  if (category) {
    return {
      title: `${category.name} Inventory & Models | Z Cool Enterprises`,
      description: `Browse available replacement and tested ${category.name} models. Express freight delivery across India.`,
      alternates: {
        canonical: `${siteUrl}/products?category=${encodeURIComponent(category.name)}`,
      },
    };
  }

  return {
    title: 'Model Not Found | Z Cool Enterprises',
    description: 'The requested compressor model could not be found.',
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const identifier = resolvedParams?.id;

  // 1. Fetch single product data using memoized lookup (avoids loading and serializing full 181-product catalog)
  const data = await getCachedProduct(identifier);

  if (data && data.product) {
    const product = data.product;
    const productSchema = getProductSchema(product);
    const breadcrumbSchema = getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Compressor Catalogue', url: '/products' },
      { name: product.name, url: `/products/${product.id}` },
    ]);

    return (
      <>
        {productSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
          />
        )}
        {breadcrumbSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        )}
        <ProductDetailView
          product={product}
          backendRelated={data.related || []}
        />
      </>
    );
  }

  // 2. Backward compatibility: If identifier matches a category, redirect cleanly to pre-filtered catalogue
  const category = await getCachedCategory(identifier);
  if (category) {
    redirect(`/products?category=${encodeURIComponent(category.name)}`);
  }

  // 3. Genuine 404 for unknown product IDs (never silently fall back to first product)
  notFound();
}
