import { useState } from 'react';
import { Menu, X, Tent } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    t
  } = useLanguage();
  const navItems = [{
    label: t.nav.about,
    href: '#about'
  }, {
    label: t.nav.accommodations,
    href: '#accommodations'
  }, {
    label: t.nav.offers,
    href: '#offers'
  }, {
    label: t.nav.gallery,
    href: '#gallery'
  }, {
    label: t.nav.trips,
    href: '#trips'
  }, {
    label: t.nav.location,
    href: '#location'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary flex items-center justify-center">
              <Tent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground text-sm sm:text-base">Camping Turjanica</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(item => <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>)}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <Button variant="cta" size="sm" asChild className="hidden sm:flex">
              <a href="#contact">{t.nav.contact}</a>
            </Button>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
                  {item.label}
                </a>)}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-primary hover:bg-secondary rounded-lg transition-colors">
                {t.nav.contact}
              </a>
            </nav>
            <div className="mt-4 px-4 pb-4">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>}
      </div>
    </header>;
};