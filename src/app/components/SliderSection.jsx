// import React from 'react'
"use client"

import React, { useState, useEffect } from 'react';
import Img from '../assests/New.png';
import Img2 from '../assests/1.jpg';
import Img3 from '../assests/0.jpg';
import previous from '../assests/previous.png';
import next from '../assests/next.png';
import Image from 'next/image';
import Link from 'next/link';

function Section() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const ImageSlider = ({ images, interval }) => {
    useEffect(() => {
      const rotateInterval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, interval);
      console.log("use effect calling");
      return () => clearInterval(rotateInterval);
    }, [interval, images.length]);

    return (
      <div>
        <Image src={images[currentIndex]} alt='section image' width={720} height={405} className='mx-auto transition duration-[0.7s]' />
      </div>
    );
  };

  console.log(toggle);
  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    console.log("prev", currentIndex);
  };
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setToggle(!toggle);
    console.log("next", currentIndex);
  };

  const images = [Img, Img2, Img3];

  return (
    <div className='  lg:md:w-full w-[105%] sm:w-[100%] lg:md:h-[724px] h-[571px] absolute top-[720px] sm:top-[600px] p-[40px] bg-[#4A508E] -z-20 mr-[20px]'>
      <div className=' lg:md:w-[990px] xl:w-[1264px] w-[370px] lg:md:h-[644px] h-[571px] gap-[50px] flex flex-col lg:md:mx-auto lg:md:ml-0 ml-[-41px]'>
        <div className=' lg:md:w-[990px] xl:w-[1264px] w-[360px] h-[540px] flex flex-col gap-[70px]'>
          <div className=' hidden md:inline  xl:w-[518px] h-[85px] flex flex-col mx-auto justify-between'>
            <div className=' w-[465px] h-[48px] font-[Urbanist] font-[700] leading-[48px] text-[#F8F9FB] text-3xl tracking-[.07em] text-center'>Your audience wants links</div>
            <div className=' w-[518px] h-[22px] font-[Urbanist] font-[500] leading-[21.6px] text-[#F8F9FB] tracking-[.09em] text-base'>Make it easy for them by linking products to every post and video</div>
          </div>
          <div className='hidden lg:md:inline absolute top-[200px] xl:left-[300px] 2xl:left-[550px] lg:md:left-[150px]'>
            <ImageSlider images={images} interval={1500} alt="Payment Sample" />
          </div>
          <div className='lg:md:hidden inline w-[320px] h-[240px] mr-[60px] ml-[50px] rounded-[15px] absolute top-[250px] left-[-5%]'>
            <ImageSlider images={images} interval={1500} alt="Payment Sample" />
          </div>
        </div>
        <Link href="/nextPage">
          <div className='hidden lg:md:inline w-[139px] h-[54px] rounded-[18px] absolute xl:left-[610px] 2xl:left-[850px] lg:md:left-[470px] text-center bg-white pt-[16px] pr-[24px] pb-[16px] pl-[24px] mx-auto'>
            <div className='w-[91px] h-[22px] font-[Urbanist] font-[600] leading-[21.6px] text-black cursor-pointer'>Try For free</div>
          </div>
        </Link>
        <div>
          <div className='absolute top-[110px] left-[40px] w-[347px] h-[129px] pt-[0px] pl-[16px] pr-[0px] pb-[16px] flex flex-col mx-auto justify-between'>
            <div className='lg:md:hidden inline w-[380px] h-[29px] font-[Urbanist] font-[700] leading-[48px] text-[#F8F9FB] text-3xl tracking-[.07em] text-center absolute right-[10px] bottom-[190px]'>Your audience wants links</div>
            <div className='lg:md:hidden inline w-[303px] h-[57px] font-[Urbanist] font-[500] leading-[21.6px] text-[#F8F9FB] tracking-[.09em] text-base'>Make it easy for them by linking products to every post and video</div>
          </div>
          <Link href="/nextPage">
            <div className='lg:md:hidden inline absolute left-[120px] top-[480px] w-[139px] h-[54px] rounded-[18px] bg-white pt-[16px] pr-[24px] pb-[16px] pl-[24px] mx-auto '>
              <div className='w-[91px] h-[22px] font-[Urbanist] font-[600] leading-[21.6px] text-black cursor-pointer'>Try For free</div>
            </div>
          </Link>
        </div>
      </div>
      <Image src={previous} alt='previous' width={48} height={48} onClick={goToPrevious} className='absolute top-[50%] left-[8%] cursor-pointer hidden md:inline' />
      <Image src={next} alt='next' width={48} height={48} onClick={goToNext} className='absolute top-[50%] left-[85%] cursor-pointer hidden md:inline' />
    </div>
  );
}

export default Section;
