import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TestimonialsSlider from "./TestimonialsSlider";
import TestimonialsSingle from "./TestimonialsSingle";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  switch (slice.variation) {
    case "single":
      return <TestimonialsSingle slice={slice} />;
      case "slider":
        return <TestimonialsSlider slice={slice} />
  }
};

export default Testimonials;
