import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import FeatureWithImage from "./FeatureWithImage";
import FeatureDefault from "./FeatureDefault";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-left font-sans text-4xl font-bold text-[#171717]">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 text-[#171717] font-sans text-lg">{children}</p>
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

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  switch (slice.variation) {
    case "default":
      return <FeatureDefault slice={slice} />;
    case "withImage":
      return <FeatureWithImage slice={slice} />;
  }
};

export default Features;
