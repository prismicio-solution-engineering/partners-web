import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NewsList`.
 */
export type NewsListProps = SliceComponentProps<Content.NewsListSlice>;

/**
 * Component for "NewsList" Slices.
 */
const NewsList = ({ slice }: NewsListProps): JSX.Element => {
  return (
    <div className="py-[80px] px-[24px] md:px-[84px] bg-[#F5E6FF]">
      <div className="text-center mb-[64px]">
        <PrismicRichText
          field={slice.primary.section_title}
          components={{
            heading1: ({ children }) => (
              <h2 className="text-[64px] md:text-[48px] leading-[72px] md:leading-[52px] font-bold text-[#8E44EC] mb-[64px]" style={{ letterSpacing: '-0.03em' }}>
                {children}
              </h2>
            ),
          }}
        />
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[48px]">
        {slice.items.map((item, index) => (
          <PrismicNextLink
            key={index}
            field={item.news_link}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8E44EC] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex flex-col"
          >
            <div className="">
              <PrismicNextImage
                field={item.news_image}
                className="object-cover aspect-video"
              />
            </div>
            <div className="px-[16px] py-[24px] grow flex flex-col">
              <PrismicRichText
                field={item.news_title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="font-medium text-[32px] md:text-[24px] leading-[36px] md:leading-[30px] text-[#151515] mb-[16px]" style={{ letterSpacing: '-0.03em' }}>
                      {children}
                    </h3>
                  ),
                }}
              />
              <PrismicRichText
                field={item.news_description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-medium text-[18px] md:text-[16px] leading-[28px] md:leading-[24px] text-[#1F1F1F] mb-[32px] grow" style={{ letterSpacing: '-0.01em' }}>
                      {children}
                    </p>
                  ),
                }}
              />
              <div className="text-left">
                <button
                  className="text-white bg-[#8E44EC] hover:bg-[#B382F2] focus:outline-none focus:ring focus:ring-[#8E44EC] rounded-[8px] px-[24px] py-[12px] transition-colors duration-300"
                >
                  {item.link_label}
                </button>
              </div>
            </div>
          </PrismicNextLink>
        ))}
      </div>
    </div>
  );
};

export default NewsList;