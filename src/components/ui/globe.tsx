
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
  const [arcs, setArcs] = useState<any[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<any | null>(null);

  useEffect(() => {
    // Generate arcs for the corona effect
    const N_ARCS = 5000;
    const arcsData = [...Array(N_ARCS).keys()].map(() => {
        const startLat = (Math.random() - 0.5) * 180;
        const startLng = (Math.random() - 0.5) * 360;
        const endLat = startLat;
        const endLng = startLng;
        return {
            startLat,
            startLng,
            endLat,
            endLng,
            color: 'rgba(50, 150, 255, 0.6)',
        }
    });
    setArcs(arcsData);

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

    setPoints(projectPoints);

    if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.2;
        globeEl.current.pointOfView({ lat: 20, lng: 77, altitude: 2.5 });
    }
  }, []);

  const handlePointClick = (point: any) => {
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
            arcsData={arcs}
            arcColor="color"
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500}
            arcStroke={0.1}
            arcAltitudeAutoScale={0.5}
            backgroundColor="rgba(0,0,0,0)"
            atmosphereColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
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
