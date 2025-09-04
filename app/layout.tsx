import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CoArt Studio - Digital Agency',
  description: 'Create your human-centric digital products with us. CoArt Studio is a digtal agency that will help you with your product, brand, and scale.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-stone-50">
        {children}
      </body>
    </html>
  )
}