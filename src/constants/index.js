/**
 * Global Constants & Metadata Schemas
 */
export * from './company';

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
  { id: 'ac-compressor', name: 'AC Compressor', slug: 'ac-compressor' },
  { id: 'scroll-compressor', name: 'Scroll Compressor', slug: 'scroll-compressor' },
  { id: 'refrigeration-compressors', name: 'Refrigeration Compressors', slug: 'refrigeration-compressors' },
  { id: 'copeland-scroll-compressor', name: 'Copeland Scroll Compressor', slug: 'copeland-scroll-compressor' },
  { id: 'air-compressor', name: 'Air Compressor', slug: 'air-compressor' },
  { id: 'rotary-compressor', name: 'Rotary Compressor', slug: 'rotary-compressor' },
  { id: 'air-conditioner', name: 'Air Conditioner', slug: 'air-conditioner' },
  { id: 'danfoss-scroll-compressor', name: 'Danfoss Scroll Compressor', slug: 'danfoss-scroll-compressor' },
  { id: 'air-conditioning-compressors', name: 'Air Conditioning Compressors', slug: 'air-conditioning-compressors' },
  { id: 'copeland-compressor', name: 'Copeland Compressor', slug: 'copeland-compressor' },
  { id: 'screw-compressor', name: 'Screw Compressor', slug: 'screw-compressor' },
  { id: 'ac-amc-service', name: 'AC AMC Service', slug: 'ac-amc-service' },
  { id: 'vrf-system', name: 'VRF System', slug: 'vrf-system' },
  { id: 'relays', name: 'Relays', slug: 'relays' },
  { id: 'air-conditioner-installation-service', name: 'Air Conditioner Installation Service', slug: 'air-conditioner-installation-service' },
  { id: 'air-conditioner-motor', name: 'Air Conditioner Motor', slug: 'air-conditioner-motor' },
  { id: 'air-conditioner-maintenance-service', name: 'Air Conditioner Maintenance Service', slug: 'air-conditioner-maintenance-service' },
  { id: 'rotary-and-refrigerator-compressor', name: 'Rotary And Refrigerator Compressor', slug: 'rotary-and-refrigerator-compressor' },
  { id: 'emerson-scroll-compressor', name: 'Emerson Scroll Compressor', slug: 'emerson-scroll-compressor' },
  { id: 'daikin-compressor', name: 'Daikin Compressor', slug: 'daikin-compressor' },
  { id: 'air-conditioner-compressor', name: 'Air Conditioner Compressor', slug: 'air-conditioner-compressor' },
  { id: '3d-bed-sheet', name: '3D Bed Sheet', slug: '3d-bed-sheet' },
  { id: 'pump-and-valve', name: 'Pump And Valve', slug: 'pump-and-valve' },
  { id: 'aacsr-conductor', name: 'AACSR Conductor', slug: 'aacsr-conductor' },
  { id: 'new-items', name: 'New Items', slug: 'new-items' },
];

export const TECHNICAL_SPEC_FIELDS = {
  coolingCapacity: 'Cooling Capacity (kW)',
  airFlow: 'Air Flow Rate (m³/h)',
  powerInput: 'Power Input (kW)',
  refrigerantType: 'Refrigerant Type',
  dimensions: 'Dimensions (W x D x H mm)',
  weight: 'Weight (kg)',
};
