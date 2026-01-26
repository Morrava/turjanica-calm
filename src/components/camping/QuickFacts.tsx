import { MapPin, Ruler, Waves, Route, Navigation } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const QuickFacts = () => {
  const { t } = useLanguage();

  const facts = [
    { icon: MapPin, label: t.quickFacts.distance },
    { icon: Ruler, label: t.quickFacts.area },
    { icon: Waves, label: t.quickFacts.rivers },
    { icon: Route, label: t.quickFacts.road },
    { icon: Navigation, label: t.quickFacts.gps },
  ];

  return (
    <section className="bg-primary py-6">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-primary-foreground"
            >
              <fact.icon className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-base font-medium">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
