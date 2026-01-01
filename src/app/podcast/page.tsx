import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function PodcastPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <h1 className="text-3xl font-black tracking-tight">SMG Podcast</h1>
          <p className="mt-2 text-sm text-black/70">
            Sports, music & culture — interviews and World Cup specials.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <Card className="p-6">
          <div className="text-xs font-extrabold text-black/60">FEATURED EPISODE</div>
          <div className="mt-1 text-lg font-extrabold">Episode 1: Road to 2026</div>
          <div className="mt-1 text-sm text-black/60">Guest • 28 min</div>
          <div className="mt-5 flex gap-2">
            <Button>▶ Play</Button>
            <Button variant="secondary">🎥 Watch</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
