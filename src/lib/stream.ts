export type StreamSource = {
  id: string;
  name: string;
  url: string;
  type: 'audio/mpeg' | 'audio/aac' | 'application/vnd.apple.mpegurl';
};

export const STREAMS: StreamSource[] = [
  {
    id: 'smg-demo-mp3',
    name: 'SMG Radio (Demo MP3)',
    url: 'https://icecast.omroep.nl/radio1-bb-mp3',
    type: 'audio/mpeg',
  },
];

export function getDefaultStream(): StreamSource {
  return STREAMS[0];
}
