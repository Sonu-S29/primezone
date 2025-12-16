
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

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

  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content={metadata.description!} />
      </head>
      <body>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
