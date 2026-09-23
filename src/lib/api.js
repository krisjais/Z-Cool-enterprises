import { PRODUCTS_CATALOG } from '@/data/products';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

/**
 * Resolves relative /uploads paths to full backend URL if needed
 */
export function resolveImageUrl(src) {
  if (!src) return '/ac_compressor.png';
  if (typeof src !== 'string') return '/ac_compressor.png';
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  if (src.startsWith('/uploads/')) {
    return `${API_BASE}${src}`;
  }
  return src;
}

/**
 * Public catalog fetcher with seamless fallback to static catalog
 */
export async function getProducts(query = {}) {
  try {
    const params = new URLSearchParams();
    if (query.category && query.category !== 'all') params.append('category', query.category);
    if (query.brand && query.brand !== 'all') params.append('brand', query.brand);
    if (query.availability && query.availability !== 'all') params.append('availability', query.availability);
    if (query.search) params.append('search', query.search);

    const queryString = params.toString() ? `?${params.toString()}` : '';
    const res = await fetch(`${API_BASE}/api/products${queryString}`, {
      cache: 'no-store', // Always get latest products from MongoDB
    });

    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      return json.data;
    }
  } catch (err) {
    console.warn('API getProducts fallback to static catalog:', err.message);
  }
  return PRODUCTS_CATALOG;
}

/**
 * Public single product fetcher
 */
export async function getProductById(id) {
  try {
    const res = await fetch(`${API_BASE}/api/products/${encodeURIComponent(id)}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return {
          product: json.data,
          related: json.related || [],
        };
      }
    }
  } catch (err) {
    console.warn('API getProductById fallback to static catalog:', err.message);
  }

  const staticProduct = PRODUCTS_CATALOG.find(
    (p) => p.id?.toLowerCase() === id?.toLowerCase() || p.code?.toLowerCase() === id?.toLowerCase()
  );

  if (!staticProduct) return null;

  const staticRelated = PRODUCTS_CATALOG.filter(
    (p) => p.id !== staticProduct.id && (p.brand === staticProduct.brand || p.category === staticProduct.category)
  ).slice(0, 4);

  return { product: staticProduct, related: staticRelated };
}

/**
 * Authenticated Admin API helpers
 */
function authHeaders(token, isJson = true) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  if (isJson) {
    headers['Content-Type'] = 'application/json';
  }
  return headers;
}

export async function adminCreateProduct(data, token) {
  const res = await fetch(`${API_BASE}/api/products`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminUpdateProduct(id, data, token) {
  const res = await fetch(`${API_BASE}/api/products/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminDeleteProduct(id, token) {
  const res = await fetch(`${API_BASE}/api/products/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: authHeaders(token),
  });
  return res.json();
}

export async function adminUploadImages(files, token) {
  const formData = new FormData();
  for (const file of files) {
    formData.append('images', file);
  }

  const res = await fetch(`${API_BASE}/api/upload`, {
    method: 'POST',
    headers: authHeaders(token, false), // Browser automatically sets multipart boundary
    body: formData,
  });
  return res.json();
}

export async function adminGetOrders(token, query = {}) {
  const params = new URLSearchParams(query).toString();
  const res = await fetch(`${API_BASE}/api/orders${params ? `?${params}` : ''}`, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  return res.json();
}

export async function adminCreateOrder(data, token) {
  const res = await fetch(`${API_BASE}/api/orders`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminUpdateOrder(id, data, token) {
  const res = await fetch(`${API_BASE}/api/orders/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminDeleteOrder(id, token) {
  const res = await fetch(`${API_BASE}/api/orders/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: authHeaders(token),
  });
  return res.json();
}

export async function adminGetShipments(token, query = {}) {
  const params = new URLSearchParams(query).toString();
  const res = await fetch(`${API_BASE}/api/shipments${params ? `?${params}` : ''}`, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  return res.json();
}

export async function adminCreateShipment(data, token) {
  const res = await fetch(`${API_BASE}/api/shipments`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminUpdateShipment(id, data, token) {
  const res = await fetch(`${API_BASE}/api/shipments/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminDeleteShipment(id, token) {
  const res = await fetch(`${API_BASE}/api/shipments/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: authHeaders(token),
  });
  return res.json();
}
