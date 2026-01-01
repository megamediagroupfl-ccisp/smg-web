export type Locale = 'es' | 'en';

const STORAGE_KEY = 'smg_locale';

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  if (v === 'es' || v === 'en') return v;
  return null;
}

export function storeLocale(locale: Locale) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, locale);
}

export const copy = {
  es: {
    brand: 'Sport Music Group',
    nav: {
      worldcup: 'Mundial 2026',
      live: 'En Vivo',
      radio: 'Radio',
      podcast: 'Podcast',
    },
    actions: {
      search: 'Buscar',
      profile: 'Perfil',
      watchLive: 'Ver en Vivo',
      listenRadio: 'Escuchar Radio',
      hostCities: 'Sedes',
      trivia: 'Trivia',
    },
    hero: {
      title: 'Music that moves the world of sports',
      desc:
        'Medio deportivo + música original. Radio 24/7, En Vivo, Podcast y cobertura del camino a la Copa Mundial 2026.',
      chips: '70% contenido Mundial • Radio 24/7 • En Vivo • Podcast • SDQ Originals',
      liveNow: 'EN VIVO',
      liveCardTitle: 'World Cup Talk — Camino a 2026',
      liveCardDesc: 'Debate + música • invitado semanal • clips para redes',
      nextLive: 'PRÓXIMO EN VIVO',
      nextLiveTitle: 'Entrevista + Trivia Mundial',
    },
    ticker: {
      label: 'Ticker',
      radio: 'Radio',
      nowPlaying: 'SMG Radio — Stadium Vibes (demo) 24/7',
      open: 'Abrir',
    },
  },
  en: {
    brand: 'Sport Music Group',
    nav: {
      worldcup: 'World Cup 2026',
      live: 'Live',
      radio: 'Radio',
      podcast: 'Podcast',
    },
    actions: {
      search: 'Search',
      profile: 'Profile',
      watchLive: 'Watch Live',
      listenRadio: 'Listen Radio',
      hostCities: 'Host Cities',
      trivia: 'Trivia',
    },
    hero: {
      title: 'Music that moves the world of sports',
      desc:
        'Sports media + original music. Radio 24/7, Live shows, Podcast and full Road to World Cup 2026 coverage.',
      chips: '70% World Cup content • Radio 24/7 • Live • Podcast • SDQ Originals',
      liveNow: 'LIVE NOW',
      liveCardTitle: 'World Cup Talk — Road to 2026',
      liveCardDesc: 'Debate + music • weekly guest • social-first clips',
      nextLive: 'NEXT LIVE',
      nextLiveTitle: 'Interview + World Cup Trivia',
    },
    ticker: {
      label: 'Ticker',
      radio: 'Radio',
      nowPlaying: 'SMG Radio — Stadium Vibes (demo) 24/7',
      open: 'Open',
    },
  },
} as const;

export function t<L extends Locale>(locale: L) {
  return copy[locale];
}
