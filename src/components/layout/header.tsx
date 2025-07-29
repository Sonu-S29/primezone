"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { GraduationCap, Menu, ChevronDown, ChevronRight } from "lucide-react";
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
          {navLinks.map((link) => {
            if (link.subLinks) {
              return (
                <div key={link.href} className="relative group">
                   <NavLink href={link.href} label={link.label} currentPath={pathname} className="flex items-center gap-1">
                     <ChevronDown className="h-4 w-4" />
                   </NavLink>
                  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded-md mt-2 py-2 w-48">
                    {link.subLinks.map((subLink) => (
                      <NavLink 
                        key={subLink.href}
                        href={subLink.href}
                        label={subLink.label}
                        currentPath={pathname}
                        className="block px-4 py-2 text-sm"
                      />
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <NavLink 
                key={link.href}
                href={link.href}
                label={link.label}
                currentPath={pathname}
              />
            );
          })}
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
                  <div key={link.href}>
                    {link.subLinks ? (
                        <div className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary">
                            <span>{link.label}</span>
                        </div>
                    ) : (
                        <SheetClose asChild>
                            <Link
                            href={link.href}
                            className="block py-2 text-muted-foreground hover:text-primary"
                            >
                            {link.label}
                            </Link>
                        </SheetClose>
                    )}
                    {link.subLinks && (
                      <div className="grid gap-2 pl-4 mt-2 border-l">
                        {link.subLinks.map((subLink) => (
                           <SheetClose asChild key={subLink.href}>
                             <Link
                                href={subLink.href}
                                className="flex items-center text-muted-foreground hover:text-primary text-base"
                            >
                                <ChevronRight className="h-4 w-4 mr-2"/>
                                {subLink.label}
                            </Link>
                           </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>
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
