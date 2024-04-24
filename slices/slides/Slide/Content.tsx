import { SlidePrismicRichText } from "../../../components/SlidePrismicRichText";
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
            <SlidePrismicRichText field={slice.primary.title} />
          </div>
        </div>
        <div className="text-left flex flex-col justify-center px-4 pt-10 pb-4">
          <SlidePrismicRichText
            field={slice.primary.content}
            components={{
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
      </div>
    </>
  );
};

export default Content;
