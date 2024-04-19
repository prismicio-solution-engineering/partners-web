"use client";

import { Container } from "@/components/Container";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { useState } from "react";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-4xl font-headings font-bold text-gray-darker text-center mb-6">
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

function AccordionItem({ item, index, toggle, active }) {
  const isActive = active === index;

  return (
    <div
      className={`my-4 bg-silver-light p-6 rounded-lg text-left ${
        isActive ? "shadow-md" : ""
      }`}
    >
      <h3
        className="text-gray-darker font-headings text-lg cursor-pointer flex justify-between font-bold"
        onClick={() => toggle(index)}
      >
        <span>{item.accordion_title}</span>
        <span>{isActive ? "-" : "+"}</span>
      </h3>
      <div
        className={`font-copy text-base text-gray-darker transition-max-height duration-500 ease-in-out ${
          isActive ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className={`pt-4 ${isActive ? "block" : "hidden"}`}>
          <PrismicRichText
            field={item.accordion_content}
            components={serializer}
          />
        </div>
      </div>
    </div>
  );
}

const AccordionCentered = ({
  slice,
}: {
  slice: Content.AccordionSectionSliceCentered;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container className="bg-white text-center rounded-lg">
      <PrismicRichText
        field={slice.primary.section_title}
        components={serializer}
      />
      <div className="max-w-screen-xl mx-auto">
        {slice.items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            active={activeIndex}
            toggle={toggle}
            index={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default AccordionCentered;
