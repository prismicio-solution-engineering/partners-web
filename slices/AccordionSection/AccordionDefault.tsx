import type { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { useState } from "react";

const AccordionDefault = ({ slice }: {slice:
  | Content.AccordionSectionSliceDefault}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E8F8F3] py-[64px] px-8 md:px-[84px]">
      <div className="max-w-[1440px] mx-auto grid gap-[48px]">
        <div className="flex justify-center">
          <PrismicRichText
            field={slice.primary.section_title}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-[64px] md:text-[48px] leading-[72px] md:leading-[52px] font-bold text-[#151515]">
                  {children}
                </h2>
              ),
            }}
          />
        </div>
        {slice.items.map((item, index) => (
          <div
            key={index}
            className={`shadow-md border border-[#EEEEEE] rounded-lg overflow-hidden ${
              openIndex === index ? "bg-[#FFFFFF]" : "bg-[#F7F7F7]"
            }`}
          >
            <button
              className="w-full px-[32px] py-[24px] text-left flex justify-between items-center"
              onClick={() => handleClick(index)}
            >
              <span className="text-3xl text-center font-display leading-10 tracking-tight text-gray-900">
                {item.accordion_title}
              </span>
              <i
                className={`fas fa-chevron-${
                  openIndex === index ? "up" : "down"
                } text-[#3BBB96]`}
              />
            </button>
            <div
              className={`transition-max-height ease-in-out ${
                openIndex === index
                  ? "max-h-[1000px] duration-700"
                  : "max-h-0 duration-0"
              } overflow-hidden`}
            >
              <div className="px-10 pb-6 text-gray-500">
                <PrismicRichText
                  field={item.accordion_content}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className="mt-10 mb-6 font-display text-2xl tracking-tight text-gray-600 sm:text-3xl">
                        {children}
                      </h3>
                    ),
                    heading4: ({ children }) => (
                      <h4 className="mt-10 mb-4 font-display text-xl tracking-tight text-gray-600 sm:text-2xl">
                        {children}
                      </h4>
                    ),
                    heading5: ({ children }) => (
                      <h5 className="mt-10 mb-4 font-display text-lg tracking-tight text-gray-600 sm:text-xl">
                        {children}
                      </h5>
                    ),
                    heading6: ({ children }) => (
                      <h6 className="mt-10 mb-4 font-display text-md tracking-tight text-gray-600 sm:text-lg">
                        {children}
                      </h6>
                    ),
                    paragraph: ({ children }) => (
                      <p className="mb-4 prose-lg tracking-tight">{children}</p>
                    ),
                    preformatted: ({ node }) => (
                      <pre className="my-3 p-2 md:p-6 text-gray-200 bg-[#0d1117] border-[#0d1117] rounded-xl shadow-lg">
                        {node.text}
                      </pre>
                    ),
                    list: ({ children }) => (
                      <ul
                        role="list"
                        className="marker:text-vibrant-blue list-inside	list-disc prose-lg"
                      >
                        {children}
                      </ul>
                    ),
                    listItem: ({ children }) => (
                      <li className="mb-4">{children}</li>
                    ),
                    oList: ({ children }) => (
                      <ol
                        role="list"
                        className="marker:text-vibrant-blue list-inside list-decimal prose-lg"
                      >
                        {children}
                      </ol>
                    ),
                    oListItem: ({ children }) => (
                      <li className="mb-4">{children}</li>
                    ),
                    hyperlink: ({ children }) => (
                      <a
                        href="#"
                        className="hover:text-indigo-30 font-semibold text-indigo-400 hover:text-indigo-300"
                      >
                        {children}
                      </a>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionDefault;
