'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

export default function AudioPlayer({ compact = false }: { compact?: boolean }) {
  const streamUrl = useMemo(
    () => process.env.NEXT_PUBLIC_RADIO_STREAM_URL || '',
    []
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const showStop = status === 'playing' || status === 'loading';

  useEffect(() => {
    // Crear audio una sola vez
    audioRef.current = new Audio();
    audioRef.current.preload = 'none';
    audioRef.current.crossOrigin = 'anonymous';

    const a = audioRef.current;

    const onPlaying = () => setStatus('playing');
    const onWaiting = () => setStatus('loading');
    const onPause = () => setStatus('paused');
    const onEnded = () => setStatus('idle');
    const onError = () => {
      setStatus('error');
      setErrorMsg('No se pudo reproducir el stream. Verifica que sea un enlace directo (.mp3/.aac/.m3u8).');
    };

    a.addEventListener('playing', onPlaying);
    a.addEventListener('waiting', onWaiting);
    a.addEventListener('pause', onPause);
    a.addEventListener('ended', onEnded);
    a.addEventListener('error', onError);

    return () => {
      a.pause();
      a.src = '';
      a.load();
      a.removeEventListener('playing', onPlaying);
      a.removeEventListener('waiting', onWaiting);
      a.removeEventListener('pause', onPause);
      a.removeEventListener('ended', onEnded);
      a.removeEventListener('error', onError);
    };
  }, []);

  async function handlePlay() {
    setErrorMsg('');

    if (!streamUrl) {
      setStatus('error');
      setErrorMsg('Configura NEXT_PUBLIC_RADIO_STREAM_URL en .env.local y reinicia npm run dev.');
      return;
    }

    const a = audioRef.current;
    if (!a) return;

    try {
      // Fuerza el estado a loading inmediatamente para que aparezca STOP al instante
      setStatus('loading');

      // Si cambiaste el stream, asegúrate de setear src
      if (a.src !== streamUrl) {
        a.src = streamUrl;
      }

      // Intentar reproducir
      await a.play();
      // El evento "playing" pondrá status=playing
    } catch (e) {
      setStatus('error');
      setErrorMsg('El navegador bloqueó la reproducción. Haz click nuevamente en Play o revisa el stream.');
    }
  }

  function handleStop() {
    const a = audioRef.current;
    if (!a) return;

    a.pause();
    // reset duro para streams
    a.src = '';
    a.load();
    setStatus('idle');
    setErrorMsg('');
  }

  // UI compact (Home mini player)
  if (compact) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[rgb(var(--smg-soft))]" />
            <div>
              <div className="text-sm font-black">SMG Radio — Live</div>
              <div className="mt-1 text-xs text-black/60">
                {streamUrl ? 'Stream listo (demo)' : 'Configura NEXT_PUBLIC_RADIO_STREAM_URL en .env.local'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {!showStop ? (
              <Button onClick={handlePlay}>▶ Play</Button>
            ) : (
              <Button variant="secondary" onClick={handleStop}>
                ⏹ Stop
              </Button>
            )}

            <Link href="/radio">
              <Button variant="secondary">Ir a Radio</Button>
            </Link>
          </div>
        </div>

        {errorMsg ? (
          <div className="text-xs font-semibold text-[rgb(var(--smg-red))]">
            {errorMsg}
          </div>
        ) : null}
      </div>
    );
  }

  // UI completa (/radio)
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-black">Radio</div>
          <div className="mt-1 text-xs text-black/60">
            {streamUrl ? streamUrl : 'Configura NEXT_PUBLIC_RADIO_STREAM_URL en .env.local'}
          </div>
          <div className="mt-2 text-xs text-black/60">
            Estado: <span className="font-bold">{status}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {!showStop ? (
            <Button onClick={handlePlay}>▶ Play</Button>
          ) : (
            <Button variant="secondary" onClick={handleStop}>
              ⏹ Stop
            </Button>
          )}
        </div>
      </div>

      {errorMsg ? (
        <div className="mt-3 text-xs font-semibold text-[rgb(var(--smg-red))]">
          {errorMsg}
        </div>
      ) : null}
    </Card>
  );
}
