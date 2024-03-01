import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";

const serializer = {
  heading3: ({ children }) => (
    <h3
      // className="font-sans font-bold text-3xl text-[#171717] mb-8"
      // className="text-4xl font-sans font-bold text-[#171717] text-center mb-4"
      className="text-xl font-sans font-bold text-[#171717] mb-4"
    >
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p
      // className="mb-4 text-[#171717] font-sans text-lg"
      className="font-sans text-lg text-[#171717] max-w-2xl text-center mx-auto mb-[88px]"
    >
      {children}
    </p>
  ),
};

/**
 * Props for `FeaturedPartners`.
 */
export type FeaturedPartnersProps =
  SliceComponentProps<Content.FeaturedPartnersSlice>;

/**
 * Component for "FeaturedPartners" Slices.
 */
const FeaturedPartners = ({ slice }: FeaturedPartnersProps): JSX.Element => {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center my-16 mx-auto max-w-full">
          <PrismicRichText field={slice.primary.section_title} />
          <PrismicRichText field={slice.primary.section_description} />
          <div className="px-4">
            <div
              className="flex flex-row gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {slice.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-none w-1/5 min-w-1/5"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <PrismicNextLink
                    className="block h-24 rounded-lg overflow-hidden cursor-pointer transform hover:scale-110 transition-transform duration-300"
                    field={item.partner_link}
                  >
                    <PrismicNextImage
                      className="mx-auto h-full w-full object-cover"
                      field={item.partner_logo}
                    />
                  </PrismicNextLink>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <PrismicNextLink field={slice.primary.see_all_button_link}>
              <button className="flex items-center justify-center w-full max-w-xs mx-auto py-4 px-8 text-[#171717] font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4 mt-4 transform transition-all duration-300 ease-in-out lg:w-auto">
                {slice.primary.see_all_button_label}
              </button>
            </PrismicNextLink>
          </div>
      </div>
    </section>
  );
};

export default FeaturedPartners;
