// src/app/api/now-playing/route.ts
import { NextResponse } from 'next/server';

type NowPlaying = {
  station: string;
  live: boolean;
  title: string;
  artist: string;
  show: string;
  cover: string; // URL pública en /public
  startedAt: string; // ISO
  listeners: number;
};

const TRACKS: Array<Omit<NowPlaying, 'startedAt' | 'listeners'>> = [
  {
    station: 'SMG Radio',
    live: true,
    title: 'Stadium Vibes (Demo)',
    artist: 'SDQ',
    show: 'Morning Sports Mix',
    cover: '/media/radio/covers/cover-01.jpg',
  },
  {
    station: 'SMG Radio',
    live: true,
    title: 'Road to 2026 (Demo)',
    artist: 'SMG Editorial',
    show: 'World Cup Midday',
    cover: '/media/radio/covers/cover-02.jpg',
  },
  {
    station: 'SMG Radio',
    live: true,
    title: 'Halftime Energy (Demo)',
    artist: 'SDQ',
    show: 'SDQ Spotlight',
    cover: '/media/radio/covers/cover-03.jpg',
  },
  {
    station: 'SMG Radio',
    live: true,
    title: 'Night Stadium (Demo)',
    artist: 'SMG Radio',
    show: 'Night Stadium Vibes',
    cover: '/media/radio/covers/cover-04.jpg',
  },
];

export function GET() {
  const idx = Math.floor(Date.now() / 15000) % TRACKS.length; // rota cada 15s
  const base = TRACKS[idx];

  const payload: NowPlaying = {
    ...base,
    startedAt: new Date().toISOString(),
    listeners: 120 + (Math.floor(Date.now() / 1000) % 35),
  };

  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
