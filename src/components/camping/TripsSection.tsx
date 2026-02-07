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
    { ...t.trips.banjaluka, key: 'banjaluka', image: banjaLukaImg, mapUrl: 'https://www.google.com/maps/place/Kastel+Fortress/@44.7665964,17.1880921,17z/data=!3m1!4b1!4m6!3m5!1s0x475e03180c09d68d:0x62337bdf5d5ca7fa!8m2!3d44.7665926!4d17.190667!16s%2Fg%2F122z2gz3?entry=ttu' },
    { ...t.trips.celinac, key: 'celinac', image: celinacImg, mapUrl: 'https://www.google.com/maps/place/%C4%8Celinac,+Bosnia+and+Herzegovina/@44.7223702,17.3112794,15z/data=!3m1!4b1!4m6!3m5!1s0x475e10037ef43d95:0x4b930955a9b45eaf!8m2!3d44.7258634!4d17.3207229!16zL20vMDQyN3Bj?entry=ttu' },
    { ...t.trips.brvnara, key: 'brvnara', image: brvnaraImg, mapUrl: 'https://www.google.com/maps/place/Brvnara/@44.7493297,17.266916,17z/data=!3m1!4b1!4m6!3m5!1s0x475e04d94ba98f0f:0xe6980006d51e92dc!8m2!3d44.7493259!4d17.2694909!16s%2Fg%2F1q5bn9cbd?entry=ttu' },
    { ...t.trips.pizzeria, key: 'pizzeria', image: pizzeriaImg, mapUrl: 'https://www.google.com/maps/place/Kafe-Pizzeria3M/@44.7679,17.4901496,17z/data=!3m1!4b1!4m6!3m5!1s0x475e0d002a9344d1:0x21a3826a5b1d73e2!8m2!3d44.7678962!4d17.4927245!16s%2Fg%2F11vx3mtvqp?entry=ttu' },
    { ...t.trips.liplje, key: 'liplje', image: lipljeImg, mapUrl: 'https://www.google.com/maps/place/Liplje+Orthodox+Monastery/@44.6251696,17.5672471,17z/data=!3m1!4b1!4m6!3m5!1s0x475e6c1defcb448f:0x27e300e5c5c42f5c!8m2!3d44.6251658!4d17.569822!16s%2Fm%2F0107ys2d?entry=ttu' },
    { ...t.trips.stuplje, key: 'stuplje', image: stupljeImg, mapUrl: 'https://www.google.com/maps/place/Stuplje+Monastery/@44.7366608,17.5979546,17z/data=!3m1!4b1!4m6!3m5!1s0x475e73a3485808a7:0x49e31990c6a4643!8m2!3d44.736657!4d17.6005295!16s%2Fm%2F0_yd_1d?entry=ttu' },
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
            <a
              key={trip.key}
              href={trip.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 cursor-pointer"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
