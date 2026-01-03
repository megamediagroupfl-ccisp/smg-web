import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

function hasBgClass(className?: string) {
  if (!className) return false;
  // Detecta si el usuario pasó una clase bg- (bg-white/10, bg-black/20, etc.)
  return /\bbg-/.test(className);
}

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const base = 'rounded-xl border shadow-sm';
  const border = 'border-black/10';

  // ✅ Si NO pasas bg- entonces usa bg-white por defecto.
  // ✅ Si SI pasas bg- (ej: bg-white/10), NO fuerza bg-white.
  const bg = hasBgClass(className) ? '' : 'bg-white';

  return <div className={cn(base, border, bg, className)}>{children}</div>;
}
