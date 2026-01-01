'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { RADIO_STREAM_URL } from '@/lib/stream';

type Props = {
  compact?: boolean;
};

export default function AudioPlayer({ compact }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<string>('Ready');
  const [errorHint, setErrorHint] = useState<string | null>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const onCanPlay = () => {
      setIsReady(true);
      setStatus('Ready to play');
      setErrorHint(null);
    };

    const onPlay = () => {
      setIsPlaying(true);
      setStatus('Playing');
      setErrorHint(null);
    };

    const onPause = () => {
      setIsPlaying(false);
      setStatus('Paused');
    };

    const onWaiting = () => setStatus('Buffering...');
    const onStalled = () => setStatus('Stalled...');
    const onEnded = () => {
      setIsPlaying(false);
      setStatus('Ended');
    };

    const onError = () => {
      setIsPlaying(false);
      setIsReady(false);
      setStatus('Error');
      setErrorHint(
        'El stream no parece ser un audio directo (mp3/aac/m3u8) o está bloqueado por CORS/codec.'
      );
    };

    a.addEventListener('canplay', onCanPlay);
    a.addEventListener('play', onPlay);
    a.addEventListener('pause', onPause);
    a.addEventListener('waiting', onWaiting);
    a.addEventListener('stalled', onStalled);
    a.addEventListener('ended', onEnded);
    a.addEventListener('error', onError);

    return () => {
      a.removeEventListener('canplay', onCanPlay);
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', onPause);
      a.removeEventListener('waiting', onWaiting);
      a.removeEventListener('stalled', onStalled);
      a.removeEventListener('ended', onEnded);
      a.removeEventListener('error', onError);
    };
  }, []);

  async function toggle() {
    const a = audioRef.current;
    if (!a) return;

    setErrorHint(null);

    // IMPORTANT: no autoplay. Only in response to click.
    try {
      if (a.paused) {
        setStatus('Starting...');
        await a.play(); // this must be inside click
      } else {
        a.pause();
      }
    } catch (err: any) {
      setIsPlaying(false);
      setStatus('Blocked');
      setErrorHint(
        'El navegador bloqueó la reproducción. Asegúrate de dar click en Play y que el link sea un stream de audio directo.'
      );
    }
  }

  function stop() {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setIsPlaying(false);
    setStatus('Stopped');
  }

  return (
    <div className={compact ? 'flex items-center justify-between gap-3' : 'space-y-3'}>
      {/* Hidden audio element - no autoplay */}
      <audio
        ref={audioRef}
        preload="none"
        src={RADIO_STREAM_URL}
        playsInline
        // NO autoplay attribute
      />

      <div className={compact ? 'flex items-center gap-3' : ''}>
        <div className="text-sm font-black">SMG Radio — Live</div>
        <div className="text-xs text-black/60">{status}</div>
      </div>

      <div className={compact ? 'flex items-center gap-2' : 'flex flex-wrap gap-2'}>
        <Button onClick={toggle}>{isPlaying ? '⏸ Pause' : '▶ Play Live'}</Button>
        <Button variant="secondary" onClick={stop}>
          ⏹ Stop
        </Button>
        <Button
          variant="secondary"
          onClick={() => window.open(RADIO_STREAM_URL, '_blank', 'noopener,noreferrer')}
        >
          🔗 Abrir stream
        </Button>
      </div>

      {errorHint ? (
        <div className="text-xs text-red-600">
          {errorHint}
          <div className="mt-1 text-black/60">
            Tip: El enlace debe terminar en algo como <b>.mp3</b>, <b>.aac</b> o <b>.m3u8</b>.
          </div>
        </div>
      ) : null}
    </div>
  );
}
