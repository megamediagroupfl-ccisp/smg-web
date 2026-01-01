'use client';

import { useEffect, useState } from 'react';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import type { Locale } from '@/lib/i18n';
import { t, getStoredLocale } from '@/lib/i18n';
import TickerBar from '@/components/layout/TickerBar';

function StatCard({ title, value, desc }: { title: string; value: string; desc: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="text-xs font-extrabold text-black/60">{title}</div>
      <div className="mt-1 text-2xl font-black tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-black/60">{desc}</div>
    </div>
  );
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    const saved = getStoredLocale();
    if (saved) setLocale(saved);
  }, []);

  const copy = t(locale);

  return (
    <div className="bg-white">
      {/* TICKER */}
      <TickerBar
        label={copy.ticker.label}
        radioLabel={copy.ticker.radio}
        nowPlaying={copy.ticker.nowPlaying}
        cta={copy.ticker.open}
      />

      {/* TOP CHIPS BAR */}
      <section className="border-b border-black/10 bg-white">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-extrabold">
            <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
            Road to World Cup 2026
          </div>

          <div className="text-xs font-semibold text-black/60">{copy.hero.chips}</div>

          <div className="flex flex-wrap gap-2">
            <a
              href="/world-cup-2026"
              className="rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-extrabold hover:bg-[rgb(var(--smg-soft))]"
            >
              🏟 {copy.actions.hostCities} / {copy.actions.hostCities === 'Sedes' ? 'Host Cities' : 'Sedes'}
            </a>
            <a
              href="/world-cup-2026"
              className="rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-extrabold hover:bg-[rgb(var(--smg-soft))]"
            >
              🏆 {copy.actions.trivia} / {copy.actions.trivia === 'Trivia' ? 'Concurso' : 'Trivia'}
            </a>
            <a
              href="/live"
              className="rounded-lg bg-[rgb(var(--smg-blue))] px-3 py-2 text-xs font-extrabold text-white hover:opacity-90"
            >
              ▶ {copy.actions.watchLive} / {copy.actions.watchLive === 'Ver en Vivo' ? 'Watch Live' : 'Ver en Vivo'}
            </a>
          </div>
        </Container>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <Container className="relative py-10 md:py-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(var(--smg-blue))] text-white font-black">
                  SMG
                </span>
                <div className="text-sm font-extrabold text-black/70">Sport Music Group</div>
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                {copy.hero.title}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/70">
                {locale === 'es' ? (
                  <>
                    <span className="font-extrabold">ES:</span> {t('es').hero.desc}
                    <br />
                    <span className="font-extrabold">EN:</span> {t('en').hero.desc}
                  </>
                ) : (
                  <>
                    <span className="font-extrabold">EN:</span> {t('en').hero.desc}
                    <br />
                    <span className="font-extrabold">ES:</span> {t('es').hero.desc}
                  </>
                )}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => (window.location.href = '/live')}>
                  ▶ {t(locale).actions.watchLive} / {locale === 'es' ? 'Watch Live' : 'Ver en Vivo'}
                </Button>
                <Button variant="secondary" onClick={() => (window.location.href = '/radio')}>
                  🎧 {t(locale).actions.listenRadio} / {locale === 'es' ? 'Listen Radio' : 'Escuchar Radio'}
                </Button>
                <Button variant="secondary" onClick={() => (window.location.href = '/world-cup-2026')}>
                  🏆 {locale === 'es' ? 'Mundial 2026' : 'World Cup 2026'}
                </Button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <StatCard title={locale === 'es' ? 'Radio' : 'Radio'} value="24/7" desc={locale === 'es' ? 'Música deportiva' : 'Sports music'} />
                <StatCard title={locale === 'es' ? 'En Vivo' : 'Live'} value="Weekly" desc={locale === 'es' ? 'Shows & eventos' : 'Shows & events'} />
                <StatCard title="Podcast" value="On-demand" desc={locale === 'es' ? 'Entrevistas' : 'Interviews'} />
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                    {copy.hero.liveNow}
                  </div>
                  <span className="text-xs font-semibold text-black/60">SMG Studio</span>
                </div>
              </div>

              <div className="aspect-video w-full bg-gradient-to-br from-black/10 to-black/0">
                <div className="p-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-extrabold">
                    ▶ Live Preview
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="text-sm font-extrabold">{copy.hero.liveCardTitle}</div>
                <div className="mt-1 text-xs text-black/60">{copy.hero.liveCardDesc}</div>

                <div className="mt-4 flex gap-2">
                  <Button className="flex-1" onClick={() => (window.location.href = '/live')}>
                    {locale === 'es' ? 'Watch / Ver' : 'Watch / Ver'}
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    {locale === 'es' ? 'Replays / Repeticiones' : 'Replays / Repeticiones'}
                  </Button>
                </div>

                <div className="mt-4 rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4">
                  <div className="text-xs font-extrabold text-black/70">{copy.hero.nextLive}</div>
                  <div className="mt-1 text-sm font-black">{copy.hero.nextLiveTitle}</div>
                  <div className="mt-3 flex justify-end">
                    <Button variant="secondary">🔔 {locale === 'es' ? 'Recordar' : 'Remind'}</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* RESTO (placeholder simple para no romper tu layout actual) */}
      <section className="bg-white">
        <Container className="py-10">
          <div className="text-sm font-extrabold">{locale === 'es' ? 'Highlights' : 'Highlights'}</div>
          <div className="mt-2 text-sm text-black/60">
            {locale === 'es'
              ? 'Bloques tipo ESPN: tendencia, clips, trivia y noticias.'
              : 'ESPN-style blocks: trending, clips, trivia and updates.'}
          </div>
        </Container>
      </section>
    </div>
  );
}
