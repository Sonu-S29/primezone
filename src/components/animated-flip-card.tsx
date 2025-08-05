
"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedFlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function AnimatedFlipCard({ frontContent, backContent }: AnimatedFlipCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn("flip-card h-40", isVisible ? "is-visible" : "")}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card className="glass-effect h-full flex items-center justify-center text-center p-4 gap-4">
            {frontContent}
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="glass-effect h-full flex flex-col items-center justify-center text-center p-4">
            <CardContent>
              {backContent}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
