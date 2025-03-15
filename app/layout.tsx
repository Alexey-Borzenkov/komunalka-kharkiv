import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Komunalka Kharkiv',
  description: 'Зручний інструмент для передачі показань лічильників комунальних послуг у Харкові',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
