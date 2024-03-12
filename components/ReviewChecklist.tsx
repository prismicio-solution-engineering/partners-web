"use client";
import { ReviewsChecklistDocumentData } from "@/prismicio-types";
import { PrismicRichText } from "./PrismicRichText";
import { useState } from "react";
import { PrismicText } from "@prismicio/react";

const serializer = {
  paragraph: ({ children }) => (
    <p className="text-left font-sans text-base text-gray-base">{children}</p>
  ),
  heading4: ({ children }) => (
    <h4 className="text-left text-xl font-sans font-bold text-gray-darker mt-4 mb-2">
      {children}
    </h4>
  ),
};

function ChecklistItem({ item, index, toggle, active }) {
  const isActive = active === index;

  return (
    <div
      className={`my-4 bg-silver-light p-6 rounded-lg text-left ${
        isActive ? "shadow-md" : ""
      }`}
    >
      <h3
        className="text-gray-darker text-2xl font-sans cursor-pointer flex justify-between font-bold"
        onClick={() => toggle(index)}
      >
        <PrismicText field={item.name} />
        <span>{isActive ? "-" : "+"}</span>
      </h3>
      <div
        className={`transition-max-height duration-500 ease-in-out ${
          isActive ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className={`pt-4 ${isActive ? "block" : "hidden"}`}>
          <PrismicRichText field={item.comment_next} components={serializer} />
        </div>
      </div>
    </div>
  );
}

export function ReviewChecklist({ criteria }: ReviewsChecklistDocumentData) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white my-16 rounded-lg">
      <div className="max-w-screen-xl mx-auto">
        {criteria.map((item, index) => (
          <ChecklistItem
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
}
