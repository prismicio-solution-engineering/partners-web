import { Button } from "@/components/Button";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const CtaDefault = ({ slice }: { slice: Content.CallToActionSliceDefault }) => {
  return (
    <div className="bg-[#ffffff] text-[#171717] my-16 max-w-screen-xl mx-auto px-8">
      <div className="flex flex-col items-center px-6 py-16 border-2 border-gray-400 rounded-xl">
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
    </div>
  );
};

export default CtaDefault;
