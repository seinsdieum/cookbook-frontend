import { ContextMenuAction } from '@/shared/types/frontend'
import style from './style.module.css'
import { useDebounceCallback } from 'usehooks-ts'
import { useEffect } from 'react'

type Props = {
  actions: ContextMenuAction[]
  onClose?: VoidFunction
}

const ContextMenu = ({ actions, onClose }: Props) => {
  const handleCloseDebounced = useDebounceCallback((isClose: boolean) => {
    if (isClose) onClose?.()
  }, 2000)
  const handleClose = onClose
  useEffect(() => {
    handleCloseDebounced(true)
  }, [])
  return (
    <div
      onMouseEnter={() => handleCloseDebounced(false)}
      onMouseLeave={handleClose}
      className={style.menu}>
      {actions.map(x => (
        <button key={x.title} onClick={x.handler}>
          {x.title}
        </button>
      ))}
    </div>
  )
}

export default ContextMenu
