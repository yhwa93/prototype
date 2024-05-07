//styled.d.ts
import 'styled-components'
import { CSSProp } from 'styled-components'
import { WINDOW_SIZES } from '@/lib/style/styleEnums'

/* MediaQueries */
type WindowsType = WINDOW_SIZES.XXXS | WINDOW_SIZES.XXS | WINDOW_SIZES.XS | WINDOW_SIZES.SM | WINDOW_SIZES.MD | WINDOW_SIZES.LG | WINDOW_SIZES.XL
type MediaQueryType = (literals: TemplateStringsArray, ...backQuoteArgs: any[]) => CSSProp

/* Containers */
interface IContainers {
  sm: number
  md: number
  lg: number
  xl: number
}

declare module 'styled-components' {
  export interface DefaultTheme {
    MediaQueries: Record<WindowsType, MediaQueryType>
    Containers: IContainers
  }
}
