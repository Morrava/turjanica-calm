import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useBooking } from '@/hooks/use-booking';

// Small floating WhatsApp button, shown once the hero is scrolled past.
export const StickyBookButton = () => {
  const { b, bookingUrl } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={b.bookNow}
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 h-14 w-14 sm:w-auto sm:px-5 justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-all duration-300 hover:bg-[#1ebe5d] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">{b.bookNow}</span>
    </a>
  );
};
