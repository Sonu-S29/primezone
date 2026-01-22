
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
    </div>
  );
}
