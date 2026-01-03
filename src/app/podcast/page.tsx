import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const FEATURED = {
  title: 'Episode 1: Road to 2026',
  meta: 'Guest • 28 min • World Cup Special',
  image: '/media/podcast/episodes/ep-01.jpg',
};

const EPISODES = [
  { n: 1, title: 'Road to 2026 — Host Cities', meta: 'Interview • 22–35 min', image: '/media/podcast/episodes/ep-01.jpg' },
  { n: 2, title: 'Music that Moves Sports', meta: 'Culture • 18–28 min', image: '/media/podcast/episodes/ep-02.jpg' },
  { n: 3, title: 'Trivia Night (Fans Edition)', meta: 'Fun • 15–22 min', image: '/media/podcast/episodes/ep-03.jpg' },
  { n: 4, title: 'Legends & Future Stars', meta: 'Interview • 20–35 min', image: '/media/podcast/episodes/ep-04.jpg' },
  { n: 5, title: 'USA/MEX/CAN — Cultural Impact', meta: 'Culture • 18–30 min', image: '/media/podcast/episodes/ep-05.jpg' },
  { n: 6, title: 'SDQ Spotlight — Stadium Vibes', meta: 'Music • 15–25 min', image: '/media/podcast/episodes/ep-06.jpg' },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-1 text-2xl font-black tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-black/60">{subtitle}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

export default function PodcastPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                SMG Podcast
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Podcast & Interviews</h1>
              <p className="mt-2 text-sm text-black/70">
                Jóvenes talentos + entrevistas a atletas/figuras. 70% contenido rumbo a World Cup 2026.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">🎙 Crear episodio</Button>
              <Button>▶ Reproducir</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* FEATURED */}
        <Card className="overflow-hidden">
          <div
            className="aspect-[16/6] bg-cover bg-center"
            style={{ backgroundImage: `url('${FEATURED.image}')` }}
          />
          <div className="p-6">
            <div className="text-xs font-extrabold text-black/60">FEATURED EPISODE</div>
            <div className="mt-1 text-lg font-black">{FEATURED.title}</div>
            <div className="mt-1 text-sm text-black/60">{FEATURED.meta}</div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button>▶ Play</Button>
              <Button variant="secondary">🎥 Watch</Button>
              <Button variant="secondary">↗ Share</Button>
            </div>
          </div>
        </Card>

        {/* EPISODES GRID */}
        <div className="mt-10">
          <SectionTitle
            eyebrow="Library"
            title="Episodes"
            subtitle="Episodios listos para recortes (clips) y distribución en redes."
            right={<Button variant="secondary">Ver todo</Button>}
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {EPISODES.map((ep) => (
              <Card key={ep.n} className="overflow-hidden">
                <div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url('${ep.image}')` }}
                />
                <div className="p-5">
                  <div className="text-xs font-extrabold text-black/50">EP {String(ep.n).padStart(2, '0')}</div>
                  <div className="mt-1 text-sm font-black">{ep.title}</div>
                  <div className="mt-1 text-xs text-black/60">{ep.meta}</div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Button variant="secondary">▶ Play</Button>
                    <Button variant="secondary">🎥 Watch</Button>
                  </div>

                  <div className="mt-2">
                    <Button variant="secondary" className="w-full">
                      ✂️ Crear clip
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
