import { DetailedHTMLProps, HTMLAttributes } from 'react'
import style from './style.module.css'
import { cn } from '@lib/classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { boolean } from 'zod'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isShown?: boolean
  isPlaceTaken?: boolean
}
const ErrorLabel = ({
  isShown = true,
  isPlaceTaken = true,
  className,
  children,
  ...props
}: Props) => {
  return (
    <AnimatePresence mode='sync'>
      {isShown ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 600,
            damping: 25
          }}>
          <div {...props} className={cn(className, style.wrapper)}>
            {children}
          </div>
        </motion.div>
      ) : isPlaceTaken ? (
        <div {...props} className={cn(style.place)}>
          -
        </div>
      ) : null}
    </AnimatePresence>
  )
}

export default ErrorLabel
