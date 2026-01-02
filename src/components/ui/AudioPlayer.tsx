'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { getDefaultStream } from '@/lib/stream';

type Props = {
  compact?: boolean;
};

export default function AudioPlayer({ compact }: Props) {
  const stream = useMemo(() => getDefaultStream(), []);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<string>('Listo');

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onCanPlay = () => {
      setIsReady(true);
      setStatus('Listo');
    };
    const onPlay = () => {
      setIsPlaying(true);
      setStatus('Reproduciendo');
    };
    const onPause = () => {
      setIsPlaying(false);
      setStatus('Pausado');
    };
    const onWaiting = () => setStatus('Cargando…');
    const onError = () => {
      setIsPlaying(false);
      setIsReady(false);
      setStatus(
        'No se pudo reproducir. Asegúrate de dar click en Play y que el enlace sea un stream directo (.mp3/.aac/.m3u8).'
      );
    };

    el.addEventListener('canplay', onCanPlay);
    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('waiting', onWaiting);
    el.addEventListener('error', onError);

    return () => {
      el.removeEventListener('canplay', onCanPlay);
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('waiting', onWaiting);
      el.removeEventListener('error', onError);
    };
  }, []);

  async function handlePlay() {
    const el = audioRef.current;
    if (!el) return;

    try {
      setStatus('Cargando…');
      // Garantiza el src correcto
      if (el.src !== stream.url) el.src = stream.url;

      await el.play(); // requiere click del usuario (ok)
    } catch (e) {
      setStatus(
        'El navegador bloqueó la reproducción. Haz click nuevamente y verifica que el link sea un stream directo.'
      );
    }
  }

  function handlePause() {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
  }

  function handleStop() {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setIsPlaying(false);
    setStatus('Detenido');
  }

  const Shell = compact ? 'div' : Card;

  return (
    <Shell className={compact ? '' : 'p-6'}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[rgb(var(--smg-soft))]" />
          <div>
            <div className="text-sm font-black">{stream.name}</div>
            <div className="mt-1 text-xs text-black/60">
              Estado: <span className="font-bold">{status}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {isPlaying ? (
            <Button variant="secondary" onClick={handlePause}>
              ⏸ Pausa
            </Button>
          ) : (
            <Button onClick={handlePlay}>
              ▶ Play
            </Button>
          )}

          <Button variant="secondary" onClick={handleStop}>
            ⏹ Stop
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              navigator.clipboard?.writeText(stream.url);
              setStatus('Link copiado');
              setTimeout(() => setStatus(isPlaying ? 'Reproduciendo' : 'Listo'), 1200);
            }}
          >
            🔗 Copiar link
          </Button>
        </div>
      </div>

      {/* Audio element oculto */}
      <audio ref={audioRef} preload="none" />
      {!compact ? (
        <div className="mt-4 text-xs text-black/60">
          Tip: Los navegadores bloquean autoplay. Aquí funciona con click. Link de prueba: <span className="font-bold">.mp3</span>
        </div>
      ) : null}
    </Shell>
  );
}
