import { RecipeCardMock } from '@/features/recipe-card'
import style from './style.module.css'
const RecipesHighestRatedWidgetMock = () => {
  return (
    <div className={style.recipes}>
      <RecipeCardMock
        commentsCount={12}
        likesCount={499}
        title='Fresh meat'
        id={1}
        userName='John Doe'
        viewsCount={12000}
        actions={[{ title: 'Add to my recipes', handler() {} }]}
      />
      <RecipeCardMock
        commentsCount={12}
        likesCount={499}
        title='Fresh meat'
        id={1}
        userName='John Doe'
        viewsCount={12000}
        actions={[{ title: 'Add to my recipes', handler() {} }]}
      />
      <RecipeCardMock
        commentsCount={12}
        likesCount={499}
        title='Fresh meat'
        id={1}
        userName='John Doe'
        viewsCount={12000}
        actions={[{ title: 'Add to my recipes', handler() {} }]}
      />
      <RecipeCardMock
        commentsCount={12}
        likesCount={499}
        title='Fresh meat'
        id={1}
        userName='John Doe'
        viewsCount={12000}
        actions={[{ title: 'Add to my recipes', handler() {} }]}
      />
    </div>
  )
}

export default RecipesHighestRatedWidgetMock
