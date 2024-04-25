"use client";
import { useState } from "react";
import { PrismicText } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { PrismicRichText } from "./PrismicRichText";
import { CategoryProps, ChecklistProps } from "./ReviewLayout";

const serializer = {
  paragraph: ({ children }) => (
    <p className="text-left font-copy text-base text-gray-base">{children}</p>
  ),
  heading4: ({ children }) => (
    <h4 className="text-left text-xl font-copy font-bold text-gray-darker mt-4 mb-2">
      {children}
    </h4>
  ),
};

function ChecklistItem({ item, index, toggle, active }) {
  const isActive = active === index;

  return (
    <div
      className={`my-4 bg-silver-light p-4 rounded-lg ${
        isActive ? "shadow-md" : ""
      }`}
    >
      <p
        className="text-gray-darker text-xl font-copy cursor-pointer flex justify-between font-bold"
        onClick={() => toggle(index)}
      >
        <PrismicText field={item.name} />
        <span>{isActive ? "-" : "+"}</span>
      </p>
      <div
        className={`transition-max-height duration-500 ease-in-out ${
          isActive ? "max-h-full" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className={`pt-4 ${isActive ? "block" : "hidden"}`}>
          {isFilled.richText(item.comment_next) && (
            <>
              <p className="text-gray-base border-b-2 text-right my-4 font-bold text-lg">
                Next.js
              </p>
              <PrismicRichText
                field={item.comment_next}
                components={serializer}
              />
            </>
          )}
          {isFilled.richText(item.comment_nuxt) && (
            <>
              <p className="text-gray-base border-b-2 text-right my-4 font-bold text-lg">
                Nuxt.js
              </p>
              <PrismicRichText
                field={item.comment_nuxt}
                components={serializer}
              />
            </>
          )}
          {isFilled.richText(item.comment_sveltekit) && (
            <>
              <p className="text-gray-base border-b-2 text-right my-4 font-bold text-lg">
                SvelteKit
              </p>
              <PrismicRichText
                field={item.comment_sveltekit}
                components={serializer}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function ReviewChecklist({
  criteria,
  categories,
}: {
  criteria: ChecklistProps[];
  categories: CategoryProps[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const groupItemsByCategory = () => {
    const grouped = {};

    criteria.forEach((item) => {
      const categoryName = item.category.data.category_name;
      if (!grouped[categoryName]) {
        grouped[categoryName] = [];
      }
      grouped[categoryName].push(item);
    });

    return grouped;
  };

  const groupedItems = groupItemsByCategory();

  return (
    <section className="bg-white my-16 rounded-lg">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 px-8 lg:px-0">
        {categories.map((category, idx) =>
          groupedItems[category] && groupedItems[category].length > 0 ? (
            <div key={idx}>
              <p className="text-3xl font-copy font-bold text-gray-darker mb-8">
                {category}
              </p>
              {/* Checklist item per category */}
              {groupedItems[category] &&
                groupedItems[category].map((item, index) => (
                  <ChecklistItem
                    key={category+"_"+index}
                    item={item}
                    active={activeIndex}
                    toggle={toggle}
                    index={category+"_"+index}
                  />
                ))}
            </div>
          ) : null
        )}

        {/* {criteria.map((item, index) => (
          <ChecklistItem
            key={index}
            item={item}
            active={activeIndex}
            toggle={toggle}
            index={index}
          />
        ))} */}
      </div>
    </section>
  );
}
