import { useLanguage } from '@/i18n/LanguageContext';
import riverImg from '@/assets/gallery/river-waterfall.jpg';
import barImg from '@/assets/gallery/outdoor-bar.jpg';
import treehouseImg from '@/assets/gallery/treehouse.jpg';

interface Item {
  title: string;
  desc: string;
}

// Alternating full-width photo and text blocks. Texts reuse existing translations.
export const FeatureBlocks = () => {
  const { t } = useLanguage();

  const blocks: { image: string; alt: string; items: Item[] }[] = [
    {
      image: riverImg,
      alt: 'Watermill on the river at Camp Turjanica',
      items: [t.offers.watermill, t.offers.river, t.offers.trails],
    },
    {
      image: barImg,
      alt: 'Outdoor bar at Camp Turjanica',
      items: [t.offers.localFood, t.offers.distillery, t.offers.experience],
    },
    {
      image: treehouseImg,
      alt: 'Treehouse at Camp Turjanica',
      items: [t.offers.kids, t.offers.sports, t.offers.pets],
    },
  ];

  return (
    <section aria-label={t.offers.title}>
      {blocks.map((block, index) => {
        const reversed = index % 2 === 1;
        return (
          <div
            key={block.items[0].title}
            className={`grid lg:grid-cols-2 lg:h-[500px] ${reversed ? 'bg-secondary/60' : 'bg-card'}`}
          >
            <div className={`${reversed ? 'lg:order-2' : ''} h-[260px] sm:h-[360px] lg:h-full overflow-hidden`}>
              <img
                src={block.image}
                alt={block.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`${reversed ? 'lg:order-1' : ''} flex items-center`}>
              <div className="px-6 sm:px-10 lg:px-16 py-12 lg:py-16 max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">{block.items[0].title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{block.items[0].desc}</p>
                <ul className="space-y-5">
                  {block.items.slice(1).map((item) => (
                    <li key={item.title} className="border-l-4 border-ember pl-4">
                      <p className="font-heading font-bold text-lg leading-tight">{item.title}</p>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
