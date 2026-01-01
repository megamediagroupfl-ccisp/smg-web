'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type TickerItem = {
  label?: string;
  text: string;
  href?: string;
};

export default function NewsTicker({
  items,
  className,
  intervalMs = 6000,
}: {
  items?: TickerItem[];
  className?: string;
  intervalMs?: number;
}) {
  const fallback = useMemo<TickerItem[]>(
    () => [
      { label: 'World Cup 2026', text: 'Actualización: Road to 2026 — cobertura diaria', href: '/world-cup-2026' },
      { label: 'Live', text: 'Hoy: SMG Live Studio — entrevista + debate', href: '/live' },
      { label: 'Radio', text: 'SMG Radio — Stadium Vibes (demo) 24/7', href: '/radio' },
      { label: 'Podcast', text: 'Nuevo episodio: Cultura + Deportes + música SDQ', href: '/podcast' },
    ],
    [],
  );

  const data = items && items.length ? items : fallback;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data.length <= 1) return;
    const t = setInterval(() => setIndex((v) => (v + 1) % data.length), intervalMs);
    return () => clearInterval(t);
  }, [data.length, intervalMs]);

  const current = data[index];

  return (
    <div className={cn('w-full border-b border-black/10 bg-white', className)}>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-[11px] font-extrabold">
          <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
          Ticker
        </span>

        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="relative h-5 overflow-hidden">
            <div
              key={index}
              className="absolute inset-0 animate-[tickerFade_450ms_ease-out]"
            >
              <div className="flex items-center gap-2 text-[12px] font-semibold text-black/75">
                {current.label ? (
                  <span className="rounded-full border border-black/10 bg-white px-2 py-[2px] text-[11px] font-extrabold text-black/70">
                    {current.label}
                  </span>
                ) : null}

                <span className="truncate">{current.text}</span>
              </div>
            </div>
          </div>
        </div>

        {current.href ? (
          <Link
            href={current.href}
            className="shrink-0 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-[12px] font-extrabold hover:bg-[rgb(var(--smg-soft))]"
          >
            Abrir
          </Link>
        ) : (
          <span className="shrink-0 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-[12px] font-extrabold text-black/60">
            Info
          </span>
        )}
      </div>

      <style jsx global>{`
        @keyframes tickerFade {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
