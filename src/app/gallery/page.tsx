
"use client";

import Image from "next/image";
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const studentProjects = [
  {
    src: "https://placehold.co/400x600.png",
    alt: "Student project with Lifebuoy",
    brand: "Lifebuoy",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    hint: "student project"
  },
  {
    src: "https://placehold.co/400x600.png",
    alt: "Student project with FAE Beauty",
    brand: "FAE BEAUTY",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
  {
    src: "https://placehold.co/400x600.png",
    alt: "Student project with Allen Solly",
    brand: "Allen Solly",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Classroom session in progress", hint: "classroom students" },
  { src: "https://placehold.co/400x600.png", alt: "Student receiving a certificate", hint: "student certificate" },
  { src: "https://placehold.co/600x400.png", alt: "Modern computer lab", hint: "computer lab" },
  { src: "https://placehold.co/600x400.png", alt: "Group of students collaborating", hint: "students collaborating" },
  { src: "https://placehold.co/400x600.png", alt: "Instructor helping a student", hint: "teacher student" },
  { src: "https://placehold.co/600x400.png", alt: "Annual tech event", hint: "tech event" },
  { src: "https://placehold.co/600x400.png", alt: "Seminar on web development", hint: "seminar presentation" },
  { src: "https://placehold.co/400x600.png", alt: "Student working on a project", hint: "student coding" },
  { src: "https://placehold.co/600x400.png", alt: "Our institution building", hint: "education building" },
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
      
      <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">Student Projects</h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll hover:pause">
              {[...studentProjects, ...studentProjects].map((project, index) => (
                <DialogTrigger asChild key={index} onClick={() => setSelectedVideo(project.videoUrl)}>
                  <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer flex-shrink-0 w-80 mx-4">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      data-ai-hint={project.hint}
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4">
                      <PlayCircle className="h-16 w-16 text-white/80 group-hover:text-white transition-colors" />
                      <div className="absolute bottom-16 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-center">
                        <p className="font-bold text-primary">{project.brand}</p>
                      </div>
                      <div className="absolute bottom-4 bg-primary/90 rounded-full px-6 py-2">
                        <p className="text-primary-foreground font-bold tracking-wider">STUDENT PROJECT</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
              ))}
            </div>
          </div>
           <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <a href="#photo-gallery">Explore more Glimps</a>
              </Button>
            </div>
        </section>
        {selectedVideo && (
            <DialogContent className="max-w-3xl h-auto p-0">
                <DialogHeader>
                  <DialogTitle>Student Project Video</DialogTitle>
                </DialogHeader>
                <div className="aspect-video">
                    <iframe
                        src={selectedVideo}
                        title="Student Project Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </DialogContent>
        )}
      </Dialog>


      <section id="photo-gallery" className="container mx-auto px-4 py-16">
         <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">Photo Glimpses</h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.hint}
                    />
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
