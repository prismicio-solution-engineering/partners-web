import { PrismicRichText } from "@/components/PrismicRichText";
import { SliderDocumentData, SliderIndexSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SliderIndex`.
 */
export type SliderIndexProps = SliceComponentProps<Content.SliderIndexSlice>;

/**
 * Component for "SliderIndex" Slices.
 */
const SliderIndex = ({
  slice,
  context,
}: {
  slice: SliderIndexSlice;
  context: SliderDocumentData;
}): JSX.Element => {
  return (
    <div className="w-[1280]">
      <div
        className={`w-[1280px] h-[715px] mx-auto relative border border-1 border-silver-base shadow-sm p-10 rounded-lg bg-quaternary-${slice.primary.background_color}`}
      >
        <div className="flex flex-row w-full h-full inset-0 mb-10 overflow-clip justify-between">
          <div className="w-1/2 flex flex-col gap-y-12 text-left content-start px-4 pt-10 pb-4">
            <div className="flex flex-row gap-10 justify-start">
              <PrismicNextImage
                field={context.logo}
                className="w-[72px] h-[72px] object-contain"
                width={72}
                height={72}
              />
              <PrismicRichText
                field={slice.primary.title}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-7xl font-semibold font-sans text-gray-darker">
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
            </div>
            <div className="text-xl font-sans text-gray-base">
              {slice.items.map((item, idx) => (
                <div key={idx} className="flex flex-col my-8">
                  <div className="flex flex-row items-center gap-6">
                    <span
                      className={`text-4xl text-secondary-${slice.primary.background_color}`}
                    >
                      {(idx += 1)}{" "}
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
          <div className="w-1/2 h-full border border-1 border-gray-darker rounded-xl">
            <PrismicNextImage
              field={slice.primary.image}
              width={599}
              height={633}
              className="w-full h-full object-contain rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderIndex;
