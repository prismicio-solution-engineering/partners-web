import { PrismicRichText } from "@/components/PrismicRichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const serializer = {
  paragraph: ({ children }) => (
    <blockquote className="italic text-xl text-gray-darker">
      {children}
    </blockquote>
  ),
};

const TestimonialsSingle = async ({
  slice,
}: {
  slice: Content.TestimonialsSliceSingle;
}) => {
  return (
    <>
      <div className="bg-silver-light shadow rounded-lg p-8 md:p-12 max-w-screen-xl mx-auto my-16">
        <div className="flex justify-start mb-4">
          <PrismicNextImage
            className="h-12 object-contain"
            field={slice.primary.company_logo}
            width={148}
            height={48}
          />
        </div>
        <div className="mb-4 flex flex-col sm:flex-row sm:gap-8 mt-10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mb-4 shrink-0"
          >
            <path
              d="M10.895 5H6.528L2 18.639h8.14L10.895 5ZM22 5h-4.367l-4.528 13.639h8.14L22 5Z"
              fill="currentColor"
            ></path>
          </svg>
          <PrismicRichText
            field={slice.primary.quote}
            components={serializer}
          />
        </div>
        <div className="flex items-center mt-4">
          <div className="flex-shrink-0 mr-4">
            <PrismicNextImage
              field={slice.primary.author_image}
              className="h-16 w-16 rounded-full"
            />
          </div>
          <div className="flex-grow">
            <div className="text-lg font-sans font-bold text-gray-darker">
              {slice.primary.author_name}
            </div>
            <p className="text-sm font-sans text-primary-purple">
              {slice.primary.author_role} - {slice.primary.author_company}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSingle;
