'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

function looksLikePlaylist(url: string) {
  const u = url.toLowerCase();
  return u.endsWith('.pls') || u.endsWith('.m3u') || u.endsWith('.m3u8?') || u.includes('.pls?') || u.includes('.m3u?');
}

/**
 * No bloqueamos por extensión, porque muchos streams válidos NO terminan en .mp3/.aac
 * (ej: .../chillits-128-mp3). Intentamos reproducir y si falla mostramos error real.
 */
function normalizeUrl(raw: string) {
  return (raw || '').trim();
}

export default function AudioPlayer({
  compact = false,
  title = 'Radio',
  defaultUrl = 'https://ice5.somafm.com/chillits-128-mp3',
}: {
  compact?: boolean;
  title?: string;
  defaultUrl?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [url, setUrl] = useState<string>(defaultUrl);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const safeUrl = useMemo(() => normalizeUrl(url), [url]);

  // Crear el elemento <audio> una sola vez
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = 'none';
    }

    const a = audioRef.current;

    const onPlaying = () => {
      setStatus('playing');
      setErrorMsg('');
    };
    const onPause = () => {
      // pause también se dispara cuando hacemos stop manual, validamos estado actual
      setStatus((prev) => (prev === 'playing' || prev === 'loading' ? 'paused' : prev));
    };
    const onWaiting = () => setStatus('loading');
    const onError = () => {
      setStatus('error');
      setErrorMsg('No se pudo reproducir el stream. Prueba otro enlace o verifica que sea un stream directo.');
    };

    a.addEventListener('playing', onPlaying);
    a.addEventListener('pause', onPause);
    a.addEventListener('waiting', onWaiting);
    a.addEventListener('error', onError);

    return () => {
      a.removeEventListener('playing', onPlaying);
      a.removeEventListener('pause', onPause);
      a.removeEventListener('waiting', onWaiting);
      a.removeEventListener('error', onError);
    };
  }, []);

  const isPlaying = status === 'playing';
  const isLoading = status === 'loading';

  async function handlePlay() {
    const a = audioRef.current;
    if (!a) return;

    const target = safeUrl;

    if (!target) {
      setStatus('error');
      setErrorMsg('Debes colocar un enlace de streaming válido.');
      return;
    }

    // Aviso útil (no bloquea): PLS/M3U son listas; algunos navegadores no las reproducen directo.
    if (looksLikePlaylist(target)) {
      setStatus('error');
      setErrorMsg(
        'Ese enlace parece una lista (.pls/.m3u). Usa un enlace directo del servidor (como ice*.somafm.com/...).',
      );
      return;
    }

    try {
      setStatus('loading');
      setErrorMsg('');

      // Importante: asignar src en el click (gesto del usuario)
      if (a.src !== target) a.src = target;

      a.load();
      const p = a.play();

      // En algunos navegadores, play() devuelve Promise
      if (p && typeof (p as Promise<void>).then === 'function') {
        await p;
      }

      // Si no dispara "playing" rápido, igual dejamos loading y el evento lo actualizará
    } catch (err: any) {
      setStatus('error');

      const name = err?.name || '';
      if (name === 'NotAllowedError') {
        setErrorMsg(
          'El navegador bloqueó la reproducción automática. Da click otra vez en Play (o habilita audio para este sitio).',
        );
      } else if (name === 'NotSupportedError') {
        setErrorMsg('El stream no es compatible con tu navegador. Prueba otro enlace (MP3/AAC).');
      } else {
        setErrorMsg(
          'No se pudo reproducir el stream. Verifica que sea un stream directo (no playlist) y que esté activo.',
        );
      }
    }
  }

  function handleStop() {
    const a = audioRef.current;
    if (!a) return;

    a.pause();
    a.currentTime = 0;

    // Opcional: liberar src para “resetear” totalmente
    // a.src = '';
    setStatus('paused');
    setErrorMsg('');
  }

  function handleToggle() {
    if (isPlaying || isLoading) handleStop();
    else handlePlay();
  }

  return (
    <Card className={compact ? 'p-4' : 'p-6'}>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="text-sm font-black">{title}</div>
          <div className="mt-1 text-xs text-black/60 break-all">{safeUrl}</div>
          <div className="mt-1 text-xs font-semibold text-black/60">Estado: {status}</div>

          {/* ✅ Error SOLO cuando status === 'error' */}
          {status === 'error' && errorMsg ? (
            <div className="mt-2 text-xs font-semibold text-red-600">{errorMsg}</div>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={handleToggle} variant={isPlaying || isLoading ? 'secondary' : 'primary'}>
            {isPlaying || isLoading ? '⏹ Stop' : '▶ Play'}
          </Button>

          {/* Campo para cambiar URL rápido (opcional) */}
          <Button
            variant="secondary"
            onClick={() => {
              // ejemplo rápido para probar el link que tú pasaste
              setUrl('https://ice5.somafm.com/chillits-128-mp3');
              setStatus('idle');
              setErrorMsg('');
            }}
          >
            Probar SomaFM
          </Button>
        </div>
      </div>
    </Card>
  );
}
