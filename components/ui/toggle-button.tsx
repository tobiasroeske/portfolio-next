import { ny } from '@/lib/utils'
import { useState, MouseEvent } from 'react'

function ToggleButton({
  leftBtn,
  rightBtn,
  className = ''
}: {
  leftBtn: string
  rightBtn: string
  className?: string
}) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(leftBtn)

  function handleLanguageChange(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    selectedLanguage === leftBtn
      ? setSelectedLanguage(rightBtn)
      : setSelectedLanguage(leftBtn)
  }
  return (
    <div
      className={ny(
        `${className}flex items-center border-primary border rounded-[100px] h-7`
      )}
    >
      <div
        className={ny(
          `text-center px-3 transition rounded-[100px] font-fira text-white cursor-pointer ${selectedLanguage === leftBtn ? 'bg-primary' : 'bg-primary-50'}`
        )}
        onClick={e => handleLanguageChange(e)}
      >
        {leftBtn}
      </div>
      <div
        className={ny(
          `text-center px-3 rounded-[100px] transition font-fira text-white cursor-pointer ${selectedLanguage === rightBtn ? 'bg-primary' : 'bg-primary-50'}`
        )}
        onClick={e => handleLanguageChange(e)}
      >
        {rightBtn}
      </div>
    </div>
  )
}

export default ToggleButton
