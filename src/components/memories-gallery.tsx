
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = Array.from({ length: 72 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  hint: `event photo ${i + 1}`,
}));

const MemoriesGallery = () => {
  const gridCells = Array.from({ length: 100 }); // 10x10 grid
  let imageIndex = 0;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger effect for each cell
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-10 grid-rows-10 gap-4"
      style={{ aspectRatio: '1 / 1' }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {gridCells.map((_, index) => {
        const row = Math.floor(index / 10);
        const col = index % 10;
        const isImageCell = (row + col) % 2 === 0;

        if (isImageCell && imageIndex < images.length) {
          const currentImage = images[imageIndex];
          imageIndex++;

          return (
            <motion.div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 10, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.hint}
                fill
                className="object-cover"
                data-ai-hint={currentImage.hint}
                sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 10vw"
                priority={imageIndex <= 20}
              />
            </motion.div>
          );
        } else {
          // This is an empty cell in the checkerboard
          return <div key={index} />;
        }
      })}
    </motion.div>
  );
};

export default MemoriesGallery;
