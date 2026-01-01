'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';

type Props = {
  src?: string;
  title?: string;
  compact?: boolean;
};

export default function AudioPlayer({ src, title, compact }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.8);

  const stream = src ?? process.env.NEXT_PUBLIC_RADIO_STREAM_URL ?? '';
  const label = title ?? process.env.NEXT_PUBLIC_RADIO_STREAM_TITLE ?? 'Radio';

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = volume;

    const onCanPlay = () => {
      setIsReady(true);
      setError(null);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onError = () => {
      setError('No se pudo reproducir el stream. Verifica la URL/HTTPS.');
      setIsPlaying(false);
      setIsReady(false);
    };

    a.addEventListener('canplay', onCanPlay);
    a.addEventListener('play', onPlay);
    a.addEventListener('pause', onPause);
    a.addEventListener('error', onError);

    return () => {
      a.removeEventListener('canplay', onCanPlay);
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', onPause);
      a.removeEventListener('error', onError);
    };
  }, [volume]);

  async function toggle() {
    setError(null);
    const a = audioRef.current;
    if (!a) return;

    // Si no hay URL, evita confusión
    if (!stream || stream.includes('example.com')) {
      setError('Falta configurar la URL real del stream en .env.local');
      return;
    }

    try {
      if (a.paused) {
        // Para streams en vivo conviene recargar el src antes de play
        a.src = stream;
        await a.play();
      } else {
        a.pause();
      }
    } catch {
      setError('El navegador bloqueó el autoplay o el stream no es compatible.');
      setIsPlaying(false);
    }
  }

  function stop() {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setIsPlaying(false);
  }

  return (
    <div className="w-full">
      <audio ref={audioRef} preload="none" />

      <div className={compact ? 'flex flex-wrap items-center gap-2' : 'flex flex-col gap-3'}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-black">{label}</div>
            <div className="mt-1 text-xs text-black/60">
              {error ? error : isReady ? (isPlaying ? 'En vivo • Reproduciendo' : 'Listo') : 'Esperando…'}
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={toggle}>{isPlaying ? '⏸ Pausar' : '▶ Play Live'}</Button>
            <Button variant="secondary" onClick={stop}>
              ⏹ Stop
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-bold text-black/60">Vol</div>
          <input
            className="w-full accent-[rgb(var(--smg-blue))]"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Volume"
          />
          <div className="w-10 text-right text-xs font-bold text-black/60">{Math.round(volume * 100)}%</div>
        </div>
      </div>
    </div>
  );
}
