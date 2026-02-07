import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-camping.jpg';

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Izleti%C5%A1te+Camp+Turjanica/@44.7748936,17.5077542,17z/data=!3m1!4b1!4m6!3m5!1s0x475e0bd99cadffeb:0x229eb213d65e0676!8m2!3d44.7748899!4d17.5126251!16s%2Fg%2F11sv_lsqmk?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";

export const Hero = () => {
  const { t } = useLanguage();

  const trustPoints = [
    t.hero.trust1,
    t.hero.trust2,
    t.hero.trust3,
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Camping Turjanica entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="max-w-3xl">
          {/* Camp name badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-slide-up">
            <MapPin className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">{t.camp.name}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.05s' }}>
            {t.hero.headline}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-card/90 mb-8 animate-slide-up italic" style={{ animationDelay: '0.1s' }}>
            "{t.hero.tagline}"
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 border border-card/20"
              >
                <span className="text-sm font-medium text-card">{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">{t.hero.cta}</a>
            </Button>
            <Button variant="heroSecondary" size="xl" asChild>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-5 h-5" />
                {t.hero.ctaMap}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};
