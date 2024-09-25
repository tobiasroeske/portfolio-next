import Link from 'next/link'
import ToggleButton from './toggle-button'

type ModalProps = {
  setOpen: () => void
}

type OverlayProps = {
  children: React.ReactNode
  onClick: () => void
}

function Overlay({ onClick, children }: OverlayProps) {
  return (
    <div
      className="fixed inset-0 z-30 bg-black bg-opacity-50"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

function Modal({ setOpen }: ModalProps) {
  return (
    <>
      <Overlay onClick={setOpen}>
        <div className=" bg-modal absolute right-4 top-16 flex w-fit  items-center justify-center rounded-[30px] border border-[#3DCFB6] bg-opacity-0 px-20 py-10 drop-shadow">
          <ul className="flex flex-col items-start justify-center gap-6 font-fira text-lg text-white">
            <li>
              <Link href={'/'}>About me</Link>
            </li>
            <li>
              <Link href={'/'}>Skills</Link>
            </li>
            <li>
              <Link href={'/'}>Projects</Link>
            </li>
            <li>
              <ToggleButton leftBtn="DE" rightBtn="EN" />
            </li>
          </ul>
        </div>
      </Overlay>
    </>
  )
}

export default Modal
