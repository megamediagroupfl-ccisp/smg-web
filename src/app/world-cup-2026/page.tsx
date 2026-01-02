// src/app/world-cup-2026/page.tsx
import Link from 'next/link';

import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function WorldCupHubPage() {
  return (
    <div className="bg-white">
      {/* HERO / HEADER */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-extrabold">
                <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                WORLD CUP 2026
              </div>

              <h1 className="mt-3 text-3xl font-black tracking-tight">Road to FIFA World Cup 2026</h1>
              <p className="mt-2 text-sm text-black/70">
                News, host cities, countdown, highlights and trivia — todo en un solo hub.
              </p>
            </div>

            <div className="grid w-full gap-2 md:w-auto md:grid-cols-3">
              {/* ✅ QUICK NAV */}
              <Link href="/world-cup-2026/news">
                <Button className="w-full" variant="secondary">
                  Ver News
                </Button>
              </Link>

              <Link href="/world-cup-2026/host-cities">
                <Button className="w-full" variant="secondary">
                  Ver Sedes
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

      {/* CONTENT */}
      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {/* NEWS */}
          <Card className="p-6">
            <div className="text-sm font-black">News</div>
            <div className="mt-2 text-sm text-black/60">Actualizaciones rápidas tipo sports desk.</div>
            <div className="mt-4">
              <Link href="/world-cup-2026/news">
                <Button className="w-full" variant="secondary">
                  Ver
                </Button>
              </Link>
            </div>
          </Card>

          {/* HOST CITIES */}
          <Card className="p-6">
            <div className="text-sm font-black">Host Cities</div>
            <div className="mt-2 text-sm text-black/60">Sedes + cultura + música por ciudad.</div>
            <div className="mt-4">
              <Link href="/world-cup-2026/host-cities">
                <Button className="w-full" variant="secondary">
                  Ver
                </Button>
              </Link>
            </div>
          </Card>

          {/* COUNTDOWN */}
          <Card className="p-6">
            <div className="text-sm font-black">Countdown</div>
            <div className="mt-2 text-sm text-black/60">Cuenta regresiva + agenda de eventos.</div>
            <div className="mt-4">
              <Link href="/world-cup-2026/countdown">
                <Button className="w-full" variant="secondary">
                  Ver
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* SECONDARY CTA */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-black">Highlights</div>
            <div className="mt-2 text-sm text-black/60">
              Clips, tendencias, trivia y piezas rápidas listas para redes.
            </div>
            <div className="mt-4">
              <Link href="/world-cup-2026/news">
                <Button className="w-full" variant="secondary">
                  Abrir Highlights (News)
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Ir a Sedes</div>
            <div className="mt-2 text-sm text-black/60">
              Conoce las ciudades anfitrionas y su cultura + música.
            </div>
            <div className="mt-4">
              {/* ✅ CAMBIO 3.3 */}
              <Link href="/world-cup-2026/host-cities">
                <Button className="w-full" variant="secondary">
                  Ir a Sedes
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
