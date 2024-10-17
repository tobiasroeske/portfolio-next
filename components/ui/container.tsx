import { ny } from '@/lib/utils'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}
function Container({ children, className }: ContainerProps) {
  return (
    <div
      style={
        {
          '--background': '#3DCFB61A'
        } as React.CSSProperties
      }
      className={ny(
        `flex flex-col items-center justify-center rounded-[30px] border border-primary px-8 py-6 [background:var(--background)] md:p-8 ${className}`
      )}
    >
      {children}
    </div>
  )
}

export default Container
