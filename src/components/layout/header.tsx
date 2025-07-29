
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { GraduationCap, Menu, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/recommendations", label: "AI Recommender" },
  { href: "/contact", label: "Contact Us" },
];

const NavLink = ({ href, label, currentPath, className, children }: { href: string, label: string, currentPath: string, className?: string, children?: React.ReactNode }) => {
    const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
    return (
        <Link
            href={href}
            className={cn(
                "transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground",
                className
            )}
        >
            {label}
            {children}
        </Link>
    )
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/30 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-headline">Primezone</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
              <NavLink 
                key={link.href}
                href={link.href}
                label={link.label}
                currentPath={pathname}
              />
            )
          )}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/enroll">Enroll Now</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                      <Link
                      href={link.href}
                      className="block py-2 text-muted-foreground hover:text-primary"
                      >
                      {link.label}
                      </Link>
                  </SheetClose>
                ))}
                <div className="flex flex-col gap-4 mt-6 pt-6 border-t">
                    <SheetClose asChild>
                        <Button asChild>
                            <Link href="/enroll">Enroll Now</Link>
                        </Button>
                    </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
