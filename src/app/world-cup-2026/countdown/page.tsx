import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function CountdownPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Countdown</h1>
              <p className="mt-2 text-sm text-black/70">
                Cuenta regresiva (demo). Luego conectamos a fecha real + eventos.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">← Volver</Button>
              <Button variant="secondary">📅 Ver agenda</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-xs font-extrabold text-black/50">Días</div>
            <div className="mt-2 text-4xl font-black">—</div>
            <div className="mt-2 text-sm text-black/60">Demo (pendiente fecha real)</div>
          </Card>

          <Card className="p-6">
            <div className="text-xs font-extrabold text-black/50">Horas</div>
            <div className="mt-2 text-4xl font-black">—</div>
            <div className="mt-2 text-sm text-black/60">Demo</div>
          </Card>

          <Card className="p-6">
            <div className="text-xs font-extrabold text-black/50">Próximo evento</div>
            <div className="mt-2 text-lg font-black">Live + Trivia</div>
            <div className="mt-2 text-sm text-black/60">Viernes 8:00 PM</div>
            <div className="mt-4">
              <Button className="w-full" variant="secondary">
                Recordar
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
