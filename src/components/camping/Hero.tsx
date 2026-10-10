import { Navigation, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/hooks/use-booking';
import heroImage from '@/assets/hero-camping.jpg';

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Izleti%C5%A1te+Camp+Turjanica/@44.7748936,17.5077542,17z/data=!3m1!4b1!4m6!3m5!1s0x475e0bd99cadffeb:0x229eb213d65e0676!8m2!3d44.7748899!4d17.5126251!16s%2Fg%2F11sv_lsqmk?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";

export const Hero = () => {
  const { t } = useLanguage();
  const { b, bookingUrl } = useBooking();

  return (
    <section className="relative min-h-[88vh] flex items-end pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Camping Turjanica entrance"
          className="w-full h-full object-cover"
        />
        {/* Light at the top, darker at the bottom where the text sits */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/10" />
      </div>

      <div className="relative z-10 section-container w-full pb-14 sm:pb-20">
        <div className="max-w-2xl">
          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-card mb-4 animate-slide-up [text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
            {t.camp.location}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-card leading-[1.08] mb-5 animate-slide-up" style={{ animationDelay: '0.05s' }}>
            {t.hero.headline}
          </h1>

          <p className="text-lg sm:text-xl text-card/90 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {b.bookNow}
              </a>
            </Button>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-card font-medium underline underline-offset-4 decoration-card/50 hover:decoration-card transition-colors"
            >
              <Navigation className="w-4 h-4" />
              {t.hero.ctaMap}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
