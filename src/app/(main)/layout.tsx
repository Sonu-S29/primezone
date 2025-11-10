
import type { Metadata } from 'next';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster"
import CardNav from '@/components/layout/CardNav';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/chatbot';

export const metadata: Metadata = {
  title: 'Primezone Computer Education',
  description: 'Unlock Your Potential in the Digital World. Primezone offers expert-led courses in programming, design, accounting, and more. Start your tech career with us today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      label: "About",
      bgColor: "hsl(var(--primary))",
      textColor: "hsl(var(--primary-foreground))",
      links: [
        { label: "About Us", href: "/about", ariaLabel: "About Company" },
        { label: "Our Team", href: "/about", ariaLabel: "Meet our Team" },
        { label: "Careers", href: "/career", ariaLabel: "About Careers" },
      ]
    },
    {
      label: "Courses",
      bgColor: "hsl(var(--accent))",
      textColor: "hsl(var(--accent-foreground))",
      links: [
        { label: "Diploma Courses", href: "/courses/diploma", ariaLabel: "View Diploma Courses" },
        { label: "Short-Term Courses", href: "/courses/short-term", ariaLabel: "View Short-Term Courses" },
        { label: "AI Recommendations", href: "/recommendations", ariaLabel: "Get AI course recommendations" },
      ]
    },
    {
      label: "Contact",
      bgColor: "hsl(var(--secondary))",
      textColor: "hsl(var(--secondary-foreground))",
      links: [
        { label: "Contact Us", href: "/contact", ariaLabel: "Contact us" },
        { label: "Student Projects", href: "/student-projects", ariaLabel: "View student projects" },
        { label: "Gallery", href: "/gallery", ariaLabel: "View our gallery" }
      ]
    }
  ];

  return (
    <html lang="en" className="font-body antialiased pt-24">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content={metadata.description!} />
      </head>
      <body>
        <CardNav
          logo="/images/logo.png"
          logoAlt="Primezone Logo"
          items={navItems}
          baseColor="hsl(var(--card))"
          menuColor="hsl(var(--card-foreground))"
          buttonBgColor="hsl(var(--primary))"
          buttonTextColor="hsl(var(--primary-foreground))"
          ease="power3.out"
        />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
