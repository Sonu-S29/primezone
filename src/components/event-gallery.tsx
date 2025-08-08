
"use client";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Cubes from './cubes';

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

export default function EventGallery() {
    const [activeEventIndex, setActiveEventIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveEventIndex(currentEvent => (currentEvent + 1) % events.length);
        }, 5000); // Change event every 5 seconds
        
        return () => clearInterval(interval);
    }, []);

    const handleEventClick = (index: number) => {
        if (index === activeEventIndex) return;
        setActiveEventIndex(index);
    };
    
    const currentEventImages = events[activeEventIndex].images;

    return (
        <div className="container mx-auto px-4">
            {/* Event Circles */}
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 flex-wrap">
                {events.map((event, index) => (
                    <div 
                        key={event.name}
                        onClick={() => handleEventClick(index)}
                        className="flex flex-col items-center gap-2 cursor-pointer group"
                    >
                        <div className={cn(
                            "relative h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center border-4 transition-all duration-300",
                            activeEventIndex === index ? 'bg-primary border-primary' : 'bg-card border-border group-hover:border-primary'
                        )}>
                            <p className={cn(
                                "font-bold text-center text-sm md:text-base",
                                activeEventIndex === index ? 'text-primary-foreground' : 'text-primary'
                            )}>
                                {event.name}
                            </p>
                            {activeEventIndex === index && (
                                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-background">
                                    <Check className="h-3 w-3 text-white" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Cube Display */}
            <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
                 <Cubes
                    key={activeEventIndex}
                    gridSize={8}
                    images={currentEventImages}
                    maxAngle={60}
                    radius={4}
                    borderStyle="2px dashed #4095c6"
                    faceColor="#003049"
                    rippleColor="#D4E7F0"
                    rippleSpeed={1.5}
                    autoAnimate={true}
                    rippleOnClick={true}
                />
            </div>
        </div>
    );
}
