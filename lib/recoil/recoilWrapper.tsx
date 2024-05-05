'use client'

import { RecoilRoot } from 'recoil'
import React from 'react'
interface IRecoilRootWrapper {
  children: React.ReactNode
}

export default function RecoilRootWrapper({ children }: IRecoilRootWrapper) {
  return <RecoilRoot>{children}</RecoilRoot>
}
