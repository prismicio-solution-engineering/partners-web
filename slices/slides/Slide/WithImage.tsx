import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SlideSliceWithImage, SliderDocumentData } from "@/prismicio-types";
import { SlidePrismicRichText } from "./SlidePrismicRichText";

const WithImage = ({
  slice,
  context,
}: {
  slice: SlideSliceWithImage;
  context: SliderDocumentData;
}): JSX.Element => {
  return (
    <>
      {!slice.primary.media_side && (
        <div className="w-1/2 h-full border border-1 border-gray-darker rounded-xl">
          <PrismicNextImage
            field={slice.primary.image}
            width={599}
            height={633}
            className="w-full h-full object-contain rounded-xl "
          />
        </div>
      )}
      <div className="w-1/2">
        <div className="flex flex-row gap-10 justify-start px-4">
          <PrismicNextImage
            field={context.logo}
            className="w-[50px] h-[50px] object-contain"
            width={50}
            height={50}
          />
          <div className="text-left flex flex-col">
            <PrismicRichText
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
          />
        </div>
      </div>
      {slice.primary.media_side && (
        <div className="w-1/2 h-full border border-1 border-gray-darker rounded-xl">
          <PrismicNextImage
            field={slice.primary.image}
            width={599}
            height={633}
            className="w-full h-full object-contain rounded-xl "
          />
        </div>
      )}
    </>
  );
};

export default WithImage;
