import type { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { useState } from "react";

const serializer = {
    heading2: ({ children }) => (
    //   <h2 className="text-3xl font-bold font-sans text-[#171717] mb-8">
      <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-6">
        {children}
      </h2>
    ),
    paragraph: ({ children }) => (
      <p className="mb-4 text-[#171717] font-sans text-lg">{children}</p>
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

const faqs = [
  {
      question: 'How do I become a Prismic Partner?',
      answer:
          'To become a Prismic Partner, register through our website’s partner program section and fulfill the certification requirements.',
  },
  {
      question: 'What are the benefits of partnering with Prismic?',
      answer:
          'Partnership with Prismic offers access to exclusive training, resources, and support to ensure you get the most out of our products.',
  },
  {
      question: 'Are there different levels of partnership?',
      answer:
          'Yes, we offer various levels of partnership based on the agency size, expertise, and commitment to using Prismic in projects.',
  },
];

function AccordionItem({ item, index, toggle, active }) {
  const isActive = active === index;

  return (
      <div
          className={`my-4 bg-[#F7F7F7] p-6 rounded-lg text-left ${isActive ? 'shadow-md' : ''
              }`}
      >
          <h3
              className="text-[#171717] font-sans text-lg cursor-pointer flex justify-between font-bold"
              onClick={() => toggle(index)}
          >
              <span>
              {item.accordion_title}
              </span>
              <span>{isActive ? '-' : '+'}</span>

          </h3>
          <div
              className={`font-sans text-base text-[#171717] transition-max-height duration-500 ease-in-out ${isActive ? 'max-h-96' : 'max-h-0 overflow-hidden'
                  }`}
          >
            <div className={`pt-4 ${isActive ? 'block' : 'hidden'}`}>
            <PrismicRichText field={item.accordion_content} components={serializer}/>
            </div>
              {/* <p className={`pt-4 ${isActive ? 'block' : 'hidden'}`}>{item.answer}</p> */}
          </div>
      </div>
  );
}



const AccordionCentered = ({ slice }: {slice:
  | Content.AccordionSectionSliceCentered}) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#ffffff] text-center py-12 max-w-screen-xl mx-auto rounded-lg">
        <PrismicRichText field={slice.primary.section_title} components={serializer}/>
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
        </section>
  );
};

export default AccordionCentered;
