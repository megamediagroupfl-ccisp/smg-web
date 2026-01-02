import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const CITY_DATA: Record<
  string,
  {
    name: string;
    country: string;
    focus: string;
    vibe: string[];
    contentIdeas: { title: string; note: string }[];
    sdqAngle: { title: string; note: string }[];
  }
> = {
  miami: {
    name: 'Miami',
    country: 'USA',
    focus: 'Hispano hub + experiencias • activaciones SMG/SDQ',
    vibe: ['Fan zones', 'Cultura latina', 'Eventos', 'Playlists SDQ'],
    contentIdeas: [
      { title: 'Guía rápida de fan zones', note: 'Post carrusel + mapa (demo)' },
      { title: 'Top 5 spots para grabar Reels', note: 'Clips 30–60s (vertical)' },
      { title: 'Entrevistas callejeras', note: 'Preguntas rápidas + trivia' },
    ],
    sdqAngle: [
      { title: 'Stadium Vibes (hook)', note: 'Audio trend + challenge' },
      { title: 'Playlist “Road to 2026”', note: 'Curada por ciudad + mood' },
    ],
  },

  'new-york-new-jersey': {
    name: 'New York / New Jersey',
    country: 'USA',
    focus: 'World Cup + cultura urbana • contenido social-first',
    vibe: ['Ciudad', 'Street culture', 'Fans', 'Clips rápidos'],
    contentIdeas: [
      { title: 'Reporte express (noticias del día)', note: 'Formato “desk” pero SMG' },
      { title: 'Cultura local + música', note: 'Post + reels con sonido SDQ' },
      { title: 'Top 3 historias de fans', note: 'Mini-doc 2–3 min' },
    ],
    sdqAngle: [
      { title: 'Beat urbano SDQ', note: 'Versión “NY” para reels' },
      { title: 'Intro de show', note: 'Jingle corto para live' },
    ],
  },

  'los-angeles': {
    name: 'Los Angeles',
    country: 'USA',
    focus: 'Entertainment + artistas + activaciones',
    vibe: ['Showbiz', 'Eventos', 'Cultura', 'Contenido premium'],
    contentIdeas: [
      { title: 'Backstage de eventos', note: 'Clips + mini entrevistas' },
      { title: 'Top spots (cine/arte)', note: 'Guía visual por ciudad' },
      { title: 'Watch-along', note: 'Live + highlights' },
    ],
    sdqAngle: [
      { title: 'Remix SDQ (demo)', note: 'Versión “LA” más energética' },
      { title: 'Playlist “Game Day”', note: 'Mood para activaciones' },
    ],
  },

  'ciudad-de-mexico': {
    name: 'Ciudad de México',
    country: 'México',
    focus: 'Tradición + rivalidades + cultura',
    vibe: ['Historia', 'Rivalidades', 'Cultura', 'Comunidad'],
    contentIdeas: [
      { title: 'Rivalidades históricas', note: 'Post informativo + trivia' },
      { title: 'Cultura local', note: 'Guía + reels' },
      { title: 'Entrevistas a fans', note: 'Clips street' },
    ],
    sdqAngle: [
      { title: 'SDQ + percusión', note: 'Sabor cultural (demo)' },
      { title: 'Playlist “Pasión”', note: 'Canciones intensas de estadio' },
    ],
  },

  toronto: {
    name: 'Toronto',
    country: 'Canadá',
    focus: 'Fan culture + activaciones',
    vibe: ['Fans', 'Eventos', 'Internacional', 'Contenido ligero'],
    contentIdeas: [
      { title: 'Agenda semanal', note: 'Calendario + post' },
      { title: 'Top spots para fans', note: 'Mini guía' },
      { title: 'Clips de cultura', note: 'Reels rápidos' },
    ],
    sdqAngle: [
      { title: 'SDQ chill', note: 'Vibe cool, más “clean”' },
      { title: 'Playlist “North”', note: 'Selección por mood' },
    ],
  },

  vancouver: {
    name: 'Vancouver',
    country: 'Canadá',
    focus: 'Experiencia internacional + turismo',
    vibe: ['Outdoor', 'Turismo', 'Cultura', 'Fans'],
    contentIdeas: [
      { title: 'Guía de experiencias', note: 'Post + reels' },
      { title: 'Fan stories', note: 'Mini entrevistas' },
      { title: 'Cultura & food', note: 'Reels culinarios + trivia' },
    ],
    sdqAngle: [
      { title: 'SDQ cinematic', note: 'Sonido más épico (demo)' },
      { title: 'Playlist “Travel”', note: 'Mood para viaje' },
    ],
  },
};

// ✅ Slugify fuerte: convierte "New York / New Jersey" => "new-york-new-jersey"
// y también maneja URL encoded: "%2F", "%20", acentos, etc.
function normalizeCitySlug(raw: unknown) {
  if (typeof raw !== 'string') return '';

  const decoded = decodeURIComponent(raw);

  return decoded
    .toLowerCase()
    .normalize('NFD') // separa acentos
    .replace(/[\u0300-\u036f]/g, '') // quita acentos
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-') // todo lo no alfanum => -
    .replace(/-+/g, '-') // colapsa ---
    .replace(/^-|-$/g, ''); // quita - al inicio/fin
}
export default async function HostCityDetailPage({
  params,
}: {
  params: Promise<{ city?: string }>;
}) {
  const { city } = await params;
  const slug = normalizeCitySlug(city);

  const data = slug ? CITY_DATA[slug] : undefined;

  if (!data) {
    return (
      <div className="bg-white">
        <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
          <Container className="py-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                  World Cup 2026
                </div>
                <h1 className="mt-2 text-3xl font-black tracking-tight">City not found</h1>
                <p className="mt-2 text-sm text-black/70">
                  No existe en el demo o el slug no coincide.
                </p>
                <p className="mt-2 text-xs text-black/60">
                  Slug recibido: <span className="font-bold">{slug || '(vacío)'}</span>
                </p>
                <p className="mt-2 text-xs text-black/60">
                  Prueba directo: <span className="font-bold">/host-cities/miami</span> o{' '}
                  <span className="font-bold">/host-cities/los-angeles</span>
                </p>
              </div>
              <Link href="/world-cup-2026/host-cities">
                <Button variant="secondary">← Volver</Button>
              </Link>
            </div>
          </Container>
        </section>

        <Container className="py-10">
          <Card className="p-6">
            <div className="text-sm font-black">Keys disponibles en CITY_DATA</div>
            <div className="mt-3 text-xs text-black/70">
              {Object.keys(CITY_DATA).join(' • ')}
            </div>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                World Cup 2026 • {data.country}
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">{data.name}</h1>
              <p className="mt-2 text-sm text-black/70">{data.focus}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {data.vibe.map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-black/70"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link href="/world-cup-2026/host-cities">
                <Button variant="secondary">← Volver a Host Cities</Button>
              </Link>
              <Button>Crear post</Button>
              <Button variant="secondary">Crear clip</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-black">Ideas de contenido (SMG)</div>
            <div className="mt-4 space-y-3">
              {data.contentIdeas.map((it) => (
                <div key={it.title} className="rounded-xl border border-black/10 bg-white p-4">
                  <div className="text-sm font-bold">{it.title}</div>
                  <div className="mt-1 text-xs text-black/60">{it.note}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Ángulo SDQ (música)</div>
            <div className="mt-4 space-y-3">
              {data.sdqAngle.map((it) => (
                <div
                  key={it.title}
                  className="rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-4"
                >
                  <div className="text-sm font-bold">{it.title}</div>
                  <div className="mt-1 text-xs text-black/60">{it.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="secondary">Playlist</Button>
              <Button variant="secondary">Compartir</Button>
            </div>
          </Card>
        </div>

        <Card className="mt-6 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-black">Diferenciación (no ESPN)</div>
              <div className="mt-1 text-sm text-black/60">
                La sede es un “paquete”: cultura + música + agenda + comunidad (SMG/SDQ).
              </div>
            </div>
            <Button>Crear guía completa</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
