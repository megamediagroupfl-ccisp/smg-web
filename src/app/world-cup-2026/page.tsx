// D:\sport-music-group\smg-web\src\app\world-cup-2026\page.tsx
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function WorldCupHubPage() {
  return (
    <div className="bg-white">
      {/* HERO (igual estilo portada Home) */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/world-cup-2026/hero.jpg')" }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <Container className="relative py-12 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                WORLD CUP 2026
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
                Road to FIFA World Cup 2026
              </h1>

              <p className="mt-3 max-w-xl text-sm text-white/85">
                News, host cities, countdown, highlights and trivia — todo en un solo hub.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/world-cup-2026/news">
                  <Button>Ver News</Button>
                </Link>
                <Link href="/world-cup-2026/host-cities">
                  <Button variant="secondary">Ver Sedes</Button>
                </Link>
                <Link href="/world-cup-2026/countdown">
                  <Button variant="secondary">Ver Countdown</Button>
                </Link>
              </div>
            </div>

            {/* RIGHT (LIVE NOW con la MISMA imagen tipo presentación) */}
            <Card className="overflow-hidden border-white/15 bg-white/10 text-white backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/15 bg-white/10 px-4 py-3">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                  LIVE NOW
                </div>
                <div className="text-xs font-semibold text-white/70">SMG Studio</div>
              </div>

              <div className="p-4">
                {/* Imagen (no video) para presentación */}
                <div
                  className="aspect-video w-full rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/media/world-cup-2026/live-now.jpg')" }}
                />

                <div className="mt-4 text-sm font-black">World Cup Talk — Road to 2026</div>
                <div className="mt-1 text-xs text-white/70">
                  Debate + música • invitado semanal
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <Link href="/live">
                    <Button className="w-full">Watch</Button>
                  </Link>
                  <Link href="/live">
                    <Button className="w-full" variant="secondary">
                      Replays
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* HUB CONTENT (cards + featured como lo tenías) */}
      <section className="bg-white">
        <Container className="py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'News',
                desc: 'Actualizaciones rápidas tipo sports desk.',
                href: '/world-cup-2026/news',
              },
              {
                title: 'Host Cities',
                desc: 'Sedes + cultura + música por ciudad.',
                href: '/world-cup-2026/host-cities',
              },
              {
                title: 'Countdown',
                desc: 'Cuenta regresiva + agenda de eventos.',
                href: '/world-cup-2026/countdown',
              },
            ].map((c) => (
              <Card key={c.title} className="p-6">
                <div className="text-sm font-black">{c.title}</div>
                <div className="mt-2 text-sm text-black/60">{c.desc}</div>
                <div className="mt-4">
                  <Link href={c.href}>
                    <Button variant="secondary" className="w-full">
                      Ver
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* FEATURED */}
          <div className="mt-12 border-t border-black/10 pt-10">
            <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
              FEATURED
            </div>
            <div className="mt-2 text-2xl font-black tracking-tight">SMG Editorial</div>
            <div className="mt-2 text-sm text-black/60">
              Pieza destacada para presentar el concepto.
            </div>

            <Card className="mt-6 overflow-hidden">
              <div
                className="aspect-[21/9] w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/media/world-cup-2026/featured.jpg')" }}
              />
            </Card>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/world-cup-2026/news">
                <Button className="w-full" variant="secondary">
                  Abrir Highlights (News)
                </Button>
              </Link>
              <Link href="/world-cup-2026/host-cities">
                <Button className="w-full" variant="secondary">
                  Ir a Sedes
                </Button>
              </Link>
              <Link href="/world-cup-2026/countdown">
                <Button className="w-full" variant="secondary">
                  Ver Countdown
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
