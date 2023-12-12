'use client'

import '@/components/ui/image-slider.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useMemo } from 'react'
import Slider, { CustomArrowProps, Settings as SliderSettings } from 'react-slick'

export type ImageSlide = {
  id: string
  content: JSX.Element
}

type ImageSliderProps = {
  items: ImageSlide[]
  className?: string
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props

  return (
    <span className="group absolute left-[-40px] top-[50%] hover:cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="3x"
        className="text-white/80 group-hover:text-white default-transition"
      />
    </span>
  )
}

function NextArrow(props: CustomArrowProps) {
  const { onClick } = props

  return (
    <span className="group absolute right-[-40px] top-[50%] hover:cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronRight}
        size="3x"
        className="text-white/80 group-hover:text-white default-transition"
      />
    </span>
  )
}

export default function ImageSlider({ items, className }: ImageSliderProps) {
  const settings = useMemo<SliderSettings>(
    () => ({
      autoplay: false,
      speed: 800,
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      customPaging: () => <span className="block rounded-full w-16 h-1 opacity-50 bg-white" />,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      initialSlide: 0,
    }),
    []
  )

  return (
    <Slider {...settings} className={className}>
      {items.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </Slider>
  )
}
