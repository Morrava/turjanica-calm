import { useLanguage } from '@/i18n/LanguageContext';

// Import trip images
import banjaLukaImg from '@/assets/trips/banja-luka.jpg';
import marriottImg from '@/assets/trips/marriott.png';
import celinacImg from '@/assets/trips/celinac.jpg';
import brvnaraImg from '@/assets/trips/brvnara.png';

import lipljeImg from '@/assets/trips/liplje.png';
import stupljeImg from '@/assets/trips/stuplje.png';

export const TripsSection = () => {
  const { t } = useLanguage();

  const trips = [
    { ...t.trips.banjaluka, key: 'banjaluka', image: banjaLukaImg, mapUrl: 'https://www.google.com/maps/place/Kastel+Fortress/@44.7665964,17.1880921,17z/data=!3m1!4b1!4m6!3m5!1s0x475e03180c09d68d:0x62337bdf5d5ca7fa!8m2!3d44.7665926!4d17.190667!16s%2Fg%2F122z2gz3?entry=ttu' },
    { ...t.trips.marriott, key: 'marriott', image: marriottImg, mapUrl: 'https://www.google.com/maps/place/Courtyard+by+Marriott+Banja+Luka/@44.777418,17.1926662,18z/data=!4m10!3m9!1s0x475e03159b9614e9:0x672e9768b226ebe7!5m3!1s2026-02-20!4m1!1i2!8m2!3d44.7774161!4d17.1939537!16s%2Fg%2F11fk9_p7bq?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D' },
    { ...t.trips.celinac, key: 'celinac', image: celinacImg, mapUrl: 'https://www.google.com/maps/place/%C4%8Celinac,+Bosnia+and+Herzegovina/@44.7223702,17.3112794,15z/data=!3m1!4b1!4m6!3m5!1s0x475e10037ef43d95:0x4b930955a9b45eaf!8m2!3d44.7258634!4d17.3207229!16zL20vMDQyN3Bj?entry=ttu' },
    { ...t.trips.brvnara, key: 'brvnara', image: brvnaraImg, mapUrl: 'https://www.google.com/maps/place/Brvnara/@44.7493297,17.266916,17z/data=!3m1!4b1!4m6!3m5!1s0x475e04d94ba98f0f:0xe6980006d51e92dc!8m2!3d44.7493259!4d17.2694909!16s%2Fg%2F1q5bn9cbd?entry=ttu' },
    
    { ...t.trips.liplje, key: 'liplje', image: lipljeImg, mapUrl: 'https://www.google.com/maps/place/Liplje+Orthodox+Monastery/@44.6251696,17.5672471,17z/data=!3m1!4b1!4m6!3m5!1s0x475e6c1defcb448f:0x27e300e5c5c42f5c!8m2!3d44.6251658!4d17.569822!16s%2Fm%2F0107ys2d?entry=ttu' },
    { ...t.trips.stuplje, key: 'stuplje', image: stupljeImg, mapUrl: 'https://www.google.com/maps/place/Stuplje+Monastery/@44.7366608,17.5979546,17z/data=!3m1!4b1!4m6!3m5!1s0x475e73a3485808a7:0x49e31990c6a4643!8m2!3d44.736657!4d17.6005295!16s%2Fm%2F0_yd_1d?entry=ttu' },
  ];

  return (
    <section id="trips" className="section-padding bg-card">
      <div className="section-container">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.trips.title}</h2>
          <p className="text-lg text-muted-foreground">{t.trips.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-x-16">
          {trips.map((trip) => (
            <a
              key={trip.key}
              href={trip.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 sm:gap-5 py-5 border-b border-border"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-sm">
                <img
                  src={trip.image}
                  alt={trip.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-ember transition-colors">
                  {trip.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{trip.desc}</p>
              </div>
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-ember whitespace-nowrap">
                {trip.distance}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
