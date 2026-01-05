'use client';

// D:\sport-music-group\smg-web\src\components\ui\AudioPlayer.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

type NowPlaying = {
  station: string;
  live: boolean;
  title: string;
  artist: string;
  show: string;
  cover: string;
  startedAt: string;
  listeners: number;
};

export default function AudioPlayer({
  compact = false,
  label = 'Radio',
  streamUrl,
}: {
  compact?: boolean;
  label?: string;
  streamUrl?: string; // si no lo pasas, usa ENV o demo
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);

  // Endpoint configurable (para luego cambiar a Inovanex sin tocar UI)
  const nowPlayingUrl =
    (process.env.NEXT_PUBLIC_NOWPLAYING_URL as string) || '/api/now-playing';

  // Stream configurable (para luego cambiar a Inovanex sin tocar UI)
  const url = useMemo(() => {
    const envUrl = process.env.NEXT_PUBLIC_RADIO_STREAM_URL as string | undefined;
    return streamUrl ?? envUrl ?? 'https://ice5.somafm.com/chillits-128-mp3';
  }, [streamUrl]);

  const isBusy = status === 'loading';
  const isPlaying = status === 'playing';
  const canStop = status === 'playing' || status === 'loading';

  async function fetchNowPlaying() {
    try {
      const res = await fetch(nowPlayingUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as NowPlaying;
      setNowPlaying(data);
    } catch {
      // No rompemos la UI si falla el endpoint
      setNowPlaying(null);
    }
  }

  useEffect(() => {
    fetchNowPlaying();
    const t = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlePlay() {
    const el = audioRef.current;
    if (!el) return;

    setErrorMsg('');
    setStatus('loading');

    // Important: set src only when playing to avoid sticky errors
    el.src = url;
    el.load();

    el.play()
      .then(() => setStatus('playing'))
      .catch((err: any) => {
        const name = err?.name ? String(err.name) : 'Error';

        const message =
          name === 'NotAllowedError'
            ? 'El navegador bloqueó la reproducción (autoplay). Da click nuevamente en Play.'
            : name === 'NotSupportedError'
              ? 'No se pudo reproducir el stream. Verifica el formato (.mp3/.aac/.m3u8) y que sea un enlace directo.'
              : 'No se pudo reproducir el stream. Verifica el enlace.';

        setStatus('error');
        setErrorMsg(`${message} (${name})`);
      });
  }

  function handleStop() {
    const el = audioRef.current;
    if (!el) return;

    try {
      el.pause();
      el.currentTime = 0;
      // Limpia src para evitar que el navegador “recuerde” un estado malo
      el.removeAttribute('src');
      el.load();
    } catch {
      // no-op
    }
    setStatus('paused');
  }

  function handleToggle() {
    if (canStop) handleStop();
    else handlePlay();
  }

  return (
    <Card className={cn(compact ? 'p-4' : 'p-6')}>
      <audio
        ref={audioRef}
        onPlaying={() => setStatus('playing')}
        onPause={() => setStatus((s) => (s === 'loading' ? s : 'paused'))}
        onError={() => {
          // Solo marcamos error si el usuario intentó reproducir (loading/playing)
          setStatus((prev) => {
            if (prev === 'loading' || prev === 'playing') return 'error';
            return prev;
          });
          setErrorMsg((prev) =>
            prev || 'No se pudo cargar el stream. Prueba otro enlace.'
          );
        }}
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-xl bg-[rgb(var(--smg-soft))]">
            {nowPlaying?.cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={nowPlaying.cover}
                alt="cover"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : null}
          </div>

          <div>
            <div className="text-sm font-black">
              {label} — {nowPlaying?.station ?? 'SMG Radio'}
            </div>

            <div className="mt-1 text-xs text-black/60">
              {nowPlaying ? (
                <>
                  Now Playing: <span className="font-bold">{nowPlaying.title}</span> —{' '}
                  <span className="font-bold">{nowPlaying.artist}</span>
                  {' • '}
                  <span className="text-black/50">{nowPlaying.show}</span>
                  {' • '}
                  <span className="text-black/50">{nowPlaying.listeners} listeners</span>
                </>
              ) : (
                <>Now Playing: (demo endpoint)</>
              )}
            </div>

            <div className="mt-1 text-xs text-black/60">
              Estado: <span className="font-bold">{status}</span>
            </div>

            {/* ERROR SOLO SI status === 'error' */}
            {status === 'error' && errorMsg ? (
              <div className="mt-2 text-xs font-semibold text-red-600">{errorMsg}</div>
            ) : null}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap gap-2">
          {/* Toggle real */}
          <Button onClick={handleToggle} disabled={isBusy}>
            {canStop ? '⏹ Stop' : '▶ Play'}
          </Button>

          <Button variant="secondary" onClick={fetchNowPlaying}>
            ↻ Refresh
          </Button>
        </div>
      </div>
    </Card>
  );
}
