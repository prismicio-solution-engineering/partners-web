"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
export const SliderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const sliderContainerRef = React.useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = React.Children.count(children);

  // const scroll = (shift) => {
  //   if (sliderContainerRef.current) {
  //     sliderContainerRef.current.scrollLeft += shift;
  //   }
  // };

  const goToSlide = (index:number) => {
    setCurrentSlide(index);
    const slideWidth = sliderContainerRef.current.scrollWidth / totalSlides;
    const newScrollLeft = slideWidth * index;
    sliderContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  return (
    // <div className="px-4 sm:px-6 lg:px-8 relative">
    //   <button
    //     onClick={() => scroll(-1155)}
    //     className="absolute left-0 z-10 text-silver-darker hidden md:block"
    //     style={{ top: "50%", transform: "translateY(-50%)" }}
    //     aria-label="Scroll left"
    //   >
    //     <ChevronLeftIcon className="h-10 w-10"/>
    //   </button>
    //   <button
    //     onClick={() => scroll(1155)}
    //     className="absolute right-0 z-10 text-silver-darker hidden md:block"
    //     style={{ top: "50%", transform: "translateY(-50%)" }}
    //     aria-label="Scroll right"
    //   >
    //     <ChevronRightIcon className="h-10 w-10"/>
    //   </button>
    //   <div
    //     ref={sliderContainerRef}
    //     className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar flex flex-row max-w-screen-xl mx-auto gap-[5px]"
    //     {...props}
    //   />
    // </div>
    <div className="relative w-full">
      <div className="px-4 sm:px-6 lg:px-8 overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 text-silver-darker hidden md:block"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="h-10 w-10" />
        </button>
        <div
          ref={sliderContainerRef}
          className="flex overflow-x-hidden scroll-smooth scrollbar-hide no-scrollbar max-w-screen-xl mx-auto"
        >
          {children}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 text-silver-darker hidden md:block"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="h-10 w-10" />
        </button>
      </div>
      <div className="absolute w-full flex justify-center bottom-0 p-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${index === currentSlide ? "bg-secondary-orange" : "bg-tertiary-orange"} focus:outline-none`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
