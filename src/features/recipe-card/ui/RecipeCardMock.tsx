import { cn } from '@lib/classnames'
import style from './style.module.css'
import { ContextMenu, Icon, IconLabels, RenderTrigger } from '@ui'
import { ContextMenuAction } from '@/shared/types/frontend'

type TempProps = {
  id: number
  image?: string
  userName: string
  title: string
  viewsCount: number
  likesCount: number
  commentsCount: number
  variant?: 'default' | 'preview' | 'extended'
  actions?: ContextMenuAction[]
}

const RecipeCardMock = ({
  id,
  image,
  userName,
  title,
  viewsCount,
  likesCount,
  commentsCount,
  variant = 'default',
  actions
}: TempProps) => {
  return (
    <div className={cn(style.card, style[variant])}>
      <div className={style.base}>
        <div className={style.inline}>
          <IconLabels
            items={[
              { icon: 'eye', value: `${viewsCount} views` }
            ]}></IconLabels>
          {actions && (
            <RenderTrigger
              animation='scaleInSpring'
              triggerElement={render => (
                <Icon onClick={render} name='ellipsis' />
              )}
              renderElement={unmount => (
                <ContextMenu onClose={unmount} actions={actions} />
              )}
            />
          )}
        </div>
        <img
          className={cn(style.image, 'shape')}
          src='/stubs/images/login-page/register.png'
        />
        <div className={style.inline}>
          <h3>{title}</h3>
          <p className={cn(variant === 'preview' ? 'small' : '')}>{userName}</p>
        </div>
      </div>
      {variant !== 'preview' && (
        <IconLabels
          items={[
            { icon: 'heart', value: `${likesCount} likes` },
            { icon: 'discussion', value: `${commentsCount} comments` }
          ]}></IconLabels>
      )}
    </div>
  )
}

export default RecipeCardMock
