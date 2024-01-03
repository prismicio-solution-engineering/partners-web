import React from 'react';
import { PhotographIcon } from '@heroicons/react/solid';

const HeroBanner = () => (
  <div className="relative bg-[#E6F7FE] px-8 pt-[88px] pb-[160px] flex flex-col items-center justify-center text-center overflow-hidden">
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-[64px] leading-[72px] font-bold text-[#151515] tracking-[-0.03em] sm:text-[48px] sm:leading-[52px]">
        Lightning Fast Website Building
      </h1>
      <p className="mt-8 text-[28px] leading-[42px] font-medium text-[#303030] tracking-[-0.01em] sm:text-[24px] sm:leading-[36px]">
        Create responsive websites with ease, without compromise on speed or aesthetics.
      </p>
      <button className="mt-12 inline-flex items-center justify-center px-[64px] py-[16px] text-[#FFFFFF] bg-[#59B5F8] rounded-lg text-[18px] leading-[24px] font-bold tracking-[-0.01em] hover:bg-[#87D9FD] focus:outline-none focus:ring-2 focus:ring-[#8E44EC] focus:ring-opacity-50 transition-all">
        Get Started
        <PhotographIcon className="ml-3 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
    <img
      src="https://source.unsplash.com/random"
      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block w-full h-full object-cover mix-blend-multiply opacity-20"
      alt="Hero Background"
    />
  </div>
);

export default HeroBanner;