import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'nl', flag: '🇳🇱', label: 'NL' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'bs', flag: '🇧🇦', label: 'BS' },
  { code: 'sr-Latn', flag: '🇷🇸', label: 'SR' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-wrap gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1 px-2 py-1 rounded text-sm transition-colors ${
            language === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-secondary text-foreground/70 hover:text-foreground'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          <span>{lang.flag}</span>
          <span className="font-medium">{lang.label}</span>
        </button>
      ))}
    </div>
  );
};
