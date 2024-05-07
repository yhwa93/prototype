'use client'
import * as S from '@/app/(root)/styles/mainpage'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { dummyListState } from '@/lib/recoil/atoms'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { IDummyData } from '@/app/(root)/page'

export default function MainPage({ data }: { data: IDummyData[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [dummyData, setDummyData] = useRecoilState(dummyListState)

  useEffect(() => {
    setDummyData(() => data)
  }, [setDummyData])

  return (
    <S.MainPageWrapper>
      <S.Container>
        <h1>test!!</h1>
        {/*<S.IntroSection>*/}
        {/*  <S.DescriptionGroup>*/}
        {/*    <S.TitleAreaList>*/}
        {/*      <S.TitleAreaContainer>*/}
        {/*        {dummyData.map(*/}
        {/*          (item, idx) =>*/}
        {/*            currentIndex === idx && (*/}
        {/*              <S.TitleArea $active={currentIndex === idx} key={idx}>*/}
        {/*                <h2>{item.title}</h2>*/}
        {/*                <p>{item.description}</p>*/}
        {/*              </S.TitleArea>*/}
        {/*            ),*/}
        {/*        )}*/}
        {/*      </S.TitleAreaContainer>*/}
        {/*    </S.TitleAreaList>*/}

        {/*    <S.SwiperPagination className="custom-pagination">*/}
        {/*      {dummyData.map(*/}
        {/*        (item, idx) =>*/}
        {/*          currentIndex !== idx && (*/}
        {/*            <div key={idx} className="swiper-pagination-bullet">*/}
        {/*              <Image src={`/images/swiper_image_0${idx + 1}.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />*/}
        {/*            </div>*/}
        {/*          ),*/}
        {/*      )}*/}
        {/*    </S.SwiperPagination>*/}
        {/*  </S.DescriptionGroup>*/}

        {/*  <S.ImageGroup>*/}
        {/*    <Swiper*/}
        {/*      className="image-swiper"*/}
        {/*      onSlideChangeTransitionStart={(swiper) => {*/}
        {/*        const realIndex = swiper.realIndex*/}
        {/*        setCurrentIndex(realIndex)*/}
        {/*      }}*/}
        {/*      spaceBetween={20}*/}
        {/*      slidesPerView={1}*/}
        {/*      initialSlide={0}*/}
        {/*      loop={true}*/}
        {/*      modules={[Navigation, Pagination, Autoplay]}*/}
        {/*      freeMode={true}*/}
        {/*      observer={true}*/}
        {/*      navigation={true}*/}
        {/*      simulateTouch={true}*/}
        {/*      grabCursor={false}*/}
        {/*    >*/}
        {/*      {dummyData.map((item, idx) => (*/}
        {/*        <SwiperSlide key={idx}>*/}
        {/*          <S.SwiperItemWrapper>*/}
        {/*            <div>*/}
        {/*              <p>{item.description}</p>*/}
        {/*              <h3>{item.title}</h3>*/}
        {/*            </div>*/}
        {/*            <Image src={`/images/swiper_image_0${idx + 1}.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />*/}
        {/*          </S.SwiperItemWrapper>*/}
        {/*        </SwiperSlide>*/}
        {/*      ))}*/}
        {/*    </Swiper>*/}
        {/*  </S.ImageGroup>*/}
        {/*</S.IntroSection>*/}
      </S.Container>
    </S.MainPageWrapper>
  )
}
