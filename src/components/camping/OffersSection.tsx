import { useState, useRef, useEffect } from 'react';
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
  Users,
  Bath,
  Zap,
  Droplets,
  Flame,
  UtensilsCrossed,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const OffersSection = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const offers = [
    // Activities & experiences
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
    // Facilities
    { icon: Bath, title: t.facilities.toilets, desc: null },
    { icon: Zap, title: t.facilities.electricity, desc: null },
    { icon: Droplets, title: t.facilities.water, desc: null },
    { icon: Flame, title: t.facilities.firepit, desc: null },
    { icon: UtensilsCrossed, title: t.facilities.equipment, desc: null },
    { icon: Sparkles, title: t.facilities.spring, desc: null },
  ];

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scrollByCard = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 240 + 16; // card width + gap (w-[240px] + gap-4)
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            {t.offers.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.offers.subtitle}
          </p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 border border-border shadow-card flex items-center justify-center hover:bg-secondary transition-colors -ml-3 lg:-ml-5"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScrollability}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`flex-shrink-0 snap-start group p-4 rounded-xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 ${
                  offer.desc ? 'w-[220px] sm:w-[260px]' : 'w-[160px] sm:w-[180px]'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <offer.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm text-foreground leading-snug">
                  {offer.title}
                </h3>
                {offer.desc && (
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                    {offer.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollByCard('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 border border-border shadow-card flex items-center justify-center hover:bg-secondary transition-colors -mr-3 lg:-mr-5"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
