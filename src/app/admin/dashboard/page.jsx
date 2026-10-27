'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Box, 
  ShoppingCart, 
  Truck, 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  UploadCloud, 
  X, 
  Star, 
  ArrowRight,
  RefreshCw,
  AlertTriangle,
  Users,
  BarChart2
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import {
  getProducts,
  getCategories,
  adminCreateProduct,
  adminUpdateProduct,
  adminDeleteProduct,
  adminUploadImages,
  adminGetOrders,
  adminCreateOrder,
  adminUpdateOrder,
  adminDeleteOrder,
  adminGetShipments,
  adminCreateShipment,
  adminUpdateShipment,
  adminDeleteShipment,
  resolveImageUrl,
} from '@/lib/api';
import ProductManagementSection from '@/components/admin/ProductManagementSection';
import CategoryManagementSection from '@/components/admin/CategoryManagementSection';
import CustomerManagementSection from '@/components/admin/CustomerManagementSection';
import AnalyticsSection from '@/components/admin/AnalyticsSection';
import SettingsSection from '@/components/admin/SettingsSection';
import HelpCenterSection from '@/components/admin/HelpCenterSection';

const CATEGORIES = [
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

const AVAILABILITY_STATUSES = [
  'IN STOCK',
  'OUT OF STOCK',
  'MADE TO ORDER',
  'REFURBISHMENT IN PROGRESS',
];

const ORDER_STATUSES = ['PENDING', 'CONFIRMED', 'PROCESSING', 'COMPLETED', 'CANCELLED'];
const SHIPMENT_STATUSES = ['PROCESSING', 'SHIPPED', 'IN TRANSIT', 'DELIVERED'];

export default function AdminDashboardPage() {
  const { admin } = useAuth();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  // Data states
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [dataErrors, setDataErrors] = useState({ orders: null, shipments: null });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterAvailability, setFilterAvailability] = useState('all');
  const [filterOrderType, setFilterOrderType] = useState('all');
  const [filterShipmentStatus, setFilterShipmentStatus] = useState('all');

  // Product modal states
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    code: '',
    name: '',
    brand: 'Copeland',
    category: 'Scroll Compressors',
    type: 'Hermetic Scroll',
    condition: 'Refurbished & Pressure Tested',
    availability: 'IN STOCK',
    tagline: '',
    description: '',
    voltage: '',
    displacement: '',
    refrigerant: '',
    application: '',
    images: [],
  });
  const [newImageUrl, setNewImageUrl] = useState('');

  // Order modal states
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    orderType: 'OFFLINE',
    productId: '',
    productName: '',
    quantity: 1,
    customerName: '',
    customerCompany: '',
    customerPhone: '',
    customerEmail: '',
    customerCity: 'Mumbai',
    status: 'CONFIRMED',
    notes: '',
  });

  // Shipment modal states
  const [isShipmentModalOpen, setIsShipmentModalOpen] = useState(false);
  const [shipmentForm, setShipmentForm] = useState({
    orderId: '',
    productId: '',
    productName: '',
    quantity: 1,
    shippedFrom: 'Mumbai Central Sourcing Hub, MH',
    shippedTo: '',
    courier: 'Blue Dart Express',
    trackingNumber: '',
    status: 'SHIPPED',
    notes: '',
  });

  // Delete confirmation modal state
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const notify = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('z_cool_token') || '';
    }
    return '';
  };

  // Load all real data from backend
  const loadData = useCallback(async () => {
    setLoading(true);
    setDataErrors({ orders: null, shipments: null });
    const token = getToken();

    try {
      const [prodRes, catRes, ordRes, shpRes] = await Promise.allSettled([
        getProducts(),
        getCategories(),
        token ? adminGetOrders(token) : Promise.resolve({ success: true, data: [] }),
        token ? adminGetShipments(token) : Promise.resolve({ success: true, data: [] }),
      ]);

      if (prodRes.status === 'fulfilled' && Array.isArray(prodRes.value)) {
        setProducts(prodRes.value);
      }

      if (catRes.status === 'fulfilled' && catRes.value && Array.isArray(catRes.value.categories)) {
        setCategories(catRes.value.categories);
      }

      if (ordRes.status === 'fulfilled') {
        const val = ordRes.value;
        if (val && val.success && Array.isArray(val.data)) {
          setOrders(val.data);
        } else if (val && val.success === false) {
          setDataErrors((prev) => ({ ...prev, orders: val.message || 'Failed to load orders from server' }));
        }
      } else {
        setDataErrors((prev) => ({ ...prev, orders: ordRes.reason?.message || 'Orders network error' }));
      }

      if (shpRes.status === 'fulfilled') {
        const val = shpRes.value;
        if (val && val.success && Array.isArray(val.data)) {
          setShipments(val.data);
        } else if (val && val.success === false) {
          setDataErrors((prev) => ({ ...prev, shipments: val.message || 'Failed to load shipments from server' }));
        }
      } else {
        setDataErrors((prev) => ({ ...prev, shipments: shpRes.reason?.message || 'Shipments network error' }));
      }
    } catch (err) {
      notify('Failed to load some admin data: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Derived real metrics
  const totalProducts = products.length;
  const availableProducts = products.filter((p) => p.availability === 'IN STOCK').length;
  const onlineOrdersCount = orders
    .filter((o) => o.orderType === 'ONLINE' && o.status !== 'CANCELLED')
    .reduce((sum, o) => sum + (o.quantity || 1), 0);
  const offlineOrdersCount = orders
    .filter((o) => o.orderType === 'OFFLINE' && o.status !== 'CANCELLED')
    .reduce((sum, o) => sum + (o.quantity || 1), 0);
  const activeShipmentsCount = shipments.filter(
    (s) => s.status === 'PROCESSING' || s.status === 'SHIPPED' || s.status === 'IN TRANSIT'
  ).length;

  // ----------------------------------------------------
  // PRODUCT HANDLERS
  // ----------------------------------------------------
  const openAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      code: '',
      name: '',
      brand: 'Copeland',
      category: 'Scroll Compressors',
      type: 'Hermetic Scroll',
      condition: 'Refurbished & Pressure Tested',
      availability: 'IN STOCK',
      tagline: '',
      description: '',
      voltage: '',
      displacement: '',
      refrigerant: '',
      application: '',
      images: ['/ac_compressor.png'],
    });
    setNewImageUrl('');
    setIsProductModalOpen(true);
  };

  const openEditProduct = (prod) => {
    setEditingProduct(prod);
    setProductForm({
      code: prod.code || '',
      name: prod.name || '',
      brand: prod.brand || 'Copeland',
      category: prod.category || 'Scroll Compressors',
      type: prod.type || 'Hermetic Scroll',
      condition: prod.condition || 'Refurbished & Pressure Tested',
      availability: prod.availability || 'IN STOCK',
      tagline: prod.tagline || '',
      description: prod.description || '',
      voltage: prod.voltage || '',
      displacement: prod.displacement || '',
      refrigerant: prod.refrigerant || '',
      application: prod.application || '',
      images: Array.isArray(prod.images) ? [...prod.images] : [],
    });
    setNewImageUrl('');
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    if (!productForm.code.trim() || !productForm.name.trim()) {
      notify('Code and Name are required.', 'error');
      return;
    }
    setSubmitting(true);
    const token = getToken();

    try {
      if (editingProduct) {
        const res = await adminUpdateProduct(editingProduct.id || editingProduct._id, productForm, token);
        if (res.success) {
          notify('Product updated successfully.');
          setIsProductModalOpen(false);
          loadData();
        } else {
          notify(res.message || 'Error updating product', 'error');
        }
      } else {
        const res = await adminCreateProduct(productForm, token);
        if (res.success) {
          notify('Product created successfully.');
          setIsProductModalOpen(false);
          loadData();
        } else {
          notify(res.message || 'Error creating product', 'error');
        }
      }
    } catch (err) {
      notify(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteProductConfirm = async () => {
    if (!deleteConfirm || deleteConfirm.type !== 'product') return;
    const token = getToken();
    try {
      const res = await adminDeleteProduct(deleteConfirm.id, token);
      if (res.success) {
        notify('Product deleted successfully.');
        setDeleteConfirm(null);
        loadData();
      } else {
        notify(res.message || 'Failed to delete product', 'error');
      }
    } catch (err) {
      notify(err.message, 'error');
    }
  };

  // Multi-image management helpers
  const handleAddImageUrl = () => {
    if (!newImageUrl.trim()) return;
    setProductForm((prev) => ({
      ...prev,
      images: [...prev.images, newImageUrl.trim()],
    }));
    setNewImageUrl('');
  };

  const handleRemoveImage = (index) => {
    setProductForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSetPrimaryImage = (index) => {
    if (index === 0) return;
    setProductForm((prev) => {
      const imgs = [...prev.images];
      const [selected] = imgs.splice(index, 1);
      return { ...prev, images: [selected, ...imgs] };
    });
  };

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setSubmitting(true);
    const token = getToken();
    try {
      const res = await adminUploadImages(files, token);
      if (res.success && Array.isArray(res.urls)) {
        setProductForm((prev) => ({
          ...prev,
          images: [...prev.images, ...res.urls],
        }));
        notify(`${res.urls.length} image(s) uploaded successfully.`);
      } else {
        notify(res.message || 'Image upload failed', 'error');
      }
    } catch (err) {
      notify('Upload error: ' + err.message, 'error');
    } finally {
      setSubmitting(false);
      e.target.value = '';
    }
  };

  // ----------------------------------------------------
  // ORDER HANDLERS
  // ----------------------------------------------------
  const openAddOrder = () => {
    const firstProd = products[0];
    setOrderForm({
      orderType: 'OFFLINE',
      productId: firstProd?.id || firstProd?.code || 'copeland-zr72kc-tfd',
      productName: firstProd?.name || 'Copeland Scroll Compressor ZR72KC-TFD',
      quantity: 1,
      customerName: '',
      customerCompany: '',
      customerPhone: '',
      customerEmail: '',
      customerCity: 'Mumbai',
      status: 'CONFIRMED',
      notes: '',
    });
    setIsOrderModalOpen(true);
  };

  const handleSaveOrder = async (e) => {
    e.preventDefault();
    if (!orderForm.customerName || !orderForm.customerPhone) {
      notify('Customer name and phone are required.', 'error');
      return;
    }
    setSubmitting(true);
    const token = getToken();
    try {
      const res = await adminCreateOrder(
        {
          orderType: orderForm.orderType,
          productId: orderForm.productId,
          productName: orderForm.productName,
          quantity: parseInt(orderForm.quantity, 10) || 1,
          customer: {
            name: orderForm.customerName,
            company: orderForm.customerCompany,
            phone: orderForm.customerPhone,
            email: orderForm.customerEmail,
            city: orderForm.customerCity,
          },
          status: orderForm.status,
          notes: orderForm.notes,
        },
        token
      );
      if (res.success) {
        notify('Order recorded successfully.');
        setIsOrderModalOpen(false);
        loadData();
      } else {
        notify(res.message || 'Failed to record order', 'error');
      }
    } catch (err) {
      notify(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    const token = getToken();
    try {
      const res = await adminUpdateOrder(orderId, { status: newStatus }, token);
      if (res.success) {
        notify(`Order status updated to ${newStatus}`);
        loadData();
      }
    } catch (err) {
      notify(err.message, 'error');
    }
  };

  const handleDeleteOrderConfirm = async () => {
    if (!deleteConfirm || deleteConfirm.type !== 'order') return;
    const token = getToken();
    try {
      const res = await adminDeleteOrder(deleteConfirm.id, token);
      if (res.success) {
        notify('Order record deleted.');
        setDeleteConfirm(null);
        loadData();
      }
    } catch (err) {
      notify(err.message, 'error');
    }
  };

  // ----------------------------------------------------
  // SHIPMENT HANDLERS
  // ----------------------------------------------------
  const openAddShipment = () => {
    const firstProd = products[0];
    setShipmentForm({
      orderId: '',
      productId: firstProd?.id || firstProd?.code || 'copeland-zr72kc-tfd',
      productName: firstProd?.name || 'Copeland Scroll Compressor ZR72KC-TFD',
      quantity: 1,
      shippedFrom: 'Mumbai Central Sourcing Hub, MH',
      shippedTo: '',
      courier: 'Blue Dart Express',
      trackingNumber: '',
      status: 'SHIPPED',
      notes: '',
    });
    setIsShipmentModalOpen(true);
  };

  const handleSaveShipment = async (e) => {
    e.preventDefault();
    if (!shipmentForm.shippedTo || !shipmentForm.trackingNumber) {
      notify('Destination city and Tracking reference are required.', 'error');
      return;
    }
    setSubmitting(true);
    const token = getToken();
    try {
      const res = await adminCreateShipment(shipmentForm, token);
      if (res.success) {
        notify('Shipment tracking recorded.');
        setIsShipmentModalOpen(false);
        loadData();
      } else {
        notify(res.message || 'Failed to record shipment', 'error');
      }
    } catch (err) {
      notify(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateShipmentStatus = async (shipmentId, newStatus) => {
    const token = getToken();
    try {
      const res = await adminUpdateShipment(shipmentId, { status: newStatus }, token);
      if (res.success) {
        notify(`Shipment status updated to ${newStatus}`);
        loadData();
      }
    } catch (err) {
      notify(err.message, 'error');
    }
  };

  const handleDeleteShipmentConfirm = async () => {
    if (!deleteConfirm || deleteConfirm.type !== 'shipment') return;
    const token = getToken();
    try {
      const res = await adminDeleteShipment(deleteConfirm.id, token);
      if (res.success) {
        notify('Shipment record deleted.');
        setDeleteConfirm(null);
        loadData();
      }
    } catch (err) {
      notify(err.message, 'error');
    }
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      searchTerm === '' ||
      p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === 'all' || p.category?.toLowerCase() === filterCategory.toLowerCase();
    const matchesAvailability =
      filterAvailability === 'all' || p.availability === filterAvailability;
    return matchesSearch && matchesCategory && matchesAvailability;
  });

  // Filter orders
  const filteredOrders = orders.filter((o) => {
    const matchesType = filterOrderType === 'all' || o.orderType === filterOrderType;
    return matchesType;
  });

  // Filter shipments
  const filteredShipments = shipments.filter((s) => {
    const matchesStatus =
      filterShipmentStatus === 'all' || s.status === filterShipmentStatus;
    return matchesStatus;
  });

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Toast Notification Alert */}
      {notification && (
        <div
          className={`p-3 rounded-lg text-xs font-semibold flex items-center justify-between shadow-md transition-all ${
            notification.type === 'error'
              ? 'bg-red-50 text-red-800 border border-red-200'
              : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
          }`}
        >
          <span>{notification.message}</span>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="p-1 hover:bg-black/5 rounded"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB 1: OVERVIEW                                                    */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'overview' && (
        <div className="space-y-6 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Good Morning, {admin?.username}!
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Here is what's happening with your store today.
              </p>
            </div>
            <button
              type="button"
              onClick={loadData}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all h-10"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              <span>Refresh Data</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#1D6FA3]/10 text-[#1D6FA3] flex items-center justify-center shrink-0">
                <ShoppingCart size={24} />
              </div>
              <div>
                <span className="text-sm font-medium text-slate-500 block">Total Orders</span>
                <span className="text-2xl font-bold text-slate-900 mt-1 block">{loading ? '...' : onlineOrdersCount + offlineOrdersCount}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Box size={24} />
              </div>
              <div>
                <span className="text-sm font-medium text-slate-500 block">Total Products</span>
                <span className="text-2xl font-bold text-slate-900 mt-1 block">{loading ? '...' : totalProducts}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Users size={24} />
              </div>
              <div>
                <span className="text-sm font-medium text-slate-500 block">Categories</span>
                <span className="text-2xl font-bold text-slate-900 mt-1 block">{loading ? '...' : (categories?.length || 0)}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <span className="text-sm font-medium text-slate-500 block">Active Dispatches</span>
                <span className="text-2xl font-bold text-slate-900 mt-1 block">{loading ? '...' : activeShipmentsCount}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overview Section */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">Overview</h2>
                <div className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Live Data</div>
              </div>
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Catalogue Distribution by Category
                    </span>
                    <a
                      href="/admin/dashboard?tab=analytics"
                      className="text-xs font-semibold text-[#1D6FA3] hover:underline"
                    >
                      View Full Analytics &rarr;
                    </a>
                  </div>

                  {categories.length === 0 ? (
                    <div className="text-center py-8 text-slate-400 bg-slate-50 rounded-xl">
                      <BarChart2 size={24} className="mx-auto mb-1 text-slate-300" />
                      <p className="text-xs">No category data available</p>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {categories
                        .slice(0, 5)
                        .map((cat) => {
                          const count = cat.productCount || 0;
                          const pct = totalProducts > 0 ? Math.round((count / totalProducts) * 100) : 0;

                          return (
                            <div key={cat._id || cat.id || cat.slug} className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-semibold text-slate-800 truncate max-w-[220px]">
                                  {cat.name}
                                </span>
                                <span className="text-slate-500 font-mono text-[11px]">
                                  {count} units ({pct}%)
                                </span>
                              </div>
                              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#1D6FA3] rounded-full transition-all duration-300"
                                  style={{ width: `${Math.max(pct, 2)}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>

                {/* Stock Health Quick Row */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      In Stock
                    </span>
                    <span className="text-base font-bold text-emerald-600 mt-0.5 block">
                      {availableProducts}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Out of Stock
                    </span>
                    <span className="text-base font-bold text-slate-700 mt-0.5 block">
                      {products.filter((p) => p.availability === 'OUT OF STOCK').length}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Refurbishing
                    </span>
                    <span className="text-base font-bold text-amber-600 mt-0.5 block">
                      {products.filter((p) => p.availability === 'REFURBISHMENT IN PROGRESS').length}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Made to Order
                    </span>
                    <span className="text-base font-bold text-[#1D6FA3] mt-0.5 block">
                      {products.filter((p) => p.availability === 'MADE TO ORDER').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Sales Section */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">Recent Sales</h2>
                <a href="/admin/dashboard?tab=orders" className="text-sm font-semibold text-[#1D6FA3] hover:underline">
                  View All
                </a>
              </div>
              
              <div className="space-y-6 flex-1 overflow-y-auto pr-2">
                {orders.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <ShoppingCart size={32} className="text-slate-200 mb-3" />
                    <p className="text-sm text-slate-500">No recent sales recorded yet.</p>
                  </div>
                ) : (
                  orders.slice(0, 6).map((ord, idx) => (
                    <div key={ord._id || ord.id || idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                          <ShoppingCart size={16} className="text-slate-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 truncate pr-2">{ord.customer?.name || ord.customerName || ord.id}</p>
                          <p className="text-xs text-slate-500 truncate max-w-[140px] mt-0.5">{ord.productName}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-bold text-emerald-600">+{ord.quantity}</p>
                        <p className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">{ord.orderType}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB 2: PRODUCTS (CATALOG MANAGEMENT)                               */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'products' && (
        <ProductManagementSection
          products={products}
          categories={categories}
          token={getToken()}
          onRefresh={loadData}
          notify={notify}
        />
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB 3: ORDERS (SALES & B2B PURCHASES)                             */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Orders &amp; Sales Management
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Track Online vs Offline B2B orders and customer procurement details.
              </p>
            </div>
            <button
              type="button"
              onClick={openAddOrder}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-md shadow-xs min-h-[40px] transition-colors"
            >
              <Plus size={15} />
              <span>Record New Order</span>
            </button>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">Filter:</span>
            {['all', 'ONLINE', 'OFFLINE'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterOrderType(type)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold min-h-[36px] ${
                  filterOrderType === type
                    ? 'bg-[#1D6FA3] text-white'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {type === 'all' ? 'All Orders' : type}
              </button>
            ))}
          </div>

          {/* Mobile Stacked Orders */}
          <div className="space-y-3">
            {dataErrors.orders ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-600 shrink-0" />
                  <span>Unable to load orders: {dataErrors.orders}</span>
                </div>
                <button
                  type="button"
                  onClick={loadData}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs self-start sm:self-auto transition-colors"
                >
                  Retry Loading
                </button>
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="bg-white p-8 text-center rounded-lg border border-slate-200 text-slate-400 text-xs">
                No orders match your filter.
              </div>
            ) : (
              filteredOrders.map((ord) => (
                <div
                  key={ord._id || ord.id}
                  className="bg-white border border-slate-200 rounded-lg p-4 space-y-3 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{ord.id}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          ord.orderType === 'ONLINE'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {ord.orderType}
                      </span>
                    </div>

                    <select
                      value={ord.status}
                      onChange={(e) => handleUpdateOrderStatus(ord._id || ord.id, e.target.value)}
                      className="text-xs font-bold px-2 py-1 bg-slate-50 border border-slate-300 rounded text-slate-800 focus:outline-none"
                    >
                      {ORDER_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-slate-900">
                      {ord.quantity}x {ord.productName}
                    </p>
                    <div className="text-slate-600 flex flex-wrap gap-x-4 gap-y-1 text-[11px] pt-1">
                      <span>Buyer: {ord.customer?.name}</span>
                      {ord.customer?.company && <span>Company: {ord.customer?.company}</span>}
                      <span>Phone: {ord.customer?.phone}</span>
                      {ord.customer?.city && <span>Location: {ord.customer?.city}</span>}
                    </div>
                    {ord.notes && <p className="text-slate-500 italic text-[11px]">Note: {ord.notes}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                    <span>Date: {new Date(ord.createdAt).toLocaleDateString()}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setDeleteConfirm({
                          type: 'order',
                          id: ord._id || ord.id,
                          name: `Order ${ord.id}`,
                        })
                      }
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      Delete Order
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB 4: SHIPMENTS (LOGISTICS & TRACKING)                            */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'shipments' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Shipment &amp; Tracking Desk
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Record dispatch origin, destination, courier details, and reference tracking codes.
              </p>
            </div>
            <button
              type="button"
              onClick={openAddShipment}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-md shadow-xs min-h-[40px] transition-colors"
            >
              <Plus size={15} />
              <span>Create Shipment</span>
            </button>
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">Status:</span>
            {['all', ...SHIPMENT_STATUSES].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilterShipmentStatus(status)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold min-h-[36px] ${
                  filterShipmentStatus === status
                    ? 'bg-[#1D6FA3] text-white'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Shipments List */}
          <div className="space-y-3">
            {dataErrors.shipments ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-600 shrink-0" />
                  <span>Unable to load shipments: {dataErrors.shipments}</span>
                </div>
                <button
                  type="button"
                  onClick={loadData}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs self-start sm:self-auto transition-colors"
                >
                  Retry Loading
                </button>
              </div>
            ) : filteredShipments.length === 0 ? (
              <div className="bg-white p-8 text-center rounded-lg border border-slate-200 text-slate-400 text-xs">
                No shipments recorded yet.
              </div>
            ) : (
              filteredShipments.map((shp) => (
                <div
                  key={shp._id || shp.id}
                  className="bg-white border border-slate-200 rounded-lg p-4 space-y-3 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {shp.trackingNumber}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-bold">
                        {shp.courier}
                      </span>
                    </div>

                    <select
                      value={shp.status}
                      onChange={(e) =>
                        handleUpdateShipmentStatus(shp._id || shp.id, e.target.value)
                      }
                      className="text-xs font-bold px-2 py-1 bg-slate-50 border border-slate-300 rounded text-slate-800 focus:outline-none self-start sm:self-auto"
                    >
                      {SHIPMENT_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-slate-900">
                      {shp.quantity}x {shp.productName}
                    </p>
                    <div className="text-slate-600 flex flex-col sm:flex-row gap-x-6 gap-y-1 text-[11px] pt-1">
                      <span>
                        <strong className="text-slate-400">Shipped From:</strong> {shp.shippedFrom}
                      </span>
                      <span>
                        <strong className="text-slate-400">Shipped To:</strong> {shp.shippedTo}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                    <span>
                      Dispatched: {new Date(shp.dispatchedAt || shp.createdAt).toLocaleDateString()}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setDeleteConfirm({
                          type: 'shipment',
                          id: shp._id || shp.id,
                          name: `Tracking ${shp.trackingNumber}`,
                        })
                      }
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      Delete Record
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB: CATEGORIES MANAGEMENT                                         */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'categories' && (
        <CategoryManagementSection
          categories={categories}
          token={getToken()}
          onRefresh={loadData}
          notify={notify}
        />
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB: CUSTOMER DIRECTORY                                            */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'customers' && (
        <CustomerManagementSection
          token={getToken()}
          notify={notify}
        />
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB: ANALYTICS                                                     */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'analytics' && (
        <AnalyticsSection
          token={getToken()}
          notify={notify}
        />
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB: SETTINGS                                                      */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'settings' && (
        <SettingsSection
          admin={admin}
          token={getToken()}
          notify={notify}
        />
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB: HELP CENTER                                                   */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'help' && (
        <HelpCenterSection />
      )}


      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* MODAL: RECORD ORDER                                                */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-base sm:text-lg text-slate-900">Record New Order</h3>
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveOrder} className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Order Channel *
                  </label>
                  <select
                    value={orderForm.orderType}
                    onChange={(e) => setOrderForm({ ...orderForm, orderType: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 font-bold"
                  >
                    <option value="OFFLINE">OFFLINE (B2B / Desk)</option>
                    <option value="ONLINE">ONLINE (Web / Quote)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    min={1}
                    required
                    value={orderForm.quantity}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, quantity: parseInt(e.target.value, 10) || 1 })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Select Product *
                </label>
                <select
                  value={orderForm.productId}
                  onChange={(e) => {
                    const selected = products.find(
                      (p) => (p.id || p.code) === e.target.value
                    );
                    setOrderForm({
                      ...orderForm,
                      productId: e.target.value,
                      productName: selected ? selected.name : '',
                    });
                  }}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900"
                >
                  {products.map((p) => (
                    <option key={p.id || p.code} value={p.id || p.code}>
                      {p.code} - {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={orderForm.customerName}
                    onChange={(e) => setOrderForm({ ...orderForm, customerName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Patel HVAC Services"
                    value={orderForm.customerCompany}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, customerCompany: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={orderForm.customerPhone}
                    onChange={(e) => setOrderForm({ ...orderForm, customerPhone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    City / Destination
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Ahmedabad"
                    value={orderForm.customerCity}
                    onChange={(e) => setOrderForm({ ...orderForm, customerCity: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsOrderModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-md text-xs font-semibold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-md shadow-xs"
                >
                  {submitting ? 'Saving...' : 'Record Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* MODAL: CREATE SHIPMENT                                             */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {isShipmentModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-base sm:text-lg text-slate-900">Create Shipment Record</h3>
              <button
                type="button"
                onClick={() => setIsShipmentModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveShipment} className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Product *
                </label>
                <select
                  value={shipmentForm.productId}
                  onChange={(e) => {
                    const selected = products.find(
                      (p) => (p.id || p.code) === e.target.value
                    );
                    setShipmentForm({
                      ...shipmentForm,
                      productId: e.target.value,
                      productName: selected ? selected.name : '',
                    });
                  }}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900"
                >
                  {products.map((p) => (
                    <option key={p.id || p.code} value={p.id || p.code}>
                      {p.code} - {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Courier Partner *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Blue Dart Express"
                    value={shipmentForm.courier}
                    onChange={(e) => setShipmentForm({ ...shipmentForm, courier: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Tracking / Docket Ref *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BD-982140"
                    value={shipmentForm.trackingNumber}
                    onChange={(e) =>
                      setShipmentForm({ ...shipmentForm, trackingNumber: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs font-mono font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Shipped From (Origin) *
                  </label>
                  <input
                    type="text"
                    required
                    value={shipmentForm.shippedFrom}
                    onChange={(e) =>
                      setShipmentForm({ ...shipmentForm, shippedFrom: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Shipped To (Destination) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi NCR Industrial Hub"
                    value={shipmentForm.shippedTo}
                    onChange={(e) => setShipmentForm({ ...shipmentForm, shippedTo: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Units Shipped
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={shipmentForm.quantity}
                    onChange={(e) =>
                      setShipmentForm({
                        ...shipmentForm,
                        quantity: parseInt(e.target.value, 10) || 1,
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Shipment Status
                  </label>
                  <select
                    value={shipmentForm.status}
                    onChange={(e) => setShipmentForm({ ...shipmentForm, status: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs font-bold"
                  >
                    {SHIPMENT_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsShipmentModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-md text-xs font-semibold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-md shadow-xs"
                >
                  {submitting ? 'Saving...' : 'Save Shipment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* MODAL: DELETE CONFIRMATION                                         */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-sm w-full p-5 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center gap-3 text-red-600">
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle size={20} />
              </div>
              <h3 className="font-bold text-base text-slate-900">Confirm Deletion</h3>
            </div>
            <p className="text-xs text-slate-600">
              Are you sure you want to permanently delete{' '}
              <strong className="text-slate-900">{deleteConfirm.name || 'this item'}</strong>? This
              action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirm(null)}
                className="px-3 py-1.5 border border-slate-300 rounded text-xs font-semibold text-slate-700 hover:bg-slate-50 min-h-[36px]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (deleteConfirm.type === 'product') handleDeleteProductConfirm();
                  if (deleteConfirm.type === 'order') handleDeleteOrderConfirm();
                  if (deleteConfirm.type === 'shipment') handleDeleteShipmentConfirm();
                }}
                className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-semibold shadow-xs min-h-[36px]"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
