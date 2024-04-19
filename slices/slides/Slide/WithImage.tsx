import { PrismicNextImage } from "@prismicio/next";
import { SlideSliceWithImage, SliderDocumentData } from "@/prismicio-types";
import { SlidePrismicRichText } from "../../../components/SlidePrismicRichText";

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
      <div className="w-1/2 flex flex-col">
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
        <div className="text-left flex flex-col justify-center grow px-4 pt-10 pb-4">
          <SlidePrismicRichText field={slice.primary.content} />
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
