import { 
  Tent, 
  TreePine, 
  Trophy, 
  Baby, 
  Dog, 
  Ship, 
  Wheat,
  Apple,
  Wine,
  Users
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const OffersSection = () => {
  const { t } = useLanguage();

  const offers = [
    { icon: Tent, title: t.offers.activeStay.title, desc: t.offers.activeStay.desc },
    { icon: TreePine, title: t.offers.trails.title, desc: t.offers.trails.desc },
    { icon: Trophy, title: t.offers.sports.title, desc: t.offers.sports.desc },
    { icon: Baby, title: t.offers.kids.title, desc: t.offers.kids.desc },
    { icon: Dog, title: t.offers.pets.title, desc: t.offers.pets.desc },
    { icon: Ship, title: t.offers.river.title, desc: t.offers.river.desc },
    { icon: Wheat, title: t.offers.watermill.title, desc: t.offers.watermill.desc },
    { icon: Apple, title: t.offers.localFood.title, desc: t.offers.localFood.desc },
    { icon: Wine, title: t.offers.distillery.title, desc: t.offers.distillery.desc },
    { icon: Users, title: t.offers.experience.title, desc: t.offers.experience.desc },
  ];

  return (
    <section id="offers" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.offers.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.offers.subtitle}
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <offer.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{offer.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
