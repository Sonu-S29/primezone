
"use client";

import { Suspense, lazy } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const MemoriesGallery = lazy(() => import("@/components/memories-gallery"));

export default function GalleryPage() {
  return (
    // The main container should be full screen height and hide overflow
    <div className="relative h-screen w-full -mt-20 overflow-hidden bg-black">
      <Suspense fallback={<Skeleton className="h-full w-full bg-gray-900" />}>
          <MemoriesGallery />
      </Suspense>

      {/* The overlay content from the user's example */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-center p-5 bg-black/30 rounded-2xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's celebrate what made 2025 special
          </h1>
          <p className="text-lg text-white/80">
            A glimpse into life at Primezone Computer Education.
          </p>
      </div>
    </div>
  );
}
