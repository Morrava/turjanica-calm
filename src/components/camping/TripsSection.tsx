import { MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

// Import trip images
import banjaLukaImg from '@/assets/trips/banja-luka.jpg';
import celinacImg from '@/assets/trips/celinac.jpg';
import brvnaraImg from '@/assets/trips/brvnara.png';
import pizzeriaImg from '@/assets/trips/pizzeria.png';
import lipljeImg from '@/assets/trips/liplje.png';
import stupljeImg from '@/assets/trips/stuplje.png';

export const TripsSection = () => {
  const { t } = useLanguage();

  const trips = [
    { ...t.trips.banjaluka, key: 'banjaluka', image: banjaLukaImg },
    { ...t.trips.celinac, key: 'celinac', image: celinacImg },
    { ...t.trips.brvnara, key: 'brvnara', image: brvnaraImg },
    { ...t.trips.pizzeria, key: 'pizzeria', image: pizzeriaImg },
    { ...t.trips.liplje, key: 'liplje', image: lipljeImg },
    { ...t.trips.stuplje, key: 'stuplje', image: stupljeImg },
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trips.map((trip) => (
            <div
              key={trip.key}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-foreground">{trip.name}</h3>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium flex-shrink-0 ml-2">
                    <MapPin className="w-4 h-4" />
                    {trip.distance}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{trip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
