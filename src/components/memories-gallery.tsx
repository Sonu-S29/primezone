
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const images = Array.from({ length: 40 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  hint: `event photo ${i + 1}`,
  id: i + 1
}));

const MemoriesGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-pointer group bg-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.hint}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              data-ai-hint={image.hint}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">View Photo</span>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-1 bg-black/90 border-none sm:rounded-2xl overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>View Image</DialogTitle>
          </DialogHeader>
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[85vh] flex items-center justify-center">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected Gallery Image"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MemoriesGallery;
