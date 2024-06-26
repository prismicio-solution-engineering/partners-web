import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const serializer = {
  heading2: ({ children }) => (
    <h2 className="text-left text-4xl font-headings font-bold text-gray-darker mb-6">
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
    <Container className="flex flex-col md:flex-row items-center justify-center bg-[#E8F8F3] rounded-xl">
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
    </Container>
  );
};

export default CtaTwoColumns;
