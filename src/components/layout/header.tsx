
"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GraduationCap, Menu } from "lucide-react";
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
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <GraduationCap className="h-6 w-6" />
          <span className="font-headline">Primezone</span>
        </Link>
    )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 p-2">
      <div className="bg-background/80 backdrop-blur-sm shadow-md rounded-full max-w-screen-xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavbarLogo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                      <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                              "transition-colors hover:text-primary",
                              isActive ? "text-primary font-semibold" : "text-foreground/70"
                          )}
                      >
                          {item.label}
                      </Link>
                  )
              })}
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent side="left">
                   <div className="flex flex-col gap-6 p-4">
                      <NavbarLogo />
                      <nav className="flex flex-col gap-4">
                          {navLinks.map((item) => (
                              <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={cn(
                                      "text-lg",
                                      pathname === item.href ? "text-primary font-semibold" : "text-foreground/80"
                                  )}
                              >
                                  {item.label}
                              </Link>
                          ))}
                      </nav>
                   </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
