'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/ui/Button';

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'stopped' | 'error';

export default function AudioPlayer({
  compact,
}: {
  compact?: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const streamUrl = useMemo(() => {
    return process.env.NEXT_PUBLIC_RADIO_STREAM_URL || '';
  }, []);

  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const canUse = !!streamUrl;

  // Toggle Play/Stop (un solo botón)
  const togglePlayStop = async () => {
    const el = audioRef.current;
    if (!el) return;

    // Si está reproduciendo -> STOP (pausa + vuelve al inicio)
    if (!el.paused && !el.ended) {
      el.pause();
      try {
        el.currentTime = 0;
      } catch {
        // algunos streams no permiten currentTime; no pasa nada
      }
      setStatus('stopped');
      setErrorMsg('');
      return;
    }

    // Si no está reproduciendo -> PLAY
    setStatus('loading');
    setErrorMsg('');

    try {
      // Forzamos carga antes de play (ayuda a algunos streams)
      el.load();

      const p = el.play();
      if (p && typeof p.then === 'function') {
        await p;
      }
      // Ojo: el estado real lo consolidan los eventos "playing"/"pause"
      // pero dejamos un status provisional si el navegador tarda:
      setStatus('playing');
      setErrorMsg('');
    } catch (err: any) {
      // Esto pasa por autoplay bloqueado o stream incompatible
      setStatus('error');
      setErrorMsg(
        'No se pudo reproducir el stream. Verifica que sea un enlace directo (.mp3/.aac).'
      );
    }
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onPlaying = () => {
      setStatus('playing');
      setErrorMsg('');
    };

    const onPause = () => {
      // Si el usuario pausó/stop
      if (status !== 'error') setStatus('paused');
    };

    const onWaiting = () => {
      setStatus('loading');
    };

    const onError = () => {
      // A veces algunos streams disparan error al inicio pero luego “enganchan”.
      // No vamos a “clavar” error si luego llega playing.
      setStatus('error');
      setErrorMsg(
        'No se pudo reproducir el stream. Verifica que sea un enlace directo (.mp3/.aac).'
      );
    };

    el.addEventListener('playing', onPlaying);
    el.addEventListener('pause', onPause);
    el.addEventListener('waiting', onWaiting);
    el.addEventListener('error', onError);

    return () => {
      el.removeEventListener('playing', onPlaying);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('waiting', onWaiting);
      el.removeEventListener('error', onError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isPlaying = (() => {
    const el = audioRef.current;
    return el ? !el.paused && !el.ended : status === 'playing';
  })();

  const label = !canUse
    ? 'Configurar'
    : isPlaying
    ? '⏹ Stop'
    : status === 'loading'
    ? '⏳ Cargando...'
    : '▶ Play';

  return (
    <div className={compact ? 'flex items-center justify-between gap-3' : 'space-y-3'}>
      {/* Audio element */}
      <audio ref={audioRef} src={streamUrl} preload="none" />

      <div className={compact ? 'min-w-0' : ''}>
        <div className="text-sm font-black">Radio</div>
        <div className="mt-1 text-xs text-black/60 break-all">
          {canUse ? streamUrl : 'Configura NEXT_PUBLIC_RADIO_STREAM_URL en .env.local'}
        </div>
        <div className="mt-1 text-xs text-black/60">Estado: {status}</div>
        {errorMsg ? (
          <div className="mt-1 text-xs font-semibold text-red-600">{errorMsg}</div>
        ) : null}
      </div>

      <div className={compact ? 'shrink-0' : ''}>
        <Button
          onClick={togglePlayStop}
          disabled={!canUse || status === 'loading'}
        >
          {label}
        </Button>
      </div>
    </div>
  );
}
