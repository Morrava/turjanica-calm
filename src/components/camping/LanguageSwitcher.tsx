import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';
import { Globe, Check } from 'lucide-react';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'nl', flag: '🇳🇱', label: 'NL' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'bs', flag: '🇧🇦', label: 'BS' },
];

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'footer';
}

export const LanguageSwitcher = ({ variant = 'navbar' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'footer') {
    return (
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-all ${
              language === lang.code
                ? 'bg-primary text-primary-foreground'
                : 'bg-background/10 text-background/70 hover:bg-background/20 hover:text-background'
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/80 hover:bg-secondary transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-muted-foreground" />
        <span className="text-base">{currentLang.flag}</span>
        <span className="font-medium text-sm text-foreground">{currentLang.label}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-50 bg-background border border-border rounded-xl shadow-lg overflow-hidden min-w-[160px]">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  language === lang.code
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-secondary text-foreground'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium text-sm flex-1">{lang.label}</span>
                {language === lang.code && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
