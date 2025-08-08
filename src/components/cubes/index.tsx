
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import './cubes.css';

interface CubesProps {
  events: { name: string; images: { src: string; hint: string }[] }[];
}

const Cubes: React.FC<CubesProps> = ({ events }) => {
  const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null);

  const allCubes = events.flatMap((event, eventIndex) => 
    Array(8).fill(null).map((_, cubeIndex) => ({
      eventIndex,
      cubeIndex,
      image: event.images[cubeIndex % event.images.length]
    }))
  );

  const handleCubeClick = (eventIndex: number) => {
    setActiveEventIndex(prevIndex => (prevIndex === eventIndex ? null : eventIndex));
  };

  const renderCube = (cubeData: typeof allCubes[0], globalIndex: number) => {
    const { eventIndex, image } = cubeData;

    const isMainActive = activeEventIndex !== null;
    const isGroupActive = activeEventIndex === eventIndex;

    // Default position based on global index
    const defaultPositionClass = `cube-pos-${globalIndex}`;
    
    // Position when its group is active
    const activePositionClass = `active-pos-${globalIndex % 8}`;

    return (
      <div
        key={globalIndex}
        className={cn(
          'interactive-cube-container',
          isGroupActive ? activePositionClass : defaultPositionClass,
          { 'group-active': isGroupActive, 'main-inactive': isMainActive && !isGroupActive }
        )}
        onClick={() => handleCubeClick(eventIndex)}
      >
        <div className="interactive-cube">
          <div className="cube-face cube-front">
            {isGroupActive && <Image src={image.src} alt={image.hint} width={200} height={200} data-ai-hint={image.hint} className="object-cover" />}
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
        {allCubes.map((cube, i) => renderCube(cube, i))}
      </div>
    </div>
  );
};

export default Cubes;
