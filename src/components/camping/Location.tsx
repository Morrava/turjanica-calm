import { MapPin, Mountain, Shield } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import natureImage from '@/assets/nature-surroundings.jpg';

export const Location = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: MapPin, text: t.location.distance },
    { icon: Mountain, text: t.location.nature },
    { icon: Shield, text: t.location.safe },
  ];

  return (
    <section id="location" className="section-padding bg-card">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.location.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image & Description */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-card mb-8">
              <img
                src={natureImage}
                alt="Bosnian nature surroundings"
                className="w-full aspect-video object-cover"
              />
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.location.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card border border-border h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90856.21542978654!2d17.1066559!3d44.7725581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e03678881f8b5%3A0x2c9ec9ef50c1a12a!2sBanja%20Luka%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2sus!4v1705600000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Camping Turjanica location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
