
"use client";

import Image from "next/image";
import { useState, Suspense, lazy } from 'react';
import { Button } from "@/components/ui/button";
import { Users, Book, Building, Star, GraduationCap, PartyPopper, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import imageData from "@/lib/placeholder-images.json";
import { Skeleton } from "@/components/ui/skeleton";

const MemoriesGallery = lazy(() => import("@/components/memories-gallery"));

const eventCategories = [
    {
        id: 'capstone',
        title: 'Capstone Project',
        icon: <Book className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', imageId: 'influencer-video-thumb', title: 'Power of Influence!', url: 'https://www.youtube.com/embed/nEwGfB7eU8A' },
            { type: 'image', imageId: 'capstone-presentation' },
            { type: 'video', imageId: 'viral-video-thumb', title: 'Making soda viral...', url: 'https://www.youtube.com/embed/xv-n_m4n4iU' },
            { type: 'image', imageId: 'brainstorming' },
            { type: 'video', imageId: 'launch-video-thumb', title: 'Founder Rated 10/10', url: 'https://www.youtube.com/embed/W9nZ6u15yis' },
            { type: 'image', imageId: 'prototype' },
            { type: 'image', imageId: 'final-award' },
            { type: 'image', imageId: 'group-photo' },
        ]
    },
    {
        id: 'agency',
        title: 'Agency Visits',
        icon: <Building className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', imageId: 'agency-office-thumb', title: 'A Day at a Top Agency', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'office-tour' },
            { type: 'video', imageId: 'networking-thumb', title: 'Networking with Pros', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'meeting-execs' },
            { type: 'video', imageId: 'ad-campaign-thumb', title: 'Agency Case Study', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'creative-dept' },
            { type: 'image', imageId: 'team-collab' },
            { type: 'image', imageId: 'company-logo-agency' },
        ]
    },
    {
        id: 'super_sessions',
        title: 'Super Sessions',
        icon: <Star className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', imageId: 'ai-marketing-thumb', title: 'AI in Marketing', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'expert-speaker' },
            { type: 'video', imageId: 'content-workshop-thumb', title: 'Content Creation Masterclass', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'interactive-workshop' },
            { type: 'video', imageId: 'seo-session-thumb', title: 'Advanced SEO Techniques', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'q-and-a' },
            { type: 'image', imageId: 'networking-break' },
            { type: 'image', imageId: 'presentation-slide' },
        ]
    },
    {
        id: 'co_curricular',
        title: 'Co-Curricular Activities',
        icon: <PartyPopper className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', imageId: 'student-fest-thumb', title: 'Marketing Fest Highlights', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'sports-day' },
            { type: 'video', imageId: 'competition-thumb', title: 'Competition Highlights', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'debate-competition' },
            { type: 'video', imageId: 'club-activity-thumb', title: 'Club Activity Highlights', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'hackathon' },
            { type: 'image', imageId: 'art-exhibit' },
            { type: 'image', imageId: 'music-performance' },
        ]
    },
    {
        id: 'extracurricular',
        title: 'Extracurricular Activities',
        icon: <Users className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', imageId: 'fun-fair-thumb', title: 'Fun Fair', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'student-fair' },
            { type: 'video', imageId: 'annual-day-thumb', title: 'Annual Day', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'fun-students' },
            { type: 'video', imageId: 'holi-thumb', title: 'Holi Celebrations', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'celebration' },
            { type: 'image', imageId: 'party' },
            { type: 'image', imageId: 'dancing-students' },
        ]
    },
    {
        id: 'graduation',
        title: 'Graduation',
        icon: <GraduationCap className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', imageId: 'grad-ceremony-thumb', title: 'Graduation Day 2023', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'throwing-caps' },
            { type: 'video', imageId: 'alumni-speech-thumb', title: 'Alumni Speak', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'receiving-degree' },
            { type: 'video', imageId: 'grad-batch-thumb', title: 'Batch of 2023', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', imageId: 'group-of-graduates' },
            { type: 'image', imageId: 'happy-graduate' },
            { type: 'image', imageId: 'convocation' },
        ]
    }
];

const InfiniteScroller = ({ children, speed = "slow" }: { children: React.ReactNode, speed?: "slow" | "normal" | "fast" }) => {
    return (
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
        >
          <ul className={cn(
                "flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:pause",
                speed === "slow" && "animation-duration-80s",
                speed === "normal" && "animation-duration-40s",
                speed === "fast" && "animation-duration-20s",
          )}>
            {children}
          </ul>
          <ul className={cn(
                "flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll group-hover:pause",
                speed === "slow" && "animation-duration-80s",
                speed === "normal" && "animation-duration-40s",
                speed === "fast" && "animation-duration-20s",
          )} aria-hidden="true">
            {children}
          </ul>
        </div>
      );
}

export default function GalleryPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState(eventCategories[0].id);
    const activeCategory = eventCategories.find(cat => cat.id === activeTab) || eventCategories[0];
    const [contentKey, setContentKey] = useState(0);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        setContentKey(prevKey => prevKey + 1); // Change key to trigger re-animation
    };
  
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary">Our Gallery</h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into life at Primezone Computer Education. Explore our campus, events, and student activities.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Suspense fallback={<Skeleton className="h-[400px] sm:h-[500px] w-full max-w-4xl mx-auto" />}>
            <MemoriesGallery />
        </Suspense>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Event Highlights</h2>
            <p className="text-muted-foreground mt-2">Explore the vibrant life at Primezone</p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <div className="bg-background rounded-lg p-2 md:p-4 shadow-sm">
                    <ul className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto pb-2 md:pb-0">
                    {eventCategories.map(category => (
                        <li key={category.id} className="flex-shrink-0">
                        <button
                            onClick={() => handleTabClick(category.id)}
                            className={cn(
                            "w-full text-left px-3 py-2 rounded-md flex items-center transition-colors text-sm md:text-base",
                            activeTab === category.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            )}
                        >
                            {category.icon} {category.title}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="md:col-span-3">
              <div key={contentKey} className="space-y-8 animate-fade-in-up">
                <h3 className="text-2xl md:text-3xl font-bold font-headline">{activeCategory.title}</h3>
                
                <div>
                  {(activeCategory.media?.length || 0) > 0 ? (
                    <InfiniteScroller speed="slow">
                        {activeCategory.media.map((item, index) => {
                           const imageInfo = imageData.find(img => img.id === item.imageId);
                           if (!imageInfo) return null;
                           
                           return (
                           <li key={`media-${index}`} className="w-64 md:w-80 flex-shrink-0">
                             {item.type === 'video' ? (
                                <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
                                  <DialogTrigger asChild>
                                    <div
                                      onClick={() => setSelectedVideo((item as any).url)}
                                      className="relative group cursor-pointer"
                                    >
                                      <Image
                                        src={imageInfo.src}
                                        alt={(item as any).title || ""}
                                        width={imageInfo.width}
                                        height={imageInfo.height}
                                        className="w-full h-auto object-cover rounded-lg shadow-none md:shadow-md transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={imageInfo.hint}
                                      />
                                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayCircle className="h-12 w-12 md:h-16 md:w-16 text-white" />
                                      </div>
                                      <p className="mt-2 font-semibold text-center text-sm md:text-base">{(item as any).title}</p>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-3xl p-0">
                                     <DialogTitle className="sr-only">{(item as any).title}</DialogTitle>
                                    {selectedVideo && (
                                      <div className="aspect-video">
                                        <iframe
                                          src={selectedVideo}
                                          title="YouTube video player"
                                          frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                          className="w-full h-full"
                                        ></iframe>
                                      </div>
                                    )}
                                  </DialogContent>
                                </Dialog>
                             ) : (
                                <Image
                                  src={imageInfo.src}
                                  alt={(item as any).alt || ""}
                                  width={imageInfo.width}
                                  height={imageInfo.height}
                                  className="w-full h-auto object-cover rounded-lg shadow-none md:shadow-md"
                                  data-ai-hint={imageInfo.hint}
                                />
                             )}
                           </li>
                         )})}
                    </InfiniteScroller>
                  ) : (
                    <div className="text-center py-12 bg-background rounded-lg">
                      <p className="text-muted-foreground">No media available for this category.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}