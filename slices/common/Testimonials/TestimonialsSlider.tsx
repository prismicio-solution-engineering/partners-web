"use client";

import { PrismicRichText } from "@/components/PrismicRichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import Image from "next/image";

const serializer = {
  paragraph: ({ children }) => (
    <blockquote className="text-xl font-sans text-gray-darker italic mb-8">
      {children}
    </blockquote>
  ),
};

const TestimonialsSlider = async ({
  slice,
}: {
  slice: Content.TestimonialsSliceSlider;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slice.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slice.items.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className=" my-16">
      <div className="text-center mb-12">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="overflow-hidden relative bg-silver-light py-20 mx-auto max-w-screen-xl px-8 rounded-lg shadow-sm">
        <div
          className="whitespace-nowrap transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {slice.items.map((item, idx) => (
            <div
              key={idx}
              className="inline-block w-full px-4 md:px-24 text-center whitespace-normal"
            >
              <PrismicRichText field={item.quote} components={serializer} />
              <div className="inline-flex items-center justify-center">
                <PrismicNextImage
                  field={item.author_image}
                  className="w-20 h-20 rounded-full object-cover mr-4"
                  width={80}
                  height={80}
                />
                <div className="text-left">
                  <p className="text-lg font-sans font-bold text-gray-darker">
                    {item.author_name}
                  </p>
                  <p className="text-gray-darker">
                    {item.author_role} - {item.author_company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-8 -translate-y-1/2  p-4 rounded-full text-white"
          onClick={prevTestimonial}
        >
          <Image
            className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            src={ChevronLeft}
            alt=""
            width={48}
            height={48}
            unoptimized
          />
        </button>
        <button
          className="absolute top-1/2 right-8 -translate-y-1/2 p-4 rounded-full text-white"
          onClick={nextTestimonial}
        >
          <Image
            className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            src={ChevronRight}
            alt=""
            width={48}
            height={48}
            unoptimized
          />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
