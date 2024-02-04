import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Wrapper from '@/components/Wrapper';

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gamer DB',
  description: "Gamer's Paradise - Find your favourite games all at one place!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background  antialiased',
          roboto.className,
        )}
      >
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
