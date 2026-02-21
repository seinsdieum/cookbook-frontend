import { RecipeCardMock } from '@features/recipe-card'
import { HorizontalSwiper } from '@ui'

type RecipeMock = {
  viewsCount: number
  title: string
  userName: string
}

type Props = {
  recipes: RecipeMock[]
}
const RecipesTrendingMock = ({ recipes }: Props) => {
  return (
    <HorizontalSwiper
      slides={recipes.map((x, index) => (
        <RecipeCardMock
          id={index}
          variant='preview'
          commentsCount={0}
          likesCount={0}
          {...x}
        />
      ))}></HorizontalSwiper>
  )
}

export default RecipesTrendingMock
