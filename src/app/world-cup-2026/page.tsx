import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

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
      {/* TOP */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-extrabold">
                <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                WORLD CUP 2026
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight">Road to FIFA World Cup 2026</h1>
              <p className="mt-2 text-sm text-black/70">
                News, host cities, countdown, highlights and trivia — todo en un solo hub.
              </p>
            </div>

            <div className="grid w-full gap-2 sm:grid-cols-3 md:w-auto">
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

      <Container className="py-10">
        {/* 3 CARDS */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'News', desc: 'Actualizaciones rápidas tipo sports desk.' },
            { title: 'Host Cities', desc: 'Sedes + cultura + música por ciudad.' },
            { title: 'Countdown', desc: 'Cuenta regresiva + agenda de eventos.' },
          ].map((c) => (
            <Card key={c.title} className="p-6">
              <div className="text-sm font-black">{c.title}</div>
              <div className="mt-2 text-sm text-black/60">{c.desc}</div>
              <div className="mt-4">
                <Link
                  href={
                    c.title === 'News'
                      ? '/world-cup-2026/news'
                      : c.title === 'Host Cities'
                      ? '/world-cup-2026/host-cities'
                      : '/world-cup-2026/countdown'
                  }
                >
                  <Button variant="secondary" className="w-full">
                    Ver
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* FEATURED */}
        <div className="mt-10">
          <SectionTitle eyebrow="Featured" title="SMG Editorial" subtitle="Pieza destacada para presentar el concepto." />

          <Card className="overflow-hidden">
            <div
              className="aspect-[16/7] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/media/world-cup-2026/featured.jpg')" }}
            />
            <div className="p-6">
              <div className="text-sm font-black">Road to 2026 — The SMG Angle</div>
              <div className="mt-2 text-sm text-black/60">
                Un enfoque editorial: sedes, cultura, música y contenido listo para redes.
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/world-cup-2026/news">
                  <Button variant="secondary">Abrir News</Button>
                </Link>
                <Link href="/world-cup-2026/host-cities">
                  <Button variant="secondary">Ir a Sedes</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* PODCAST (MISMAS IMAGENES QUE HOME) */}
        <div className="mt-10">
          <SectionTitle
            eyebrow="Podcast"
            title="Podcast & Interviews"
            subtitle="Jóvenes talentos + entrevistas a atletas y figuras del deporte."
            right={<Link href="/podcast"><Button variant="secondary">Ver episodios</Button></Link>}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <Card key={n} className="overflow-hidden">
                <div className="p-4">
                  <div
                    className="aspect-[16/10] w-full rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url('/media/home/podcast-0${n}.jpg')` }}
                  />
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-extrabold">
                    ▶ Preview
                  </div>
                  <div className="mt-4 text-sm font-black">Episode {n}: Road to 2026</div>
                  <div className="mt-1 text-xs text-black/60">20–35 min • Clip-ready • Social-first</div>
                  <div className="mt-4 grid gap-2">
                    <Button variant="secondary">▶ Play</Button>
                    <Button variant="secondary">🎥 Watch</Button>
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
