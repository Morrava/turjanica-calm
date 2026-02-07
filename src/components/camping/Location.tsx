import { MapPin, Mountain, Shield, Navigation } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';

const GPS_LAT = 44.77506126380439;
const GPS_LNG = 17.512651922089002;
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Izleti%C5%A1te+Camp+Turjanica/@44.7748936,17.5077542,17z/data=!3m1!4b1!4m6!3m5!1s0x475e0bd99cadffeb:0x229eb213d65e0676!8m2!3d44.7748899!4d17.5126251!16s%2Fg%2F11sv_lsqmk?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";
const EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.5!2d${GPS_LNG}!3d${GPS_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ2JzMwLjIiTiAxN8KwMzAnNDUuNSJF!5e1!3m2!1sen!2sba!4v1706000000000!5m2!1sen!2sba`;

export const Location = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: MapPin, text: t.location.distance },
    { icon: Mountain, text: t.location.nature },
    { icon: Shield, text: t.location.safe },
  ];

  return (
    <section id="location" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.location.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.location.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* GPS + CTA */}
            <div className="bg-secondary rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold">{t.camp.location}</span>
              </div>
              <p className="text-sm font-mono text-muted-foreground mb-4">
                GPS: {GPS_LAT}, {GPS_LNG}
              </p>
              <Button variant="cta" size="default" asChild className="w-full sm:w-auto">
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4" />
                  {t.directions.openMaps}
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card border border-border h-[400px] lg:h-[500px]">
            <iframe
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Camping Turjanica location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
