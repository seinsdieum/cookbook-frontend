import { TargetAndTransition, Transition, VariantLabels } from 'framer-motion'

export const animationVariants = {
  none: {
    initial: { opacity: 0.99 },
    animate: { opacity: 1 },
    exit: { opacity: 0.99 },
    transition: { duration: 0 }
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: 'easeInOut' }
  },

  moveRight: {
    initial: { opacity: 0, x: '-100vw' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100vw' },
    transition: { duration: 0.6, ease: 'easeInOut' }
  },

  moveLeft: {
    initial: { opacity: 0, x: '100vw' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100vw' },
    transition: { duration: 0.6, ease: 'easeInOut' }
  },

  moveUpFade: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },

  scaleInSpring: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  },

  flipCard: {
    initial: { rotateY: 90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 90, opacity: 0 },
    transition: { duration: 0.6, ease: 'easeInOut' }
  },

  dropIn: {
    initial: { y: '-100vh', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100vh', opacity: 0 },
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } // cubic bezier
  },

  fadeZoomIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.4, ease: 'easeOut' }
  }
} as const satisfies Record<
  string,
  Record<
    string,
    boolean | VariantLabels | TargetAndTransition | Transition | undefined
  >
>

type AnimationVariantsType = typeof animationVariants
export type AnimationVariantKeys = keyof AnimationVariantsType
