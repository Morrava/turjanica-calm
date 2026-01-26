import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { cn } from '@/lib/utils';

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

interface GalleryImage {
  src: string;
  category: 'facilities' | 'nature' | 'accommodations';
}

const galleryImages: GalleryImage[] = [
  { src: treehouseImg, category: 'accommodations' },
  { src: treehouseCellarImg, category: 'accommodations' },
  { src: campGroundsImg, category: 'nature' },
  { src: pavilionImg, category: 'facilities' },
  { src: eveningAtmosphereImg, category: 'facilities' },
  { src: heartDecorationImg, category: 'nature' },
  { src: sportsFieldImg, category: 'facilities' },
  { src: heartViewImg, category: 'nature' },
  { src: entranceWinterImg, category: 'nature' },
  { src: roadSignImg, category: 'facilities' },
];

export const PhotoGallery = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'facilities' | 'nature' | 'accommodations'>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

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
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  const categories = [
    { key: 'all', label: t.gallery.all },
    { key: 'facilities', label: t.gallery.facilities },
    { key: 'nature', label: t.gallery.nature },
    { key: 'accommodations', label: t.gallery.accommodations },
  ] as const;

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

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                filter === cat.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={image.src}
                alt={`Camp Turjanica - ${image.category}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white/90 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                  {t.gallery[image.category]}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
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
                src={filteredImages[currentIndex].src}
                alt={`Camp Turjanica - ${filteredImages[currentIndex].category}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                {currentIndex + 1} / {filteredImages.length}
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
