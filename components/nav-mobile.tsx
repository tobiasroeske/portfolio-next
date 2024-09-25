'use client'
import { siteConfig } from '@/config/siteConfig'
import Link from 'next/link'
import { Icons } from './icons/icons'
import Modal from './ui/modal'
import { useState } from 'react'
import Image from 'next/image'

function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prev => !prev)
  }
  return (
    <nav className="relative flex w-full items-center justify-between px-4 py-8">
      <Link href="/" className="cursor-pointer">
        <Image
          src={`/static/${siteConfig.logoPath}`}
          alt="Logo"
          width={35}
          height={35}
        />
      </Link>
      <div className="cursor-pointer" onClick={toggleMenu}>
        <Icons.burgerMenu />
      </div>
      {isMenuOpen && <Modal setOpen={toggleMenu} />}
    </nav>
  )
}

export default NavMobile
