import { siteConfig } from '@/config/siteConfig'
import { ny } from '@/lib/utils'
import React from 'react'

function BannerAnimation({ className }: { className?: string }) {
  const text = [
    'Frontend Developer',
    'Based in Munich',
    'Available for remote work',
    'Open to new opportunities',
    'Frontend Developer',
    `Based in ${siteConfig.city}`,
    'Available for remote work',
    'Open to new opportunities'
  ]

  return (
    <div
      style={
        {
          '--background': '#314743',
          '--width': 'calc(100vw - 5px'
        } as React.CSSProperties
      }
      className={ny(
        `z-20 flex w-[var(--width)] rotate-[-3deg] gap-10 overflow-hidden py-3 [background:var(--background)] md:gap-14 ${className}`
      )}
    >
      <div className="flex min-w-full shrink-0 animate-scroll items-center justify-start gap-10 md:gap-14">
        {text.map((text, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-10 whitespace-nowrap md:gap-14"
          >
            <span className="text-2xl text-primary md:text-3xl">{text}</span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
          </div>
        ))}
      </div>
      <div className="flex min-w-full shrink-0 animate-scroll items-center justify-start gap-10 md:gap-14">
        {text.map((text, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-10 whitespace-nowrap md:gap-14"
          >
            <span className="text-2xl text-primary md:text-3xl">{text}</span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannerAnimation
