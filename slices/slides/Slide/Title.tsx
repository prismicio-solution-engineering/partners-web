import { PrismicNextImage } from "@prismicio/next";
import { SlideSliceTitle, SliderDocumentData } from "@/prismicio-types";
import { SlidePrismicRichText } from "../../../components/SlidePrismicRichText";

const Title = ({
  slice,
  context,
}: {
  slice: SlideSliceTitle;
  context: SliderDocumentData;
}): JSX.Element => {
  return (
    <>
      <div className="flex gap-10 flex-row w-full inset-0 overflow-clip justify-between">
        {!slice.primary.media_side && (
          <div
            className={`w-1/2 h-full border border-1 border-gray-darker rounded-xl bg-tertiary-${slice.primary.background_color}`}
          >
            <PrismicNextImage
              field={slice.primary.image}
              width={599}
              height={633}
              className="w-full h-full object-contain rounded-xl "
            />
          </div>
        )}
        <div className="w-1/2 flex flex-col justify-between">
          <PrismicNextImage
            field={context.logo}
            className={`w-[50px] h-[50px] object-contain ${!slice.primary.media_side && "self-end"}`}
            width={50}
            height={50}
          />
          <div className="text-left flex flex-col content-end">
            <p
              className={`text-primary-${slice.primary.background_color} text-2xl font-copy font-bold`}
            >
              {slice.primary.eyebrow}
            </p>
            <SlidePrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-5xl font-bold font-headings mt-4 mb-4 text-gray-darker break-words">
                    {children}
                  </h2>
                ),
              }}
            />
            <SlidePrismicRichText
              field={slice.primary.content}
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
        {slice.primary.media_side && (
          <div
            className={`w-1/2 h-full border border-1 border-gray-darker rounded-xl bg-tertiary-${slice.primary.background_color}`}
          >
            <PrismicNextImage
              field={slice.primary.image}
              width={599}
              height={633}
              className="w-full h-full object-contain rounded-xl "
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Title;
