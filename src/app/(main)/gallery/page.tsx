
"use client";

import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const MemoriesGallery = dynamic(() => import("@/components/memories-gallery"), {
  loading: () => <Skeleton className="h-full w-full bg-muted" />,
  ssr: false
});

export default function GalleryPage() {
  return (
    <div className="relative h-screen w-screen -mt-20 overflow-hidden bg-background">
      <MemoriesGallery />
    </div>
  );
}
