
"use client";

import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const MemoriesGallery = dynamic(() => import("@/components/memories-gallery"), {
  loading: () => (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton key={i} className="aspect-[4/3] w-full rounded-xl" />
      ))}
    </div>
  ),
  ssr: false
});

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Page Header */}
      <section className="bg-card py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Memories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into the vibrant life at Primezone—events, workshops, and celebrations.
          </p>
        </div>
      </section>

      {/* Gallery Grid Container */}
      <div className="container mx-auto px-4">
        <MemoriesGallery />
      </div>
    </div>
  );
}
