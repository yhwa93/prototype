'use client'
import styled from 'styled-components'

export const MainPageWrapper = styled.main`
  /* Mobile First */
  min-width: 280px;
  box-sizing: border-box;
  background-color: grey;

  ${(props) => props.theme.MediaQueries.xxxs`
    background-color: pink;
  `}

  ${(props) => props.theme.MediaQueries.xxs`
    background-color:hotpink;
    `}
    
  ${(props) => props.theme.MediaQueries.xs`
    background-color:red;
  `}
    
  ${(props) => props.theme.MediaQueries.sm`
    background-color: green;
  `}
    
  ${(props) => props.theme.MediaQueries.md`
    background-color: yellowgreen;
  `}
    
  ${(props) => props.theme.MediaQueries.lg`
    background-color: yellow;
  `}
    
  ${(props) => props.theme.MediaQueries.xl`
    background-color: orange;
  `}
`

export const Container = styled.div`
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  height: 80px;
  width: 100%;
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
