
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const images = Array.from({ length: 72 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  hint: `image ${i + 1}`,
}));

const MemoriesGallery = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const trackControls = useAnimation();
    const imageControls = useAnimation();

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
            
            imageControls.start({
                objectPosition: `${mousePercentage * 100}% 50%`,
                transition: { type: "tween", ease: "linear", duration: 0.1 }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [trackControls, imageControls]);

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
                        className="relative h-[60vh] aspect-[3/4] shrink-0 rounded-xl overflow-hidden group shadow-2xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, zIndex: 10 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div className="w-full h-full" animate={imageControls}>
                            <Image
                                src={image.src}
                                alt={`Memory ${index + 1}`}
                                fill
                                className="object-cover"
                                data-ai-hint={image.hint}
                                sizes="(max-width: 768px) 50vw, 40vh"
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
