'use client'
import { siteConfig } from '@/config/siteConfig'
import { useTranslation } from 'react-i18next'
import AnimatedButton from './ui/animated-button'
import BannerAnimation from './banner-animation'
import ContactWrapper from './ui/contact-wrapper'

function Hero() {
  const { t } = useTranslation()

  return (
    <section
      style={
        {
          '--height': 'calc(100dvh - 91px)',
          '--height-md': 'calc(100dvh - 136px)'
        } as React.CSSProperties
      }
      className="relative flex h-[var(--height)] w-full flex-col items-center justify-end md:h-[var(--height-md)]"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        <h2 className="font-fira text-xl md:text-3xl lg:text-[40px]">
          Frontend Developer
        </h2>
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-9xl">
            {siteConfig.author}
          </h1>
          <div className="flex h-fit justify-between gap-2 px-4 sm:gap-6 md:justify-center md:gap-4">
            <AnimatedButton>{t('common:my_projects')}</AnimatedButton>
            <AnimatedButton>{t('common:say_hello')}</AnimatedButton>
          </div>
        </div>
      </div>
      <ContactWrapper />
      <BannerAnimation className="absolute bottom-16" />
    </section>
  )
}
export default Hero
