
"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { GraduationCap, Menu, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const moreLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/refer-and-earn", label: "Refer & Earn" },
];

const allNavLinks = [...mainNavLinks, ...moreLinks];

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 p-2">
      <div className="bg-background/80 backdrop-blur-sm shadow-md rounded-full max-w-screen-xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavbarLogo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {mainNavLinks.map((item) => {
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
              
              <DropdownMenu onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1 text-sm font-medium text-foreground/70 px-[5px]">
                    More
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isDropdownOpen && "rotate-180")} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {moreLinks.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className={cn(pathname === item.href && "font-semibold text-primary")}>
                          {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

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
                    <SheetHeader>
                        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                    </SheetHeader>
                   <div className="flex flex-col gap-6 p-4">
                      <NavbarLogo />
                      <nav className="flex flex-col gap-4">
                          {allNavLinks.map((item) => (
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
