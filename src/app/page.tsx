import FAQSection from '@/components/FAQSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import ScrollToTop from '@/components/ScrollToTop';
import MotionProvider from '@/components/shared/MotionProvider';
import TestimonialsSection from '@/components/TestimonialsSection';
import { homeStructuredData } from '@/content/home';

export default function HomePage() {
  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />
      <MotionProvider>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
        <ScrollToTop />
      </MotionProvider>
    </main>
  );
}
