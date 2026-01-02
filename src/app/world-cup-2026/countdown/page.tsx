import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function getCountdownParts(target: Date) {
  const now = new Date();
  const diffMs = target.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { done: false, days, hours, minutes, seconds };
}

// ✅ Kickoff oficial (demo): 11 de junio 2026
// Nota: más adelante lo moveremos a config central o CMS.
const KICKOFF = new Date('2026-06-11T00:00:00');

const AGENDA = [
  {
    title: 'SMG Live: Road to 2026 (Weekly)',
    date: 'Todos los viernes • 8:00 PM',
    tag: 'LIVE',
    note: 'Entrevistas + trivia + clips para redes.',
  },
  {
    title: 'SDQ Spotlight (Radio Special)',
    date: 'Miércoles • 6:00 PM',
    tag: 'RADIO',
    note: 'Estrenos + “Stadium Vibes” + tendencias.',
  },
  {
    title: 'Host City Focus (Content Day)',
    date: 'Lunes • 12:00 PM',
    tag: 'WORLD CUP',
    note: 'Una ciudad sede por semana: cultura + playlist + fans.',
  },
  {
    title: 'Trivia Night (Community)',
    date: 'Domingo • 9:00 PM',
    tag: 'ENGAGEMENT',
    note: 'Retos, quizzes, premios y comunidad.',
  },
];

export default function CountdownPage() {
  const parts = getCountdownParts(KICKOFF);

  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Countdown</h1>
              <p className="mt-2 text-sm text-black/70">
                Cuenta regresiva + agenda editorial SMG (demo).
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/world-cup-2026">
                <Button variant="secondary">← Volver al Hub</Button>
              </Link>
              <Button variant="secondary">🔔 Recordatorio</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10 space-y-10">
        {/* COUNTDOWN */}
        <Card className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-black">Kickoff</div>
              <div className="mt-2 text-sm text-black/60">
                {KICKOFF.toDateString()} (demo)
              </div>
              <div className="mt-3 text-xs text-black/60">
                Nota: el contador es server-side en este demo. Luego lo hacemos en tiempo real
                con componente client (sin romper tu estabilidad).
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="secondary">📣 Convertir en post</Button>
              <Button variant="secondary">🎬 Convertir en clip</Button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4 text-center">
              <div className="text-3xl font-black">{parts.done ? '00' : pad(parts.days)}</div>
              <div className="text-xs text-black/60">Días</div>
            </div>

            <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4 text-center">
              <div className="text-3xl font-black">{parts.done ? '00' : pad(parts.hours)}</div>
              <div className="text-xs text-black/60">Horas</div>
            </div>

            <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4 text-center">
              <div className="text-3xl font-black">{parts.done ? '00' : pad(parts.minutes)}</div>
              <div className="text-xs text-black/60">Min</div>
            </div>

            <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4 text-center">
              <div className="text-3xl font-black">{parts.done ? '00' : pad(parts.seconds)}</div>
              <div className="text-xs text-black/60">Seg</div>
            </div>
          </div>

          {parts.done ? (
            <div className="mt-6 rounded-xl border border-black/10 bg-white p-4">
              <div className="text-sm font-black">¡Ya comenzó!</div>
              <div className="mt-1 text-sm text-black/60">
                Activa modo cobertura total SMG + SDQ.
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-black/10 bg-white p-4">
              <div className="text-sm font-black">Idea SMG (engagement)</div>
              <div className="mt-1 text-sm text-black/60">
                Publicación diaria: “Faltan X días” + dato de una sede + hook musical SDQ.
              </div>
            </div>
          )}
        </Card>

        {/* AGENDA */}
        <div>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                SMG Planning
              </div>
              <h2 className="mt-1 text-2xl font-black tracking-tight">Agenda (demo)</h2>
              <p className="mt-1 text-sm text-black/60">
                Eventos y bloques de contenido para mantener el feed activo y monetizable.
              </p>
            </div>
            <Button variant="secondary">➕ Añadir evento</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {AGENDA.map((a) => (
              <Card key={a.title} className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-black">{a.title}</div>
                    <div className="mt-2 text-sm text-black/60">{a.date}</div>
                    <div className="mt-2 text-xs text-black/60">{a.note}</div>
                  </div>
                  <span className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70">
                    {a.tag}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button variant="secondary">Ver</Button>
                  <Button variant="secondary">Compartir</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-black">Siguiente objetivo</div>
              <div className="mt-1 text-sm text-black/60">
                Luego conectamos esto con datos reales y automatizamos posts (Canva + calendario).
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/world-cup-2026/news">
                <Button variant="secondary">Ver News</Button>
              </Link>
              <Link href="/world-cup-2026/host-cities">
                <Button variant="secondary">Ver Host Cities</Button>
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
