import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar/Navbar';
import Wrapper from '@/components/Wrapper';

import { Roboto } from 'next/font/google';
import Sidebar from '@/components/SideNavbar/SideNavbar';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gamer DB',
  description: "Gamer's Paradise - Find your favourite games all at one place!",
  manifest: 'mainfest.json',
  openGraph: {
    title: 'Gamer DB',
    description:
      "Gamer's Paradise - Find your favourite games all at one place!",
    url: 'https://gamer-db.vercel.app/',
    siteName: 'Gamer DB',
    images: [
      {
        url: '/placeholder.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Gamer DB',
    card: 'summary_large_image',
    description:
      "Gamer's Paradise - Find your favourite games all at one place!",
    images: ['/placeholder.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#CCA715" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background  antialiased grid grid-flow-col',
          roboto.className,
        )}
      >
        <Wrapper>
          <Navbar />
          <Sidebar />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
