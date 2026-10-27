'use client';

import React, { useState, useMemo } from 'react';
import {
  FolderTree,
  Plus,
  Search,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Box,
  Layers,
  ArrowUpDown,
  X
} from 'lucide-react';
import {
  adminCreateCategory,
  adminUpdateCategory,
  adminDeleteCategory,
} from '@/lib/api';

export default function CategoryManagementSection({
  categories = [],
  token,
  onRefresh,
  notify,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all, active, inactive
  const [submitting, setSubmitting] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    slug: '',
    description: '',
    isActive: true,
    sortOrder: 0,
  });

  // Delete safety modal state
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Filtered categories
  const filteredCategories = useMemo(() => {
    return categories.filter((cat) => {
      const matchesSearch =
        cat.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.slug?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description?.toLowerCase().includes(searchTerm.toLowerCase());

      const isActive = cat.isActive !== false;
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' && isActive) ||
        (statusFilter === 'inactive' && !isActive);

      return matchesSearch && matchesStatus;
    });
  }, [categories, searchTerm, statusFilter]);

  // Open add modal
  const handleOpenAdd = () => {
    setEditingCategory(null);
    setCategoryForm({
      name: '',
      slug: '',
      description: '',
      isActive: true,
      sortOrder: (categories.length || 0) + 1,
    });
    setIsModalOpen(true);
  };

  // Open edit modal
  const handleOpenEdit = (cat) => {
    setEditingCategory(cat);
    setCategoryForm({
      name: cat.name || '',
      slug: cat.slug || '',
      description: cat.description || '',
      isActive: cat.isActive !== false,
      sortOrder: cat.sortOrder !== undefined ? cat.sortOrder : 0,
    });
    setIsModalOpen(true);
  };

  // Auto-slug generator on name input if not editing existing custom slug
  const handleNameChange = (e) => {
    const name = e.target.value;
    setCategoryForm((prev) => {
      const shouldAutoSlug = !editingCategory || prev.slug === '';
      const autoSlug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      return {
        ...prev,
        name,
        slug: shouldAutoSlug ? autoSlug : prev.slug,
      };
    });
  };

  // Save (Create or Update)
  const handleSaveCategory = async (e) => {
    e.preventDefault();

    if (!categoryForm.name.trim()) {
      notify('Category name is required', 'error');
      return;
    }

    // Duplicate check on client before submitting
    const trimmedName = categoryForm.name.trim().toLowerCase();
    const duplicateName = categories.find(
      (c) =>
        c.name.trim().toLowerCase() === trimmedName &&
        (!editingCategory || (c._id !== editingCategory._id && c.id !== editingCategory.id))
    );
    if (duplicateName) {
      notify('A category with this name already exists', 'error');
      return;
    }

    setSubmitting(true);
    try {
      if (editingCategory) {
        const id = editingCategory._id || editingCategory.id || editingCategory.slug;
        const res = await adminUpdateCategory(id, categoryForm, token);
        if (res.success) {
          notify(`Category "${categoryForm.name}" updated successfully.`);
          setIsModalOpen(false);
          onRefresh();
        } else {
          notify(res.message || 'Failed to update category', 'error');
        }
      } else {
        const res = await adminCreateCategory(categoryForm, token);
        if (res.success) {
          notify(`Category "${categoryForm.name}" created successfully.`);
          setIsModalOpen(false);
          onRefresh();
        } else {
          notify(res.message || 'Failed to create category', 'error');
        }
      }
    } catch (err) {
      notify(err.message || 'An unexpected error occurred', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // Quick toggle active/inactive status
  const handleToggleStatus = async (cat) => {
    const id = cat._id || cat.id || cat.slug;
    const currentActive = cat.isActive !== false;
    const newStatus = !currentActive;

    try {
      const res = await adminUpdateCategory(id, { isActive: newStatus }, token);
      if (res.success) {
        notify(`Category "${cat.name}" is now ${newStatus ? 'Active' : 'Inactive'}.`);
        onRefresh();
      } else {
        notify(res.message || 'Failed to change category status', 'error');
      }
    } catch (err) {
      notify(err.message || 'Error updating status', 'error');
    }
  };

  // Delete category
  const handleDeleteConfirm = async () => {
    if (!deleteConfirm) return;
    setSubmitting(true);
    try {
      const id = deleteConfirm._id || deleteConfirm.id || deleteConfirm.slug;
      const res = await adminDeleteCategory(id, token);
      if (res.success) {
        notify(res.message || `Category "${deleteConfirm.name}" deleted successfully.`);
        setDeleteConfirm(null);
        onRefresh();
      } else {
        notify(res.message || 'Failed to delete category', 'error');
      }
    } catch (err) {
      notify(err.message || 'Error deleting category', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <FolderTree className="text-[#1D6FA3]" size={28} />
            Categories Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage product categories, monitor catalog dependencies, and control visibility.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onRefresh}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-xs transition-all h-10"
            title="Refresh categories"
          >
            <RefreshCw size={16} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            type="button"
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#1D6FA3] hover:bg-[#155d8a] rounded-xl shadow-xs transition-all h-10"
          >
            <Plus size={18} />
            <span>Add Category</span>
          </button>
        </div>
      </div>

      {/* Stats Quick Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1D6FA3] flex items-center justify-center shrink-0">
            <Layers size={22} />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 block uppercase tracking-wider">Total Categories</span>
            <span className="text-xl font-bold text-slate-900 mt-0.5 block">{categories.length}</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 size={22} />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 block uppercase tracking-wider">Active Categories</span>
            <span className="text-xl font-bold text-slate-900 mt-0.5 block">
              {categories.filter((c) => c.isActive !== false).length}
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Box size={22} />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 block uppercase tracking-wider">Assigned Products</span>
            <span className="text-xl font-bold text-slate-900 mt-0.5 block">
              {categories.reduce((acc, c) => acc + (c.productCount || 0), 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search category name, slug, description..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-800 placeholder:text-slate-400 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-medium text-slate-500 hidden sm:inline">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] text-slate-700 font-medium"
          >
            <option value="all">All Statuses ({categories.length})</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>
      </div>

      {/* Category Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-100 text-xs uppercase font-semibold text-slate-500 tracking-wider">
              <tr>
                <th className="px-6 py-4">Category Name</th>
                <th className="px-6 py-4">Slug Identifier</th>
                <th className="px-6 py-4 text-center">Product Count</th>
                <th className="px-6 py-4 text-center">Order</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                      <FolderTree size={36} className="text-slate-300 mb-2" />
                      <p className="text-base font-semibold text-slate-800">No categories found</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {searchTerm
                          ? `No categories match "${searchTerm}". Clear search to view all.`
                          : 'No categories currently registered in the database.'}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredCategories.map((cat) => {
                  const isActive = cat.isActive !== false;
                  const hasProducts = (cat.productCount || 0) > 0;

                  return (
                    <tr key={cat._id || cat.id || cat.slug} className="hover:bg-slate-50/75 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">{cat.name}</div>
                        {cat.description && (
                          <div className="text-xs text-slate-400 mt-0.5 line-clamp-1 max-w-md">
                            {cat.description}
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-4 font-mono text-xs text-slate-500">
                        <span className="px-2 py-1 bg-slate-100 rounded-md">
                          {cat.slug || cat.name?.toLowerCase().replace(/\s+/g, '-')}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                            hasProducts
                              ? 'bg-blue-50 text-[#1D6FA3]'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <Box size={12} />
                          {cat.productCount || 0}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center font-mono text-xs text-slate-600">
                        {cat.sortOrder ?? '-'}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(cat)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                            isActive
                              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                          title={`Click to mark ${isActive ? 'Inactive' : 'Active'}`}
                        >
                          {isActive ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                          <span>{isActive ? 'Active' : 'Inactive'}</span>
                        </button>
                      </td>

                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(cat)}
                          className="p-1.5 text-slate-600 hover:text-[#1D6FA3] hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit Category"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteConfirm(cat)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Category"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FolderTree className="text-[#1D6FA3]" size={20} />
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Category Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={categoryForm.name}
                  onChange={handleNameChange}
                  placeholder="e.g. Inverter Scroll Compressors"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  URL Slug Identifier
                </label>
                <input
                  type="text"
                  value={categoryForm.slug}
                  onChange={(e) =>
                    setCategoryForm((prev) => ({
                      ...prev,
                      slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, '-'),
                    }))
                  }
                  placeholder="e.g. inverter-scroll-compressors"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white font-mono text-slate-800"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Auto-generated from name. Must be lowercase alphanumeric with hyphens.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={categoryForm.description}
                  onChange={(e) => setCategoryForm((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description for catalogue display and technical reference..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={categoryForm.sortOrder}
                    onChange={(e) =>
                      setCategoryForm((prev) => ({
                        ...prev,
                        sortOrder: parseInt(e.target.value, 10) || 0,
                      }))
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Category Status
                  </label>
                  <div className="flex items-center gap-3 pt-2">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={categoryForm.isActive}
                        onChange={(e) =>
                          setCategoryForm((prev) => ({ ...prev, isActive: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1D6FA3]"></div>
                      <span className="ml-2 text-xs font-semibold text-slate-700">
                        {categoryForm.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={submitting}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 text-sm font-semibold text-white bg-[#1D6FA3] hover:bg-[#155d8a] rounded-xl shadow-xs transition-colors flex items-center gap-2"
                >
                  {submitting && <RefreshCw size={14} className="animate-spin" />}
                  <span>{editingCategory ? 'Save Changes' : 'Create Category'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Safety Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 w-full max-w-md p-6 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center gap-3 text-red-600 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Confirm Category Deletion</h3>
            </div>

            <p className="text-sm text-slate-600 mb-4">
              Are you sure you want to delete category{' '}
              <strong className="text-slate-900">"{deleteConfirm.name}"</strong>?
            </p>

            {(deleteConfirm.productCount || 0) > 0 ? (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl mb-4 text-xs text-amber-800 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <AlertTriangle size={14} /> Dependency Warning
                </p>
                <p>
                  This category currently has{' '}
                  <span className="font-bold">{deleteConfirm.productCount} product(s)</span> assigned to it.
                  The server prevents deleting categories that contain active products to protect your catalog
                  integrity. Please reassign the products first.
                </p>
              </div>
            ) : (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl mb-4 text-xs text-slate-600">
                Safe to delete: No products are currently assigned to this category.
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirm(null)}
                disabled={submitting}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                disabled={submitting || (deleteConfirm.productCount || 0) > 0}
                className={`px-4 py-2 text-sm font-semibold text-white rounded-xl shadow-xs transition-colors flex items-center gap-2 ${
                  (deleteConfirm.productCount || 0) > 0
                    ? 'bg-red-300 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {submitting && <RefreshCw size={14} className="animate-spin" />}
                <span>Delete Category</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
