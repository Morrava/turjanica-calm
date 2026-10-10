import { useLanguage } from '@/i18n/LanguageContext';
import { useBooking } from '@/hooks/use-booking';

export const QuickFacts = () => {
  const { t } = useLanguage();
  const { b } = useBooking();

  const facts = [
    { label: b.priceFrom, highlight: true },
    { label: b.kidsFree },
    { label: t.quickFacts.distance },
    { label: `${t.quickFacts.area}, ${t.quickFacts.rivers}` },
  ];

  return (
    <section className="bg-foreground text-background">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-background/15 lg:divide-x">
          {facts.map((fact, index) => (
            <div
              key={index}
              className={`px-3 py-4 sm:px-4 sm:py-6 text-center border-background/15 ${index < 2 ? 'border-b lg:border-b-0' : ''} ${index % 2 === 0 ? 'border-r lg:border-r-0' : ''}`}
            >
              <span
                className={`font-heading font-bold text-sm sm:text-lg leading-snug text-balance ${fact.highlight ? 'text-ember-light' : ''}`}
              >
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
