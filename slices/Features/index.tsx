import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FeatureWithImage from "./FeatureWithImage";
import FeatureDefault from "./FeatureDefault";

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
