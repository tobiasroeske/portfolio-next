import { IconProps } from '@/components/icons/icons'

export interface Project {
  title: string
  technologies: Technologies[]
  description: string
  imgPath: string
  gitHubLink: string
  projectLink: string
}

export type Technologies = {
  name: string

  icon:
    | string
    | (({ width, height, fill, className }: IconProps) => JSX.Element)
}
