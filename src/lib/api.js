import { PRODUCTS_CATALOG, CATEGORIES_LIST } from '@/data/products';

/**
 * Resolves the backend API base URL safely across Server and Client contexts.
 *
 * Rules:
 * 1. If NEXT_PUBLIC_API_URL is configured with a valid remote URL, use it (trimmed, no trailing slash).
 * 2. In local development (NODE_ENV === 'development' or on localhost), default to http://localhost:5000
 *    to support local pair programming with Z-Cool-enterprises-backend.
 * 3. In production, NEVER send requests to localhost or 127.0.0.1. If unconfigured or pointing to localhost,
 *    return null so catalog and category fetchers immediately use local static datasets with 0ms delay.
 */
export function getApiBase() {
  const raw = (process.env.NEXT_PUBLIC_API_URL || '').trim();
  const isDev = process.env.NODE_ENV === 'development';
  const isClient = typeof window !== 'undefined';
  const isClientLocal = isClient && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  if (!raw) {
    // Only allow localhost fallback in local developer environments
    if (isDev || isClientLocal) {
      return 'http://localhost:5000';
    }
    return null;
  }

  // If a URL is configured, inspect hostname to prevent accidental localhost requests in production
  try {
    const parsed = new URL(raw);
    const isLocalHost = parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1';
    if (isLocalHost && !isDev && !isClientLocal) {
      return null;
    }
    return raw.replace(/\/+$/, '');
  } catch {
    return null;
  }
}

const DEFAULT_READ_TIMEOUT_MS = 1200; // 1.2 seconds timeout for public read operations
const DEFAULT_ADMIN_READ_TIMEOUT_MS = 10000; // 10 seconds timeout for authenticated admin read operations
const DEFAULT_MUTATION_TIMEOUT_MS = 10000; // 10 seconds timeout for writes / uploads

// Circuit Breaker state to prevent repeated timeout delays when remote/local backend is unavailable
const CIRCUIT_BREAKER = {
  lastFailureTime: 0,
  cooldownMs: 30000, // 30 seconds cooldown after a failed or timed-out request
  isTripped() {
    return Date.now() - this.lastFailureTime < this.cooldownMs;
  },
  trip() {
    this.lastFailureTime = Date.now();
  },
  reset() {
    this.lastFailureTime = 0;
  },
};

/**
 * Resilient fetch wrapper with explicit timeout and AbortSignal support.
 * Prevents hanging sockets and serverless freeze when remote backends are unreachable or sleeping.
 */
async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_READ_TIMEOUT_MS) {
  let signal;
  let timeoutId;

  if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
    signal = AbortSignal.timeout(timeoutMs);
  } else {
    const controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    signal = controller.signal;
  }

  try {
    const res = await fetch(url, { ...options, signal });
    return res;
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

/**
 * Safe Reversible Catalogue Review Mode:
 * When NEXT_PUBLIC_CATALOGUE_REVIEW_MODE=danfoss-sm110s4ea is configured, public catalog listings,
 * category views, and related products restrict visibility exclusively to the Danfoss product.
 * Direct lookups by ID/slug remain accessible for verification, and zero records are deleted.
 * Defaults to false if unset or in standard production.
 */
export function getCatalogueReviewModeSlugs() {
  const envVal = (
    process.env.NEXT_PUBLIC_CATALOGUE_REVIEW_MODE ||
    process.env.CATALOGUE_REVIEW_MODE ||
    'danfoss-sm110s4ea,highly-ate690uc3q9jk,tecumseh-aw5532f'
  ).trim().toLowerCase();
  if (!envVal || envVal === 'false' || envVal === 'off' || envVal === '0') return null;
  const slugs = envVal.split(',').map((s) => s.trim()).filter(Boolean);
  if (!slugs.includes('tecumseh-aw5532f')) {
    slugs.push('tecumseh-aw5532f');
  }
  return slugs.length > 0 ? slugs : null;
}

export function isCatalogueReviewModeActive() {
  return getCatalogueReviewModeSlugs() !== null;
}

export function matchesReviewMode(p) {
  const reviewSlugs = getCatalogueReviewModeSlugs();
  if (!reviewSlugs || reviewSlugs.length === 0) return true;
  if (!p) return false;
  const pid = String(p.id || '').toLowerCase().trim();
  const pslug = String(p.slug || '').toLowerCase().trim();
  const pcode = String(p.code || p.modelNumber || '').toLowerCase().trim();
  const pcat = String(p.catalogCode || '').toLowerCase().trim();
  return reviewSlugs.some(
    (slug) => pid === slug || pslug === slug || pcode === slug || pcat === slug || pid.includes(slug) || slug.includes(pid)
  );
}

/**
 * Filters the verified static catalogue according to query parameters.
 * Preserves full filtering compatibility even in static fallback mode.
 */
function filterStaticProducts(query = {}) {
  let result = [...PRODUCTS_CATALOG];

  if (isCatalogueReviewModeActive()) {
    result = result.filter(matchesReviewMode);
  }

  if (query.category && query.category !== 'all') {
    const cleanCat = query.category.toLowerCase().trim();
    result = result.filter((p) => {
      const pCat = (p.category || '').toLowerCase();
      const pType = (p.type || '').toLowerCase();
      return pCat === cleanCat || pCat.includes(cleanCat) || pType.includes(cleanCat);
    });
  }

  if (query.brand && query.brand !== 'all') {
    const cleanBrand = query.brand.toLowerCase().trim();
    result = result.filter((p) => (p.brand || '').toLowerCase().trim() === cleanBrand);
  }

  if (query.availability && query.availability !== 'all') {
    const cleanAvail = query.availability.toLowerCase().trim();
    result = result.filter((p) => (p.availability || '').toLowerCase().trim() === cleanAvail);
  }

  if (query.status && query.status !== 'all') {
    const cleanStatus = query.status.toLowerCase().trim();
    result = result.filter((p) =>
      (p.statusBadge || p.condition || '').toLowerCase().trim() === cleanStatus
    );
  }

  if (query.search) {
    const q = query.search.trim().toLowerCase();
    result = result.filter((p) =>
      (p.name || '').toLowerCase().includes(q) ||
      (p.code || '').toLowerCase().includes(q) ||
      (p.catalogCode || '').toLowerCase().includes(q) ||
      (p.brand || '').toLowerCase().includes(q) ||
      (p.modelNumber || '').toLowerCase().includes(q) ||
      (p.application || '').toLowerCase().includes(q)
    );
  }

  if (query.limit) {
    const limit = parseInt(query.limit, 10);
    if (!isNaN(limit) && limit > 0) {
      result = result.slice(0, limit);
    }
  }

  return result;
}

/**
 * Static categories fallback generator matching backend shape.
 */
function getStaticCategories() {
  const isReview = isCatalogueReviewModeActive();
  return {
    categories: CATEGORIES_LIST.map((c) => {
      const isReviewCat =
        c.name.toLowerCase().includes('scroll') ||
        c.id.toLowerCase().includes('scroll') ||
        c.name.toLowerCase().includes('danfoss') ||
        c.name.toLowerCase().includes('rotary') ||
        c.id.toLowerCase().includes('rotary') ||
        c.name.toLowerCase().includes('highly') ||
        c.name.toLowerCase().includes('reciprocating') ||
        c.id.toLowerCase().includes('reciprocating') ||
        c.name.toLowerCase().includes('tecumseh');
      return {
        _id: c.id,
        name: c.name,
        slug: c.id,
        description: c.desc,
        productCount: isReview ? (isReviewCat ? 1 : 0) : 0,
      };
    }),
    totalProducts: isReview ? 3 : PRODUCTS_CATALOG.length,
  };
}

/**
 * Static product detail lookup matching backend shape.
 */
function getStaticProductById(id) {
  if (!id) return null;
  const cleanId = String(id).toLowerCase().trim();

  const staticProduct = PRODUCTS_CATALOG.find(
    (p) =>
      p.id?.toLowerCase() === cleanId ||
      p.slug?.toLowerCase() === cleanId ||
      p.code?.toLowerCase() === cleanId ||
      p.modelNumber?.toLowerCase() === cleanId ||
      p.catalogCode?.toLowerCase() === cleanId
  );

  if (!staticProduct) return null;

  let staticRelated = PRODUCTS_CATALOG.filter(
    (p) => p.id !== staticProduct.id && p.category === staticProduct.category
  ).slice(0, 4);

  if (staticRelated.length === 0) {
    staticRelated = PRODUCTS_CATALOG.filter(
      (p) => p.id !== staticProduct.id && p.brand === staticProduct.brand
    ).slice(0, 4);
  }

  return { product: staticProduct, related: staticRelated };
}

/**
 * Static category products lookup matching backend shape.
 */
function getStaticProductsByCategory(slug) {
  if (!slug) return { category: { name: 'All', slug: 'all' }, products: PRODUCTS_CATALOG };
  const cleanSlug = String(slug).replace(/-/g, ' ').toLowerCase().trim();

  const matched = PRODUCTS_CATALOG.filter((p) => {
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
    const apiBase = getApiBase();
    if (apiBase) {
      return `${apiBase}${cleanSrc}`;
    }
    return cleanSrc;
  }

  return cleanSrc;
}

/**
 * Merges database products with verified static products without creating duplicate entries.
 * Live database records take precedence, while static catalog records ensure newly imported
 * models or static definitions are immediately available across catalogue views.
 */
function mergeAndDeduplicateProducts(dbProducts = [], staticProducts = []) {
  const seen = new Set();
  const merged = [];

  for (const p of dbProducts) {
    if (!p) continue;
    const idKey = (p.id || '').toLowerCase().trim();
    const slugKey = (p.slug || '').toLowerCase().trim();
    const codeKey = (p.code || p.modelNumber || '').toLowerCase().trim();

    if (idKey) seen.add(idKey);
    if (slugKey) seen.add(slugKey);
    if (codeKey) seen.add(codeKey);

    merged.push(p);
  }

  for (const p of staticProducts) {
    if (!p) continue;
    const idKey = (p.id || '').toLowerCase().trim();
    const slugKey = (p.slug || '').toLowerCase().trim();
    const codeKey = (p.code || p.modelNumber || '').toLowerCase().trim();

    const isDuplicate =
      (idKey && seen.has(idKey)) ||
      (slugKey && seen.has(slugKey)) ||
      (codeKey && seen.has(codeKey));

    if (!isDuplicate) {
      if (idKey) seen.add(idKey);
      if (slugKey) seen.add(slugKey);
      if (codeKey) seen.add(codeKey);
      merged.push(p);
    }
  }

  if (isCatalogueReviewModeActive()) {
    return merged.filter(matchesReviewMode);
  }

  return merged;
}

/**
 * Public catalog fetcher with seamless fallback to static catalog
 */
export async function getProducts(query = {}) {
  const apiBase = getApiBase();

  // If no remote API is configured in production or circuit breaker is tripped, immediately return static catalog (0ms)
  if (!apiBase || CIRCUIT_BREAKER.isTripped()) {
    return filterStaticProducts(query);
  }

  try {
    const params = new URLSearchParams();
    if (query.category && query.category !== 'all') params.append('category', query.category);
    if (query.brand && query.brand !== 'all') params.append('brand', query.brand);
    if (query.availability && query.availability !== 'all') params.append('availability', query.availability);
    if (query.status && query.status !== 'all') params.append('status', query.status);
    if (query.search) params.append('search', query.search);
    if (query.limit) params.append('limit', query.limit);

    const queryString = params.toString() ? `?${params.toString()}` : '';
    const isDev = process.env.NODE_ENV === 'development';
    const fetchOptions = isDev
      ? { cache: 'no-store' }
      : { next: { revalidate: 3600 } };

    const res = await fetchWithTimeout(
      `${apiBase}/api/products${queryString}`,
      fetchOptions,
      DEFAULT_READ_TIMEOUT_MS
    );

    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      CIRCUIT_BREAKER.reset();
      const staticList = filterStaticProducts(query);
      const merged = mergeAndDeduplicateProducts(json.data, staticList);
      if (isCatalogueReviewModeActive()) {
        return merged.filter(matchesReviewMode);
      }
      return merged;
    }
  } catch (err) {
    CIRCUIT_BREAKER.trip();
    console.warn('API getProducts fallback to static catalog:', err.message);
  }

  return filterStaticProducts(query);
}

/**
 * Public categories fetcher with product counts
 */
export async function getCategories() {
  const apiBase = getApiBase();

  // If no remote API is configured in production or circuit breaker is tripped, immediately return static categories (0ms)
  if (!apiBase || CIRCUIT_BREAKER.isTripped()) {
    return getStaticCategories();
  }

  try {
    const res = await fetchWithTimeout(
      `${apiBase}/api/categories`,
      { next: { revalidate: 3600 } },
      DEFAULT_READ_TIMEOUT_MS
    );
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        CIRCUIT_BREAKER.reset();
        if (isCatalogueReviewModeActive()) {
          const reviewSlugs = getCatalogueReviewModeSlugs() || [];
          return {
            categories: json.data.map((c) => ({
              ...c,
              productCount: c.productCount !== undefined ? c.productCount : 0,
            })),
            totalProducts: json.totalProducts !== undefined ? json.totalProducts : reviewSlugs.length,
          };
        }
        return {
          categories: json.data,
          totalProducts: json.totalProducts || 0,
        };
      }
    }
    throw new Error(`HTTP ${res.status}`);
  } catch (err) {
    CIRCUIT_BREAKER.trip();
    console.warn('API getCategories fallback:', err.message);
  }

  return getStaticCategories();
}

/**
 * Public single product fetcher
 */
export async function getProductById(id) {
  const apiBase = getApiBase();

  // If no remote API is configured in production or circuit breaker is tripped, immediately return static product (0ms)
  if (!apiBase || CIRCUIT_BREAKER.isTripped()) {
    return getStaticProductById(id);
  }

  try {
    const isDev = process.env.NODE_ENV === 'development';
    const fetchOptions = isDev
      ? { cache: 'no-store' }
      : { next: { revalidate: 3600 } };

    const res = await fetchWithTimeout(
      `${apiBase}/api/products/${encodeURIComponent(id)}`,
      fetchOptions,
      DEFAULT_READ_TIMEOUT_MS
    );
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        CIRCUIT_BREAKER.reset();
        return {
          product: json.data,
          related: isCatalogueReviewModeActive()
            ? (json.related || []).filter(matchesReviewMode)
            : (json.related || []),
        };
      }
    }
    if (res.status === 404) {
      const staticMatch = getStaticProductById(id);
      if (staticMatch) {
        return {
          product: staticMatch.product,
          related: isCatalogueReviewModeActive()
            ? (staticMatch.related || []).filter(matchesReviewMode)
            : (staticMatch.related || []),
        };
      }
      return null;
    }
    throw new Error(`HTTP ${res.status}`);
  } catch (err) {
    CIRCUIT_BREAKER.trip();
    console.warn('API getProductById fallback to static catalog:', err.message);
  }

  const staticMatch = getStaticProductById(id);
  if (staticMatch) {
    return {
      product: staticMatch.product,
      related: isCatalogueReviewModeActive()
        ? (staticMatch.related || []).filter(matchesReviewMode)
        : (staticMatch.related || []),
    };
  }
  return null;
}

/**
 * Public category products fetcher
 */
export async function getProductsByCategory(slug) {
  const apiBase = getApiBase();

  // If no remote API is configured in production or circuit breaker is tripped, immediately return static category products (0ms)
  if (!apiBase || CIRCUIT_BREAKER.isTripped()) {
    return getStaticProductsByCategory(slug);
  }

  try {
    const res = await fetchWithTimeout(
      `${apiBase}/api/products/category/${encodeURIComponent(slug)}`,
      { next: { revalidate: 3600 } },
      DEFAULT_READ_TIMEOUT_MS
    );
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        CIRCUIT_BREAKER.reset();
        const prods = isCatalogueReviewModeActive()
          ? json.data.filter(matchesReviewMode)
          : json.data;
        return {
          category: json.category,
          products: prods,
        };
      }
    }
    throw new Error(`HTTP ${res.status}`);
  } catch (err) {
    CIRCUIT_BREAKER.trip();
    console.warn('API getProductsByCategory fallback:', err.message);
  }

  const staticCat = getStaticProductsByCategory(slug);
  if (isCatalogueReviewModeActive()) {
    return {
      category: staticCat.category,
      products: (staticCat.products || []).filter(matchesReviewMode),
    };
  }
  return staticCat;
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
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/products`,
    {
      method: 'POST',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminUpdateProduct(id, data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/products/${encodeURIComponent(id)}`,
    {
      method: 'PUT',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminDeleteProduct(id, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/products/${encodeURIComponent(id)}`,
    {
      method: 'DELETE',
      headers: authHeaders(token),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminUploadImages(files, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const formData = new FormData();
  for (const file of files) {
    formData.append('images', file);
  }

  const res = await fetchWithTimeout(
    `${apiBase}/api/upload`,
    {
      method: 'POST',
      headers: authHeaders(token, false), // Browser automatically sets multipart boundary
      body: formData,
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminDeleteCloudinaryImage(publicId, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/upload/delete`,
    {
      method: 'POST',
      headers: authHeaders(token),
      body: JSON.stringify({ publicId }),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminGetOrders(token, query = {}) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, data: [], message: 'Backend API is not configured.' };

  try {
    const params = new URLSearchParams(query).toString();
    const res = await fetchWithTimeout(
      `${apiBase}/api/orders${params ? `?${params}` : ''}`,
      {
        headers: authHeaders(token),
        cache: 'no-store',
      },
      DEFAULT_ADMIN_READ_TIMEOUT_MS
    );
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      return { success: false, data: [], message: errJson.message || `HTTP ${res.status}` };
    }
    return await res.json();
  } catch (err) {
    console.warn('[adminGetOrders Error]', err.message);
    return { success: false, data: [], message: err.message };
  }
}

export async function adminCreateOrder(data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/orders`,
    {
      method: 'POST',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminUpdateOrder(id, data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/orders/${encodeURIComponent(id)}`,
    {
      method: 'PUT',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminDeleteOrder(id, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/orders/${encodeURIComponent(id)}`,
    {
      method: 'DELETE',
      headers: authHeaders(token),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminGetShipments(token, query = {}) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, data: [], message: 'Backend API is not configured.' };

  try {
    const params = new URLSearchParams(query).toString();
    const res = await fetchWithTimeout(
      `${apiBase}/api/shipments${params ? `?${params}` : ''}`,
      {
        headers: authHeaders(token),
        cache: 'no-store',
      },
      DEFAULT_ADMIN_READ_TIMEOUT_MS
    );
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      return { success: false, data: [], message: errJson.message || `HTTP ${res.status}` };
    }
    return await res.json();
  } catch (err) {
    console.warn('[adminGetShipments Error]', err.message);
    return { success: false, data: [], message: err.message };
  }
}

export async function adminCreateShipment(data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/shipments`,
    {
      method: 'POST',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminUpdateShipment(id, data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/shipments/${encodeURIComponent(id)}`,
    {
      method: 'PUT',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminDeleteShipment(id, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/shipments/${encodeURIComponent(id)}`,
    {
      method: 'DELETE',
      headers: authHeaders(token),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

/**
 * Category Management API methods
 */
export async function getCategoryBySlug(slugOrId) {
  const apiBase = getApiBase();
  if (!apiBase) {
    const clean = (slugOrId || '').toLowerCase().trim();
    const cat = CATEGORIES_LIST.find((c) => c.id?.toLowerCase() === clean || c.name?.toLowerCase() === clean);
    if (cat) {
      return { success: true, data: { _id: cat.id, name: cat.name, slug: cat.id, description: cat.desc } };
    }
    return { success: false, message: 'Failed to fetch category' };
  }

  try {
    const res = await fetchWithTimeout(
      `${apiBase}/api/categories/${encodeURIComponent(slugOrId)}`,
      { next: { revalidate: 3600 } },
      DEFAULT_READ_TIMEOUT_MS
    );
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('API getCategoryBySlug fallback:', err.message);
  }
  return { success: false, message: 'Failed to fetch category' };
}

export async function adminCreateCategory(data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/categories`,
    {
      method: 'POST',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminUpdateCategory(id, data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/categories/${encodeURIComponent(id)}`,
    {
      method: 'PUT',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminDeleteCategory(id, token, force = false) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/categories/${encodeURIComponent(id)}${force ? '?force=true' : ''}`,
    {
      method: 'DELETE',
      headers: authHeaders(token),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

/**
 * Submits a customer inquiry or compressor quote request to the backend.
 * Handles both plain JSON payloads and multipart/form-data with nameplate photo.
 */
export async function submitInquiry(data, photoFile = null) {
  const apiBase = getApiBase();
  if (!apiBase) {
    throw new Error(
      'Online inquiry registration is temporarily unavailable. Please contact our Mumbai technical desk directly via phone (+91 99209 06508) or WhatsApp.'
    );
  }

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

    const res = await fetchWithTimeout(
      `${apiBase}/api/inquiries`,
      {
        method: 'POST',
        headers,
        body,
      },
      DEFAULT_MUTATION_TIMEOUT_MS
    );

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

/**
 * Admin Customer Management
 */
export async function adminGetCustomers(token, query = {}) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, data: [], message: 'Backend API is not configured.' };

  try {
    const params = new URLSearchParams(query).toString();
    const res = await fetchWithTimeout(
      `${apiBase}/api/customers${params ? `?${params}` : ''}`,
      {
        headers: authHeaders(token),
        cache: 'no-store',
      },
      DEFAULT_ADMIN_READ_TIMEOUT_MS
    );
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      return { success: false, data: [], message: errJson.message || `HTTP ${res.status}` };
    }
    return await res.json();
  } catch (err) {
    console.warn('[adminGetCustomers Error]', err.message);
    return { success: false, data: [], message: err.message };
  }
}

/**
 * Admin Analytics
 */
export async function adminGetAnalytics(token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  try {
    const res = await fetchWithTimeout(
      `${apiBase}/api/analytics`,
      {
        headers: authHeaders(token),
        cache: 'no-store',
      },
      DEFAULT_ADMIN_READ_TIMEOUT_MS
    );
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      return { success: false, message: errJson.message || `HTTP ${res.status}` };
    }
    return await res.json();
  } catch (err) {
    console.warn('[adminGetAnalytics Error]', err.message);
    return { success: false, message: err.message };
  }
}

/**
 * Admin Settings
 */
export async function adminGetSettings(token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  try {
    const res = await fetchWithTimeout(
      `${apiBase}/api/settings`,
      {
        headers: authHeaders(token),
        cache: 'no-store',
      },
      DEFAULT_ADMIN_READ_TIMEOUT_MS
    );
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      return { success: false, message: errJson.message || `HTTP ${res.status}` };
    }
    return await res.json();
  } catch (err) {
    console.warn('[adminGetSettings Error]', err.message);
    return { success: false, message: err.message };
  }
}

export async function adminUpdateSettings(data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/settings`,
    {
      method: 'PUT',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

/**
 * Admin Profile & Password Update
 */
export async function adminUpdatePassword(data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/auth/update-password`,
    {
      method: 'PUT',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

export async function adminUpdateProfile(data, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/auth/profile`,
    {
      method: 'PUT',
      headers: authHeaders(token),
      body: JSON.stringify(data),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

/**
 * Admin Inquiries
 */
export async function adminGetInquiries(token, query = {}) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, data: [] };

  try {
    const params = new URLSearchParams(query).toString();
    const res = await fetchWithTimeout(
      `${apiBase}/api/inquiries${params ? `?${params}` : ''}`,
      {
        headers: authHeaders(token),
        cache: 'no-store',
      },
      DEFAULT_ADMIN_READ_TIMEOUT_MS
    );
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      return { success: false, data: [], message: errJson.message || `HTTP ${res.status}` };
    }
    return await res.json();
  } catch (err) {
    console.warn('[adminGetInquiries Error]', err.message);
    return { success: false, data: [], message: err.message };
  }
}

export async function adminUpdateInquiryStatus(id, status, token) {
  const apiBase = getApiBase();
  if (!apiBase) return { success: false, message: 'Backend API is not configured.' };

  const res = await fetchWithTimeout(
    `${apiBase}/api/inquiries/${encodeURIComponent(id)}`,
    {
      method: 'PATCH',
      headers: authHeaders(token),
      body: JSON.stringify({ status }),
    },
    DEFAULT_MUTATION_TIMEOUT_MS
  );
  return res.json();
}

