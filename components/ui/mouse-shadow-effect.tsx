'use client'
import { useEffect, useState } from 'react'
import React from 'react'

function MouseShadowEffect() {
  const [shadowStyle, setShadowStyle] = useState<{ left: string; top: string }>(
    { left: '0', top: '0' }
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setShadowStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        left: shadowStyle.left,
        top: shadowStyle.top,
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        pointerEvents: 'none',
        filter: 'blur(30px)',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)'
      }}
    />
  )
}

export default MouseShadowEffect
