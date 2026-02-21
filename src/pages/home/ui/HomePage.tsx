import { cn } from '@lib/classnames'
import style from './style.module.css'
import { RecipeCardMock } from '@features/recipe-card'
import { FindRecipesWidgetMock } from '@widgets/find-recipes'
import { RecipesHighestRatedWidgetMock } from '@widgets/recipes-highest-rated'
import { ShowcaseSectionMock } from '@features/showcase-section'
import { CookbooksMostPopularWidgetMock } from '@widgets/cookbooks-most-popular'
import { RecipesTrendingMock } from '@widgets/recipes-trending'
const HomePage = () => {
  return (
    <div className={cn('pear-background', style.page)}>
      <FindRecipesWidgetMock />
      <ShowcaseSectionMock
        preTitle='users choice'
        title='20 highest-rated recipes'>
        <RecipesHighestRatedWidgetMock />
      </ShowcaseSectionMock>
      <ShowcaseSectionMock preTitle='out choice' title='Most Popular CookBooks'>
        <CookbooksMostPopularWidgetMock />
      </ShowcaseSectionMock>
      <ShowcaseSectionMock
        variant='primary'
        preTitle='users choice'
        title='20 highest-rated recipes'>
        <RecipesTrendingMock
          recipes={[
            { title: 'Somerep', userName: 'John Doe', viewsCount: 12000 },
            { title: 'Somerep', userName: 'John Doe', viewsCount: 12000 },
            { title: 'Somerep', userName: 'John Doe', viewsCount: 12000 },
            { title: 'Somerep', userName: 'John Doe', viewsCount: 12000 },
            { title: 'Somerep', userName: 'John Doe', viewsCount: 12000 },
            { title: 'Somerep', userName: 'John Doe', viewsCount: 12000 },
            { title: 'Somerep', userName: 'John Doe', viewsCount: 12000 },
            { title: 'Somerep', userName: 'John Doe', viewsCount: 12000 }
          ]}
        />
      </ShowcaseSectionMock>
    </div>
  )
}

export default HomePage
