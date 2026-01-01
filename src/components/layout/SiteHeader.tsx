'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import LanguageSwitch from '@/components/ui/LanguageSwitch';

export default function SiteHeader() {
  const [locale, setLocale] = useState<Locale>('es');
  const copy = t(locale);

  const nav = [
    { href: '/world-cup-2026', label: copy.nav.worldcup },
    { href: '/live', label: copy.nav.live },
    { href: '/radio', label: copy.nav.radio },
    { href: '/podcast', label: copy.nav.podcast },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--smg-blue))] text-white">
            SMG
          </span>
          <span className="text-lg">{copy.brand}</span>
        </Link>

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

        <div className="flex items-center gap-2">
          <LanguageSwitch value={locale} onChange={setLocale} />

          <button
            type="button"
            className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold hover:bg-[rgb(var(--smg-soft))]"
            aria-label={copy.actions.search}
            title={copy.actions.search}
          >
            🔍
          </button>
          <button
            type="button"
            className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold hover:bg-[rgb(var(--smg-soft))]"
            aria-label={copy.actions.profile}
            title={copy.actions.profile}
          >
            👤
          </button>
        </div>
      </Container>
    </header>
  );
}
