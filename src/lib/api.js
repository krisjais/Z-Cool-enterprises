import { PRODUCTS_CATALOG, CATEGORIES_LIST } from '@/data/products';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

/**
 * Resolves relative /uploads paths to full backend URL, supports Cloudinary URLs and object format
 */
export function resolveImageUrl(src) {
  if (!src) return '/ac_compressor.png';

  // Handle { url, publicId } object format
  if (typeof src === 'object' && src !== null && src.url) {
    src = src.url;
  }

  if (typeof src !== 'string' || !src.trim()) return '/ac_compressor.png';

  const cleanSrc = src.trim();

  // Cloudinary or absolute web URLs
  if (cleanSrc.startsWith('http://') || cleanSrc.startsWith('https://')) {
    return cleanSrc;
  }

  // Local backend uploaded file paths
  if (cleanSrc.startsWith('/uploads/')) {
    return `${API_BASE}${cleanSrc}`;
  }

  return cleanSrc;
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
    if (query.status && query.status !== 'all') params.append('status', query.status);
    if (query.search) params.append('search', query.search);
    if (query.limit) params.append('limit', query.limit);

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
 * Public categories fetcher with product counts
 */
export async function getCategories() {
  try {
    const res = await fetch(`${API_BASE}/api/categories`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        return {
          categories: json.data,
          totalProducts: json.totalProducts || 0,
        };
      }
    }
  } catch (err) {
    console.warn('API getCategories fallback:', err.message);
  }

  // Fallback to static categories list if backend unavailable
  return {
    categories: CATEGORIES_LIST.map((c) => ({
      _id: c.id,
      name: c.name,
      slug: c.id,
      description: c.desc,
      productCount: 0,
    })),
    totalProducts: PRODUCTS_CATALOG.length,
  };
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
 * Public category products fetcher
 */
export async function getProductsByCategory(slug) {
  try {
    const res = await fetch(`${API_BASE}/api/products/category/${encodeURIComponent(slug)}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        return {
          category: json.category,
          products: json.data,
        };
      }
    }
  } catch (err) {
    console.warn('API getProductsByCategory fallback:', err.message);
  }

  const matched = PRODUCTS_CATALOG.filter((p) => {
    const cleanSlug = slug.replace(/-/g, ' ').toLowerCase();
    return (
      p.category?.toLowerCase() === cleanSlug ||
      p.category?.toLowerCase().includes(cleanSlug) ||
      p.type?.toLowerCase().includes(cleanSlug)
    );
  });

  return {
    category: { name: slug.replace(/-/g, ' '), slug },
    products: matched,
  };
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

export async function adminDeleteCloudinaryImage(publicId, token) {
  const res = await fetch(`${API_BASE}/api/upload/delete`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify({ publicId }),
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

/**
 * Category Management API methods
 */
export async function getCategoryBySlug(slugOrId) {
  try {
    const res = await fetch(`${API_BASE}/api/categories/${encodeURIComponent(slugOrId)}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('API getCategoryBySlug fallback:', err.message);
  }
  return { success: false, message: 'Failed to fetch category' };
}

export async function adminCreateCategory(data, token) {
  const res = await fetch(`${API_BASE}/api/categories`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminUpdateCategory(id, data, token) {
  const res = await fetch(`${API_BASE}/api/categories/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminDeleteCategory(id, token, force = false) {
  const res = await fetch(`${API_BASE}/api/categories/${encodeURIComponent(id)}${force ? '?force=true' : ''}`, {
    method: 'DELETE',
    headers: authHeaders(token),
  });
  return res.json();
}

/**
 * Submits a customer inquiry or compressor quote request to the backend.
 * Handles both plain JSON payloads and multipart/form-data with nameplate photo.
 */
export async function submitInquiry(data, photoFile = null) {
  try {
    let body;
    const headers = {};

    if (photoFile && typeof File !== 'undefined' && photoFile instanceof File) {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key]);
        }
      });
      formData.append('photo', photoFile);
      body = formData;
    } else {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }

    const res = await fetch(`${API_BASE}/api/inquiries`, {
      method: 'POST',
      headers,
      body,
    });

    const json = await res.json();
    if (!res.ok || !json.success) {
      throw new Error(json.message || `Server returned HTTP ${res.status}`);
    }

    return json;
  } catch (err) {
    console.error('[API submitInquiry Error]', err);
    throw err;
  }
}

