'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Settings,
  Building,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  KeyRound,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Save,
  Truck,
  User,
  Sliders
} from 'lucide-react';
import {
  adminGetSettings,
  adminUpdateSettings,
  adminUpdatePassword,
  adminUpdateProfile,
} from '@/lib/api';

export default function SettingsSection({ admin, token, notify }) {
  const [activeTab, setActiveTab] = useState('business'); // business, catalogue, security
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Business and catalogue settings form
  const [settingsForm, setSettingsForm] = useState({
    companyName: 'Z Cool Enterprises',
    businessEmail: 'zcooltech4@gmail.com',
    businessPhone: '+91 99209 06508',
    secondaryPhone: '+91 98921 58245',
    address: 'Shop No. 4, Ground Floor, Mumbai Central Sourcing Hub, Mumbai, Maharashtra 400008, India',
    operatingHours: 'Monday – Saturday: 9:30 AM – 7:30 PM IST',
    dispatchOrigin: 'Mumbai Central Sourcing Hub, MH',
    orderNotificationEmail: 'zcooltech4@gmail.com',
    defaultStockFilter: 'all',
    autoConfirmOrders: true,
  });

  // Admin Profile form
  const [profileForm, setProfileForm] = useState({
    username: admin?.username || 'admin',
    email: admin?.email || 'admin@zcooltech.com',
  });

  // Password change form
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Load settings from backend
  const loadSettings = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminGetSettings(token);
      if (res.success && res.data) {
        setSettingsForm({
          companyName: res.data.companyName || 'Z Cool Enterprises',
          businessEmail: res.data.businessEmail || 'zcooltech4@gmail.com',
          businessPhone: res.data.businessPhone || '+91 99209 06508',
          secondaryPhone: res.data.secondaryPhone || '+91 98921 58245',
          address: res.data.address || 'Shop No. 4, Ground Floor, Mumbai Central Sourcing Hub, Mumbai, Maharashtra 400008, India',
          operatingHours: res.data.operatingHours || 'Monday – Saturday: 9:30 AM – 7:30 PM IST',
          dispatchOrigin: res.data.dispatchOrigin || 'Mumbai Central Sourcing Hub, MH',
          orderNotificationEmail: res.data.orderNotificationEmail || 'zcooltech4@gmail.com',
          defaultStockFilter: res.data.defaultStockFilter || 'all',
          autoConfirmOrders: res.data.autoConfirmOrders !== false,
        });
      }
      if (admin) {
        setProfileForm({
          username: admin.username || 'admin',
          email: admin.email || 'admin@zcooltech.com',
        });
      }
    } catch (err) {
      notify('Failed to load settings: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, [admin, token, notify]);

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  // Handle Business / Catalogue Settings Save
  const handleSaveSettings = async (e) => {
    e.preventDefault();

    if (!settingsForm.companyName.trim()) {
      notify('Company name cannot be empty', 'error');
      return;
    }

    if (!settingsForm.businessEmail.trim() || !settingsForm.businessEmail.includes('@')) {
      notify('Please provide a valid business email address', 'error');
      return;
    }

    if (!settingsForm.businessPhone.trim()) {
      notify('Primary phone number is required', 'error');
      return;
    }

    setSaving(true);
    try {
      const res = await adminUpdateSettings(settingsForm, token);
      if (res.success) {
        notify('Store settings saved and persisted successfully.');
      } else {
        notify(res.message || 'Failed to save settings', 'error');
      }
    } catch (err) {
      notify(err.message || 'Failed to save settings', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Handle Profile Update
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!profileForm.username.trim()) {
      notify('Username cannot be empty', 'error');
      return;
    }
    if (!profileForm.email.trim() || !profileForm.email.includes('@')) {
      notify('Please enter a valid administrator email', 'error');
      return;
    }

    setSaving(true);
    try {
      const res = await adminUpdateProfile(profileForm, token);
      if (res.success) {
        notify('Admin profile updated successfully.');
      } else {
        notify(res.message || 'Failed to update profile', 'error');
      }
    } catch (err) {
      notify(err.message || 'Error updating profile', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Handle Password Change
  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!passwordForm.currentPassword) {
      notify('Please enter your current password', 'error');
      return;
    }

    if (!passwordForm.newPassword || passwordForm.newPassword.length < 6) {
      notify('New password must be at least 6 characters long', 'error');
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      notify('New password and confirm password do not match', 'error');
      return;
    }

    setSaving(true);
    try {
      const res = await adminUpdatePassword(
        {
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        },
        token
      );

      if (res.success) {
        notify('Password updated successfully. Please use your new password next time you login.');
        setPasswordForm({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        notify(res.message || 'Failed to update password', 'error');
      }
    } catch (err) {
      notify(err.message || 'Failed to update password', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Settings className="text-[#1D6FA3]" size={28} />
            Store & Business Settings
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Configure verified business details, catalogue dispatch defaults, and security credentials.
          </p>
        </div>

        <button
          type="button"
          onClick={loadSettings}
          disabled={loading || saving}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-xs transition-all h-10 self-start sm:self-auto"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          <span>Reload</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('business')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
            activeTab === 'business'
              ? 'bg-[#1D6FA3] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white'
          }`}
        >
          <Building size={16} />
          <span>Business Information</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('catalogue')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
            activeTab === 'catalogue'
              ? 'bg-[#1D6FA3] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white'
          }`}
        >
          <Sliders size={16} />
          <span>Catalogue & Dispatch</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
            activeTab === 'security'
              ? 'bg-[#1D6FA3] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white'
          }`}
        >
          <Shield size={16} />
          <span>Admin Profile & Security</span>
        </button>
      </div>

      {/* Tab 1: Business Information */}
      {activeTab === 'business' && (
        <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-slate-900">Official Company & Contact Details</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              These details are referenced throughout the customer inquiry and invoice dispatch portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Company Legal / Trade Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={settingsForm.companyName}
                onChange={(e) => setSettingsForm((p) => ({ ...p, companyName: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Official Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={settingsForm.businessEmail}
                onChange={(e) => setSettingsForm((p) => ({ ...p, businessEmail: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Technical Desk Primary Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={settingsForm.businessPhone}
                onChange={(e) => setSettingsForm((p) => ({ ...p, businessPhone: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white font-mono text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Secondary Helpline Phone
              </label>
              <input
                type="text"
                value={settingsForm.secondaryPhone}
                onChange={(e) => setSettingsForm((p) => ({ ...p, secondaryPhone: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white font-mono text-slate-900"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Central Operations / Warehouse Address
              </label>
              <textarea
                rows={2}
                value={settingsForm.address}
                onChange={(e) => setSettingsForm((p) => ({ ...p, address: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900 resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Standard Working Hours (IST)
              </label>
              <input
                type="text"
                value={settingsForm.operatingHours}
                onChange={(e) => setSettingsForm((p) => ({ ...p, operatingHours: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div className="flex items-center justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1D6FA3] hover:bg-[#155d8a] rounded-xl shadow-xs transition-colors"
            >
              {saving ? <RefreshCw size={16} className="animate-spin" /> : <Save size={16} />}
              <span>Save Business Details</span>
            </button>
          </div>
        </form>
      )}

      {/* Tab 2: Catalogue & Dispatch */}
      {activeTab === 'catalogue' && (
        <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-slate-900">Catalogue & Dispatch Defaults</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Default operational configurations applied to new order shipments and catalogue views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Default Dispatch Origin Facility
              </label>
              <input
                type="text"
                value={settingsForm.dispatchOrigin}
                onChange={(e) => setSettingsForm((p) => ({ ...p, dispatchOrigin: e.target.value }))}
                placeholder="e.g. Mumbai Central Sourcing Hub, MH"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Order Notification Email
              </label>
              <input
                type="email"
                value={settingsForm.orderNotificationEmail}
                onChange={(e) => setSettingsForm((p) => ({ ...p, orderNotificationEmail: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
              />
            </div>

            <div className="md:col-span-2 pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settingsForm.autoConfirmOrders}
                  onChange={(e) =>
                    setSettingsForm((p) => ({ ...p, autoConfirmOrders: e.target.checked }))
                  }
                  className="w-4 h-4 text-[#1D6FA3] rounded border-slate-300 focus:ring-0"
                />
                <div>
                  <span className="text-sm font-semibold text-slate-800 block">
                    Auto-Confirm Incoming Orders
                  </span>
                  <span className="text-xs text-slate-500 block">
                    When enabled, manual orders are saved directly with CONFIRMED status rather than PENDING.
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1D6FA3] hover:bg-[#155d8a] rounded-xl shadow-xs transition-colors"
            >
              {saving ? <RefreshCw size={16} className="animate-spin" /> : <Save size={16} />}
              <span>Save Preferences</span>
            </button>
          </div>
        </form>
      )}

      {/* Tab 3: Security & Admin Profile */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          {/* Admin Profile Form */}
          <form onSubmit={handleSaveProfile} className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-base font-bold text-slate-900">Administrator Profile</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Current session account credentials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Admin Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={profileForm.username}
                  onChange={(e) => setProfileForm((p) => ({ ...p, username: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Admin Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={profileForm.email}
                  onChange={(e) => setProfileForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
                />
              </div>
            </div>

            <div className="flex items-center justify-end pt-2">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#1D6FA3] hover:bg-[#155d8a] rounded-xl shadow-xs transition-colors"
              >
                {saving ? <RefreshCw size={16} className="animate-spin" /> : <Save size={16} />}
                <span>Update Profile</span>
              </button>
            </div>
          </form>

          {/* Change Password Form */}
          <form onSubmit={handleChangePassword} className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <KeyRound size={18} className="text-[#1D6FA3]" />
                <span>Change Administrator Password</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Passwords must be encrypted and verified securely against backend salt hashes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Current Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm((p) => ({ ...p, currentPassword: e.target.value }))
                  }
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  New Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm((p) => ({ ...p, newPassword: e.target.value }))
                  }
                  placeholder="Min. 6 characters"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Confirm New Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm((p) => ({ ...p, confirmPassword: e.target.value }))
                  }
                  placeholder="Re-type new password"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1D6FA3] focus:bg-white text-slate-900"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-400">
                Credentials are encrypted using salted bcrypt hashing and never stored in plaintext.
              </span>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-900 rounded-xl shadow-xs transition-colors"
              >
                {saving ? <RefreshCw size={16} className="animate-spin" /> : <Shield size={16} />}
                <span>Update Password</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
