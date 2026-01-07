'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from './Container';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import LanguageSwitch from '@/components/ui/LanguageSwitch';

export default function SiteHeader() {
  const [locale, setLocale] = useState<Locale>('es');
  const copy = t(locale);

  const [open, setOpen] = useState(false);

  const nav = [
    { href: '/world-cup-2026', label: copy.nav.worldcup },
    { href: '/live', label: copy.nav.live },
    { href: '/radio', label: copy.nav.radio },
    { href: '/podcast', label: copy.nav.podcast },
  ];

  // Cierra menú al cambiar tamaño (si pasa a desktop)
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        {/* LOGO */}
        <Link href="/" className="flex min-w-0 items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--smg-blue))] text-white">
            SMG
          </span>

          {/* Evita que se corte: min-w-0 + truncate */}
          <span className="min-w-0 truncate text-base sm:text-lg">{copy.brand}</span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm font-semibold text-black/80 hover:text-black"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          <LanguageSwitch value={locale} onChange={setLocale} />

          {/* Search */}
          <button
            type="button"
            className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold hover:bg-[rgb(var(--smg-soft))]"
            aria-label={copy.actions.search}
            title={copy.actions.search}
          >
            🔍
          </button>

          {/* Profile */}
          <button
            type="button"
            className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold hover:bg-[rgb(var(--smg-soft))]"
            aria-label={copy.actions.profile}
            title={copy.actions.profile}
          >
            👤
          </button>

          {/* HAMBURGER (solo móvil) */}
          <button
            type="button"
            className="md:hidden rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold hover:bg-[rgb(var(--smg-soft))]"
            aria-label="Menu"
            title="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {open ? (
        <div className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur">
          <Container className="py-3">
            <nav className="flex flex-col gap-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-black/80 hover:bg-[rgb(var(--smg-soft))] hover:text-black"
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
