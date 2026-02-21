import { cn } from '@lib/classnames'
import style from './style.module.css'
import { SearchInput } from '@ui'
const FindRecipesWidgetMock = () => {
  return (
    <div className={cn('shape', style.preview)}>
      <div className={cn('page-container')}>
        <div className={style.previewElements}>
          <h1>Find Recipes and Create Your Favorite Cookbooks</h1>
          <SearchInput onSearch={console.log} variant='extended' />
          <div className={cn(style.links)}>
            <a>
              <p className='text'>Vegetarian</p>
            </a>
            <a>
              <p className='text'>Mexican</p>
            </a>
            <a>
              <p className='text'>Greece Kitchen</p>
            </a>
            <a>
              <p className='text'>Italy Pizza</p>
            </a>
            <a>
              <p className='text'>Philippines</p>
            </a>
            <a>
              <p className='text'>Japan Sushi</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindRecipesWidgetMock
