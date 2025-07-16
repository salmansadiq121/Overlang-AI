import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Quiz Wise Insight - AI Health Platform',
    template: '%s | Quiz Wise Insight'
  },
  description: 'Advanced AI-powered health assessment platform providing personalized recommendations through interactive chat-based quizzes.',
  keywords: [
    'health assessment',
    'AI health platform',
    'personalized recommendations',
    'wellness quiz',
    'health insights',
    'medical assessment',
    'health analytics'
  ],
  authors: [{ name: 'Overang AI Health Platform', url: 'https://overang.ai' }],
  creator: 'Overang AI Health Platform',
  publisher: 'Overang AI Health Platform',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quiz-wise-insight.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quiz-wise-insight.vercel.app',
    title: 'Quiz Wise Insight - AI Health Platform',
    description: 'Get personalized health recommendations through our advanced AI-powered assessment platform with interactive chat interface.',
    siteName: 'Quiz Wise Insight',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quiz Wise Insight - AI Health Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiz Wise Insight - AI Health Platform',
    description: 'Get personalized health recommendations through our advanced AI-powered assessment platform.',
    images: ['/og-image.png'],
    creator: '@overang_ai',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'health',
  classification: 'Health & Wellness',
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={cn(inter.variable, jetbrainsMono.variable)}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Quiz Wise Insight" />
        <meta name="application-name" content="Quiz Wise Insight" />
        <meta name="msapplication-TileColor" content="#5b7fff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}