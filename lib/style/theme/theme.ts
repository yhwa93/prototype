//통일화를 위해 정의된 다른 theme 속성 (일반적인 ThemeProvider의 theme props 값)

//나열
import { IContainers } from '@/lib/style/styled'

const Containers: IContainers = {
  sm: 544,
  md: 672,
  lg: 928,
  xl: 1184,
}

//종합
export const theme = {
  Containers,
}
