import AboutMe from '@/components/about-me'
import Hero from '@/components/hero'
import Portfolio from '@/components/portfolio'
import Skills from '@/components/skills'

export default async function Page() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
    </>
  )
}
