import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-lg font-bold">T</span>
              </div>
              <span className="font-semibold text-lg">Camping Turjanica</span>
            </div>
            <p className="text-background/70 text-sm italic">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+387 XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@campingturjanica.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2 text-sm text-background/70">
              <a href="#accommodations" className="block hover:text-background transition-colors">
                {t.nav.accommodations}
              </a>
              <a href="#facilities" className="block hover:text-background transition-colors">
                {t.nav.facilities}
              </a>
              <a href="#location" className="block hover:text-background transition-colors">
                {t.nav.location}
              </a>
            </div>
          </div>

          {/* Language */}
          <div>
            <h4 className="font-semibold mb-4">Language</h4>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} Camping Turjanica. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
