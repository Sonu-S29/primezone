
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const images = [
  { src: "/images/gallery/1.jpeg", hint: "student smiling" },
  { src: "/images/gallery/2.jpeg", hint: "student portrait" },
  { src: "/images/gallery/3.jpeg", hint: "happy student" },
  { src: "/images/gallery/4.jpeg", hint: "group of students" },
  { src: "/images/gallery/5.jpg", hint: "student coding" },
  { src: "/images/gallery/6.jpeg", hint: "student studying" },
  { src: "/images/gallery/7.jpeg", hint: "close up student" },
  { src: "/images/gallery/8.jpeg", hint: "student in classroom" },
  { src: "/images/gallery/9.jpeg", hint: "student with laptop" },
  { src: "/images/gallery/10.jpeg", hint: "headshot" },
  { src: "/images/gallery/11.jpg", hint: "person smiling" },
  { src: "/images/gallery/12.jpg", hint: "collaborating students" },
  { src: "/images/gallery/13.jpg", hint: "student event" },
  { src: "/images/gallery/14.jpg", hint: "tech workshop" },
  { src: "/images/gallery/15.jpg", hint: "graduation day" },
  { src: "/images/gallery/16.jpg", hint: "coding on laptop" },
  { src: "/images/gallery/17.jpg", hint: "designing on computer" },
  { src: "/images/gallery/18.jpg", hint: "team meeting" },
  { src: "/images/gallery/19.jpg", hint: "image 19" },
  { src: "/images/gallery/20.jpg", hint: "image 20" },
  { src: "/images/gallery/21.jpg", hint: "image 21" },
  { src: "/images/gallery/22.jpg", hint: "image 22" },
  { src: "/images/gallery/23.jpg", hint: "image 23" },
  { src: "/images/gallery/24.jpg", hint: "image 24" },
  { src: "/images/gallery/25.jpg", hint: "image 25" },
  { src: "/images/gallery/26.jpg", hint: "image 26" },
  { src: "/images/gallery/27.jpg", hint: "image 27" },
  { src: "/images/gallery/28.jpg", hint: "image 28" },
  { src: "/images/gallery/29.jpg", hint: "image 29" },
  { src: "/images/gallery/30.jpg", hint: "image 30" },
  { src: "/images/gallery/31.jpg", hint: "image 31" },
  { src: "/images/gallery/32.jpg", hint: "image 32" },
  { src: "/images/gallery/33.jpg", hint: "image 33" },
  { src: "/images/gallery/34.jpg", hint: "image 34" },
  { src: "/images/gallery/35.jpg", hint: "image 35" },
  { src: "/images/gallery/36.jpg", hint: "image 36" },
  { src: "/images/gallery/37.jpg", hint: "image 37" },
  { src: "/images/gallery/38.jpg", hint: "image 38" },
  { src: "/images/gallery/39.jpg", hint: "image 39" },
  { src: "/images/gallery/40.jpg", hint: "image 40" },
  { src: "/images/gallery/41.jpg", hint: "image 41" },
  { src: "/images/gallery/42.jpg", hint: "image 42" },
  { src: "/images/gallery/43.jpg", hint: "image 43" },
  { src: "/images/gallery/44.jpg", hint: "image 44" },
  { src: "/images/gallery/45.jpg", hint: "image 45" },
  { src: "/images/gallery/46.jpg", hint: "image 46" },
  { src: "/images/gallery/47.jpg", hint: "image 47" },
  { src: "/images/gallery/48.jpg", hint: "image 48" },
  { src: "/images/gallery/49.jpg", hint: "image 49" },
  { src: "/images/gallery/50.jpg", hint: "image 50" },
  { src: "/images/gallery/51.jpg", hint: "image 51" },
  { src: "/images/gallery/52.jpg", hint: "image 51" },


  
];

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

  const [animationState, setAnimationState] = useState<('in' | 'out' | 'idle')[]>(
    new Array(activeGridConfig.length).fill('idle')
  );

  useEffect(() => {
    const timeouts = new Array(activeGridConfig.length).fill(null);

    const scheduleAnimation = (index: number) => {
        const randomDelay = Math.random() * 3000 + 1000; // Time spent hidden
        const holdDuration = 2000; // Time to hold after scaling in

        timeouts[index] = setTimeout(() => {
            // Scale in
            setAnimationState(prev => {
                const newState = [...prev];
                newState[index] = 'in';
                return newState;
            });

            // Schedule scale out after animation + hold
            timeouts[index] = setTimeout(() => {
                setAnimationState(prev => {
                    const newState = [...prev];
                    newState[index] = 'out';
                    return newState;
                });
                
                // Schedule next cycle after scale out animation finishes
                 timeouts[index] = setTimeout(() => {
                    scheduleAnimation(index);
                }, 500);

            }, 500 + holdDuration); // 0.5s for scale-in animation + 2s hold

        }, randomDelay);
    };

    activeGridConfig.forEach((_, index) => {
        scheduleAnimation(index);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [activeGridConfig]);

  return (
    <div
      className="relative h-[400px] sm:h-[500px] w-full max-w-4xl mx-auto bg-grid"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      {activeGridConfig.map((style, index) => (
        <div
          key={index}
          className={cn(
            "absolute rounded-lg overflow-hidden shadow-lg",
            animationState[index] === 'in' && 'scale-in-center-normal',
            animationState[index] === 'out' && 'scale-out-center-normal',
            animationState[index] === 'idle' && 'opacity-0'
          )}
          style={{ ...style, animationDuration: '0.5s' }}
        >
          <Image
            src={images[index % images.length].src}
            alt={`Memory ${index + 1}`}
            width={parseInt(style.width)}
            height={parseInt(style.height)}
            className="w-full h-full object-cover"
            data-ai-hint={images[index % images.length].hint}
          />
        </div>
      ))}
    </div>
  );
};

export default MemoriesGallery;
