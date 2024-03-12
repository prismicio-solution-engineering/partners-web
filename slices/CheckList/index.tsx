"use client";
import React, { useState } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

/**
 * Props for `Checklist`.
 */
export type CheckListProps = SliceComponentProps<Content.CheckListSlice>;

/**
 * Component for "Checklist" Slices.
 */
const CheckList = ({ slice }: CheckListProps): JSX.Element => {
  const [itemsVisibility, setItemsVisibility] = useState(
    slice.items.map((item) => Boolean(item.item_visibility))
  );

  const toggleItemVisibility = (index: number) => {
    const newItemsVisibility = [...itemsVisibility];
    newItemsVisibility[index] = !newItemsVisibility[index];
    setItemsVisibility(newItemsVisibility);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="text-center text-[64px] font-bold leading-none text-primary-purple mb-12">
          <PrismicRichText field={slice.primary.section_title} />
        </div>
        <div className="space-y-12">
          {slice.items.map((item, index) => (
            <div
              className="bg-[#E8F8F3] rounded-lg shadow p-6 flex flex-col md:flex-row items-start mb-6"
              key={index}
            >
              <PrismicNextImage
                className={`w-full md:w-1/3 h-56 object-cover rounded-lg transition-opacity duration-300 ${itemsVisibility[index] ? "opacity-100" : "opacity-0"}`}
                field={item.item_image}
              />
              <div className="md:ml-6 w-full">
                <div className="text-primary-green font-bold text-lg leading-6 my-4">
                  <PrismicRichText field={item.item_title} />
                </div>

                <div
                  className={`transition-opacity duration-300 text-gray-500 ${itemsVisibility[index] ? "opacity-100" : "opacity-0"}`}
                >
                  <PrismicRichText field={item.item_description} />
                </div>

                <button
                  onClick={() => toggleItemVisibility(index)}
                  className="mt-4 px-4 py-2 bg-primary-green text-white rounded-lg cursor-pointer hover:bg-secondary-green transition-colors duration-300"
                >
                  {itemsVisibility[index] ? "Hide Details" : "Show Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckList;
