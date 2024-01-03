import React from 'react';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { FaCircle } from 'react-icons/fa';
import { Content } from '@prismicio/client';

/**
 * Props for `Timeline`.
 */
export type TimelineProps = SliceComponentProps<Content.TimelineSlice>;

/**
 * Component for "Timeline" Slices.
 */
const Timeline = ({ slice }: TimelineProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center py-12 space-y-12 bg-[#E8F8F3]">
      <div className="text-center">
        <PrismicRichText
          field={slice.primary.section_title}
          components={{
            heading1: ({ children }) => <h1 className="text-[64px] leading-[72px] font-bold text-[#50d71e] mb-4">{children}</h1>,
          }}
        />
        <PrismicRichText
          field={slice.primary.section_description}
          components={{
            paragraph: ({ children }) => <p className="text-[#303030]">{children}</p>,
          }}
        />
      </div>
      <div className="relative w-full max-w-screen-lg p-6">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#50d71e]"></div>
        {slice.items.map((item, index) => (
          <div key={index} className={`flex ${(index % 2 === 0) ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}>
            <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              {item.step_image.url && (
                <PrismicNextImage
                  className={`hidden md:block object-cover w-1/2 aspect-square min-h-[24px] mb-4 rounded-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
                  field={item.step_image}
                />
              )}
              <h5 className="text-[20px] leading-[26px] font-medium text-[#50d71e]">{item.step_title}</h5>
              <PrismicRichText
                field={item.step_description}
                components={{
                  paragraph: ({ children }) => <p className="text-[#505050]">{children}</p>,
                }}
              />
            </div>
            <div className="absolute -ml-3 left-1/2 transform">
              <FaCircle className="text-[#50d71e]" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;