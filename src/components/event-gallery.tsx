
"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    name: "Picnic",
    mainImage: "https://placehold.co/200x300.png",
    hint: "picnic event",
    subImages: Array(8).fill("https://placehold.co/150x150.png"),
    subHints: Array(8).fill("picnic fun"),
  },
  {
    name: "Corporate Training",
    mainImage: "https://placehold.co/200x300.png",
    hint: "corporate training",
    subImages: Array(8).fill("https://placehold.co/150x150.png"),
    subHints: Array(8).fill("professional training"),
  },
  {
    name: "Dandiya Night",
    mainImage: "https://placehold.co/200x300.png",
    hint: "dandiya night",
    subImages: Array(8).fill("https://placehold.co/150x150.png"),
    subHints: Array(8).fill("dandiya dance"),
  },
  {
    name: "DJ Night",
    mainImage: "https://placehold.co/200x300.png",
    hint: "dj night",
    subImages: Array(8).fill("https://placehold.co/150x150.png"),
    subHints: Array(8).fill("dj party"),
  },
  {
    name: "Seminar",
    mainImage: "https://placehold.co/200x300.png",
    hint: "seminar event",
    subImages: Array(8).fill("https://placehold.co/150x150.png"),
    subHints: Array(8).fill("educational seminar"),
  },
  {
    name: "Graduation",
    mainImage: "https://placehold.co/200x300.png",
    hint: "graduation ceremony",
    subImages: Array(8).fill("https://placehold.co/150x150.png"),
    subHints: Array(8).fill("graduation cap"),
  },
  {
    name: "Workshop",
    mainImage: "https://placehold.co/200x300.png",
    hint: "coding workshop",
    subImages: Array(8).fill("https://placehold.co/150x150.png"),
    subHints: Array(8).fill("learning workshop"),
  },
];

const VerticalCarousel = ({ images, hints, direction = 'down' }: { images: string[], hints: string[], direction?: 'up' | 'down' }) => {
    return (
        <div className="relative h-full w-[150px] overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)' }}>
            <div className={cn("absolute flex flex-col", direction === 'down' ? 'animate-scroll-down' : 'animate-scroll-up')}>
                {[...images, ...images].map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-[150px] h-[150px] p-2">
                        <Image
                            src={src}
                            alt={`Event detail ${i + 1}`}
                            width={150}
                            height={150}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            data-ai-hint={hints[i % hints.length]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default function EventGallery() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const nextEvent = useCallback(() => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextEvent, 8000); // Change event every 8 seconds
    return () => clearInterval(interval);
  }, [nextEvent]);

  const currentEvent = events[currentEventIndex];

  return (
    <div className="relative w-full max-w-4xl h-[600px] flex justify-between items-center overflow-hidden bg-card p-8 rounded-2xl shadow-lg">
      
      {/* Left Carousel (Sub-images) */}
      <div className="h-full">
        <VerticalCarousel 
            images={currentEvent.subImages} 
            hints={currentEvent.subHints}
            direction="down" 
        />
      </div>

      {/* Center Content (Event Name) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h3 key={currentEvent.name} className="text-5xl font-bold text-primary text-focus-in">
            {currentEvent.name}
        </h3>
      </div>
      
      {/* Right Carousel (Main Event Cards) */}
      <div className="h-full">
         <VerticalCarousel 
            images={events.map(e => e.mainImage)} 
            hints={events.map(e => e.hint)}
            direction="up" 
        />
      </div>

    </div>
  );
}
