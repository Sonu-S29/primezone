
"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  Menu as MenuIcon,
  X as XIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from "react";

interface NavbarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <motion.nav
        initial={{
          maxWidth: "64rem", // max-w-6xl
          borderRadius: "1rem", // rounded-2xl
        }}
        animate={{
          maxWidth: scrolled ? "100%" : "64rem",
          borderRadius: scrolled ? "0rem" : "1rem",
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className={cn(
          "sticky inset-x-0 top-0 md:top-2 z-50 mx-auto transition-colors duration-200",
           scrolled ? "bg-card/95 backdrop-blur-sm border-b" : "bg-transparent border-b border-transparent",
          className
        )}>
        {children}
      </motion.nav>
    </NavbarContext.Provider>
  );
};

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "hidden h-16 w-full items-center justify-between px-8 lg:flex",
        className
      )}>
      {children}
    </div>
  );
};

export const NavItems = ({
  items,
  className,
}: {
  items: { name: string; link: string }[];
  className?: string;
}) => {
  return (
    <div
      className={cn("hidden items-center gap-x-8 lg:flex", className)}>
      {items.map((item, idx) => (
        <a
          key={`link=${idx}`}
          href={item.link}
          className="relative text-neutral-600 hover:text-neutral-500 dark:text-neutral-300 dark:hover:text-neutral-400">
          <span className="block text-sm">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export const NavbarLogo = ({ className }: { className?: string }) => {
  return (
    <a href="#" className={cn("text-lg font-bold", className)}>
      <span>Logo</span>
    </a>
  );
};

export const NavbarButton = ({
  children,
  className,
  variant,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const isPrimary = variant === "primary";
  return (
    <button
      className={cn(
        "rounded-lg px-4 py-2 text-sm font-medium",
        isPrimary
          ? "bg-neutral-800 text-white hover:bg-neutral-700 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300"
          : "border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
        className
      )}
      {...props}>
      {children}
    </button>
  );
};

export const MobileNav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("block lg:hidden", className)}>{children}</div>;
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex h-16 items-center justify-between px-4", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  className,
  isOpen,
  ...props
}: {
  className?: string;
  isOpen: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={cn("focus:outline-none", className)} {...props}>
      {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
    </button>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn(
        "overflow-hidden border-t border-neutral-200/50 bg-neutral-50/50 backdrop-blur-md dark:border-neutral-700/50 dark:bg-neutral-900/50",
        className
      )}>
      <div className="flex flex-col space-y-4 p-4">{children}</div>
    </motion.div>
  );
};
