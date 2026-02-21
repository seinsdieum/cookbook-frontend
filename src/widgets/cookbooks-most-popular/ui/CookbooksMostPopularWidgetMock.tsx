import { cn } from '@lib/classnames'
import style from './style.module.css'
import { Button, ContextMenu, Icon, RenderTrigger } from '@ui'

const CookbooksMostPopularWidgetMock = () => {
  return (
    <div className={style.gallery}>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          It's all about frontend
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          It's all about frontend
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
      <div className={cn(style.item, 'shape')}>
        <Button variant='default' size='tight'>
          Fast breakfast
        </Button>
        <RenderTrigger
          animation='scaleInSpring'
          triggerElement={render => <Icon name='ellipsis' onClick={render} />}
          renderElement={unmount => (
            <ContextMenu
              onClose={unmount}
              actions={[{ title: 'Clone to my cookbooks', handler() {} }]}
            />
          )}></RenderTrigger>
      </div>
    </div>
  )
}

export default CookbooksMostPopularWidgetMock
