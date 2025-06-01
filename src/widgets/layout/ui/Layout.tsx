import { FooterMock } from '@features/footer'
import { HeaderMock } from '@features/header'
import { Outlet } from 'react-router-dom'
import style from './style.module.css'
const Layout = () => {
  return (
    <div className={style.layout}>
      <HeaderMock />
      <div className={style.content}>
        <Outlet />
      </div>
      <FooterMock />
    </div>
  )
}

export default Layout
