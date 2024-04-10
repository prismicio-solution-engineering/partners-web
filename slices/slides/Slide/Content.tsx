import { SlidePrismicRichText } from "./SlidePrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SlideSliceContentOnly, SliderDocumentData } from "@/prismicio-types";

const Content = ({
  slice,
  context,
}: {
  slice: SlideSliceContentOnly;
  context: SliderDocumentData;
}): JSX.Element => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row gap-10 justify-start px-4">
          <PrismicNextImage
            field={context.logo}
            className="w-[50px] h-[50px] object-contain"
            width={50}
            height={50}
          />
          <div className="text-left flex flex-col">
            <SlidePrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2
                    className={`text-4xl font-bold font-sans text-gray-darker`}
                  >
                    {children}
                  </h2>
                ),
                heading3: ({ children }) => (
                  <h3 className="text-3xl font-semibold font-sans text-gray-base">
                    {children}
                  </h3>
                ),
              }}
            />
          </div>
        </div>
        <div className="h-full text-left flex flex-col justify-start px-4 pt-10 pb-4">
          <SlidePrismicRichText
            field={slice.primary.content}
            components={{
              heading4: ({ children }) => (
                <h4
                  className={`text-2xl font-semibold font-sans mb-2 text-gray-dark`}
                >
                  {children}
                </h4>
              ),
              heading5: ({ children }) => (
                <h5
                  className={`text-2xl font-normal font-sans mb-2 text-gray-base`}
                >
                  {children}
                </h5>
              ),
              paragraph: ({ children }) => (
                <p className="text-lg font-sans pb-2 text-gray-base">
                  {children}
                </p>
              ),
              listItem: ({ children }) => (
                <li className="list-disc pl-1 last:mb-0 text-xl list-inside text-gray-base">
                  {children}
                </li>
              ),
              oListItem: ({ children }) => (
                <li className="list-decimal pl-1 last:mb-0 text-xl list-inside text-gray-base">
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
                    {node.data.label === "inline code" && (
                      <span
                        className={`px-2 py-1 bg-silver-light border border-silver-base font-mono rounded-md text-lg font-normal text-primary-${slice.primary.background_color}`}
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
      </div>
    </>
  );
};

export default Content;
