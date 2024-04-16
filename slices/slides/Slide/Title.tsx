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
      <div className="w-full flex flex-col justify-between">
        <div className="px-4 self-start">
          <PrismicNextImage
            field={context.logo}
            className="w-[50px] h-[50px] object-contain"
            width={50}
            height={50}
          />
        </div>
        <div className="px-4 pb-4 w-full flex flex-col grow gap-8 justify-end text-left">
          <SlidePrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2
                  className={`text-6xl font-bold font-headings text-primary-${slice.primary.background_color}`}
                >
                  {children}
                </h2>
              ),
            }}
          />
          <div className="">
            <SlidePrismicRichText
              field={slice.primary.content}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-3xl font-copy pb-2 text-gray-dark">
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
