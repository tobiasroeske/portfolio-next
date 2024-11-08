'use client'
import React, { useState } from 'react'
import { Project } from '@/app/types/typeConfig'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { ModalContainer, Overlay } from './modal'
import { Icons } from '../icons/icons'
import AnimatedButton from './animated-button'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

interface ProjectModalProps {
  closeModal: () => void
  project: Project
  index: number
}

function ProjectModal({ closeModal, project, index }: ProjectModalProps) {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProjcet] = useState<Project>(project)
  const [currentIndex, setCurrentIndex] = useState<number>(index)

  function handleNextProjectClick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    if (index < siteConfig.projects.length - 1) {
      setSelectedProjcet(siteConfig.projects[index + 1])
      setCurrentIndex(index + 1)
    }
  }

  return (
    <>
      <Overlay
        onClick={closeModal}
        className="flex items-center justify-center"
      >
        <ModalContainer className="relative flex h-screen w-full flex-col items-start justify-start gap-8 px-3 py-24">
          <div
            className="group absolute right-8 top-8 cursor-pointer"
            onClick={closeModal}
          >
            <Icons.close className="translate-all group-hover:scale-105 group-hover:fill-primary" />
          </div>
          <Image
            src={`/static/${selectedProject.imgPath}`}
            alt={project.title}
            width={500}
            height={500}
            className="object-fit: cover; w-full rounded-2xl"
          />
          <div className="flex flex-col gap-2">
            <span className="font-karla text-[72px] font-bold leading-[72px] text-primary">
              0{currentIndex + 1}
            </span>
            <h1 className="font-fira text-[56px] font-bold leading-[44.8px] tracking-[-3%] text-white">
              {selectedProject.title}
            </h1>
          </div>
          <h3 className="font-fira text-xl font-bold leading-6 text-primary">
            What is this project about?
          </h3>
          <p className="font-karla text-base font-normal leading-5 text-white">
            {t(`landing:${selectedProject.description}`)}
          </p>
          <div className="flex flex-wrap gap-4">
            {selectedProject.technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-1">
                <tech.icon className="fill-primary" />
                <span className="font-karla font-normal leading-5 text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-8 self-center">
            <Link href={selectedProject.gitHubLink}>
              <AnimatedButton>
                <div className="flex items-center gap-1">
                  <span className="font-karla leading-5">GitHub</span>
                  <Image
                    src="/static/arrow_outward_green.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                    className="h-4 w-4 transition-all"
                  />
                </div>
              </AnimatedButton>
            </Link>
            <Link href={selectedProject.projectLink}>
              <AnimatedButton>
                <div className="flex items-center gap-1">
                  <span className="font-karla leading-5">Live Test</span>
                  <Image
                    src="/static/arrow_outward_green.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                    className="h-4 w-4 transition-all"
                  />
                </div>
              </AnimatedButton>
            </Link>
          </div>
          <div
            className="absolute bottom-8 right-8 flex cursor-pointer items-center gap-2 font-karla leading-5 text-primary hover:text-white"
            onClick={e => handleNextProjectClick(e)}
          >
            Next Project
            <Image
              src="/static/arrow_outward_green.svg"
              width={16}
              height={16}
              alt="arrow"
              className="h-4 w-4 rotate-45 transition-all"
            />
          </div>
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default ProjectModal
