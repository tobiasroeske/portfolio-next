import React from 'react'
import { ny } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface ButtonProps {
  submit?: boolean
  className?: string
  href?: string
  children: React.ReactNode
}

function AnimatedButton({ children, ...props }: ButtonProps) {
  const router = useRouter()
  function handleButtonClick() {
    if (props.href) {
      router.push(props.href)
    }
  }

  return (
    <button
      className={ny(
        `${props.className} group flex h-12 w-[168px] cursor-pointer items-center justify-center overflow-hidden rounded-[100px] border border-white p-6 text-lg leading-5 text-white transition hover:border-primary hover:text-primary`
      )}
      type={props.submit ? 'submit' : 'button'}
      {...props}
      onClick={handleButtonClick}
    >
      <div className="group-hover:animate-slide-in-out inline-block whitespace-nowrap">
        <span className="inline-block">{children}</span>
      </div>
    </button>
  )
}
export default AnimatedButton
