import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const siteUrl = "https://www.primezonecomputer.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Primezone Computer – Links & Courses',
  description: 'Your Gateway to Tech Learning. Find all our important links and featured courses in one place.',
  verification: {
    google: "_rckfN0KDi1ig9ixrIxW-05MJQQF3RkBnyvhMDDubCU",
  },
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WCJ5FBPH');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCJ5FBPH"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <main>{children}</main>
      </body>
    </html>
  );
}
