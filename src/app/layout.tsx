import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';

import '@/index.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servixos.com';

const themeInitializerScript =
  "(()=>{try{const t=localStorage.getItem('theme');const d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch{}})();";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Servix OS - Create Your Business With AI',
    template: '%s | Servix OS',
  },
  description:
    'Servix OS is an AI-powered platform that helps entrepreneurs start, run, and grow a business with automated setup, websites, documents, and online office tools.',
  keywords: [
    'AI business platform',
    'start a business',
    'business automation',
    'AI website builder',
    'online office',
    'small business tools',
    'entrepreneur software',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Servix OS - Create Your Business With AI',
    description:
      'Launch and grow your business faster with AI-powered setup, website creation, invoicing, and operations in one platform.',
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
    title: 'Servix OS - Create Your Business With AI',
    description:
      'AI-powered business platform for setup, websites, invoicing, clients, and growth.',
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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
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
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap'
          rel='stylesheet'
        />
      </head>
      <body suppressHydrationWarning>
        <Script
          id='theme-init'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
        />
        {children}
      </body>
    </html>
  );
}
