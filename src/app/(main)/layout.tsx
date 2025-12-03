
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster"
import CardNav from '@/components/layout/CardNav';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/chatbot';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

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
    { label: "Home", href: "/", ariaLabel: "Home" },
    { label: "About Us", href: "/about", ariaLabel: "About Company" },
    { label: "Courses", href: "/courses", ariaLabel: "View All Courses" },
    { label: "Diploma Courses", href: "/courses/diploma", ariaLabel: "View Diploma Courses" },
    { label: "Short-Term Courses", href: "/courses/short-term", ariaLabel: "View Short-Term Courses" },
    // { label: "Gallery", href: "/gallery", ariaLabel: "View our gallery" },
    // { label: "Student Projects", href: "/student-projects", ariaLabel: "View student projects" },
    { label: "Blog", href: "/blog", ariaLabel: "Read our blog" },
    { label: "Careers", href: "/career", ariaLabel: "About Careers" },
    { label: "Refer & Earn", href: "/refer-and-earn", ariaLabel: "Refer and Earn program" },
    { label: "Contact Us", href: "/contact", ariaLabel: "Contact us" },
  ];

  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
