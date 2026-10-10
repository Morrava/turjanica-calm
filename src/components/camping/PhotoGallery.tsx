import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

const PREVIEW_COUNT = 9;

export const PhotoGallery = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxOpen]);

  const remaining = galleryImages.length - PREVIEW_COUNT;

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.gallery.title}</h2>
          <p className="text-muted-foreground">{t.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[130px] sm:auto-rows-[180px] md:auto-rows-[210px] gap-2 sm:gap-3">
          {galleryImages.slice(0, PREVIEW_COUNT).map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-sm bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
              aria-label={`Camp Turjanica - Photo ${index + 1}`}
            >
              <img
                src={image}
                alt={`Camp Turjanica - Photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {index === PREVIEW_COUNT - 1 && remaining > 0 && (
                <span className="absolute inset-0 bg-foreground/60 flex items-center justify-center font-heading font-bold text-3xl text-card">
                  +{remaining}
                </span>
              )}
            </button>
          ))}
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>

            <div className="max-w-[90vw] max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[currentIndex]}
                alt={`Camp Turjanica - Photo ${currentIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-sm"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
