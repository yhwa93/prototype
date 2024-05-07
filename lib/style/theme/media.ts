//미디어 쿼리 모듈화 theme export
import { css } from 'styled-components'
import { MediaQueryType, WindowsType } from '@/lib/style/styled'
import { WINDOW_SIZES } from '@/lib/style/styleEnums'

/* 해상도별 사이즈 object
 * - xxxs, xxs, xs, sm : 모바일/모바일 가로 (280,375,460)
 * - md : 태블릿 (640,768)
 * - lg, xl : 데스크탑/노트북 (1024,1280)
 * */
const windowSizesObj: Record<WindowsType, number> = {
  xxxs: 280,
  xxs: 375,
  xs: 460,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

/* MediaQueries Module
 * - 해상도별 미디어쿼리 모듈 */
const MediaQueries: Record<WindowsType, MediaQueryType> = Object.keys(windowSizesObj).reduce(
  (acc, label) => {
    switch (label) {
      case WINDOW_SIZES.XXXS:
        acc.xxxs = (literals, ...backQuoteArgs) => css`
          @media (min-width: ${windowSizesObj.xxxs}px) {
            ${css(literals, ...backQuoteArgs)};
          }
        `
        break
      case WINDOW_SIZES.XXS:
        acc.xxs = (literals, ...backQuoteArgs) => css`
          @media screen and (min-width: ${windowSizesObj.xxs}px) {
            ${css(literals, ...backQuoteArgs)};
          }
        `
        break
      case WINDOW_SIZES.XS:
        acc.xs = (literals, ...backQuoteArgs) => css`
          @media screen and (min-width: ${windowSizesObj.xs}px) {
            ${css(literals, ...backQuoteArgs)};
          }
        `
        break
      case WINDOW_SIZES.SM:
        acc.sm = (literals, ...backQuoteArgs) => css`
          @media screen and (min-width: ${windowSizesObj.sm}px) {
            ${css(literals, ...backQuoteArgs)};
          }
        `
        break
      case WINDOW_SIZES.MD:
        acc.md = (literals, ...backQuoteArgs) => css`
          @media screen and (min-width: ${windowSizesObj.md}px) {
            ${css(literals, ...backQuoteArgs)};
          }
        `
        break
      case WINDOW_SIZES.LG:
        acc.lg = (literals, ...backQuoteArgs) => css`
          @media screen and (min-width: ${windowSizesObj.lg}px) {
            ${css(literals, ...backQuoteArgs)};
          }
        `
        break
      case WINDOW_SIZES.XL:
        acc.xl = (literals, ...backQuoteArgs) => css`
          @media screen and (min-width: ${windowSizesObj.xl}px) {
            ${css(literals, ...backQuoteArgs)};
          }
        `
        break
    }
    return acc
  },
  {} as Record<WindowsType, MediaQueryType>,
)

export const media = {
  MediaQueries,
}
