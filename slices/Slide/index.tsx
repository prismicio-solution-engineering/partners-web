import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import VideoSlide from "./VideoSlide";
import ImageSlide from "./ImageSlide";
import ContentSlide from "./ContentSlide";

/**
 * Props for `Slide`.
 */
export type SlideProps = SliceComponentProps<Content.SlideSlice>;

/**
 * Component for "Slide" Slices.
 */
const Slide = ({ slice }: SlideProps): JSX.Element => {
  switch (slice.variation) {
    case "withVideo":
      return <VideoSlide slice={slice} />;
    case "withImage":
      return <ImageSlide slice={slice} />;
    case "contentOnly":
      return <ContentSlide slice={slice} />;
  }
};

export default Slide;
