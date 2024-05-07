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
  width: 100%;
  box-sizing: border-box;

  & > h1 {
    font-size: 150px;
    color: white;
    font-weight: 300;
  }

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

export const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 50px 0;

  & > div:nth-child(1) {
    width: calc(36.72% - 5px);
    overflow: hidden;
  }

  & > div:nth-child(2) {
    width: calc(63.28% - 5px);
  }
`

export const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ImageGroup = styled.div`
  border-radius: 5%;
  overflow: hidden;

  .swiper-slide {
    border-radius: 5%;
    overflow: hidden;
  }
`

export const SwiperItemWrapper = styled.div`
  position: relative;
  aspect-ratio: 367/276;
  & > img {
    position: absolute;
  }
`

export const TitleAreaList = styled.div``
export const TitleAreaContainer = styled.div``

export const TitleArea = styled.div<{ $active: boolean }>`
  @keyframes slidein {
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  & > h2 {
    transform: translateY(50%);
    opacity: 0;
    animation-duration: 0.8s;
    animation-name: slidein;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;

    font-size: 60px;
    display: block;
    margin-bottom: 18px;
  }

  & > p {
    transform: translateY(50%);
    opacity: 0;
    animation-duration: 0.8s;
    animation-name: slidein;
    animation-fill-mode: forwards;
    animation-delay: 0.6s;

    font-size: 18px;
    line-height: 24px;
  }
`

export const SwiperPagination = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5px));
  grid-gap: 10px;
  overflow: hidden;

  .swiper-pagination-bullet {
    cursor: pointer;
    position: relative;
    background-color: deepskyblue;
    padding: 20px;
    border-radius: 10%;
    overflow: hidden;
    aspect-ratio: 1/1;
  }
`
