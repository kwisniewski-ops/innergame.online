import '@/styles/globals.css'
import { Metadata } from 'next'
import Cursor from '@/components/Cursor'

export const metadata = {
  title: {
    default: 'INNERGAME — The Performance Philosophy Studio',
    template: '%s | INNERGAME',
  },
  description:
    'Kyle Wisniewski blends Stoic philosophy with Adlerian psychology to develop athletes and high-performers into the fullest version of themselves. T5 Method. Coaching. Writing.',
  keywords: [
    'sports performance coaching',
    'performance philosophy',
    'stoic philosophy athletes',
    'adlerian psychology',
    'T5 method',
    'Kyle Wisniewski',
    'inner game',
    'mental performance',
    'athlete coaching',
  ],
  authors: [{ name: 'Kyle Wisniewski', url: 'https://innergame.online' }],
  creator: 'Kyle Wisniewski',
  metadataBase: new URL('https://innergame.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://innergame.online',
    siteName: 'INNERGAME',
    title: 'INNERGAME — The Performance Philosophy Studio',
    description:
      'The premier performance philosophy studio. Where Stoic thought meets athletic excellence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INNERGAME — The Game Is Won Inside First',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INNERGAME — The Game Is Won Inside First',
    description:
      'The premier performance philosophy studio. Stoic philosophy meets athletic excellence.',
    creator: '@kylew_ig',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Montserrat:wght@200;300;400;500&family=IM+Fell+English:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
