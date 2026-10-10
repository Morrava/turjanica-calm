import { Moon, Zap, Baby, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBooking } from '@/hooks/use-booking';

export const Pricing = () => {
  const { b, bookingUrl } = useBooking();

  const rows = [
    { icon: Moon, label: b.perNight, desc: b.perNightDesc, value: b.camperPrice },
    { icon: Zap, label: b.electricity, desc: b.electricityDesc, value: b.electricityPrice },
    { icon: Baby, label: b.children, desc: b.childrenDesc, value: b.childrenValue },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/40">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">{b.title}</h2>
          <p className="text-muted-foreground">{b.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-xl border border-border shadow-card overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className="py-4 pl-4 sm:pl-6 w-10">
                    <row.icon className="w-5 h-5 text-primary" />
                  </td>
                  <td className="py-4 px-3">
                    <p className="font-semibold leading-tight">{row.label}</p>
                    <p className="text-sm text-muted-foreground">{row.desc}</p>
                  </td>
                  <td className="py-4 pr-4 sm:pr-6 text-right text-xl sm:text-2xl font-bold whitespace-nowrap">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-secondary/50 border-t border-border p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground text-center sm:text-left">{b.bookHint}</p>
            <Button variant="hero" asChild className="w-full sm:w-auto">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                {b.bookNow}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
