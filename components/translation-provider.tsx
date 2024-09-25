'use client'

import { I18nextProvider } from 'react-i18next'
import initTranslations from '@/i18n/server'
import { createInstance } from 'i18next'

import { ReactNode } from 'react'
import React from 'react'

interface TranslationsProviderProps {
  children: ReactNode
  locale: string
  namespaces: string[]
  resources: Record<string, any>
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: TranslationsProviderProps) {
  const i18n = createInstance()

  initTranslations(locale, namespaces, i18n, resources)

  return <I18nextProvider i18n={i18n as any}>{children}</I18nextProvider>
}
