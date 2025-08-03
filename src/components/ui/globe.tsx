
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
    // Generate background dots
    const N_BGDOTS = 10000;
    const bgDots = [...Array(N_BGDOTS).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: 0.04,
      color: 'rgba(50, 150, 255, 0.5)',
    }));
    
    // Interactive project points
    const projectPoints = [
        {
            lat: 20.5937,
            lng: 78.9629,
            size: 0.25,
            color: '#4095c6',
            project: {
                title: "India Showcase Project",
                images: [ "https://placehold.co/600x400.png", "https://placehold.co/600x400.png" ],
                videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ]
            }
        },
        {
            lat: 51.5072,
            lng: -0.1276,
            size: 0.25,
            color: '#4095c6',
            project: {
                title: "London Showcase Project",
                images: [ "https://placehold.co/600x400.png" ],
                videos: []
            }
        },
        {
            lat: 34.0522,
            lng: -118.2437,
            size: 0.25,
            color: '#4095c6',
            project: {
                title: "Los Angeles Showcase Project",
                images: [],
                videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/embed/dQw4w9WgXcQ" ]
            }
        }
    ];

    setPoints([...bgDots, ...projectPoints]);

    if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.2;
        globeEl.current.pointOfView({ lat: 20, lng: 77, altitude: 2.5 });
    }
  }, []);

  const handlePointClick = (point: any) => {
      // Only open dialog for points that have project data
    if (point.project) {
        setSelectedPoint(point);
    }
  };

  return (
    <>
      <Suspense fallback={<div className="flex items-center justify-center h-full">Loading Globe...</div>}>
        <GlobeComponent
            ref={globeEl}
            pointsData={points}
            pointColor="color"
            onPointClick={handlePointClick}
            pointRadius="size"
            pointsMerge={true}
            pointAltitude={0}
            backgroundColor="rgba(0,0,0,0)"
            atmosphereColor="rgba(0,0,0,0)"
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
