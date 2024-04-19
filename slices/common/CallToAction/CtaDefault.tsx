import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const CtaDefault = ({ slice }: { slice: Content.CallToActionSliceDefault }) => {
  return (
    <Container className="bg-white">
      <div className="flex flex-col items-center text-center px-6 py-16 text-gray-darker border-2 border-silver-darker rounded-xl">
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
        <Button
          field={slice.primary.cta_link}
          variant={slice.primary.cta_type}
          color="black"
        >
          {slice.primary.cta_label}
        </Button>
      </div>
    </Container>
  );
};

export default CtaDefault;
