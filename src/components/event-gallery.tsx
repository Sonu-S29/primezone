
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const events = [
  {
    name: "Picnic",
    mainImage: "https://placehold.co/200x300.png",
    hint: "picnic event",
    images: Array(8).fill("https://placehold.co/150x150.png"),
    imageHints: Array(8).fill("picnic photo")
  },
  {
    name: "Corporate Training",
    mainImage: "https://placehold.co/200x300.png",
    hint: "corporate training",
    images: Array(8).fill("https://placehold.co/150x150.png"),
    imageHints: Array(8).fill("training session")
  },
  {
    name: "Dandiya Night",
    mainImage: "https://placehold.co/200x300.png",
    hint: "dandiya night",
    images: Array(8).fill("https://placehold.co/150x150.png"),
    imageHints: Array(8).fill("dandiya dance")
  },
  {
    name: "DJ Night",
    mainImage: "https://placehold.co/200x300.png",
    hint: "dj night",
    images: Array(8).fill("https://placehold.co/150x150.png"),
    imageHints: Array(8).fill("dj party")
  },
  {
    name: "Seminar",
    mainImage: "https://placehold.co/200x300.png",
    hint: "seminar event",
    images: Array(8).fill("https://placehold.co/150x150.png"),
    imageHints: Array(8).fill("seminar presentation")
  }
];

const IMAGE_SCROLL_INTERVAL = 2000; // 2 seconds per image
const EVENT_CHANGE_DELAY = 500; // 0.5 second delay before event change

export default function EventGallery() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEventChanging, setIsEventChanging] = useState(false);

  const currentEvent = events[currentEventIndex];
  const totalImages = currentEvent.images.length;
  const eventChangeDuration = totalImages * IMAGE_SCROLL_INTERVAL;

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % totalImages);
    }, IMAGE_SCROLL_INTERVAL);

    return () => clearInterval(imageInterval);
  }, [totalImages]);

  useEffect(() => {
    const eventTimeout = setTimeout(() => {
      setIsEventChanging(true);
      setTimeout(() => {
        setCurrentEventIndex(prevIndex => (prevIndex + 1) % events.length);
        setCurrentImageIndex(0);
        setIsEventChanging(false);
      }, EVENT_CHANGE_DELAY);
    }, eventChangeDuration - EVENT_CHANGE_DELAY);

    return () => clearTimeout(eventTimeout);
  }, [currentEventIndex, eventChangeDuration]);


  return (
    <div className="relative w-full h-[500px] md:h-[400px] flex justify-center items-center overflow-hidden bg-card p-4 rounded-2xl shadow-lg">
      
      {/* Left side: Event Images */}
      <div className="w-1/3 h-full flex flex-col items-center justify-center gap-4 overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{ 
                animation: `scroll-down ${eventChangeDuration}ms linear infinite`,
            }}
          >
              {[...currentEvent.images, ...currentEvent.images].map((img, i) => (
                  <div key={i} className="w-full aspect-square p-2">
                     <Image 
                        src={img} 
                        alt={`${currentEvent.name} image ${i + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        data-ai-hint={currentEvent.imageHints[i % totalImages]}
                     />
                  </div>
              ))}
          </div>
      </div>

      {/* Middle: Event Name */}
      <div className="w-1/3 flex justify-center items-center px-4">
        <h3 
            key={currentEvent.name} 
            className="text-4xl md:text-5xl font-bold text-primary text-center text-focus-in"
        >
          {currentEvent.name}
        </h3>
      </div>

      {/* Right side: Event Cards */}
      <div className="w-1/3 h-full flex flex-col items-center justify-center gap-4 overflow-hidden relative">
           <div 
            className="absolute bottom-0 left-0 w-full h-full"
            style={{ 
                animation: `scroll-up ${events.length * eventChangeDuration}ms linear infinite` 
            }}
          >
            {[...events, ...events].map((event, i) => (
              <div key={i} className="w-full h-[300px] p-2 flex-shrink-0">
                <Image
                    src={event.mainImage}
                    alt={event.name}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    data-ai-hint={event.hint}
                />
              </div>
            ))}
        </div>
      </div>

    </div>
  );
}
