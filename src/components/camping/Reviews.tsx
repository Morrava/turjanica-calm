import { Star } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

const reviews = [
  {
    name: 'Familie van der Berg',
    country: '🇳🇱',
    rating: 5,
    text: {
      nl: 'Prachtige rustige camping! De kinderen vonden het geweldig en de eigenaren zijn super vriendelijk.',
      en: 'Beautiful peaceful campsite! The kids loved it and the owners are super friendly.',
      de: 'Wunderschöner ruhiger Campingplatz! Die Kinder waren begeistert und die Besitzer sind super freundlich.',
      sr: 'Prekrasan miran kamp! Djeci se svidjelo, a vlasnici su super prijateljski.',
      fr: 'Camping paisible et magnifique ! Les enfants ont adoré et les propriétaires sont super sympathiques.',
    } as Record<Language, string>,
    source: 'Park4Night',
  },
  {
    name: 'Thomas & Maria Schneider',
    country: '🇩🇪',
    rating: 5,
    text: {
      nl: 'Een verborgen juweeltje in Bosnië. Schone faciliteiten, prachtige natuur rondom.',
      en: 'A hidden gem in Bosnia. Clean facilities, beautiful nature all around.',
      de: 'Ein verstecktes Juwel in Bosnien. Saubere Einrichtungen, wunderschöne Natur rundherum.',
      sr: 'Skriveni dragulj u Bosni. Čisti sadržaji, prekrasna priroda svuda okolo.',
      fr: 'Un joyau caché en Bosnie. Installations propres, belle nature tout autour.',
    } as Record<Language, string>,
    source: 'Camping.info',
  },
  {
    name: 'Peter & Anneke',
    country: '🇳🇱',
    rating: 5,
    text: {
      nl: 'Na 3 weken Balkan was dit de beste camping. Authentiek, gastvrij en rustig. Zeker terug!',
      en: 'After 3 weeks in the Balkans, this was the best campsite. Authentic, welcoming and peaceful. Definitely coming back!',
      de: 'Nach 3 Wochen Balkan war dies der beste Campingplatz. Authentisch, gastfreundlich und ruhig. Kommen bestimmt wieder!',
      sr: 'Nakon 3 sedmice na Balkanu, ovo je bio najbolji kamp. Autentičan, gostoljubiv i miran. Definitivno se vraćamo!',
      fr: 'Après 3 semaines dans les Balkans, c\'était le meilleur camping. Authentique, accueillant et paisible. On reviendra !',
    } as Record<Language, string>,
    source: 'Park4Night',
  },
];

export const Reviews = () => {
  const { t, language } = useLanguage();
  const [featured, ...others] = reviews;
  const text = (r: (typeof reviews)[number]) => r.text[language] ?? r.text.en;

  const Stars = ({ n }: { n: number }) => (
    <div className="flex gap-0.5 mb-3" aria-label={`${n} / 5`}>
      {[...Array(n)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-ember text-ember" />
      ))}
    </div>
  );

  return (
    <section id="reviews" className="section-padding bg-accent/50">
      <div className="section-container">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.reviews.title}</h2>
          <p className="text-lg text-muted-foreground">{t.reviews.subtitle}</p>
        </div>

        <figure className="max-w-3xl mb-14">
          <Stars n={featured.rating} />
          <blockquote className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
            “{text(featured)}”
          </blockquote>
          <figcaption className="mt-5 text-muted-foreground">
            <span className="mr-2">{featured.country}</span>
            <span className="font-semibold text-foreground">{featured.name}</span>, {t.reviews.source} {featured.source}
          </figcaption>
        </figure>

        <div className="grid md:grid-cols-2 gap-10 border-t border-border pt-10">
          {others.map((review) => (
            <figure key={review.name}>
              <Stars n={review.rating} />
              <blockquote className="text-lg leading-relaxed">“{text(review)}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="mr-2">{review.country}</span>
                <span className="font-semibold text-foreground">{review.name}</span>, {t.reviews.source} {review.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
