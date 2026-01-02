import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const ITEMS = [
  {
    title: 'Rumores y fichajes del día',
    meta: '5 min • Actualizado',
    slug: 'rumores-fichajes',
  },
  {
    title: 'Clasificación y escenarios',
    meta: 'Análisis • 8 min',
    slug: 'clasificacion-escenarios',
  },
  {
    title: 'Top clips para redes',
    meta: '30–60s • Viral',
    slug: 'top-clips-redes',
  },
  {
    title: 'Calendario semanal',
    meta: 'Agenda • World Cup',
    slug: 'calendario-semanal',
  },
];

export default function WorldCupNewsPage() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">News</h1>
              <p className="mt-2 text-sm text-black/70">
                Actualizaciones rápidas listas para contenido social.
              </p>
            </div>

            <div className="flex gap-2">
              <Link href="/world-cup-2026">
                <Button variant="secondary">← Volver</Button>
              </Link>
              <Button>Crear post</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {ITEMS.map((it) => (
            <Card key={it.slug} className="p-6">
              <div className="text-sm font-black">{it.title}</div>
              <div className="mt-2 text-sm text-black/60">{it.meta}</div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link href={`/world-cup-2026/news/${it.slug}`}>
                  <Button variant="secondary" className="w-full">
                    Abrir
                  </Button>
                </Link>

                <Button variant="secondary" className="w-full">
                  Compartir
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
