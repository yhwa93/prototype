//styled.d.ts
import 'styled-components'
import { CSSProp } from 'styled-components'
import { Windows } from '@/lib/style/media'

interface IWindows {
  xxxs: number
  xxs: number
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

interface IContainers {
  sm: number
  md: number
  lg: number
  xl: number
}

interface IMediaQueries {
  xxxs: (l: TemplateStringsArray, ...p: any[]) => CSSProp
  xxs: (l: TemplateStringsArray, ...p: any[]) => CSSProp
  xs: (l: TemplateStringsArray, ...p: any[]) => CSSProp
  sm: (l: TemplateStringsArray, ...p: any[]) => CSSProp
  md: (l: TemplateStringsArray, ...p: any[]) => CSSProp
  lg: (l: TemplateStringsArray, ...p: any[]) => CSSProp
  xl: (l: TemplateStringsArray, ...p: any[]) => CSSProp
}

declare module 'styled-components' {
  export interface DefaultTheme {
    MediaQueries: IMediaQueries
    Containers: IContainers
  }
}
