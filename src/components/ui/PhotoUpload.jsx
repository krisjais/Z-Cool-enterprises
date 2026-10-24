'use client';

import React, { useState } from 'react';
import { Camera, X, Image as ImageIcon } from 'lucide-react';

export default function PhotoUpload({ onPhotoSelect, label = 'Attach Nameplate Photo (Optional)' }) {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setError(null);

    if (!file) return;

    // Validate type
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPG, PNG, WEBP).');
      return;
    }

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB.');
      return;
    }

    setFileName(file.name);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    if (onPhotoSelect) {
      onPhotoSelect(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    setFileName(null);
    setError(null);
    if (onPhotoSelect) {
      onPhotoSelect(null);
    }
  };

  return (
    <div className="space-y-1.5">
      <label className="block font-mono text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
        {label}
      </label>

      {preview ? (
        <div className="relative flex items-center justify-between p-2.5 bg-slate-50 border border-slate-300 rounded-lg">
          <div className="flex items-center gap-3 overflow-hidden">
            <img src={preview} alt="Nameplate Preview" className="w-10 h-10 object-cover rounded border border-slate-200" />
            <div className="truncate">
              <span className="font-mono text-xs text-slate-800 font-semibold block truncate">{fileName}</span>
              <span className="text-[10px] text-emerald-600 font-mono block">Image attached</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1 text-slate-400 hover:text-red-600 transition-colors rounded focus:outline-hidden focus:ring-2 focus:ring-red-500"
            title="Remove attachment"
            aria-label="Remove attached image"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-3 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative focus-within:ring-2 focus-within:ring-[#1D6FA3]">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            aria-label="Upload compressor nameplate photo"
          />
          <div className="flex items-center justify-center gap-2 text-slate-600 text-xs font-medium">
            <Camera size={18} className="text-[#1D6FA3]" />
            <span>Click or drop compressor nameplate photo</span>
          </div>
        </div>
      )}

      {error && (
        <span role="alert" className="text-red-600 text-[11px] font-mono block">{error}</span>
      )}
    </div>
  );
}
