// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AudioPlayer from '@/components/ui/AudioPlayer';

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

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/home/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <Container className="relative py-12 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* TEXT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                Road to World Cup 2026
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
                Music that moves <br className="hidden md:block" /> the world of sports
              </h1>

              <div className="mt-4 space-y-2 text-sm text-white/85">
                <p>
                  <span className="font-extrabold">ES:</span> Medio deportivo + música original. Radio
                  24/7, En Vivo, Podcast y cobertura Mundial 2026.
                </p>
                <p>
                  <span className="font-extrabold">EN:</span> Sports media + original music. Radio 24/7,
                  Live, Podcast and Road to World Cup 2026.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/live">
                  <Button>▶ Watch Live</Button>
                </Link>
                <Link href="/radio">
                  <Button variant="secondary">🎧 Listen Radio</Button>
                </Link>
                <Link href="/world-cup-2026">
                  <Button variant="secondary">🏆 World Cup 2026</Button>
                </Link>
              </div>
            </div>

            {/* ========== LIVE NOW (TRANSPARENTE) ========== */}
            <Card className="overflow-hidden !border-white/15 !bg-white/10 text-white backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/15 px-4 py-3">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                  LIVE NOW
                </div>
                <div className="text-xs font-semibold text-white/70">SMG Studio</div>
              </div>

              <div className="p-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <Image
                    src="/media/home/live-now.jpg"
                    alt="SMG Live"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-4 text-sm font-black">World Cup Talk — Road to 2026</div>
                <div className="mt-1 text-xs text-white/70">
                  Debate + música • invitado semanal
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <Link href="/live">
                    <Button className="w-full">Watch</Button>
                  </Link>
                  <Button className="w-full" variant="secondary">
                    Replays
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* ================= RADIO STRIP ================= */}
      <section className="border-b border-black/10 bg-white">
        <Container className="py-8">
          <Card className="p-5">
            <AudioPlayer compact />
          </Card>
        </Container>
      </section>

      {/* ================= PODCAST ================= */}
      <section className="bg-white">
        <Container className="py-10">
          <SectionTitle
            eyebrow="Podcast"
            title="Podcast & Interviews"
            subtitle="Jóvenes talentos + entrevistas a atletas y figuras."
            right={<Link href="/podcast"><Button variant="secondary">Ver todo</Button></Link>}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <Card key={n} className="overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={`/media/podcast/podcast-0${n}.jpg`}
                    alt={`Podcast ${n}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm font-black">Episode {n}: Road to 2026</div>
                  <div className="mt-1 text-xs text-black/60">20–35 min</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
