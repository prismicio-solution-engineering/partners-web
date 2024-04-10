import { Button } from "@/components/Button";
import { PrismicRichText } from "@/components/PrismicRichText";
import { isFilled, type Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const serializer = {
  heading1: ({ children }) => (
    <h1 className="text-gray-darker text-4xl lg:text-5xl font-sans font-bold mb-6">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="font-sans text-lg text-gray-base max-w-2xl mx-auto mb-4">
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
    <div className="relative overflow-hidden mt-16">
      <div className="max-w-screen-xl mx-auto py-16 px-8 md:py-24 rounded-lg">
        <div className="flex flex-col lg:flex-row items-center -mx-4 px-4 gap-16 lg:text-left text-center">
          <div className="w-full lg:w-1/2">
            <PrismicRichText
              field={slice.primary.title}
              components={serializer}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={serializer}
            />
            {isFilled.link(slice.primary.button_link) && (
              <div className="text-center lg:text-left">
                <Button
                  field={slice.primary.button_link}
                  variant="primary"
                  color="black"
                >
                  {slice.primary.button_label}
                </Button>
              </div>
            )}
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
