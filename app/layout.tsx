import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Echo — Where Thoughts Find Resonance',
  description: 'A poetic exploration of psychology and artificial intelligence, where thoughts find their perfect resonance.',
  keywords: 'AI, psychology, thoughts, resonance, artificial intelligence, mental health',
  authors: [{ name: 'AI Echo Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="gradient-bg">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}


