"use client";

import { Container } from "@/components/Container";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="font-headings font-bold text-3xl text-gray-darker mb-8">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 text-gray-darker font-copy text-lg">{children}</p>
  ),
  preformatted: ({ node }) => (
    <pre className=" font-code my-3 p-2 text-lg text-gray-200 bg-gray-darker border-[#0d1117] rounded-lg shadow-lg whitespace-break-spaces">
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

const AccordionWithImage = ({
  slice,
}: {
  slice: Content.AccordionSectionSliceWithImage;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Container className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <PrismicNextImage
          className="w-full h-full object-cover rounded-lg"
          field={slice.primary.image}
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 px-12">
        <div className="text-center md:text-left p-4">
          <span className="text-primary-purple font-copy font-semibold uppercase text-sm mb-2 block">
            {slice.primary.eyebrow}
          </span>
          <PrismicRichText
            field={slice.primary.section_title}
            components={serializer}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={serializer}
          />
        </div>
        <div>
          {slice.items.map((item, index) => (
            <div
              key={index}
              className={`border-b-[1px] border-[#D1D5DB] ${
                index === activeIndex ? "" : "mb-[48px]"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-5 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl font-copy font-semibold text-gray-darker">
                    {item.accordion_title}
                  </span>
                  <span className="text-xl font-copy text-gray-darker">
                    {index === activeIndex ? "-" : "+"}
                  </span>
                </div>
              </button>
              <div
                className={`${
                  index === activeIndex ? "block" : "hidden"
                } pb-4 animate-fade-in-down`}
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
    </Container>
  );
};

export default AccordionWithImage;
