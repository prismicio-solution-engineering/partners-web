import { Button } from "@/components/Button";
import { categoryPillColor, categoryColor } from "@/components/CategoryPill";
import { ProjectDocument } from "@/prismicio-types";
import { getProjectByUid } from "@/utils/getProjectByUid";
import { Content, asText, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
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
    case "card":
      return <FullWidthCard slice={slice} />;
  }
}
