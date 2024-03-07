import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import HeroDefault from "./HeroDefault";
import HeroWithImage from "./HeroWithImage";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slice.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  switch (slice.variation) {
    case "default":
      return <HeroDefault slice={slice} />;
      case "withImage":
        return <HeroWithImage slice={slice} />
  }
};

export default HeroBanner;
