import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { ReactNode } from 'react'
import style from './style.module.css'
import { Icon } from '../Icon/Icon'
import { cn } from '@/shared/lib/classnames'
type Props = {
  slides: ReactNode[]
}

const HorizontalSwiper = ({ slides }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={cn(style.prev, 'swiper-prev')}>
        <Icon name={'chevronLeft'} />
      </div>
      <Swiper
        className={style.swiper}
        slidesPerView={3}
        spaceBetween={'24px'}
        pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}
        navigation={{
          nextEl: `.swiper-next`,
          prevEl: `.swiper-prev`,
          disabledClass: 'swiper-disabled',
          hiddenClass: 'swiper-disabled',
          navigationDisabledClass: 'swiper-disabled'
        }}
        modules={[Pagination, Navigation]}>
        {slides.map((x, index) => (
          <SwiperSlide className={style.sw} key={index}>
            {x}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cn(style.next, 'swiper-next')}>
        <Icon name={'chevronRight'} />
      </div>
      <div className={'swiper-pagination'}></div>
    </div>
  )
}

export default HorizontalSwiper
