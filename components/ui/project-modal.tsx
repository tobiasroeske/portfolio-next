'use client'
import React from 'react'
import { Overlay } from './modal'
import { Project } from '@/app/types/typeConfig'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

interface ProjectModalProps {
  setOpen: () => void
  project: Project
}

function ProjectModal({ setOpen, project }: ProjectModalProps) {
  const { t } = useTranslation()

  return (
    <>
      <Overlay onClick={setOpen}>
        <h1>{project.title}</h1>
        <p>{t(`landing:${project.description}`)}</p>
        <Image
          src={`/static/${project.imgPath}`}
          alt={project.title}
          width={500}
          height={500}
        />
      </Overlay>
    </>
  )
}

export default ProjectModal
