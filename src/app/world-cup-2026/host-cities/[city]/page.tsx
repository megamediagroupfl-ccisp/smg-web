import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

type CityContent = {
  name: string;
  country: string;
  tagline: string;
  summary: string;
  culture: string[];
  music: string[];
  fanZones: string[];
};

const CITY_DATA: Record<string, CityContent> = {
  miami: {
    name: 'Miami',
    country: 'USA',
    tagline: 'Hispanic hub • Música • Playa • Fútbol',
    summary:
      'Miami es uno de los centros culturales más importantes para el público hispano. Ideal para contenido musical, activaciones y fan experiences rumbo al Mundial 2026.',
    culture: [
      'Cultura latina dominante',
      'Eventos deportivos + música urbana',
      'Alta viralidad en redes',
    ],
    music: [
      'Playlists SDQ: Stadium Latin Vibes',
      'Artistas invitados (demo)',
      'Clips musicales para Reels/TikTok',
    ],
    fanZones: [
      'Fan zone central (demo)',
      'Watch parties temáticas',
      'Activaciones con marcas',
    ],
  },

  'new-york-new-jersey': {
    name: 'New York / New Jersey',
    country: 'USA',
    tagline: 'Global city • Cultura • Audiencia internacional',
    summary:
      'Nueva York conecta culturas, idiomas y audiencias globales. Perfecta para storytelling, documentales cortos y contenido multicultural.',
    culture: [
      'Diversidad cultural',
      'Comunidades internacionales',
      'Eventos deportivos masivos',
    ],
    music: [
      'Fusión de géneros',
      'Colaboraciones multiculturales',
      'Contenido editorial musical',
    ],
    fanZones: [
      'Eventos urbanos',
      'Fan meetings',
      'Cobertura tipo documentary',
    ],
  },

  'ciudad-de-mexico': {
    name: 'Ciudad de México',
    country: 'México',
    tagline: 'Tradición • Pasión • Historia futbolera',
    summary:
      'CDMX es corazón futbolero. Contenido emocional, tradición, rivalidades y música regional con impacto masivo.',
    culture: [
      'Historia del fútbol',
      'Afición intensa',
      'Rivalidades clásicas',
    ],
    music: [
      'Regional + moderno',
      'Playlists temáticas',
      'Colaboraciones locales',
    ],
    fanZones: [
      'Fan zones históricas',
      'Eventos culturales',
      'Activaciones comunitarias',
    ],
  },
};

function normalizeCity(raw?: string) {
  return (raw ?? '').toLowerCase().trim();
}

export default function HostCityDetailPage({
  params,
}: {
  params: { city?: string };
}) {
  const slug = normalizeCity(params?.city);
  const city = slug ? CITY_DATA[slug] : undefined;

  if (!city) {
    return (
      <div className="bg-white">
        <Container className="py-16">
          <Card className="p-6">
            <div className="text-lg font-black">City not found</div>
            <p className="mt-2 text-sm text-black/60">
              Esta ciudad aún no tiene contenido configurado.
            </p>
            <div className="mt-4 flex gap-2">
              <Link href="/world-cup-2026/host-cities">
                <Button variant="secondary">← Volver a Host Cities</Button>
              </Link>
              <Link href="/world-cup-2026">
                <Button variant="secondary">← Volver al Hub</Button>
              </Link>
            </div>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                Host City • {city.country}
              </div>
              <h1 className="mt-2 text-4xl font-black tracking-tight">
                {city.name}
              </h1>
              <p className="mt-2 text-sm text-black/70">{city.tagline}</p>
            </div>

            <Link href="/world-cup-2026/host-cities">
              <Button variant="secondary">← Volver</Button>
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10 space-y-10">
        {/* SUMMARY */}
        <Card className="p-6">
          <div className="text-sm font-black">Resumen</div>
          <p className="mt-2 text-sm text-black/70">{city.summary}</p>
        </Card>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-sm font-black">Cultura</div>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              {city.culture.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Música & SDQ</div>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              {city.music.map((m) => (
                <li key={m}>• {m}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Fan Zones</div>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              {city.fanZones.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* ACTIONS */}
        <Card className="p-6">
          <div className="text-sm font-black">Acciones SMG</div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="secondary">🎬 Crear clip</Button>
            <Button variant="secondary">🎧 Playlist SDQ</Button>
            <Button variant="secondary">🗓 Programar evento</Button>
            <Button variant="secondary">📣 Activación de marca</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
