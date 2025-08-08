
"use client";
import { useState } from 'react';
import { cn } from '@/lib/utils';
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

export default function EventGallery() {
    return (
        <div className="container mx-auto px-4">
            <div className="relative h-[600px] md:h-[800px] w-full flex items-center justify-center -mt-16 md:-mt-24">
                 <Cubes events={events} />
            </div>
        </div>
    );
}
