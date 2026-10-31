import type { Metadata, Viewport } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';

import CookieConsent from '@/components/CookieConsent';

import '@/index.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servixos.com';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const themeInitializerScript =
  "(()=>{try{const t=localStorage.getItem('theme');const d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch{}})();";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Servix OS - Start, Run and Grow a Business With AI',
    template: '%s | Servix OS',
  },
  description:
    'Servix OS is an AI entrepreneurship platform that helps you discover a business idea, start your business, run day-to-day operations, and grow-all through one connected AI engine.',
  keywords: [
    'AI entrepreneurship platform',
    'start a business',
    'business idea generator',
    'AI business platform',
    'AI website builder',
    'online office',
    'small business tools',
    'entrepreneur software',
    'Servix OS',
    'servixos',
    'Servix os',
    'servix os',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Servix OS - Start, Run and Grow a Business With AI',
    description:
      'Discover a business idea, start your business, and run and grow it-guided by one connected AI engine, even with little to no business experience.',
    url: '/',
    siteName: 'Servix OS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Servix OS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servix OS - Start, Run and Grow a Business With AI',
    description:
      'The AI engine that helps you discover, start, run, and grow a business-from your first idea to day-to-day operations.',
    images: ['/favicon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  category: 'business',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0c111b' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Script
          id='theme-init'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
