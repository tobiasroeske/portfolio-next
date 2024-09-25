import { siteConfig } from '@/config/siteConfig'
import { Icons } from './icons/icons'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './ui/modal'
import NavMobile from './nav-mobile'

export default function Header() {
  return (
    <header className="w-full">
      <NavMobile />
    </header>
  )
}
