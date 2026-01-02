import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import LiveEmbed from '@/components/ui/LiveEmbed';

export default function LivePage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-extrabold">
                <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                LIVE
              </div>
              <h1 className="mt-3 text-3xl font-black tracking-tight">SMG Live</h1>
              <p className="mt-2 text-sm text-black/70">
                Live shows, interviews, watch-alongs and World Cup 2026 specials.
              </p>
            </div>
            <div className="flex gap-2">
              <Button>▶ Watch Live</Button>
              <Button variant="secondary">🔔 Set Reminder</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Card className="overflow-hidden">
          {/* LIVE VIDEO */}
          <LiveEmbed title="SMG Live — Road to 2026" />

          <div className="p-6">
            <div className="text-sm font-extrabold">World Cup Talk — Road to 2026</div>
            <div className="mt-1 text-xs text-black/60">Hosted by SMG • Studio Live</div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button variant="secondary">🎧 Audio Only</Button>
              <Button variant="secondary">View Replays</Button>
              <Button variant="secondary">Upcoming Events</Button>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
