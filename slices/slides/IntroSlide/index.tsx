"use client";
import { IntroSlideSlice, SliderDocumentData } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { SlidePrismicRichText } from "../../../components/SlidePrismicRichText";

/**
 * Props for `IntroSlide`.
 */
export type IntroSlideProps = SliceComponentProps<Content.IntroSlideSlice>;

/**
 * Component for "IntroSlide" Slices.
 */
const IntroSlide = ({
  slice,
  context,
}: {
  slice: IntroSlideSlice;
  context: SliderDocumentData;
}): JSX.Element => {
  return (
    <div>
      <div
        className={`w-[1280px] h-[715px] mx-auto relative border border-1 border-silver-base shadow-sm p-10 rounded-lg bg-quaternary-${slice.primary.background_color}`}
      >
        <div className="flex gap-10 flex-row w-full inset-0 mb-10 overflow-clip justify-between">
          <div className="w-1/2 flex flex-col justify-between">
            <PrismicNextImage
              field={context.logo}
              className="w-[50px] h-[50px] object-contain"
              width={50}
              height={50}
            />
            <div className="text-left flex flex-col content-end">
              <p
                className={`text-primary-${slice.primary.background_color} text-2xl font-copy font-bold`}
              >
                {slice.primary.date}
              </p>
              <SlidePrismicRichText
                field={slice.primary.title}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-7xl font-bold font-headings mt-4 mb-4 text-gray-darker break-words">
                      {children}
                    </h2>
                  ),
                  label: ({ node, children }) => {
                    return (
                      <>
                        {node.data.label === "highlight" && (
                          <span
                            className={`text-primary-${slice.primary.background_color} font-semibold`}
                          >
                            {children}
                          </span>
                        )}
                      </>
                    );
                  },
                }}
              />
              <SlidePrismicRichText
                field={slice.primary.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-2xl font-copy font-normal pb-1 text-gray-dark">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </div>
          <div className="w-1/2 h-full border border-1 border-gray-darker rounded-xl">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-full object-contain rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
