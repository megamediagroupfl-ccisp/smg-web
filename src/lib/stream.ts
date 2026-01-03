// D:\sport-music-group\smg-web\src\lib\stream.ts

export function getRadioStreamUrl(): string {
  return (process.env.NEXT_PUBLIC_RADIO_STREAM_URL || '').trim();
}

/**
 * Validador "suave":
 * - Acepta extensiones típicas
 * - Acepta endpoints Icecast/Shoutcast que no terminan en .mp3/.aac (ej: ...-128-aac)
 * - Acepta playlists .m3u/.pls (muchas radios publican así)
 */
export function isProbablyAudioStreamUrl(url: string): boolean {
  if (!url) return false;

  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return false;
  }

  if (!(u.protocol === 'https:' || u.protocol === 'http:')) return false;

  const path = (u.pathname || '').toLowerCase();

  // Extensiones comunes (directo o playlists)
  const hasKnownExt =
    path.endsWith('.mp3') ||
    path.endsWith('.aac') ||
    path.endsWith('.m4a') ||
    path.endsWith('.ogg') ||
    path.endsWith('.m3u8') ||
    path.endsWith('.m3u') ||
    path.endsWith('.pls');

  if (hasKnownExt) return true;

  // Muchos Icecast endpoints no tienen extensión (ej: chillits-128-aac)
  // Permitimos si parece "stream endpoint" (icecast/shoutcast)
  const host = (u.hostname || '').toLowerCase();
  const looksLikeIcecast =
    host.includes('ice') ||
    host.includes('stream') ||
    host.includes('radio') ||
    host.includes('soma') ||
    host.includes('icecast');

  // También si el path incluye patrones comunes
  const looksLikeStreamPath =
    path.includes('listen') ||
    path.includes('stream') ||
    path.includes('live') ||
    path.includes('ice') ||
    path.includes('radio') ||
    path.includes('aac') ||
    path.includes('mp3');

  return looksLikeIcecast && looksLikeStreamPath;
}
