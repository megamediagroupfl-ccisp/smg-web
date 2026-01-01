'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { getStoredLocale, storeLocale } from '@/lib/i18n';

export default function LanguageSwitch({
  value,
  onChange,
}: {
  value: Locale;
  onChange: (next: Locale) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = getStoredLocale();
    if (saved && saved !== value) onChange(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setLocale(next: Locale) {
    storeLocale(next);
    onChange(next);
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-black/10 bg-white p-1">
      <button
        type="button"
        onClick={() => setLocale('es')}
        className={[
          'rounded-md px-2.5 py-1 text-xs font-extrabold',
          mounted && value === 'es' ? 'bg-[rgb(var(--smg-soft))]' : 'hover:bg-[rgb(var(--smg-soft))]',
        ].join(' ')}
        aria-pressed={value === 'es'}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={[
          'rounded-md px-2.5 py-1 text-xs font-extrabold',
          mounted && value === 'en' ? 'bg-[rgb(var(--smg-soft))]' : 'hover:bg-[rgb(var(--smg-soft))]',
        ].join(' ')}
        aria-pressed={value === 'en'}
      >
        EN
      </button>
    </div>
  );
}
