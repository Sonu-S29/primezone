
"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { GlowingBorders } from "./glowing-border";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
        className={cn(
            "row-span-1 rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-background border border-transparent justify-between flex flex-col space-y-4",
            className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <GlowingBorders active={isHovered} />
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="flex items-center gap-2">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                {title}
                </div>
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
            </div>
        </div>
        </div>
    );
};
