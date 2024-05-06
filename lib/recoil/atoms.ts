import { atom } from 'recoil'
import { IDummyData } from '@/app/(root)/page'

export const dummyListState = atom<IDummyData[]>({
  key: 'dummyListState',
  default: [],
})
