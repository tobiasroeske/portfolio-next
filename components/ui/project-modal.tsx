import React from 'react'
import { Overlay } from './modal'
import { Project } from '@/app/types/typeConfig'

interface ProjectModalProps {
  setOpen: () => void
  project: Project
}

function ProjectModal({ setOpen, project }: ProjectModalProps) {
  return (
    <>
      <Overlay onClick={setOpen}>
        <h1>{project.title}</h1>
      </Overlay>
    </>
  )
}

export default ProjectModal
