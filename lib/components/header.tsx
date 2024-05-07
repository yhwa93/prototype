'use client'
import styled from 'styled-components'
import LocaleSwitcher from '@/lib/components/localeSwitcher'

const HeaderWrapper = styled.header`
  height: 80px;
  background-color: deepskyblue;
  position: sticky;
  top: 0;
`

const Container = styled.div`
  margin: 0 auto;
  height: 100%;

  ${(props) => props.theme.MediaQueries.xl`
    width: ${props.theme.Containers.xl}px;
    background: rgba(0,0,0,0.5);
  `}
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <LocaleSwitcher />
      </Container>
    </HeaderWrapper>
  )
}
