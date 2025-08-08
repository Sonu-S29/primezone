
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import './cubes.css';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

interface CubesProps {
  events: { name: string; images: { src: string; hint: string }[] }[];
}

const Cubes: React.FC<CubesProps> = ({ events }) => {
  const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, hint: string} | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const scene = sceneRef.current;
    if (!wrapper || !scene) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = wrapper.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;
      scene.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    const handleMouseLeave = () => {
      scene.style.transform = 'rotateX(10deg) rotateY(-15deg)';
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const allCubes = events.flatMap((event, eventIndex) =>
    Array(8).fill(null).map((_, cubeIndex) => ({
      eventIndex,
      cubeIndex,
      image: event.images[cubeIndex % event.images.length]
    }))
  );

  const handleCubeClick = (eventIndex: number, image: {src: string, hint: string}) => {
    if (activeEventIndex === eventIndex) {
        setSelectedImage(image);
    } else {
        setActiveEventIndex(eventIndex);
    }
  };

  const renderCube = (cubeData: typeof allCubes[0], globalIndex: number) => {
    const { eventIndex, cubeIndex, image } = cubeData;

    const isMainActive = activeEventIndex !== null;
    const isGroupActive = activeEventIndex === eventIndex;

    // Default position based on global index
    const defaultPositionClass = `cube-pos-${globalIndex % 56}`;

    // Position when its group is active
    const activePositionClass = `active-pos-${cubeIndex % 8}`;

    return (
        <DialogTrigger asChild key={globalIndex} onClick={() => handleCubeClick(eventIndex, image)}>
            <div
                className={cn(
                'interactive-cube-container',
                isGroupActive ? activePositionClass : defaultPositionClass,
                { 'group-active': isGroupActive, 'main-inactive': isMainActive && !isGroupActive }
                )}
            >
                <div className="interactive-cube">
                <div className="cube-face cube-front">
                    {(isGroupActive) && <Image src={image.src} alt={image.hint} width={200} height={200} data-ai-hint={image.hint} className="object-cover" />}
                </div>
                <div className="cube-face cube-back"></div>
                <div className="cube-face cube-left"></div>
                <div className="cube-face cube-right"></div>
                <div className="cube-face cube-top"></div>
                <div className="cube-face cube-bottom"></div>
                </div>
            </div>
      </DialogTrigger>
    );
  };

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <div className="interactive-cubes-wrapper" ref={wrapperRef}>
            <div className="interactive-cubes-scene" ref={sceneRef}>
                {allCubes.map((cube, i) => renderCube(cube, i))}
            </div>
        </div>
        {selectedImage && (
            <DialogContent className="max-w-3xl h-auto p-0">
                 <DialogHeader className="sr-only">
                    <DialogTitle>Image Preview</DialogTitle>
                </DialogHeader>
                <Image src={selectedImage.src} alt={selectedImage.hint} width={1200} height={800} data-ai-hint={selectedImage.hint} className="w-full h-auto rounded-lg"/>
            </DialogContent>
        )}
    </Dialog>
  );
};

export default Cubes;
