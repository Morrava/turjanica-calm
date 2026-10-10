import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/hooks/use-booking';

export const StickyBookButton = () => {
  const { b, bookingUrl } = useBooking();

  return (
    <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
      <Button variant="whatsapp" size="xl" asChild className="w-full shadow-elevated">
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-5 h-5" />
          {b.bookNow}
        </a>
      </Button>
    </div>
  );
};
