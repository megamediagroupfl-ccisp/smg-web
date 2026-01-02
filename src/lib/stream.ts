export const RADIO_STREAM_URL =
  process.env.NEXT_PUBLIC_RADIO_STREAM_URL?.trim() || '';

export const LIVE_YOUTUBE_ID =
  process.env.NEXT_PUBLIC_LIVE_YOUTUBE_ID?.trim() || '';

export function isLikelyAudioStream(url: string) {
  const u = (url || '').toLowerCase();
  return (
    u.endsWith('.mp3') ||
    u.endsWith('.aac') ||
    u.endsWith('.m3u8') ||
    u.endsWith('.m3u') ||
    u.includes('stream')
  );
}
