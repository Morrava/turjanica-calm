import { Moon, Zap, Baby, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/hooks/use-booking';
import { PRICING } from '@/lib/pricing';

export const Pricing = () => {
  const { b, bookingUrl } = useBooking();

  const items = [
    { icon: Moon, label: b.perNight, value: `${PRICING.currency}${PRICING.camperPerNight}`, desc: b.perNightDesc },
    { icon: Zap, label: b.electricity, value: `+ ${PRICING.currency}${PRICING.electricityOneTime}`, desc: b.electricityDesc },
    { icon: Baby, label: b.children, value: b.childrenValue, desc: b.childrenDesc },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/40">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{b.title}</h2>
          <p className="text-lg text-muted-foreground">{b.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-10">
          {items.map((item) => (
            <div key={item.label} className="bg-card rounded-xl border border-border shadow-card p-6 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-muted-foreground mb-1">{item.label}</p>
              <p className="text-3xl font-bold mb-2">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              {b.bookNow}
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">{b.bookHint}</p>
        </div>
      </div>
    </section>
  );
};
