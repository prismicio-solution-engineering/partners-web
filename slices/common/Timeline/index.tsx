import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import TimelineAlternatedWithImage from "./TimelineAlternatedWithImage";
import TimelineGrid from "./TimelineGrid";

/**
 * Props for `Timeline`.
 */
export type TimelineProps = SliceComponentProps<Content.TimelineSlice>;

/**
 * Component for "Timeline" Slices.
 */
const Timeline = ({ slice }: TimelineProps): JSX.Element => {
  switch (slice.variation) {
    case "alternatedWithImage":
      return <TimelineAlternatedWithImage slice={slice} />;
    case "grid":
      return <TimelineGrid slice={slice} />;
  }
};

export default Timeline;
