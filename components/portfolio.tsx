'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectContainer from './project-container'
import { siteConfig } from '@/config/siteConfig'
import ProjectModal from './ui/project-modal'
import { Project } from '@/app/types/typeConfig'

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProjcet] = useState<Project | null>(null)
  const [index, setIndex] = useState<number>(0)
  const { t } = useTranslation()

  function closeModal() {
    setSelectedProjcet(null)
  }

  function selectProject(project: Project, index: number) {
    setSelectedProjcet(project)
    setIndex(index)
  }

  return (
    <section className="relative mb-20 mt-[100px] flex flex-col gap-10 lg:mt-36 lg:w-[880px]">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-4 md:gap-5">
          <h3 className="font-karla text-lg font-bold leading-5 text-primary md:text-2xl md:leading-7">
            Portfolio
          </h3>
          <h2 className="font-fira text-[56px] font-bold leading-[56px] text-primary md:text-[64px] md:leading-[64px]">
            {t('landing:featured_projects_better')}
          </h2>
        </div>
        <span className="text-base md:text-xl md:leading-5">
          {t('landing:project_overview')}
        </span>
      </div>
      <div>
        {siteConfig.projects.map((project, index) => (
          <ProjectContainer
            key={index}
            project={project}
            index={index}
            onClick={() => selectProject(project, index)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          closeModal={closeModal}
          project={selectedProject}
          index={index}
        />
      )}
    </section>
  )
}

export default Portfolio
