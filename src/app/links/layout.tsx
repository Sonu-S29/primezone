
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Primezone Computer – Links & Courses',
  description: 'Your Gateway to Tech Learning. Find all our important links and featured courses in one place.',
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
        <meta name="description" content={metadata.description!} />
      </head>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
