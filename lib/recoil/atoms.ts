import { atom } from 'recoil'
import { IDummyData } from '@/app/[locale]/(root)/page'

export const dummyListState = atom<IDummyData[]>({
  key: 'dummyListState',
  default: [],
})
