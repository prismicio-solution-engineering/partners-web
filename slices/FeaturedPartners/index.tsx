import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SliceComponentProps } from "@prismicio/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

/**
 * Props for `FeaturedPartners`.
 */
export type FeaturedPartnersProps = SliceComponentProps<Content.FeaturedPartnersSlice>;

/**
 * Component for "FeaturedPartners" Slices.
 */
const FeaturedPartners = ({ slice }: FeaturedPartnersProps): JSX.Element => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-6 sm:px-8 lg:py-24">
        <PrismicRichText
          field={slice.primary.section_title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-center text-[48px] leading-[52px] md:text-[64px] md:leading-[72px] font-bold tracking-[-0.03em] text-[#151515] mb-12">
                {children}
              </h2>
            ),
          }}
        />

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {slice.items.map((item, index) => (
              <PrismicNextLink
                key={index}
                field={item.partner_link}
                className="transition-transform hover:scale-105">
                <div className="p-4 rounded-lg h-24 w-52 object-fill flex justify-center items-center shadow-sm">
                  <PrismicNextImage
                    field={item.partner_logo}
                    height={96}
                  />
                </div>
              </PrismicNextLink>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <PrismicNextLink field={slice.primary.see_all_button_link}>
            <button className="flex items-center justify-center w-full max-w-xs mx-auto py-4 px-8 text-white font-bold bg-[#3BBB96] rounded-[16px] hover:bg-[#75DCC0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3BBB96] transform transition-all duration-300 ease-in-out lg:w-auto">
              {slice.primary.see_all_button_label}
              <ChevronRightIcon className="ml-2 w-5 h-5" />
            </button>
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPartners;