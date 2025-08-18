
"use client";

import Image from "next/image";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, Book, Building, Star, GraduationCap, PartyPopper, PlayCircle } from "lucide-react";
import MemoriesGallery from "@/components/memories-gallery";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const eventCategories = [
    {
        id: 'capstone',
        title: 'Capstone Project',
        icon: <Book className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Power of Influence!', hint: 'influencer marketing', url: 'https://www.youtube.com/embed/nEwGfB7eU8A' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 1', hint: 'team presentation' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Making soda viral...', hint: 'viral marketing', url: 'https://www.youtube.com/embed/xv-n_m4n4iU' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 2', hint: 'students brainstorming' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Founder Rated 10/10', hint: 'product launch', url: 'https://www.youtube.com/embed/W9nZ6u15yis' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 3', hint: 'project prototype' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 4', hint: 'final project award' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 5', hint: 'group photo' },
        ]
    },
    {
        id: 'agency',
        title: 'Agency Visits',
        icon: <Building className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'A Day at a Top Agency', hint: 'marketing agency office', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 1', hint: 'office tour' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Networking with Pros', hint: 'business networking event', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 2', hint: 'meeting with executives' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Agency Case Study', hint: 'successful ad campaign', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 3', hint: 'creative department' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 4', hint: 'team collaboration' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 5', hint: 'company logo' },
        ]
    },
    {
        id: 'super_sessions',
        title: 'Super Sessions',
        icon: <Star className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'AI in Marketing', hint: 'artificial intelligence marketing', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Super Session 1', hint: 'expert speaker' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Content Creation Masterclass', hint: 'content creation workshop', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Super Session 2', hint: 'interactive workshop' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Advanced SEO Techniques', hint: 'seo strategy session', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Super Session 3', hint: 'students asking questions' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Super Session 4', hint: 'networking break' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Super Session 5', hint: 'presentation slide' },
        ]
    },
    {
        id: 'co_curricular',
        title: 'Co-Curricular Activities',
        icon: <PartyPopper className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Marketing Fest Highlights', hint: 'student festival', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 1', hint: 'sports day' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Competition Highlights', hint: 'student competition', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 2', hint: 'debate competition' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Club Activity Highlights', hint: 'student club meeting', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 3', hint: 'hackathon event' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 4', hint: 'art exhibition' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 5', hint: 'music performance' },
        ]
    },
    {
        id: 'extracurricular',
        title: 'Extracurricular Activities',
        icon: <Users className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Fun Fair', hint: 'student fair', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 1', hint: 'fun fair' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Annual Day', hint: 'annual day', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 2', hint: 'students having fun' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Holi Celebrations', hint: 'holi festival', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 3', hint: 'celebration' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 4', hint: 'party' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 5', hint: 'students dancing' },
        ]
    },
    {
        id: 'graduation',
        title: 'Graduation',
        icon: <GraduationCap className="mr-2 h-5 w-5" />,
        media: [
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Graduation Day 2023', hint: 'graduation ceremony', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Graduation 1', hint: 'throwing caps' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Alumni Speak', hint: 'alumni speech', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Graduation 2', hint: 'receiving degree' },
            { type: 'video', thumbnail: 'https://placehold.co/600x400.png', title: 'Batch of 2023', hint: 'graduating batch', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Graduation 3', hint: 'group of graduates' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Graduation 4', hint: 'happy graduate' },
            { type: 'image', src: 'https://placehold.co/400x300.png', alt: 'Graduation 5', hint: 'convocation ceremony' },
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
        <MemoriesGallery />
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
                        {activeCategory.media.map((item, index) => (
                           <li key={`media-${index}`} className="w-64 md:w-80 flex-shrink-0">
                             {item.type === 'video' ? (
                                <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
                                  <DialogTrigger asChild>
                                    <div
                                      onClick={() => setSelectedVideo(item.url)}
                                      className="relative group cursor-pointer"
                                    >
                                      <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover rounded-lg shadow-none md:shadow-md transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={item.hint}
                                      />
                                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayCircle className="h-12 w-12 md:h-16 md:w-16 text-white" />
                                      </div>
                                      <p className="mt-2 font-semibold text-center text-sm md:text-base">{item.title}</p>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-3xl p-0">
                                     <DialogTitle className="sr-only">{item.title}</DialogTitle>
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
                                  src={item.src}
                                  alt={item.alt}
                                  width={400}
                                  height={300}
                                  className="w-full h-auto object-cover rounded-lg shadow-none md:shadow-md"
                                  data-ai-hint={item.hint}
                                />
                             )}
                           </li>
                         ))}
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
