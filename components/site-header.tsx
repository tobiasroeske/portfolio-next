import Nav from './nav'
import NavMobile from './nav-mobile'

export default function Header() {
  return (
    <header className="w-full px-4 lg:px-14 2xl:px-4">
      <NavMobile className="flex md:hidden" />
      <Nav className="hidden md:flex" />
    </header>
  )
}
