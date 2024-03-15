import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-4xl font-sans font-bold text-gray-darker text-center mb-4">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-xl font-sans font-bold text-gray-darker mb-4">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="font-sans text-lg text-gray-darker max-w-2xl text-center mx-auto mb-[88px]">
      {children}
    </p>
  ),
  preformatted: ({ node }) => (
    <pre className="my-3 p-2 text-lg text-gray-200 bg-gray-darker border-[#0d1117] rounded-lg shadow-lg whitespace-break-spaces">
      {node.text}
    </pre>
  ),
  hyperlink: ({ children }) => (
    <a
      href="#"
      className="hover:text-indigo-30 font-semibold text-indigo-400 hover:text-indigo-300"
    >
      {children}
    </a>
  ),
};

const TimelineAlternatedWithImage = ({
  slice,
}: {
  slice: Content.TimelineSliceAlternatedWithImage;
}) => {
  return (
    <div className="flex flex-col items-center my-16">
      <PrismicRichText
        field={slice.primary.section_title}
        components={serializer}
      />
      <PrismicRichText
        field={slice.primary.section_description}
        components={serializer}
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
                components={serializer}
              />
              <PrismicRichText
                field={item.step_description}
                components={{
                  paragraph: ({ children }) => {
                    <p className="text-left">{children}</p>;
                  },
                }}
              />
              <PrismicNextLink
                field={item.read_more_link}
                className="text-gray-darker font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4 mt-4 transition-all duration-300 ease-in-out"
              >
                {item.link_label}
              </PrismicNextLink>
            </div>
            <div className="md:w-3/5 px-12">
              <div className="bg-quaternary-purple border-2 border-gray-darker p-9 rounded-lg">
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
