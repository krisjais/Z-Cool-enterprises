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
  AlertTriangle
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import {
  getProducts,
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

const CATEGORIES = [
  'Scroll Compressors',
  'Rotary Compressors',
  'Reciprocating Compressors',
  'VRF / VRV Compressors',
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
  const [orders, setOrders] = useState([]);
  const [shipments, setShipments] = useState([]);
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
    const token = getToken();

    try {
      const [prodRes, ordRes, shpRes] = await Promise.all([
        getProducts(),
        token ? adminGetOrders(token) : { data: [] },
        token ? adminGetShipments(token) : { data: [] },
      ]);

      setProducts(Array.isArray(prodRes) ? prodRes : []);
      if (ordRes && ordRes.success && Array.isArray(ordRes.data)) {
        setOrders(ordRes.data);
      }
      if (shpRes && shpRes.success && Array.isArray(shpRes.data)) {
        setShipments(shpRes.data);
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
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Operations Overview
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time metrics from live database records.
              </p>
            </div>
            <button
              type="button"
              onClick={loadData}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 min-h-[36px] self-start sm:self-auto"
            >
              <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
              <span>Refresh Data</span>
            </button>
          </div>

          {/* Real Metrics Grid - Mobile First */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Total Products
              </span>
              <span className="text-2xl font-bold text-slate-900 mt-1 block">
                {loading ? '...' : totalProducts}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Catalog Models</span>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block">
                Available In Stock
              </span>
              <span className="text-2xl font-bold text-emerald-700 mt-1 block">
                {loading ? '...' : availableProducts}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Ready for Freight</span>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block">
                Online Sales
              </span>
              <span className="text-2xl font-bold text-blue-700 mt-1 block">
                {loading ? '...' : onlineOrdersCount}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Units via Web</span>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-purple-600 uppercase tracking-wider block">
                Offline Sales
              </span>
              <span className="text-2xl font-bold text-purple-700 mt-1 block">
                {loading ? '...' : offlineOrdersCount}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Units via B2B/Desk</span>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
              <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider block">
                Active Shipments
              </span>
              <span className="text-2xl font-bold text-amber-700 mt-1 block">
                {loading ? '...' : activeShipmentsCount}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">In Transit / Dispatched</span>
            </div>
          </div>

          {/* Quick Real Activity Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Recent Orders
                </h2>
                <a
                  href="/admin/dashboard?tab=orders"
                  className="text-xs font-semibold text-[#1D6FA3] hover:underline flex items-center gap-1"
                >
                  View all ({orders.length}) <ArrowRight size={12} />
                </a>
              </div>
              {orders.length === 0 ? (
                <p className="text-xs text-slate-400 py-4 text-center">No orders recorded yet.</p>
              ) : (
                <div className="space-y-2.5">
                  {orders.slice(0, 4).map((ord) => (
                    <div
                      key={ord._id || ord.id}
                      className="p-2.5 rounded bg-slate-50 border border-slate-100 text-xs flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">{ord.id}</span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                              ord.orderType === 'ONLINE'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}
                          >
                            {ord.orderType}
                          </span>
                        </div>
                        <p className="text-slate-600 truncate mt-0.5">{ord.productName}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-slate-900">{ord.quantity} Unit(s)</span>
                        <span className="block text-[10px] text-slate-400">{ord.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Active Shipments */}
            <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Active Dispatches &amp; Tracking
                </h2>
                <a
                  href="/admin/dashboard?tab=shipments"
                  className="text-xs font-semibold text-[#1D6FA3] hover:underline flex items-center gap-1"
                >
                  View all ({shipments.length}) <ArrowRight size={12} />
                </a>
              </div>
              {shipments.length === 0 ? (
                <p className="text-xs text-slate-400 py-4 text-center">No shipments recorded yet.</p>
              ) : (
                <div className="space-y-2.5">
                  {shipments.slice(0, 4).map((shp) => (
                    <div
                      key={shp._id || shp.id}
                      className="p-2.5 rounded bg-slate-50 border border-slate-100 text-xs flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">{shp.trackingNumber}</span>
                          <span className="text-[10px] font-medium text-slate-500">
                            via {shp.courier}
                          </span>
                        </div>
                        <p className="text-slate-600 truncate mt-0.5">To: {shp.shippedTo}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                          {shp.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* TAB 2: PRODUCTS (CATALOG MANAGEMENT)                               */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'products' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Product Catalog
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage live compressor inventory, specifications, and multiple images.
              </p>
            </div>
            <button
              type="button"
              onClick={openAddProduct}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#1D6FA3] hover:bg-[#15537d] text-white font-semibold text-xs rounded-md shadow-xs min-h-[40px] transition-colors"
            >
              <Plus size={15} />
              <span>Add New Product</span>
            </button>
          </div>

          {/* Search and Filters - Mobile Friendly */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search by code, model, brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] min-h-[40px]"
              />
            </div>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] min-h-[40px]"
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={filterAvailability}
              onChange={(e) => setFilterAvailability(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-800 focus:outline-none focus:border-[#1D6FA3] min-h-[40px]"
            >
              <option value="all">All Availabilities</option>
              {AVAILABILITY_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Stacked Product Cards (<= 768px) */}
          <div className="block md:hidden space-y-3">
            {filteredProducts.map((prod) => {
              const rawImg =
                Array.isArray(prod.images) && prod.images.length > 0
                  ? prod.images[0]
                  : '/ac_compressor.png';
              const primaryImg = resolveImageUrl(rawImg);
              return (
                <div
                  key={prod._id || prod.id}
                  className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-3 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={primaryImg}
                      alt={prod.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/ac_compressor.png';
                      }}
                      className="w-16 h-16 object-contain bg-slate-50 rounded border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] font-bold text-[#1D6FA3] block">
                        {prod.code}
                      </span>
                      <h3 className="font-bold text-slate-900 text-xs leading-snug line-clamp-2">
                        {prod.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        {prod.brand} • {prod.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          prod.availability === 'IN STOCK'
                            ? 'bg-emerald-100 text-emerald-800'
                            : prod.availability === 'OUT OF STOCK'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {prod.availability}
                      </span>
                      <span className="text-[10px] text-slate-400 ml-2">
                        {Array.isArray(prod.images) ? prod.images.length : 0} photo(s)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openEditProduct(prod)}
                        className="p-2 text-slate-600 hover:text-[#1D6FA3] bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 min-h-[36px] min-w-[36px] flex items-center justify-center"
                        title="Edit Product"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setDeleteConfirm({ type: 'product', id: prod.id || prod._id, name: prod.name })
                        }
                        className="p-2 text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded border border-red-200 min-h-[36px] min-w-[36px] flex items-center justify-center"
                        title="Delete Product"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Table View (>= 768px) */}
          <div className="hidden md:block bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Item</th>
                  <th className="py-3 px-4">Brand &amp; Category</th>
                  <th className="py-3 px-4">Availability</th>
                  <th className="py-3 px-4">Photos</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredProducts.map((prod) => {
                  const rawImg =
                    Array.isArray(prod.images) && prod.images.length > 0
                      ? prod.images[0]
                      : '/ac_compressor.png';
                  const primaryImg = resolveImageUrl(rawImg);
                  return (
                    <tr key={prod._id || prod.id} className="hover:bg-slate-50/80">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={primaryImg}
                            alt={prod.name}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/ac_compressor.png';
                            }}
                            className="w-10 h-10 object-contain bg-slate-50 rounded border border-slate-200 shrink-0"
                          />
                          <div>
                            <span className="font-mono text-[10px] font-bold text-[#1D6FA3] block">
                              {prod.code}
                            </span>
                            <span className="font-bold text-slate-900 block max-w-sm truncate">
                              {prod.name}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <span className="font-medium text-slate-900 block">{prod.brand}</span>
                        <span className="text-[11px] text-slate-500 block">{prod.category}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            prod.availability === 'IN STOCK'
                              ? 'bg-emerald-100 text-emerald-800'
                              : prod.availability === 'OUT OF STOCK'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {prod.availability}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <span className="font-medium">
                          {Array.isArray(prod.images) ? prod.images.length : 0} image(s)
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => openEditProduct(prod)}
                            className="p-1.5 text-slate-600 hover:text-[#1D6FA3] hover:bg-slate-100 rounded"
                            title="Edit"
                          >
                            <Edit2 size={15} />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setDeleteConfirm({
                                type: 'product',
                                id: prod.id || prod._id,
                                name: prod.name,
                              })
                            }
                            className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded"
                            title="Delete"
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
        </div>
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
            {filteredOrders.length === 0 ? (
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
            {filteredShipments.length === 0 ? (
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
      {/* MODAL: ADD / EDIT PRODUCT                                          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-base sm:text-lg text-slate-900">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h3>
              <button
                type="button"
                onClick={() => setIsProductModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveProduct} className="p-4 sm:p-6 overflow-y-auto space-y-5">
              {/* Group 1: Basic Information */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1">
                  1. Basic Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Product Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Z-COP-ZR72"
                      value={productForm.code}
                      onChange={(e) => setProductForm({ ...productForm, code: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Copeland, Daikin, LG"
                      value={productForm.brand}
                      onChange={(e) => setProductForm({ ...productForm, brand: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Product Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Copeland Scroll Compressor ZR72KC-TFD"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Category *
                    </label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Availability Status *
                    </label>
                    <select
                      value={productForm.availability}
                      onChange={(e) =>
                        setProductForm({ ...productForm, availability: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    >
                      {AVAILABILITY_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Compressor Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hermetic Scroll"
                      value={productForm.type}
                      onChange={(e) => setProductForm({ ...productForm, type: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Condition
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Refurbished & Pressure Tested"
                      value={productForm.condition}
                      onChange={(e) =>
                        setProductForm({ ...productForm, condition: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>
                </div>
              </div>

              {/* Group 2: Multi-Image Manager */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1">
                  2. Product Images ({productForm.images.length})
                </span>

                {/* Thumbnails Row (Mobile Scrollable) */}
                {productForm.images.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">No images added yet.</p>
                ) : (
                  <div className="flex items-center gap-3 overflow-x-auto py-2">
                    {productForm.images.map((rawUrl, idx) => {
                      const imgUrl = resolveImageUrl(rawUrl);
                      return (
                        <div
                          key={idx}
                          className={`relative group shrink-0 w-20 h-20 rounded border bg-slate-50 flex items-center justify-center p-1 ${
                            idx === 0 ? 'border-[#1D6FA3] ring-2 ring-[#1D6FA3]/20' : 'border-slate-300'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt={`Product ${idx + 1}`}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/ac_compressor.png';
                            }}
                            className="w-full h-full object-contain"
                          />
                          {idx === 0 && (
                            <span className="absolute top-1 left-1 bg-[#1D6FA3] text-white text-[8px] font-bold px-1 rounded">
                              PRIMARY
                            </span>
                          )}
                          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1 transition-opacity">
                            {idx !== 0 && (
                              <button
                                type="button"
                                onClick={() => handleSetPrimaryImage(idx)}
                                title="Set as primary"
                                className="p-1 bg-white text-slate-900 rounded-full hover:bg-slate-100"
                              >
                                <Star size={12} />
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(idx)}
                              title="Remove image"
                              className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Add Image by URL or Local File */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Add Image by Path / URL
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        placeholder="e.g. /ac_compressor_2.png"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
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

                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Or Upload Image Files (Persistent)
                    </label>
                    <label className="flex items-center justify-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-xs font-semibold text-slate-700 cursor-pointer min-h-[34px]">
                      <UploadCloud size={15} />
                      <span>Choose File(s)</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Group 3: Technical Details */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1">
                  3. Technical Specifications
                </span>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Short summary of application and compatibility..."
                    value={productForm.description}
                    onChange={(e) =>
                      setProductForm({ ...productForm, description: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Voltage
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 380V - 415V AC"
                      value={productForm.voltage}
                      onChange={(e) =>
                        setProductForm({ ...productForm, voltage: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Displacement
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 17.1 m³/h"
                      value={productForm.displacement}
                      onChange={(e) =>
                        setProductForm({ ...productForm, displacement: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Refrigerant
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. R22 / R407C"
                      value={productForm.refrigerant}
                      onChange={(e) =>
                        setProductForm({ ...productForm, refrigerant: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:outline-none focus:border-[#1D6FA3]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-md text-xs font-semibold text-slate-700 hover:bg-slate-50 min-h-[38px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 bg-[#1D6FA3] hover:bg-[#15537d] text-white text-xs font-semibold rounded-md shadow-xs min-h-[38px] disabled:opacity-50"
                >
                  {submitting ? 'Saving...' : editingProduct ? 'Save Changes' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
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
