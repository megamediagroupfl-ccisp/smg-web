import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'danger';

export default function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-extrabold tracking-tight transition';
  const variants: Record<Variant, string> = {
    primary: 'bg-[rgb(var(--smg-blue))] text-white hover:opacity-90',
    secondary: 'border border-black/10 bg-white text-black hover:bg-[rgb(var(--smg-soft))]',
    danger: 'bg-[rgb(var(--smg-red))] text-white hover:opacity-90',
  };

  return <button className={cn(base, variants[variant], className)} {...props} />;
}
