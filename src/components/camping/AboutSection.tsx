import { useLanguage } from '@/i18n/LanguageContext';
import natureImage from '@/assets/nature-surroundings.jpg';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={natureImage}
              alt="Camp Turjanica nature"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
