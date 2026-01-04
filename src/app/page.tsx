import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/home/hero.jpg')" }}
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <Container className="relative py-12 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* LEFT */}
            <div>
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
                  <span className="font-extrabold">ES:</span> Medio deportivo + música original. Radio 24/7,
                  En Vivo, Podcast y cobertura del camino a la Copa Mundial 2026.
                </p>
                <p>
                  <span className="font-extrabold">EN:</span> Sports media + original music. Radio 24/7,
                  Live shows, Podcast and Road to World Cup 2026 coverage.
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

            {/* RIGHT - LIVE NOW (TRANSPARENTE) */}
            <div className="md:justify-self-end">
              <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold text-white/90">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                    LIVE NOW
                  </div>
                  <div className="text-xs font-extrabold text-white/70">SMG Studio</div>
                </div>

                <div className="px-4 pb-4">
                  <div
                    className="aspect-video w-full rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: "url('/media/home/live-now.jpg')" }}
                  />
                  <div className="mt-4">
                    <div className="text-sm font-extrabold text-white">
                      World Cup Talk — Road to 2026
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      Debate + música • invitado semanal
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Link href="/live">
                      <Button className="w-full">Watch</Button>
                    </Link>
                    <Link href="/live#replays">
                      <Button className="w-full" variant="secondary">
                        Replays
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRENDING + SDQ + PODCAST SECTIONS */}
      <Container className="py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* TRENDING */}
          <Card className="overflow-hidden lg:col-span-2">
            <div
              className="aspect-[16/7] bg-cover bg-center"
              style={{ backgroundImage: "url('/media/home/trending.jpg')" }}
            />
            <div className="p-6">
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                Trending
              </div>
              <div className="mt-1 text-xl font-black">Lo más caliente de hoy</div>
              <div className="mt-2 text-sm text-black/60">
                Clips + highlights listos para redes (sports + music).
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/world-cup-2026/news">
                  <Button variant="secondary">Ver News</Button>
                </Link>
                <Link href="/live">
                  <Button variant="secondary">Ver Live</Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* SDQ */}
          <Card className="overflow-hidden">
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{ backgroundImage: "url('/media/home/sdq.jpg')" }}
            />
            <div className="p-6">
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                SDQ
              </div>
              <div className="mt-1 text-lg font-black">Move the Game</div>
              <div className="mt-2 text-sm text-black/60">
                Cultura + deporte + música desde República Dominicana.
              </div>
              <div className="mt-4">
                <Button variant="secondary" className="w-full">
                  Ver SDQ
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* PODCAST & INTERVIEWS (3 IMÁGENES) */}
        <div className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                Podcast
              </div>
              <h2 className="mt-1 text-2xl font-black tracking-tight">Podcast & Interviews</h2>
              <p className="mt-1 text-sm text-black/60">
                Jóvenes talentos + entrevistas a atletas/figuras del deporte.
              </p>
            </div>
            <Link href="/podcast">
              <Button variant="secondary">Ver todo</Button>
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Episode 01 — Road to 2026', img: '/media/home/podcast-01.jpg', href: '/podcast' },
              { title: 'Episode 02 — Training & Mindset', img: '/media/home/podcast-02.jpg', href: '/podcast' },
              { title: 'Episode 03 — Fans & Culture', img: '/media/home/podcast-03.jpg', href: '/podcast' },
            ].map((p) => (
              <Card key={p.title} className="overflow-hidden">
                <div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.img}')` }}
                />
                <div className="p-5">
                  <div className="text-sm font-black">{p.title}</div>
                  <div className="mt-3">
                    <Link href={p.href}>
                      <Button variant="secondary" className="w-full">
                        Abrir
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
