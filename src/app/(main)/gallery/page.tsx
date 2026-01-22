
"use client";

import { Suspense, lazy } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const MemoriesGallery = lazy(() => import("@/components/memories-gallery"));

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Memories Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our moments by moving your mouse over the gallery below.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[90vh]">
        <Suspense fallback={<Skeleton className="h-[80vh] w-[80vw] bg-muted" />}>
            <MemoriesGallery />
        </Suspense>
      </section>
    </div>
  );
}
