'use client';

import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type TLeft = { days: number; hours: number; mins: number; secs: number };

function getTimeLeft(target: Date): TLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return { days, hours, mins, secs };
}

const MILESTONES = [
  { title: 'Especial SMG + SDQ (preview temporada)', when: 'Enero', type: 'SMG' },
  { title: 'Serie Host Cities (cultura + música por sede)', when: 'Mensual', type: 'Contenido' },
  { title: 'Trivia Night semanal (engagement)', when: 'Semanal', type: 'Engagement' },
  { title: 'Road to 2026: clips 30–60s (reels/shorts)', when: 'Diario', type: 'Social-first' },
];

export default function CountdownPage() {
  // Fecha demo configurable (luego la ponemos oficial).
  // Tip: puedes cambiarla sin tocar nada más.
  const target = useMemo(() => new Date('2026-06-11T00:00:00'), []);
  const [left, setLeft] = useState<TLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const t = setInterval(() => setLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Countdown</h1>
              <p className="mt-2 text-sm text-black/70">
                Cuenta regresiva + agenda (demo real). Luego conectamos eventos oficiales.
              </p>
            </div>
            <Link href="/world-cup-2026">
              <Button variant="secondary">← Volver al Hub</Button>
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {/* COUNTDOWN */}
          <Card className="p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-black">Cuenta regresiva</div>
              <span className="rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70">
                Demo
              </span>
            </div>

            <div className="mt-2 text-sm text-black/60">
              Target configurado: <span className="font-bold">{target.toDateString()}</span>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {[
                { n: left.days, label: 'Días' },
                { n: left.hours, label: 'Horas' },
                { n: left.mins, label: 'Min' },
                { n: left.secs, label: 'Seg' },
              ].map((x) => (
                <div
                  key={x.label}
                  className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4 text-center"
                >
                  <div className="text-2xl font-black tabular-nums">{x.n}</div>
                  <div className="text-xs text-black/60">{x.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button>🔔 Recordar</Button>
              <Button variant="secondary">🗓 Ver agenda</Button>
            </div>
          </Card>

          {/* AGENDA */}
          <Card className="p-6">
            <div className="text-sm font-black">Agenda (SMG Road to 2026)</div>
            <div className="mt-2 text-sm text-black/60">
              Hitos pensados para crecimiento: clips + cultura + música + comunidad.
            </div>

            <div className="mt-4 space-y-3">
              {MILESTONES.map((m) => (
                <div
                  key={m.title}
                  className="flex items-start justify-between gap-3 rounded-xl border border-black/10 bg-white p-4"
                >
                  <div>
                    <div className="text-sm font-bold">{m.title}</div>
                    <div className="mt-1 text-xs text-black/60">Frecuencia: {m.when}</div>
                  </div>
                  <span className="shrink-0 rounded-full bg-[rgb(var(--smg-soft))] px-3 py-1 text-xs font-bold text-black/70">
                    {m.type}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button variant="secondary" className="w-full">
                Ver calendario
              </Button>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <Card className="mt-6 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-black">Diferenciación (no ESPN)</div>
              <div className="mt-1 text-sm text-black/60">
                Countdown + agenda se usa para planificar contenido (clips, lives, SDQ, cultura), no solo “noticias”.
              </div>
            </div>
            <Button>Crear plan semanal</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
