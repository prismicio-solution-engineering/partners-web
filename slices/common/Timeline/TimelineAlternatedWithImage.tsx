import { Container } from "@/components/Container";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const TimelineAlternatedWithImage = ({
  slice,
}: {
  slice: Content.TimelineSliceAlternatedWithImage;
}) => {
  return (
    <Container className="flex flex-col items-center my-16">
      <PrismicRichText
        field={slice.primary.section_title}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-4xl font-headings font-bold text-gray-darker mb-4 text-center">
              {children}
            </h2>
          ),
        }}
      />
      <PrismicRichText
        field={slice.primary.section_description}
        components={{
          paragraph: ({ children }) => (
            <p className="font-copy text-lg text-gray-darker max-w-2xl text-center mx-auto mb-[88px]">
              {children}
            </p>
          ),
        }}
      />
      <>
        {slice.items.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row lg:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} items-center mb-10 last:mb-0 bg-[#F5F5F5] rounded-lg p-6 md:p-10 lg:p-16`}
          >
            <div className="w-full md:w-2/5 px-4 mb-8 md:mb-0">
              <span className="font-copy font-bold text-primary-purple text-xl mb-[24px] block">
                {item.step_number}
              </span>
              <PrismicRichText
                field={item.step_title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="text-xl font-headings font-bold text-gray-darker mb-4">
                      {children}
                    </h3>
                  ),
                }}
              />
              <PrismicRichText field={item.step_description} />
            </div>
            <div className="w-full md:w-3/5 md:px-4 lg:px-12">
              <div className="bg-quaternary-purple border-2 border-gray-darker rounded-lg">
                <PrismicNextImage
                  field={item.milestone_image}
                  className="w-full h-80 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </>
    </Container>
  );
};

export default TimelineAlternatedWithImage;
