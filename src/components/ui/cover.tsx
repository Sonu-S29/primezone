
"use client";
import React from "react";
import { motion } from "framer-motion";
import "./cover.css";
import { cn } from "@/lib/utils";

export const Cover = ({
  children,
  duration = 0.8,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration, ease: "circOut" }}
        className="text-inner"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration, ease: "circIn", delay: 0.2 }}
        className="text-cover"
      >
        {children}
      </motion.div>
    </div>
  );
};
