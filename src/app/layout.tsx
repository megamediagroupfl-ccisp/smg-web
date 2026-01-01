import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: 'Sport Music Group',
    template: '%s | Sport Music Group',
  },
  description: 'Music that moves the world of sports.',
  applicationName: 'Sport Music Group',
  metadataBase: new URL('http://localhost:3000'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Sport Music Group',
    description: 'Music that moves the world of sports.',
    type: 'website',
    url: 'http://localhost:3000',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
