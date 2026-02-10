
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PopupForm from '@/components/popup-form';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl = "https://www.primezonecomputer.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Primezone Computer Education | Vile Parle & Jogeshwari',
    template: '%s | Primezone Computer Education',
  },
  description: 'Unlock Your Potential in the Digital World. Primezone offers expert-led courses in programming, design, accounting, and more. Start your tech career with us today!',
  openGraph: {
    title: 'Primezone Computer Education',
    description: 'Unlock Your Potential in the Digital World. Primezone offers expert-led courses in programming, design, accounting, and more. Start your tech career with us today!',
    url: siteUrl,
    siteName: 'Primezone Computer Education',
    images: [
      {
        url: `${siteUrl}/images/heroslider/cover.webp`,
        width: 1260,
        height: 720,
        alt: 'Primezone Computer Education',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primezone Computer Education',
    description: 'Unlock Your Potential in the Digital World. Primezone offers expert-led courses in programming, design, accounting, and more. Start your tech career with us today!',
    images: [`${siteUrl}/images/heroslider/cover.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <main className="flex-grow pt-28">{children}</main>
        <Footer />
        <Toaster />
        <PopupForm />
      </body>
    </html>
  );
}
