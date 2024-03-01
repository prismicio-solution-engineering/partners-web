import { Button } from "@/components/Button";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-left text-4xl font-sans font-bold text-[#171717] mb-6">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => <p className="text-left text-lg">{children}</p>,
};
const CtaTwoColumns = ({
  slice,
}: {
  slice: Content.CallToActionSliceTwoColumns;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-16 bg-[#E8F8F3] rounded-xl mt-16 max-w-screen-xl mx-auto">
      <div className="md:w-1/2 p-8">
        <PrismicRichText field={slice.primary.title} components={serializer} />
        <PrismicRichText
          field={slice.primary.description}
          components={serializer}
        />
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="flex gap-4">
          {slice.items.map((item, idx) => (
            <Button
              key={idx}
              field={item.cta_link}
              variant={item.cta_type}
              color="purple"
            >
              {item.cta_label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CtaTwoColumns;
