// src/app/podcast/[slug]/page.tsx
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

type Episode = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  tags: string[];
  cover: string; // /public path
  description: string;
  youtube?: string; // pendiente de confirmar
  audio?: string; // pendiente de confirmar
};

const EPISODES: Episode[] = [
  {
    slug: 'episode-01',
    title: 'Episode 1: Road to 2026',
    subtitle: 'World Cup kickoff + visión editorial SMG',
    duration: '28 min',
    tags: ['World Cup', 'Editorial', 'Sports Culture'],
    cover: '/media/podcast/ep-01.jpg',
    description:
      'Un episodio introductorio para presentar el concepto SMG: contenido deportivo + música original, formato social-first y cobertura rumbo al Mundial 2026.',
  },
  {
    slug: 'episode-02',
    title: 'Episode 2: Host Cities Spotlight',
    subtitle: 'Ciudades sede + cultura + fan zones',
    duration: '24 min',
    tags: ['Host Cities', 'Culture', 'Travel'],
    cover: '/media/podcast/ep-02.jpg',
    description:
      'Recorrido por el concepto de ciudades sede y cómo convertir cada ciudad en una línea de contenido: clips, trivia, playlists, activaciones y entrevistas.',
  },
  {
    slug: 'episode-03',
    title: 'Episode 3: Music x Sports',
    subtitle: 'La fórmula de SDQ y el sonido del estadio',
    duration: '20 min',
    tags: ['SDQ', 'Music', 'Brand'],
    cover: '/media/podcast/ep-03.jpg',
    description:
      'Cómo usar música original para identidad, contenidos cortos, trends y segmentos de radio. Ideal para reforzar el “look & feel” internacional.',
  },
  {
    slug: 'episode-04',
    title: 'Episode 4: Weekly Live Format',
    subtitle: 'Estructura de shows en vivo (clips + engagement)',
    duration: '22 min',
    tags: ['Live', 'Format', 'Social'],
    cover: '/media/podcast/ep-04.jpg',
    description:
      'Diseño de guion y dinámica para Live semanal: secciones cortas, momentos virales, preguntas del público y calendario de temas rumbo a 2026.',
  },
  {
    slug: 'episode-05',
    title: 'Episode 5: Trivia Night',
    subtitle: 'Interacción, retos y gamificación ligera',
    duration: '18 min',
    tags: ['Trivia', 'Engagement', 'Community'],
    cover: '/media/podcast/ep-05.jpg',
    description:
      'Episodio para presentar el concepto de trivia semanal, retos por ciudades sede y dinámicas fáciles de mantener mientras el equipo crece.',
  },
  {
    slug: 'episode-06',
    title: 'Episode 6: Highlights & Replays',
    subtitle: 'Biblioteca evergreen + monetización',
    duration: '26 min',
    tags: ['Replays', 'Library', 'Growth'],
    cover: '/media/podcast/ep-06.jpg',
    description:
      'Cómo estructurar replays y highlights para que sirvan de motor de crecimiento: SEO, clips, distribución y consistencia editorial.',
  },
  {
    slug: 'episode-07',
    title: 'Episode 7: News Desk',
    subtitle: 'Noticias rápidas listas para social',
    duration: '19 min',
    tags: ['News', 'Short-form', 'Workflow'],
    cover: '/media/podcast/ep-07.jpg',
    description:
      'Proceso de contenido tipo desk: titulares, verificación rápida, copy breve, plantillas visuales y publicación constante sin parecer “ESPN 100%”.',
  },
  {
    slug: 'episode-08',
    title: 'Episode 8: International Rollout',
    subtitle: 'Bilingüe, marca, y expansión',
    duration: '30 min',
    tags: ['Bilingual', 'International', 'Brand'],
    cover: '/media/podcast/ep-08.jpg',
    description:
      'Estrategia para mantener foco hispano sin perder el mercado inglés: estructura editorial, UX, y consistencia en web + futura app.',
  },
];

export default async function PodcastEpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ep = EPISODES.find((e) => e.slug === slug);

  if (!ep) {
    return (
      <div className="bg-white">
        <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
          <Container className="py-10">
            <h1 className="text-3xl font-black tracking-tight">Episode not found</h1>
            <p className="mt-2 text-sm text-black/70">
              Este episodio no existe o aún no está publicado.
            </p>
            <div className="mt-5">
              <Link href="/podcast">
                <Button variant="secondary">← Volver a Podcast</Button>
              </Link>
            </div>
          </Container>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-black/50">
                SMG Podcast
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight">{ep.title}</h1>
              <p className="mt-2 text-sm text-black/70">{ep.subtitle}</p>
              <div className="mt-3 text-xs text-black/60">Duración: {ep.duration}</div>

              <div className="mt-4 flex flex-wrap gap-2">
                {ep.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button>▶ Play (demo)</Button>
                <Button variant="secondary">🎥 Watch (pendiente)</Button>
                <Button variant="secondary">↗ Share</Button>
                <Link href="/podcast">
                  <Button variant="secondary">← Back</Button>
                </Link>
              </div>
            </div>

            <Card className="overflow-hidden md:w-[420px]">
              <div
                className="aspect-[16/10] bg-cover bg-center"
                style={{ backgroundImage: `url('${ep.cover}')` }}
              />
              <div className="p-5">
                <div className="text-xs font-extrabold text-black/50">DESCRIPTION</div>
                <div className="mt-2 text-sm text-black/70">{ep.description}</div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-black">Notas del episodio</div>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>• Formato social-first (clips 30–60s)</li>
              <li>• Línea editorial rumbo a 2026</li>
              <li>• Integración con Live + Radio (pendiente de confirmar)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-black">Acciones</div>
            <div className="mt-4 grid gap-2">
              <Button variant="secondary">📌 Guardar</Button>
              <Button variant="secondary">🗓 Agendar segmento</Button>
              <Button variant="secondary">🧩 Crear clip</Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
