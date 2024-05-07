'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Thumbs, FreeMode, Navigation, Controller, Parallax, EffectFade, Pagination, Scrollbar } from 'swiper/modules'
import { type Swiper as SwiperTypes } from 'swiper'

import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import * as S from '@/app/[locale]/(root)/styles/mainpage'
import Image from 'next/image'

export default function IntroSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null)
  const [controlledSwiper, setControlledSwiper] = useState<SwiperTypes | null>(null)

  return (
    <S.IntroSwiperWrapper>
      <S.LeftGroup>
        <Swiper
          onSwiper={setControlledSwiper}
          className="intro_title_swiper"
          initialSlide={0}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={false}
          enabled={false}
          modules={[Navigation, Autoplay, Controller]}
        >
          <SwiperSlide>
            <h2>
              What is <br /> Your Gift? 11
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h2>
              What is <br /> Your Gift? 22
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h2>
              What is <br /> Your Gift? 33
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h2>
              What is <br /> Your Gift? 44
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of
            </p>
          </SwiperSlide>
        </Swiper>

        {/* Thumbs Swiper -> store swiper instance */}
        {/* It is also required to set watchSlidesProgress prop */}
        <Swiper
          onSwiper={setThumbsSwiper}
          className="intro_thumb_swiper"
          initialSlide={0}
          loop={true}
          // autoHeight={true}
          // autoplay={true}
          scrollbar={true}
          spaceBetween={10}
          slidesPerView={2}
          watchSlidesProgress={true}
          modules={[Scrollbar, Thumbs, Autoplay]}
        >
          <SwiperSlide>
            <div className="image_wrapper">
              <Image src={`/images/swiper_image_01.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image_wrapper">
              <Image src={`/images/swiper_image_02.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image_wrapper">
              <Image src={`/images/swiper_image_03.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image_wrapper">
              <Image src={`/images/swiper_image_02.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />
            </div>
          </SwiperSlide>
        </Swiper>
      </S.LeftGroup>
      <S.RightGroup>
        {/* Main Swiper -> pass thumbs swiper instance */}
        <Swiper
          className="intro_main_swiper"
          initialSlide={0}
          loop={true}
          effect={'fade'}
          // autoHeight={true}
          // autoplay={true}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          controller={{ control: controlledSwiper }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[EffectFade, Navigation, Thumbs, Autoplay, Controller]}
        >
          <SwiperSlide>
            <div className="image_wrapper">
              <Image src={`/images/swiper_image_01.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image_wrapper">
              <Image src={`/images/swiper_image_02.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image_wrapper">
              <Image src={`/images/swiper_image_03.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image_wrapper">
              <Image src={`/images/swiper_image_02.jpeg`} alt="swiper image" fill={true} priority={true} sizes={'734'} />
            </div>
          </SwiperSlide>
        </Swiper>
      </S.RightGroup>
    </S.IntroSwiperWrapper>
  )
}
