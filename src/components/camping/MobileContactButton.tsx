import { Phone } from 'lucide-react';

const PHONE_NUMBER = '+387 66 912 449';

export const MobileContactButton = () => {
  return (
    <a
      href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
      className="fixed bottom-6 right-6 z-40 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-elevated hover:scale-105 transition-transform duration-200"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};
