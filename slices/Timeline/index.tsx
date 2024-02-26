import React from 'react';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { FaCircle } from 'react-icons/fa';
import { Content } from '@prismicio/client';
import TimelineAlternatedWithImage from './TimelineAlternatedWithImage';
import TimelineLinear from './TimelineLinear';
import TimelineGrid from './TimelineGrid';

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
        case "linear":
        return <TimelineLinear slice={slice} />;
        case "grid":
        return <TimelineGrid slice={slice} />;
    }
};

export default Timeline;