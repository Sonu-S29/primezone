
"use client";

import Image from "next/image";
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pilcrow, BookOpenText, Users, Lightbulb } from "lucide-react";
import MemoriesGallery from "@/components/memories-gallery";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

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
];

const galleryGlimpses = [
    { type: 'image', src: 'https://placehold.co/400x600.png', alt: 'Team Photo', hint: 'team photo', className: 'w-[300px] h-[250px]' },
    { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Cultural Day', hint: 'cultural event', label: 'Cultural Day', className: 'w-[300px] h-[250px]' },
    { type: 'card', title: 'Diwali Celebration', icon: <Pilcrow/>, className: 'w-[350px] h-[250px] bg-primary text-primary-foreground' },
    { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Group Photo Outdoor', hint: 'outdoor event', className: 'w-[250px] h-[150px] self-start' },
    { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Group in traditional wear', hint: 'traditional wear', className: 'w-[300px] h-[250px]' },
    { type: 'card', title: "Teacher's Day", icon: <BookOpenText/>, className: 'w-[350px] h-[250px] bg-primary text-primary-foreground' },
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
                      <div className="absolute top-4 w-full flex justify-between px-4">
                        <Users className="h-8 w-8 text-white/80" />
                        <Lightbulb className="h-8 w-8 text-white/80" />
                      </div>
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
                <a href="#photo-gallery">Explore more Glimpses</a>
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


      <section id="photo-gallery" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">Photo Glimpses</h2>
        <div className="relative w-full overflow-hidden group">
            <div className="flex animate-scroll group-hover:pause">
                {[...galleryGlimpses, ...galleryGlimpses].map((item, index) => (
                    <div key={index} className={cn("flex-shrink-0 mx-2", item.className)}>
                        {item.type === 'image' && item.src && (
                            <Card className="h-full w-full overflow-hidden relative">
                                <Image
                                    src={item.src}
                                    alt={item.alt || 'Gallery image'}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    data-ai-hint={item.hint}
                                />
                                {item.label && (
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                        <h3 className="text-white text-xl font-bold">{item.label}</h3>
                                    </div>
                                )}
                            </Card>
                        )}
                        {item.type === 'card' && (
                             <Card className="h-full w-full flex flex-col justify-between p-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    {item.icon && <div className="text-6xl opacity-20">{item.icon}</div>}
                                </div>
                                <div className="flex justify-end">
                                    <Button variant="secondary" size="icon" className="rounded-full">
                                        <ArrowRight />
                                    </Button>
                                </div>
                            </Card>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
