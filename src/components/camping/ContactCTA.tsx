import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';

const PHONE_NUMBER = '+387 66 912 449';
const EMAIL = 'camp.turjanica@gmail.com';

export const ContactCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            {t.cta.subtitle}
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroSecondary" size="xl" asChild>
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}>
                <Phone className="w-5 h-5" />
                {t.cta.call}
              </a>
            </Button>
            
            <Button 
              variant="heroSecondary" 
              size="xl" 
              asChild
            >
              <a href={`mailto:${EMAIL}`}>
                <Mail className="w-5 h-5" />
                {t.cta.email}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
