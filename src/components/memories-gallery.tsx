
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

    const imageStyles = useMemo(() =>
        images.map(() => ({
            translateY: (Math.random() - 0.5) * 40, // vh
            scale: 0.8 + Math.random() * 0.4, // Random scale from 0.8 to 1.2
            rotate: (Math.random() - 0.5) * 15, // Random rotation from -7.5 to 7.5 deg
        })),
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
                transition: { type: "tween", ease: [0.1, 0.9, 0.2, 1], duration: 2.2 } // Slower transition
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
                className="absolute top-0 left-0 flex h-full items-center gap-4 px-12"
                animate={trackControls}
            >
                {images.map((image, index) => {
                    const style = imageStyles[index];
                    return (
                        <motion.div
                            key={index}
                            className="relative h-[35vh] aspect-[4/3] shrink-0 rounded-xl overflow-hidden group shadow-2xl"
                            style={{
                                translateY: `${style.translateY}vh`,
                                scale: style.scale,
                                rotate: `${style.rotate}deg`,
                            }}
                            variants={itemVariants}
                            whileHover={{ scale: style.scale * 1.05, zIndex: 10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                src={image.src}
                                alt={`Memory ${index + 1}`}
                                fill
                                className="object-cover"
                                data-ai-hint={image.hint}
                                sizes="(max-width: 768px) 30vw, 30vh"
                                priority={index < 5}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default MemoriesGallery;
