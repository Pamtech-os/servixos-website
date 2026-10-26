import AIDemoSection from '@/components/AIDemoSection';
import AIEngineSection from '@/components/AIEngineSection';
import AISuggestionPanelSection from '@/components/AISuggestionPanelSection';
import BeginnerSection from '@/components/BeginnerSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import JourneySection from '@/components/JourneySection';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import ScrollToTop from '@/components/ScrollToTop';
import WaitlistSection from '@/components/WaitlistSection';
import MotionProvider from '@/components/shared/MotionProvider';
// import TestimonialsSection from '@/components/TestimonialsSection';
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
        <AIEngineSection />
        <AISuggestionPanelSection />
        <JourneySection />
        <AIDemoSection />
        <BeginnerSection />
        <HowItWorksSection />
        <PricingSection />
        <WaitlistSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <Footer />
        <ScrollToTop />
      </MotionProvider>
    </main>
  );
}
