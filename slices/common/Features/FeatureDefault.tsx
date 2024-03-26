import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-4xl font-sans font-bold text-gray-darker mb-6">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 text-gray-darker font-sans text-lg">{children}</p>
  ),
};

const FeatureDefault = ({ slice }: { slice: Content.FeaturesSliceDefault }) => {
  return (
    <div className="bg-white flex flex-col items-center gap-y-8 my-16 max-w-screen-xl mx-auto">
      <div className="max-w-fit text-center font-sans font-semibold text-sm uppercase text-gray-darker rounded-lg bg-quaternary-purple px-3 py-1">
        {slice.primary.eyebrow}
      </div>
      <div className="flex flex-col md:flex-row gap-16 items-center ">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <PrismicRichText field={slice.primary.feature_name} components={serializer} />
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
