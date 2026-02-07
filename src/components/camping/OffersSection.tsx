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
  ChevronRight,
  ChevronDown,
  MapPin,
  MessageCircle,
  Calendar,
  LucideIcon,
  Utensils,
  Leaf,
  Shield,
  Wifi,
  Car,
  Mountain,
  Heart
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import gallery images for carousel
import campGrounds from '@/assets/gallery/camp-grounds.jpg';
import riverWaterfall from '@/assets/gallery/river-waterfall.jpg';
import pondPavilion from '@/assets/gallery/pond-pavilion.jpg';
import entranceWinter from '@/assets/gallery/entrance-winter.jpg';

type TabCategory = 'comfort' | 'fire' | 'family' | 'extras';

interface AmenityItem {
  icon: LucideIcon;
  titleKey: string;
  benefitKey: string;
  badge: 'included' | 'request';
  details: string[];
}

const amenitiesByCategory: Record<TabCategory, AmenityItem[]> = {
  comfort: [
    { 
      icon: Bath, 
      titleKey: 'toilets', 
      benefitKey: 'toiletsBenefit',
      badge: 'included',
      details: ['detailHotWater', 'detailClean', 'detailAccessible']
    },
    { 
      icon: Zap, 
      titleKey: 'electricity', 
      benefitKey: 'electricityBenefit',
      badge: 'included',
      details: ['detailHookups', 'detailReliable', 'detailConvenient']
    },
    { 
      icon: Droplets, 
      titleKey: 'water', 
      benefitKey: 'waterBenefit',
      badge: 'included',
      details: ['detailDrinkable', 'detailSpring', 'detailFresh']
    },
    { 
      icon: Sparkles, 
      titleKey: 'spring', 
      benefitKey: 'springBenefit',
      badge: 'included',
      details: ['detailNatural', 'detailPure', 'detailRefreshing']
    },
  ],
  fire: [
    { 
      icon: Flame, 
      titleKey: 'firepit', 
      benefitKey: 'firepitBenefit',
      badge: 'included',
      details: ['detailEachSpot', 'detailEvening', 'detailSafe']
    },
    { 
      icon: UtensilsCrossed, 
      titleKey: 'equipment', 
      benefitKey: 'equipmentBenefit',
      badge: 'included',
      details: ['detailGrills', 'detailSac', 'detailFridge']
    },
    { 
      icon: Apple, 
      titleKey: 'localFood', 
      benefitKey: 'localFoodBenefit',
      badge: 'request',
      details: ['detailEggs', 'detailCheese', 'detailHoney']
    },
    { 
      icon: Wine, 
      titleKey: 'distillery', 
      benefitKey: 'distilleryBenefit',
      badge: 'request',
      details: ['detailRakija', 'detailTasting', 'detailBuy']
    },
  ],
  family: [
    { 
      icon: Baby, 
      titleKey: 'kids', 
      benefitKey: 'kidsBenefit',
      badge: 'included',
      details: ['detailSwings', 'detailSandbox', 'detailPlayground']
    },
    { 
      icon: Dog, 
      titleKey: 'pets', 
      benefitKey: 'petsBenefit',
      badge: 'included',
      details: ['detailPetArea', 'detailPetFriendly', 'detailPetSafe']
    },
    { 
      icon: Trophy, 
      titleKey: 'sports', 
      benefitKey: 'sportsBenefit',
      badge: 'included',
      details: ['detailFootball', 'detailVolleyball', 'detailTableTennis']
    },
    { 
      icon: Shield, 
      titleKey: 'safety', 
      benefitKey: 'safetyBenefit',
      badge: 'included',
      details: ['detailQuiet', 'detailSecure', 'detailFamily']
    },
  ],
  extras: [
    { 
      icon: TreePine, 
      titleKey: 'trails', 
      benefitKey: 'trailsBenefit',
      badge: 'included',
      details: ['detailShortTrail', 'detailLongTrail', 'detailForest']
    },
    { 
      icon: Ship, 
      titleKey: 'river', 
      benefitKey: 'riverBenefit',
      badge: 'request',
      details: ['detailBoat', 'detailFourPeople', 'detailWaterLevel']
    },
    { 
      icon: Wheat, 
      titleKey: 'watermill', 
      benefitKey: 'watermillBenefit',
      badge: 'request',
      details: ['detailMill', 'detailFlour', 'detailTradition']
    },
    { 
      icon: Users, 
      titleKey: 'experience', 
      benefitKey: 'experienceBenefit',
      badge: 'request',
      details: ['detailHarvest', 'detailParticipate', 'detailLearn']
    },
  ],
};

const carouselImages = [
  campGrounds,
  riverWaterfall,
  pondPavilion,
  entranceWinter,
];

export const OffersSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabCategory>('comfort');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const tabs: { key: TabCategory; label: string }[] = [
    { key: 'comfort', label: t.offersNew?.tabs?.comfort || 'Comfort' },
    { key: 'fire', label: t.offersNew?.tabs?.fire || 'Fire & Food' },
    { key: 'family', label: t.offersNew?.tabs?.family || 'Family & Rules' },
    { key: 'extras', label: t.offersNew?.tabs?.extras || 'Extras' },
  ];

  const highlightChips = [
    t.offersNew?.chips?.hectares || '10 hectares',
    t.offersNew?.chips?.rivers || '2 rivers',
    t.offersNew?.chips?.nearCity || 'Near Banja Luka',
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  const getTitle = (key: string) => {
    return t.offersNew?.amenities?.[key]?.title || t.facilities?.[key] || key;
  };

  const getBenefit = (key: string) => {
    return t.offersNew?.amenities?.[key]?.benefit || '';
  };

  const getDetail = (key: string) => {
    return t.offersNew?.details?.[key] || key;
  };

  const toggleCard = (key: string) => {
    setExpandedCard(expandedCard === key ? null : key);
  };

  return (
    <section id="offers" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            {t.offersNew?.title || t.offers.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.offersNew?.subtitle || t.offers.subtitle}
          </p>
        </div>

        {/* Main 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Image Carousel with Chips */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              {carouselImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Camp Turjanica ${idx + 1}`}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                    idx === currentImage ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      idx === currentImage 
                        ? "bg-primary w-6" 
                        : "bg-background/60 hover:bg-background/80"
                    )}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Tabs + Cards */}
          <div className="flex flex-col justify-center overflow-hidden">
            {/* Tabs - Horizontal scroll on mobile */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              <div 
                ref={tabsRef}
                className="flex gap-2 mb-6 pb-2 w-max md:w-auto"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key);
                      setExpandedCard(null);
                    }}
                    className={cn(
                      "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                      activeTab === tab.key
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Amenity Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenitiesByCategory[activeTab].map((amenity) => {
                const isExpanded = expandedCard === amenity.titleKey;
                const Icon = amenity.icon;
                
                return (
                  <div
                    key={amenity.titleKey}
                    className={cn(
                      "group rounded-xl border bg-card p-4 transition-all duration-300 cursor-pointer",
                      isExpanded 
                        ? "border-primary/30 shadow-md" 
                        : "border-border hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5"
                    )}
                    onClick={() => toggleCard(amenity.titleKey)}
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm leading-tight truncate mb-1">
                          {getTitle(amenity.titleKey)}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {getBenefit(amenity.titleKey)}
                        </p>
                      </div>
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                          isExpanded && "rotate-180"
                        )} 
                      />
                    </div>

                    {/* Expandable Details */}
                    <div className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isExpanded ? "grid-rows-[1fr] mt-3 pt-3 border-t border-border/50" : "grid-rows-[0fr]"
                    )}>
                      <div className="overflow-hidden">
                        <ul className="space-y-1.5">
                          {amenity.details.map((detailKey, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                              {getDetail(detailKey)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
