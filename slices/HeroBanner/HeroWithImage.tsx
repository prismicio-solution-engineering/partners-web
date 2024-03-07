import { Button } from "@/components/Button";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const serializer = {
  paragraph: ({ children }) => (
    <p className="text-[#171717] text-center lg:text-left mb-8">
      {children}
    </p>
  ),
};

const HeroWithImage = ({
  slice,
}: {
  slice: Content.HeroBannerSliceWithImage;
}) => {
  return (
    <div className="relative pt-16 pb-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F5F5F5] rounded-lg">
        <div className="flex flex-wrap items-center -mx-4 px-4">
          <div className="w-full lg:w-1/2 px-4">
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.description} components={serializer}/>
            <div className="text-center lg:text-left">
              <Button
                field={slice.primary.button_link}
                variant="primary"
                color="purple"
              >
                {slice.primary.button_label}
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg overflow-hidden">
              <PrismicNextImage
                field={slice.primary.image}
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithImage;
