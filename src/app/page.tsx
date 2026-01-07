// src/app/page.tsx
import Link from 'next/link';

import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/home/hero.jpg')" }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <Container className="relative py-8 md:py-16">
          {/* 
            ✅ MOBILE: flex-col (Live Now primero sí o sí)
            ✅ DESKTOP: grid 2 columnas (texto izquierda, live derecha)
          */}
          <div
            className="
              flex flex-col gap-8
              md:grid md:gap-10
              md:grid-cols-[minmax(0,1fr)_minmax(0,520px)]
              lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)]
              items-start
            "
          >
            {/* 1) LIVE NOW — PRIMERO EN MÓVIL */}
            <div className="w-full md:justify-self-end">
              <Card
                className="
                  overflow-hidden
                  border-white/20 bg-white/10 text-white backdrop-blur
                  w-full
                  max-w-none
                  md:max-w-[520px] lg:max-w-[580px]
                "
              >
                <div className="flex items-center justify-between border-b border-white/15 bg-white/10 px-4 py-3">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                    LIVE NOW
                  </div>
                  <div className="text-xs font-bold text-white/75">SMG Studio</div>
                </div>

                <div className="p-4">
                  <div
                    className="aspect-video w-full rounded-xl border border-white/15 bg-cover bg-center"
                    style={{ backgroundImage: "url('/media/home/live-now.jpg')" }}
                  />
                </div>

                <div className="px-4 pb-5">
                  <div className="text-sm font-black">World Cup Talk — Road to 2026</div>
                  <div className="mt-1 text-xs text-white/75">Debate + música • invitado semanal</div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Link href="/live">
                      <Button className="w-full">Watch</Button>
                    </Link>

                    <Link href="/live#replays">
                      <Button variant="secondary" className="w-full">
                        Replays
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* 2) TEXTO — SEGUNDO EN MÓVIL, IZQUIERDA EN DESKTOP */}
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                Road to World Cup 2026
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(var(--smg-blue))] text-white font-black">
                  SMG
                </div>
                <div className="text-sm font-extrabold text-white/80">Sport Music Group</div>
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
                Music that moves <br className="hidden md:block" /> the world of sports
              </h1>

              <div className="mt-4 space-y-2 text-sm text-white/85">
                <p>
                  <span className="font-extrabold">ES:</span> Medio deportivo + música original. Radio 24/7, En Vivo,
                  Podcast y cobertura del camino a la Copa Mundial 2026.
                </p>
                <p>
                  <span className="font-extrabold">EN:</span> Sports media + original music. Radio 24/7, Live shows,
                  Podcast and Road to World Cup 2026 coverage.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/live">
                  <Button>▶ Watch Live</Button>
                </Link>

                <Link href="/radio">
                  <Button variant="secondary">🎧 Listen Radio</Button>
                </Link>

                <Link href="/world-cup-2026">
                  <Button variant="secondary">🏆 World Cup 2026</Button>
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Card className="border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                  <div className="text-xs font-extrabold text-white/70">Radio</div>
                  <div className="mt-1 text-2xl font-black">24/7</div>
                  <div className="mt-1 text-xs text-white/70">Sports beats / Música</div>
                </Card>

                <Card className="border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                  <div className="text-xs font-extrabold text-white/70">Live</div>
                  <div className="mt-1 text-2xl font-black">Weekly</div>
                  <div className="mt-1 text-xs text-white/70">Shows & eventos</div>
                </Card>

                <Card className="border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                  <div className="text-xs font-extrabold text-white/70">Podcast</div>
                  <div className="mt-1 text-2xl font-black">On-demand</div>
                  <div className="mt-1 text-xs text-white/70">Entrevistas</div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BODY */}
      <Container className="py-12">
        {/* TRENDING + SDQ */}
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="overflow-hidden lg:col-span-2">
            <div className="p-6">
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">Trending</div>
              <h2 className="mt-1 text-2xl font-black tracking-tight">Trending Now</h2>
              <p className="mt-2 text-sm text-black/60">
                Highlights del día + clips listos para redes (sin parecer ESPN, pero con vibe global).
              </p>
            </div>
            <div
              className="aspect-[16/9] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/media/home/trending.jpg')" }}
            />
          </Card>

          <Card className="overflow-hidden">
            <div className="p-6">
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">SDQ</div>
              <h3 className="mt-1 text-xl font-black tracking-tight">SDQ — “Move the Game”</h3>
              <p className="mt-2 text-sm text-black/60">
                Cultura + música + energía (sección experimental para tendencia).
              </p>
              <div className="mt-4">
                <Button variant="secondary" className="w-full">
                  Ver SDQ
                </Button>
              </div>
            </div>
            <div
              className="aspect-[4/3] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/media/home/sdq.jpg')" }}
            />
          </Card>
        </div>

        {/* PODCAST & INTERVIEWS */}
        <div className="mt-10">
          <div className="mb-5">
            <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">Podcast</div>
            <h2 className="mt-1 text-2xl font-black tracking-tight">Podcast & Interviews</h2>
            <p className="mt-1 text-sm text-black/60">
              Jóvenes talentos + entrevistas a atletas/figuras del deporte.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/media/home/podcast-01.jpg')" }}
              />
              <div className="p-4">
                <div className="text-sm font-black">Podcast 01</div>
                <div className="mt-1 text-xs text-black/60">Entrevista • Highlights</div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/media/home/podcast-02.jpg')" }}
              />
              <div className="p-4">
                <div className="text-sm font-black">Podcast 02</div>
                <div className="mt-1 text-xs text-black/60">Atletas • Cultura • Música</div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/media/home/podcast-03.jpg')" }}
              />
              <div className="p-4">
                <div className="text-sm font-black">Podcast 03</div>
                <div className="mt-1 text-xs text-black/60">Shorts-ready • Clips</div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
