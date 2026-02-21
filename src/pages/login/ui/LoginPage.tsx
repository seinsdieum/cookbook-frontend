import { AnimatedRoutesWrapper } from '@ui'
import style from './style.module.css'
import { cn, useClassName } from '@lib/classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { authSelectors } from '@entities/auth'
import { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '@lib/routes'
import { getImage } from '../model/loginImages'

const LoginPage = () => {
  const authState = useSelector(authSelectors.selectAuth)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const imageClassName = useClassName(
    pathname === routes.register.index,
    style.left,
    style.right
  )

  const formPosition = useMemo(
    () => (pathname === routes.register.index ? { right: 0 } : { left: 0 }),
    [pathname]
  )

  const imagePosition = useMemo(
    () =>
      pathname === routes.register.index ? { x: '-100vw' } : { x: '100vw' },
    [pathname]
  )

  useEffect(() => {
    if (authState.access_token !== null) navigate(routes.home.index)
  }, [authState])

  return (
    <div className={style.page}>
      <AnimatePresence mode='sync'>
        <motion.div
          key={pathname}
          className={cn(style.fixed)}
          initial={{
            y: '100%',
            ...formPosition
          }}
          animate={{
            y: '0%',
            ...formPosition
          }}
          exit={{
            y: '-100%',
            ...formPosition
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}>
          <AnimatedRoutesWrapper></AnimatedRoutesWrapper>
        </motion.div>
      </AnimatePresence>

      <div className={style.imageContainer}>
        <AnimatePresence mode='popLayout'>
          <motion.img
            key={pathname}
            src={getImage(pathname) ?? undefined}
            initial={{ ...imagePosition, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ ...imagePosition, opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: 'easeInOut'
            }}
            className={cn('shape', style.image, imageClassName)}
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LoginPage
