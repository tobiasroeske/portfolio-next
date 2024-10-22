import { Project } from '@/app/types/typeConfig'

export const siteConfig = {
  author: 'Tobias Roeske',
  siteUrl: 'https://tobias-roeske.ch',
  logoPath: 'logo.png',
  mail: 'info@tobias-roeske.com',
  gitHub: 'https://github.com/tobiasroeske',
  linkedIn: 'https://www.linkedin.com/in/tobias-roeske/',
  city: 'Munich',
  projects: [
    {
      title: 'Join',
      technologies: ['React', 'TypeScript', 'Firebase'],
      description: ''
    },
    {
      title: 'DA Bubble',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
      description: ''
    },
    {
      title: 'Sharkie',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: ''
    }
  ] as Project[]
}
