import { ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
  className?: string
  isVisible: boolean
  onClose: () => void
  isButtonClose?: boolean
  stylesButtonClose?: string
}
