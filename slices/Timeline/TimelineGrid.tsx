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
    <p className="font-sans text-lg text-[#171717] max-w-2xl text-center mx-auto mb-[88px]">
      {children}
    </p>
  ),
  preformatted: ({ node }) => (
    <pre className="my-3 p-2 text-lg text-gray-200 bg-[#171717] border-[#0d1117] rounded-lg shadow-lg whitespace-break-spaces">
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

const TimelineGrid = ({ slice }: { slice: Content.TimelineSliceGrid }) => {
  return (
    <div className="items-center mx-auto max-w-screen-xl my-16">
      <PrismicRichText
        field={slice.primary.section_title}
        components={serializer}
      />
      <PrismicRichText
        field={slice.primary.section_description}
        components={serializer}
      />
      <div className="flex flex-wrap justify-start gap-10">
        {slice.items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-8 w-[30%] bg-[#F7F7F7] rounded-lg text-center shadow-sm"
          >
            <span className="font-sans font-bold text-[#8E44EC] text-xl mb-2">
              {item.step_number}
            </span>
            <PrismicRichText field={item.step_title} components={serializer} />
            <PrismicRichText
              field={item.step_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-sans text-base text-[#171717]">
                    {children}
                  </p>
                ),
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
  );
};

export default TimelineGrid;
