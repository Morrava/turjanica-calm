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
    <section id="about" className="section-padding bg-card">
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

            {/* Nearby amenities integrated */}
            <div className="bg-secondary/50 rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-4">{t.nearby.title}</h3>
              <div className="flex flex-wrap gap-3">
                {nearbyItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-background px-4 py-2 rounded-full"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={natureImage}
              alt="Camp Turjanica nature"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
