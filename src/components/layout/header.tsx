
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/recommendations", label: "AI Recommender" },
  { href: "/contact", label: "Contact Us" },
];

const NavbarLogo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-headline">Primezone</span>
        </Link>
    )
}

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/30 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                {navLinks.map((item, idx) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                        <a
                            key={`link=${idx}`}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-primary",
                                isActive ? "text-primary" : "text-muted-foreground",
                                "relative text-neutral-600 dark:text-neutral-300"
                            )}
                        >
                            <span className="block text-sm">{item.label}</span>
                        </a>
                    )
                })}
                </div>
                <div className="flex items-center gap-4">
                    <Button asChild>
                        <Link href="/enroll">Enroll Now</Link>
                    </Button>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </MobileNavHeader>

                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    {navLinks.map((item, idx) => (
                    <a
                        key={`mobile-link-${idx}`}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative text-neutral-600 dark:text-neutral-300">
                        <span className="block">{item.label}</span>
                    </a>
                    ))}
                    <div className="flex w-full flex-col gap-4 pt-4 mt-4 border-t">
                        <Button asChild
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full">
                            <Link href="/enroll">Enroll Now</Link>
                        </Button>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
       </div>
    </header>
  );
}
