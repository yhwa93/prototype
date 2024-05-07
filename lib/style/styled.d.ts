//styled.d.ts
import 'styled-components'
import { CSSProp } from 'styled-components'
import { WINDOW_SIZES } from '@/lib/style/styleEnums'

/* MediaQueries Type
 * - 해상도 사이즈별 네이밍 타입 */
type WindowsType = WINDOW_SIZES.XXXS | WINDOW_SIZES.XXS | WINDOW_SIZES.XS | WINDOW_SIZES.SM | WINDOW_SIZES.MD | WINDOW_SIZES.LG | WINDOW_SIZES.XL

/* MediaQueries Type
 * - 해상도 사이즈별 미디어쿼리 모듈 타입 */
type MediaQueryType = (literals: TemplateStringsArray, ...backQuoteArgs: any[]) => CSSProp

/* MediaQueries Type
 * - 해상도 사이즈별 container width 타입 */
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
