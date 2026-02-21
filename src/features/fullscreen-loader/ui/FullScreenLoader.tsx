import { cn } from '@lib/classnames'
import style from './style.module.css'
import { DotsLoader, ProductLogo } from '@ui'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  isLoaded: boolean
}

export const FullScreenLoader = ({ isLoaded }: Props) => {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className={style.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}>
          <div className={style.wrapper}>
            <ProductLogo className={cn(style.logo)} />
            <DotsLoader />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
