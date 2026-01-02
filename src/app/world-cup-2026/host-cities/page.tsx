import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const CITIES = [
  {
    city: 'New York / New Jersey',
    slug: 'new-york-new-jersey',
    note: 'Cultura + música + fan zones',
  },
  {
    city: 'Los Angeles',
    slug: 'los-angeles',
    note: 'Eventos + artistas + contenido SDQ',
  },
  {
    city: 'Miami',
    slug: 'miami',
    note: 'Hispano hub + experiencias',
  },
  {
    city: 'Ciudad de México',
    slug: 'ciudad-de-mexico',
    note: 'Tradición + rivalidades',
  },
  {
    city: 'Toronto',
    slug: 'toronto',
    note: 'Fan culture + activaciones',
  },
  {
    city: 'Vancouver',
    slug: 'vancouver',
    note: 'Experiencia internacional',
  },
];

export default function HostCitiesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Host Cities</h1>
              <p className="mt-2 text-sm text-black/70">
                Sedes + cultura + música por ciudad (base del contenido).
              </p>
            </div>

            <Link href="/world-cup-2026">
              <Button variant="secondary">← Volver al Hub</Button>
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Card key={c.slug} className="p-6">
              <div className="text-sm font-black">{c.city}</div>
              <div className="mt-2 text-sm text-black/60">{c.note}</div>

              <div className="mt-4">
                <Link href={`/world-cup-2026/host-cities/${c.slug}`}>
                  <Button variant="secondary" className="w-full">
                    Ver contenido
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
