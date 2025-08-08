
"use client";

import Image from "next/image";
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb } from "lucide-react";
import MemoriesGallery from "@/components/memories-gallery";
import ScrollStack, { ScrollStackItem } from "@/components/scroll-stack";

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

const events = [
    { 
        name: "15 Aug", 
        images: [
            { src: 'https://placehold.co/600x400.png', hint: 'Indian flag' },
            { src: 'https://placehold.co/600x400.png', hint: 'students celebrating' },
            { src: 'https://placehold.co/600x400.png', hint: 'independence day event' },
            { src: 'https://placehold.co/600x400.png', hint: 'cultural program' },
            { src: 'https://placehold.co/600x400.png', hint: 'group photo' },
            { src: 'https://placehold.co/600x400.png', hint: 'patriotic performance' },
            { src: 'https://placehold.co/600x400.png', hint: 'Tricolour balloons' },
            { src: 'https://placehold.co/600x400.png', hint: 'Campus decoration' },
        ]
    },
    { 
        name: "26 Jan", 
        images: [
            { src: 'https://placehold.co/600x400.png', hint: 'republic day parade' },
            { src: 'https://placehold.co/600x400.png', hint: 'flag hoisting' },
            { src: 'https://placehold.co/600x400.png', hint: 'student performance' },
            { src: 'https://placehold.co/600x400.png', hint: 'campus decoration' },
            { src: 'https://placehold.co/600x400.png', hint: 'students in ethnic wear' },
            { src: 'https://placehold.co/600x400.png', hint: 'republic day speeches' },
            { src: 'https://placehold.co/600x400.png', hint: 'cultural dance' },
            { src: 'https://placehold.co/600x400.png', hint: 'proud students' },
        ]
    },
    { 
        name: "Picnic", 
        images: [
            { src: 'https://placehold.co/600x400.png', hint: 'students on a picnic' },
            { src: 'https://placehold.co/600x400.png', hint: 'outdoor games' },
            { src: 'https://placehold.co/600x400.png', hint: 'group lunch' },
            { src: 'https://placehold.co/600x400.png', hint: 'fun activities' },
            { src: 'https://placehold.co/600x400.png', hint: 'scenic view' },
            { src: 'https://placehold.co/600x400.png', hint: 'laughing students' },
            { src: 'https://placehold.co/600x400.png', hint: 'bus journey' },
            { src: 'https://placehold.co/600x400.png', hint: 'bonfire' },
        ]
    },
    { 
        name: "Resort", 
        images: [
            { src: 'https://placehold.co/600x400.png', hint: 'students at a resort' },
            { src: 'https://placehold.co/600x400.png', hint: 'swimming pool fun' },
            { src: 'https://placehold.co/600x400.png', hint: 'team building games' },
            { src: 'https://placehold.co/600x400.png', hint: 'relaxing by the pool' },
            { src: 'https://placehold.co/600x400.png', hint: 'resort group photo' },
            { src: 'https://placehold.co/600x400.png', hint: 'adventure sports' },
            { src: 'https://placehold.co/600x400.png', hint: 'evening party' },
            { src: 'https://placehold.co/600x400.png', hint: 'luxury rooms' },
        ]
    },
    { 
        name: "DJ Night", 
        images: [
            { src: 'https://placehold.co/600x400.png', hint: 'students dancing' },
            { src: 'https://placehold.co/600x400.png', hint: 'dj setup' },
            { src: 'https://placehold.co/600x400.png', hint: 'party lights' },
            { src: 'https://placehold.co/600x400.png', hint: 'crowd enjoying music' },
            { src: 'https://placehold.co/600x400.png', hint: 'fun moments at party' },
            { src: 'https://placehold.co/600x400.png', hint: 'laser show' },
            { src: 'https://placehold.co/600x400.png', hint: 'group of friends' },
            { src: 'https://placehold.co/600x400.png', hint: 'energetic dance floor' },
        ]
    },
    { 
        name: "Seminars", 
        images: [
            { src: 'https://placehold.co/600x400.png', hint: 'guest speaker' },
            { src: 'https://placehold.co/600x400.png', hint: 'students attending seminar' },
            { src: 'https://placehold.co/600x400.png', hint: 'interactive session' },
            { src: 'https://placehold.co/600x400.png', hint: 'q&a session' },
            { src: 'https://placehold.co/600x400.png', hint: 'networking event' },
            { src: 'https://placehold.co/600x400.png', hint: 'industry experts' },
            { src: 'https://placehold.co/600x400.png', hint: 'workshop' },
            { src: 'https://placehold.co/600x400.png', hint: 'certificate distribution' },
        ]
    },
    { 
        name: "Corporate Training", 
        images: [
            { src: 'https://placehold.co/600x400.png', hint: 'corporate training session' },
            { src: 'https://placehold.co/600x400.png', hint: 'professionals in a workshop' },
            { src: 'https://placehold.co/600x400.png', hint: 'team collaboration' },
            { src: 'https://placehold.co/600x400.png', hint: 'presentation' },
            { src: 'https://placehold.co/600x400.png', hint: 'skill development' },
            { src: 'https://placehold.co/600x400.png', hint: 'business meeting' },
            { src: 'https://placehold.co/600x400.png', hint: 'office environment' },
            { src: 'https://placehold.co/600x400.png', hint: 'successful team' },
        ]
    },
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

      <section id="photo-gallery" className="py-16 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">Photo Glimpses</h2>
            <div className="relative w-full">
              <ScrollStack>
                {events.map((event, index) => (
                  <ScrollStackItem key={index}>
                    <div className="p-8 bg-card rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-4">{event.name}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {event.images.map((image, imgIndex) => (
                          <Image 
                            key={imgIndex}
                            src={image.src}
                            alt={image.hint}
                            width={300}
                            height={200}
                            className="rounded-md object-cover"
                            data-ai-hint={image.hint}
                          />
                        ))}
                      </div>
                    </div>
                  </ScrollStackItem>
                ))}
              </ScrollStack>
            </div>
        </div>
      </section>
    </div>
  );
}
