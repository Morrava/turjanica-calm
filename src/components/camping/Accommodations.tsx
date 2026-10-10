import { Check, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/hooks/use-booking';
import camperImage from '@/assets/camper-spot.jpg';
import bungalowImage from '@/assets/bungalow.jpg';

export const Accommodations = () => {
  const { t } = useLanguage();
  const { b, bookingUrl } = useBooking();

  const accommodations = [
    {
      title: t.accommodations.camperTitle,
      image: camperImage,
      features: t.accommodations.camperFeatures,
      price: (
        <>
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-heading font-extrabold text-4xl text-foreground">{b.camperPrice}</span>
            <span className="text-muted-foreground">{b.perNightDesc}</span>
          </p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4 border-t border-border pt-2">
              <dt className="text-muted-foreground">{b.electricity} ({b.electricityDesc})</dt>
              <dd className="font-semibold whitespace-nowrap">{b.electricityPrice}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-border pt-2">
              <dt className="text-muted-foreground">{b.children} ({b.childrenDesc})</dt>
              <dd className="font-semibold whitespace-nowrap">{b.childrenValue}</dd>
            </div>
          </dl>
        </>
      ),
    },
    {
      title: t.accommodations.bungalowTitle,
      image: bungalowImage,
      features: t.accommodations.bungalowFeatures,
      price: (
        <p className="font-heading font-extrabold text-2xl text-foreground">{b.onRequest}</p>
      ),
    },
  ];

  return (
    <section id="accommodations" className="section-padding bg-background">
      <div className="section-container">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.accommodations.title}</h2>
          <p className="text-lg text-muted-foreground">{t.accommodations.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {accommodations.map((item) => (
            <article key={item.title} className="flex flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <ul className="space-y-2 mb-6">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="bg-secondary/60 rounded-sm p-5 mb-4 md:min-h-[162px] flex flex-col justify-center"><div>{item.price}</div></div>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      {b.bookNow}
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-2">{b.bookHint}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
