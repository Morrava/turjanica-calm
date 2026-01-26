import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import icon from '@/assets/icon.png';

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Izleti%C5%A1te+Camp+Turjanica/@44.7748936,17.5077542,17z/data=!3m1!4b1!4m6!3m5!1s0x475e0bd99cadffeb:0x229eb213d65e0676!8m2!3d44.7748899!4d17.5126251!16s%2Fg%2F11sv_lsqmk?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={icon} alt="Turjanica" className="w-10 h-10 invert" />
              <span className="font-semibold text-lg">{t.camp.name}</span>
            </div>
            <p className="text-background/70 text-sm italic mb-4">
              {t.footer.tagline}
            </p>
            <a 
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              {t.directions.openMaps}
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">{t.footer.address}</span>
                  <span className="block text-xs font-mono mt-1">
                    GPS: {t.camp.gps}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+38766912449" className="hover:text-background transition-colors">+387 66 912 449</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:camp.turjanica@gmail.com" className="hover:text-background transition-colors">camp.turjanica@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.links}</h4>
            <div className="space-y-2 text-sm text-background/70">
              <a href="#about" className="block hover:text-background transition-colors">
                {t.nav.about}
              </a>
              <a href="#offers" className="block hover:text-background transition-colors">
                {t.nav.offers}
              </a>
              <a href="#accommodations" className="block hover:text-background transition-colors">
                {t.nav.accommodations}
              </a>
              <a href="#facilities" className="block hover:text-background transition-colors">
                {t.nav.facilities}
              </a>
              <a href="#location" className="block hover:text-background transition-colors">
                {t.nav.location}
              </a>
              <a href="#trips" className="block hover:text-background transition-colors">
                {t.nav.trips}
              </a>
            </div>
          </div>

          {/* Language */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.language}</h4>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} {t.camp.name}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
