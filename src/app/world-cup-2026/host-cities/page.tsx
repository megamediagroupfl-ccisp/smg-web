import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const FEATURED = {
  city: 'Miami',
  note: 'Hispano hub + experiencias • ideal para activaciones SMG/SDQ',
  highlights: ['Fan zones', 'Cultura', 'Clips en vivo', 'Playlist SDQ'],
};

const CITIES = [
  { city: 'New York / New Jersey', note: 'Cultura + música + fan zones', focus: 'World Cup + cultura urbana' },
  { city: 'Los Angeles', note: 'Eventos + artistas + contenido SDQ', focus: 'Entertainment + activaciones' },
  { city: 'Miami', note: 'Hispano hub + experiencias', focus: 'SMG community + music' },
  { city: 'Ciudad de México', note: 'Tradición + rivalidades', focus: 'Cultura + fútbol' },
  { city: 'Toronto', note: 'Fan culture + activaciones', focus: 'Eventos + fans' },
  { city: 'Vancouver', note: 'Experiencia internacional', focus: 'Outdoor + turismo' },
];

export default function HostCitiesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Host Cities</h1>
              <p className="mt-2 text-sm text-black/70">
                Sedes + cultura + música por ciudad (base del contenido SMG).
              </p>
            </div>

            <Link href="/world-cup-2026">
              <Button variant="secondary">← Volver al Hub</Button>
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* FEATURED */}
        <Card className="overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xs font-extrabold text-black/50">CIUDAD DESTACADA</div>
                <div className="mt-2 text-xl font-black">{FEATURED.city}</div>
                <div className="mt-2 text-sm text-black/60">{FEATURED.note}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {FEATURED.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid w-full gap-2 md:w-[260px]">
                <Button>Ver guía</Button>
                <Button variant="secondary">Playlist SDQ</Button>
                <Button variant="secondary">Ideas de clips</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* GRID */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Card key={c.city} className="p-6">
              <div className="text-sm font-black">{c.city}</div>
              <div className="mt-2 text-sm text-black/60">{c.note}</div>

              <div className="mt-4 rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4">
                <div className="text-xs font-extrabold text-black/50">ENFOQUE SMG</div>
                <div className="mt-1 text-sm font-bold">{c.focus}</div>
                <div className="mt-2 text-xs text-black/60">
                  Cultura local + música + mini guía + activaciones para comunidad.
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                <Button variant="secondary" className="w-full">
                  Ver contenido
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="secondary">Playlist</Button>
                  <Button variant="secondary">Clips</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-6 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-black">Diferenciación (no ESPN)</div>
              <div className="mt-1 text-sm text-black/60">
                Aquí la sede no es solo deporte: es cultura + música SDQ + agenda + comunidad.
              </div>
            </div>
            <Button>Crear “Guía de ciudad”</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
