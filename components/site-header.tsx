import Nav from './nav'
import NavMobile from './nav-mobile'

export default function Header() {
  return (
    <header className="w-full">
      <NavMobile className="flex md:hidden" />
      <Nav className="hidden md:flex" />
    </header>
  )
}
