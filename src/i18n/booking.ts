import type { Language } from './translations';
import { PRICING } from '@/lib/pricing';

interface BookingStrings {
  navPricing: string;
  title: string;
  subtitle: string;
  perNight: string;
  perNightDesc: string;
  electricity: string;
  electricityDesc: string;
  children: string;
  childrenValue: string;
  childrenDesc: string;
  teaser: string;
  bookNow: string;
  bookHint: string;
}

// Tokens {age} is replaced from PRICING.
const strings: Record<Language, BookingStrings> = {
  nl: {
    navPricing: 'Prijzen',
    title: 'Prijzen',
    subtitle: 'Eenvoudig en transparant',
    perNight: 'Verblijf in het kamp',
    perNightDesc: 'per nacht, per camper, caravan of tent',
    electricity: 'Elektriciteit',
    electricityDesc: 'eenmalig per verblijf',
    children: 'Kinderen',
    childrenValue: 'Gratis',
    childrenDesc: 'jonger dan {age} jaar',
    teaser: 'Vanaf {price} per nacht · Kinderen gratis',
    bookNow: 'Boek nu',
    bookHint: 'Eén tik via WhatsApp, niet bellen nodig',
  },
  en: {
    navPricing: 'Prices',
    title: 'Prices',
    subtitle: 'Simple and transparent',
    perNight: 'Stay in the camp',
    perNightDesc: 'per night, per camper, caravan or tent',
    electricity: 'Electricity',
    electricityDesc: 'one-time fee per stay',
    children: 'Children',
    childrenValue: 'Free',
    childrenDesc: 'under {age} years old',
    teaser: 'From {price} per night · Kids stay free',
    bookNow: 'Book now',
    bookHint: 'One tap via WhatsApp, no phone call needed',
  },
  de: {
    navPricing: 'Preise',
    title: 'Preise',
    subtitle: 'Einfach und transparent',
    perNight: 'Aufenthalt im Camp',
    perNightDesc: 'pro Nacht, pro Wohnmobil, Wohnwagen oder Zelt',
    electricity: 'Strom',
    electricityDesc: 'einmalig pro Aufenthalt',
    children: 'Kinder',
    childrenValue: 'Kostenlos',
    childrenDesc: 'unter {age} Jahren',
    teaser: 'Ab {price} pro Nacht · Kinder gratis',
    bookNow: 'Jetzt buchen',
    bookHint: 'Ein Klick über WhatsApp, kein Anruf nötig',
  },
  sr: {
    navPricing: 'Cijene',
    title: 'Cijene',
    subtitle: 'Jednostavno i transparentno',
    perNight: 'Boravak u kampu',
    perNightDesc: 'po noćenju, po kamperu, kamp-prikolici ili šatoru',
    electricity: 'Struja',
    electricityDesc: 'jednokratno po boravku',
    children: 'Djeca',
    childrenValue: 'Besplatno',
    childrenDesc: 'mlađa od {age} godina',
    teaser: 'Od {price} po noćenju · Djeca besplatno',
    bookNow: 'Rezerviši',
    bookHint: 'Jedan klik preko WhatsApp-a, bez telefonskog poziva',
  },
  fr: {
    navPricing: 'Tarifs',
    title: 'Tarifs',
    subtitle: 'Simple et transparent',
    perNight: 'Séjour au camp',
    perNightDesc: 'par nuit, par camping-car, caravane ou tente',
    electricity: 'Électricité',
    electricityDesc: 'forfait unique par séjour',
    children: 'Enfants',
    childrenValue: 'Gratuit',
    childrenDesc: 'de moins de {age} ans',
    teaser: 'Dès {price} par nuit · Enfants gratuits',
    bookNow: 'Réserver',
    bookHint: 'Un clic via WhatsApp, pas besoin de téléphoner',
  },
  sk: {
    navPricing: 'Cenník',
    title: 'Cenník',
    subtitle: 'Jednoducho a transparentne',
    perNight: 'Pobyt v kempe',
    perNightDesc: 'za noc, za obytný automobil, karavan alebo stan',
    electricity: 'Elektrina',
    electricityDesc: 'jednorazovo za pobyt',
    children: 'Deti',
    childrenValue: 'Zadarmo',
    childrenDesc: 'mladšie ako {age} rokov',
    teaser: 'Od {price} za noc · Deti zadarmo',
    bookNow: 'Rezervovať',
    bookHint: 'Jedno kliknutie cez WhatsApp, bez telefonovania',
  },
  cs: {
    navPricing: 'Ceník',
    title: 'Ceník',
    subtitle: 'Jednoduše a transparentně',
    perNight: 'Pobyt v kempu',
    perNightDesc: 'za noc, za obytný vůz, karavan nebo stan',
    electricity: 'Elektřina',
    electricityDesc: 'jednorázově za pobyt',
    children: 'Děti',
    childrenValue: 'Zdarma',
    childrenDesc: 'mladší {age} let',
    teaser: 'Od {price} za noc · Děti zdarma',
    bookNow: 'Rezervovat',
    bookHint: 'Jedno kliknutí přes WhatsApp, bez telefonování',
  },
  hu: {
    navPricing: 'Árak',
    title: 'Árak',
    subtitle: 'Egyszerű és átlátható',
    perNight: 'Tartózkodás a kempingben',
    perNightDesc: 'éjszakánként, lakóautónként, lakókocsinként vagy sátranként',
    electricity: 'Áram',
    electricityDesc: 'egyszeri díj tartózkodásonként',
    children: 'Gyerekek',
    childrenValue: 'Ingyenes',
    childrenDesc: '{age} év alatt',
    teaser: '{price}-tól éjszakánként · Gyerekeknek ingyenes',
    bookNow: 'Foglalás',
    bookHint: 'Egy koppintás WhatsAppon, telefonálás nélkül',
  },
};

const prefixCurrency: Language[] = ['nl', 'en'];

const formatAmount = (lang: Language, amount: number) =>
  prefixCurrency.includes(lang)
    ? `${PRICING.currency}${amount}`
    : `${amount} ${PRICING.currency}`;

export const getBookingStrings = (lang: Language) => {
  const s = strings[lang];
  const camperPrice = formatAmount(lang, PRICING.camperPerNight);
  const electricityPrice = `+ ${formatAmount(lang, PRICING.electricityOneTime)}`;
  const fill = (text: string) =>
    text
      .replace('{age}', String(PRICING.childFreeUnderAge))
      .replace('{price}', camperPrice);
  return {
    ...s,
    camperPrice,
    electricityPrice,
    childrenDesc: fill(s.childrenDesc),
    teaser: fill(s.teaser),
  };
};
