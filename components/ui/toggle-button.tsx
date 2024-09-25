import { i18nConfig } from '@/i18nConfig'
import { ny } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { useState, MouseEvent, use } from 'react'
import { useTranslation } from 'react-i18next'

function ToggleButton() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('de')
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
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
    toggleButton(e)
  }

  function toggleButton(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    selectedLanguage === 'de'
      ? setSelectedLanguage('en')
      : setSelectedLanguage('de')
  }

  useState(() => {
    if (currentLocale === i18nConfig.defaultLocale) {
      setSelectedLanguage('de')
    } else {
      setSelectedLanguage('en')
    }
  })

  return (
    <div
      className={ny(
        `flex items-center border-primary border rounded-[100px] h-7`
      )}
    >
      <div
        className={ny(
          `text-center px-3 transition rounded-[100px] font-fira text-white cursor-pointer ${selectedLanguage === 'de' ? 'bg-primary' : 'bg-primary-50'}`
        )}
        onClick={e => handleLanguageChange(e)}
      >
        DE
      </div>
      <div
        className={ny(
          `text-center px-3 rounded-[100px] transition font-fira text-white cursor-pointer ${selectedLanguage === 'en' ? 'bg-primary' : 'bg-primary-50'}`
        )}
        onClick={e => handleLanguageChange(e)}
      >
        EN
      </div>
    </div>
  )
}

export default ToggleButton
