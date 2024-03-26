import { Content, asImageSrc, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";
import { VideoSlideSlice } from "@/prismicio-types";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-4xl font-bold font-sans mt-10 text-primary-orange">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-3xl font-semibold font-sans text-gray-base">
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-3xl font-semibold font-sans mb-2 text-secondary-orange">
      {children}
    </h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-2xl font-semibold font-sans mb-2 text-secondary-orange">
      {children}
    </h5>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl font-sans pb-2 text-gray-base">{children}</p>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2 text-xl list-inside text-gray-base">
      {children}
    </li>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2 text-xl list-inside text-gray-base">
      {children}
    </li>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="text-gray-base font-sans text-xl underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out"
    >
      {children}
    </PrismicNextLink>
  ),
  label: ({ node, children }) => {
    return (
      <>
        {node.data.label === "highlight" && (
          <span className="text-primary-orange font-semibold">{children}</span>
        )}
        {node.data.label === "inline code" && (
          <span className="px-2 py-1 bg-silver-light border border-silver-base font-mono rounded-md text-lg font-normal text-primary-orange">
            {children}
          </span>
        )}
      </>
    );
  },
};

/**
 * Props for `Slide`.
 */
export type SlideProps = SliceComponentProps<Content.SlideSlice>;

/**
 * Component for "Slide" Slices.
 */

const layout = (slice: VideoSlideSlice) => {

  const altTextSection = (
    <div className="text-left flex flex-col justify-start md:w-1/2 overflow-clip px-4 pt-10 pb-4 overflow-y-scroll">
      <PrismicRichText field={slice.primary.content} components={serializer} />
    </div>
  );

  const altMediaSection = (
    <div className="flex flex-col md:w-1/2 p-4 ">

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

const VideoSlide = ({ slice }: VideoSlideSlice): JSX.Element => {
  return (
    <>
      <div className="relative">
        <div className="overflow-hidden relative border border-silver-base shadow-sm px-10 mx-4 rounded-lg mt-16 mb-5 bg-quaternary-orange">
          <PrismicRichText
            field={slice.primary.title}
            components={serializer}
          />
          <div className="flex flex-col md:flex-row w-full h-2/3 inset-0 mb-10 overflow-clip">
            {layout(slice)}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSlide;
