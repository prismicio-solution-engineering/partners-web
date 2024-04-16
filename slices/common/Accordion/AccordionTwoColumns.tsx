"use client";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { useState } from "react";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-3xl font-bold font-headings text-gray-darker mb-8">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 text-gray-darker font-copy text-lg">{children}</p>
  ),
  preformatted: ({ node }) => (
    <pre className="font-code my-3 p-2 text-lg text-gray-200 bg-gray-darker border-[#0d1117] rounded-lg shadow-lg whitespace-break-spaces">
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

const AccordionTwoColumns = ({
  slice,
}: {
  slice: Content.AccordionSectionSliceTwoColumns;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mt-16 max-w-screen-xl mx-auto px-8 overflow-clip">
      <div className="w-full lg:w-1/2">
        <p className="text-primary-purple font-copy text-lg mb-4">
          {slice.primary.eyebrow}
        </p>
        <PrismicRichText
          field={slice.primary.section_title}
          components={serializer}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={serializer}
        />
        <p className="text-gray-darker font-copy text-lg">
          Everything you need to know about the partnership process and how it
          can benefit your agency.
        </p>
      </div>
      <div className="w-full lg:w-1/2 overflow-clip whitespace-break-spaces">
        {slice.items.map((item, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 px-6 bg-silver-light text-left rounded-[16px] font-copy font-bold text-gray-darker"
            >
              <span>{item.accordion_title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            <div
              role="region"
              id={`sect${index}`}
              aria-labelledby={`accordion${index}`}
              className={`py-4 px-6 mt-2 transition-height ${activeIndex === index ? "block" : "hidden"}`}
            >
              <PrismicRichText
                field={item.accordion_content}
                components={serializer}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionTwoColumns;
