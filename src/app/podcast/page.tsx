import Link from 'next/link';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const FEATURED = {
  title: 'Episode 1: Road to 2026',
  slug: 'episode-1-road-to-2026',
  meta: '28 min • Interview • World Cup',
  excerpt:
    'Un episodio para presentar el concepto SMG: deporte + música + cultura. Ideal para clips de 30–60s.',
  image: '/media/podcast/featured.jpg',
};

const EPISODES = [
  {
    title: 'Episode 1: Road to 2026',
    slug: 'episode-1-road-to-2026',
    meta: '28 min • Interview',
    tags: ['World Cup', 'SMG Studio'],
    image: '/media/podcast/ep-01.jpg',
  },
  {
    title: 'Episode 2: Host Cities Culture',
    slug: 'episode-2-host-cities-culture',
    meta: '22 min • Culture',
    tags: ['Host Cities', 'Playlist'],
    image: '/media/podcast/ep-02.jpg',
  },
  {
    title: 'Episode 3: Stadium Vibes (SDQ)',
    slug: 'episode-3-stadium-vibes-sdq',
    meta: '18 min • Music',
    tags: ['SDQ', 'Beats'],
    image: '/media/podcast/ep-03.jpg',
  },
  {
    title: 'Episode 4: Trivia Night Best Takes',
    slug: 'episode-4-trivia-night-best-takes',
    meta: '16 min • Trivia',
    tags: ['Engagement', 'Clips'],
    image: '/media/podcast/ep-04.jpg',
  },
  {
    title: 'Episode 5: Rivalries & Fans',
    slug: 'episode-5-rivalries-and-fans',
    meta: '24 min • Commentary',
    tags: ['Culture', 'Fans'],
    image: '/media/podcast/ep-05.jpg',
  },
  {
    title: 'Episode 6: Weekly Roundup',
    slug: 'episode-6-weekly-roundup',
    meta: '20 min • News',
    tags: ['News', 'Recap'],
    image: '/media/podcast/ep-06.jpg',
  },
  {
    title: 'Episode 7: Miami Hub',
    slug: 'episode-7-miami-hub',
    meta: '19 min • Cities',
    tags: ['Miami', 'Experience'],
    image: '/media/podcast/ep-07.jpg',
  },
  {
    title: 'Episode 8: Road to 2026 — Clips Strategy',
    slug: 'episode-8-clips-strategy',
    meta: '21 min • Social-first',
    tags: ['Reels', 'Shorts'],
    image: '/media/podcast/ep-08.jpg',
  },
];

export default function PodcastPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">Podcast</div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Podcast & Interviews</h1>
              <p className="mt-2 text-sm text-black/70">
                Entrevistas, cultura, música y el camino a la Copa Mundial 2026 (demo listo para presentar).
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">Crear episodio</Button>
              <Button>Crear clip</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* FEATURED */}
        <div className="mb-10">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-wider text-black/50">Featured Episode</div>

          <Card className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="aspect-video overflow-hidden bg-black/5 lg:aspect-auto">
                <img
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="text-lg font-black">{FEATURED.title}</div>
                <div className="mt-1 text-sm text-black/60">{FEATURED.meta}</div>
                <p className="mt-4 text-sm text-black/70">{FEATURED.excerpt}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Link href={`/podcast/${FEATURED.slug}`}>
                    <Button>▶ Abrir</Button>
                  </Link>
                  <Button variant="secondary">🎧 Play</Button>
                  <Button variant="secondary">🎥 Watch</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* GRID */}
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">Library</div>
            <h2 className="mt-1 text-2xl font-black tracking-tight">Episodes</h2>
            <p className="mt-1 text-sm text-black/60">Contenido evergreen + ideal para clips.</p>
          </div>
          <Button variant="secondary">Ver todos</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {EPISODES.map((ep) => (
            <Card key={ep.slug} className="overflow-hidden">
              <div className="aspect-video overflow-hidden bg-black/5">
                <img src={ep.image} alt={ep.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-sm font-black">{ep.title}</div>
                <div className="mt-1 text-xs text-black/60">{ep.meta}</div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {ep.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link href={`/podcast/${ep.slug}`}>
                    <Button variant="secondary" className="w-full">
                      Abrir
                    </Button>
                  </Link>
                  <Button variant="secondary" className="w-full">
                    ↗ Share
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
