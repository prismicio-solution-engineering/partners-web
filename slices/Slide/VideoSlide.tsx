import { Button } from "@/components/Button";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-left text-4xl font-sans font-bold text-gray-darker mb-6">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => <p className="text-left text-lg">{children}</p>,
};
const VideoSlide = ({
  slice,
}: {
  slice: Content.SlideSliceWithVideo;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-16 bg-[#E8F8F3] rounded-xl mt-16 max-w-screen-xl mx-auto">

    </div>
  );
};

export default VideoSlide;
