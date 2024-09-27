'use client'
import Link from 'next/link'
import Image from 'next/image'
import ToggleButton from './ui/toggle-button'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '@/config/siteConfig'

function Nav({ className }: { className?: string }) {
  const { t } = useTranslation()
  const navLinks = [
    { title: t('common:about_me'), path: '/' },
    { title: 'Skills', path: '/' },
    { title: t('common:projects'), path: '/' }
  ]

  return (
    <div
      className={`${className} items-center justify-between px-10 py-12 2xl:px-4`}
    >
      <nav className="font-fira">
        <ul className="flex gap-6">
          <li>
            <ToggleButton />
          </li>
          {navLinks.map(link => (
            <li key={link.title} className="group flex flex-col items-center">
              <Link href={link.path} className="group-hover:text-white">
                {link.title}
              </Link>
              <div className="h-1 w-1 rounded-full bg-primary opacity-0 transition group-hover:opacity-100"></div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <Image
          src={`/static/${siteConfig.logoPath}`}
          alt="Logo"
          width={48}
          height={48}
        />
        <p className="text-4xl font-bold text-primary">{siteConfig.author}</p>
      </div>
    </div>
  )
}

export default Nav
