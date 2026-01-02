import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

type Cat = 'World Cup' | 'Cultura' | 'Música SDQ' | 'Trivia' | 'Live';

const CATEGORIES: { key: Cat; label: string }[] = [
  { key: 'World Cup', label: 'World Cup' },
  { key: 'Cultura', label: 'Cultura' },
  { key: 'Música SDQ', label: 'Música SDQ' },
  { key: 'Trivia', label: 'Trivia' },
  { key: 'Live', label: 'Live' },
];

const TOP_STORY = {
  title: 'Top Story: “Road to 2026” — contenido listo para clips + música',
  summary:
    'Un formato editorial SMG: noticias rápidas + cultura de sedes + hook musical SDQ para redes.',
  meta: 'Actualizado hoy • 2–3 min lectura',
  tags: ['World Cup', 'Música SDQ', 'Social-first'] as const,
};

const ITEMS: {
  title: string;
  meta: string;
  cat: Cat;
  tags: string[];
}[] = [
  { title: 'Rumores y fichajes del día', meta: '5 min • Actualizado', cat: 'World Cup', tags: ['Rumores', 'Mercado'] },
  { title: 'Clasificación y escenarios', meta: 'Análisis • 8 min', cat: 'World Cup', tags: ['Tabla', 'Análisis'] },
  { title: 'Top clips para redes (30–60s)', meta: 'Vertical • Viral', cat: 'Live', tags: ['Reels', 'Shorts'] },
  { title: 'Calendario semanal (agenda)', meta: 'Agenda • World Cup', cat: 'World Cup', tags: ['Agenda', 'Fechas'] },
  { title: 'Ciudad destacada + cultura local', meta: 'Quick guide • 4 min', cat: 'Cultura', tags: ['Sedes', 'Cultura'] },
  { title: 'Hook SDQ: “Stadium Vibes” (idea de audio trend)', meta: 'Audio • 30s', cat: 'Música SDQ', tags: ['SDQ', 'Trend'] },
  { title: 'Trivia del día: ¿qué sede eres?', meta: 'Interactivo • 1 min', cat: 'Trivia', tags: ['Engagement', 'Juego'] },
];

function Pill({ active, children }: { active?: boolean; children: React.ReactNode }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold',
        active ? 'border-black/20 bg-white' : 'border-black/10 bg-[rgb(var(--smg-soft))]',
      ].join(' ')}
    >
      {children}
    </span>
  );
}

export default function WorldCupNewsPage() {
  // Nota: por ahora los filtros son UI (para velocidad y cero riesgo).
  // Luego lo conectamos a estado/URL o a un CMS.
  const activeCat: Cat | 'All' = 'All';

  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">News</h1>
              <p className="mt-2 text-sm text-black/70">
                Actualizaciones rápidas, listas para contenido social (SMG style).
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill active={activeCat === 'All'}>Todo</Pill>
                {CATEGORIES.map((c) => (
                  <Pill key={c.key} active={activeCat === c.key}>
                    {c.label}
                  </Pill>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link href="/world-cup-2026">
                <Button variant="secondary">← Volver</Button>
              </Link>
              <Button>Crear post</Button>
              <Button variant="secondary">Crear clip</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* TOP STORY */}
        <Card className="overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <div className="text-xs font-extrabold text-black/50">TOP STORY</div>
                <div className="mt-2 text-xl font-black">{TOP_STORY.title}</div>
                <div className="mt-2 text-sm text-black/60">{TOP_STORY.summary}</div>
                <div className="mt-3 text-xs text-black/60">{TOP_STORY.meta}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {TOP_STORY.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid w-full gap-2 md:w-[260px]">
                <Button>Leer</Button>
                <Button variant="secondary">Compartir</Button>
                <Button variant="secondary">Generar ideas (clips)</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* GRID */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <Card key={it.title} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="text-sm font-black">{it.title}</div>
                <span className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70">
                  {it.cat}
                </span>
              </div>

              <div className="mt-2 text-sm text-black/60">{it.meta}</div>

              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="text-xs font-semibold text-black/50">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <Button variant="secondary">Abrir</Button>
                <Button variant="secondary">Compartir</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-6 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-black">Modo SMG (no ESPN)</div>
              <div className="mt-1 text-sm text-black/60">
                En vez de llenar de noticias, lo hacemos “útil”: clips + cultura + música SDQ + engagement.
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">Plantillas de post</Button>
              <Button>Crear clip</Button>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
