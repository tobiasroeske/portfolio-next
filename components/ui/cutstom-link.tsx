import { ny } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface CustomLinkProps {
  href: string
  children: React.ReactNode
  variant?: 'collumn' | 'row'
  className?: string
}

function CustomLink({
  href,
  children,
  variant = 'collumn',
  className
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={ny(
        `group flex items-center group-hover:text-white ${variant === 'row' ? 'flex-row justify-center gap-3' : 'flex-col'} ${className}`
      )}
    >
      {children}
      <div
        className={`rounded-full bg-primary opacity-0 transition-all group-hover:opacity-100 md:h-[6px] md:w-[6px] ${variant === 'row' && 'absolute right-[-12px]'}`}
      ></div>
    </Link>
  )
}

export default CustomLink
