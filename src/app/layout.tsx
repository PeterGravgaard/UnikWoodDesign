import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer-new'
import { Providers } from '@/components/providers/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: {
    default: 'UnikWood - Håndlavede Træmøbler af Høj Kvalitet',
    template: '%s | UnikWood'
  },
  description: 'Oplev vores unikke kollektion af håndlavede plankeborde, sofaborde og træmøbler. Fremstillet af de fineste træsorter med fokus på bæredygtighed og dansk håndværk.',
  keywords: ['træmøbler', 'plankeborde', 'sofaborde', 'håndlavet', 'valnød', 'akacie', 'bæredygtige møbler', 'danske møbler'],
  authors: [{ name: 'UnikWood' }],
  creator: 'UnikWood',
  publisher: 'UnikWood',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unikwood.dk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UnikWood - Håndlavede Træmøbler af Høj Kvalitet',
    description: 'Oplev vores unikke kollektion af håndlavede plankeborde, sofaborde og træmøbler.',
    url: 'https://unikwood.dk',
    siteName: 'UnikWood',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UnikWood - Håndlavede Træmøbler',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnikWood - Håndlavede Træmøbler af Høj Kvalitet',
    description: 'Oplev vores unikke kollektion af håndlavede plankeborde, sofaborde og træmøbler.',
    images: ['/images/og-image.jpg'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-neutral-50">
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}