'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Container from './ui/container'

function AboutMe() {
  const { t } = useTranslation()
  const bulletPoints = [
    {
      text: t('landing:point_one'),
      imgPath: '/static/location_on.svg',
      alt: 'Highlights'
    },
    {
      text: t('landing:point_two'),
      imgPath: '/static/cognition.svg',
      alt: 'Cognition'
    },
    {
      text: t('landing:point_three'),
      imgPath: '/static/new_releases.svg',
      alt: 'New Releases'
    }
  ]

  return (
    <section
      id="about-me"
      className="mt-[100px] flex flex-col items-start gap-10 md:gap-24 lg:flex-row lg:gap-10"
    >
      <Image
        src="/static/photo_small_grey.jpg"
        alt="Photo of Tobias Roeske"
        width={568}
        height={568}
        className="h-full w-full rounded-[30px] object-cover lg:size-[568px]"
      />
      <div className="flex w-full flex-col items-center gap-4 lg:mt-24">
        <h3 className="self-start font-karla text-lg text-primary lg:text-2xl">
          {t('landing:who_i_am')}
        </h3>
        <Container className="w-full items-start gap-8">
          <h2 className="font-fira text-[56px] font-bold leading-[44.8px] text-primary lg:text-[64px] lg:leading-[64px]">
            {t('common:about_me')}
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <p className="font-karla text-base leading-[19.2px] text-white lg:text-lg">
                {t('landing:main_text')}
              </p>
              <div className="flex flex-col gap-4">
                {bulletPoints.map((bulletPoint, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-6"
                  >
                    <Image
                      src={bulletPoint.imgPath}
                      alt={bulletPoint.alt}
                      width={32}
                      height={32}
                      className="size-8 object-cover"
                    />
                    <p className="text-base text-[#FFFFFFCC] lg:text-lg">
                      {bulletPoint.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default AboutMe
