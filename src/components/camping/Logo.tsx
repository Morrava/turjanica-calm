// Teepee mark taken from the original Camping Turjanica logo.
export const TeepeeMark = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg viewBox="0 0 48 52" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 3l12 16M30 3L18 19" />
    <path d="M24 12L4 48h40L24 12z" />
    <path d="M20 48V36h8v12" />
  </svg>
);

export const Logo = ({ light = false }: { light?: boolean }) => (
  <span className={`flex items-center gap-2.5 ${light ? 'text-background' : 'text-foreground'}`}>
    <TeepeeMark className={`w-7 h-7 ${light ? 'text-ember-light' : 'text-ember'}`} />
    <span className="font-heading font-extrabold uppercase tracking-wide text-sm sm:text-base leading-none">
      Camping Turjanica
    </span>
  </span>
);
