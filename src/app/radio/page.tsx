import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function RadioPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <h1 className="text-3xl font-black tracking-tight">SMG Radio</h1>
          <p className="mt-2 text-sm text-black/70">Sports music 24/7 with World Cup specials.</p>
          <div className="mt-5 flex gap-2">
            <Button>▶ Play Live</Button>
            <Button variant="secondary">View Schedule</Button>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Card className="p-6">
          <div className="text-xs font-extrabold text-black/60">NOW PLAYING</div>
          <div className="mt-1 text-lg font-extrabold">Sports Beats Mix</div>
          <div className="mt-1 text-sm text-black/60">SMG Radio • Live</div>
        </Card>
      </Container>
    </div>
  );
}
