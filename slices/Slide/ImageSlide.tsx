"use client"
import { Button } from "@/components/Button";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";
import { useState } from "react";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-left text-4xl font-sans font-bold text-gray-darker mb-6">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => <p className="text-left text-lg">{children}</p>,
};

const slides = [
  {
      id: 1,
      title: "Innovative Ideas",
      bulletPoints: ["Cutting-edge technologies", "Creative solutions", "Strategic thinking"],
      mediaType: "image",
      mediaSrc: "https://source.unsplash.com/random/800x600?business"
  },
  {
      id: 2,
      title: "Dedicated Support",
      bulletPoints: ["24/7 assistance", "Expert team", "Customer success focus"],
      mediaType: "image",
      mediaSrc: "https://source.unsplash.com/random/800x600?support"
  },
  {
      id: 3,
      title: "Growth Opportunities",
      bulletPoints: ["Expand your reach", "Increase revenue", "Build brand recognition"],
      mediaType: "video",
      mediaSrc: "https://source.unsplash.com/random/800x600?growth"
  }
];

const ImageSlide = ({ slice }: { slice: Content.SlideSliceWithImage }) => {
  const alternateLayout = (slide, index) => {
    const textSection = (
      <div className="text-left flex flex-col justify-center md:w-1/2 h-full px-12 py-16 ">
        <h2 className="text-4xl font-sans font-bold text-gray-darker mb-8">
          {slide.title}
        </h2>
        <ul className="list-none space-y-4 mb-8">
          {slide.bulletPoints.map((point, idx) => (
            <li
              key={idx}
              className="text-lg font-sans text-gray-darker before:content-['•'] before:pr-2 before:text-primary-purple"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    );

    const mediaSection = (
      <div className="flex items-center justify-center md:w-1/2 h-full p-8 ">
        {slide.mediaType === "image" && (
          <img
            className="w-full h-full object-cover rounded-xl"
            src={slide.mediaSrc}
            alt={slide.title}
          />
        )}
        {slide.mediaType === "video" && (
          <video
            className="w-full h-full object-cover rounded-xl"
            src={slide.mediaSrc}
            alt={slide.title}
            controls
          ></video>
        )}
      </div>
    );

    // Alternate layout by checking if the slide index is even or odd
    return index % 2 === 0
      ? [mediaSection, textSection]
      : [textSection, mediaSection];
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            // className="flex flex-col md:flex-row w-full items-center justify-center bg-[#E8F8F3] h-[60vh]"
            className={`flex flex-col md:flex-row w-full items-center justify-center bg-[#E8F8F3] h-[60vh] inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 hidden"}`}
          >
            {alternateLayout(slide, index)}
          </div>
        ))}
      </div>
      <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2 px-3">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 focus:outline-none"
        >
          &#10095;
        </button>
      </div>
      <div className="absolute w-full flex justify-center bottom-0 p-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${index === currentSlide ? "bg-blue-600" : "bg-white"} focus:outline-none`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
