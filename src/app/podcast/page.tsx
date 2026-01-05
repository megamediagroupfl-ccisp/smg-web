import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const FEATURED = {
  title: 'Episode 1: Road to 2026',
  meta: 'Featured • 28 min • Interview',
  desc:
    'Un episodio editorial para posicionar SMG: cultura deportiva + música + enfoque social-first.',
  href: '/podcast/episode-01',
  image: '/media/podcast/featured.jpg',
};

const EPISODES = [
  {
    title: 'Episode 01 — Road to 2026',
    meta: 'Interview • 28 min',
    href: '/podcast/episode-01',
    image: '/media/podcast/ep-01.jpg',
  },
  {
    title: 'Episode 02 — Host Cities Spotlight',
    meta: 'Editorial • 22 min',
    href: '/podcast/episode-02',
    image: '/media/podcast/ep-02.jpg',
  },
  {
    title: 'Episode 03 — Music x Sports Culture',
    meta: 'Panel • 31 min',
    href: '/podcast/episode-03',
    image: '/media/podcast/ep-03.jpg',
  },
  {
    title: 'Episode 04 — Trivia Night Highlights',
    meta: 'Live cut • 18 min',
    href: '/podcast/episode-04',
    image: '/media/podcast/ep-04.jpg',
  },
  {
    title: 'Episode 05 — Stadium Vibes (SDQ)',
    meta: 'Music • 24 min',
    href: '/podcast/episode-05',
    image: '/media/podcast/ep-05.jpg',
  },
  {
    title: 'Episode 06 — Fans & Culture',
    meta: 'Culture • 20 min',
    href: '/podcast/episode-06',
    image: '/media/podcast/ep-06.jpg',
  },
  {
    title: 'Episode 07 — Matchday Stories',
    meta: 'Stories • 26 min',
    href: '/podcast/episode-07',
    image: '/media/podcast/ep-07.jpg',
  },
  {
    title: 'Episode 08 — Road to 2026 (Wrap)',
    meta: 'Recap • 30 min',
    href: '/podcast/episode-08',
    image: '/media/podcast/ep-08.jpg',
  },
];

const TAGS = ['World Cup', 'Host Cities', 'Culture', 'Music', 'Interviews', 'Trivia'];

export default function PodcastPage() {
  return (
    <div className="bg-white">
      {/* TOP BAR */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                SMG Podcast
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Podcast & Interviews</h1>
              <p className="mt-2 text-sm text-black/70">
                Episodios listos para clips, distribución internacional y crecimiento orgánico.
              </p>
            </div>

            <div className="flex gap-2">
              <Link href="/">
                <Button variant="secondary">← Home</Button>
              </Link>
              <Button>+ New Episode</Button>
            </div>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-extrabold text-black/70"
              >
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* FEATURED */}
        <Card className="overflow-hidden">
          <div className="grid gap-0 md:grid-cols-2">
            <div
              className="min-h-[240px] bg-cover bg-center"
              style={{ backgroundImage: `url('${FEATURED.image}')` }}
            />
            <div className="p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-extrabold">
                FEATURED EPISODE
              </div>

              <div className="mt-4 text-xl font-black">{FEATURED.title}</div>
              <div className="mt-1 text-sm text-black/60">{FEATURED.meta}</div>
              <div className="mt-3 text-sm text-black/70">{FEATURED.desc}</div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                <Link href={FEATURED.href}>
                  <Button className="w-full">▶ Play</Button>
                </Link>
                <Button variant="secondary" className="w-full">
                  ↗ Share
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* GRID */}
        <div className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                Episodes
              </div>
              <h2 className="mt-1 text-2xl font-black tracking-tight">Latest releases</h2>
              <p className="mt-1 text-sm text-black/60">
                Diseño de tarjetas para un feed internacional (estilo editorial, no ESPN 100%).
              </p>
            </div>
            <Button variant="secondary">Ver todo</Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EPISODES.map((e) => (
              <Card key={e.href} className="overflow-hidden">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url('${e.image}')` }}
                />
                <div className="p-5">
                  <div className="text-sm font-black">{e.title}</div>
                  <div className="mt-1 text-xs text-black/60">{e.meta}</div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link href={e.href} className="block">
                      <Button variant="secondary" className="w-full">
                        ▶ Play
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
        </div>
      </Container>
    </div>
  );
}
