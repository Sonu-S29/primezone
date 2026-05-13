import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PopupForm from '@/components/popup-form';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl = "https://www.primezonecomputer.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Primezone Computer Education | Vile Parle & Jogeshwari',
    template: '%s | Primezone Computer Education',
  },
  description: 'Unlock Your Potential in the Digital World. Primezone offers expert-led courses in programming, design, accounting, and more. Start your tech career with us today!',
  verification: {
    google: "_rckfN0KDi1ig9ixrIxW-05MJQQF3RkBnyvhMDDubCU",
  },
  alternates: {
    canonical: "/",
  },
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
      <body>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCJ5FBPH"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="flex-grow pt-24 md:pt-28">{children}</main>
        <Footer />
        <Toaster />
        <PopupForm />
      </body>
    </html>
  );
}
