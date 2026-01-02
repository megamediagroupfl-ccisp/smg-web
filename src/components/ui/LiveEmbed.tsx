import Card from '@/components/ui/Card';
import { LIVE_YOUTUBE_ID } from '@/lib/stream';

export default function LiveEmbed({
  title = 'SMG Live',
}: {
  title?: string;
}) {
  const id = LIVE_YOUTUBE_ID;

  if (!id) {
    return (
      <Card className="p-6">
        <div className="text-sm font-black">{title}</div>
        <div className="mt-2 text-sm text-black/60">
          Configura NEXT_PUBLIC_LIVE_YOUTUBE_ID en .env.local
        </div>
      </Card>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
