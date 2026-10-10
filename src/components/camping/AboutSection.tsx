import { useLanguage } from '@/i18n/LanguageContext';
import { ShoppingCart, Stethoscope, PawPrint } from 'lucide-react';
import natureImage from '@/assets/nature-surroundings.jpg';

export const AboutSection = () => {
  const { t } = useLanguage();

  const nearbyItems = [
    { icon: ShoppingCart, label: t.nearby.markets },
    { icon: Stethoscope, label: t.nearby.healthcare },
    { icon: PawPrint, label: t.nearby.vet },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-heading font-bold text-lg mb-3">{t.nearby.title}</h3>
              <ul className="space-y-2">
                {nearbyItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <item.icon className="w-5 h-5 text-ember mt-0.5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-sm">
            <img
              src={natureImage}
              alt="Camp Turjanica nature"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
