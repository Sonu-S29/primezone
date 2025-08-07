
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const events = [
    { 
        name: "15 Aug", 
        images: [
            { src: 'https://placehold.co/600x400.png', hint: 'Indian flag' },
            { src: 'https://placehold.co/600x400.png', hint: 'students celebrating' },
            { src: 'https://placehold.co/600x400.png', hint: 'independence day event' },
            { src: 'https://placehold.co/600x400.png', hint: 'cultural program' },
            { src: 'https://placehold.co/600x400.png', hint: 'group photo' },
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
        ]
    },
];

const IMAGE_DURATION = 5000; // 5 seconds per image

export default function EventGallery() {
    const [activeEventIndex, setActiveEventIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const imageTimer = setInterval(() => {
            setActiveImageIndex(prev => {
                const isLastImage = prev === events[activeEventIndex].images.length - 1;
                if (isLastImage) {
                    setActiveEventIndex(currentEvent => (currentEvent + 1) % events.length);
                    return 0;
                }
                return prev + 1;
            });
        }, IMAGE_DURATION);

        return () => clearInterval(imageTimer);
    }, [activeEventIndex]);

    useEffect(() => {
        setProgress(0);
        const progressTimer = setInterval(() => {
            setProgress(p => p < 100 ? p + 0.5 : 100);
        }, IMAGE_DURATION / 200);

        return () => clearInterval(progressTimer);
    }, [activeEventIndex, activeImageIndex]);


    const currentEvent = events[activeEventIndex];
    const currentImage = currentEvent.images[activeImageIndex];

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image Display */}
                <div className="w-full lg:w-2/3">
                    <Card className="overflow-hidden shadow-2xl relative aspect-video">
                       {events.map((event, eventIdx) => 
                         event.images.map((image, imageIdx) => (
                            <Image
                                key={`${eventIdx}-${imageIdx}`}
                                src={image.src}
                                alt={image.hint}
                                data-ai-hint={image.hint}
                                fill
                                className={cn(
                                    "object-cover transition-opacity duration-1000",
                                    activeEventIndex === eventIdx && activeImageIndex === imageIdx 
                                        ? "opacity-100 animate-fade-in" 
                                        : "opacity-0"
                                )}
                            />
                         ))
                       )}
                    </Card>
                </div>

                {/* Event List */}
                <div className="w-full lg:w-1/3">
                    <div className="space-y-3">
                        {events.map((event, index) => (
                            <div 
                                key={event.name} 
                                className={cn(
                                    "p-4 rounded-lg cursor-pointer transition-all duration-300",
                                    index === activeEventIndex ? "bg-primary text-primary-foreground shadow-lg" : "bg-card hover:bg-card/80"
                                )}
                                onClick={() => {
                                    setActiveEventIndex(index);
                                    setActiveImageIndex(0);
                                }}
                            >
                                <h3 className="font-bold">{event.name}</h3>
                                {index === activeEventIndex && (
                                    <div className="mt-2">
                                        <p className="text-sm opacity-80 mb-2">Showing image {activeImageIndex + 1} of {event.images.length}</p>
                                        <Progress value={progress} className="h-1 bg-primary-foreground/30" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
