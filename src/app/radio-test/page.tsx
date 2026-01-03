'use client';

import { useRef, useState } from 'react';

export default function RadioTestPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [msg, setMsg] = useState<string>('');

  const url = 'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one';

  async function play() {
    try {
      setMsg('');
      if (!audioRef.current) return;
      audioRef.current.src = url;
      audioRef.current.load();
      await audioRef.current.play();
      setMsg('✅ Reproduciendo');
    } catch (e: any) {
      setMsg(`❌ Error: ${e?.name || 'unknown'} — ${e?.message || 'no message'}`);
    }
  }

  function stop() {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setMsg('⏹️ Stop');
  }

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 22, fontWeight: 800 }}>Radio Test (HTML Audio)</h1>
      <p style={{ opacity: 0.75 }}>{url}</p>

      <div style={{ display: 'flex', gap: 8, margin: '12px 0' }}>
        <button onClick={play} style={{ padding: '10px 14px', fontWeight: 700 }}>
          ▶ Play
        </button>
        <button onClick={stop} style={{ padding: '10px 14px', fontWeight: 700 }}>
          ⏹ Stop
        </button>
      </div>

      <audio
        ref={audioRef}
        controls
        style={{ width: '100%' }}
        onError={() => setMsg('❌ onError fired (HTMLAudioElement)')}
        onPlaying={() => setMsg('✅ onPlaying event fired')}
        onWaiting={() => setMsg('⏳ onWaiting (buffering)')}
      />

      <div style={{ marginTop: 12, fontWeight: 700 }}>{msg}</div>
    </div>
  );
}
