import { Project, Technologies } from '@/app/types/typeConfig'
import { techIcons } from '@/components/icons/tech-icons'

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
      technologies: [
        { name: 'React', icon: techIcons.react },
        { name: 'TypeScript', icon: techIcons.typeScript },
        { name: 'Firebase', icon: techIcons.firebase }
      ] as Technologies[],
      gitHubLink: 'https://github.com/tobiasroeske/react-join',
      projectLink: '',
      description: 'projects.join.description',
      imgPath: 'screenshot_join.png'
    },
    {
      title: 'DA Bubble',
      technologies: [
        { name: 'Angular', icon: 'angular.svg' },
        { name: 'TypeScript', icon: 'typescript.svg' },
        { name: 'SCSS', icon: 'css.svg' },
        { name: 'Firebase', icon: 'firebase.svg' }
      ] as Technologies[],
      gitHubLink: 'https://github.com/tobiasroeske/da-bubble',
      projectLink: '',
      description: 'projects.da_bubble.description',
      imgPath: 'screenshot_dabubble.png'
    },
    {
      title: 'Sharkie',
      technologies: [
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'HTML', icon: 'html.svg' },
        { name: 'CSS', icon: 'css.svg' }
      ] as Technologies[],
      gitHubLink: 'https://github.com/tobiasroeske/sharkie',
      projectLink: '',
      description: 'projects.sharkie.description',
      imgPath: 'screenshot_sharkie.png'
    }
  ] as Project[]
}
