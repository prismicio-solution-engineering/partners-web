import { Content, asImageSrc, isFilled } from "@prismicio/client";
import { SliceComponentProps, SliceZoneProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
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

/**
 * Props for `Slide`.
 */
export type SlideProps = SliceComponentProps<Content.SlideSlice>;

/**
 * Component for "Slide" Slices.
 */

const layout = (slice: SlideSlice) => {
  const textSection = (
    <div className="text-left flex flex-col justify-start px-4 pt-10 pb-4 overflow-y-scroll">
      <PrismicRichText field={slice.primary.content} components={serializer} />
    </div>
  );

  const altTextSection = (
    <div className="text-left flex flex-col justify-start md:w-1/2 overflow-clip px-4 pt-10 pb-4 overflow-y-scroll">
      <PrismicRichText field={slice.primary.content} components={serializer} />
    </div>
  );

  const altMediaSection = (
    <div className="flex flex-col md:w-1/2 p-4 ">

      {slice.variation === "withImage" && (
        <PrismicNextImage
          field={slice.primary.image}
          className="w-full h-full object-cover rounded-xl"
        />
      )}

     
    </div>
  );

  if (slice.variation === "contentOnly") {
    return [textSection];
  }

  if (slice.primary.media_side) {
    return [altTextSection, altMediaSection];
  }
  if (!slice.primary.media_side) {
    return [altMediaSection, altTextSection];
  }
};

const Slide = ({ slice, context }: {slice: SlideSlice, context: SliceZoneProps}): JSX.Element => {
  return (
    <>
      <div className="w-[1280px]">
        <div className="w-[1280px] h-[715px] mx-auto border boreder-1 border-silver-base shadow-sm p-10 rounded-lg mb-5 bg-quaternary-orange">
          <PrismicRichText
            field={slice.primary.title}
            components={serializer}
          />
          <div className="flex flex-col md:flex-row w-full h-2/3 inset-0 mb-10 overflow-clip">
            {layout(slice)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
