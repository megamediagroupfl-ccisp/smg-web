import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const NEWS_DATA: Record<
  string,
  { title: string; meta: string; summary: string; bullets: string[]; cta: string }
> = {
  'rumores-fichajes': {
    title: 'Rumores y fichajes del día',
    meta: '5 min • Actualizado',
    summary:
      'Resumen rápido para redes: lo que se mueve hoy en fichajes, rumores y posibles cambios de plantilla rumbo a 2026.',
    bullets: [
      'Top 3 rumores del día (demo).',
      'Jugador destacado + impacto en selección.',
      'Idea de clip vertical: “1 rumor en 15s”.',
    ],
    cta: 'Crear post',
  },
  'clasificacion-escenarios': {
    title: 'Clasificación y escenarios',
    meta: 'Análisis • 8 min',
    summary:
      'Lectura simple tipo “sports desk”: escenarios posibles, favoritos y qué necesita cada selección (demo).',
    bullets: [
      'Tabla rápida + tendencia (demo).',
      '3 escenarios: optimista / realista / sorpresa.',
      'Idea de segmento: “¿Qué necesita X para clasificar?”',
    ],
    cta: 'Crear análisis',
  },
  'top-clips-redes': {
    title: 'Top clips para redes',
    meta: '30–60s • Viral',
    summary:
      'Plantilla de clips listos para TikTok/Reels/Shorts con gancho musical SDQ (demo).',
    bullets: [
      'Hook (0–2s) + dato (3–10s) + remate (11–20s).',
      'Formato 9:16 recomendado.',
      'CTA: “Comenta tu predicción”.',
    ],
    cta: 'Crear clip',
  },
  'calendario-semanal': {
    title: 'Calendario semanal',
    meta: 'Agenda • World Cup',
    summary:
      'Agenda de contenido SMG (demo): qué publicar cada día para mantener ritmo, comunidad y crecimiento.',
    bullets: [
      'Lunes: noticias rápidas + 1 clip.',
      'Miércoles: host city focus + playlist.',
      'Viernes: trivia + live short.',
    ],
    cta: 'Ver plan',
  },
};

function normalizeSlug(raw?: string) {
  return (raw ?? '').toLowerCase().trim();
}

export default function WorldCupNewsDetailPage({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = normalizeSlug(params?.slug);
  const data = slug ? NEWS_DATA[slug] : undefined;

  if (!data) {
    return (
      <div className="bg-white">
        <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
          <Container className="py-10">
            <h1 className="text-3xl font-black tracking-tight">News</h1>
            <p className="mt-2 text-sm text-black/70">Artículo no encontrado.</p>
          </Container>
        </section>

        <Container className="py-10">
          <Card className="p-6">
            <div className="text-sm font-black">No existe este contenido.</div>
            <div className="mt-2 text-sm text-black/60">
              Vuelve al hub o selecciona otra noticia.
            </div>
            <div className="mt-4 flex gap-2">
              <Link href="/world-cup-2026/news">
                <Button variant="secondary">← Volver a News</Button>
              </Link>
              <Link href="/world-cup-2026">
                <Button variant="secondary">← Volver al Hub</Button>
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
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">{data.title}</h1>
              <p className="mt-2 text-sm text-black/70">{data.meta}</p>
            </div>

            <div className="flex gap-2">
              <Link href="/world-cup-2026/news">
                <Button variant="secondary">← Volver</Button>
              </Link>
              <Button>{data.cta}</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <div className="text-sm font-black">Resumen</div>
            <div className="mt-2 text-sm text-black/70">{data.summary}</div>

            <div className="mt-6 text-sm font-black">Puntos clave</div>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              {data.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button variant="secondary">Guardar</Button>
              <Button variant="secondary">Compartir</Button>
              <Button variant="secondary">Convertir en guion</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Acciones rápidas</div>
            <div className="mt-3 grid gap-2">
              <Button variant="secondary">🎬 Generar clip (demo)</Button>
              <Button variant="secondary">🎧 Sugerir música SDQ</Button>
              <Button variant="secondary">🗓 Programar post</Button>
            </div>

            <div className="mt-6 text-xs text-black/60">
              Nota: aquí luego conectamos datos reales + CMS.
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
