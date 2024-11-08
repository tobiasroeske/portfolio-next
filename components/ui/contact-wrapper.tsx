import Link from 'next/link'
import React from 'react'
import { Icons } from '../icons/icons'
import { siteConfig } from '@/config/siteConfig'
import CustomLink from './cutstom-link'

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
    <div className="mt-6 flex h-[336px] w-full items-start justify-between">
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
            <CustomLink
              key={index}
              href={href}
              variant="row"
              className="relative flex items-center transition-all"
            >
              <Icon className="transition-all group-hover:fill-white" />
            </CustomLink>
          ))}
        </div>
        <div className="h-full w-[1px] bg-primary"></div>
      </div>
    </div>
  )
}
export default ContactWrapper
