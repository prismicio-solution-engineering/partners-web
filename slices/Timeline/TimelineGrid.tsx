import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

const serializer = {
  heading2: ({ children }) => (
    <h2
      // className="font-sans font-bold text-3xl text-gray-darker mb-8"
      className="text-4xl font-sans font-bold text-gray-darker text-center mb-4"
    >
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3
      // className="font-sans font-bold text-3xl text-gray-darker mb-8"
      // className="text-4xl font-sans font-bold text-gray-darker text-center mb-4"
      className="text-xl font-sans font-bold text-gray-darker mb-4"
    >
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
            className="flex flex-col items-center p-8 w-[30%] bg-silver-light rounded-lg text-center shadow-sm"
          >
            <span className="font-sans font-bold text-primary-purple text-xl mb-2">
              {item.step_number}
            </span>
            <PrismicRichText field={item.step_title} components={serializer} />
            <PrismicRichText
              field={item.step_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-sans text-base text-gray-darker">
                    {children}
                  </p>
                ),
              }}
            />
            <PrismicNextLink
              field={item.read_more_link}
              className="text-gray-darker font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4 mt-4 transition-all duration-300 ease-in-out"
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
