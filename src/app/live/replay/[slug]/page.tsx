import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import LiveEmbed from '@/components/ui/LiveEmbed';
import Link from 'next/link';

const REPLAYS: Array<{
  slug: string;
  title: string;
  meta: string;
  videoId?: string;
  description: string;
  tags: string[];
}> = [
  {
    slug: 'host-cities',
    title: 'Replay — Road to 2026: Host Cities',
    meta: 'Highlights • 18 min',
    videoId: process.env.NEXT_PUBLIC_YT_LIVE_VIDEO_ID || undefined,
    description:
      'Resumen rápido de ciudades sede, cultura local y cómo conectamos música + deporte para contenido viral.',
    tags: ['World Cup 2026', 'Host Cities', 'Culture'],
  },
  {
    slug: 'music-sports-culture',
    title: 'Replay — Music + Sports Culture',
    meta: 'Interview • 24 min',
    videoId: process.env.NEXT_PUBLIC_YT_LIVE_VIDEO_ID || undefined,
    description:
      'Conversación sobre cómo nacen los himnos deportivos, ritmos por deporte y la estrategia de tendencia para SDQ.',
    tags: ['SDQ', 'Trends', 'Podcast'],
  },
  {
    slug: 'trivia-night',
    title: 'Replay — Trivia Night (Top Moments)',
    meta: 'Live cut • 12 min',
    videoId: process.env.NEXT_PUBLIC_YT_LIVE_VIDEO_ID || undefined,
    description:
      'Momentos top del reto de trivia: interacción con la audiencia y formatos rápidos listos para Reels/Shorts.',
    tags: ['Trivia', 'Engagement', 'Shorts'],
  },
];

function getReplay(slug: string) {
  return REPLAYS.find((r) => r.slug === slug);
}

export default async function ReplayDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const replay = getReplay(slug);

  if (!replay) {
    return (
      <div className="bg-white">
        <Container className="py-12">
          <h1 className="text-2xl font-black">Replay no encontrado</h1>
          <p className="mt-2 text-sm text-black/60">
            Este replay no existe o aún no está publicado.
          </p>
          <div className="mt-6">
            <Link href="/live">
              <Button variant="secondary">← Volver a Live</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                Replay
              </div>
              <h1 className="mt-1 text-3xl font-black tracking-tight">{replay.title}</h1>
              <p className="mt-2 text-sm text-black/70">{replay.meta}</p>
            </div>
            <div className="flex gap-2">
              <Link href="/live">
                <Button variant="secondary">← Back</Button>
              </Link>
              <Button variant="secondary">↗ Share</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Card className="overflow-hidden">
          <div className="p-5">
            <LiveEmbed title={replay.title} videoId={replay.videoId} />
          </div>
        </Card>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <div className="text-sm font-black">Descripción</div>
            <p className="mt-2 text-sm text-black/70">{replay.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {replay.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button>▶ Play</Button>
              <Button variant="secondary">📌 Save</Button>
              <Button variant="secondary">🎬 Create Clip</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Más replays</div>
            <div className="mt-3 space-y-2">
              {REPLAYS.filter((r) => r.slug !== slug).map((r) => (
                <Link
                  key={r.slug}
                  href={`/live/replay/${r.slug}`}
                  className="block rounded-xl border border-black/10 bg-white p-3 hover:bg-[rgb(var(--smg-soft))]"
                >
                  <div className="text-sm font-black">{r.title.replace('Replay — ', '')}</div>
                  <div className="mt-1 text-xs text-black/60">{r.meta}</div>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
