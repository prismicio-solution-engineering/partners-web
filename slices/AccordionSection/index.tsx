"use client"
import React, { useState } from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';

/**
 * Props for `AccordionSection`.
 */
export type AccordionSectionProps = SliceComponentProps<Content.AccordionSectionSlice>;

/**
 * Component for "AccordionSection" Slices.
 */
const AccordionSection = ({ slice }: AccordionSectionProps): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E8F8F3] py-[64px] px-8 md:px-[84px]">
      <div className="max-w-[1440px] mx-auto grid gap-[48px]">
        <div className="flex justify-center">
          <h1 className="text-[64px] md:text-[48px] leading-[72px] md:leading-[52px] font-bold tracking-[-3%] text-[#151515]">
            {slice.primary.section_title}
          </h1>
        </div>
        {slice.items.map((item, index) => (
          <div
            key={index}
            className={`shadow-md border border-[#EEEEEE] rounded-lg overflow-hidden ${
              openIndex === index ? 'bg-[#FFFFFF]' : 'bg-[#F7F7F7]'
            }`}
          >
            <button
              className="w-full px-[32px] py-[24px] text-left flex justify-between items-center"
              onClick={() => handleClick(index)}
            >
              <span className="text-[22px] md:text-[16px] leading-[32px] md:leading-[24px] font-bold tracking-[-1%]">
                {item.accordion_title}
              </span>
              <i
                className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-[#3BBB96]`}
              />
            </button>
            <div
              className={`transition-max-height ease-in-out ${
                openIndex === index ? 'max-h-[1000px] duration-700' : 'max-h-0 duration-0'
              } overflow-hidden`}
            >
              <div className="px-[32px] pb-[24px]">
                <PrismicRichText
                  field={item.accordion_content}
                  components={{
                    paragraph: ({ children }) => <p className="text-[18px] md:text-[16px] leading-[28px] md:leading-[24px] tracking-[-1%]">{children}</p>,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;