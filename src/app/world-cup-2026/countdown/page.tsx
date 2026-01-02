import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CountdownPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Countdown</h1>
              <p className="mt-2 text-sm text-black/70">
                Cuenta regresiva + agenda de eventos (demo).
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
          <Card className="p-6">
            <div className="text-sm font-black">Cuenta regresiva</div>
            <div className="mt-2 text-sm text-black/60">
              Aquí conectaremos el contador real luego (fecha oficial del kickoff).
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4 text-center">
                <div className="text-2xl font-black">—</div>
                <div className="text-xs text-black/60">Días</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4 text-center">
                <div className="text-2xl font-black">—</div>
                <div className="text-xs text-black/60">Horas</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4 text-center">
                <div className="text-2xl font-black">—</div>
                <div className="text-xs text-black/60">Min</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Agenda (demo)</div>
            <div className="mt-3 space-y-2 text-sm text-black/70">
              <div>• Evento 1: Presentación SMG + SDQ</div>
              <div>• Evento 2: Especial “Host Cities”</div>
              <div>• Evento 3: Trivia Night semanal</div>
            </div>
            <div className="mt-4">
              <Button variant="secondary" className="w-full">
                Ver calendario
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
