'use client'
import styled from 'styled-components'
import LocaleSwitcher from '@/lib/components/localeSwitcher'
import { Link } from '@/navigation'

const HeaderWrapper = styled.header`
  height: 80px;
  background-color: deepskyblue;
  position: sticky;
  top: 0;
  z-index: 1000;
`

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  box-sizing: border-box;

  ${(props) => props.theme.MediaQueries.sm`
    width: ${props.theme.Containers.sm}px;
  `}

  ${(props) => props.theme.MediaQueries.md`
    width: ${props.theme.Containers.md}px;
  `}

  ${(props) => props.theme.MediaQueries.lg`
    width: ${props.theme.Containers.lg}px;
  `}

  ${(props) => props.theme.MediaQueries.xl`
    width: ${props.theme.Containers.xl}px;
  `}
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <LocaleSwitcher />
        <Link href={'/faq'}>FAQ</Link>
        <Link href={'/'}>HOME</Link>
      </Container>
    </HeaderWrapper>
  )
}
