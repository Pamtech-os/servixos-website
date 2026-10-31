import type { Metadata } from 'next';
import { Suspense } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import MotionProvider from '@/components/shared/MotionProvider';
import UnsubscribeCard from '@/components/UnsubscribeCard';

export const metadata: Metadata = {
  title: 'Unsubscribe',
  description: 'Unsubscribe from Servix OS waitlist emails.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnsubscribePage() {
  return (
    <main>
      <MotionProvider>
        <Navbar />
        <section className='hero-gradient flex min-h-screen items-center justify-center px-4 pt-28 pb-20'>
          <div className='glass card-shadow w-full max-w-lg rounded-3xl border p-8 text-center md:p-10'>
            <Suspense fallback={null}>
              <UnsubscribeCard />
            </Suspense>
          </div>
        </section>
        <Footer />
        <ScrollToTop />
      </MotionProvider>
    </main>
  );
}
