import type { Language } from './translations';
import { PRICING } from '@/lib/pricing';

interface BookingStrings {
  navStay: string;
  onRequest: string;
  title: string;
  subtitle: string;
  perNight: string;
  perNightDesc: string;
  electricity: string;
  electricityDesc: string;
  children: string;
  childrenValue: string;
  childrenDesc: string;
  priceFrom: string;
  kidsFree: string;
  bookNow: string;
  bookHint: string;
}

// Tokens {age} is replaced from PRICING.
const strings: Record<Language, BookingStrings> = {
  nl: {
    navStay: 'Verblijf & prijzen',
    onRequest: 'Prijs op aanvraag',
    title: 'Prijzen',
    subtitle: 'Eenvoudig en transparant',
    perNight: 'Verblijf in het kamp',
    perNightDesc: 'per nacht, per camper, caravan of tent',
    electricity: 'Elektriciteit',
    electricityDesc: 'eenmalig per verblijf',
    children: 'Kinderen',
    childrenValue: 'Gratis',
    childrenDesc: 'jonger dan {age} jaar',
    priceFrom: 'Vanaf {price} per nacht',
    kidsFree: 'Kinderen onder {age} gratis',
    bookNow: 'Boek nu',
    bookHint: 'Eén tik via WhatsApp, niet bellen nodig',
  },
  en: {
    navStay: 'Stay & prices',
    onRequest: 'Price on request',
    title: 'Prices',
    subtitle: 'Simple and transparent',
    perNight: 'Stay in the camp',
    perNightDesc: 'per night, per camper, caravan or tent',
    electricity: 'Electricity',
    electricityDesc: 'one-time fee per stay',
    children: 'Children',
    childrenValue: 'Free',
    childrenDesc: 'under {age} years old',
    priceFrom: 'From {price} per night',
    kidsFree: 'Kids under {age} stay free',
    bookNow: 'Book now',
    bookHint: 'One tap via WhatsApp, no phone call needed',
  },
  de: {
    navStay: 'Unterkunft & Preise',
    onRequest: 'Preis auf Anfrage',
    title: 'Preise',
    subtitle: 'Einfach und transparent',
    perNight: 'Aufenthalt im Camp',
    perNightDesc: 'pro Nacht, pro Wohnmobil, Wohnwagen oder Zelt',
    electricity: 'Strom',
    electricityDesc: 'einmalig pro Aufenthalt',
    children: 'Kinder',
    childrenValue: 'Kostenlos',
    childrenDesc: 'unter {age} Jahren',
    priceFrom: 'Ab {price} pro Nacht',
    kidsFree: 'Kinder unter {age} Jahren gratis',
    bookNow: 'Jetzt buchen',
    bookHint: 'Ein Klick über WhatsApp, kein Anruf nötig',
  },
  sr: {
    navStay: 'Smještaj i cijene',
    onRequest: 'Cijena na upit',
    title: 'Cijene',
    subtitle: 'Jednostavno i transparentno',
    perNight: 'Boravak u kampu',
    perNightDesc: 'po noćenju, po kamperu, kamp-prikolici ili šatoru',
    electricity: 'Struja',
    electricityDesc: 'jednokratno po boravku',
    children: 'Djeca',
    childrenValue: 'Besplatno',
    childrenDesc: 'mlađa od {age} godina',
    priceFrom: 'Od {price} po noćenju',
    kidsFree: 'Djeca mlađa od {age} godina besplatno',
    bookNow: 'Rezerviši',
    bookHint: 'Jedan klik preko WhatsApp-a, bez telefonskog poziva',
  },
  fr: {
    navStay: 'Séjour et tarifs',
    onRequest: 'Prix sur demande',
    title: 'Tarifs',
    subtitle: 'Simple et transparent',
    perNight: 'Séjour au camp',
    perNightDesc: 'par nuit, par camping-car, caravane ou tente',
    electricity: 'Électricité',
    electricityDesc: 'forfait unique par séjour',
    children: 'Enfants',
    childrenValue: 'Gratuit',
    childrenDesc: 'de moins de {age} ans',
    priceFrom: 'Dès {price} par nuit',
    kidsFree: 'Enfants de moins de {age} ans gratuits',
    bookNow: 'Réserver',
    bookHint: 'Un clic via WhatsApp, pas besoin de téléphoner',
  },
  sk: {
    navStay: 'Pobyt a ceny',
    onRequest: 'Cena na požiadanie',
    title: 'Cenník',
    subtitle: 'Jednoducho a transparentne',
    perNight: 'Pobyt v kempe',
    perNightDesc: 'za noc, za obytný automobil, karavan alebo stan',
    electricity: 'Elektrina',
    electricityDesc: 'jednorazovo za pobyt',
    children: 'Deti',
    childrenValue: 'Zadarmo',
    childrenDesc: 'mladšie ako {age} rokov',
    priceFrom: 'Od {price} za noc',
    kidsFree: 'Deti mladšie ako {age} rokov zadarmo',
    bookNow: 'Rezervovať',
    bookHint: 'Jedno kliknutie cez WhatsApp, bez telefonovania',
  },
  cs: {
    navStay: 'Pobyt a ceny',
    onRequest: 'Cena na vyžádání',
    title: 'Ceník',
    subtitle: 'Jednoduše a transparentně',
    perNight: 'Pobyt v kempu',
    perNightDesc: 'za noc, za obytný vůz, karavan nebo stan',
    electricity: 'Elektřina',
    electricityDesc: 'jednorázově za pobyt',
    children: 'Děti',
    childrenValue: 'Zdarma',
    childrenDesc: 'mladší {age} let',
    priceFrom: 'Od {price} za noc',
    kidsFree: 'Děti mladší {age} let zdarma',
    bookNow: 'Rezervovat',
    bookHint: 'Jedno kliknutí přes WhatsApp, bez telefonování',
  },
  hu: {
    navStay: 'Szállás és árak',
    onRequest: 'Ár kérésre',
    title: 'Árak',
    subtitle: 'Egyszerű és átlátható',
    perNight: 'Tartózkodás a kempingben',
    perNightDesc: 'éjszakánként, lakóautónként, lakókocsinként vagy sátranként',
    electricity: 'Áram',
    electricityDesc: 'egyszeri díj tartózkodásonként',
    children: 'Gyerekek',
    childrenValue: 'Ingyenes',
    childrenDesc: '{age} év alatt',
    priceFrom: '{price}-tól éjszakánként',
    kidsFree: '{age} év alatti gyerekeknek ingyenes',
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
    priceFrom: fill(s.priceFrom),
    kidsFree: fill(s.kidsFree),
  };
};
