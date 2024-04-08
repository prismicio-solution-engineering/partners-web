"use client";

import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SlideSlice, SliderDocumentData } from "@/prismicio-types";
import { useEffect, useRef, useState } from "react";
import WithImage from "./WithImage";
import Content from "./Content";
import ContentTwoCol from "./ContentTwoCol";
import Title from "./Title";

/**
 * Props for `Slide`.
 */
export type SlideProps = SliceComponentProps<SlideSlice>;

/**
 * Component for "Slide" Slices.
 */

const Slide = ({
  slice,
  context,
}: {
  slice: SlideSlice;
  context: SliderDocumentData;
}): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef(null); // Ref for the content container

  // Check for overflow and open the modal
  const checkForOverflow = () => {
    const current = contentRef.current;
    if (current && current.scrollHeight > current.clientHeight) {
      console.log("Content is too long !");
      setIsModalOpen(true); // Overflow detected, open the modal
    }
    if (current && current.scrollHeight < current.clientHeight) {
      console.log("Content is fixed !");
      setIsModalOpen(false); // Overflow detected, open the modal
    }
  };

  useEffect(() => {
    const currentContent = contentRef.current;
    checkForOverflow();

    // Create a MutationObserver to observe changes in the content area
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList" || mutation.type === "subtree") {
          checkForOverflow();
        }
      }
    });

    // Start observing the content area
    if (currentContent) {
      observer.observe(currentContent, {
        childList: true, // observe direct children
        subtree: true, // and lower descendants too
        characterData: true, // observe text changes
      });
    }

    // Disconnect the observer on cleanup
    return () => observer.disconnect();
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    <>
      <div
        ref={contentRef}
        className={`w-[1280px] h-[715px] mx-auto relative border border-1 border-silver-base shadow-sm p-10 rounded-lg bg-quaternary-${slice.primary.background_color}`}
      >
        <div className="h-full flex flex-row w-full inset-0 mb-10 overflow-y-clip justify-start gap-10">
          {slice.variation === "withImage" && (
            <WithImage slice={slice} context={context} />
          )}
          {slice.variation === "contentOnly" && (
            <Content slice={slice} context={context} />
          )}
          {slice.variation === "contentTwoColumns" && (
            <ContentTwoCol slice={slice} context={context} />
          )}
          {slice.variation === "title" && (
            <Title slice={slice} context={context} />
          )}
        </div>
      </div>
    </>
  );
};

export default Slide;
