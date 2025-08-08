
"use client";

import Image from "next/image";
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb } from "lucide-react";
import MemoriesGallery from "@/components/memories-gallery";
import ScrollStack, { ScrollStackItem } from "@/components/scroll-stack";
import Stack from "@/components/stack";

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
            { id: 1, src: 'https://placehold.co/600x400.png', hint: 'Indian flag' },
            { id: 2, src: 'https://placehold.co/600x400.png', hint: 'students celebrating' },
            { id: 3, src: 'https://placehold.co/600x400.png', hint: 'independence day event' },
            { id: 4, src: 'https://placehold.co/600x400.png', hint: 'cultural program' },
            { id: 5, src: 'https://placehold.co/600x400.png', hint: 'group photo' },
            { id: 6, src: 'https://placehold.co/600x400.png', hint: 'patriotic performance' },
            { id: 7, src: 'https://placehold.co/600x400.png', hint: 'Tricolour balloons' },
            { id: 8, src: 'https://placehold.co/600x400.png', hint: 'Campus decoration' },
        ]
    },
    { 
        name: "26 Jan", 
        images: [
            { id: 9, src: 'https://placehold.co/600x400.png', hint: 'republic day parade' },
            { id: 10, src: 'https://placehold.co/600x400.png', hint: 'flag hoisting' },
            { id: 11, src: 'https://placehold.co/600x400.png', hint: 'student performance' },
            { id: 12, src: 'https://placehold.co/600x400.png', hint: 'campus decoration' },
            { id: 13, src: 'https://placehold.co/600x400.png', hint: 'students in ethnic wear' },
            { id: 14, src: 'https://placehold.co/600x400.png', hint: 'republic day speeches' },
            { id: 15, src: 'https://placehold.co/600x400.png', hint: 'cultural dance' },
            { id: 16, src: 'https://placehold.co/600x400.png', hint: 'proud students' },
        ]
    },
    { 
        name: "Picnic", 
        images: [
            { id: 17, src: 'https://placehold.co/600x400.png', hint: 'students on a picnic' },
            { id: 18, src: 'https://placehold.co/600x400.png', hint: 'outdoor games' },
            { id: 19, src: 'https://placehold.co/600x400.png', hint: 'group lunch' },
            { id: 20, src: 'https://placehold.co/600x400.png', hint: 'fun activities' },
            { id: 21, src: 'https://placehold.co/600x400.png', hint: 'scenic view' },
            { id: 22, src: 'https://placehold.co/600x400.png', hint: 'laughing students' },
            { id: 23, src: 'https://placehold.co/600x400.png', hint: 'bus journey' },
            { id: 24, src: 'https://placehold.co/600x400.png', hint: 'bonfire' },
        ]
    },
    { 
        name: "Resort", 
        images: [
            { id: 25, src: 'https://placehold.co/600x400.png', hint: 'students at a resort' },
            { id: 26, src: 'https://placehold.co/600x400.png', hint: 'swimming pool fun' },
            { id: 27, src: 'https://placehold.co/600x400.png', hint: 'team building games' },
            { id: 28, src: 'https://placehold.co/600x400.png', hint: 'relaxing by the pool' },
            { id: 29, src: 'https://placehold.co/600x400.png', hint: 'resort group photo' },
            { id: 30, src: 'https://placehold.co/600x400.png', hint: 'adventure sports' },
            { id: 31, src: 'https://placehold.co/600x400.png', hint: 'evening party' },
            { id: 32, src: 'https://placehold.co/600x400.png', hint: 'luxury rooms' },
        ]
    },
    { 
        name: "DJ Night", 
        images: [
            { id: 33, src: 'https://placehold.co/600x400.png', hint: 'students dancing' },
            { id: 34, src: 'https://placehold.co/600x400.png', hint: 'dj setup' },
            { id: 35, src: 'https://placehold.co/600x400.png', hint: 'party lights' },
            { id: 36, src: 'https://placehold.co/600x400.png', hint: 'crowd enjoying music' },
            { id: 37, src: 'https://placehold.co/600x400.png', hint: 'fun moments at party' },
            { id: 38, src: 'https://placehold.co/600x400.png', hint: 'laser show' },
            { id: 39, src: 'https://placehold.co/600x400.png', hint: 'group of friends' },
            { id: 40, src: 'https://placehold.co/600x400.png', hint: 'energetic dance floor' },
        ]
    },
    { 
        name: "Seminars", 
        images: [
            { id: 41, src: 'https://placehold.co/600x400.png', hint: 'guest speaker' },
            { id: 42, src: 'https://placehold.co/600x400.png', hint: 'students attending seminar' },
            { id: 43, src: 'https://placehold.co/600x400.png', hint: 'interactive session' },
            { id: 44, src: 'https://placehold.co/600x400.png', hint: 'q&a session' },
            { id: 45, src: 'https://placehold.co/600x400.png', hint: 'networking event' },
            { id: 46, src: 'https://placehold.co/600x400.png', hint: 'industry experts' },
            { id: 47, src: 'https://placehold.co/600x400.png', hint: 'workshop' },
            { id: 48, src: 'https://placehold.co/600x400.png', hint: 'certificate distribution' },
        ]
    },
    { 
        name: "Corporate Training", 
        images: [
            { id: 49, src: 'https://placehold.co/600x400.png', hint: 'corporate training session' },
            { id: 50, src: 'https://placehold.co/600x400.png', hint: 'professionals in a workshop' },
            { id: 51, src: 'https://placehold.co/600x400.png', hint: 'team collaboration' },
            { id: 52, src: 'https://placehold.co/600x400.png', hint: 'presentation' },
            { id: 53, src: 'https://placehold.co/600x400.png', hint: 'skill development' },
            { id: 54, src: 'https://placehold.co/600x400.png', hint: 'business meeting' },
            { id: 55, src: 'https://placehold.co/600x400.png', hint: 'office environment' },
            { id: 56, src: 'https://placehold.co/600x400.png', hint: 'successful team' },
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
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
                        <div className="flex items-center justify-center">
                          <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={false}
                            cardDimensions={{ width: 200, height: 200 }}
                            cardsData={event.images.slice(0, 4).map(img => ({ ...img, img: img.src }))}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Image 
                            src={event.images[4].src}
                            alt={event.images[4].hint}
                            width={600}
                            height={400}
                            className="rounded-md object-cover w-full h-auto"
                            data-ai-hint={event.images[4].hint}
                          />
                        </div>
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
