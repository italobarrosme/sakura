import '@/styles/globals.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-lato',
})

type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Cards - Perfil',
  description: 'Cards - Perfil',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={lato.className}>
      <body className="flex min-h-screen items-center justify-center bg-brand-secondary">
        <main>{children}</main>
      </body>
    </html>
  )
}
