
"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  hint: `event photo ${i + 1}`,
}));

const MemoriesGallery = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Set initial position to center the canvas
  useEffect(() => {
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = -(rect.width * 0.5) / 2;
    const centerY = -(rect.height * 0.5) / 2;
    setPosition({ x: centerX, y: centerY });
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!viewportRef.current) return;

    const rect = viewportRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percentX = mouseX / rect.width;
    const percentY = mouseY / rect.height;
    
    // Canvas is 150% of viewport, so overhang is 50%. Max offset is -50% of viewport size.
    const maxOffsetX = viewportRef.current.offsetWidth * 0.5;
    const maxOffsetY = viewportRef.current.offsetHeight * 0.5;

    const offsetX = -percentX * maxOffsetX;
    const offsetY = -percentY * maxOffsetY;
    
    setPosition({ x: offsetX, y: offsetY });
  };
  
  const handleMouseLeave = () => {
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = -(rect.width * 0.5) / 2;
    const centerY = -(rect.height * 0.5) / 2;
    setPosition({ x: centerX, y: centerY });
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
        <div
          ref={viewportRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="viewport-container relative w-[80vw] h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-muted border"
        >
          <motion.div
            className="image-canvas absolute w-[150%] h-[150%] grid grid-cols-4 gap-4 p-4"
            animate={{
              x: position.x,
              y: position.y,
            }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 1,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.hint}
                  fill
                  className="object-cover"
                  data-ai-hint={image.hint}
                  sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 15vw"
                  priority={index < 8}
                />
              </div>
            ))}
          </motion.div>
        </div>
    </div>
  );
};

export default MemoriesGallery;
