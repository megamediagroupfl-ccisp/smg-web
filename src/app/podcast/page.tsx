import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import HomePodcastInterviews from '@/components/home/HomePodcastInterviews';

const EPISODES = [
  { title: 'Episode 1: Road to 2026', img: '/media/podcast/ep-01.jpg', meta: '15–20 min • Show' },
  { title: 'Episode 2: Sports & Music Culture', img: '/media/podcast/ep-02.jpg', meta: '18–25 min • Interview' },
  { title: 'Episode 3: Matchday Energy', img: '/media/podcast/ep-03.jpg', meta: '12–18 min • Highlights' },
  { title: 'Episode 4: Behind the Scenes', img: '/media/podcast/ep-04.jpg', meta: '20–30 min • Studio' },
  { title: 'Episode 5: SDQ Spotlight', img: '/media/podcast/ep-05.jpg', meta: '14–22 min • Talent' },
  { title: 'Episode 6: Fan Stories', img: '/media/podcast/ep-06.jpg', meta: '16–24 min • Community' },
  { title: 'Episode 7: World Cup Countdown', img: '/media/podcast/ep-07.jpg', meta: '10–16 min • Update' },
  { title: 'Episode 8: Weekly Recap', img: '/media/podcast/ep-08.jpg', meta: '18–26 min • Recap' },
];

export default function PodcastPage() {
  return (
    <div className="bg-white">
      {/* TOP */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                Podcast
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Podcast & Interviews</h1>
              <p className="mt-2 text-sm text-black/70">
                Episodios, entrevistas, talentos emergentes y cultura deportiva.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/">
                <Button variant="secondary">← Home</Button>
              </Link>
              <Button>Crear episodio</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* FEATURED */}
        <div className="mb-10">
          <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
            Featured Episode
          </div>
          <Card className="mt-3 overflow-hidden">
            <div className="grid gap-0 md:grid-cols-2">
              <div
                className="min-h-[220px] bg-cover bg-center md:min-h-[320px]"
                style={{ backgroundImage: "url('/media/podcast/featured.jpg')" }}
              />
              <div className="p-6">
                <div className="text-sm font-extrabold text-black/60">Featured Episode</div>
                <div className="mt-1 text-2xl font-black tracking-tight">Episode 1: Road to 2026</div>
                <p className="mt-2 text-sm text-black/70">
                  Episodio destacado para presentar el concepto SMG (deporte + música + cultura).
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Button>▶ Play</Button>
                  <Button variant="secondary">↗ Share</Button>
                  <Button variant="secondary">Ver detalles</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* EPISODES GRID */}
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
              Episodes
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-tight">Latest episodes</h2>
            <p className="mt-1 text-sm text-black/60">
              Lista demo para que todo funcione local con imágenes reales.
            </p>
          </div>
          <Button variant="secondary">Ver todo</Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EPISODES.map((ep) => (
            <Card key={ep.title} className="overflow-hidden">
              <div
                className="aspect-[16/10] bg-cover bg-center"
                style={{ backgroundImage: `url('${ep.img}')` }}
              />
              <div className="p-5">
                <div className="text-sm font-black">{ep.title}</div>
                <div className="mt-1 text-xs text-black/60">{ep.meta}</div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button variant="secondary" className="w-full">
                    ▶ Play
                  </Button>
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
