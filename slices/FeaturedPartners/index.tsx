import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { Content, isFilled } from "@prismicio/client";
import { Button } from "@/components/Button";

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
      <div className="flex flex-col items-center my-16 mx-auto text-center max-w-full">
        <PrismicRichText field={slice.primary.section_title} />
        {isFilled.richText(slice.primary.section_description) && (
          <PrismicRichText field={slice.primary.section_description} />
        )}
        <div className="px-4">
          <div
            className="flex flex-row gap-8 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
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
                    className="mx-auto h-full w-full object-contain"
                    field={item.partner_logo}
                  />
                </PrismicNextLink>
              </div>
            ))}
          </div>
        </div>
        <Button field={slice.primary.see_all_button_link} variant="link">
          {slice.primary.see_all_button_label}
        </Button>
      </div>
    </section>
  );
};

export default FeaturedPartners;
