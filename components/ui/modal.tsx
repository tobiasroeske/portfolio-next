import ToggleButton from './toggle-button'
import { useTranslation } from 'react-i18next'
import CustomLink from './cutstom-link'
import { ny } from '@/lib/utils'

type ModalProps = {
  setOpen: () => void
}

type OverlayProps = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

interface ProjectContainerProps {
  children: React.ReactNode
  className?: string
  borderRadius?: number
}

export function ModalContainer({
  children,
  className,
  borderRadius = 30
}: ProjectContainerProps) {
  return (
    <div
      style={
        {
          '--background':
            'linear-gradient(55.22deg, #1C1C1C 36.26%, #08463B 93.28%)',
          '--radius': `${borderRadius}px`
        } as React.CSSProperties
      }
      className={ny(
        `bg-modal flex w-fit items-center justify-center rounded-[--radius] border border-[#3DCFB6] ${className}`
      )}
    >
      {children}
    </div>
  )
}

export function Overlay({ onClick, children, className }: OverlayProps) {
  return (
    <div
      className={ny(
        `fixed inset-0 z-[200] bg-black bg-opacity-50 ${className}`
      )}
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
        <ModalContainer className="absolute right-4 top-16 px-20 py-10 drop-shadow">
          <ul className="flex flex-col items-start justify-center gap-6 font-fira text-lg text-white">
            <li className="group">
              <CustomLink href={'#about-me-container'} variant="row">
                {t('common:about_me')}
              </CustomLink>
            </li>
            <li>
              <CustomLink href={'/'}>Skills</CustomLink>
            </li>
            <li>
              <CustomLink href={'/'}>{t('common:projects')}</CustomLink>
            </li>
            <li>
              <ToggleButton />
            </li>
          </ul>
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default Modal
