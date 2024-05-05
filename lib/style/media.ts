//미디어 쿼리 자체를 export하는 파일
import { css, CSSProp } from 'styled-components'
import { IWindows } from '@/lib/style/styled'

enum WINDOWS {
  XXXS = 'xxxs',
  XXS = 'xxs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

type WindowType = WINDOWS.XXXS | WINDOWS.XXS | WINDOWS.XS | WINDOWS.SM | WINDOWS.MD | WINDOWS.LG | WINDOWS.XL
type MediaQueriesType = Record<WindowType, (literals: TemplateStringsArray, ...placeholders: any[]) => CSSProp>

const Windows: IWindows = {
  xxxs: 280,
  xxs: 375,
  xs: 460,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

//나열
const MediaQueries: MediaQueriesType = Object.keys(Windows).reduce((acc, label) => {
  switch (label) {
    case WINDOWS.XXXS:
      acc.xxxs = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
        @media (min-width: ${Windows.xxxs}px) {
          ${css(literals, ...placeholders)};
        }
      `
      break
    case WINDOWS.XXS:
      acc.xxs = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
        @media screen and (min-width: ${Windows.xxs}px) {
          ${css(literals, ...placeholders)};
        }
      `
      break
    case WINDOWS.XS:
      acc.xs = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
        @media screen and (min-width: ${Windows.xs}px) {
          ${css(literals, ...placeholders)};
        }
      `
      break
    case WINDOWS.SM:
      acc.sm = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
        @media screen and (min-width: ${Windows.sm}px) {
          ${css(literals, ...placeholders)};
        }
      `
      break
    case WINDOWS.MD:
      acc.md = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
        @media screen and (min-width: ${Windows.md}px) {
          ${css(literals, ...placeholders)};
        }
      `
      break
    case WINDOWS.LG:
      acc.lg = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
        @media screen and (min-width: ${Windows.lg}px) {
          ${css(literals, ...placeholders)};
        }
      `
      break
    case WINDOWS.XL:
      acc.xl = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
        @media screen and (min-width: ${Windows.xl}px) {
          ${css(literals, ...placeholders)};
        }
      `
      break
  }
  return acc
}, {} as MediaQueriesType)

//종합
export const media = {
  MediaQueries,
}
