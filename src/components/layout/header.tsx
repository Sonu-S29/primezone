
"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import CareerGuidanceForm from "../career-guidance-form";
import TopBar from "./top-bar";
import { diplomaCourses, courseData } from "@/lib/course-data";

const mainNavLinks = [
  // { href: "/student-projects", label: "Student Projects" },
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact Us" },
  
  
];

const moreLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/certificates", label: "Certificates" },
  { href: "/career", label: "Careers" },
  { href: "/refer-and-earn", label: "Refer & Earn" },
  { href: "/gallery", label: "Gallery" },
];

const allNavLinks = [...mainNavLinks, ...moreLinks];

const NavbarLogo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Image src="/images/logo.svg" alt="Primezone Logo" width={50} height={50} data-ai-hint="logo" />
        </Link>
    )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);
  const coursesTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleCoursesMouseEnter = () => {
    if (coursesTimerRef.current) {
      clearTimeout(coursesTimerRef.current);
    }
    setIsCoursesMenuOpen(true);
  };

  const handleCoursesMouseLeave = () => {
    coursesTimerRef.current = setTimeout(() => {
      setIsCoursesMenuOpen(false);
    }, 200);
  };
  
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <TopBar />
      <div className="container flex h-16 items-center border-t">
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
              const isCoursesPage = pathname.startsWith('/courses');
              if (item.href === '/courses') {
                return (
                  <DropdownMenu key={item.href} open={isCoursesMenuOpen} onOpenChange={setIsCoursesMenuOpen}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center gap-1 p-0 h-auto text-sm font-medium transition-colors hover:text-primary",
                          isCoursesPage ? "text-primary font-semibold" : "text-foreground/80"
                        )}
                        onMouseEnter={handleCoursesMouseEnter}
                        onMouseLeave={handleCoursesMouseLeave}
                        onClick={() => setIsCoursesMenuOpen(!isCoursesMenuOpen)}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                        align="start" 
                        className="w-56"
                        onMouseEnter={handleCoursesMouseEnter}
                        onMouseLeave={handleCoursesMouseLeave}
                    >
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Career Courses</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="p-2">
                          {diplomaCourses.map((course) => (
                            <DropdownMenuItem key={course.slug} asChild>
                              <Link href={`/courses/details/${course.slug}`}>{course.title}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSeparator />
                      {courseData.map((category) => (
                        <DropdownMenuSub key={category.id}>
                          <DropdownMenuSubTrigger>{category.name}</DropdownMenuSubTrigger>
                          <DropdownMenuSubContent className="p-2 max-h-96 overflow-y-auto">
                            {category.courses.map((course) => (
                              <DropdownMenuItem key={course.slug} asChild>
                                <Link href={`/courses/details/${course.slug}`}>{course.title}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                  <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                          "transition-colors hover:text-primary",
                          isActive ? "text-primary font-semibold" : "text-foreground/80"
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
