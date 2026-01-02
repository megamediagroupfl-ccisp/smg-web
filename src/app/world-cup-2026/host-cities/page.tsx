import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const CITIES = [
  { name: 'New York / New Jersey', info: 'Venues + fan culture + playlist' },
  { name: 'Los Angeles', info: 'Clips + entrevistas + SDQ features' },
  { name: 'Mexico City', info: 'Cultura + retos + radio specials' },
  { name: 'Toronto', info: 'Eventos + comunidad + highlights' },
  { name: 'Miami', info: 'Hispano hub + live shows + contenidos' },
  { name: 'Dallas', info: 'Stadium vibes + clips + trivia night' },
];

export default function HostCitiesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Host Cities</h1>
              <p className="mt-2 text-sm text-black/70">
                Sedes, cultura, playlists y contenido por ciudad.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">← Volver</Button>
              <Button variant="secondary">Filtrar</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Card key={c.name} className="p-6">
              <div className="text-sm font-black">{c.name}</div>
              <div className="mt-2 text-sm text-black/60">{c.info}</div>
              <div className="mt-4">
                <Button className="w-full" variant="secondary">
                  Abrir
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
