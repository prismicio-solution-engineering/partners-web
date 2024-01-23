import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import { FaArrowRight } from "react-icons/fa";

import { Content, isFilled } from "@prismicio/client";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/solid";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slice.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  return (
    <div className="bg-[#E8F8F3] font-satoshi">
      <div className="max-w-screen-lg mx-auto px-8 py-20 text-center">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-center text-[48px] leading-[52px] md:text-[64px] md:leading-[72px] font-bold tracking-[-0.03em] text-[#8E44EC] mx-auto mb-8">
                {children}
              </h1>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p className="max-w-screen-md mx-auto font-medium text-[22px] leading-[32px] text-[#151515] mb-8 lg:text-[16px] lg:leading-[24px]">
                {children}
              </p>
            ),
          }}
        />
        {isFilled.link(slice.primary.button_link) && (
          <PrismicNextLink
            className="flex items-center justify-center w-full max-w-xs mx-auto py-4 px-8 text-white font-bold bg-[#3BBB96] rounded-[16px] hover:bg-[#75DCC0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3BBB96] transform transition-all duration-300 ease-in-out lg:w-auto"
            field={slice.primary.button_link}
          >
            {slice.primary.button_label}
            <ChevronRightIcon className="ml-2 w-5 h-5" />
          </PrismicNextLink>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
