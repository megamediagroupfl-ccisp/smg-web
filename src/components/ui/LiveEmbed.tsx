import Card from '@/components/ui/Card';

export default function LiveEmbed({
  title = 'SMG Live',
  // Pon aquí un video DEMO que siempre funcione (luego lo cambias por el real)
  youtubeId = 'dQw4w9WgXcQ',
}: {
  title?: string;
  youtubeId?: string;
}) {
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;

  return (
    <Card className="overflow-hidden">
      <div className="p-4">
        <div className="text-sm font-black">{title}</div>
        <div className="mt-3 aspect-video w-full overflow-hidden rounded-xl border border-black/10 bg-black">
          <iframe
            className="h-full w-full"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="mt-2 text-xs text-black/60">
          *Demo YouTube embed. Luego conectamos el ID real desde .env.local.
        </div>
      </div>
    </Card>
  );
}
