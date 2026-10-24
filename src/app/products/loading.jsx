import React from 'react';
import Container from '@/components/ui/Container';

export default function CatalogLoading() {
  return (
    <div className="bg-[#FBFBFA] min-h-screen text-slate-900 pt-6 pb-14 sm:pt-8 sm:pb-16 animate-pulse">
      <Container>
        {/* Header Skeleton */}
        <div className="mb-6 space-y-2">
          <div className="h-4 w-32 bg-stone-200 rounded" />
          <div className="h-8 w-72 sm:w-96 bg-stone-300 rounded" />
          <div className="h-4 w-60 sm:w-80 bg-stone-200 rounded" />
        </div>

        {/* Filter Bar Skeleton */}
        <div className="bg-white border border-stone-200 rounded-xl p-4 mb-8 shadow-xs space-y-4">
          <div className="h-11 w-full bg-stone-100 rounded-lg" />
          <div className="flex flex-wrap gap-2 pt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-8 w-24 bg-stone-200 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Product Cards Grid Skeleton (12 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col h-[380px]"
            >
              <div className="h-9 bg-stone-100 border-b border-stone-200 px-4 py-2 flex justify-between items-center">
                <div className="h-3 w-16 bg-stone-200 rounded" />
                <div className="h-4 w-20 bg-stone-200 rounded" />
              </div>
              <div className="h-44 bg-stone-50 flex items-center justify-center p-4">
                <div className="w-24 h-24 rounded-full bg-stone-200" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="h-4 w-3/4 bg-stone-300 rounded" />
                  <div className="h-3 w-1/2 bg-stone-200 rounded" />
                </div>
                <div className="space-y-1">
                  <div className="h-2.5 w-full bg-stone-100 rounded" />
                  <div className="h-2.5 w-4/5 bg-stone-100 rounded" />
                </div>
                <div className="h-8 w-full bg-stone-200 rounded-md mt-auto" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
