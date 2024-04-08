import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import IntroSlide from "../IntroSlide";
import Slide from "../Slide";
import VideoSlide from "../VideoSlide";
import { SliderContainer } from "@/components/SliderContainer";
import SliderIndex from "../SliderIndex";
import Scaler from "@/components/Scaler";

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
    <Scaler>
      <div className="relative">
        <SliderContainer>
          {slider.data.slices.map((slice, idx) => (
            <div key={idx}>
              {slice.slice_type === "intro_slide" ? (
                <IntroSlide slice={slice} context={slider.data} />
              ) : slice.slice_type === "slide" ? (
                <Slide slice={slice} context={slider.data} />
              ) :
                slice.slice_type === "video_slide" ? (
                  <VideoSlide slice={slice} context={slider.data} />
                )
                  : (
                    slice.slice_type === "slider_index" && (
                      <SliderIndex slice={slice} context={slider.data} />
                    )
                  )}
            </div>
          ))}
        </SliderContainer>
      </div>
    </Scaler>
  );
};

export default Slider;
