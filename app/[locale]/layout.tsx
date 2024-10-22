import type { Metadata } from 'next'
import '../../styles/globals.css'
import { Karla, Fira_Code } from 'next/font/google'
import { ny } from '@/lib/utils'
import Header from '@/components/site-header'
import TranslationsProvider from '@/components/translation-provider'
import initTranslations from '@/i18n/server'
import { i18nNamespaces } from '@/i18n/i18nNamespaces'
import MouseShadowEffect from '@/components/ui/mouse-shadow-effect'

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

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <html lang="en">
        <body
          className={ny(
            'bg.background, min-h-screen antialiased',
            fontKarla.variable,
            fontFira.variable
          )}
        >
          <MouseShadowEffect />
          <Header />
          <main className="px-4 lg:px-14 2xl:px-4">{children}</main>
        </body>
      </html>
    </TranslationsProvider>
  )
}
