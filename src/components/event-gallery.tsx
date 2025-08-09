
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
  },
  {
    name: "Corporate Training",
    mainImage: "https://placehold.co/200x300.png",
    hint: "corporate training",
  },
  {
    name: "Dandiya Night",
    mainImage: "https://placehold.co/200x300.png",
    hint: "dandiya night",
  },
  {
    name: "DJ Night",
    mainImage: "https://placehold.co/200x300.png",
    hint: "dj night",
  },
  {
    name: "Seminar",
    mainImage: "https://placehold.co/200x300.png",
    hint: "seminar event",
  },
  {
    name: "Graduation",
    mainImage: "https://placehold.co/200x300.png",
    hint: "graduation ceremony",
  },
  {
    name: "Workshop",
    mainImage: "https://placehold.co/200x300.png",
    hint: "coding workshop",
  },
];

export default function EventGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  }, []);

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextEvent, 3000);
    return () => clearInterval(interval);
  }, [nextEvent]);

  const getCardStyle = (index: number) => {
    const total = events.length;
    const offset = (index - currentIndex + total) % total;
    const angle = (offset / total) * 360;
    const radius = 150; // controls the circle size for vertical rotation
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius - radius;
    const scale = (z + radius) / (2 * radius) * 0.4 + 0.8; // scale from 0.8 to 1.2
    
    let opacity = 0;
    let display = 'none';

    // Adjust which cards are visible for a vertical layout
    if (offset === 0 || offset === 1 || offset === total -1 || offset === 2 || offset === total - 2) {
        opacity = 1;
        display = 'block';
    }
    
    return {
      transform: `translateY(calc(-50% + ${y}px)) translateZ(${z}px) scale(${scale})`,
      zIndex: Math.round(scale * 100),
      opacity,
      display,
      transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
    };
  };

  return (
    <div className="relative w-full h-[400px] flex flex-col justify-center items-center overflow-hidden bg-card p-4 rounded-2xl shadow-lg">
      <div className="relative h-full w-[120px]" style={{ perspective: '1000px' }}>
        {events.map((event, index) => (
          <div
            key={event.name}
            className="absolute top-1/2 left-0 w-[120px] h-[180px] cursor-pointer"
            style={getCardStyle(index)}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={event.mainImage}
              alt={event.name}
              width={120}
              height={180}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              data-ai-hint={event.hint}
            />
          </div>
        ))}
      </div>
       <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center z-[101]">
         <h3 className="text-3xl font-bold text-primary transition-opacity duration-500">
            {events[currentIndex].name}
         </h3>
       </div>
       <div className="absolute right-4 bottom-4 flex flex-col gap-4">
            <button onClick={prevEvent} className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/40 transition-colors">
                <ChevronLeft size={24} />
            </button>
            <button onClick={nextEvent} className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/40 transition-colors">
                <ChevronRight size={24} />
            </button>
        </div>
    </div>
  );
}
