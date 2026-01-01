import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('rounded-xl border border-black/10 bg-white shadow-sm', className)}>
      {children}
    </div>
  );
}
