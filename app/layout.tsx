import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flexy Global - UI/UX Design Agency',
  description: 'Create your human-centric digital products with us. Flexy Global is a UI/UX design agency that will help you with your product launch, support and scale.',
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