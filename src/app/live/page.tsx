import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import LiveEmbed from '@/components/ui/LiveEmbed';

const UPCOMING = {
  title: 'Interview + World Cup Trivia',
  date: 'Next Live: Friday 8:00 PM',
  notes: '30–45 min • Clips para redes • Invitado semanal',
};

const REPLAYS = [
  {
    title: 'Replay 01 — Road to 2026: Host Cities',
    meta: 'Highlights • 18 min',
    image: '/media/live/replays/replay-01.jpg',
    href: '/live/replay/host-cities',
  },
  {
    title: 'Replay 02 — Music + Sports Culture',
    meta: 'Interview • 24 min',
    image: '/media/live/replays/replay-02.jpg',
    href: '/live/replay/music-sports-culture',
  },
  {
    title: 'Replay 03 — Trivia Night (Top Moments)',
    meta: 'Live cut • 12 min',
    image: '/media/live/replays/replay-03.jpg',
    href: '/live/replay/trivia-night',
  },
  {
    title: 'Replay 04 — SDQ Spotlight: Stadium Vibes',
    meta: 'Music • 15 min',
    image: '/media/live/replays/replay-04.jpg',
    href: '/live/replay/sdq-spotlight',
  },
  {
    title: 'Replay 05 — Match Watch-along (Best takes)',
    meta: 'Commentary • 22 min',
    image: '/media/live/replays/replay-05.jpg',
    href: '/live/replay/watch-along',
  },
  {
    title: 'Replay 06 — Fans & Culture: USA/MEX/CAN',
    meta: 'Culture • 20 min',
    image: '/media/live/replays/replay-06.jpg',
    href: '/live/replay/fans-culture',
  },
];

const CLIPS = [
  { title: 'Clip: 30s Hot Take', meta: 'Vertical • TikTok/IG Reels' },
  { title: 'Clip: 60s Trivia', meta: 'Story • Engagement' },
  { title: 'Clip: SDQ Hook', meta: 'Audio trend • Challenge' },
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

export default function LivePage() {
  return (
    <div className="bg-white">
      {/* TOP BAR */}
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
        {/* MAIN LIVE */}
        <Card className="overflow-hidden">
          <div className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-extrabold">World Cup Talk — Road to 2026</div>
                <div className="mt-1 text-xs text-black/60">Hosted by SMG • Studio Live</div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary">🎧 Audio Only</Button>
                <Button variant="secondary">📅 Schedule</Button>
              </div>
            </div>

            <div className="mt-4">
              <LiveEmbed title="SMG Live — Road to 2026" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="secondary">View Replays</Button>
              <Button variant="secondary">Upcoming Events</Button>
              <Button variant="secondary">Share</Button>
            </div>
          </div>
        </Card>

        {/* UPCOMING */}
        <div className="mt-10">
          <SectionTitle
            eyebrow="Next"
            title="Upcoming Live"
            subtitle="Planificado para maximizar clips + engagement (World Cup 2026 focus)."
            right={<Button variant="secondary">📌 Add to Calendar</Button>}
          />
          <Card className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-black">{UPCOMING.title}</div>
                <div className="mt-1 text-sm text-black/60">{UPCOMING.date}</div>
                <div className="mt-2 text-xs text-black/60">{UPCOMING.notes}</div>
              </div>
              <div className="flex gap-2">
                <Button>🔔 Remind</Button>
                <Button variant="secondary">🎟 Event Page</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* REPLAYS */}
        <div className="mt-10">
          <SectionTitle
            eyebrow="Library"
            title="Replays"
            subtitle="Contenido evergreen + highlights (ideal para monetizar y crecer)."
            right={<Button variant="secondary">Ver todo</Button>}
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REPLAYS.map((r) => (
              <Card key={r.title} className="overflow-hidden">
                <div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url('${r.image}')` }}
                />
                <div className="p-5">
                  <div className="text-sm font-black">{r.title}</div>
                  <div className="mt-1 text-xs text-black/60">{r.meta}</div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Button variant="secondary">▶ Play</Button>
                    <Button variant="secondary">↗ Share</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CLIPS */}
        <div className="mt-10">
          <SectionTitle
            eyebrow="Social-first"
            title="Clips (Short-form)"
            subtitle="Diseñados para TikTok / Reels / Shorts — motor de tendencia SMG + SDQ."
            right={<Button variant="secondary">Crear clip</Button>}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {CLIPS.map((c) => (
              <Card key={c.title} className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-black">{c.title}</div>
                    <div className="mt-1 text-xs text-black/60">{c.meta}</div>
                  </div>
                  <span className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70">
                    Clip
                  </span>
                </div>
                <div className="mt-4">
                  <Button variant="secondary" className="w-full">
                    Abrir
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
