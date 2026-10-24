/**
 * SEO & Metadata Utility Engine
 * Centralized site URL resolution, OpenGraph, Twitter Cards, and Schema.org JSON-LD builders.
 */

import { COMPANY_DETAILS } from '../constants/company';

export const DEFAULT_PRODUCTION_URL = 'https://z-cool-enterprises.vercel.app';

/**
 * Centralized site URL resolver.
 * Priority:
 * 1. process.env.NEXT_PUBLIC_SITE_URL (trimmed)
 * 2. DEFAULT_PRODUCTION_URL ('https://z-cool-enterprises.vercel.app')
 * Ensures localhost / 127.0.0.1 never leaks into production metadata.
 */
export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    const isProd = process.env.NODE_ENV === 'production';
    if (isProd && (configured.includes('localhost') || configured.includes('127.0.0.1'))) {
      return DEFAULT_PRODUCTION_URL;
    }
    return configured.replace(/\/+$/, '');
  }
  return DEFAULT_PRODUCTION_URL;
}

export const siteConfig = {
  title: 'Z Cool Enterprises | Refurbished AC Compressors & Industrial HVAC Sourcing Mumbai',
  description: 'Specialized B2B supplier of replacement and refurbished scroll, rotary, and reciprocating AC compressors in Mumbai, India.',
  get url() {
    return getSiteUrl();
  },
  ogImage: '/ac_compressor.png',
  twitterHandle: '@zcoolenterprises',
  organization: {
    name: COMPANY_DETAILS.name,
    legalName: COMPANY_DETAILS.name,
    founder: COMPANY_DETAILS.owner,
    logo: '/logo1.png',
    email: COMPANY_DETAILS.email,
    telephones: [COMPANY_DETAILS.formattedPrimaryPhone, COMPANY_DETAILS.formattedSecondaryPhone],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY_DETAILS.address.line1}, ${COMPANY_DETAILS.address.line2}`,
      addressLocality: COMPANY_DETAILS.address.city,
      postalCode: COMPANY_DETAILS.address.pincode,
      addressRegion: COMPANY_DETAILS.address.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_DETAILS.geo?.latitude || '19.05128000',
      longitude: COMPANY_DETAILS.geo?.longitude || '72.86084000',
    },
    sameAs: [],
  },
};

// Generates dynamic Metadata objects for Next.js App Router
export function generateSEO({ title, description, path, ogImage, noIndex = false, type = 'website' } = {}) {
  const siteUrl = getSiteUrl();
  const pageTitle = title || 'Refurbished AC Compressors & HVAC Equipment Mumbai';
  const cleanTitle = pageTitle
    .replace(/\s*\|\s*Z[\s.]*Cool\s*Enterprises.*$/i, '')
    .trim();

  const metaTitle = `${cleanTitle} | Z Cool Enterprises`;
  const metaDesc = description || siteConfig.description;
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const metaUrl = `${siteUrl}${cleanPath}`;

  const rawImg = ogImage || siteConfig.ogImage;
  const metaImg = rawImg.startsWith('http') ? rawImg : `${siteUrl}${rawImg.startsWith('/') ? rawImg : `/${rawImg}`}`;

  return {
    metadataBase: new URL(siteUrl),
    title: cleanTitle,
    description: metaDesc,
    alternates: {
      canonical: metaUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: metaUrl,
      siteName: COMPANY_DETAILS.name,
      images: [
        {
          url: metaImg,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      type,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDesc,
      creator: siteConfig.twitterHandle,
      images: [metaImg],
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ],
      other: [
        { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
  };
}

// Generates JSON-LD LocalBusiness / Organization Schema
export function getOrganizationSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_DETAILS.name,
    legalName: COMPANY_DETAILS.name,
    url: siteUrl,
    logo: `${siteUrl}/logo1.png`,
    image: `${siteUrl}/ac_compressor.png`,
    email: COMPANY_DETAILS.email,
    telephone: `+91 ${COMPANY_DETAILS.primaryPhone}`,
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY_DETAILS.address.line1}, ${COMPANY_DETAILS.address.line2}`,
      addressLocality: COMPANY_DETAILS.address.city,
      postalCode: COMPANY_DETAILS.address.pincode,
      addressRegion: COMPANY_DETAILS.address.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_DETAILS.geo?.latitude || '19.05128000',
      longitude: COMPANY_DETAILS.geo?.longitude || '72.86084000',
    },
    hasMap: COMPANY_DETAILS.googleMapsUrl,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+91 ${COMPANY_DETAILS.primaryPhone}`,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: `+91 ${COMPANY_DETAILS.secondaryPhone}`,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    ],
  };
}

// Generates JSON-LD Product Schema using only verified product data
export function getProductSchema(product) {
  if (!product) return null;
  const siteUrl = getSiteUrl();
  const productUrl = `${siteUrl}/products/${product.id}`;

  const imageArray = Array.isArray(product.images) && product.images.length > 0
    ? product.images.map((img) => {
        const raw = typeof img === 'object' ? img.url : img;
        return raw?.startsWith('http') ? raw : `${siteUrl}${raw?.startsWith('/') ? raw : `/${raw}`}`;
      })
    : [`${siteUrl}/ac_compressor.png`];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || product.shortDescription || `${product.brand} commercial compressor model ${product.code || product.id}.`,
    url: productUrl,
    image: imageArray,
    brand: {
      '@type': 'Brand',
      name: product.brand || COMPANY_DETAILS.name,
    },
  };

  if (product.code || product.modelNumber) {
    schema.model = product.code || product.modelNumber;
    schema.mpn = product.code || product.modelNumber;
  }

  // Real condition mapping without inventing values
  if (product.condition) {
    const cond = product.condition.toLowerCase();
    if (cond.includes('refurbish')) {
      schema.itemCondition = 'https://schema.org/RefurbishedCondition';
    } else if (cond.includes('used')) {
      schema.itemCondition = 'https://schema.org/UsedCondition';
    } else if (cond.includes('new')) {
      schema.itemCondition = 'https://schema.org/NewCondition';
    }
  }

  return schema;
}

// Generates JSON-LD BreadcrumbList Schema
export function getBreadcrumbSchema(items = []) {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  };
}
