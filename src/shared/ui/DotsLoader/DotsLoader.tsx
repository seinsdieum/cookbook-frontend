import { AnimatePresence, motion } from 'framer-motion'
import style from './style.module.css'
const DotsLoader = () => {
  return (
    <div className={style.dots}>
      <AnimatePresence mode='wait'>
        {[0, 1, 2].map(i => (
          <motion.span
            key={`dot-${i}`}
            className={style.dot}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
            exit={{
              y: -100,
              opacity: 1
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default DotsLoader
