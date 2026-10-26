import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import MotionProvider from '@/components/shared/MotionProvider';
import WaitlistSection from '@/components/WaitlistSection';

export const metadata: Metadata = {
  title: 'Join the Waitlist',
  description:
    'Be among the first to experience Servix OS, the AI Entrepreneurship Operating System that helps you discover, start, run, and grow a business. Sign up for early-access updates.',
  alternates: {
    canonical: '/waitlist',
  },
  openGraph: {
    title: 'Join the Servix OS Waitlist',
    description:
      'Your business journey starts here. Sign up for early access to Servix OS and launch updates.',
    url: '/waitlist',
  },
};

export default function WaitlistPage() {
  return (
    <main>
      <MotionProvider>
        <Navbar />
        <WaitlistSection variant='page' />
        <Footer />
        <ScrollToTop />
      </MotionProvider>
    </main>
  );
}
