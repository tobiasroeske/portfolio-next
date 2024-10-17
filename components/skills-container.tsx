import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Skill {
  name: string
  icon: string
}

const skills: Skill[] = [
  {
    name: 'Next.js',
    icon: 'next-js.svg'
  },
  {
    name: 'React',
    icon: 'react.svg'
  },
  {
    name: 'TypeScript',
    icon: 'typescript.svg'
  },
  {
    name: 'Angular',
    icon: 'angular.svg'
  },
  {
    name: 'HTML',
    icon: 'html.svg'
  },
  {
    name: 'CSS',
    icon: 'css.svg'
  },
  {
    name: 'JavaScript',
    icon: 'javascript.svg'
  },
  {
    name: 'Firebase',
    icon: 'firebase.svg'
  },
  {
    name: 'Git',
    icon: 'git.svg'
  },
  {
    name: 'Material Design',
    icon: 'material_design.svg'
  },
  {
    name: 'Scrum',
    icon: 'scrum.svg'
  },
  {
    name: 'API',
    icon: 'api.svg'
  }
]

const learningSkills: Skill[] = [
  {
    name: 'Java',
    icon: 'java.svg'
  },
  {
    name: 'Node.js',
    icon: 'node-js.svg'
  }
]

export function ToolTip() {
  return (
    <div className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 transform flex-col items-center justify-center gap-2 rounded-[30px] bg-white px-3 py-2 opacity-0 transition-all group-hover:flex group-hover:opacity-100">
      <span className="whitespace-nowrap text-center font-karla text-primary">
        I have special <br /> interest in learning
      </span>
      <div className="flex justify-center gap-2">
        {learningSkills.map((skill, index) => (
          <div key={index}>
            <Image
              src={`/static/${skill.icon}`}
              alt={skill.name}
              width={32}
              height={32}
              className="h-[32px] w-[32px] transition-all group-hover:scale-105"
            />
            <span className="text-center text-xs font-bold text-primary md:text-lg">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full bg-white"></div>
    </div>
  )
}

function SkillsContainer() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8 py-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group flex h-[110px] w-[104px] flex-col items-center justify-start gap-2"
        >
          <Image
            src={`/static/${skill.icon}`}
            alt={skill.name}
            width={60}
            height={60}
            className="h-[60px] w-[60px] transition-all group-hover:scale-110"
          />
          <span className="text-center font-fira md:text-lg">{skill.name}</span>
        </div>
      ))}
      <div className="group relative flex w-[104px] flex-col items-center gap-2">
        <Image
          src={'/static/learning.svg'}
          alt={'Growth Mindset'}
          width={60}
          height={60}
          className="h-[60px] w-[60px] font-fira transition-all"
        />
        <span className="text-center font-fira md:text-lg">Growth Mindset</span>
        {/* Speaking Bubble */}
        <ToolTip />
      </div>
    </div>
  )
}

export default SkillsContainer
