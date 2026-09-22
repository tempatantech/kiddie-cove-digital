import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  weight: ['500', '600', '700', '800'],
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Kiddie Cove | Premium Play School in Iskandar Puteri, Johor',
  description:
    'Kiddie Cove is a boutique, European-inspired play school in Iskandar Puteri, Johor. Reggio Emilia and Scandinavian forest-school approaches, small classes, and uncompromising child privacy for families across Johor Bahru.',
  keywords: [
    'kindergarten Iskandar Puteri',
    'play school Johor Bahru',
    'premium preschool Johor',
    'Reggio Emilia Malaysia',
    'Kiddie Cove',
  ],
  openGraph: {
    title: 'Kiddie Cove | Where Little Explorers Grow',
    description:
      'A boutique European-inspired play school in Iskandar Puteri where children learn through play — and their privacy is protected like family.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#14545c',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${baloo.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
