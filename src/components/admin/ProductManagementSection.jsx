'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  UploadCloud,
  X,
  Star,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Image as ImageIcon,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Tag,
  DollarSign,
} from 'lucide-react';
import {
  adminCreateProduct,
  adminUpdateProduct,
  adminDeleteProduct,
  adminUploadImages,
  adminCreateCategory,
  adminUpdateCategory,
  adminDeleteCategory,
  resolveImageUrl,
} from '@/lib/api';

const OFFICIAL_CATEGORIES = [
  'AC Compressor',
  'Scroll Compressor',
  'Refrigeration Compressors',
  'Copeland Scroll Compressor',
  'Air Compressor',
  'Rotary Compressor',
  'Air Conditioner',
  'Danfoss Scroll Compressor',
  'Air Conditioning Compressors',
  'Copeland Compressor',
  'Screw Compressor',
  'AC AMC Service',
  'VRF System',
  'Relays',
  'Air Conditioner Installation Service',
  'Air Conditioner Motor',
  'Air Conditioner Maintenance Service',
  'Rotary And Refrigerator Compressor',
  'Emerson Scroll Compressor',
  'Daikin Compressor',
  'Air Conditioner Compressor',
  '3D Bed Sheet',
  'Pump And Valve',
  'AACSR Conductor',
  'New Items',
];

const COMMON_BRANDS = [
  'Copeland',
  'Daikin',
  'LG',
  'Danfoss',
  'Carrier',
  'Hitachi',
  'Mitsubishi',
  'Bitzer',
  'Panasonic',
  'Tecumseh',
  'Emerson',
  'Voltas',
];

const AVAILABILITY_STATUSES = [
  'IN STOCK',
  'OUT OF STOCK',
  'MADE TO ORDER',
  'REFURBISHMENT IN PROGRESS',
];

export default function ProductManagementSection({
  products = [],
  categories = [],
  token = '',
  onRefresh,
  notify,
}) {
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Product Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);

  // Delete Product Confirmation Modal State
  const [deleteConfirm, setDeleteConfirm] = useState(null); // { id, name, code }

  // Category Management State
  const [categoryViewMode, setCategoryViewMode] = useState('grid'); // 'grid' | 'table'
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categorySubmitting, setCategorySubmitting] = useState(false);
  const [categoryDeleteConfirm, setCategoryDeleteConfirm] = useState(null);
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    slug: '',
    description: '',
    sortOrder: 1,
  });

  // Dynamic official category list from API categories prop, with fallback
  const officialCategoryList = useMemo(() => {
    if (Array.isArray(categories) && categories.length > 0) {
      return categories;
    }
    return OFFICIAL_CATEGORIES.map((name, i) => ({
      _id: `fallback-${i}`,
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      sortOrder: i + 1,
      description: '',
      productCount: 0,
    }));
  }, [categories]);

  // Product Form State
  const initialFormState = {
    name: '',
    category: 'AC Compressor',
    brand: 'Copeland',
    modelNumber: '',
    code: '',
    price: '',
    shortDescription: '',
    description: '',
    specifications: [
      { key: 'Capacity', value: '' },
      { key: 'Voltage', value: '' },
      { key: 'Refrigerant', value: '' },
    ],
    images: [], // array of { url, publicId }
    featured: false,
    inStock: true,
    status: 'Active',
    availability: 'IN STOCK',
    type: 'Hermetic Scroll',
    condition: 'Refurbished & Pressure Tested',
  };

  const [form, setForm] = useState(initialFormState);
  const [customImageUrl, setCustomImageUrl] = useState('');

  // Extract Category Counts from products + categories API
  const categoryCounts = useMemo(() => {
    const counts = {};
    officialCategoryList.forEach((cat) => {
      counts[cat.name] = cat.productCount !== undefined ? cat.productCount : 0;
    });

    products.forEach((p) => {
      const pCat = p.category || '';
      const matched = officialCategoryList.find(
        (c) =>
          c.name.toLowerCase() === pCat.toLowerCase() ||
          c.name.toLowerCase().replace(/[- ]/g, '') === pCat.toLowerCase().replace(/[- ]/g, '')
      );
      if (matched && counts[matched.name] === undefined) {
        counts[matched.name] = (counts[matched.name] || 0) + 1;
      }
    });

    return counts;
  }, [products, officialCategoryList]);

  // Category CRUD Handlers
  const openAddCategory = () => {
    setEditingCategory(null);
    setCategoryForm({
      name: '',
      slug: '',
      description: '',
      sortOrder: officialCategoryList.length + 1,
    });
    setIsCategoryModalOpen(true);
  };

  const openEditCategory = (cat, e) => {
    if (e) e.stopPropagation();
    setEditingCategory(cat);
    setCategoryForm({
      name: cat.name || '',
      slug: cat.slug || '',
      description: cat.description || '',
      sortOrder: cat.sortOrder !== undefined ? cat.sortOrder : 1,
    });
    setIsCategoryModalOpen(true);
  };

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    if (!categoryForm.name.trim()) {
      notify('Category name is required', 'error');
      return;
    }
    setCategorySubmitting(true);
    try {
      if (editingCategory && editingCategory._id && !editingCategory._id.startsWith('fallback-')) {
        const res = await adminUpdateCategory(editingCategory._id, categoryForm, token);
        if (res.success) {
          notify(`Category "${categoryForm.name}" updated successfully.`);
          setIsCategoryModalOpen(false);
          if (onRefresh) onRefresh();
        } else {
          notify(res.message || 'Failed to update category', 'error');
        }
      } else {
        const res = await adminCreateCategory(categoryForm, token);
        if (res.success) {
          notify(`Category "${categoryForm.name}" created successfully.`);
          setIsCategoryModalOpen(false);
          if (onRefresh) onRefresh();
        } else {
          notify(res.message || 'Failed to create category', 'error');
        }
      }
    } catch (err) {
      notify('Error: ' + err.message, 'error');
    } finally {
      setCategorySubmitting(false);
    }
  };

  const confirmDeleteCategory = (cat, e) => {
    if (e) e.stopPropagation();
    setCategoryDeleteConfirm(cat);
  };

  const handleExecuteDeleteCategory = async () => {
    if (!categoryDeleteConfirm) return;
    setCategorySubmitting(true);
    try {
      const res = await adminDeleteCategory(
        categoryDeleteConfirm._id || categoryDeleteConfirm.slug,
        token
      );
      if (res.success) {
        notify(`Category "${categoryDeleteConfirm.name}" deleted successfully.`);
        setCategoryDeleteConfirm(null);
        if (onRefresh) onRefresh();
      } else {
        notify(res.message || 'Failed to delete category', 'error');
      }
    } catch (err) {
      notify('Error: ' + err.message, 'error');
    } finally {
      setCategorySubmitting(false);
    }
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const s = searchTerm.trim().toLowerCase();
      const matchesSearch =
        s === '' ||
        p.name?.toLowerCase().includes(s) ||
        p.code?.toLowerCase().includes(s) ||
        p.modelNumber?.toLowerCase().includes(s) ||
        p.brand?.toLowerCase().includes(s) ||
        p.category?.toLowerCase().includes(s);

      const matchesCat =
        selectedCategory === 'all' ||
        p.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        p.category?.toLowerCase().replace(/[- ]/g, '') === selectedCategory.toLowerCase().replace(/[- ]/g, '');

      const matchesStatus =
        statusFilter === 'all' ||
        (p.status ? p.status.toLowerCase() === statusFilter.toLowerCase() : statusFilter === 'active');

      const matchesStock =
        stockFilter === 'all' ||
        (stockFilter === 'in_stock' ? p.inStock !== false && p.availability !== 'OUT OF STOCK' : p.inStock === false || p.availability === 'OUT OF STOCK');

      return matchesSearch && matchesCat && matchesStatus && matchesStock;
    });
  }, [products, searchTerm, selectedCategory, statusFilter, stockFilter]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, statusFilter, stockFilter]);

  // Open Add Modal
  const openAddModal = () => {
    setEditingProduct(null);
    setForm(initialFormState);
    setCustomImageUrl('');
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const openEditModal = (prod) => {
    setEditingProduct(prod);

    // Normalize specifications
    let specs = [];
    if (Array.isArray(prod.specifications) && prod.specifications.length > 0) {
      specs = prod.specifications.map((s) => ({ key: s.key || '', value: s.value || '' }));
    } else if (prod.specs && typeof prod.specs === 'object') {
      for (const [k, v] of Object.entries(prod.specs)) {
        if (typeof v === 'object' && v !== null) {
          for (const [subK, subV] of Object.entries(v)) {
            specs.push({ key: subK, value: String(subV) });
          }
        } else if (v) {
          specs.push({ key: k, value: String(v) });
        }
      }
    }
    if (specs.length === 0) {
      if (prod.voltage) specs.push({ key: 'Voltage', value: prod.voltage });
      if (prod.displacement) specs.push({ key: 'Displacement', value: prod.displacement });
      if (prod.refrigerant) specs.push({ key: 'Refrigerant', value: prod.refrigerant });
      if (prod.application) specs.push({ key: 'Application', value: prod.application });
    }
    if (specs.length === 0) {
      specs = [{ key: 'Capacity', value: '' }, { key: 'Voltage', value: '' }];
    }

    // Normalize images into { url, publicId }
    const rawImages = Array.isArray(prod.images) ? prod.images : [];
    const formattedImages = rawImages.map((img) => {
      if (typeof img === 'string') {
        return { url: img, publicId: '' };
      }
      return { url: img?.url || '', publicId: img?.publicId || '' };
    }).filter((img) => img.url);

    setForm({
      name: prod.name || '',
      category: prod.category || 'AC Compressor',
      brand: prod.brand || 'Copeland',
      modelNumber: prod.modelNumber || prod.code || '',
      code: prod.code || prod.modelNumber || '',
      price: prod.price !== undefined && prod.price !== null ? prod.price : '',
      shortDescription: prod.shortDescription || prod.tagline || '',
      description: prod.description || '',
      specifications: specs,
      images: formattedImages,
      featured: Boolean(prod.featured),
      inStock: prod.inStock !== undefined ? Boolean(prod.inStock) : true,
      status: prod.status || 'Active',
      availability: prod.availability || 'IN STOCK',
      type: prod.type || 'Hermetic Scroll',
      condition: prod.condition || 'Refurbished & Pressure Tested',
    });
    setCustomImageUrl('');
    setIsModalOpen(true);
  };

  // Image handlers
  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Validate size (< 10MB) and type
    for (const f of files) {
      if (!f.type.startsWith('image/')) {
        notify('Only image files (JPG, PNG, WebP) are allowed.', 'error');
        return;
      }
      if (f.size > 10 * 1024 * 1024) {
        notify(`File ${f.name} exceeds 10MB limit.`, 'error');
        return;
      }
    }

    setUploadingImages(true);
    try {
      const res = await adminUploadImages(files, token);
      if (res.success && Array.isArray(res.images)) {
        setForm((prev) => ({
          ...prev,
          images: [...prev.images, ...res.images],
        }));
        notify(`${res.images.length} image(s) uploaded to Cloudinary successfully.`);
      } else if (res.success && Array.isArray(res.urls)) {
        // Fallback if older response format
        const newImgs = res.urls.map((u) => ({ url: u, publicId: '' }));
        setForm((prev) => ({
          ...prev,
          images: [...prev.images, ...newImgs],
        }));
        notify(`${res.urls.length} image(s) uploaded.`);
      } else {
        notify(res.message || 'Image upload failed', 'error');
      }
    } catch (err) {
      notify('Upload failed: ' + err.message, 'error');
    } finally {
      setUploadingImages(false);
      e.target.value = '';
    }
  };

  const handleAddImageUrl = () => {
    if (!customImageUrl.trim()) return;
    setForm((prev) => ({
      ...prev,
      images: [...prev.images, { url: customImageUrl.trim(), publicId: '' }],
    }));
    setCustomImageUrl('');
  };

  const handleRemoveImage = (index) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSetPrimaryImage = (index) => {
    if (index === 0) return;
    setForm((prev) => {
      const imgs = [...prev.images];
      const [chosen] = imgs.splice(index, 1);
      return { ...prev, images: [chosen, ...imgs] };
    });
  };

  // Specification handlers
  const handleAddSpecification = (key = '', value = '') => {
    setForm((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { key, value }],
    }));
  };

  const handleUpdateSpecification = (index, field, value) => {
    setForm((prev) => {
      const updated = [...prev.specifications];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, specifications: updated };
    });
  };

  const handleRemoveSpecification = (index) => {
    setForm((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index),
    }));
  };

  // Save product (Add or Edit)
  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) {
      notify('Product name is required.', 'error');
      return;
    }
    if (!form.category.trim()) {
      notify('Category is required.', 'error');
      return;
    }
    if (!form.brand.trim()) {
      notify('Brand is required.', 'error');
      return;
    }

    if (form.price !== '' && form.price !== null) {
      const p = Number(form.price);
      if (isNaN(p) || p < 0) {
        notify('Price must be a valid positive number.', 'error');
        return;
      }
    }

    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        category: form.category.trim(),
        brand: form.brand.trim(),
        modelNumber: (form.modelNumber || form.code || form.name.split(' ').slice(0, 3).join('-')).trim(),
        code: (form.code || form.modelNumber || form.name.split(' ').slice(0, 3).join('-')).trim(),
        price: form.price === '' ? 0 : Number(form.price),
        shortDescription: form.shortDescription.trim(),
        tagline: form.shortDescription.trim(),
        description: form.description.trim(),
        specifications: form.specifications.filter((s) => s.key && s.key.trim() !== ''),
        images: form.images,
        featured: form.featured,
        inStock: form.inStock,
        status: form.status,
        availability: form.inStock ? 'IN STOCK' : 'OUT OF STOCK',
        type: form.type || 'Hermetic Scroll',
        condition: form.condition || 'Refurbished & Pressure Tested',
      };

      if (editingProduct) {
        const idToUpdate = editingProduct.id || editingProduct._id;
        const res = await adminUpdateProduct(idToUpdate, payload, token);
        if (res.success) {
          notify(`Product "${payload.name}" updated successfully.`);
          setIsModalOpen(false);
          if (onRefresh) onRefresh();
        } else {
          notify(res.message || 'Error updating product', 'error');
        }
      } else {
        const res = await adminCreateProduct(payload, token);
        if (res.success) {
          notify(`Product "${payload.name}" created successfully.`);
          setIsModalOpen(false);
          if (onRefresh) onRefresh();
        } else {
          notify(res.message || 'Error creating product', 'error');
        }
      }
    } catch (err) {
      notify('Operation failed: ' + err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // Delete product confirmation
  const handleConfirmDelete = async () => {
    if (!deleteConfirm) return;
    try {
      const res = await adminDeleteProduct(deleteConfirm.id, token);
      if (res.success) {
        notify(`Product "${deleteConfirm.name}" and associated images deleted successfully.`);
        setDeleteConfirm(null);
        if (onRefresh) onRefresh();
      } else {
        notify(res.message || 'Failed to delete product', 'error');
      }
    } catch (err) {
      notify('Delete error: ' + err.message, 'error');
    }
  };

  return (
    <div className="space-y-6">
      {/* ── 1. HEADER & ACTIONS BAR ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display">
              PRODUCT MANAGEMENT
            </h1>
            <span className="font-mono text-xs font-bold text-[#1D6FA3] bg-[#1D6FA3]/10 px-2.5 py-0.5 rounded-full">
              {products.length} Total
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 font-sans">
            Live catalog control panel. Create, edit, and organize compressors with Cloudinary image storage.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {onRefresh && (
            <button
              type="button"
              onClick={onRefresh}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
              title="Refresh Catalog Data"
            >
              <RefreshCw size={15} />
            </button>
          )}

          <button
            type="button"
            onClick={openAddModal}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1D6FA3] hover:bg-[#15537d] text-white font-semibold text-xs rounded-md shadow-xs min-h-[38px] transition-all cursor-pointer active:scale-[0.99]"
          >
            <Plus size={16} />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* ── 2. DYNAMIC CATEGORY COUNTS & MANAGEMENT (Requirements 8, 18 & User Request) ── */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Layers size={14} className="text-[#1D6FA3]" />
              <span>CATEGORIES &amp; REAL INVENTORY BREAKDOWN ({officialCategoryList.length})</span>
            </span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            {/* View Mode Toggle */}
            <div className="inline-flex rounded-md border border-slate-200 bg-slate-50 p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setCategoryViewMode('grid')}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                  categoryViewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Cards View
              </button>
              <button
                type="button"
                onClick={() => setCategoryViewMode('table')}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                  categoryViewMode === 'table'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Manage Categories ({officialCategoryList.length})
              </button>
            </div>

            {/* + Add Category Button */}
            <button
              type="button"
              onClick={openAddCategory}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A192F] hover:bg-[#162a4a] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
            >
              <Plus size={13} />
              <span>Add Category</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Cards View */}
        {categoryViewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-h-[380px] overflow-y-auto pr-1">
            {officialCategoryList.map((cat) => {
              const catName = cat.name;
              const count = categoryCounts[catName] !== undefined ? categoryCounts[catName] : (cat.productCount || 0);
              const isSelected = selectedCategory.toLowerCase() === catName.toLowerCase();
              return (
                <div
                  key={cat.slug || catName}
                  className={`p-2.5 rounded-md text-left transition-all border flex flex-col justify-between group relative cursor-pointer ${
                    isSelected
                      ? 'bg-[#1D6FA3] text-white border-[#1D6FA3] shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                  }`}
                  onClick={() => setSelectedCategory(isSelected ? 'all' : catName)}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className={`text-[11px] font-semibold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                      {catName}
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                      <button
                        type="button"
                        title="Edit category"
                        onClick={(e) => openEditCategory(cat, e)}
                        className={`p-0.5 rounded hover:bg-black/10 ${isSelected ? 'text-white' : 'text-slate-600'}`}
                      >
                        <Edit2 size={11} />
                      </button>
                      <button
                        type="button"
                        title="Delete category"
                        onClick={(e) => confirmDeleteCategory(cat, e)}
                        className={`p-0.5 rounded hover:bg-red-500 hover:text-white ${isSelected ? 'text-white' : 'text-red-500'}`}
                      >
                        <Trash2 size={11} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className={`font-mono text-sm font-extrabold ${isSelected ? 'text-white' : 'text-[#1D6FA3]'}`}>
                      {count} <span className="text-[10px] font-normal opacity-80">unit(s)</span>
                    </span>
                    <span className={`text-[9px] font-mono ${isSelected ? 'text-white/70' : 'text-slate-400'}`}>
                      #{cat.sortOrder || '-'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Detailed Category Management Table (Requirement 8) */}
        {categoryViewMode === 'table' && (
          <div className="overflow-x-auto border border-slate-200 rounded-md">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-mono text-[10px] border-b border-slate-200 tracking-wider">
                  <th className="py-2.5 px-3 w-12 text-center">#</th>
                  <th className="py-2.5 px-3">Category Name</th>
                  <th className="py-2.5 px-3">Slug</th>
                  <th className="py-2.5 px-3">Description</th>
                  <th className="py-2.5 px-3 text-center">Product Count</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {officialCategoryList.map((cat, idx) => {
                  const count = categoryCounts[cat.name] !== undefined ? categoryCounts[cat.name] : (cat.productCount || 0);
                  return (
                    <tr key={cat.slug || cat.name} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-3 text-center font-mono text-slate-400 font-semibold">
                        {cat.sortOrder || idx + 1}
                      </td>
                      <td className="py-2 px-3 font-semibold text-slate-900">
                        {cat.name}
                      </td>
                      <td className="py-2 px-3 font-mono text-slate-500 text-[11px]">
                        {cat.slug}
                      </td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] max-w-xs truncate">
                        {cat.description || '—'}
                      </td>
                      <td className="py-2 px-3 text-center">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[11px] font-bold ${
                          count > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {count}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                          Active
                        </span>
                      </td>
                      <td className="py-2 px-3 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => openEditCategory(cat)}
                          className="px-2 py-1 text-[11px] font-semibold text-[#1D6FA3] bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Edit2 size={11} />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => confirmDeleteCategory(cat)}
                          className="px-2 py-1 text-[11px] font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded border border-red-200 inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 size={11} />
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── 3. SEARCH & ADVANCED FILTERS TOOLBAR ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs">
        {/* Search Input */}
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name, model, brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3] min-h-[38px]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* Category Dropdown */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3] min-h-[38px]"
          >
            <option value="all">All Categories ({products.length})</option>
            {officialCategoryList.map((c) => (
              <option key={c.slug || c.name} value={c.name}>
                {c.name} ({categoryCounts[c.name] !== undefined ? categoryCounts[c.name] : (c.productCount || 0)})
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3] min-h-[38px]"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Stock Filter */}
        <div>
          <select
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3] min-h-[38px]"
          >
            <option value="all">All Stock States</option>
            <option value="in_stock">In Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* ── 4. PRODUCTS TABLE & LIST ── */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-3">
          <p className="text-sm font-semibold text-slate-700">No products match your criteria.</p>
          <p className="text-xs text-slate-400">Try clearing filters or search term.</p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setStatusFilter('all');
              setStockFilter('all');
            }}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#1D6FA3] border border-[#1D6FA3]/40 rounded hover:bg-[#1D6FA3]/5"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Product Name &amp; Photo</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Brand &amp; Model</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Status &amp; Stock</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedProducts.map((prod) => {
                  const firstImg =
                    Array.isArray(prod.images) && prod.images.length > 0
                      ? prod.images[0]
                      : '/ac_compressor.png';
                  const primaryImgUrl = resolveImageUrl(firstImg);
                  const isActive = prod.status ? prod.status.toLowerCase() === 'active' : true;
                  const inStock = prod.inStock !== false && prod.availability !== 'OUT OF STOCK';

                  return (
                    <tr key={prod._id || prod.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* Name & Photo */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 bg-slate-50 rounded border border-slate-200 shrink-0 flex items-center justify-center p-1">
                            <img
                              src={primaryImgUrl}
                              alt={prod.name}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/ac_compressor.png';
                              }}
                              className="max-h-full max-w-full object-contain"
                            />
                            {Array.isArray(prod.images) && prod.images.length > 1 && (
                              <span className="absolute -top-1 -right-1 bg-slate-800 text-white text-[9px] font-mono font-bold px-1 rounded-full">
                                {prod.images.length}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <span className="font-bold text-slate-900 block max-w-sm truncate text-xs hover:text-[#1D6FA3]">
                              {prod.name}
                            </span>
                            <span className="text-[11px] text-slate-400 block truncate font-mono">
                              Slug: {prod.slug || prod.id}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                          {prod.category}
                        </span>
                      </td>

                      {/* Brand & Model */}
                      <td className="py-3 px-4">
                        <span className="font-bold text-slate-800 block">{prod.brand}</span>
                        <span className="font-mono text-[11px] text-[#1D6FA3] block">
                          {prod.modelNumber || prod.code || '—'}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">
                        {prod.price && Number(prod.price) > 0 ? (
                          <span>₹{Number(prod.price).toLocaleString('en-IN')}</span>
                        ) : (
                          <span className="text-slate-400 font-sans font-normal text-[11px]">Quote upon request</span>
                        )}
                      </td>

                      {/* Status & Stock */}
                      <td className="py-3 px-4 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${
                              isActive ? 'bg-emerald-500' : 'bg-slate-400'
                            }`}
                          />
                          <span className={`text-[11px] font-semibold ${isActive ? 'text-emerald-700' : 'text-slate-500'}`}>
                            {prod.status || 'Active'}
                          </span>
                        </div>
                        <div>
                          <span
                            className={`inline-block px-1.5 py-0.2 rounded text-[10px] font-bold uppercase ${
                              inStock ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'
                            }`}
                          >
                            {inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => openEditModal(prod)}
                            className="p-1.5 text-slate-600 hover:text-[#1D6FA3] hover:bg-slate-100 rounded transition-colors"
                            title="Edit Product"
                          >
                            <Edit2 size={15} />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setDeleteConfirm({
                                id: prod.id || prod._id,
                                name: prod.name,
                                code: prod.modelNumber || prod.code,
                              })
                            }
                            className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards View */}
          <div className="block md:hidden space-y-3">
            {paginatedProducts.map((prod) => {
              const firstImg =
                Array.isArray(prod.images) && prod.images.length > 0
                  ? prod.images[0]
                  : '/ac_compressor.png';
              const primaryImgUrl = resolveImageUrl(firstImg);
              const inStock = prod.inStock !== false && prod.availability !== 'OUT OF STOCK';

              return (
                <div
                  key={prod._id || prod.id}
                  className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-3 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={primaryImgUrl}
                      alt={prod.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/ac_compressor.png';
                      }}
                      className="w-16 h-16 object-contain bg-slate-50 rounded border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] font-bold text-[#1D6FA3] block">
                        {prod.modelNumber || prod.code}
                      </span>
                      <h3 className="font-bold text-slate-900 text-xs leading-snug line-clamp-2">
                        {prod.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        {prod.brand} • {prod.category}
                      </span>
                      {prod.price > 0 && (
                        <span className="font-mono font-bold text-xs text-slate-900 block mt-1">
                          ₹{Number(prod.price).toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {Array.isArray(prod.images) ? prod.images.length : 0} photo(s)
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => openEditModal(prod)}
                        className="p-2 text-slate-600 hover:text-[#1D6FA3] bg-slate-50 rounded border border-slate-200"
                        title="Edit"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setDeleteConfirm({
                            id: prod.id || prod._id,
                            name: prod.name,
                            code: prod.modelNumber || prod.code,
                          })
                        }
                        className="p-2 text-red-600 hover:text-red-700 bg-red-50 rounded border border-red-200"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg border border-slate-200 text-xs text-slate-600">
              <div>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} items
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="p-1.5 border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-40"
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={15} />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`px-2.5 py-1 rounded font-mono font-semibold ${
                      currentPage === idx + 1
                        ? 'bg-[#1D6FA3] text-white'
                        : 'border border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="p-1.5 border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-40"
                  aria-label="Next Page"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 5. ADD / EDIT PRODUCT MODAL (Requirements 9 & 10)                  */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 font-display">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <p className="text-xs text-slate-500 font-sans">
                  {editingProduct
                    ? `Updating ${editingProduct.name}`
                    : 'Fill details below to add compressor to dynamic catalog.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmitProduct} className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {/* Group A: Product Identity */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1">
                  1. Identification &amp; Category
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Copeland Scroll Compressor ZR72KC-TFD"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Category *
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    >
                      {officialCategoryList.map((cat) => (
                        <option key={cat.slug || cat.name} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Brand *
                    </label>
                    <input
                      type="text"
                      required
                      list="brand-options"
                      placeholder="e.g. Copeland, Daikin"
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                    <datalist id="brand-options">
                      {COMMON_BRANDS.map((b) => (
                        <option key={b} value={b} />
                      ))}
                    </datalist>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Model Number / Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ZR72KC-TFD"
                      value={form.modelNumber}
                      onChange={(e) => setForm({ ...form, modelNumber: e.target.value, code: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Price (₹ INR)
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      placeholder="e.g. 10000 (0 for quote)"
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Short Description / Tagline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. High-performance commercial air-conditioning scroll compressor"
                    value={form.shortDescription}
                    onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Full Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Detailed compressor description, suitability for chillers, package units, warranty notes..."
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>
              </div>

              {/* Group B: Specifications (Key/Value pairs) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    2. Specifications ({form.specifications.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => handleAddSpecification('', '')}
                    className="text-xs font-semibold text-[#1D6FA3] hover:underline flex items-center gap-1"
                  >
                    <Plus size={13} />
                    <span>Add Specification</span>
                  </button>
                </div>

                {/* Quick Preset Buttons */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[10px] text-slate-400 self-center mr-1">Quick add:</span>
                  {[
                    { key: 'Capacity', val: '1.5 Ton' },
                    { key: 'Voltage', val: '220-240V' },
                    { key: 'Refrigerant', val: 'R32' },
                    { key: 'Displacement', val: '17.1 m³/h' },
                    { key: 'Phase', val: '3-Phase' },
                  ].map((preset) => (
                    <button
                      key={preset.key}
                      type="button"
                      onClick={() => handleAddSpecification(preset.key, preset.val)}
                      className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                    >
                      + {preset.key}
                    </button>
                  ))}
                </div>

                {/* Specifications Rows */}
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {form.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Key (e.g. Voltage)"
                        value={spec.key}
                        onChange={(e) => handleUpdateSpecification(idx, 'key', e.target.value)}
                        className="w-1/3 px-3 py-1.5 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                      />
                      <input
                        type="text"
                        placeholder="Value (e.g. 380V, 3-Phase)"
                        value={spec.value}
                        onChange={(e) => handleUpdateSpecification(idx, 'value', e.target.value)}
                        className="flex-1 px-3 py-1.5 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveSpecification(idx)}
                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                        title="Remove Specification"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group C: Multi-Image Cloudinary Manager */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1">
                  3. Images ({form.images.length}) — Cloudinary Stored
                </span>

                {/* Thumbnail Preview Grid */}
                {form.images.length === 0 ? (
                  <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded text-center text-xs text-slate-400">
                    No images added yet. Upload files below to store directly in Cloudinary.
                  </div>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 py-1">
                    {form.images.map((imgObj, idx) => {
                      const displayUrl = resolveImageUrl(imgObj);
                      const isPrimary = idx === 0;

                      return (
                        <div
                          key={idx}
                          className={`relative group rounded border bg-slate-50 p-1 flex flex-col items-center justify-center h-24 ${
                            isPrimary ? 'border-[#1D6FA3] ring-2 ring-[#1D6FA3]/30' : 'border-slate-300'
                          }`}
                        >
                          <img
                            src={displayUrl}
                            alt={`Preview ${idx + 1}`}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/ac_compressor.png';
                            }}
                            className="max-h-full max-w-full object-contain"
                          />
                          {isPrimary && (
                            <span className="absolute top-1 left-1 bg-[#1D6FA3] text-white text-[8px] font-bold px-1.5 py-0.2 rounded font-mono shadow-xs">
                              PRIMARY
                            </span>
                          )}

                          {/* Hover action overlay */}
                          <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 transition-opacity rounded">
                            {!isPrimary && (
                              <button
                                type="button"
                                onClick={() => handleSetPrimaryImage(idx)}
                                title="Set as Primary"
                                className="p-1 bg-white text-slate-800 rounded hover:bg-slate-100"
                              >
                                <Star size={13} />
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(idx)}
                              title="Delete Image"
                              className="p-1 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Upload & Add Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Upload to Cloudinary (Multiple Allowed)
                    </label>
                    <label className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-xs font-semibold text-slate-700 cursor-pointer min-h-[38px] transition-colors">
                      <UploadCloud size={16} />
                      <span>{uploadingImages ? 'Uploading...' : 'Choose Image File(s)'}</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        disabled={uploadingImages}
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Or Add Image by URL / Path
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        placeholder="https://... or /ac_compressor.png"
                        value={customImageUrl}
                        onChange={(e) => setCustomImageUrl(e.target.value)}
                        className="flex-1 px-3 py-1.5 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                      />
                      <button
                        type="button"
                        onClick={handleAddImageUrl}
                        className="px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded hover:bg-slate-900"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group D: Options & Status Toggles */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1">
                  4. Status &amp; Visibility
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Status */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Product Status
                    </label>
                    <select
                      value={form.status}
                      onChange={(e) => setForm({ ...form, status: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>

                  {/* Availability */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Availability Tag
                    </label>
                    <select
                      value={form.availability}
                      onChange={(e) => setForm({ ...form, availability: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    >
                      {AVAILABILITY_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* In Stock & Featured Toggles */}
                  <div className="space-y-2 pt-4">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-800">
                      <input
                        type="checkbox"
                        checked={form.inStock}
                        onChange={(e) => setForm({ ...form, inStock: e.target.checked })}
                        className="rounded text-[#1D6FA3] focus:ring-[#1D6FA3]"
                      />
                      <span>In Stock</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-800">
                      <input
                        type="checkbox"
                        checked={form.featured}
                        onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                        className="rounded text-[#1D6FA3] focus:ring-[#1D6FA3]"
                      />
                      <span>Featured Product</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-md text-xs font-semibold text-slate-700 hover:bg-slate-50 min-h-[38px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting || uploadingImages}
                  className="px-6 py-2 bg-[#1D6FA3] hover:bg-[#15537d] text-white text-xs font-bold rounded-md shadow-xs min-h-[38px] disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? 'Saving...' : editingProduct ? 'Save Changes' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 6. DELETE CONFIRMATION MODAL (Requirement 11)                      */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 text-red-600">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>
              <h3 className="font-bold text-base text-slate-900">Confirm Product Deletion</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Are you sure you want to delete <strong className="text-slate-900">{deleteConfirm.name}</strong>?
              {deleteConfirm.code && (
                <span className="block font-mono text-[11px] text-[#1D6FA3] mt-0.5">
                  Model Code: {deleteConfirm.code}
                </span>
              )}
              This action will remove the product document from MongoDB and delete its corresponding image assets from Cloudinary.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 border border-slate-300 rounded text-xs font-semibold text-slate-700 hover:bg-slate-50 min-h-[36px]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold min-h-[36px] shadow-xs cursor-pointer"
              >
                Delete Product &amp; Assets
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 7. CATEGORY ADD/EDIT MODAL (User Request)                          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 bg-[#0A192F] text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">
                  {editingCategory ? 'Edit Category' : 'Add New Category'}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {editingCategory
                    ? `Update details for "${editingCategory.name}"`
                    : 'Create a new dynamic product catalog category'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCategoryModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Screw Compressor"
                  value={categoryForm.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    const autoSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                    setCategoryForm({
                      ...categoryForm,
                      name,
                      slug: !editingCategory ? autoSlug : categoryForm.slug,
                    });
                  }}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Slug (SEO URL) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. screw-compressor"
                    value={categoryForm.slug}
                    onChange={(e) => setCategoryForm({ ...categoryForm, slug: e.target.value.toLowerCase() })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 font-mono focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Sort Order (#)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={categoryForm.sortOrder}
                    onChange={(e) => setCategoryForm({ ...categoryForm, sortOrder: parseInt(e.target.value, 10) || 1 })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 font-mono focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows="3"
                  placeholder="Short description of products under this category..."
                  value={categoryForm.description}
                  onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded text-xs font-semibold text-slate-700 hover:bg-slate-50 min-h-[36px] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={categorySubmitting}
                  className="px-4 py-2 bg-[#1D6FA3] hover:bg-[#165680] text-white rounded text-xs font-bold min-h-[36px] shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  {categorySubmitting ? 'Saving...' : editingCategory ? 'Update Category' : 'Save Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 8. CATEGORY DELETE CONFIRMATION MODAL (User Request)               */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {categoryDeleteConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 text-red-600">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>
              <h3 className="font-bold text-base text-slate-900">Delete Category</h3>
            </div>

            <div className="text-xs text-slate-600 space-y-2">
              <p>
                Are you sure you want to delete category <strong className="text-slate-900">{categoryDeleteConfirm.name}</strong>?
              </p>
              {(categoryCounts[categoryDeleteConfirm.name] || 0) > 0 && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-800 text-[11px] leading-relaxed">
                  <strong>Warning:</strong> This category currently has{' '}
                  <span className="font-bold underline">{categoryCounts[categoryDeleteConfirm.name]} product(s)</span> assigned to it.
                  Please reassign the products to another category before deleting.
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setCategoryDeleteConfirm(null)}
                className="px-4 py-2 border border-slate-300 rounded text-xs font-semibold text-slate-700 hover:bg-slate-50 min-h-[36px] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleExecuteDeleteCategory}
                disabled={categorySubmitting}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold min-h-[36px] shadow-xs disabled:opacity-50 cursor-pointer"
              >
                {categorySubmitting ? 'Deleting...' : 'Delete Category'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
