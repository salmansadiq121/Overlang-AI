import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiz Wise Insight - AI Health Platform',
  description: 'Personalized health recommendations through AI-powered assessments',
  authors: [{ name: 'Overang AI Health Platform' }],
  keywords: ['health', 'AI', 'quiz', 'wellness', 'personalized recommendations'],
  openGraph: {
    title: 'Quiz Wise Insight - AI Health Platform',
    description: 'Get personalized health recommendations through our AI-powered assessment platform',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiz Wise Insight - AI Health Platform',
    description: 'Get personalized health recommendations through our AI-powered assessment platform',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}