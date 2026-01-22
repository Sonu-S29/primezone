
"use client";

import { Suspense, lazy } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const MemoriesGallery = lazy(() => import("@/components/memories-gallery"));

export default function GalleryPage() {
  return (
    <div className="relative h-screen w-screen -mt-20 overflow-hidden bg-background">
      <Suspense fallback={<Skeleton className="h-full w-full bg-muted" />}>
        <MemoriesGallery />
      </Suspense>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-white">
            Memories Gallery
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Explore our moments by moving your mouse over the gallery.
          </p>
        </div>
      </div>
    </div>
  );
}
