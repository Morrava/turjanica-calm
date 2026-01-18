import { Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import camperImage from '@/assets/camper-spot.jpg';
import bungalowImage from '@/assets/bungalow.jpg';

export const Accommodations = () => {
  const { t } = useLanguage();

  const accommodations = [
    {
      title: t.accommodations.camperTitle,
      image: camperImage,
      features: t.accommodations.camperFeatures,
    },
    {
      title: t.accommodations.bungalowTitle,
      image: bungalowImage,
      features: t.accommodations.bungalowFeatures,
    },
  ];

  return (
    <section id="accommodations" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.accommodations.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.accommodations.subtitle}
          </p>
        </div>

        {/* Accommodation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {accommodations.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                
                <ul className="space-y-3 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="cta" className="w-full" asChild>
                  <a href="#contact">{t.accommodations.cta}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
