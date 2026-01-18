import { MessageCircle } from 'lucide-react';

export const MobileContactButton = () => {
  return (
    <a
      href="https://wa.me/387xxxxxxxxx"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground shadow-elevated hover:scale-105 transition-transform duration-200"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};
