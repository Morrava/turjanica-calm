import { MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const TripsSection = () => {
  const { t } = useLanguage();

  const trips = [
    { ...t.trips.banjaluka, key: 'banjaluka' },
    { ...t.trips.celinac, key: 'celinac' },
    { ...t.trips.brvnara, key: 'brvnara' },
    { ...t.trips.pizzeria, key: 'pizzeria' },
    { ...t.trips.liplje, key: 'liplje' },
    { ...t.trips.stuplje, key: 'stuplje' },
  ];

  return (
    <section id="trips" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.trips.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.trips.subtitle}
          </p>
        </div>

        {/* Trips Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trips.map((trip) => (
            <div
              key={trip.key}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-lg text-foreground">{trip.name}</h3>
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {trip.distance}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{trip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
