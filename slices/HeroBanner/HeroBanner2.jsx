import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroBanner = () => {
  return (
    <div className="bg-[#E8F8F3] font-satoshi">
      <div className="max-w-screen-lg mx-auto px-8 py-20 text-center">
        <h1 className="font-rational font-bold text-[64px] leading-[72px] text-primary-purple mx-auto mb-8 lg:text-[48px] lg:leading-[52px]">
          Build Better Websites
        </h1>
        <p className="max-w-screen-md mx-auto font-medium text-[22px] leading-[32px] text-[#151515] mb-8 lg:text-[16px] lg:leading-[24px]">
          Prismic is a headless page builder that empowers teams to ship and iterate their websites rapidly, enhancing end-user experiences with each update.
        </p>
        <button className="flex items-center justify-center w-full max-w-xs mx-auto py-4 px-8 text-white font-bold bg-primary-green rounded-[16px] hover:bg-secondary-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green transform transition-all duration-300 ease-in-out lg:w-auto">
          Get Started <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;