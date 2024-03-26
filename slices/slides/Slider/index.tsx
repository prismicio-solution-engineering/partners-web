import SliderComponent from "@/components/SliderComponent";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Slider`.
 */
export type SliderProps = SliceComponentProps<Content.SliderSlice>;

/**
 * Component for "Slider" Slices.
 */
const Slider = async ({ slice }: SliderProps): JSX.Element => {

  const client = createClient();

  const data = await client.getByUID("slider", slice.primary.slider.uid);
  
  return <SliderComponent data={data} />;
};

export default Slider;
