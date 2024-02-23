"use client";
import React, { useState } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import AccordionCentered from "./AccordionCentered";
import AccordionWithImage from "./AccordionWithImage";
import AccordionTwoColumns from "./AccordionTwoColumns";

/**
 * Props for `AccordionSection`.
 */
export type AccordionSectionProps =
  SliceComponentProps<Content.AccordionSectionSlice>;

/**
 * Component for "AccordionSection" Slices.
 */

export default function AccordionSection({ slice }: AccordionSectionProps) {
  switch (slice.variation) {
    case "centered":
      return <AccordionCentered slice={slice} />;
    case "withImage":
      return <AccordionWithImage slice={slice} />;
    case "twoColumns":
      return <AccordionTwoColumns slice={slice} />;
  }
}
