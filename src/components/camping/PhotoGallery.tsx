import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

// Import all gallery images
import pavilionImg from '@/assets/gallery/pavilion.jpg';
import treehouseImg from '@/assets/gallery/treehouse.jpg';
import entranceWinterImg from '@/assets/gallery/entrance-winter.jpg';
import roadSignImg from '@/assets/gallery/road-sign.jpg';
import eveningAtmosphereImg from '@/assets/gallery/evening-atmosphere.jpg';
import sportsFieldImg from '@/assets/gallery/sports-field.jpg';
import campGroundsImg from '@/assets/gallery/camp-grounds.jpg';
import heartViewImg from '@/assets/gallery/heart-view.jpg';
import treehouseCellarImg from '@/assets/gallery/treehouse-cellar.jpg';
import heartDecorationImg from '@/assets/gallery/heart-decoration.jpg';
// New gallery images
import barTreehouseImg from '@/assets/gallery/bar-treehouse.jpg';
import outdoorBarImg from '@/assets/gallery/outdoor-bar.jpg';
import diningHallImg from '@/assets/gallery/dining-hall.jpg';
import cabinsImg from '@/assets/gallery/cabins.jpg';
import pondPavilionImg from '@/assets/gallery/pond-pavilion.jpg';
import riverWaterfallImg from '@/assets/gallery/river-waterfall.jpg';
import coveredTerraceImg from '@/assets/gallery/covered-terrace.jpg';

const galleryImages = [
  barTreehouseImg,
  pondPavilionImg,
  riverWaterfallImg,
  coveredTerraceImg,
  diningHallImg,
  outdoorBarImg,
  cabinsImg,
  treehouseImg,
  treehouseCellarImg,
  campGroundsImg,
  pavilionImg,
  eveningAtmosphereImg,
  heartDecorationImg,
  sportsFieldImg,
  heartViewImg,
  entranceWinterImg,
  roadSignImg,
];

export const PhotoGallery = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      const cardWidth = 432 + 16; // card width + gap (md:w-[432px] + gap-4)
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Images className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              {t.gallery.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 border border-border shadow-card flex items-center justify-center hover:bg-secondary transition-colors -ml-4 lg:-ml-6"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScrollability}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="flex-shrink-0 snap-start group relative w-[336px] sm:w-[384px] md:w-[432px] aspect-[4/3] overflow-hidden rounded-xl bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <img
                  src={image}
                  alt={`Camp Turjanica - Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollByCard('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 border border-border shadow-card flex items-center justify-center hover:bg-secondary transition-colors -mr-4 lg:-mr-6"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          )}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>

            {/* Image */}
            <div 
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[currentIndex]}
                alt={`Camp Turjanica - Photo ${currentIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
