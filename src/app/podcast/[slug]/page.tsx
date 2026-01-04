import Link from 'next/link';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const EPISODES: Record<
  string,
  { title: string; meta: string; description: string; image: string; tags: string[] }
> = {
  'episode-1-road-to-2026': {
    title: 'Episode 1: Road to 2026',
    meta: '28 min • Interview • World Cup',
    description:
      'Presentación del concepto SMG: deporte + música + cultura. Estructura pensada para clips de 30–60 segundos y contenido evergreen.',
    image: '/media/podcast/ep-01.jpg',
    tags: ['World Cup', 'SMG Studio', 'Interview'],
  },
  'episode-2-host-cities-culture': {
    title: 'Episode 2: Host Cities Culture',
    meta: '22 min • Culture • Playlist',
    description:
      'Ciudades sede, fan zones, cultura y música por ciudad. Base para contenido social y cápsulas informativas.',
    image: '/media/podcast/ep-02.jpg',
    tags: ['Host Cities', 'Culture', 'Playlist'],
  },
};

const MORE = [
  { title: 'Episode 3: Stadium Vibes (SDQ)', slug: 'episode-3-stadium-vibes-sdq', image: '/media/podcast/ep-03.jpg', meta: '18 min • Music' },
  { title: 'Episode 4: Trivia Night Best Takes', slug: 'episode-4-trivia-night-best-takes', image: '/media/podcast/ep-04.jpg', meta: '16 min • Trivia' },
  { title: 'Episode 6: Weekly Roundup', slug: 'episode-6-weekly-roundup', image: '/media/podcast/ep-06.jpg', meta: '20 min • News' },
];

export default function PodcastEpisodePage({ params }: { params: { slug: string } }) {
  const data = EPISODES[params.slug];

  if (!data) {
    return (
      <div className="bg-white">
        <Container className="py-12">
          <Card className="p-6">
            <div className="text-lg font-black">Episode not found</div>
            <div className="mt-2 text-sm text-black/60">
              Este episodio no existe en el demo todavía.
            </div>
            <div className="mt-4">
              <Link href="/podcast">
                <Button variant="secondary">← Volver a Podcast</Button>
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
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">Podcast</div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">{data.title}</h1>
              <p className="mt-2 text-sm text-black/70">{data.meta}</p>
            </div>
            <Link href="/podcast">
              <Button variant="secondary">← Volver</Button>
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="overflow-hidden lg:col-span-2">
            <div className="aspect-video overflow-hidden bg-black/5">
              <img src={data.image} alt={data.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {data.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-black/70">{data.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button>🎧 Play</Button>
                <Button variant="secondary">🎥 Watch</Button>
                <Button variant="secondary">↗ Share</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Episode actions</div>
            <div className="mt-2 text-sm text-black/60">
              En la versión real: links a YouTube/Spotify/Apple Podcasts + tracking.
            </div>
            <div className="mt-4 grid gap-2">
              <Button variant="secondary">Crear clip</Button>
              <Button variant="secondary">Generar post</Button>
              <Button variant="secondary">Guardar en favoritos</Button>
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">More</div>
              <h2 className="mt-1 text-2xl font-black tracking-tight">More episodes</h2>
              <p className="mt-1 text-sm text-black/60">Sugeridos para mantener retención.</p>
            </div>
            <Link href="/podcast">
              <Button variant="secondary">Ver todos</Button>
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {MORE.map((m) => (
              <Card key={m.slug} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-black/5">
                  <img src={m.image} alt={m.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-sm font-black">{m.title}</div>
                  <div className="mt-1 text-xs text-black/60">{m.meta}</div>
                  <div className="mt-4">
                    <Link href={`/podcast/${m.slug}`}>
                      <Button variant="secondary" className="w-full">
                        Abrir
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
