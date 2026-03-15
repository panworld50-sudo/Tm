import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL('https://the-moon.vercel.app'),
  title: {
    default: 'THE MOON | Truth Above All',
    template: '%s | THE MOON'
  },
  description: 'THE MOON delivers modern global journalism with deep context, sharp analysis, and truth above all.',
  openGraph: {
    title: 'THE MOON',
    description: 'Truth Above All',
    type: 'website',
    url: 'https://the-moon.vercel.app',
    siteName: 'THE MOON'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE MOON',
    description: 'Truth Above All'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main className="container py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
