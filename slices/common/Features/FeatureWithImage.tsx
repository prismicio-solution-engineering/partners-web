import { Container } from "@/components/Container";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-4xl font-headings font-bold text-gray-darker mb-6">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="font-copy text-lg text-gray-darker mb-8">{children}</p>
  ),
};

const FeatureWithImage = ({
  slice,
}: {
  slice: Content.FeaturesSliceWithImage;
}) => {
  return (
    <Container className="bg-white">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {slice.primary.image_side === false && (
          <div className="md:w-1/2">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-80 md:h-auto rounded-lg object-cover bg-[#E8F8F3]"
            />
          </div>
        )}
        <div className="md:w-1/2">
          <div className="max-w-fit text-center font-copy font-semibold text-sm uppercase text-gray-darker rounded-lg bg-[#E8F8F3] px-3 py-1 mb-4">
            {slice.primary.eyebrow}
          </div>
          <PrismicRichText
            field={slice.primary.feature_name}
            components={serializer}
          />
          <PrismicRichText
            field={slice.primary.feature_description}
            components={serializer}
          />
        </div>
        {slice.primary.image_side === true && (
          <div className="md:w-1/2">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-80 md:h-auto rounded-lg object-cover bg-[#E8F8F3]"
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default FeatureWithImage;
