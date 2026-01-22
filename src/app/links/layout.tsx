
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const siteUrl = "https://www.primezonecomputer.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Primezone Computer – Links & Courses',
  description: 'Your Gateway to Tech Learning. Find all our important links and featured courses in one place.',
  alternates: {
    canonical: '/links',
  },
  openGraph: {
    title: 'Primezone Computer – Links & Courses',
    description: 'Your Gateway to Tech Learning. Find all our important links and featured courses in one place.',
    url: `${siteUrl}/links`,
    siteName: 'Primezone Computer Education',
    images: [
      {
        url: `${siteUrl}/images/heroslider/cover.webp`,
        width: 1280,
        height: 720,
        alt: 'Primezone Computer Education Links',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
   twitter: {
    card: 'summary_large_image',
    title: 'Primezone Computer – Links & Courses',
    description: 'Your Gateway to Tech Learning. Find all our important links and featured courses in one place.',
    images: [`${siteUrl}/images/heroslider/cover.webp`],
  },
};

export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
