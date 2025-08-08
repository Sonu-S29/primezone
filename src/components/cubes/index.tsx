
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import './cubes.css';

interface CubesProps {
  images: { src: string; hint: string }[];
}

const Cubes: React.FC<CubesProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [shuffledImages, setShuffledImages] = useState<any[]>([]);

  useEffect(() => {
    // Initialize with 8 placeholders
    const initialCubes = Array(8).fill(null).map((_, i) => images[i % images.length] || { src: 'https://placehold.co/200x200.png', hint: 'placeholder' });
     setShuffledImages(initialCubes);
  }, [images]);

  const handleCubeClick = (index: number) => {
    if (activeIndex === index) {
      // If clicking the active cube, reset the view
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      
      // When a cube is clicked, reshuffle the images for the other cubes
      const activeImage = shuffledImages[index];
      const otherImages = images.filter(img => img.src !== activeImage.src);
      
      // Shuffle the other images
      const shuffled = [...otherImages].sort(() => 0.5 - Math.random());

      const newArrangement = [...shuffledImages];
      let imageIndex = 0;
      for (let i = 0; i < 8; i++) {
        if (i !== index) {
          newArrangement[i] = shuffled[imageIndex % shuffled.length];
          imageIndex++;
        }
      }
      setShuffledImages(newArrangement);
    }
  };

  const renderCube = (index: number) => {
    const image = shuffledImages[index];
    if (!image) return null; // Don't render if image data isn't ready

    const isMainActive = activeIndex !== null;
    const isActive = activeIndex === index;
    const isInactive = isMainActive && !isActive;

    return (
      <div
        key={index}
        className={cn(
          'interactive-cube-container',
          `cube-pos-${index}`,
          { 'active': isActive, 'inactive': isInactive, 'main-active': isMainActive }
        )}
        onClick={() => handleCubeClick(index)}
      >
        <div className="interactive-cube">
          <div className="cube-face cube-front">
             <Image src={image.src} alt={image.hint} width={200} height={200} data-ai-hint={image.hint} className="object-cover" />
          </div>
          <div className="cube-face cube-back"></div>
          <div className="cube-face cube-left"></div>
          <div className="cube-face cube-right"></div>
          <div className="cube-face cube-top"></div>
          <div className="cube-face cube-bottom"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="interactive-cubes-wrapper">
      <div className="interactive-cubes-scene">
        {Array.from({ length: 8 }).map((_, i) => renderCube(i))}
      </div>
    </div>
  );
};

export default Cubes;
