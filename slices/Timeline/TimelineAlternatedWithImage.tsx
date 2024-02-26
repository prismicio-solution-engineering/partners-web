import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState } from "react";

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

const TimelineAlternatedWithImage = ({
  slice,
}: {
  slice: Content.TimelineSliceAlternatedWithImage;
}) => {
  const milestones = [
    {
      step: "01",
      title: "Submit Your Application",
      description:
        "Send in your application to express your interest in becoming a partner with our agency.",
    },
    {
      step: "02",
      title: "Meet & Greet",
      description:
        "We will have a session to get to know each other and discuss collaboration possibilities.",
    },
    {
      step: "03",
      title: "Training & Certification",
      description:
        "Go through training sessions to understand our product and services, followed by a certification.",
    },
    {
      step: "04",
      title: "Launch Projects",
      description:
        "Start launching projects and campaigns as an official partner agency.",
    },
    {
      step: "05",
      title: "Continuous Support",
      description:
        "Get continuous support and updates to ensure ongoing success in our partnership.",
    },
  ];

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
              <span className="font-sans font-bold text-[#8E44EC] text-xl mb-[24px] block">
                {item.step_number}
              </span>
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
            <div className="md:w-3/5 px-12">
              <div className="bg-[#F5E6FF] border-2 border-[#171717] p-9 rounded-lg">
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