import { Search, Route, ArrowRight, Navigation, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';

const GPS_LAT = 44.77506126380439;
const GPS_LNG = 17.512651922089002;
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${GPS_LAT},${GPS_LNG}`;

export const DirectionsSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, text: t.directions.step1 },
    { icon: Route, text: t.directions.step2 },
    { icon: ArrowRight, text: t.directions.step3 },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.directions.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.directions.subtitle}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <step.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* GPS Coordinates */}
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">{t.directions.gpsLabel}</h3>
            </div>
            <p className="text-lg font-mono text-muted-foreground mb-6">
              {GPS_LAT}, {GPS_LNG}
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-5 h-5" />
                {t.directions.openMaps}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
