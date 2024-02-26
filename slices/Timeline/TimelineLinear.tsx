import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

const serializer = {
  heading2: ({ children }) => (
    <h2
      // className="font-sans font-bold text-3xl text-[#171717] mb-8"
      className="text-4xl font-sans font-bold text-[#171717] text-center mb-4"
    >
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3
      // className="font-sans font-bold text-3xl text-[#171717] mb-8"
      // className="text-4xl font-sans font-bold text-[#171717] text-center mb-4"
      className="text-xl font-sans font-bold text-[#171717] mb-4"
    >
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p
      // className="mb-4 text-[#171717] font-sans text-lg"
      className="font-sans text-lg text-[#171717] max-w-2xl text-center mx-auto mb-[88px]"
    >
      {children}
    </p>
  )
};

const TimelineLinear = ({ slice }: { slice: Content.TimelineSliceLinear }) => {
  return (
    <div className="flex flex-col items-center my-16 mx-auto max-w-screen-xl">
      <PrismicRichText
        field={slice.primary.section_title}
        components={serializer}
      />
      <PrismicRichText
        field={slice.primary.section_description}
        components={serializer}
      />
      <div className="mx-auto relative">
        <div className="border-l-2 border-[#8E44EC]">
          {slice.items.map((item, index) => (
            <div
              key={index}
              className={`ml-4 pb-[56px] ${index !== slice.items.length - 1 ? "mb-[56px]" : ""}`}
            >
              <div className="absolute -left-[11px] mt-1 bg-[#8E44EC] w-[22px] h-[22px] rounded-full border-4 border-[#FFFFFF]"></div>
              <PrismicRichText field={item.step_title} components={serializer} />
              <PrismicRichText
                field={item.step_description}
                components={{
                  paragraph: ({children}) => {
                    <p className='text-left'>{children}</p>

                  }
                }}
              />
              <PrismicNextLink
                field={item.read_more_link}
                className="text-[#171717] font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4 mt-4 transition-all duration-300 ease-in-out"
              >
                {item.link_label}
              </PrismicNextLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineLinear;
