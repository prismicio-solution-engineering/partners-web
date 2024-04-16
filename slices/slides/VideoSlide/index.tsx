import { Content, asImageSrc, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { VideoSlideSlice } from "@/prismicio-types";
import { SlidePrismicRichText } from "../../../components/SlidePrismicRichText";

/**
 * Props for `Slide`.
 */
export type SlideProps = SliceComponentProps<Content.SlideSlice>;

/**
 * Component for "Slide" Slices.
 */

const layout = (slice: VideoSlideSlice) => {
  const altTextSection = (
    <div className="text-left flex flex-col justify-start w-1/2 overflow-clip px-4 pt-10 pb-4">
      <SlidePrismicRichText
        field={slice.primary.content}
      />
    </div>
  );

  const altMediaSection = (
    <div className="flex flex-col w-1/2 p-4 ">
      {slice.variation === "withVideo" && (
        <video
          className="w-full h-auto object-cover rounded-lg aspect-video"
          src={slice.primary.video_link}
          alt={slice.primary.video_thumbnail.alt}
          poster={
            isFilled.image(slice.primary.video_thumbnail)
              ? asImageSrc(slice.primary.video_thumbnail)
              : ""
          }
          controls
        ></video>
      )}

      {slice.variation === "withYoutubeVideo" && (
        <div
          id="youtube-video"
          className="h-full w-auto object-cover rounded-lg aspect-video"
          dangerouslySetInnerHTML={{
            __html: slice.primary.video_embed_link.html || "",
          }}
        />
      )}
    </div>
  );

  if (slice.primary.media_side) {
    return [altTextSection, altMediaSection];
  }
  if (!slice.primary.media_side) {
    return [altMediaSection, altTextSection];
  }
};

const VideoSlide = ({ slice }: {slice: VideoSlideSlice}): JSX.Element => {
  return (
    <>
      <div className="relative">
        <div className="overflow-hidden relative border border-silver-base shadow-sm px-10 mx-4 rounded-lg mt-16 mb-5 bg-quaternary-orange">
          <SlidePrismicRichText
            field={slice.primary.title}
          />
          <div className="flex flex-row w-full h-2/3 inset-0 mb-10 overflow-clip">
            {layout(slice)}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSlide;
