
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

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

const HOLD_DURATION = 5000;
const ANIMATION_DURATION = 500;

export default function EventGallery() {
    const [activeEventIndex, setActiveEventIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [animationState, setAnimationState] = useState<'in' | 'out' | 'idle'>('idle');

    useEffect(() => {
        const scheduleAnimation = () => {
            setAnimationState('in');

            const scaleInTimer = setTimeout(() => {
                const holdTimer = setTimeout(() => {
                    setAnimationState('out');

                    const scaleOutTimer = setTimeout(() => {
                        setActiveImageIndex(prev => {
                            const isLastImage = prev === events[activeEventIndex].images.length - 1;
                            if (isLastImage) {
                                setActiveEventIndex(currentEvent => (currentEvent + 1) % events.length);
                                return 0;
                            }
                            return prev + 1;
                        });
                    }, ANIMATION_DURATION);
                    
                    return () => clearTimeout(scaleOutTimer);
                }, HOLD_DURATION);

                return () => clearTimeout(holdTimer);
            }, ANIMATION_DURATION);
            
            return () => clearTimeout(scaleInTimer);
        };
        
        const timeoutId = scheduleAnimation();
        
        return () => clearTimeout(timeoutId);

    }, [activeEventIndex, activeImageIndex]);


    const handleEventClick = (index: number) => {
        setActiveEventIndex(index);
        setActiveImageIndex(0);
        setAnimationState('idle'); 
    };

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
            
            {/* Image Display */}
            <Card className="overflow-hidden shadow-2xl relative aspect-video max-w-4xl mx-auto">
                {events[activeEventIndex] && events[activeEventIndex].images[activeImageIndex] && (
                    <Image
                        key={`${activeEventIndex}-${activeImageIndex}`}
                        src={events[activeEventIndex].images[activeImageIndex].src}
                        alt={events[activeEventIndex].images[activeImageIndex].hint}
                        data-ai-hint={events[activeEventIndex].images[activeImageIndex].hint}
                        fill
                        className={cn(
                            "object-cover",
                            animationState === 'in' && 'scale-in-center-normal',
                            animationState === 'out' && 'scale-out-center-normal',
                            animationState === 'idle' && 'opacity-0'
                        )}
                        style={{ animationDuration: `${ANIMATION_DURATION}ms` }}
                    />
                )}
            </Card>
        </div>
    );
}
