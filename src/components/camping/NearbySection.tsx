import { ShoppingCart, Stethoscope, PawPrint } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const NearbySection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: ShoppingCart, label: t.nearby.markets },
    { icon: Stethoscope, label: t.nearby.healthcare },
    { icon: PawPrint, label: t.nearby.vet },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.nearby.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.nearby.subtitle}
          </p>
        </div>

        {/* Items */}
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-secondary px-5 py-3 rounded-full"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
