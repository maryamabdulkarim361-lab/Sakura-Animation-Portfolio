import type { Metadata, Viewport } from 'next';
import '@fontsource/bebas-neue/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/jetbrains-mono/400.css';
import './globals.css';
import { PROFILE } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/maryamabdulkarim361-lab'),
  title: `${PROFILE.name} · ${PROFILE.headline}`,
  description: PROFILE.heroIntro,
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  openGraph: {
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.heroIntro,
    url: PROFILE.github,
    siteName: `${PROFILE.name} Portfolio`,
    images: [
      {
        url: '/stills/face.jpg',
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} - ${PROFILE.headline}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = { themeColor: '#000000', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
