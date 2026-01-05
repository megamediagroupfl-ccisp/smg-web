// D:\sport-music-group\smg-web\src\app\api\now-playing\route.ts
import { NextResponse } from 'next/server';

type NowPlaying = {
  station: string;
  isLive: boolean;
  artist: string;
  title: string;
  cover?: string; // URL o ruta /media/...
  listeners?: number;
  updatedAt: string; // ISO
};

// Demo rotativo para que “se sienta real”
const DEMO: Omit<NowPlaying, 'updatedAt'>[] = [
  {
    station: 'SMG Radio',
    isLive: true,
    artist: 'SDQ',
    title: 'Move the Game (Stadium Vibes)',
    cover: '/media/radio/covers/sdq-move-the-game.jpg',
    listeners: 128,
  },
  {
    station: 'SMG Radio',
    isLive: true,
    artist: 'SMG Editorial',
    title: 'Road to 2026 — Host Cities Mix',
    cover: '/media/radio/covers/road-to-2026.jpg',
    listeners: 214,
  },
  {
    station: 'SMG Radio',
    isLive: true,
    artist: 'World Cup Culture',
    title: 'Miami Fan Zone — Night Session',
    cover: '/media/radio/covers/miami-fanzone.jpg',
    listeners: 301,
  },
  {
    station: 'SMG Radio',
    isLive: true,
    artist: 'Stadium Classics',
    title: 'Anthem Set — Warm Up',
    cover: '/media/radio/covers/stadium-classics.jpg',
    listeners: 187,
  },
];

export async function GET() {
  const pick = DEMO[Math.floor(Date.now() / 10000) % DEMO.length]; // cambia cada 10s
  const payload: NowPlaying = {
    ...pick,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
