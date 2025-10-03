import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Prime Zone Computer – Links & Courses',
  description: 'Your Gateway to Tech Learning. Find all our important links and featured courses in one place.',
};

export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content={metadata.description!} />
      </head>
      <body className="font-body antialiased bg-link-gradient">
        <main>{children}</main>
      </body>
    </html>
  );
}
