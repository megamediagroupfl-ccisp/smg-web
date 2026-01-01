import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AudioPlayer from '@/components/ui/AudioPlayer';

export default function RadioPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <h1 className="text-3xl font-black tracking-tight">SMG Radio</h1>
          <p className="mt-2 text-sm text-black/70">
            Sports music 24/7 con especiales rumbo al Mundial 2026.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <Card className="p-6">
          <AudioPlayer />
        </Card>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-black">Today’s Schedule</div>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>
                <span className="font-black">8:00</span> — Morning Sports Mix
              </li>
              <li>
                <span className="font-black">12:00</span> — World Cup Midday
              </li>
              <li>
                <span className="font-black">18:00</span> — SDQ Spotlight
              </li>
              <li>
                <span className="font-black">21:00</span> — Night Stadium Vibes
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">World Cup Radio Specials</div>
            <div className="mt-3 grid gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-3"
                >
                  <div>
                    <div className="text-sm font-black">Special {i}</div>
                    <div className="text-xs text-black/60">Preview • 15 min</div>
                  </div>
                  <Button variant="secondary">▶ Play</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
