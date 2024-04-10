import { PrismicNextImage } from "@prismicio/next";
import { SlideSliceTitle, SliderDocumentData } from "@/prismicio-types";
import { SlidePrismicRichText } from "./SlidePrismicRichText";

const Title = ({
  slice,
  context,
}: {
  slice: SlideSliceTitle;
  context: SliderDocumentData;
}): JSX.Element => {
  return (
    <>
      <div className="w-full">
        <div className="px-4">
          <PrismicNextImage
            field={context.logo}
            className="w-[50px] h-[50px] object-contain"
            width={50}
            height={50}
          />
        </div>
        <div className="h-full px-4 pt-28 pb-4 w-fit mx-auto flex flex-col gap-14">
          <SlidePrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2
                  className={`text-6xl font-bold font-sans text-center text-primary-${slice.primary.background_color}`}
                >
                  {children}
                </h2>
              ),
            }}
          />
          <div className="grid grid-cols-2">
            <SlidePrismicRichText
              field={slice.primary.content}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-3xl font-sans pb-2 text-gray-dark font-semibold">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
