
"use client";

import Image from "next/image";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, Book, Building, Star, GraduationCap, PartyPopper, PlayCircle } from "lucide-react";
import MemoriesGallery from "@/components/memories-gallery";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const studentProjects = [
  {
    src: "https://placehold.co/128x192.png",
    alt: "Student project with Lifebuoy",
    brand: "Lifebuoy",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    hint: "student project"
  },
  {
    src: "https://placehold.co/128x192.png",
    alt: "Student project with FAE Beauty",
    brand: "FAE BEAUTY",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
  {
    src: "https://placehold.co/128x192.png",
    alt: "Student project with Allen Solly",
    brand: "Allen Solly",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
   {
    src: "https://placehold.co/128x192.png",
    alt: "Student project 4",
    brand: "Brand D",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
   {
    src: "https://placehold.co/128x192.png",
    alt: "Student project 5",
    brand: "Brand E",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
   {
    src: "https://placehold.co/128x192.png",
    alt: "Student project 6",
    brand: "Brand F",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
   {
    src: "https://placehold.co/128x192.png",
    alt: "Student project 7",
    brand: "Brand G",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  },
    {
    src: "https://placehold.co/128x192.png",
    alt: "Student project 8",
    brand: "Brand H",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hint: "student project"
  }
];

const eventCategories = [
    {
        id: 'capstone',
        title: 'Capstone Project',
        icon: <Book className="mr-2 h-5 w-5" />,
        videos: [
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Power of Influence!', hint: 'influencer marketing', url: 'https://www.youtube.com/embed/nEwGfB7eU8A' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Making soda viral...', hint: 'viral marketing', url: 'https://www.youtube.com/embed/xv-n_m4n4iU' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Founder Rated 10/10', hint: 'product launch', url: 'https://www.youtube.com/embed/W9nZ6u15yis' }
        ],
        images: [
            { src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 1', hint: 'team presentation' },
            { src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 2', hint: 'students brainstorming' },
            { src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 3', hint: 'project prototype' },
            { src: 'https://placeholdco/400x300.png', alt: 'Capstone Image 4', hint: 'final project award' },
            { src: 'https://placehold.co/400x300.png', alt: 'Capstone Image 5', hint: 'group photo' },
        ]
    },
    {
        id: 'agency',
        title: 'Agency Visits',
        icon: <Building className="mr-2 h-5 w-5" />,
        videos: [
            { thumbnail: 'https://placehold.co/600x400.png', title: 'A Day at a Top Agency', hint: 'marketing agency office', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Networking with Pros', hint: 'business networking event', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Agency Case Study', hint: 'successful ad campaign', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
        images: [
            { src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 1', hint: 'office tour' },
            { src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 2', hint: 'meeting with executives' },
            { src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 3', hint: 'creative department' },
            { src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 4', hint: 'team collaboration' },
            { src: 'https://placehold.co/400x300.png', alt: 'Agency Visit 5', hint: 'company logo' },
        ]
    },
    {
        id: 'super_sessions',
        title: 'Super Sessions',
        icon: <Star className="mr-2 h-5 w-5" />,
        videos: [
            { thumbnail: 'https://placehold.co/600x400.png', title: 'AI in Marketing', hint: 'artificial intelligence marketing', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Content Creation Masterclass', hint: 'content creation workshop', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Advanced SEO Techniques', hint: 'seo strategy session', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
        ],
        images: [
            { src: 'https://placehold.co/400x300.png', alt: 'Super Session 1', hint: 'expert speaker' },
            { src: 'https://placehold.co/400x300.png', alt: 'Super Session 2', hint: 'interactive workshop' },
            { src: 'https://placehold.co/400x300.png', alt: 'Super Session 3', hint: 'students asking questions' },
            { src: 'https://placehold.co/400x300.png', alt: 'Super Session 4', hint: 'networking break' },
            { src: 'https://placehold.co/400x300.png', alt: 'Super Session 5', hint: 'presentation slide' },
        ]
    },
    {
        id: 'co_curricular',
        title: 'Co-Curricular Activities',
        icon: <PartyPopper className="mr-2 h-5 w-5" />,
        videos: [
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Marketing Fest Highlights', hint: 'student festival', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Competition Highlights', hint: 'student competition', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Club Activity Highlights', hint: 'student club meeting', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
        images: [
            { src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 1', hint: 'sports day' },
            { src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 2', hint: 'debate competition' },
            { src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 3', hint: 'hackathon event' },
            { src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 4', hint: 'art exhibition' },
            { src: 'https://placehold.co/400x300.png', alt: 'Co-Curricular 5', hint: 'music performance' },
        ]
    },
    {
        id: 'extracurricular',
        title: 'Extracurricular Activities',
        icon: <Users className="mr-2 h-5 w-5" />,
        videos: [
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Fun Fair', hint: 'student fair', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Annual Day', hint: 'annual day', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Holi Celebrations', hint: 'holi festival', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
        images: [
            { src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 1', hint: 'fun fair' },
            { src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 2', hint: 'students having fun' },
            { src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 3', hint: 'celebration' },
            { src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 4', hint: 'party' },
            { src: 'https://placehold.co/400x300.png', alt: 'Extracurricular 5', hint: 'students dancing' },
        ]
    },
    {
        id: 'graduation',
        title: 'Graduation',
        icon: <GraduationCap className="mr-2 h-5 w-5" />,
        videos: [
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Graduation Day 2023', hint: 'graduation ceremony', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Alumni Speak', hint: 'alumni speech', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
            { thumbnail: 'https://placehold.co/600x400.png', title: 'Batch of 2023', hint: 'graduating batch', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
        images: [
            { src: 'https://placehold.co/400x300.png', alt: 'Graduation 1', hint: 'throwing caps' },
            { src: 'https://placehold.co/400x300.png', alt: 'Graduation 2', hint: 'receiving degree' },
            { src: 'https://placehold.co/400x300.png', alt: 'Graduation 3', hint: 'group of graduates' },
            { src: 'https://placehold.co/400x300.png', alt: 'Graduation 4', hint: 'happy graduate' },
            { src: 'https://placehold.co/400x300.png', alt: 'Graduation 5', hint: 'convocation ceremony' },
        ]
    }
];

const InfiniteScroller = ({ children, speed = "slow" }: { children: React.ReactNode, speed?: "slow" | "normal" | "fast" }) => {
    return (
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className={cn(
                "flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll",
                speed === "slow" && "animation-duration-80s",
                speed === "normal" && "animation-duration-40s",
                speed === "fast" && "animation-duration-20s",
          )}>
            {children}
          </ul>
          <ul className={cn(
                "flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll",
                "flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll",
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
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <ul className="space-y-2">
                  {eventCategories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleTabClick(category.id)}
                        className={cn(
                          "w-full text-left px-4 py-2 rounded-md flex items-center transition-colors",
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
                <h3 className="text-3xl font-bold font-headline">{activeCategory.title}</h3>
                
                {/* Videos Section */}
                <div>
                  <h4 className="text-xl font-bold mb-4">Videos</h4>
                  {(activeCategory.videos?.length || 0) > 0 ? (
                    <InfiniteScroller speed="slow">
                        {activeCategory.videos.map((video, index) => (
                           <li key={`video-${index}`} className="w-80 flex-shrink-0">
                             <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
                               <DialogTrigger asChild>
                                 <div
                                   onClick={() => setSelectedVideo(video.url)}
                                   className="relative group cursor-pointer"
                                 >
                                   <Image
                                     src={video.thumbnail}
                                     alt={video.title}
                                     width={600}
                                     height={400}
                                     className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                                     data-ai-hint={video.hint}
                                   />
                                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                     <PlayCircle className="h-16 w-16 text-white" />
                                   </div>
                                   <p className="mt-2 font-semibold text-center">{video.title}</p>
                                 </div>
                               </DialogTrigger>
                               <DialogContent className="max-w-3xl p-0">
                                  <DialogTitle className="sr-only">{video.title}</DialogTitle>
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
                           </li>
                         ))}
                    </InfiniteScroller>
                  ) : (
                    <div className="text-center py-12 bg-background rounded-lg">
                      <p className="text-muted-foreground">No videos available for this category.</p>
                    </div>
                  )}
                </div>

                {/* Images Section */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Images</h4>
                    {(activeCategory.images?.length || 0) > 0 ? (
                         <InfiniteScroller speed="normal">
                            {activeCategory.images.map((image, index) => (
                                <li key={`image-${index}`} className="w-80 flex-shrink-0">
                                    <Image
                                      src={image.src}
                                      alt={image.alt}
                                      width={400}
                                      height={300}
                                      className="w-full h-auto object-cover rounded-lg shadow-md"
                                      data-ai-hint={image.hint}
                                    />
                                </li>
                            ))}
                         </InfiniteScroller>
                    ) : (
                        <div className="text-center py-12 bg-background rounded-lg">
                            <p className="text-muted-foreground">No images available for this category.</p>
                        </div>
                    )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-card">
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

    