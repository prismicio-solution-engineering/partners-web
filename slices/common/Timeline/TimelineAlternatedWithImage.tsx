import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const TimelineAlternatedWithImage = ({
  slice,
}: {
  slice: Content.TimelineSliceAlternatedWithImage;
}) => {
  return (
    <div className="flex flex-col items-center my-16">
      <PrismicRichText field={slice.primary.section_title} />
      <PrismicRichText
        field={slice.primary.section_description}
        components={{
          paragraph: ({ children }) => (
            <p className="font-sans text-lg text-gray-darker max-w-2xl text-center mx-auto mb-[88px]">
              {children}
            </p>
          ),
        }}
      />
      <div className="w-full max-w-screen-xl mx-auto ">
        {slice.items.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} items-center mb-10 last:mb-0 bg-[#F5F5F5] rounded-lg p-10 md:p-16`}
          >
            <div className="md:w-2/5 px-4 mb-8 md:mb-0">
              <span className="font-sans font-bold text-primary-purple text-xl mb-[24px] block">
                {item.step_number}
              </span>
              <PrismicRichText
                field={item.step_title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="text-xl font-sans font-bold text-gray-darker mb-4">
                      {children}
                    </h3>
                  ),
                }}
              />
              <PrismicRichText field={item.step_description} />
            </div>
            <div className="md:w-3/5 px-12">
              <div className="bg-quaternary-purple border-2 border-gray-darker rounded-lg">
                <PrismicNextImage
                  field={item.milestone_image}
                  className="w-full h-80 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineAlternatedWithImage;
