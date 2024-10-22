import { Project } from '@/app/types/typeConfig'
import { siteConfig } from '@/config/siteConfig'
import Image from 'next/image'
import React from 'react'

interface ProjectContainerProps {
  project: Project
  index: number
  onClick: (project: Project) => void
}

function ProjectContainer({ project, index, onClick }: ProjectContainerProps) {
  return (
    <div
      onClick={() => onClick(project)}
      className={`${index === siteConfig.projects.length - 1 && 'border-b-1 border-b'} border-t-1 group flex cursor-pointer flex-col gap-[10px] border-t border-primary py-8 transition-all hover:[background:#3DCFB61A] md:flex-row md:justify-between md:px-8 md:py-10`}
    >
      <h5 className="flex items-center font-fira text-lg font-bold leading-5 leading-7 text-white md:text-2xl md:leading-7">
        {project.title}
        <Image
          src="/static/arrow_outward.svg"
          width={23}
          height={23}
          alt="arrow"
          className="ml-4 h-5 w-5 opacity-0 transition-all group-hover:opacity-100"
        />
      </h5>
      <div>
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-base leading-5 text-white md:text-lg"
          >
            {tech}{' '}
            {index < project.technologies.length - 1 && (
              <span className="text-lg text-primary">| </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectContainer
