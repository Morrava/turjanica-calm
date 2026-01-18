import { LanguageProvider } from '@/i18n/LanguageContext';
import { Header } from '@/components/camping/Header';
import { Hero } from '@/components/camping/Hero';
import { WhySection } from '@/components/camping/WhySection';
import { Accommodations } from '@/components/camping/Accommodations';
import { Facilities } from '@/components/camping/Facilities';
import { Location } from '@/components/camping/Location';
import { Reviews } from '@/components/camping/Reviews';
import { ContactCTA } from '@/components/camping/ContactCTA';
import { Footer } from '@/components/camping/Footer';
import { MobileContactButton } from '@/components/camping/MobileContactButton';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <WhySection />
          <Accommodations />
          <Facilities />
          <Location />
          <Reviews />
          <ContactCTA />
        </main>
        <Footer />
        <MobileContactButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
