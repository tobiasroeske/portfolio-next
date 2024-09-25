import TranslationsProvider from '@/components/translation-provider'
import initTranslations from '@/i18n/server'

const i18nNamespaces = ['landing', 'common']

interface PageProps {
  params: {
    locale: any
  }
}

export default async function Page({ params: { locale } }: PageProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <h1>{t('header')}</h1>
      </TranslationsProvider>
    </>
  )
}
