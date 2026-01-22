
"use client";

import { useState, useRef, MouseEvent, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  hint: `event photo ${i + 1}`,
}));

const MemoriesGallery = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Generate random layouts for each image. useMemo ensures this is done only once.
  const imageLayouts = useMemo(() => {
    const numCols = 4;
    const numRows = 4;
    const cellWidth = 150 / numCols;
    const cellHeight = 150 / numRows;

    const imageWidthPercent = 20;
    const imageHeightPercent = imageWidthPercent * (10 / 16);

    const maxLeftOffset = cellWidth - imageWidthPercent - 2; // 2% padding
    const maxTopOffset = cellHeight - imageHeightPercent - 2; // 2% padding

    const gridCells = Array.from({ length: numCols * numRows }, (_, i) => {
        const row = Math.floor(i / numCols);
        const col = i % numCols;
        return { row, col };
    });

    // Shuffle cells to randomize image positions
    for (let i = gridCells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gridCells[i], gridCells[j]] = [gridCells[j], gridCells[i]];
    }

    return images.map((_, index) => {
        if (index >= gridCells.length) return null; // Should not happen if images.length <= 16
        
        const { row, col } = gridCells[index];

        const cellLeft = col * cellWidth;
        const cellTop = row * cellHeight;

        const left = cellLeft + (Math.random() * maxLeftOffset) + 1;
        const top = cellTop + (Math.random() * maxTopOffset) + 1;
        
        return {
            top: `${top}%`,
            left: `${left}%`,
            width: `${imageWidthPercent}%`,
            aspectRatio: '16/10',
            rotation: (Math.random() - 0.5) * 15,
        };
    }).filter(Boolean) as { top: string; left: string; width: string; aspectRatio: string; rotation: number; }[];
  }, []);

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
    <div
      ref={viewportRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="viewport-container relative w-full h-full overflow-hidden bg-muted"
    >
      <motion.div
        className="image-canvas absolute w-[150%] h-[150%]"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 2.5, // Slower and smoother transition
        }}
      >
        {images.map((image, index) => {
            const layout = imageLayouts[index];
            if (!layout) return null;

            return (
              <motion.div
                key={index}
                className="absolute rounded-lg overflow-hidden shadow-lg"
                style={{
                    top: layout.top,
                    left: layout.left,
                    width: layout.width,
                    aspectRatio: layout.aspectRatio,
                    transform: `rotate(${layout.rotation}deg)`,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1], // Custom ease-out curve
                  delay: Math.random() * 0.8, // Randomize stagger for a more organic feel
                }}
              >
                <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
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
                </motion.div>
              </motion.div>
            )
        })}
      </motion.div>
    </div>
  );
};

export default MemoriesGallery;
