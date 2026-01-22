
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
    </div>
  );
}
