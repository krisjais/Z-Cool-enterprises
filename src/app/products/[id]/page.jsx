import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { getProductById, getProducts, getCategories } from '@/lib/api';
import ProductDetailView from '@/components/products/ProductDetailView';

export const dynamic = 'force-dynamic';

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

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const identifier = resolvedParams?.id;

  // 1. Check if it's a product
  const data = await getProductById(identifier);
  const product = data?.product;

  if (product) {
    const codeStr = (product.modelNumber || product.code) ? ` (${product.modelNumber || product.code})` : '';
    const condStr = product.condition ? ` · ${product.condition}` : '';

    return {
      title: `${product.brand} ${product.name}${codeStr} | Z Cool Enterprises Mumbai`,
      description: `${product.brand} ${product.name}${codeStr}${condStr}. ${product.shortDescription || product.tagline || product.description || 'Commercial AC compressor sourcing and displacement matching.'} Pan-India industrial dispatch.`,
      openGraph: {
        title: `${product.brand} ${product.name}${codeStr}`,
        description: `${product.brand} ${product.name}. Verified commercial AC compressor.`,
        images: product.images?.[0]
          ? [{ url: typeof product.images[0] === 'object' ? product.images[0].url : product.images[0] }]
          : [],
      },
    };
  }

  // 2. Check if it's a category
  const category = await matchCategory(identifier);
  if (category) {
    return {
      title: `${category.name} Inventory & Models | Z Cool Enterprises`,
      description: `Browse available replacement and tested ${category.name} models. Express freight delivery across India.`,
    };
  }

  return {
    title: 'Model Not Found | Z Cool Enterprises',
    description: 'The requested compressor model could not be found.',
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const identifier = resolvedParams?.id;

  // 1. Attempt to fetch as product
  const [data, allProducts] = await Promise.all([
    getProductById(identifier),
    getProducts(),
  ]);

  if (data && data.product) {
    return (
      <ProductDetailView
        product={data.product}
        allProducts={allProducts || []}
        backendRelated={data.related || []}
      />
    );
  }

  // 2. Backward compatibility: If identifier matches a category, redirect cleanly to pre-filtered catalogue
  const category = await matchCategory(identifier);
  if (category) {
    redirect(`/products?category=${encodeURIComponent(category.name)}`);
  }

  // 3. Genuine 404 for unknown product IDs (never silently fall back to first product)
  notFound();
}
