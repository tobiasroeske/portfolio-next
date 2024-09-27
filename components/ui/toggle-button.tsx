import { i18nConfig } from '@/i18nConfig'
import { ny } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { useState, MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

function ToggleButton() {
  const { i18n } = useTranslation()
  const languages = i18nConfig.locales
  const currentLocale = i18n.language
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLocale)
  const router = useRouter()
  const currentPathname = usePathname()

  function handleLanguageChange(e: MouseEvent<HTMLDivElement>) {
    const newLocale = (e.target as HTMLDivElement).innerText.toLocaleLowerCase()
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `NEXT_LOCALE=${newLocale}; expires=${date.toUTCString()}; path=/`

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }
    router.refresh()
    toggleButton(e, newLocale)
  }

  function toggleButton(e: MouseEvent<HTMLDivElement>, newLocale: string) {
    e.stopPropagation()
    setSelectedLanguage(newLocale)
  }

  return (
    <div
      className={ny(
        `flex h-7 items-center rounded-[100px] border border-primary transition hover:border-white`
      )}
    >
      {languages.map((language, index) => (
        <div
          key={index}
          className={ny(
            `flex h-full cursor-pointer items-center rounded-[100px] px-3 text-center font-fira text-white transition ${selectedLanguage === language ? 'bg-primary' : 'bg-primary-50'}`
          )}
          onClick={e => handleLanguageChange(e)}
        >
          {language.toUpperCase()}
        </div>
      ))}
    </div>
  )
}

export default ToggleButton
