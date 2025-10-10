
"use client";

import DomeGallery from '@/components/dome-gallery';
import imageData from "@/lib/placeholder-images.json";

const projectImages = [
    imageData.find(img => img.id === 'web-dev-future'),
    imageData.find(img => img.id === 'accounting-guide'),
    imageData.find(img => img.id === 'python-ds'),
    imageData.find(img => img.id === 'design-trends'),
    imageData.find(img => img.id === 'happy-diverse-team'),
    imageData.find(img => img.id === 'students-learning'),
    imageData.find(img => img.id === 'capstone-presentation'),
    imageData.find(img => img.id === 'prototype'),
    imageData.find(img => img.id === 'final-award'),
    imageData.find(img => img.id === 'office-tour'),
    imageData.find(img => img.id === 'creative-dept'),
].filter(Boolean).map(img => ({ src: img!.src, alt: img!.hint }));


export default function StudentProjectsPage() {
  return (
    <div>
        <section className="bg-card py-12">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Student Projects</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore the creative and innovative work of our talented students.
              </p>
            </div>
        </section>
        <section className='relative h-[80vh] bg-gradient-to-br from-blue-100 to-white'>
             <DomeGallery images={projectImages} />
        </section>
    </div>
  );
}
