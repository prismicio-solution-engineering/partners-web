"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Content, asImageSrc, isFilled } from "@prismicio/client";
import { useState } from "react";
import { PrismicRichText } from "./PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SlideSlice } from "@/prismicio-types";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-4xl font-bold font-sans mt-10 text-primary-orange">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-3xl font-semibold font-sans text-gray-base">
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-3xl font-semibold font-sans mb-2 text-secondary-orange">
      {children}
    </h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-2xl font-semibold font-sans mb-2 text-secondary-orange">
      {children}
    </h5>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl font-sans pb-2 text-gray-base">{children}</p>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2 text-xl list-inside text-gray-base">
      {children}
    </li>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2 text-xl list-inside text-gray-base">
      {children}
    </li>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="text-gray-base font-sans text-xl underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out"
    >
      {children}
    </PrismicNextLink>
  ),
  label: ({ node, children }) => {
    return (
      <>
        {node.data.label === "highlight" && (
          <span className="text-primary-orange font-semibold">{children}</span>
        )}
        {node.data.label === "inline code" && (
          <span className="px-2 py-1 bg-silver-light border border-silver-base font-mono rounded-md text-lg font-normal text-primary-orange">
            {children}
          </span>
        )}
      </>
    );
  },
};

const SliderComponent = ({ data }: { data: Content.SliderDocument }) => {
  const slides = data.data.slices;

  const alternateLayout = (slide: SlideSlice) => {
    const textSection = (
      <div className="text-left flex flex-col justify-start px-4 pt-10 pb-4 overflow-y-scroll">
        <PrismicRichText
          field={slide.primary.content}
          components={serializer}
        />
      </div>
    );
    const altTextSection = (
      <div className="text-left flex flex-col justify-start md:w-1/2 overflow-clip px-4 pt-10 pb-4 overflow-y-scroll">
        <PrismicRichText
          field={slide.primary.content}
          components={serializer}
        />
      </div>
    );

    const altMediaSection = (
      <div className="flex flex-col md:w-1/2 p-4 ">
        {slide.variation === "withImage" && (
          <PrismicNextImage
            field={slide.primary.image}
            className="w-full h-full object-cover rounded-xl"
          />
        )}
        {slide.variation === "withVideo" && (
          <video
            className="w-full h-auto object-cover rounded-lg aspect-video"
            src={slide.primary.video_link}
            alt={slide.primary.video_thumbnail.alt}
            poster={
              isFilled.image(slide.primary.video_thumbnail)
                ? asImageSrc(slide.primary.video_thumbnail)
                : ""
            }
            controls
          ></video>
        )}
        {slide.variation === "withYoutubeVideo" && (
          <div
            id="youtube-video"
            className="h-full w-auto object-cover rounded-lg aspect-video"
            dangerouslySetInnerHTML={{
              __html: slide.primary.video_embed_link.html || "",
            }}
          />
        )}
      </div>
    );

    if (slide.variation === "contentOnly") {
      return [textSection];
    }

    if (slide.primary.media_side) {
      return [altTextSection, altMediaSection];
    } else if (!slide.primary.media_side) {
      return [altMediaSection, altTextSection];
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };
  // TODO Replace layout with slider from Articles horizontal scroll and add control by left and right keys
  return (
    <div className="relative">
      <div className="overflow-hidden relative border border-silver-base shadow-sm px-10 mx-4 rounded-lg mt-16 mb-5 bg-quaternary-orange">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex flex-col h-[95vh] min-h-[600px] gap-y-2 transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 hidden"}`}
          >
            <PrismicRichText
              field={slide.primary.title}
              components={serializer}
            />
            <div className="flex flex-col md:flex-row w-full h-2/3 inset-0 mb-10 overflow-clip">
              {alternateLayout(slide)}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2 px-10">
        <button
          onClick={prevSlide}
          className="text-primary-orange p-1 rounded-full hover:bg-opacity-70 focus:outline-none"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="text-primary-orange p-1 rounded-full hover:bg-opacity-70 focus:outline-none"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute w-full flex justify-center bottom-0 p-8">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${index === currentSlide ? "bg-secondary-orange" : "bg-tertiary-orange"} focus:outline-none`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
