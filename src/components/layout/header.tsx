
"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Users } from "lucide-react";
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
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import CareerGuidanceForm from "../career-guidance-form";

const mainNavLinks = [
  // { href: "/student-projects", label: "Student Projects" },
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  
];

const moreLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/certificates", label: "Certificates" },
  { href: "/career", label: "Careers" },
  { href: "/refer-and-earn", label: "Refer & Earn" },
  { href: "/contact", label: "Contact Us" },
];

const allNavLinks = [...mainNavLinks, ...moreLinks];

const NavbarLogo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Image src="/images/logo.png" alt="Primezone Logo" width={50} height={50} data-ai-hint="logo" />
        </Link>
    )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <NavbarLogo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Users className="mr-2 h-4 w-4" /> Get Career Guidance
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get Free Career Guidance</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and one of our career counselors will get in touch with you.
                  </DialogDescription>
                </DialogHeader>
                <CareerGuidanceForm />
              </DialogContent>
            </Dialog>

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
              <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium text-foreground/70 px-2">
                More
                <ChevronDown className={cn("h-4 w-4 transition-transform", isDropdownOpen && "rotate-180")} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
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
        <div className="md:hidden ml-auto flex items-center gap-2">
          <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" variant="outline">
                  <Users className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get Free Career Guidance</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and one of our career counselors will get in touch with you.
                  </DialogDescription>
                </DialogHeader>
                <CareerGuidanceForm />
              </DialogContent>
            </Dialog>

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
    </header>
  );
}
