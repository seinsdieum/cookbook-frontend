import { cn } from '@lib/classnames'
import style from './style.module.css'
import { Button, InputField, ProductLogo, SearchInput } from '@ui'
const HeaderMock = () => {
  return (
    <div className={cn(style.header)}>
      <div className={cn(style.content, 'page-container')}>
        <ProductLogo />
        <p className='tag'>Recipes</p>
        <p className='tag'>Cookbooks</p>
        <SearchInput onSearch={console.log} />
        <Button variant='secondary' size='tall'>
          create cookbook
        </Button>
        <p className='tag'>Sign In</p>
      </div>
    </div>
  )
}

export default HeaderMock
