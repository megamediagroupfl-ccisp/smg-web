import Link from 'next/link';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const PODCAST_THUMBS = [
  { src: '/media/home/podcast-01.jpg', alt: 'Podcast thumb 01' },
  { src: '/media/home/podcast-02.jpg', alt: 'Podcast thumb 02' },
  { src: '/media/home/podcast-03.jpg', alt: 'Podcast thumb 03' },
];

export default function HomePodcastInterviews() {
  return (
    <section className="border-b border-black/10 bg-white">
      <Container className="py-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
              Podcast
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-tight">Podcast & Interviews</h2>
            <p className="mt-1 text-sm text-black/60">
              Jóvenes talentos + entrevistas a atletas/figuras del deporte.
            </p>
          </div>

          <Link href="/podcast" className="shrink-0">
            <Button variant="secondary">Ver Podcast</Button>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PODCAST_THUMBS.map((p) => (
            <Card key={p.src} className="overflow-hidden">
              <div
                className="aspect-[16/10] bg-cover bg-center"
                style={{ backgroundImage: `url('${p.src}')` }}
                aria-label={p.alt}
                role="img"
              />
              <div className="p-5">
                <div className="text-sm font-black">Interview / Episode</div>
                <div className="mt-1 text-xs text-black/60">
                  Clips, entrevistas y talentos emergentes.
                </div>
                <div className="mt-4">
                  <Link href="/podcast" className="block">
                    <Button variant="secondary" className="w-full">
                      Abrir
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
