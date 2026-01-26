import { Bath, Zap, Droplets, Flame, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const Facilities = () => {
  const { t } = useLanguage();

  const facilities = [
    { icon: Bath, label: t.facilities.toilets },
    { icon: Zap, label: t.facilities.electricity },
    { icon: Droplets, label: t.facilities.water },
    { icon: Flame, label: t.facilities.firepit },
    { icon: UtensilsCrossed, label: t.facilities.equipment },
    { icon: Sparkles, label: t.facilities.spring },
  ];

  return (
    <section id="facilities" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.facilities.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.facilities.subtitle}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                <facility.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-center text-foreground leading-snug">
                {facility.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
