import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FullWidthCard from "./List";

/**
 * Props for `Project`.
 */
export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

/**
 * Component for "Project" Slices.
 */
export default function Project({ slice }: ProjectProps) {
  switch (slice.variation) {
    case "fullWidthCard":
      return <FullWidthCard slice={slice} />;
  }
}
