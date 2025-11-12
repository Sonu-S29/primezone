
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Calculator, Code, Megaphone, Paintbrush, ArrowLeft, BookOpen } from 'lucide-react';
import './WhatWeDo.css';

const courseData = {
  office: {
    id: "accounting",
    name: "Office",
    icon: <Calculator className="h-8 w-8" />,
    courses: [ 'Office Automation', 'MS Office', 'Advanced Excel', 'Tally Prime + GST', 'Taxation Auditing', 'Management Skill', 'Share Market', 'CCC' ]
  },
  tech: {
    id: "programming",
    name: "Tech",
    icon: <Code className="h-8 w-8" />,
    courses: [ 'Web Development', 'Web Designing', 'DSA', 'C', 'C++', 'Python', 'Front-End Development', 'Back-End Development', 'Database', 'Angular', 'HTML-CSS', 'JavaScript', 'Core Java', 'C#', 'React', 'Advanced Java', 'PowerBI' ]
  },
  marketing: {
    id: "digital-marketing",
    name: "Marketing",
    icon: <Megaphone className="h-8 w-8" />,
    courses: [ 'SEO', 'WordPress', 'Content Creation', 'SMO', 'Google Analytics', 'Facebook & Google Ads' ]
  },
  graphics: {
    id: "graphics",
    name: "Graphics",
    icon: <Paintbrush className="h-8 w-8" />,
    courses: [ 'CorelDRAW', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Video|Sound Editing', 'Adobe Animation', '3D MAX', 'Canva Design', 'After Effects', 'Premiere Pro', 'Figma', 'AutoCAD', 'Revit' ]
  }
};

type CategoryKey = keyof typeof courseData;

export default function WhatWeDo() {
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sequenceTimersRef = useRef<NodeJS.Timeout[]>([]);

  const whatWeDoText = "What We do?".split(" ");
  const weTeachText = "We Teach".split(" ");
  
  const runAnimationSequence = useCallback(() => {
    // Clear any existing timers to prevent duplicates
    sequenceTimersRef.current.forEach(clearTimeout);
    sequenceTimersRef.current = [];

    setStep(1); // Start with "What We do?"
    sequenceTimersRef.current.push(setTimeout(() => setStep(2), 3000)); // -> "We Teach"
    sequenceTimersRef.current.push(setTimeout(() => {
        setStep(3)
        setSelectedCategory(null)
    }, 6000)); // -> Category blocks
  }, []);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(runAnimationSequence, 25000);
  }, [runAnimationSequence]);

  useEffect(() => {
    runAnimationSequence(); // Start the animation on initial mount

    const events: (keyof WindowEventMap)[] = ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'];
    const eventListener = () => resetInactivityTimer();

    events.forEach(event => window.addEventListener(event, eventListener));

    return () => {
      sequenceTimersRef.current.forEach(clearTimeout);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      events.forEach(event => window.removeEventListener(event, eventListener));
    };
  }, [runAnimationSequence, resetInactivityTimer]);
  
  // When step or category changes due to user interaction, reset the timer
  useEffect(() => {
    resetInactivityTimer();
  }, [step, selectedCategory, resetInactivityTimer]);
  

  const handleCategoryClick = (categoryKey: CategoryKey) => {
    setSelectedCategory(categoryKey);
    setStep(4);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setStep(3);
  };
  
  const categories = Object.entries(courseData);
  const currentCategoryData = selectedCategory ? courseData[selectedCategory] : null;


  return (
    <div className="relative h-64 w-full flex items-center justify-center">
        {step === 1 && (
          <div
            key="what-we-do"
            className="text-3xl font-bold flex gap-2"
          >
            {whatWeDoText.map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
        )}
        {step === 2 && (
          <div
            key="we-teach"
            className="text-3xl font-bold flex gap-2"
          >
            {weTeachText.map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
        )}
        {step === 3 && (
           <div
            key="categories"
            className="w-[200px] h-[200px] p-2 glassmorphic-block grid grid-cols-2 grid-rows-2 gap-2"
           >
            {categories.map(([key, cat]) => (
                <div key={key} onClick={() => handleCategoryClick(key as CategoryKey)} className="category-item">
                    {cat.icon}
                    <span className="text-sm font-semibold mt-1">{cat.name}</span>
                </div>
            ))}
           </div>
        )}
        {step === 4 && currentCategoryData && (
            <div
                key="courses"
                className="w-full max-w-sm h-[250px] glassmorphic-block p-4 flex flex-col"
            >
                
                <>
                    <div className="flex items-center mb-3">
                        <button onClick={handleBack} className="mr-2 p-1 rounded-full hover:bg-white/20">
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <div className="flex items-center gap-2">
                            {currentCategoryData.icon}
                            <h3 className="text-lg font-bold">{currentCategoryData.name} Courses</h3>
                        </div>
                    </div>
                    <div className="overflow-y-auto flex-grow course-list">
                        <ul className="space-y-1">
                            {currentCategoryData.courses.map((course) => (
                                <li key={course} className="flex items-center text-sm p-1 rounded-md hover:bg-white/10">
                                    <BookOpen className="h-4 w-4 mr-2 shrink-0" />
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
                
            </div>
        )}
    </div>
  );
}
