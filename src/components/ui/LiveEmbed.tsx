'use client';

type Props = {
  videoId?: string;
  title?: string;
};

export default function LiveEmbed({ videoId, title }: Props) {
  const id = videoId || process.env.NEXT_PUBLIC_YT_LIVE_VIDEO_ID || '';
  const t = title || 'SMG Live';

  if (!id) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-xl border border-black/10 bg-[rgb(var(--smg-soft))] p-6 text-sm text-black/70">
        Live no configurado aún. Agrega <b>NEXT_PUBLIC_YT_LIVE_VIDEO_ID</b> en <b>.env.local</b>.
      </div>
    );
  }

  const src = `https://www.youtube.com/embed/${id}?autoplay=0&mute=0&rel=0&modestbranding=1`;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-black/10 bg-black">
      <iframe
        className="h-full w-full"
        src={src}
        title={t}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
