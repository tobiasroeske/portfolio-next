'use client'
import * as React from 'react'
import Container from './ui/container'
import { useTranslation } from 'react-i18next'
import AnimatedButton from './ui/animated-button'
import SkillsContainer from './skills-container'

function Skills() {
  const { t } = useTranslation()

  return (
    <section className="mt-[100px] flex flex-col gap-10 px-4 lg:px-14 2xl:px-4">
      <div className="flex flex-col items-start justify-start gap-[15px] md:gap-[20px]">
        <h4 className="font-karla text-lg font-bold leading-5 text-primary md:text-2xl md:leading-7">
          Technologies
        </h4>
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <Container className="items-start gap-8">
            <h2 className="font-fira text-[48px] font-bold leading-10 text-primary sm:text-[56px] md:text-[64px] md:leading-[64px]">
              Skill Set
            </h2>
            <div className="flex flex-col gap-6">
              <p className="font-karla text-white">
                {t('landing:skills_overview')}
              </p>
              <div className="flex flex-col gap-3">
                <h5 className="font-fira text-xl font-bold leading-6 text-white">
                  {t('landing:you_need')}{' '}
                  <span className="text-primary">
                    {t('landing:another_skill')}?
                  </span>
                </h5>
                <p className="font-carla leading-5 text-white">
                  {t('landing:feel_free')}
                </p>
              </div>
            </div>
            <AnimatedButton>{t('common:lets_talk')}</AnimatedButton>
          </Container>
          <SkillsContainer />
        </div>
      </div>
    </section>
  )
}

export default Skills
