"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GraduationCap, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/courses",
    label: "Courses",
    subLinks: [
      { href: "/courses/diploma", label: "Diploma Courses" },
      { href: "/courses/short-term", label: "Short-Term Courses" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/recommendations", label: "AI Recommender" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/30 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-headline">Primezone</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/enroll">Enroll Now</Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/brochure.pdf" download>Download Brochure</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                    {link.subLinks && (
                      <div className="grid gap-2 pl-4 mt-2">
                        {link.subLinks.map((subLink) => (
                           <Link
                           key={subLink.href}
                           href={subLink.href}
                           className="text-muted-foreground hover:text-primary"
                         >
                           - {subLink.label}
                         </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                    <Button asChild>
                        <Link href="/enroll">Enroll Now</Link>
                    </Button>
                    <Button variant="secondary" asChild>
                        <a href="/brochure.pdf" download>Download Brochure</a>
                    </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
