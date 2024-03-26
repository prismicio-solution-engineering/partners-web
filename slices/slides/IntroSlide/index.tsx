import { PrismicRichText } from "@/components/PrismicRichText";
import { IntroSlideSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `IntroSlide`.
 */
export type IntroSlideProps = SliceComponentProps<Content.IntroSlideSlice>;

/**
 * Component for "IntroSlide" Slices.
 */
const IntroSlide = ({ slice }: IntroSlideProps): JSX.Element => {
  return (
    <div className="relative">
      <div
        className={`overflow-hidden relative border border-silver-base shadow-sm px-10 py-20 mx-4 rounded-lg mt-16 mb-5 bg-quaternary-${slice.primary.background_color}`}
      >
        <div className="flex flex-col md:flex-row w-full h-2/3 inset-0 mb-10 overflow-clip justify-between">
          <div className="w-1/2 text-left content-end px-4 pt-10 pb-4 overflow-y-scroll">
            <p className="text-primary-orange text-2xl font-sans font-bold">
              {slice.primary.date}
            </p>
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-7xl font-bold font-sans mt-10 text-gray-darker">
                    {children}
                  </h2>
                ),
                paragraph: ({ children }) => (
                  <p className="text-xl font-sans pb-2 text-gray-base">
                    {children}
                  </p>
                ),
                listItem: ({ children }) => (
                  <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2 text-xl list-inside text-gray-base">
                    {children}
                  </li>
                ),
                oListItem: ({ children }) => (
                  <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2 text-xl list-inside text-gray-base">
                    {children}
                  </li>
                ),
                hyperlink: ({ children, node }) => (
                  <PrismicNextLink
                    field={node.data}
                    className="text-gray-base font-sans text-xl underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out"
                  >
                    {children}
                  </PrismicNextLink>
                ),
                label: ({ node, children }) => {
                  return (
                    <>
                      {node.data.label === "highlight" && (
                        <span className={`text-primary-${slice.primary.background_color} font-semibold`}>
                          {children}
                        </span>
                      )}
                    </>
                  );
                },
              }}
            />
          </div>
          <div className="w-1/2">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-full object-cover rounded-xl border border-1 border-gray-darker"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
