import { useLanguage } from '@/i18n/LanguageContext';
import { getBookingStrings } from '@/i18n/booking';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/pricing';

export const useBooking = () => {
  const { language } = useLanguage();
  const b = getBookingStrings(language);
  const bookingUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return { b, bookingUrl };
};
