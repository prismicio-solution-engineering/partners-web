import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const serializer = {
  paragraph: ({ children }) => (
    <p className="mb-4 text-[#171717] font-sans text-lg">{children}</p>
  ),
};


const FeatureDefault = ({
  slice,
}: {
  slice: Content.FeaturesSliceDefault;
}) => {

  return (
    <div className="bg-[#ffffff] py-16 sm:px-6 lg:px-8 flex flex-col items-center gap-y-8 my-16 max-w-screen-xl mx-auto px-8">
      <div className="max-w-fit text-center font-sans font-semibold text-sm uppercase text-[#171717] rounded-lg bg-[#F5E6FF] px-3 py-1">
        {slice.primary.eyebrow}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <PrismicRichText
            field={slice.primary.feature_name}
          />
        </div>
        <div className="md:w-1/2">
          <PrismicRichText
            field={slice.primary.feature_description}
            components={serializer}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureDefault;
