import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const NEWS = [
  { title: 'Última hora: Rumores / fichajes / clasificación', meta: 'Actualizado • 2 min' },
  { title: 'Top 5 historias del día (formato Sports Desk)', meta: 'Highlights • 6 min' },
  { title: 'Análisis: cómo llega cada selección al 2026', meta: 'Análisis • 8 min' },
  { title: 'SDQ Sound: playlist “Stadium Vibes” para hoy', meta: 'Música • 3 min' },
];

export default function WorldCupNewsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">News</h1>
              <p className="mt-2 text-sm text-black/70">
                Actualizaciones rápidas tipo sports desk (listas para redes).
              </p>
            </div>
            <Link href="/world-cup-2026">
              <Button variant="secondary">← Volver al Hub</Button>
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {NEWS.map((n) => (
            <Card key={n.title} className="p-6">
              <div className="text-sm font-black">{n.title}</div>
              <div className="mt-2 text-xs text-black/60">{n.meta}</div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button variant="secondary">Abrir</Button>
                <Button variant="secondary">Compartir</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
