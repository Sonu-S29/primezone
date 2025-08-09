
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
    const radius = 250; // controls the circle size
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius - radius;
    const scale = (z + radius) / (2 * radius) * 0.4 + 0.8; // scale from 0.8 to 1.2
    
    let opacity = 0;
    let display = 'none';

    // Make 4 cards visible: center, one left, two right
    if (offset === 0 || offset === 1 || offset === 2 || offset === total - 1) {
        opacity = 1;
        display = 'block';
    }
    
    return {
      transform: `translateX(calc(-50% + ${x}px)) translateZ(${z}px) scale(${scale})`,
      zIndex: Math.round(scale * 100),
      opacity,
      display,
      transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
    };
  };

  return (
    <div className="relative w-full h-[400px] flex flex-col justify-center items-center overflow-hidden bg-card p-4 rounded-2xl shadow-lg">
      <div className="relative h-[250px] w-full" style={{ perspective: '1000px' }}>
        {events.map((event, index) => (
          <div
            key={event.name}
            className="absolute top-0 left-1/2 w-[120px] h-[180px] cursor-pointer"
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
      <h3 className="mt-8 text-3xl font-bold text-primary text-center transition-opacity duration-500">
        {events[currentIndex].name}
      </h3>
       <div className="absolute bottom-4 flex gap-4">
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
