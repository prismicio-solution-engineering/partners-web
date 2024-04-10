import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText as BasePrismicRichText,
  JSXMapSerializer,
} from "@prismicio/react";
import type * as prismic from "@prismicio/client";

/** @type {import("@prismicio/react").JSXMapSerializer} */

// Color to add as prop
const defaultComponents: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2
      className={`text-4xl font-bold font-sans text-gray-darker`}
    >
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-3xl font-semibold font-sans text-gray-base">
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4 className={`text-2xl font-semibold font-sans mt-2 text-gray-dark`}>
      {children}
    </h4>
  ),
  heading5: ({ children }) => (
    <h5 className={`text-2xl font-normal font-sans mt-2 text-gray-base`}>
      {children}
    </h5>
  ),
  paragraph: ({ children }) => (
    <p className="text-lg font-sans pb-1 text-gray-base">{children}</p>
  ),
  listItem: ({ children }) => (
    <li className="list-disc pl-2 last:mb-0 text-lg list-inside text-gray-base">
      {children}
    </li>
  ),
  oListItem: ({ children }) => (
    <li className="list-decimal pl-2 last:mb-0 text-lg list-inside text-gray-base">
      {children}
    </li>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="text-gray-base font-sans text-lg underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out"
    >
      {children}
    </PrismicNextLink>
  ),
  label: ({ node, children }) => {
    return (
      <>
        {node.data.label === "highlight" && (
          <span className={`text-primary-orange font-semibold`}>
            {children}
          </span>
        )}
        {node.data.label === "inline code" && (
          <span
            className={`px-2 py-1 bg-silver-light border border-silver-base font-mono rounded-md text-lg font-normal text-primary-orange`}
          >
            {children}
          </span>
        )}
      </>
    );
  },
};

export function SlidePrismicRichText({
  components,
  ...props
}: {
  components?: JSXMapSerializer;
  field: prismic.RichTextField;
}) {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
