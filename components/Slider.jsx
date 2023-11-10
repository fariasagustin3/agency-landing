"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SlideImage from '../assets/slide-image.png';
import DotEmpty from '../assets/dot-empty.png';
import DotFilled from '../assets/dot-filled.png';

const slides = [
  {
    id: 1,
    title: "Lessons and insights",
    extraTitle: "from 8 years",
    subtitle: "Where to grow your business as a photographer: site or social media?"
  },
  {
    id: 2,
    title: "Lessons and insights",
    extraTitle: "from 8 years",
    subtitle: "Where to grow your business as a photographer: site or social media?"
  },
  {
    id: 3,
    title: "Lessons and insights",
    extraTitle: "from 8 years",
    subtitle: "Where to grow your business as a photographer: site or social media?"
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex < slides.length ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(1)
    }, 3000);

    return () => clearInterval(interval)
  }, [currentIndex, slides.length])

  return (
    <section className='w-full h-screen bg-[#E0E0E0] flex flex-col justify-between px-40'>
      {slides.map((slide) => slide.id === currentIndex && (
        <div className='flex flex-row items-center justify-between h-screen transition duration-1000 fade-enter-active'>
          <div className='flex flex-col flex-1'>
            <h1 className='font-semibold text-5xl text-[#4D4D4D]'>{slide.title}</h1>
            <p className='font-semibold text-5xl text-[#4CAF4F]'>{slide.extraTitle}</p>
            <p className='font-normal text-sm text-[#717171] mt-5'>{slide.subtitle}</p>
            <button className='text-white text-sm bg-[#4CAF4F] px-4 py-2 mt-4 self-start rounded-sm'>Register</button>
          </div>
          <div className=''>
            <Image
              src={SlideImage}
              className='w-96 flex-1'
            />
          </div>
        </div>
      ))}
      <div className='flex flex-row mb-10 justify-center gap-3'>
        {slides.map((slide) => (
          currentIndex === slide.id ? (
            <Image
              src={DotFilled}
              className='w-5 h-5 cursor-pointer'
              onClick={() => goToSlide(slide.id)}
              key={slide.id}
            />
          ) : (
            <Image
              src={DotEmpty}
              className='w-5 h-5 cursor-pointer'
              onClick={() => goToSlide(slide.id)}
              key={slide.id}
            />
          )
        ))}
      </div>
    </section>
  );
}

export default Slider;
