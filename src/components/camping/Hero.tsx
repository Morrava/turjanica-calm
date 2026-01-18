import { Check, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-camping.jpg';

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
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6 animate-slide-up">
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-card/90 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.subheadline}
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 border border-card/20"
              >
                <Check className="w-4 h-4 text-primary-foreground" />
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
              <a href="https://wa.me/387xxxxxxxxx" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t.hero.ctaSecondary}
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
