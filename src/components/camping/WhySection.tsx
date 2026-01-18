import { Heart, Mountain, Shield, Users } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const WhySection = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Users,
      title: t.why.reason1Title,
      description: t.why.reason1Desc,
    },
    {
      icon: Mountain,
      title: t.why.reason2Title,
      description: t.why.reason2Desc,
    },
    {
      icon: Shield,
      title: t.why.reason3Title,
      description: t.why.reason3Desc,
    },
    {
      icon: Heart,
      title: t.why.reason4Title,
      description: t.why.reason4Desc,
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.why.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.why.subtitle}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-background border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
