import Link from 'next/link'
import ToggleButton from './toggle-button'
import { useTranslation } from 'react-i18next'

type ModalProps = {
  setOpen: () => void
}

type OverlayProps = {
  children: React.ReactNode
  onClick: () => void
}

export function Overlay({ onClick, children }: OverlayProps) {
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
  const { t } = useTranslation()

  return (
    <>
      <Overlay onClick={setOpen}>
        <div className="bg-modal absolute right-4 top-16 flex w-fit items-center justify-center rounded-[30px] border border-[#3DCFB6] bg-opacity-0 px-20 py-10 drop-shadow">
          <ul className="flex flex-col items-start justify-center gap-6 font-fira text-lg text-white">
            <li>
              <Link href={'/'}>{t('common:about_me')}</Link>
            </li>
            <li>
              <Link href={'/'}>Skills</Link>
            </li>
            <li>
              <Link href={'/'}>{t('common:projects')}</Link>
            </li>
            <li>
              <ToggleButton />
            </li>
          </ul>
        </div>
      </Overlay>
    </>
  )
}

export default Modal
