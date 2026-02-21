import { ReactNode } from 'react'
import IconCamera from './ui/IconCamera'
import IconDiscussion from './ui/IconDiscussion'
import IconEllipsis from './ui/IconEllipsis'
import IconEye from './ui/IconEye'
import IconHeart from './ui/IconHeart'
import IconSearch from './ui/IconSearch'
import IconXMark from './ui/IconXMark'
import IconChevronLeft from './ui/IconChevronLeft'
import IconChevronRight from './ui/IconChevronRight'

export const icons = {
  camera: IconCamera,
  discussion: IconDiscussion,
  ellipsis: IconEllipsis,
  heart: IconHeart,
  search: IconSearch,
  xMark: IconXMark,
  eye: IconEye,
  chevronLeft: IconChevronLeft,
  chevronRight: IconChevronRight
} as const satisfies Record<string, (props: any) => ReactNode>

export type IconName = keyof typeof icons
