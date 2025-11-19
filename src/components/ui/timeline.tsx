"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TimelineProps {
  data: {
    title: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export const Timeline = ({ data, className }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-border" />
      {data.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            className={`relative my-12 flex items-center ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            <TimelineItem
                item={item}
                index={index}
                scrollYProgress={scrollYProgress}
                isLeft={isLeft}
              />
          </div>
        );
      })}
    </div>
  );
};

const TimelineItem = ({
  item,
  index,
  scrollYProgress,
  isLeft,
}: {
  item: { title: string; content: React.ReactNode };
  index: number;
  scrollYProgress: any;
  isLeft: boolean;
}) => {
  const Cicle = ({
    progress,
    index,
  }: {
    progress: any;
    index: number;
  }) => {
    const scale = useTransform(
      progress,
      [index * 0.1, index * 0.1 + 0.1],
      [1, 1.5]
    );

    const circlePosition = isLeft
      ? { right: "-1.5rem" }
      : { left: "-1.5rem" };

    return (
      <div
        className="absolute top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-background"
        style={circlePosition}
      >
        <motion.div style={{ scale }} className="h-3 w-3 rounded-full bg-primary" />
      </div>
    );
  };

  const scale = useTransform(
    scrollYProgress,
    [index * 0.1, index * 0.1 + 0.1],
    [0.5, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [index * 0.1, index * 0.1 + 0.1],
    [0.1, 1]
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      className={`relative w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
    >
      <Cicle progress={scrollYProgress} index={index} />
      <h3 className="text-xl font-bold text-primary">{item.title}</h3>
      <div className="mt-2 text-sm text-muted-foreground">{item.content}</div>
    </motion.div>
  );
};
