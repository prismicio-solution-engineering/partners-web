"use client";
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
    <div className="w-[1280]">
      <div
        className={`w-[1280px] h-[715px] mx-auto relative border border-1 border-silver-base shadow-sm p-10 rounded-lg mb-5 bg-quaternary-${slice.primary.background_color}`}
      >
        <div className="flex flex-col md:flex-row w-full h-full inset-0 mb-10 overflow-clip justify-between">
          {slice.variation === "default" && (
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
            </div>
          )}
          {slice.variation === "index" && (
            <div className="w-1/2 flex flex-col gap-y-12 text-left content-start px-4 pt-10 pb-4 overflow-y-scroll">
              <PrismicRichText
                field={slice.primary.title}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-5xl font-normal font-sans mt-10 text-gray-darker">
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
              <div className="text-xl font-sans text-gray-base">
                {slice.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex flex-row items-center gap-6">
                      <span className="text-4xl">
                        {item.summary_item_number}{" "}
                      </span>
                      <PrismicRichText
                        field={item.summary_item_name}
                        components={{
                          paragraph: ({ children }) => (
                            <span className="text-2xl font-sans text-gray-base">
                              {children}
                            </span>
                          ),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
