import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { AnimationVariantKeys, animationVariants } from '@lib/motion-animations'

type Direction = 'forward' | 'back'

const getDirection = (from: string, to: string): Direction => {
  return to.length >= from.length ? 'forward' : 'back'
}

type Props = {
  type?: AnimationVariantKeys
}

export const AnimatedRoutesWrapper = ({ type = 'none' }: Props) => {
  const location = useLocation()
  const outlet = useOutlet()

  const [displayedOutlet, setDisplayedOutlet] = useState(outlet)
  const [displayedKey, setDisplayedKey] = useState(location.pathname)
  const [direction, setDirection] = useState<Direction>('forward')

  const isAnimatingRef = useRef(false)
  const prevPathRef = useRef(location.pathname)

  useEffect(() => {
    const from = prevPathRef.current
    const to = location.pathname

    setDirection(getDirection(from, to))
    prevPathRef.current = to

    if (!isAnimatingRef.current) {
      setDisplayedOutlet(outlet)
      setDisplayedKey(to)
    }
  }, [location.pathname, outlet])

  return (
    <AnimatePresence
      mode='wait'
      onExitComplete={() => {
        isAnimatingRef.current = false
        setDisplayedOutlet(outlet)
        setDisplayedKey(location.pathname)
      }}>
      <motion.div
        key={displayedKey}
        {...animationVariants[type]}
        onAnimationStart={() => {
          isAnimatingRef.current = true
        }}>
        {displayedOutlet}
      </motion.div>
    </AnimatePresence>
  )
}
