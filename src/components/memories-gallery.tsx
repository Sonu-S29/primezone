
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  { src: "https://placehold.co/250x250.png", hint: "student smiling" },
  { src: "https://placehold.co/100x100.png", hint: "student portrait" },
  { src: "https://placehold.co/150x150.png", hint: "happy student" },
  { src: "https://placehold.co/300x200.png", hint: "group of students" },
  { src: "https://placehold.co/200x300.png", hint: "student coding" },
  { src: "https://placehold.co/120x120.png", hint: "student studying" },
  { src: "https://placehold.co/80x80.png", hint: "close up student" },
  { src: "https://placehold.co/180x180.png", hint: "student in classroom" },
  { src: "https://placehold.co/220x220.png", hint: "student with laptop" },
  { src: "https://placehold.co/90x90.png", hint: "headshot" },
  { src: "https://placehold.co/130x130.png", hint: "person smiling" },
  { src: "https://placehold.co/270x270.png", hint: "collaborating students" },
];

const gridConfig = [
  { top: '5%', left: '10%', width: '200px', height: '200px' },
  { top: '15%', left: '30%', width: '100px', height: '100px' },
  { top: '5%', left: '45%', width: '120px', height: '120px' },
  { top: '10%', left: '65%', width: '250px', height: '180px' },
  { top: '40%', left: '5%', width: '150px', height: '220px' },
  { top: '50%', left: '25%', width: '280px', height: '200px' },
  { top: '35%', left: '55%', width: '130px', height: '130px' },
  { top: '60%', left: '70%', width: '200px', height: '200px' },
  { top: '75%', left: '15%', width: '180px', height: '180px' },
  { top: '80%', left: '40%', width: '90px', height: '90px' },
  { top: '65%', left: '50%', width: '160px', height: '160px' },
  { top: '85%', left: '85%', width: '110px', height: '110px' },
];

const MemoriesGallery = () => {
  const [visibleImages, setVisibleImages] = useState<boolean[]>(
    new Array(gridConfig.length).fill(false)
  );
  const [animationState, setAnimationState] = useState<('in' | 'out' | 'idle')[]>(
    new Array(gridConfig.length).fill('idle')
  );

  useEffect(() => {
    const intervals = gridConfig.map((_, index) => {
      const randomDelay = Math.random() * 3000 + 1000;
      return setInterval(() => {
        setAnimationState(prev => {
            const newState = [...prev];
            newState[index] = prev[index] === 'in' ? 'out' : 'in';
            return newState;
        });
      }, randomDelay + 500);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div
      className="relative h-[500px] w-full max-w-4xl mx-auto bg-grid"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      {gridConfig.map((style, index) => (
        <div
          key={index}
          className={cn(
            "absolute rounded-lg overflow-hidden shadow-lg",
            animationState[index] === 'in' && 'scale-in-center-normal',
            animationState[index] === 'out' && 'scale-out-center-normal',
            animationState[index] === 'idle' && 'opacity-0'
          )}
          style={{ ...style, animationDuration: '0.5s' }}
        >
          <Image
            src={images[index % images.length].src}
            alt={`Memory ${index + 1}`}
            width={parseInt(style.width)}
            height={parseInt(style.height)}
            className="w-full h-full object-cover"
            data-ai-hint={images[index % images.length].hint}
          />
        </div>
      ))}
    </div>
  );
};

export default MemoriesGallery;
