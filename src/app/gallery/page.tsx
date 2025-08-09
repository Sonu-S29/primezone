
"use client";

import Image from "next/image";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, PlayCircle } from "lucide-react";
import MemoriesGallery from "@/components/memories-gallery";
import Link from "next/link";

const studentProjects = [
  {
    src: "https://ggayane.github.io/css-experiments/cards/force_magice.png",
    alt: "Student project with Lifebuoy",
    brand: "Lifebuoy",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    hint: "student project"
  },
  {
    src: "https://ggayane.github.io/css-experiments/cards/force_outter.png",
    alt: "Student project with FAE Beauty",
    brand: "FAE BEAUTY",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
  {
    src: "https://ggayane.github.io/css-experiments/cards/force_circle.png",
    alt: "Student project with Allen Solly",
    brand: "Allen Solly",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
   {
    src: "https://placehold.co/400x600.png",
    alt: "Student project 4",
    brand: "Brand D",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
   {
    src: "https://placehold.co/400x600.png",
    alt: "Student project 5",
    brand: "Brand E",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
   {
    src: "https://placehold.co/400x600.png",
    alt: "Student project 6",
    brand: "Brand F",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
   {
    src: "https://placehold.co/400x600.png",
    alt: "Student project 7",
    brand: "Brand G",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
    {
    src: "https://placehold.co/400x600.png",
    alt: "Student project 8",
    brand: "Brand H",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  }
];


export default function GalleryPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into life at Primezone Computer Education. Explore our campus, events, and student activities.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">Our Memories</h2>
        <MemoriesGallery />
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-20">Student Projects</h2>
            <div className="relative flex justify-center items-center h-[500px]">
                {/* Orbiting images */}
                {studentProjects.map((project, index) => {
                    const angle = (index / studentProjects.length) * 360;
                    return (
                        <div
                            key={index}
                            className="absolute w-32 h-48 rounded-lg overflow-hidden shadow-lg animate-orbit"
                            style={{
                                transformOrigin: '300px',
                                animationDelay: `-${index * 2}s`,
                            }}
                        >
                            <Image
                                src={project.src}
                                alt={project.alt}
                                width={128}
                                height={192}
                                className="w-full h-full object-cover"
                                data-ai-hint={project.hint}
                            />
                        </div>
                    );
                })}

                {/* Central content */}
                <div className="relative z-10 text-center bg-background/70 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-md">
                    <div className="flex justify-center mb-4">
                        <Users className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Showcasing Talent</h3>
                    <p className="text-muted-foreground mb-6">
                        Our students create amazing projects. Explore their work and see what's possible with the skills you can learn at Primezone.
                    </p>
                    <Button asChild>
                        <Link href="/courses">Explore Courses</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
