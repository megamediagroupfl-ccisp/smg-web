// src/app/page.tsx
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
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/home/hero.jpg')" }}
          aria-label="Hero background"
        />
        {/* Overlays para legibilidad */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <Container className="relative py-12 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                Road to World Cup 2026
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(var(--smg-blue))] text-white font-black">
                  SMG
                </div>
                <div className="text-sm font-extrabold text-white/80">Sport Music Group</div>
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
                Music that moves <br className="hidden md:block" /> the world of sports
              </h1>

              <div className="mt-4 space-y-2 text-sm text-white/85">
                <p>
                  <span className="font-extrabold">ES:</span> Medio deportivo + música original. Radio
                  24/7, En Vivo, Podcast y cobertura del camino a la Copa Mundial 2026.
                </p>
                <p>
                  <span className="font-extrabold">EN:</span> Sports media + original music. Radio 24/7,
                  Live shows, Podcast and Road to World Cup 2026 coverage.
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

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Card className="border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                  <div className="text-xs font-extrabold text-white/70">Radio</div>
                  <div className="mt-1 text-2xl font-black">24/7</div>
                  <div className="mt-1 text-xs text-white/70">Sports beats / Música</div>
                </Card>
                <Card className="border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                  <div className="text-xs font-extrabold text-white/70">Live</div>
                  <div className="mt-1 text-2xl font-black">Weekly</div>
                  <div className="mt-1 text-xs text-white/70">Shows & eventos</div>
                </Card>
                <Card className="border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                  <div className="text-xs font-extrabold text-white/70">Podcast</div>
                  <div className="mt-1 text-2xl font-black">On-demand</div>
                  <div className="mt-1 text-xs text-white/70">Entrevistas</div>
                </Card>
              </div>
            </div>

            {/* RIGHT: LIVE CARD (ahora glass/transparente) */}
            <div>
              <div className="rounded-2xl border border-white/15 bg-white/10 shadow-lg backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold text-white">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
                    LIVE NOW
                  </div>
                  <div className="text-xs font-semibold text-white/70">SMG Studio</div>
                </div>

                <div className="p-4">
                  <div
                    className="aspect-video w-full rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: "url('/media/home/live.jpg')" }}
                    aria-label="SMG Live cover"
                  />
                  <div className="mt-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                      ▶ Live Preview
                    </div>
                  </div>

                  <div className="mt-4 text-sm font-black text-white">
                    World Cup Talk — Road to 2026
                  </div>
                  <div className="mt-1 text-xs text-white/75">
                    Debate + música • invitado semanal • social-first clips
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <Link href="/live" className="w-full">
                      <Button className="w-full">Watch</Button>
                    </Link>
                    <Link href="/live" className="w-full">
                      <Button className="w-full" variant="secondary">
                        Replays
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/10 p-3 text-white backdrop-blur">
                    <div className="text-xs font-extrabold text-white/70">NEXT LIVE</div>
                    <div className="mt-1 text-sm font-bold">Interview + World Cup Trivia</div>
                    <div className="mt-3 flex justify-end">
                      <Button variant="secondary">🔔 Remind</Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* fin live card */}
            </div>
          </div>
        </Container>
      </section>

      {/* RADIO STRIP (mini player) */}
      <section className="border-b border-black/10 bg-white">
        <Container className="py-8">
          <Card className="p-5">
            <AudioPlayer compact />
          </Card>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white">
        <Container className="py-10">
          <SectionTitle
            title="Highlights"
            subtitle="Estilo sports desk: trending, clips, trivia and updates."
            right={<Button variant="secondary">Ver todo</Button>}
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="overflow-hidden lg:col-span-2">
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-extrabold text-black/50">TRENDING</div>
                  <div className="text-xs font-semibold text-black/50">World Cup • Cultura • Música</div>
                </div>

                <div
                  className="mt-3 aspect-[16/9] w-full rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/media/home/trending.jpg')" }}
                  aria-label="Trending cover"
                />

                <div className="mt-4 text-lg font-black">
                  “Camino a 2026”: Host cities + cultura + playlist oficial
                </div>
                <div className="mt-1 text-sm text-black/60">
                  Formato rápido para redes: 30–60s clips + post informativo.
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] px-3 py-2 text-xs font-bold">
                    Clip <span className="font-black">30–60s</span>
                  </div>
                  <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] px-3 py-2 text-xs font-bold">
                    Post <span className="font-black">Info + dato</span>
                  </div>
                  <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] px-3 py-2 text-xs font-bold">
                    Trivia <span className="font-black">Interactivo</span>
                  </div>
                  <div className="ml-auto">
                    <Link href="/world-cup-2026">
                      <Button>Ver</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-4">
              {[
                { title: 'News', desc: 'Rumores / fichajes / clasificación', tag: 'World Cup', href: '/world-cup-2026/news' },
                { title: 'Trivia', desc: 'Reto del día: ¿qué ciudad sede eres?', tag: 'Engagement', href: '/world-cup-2026' },
                { title: 'Podcast', desc: 'Invitado del deporte + música SDQ', tag: 'Interview', href: '/podcast' },
                { title: 'Radio', desc: 'Especial: “Stadium Vibes”', tag: 'Music', href: '/radio' },
              ].map((x) => (
                <Card key={x.title} className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-black">{x.title}</div>
                    <span className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70">
                      {x.tag}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-black/60">{x.desc}</div>
                  <div className="mt-4">
                    <Link href={x.href}>
                      <Button variant="secondary" className="w-full">
                        Abrir
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WORLD CUP CENTER */}
      <section className="bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <SectionTitle
            eyebrow="World Cup 2026"
            title="Centro de contenido (70% del feed)"
            subtitle="Noticias • Ciudades sede • Countdown • Cultura • Playlists • Retos"
            right={
              <Link href="/world-cup-2026">
                <Button>Ir a World Cup</Button>
              </Link>
            }
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'News', desc: 'Actualizaciones rápidas tipo sports desk.', href: '/world-cup-2026/news' },
              { title: 'Host Cities', desc: 'Sedes + cultura + música por ciudad.', href: '/world-cup-2026/host-cities' },
              { title: 'Countdown', desc: 'Cuenta regresiva + agenda de eventos.', href: '/world-cup-2026/countdown' },
            ].map((c) => (
              <Card key={c.title} className="p-6">
                <div className="text-sm font-black">{c.title}</div>
                <div className="mt-2 text-sm text-black/60">{c.desc}</div>
                <div className="mt-4">
                  <Link href={c.href}>
                    <Button variant="secondary" className="w-full">
                      Ver
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* PODCAST (3 ventanas como antes) */}
      <section className="bg-white">
        <Container className="py-10">
          <SectionTitle
            eyebrow="Podcast"
            title="Podcast & Interviews"
            subtitle="Jóvenes talentos + entrevistas a atletas/figuras del deporte."
            right={
              <Link href="/podcast">
                <Button variant="secondary">Ver episodios</Button>
              </Link>
            }
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { n: 1, img: '/media/podcast/ep1.jpg' },
              { n: 2, img: '/media/podcast/ep2.jpg' },
              { n: 3, img: '/media/podcast/ep3.jpg' },
            ].map((x) => (
              <Card key={x.n} className="overflow-hidden">
                <div className="p-4">
                  <div
                    className="aspect-[16/10] w-full rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url('${x.img}')` }}
                    aria-label={`Podcast episode ${x.n} cover`}
                  />
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-extrabold">
                    ▶ Preview
                  </div>
                  <div className="mt-4 text-sm font-black">Episode {x.n}: Road to 2026</div>
                  <div className="mt-1 text-xs text-black/60">20–35 min • Clip-ready • Social-first</div>
                  <div className="mt-4 grid gap-2">
                    <Link href="/podcast">
                      <Button className="w-full">▶ Play</Button>
                    </Link>
                    <Link href="/podcast">
                      <Button className="w-full" variant="secondary">
                        🎥 Watch
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* SDQ */}
      <section className="border-t border-black/10 bg-white">
        <Container className="py-10">
          <SectionTitle
            eyebrow="Music"
            title="Official Music — SDQ"
            subtitle="Música original de SMG para deportes y eventos."
            right={
              <Link href="/radio">
                <Button variant="secondary">Explorar música</Button>
              </Link>
            }
          />

          <Card className="p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="h-16 w-16 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/media/sdq/cover.jpg')" }}
                  aria-label="SDQ cover"
                />
                <div>
                  <div className="text-sm font-black">SDQ — “Move the Game”</div>
                  <div className="mt-1 text-xs text-black/60">
                    Tema insignia (demo). Luego lo conectamos a Spotify/YouTube/Audio Player.
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button>▶ Play</Button>
                <Button variant="secondary">🎵 Playlist</Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
