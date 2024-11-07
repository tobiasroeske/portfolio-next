export interface Project {
  title: string
  technologies: Technologies[]
  description: string
  imgPath: string
  gitHubLink: string
  projectLink: string
}

export interface Technologies {
  name: string
  icon: string
}
