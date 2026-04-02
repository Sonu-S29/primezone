"use client";
import React, { useEffect, useRef } from 'react';
import './particle-hero.css';
import { Button } from './ui/button';
import Link from 'next/link';
import { allCoursesList } from '@/lib/course-data';
import LogoLoop from './LogoLoop';
import AccreditationLogos from './accreditation-logos';
import { motion } from "framer-motion";

const courseLogos = allCoursesList.map(course => ({
  node: <span className="text-sm font-semibold text-foreground/60">{course}</span>,
  title: course,
}));

const techLogos = [
    { src: "/images/tech/word.svg", alt: "MS Word" },
    { src: "/images/tech/excel.svg", alt: "MS Excel" },
    { src: "/images/tech/powerpoint.svg", alt: "MS PowerPoint" },
    { src: "/images/tech/tally.svg", alt: "Tally Prime" },
    { src: "/images/tech/photoshop.svg", alt: "Adobe Photoshop" },
    { src: "/images/tech/illustrator.svg", alt: "Adobe Illustrator" },
    { src: "/images/tech/indesign.svg", alt: "Adobe InDesign" },
    { src: "/images/tech/coreldraw.svg", alt: "CorelDRAW" },
    { src: "/images/tech/canva.svg", alt: "Canva" },
    { src: "/images/tech/python.svg", alt: "Python" },
    { src: "/images/tech/java.svg", alt: "Java" },
    { src: "/images/tech/mysql.svg", alt: "MySQL" },
    { src: "/images/tech/html.svg", alt: "HTML5" },
    { src: "/images/tech/css.svg", alt: "CSS3" },
    { src: "/images/tech/js.svg", alt: "JavaScript" },
    { src: "/images/tech/react.svg", alt: "React" },
    { src: "/images/tech/node.svg", alt: "Node.js" },
    { src: "/images/tech/wordpress.svg", alt: "WordPress" },
    { src: "/images/tech/google-ads.svg", alt: "Google Ads" },
    { src: "/images/tech/ga.svg", alt: "Google Analytics" },
    { src: "/images/tech/powerbi.svg", alt: "Power BI" },
    { src: "/images/tech/tableau.svg", alt: "Tableau" },
    { src: "/images/tech/premiere.svg", alt: "Premiere Pro" },
    { src: "/images/tech/after-effects.svg", alt: "After Effects" },
];

const ParticleHero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let width: number, height: number;
        const PARTICLE_COLOR = 'hsl(var(--accent))';
        const MAX_PARTICLES = 4500;
        let isHovering = false;
        let mouseX = 0;
        let mouseY = 0;

        function setCanvasSize() {
            if (!heroRef.current) return;
            width = heroRef.current.clientWidth;
            height = heroRef.current.clientHeight;
            canvas.width = width;
            canvas.height = height;
        }

        class Particle {
            x: number;
            y: number;
            radius: number;
            alpha: number;
            vx: number;
            vy: number;
            friction: number;
            gravity: number;
            life: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * 0.8 + 0.5;
                this.alpha = 1;

                const angle = Math.random() * 2 * Math.PI;
                const speed = Math.random() * 2 + 1;

                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;

                this.friction = 0.98;
                this.gravity = 0.05;
                this.life = 100;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy + this.gravity;

                this.vx *= this.friction;
                this.vy *= this.friction;

                this.alpha -= 0.01;
                this.life--;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = PARTICLE_COLOR;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        function spawnParticleField() {
            if (!isHovering) return;

            const spawnRange = 0.3;
            const particlesToSpawn = particles.length < MAX_PARTICLES * 0.5 ? 5 : 2;

            for (let i = 0; i < particlesToSpawn; i++) {
                if (particles.length >= MAX_PARTICLES) break;

                let x = mouseX + (Math.random() - 0.5) * width * spawnRange;
                let y = mouseY + (Math.random() - 0.5) * height * spawnRange;

                const p = new Particle(x, y);

                const angle = Math.atan2(y - mouseY, x - mouseX);
                const distanceFactor = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)) / (width * 0.5);
                const initialSpeed = 1 + distanceFactor * 5;

                p.vx = Math.cos(angle) * initialSpeed * 0.5;
                p.vy = Math.sin(angle) * initialSpeed * 0.5;
                p.friction = 0.99;
                p.gravity = 0;
                p.life = Math.random() * 500 + 200;
                p.alpha = Math.random() * 0.5 + 0.2;
                particles.push(p);
            }
        }

        let animationFrameId: number;
        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            spawnParticleField();

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();
                p.draw();

                if (p.life <= 0 || p.alpha <= 0.01 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseEnter = () => {
            isHovering = true;
        };

        const handleMouseLeave = () => {
            isHovering = false;
        };
        
        setCanvasSize();
        animate();
        
        window.addEventListener('resize', setCanvasSize);
        const heroElement = heroRef.current;
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove);
            heroElement.addEventListener('mouseenter', handleMouseEnter);
            heroElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove);
                heroElement.removeEventListener('mouseenter', handleMouseEnter);
                heroElement.removeEventListener('mouseleave', handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section ref={heroRef} id="heroContainer" className="relative h-auto md:min-h-screen -mt-24 w-full bg-background overflow-hidden pb-8 md:pb-0">
            <canvas ref={canvasRef} id="particle-canvas" />
            <div className="hero-content pt-12 md:pt-40">
                <h1 className="text-4xl md:text-6xl font-bold font-headline mb-2 text-foreground px-4 leading-tight">
                    Unlock Your Potential <br /> with Primezone
                </h1>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                        opacity: 1, 
                        y: [0, -5, 0] 
                    }}
                    transition={{ 
                        y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                        opacity: { duration: 0.8 } 
                    }}
                    className="text-sm md:text-xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 px-4 drop-shadow-sm"
                    style={{ fontFamily: 'cursive' }}
                >
                    Build Your Future Right Here
                </motion.p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/courses">Explore Courses</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/enroll">Enroll Now</Link>
                    </Button>
                </div>
                 <div className="mt-8 w-[90%] md:w-[85%]">
                    <AccreditationLogos />
                </div>
                 <div className="mt-6 w-full flex flex-col gap-4 overflow-hidden">
                  <LogoLoop
                    logos={courseLogos}
                    speed={60}
                    direction="left"
                    logoHeight={20}
                    gap={40}
                    fadeOut
                    fadeOutColor="hsl(var(--background))"
                  />
                  <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="right"
                    logoHeight={35}
                    gap={50}
                    fadeOut
                    fadeOutColor="hsl(var(--background))"
                  />
                </div>
            </div>
        </section>
    );
};

export default ParticleHero;