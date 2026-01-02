import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const NEWS = [
  { title: 'Rumores / fichajes / clasificación', meta: 'Actualizado • 2h' },
  { title: 'Top 5 historias del día', meta: 'Resumen • 6 min' },
  { title: 'Calendario: partidos clave', meta: 'Agenda • Semana' },
];

const CITIES = [
  { city: 'New York / New Jersey', note: 'Cultura + venues + playlist' },
  { city: 'Los Angeles', note: 'Fan zones + música + clips' },
  { city: 'Mexico City', note: 'Ritmo + historia + retos' },
  { city: 'Toronto', note: 'Experience + eventos + radio' },
];

export default function WorldCupHubPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">
                Road to FIFA World Cup 2026
              </h1>
              <p className="mt-2 text-sm text-black/70">
                Noticias, sedes, countdown, cultura y playlists — el centro de contenido SMG.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="secondary">📅 Calendario</Button>
              <Button variant="secondary">🏆 Trivia</Button>
              <Button>▶ Watch Live</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* QUICK NAV */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-sm font-black">News</div>
            <div className="mt-2 text-sm text-black/60">Actualizaciones rápidas tipo sports desk.</div>
            <div className="mt-4">
              <Button className="w-full" variant="secondary">
                Ver News
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Host Cities</div>
            <div className="mt-2 text-sm text-black/60">Sedes + cultura + música por ciudad.</div>
            <div className="mt-4">
              <Button className="w-full" variant="secondary">
                Ver Sedes
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Countdown</div>
            <div className="mt-2 text-sm text-black/60">Cuenta regresiva + agenda de eventos.</div>
            <div className="mt-4">
              <Button className="w-full" variant="secondary">
                Ver Countdown
              </Button>
            </div>
          </Card>
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* NEWS */}
          <Card className="overflow-hidden lg:col-span-2">
            <div className="p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                    News
                  </div>
                  <h2 className="mt-1 text-2xl font-black tracking-tight">Últimas</h2>
                  <p className="mt-1 text-sm text-black/60">
                    Titulares listos para clips y posts.
                  </p>
                </div>
                <Button variant="secondary">Ver todo</Button>
              </div>

              <div className="mt-6 grid gap-3">
                {NEWS.map((n) => (
                  <div
                    key={n.title}
                    className="flex items-center justify-between rounded-xl border border-black/10 bg-white p-4"
                  >
                    <div>
                      <div className="text-sm font-black">{n.title}</div>
                      <div className="mt-1 text-xs text-black/60">{n.meta}</div>
                    </div>
                    <Button variant="secondary">Abrir</Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* CITIES */}
          <Card className="p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                  Host Cities
                </div>
                <h2 className="mt-1 text-lg font-black tracking-tight">Sedes destacadas</h2>
              </div>
              <Button variant="secondary">Ver</Button>
            </div>

            <div className="mt-5 grid gap-3">
              {CITIES.map((c) => (
                <div
                  key={c.city}
                  className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4"
                >
                  <div className="text-sm font-black">{c.city}</div>
                  <div className="mt-1 text-xs text-black/60">{c.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <Button className="w-full" variant="secondary">
                Ir a Sedes
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
