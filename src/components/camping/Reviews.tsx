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
      bs: 'Prekrasan miran kamp! Djeci se svidjelo, a vlasnici su super prijateljski.',
      'sr-Latn': 'Prekrasan miran kamp! Deci se svidelo, a vlasnici su super prijateljski.',
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
      bs: 'Skriveni dragulj u Bosni. Čisti sadržaji, prekrasna priroda svuda okolo.',
      'sr-Latn': 'Skriveni dragulj u Bosni. Čisti sadržaji, prelepa priroda svuda okolo.',
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
      bs: 'Nakon 3 sedmice na Balkanu, ovo je bio najbolji kamp. Autentičan, gostoljubiv i miran. Definitivno se vraćamo!',
      'sr-Latn': 'Nakon 3 nedelje na Balkanu, ovo je bio najbolji kamp. Autentičan, gostoljubiv i miran. Definitivno se vraćamo!',
    } as Record<Language, string>,
    source: 'Park4Night',
  },
];

export const Reviews = () => {
  const { t, language } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{review.text[language]}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{review.country}</span>
                  <span className="font-medium text-sm">{review.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t.reviews.source} {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
