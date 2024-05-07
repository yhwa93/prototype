'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Thumbs, FreeMode, Navigation } from 'swiper/modules'
import { type Swiper as SwiperTypes } from 'swiper'

import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import * as S from '@/app/[locale]/(root)/styles/mainpage'
import Image from 'next/image'

export default function IntroSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null)

  return (
    <S.IntroSwiperWrapper>
      <S.LeftGroup>
        <div>
          <h2>
            What is <br /> Your Gift?
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
          </p>
        </div>
        {/* Thumbs Swiper -> store swiper instance */}
        {/* It is also required to set watchSlidesProgress prop */}
        <Swiper
          onSwiper={setThumbsSwiper}
          className="intro_thumb_swiper"
          initialSlide={0}
          loop={true}
          // autoHeight={true}
          // autoplay={true}
          spaceBetween={10}
          slidesPerView={2}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
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
          // autoHeight={true}
          // autoplay={true}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
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
