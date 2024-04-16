import { PrismicNextImage } from "@prismicio/next";
import {
  SlideSliceContentTwoColumns,
  SliderDocumentData,
} from "@/prismicio-types";
import { SlidePrismicRichText } from "../../../components/SlidePrismicRichText";

const ContentTwoCol = ({
  slice,
  context,
}: {
  slice: SlideSliceContentTwoColumns;
  context: SliderDocumentData;
}): JSX.Element => {
  return (
    <>
      <div className="w-full flex flex-col">
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
        <div className="flex flex-col grow">
          <div className="flex flex-row gap-10 grow">
            <div className="h-full w-1/2 text-left flex flex-col justify-center px-4 pb-4">
              <SlidePrismicRichText field={slice.primary.content_left} />
            </div>
            <div className="h-full w-1/2 text-left flex flex-col justify-center px-4 pb-4">
              <SlidePrismicRichText field={slice.primary.content_right} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTwoCol;
