import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { Content, isFilled } from "@prismicio/client";
import { Button } from "@/components/Button";
import { ScrollContainer } from "@/components/ScrollContainer";

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
      <div className="flex flex-col items-center my-16 mx-auto text-center">
        <PrismicRichText field={slice.primary.section_title} />
        {isFilled.richText(slice.primary.section_description) && (
          <PrismicRichText field={slice.primary.section_description} />
        )}
        <div className="max-w-screen-2xl mx-auto relative">
          <div
          >
            <ScrollContainer gap={5}>
            {slice.items.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 h-[100px] w-1/3 grid items-center justify-center"
              >
                <PrismicNextLink
                  className="block rounded-lg overflow-hidden cursor-pointer transform hover:scale-110 transition-transform duration-300 object-contain w-80"
                  field={item.partner_link}
                >
                  <PrismicNextImage
                    className="mx-auto"
                    height={100}
                    field={item.partner_logo}
                  />
                </PrismicNextLink>
              </div>
            ))}
            </ScrollContainer>
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
