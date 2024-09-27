'use client'
import { siteConfig } from '@/config/siteConfig'
import { useTranslation } from 'react-i18next'
import AnimatedButton from './ui/animated-button'

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="flex h-dvh w-full items-center justify-center pb-[136px]">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="font-fira text-2xl md:text-[40px]">
          Frontend Developer
        </h2>
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <h1 className="text-6xl font-bold md:text-9xl">
            {siteConfig.author}
          </h1>
          <div className="flex h-fit gap-6">
            <AnimatedButton>{t('common:my_projects')}</AnimatedButton>
            <AnimatedButton>{t('common:say_hello')}</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
