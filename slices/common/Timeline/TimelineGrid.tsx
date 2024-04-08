import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const TimelineGrid = ({ slice }: { slice: Content.TimelineSliceGrid }) => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-screen-xl my-16">
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
      <div className="flex flex-wrap justify-start gap-10">
        {slice.items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-8 w-[30%] bg-silver-light rounded-lg text-center shadow-sm"
          >
            <span className="font-sans font-bold text-primary-purple text-xl mb-2">
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
        ))}
      </div>
    </div>
  );
};

export default TimelineGrid;
