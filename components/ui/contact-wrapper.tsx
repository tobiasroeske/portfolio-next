import Link from 'next/link'
import React from 'react'
import { Icons } from '../icons/icons'
import { siteConfig } from '@/config/siteConfig'

interface LinkItem {
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

function ContactWrapper() {
  const links: LinkItem[] = [
    {
      href: siteConfig.mail,
      Icon: Icons.mail as React.ComponentType<React.SVGProps<SVGSVGElement>>
    },
    {
      href: siteConfig.gitHub,
      Icon: Icons.gitHub as React.ComponentType<React.SVGProps<SVGSVGElement>>
    },
    {
      href: siteConfig.linkedIn,
      Icon: Icons.linkedIn as React.ComponentType<React.SVGProps<SVGSVGElement>>
    }
  ]

  return (
    <div className="mt-6 flex h-[336px] w-full items-start justify-between px-4 lg:px-0">
      <div className="flex h-full flex-col items-center gap-6">
        <Link
          href="#about-me"
          className="group relative flex h-12 w-[30px] cursor-pointer items-center justify-center rounded-3xl border-2 border-primary transition duration-500"
        >
          <span className="group-hover:translate-y-2 group-hover:text-primary">
            ↓
          </span>
        </Link>
        <div className="h-full w-[1px] bg-primary"></div>
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-6 pt-10">
        <div className="flex flex-col items-center justify-center gap-3">
          {links.map(({ href, Icon }, index) => (
            <Link
              key={index}
              href={href}
              className="group relative flex items-center transition-all"
            >
              <Icon className="transition-all group-hover:fill-white" />
              <div className="absolute right-[-12px] h-1 w-1 rounded-full bg-primary opacity-0 transition-all group-hover:opacity-100 md:h-[6px] md:w-[6px]"></div>
            </Link>
          ))}
        </div>
        <div className="h-full w-[1px] bg-primary"></div>
      </div>
    </div>
  )
}
export default ContactWrapper
