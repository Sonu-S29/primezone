
"use client";

import { useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const images = Array.from({ length: 72 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  hint: `image ${i + 1}`,
}));

const MemoriesGallery = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const trackControls = useAnimation();

    // Store random vertical offsets for each image
    const randomOffsets = useMemo(() =>
        images.map(() => (Math.random() - 0.5) * 30), // Random value between -15vh and 15vh
        []
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!trackRef.current) return;

            const windowWidth = window.innerWidth;
            const mouseX = e.clientX;
            const mousePercentage = mouseX / windowWidth;

            const trackWidth = trackRef.current.scrollWidth;
            const maxScroll = trackWidth - windowWidth;
            
            const panPosition = maxScroll * mousePercentage * -1;

            trackControls.start({
                x: panPosition,
                transition: { type: "tween", ease: [0.1, 0.9, 0.2, 1], duration: 1.2 }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [trackControls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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
            className="h-full w-full flex items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                ref={trackRef}
                className="absolute top-0 left-0 flex h-full items-center gap-10 px-12"
                animate={trackControls}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative h-[30vh] aspect-[3/4] shrink-0 rounded-xl overflow-hidden group shadow-2xl"
                        style={{
                            translateY: `${randomOffsets[index]}vh`
                        }}
                        variants={itemVariants}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div 
                            className="w-full h-full"
                            initial={{ opacity: 0.2, filter: 'blur(3px) grayscale(80%)' }}
                            whileHover={{ opacity: 1, filter: 'blur(0px) grayscale(0%)' }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Image
                                src={image.src}
                                alt={`Memory ${index + 1}`}
                                fill
                                className="object-cover"
                                data-ai-hint={image.hint}
                                sizes="(max-width: 768px) 30vw, 25vh"
                                priority={index < 5}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MemoriesGallery;
