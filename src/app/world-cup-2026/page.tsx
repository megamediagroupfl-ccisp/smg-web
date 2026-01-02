import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const TOP_NEWS = [
  {
    title: 'Rumores y fichajes del día',
    meta: '5 min • Actualizado',
    href: '/world-cup-2026/news/rumores-fichajes',
    tag: 'NEWS',
  },
  {
    title: 'Clasificación y escenarios',
    meta: 'Análisis • 8 min',
    href: '/world-cup-2026/news/clasificacion-escenarios',
    tag: 'ANÁLISIS',
  },
  {
    title: 'Top clips para redes',
    meta: '30–60s • Viral',
    href: '/world-cup-2026/news/top-clips-redes',
    tag: 'CLIPS',
  },
];

const CITY_SPOTLIGHT = {
  title: 'Host City Spotlight',
  city: 'Miami',
  note: 'Hispanic hub • Música • Fan culture',
  href: '/world-cup-2026/host-cities/miami',
};

const QUICK_ACTIONS = [
  {
    title: 'Ver News',
    desc: 'Actualizaciones rápidas listas para contenido social.',
    href: '/world-cup-2026/news',
    cta: 'Abrir',
  },
  {
    title: 'Host Cities',
    desc: 'Sedes + cultura + música por ciudad (base del contenido).',
    href: '/world-cup-2026/host-cities',
    cta: 'Explorar',
  },
  {
    title: 'Countdown',
    desc: 'Cuenta regresiva + agenda editorial SMG.',
    href: '/world-cup-2026/countdown',
    cta: 'Ver',
  },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-1 text-2xl font-black tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-black/60">{subtitle}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

export default function WorldCupHubPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-extrabold">
                <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                Road to FIFA World Cup 2026
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                World Cup 2026 Hub
              </h1>

              <p className="mt-3 max-w-xl text-sm text-black/70">
                Cobertura SMG: noticias rápidas, cultura por sede, playlists SDQ y contenido social-first
                (Reels/TikTok/Shorts). 70% del feed enfocado al Mundial.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/world-cup-2026/news">
                  <Button>📰 News</Button>
                </Link>
                <Link href="/world-cup-2026/host-cities">
                  <Button variant="secondary">🏟 Host Cities</Button>
                </Link>
                <Link href="/world-cup-2026/countdown">
                  <Button variant="secondary">⏳ Countdown</Button>
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Card className="p-4">
                  <div className="text-xs font-extrabold text-black/50">Formato</div>
                  <div className="mt-1 text-lg font-black">Social-first</div>
                  <div className="mt-1 text-xs text-black/60">30–60s clips</div>
                </Card>
                <Card className="p-4">
                  <div className="text-xs font-extrabold text-black/50">Tono</div>
                  <div className="mt-1 text-lg font-black">Internacional</div>
                  <div className="mt-1 text-xs text-black/60">ES + EN</div>
                </Card>
                <Card className="p-4">
                  <div className="text-xs font-extrabold text-black/50">Música</div>
                  <div className="mt-1 text-lg font-black">SDQ</div>
                  <div className="mt-1 text-xs text-black/60">Trends + hooks</div>
                </Card>
              </div>
            </div>

            {/* FEATURED PANEL */}
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between border-b border-black/10 bg-white px-4 py-3">
                <div className="text-xs font-extrabold text-black/70">FEATURED</div>
                <div className="text-xs font-semibold text-black/60">SMG Editorial</div>
              </div>

              <div className="p-5">
                <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-black/10 to-black/0" />
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70">
                    Spotlight
                  </span>
                  <span className="text-xs font-semibold text-black/60">
                    USA • Mexico • Canada
                  </span>
                </div>
                <div className="mt-3 text-lg font-black">
                  “Camino a 2026”: cultura + música por sede
                </div>
                <div className="mt-1 text-sm text-black/60">
                  Un enfoque SMG: no solo fútbol — también cultura, música y tendencias.
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <Link href="/world-cup-2026/host-cities">
                    <Button className="w-full">Ver sedes</Button>
                  </Link>
                  <Link href="/world-cup-2026/news">
                    <Button className="w-full" variant="secondary">
                      Ver news
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* QUICK ACTIONS */}
      <section className="bg-white">
        <Container className="py-10">
          <SectionTitle
            eyebrow="Quick Nav"
            title="Accesos rápidos"
            subtitle="Entradas claras para navegación real y contenido útil."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {QUICK_ACTIONS.map((a) => (
              <Card key={a.title} className="p-6">
                <div className="text-sm font-black">{a.title}</div>
                <div className="mt-2 text-sm text-black/60">{a.desc}</div>
                <div className="mt-4">
                  <Link href={a.href}>
                    <Button variant="secondary" className="w-full">
                      {a.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* TOP NEWS + CITY SPOTLIGHT */}
      <section className="bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionTitle
                eyebrow="Trending"
                title="Top News (listo para redes)"
                subtitle="Títulos cortos, ganchos rápidos y salida a clip/post."
                right={
                  <Link href="/world-cup-2026/news">
                    <Button variant="secondary">Ver todo</Button>
                  </Link>
                }
              />
              <div className="grid gap-4 md:grid-cols-3">
                {TOP_NEWS.map((n) => (
                  <Card key={n.title} className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs font-extrabold text-black/50">{n.tag}</div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black/70">
                        2026
                      </span>
                    </div>
                    <div className="mt-3 text-sm font-black">{n.title}</div>
                    <div className="mt-2 text-xs text-black/60">{n.meta}</div>
                    <div className="mt-4 grid gap-2">
                      <Link href={n.href}>
                        <Button variant="secondary" className="w-full">
                          Abrir
                        </Button>
                      </Link>
                      <Button variant="secondary" className="w-full">
                        🎬 Hacer clip
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow="Spotlight"
                title={CITY_SPOTLIGHT.title}
                subtitle="Sede destacada de la semana."
              />

              <Card className="p-6">
                <div className="text-xs font-extrabold text-black/50">CITY</div>
                <div className="mt-2 text-lg font-black">{CITY_SPOTLIGHT.city}</div>
                <div className="mt-2 text-sm text-black/60">{CITY_SPOTLIGHT.note}</div>

                <div className="mt-4 aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-black/10 to-black/0" />

                <div className="mt-4 grid gap-2">
                  <Link href={CITY_SPOTLIGHT.href}>
                    <Button className="w-full">Ver contenido</Button>
                  </Link>
                  <Link href="/world-cup-2026/countdown">
                    <Button variant="secondary" className="w-full">
                      ⏳ Ver countdown
                    </Button>
                  </Link>
                </div>

                <div className="mt-4 rounded-xl border border-black/10 bg-white p-3">
                  <div className="text-xs font-extrabold text-black/50">SMG IDEA</div>
                  <div className="mt-1 text-sm font-black">
                    “City + Hook SDQ”
                  </div>
                  <div className="mt-1 text-xs text-black/60">
                    Clip 20–30s con un dato cultural + hook musical SDQ.
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <Container className="py-10">
          <Card className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-black">Siguiente paso</div>
                <div className="mt-1 text-sm text-black/60">
                  Luego conectamos el HUB con datos reales (CMS) y automatizamos la creación de posts.
                </div>
              </div>
              <div className="flex gap-2">
                <Link href="/world-cup-2026/news">
                  <Button variant="secondary">News</Button>
                </Link>
                <Link href="/world-cup-2026/host-cities">
                  <Button variant="secondary">Host Cities</Button>
                </Link>
                <Link href="/world-cup-2026/countdown">
                  <Button variant="secondary">Countdown</Button>
                </Link>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
