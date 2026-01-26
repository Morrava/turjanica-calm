import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';
import { ChevronDown } from 'lucide-react';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'nl', flag: '🇳🇱', label: 'Nederlands' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'bs', flag: '🇧🇦', label: 'Bosanski' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === language) || languages[0];
  const otherLanguages = languages.filter((l) => l.code !== language);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Current Language Button */}
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="font-medium text-sm text-foreground">{currentLang.label}</span>
        <ChevronDown 
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Invisible bridge to prevent gap */}
      <div className="absolute top-full right-0 left-0 h-2" />

      {/* Dropdown Menu */}
      <div
        className={`absolute top-[calc(100%+0.25rem)] right-0 z-50 bg-background border border-border rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top ${
          isOpen 
            ? 'opacity-100 scale-100 visible' 
            : 'opacity-0 scale-95 invisible'
        }`}
      >
        <div className="py-1 min-w-[140px]">
          {otherLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-secondary transition-colors"
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium text-sm text-foreground">{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
