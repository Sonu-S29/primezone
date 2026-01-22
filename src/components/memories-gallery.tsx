"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

const images = Array.from({ length: 72 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  hint: `image ${i + 1}`,
}));


const MemoriesGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || !contentRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;
        const percentX = mouseX / containerRect.width;

        const contentWidth = contentRef.current.scrollWidth;
        const maxPan = -(contentWidth - containerRect.width);
        
        const targetX = maxPan * percentX;

        // Use Framer Motion's animate function for smooth transitions
        controls.start({
            x: targetX,
            transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 }
        });
    };
    
    // Stagger animation for images
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
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
                ease: [0.33, 1, 0.68, 1], // The user's requested ease
            },
        },
    };

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-[500px] sm:h-[600px] md:h-[800px] w-full overflow-hidden cursor-ew-resize"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.div
                ref={contentRef}
                className="absolute top-0 left-0 flex h-full items-center gap-4 px-4"
                animate={controls}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative h-[80%] aspect-[3/4] shrink-0 rounded-lg overflow-hidden group shadow-lg group-hover:shadow-xl"
                        variants={itemVariants}
                    >
                        <Image
                            src={image.src}
                            alt={`Memory ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.03]"
                            data-ai-hint={image.hint}
                            sizes={`(max-width: 768px) 50vw, 300px`}
                            priority={index < 10}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MemoriesGallery;
