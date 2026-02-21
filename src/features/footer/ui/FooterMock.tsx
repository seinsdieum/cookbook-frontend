import { cn } from '@lib/classnames'
import style from './style.module.css'
import { ITechArtLogo, ProductLogo } from '@ui'
const FooterMock = () => {
  return (
    <div className={style.footer}>
      <div className={cn(style.content, 'page-container')}>
        <ProductLogo secondaryClassName={style.logoText} />
        <p>Cookbooks</p>
        <p>Recipes</p>
        <p>About Us</p>
        <a href='mailto:plzfeedme@itechart.com'>
          <p>plzfeedme@itechart.com</p>
        </a>
        <p>Study Project v2, 2021</p>
        <ITechArtLogo />
      </div>
    </div>
  )
}

export default FooterMock
