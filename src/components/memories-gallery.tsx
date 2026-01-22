"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const images = Array.from({ length: 72 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpeg`,
  hint: `image ${i + 1}`,
}));


// =======================
// Desktop Grid Config
// =======================
const gridConfig = [
  { top: '2%', left: '5%', width: '150px', height: '150px' },
  { top: '15%', left: '25%', width: '100px', height: '100px' },
  { top: '8%', left: '40%', width: '110px', height: '110px' },
  { top: '2%', left: '80%', width: '130px', height: '180px' },
  { top: '35%', left: '2%', width: '140px', height: '210px' },
  { top: '45%', left: '22%', width: '250px', height: '180px' },
  { top: '30%', left: '55%', width: '120px', height: '120px' },
  { top: '55%', left: '75%', width: '180px', height: '180px' },
  { top: '70%', left: '5%', width: '160px', height: '160px' },
  { top: '80%', left: '30%', width: '90px', height: '90px' },
  { top: '75%', left: '50%', width: '140px', height: '140px' },
  { top: '85%', left: '90%', width: '100px', height: '100px' },
  { top: '10%', left: '90%', width: '80px', height: '80px' },
  { top: '70%', left: '92%', width: '90px', height: '140px' },
  { top: '40%', left: '85%', width: '120px', height: '120px' },
  { top: '0%', left: '60%', width: '150px', height: '120px' },
  { top: '0%', left: '0%', width: '90px', height: '90px' },
  { top: '40%', left: '40%', width: '100px', height: '100px' },
  { top: '5%', left: '15%', width: '130px', height: '130px' },
  { top: '12%', left: '55%', width: '120px', height: '150px' },
  { top: '22%', left: '80%', width: '90px', height: '110px' },
  { top: '28%', left: '10%', width: '100px', height: '100px' },
  { top: '33%', left: '50%', width: '150px', height: '120px' },
  { top: '42%', left: '70%', width: '140px', height: '140px' },
  { top: '48%', left: '90%', width: '80px', height: '110px' },
  { top: '57%', left: '15%', width: '90px', height: '90px' },
  { top: '65%', left: '35%', width: '120px', height: '130px' },
  { top: '72%', left: '60%', width: '100px', height: '110px' },
  { top: '78%', left: '80%', width: '140px', height: '120px' },
  { top: '83%', left: '5%', width: '130px', height: '130px' },
  { top: '88%', left: '30%', width: '110px', height: '90px' },
  { top: '93%', left: '55%', width: '100px', height: '120px' },
  { top: '98%', left: '75%', width: '120px', height: '130px' },
  { top: '52%', left: '5%', width: '140px', height: '140px' },
  { top: '57%', left: '45%', width: '130px', height: '130px' },
  { top: '62%', left: '85%', width: '110px', height: '110px' },
  { top: '18%', left: '20%', width: '140px', height: '140px' },
  { top: '25%', left: '38%', width: '100px', height: '100px' },
  { top: '30%', left: '65%', width: '120px', height: '130px' },
  { top: '36%', left: '88%', width: '90px', height: '100px' },
  { top: '44%', left: '18%', width: '110px', height: '110px' },
  { top: '50%', left: '38%', width: '150px', height: '120px' },
  { top: '55%', left: '58%', width: '140px', height: '140px' },
  { top: '60%', left: '78%', width: '100px', height: '110px' },
  { top: '66%', left: '12%', width: '90px', height: '90px' },
  { top: '71%', left: '42%', width: '110px', height: '120px' },
  { top: '76%', left: '62%', width: '120px', height: '130px' },
  { top: '81%', left: '82%', width: '130px', height: '130px' },
  { top: '87%', left: '20%', width: '140px', height: '140px' },
  { top: '91%', left: '50%', width: '90px', height: '90px' },
  { top: '95%', left: '70%', width: '110px', height: '110px' },
  { top: '99%', left: '90%', width: '120px', height: '120px' }
];


// =======================
// Mobile Grid Config
// =======================
const mobileGridConfig = [
  { top: '5%', left: '10%', width: '100px', height: '120px' },
  { top: '10%', left: '60%', width: '120px', height: '100px' },
  { top: '35%', left: '30%', width: '150px', height: '130px' },
  { top: '60%', left: '5%', width: '110px', height: '140px' },
  { top: '65%', left: '65%', width: '130px', height: '110px' },
  { top: '5%', left: '35%', width: '80px', height: '80px' },
];

const MemoriesGallery = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const activeGridConfig = isMobile ? mobileGridConfig : gridConfig;

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
            className="relative h-[500px] sm:h-[600px] md:h-[800px] w-full max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {activeGridConfig.map((style, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-lg overflow-hidden shadow-lg group"
                    style={{ ...style }}
                    variants={itemVariants}
                >
                    <Image
                        src={images[index % images.length].src}
                        alt={`Memory ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.02] group-hover:shadow-xl"
                        data-ai-hint={images[index % images.length].hint}
                        sizes={`(max-width: 768px) ${style.width}, ${style.width}`}
                        priority={index < 10}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default MemoriesGallery;
