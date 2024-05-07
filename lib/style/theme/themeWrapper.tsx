'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { media } from '@/lib/style/theme/media'
import { theme } from '@/lib/style/theme/theme'

interface IRecoilRootWrapper {
  children: React.ReactNode
}

export default function ThemeWrapper({ children }: IRecoilRootWrapper) {
  return <ThemeProvider theme={{ ...theme, ...media }}>{children}</ThemeProvider>
}
