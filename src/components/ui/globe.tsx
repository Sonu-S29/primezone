
"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { GlobeMethods } from "react-globe.gl";

// Dynamically import react-globe.gl to avoid SSR issues
const GlobeComponent = React.lazy(() => import('react-globe.gl'));

const GlobeInternal = () => {
  const globeEl = useRef<GlobeMethods>();
  const [points, setPoints] = useState<any[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<any | null>(null);

  useEffect(() => {
    // Generate some random points
    const N = 20;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: 0.25,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
      // Add project data to the point
      project: {
          title: `Project ${Math.round(Math.random() * 100)}`,
          images: [
              "https://placehold.co/600x400.png",
              "https://placehold.co/600x400.png",
          ],
          videos: [
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
          ]
      }
    }));
    
    // Add one larger, clickable point
    gData.push({
      lat: 20,
      lng: 77,
      size: 0.5,
      color: 'yellow',
      project: {
          title: "Showcase Project",
          images: [
            "https://placehold.co/600x400.png",
            "https://placehold.co/600x400.png",
            "https://placehold.co/600x400.png",
          ],
          videos: [
            "https://www.youtube.com/embed/dQw4w9WgXcQ",
            "https://www.youtube.com/embed/dQw4w9WgXcQ",
          ]
      }
    })

    setPoints(gData);

    if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.2;
        globeEl.current.pointOfView({ lat: 20, lng: 77, altitude: 2 });
    }
  }, []);

  const handlePointClick = (point: any) => {
    setSelectedPoint(point);
  };

  return (
    <>
      <Suspense fallback={<div className="flex items-center justify-center h-full">Loading Globe...</div>}>
        <GlobeComponent
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            pointsData={points}
            pointColor="color"
            onPointClick={handlePointClick}
            pointRadius="size"
            pointsMerge={true}
            backgroundColor="rgba(0,0,0,0)"
        />
      </Suspense>
      
      <Dialog open={!!selectedPoint} onOpenChange={() => setSelectedPoint(null)}>
        {selectedPoint && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedPoint.project.title}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {selectedPoint.project.images.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Images</h3>
                  <Carousel>
                    <CarouselContent>
                      {selectedPoint.project.images.map((src: string, index: number) => (
                        <CarouselItem key={index}>
                          <Image src={src} alt={`${selectedPoint.project.title} - Image ${index+1}`} width={600} height={400} className="rounded-lg object-cover w-full" data-ai-hint="student project" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              )}
              {selectedPoint.project.videos.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                   <Carousel>
                    <CarouselContent>
                        {selectedPoint.project.videos.map((src: string, index: number) => (
                            <CarouselItem key={index}>
                                <div className="aspect-video">
                                    <iframe
                                        src={src}
                                        title={`${selectedPoint.project.title} - Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-lg"
                                    ></iframe>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

const Globe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <GlobeInternal /> : <div className="flex items-center justify-center h-full">Loading Globe...</div>;
}

export { Globe };
