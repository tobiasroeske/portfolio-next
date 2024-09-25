import type { Metadata } from 'next'
import './globals.css'
import { Karla, Fira_Code } from 'next/font/google'
import { ny } from '@/lib/utils'
import Header from '@/components/site-header'

const fontKarla = Karla({
  subsets: ['latin'],
  variable: '--font-karla'
})

const fontFira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira'
})

export const metadata: Metadata = {
  title: 'Tobias Roeske - Frontend Developer',
  description: 'Tobias Roeske - Frontend Developer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={ny(
          'bg.background, min-h-screen antialiased',
          fontKarla.variable,
          fontFira.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
