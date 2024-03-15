"use client";
import React from "react";
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
export const ScrollContainer = ({
  ...props
}: {
  children: React.ReactNode;
}) => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (shift) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += shift;
    }
  };

  return (
    <div className="bg-white mt-16 px-4 sm:px-6 lg:px-8 relative">
      <button
        onClick={() => scroll(-300)}
        className="absolute left-0 z-10 text-silver-darker hidden md:block"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Scroll left"
      >
        <ChevronLeftIcon className="h-5 w-5"/>
      </button>
      <button
        onClick={() => scroll(300)}
        className="absolute right-0 z-10 text-silver-darker hidden md:block"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Scroll right"
      >
        <ChevronRightIcon className="h-5 w-5"/>
      </button>
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar px-2 flex flex-row gap-10"
        {...props}
      />
    </div>
  );
};
