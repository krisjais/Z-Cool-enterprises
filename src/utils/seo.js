/**
 * SEO & Metadata Utility Engine
 * Provides baseline OpenGraph, Twitter Cards, and JSON-LD schema builders.
 */

import { COMPANY_DETAILS } from '../constants/company';

export const siteConfig = {
  title: 'Z.Cool Enterprises | Refurbished AC Compressors & Industrial HVAC Sourcing',
  description: 'Explore all types of refurbished AC compressors for commercial and industrial cooling applications. Specialized B2B sourcing and replacement in Mumbai.',
  url: 'https://zcoolenterprises.com',
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
export function generateSEO({ title, description, path, ogImage, noIndex = false } = {}) {
  const metaTitle = title ? `${title} | ${COMPANY_DETAILS.name}` : siteConfig.title;
  const metaDesc = description || siteConfig.description;
  const metaUrl = `${siteConfig.url}${path || ''}`;
  const metaImg = ogImage || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDesc,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: metaUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
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
      type: 'website',
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
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_DETAILS.name,
    legalName: COMPANY_DETAILS.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo1.png`,
    image: `${siteConfig.url}/ac_compressor.png`,
    email: COMPANY_DETAILS.email,
    telephone: `+91 ${COMPANY_DETAILS.primaryPhone}`,
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

// Generates JSON-LD Product Schema
export function getProductSchema(product) {
  if (!product) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images || [],
    description: product.description,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
  };
}
