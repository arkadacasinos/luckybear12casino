import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://luckybear-casino.example'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lucky Bear Casino — официальный сайт и рабочее зеркало',
  description: 'Lucky Bear Casino: официальный сайт, рабочее зеркало, мобильная версия и подробный гид по безопасной онлайн-игре.',
  keywords: ['lucky bear casino', 'luckybear casino', 'лаки бир казино', 'лакибир казино', 'luckybear casino зеркало', 'лаки бир казино официальный сайт'],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lucky Bear Casino — играйте по-крупному',
    description: 'Официальный сайт, рабочее зеркало и понятный гид Lucky Bear Casino.',
    url: siteUrl,
    siteName: 'Lucky Bear Casino',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: '/lucky-bear-hero.png', width: 1600, height: 900, alt: 'Lucky Bear Casino' }],
  },
  twitter: { card: 'summary_large_image', title: 'Lucky Bear Casino', description: 'Официальный сайт и рабочее зеркало Lucky Bear Casino.', images: ['/lucky-bear-hero.png'] },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#101211', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head />
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
