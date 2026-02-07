import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';
import { Globe, Check, ChevronDown } from 'lucide-react';

const languages: { code: Language; flag: string; label: string; fullLabel: string }[] = [
  { code: 'nl', flag: '🇳🇱', label: 'NL', fullLabel: 'Nederlands' },
  { code: 'en', flag: '🇬🇧', label: 'EN', fullLabel: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'DE', fullLabel: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', label: 'FR', fullLabel: 'Français' },
  { code: 'sr', flag: '🇷🇸', label: 'SR', fullLabel: 'Srpski' },
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

  const isFooter = variant === 'footer';

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          isFooter 
            ? 'bg-background/10 hover:bg-background/20 text-background' 
            : 'bg-secondary/80 hover:bg-secondary'
        }`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className={`w-4 h-4 ${isFooter ? 'text-background/70' : 'text-muted-foreground'}`} />
        <span className="text-base sm:hidden">{currentLang.flag}</span>
        <span className={`font-medium text-sm ${isFooter ? 'text-background' : 'text-foreground'}`}>
          {currentLang.fullLabel}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isFooter ? 'text-background/70' : 'text-muted-foreground'
          } ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className={`absolute z-50 rounded-xl shadow-lg overflow-hidden min-w-[180px] border ${
            isFooter 
              ? 'bottom-full mb-2 left-0 bg-foreground border-background/20' 
              : 'top-full mt-2 right-0 bg-background border-border'
          }`}
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  isFooter
                    ? language === lang.code
                      ? 'bg-primary/20 text-primary'
                      : 'hover:bg-background/10 text-background'
                    : language === lang.code
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-secondary text-foreground'
                }`}
              >
                <span className="text-lg sm:hidden">{lang.flag}</span>
                <span className="font-medium text-sm flex-1">{lang.fullLabel}</span>
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
