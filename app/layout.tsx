import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Wrapper from '@/components/Wrapper';

const inter = Inter({ subsets: ['latin'] });

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
          inter.className,
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
