import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

type ReplayItem = {
  title: string;
  meta: string;
  description: string;
  thumb: string; // imagen
  youtubeId?: string; // demo
  tags: string[];
};

const REPLAY_DATA: Record<string, ReplayItem> = {
  'host-cities': {
    title: 'Replay 01 — Road to 2026: Host Cities',
    meta: 'Highlights • 18 min',
    description:
      'Resumen rápido de sedes, cultura y activaciones. Ideal para clips y posts informativos.',
    thumb: '/media/live/replays/replay-01.jpg',
    youtubeId: 'dQw4w9WgXcQ', // DEMO (pendiente de confirmar)
    tags: ['World Cup', 'Host Cities', 'Highlights'],
  },

  'music-sports-culture': {
    title: 'Replay 02 — Music + Sports Culture',
    meta: 'Interview • 24 min',
    description:
      'Conversación + música y cultura deportiva. Formato perfecto para shorts y reels.',
    thumb: '/media/live/replays/replay-02.jpg',
    youtubeId: '9bZkp7q19f0', // DEMO (pendiente de confirmar)
    tags: ['Culture', 'Interview', 'Music'],
  },

  'trivia-night': {
    title: 'Replay 03 — Trivia Night (Top Moments)',
    meta: 'Live cut • 12 min',
    description:
      'Momentos top de trivia y engagement. Listo para recortar a clips virales.',
    thumb: '/media/live/replays/replay-03.jpg',
    youtubeId: '3JZ_D3ELwOQ', // DEMO (pendiente de confirmar)
    tags: ['Trivia', 'Engagement', 'Clips'],
  },

  'sdq-stadium-vibes': {
    title: 'Replay 04 — SDQ Spotlight: Stadium Vibes',
    meta: 'Music • 15 min',
    description:
      'Especial SDQ: vibes de estadio, hooks y beats. Enfoque en música original SMG.',
    thumb: '/media/live/replays/replay-04.jpg',
    youtubeId: 'kJQP7kiw5Fk', // DEMO (pendiente de confirmar)
    tags: ['SDQ', 'Music', 'Spotlight'],
  },

  'match-watchalong': {
    title: 'Replay 05 — Match Watch-along (Best takes)',
    meta: 'Commentary • 22 min',
    description:
      'Watch-along con comentarios y reacciones. Muy útil para comunidad y debates.',
    thumb: '/media/live/replays/replay-05.jpg',
    youtubeId: 'fJ9rUzIMcZQ', // DEMO (pendiente de confirmar)
    tags: ['Watch-along', 'Commentary', 'Community'],
  },

  'fans-culture': {
    title: 'Replay 06 — Fans & Culture: USA/MEX/CAN',
    meta: 'Culture • 20 min',
    description:
      'Fan culture y storytelling (USA/MEX/CAN). Excelente para enfoque internacional.',
    thumb: '/media/live/replays/replay-06.jpg',
    youtubeId: 'L_jWHffIx5E', // DEMO (pendiente de confirmar)
    tags: ['Fans', 'Culture', 'International'],
  },
};

// Next 16 / Turbopack: params puede venir como Promise → lo resolvemos aquí
export default async function ReplayDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = REPLAY_DATA[slug];

  if (!data) {
    return (
      <div className="bg-white">
        <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
          <Container className="py-10">
            <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
              SMG Live
            </div>
            <h1 className="mt-2 text-3xl font-black tracking-tight">Replay no encontrado</h1>
            <p className="mt-2 text-sm text-black/70">
              Este replay no existe o aún no está publicado.
            </p>
            <div className="mt-6">
              <Link href="/live">
                <Button variant="secondary">← Volver a Live</Button>
              </Link>
            </div>
          </Container>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* TOP */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                SMG Live • Replay
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">{data.title}</h1>
              <p className="mt-2 text-sm text-black/70">{data.meta}</p>
            </div>

            <div className="flex gap-2">
              <Link href="/live#replays">
                <Button variant="secondary">← Back to Replays</Button>
              </Link>
              <Button variant="secondary">↗ Share</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* VIDEO / HERO */}
          <Card className="overflow-hidden lg:col-span-2">
            <div
              className="aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url('${data.thumb}')` }}
            />

            <div className="p-6">
              <div className="text-sm font-extrabold text-black/70">Descripción</div>
              <p className="mt-2 text-sm text-black/70">{data.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {data.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* VIDEO DEMO */}
              <div className="mt-6">
                <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                  Demo video (YouTube)
                </div>

                <div className="mt-3 overflow-hidden rounded-xl border border-black/10">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={
                        data.youtubeId
                          ? `https://www.youtube.com/embed/${data.youtubeId}?rel=0&modestbranding=1`
                          : undefined
                      }
                      title={data.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="mt-3 text-xs text-black/60">
                  Nota: IDs de YouTube son demo por ahora. Pendiente de confirmar los IDs reales.
                </div>
              </div>
            </div>
          </Card>

          {/* SIDEBAR */}
          <div className="grid gap-4">
            <Card className="p-6">
              <div className="text-sm font-black">Acciones</div>
              <div className="mt-4 grid gap-2">
                <Button>▶ Play</Button>
                <Button variant="secondary">✂️ Crear clip</Button>
                <Button variant="secondary">📝 Crear post</Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-black">Siguiente recomendado</div>
              <div className="mt-2 text-sm text-black/60">
                Mantén esto como “autoplay next” cuando haya playlist real.
              </div>
              <div className="mt-4">
                <Link href="/live">
                  <Button variant="secondary" className="w-full">
                    Volver a Live
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
