import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * Props for `TextSection`.
 */
export type TextSectionProps = SliceComponentProps<Content.TextSectionSlice>;

/**
 * Component for "TextSection" Slices.
 */
const TextSection = ({ slice }: TextSectionProps): JSX.Element => {
  const isTwoColumn = slice.variation === "twoColumn";

  return (
    <section className={`p-8 bg-[#E8F8F3]`}>
      <div
        className={`max-w-5xl mx-auto  ${isTwoColumn ? "md:grid md:grid-cols-2 md:gap-4 md:space-x-4" : ""}`}
      >
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default TextSection;
