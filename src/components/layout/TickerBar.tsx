import Container from './Container';

export default function TickerBar({
  label,
  radioLabel,
  nowPlaying,
  cta,
}: {
  label: string;
  radioLabel: string;
  nowPlaying: string;
  cta: string;
}) {
  return (
    <div className="border-b border-black/10 bg-white">
      <Container className="flex h-10 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-extrabold">
            <span className="inline-flex h-2 w-2 rounded-full bg-[rgb(var(--smg-red))]" />
            {label}
          </span>

          <div className="min-w-0 text-xs text-black/70">
            <span className="font-extrabold">{radioLabel}</span> — {nowPlaying}
          </div>
        </div>

        <a
          href="/radio"
          className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-extrabold hover:bg-[rgb(var(--smg-soft))]"
        >
          {cta}
        </a>
      </Container>
    </div>
  );
}
