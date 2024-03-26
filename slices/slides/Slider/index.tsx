import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import IntroSlide from "../IntroSlide";
import Slide from "../Slide";
import VideoSlide from "../VideoSlide";
import { SliderContainer } from "@/components/SliderContainer";

/**
 * Props for `Slider`.
 */
export type SliderProps = SliceComponentProps<Content.SliderSlice>;

/**
 * Component for "Slider" Slices.
 */
const Slider = async ({ slice }: SliderProps): JSX.Element => {
  const client = createClient();

  const slider = await client.getByUID("slider", slice.primary.slider.uid);

  return (
    <div className="max-w-screen-2xl mx-auto px-8 mt-16 mb-4">
      <SliderContainer>
        {slider.data.slices.map((slice, idx) => (
            slice.slice_type === "intro_slide" ? (
              <IntroSlide
                index={idx}
                key={idx}
                slice={slice}
                context={slider.data}
                slices={slider.data.slices}
              />
            ) : 
            slice.slice_type === "slide" ? (
              <Slide
                index={idx}
                key={idx}
                slice={slice}
                context={slider.data}
                slices={slider.data.slices}
              />
            ) :
            slice.slice_type === "video_slide" && (
              <VideoSlide
                index={idx}
                key={idx}
                slice={slice}
                context={slider.data}
                slices={slider.data.slices}
              />
            )
        ))}
      </SliderContainer>
    </div>
  );
};

export default Slider;
