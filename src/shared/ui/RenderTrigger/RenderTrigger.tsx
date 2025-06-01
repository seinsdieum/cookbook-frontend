import { AnimationVariantKeys, animationVariants } from '@lib/motion-animations'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import style from './style.module.css'
type Props = {
  triggerElement: (
    handlerRender: VoidFunction,
    handleUnmount?: VoidFunction
  ) => ReactNode
  renderElement: (handleUnmount?: VoidFunction) => ReactNode
  animation?: AnimationVariantKeys
}

const RenderTrigger = ({
  triggerElement,
  renderElement,
  animation = 'none'
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <div className={style.wrapper}>
      {triggerElement(handleOpen, handleClose)}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={style.render}
            {...animationVariants[animation]}>
            {renderElement(handleClose)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RenderTrigger
