
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
            A collection of moments from our journey.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Suspense fallback={<Skeleton className="h-[80vh] w-full bg-muted" />}>
            <MemoriesGallery />
        </Suspense>
      </section>
    </div>
  );
}
