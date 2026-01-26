import { LanguageProvider } from '@/i18n/LanguageContext';
import { Header } from '@/components/camping/Header';
import { Hero } from '@/components/camping/Hero';
import { QuickFacts } from '@/components/camping/QuickFacts';
import { AboutSection } from '@/components/camping/AboutSection';
import { OffersSection } from '@/components/camping/OffersSection';
import { Accommodations } from '@/components/camping/Accommodations';
import { Facilities } from '@/components/camping/Facilities';
import { PhotoGallery } from '@/components/camping/PhotoGallery';
import { NearbySection } from '@/components/camping/NearbySection';
import { TripsSection } from '@/components/camping/TripsSection';
import { DirectionsSection } from '@/components/camping/DirectionsSection';
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
          <QuickFacts />
          <AboutSection />
          <OffersSection />
          <Accommodations />
          <Facilities />
          <PhotoGallery />
          <NearbySection />
          <TripsSection />
          <DirectionsSection />
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
