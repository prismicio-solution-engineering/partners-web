import { PrismicNextImage } from "@prismicio/next";
import {
  SlideSliceContentTwoColumns,
  SliderDocumentData,
} from "@/prismicio-types";
import { SlidePrismicRichText } from "./SlidePrismicRichText";

const ContentTwoCol = ({
  slice,
  context,
}: {
  slice: SlideSliceContentTwoColumns;
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
        <div className="flex flex-row gap-10">
          <div className="h-full text-left flex flex-col justify-start px-4 pt-10 pb-4">
            <SlidePrismicRichText field={slice.primary.content_left} />
          </div>
          <div className="h-full text-left flex flex-col justify-start px-4 pt-10 pb-4">
            <SlidePrismicRichText field={slice.primary.content_right} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTwoCol;
