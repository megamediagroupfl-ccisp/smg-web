import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const NEWS_DATA: Record<
  string,
  { title: string; meta: string; summary: string; bullets: string[] }
> = {
  'rumores-fichajes': {
    title: 'Rumores y fichajes del día',
    meta: '5 min • Actualizado',
    summary:
      'Resumen rápido con enfoque social-first: lo más comentado, lo más compartible y lo que conviene convertir en clips.',
    bullets: [
      'Top 3 rumores (formato corto)',
      'Qué es real vs qué es humo',
      'Idea de clip + caption sugerido',
    ],
  },
  'clasificacion-escenarios': {
    title: 'Clasificación y escenarios',
    meta: 'Análisis • 8 min',
    summary:
      'Lectura clara y rápida: escenarios, tendencias y lo que la audiencia hispana quiere entender sin complicaciones.',
    bullets: [
      'Tabla/escenario explicado simple',
      'Qué selecciones suben/bajan',
      'Idea de carrusel para Instagram',
    ],
  },
  'top-clips-redes': {
    title: 'Top clips para redes',
    meta: '30–60s • Viral',
    summary:
      'Selección de momentos que se prestan para Shorts/Reels/TikTok con gancho + CTA.',
    bullets: [
      '3 hooks recomendados',
      'Estructura 0–3s / 3–20s / 20–45s',
      'CTA para comentarios (engagement)',
    ],
  },
  'calendario-semanal': {
    title: 'Calendario semanal',
    meta: 'Agenda • World Cup',
    summary:
      'Agenda tipo “qué no te puedes perder”, para convertir en contenido diario y programación en radio.',
    bullets: [
      'Eventos clave (demo)',
      'Ideas de especiales en vivo',
      'Checklist de publicaciones',
    ],
  },
};

function normalizeSlug(raw?: string) {
  return (raw ?? '').toLowerCase().trim();
}

export default async function WorldCupNewsDetailPage({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;
  const key = normalizeSlug(slug);
  const data = NEWS_DATA[key];

  if (!data) {
    return (
      <div className="bg-white">
        <Container className="py-10">
          <Card className="p-6">
            <div className="text-lg font-black">Not found</div>
            <div className="mt-2 text-sm text-black/60">
              Esta nota no existe todavía (demo).
            </div>
            <div className="mt-4">
              <Link href="/world-cup-2026/news">
                <Button variant="secondary">← Volver a News</Button>
              </Link>
            </div>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026 • News
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">{data.title}</h1>
              <p className="mt-2 text-sm text-black/70">{data.meta}</p>
            </div>

            <div className="flex gap-2">
              <Link href="/world-cup-2026/news">
                <Button variant="secondary">← Volver</Button>
              </Link>
              <Button>Compartir</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Card className="p-6">
          <div className="text-sm font-black">Resumen</div>
          <div className="mt-2 text-sm text-black/70">{data.summary}</div>

          <div className="mt-6">
            <div className="text-sm font-black">Acciones recomendadas</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-black/70 space-y-2">
              {data.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-2 md:grid-cols-3">
            <Button variant="secondary">Crear post</Button>
            <Button variant="secondary">Crear clip</Button>
            <Button variant="secondary">Guion rápido</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
