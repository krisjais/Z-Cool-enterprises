/**
 * Global Constants & Metadata Schemas
 */

export const NAV_LINKS = [
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '#about' },
  { name: 'Services', path: '#services' },
  { name: 'Case Studies', path: '#cases' },
  { name: 'Technical Blog', path: '/blog' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/z-cool-technology' },
  { name: 'Twitter', url: 'https://twitter.com/zcooltech' },
];

export const CATEGORIES = [
  { id: 'precision-ac', name: 'Precision ACs', slug: 'precision-acs' },
  { id: 'chiller', name: 'Industrial Chillers', slug: 'industrial-chillers' },
  { id: 'panel-cooler', name: 'Panel Coolers', slug: 'panel-coolers' },
];

export const TECHNICAL_SPEC_FIELDS = {
  coolingCapacity: 'Cooling Capacity (kW)',
  airFlow: 'Air Flow Rate (m³/h)',
  powerInput: 'Power Input (kW)',
  refrigerantType: 'Refrigerant Type',
  dimensions: 'Dimensions (W x D x H mm)',
  weight: 'Weight (kg)',
};
